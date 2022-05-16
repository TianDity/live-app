import { createApp } from 'vue'
import App from './App.vue'
import 'uno.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleLeft, faAngleDown, faMagnifyingGlass, faMountainSun, faMedal, faLocationDot, faWallet, faCalendarDays, faCalendarCheck, faList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createPinia } from 'pinia'
import { router } from './router'

library.add(faAngleDown, faMagnifyingGlass, faAngleLeft, faMountainSun, faMedal, faLocationDot, faWallet, faCalendarDays, faCalendarCheck, faList)
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')
