import Vue from 'vue'
import Router from 'vue-router'
import SignUp from '../components/Admin/SignUp'
import Login from '../components/Admin/Login'
import Users from '../components/Admin/Users'
import UserDetails from '../components/Admin/UserDetails'
import AddPost from '../components/Admin/AddPost'
import Posts from '../components/Admin/Posts'
import Home from '../components/Home'
import SinglePost from '../components/Post/SinglePost'
import { store } from '../store'

Vue.use(Router)

const checkAdmin = (to, from, next) => {
  console.log(store)
  // const isAdmin = store.getters.getRole === 'ADMIN'
  const isAdmin = true
  isAdmin ? next() : next(false)
}

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }, {
    path: '/admin/users',
    name: 'Users',
    component: Users,
    beforeEnter: checkAdmin
  }, {
    path: '/admin/users/:id',
    name: 'UserDetails',
    component: UserDetails,
    props: true,
    beforeEnter: checkAdmin
  }, {
    path: '/admin/posts/new',
    name: 'AddPost',
    component: AddPost,
    beforeEnter: checkAdmin
  }, {
    path: '/admin/posts',
    name: 'Posts',
    component: Posts,
    beforeEnter: checkAdmin
  }, {
    path: '/:slug',
    name: 'SinglePost',
    component: SinglePost,
    props: true
  }]
})
