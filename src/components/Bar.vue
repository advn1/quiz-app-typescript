<template>
    <div class="bar-container">
        <div class="bar">
            <div :style="{ width: `${width}%` }" class="bar-purple"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { width } = defineProps({
    width: {
        type: Number,
        required: true,
    },
});
</script>

<style scoped>
.bar-container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}

.bar {
    width: 100%;
    height: 16px;
    position: relative;
    background-color: var(--option-bg-color);
    border-radius: 1000px;
    padding: 0 4px;
}

.bar-purple {
    position: absolute;
    top: 25%;
    height: 8px;
    background-color: var(--pink-color);
    border-radius: 1000px;
    transition: 0.3s ease;
}

@media (min-width: 1025px) {
    .bar-container {
        margin-top: 40px;
        margin-bottom: 0;
        width: 92%;
    }
}
</style>
