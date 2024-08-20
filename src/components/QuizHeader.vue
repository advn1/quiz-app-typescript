<template>
    <div v-if="$route.params.name" class="icon-name-container">
        <div :class="[button[route.params.name as string], icon.primaryIcon]">
            <img
                class="quiz-img"
                :src="`/icon-${$route.params.name}.svg`"
                alt=""
            />
        </div>
        <span>{{ quizName }}</span>
    </div>
</template>

<script setup lang="ts">
import button from "@/utilities/Button.module.css";
import icon from "@/utilities/Icon.module.css";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const quizName = computed(() => {
    const name = route.params.name as string;
    if (["html", "css"].includes(name)) {
        return name.toUpperCase();
    } else {
        return name[0].toUpperCase() + name.slice(1);
    }
});
</script>

<style scoped>
.icon-name-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    width: 200px;
}

.icon-name-container span {
    font-size: clamp(1.2rem, 5vw, 1.4rem);
    font-weight: 600;
}

.quiz-img {
    width: 70%;
    height: 100%;
}
</style>
