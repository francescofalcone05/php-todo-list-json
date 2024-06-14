const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Lista cose da fare'
        }
    },
    methods: {

    },
    mounted() {
        axios.get('../server.php').then((response) => {
            console.log(response.data);
        });

    }
}).mount('#app')