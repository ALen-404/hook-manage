import { defineConfig } from 'umi';
export default defineConfig({
  layout: {},
  dva: {},
  antd: {},
  routes: [
    {
      name: '用户管理',
      path: '/userlist',
      component: './UserList',
    },
    {
      name: '项目管理',
      path: '/projectlist',
      component: './ProjectList',
    },
    {
      name: '监控页',
      path: '/dashboardmonitor',
      component: './DashboardMonitor',
    },
  ],
});
