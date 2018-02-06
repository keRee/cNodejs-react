import Box from '../layout/Box';
// import Main from './../layout/Main'
import Pages from '../model/containers/pages'
import Artical from '../model/containers/artical'
import Error from '../layout/Error'

// import Index from './../pages/Me'
import About from '../pages/About'
import LoginPage from '../pages/LoginPage'

const routeConfig = [
  {
    path: '/',
    component: Box,
    indexRoute: { component: Pages },
    childRoutes: [
      // 登录 & 注册
      { path: 'login', component: LoginPage },
      { path: 'about', component: About },
      {
        path: 'pages/:tab',
        component: Pages
      },
      {
        path: 'artical/:id',
        component: Artical
      },
      { path: '*', component: Error }
    ]
  }
]

export default routeConfig;
