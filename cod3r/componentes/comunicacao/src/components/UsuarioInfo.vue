<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuário <strong>{{ inverterNome() }}</strong></p>
        <button @click="reiniciaNome">Reinicia Nome</button>
    </div>
</template>

<script>
import barramento from '@/barramento'
export default {
    props: {
        // nome: [String, Array] pode-se passar vários tipos
        // nome: String
        nome : {
            type: String,
            required: true,
            default: 'Anonimo'
            // default: function(){
            //     return Array(10).fill(0).join(',')
            // }
        }
    },
    methods: {
        inverterNome(){
            return this.nome.split('').reverse().join('')
        },
        reiniciaNome(){
            const antigo = this.nome
            this.nome = 'Pedro'
            this.$emit('nomeMudou', {
                novo: this.nome,
                antigo: antigo,
            })
        }
    },
    created(){
        barramento.quadoIdadeMudar(idade=>{
            this.idade = idade
        })
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
