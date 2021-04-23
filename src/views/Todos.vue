<template>
    <div>
        <AddTask @add-task="addTask"/>
        <TodoList v-bind:tasks="tasks"
                  @remove-task="removeTask"
        />
        <router-link to="/">Home</router-link>

    </div>
</template>

<script>
    import TodoList from '../components/TodoList';
    import AddTask from '../components/AddTask';

    export default {
        name: 'App',
        data() {
            return{
                tasks: [
                    {id:1, title:'title one', done: false},
                    {id:2, title:'title two', done: false},
                    {id:3, title:'title three', done: false},
                ]
            }
        },
        components: {
            TodoList,
            AddTask

        },
        methods:{
            removeTask(id) {
                this.tasks = this.tasks.filter(task => task.id !== id)
            },
            addTask(newTask){
                this.tasks.push(newTask);
            }
        }
    }
</script>