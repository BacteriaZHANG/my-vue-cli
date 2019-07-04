import Vue from 'vue'
import Router from 'vue-router'

import LoadingComponent from '@/components/loading-page'
import ErrorEmpty from '@/components/error-empty'
import ErrorService from '@/components/error-service'

import index from '@/page/index/index'

Vue.use(Router)

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    const position = {}

    if (to.hash) {
      position.selector = to.hash
    }

    if (to.matched.some(m => m.meta.scrollToTop)) {
      position.x = 0
      position.y = 0
    }

    return position
  }
}
// eslint-disable-next-line
function component (fold, name = fold) {
  const com = () => ({

    component: import(`@/page/${fold}/${name}`),
    loading: LoadingComponent,
    error: ErrorEmpty,
    delay: 1000,
    timeout: 180000

  })
  return {
    render (h) {
      return h(com, {})
    }
  }
}

export default new Router({
  scrollBehavior,
  routes: [
    {
      path: "/",
      redirect: "/index"
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      meta: {
        scrollToTop: true
      }
    },
    {
      path: '/404',
      name: '404',
      component: ErrorEmpty,
      meta: {
        scrollToTop: true
      }
    },
    {
      path: '/500',
      name: '500',
      component: ErrorService,
      meta: {
        scrollToTop: true
      }
    }
  ]
})
