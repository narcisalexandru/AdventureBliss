<template>
    <div class="flex justify-content-center align-items-center p-8 w-12">
        <div class="flex flex-column w-6 gap-3 blur-box p-8 border border-round">
            <h1 class="text-center text-3xl text-white">Contacteaza-ne</h1>
            <div class="flex flex-column text-white gap-1">
                <label for="username">Nume Prenume</label>
                <InputText id="username" v-model="username" />
            </div>
            <div class="flex flex-column text-white gap-1">
                <label for="email">Email</label>
                <InputText id="email" v-model="email" />
            </div>
            <div class="flex flex-column text-white gap-1">
                <label for="message">Ajutor si suport</label>
                <CustomTextarea id="message" v-model="message" rows="5" cols="30" />
            </div>
            <ButtonInputs
                class="bg-blue-900 border-transparent"
                type="button" 
                label="Trimite"
                :loading="loading" 
                @click="submitContactForm"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

const username = ref('');
const email = ref('');
const message = ref('');
const loading = ref(false);

const submitContactForm = async () => {
    try {
        loading.value = true;
        const contactData = {
            name: username.value,
            email: email.value,
            message: message.value,
        };

        await axios.post('http://localhost:8080/api/email/send', contactData);
        alert('Mesaj trimis cu succes!');
        resetForm();
    } catch (error) {
        console.error('Error sending contact message:', error);
        alert('Eroare la trimiterea mesajului. Te rugăm să încerci din nou.');
    } finally {
        loading.value = false;
    }
};

const resetForm = () => {
    username.value = '';
    email.value = '';
    message.value = '';
};
</script>

<style>
.blur-box {
    background-color: rgba(106, 117, 130, 0.2);
    backdrop-filter: blur(10px);
}
</style>
