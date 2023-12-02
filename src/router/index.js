import Vue from 'vue'
import Router from 'vue-router'

// User
import User from '../views/user/list'
import AddUser from '../views/user/add'
import EditUser from '../views/user/edit'
import DetailUser from '../views/user/detail'

// Notification
import List_notification from '../views/notification/list'
import Add_notification from '../views/notification/add'
import Edit_notification from '../views/notification/edit'
import Detail_notification from '../views/notification/detail'

// Product
import Product from '../views/product/list'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'list-user',
			component: User
		},
		{
			path: '/list-user',
			name: 'list-user',
			component: User
		},
		{
			path: '/add-user',
			name: 'add-user',
			component: AddUser
		},
		{
			path: '/edit-user',
			name: 'edit-user',
			component: EditUser
		},
		{
			path: '/detail-user',
			name: 'detail-user',
			component: DetailUser
		},
		{
			path: '/list-notification',
			name: 'list-notification',
			component: List_notification
		},
		{
			path: '/add-notification',
			name: 'add-notification',
			component: Add_notification
		},
		{
			path: '/edit-notification',
			name: 'edit-notification',
			component: Edit_notification
		},
		{
			path: '/detail-notification',
			name: 'detail-notification',
			component: Detail_notification
		},
		{
			path: '/list-product',
			name: 'list-product',
			component: Product
		}
	]
})
