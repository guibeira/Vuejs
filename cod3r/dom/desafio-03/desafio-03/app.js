new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    computed: {
        resultado() {

            return this.valor == 37 ? 'Valor Igua' : 'Valor Diferente'
        }
    },
    watch: {
        resultado(novo, antigo) {
            setTimeout(() => {
                this.valor = 0
            }, 2000)
        }
    },

});