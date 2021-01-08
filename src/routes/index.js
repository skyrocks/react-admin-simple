/*
 * @Author: shilei
 * @Date: 2021-01-07 15:47:25
 * @LastEditors: shilei
 * @LastEditTime: 2021-01-07 23:03:38
 * @Description: 这是一个什么文件...
 * @FilePath: /react04/src/routes/index.js
 */
import Login from '../pages/login'
import Frame from '../layouts/Frame'
import Dashboard from "../pages/dashboard";
import User from "../pages/user";
import Role from "../pages/role";
import Auth from "../pages/auth";

// 菜单相关路由
export const menus = [
  { path: '/', exact: true, name: '工作台', redirect: '/dashboard' },
  { path: '/dashboard', exact: true, name: '工作台', component: Dashboard },
  { path: '/user', exact: true, name: '用户管理', component: User },
  { path: '/role', exact: true, name: '角色管理', component: Role },
  { path: '/auth', exact: true, name: '授权管理', component: Auth }
]

//登录、首页、404路由
export const main = [
    { path: '/login', exact: true, name: '登录', component: Login, isPublic: true },
    { path: '/',  name: '首页', component: Frame, routes: menus }    
]

export const routerExport =  {
    main, menus
}