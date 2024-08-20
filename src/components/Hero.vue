<template>
    <div>
        <h1>
            <span :class="font.thin"
                >Welcome to the <br />
                <span :class="font.bold">Frontend Quiz!</span></span
            >
        </h1>
        <h4 :class="font.description">Pick a subject to get started</h4>
    </div>
</template>

<script setup lang="ts">
import font from "@/utilities/Font.module.css";
</script>

<style scoped>
div {
    margin-bottom: 30px;
}
h1 {
    font-size: clamp(38px, 10vw, 54px);
    max-width: 500px;
    margin-bottom: 30px;
}

h4 {
    font-size: clamp(12px, 5vw, 20px);
    max-width: 500px;
}

@media (min-width: 600px) {
    h1 {
        font-size: 64px;
    }
}

@media (min-width: 1025px) {
    div {
        width: 50%;
    }
}
</style>
