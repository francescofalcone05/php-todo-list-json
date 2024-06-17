const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Lista cose da fare',
            toDoList: [],
            newTask: '',
            newObject: {},
            postRequestConfig: {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        }
    },
    methods: {
        changeStatus(index) {
            this.toDoList[index].status = !this.toDoList[index].status;
            console.log(this.toDoList[index].status);
        },

        addTask() {
            const newObject = { description: this.newTask, status: true };

            axios.post('../list.php', newObject, this.postRequestConfig).then(results => {
                console.log("Risultati: ", results.data);
                this.toDoList = results.data;
                // let i = 0
                // let risultato = results.data
                // while (i < risultato.length) {
                //     if (risultato[i].status == "true") {
                //         risultato[i].status = true
                //     }
                //     i++
                // }
                // this.toDoList = risultato;
            });

        }

        // addTask() {
        //     this.newObject = { description: this.newTask, status: false };
        //     console.log(this.newObject);
        //     this.toDoList.push(this.newObject)
        //     console.log(this.toDoList);
        // }
    },
    mounted() {
        axios.get('../list.php').then((response) => {
            this.toDoList = response.data;
        });

    }
}).mount('#app')