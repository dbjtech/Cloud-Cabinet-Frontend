import { APP_NAME } from "@/utils/constants"
import { Layout, Skeleton, Menu, Button, theme } from "antd"
import { Suspense, useState } from "react"
import { Outlet } from "react-router-dom"
import {
	AntDesignOutlined,
	HddOutlined,
	LogoutOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	ShopOutlined,
	UserOutlined
} from "@ant-design/icons"
import { useTitle } from "ahooks"
import { SliderTitle, SliderTitleWrap } from "./style"

const { Sider, Header, Content } = Layout

const HomeLayout = () => {
	useTitle(APP_NAME)
	const [collapsed, setCollapsed] = useState(false)
	const {
		token: { colorBgContainer, borderRadiusLG }
	} = theme.useToken()

	const items = [
		{ key: "mine", icon: <UserOutlined />, label: "我的账号" },
		{
			key: "cabinet-management-fold",
			icon: <HddOutlined />,
			label: "云柜管理",
			children: [
				{ key: "cabinet-management", label: "云柜管理" },
				{ key: "cabinet-operation", label: "操作记录" }
			]
		},
		{
			key: "store-management-fold",
			icon: <ShopOutlined />,
			label: "门店管理"
		},
		{
			key: "logout",
			label: "退出登录",
			icon: <LogoutOutlined />
		}
	]

	return (
		<Layout style={{ width: "100vw", height: "100vh" }}>
			<Sider width={250} trigger={null} collapsible collapsed={collapsed}>
				<SliderTitleWrap>
					<AntDesignOutlined style={{ fontSize: "32px" }} />
					{!collapsed && <SliderTitle>云柜系统</SliderTitle>}
				</SliderTitleWrap>
				<Menu theme='dark' mode='inline' defaultSelectedKeys={["1"]} items={items} />
			</Sider>
			<Layout>
				<Header style={{ padding: 0, background: colorBgContainer }}>
					<Button
						type='text'
						icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
						onClick={() => setCollapsed(!collapsed)}
						style={{
							fontSize: "16px",
							width: 64,
							height: 64
						}}
					/>
				</Header>
				<Content
					style={{
						margin: "24px 16px",
						padding: 24,
						minHeight: 280,
						background: colorBgContainer,
						borderRadius: borderRadiusLG
					}}
				>
					<Suspense fallback={<Skeleton active />}>
						<Outlet />
					</Suspense>
				</Content>
			</Layout>
		</Layout>
	)
}

export default HomeLayout
