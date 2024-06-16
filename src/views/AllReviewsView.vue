<template>
    <div class="flex flex-column gap-5 justify-content-center align-items-center section-background-text-color h-screen">
        <div 
            v-for="review in reviews" 
            :key="review.id" 
            class="flex flex-column justify-content-center align-items-center border border-round shadow-8 cards p-6 gap-5"
        >
            <h1 class="text-xl">{{ review.username }}</h1>
            <Rating 
                :value="review.rating"
                readonly 
                :cancel="false"
            />
            <div class="text-lg">{{ review.comment }}</div>
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
        
        // Verificăm dacă response.data este un array
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

<style scoped>
.section-background-text-color {
    background: rgb(35,62,47);
    background: radial-gradient(circle, rgba(83,111,96,1) 0%, rgba(35,62,47,1) 87%);
    color: #F9F6E7;
}

.cards {
    background-color: #9bad7b;
    width: 30%;
}
</style>
