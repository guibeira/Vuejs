new Vue({
	el: '#desafio',
	data: {
		troca: false,
		classeCss: '',
		fazRodar: 'spinner',
		clareadorFundo: 'fundoClaro',
		input1: '',
		input2: '',
		troca2: false,
		troca3: false,
		width : '0%',
	},
	methods: {
		iniciarEfeito() {
			this.classeCss = this.troca ? 'destaque': 'encolher'
			this.troca = !this.troca
		},
		iniciarProgresso() {
			let valor = 0
			const temporizador = setInterval(() =>{
				valor +=5
				this.width = `${valor}%`
				if(valor == 100) clearInterval(temporizador)
			},1000)
			
		},

	},
	watch: {
		input1(novo, velho){
			if(novo == 'true'){
				this.troca2 = true
			}
			if(novo == 'false')
				this.troca2 = false
		},
		input2(novo, velho){
			if(novo == 'true'){
				this.troca3 = true
			}
			if(novo == 'false')
				this.troca3 = false
			}
	},
})
