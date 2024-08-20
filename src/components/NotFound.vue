<template>
    <div class="not-found">
        <h1 :class="font.bold">404</h1>
        <h3>Page Not Found</h3>
        <RouterLink to="/home"><button>Go Home</button></RouterLink>
    </div>
</template>

<script setup lang="ts">
import font from "@/utilities/Font.module.css";
import { RouterLink } from "vue-router";
</script>

<style scoped>
.not-found {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 60vh;
    justify-content: center;
    align-items: center;
}

h1 {
    font-size: clamp(6rem, 23vw, 12rem);
    color: inherit;
}
h3 {
    font-size: clamp(1.3rem, 5vw, 2rem);
    color: rgb(148, 151, 157);
    font-weight: 400;
}

button {
    margin-top: 30px;
    background-color: var(--purple-color);
    border: none;
    color: white;
    font-weight: bold;
    border-radius: 10px;
    padding: 10px 15px;
    font-size: clamp(0.5rem, 20vw, 1rem);
}
</style>
