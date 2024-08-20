<template>
    <div class="option" :class="button.primaryBtn">
        <div class="icon-letter" :class="[letterBgColorClasses, icon.primaryIcon, redGreen(text)]">
            <span>{{ letter }}</span>
        </div>
        <span class="question-text">{{ text }}</span>
    </div>
</template>

<script setup lang="ts">
import icon from "@/utilities/Icon.module.css";

import button from "@/utilities/Button.module.css";
import { computed, watchEffect } from "vue";
const { letter, text, letterBgColor } = defineProps(["letter", "text", "letterBgColor", "redGreen"]);


const letterBgColorClasses = computed(() => {
  return {
    iconLetterSelectedBg: letterBgColor === text,
    iconLetterDefaultBg: letterBgColor !== text,

  };
});

</script>

<style scoped>
.option {
    box-sizing: border-box;
    background-color: var(--option-bg-color) !important;
    box-shadow: var(--box-shadow);
    border: 3px solid transparent;
    transition: border 0.3s ease;
}

.option:hover {
    border: 3px solid var(--purple-color);
}


.icon-letter {
    display: flex;
    justify-content: center;
    align-items: center;

}

.question-text {
    font-size: clamp(1rem, 5vw, 1.4rem);
}

.icon-letter span {
    color: rgba(60, 77, 103, 255);
}

.iconLetterSelectedBg {
    background-color: var(--purple-color);
}

.iconLetterDefaultBg {
    background-color: var(--letter-bg-color);
}

.green {
    background-color: green;
}

.red {
    background-color: red ;
}
</style>
