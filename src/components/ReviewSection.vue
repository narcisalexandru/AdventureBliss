<template>
    <div class="flex flex-column gap-5 justify-content-center align-items-center section-background-text-color h-screen">
        <div class="flex flex-column text-center justify-content-center align-items-center">
            <h1 class="text-xl">Lasa-ne o recenzie!</h1>
            <h2 class="text-lg">Parerea ta conteaza si ne ajuta sa ne imbunatatim serviciile</h2>
        </div>
        <div class="bg-black-alpha-30 border border-round w-10 flex gap-8 justify-content-center align-items-center h-20rem">
            <div class="flex flex-column justify-content-center align-items-start gap-4">
                <div class="flex flex-column gap-2 text-lg">
                    <label for="nume">Nume Prenume</label>
                    <InputText 
                    type="text"
                    v-model="nume"
                    />
                </div>
                <div class="flex flex-column gap-2 text-lg">
                    <label for="rating">Da-ne o nota de la 1 la 5</label>
                    <Rating v-model="value" />
                </div>
            </div>
            <div class="flex flex-column gap-2 text-lg">
                <label for="text">Lasa si un mesaj pentru noi.</label>
                <Textarea v-model="value" rows="5" cols="30" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const nume = ref(null);
</script>

<style>
.section-background-text-color {
    background: rgb(35,62,47);
    background: radial-gradient(circle, rgba(83,111,96,1) 0%, rgba(35,62,47,1) 87%);
    color: #F9F6E7;
}
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
        