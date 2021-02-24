import React from 'react'
import {
  HomeOutlined,
  BarChartOutlined,
  CommentOutlined,
  UserSwitchOutlined,
  RobotOutlined,
  BookOutlined,
  WhatsAppOutlined,
  UsergroupAddOutlined,
  BoxPlotOutlined
} from '@ant-design/icons'

const Router=[
  {
    title:'首页',
    icon:<HomeOutlined />,
    path:'/home'
  },
  {
    title:'文章管理',
    icon:<BarChartOutlined />,
    path:'/home/article',
    children:[
      {
        title:'所有文章',
        icon:'',
        path:'/home/article/list'
      },
      {
        title:'写文章',
        icon:'',
        path:'/home/article/write'
      },
      {
        title:'分类目录',
        icon:'',
        path:'/home/article/class'
      },
      {
        title:'标签',
        icon:'',
        path:'/home/article/tag'
      },
    ]
  },
  {
    title:'评论',
    icon:<CommentOutlined />,
    path:'/home/comment'
  },
  {
    title:'用户管理',
    icon:<UserSwitchOutlined />,
    path:'/home/user',
  },
  {
    title:'系统管理',
    icon:<RobotOutlined />,
    path:'/home/system',
    children:[
      {
        title:'账号管理',
        icon:'',
        path:'/home/system/user'
      },
      {
        title:'角色管理',
        icon:'',
        path:'/home/system/roles'
      },
      {
        title:'权限管理',
        icon:'',
        path:'/home/system/auth'
      },
      {
        title:'菜单管理',
        icon:'',
        path:'/home/system/menu'
      }
    ]
  },
  {
    title:'作品集',
    icon:<BookOutlined />,
    path:'/home/prot',
  },
  {
    title:'留言板',
    icon:<WhatsAppOutlined />,
    path:'/home/message',
  },
  {
    title:'聊天室',
    icon:<UsergroupAddOutlined />,
    path:'/home/room',
  },
  {
    title:'关于',
    icon:<BoxPlotOutlined />,
    path:'/home/about'
  },
]

export default Router
