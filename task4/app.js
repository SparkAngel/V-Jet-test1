const app = new Vue({
    el:'#app',
    data: {
        loadData: [],
    },
    mounted() {

    },

    methods: {
        fetchItems() {
                fetch("http://54.39.188.42/")
                    .then(response => Buffer.from(response, 'base64').toString('ascii'))
                   
                    .then(data => this.loadData = data)
                    
                    .catch(error => console.error(error))
        }
    }
    })

