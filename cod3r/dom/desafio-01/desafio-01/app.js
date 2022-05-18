new Vue({
  el: '#desafio',
  data: {
    nome: 'Doggao',
    idade: 28,
    imgUrl: 'https://i.etsystatic.com/6945515/r/il/74e64b/1584597616/il_794xN.1584597616_7spu.jpg',
  },
  methods: {
    randomNumber() {
      return Math.random().toString()
    }
  }
})
