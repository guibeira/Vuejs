<template>
    <div class="task">
        <template>
            <div v-for="task in tasks" :key="task.name">{{ task.name }}</div>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        tasks: {type: Array, required: true}
    }
}
</script>

<style>

</style>
