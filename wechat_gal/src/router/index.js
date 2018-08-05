import Vue from 'vue'
import Router from 'vue-router'
import AdminList from '@/components/pages/AdminList'
import LoveExperience from '@/components/pages/LoveExperience'
import DregsExperience from '@/components/pages/DregsExperience'
import KiraCampus from '@/components/pages/KiraCampus'
import Kamisama from '@/components/pages/Kamisama'

import AddAdmin from '@/components/pages/add_new/AddAdmin'
import AddLoveExp from '@/components/pages/add_new/AddLoveExp'
import AddDregsExp from '@/components/pages/add_new/AddDregsExp'
import AddKiraCampus from '@/components/pages/add_new/AddKiraCampus'
import AddKamisama from '@/components/pages/add_new/AddKamisama'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/admin_management',
      name: 'AdminList',
      component: AdminList,
    },
    {
      path: '/admin_management/add_new',
      name: 'AddAdmin',
      component: AddAdmin,
    },

    {
      path: '/simulation/love_experience',
      name: 'LoveExperience',
      component: LoveExperience
    },
    {
      path: '/simulation/love_experience/add_new',
      name: 'AddLoveExp',
      component: AddLoveExp
    },

    {
      path: '/simulation/dregs_experience',
      name: 'DregsExperience',
      component: DregsExperience
    },
    {
      path: '/simulation/dregs_experience/add_new',
      name: 'AddDregsExp',
      component: AddDregsExp
    },

    {
      path: '/chapter/kira_campus',
      name: 'KiraCampus',
      component: KiraCampus
    },
    {
      path: '/chapter/kira_campus/add_new',
      name: 'AddKiraCampus',
      component: AddKiraCampus
    },

    {
      path: '/chapter/kamisama',
      name: 'Kamisama',
      component: Kamisama
    },
    {
      path: '/chapter/kamisama/add_new',
      name: 'AddKamisama',
      component: AddKamisama
    },
  ]
})
