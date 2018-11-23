import Vue from 'vue'
import Router from 'vue-router'

import Main from 'View/Main'
import Homepage from 'View/Homepage'
import Mine from 'View/Mine'

import Upcoming from "Upcoming/Upcoming"
import Application from "Application/Application"
import ProcessStart from "ProcessStart/ProcessStart"
import EqMonitoring from 'EqMonitoring/EqMonitoring'

import ApplicationProcess from 'business/ApplicationProcess'
import Knowledge from 'business/Knowledge'
import Report from 'business/Report'
import  ChangePassword from 'Mine/ChangePassword'
Vue.use(Router);

export default new Router({
  routes: [
      {
          path: "/",
          name: "Main",
          component: Main,
          redirect: '/Homepage',
          children: [
              {
                  path: "/Homepage",
                  name: "Homepage",
                  component: Homepage
              },{
                  path: "/Mine",
                  name: "Mine",
                  component: Mine,
              },{
                  path: "/Upcoming",
                  name: "Upcoming",
                  component: Upcoming
              },{
                  path: "/Application",
                  name: "Application",
                  component: Application
              },{
                  path: "/ProcessStart",
                  name: "ProcessStart",
                  component: ProcessStart
              },{
                  path: "/ChangePassword",
                  name: "ChangePassword",
                  component: ChangePassword,
              }
          ]
      },
      {
          path: '/ApplicationProcess',
          name: 'ApplicationProcess',
          component: ApplicationProcess
      }, {
          path: '/Knowledge',
          name: 'Knowledge',
          component: Knowledge
      },{
          path: "/EqMonitoring",
          name: "EqMonitoring",
          component: EqMonitoring
      },{
          path: "/Report",
          name: "Report",
          component: Report
      }

  ]
})
