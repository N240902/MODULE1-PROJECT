import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import DashBoardView from '@/views/DashBoardView.vue'
import EmployeeView from '@/views/EmployeeView.vue'
import PayrollView from '@/views/PayrollView.vue'
import PerformanceView from '@/views/PerformanceView.vue'
import TimeOffView from '@/views/TimeOffView.vue'



const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/home',
    name: 'home',
    component: DashBoardView,
    children: [
      {
      path: 'employee',
      name: 'employee',
      component: EmployeeView
      },
      {
      path: 'payroll',
      name: 'payroll',
      component: PayrollView
      },
      {
      path: 'performance-metrics',
      name: 'performance-metrics',
      component: PerformanceView
      },
      {
      path: 'timeoff',
      name: 'timeoff',
      component: TimeOffView
      },
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
