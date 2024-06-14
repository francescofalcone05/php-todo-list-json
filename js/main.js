const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Lista cose da fare',
            toDoList: [],
            newTask: '',
            newObject: {},
        }
    },
    methods: {
        changeStatus(index) {
            this.toDoList[index].status = !this.toDoList[index].status;
            console.log(this.toDoList[index].status);
        },

        addTask() {
            this.newObject = { description: this.newTask, status: false };
            console.log(this.newObject);
            this.toDoList.push(this.newObject)
            console.log(this.toDoList);
        }
    },
    mounted() {
        axios.get('../server.php').then((response) => {
            this.toDoList = response.data;
        });

    }
}).mount('#app')