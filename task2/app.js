const app = new Vue({
    el:'#app',
    data: {
        valueCurrent:'',
        value: ''
    },
    mounted() {
        if(localStorage.getItem('valueCurrent')) {
        try {
            this.valueCurrent = JSON.parse(localStorage.getItem('valueCurrent'));
        } catch(e) {
            localStorage.removeItem('valueCurrent');
        }
        }
    },

    methods: {
        addValue() {
            if(!this.value) return;
            this.valueCurrent = this.value;
            this.value = '';
            this.saveValue();
        },
        removeValue() {
            this.valueCurrent = '';
            this.saveValue();
        },
        saveValue() {
            let parsed = JSON.stringify(this.valueCurrent);
            localStorage.setItem('valueCurrent', parsed);
        }
    }
    })

