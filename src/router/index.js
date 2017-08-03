import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Recommend = (resolve) => {
  import('components/recommend/recommend').then((recommend) => {
    resolve(recommend)
  })
}

const Singer = (resolve) => {
  import('components/singer/singer').then((moudle) => {
    resolve(moudle)
  })
}

const Rank = (resolve) => {
  import('components/rank/rank').then((moudle) => {
    resolve(moudle)
  })
}

const Search = (resolve) => {
  import('components/search/search').then((moudle) => {
    resolve(moudle)
  })
}

const SingerDetail = (resolve) => {
  import('components/singer-detail/singer-detail').then((moudle) => {
    resolve(moudle)
  })
}

const Disc = (resolve) => {
  import('components/disc/disc').then((moudle) => {
    resolve(moudle)
  })
}

const TopList = (resolve) => {
  import('components/top-list/top-list').then((moudle) => {
    resolve(moudle)
  })
}

const UserCenter = (resolve) => {
  import('components/user-center/user-center').then((moudle) => {
    resolve(moudle)
  })
}

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend,
      children: [
        {
          path: ':id',
          component: Disc
        }
      ]
    },
    {
      path: '/singer',
      component: Singer,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/rank',
      component: Rank,
      children: [
        {
          path: ':id',
          component: TopList
        }
      ]
    },
    {
      path: '/search',
      component: Search,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/user',
      component: UserCenter
    }
  ]
})
