<template>
    <div class="flex flex-column flex-wrap gap-5 justify-content-center align-items-center p-8">
        <h1 class="text-white text-6xl">Parerile utilizatorilor nostri</h1>
        <div class="flex flex-row flex-wrap gap-5 justify-content-center align-items-center px-8">
            <div 
                v-for="review in reviews" 
                :key="review.id" 
                class="flex flex-column justify-content-between align-items-center border border-round shadow-8 cards p-6 gap-5"
            >
                <h1 class="text-xl">{{ review.username }}</h1>
                <Rating 
                    v-model="review.rating"
                    readonly 
                    :cancel="false"
                />
                <div class="text-lg">{{ review.comment }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

interface Review {
    id: number;
    username: string;
    rating: number;
    comment: string;
}

const reviews = ref<Review[]>([]);
const error = ref<string | null>(null);

const fetchReviews = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/reviews');
        
        if (Array.isArray(response.data)) {
            reviews.value = response.data.filter((review: Review) => review.rating !== null && review.rating !== undefined);
        } else {
            console.error('Data format is incorrect:', response.data);
            throw new Error('Data format is incorrect');
        }
    } catch (err) {
        console.error('Failed to fetch reviews:', err);
        error.value = 'Failed to fetch reviews. Please try again later.';
    }
};

onMounted(fetchReviews);
</script>

<style>
.cards {
    color: #F9F6E7;
    background-color: #9bad7b;
    width: 350px;
    height: 400px;
}
</style>
