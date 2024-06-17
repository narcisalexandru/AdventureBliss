<template>
    <div class="overflow-hidden">
        <!-- Banner Section -->
        <div 
            class="flex align-items-start justify-content-center text-7xl pt-6 banner-text-color bg-cover bg-center h-30rem w-full" 
            :style="{ backgroundImage: `url(${course.image})` }"
        >
        </div>
    </div>
    <div class="flex text justify-content-center align-items-center m-4">
        <h1 class="text-6xl font-bold">{{ course.name }}</h1>
    </div>
    <div class="flex justify-content-start text align-items-center gap-8 w-12 h-screen p-8">
        <div class="max-w-4xl w-6 px-8 py-5 bg-color">
            <!-- Introduction Section -->
            <section class="mb-5">
                <p class="text-xl text-justify">{{ course.introduction }}</p>
            </section>
            <!-- Need Section -->
            <section class="mb-5">
                <h2 class="text-3xl font-semibold mb-4">Lucruri Necesare</h2>
                <ul class="list-disc pl-6 text-xl">
                    <li v-for="item in course.need" :key="item">{{ item }}</li>
                </ul>
            </section>
            <!-- Steps Section -->
            <section class="mb-5">
                <h2 class="text-3xl font-semibold mb-4">Pasi de urmat</h2>
                <ul class="list-disc pl-6 text-xl">
                    <li v-for="item in course.steps" :key="item">{{ item }}</li>
                </ul>
            </section>
            <section>
                <div class="text-md text-white">Pentru un tutorial mai complex accesează videoclipul</div>
            </section>
            <!-- External Link Section -->
            <section class="mb-5 flex justify-content-end align-items-end">
                <Button
                label="Vezi video"
                icon="pi pi-youtube"
                class="bg-green-900 border-none hover:bg-green-800" 
                @click="openLink(course.link)" 
                />
            </section>
            <section class="mb-5">
                <div class="text-md text-white-alpha-40 flex justify-content-start align-items-start">
                    Credite si multumiri: {{ course.credits }}
                </div>
            </section>
        </div>
        <div class="flex justify-content-center align-items-end w-6">
            <img :src="course.rightImage" alt="Camping foto" class="w-8 object-cover">
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';

import { curs1 } from '@/data/curs1';
import { curs2 } from '@/data/curs2';

interface Course {
    id: string;
    name: string;
    image: string;
    rightImage?: string;
    introduction: string;
    need: string[];
    steps: string[];
    link: string;
    credits: string;
}

export default defineComponent({
    name: 'CursuriView',
    setup() {
        const route = useRoute();

        const courses: Record<string, Course> = {
            'curs-1': curs1,
            'curs-2': curs2,
        };

        const courseId = computed(() => {
            const id = route.params.courseId;
            return Array.isArray(id) ? id[0] : id;
        });

        const course = computed(() => courses[courseId.value as string] || {
            id: '',
            name: '',
            image: '',
            rightImage: '',
            introduction: '',
            need: [],
            steps: [],
            link: '',
            credits: ''
        });

        const openLink = (link: string) => {
            window.open(link, '_blank');
        };

        return {
            courseId,
            course,
            openLink
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
.bg-color {
    background-color: rgba(0, 0, 0, 0.3);
    border: solid transparent;
    border-radius: 5%;
}
</style>
