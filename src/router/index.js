import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index'
import Iron from '../components/Iron'

import Dashboard from '../components/dashboard/Dashboard'

import Diagnosis from '../components/diagnosis/Diagnosis'
import Threat_info from '../components/diagnosis/Threat-info'
import Threat_PC from '../components/diagnosis/Threat-pc'

import Search from '../components/search/Search'
import Files from '../components/search/Search-file'
import Process from '../components/search/Search-process'
import Network from '../components/search/Search-network'
import Detailed_analysis from '../components/search/Search-analysis'

import Security from '../components/security/Security'
import Media_access from '../components/security/Security-media'
import User_account from '../components/security/Security-account'

import Property from '../components/property/Property'
import SW_info from '../components/property/Property-sw'
import HW_info from '../components/property/Property-hw'
import Sensor_info from '../components/property/Property-sensor'

import System from '../components/system/System'
import Admin_set from '../components/system/System-admin'
import Secsor_set from '../components/system/System-sensor'
import Enviroment_set from '../components/system/System-enviroment'
import Log from '../components/system/System-log'
import Response from '../components/system/System-response'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Iron',
      component: Iron,
      children: [
        {
          path: '/',
          redirect: 'Dashboard'
        },
        {
          path: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'Diagnosis',
          component: Diagnosis,
          children: [
            {
              path: '/',
              redirect: 'Threat_info'
            },
            {
              path: 'Threat_info',
              component: Threat_info
            },
            {
              path: 'Threat_PC',
              component: Threat_PC
            }
          ]
        },
        {
          path: 'Search',
          component: Search,
          children: [
            {
              path: '/',
              redirect: 'Files'
            },
            {
              path: 'Files',
              component: Files
            },
            {
              path: 'Process',
              component: Process
            },
            {
              path: 'Network',
              component: Network
            },
            {
              path: 'Detailed_analysis',
              component: Detailed_analysis
            }
          ]
        },
        {
          path: 'Security',
          component: Security,
          children: [
            {
              path: '/',
              redirect: 'Media_access'
            },
            {
              path: 'Media_access',
              component: Media_access
            },
            {
              path: 'User_account',
              component: User_account
            }
          ]
        },
        {
          path: 'Property',
          component: Property,
          children: [
            {
              path: '',
              redirect: 'SW_info'
            },
            {
              path: 'SW_info',
              component: SW_info
            },
            {
              path: 'HW_info',
              component: HW_info
            },
            {
              path: 'Sensor_info',
              component: Sensor_info
            }
          ]
        },
        {
          path: 'System',
          component: System,
          children: [
            {
              path: '/',
              redirect: 'Admin_set'
            },
            {
              path: 'Admin_set',
              component: Admin_set
            },
            {
              path: 'Secsor_set',
              component: Secsor_set
            },
            {
              path: 'Enviroment_set',
              component: Enviroment_set
            },
            {
              path: 'Log',
              component: Log
            },
            {
              path: 'Response',
              component: Response
            }
          ]
        }
      ]
    }
  ],
  mode: 'history'
})
