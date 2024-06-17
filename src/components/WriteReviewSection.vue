<template>
    <div class="flex flex-column gap-5 justify-content-center align-items-center">
        <div class="flex flex-column text-center justify-content-center align-items-center">
            <h1 class="text-xl">Lasa-ne o recenzie!</h1>
            <h2 class="text-lg">Parerea ta conteaza si ne ajuta sa ne imbunatatim serviciile</h2>
        </div>
        <div class="bg-black-alpha-30 border border-round w-12 mx-8 mb-8 flex gap-8 justify-content-center align-items-center h-20rem">
            <div class="flex flex-column justify-content-center align-items-start gap-4">
                <div class="flex flex-column gap-2 text-lg">
                    <label for="nume">Nume Prenume</label>
                    <InputText type="text" v-model="nume" />
                </div>
                <div class="flex flex-column gap-2 text-lg">
                    <label for="rating">Da-ne o nota de la 1 la 5</label>
                    <Rating v-model="rating" />
                </div>
            </div>
            <div class="flex flex-column gap-2 text-lg">
                <label for="text">Lasa si un mesaj pentru noi.</label>
                <CustomTextarea v-model="comment" rows="3" cols="30" />
                <Button label="Trimite recenzia" @click="submitReview" />
            </div>
        </div>
        <div v-if="message" :class="{'text-red-500': !success, 'text-green-500': success}" class="mt-4">
            {{ message }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import axios from 'axios';

const nume = ref('');
const rating = ref(0);
const comment = ref('');
const message = ref('');
const success = ref(false);

const emit = defineEmits(['reviewSubmitted']);

const submitReview = async () => {
    try {
        const review = {
            username: nume.value,
            rating: rating.value,
            comment: comment.value
        };
        
        const response = await axios.post('http://localhost:8080/api/reviews', review);
        
        if (response.status === 200) {
            message.value = 'Recenzia a fost trimisă cu succes!';
            success.value = true;
            resetForm();
            emit('reviewSubmitted');
        } else {
            throw new Error('Failed to submit review');
        }
    } catch (error) {
        console.error('Failed to submit review:', error);
        message.value = 'A apărut o eroare la trimiterea recenziei. Vă rugăm să încercați din nou.';
        success.value = false;
    }
};

const resetForm = () => {
    nume.value = '';
    rating.value = 0;
    comment.value = '';
};
</script>

<style>
.p-rating .p-rating-item .p-rating-icon.p-rating-cancel {   
    display: none;
}
.p-rating .p-rating-item .p-rating-icon.p-icon {
    width: 1.5rem;
    height: 1.5rem;
}

.p-inputtext {
    background-color: #9bad7b;
}
</style>
