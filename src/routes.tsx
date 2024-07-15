import { Navigate } from 'react-router'
import { lazy } from 'react'
import HomeLayout from './layouts/HomeLayout'
import ErrorPage from './pages/404'
import EntranceLayout from './layouts/EntranceLayout'

const Login = lazy(() => import('./pages/Login'))

const routes = () => [
	{
		path: '/',
		element: <HomeLayout />,
		children: [
			{
				path: '',
				element: <Navigate to='' />
			},
		]
	},
	{
		path: '/login',
		element: <Navigate to='/entrance/login' />
	},
	{
		path: '/entrance',
		element: <EntranceLayout />,
		children: [
			{
				path: '',
				element: <Navigate to='login' />
			},
			{
				path: 'login',
				element: <Login />
			}
		]
	},
	{
		path: '*',
		element: <ErrorPage />
	}
]

export default routes
