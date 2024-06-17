<template>
    <div class="flex flex-column gap-5 justify-content-center align-items-center">
        <div class="flex flex-row justify-content-center align-items-center gap-8">
            <div
                v-for="review in latestReviews" 
                :key="review.id" 
                class="flex flex-column justify-content-center align-items-center border border-round shadow-8 cards p-6 gap-5"
            >
                <h1 class="text-xl">{{ review.username }}</h1>
                <Rating 
                    v-model="review.rating"
                    readonly
                />
                <div class="text-lg">{{ review.comment }}</div>
            </div>
        </div>
        <div class="flex align-items-end justify-content-end">
            <Button label="Vezi toate recenziile" @click="goToAllReviews" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

interface Review {
    id: number;
    username: string;
    rating: number;
    comment: string;
}

const reviews = ref<Review[]>([]);
const latestReviews = ref<Review[]>([]);
const error = ref<string | null>(null);
const router = useRouter();

const fetchReviews = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/reviews');
        if (Array.isArray(response.data)) {
            reviews.value = response.data.filter(review => review.rating > 0);
            reviews.value.sort((a, b) => b.id - a.id);
            latestReviews.value = reviews.value.slice(0, 3);
        } else {
            throw new Error('Data format is incorrect');
        }
    } catch (err) {
        console.error('Failed to fetch reviews:', err);
        error.value = 'Failed to fetch reviews. Please try again later.';
    }
};

const goToAllReviews = () => {
    router.push({ name: 'all-reviews' });
};

onMounted(fetchReviews);

const handleReviewSubmitted = () => {
    fetchReviews();
};
</script>

<style>
.cards {
    color: #F9F6E7;
    background-color: #9bad7b;
    width: 350px;
    height: 400px;
}
</style>
