<template>
    <div class="theme-menu">
        <i class="bx bx-sun"></i>
        <div
            @click.prevent="toggleTheme"
            :class="[circlePosition, `switch-container`]"
        >
            <div class="circle"></div>
        </div>
        <i class="bx bx-moon"></i>
    </div>
</template>

<script setup lang="ts">
import { computed, PropType, ref } from "vue";

const { isDark, toggleDark } = defineProps({
    isDark: {
        type: Boolean,
        required: true,
    },
    toggleDark: {
        type: Function as PropType<() => void>,
        required: true,
    },
});

const clicked = ref(isDark ? false : true);

function toggleTheme() {
    clicked.value = !clicked.value;
    toggleDark();
}

const circlePosition = computed(() => {
    return {
        circlePositionRight: clicked.value,
        circlePositionLeft: !clicked.value,
    };
});
</script>

<style scoped>
.theme-menu {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    gap: 7px;
    align-items: center;
}

.switch-container {
    width: 60px;
    height: 30px;
    border-radius: 20px;
    background-color: var(--purple-color);
    position: relative;
    display: flex;
    align-items: center;
    padding: 0 4px;
}

i {
    font-size: 1.5rem;
}

.circle {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 25px;
}

.circlePositionRight {
    justify-content: flex-end;
}

.circlePositionLeft {
    justify-content: flex-start;
}
</style>
