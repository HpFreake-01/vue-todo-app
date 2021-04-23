<template>
    <ul>
        <TodoTask
                v-for="(task, index) of tasks"
                v-bind:index="index"
                v-bind:task="task"
                v-on:remove-task="removeTask"
        />
    </ul>
</template>

<script>
import TodoTask from '@/components/TodoTask'
export default {
    props:['tasks'],
    components: {
        TodoTask
    },
    methods:{
        removeTask(id){
            this.$emit('remove-task', id)
        }
    }
}
</script>

<style scoped>
    ul{
        list-style: none;
        margin: 0;
        padding: 0;
    }
</style>

