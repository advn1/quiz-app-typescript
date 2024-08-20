<template>
    <div class="app-container">
        <div class="header">
            <QuizHeader />
            <ThemeSwitcher :isDark="isDark" :toggleDark="toggleDark" />
        </div>
        <RouterView />
    </div>
</template>

<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";

import { onMounted } from "vue";
import ThemeSwitcher from "./components/ThemeSwitcher.vue";
import { useQuizStore } from "./store/store";
import QuizHeader from "./components/QuizHeader.vue";

const isDark = useDark({
    selector: "body",
    attribute: "theme",
    valueDark: "custom-light",
    valueLight: "custom-dark",
});
const toggleDark = useToggle(isDark);

const store = useQuizStore();

onMounted(async () => {
    try {
        store.data = await store.getData();
    } catch (err) {
        console.log("Error fetching data: ", err);
    } finally {
        store.loading = false;
    }
});
</script>

<style>
:root {
    --pink-color: rgb(243, 74, 243);
    --purple-color: rgb(149, 48, 243);
    --dark-option-bg-color: rgb(60, 76, 100);
    --dark-app-bg-color: rgba(49, 62, 81, 255);
    --dark-bar-bg-color: rgba(60, 77, 102, 255);
    --white-color: white;
    --black-color: rgb(49 62 81);
    --light-letter-bg-color: rgb(244 246 250);
    --light-box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

[theme="custom-dark"] {
    --option-bg-color: rgb(60, 76, 100);
    --letter-bg-color: white;
    --box-shadow: none;
    color: #ffffff;
    background-color: rgba(49, 62, 81, 255);
}

[theme="custom-light"] {
    --option-bg-color: var(--white-color);
    --letter-bg-color: var(--light-letter-bg-color);
    --box-shadow: var(--light-box-shadow);
    color: rgb(49 62 81);
    background-color: rgb(246, 246, 246);
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    color: white;
    font-family: "Roboto", sans-serif;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

.app-container {
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    transition: padding 0.2s ease;
    max-width: 1280px;
    padding: 0 1.5rem;
}

.header {
    display: flex;
    align-items: center;
    padding-top: 50px;
    padding-bottom: 60px;
}

@media (min-width: 1025px) {
    .app-container {
        padding: 0 3rem;
        padding-bottom: 6rem;
    }
    .header {
        padding-bottom: 100px;
    }
}
</style>
