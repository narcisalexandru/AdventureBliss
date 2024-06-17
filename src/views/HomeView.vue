<template>
    <HomePageContent />
    <section class="px-10">
        <DespreNoi />
    </section>
</template>

<script setup lang="ts">
import HomePageContent from "@/components/HomePageContent.vue";
import DespreNoi from "@/components/DespreNoi.vue";
</script>


<style>
.px-10 {
    padding-left: 10rem;
    padding-right: 10rem;
}
</style>