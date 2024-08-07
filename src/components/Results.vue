<template>
    <h3>You scored {{ count }} out of {{ length }}</h3>
</template>

<script setup lang="ts">

const props = defineProps(["count", "length"])
</script>