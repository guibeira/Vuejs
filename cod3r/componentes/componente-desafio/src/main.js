import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Carrosel from './components/widgets/Carrossel.vue'
import ItensMenu from './components/template/ItensMenu.vue'

Vue.config.productionTip = false
Vue.component('carrosel', Carrosel)
Vue.component('dashboard', ItensMenu)

new Vue({
  render: h => h(App),  
}).$mount('#app')
