import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faCalendar, faChartLine, faMoneyBill, } from '@fortawesome/free-solid-svg-icons'


library.add(faUser, faCalendar, faChartLine, faMoneyBill)

createApp(App).use(store).use(router).mount('#app')

app.component('font-awesome-icon', FontAwesomeIcon)
