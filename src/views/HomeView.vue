<template>
    <HomePageContent />
    <section class="px-10">
        <DespreNoi />
        <!-- <ReadReviewSection /> -->
        <!-- <WriteReviewSection /> -->
    </section>
</template>

<script setup lang="ts">
import HomePageContent from "@/components/HomePageContent.vue";
import DespreNoi from "@/components/DespreNoi.vue";
import WriteReviewSection from "@/components/WriteReviewSection.vue";
import ReadReviewSection from "@/components/ReadReviewSection.vue";
</script>


<style>
.px-10 {
    padding-left: 10rem;
    padding-right: 10rem;
}

</style>