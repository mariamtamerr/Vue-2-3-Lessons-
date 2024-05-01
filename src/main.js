import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createMemoryHistory } from 'vue-router'
import bindingBasics from '@/components/binding-basics.vue'
import VifElseifElseShow from '@/components/vif-elseif-else-show.vue'
import ListRendering from './components/list-rendering.vue'
import MethodsIntro from './components/methods-intro.vue'
import EventHandling from './components/EventHandling.vue'
import FormHandlingModifiers from './components/FormHandling&Modifiers.vue'
import EmitCustomEvents from './components/EmitCustomEvents.vue'
import HTTP_GETPOST from './components/HTTP_GET&POST.vue'
import LifeCycleParent from './components/LifeCycleParent.vue'
import TemplateRefs from './components/TemplateRefs.vue'
import CompositionApi from './components/CompositionApi.vue'
import CompositionApi2 from './components/CompositionApi2.vue'
import CompositionApi3 from './components/CompositionApi3.vue'
import CompositionApi5 from './components/CompositionApi5.vue'
import CompositionApi6 from './components/CompositionApi6.vue'
import PropsProvideInjectEmit from './components/Props&Provide&Inject&Emit.vue'
import WatchersLessons from './components/WatchersLessons.vue'
// import RouterParent from './components/RouterParams/RouterParent.vue'
// import RouterParams from './components/RouterParams/RouterParams.vue'

const routes = [
  { path: '/binding-basics', name: 'bindingBasics', component: bindingBasics },
  { path: '/if-elseif-else-show', name: 'VifElseifElseShow', component: VifElseifElseShow },

  {
    path: '/list-rendering',
    name: 'listRendering',
    component: ListRendering
  },
  {
    path: '/methods-intro',
    name: 'methodsIntro',
    component: MethodsIntro
  },
  {
    path: '/event-handling',
    name: 'eventHandling',
    component: EventHandling
  },
  {
    path: '/form-handling-modifiers',
    name: 'formHandlingModifiers',
    component: FormHandlingModifiers
  },
  {
    path: '/watchers-lessons',
    name: 'WatchersLessons',
    component: WatchersLessons
  },
  {
    path: '/props-lessons',
    name: 'propsLessons',
    component: PropsProvideInjectEmit
  },
  {
    path: '/emit-custom-events',
    name: 'emitCustomEvents',
    component: EmitCustomEvents
  },
  {
    path: '/http-get',
    name: 'httpGet',
    component: HTTP_GETPOST
  },
  {
    path: '/life-cycle-parent',
    name: 'lifeCycleParent',
    component: LifeCycleParent
  },
  {
    path: '/template-refs',
    name: 'templateRefs',
    component: TemplateRefs
  },
  {
    path: '/composition-api',
    name: 'compositionApi',
    component: CompositionApi
  },
  {
    path: '/composition-api2',
    name: 'compositionApi2',
    component: CompositionApi2
  },
  {
    path: '/composition-api3',
    name: 'compositionApi3',
    component: CompositionApi3
  },
  {
    path: '/composition-api5',
    name: 'compositionApi5',
    component: CompositionApi5
  },
  {
    path: '/composition-api6',
    name: 'compositionApi6',
    component: CompositionApi6
  },
  // {
  //   path: '/router',
  //   name: 'routerParent',
  //   component: RouterParent,
  // }, 
  // {
  //   path: '/router/:id',
  //   name: 'routerParams',
  //   component: RouterParams,
  // },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

createApp(App).use(router).mount('#app')
