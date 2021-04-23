<template>
    <li>
        <span v-bind:class="{done: task.done}">
            <input type="checkbox" v-on:change="task.done = !task.done"/>
            <strong>{{index}}</strong>
            {{task.title}}
        </span>
        <button v-on:click="$emit('remove-task', task.id)">&times;</button>
    </li>
</template>

<script>
export default {
    props:{
        task:{
            type: Object,
            required: true
        },
        index:Number
    }
}
</script>
<style>
    .done{
        text-decoration: line-through;
    }
</style>
