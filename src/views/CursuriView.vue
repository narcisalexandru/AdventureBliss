<template>
    <div class="overflow-hidden">
        <!-- Banner Section -->
        <div 
            class="flex align-items-start justify-content-center text-7xl pt-6 banner-text-color bg-cover bg-center h-30rem w-full" 
            :style="{ backgroundImage: `url(${course.image})` }"
        >
            <div>{{ course.name }}</div>
        </div>
    </div>
    <div class="flex justify-content-start text align-items-center gap-8 w-12 h-screen p-8">
        <div class="max-w-4xl w-6 pl-8">
            <!-- Introduction Section -->
            <section class="mb-5">
                <h1 class="text-3xl font-bold mb-4">{{ course.name }}</h1>
                <p>{{ course.introduction }}</p>
            </section>
            <!-- Need Section -->
            <section class="mb-5">
                <h2 class="text-2xl font-semibold mb-4">Lucruri Necesare</h2>
                <ul class="list-disc pl-5">
                    <li v-for="item in course.need" :key="item">{{ item }}</li>
                </ul>
            </section>
            <!-- Steps Section -->
            <section class="mb-5">
                <h2 class="text-2xl font-semibold mb-4">Lucruri Necesare</h2>
                <ul class="list-disc pl-5">
                    <li v-for="item in course.steps" :key="item">{{ item }}</li>
                </ul>
            </section>
            <!-- External Link Section -->
            <section class="mb-5">
                <h2 class="text-2xl font-semibold mb-4">Resurse Externe</h2>
                <a :href="course.link" target="_blank" class="text-blue-500 hover:underline">Click aici pentru mai multe informații</a>
            </section>
        </div>
        <div class="flex justify-content-end align-items-end w-6">
            <!-- Image for right part -->
            <img :src="course.rightImage" alt="Right Part Image" class="h-full w-full object-cover">
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';

import { shelter } from '@/data/shelter';
import { curs2 } from '@/data/curs2';

export default defineComponent({
    name: 'CursuriView',
    setup() {
        const route = useRoute();

        const courses = {
            'shelter': shelter,
            'curs-2': curs2,
            // Adaugă mai multe cursuri aici
        };

        const courseId = computed(() => route.params.courseId);
        const course = computed(() => courses[courseId.value] || { id: '', name: '', image: '', rightImage: '', introduction: '', need: [], steps: '', link: '' });

        return {
            courseId,
            course
        };
    }
});
</script>

<style scoped>
.banner-size {
    height: 778px;
}
.banner-text-color {
    color: #233E2F;
    font-weight: 800;
}

.text {
   color: #F9F6E7;
}
</style>
