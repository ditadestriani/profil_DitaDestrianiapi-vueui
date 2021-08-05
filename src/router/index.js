import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/profils/Home.vue'
import Createprofils from '../views/profils/Createprofils.vue'
import Editprofils from '../views/profils/Editprofils.vue'
import Detailprofils from '../views/profils/Detailprofils.vue'
import Historys from '../views/historys/Historys.vue'
import Detailhistorys from '../views/historys/Detailhistorys.vue'
import Createhistorys from '../views/historys/Createhistorys.vue'
import Edithistorys from '../views/historys/Edithistorys.vue'
import Pengalamans from '../views/pengalamans/Pengalamans.vue'
import Createpengalamans from '../views/pengalamans/Createpengalamans.vue'
import Editpengalamans from '../views/pengalamans/Editpengalamans.vue'
import Detailpengalamans from '../views/pengalamans/Detailpengalamans.vue'
import Kontaks from '../views/kontaks/Kontaks.vue'
import Createkontaks from '../views/kontaks/Createkontaks.vue'
import Editkontaks from '../views/kontaks/Editkontaks.vue'
import Detailkontaks from '../views/kontaks/Detailkontaks.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/createprofils',
    name: 'Createprofils',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createprofils
  },
  {
    path: '/editprofils/:id',
    name: 'Editprofils',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editprofils
  },
  {
    path: '/detailprofils/:id',
    name: 'Detailprofils',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Detailprofils
  },
  {
    path: '/historys',
    name: 'Historys',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Historys
  },
  {
    path: '/detailhistorys/:id',
    name: 'Detailhistorys',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Detailhistorys
  },
  {
    path: '/createhistorys',
    name: 'Createhistorys',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createhistorys
  },
  {
    path: '/edithistorys/:id',
    name: 'Edithistorys',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Edithistorys
  },
  {
    path: '/pengalamans',
    name: 'Pengalamans',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Pengalamans
  },
  {
    path: '/createpengalamans',
    name: 'Createpengalamans',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createpengalamans
  },
  {
    path: '/editpengalamans/:id',
    name: 'Editpengalamans',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editpengalamans
  },
  {
    path: '/detailpengalamans/:id',
    name: 'Detailpengalamans',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Detailpengalamans
  },
  {
    path: '/kontaks',
    name: 'Kontaks',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Kontaks
  },
  {
    path: '/createkontaks',
    name: 'Createkontaks',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createkontaks
  },
  {
    path: '/editkontaks/:id',
    name: 'Editkontaks',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editkontaks
  },
  {
    path: '/detailkontaks/:id',
    name: 'Detailkontaks',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Detailkontaks
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router