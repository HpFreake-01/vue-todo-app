<template>
    <form @submit.prevent="onSubmit">
        <input type="text" v-model="title"/>
        <button type="submit">Add</button>
    </form>
</template>

<script>
export default {
    data(){
        return{
            title:''
        }
    },
    methods:{
        onSubmit(){
            console.log(this.title)
            if (this.title.trim()) {
                const newTask = {
                    id: Date.now(),
                    title: this.title,
                    done: false
                }
                this.$emit('add-task', newTask);
                this.title = '';
            }
        }
    }
}
</script>