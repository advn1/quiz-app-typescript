<template>
    <div class="container">
        <Hero />
        <QuizesList />
    </div>
</template>

<script setup lang="ts">
import QuizesList from "./QuizesList.vue";
import Hero from "./Hero.vue";
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    width: 100%;
}

@media (min-width: 1025px) {
    .container {
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
        padding: 0 3rem;
    }
}
</style>
