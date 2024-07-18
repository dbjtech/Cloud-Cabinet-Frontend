import { useNavigate } from "react-router"
import { useRequest } from "ahooks"
import { login } from "@/services/auth/auth.service"
import useTitle from "ahooks/lib/useTitle"
import { APP_NAME } from "@/utils/constants"
import { LoginRes } from "@/services/auth/auth.model"
import LoginBg from "../../assets/images/login_bg.png"
import { BgImg, LoginCard, LoginSubTitle, LoginTitle, PageWrap } from "./style"
import { Button, Form, Input } from "antd"

const LoginPage = () => {
	useTitle(`${APP_NAME}-用户登录`)
	const [loginForm] = Form.useForm()
	const navigate = useNavigate()
	const { loading, run } = useRequest(login, {
		manual: true,
		onSuccess: (res: LoginRes) => {
			navigate("/")
		}
	})

	const onFinish = (values: any) => {
		const { username, password } = values
		const params = {
			username,
			password
		}
		console.log(params)

		// run(params)
	}

	return (
		<PageWrap>
			<BgImg src={LoginBg} />
			<LoginCard>
				<LoginTitle>云柜系统</LoginTitle>
				<LoginSubTitle>离你最近的储物管家</LoginSubTitle>
				<Form
					form={loginForm}
					style={{ width: 300 }}
					initialValues={{ remember: true }}
					onFinish={onFinish}
					autoComplete='off'
				>
					<Form.Item label={false} name='username' rules={[{ required: true, message: "请输入账号" }]}>
						<Input maxLength={20} placeholder='账户' />
					</Form.Item>
					<Form.Item label={false} name='password' rules={[{ required: true, message: "请输入密码" }]}>
						<Input.Password maxLength={6} placeholder='密码' />
					</Form.Item>
					<Form.Item>
						<Button
							loading={loading}
							htmlType='submit'
							type='primary'
							size='large'
							style={{ width: "100%", marginBottom: "5px" }}
						>
							登录
						</Button>
					</Form.Item>
				</Form>
			</LoginCard>
		</PageWrap>
	)
}

export default LoginPage
