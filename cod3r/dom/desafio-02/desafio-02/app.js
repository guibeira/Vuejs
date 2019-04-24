new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        showAlert(){
            alert('vc clicou!')
        },
        saveTarget(e){
            this.valor = e.target.value
        }
    }
})