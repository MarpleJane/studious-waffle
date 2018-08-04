import Vue from 'vue'
import Router from 'vue-router'
import AdminList from '@/components/pages/AdminList'
import LoveExperience from '@/components/pages/LoveExperience'
import DregsExperience from '@/components/pages/DregsExperience'
import KiraCampus from '@/components/pages/KiraCampus'
import Kamisama from '@/components/pages/Kamisama'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AdminList',
      component: AdminList
    },
    {
      path: '/simulation/love_experience',
      name: 'LoveExperience',
      component: LoveExperience
    },
    {
      path: '/simulation/dregs_experience',
      name: 'DregsExperience',
      component: DregsExperience
    },
    {
      path: '/chapter/kira_campus',
      name: 'KiraCampus',
      component: KiraCampus
    },
    {
      path: '/chapter/kamisama',
      name: 'Kamisama',
      component: Kamisama
    },
  ]
})
