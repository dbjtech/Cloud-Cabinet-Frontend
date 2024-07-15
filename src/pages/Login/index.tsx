import { useNavigate } from "react-router"
import { useRequest, useSessionStorageState } from "ahooks"
import { login } from "@/services/auth/auth.service"
import useTitle from "ahooks/lib/useTitle"
import { APP_NAME } from "@/utils/constants"
import { LoginRes } from "@/services/auth/auth.model"

const LoginPage = () => {
	useTitle(`${APP_NAME}-用户登录`)
	const navigate = useNavigate()
	const [tokenStorage, setTokenStorage] = useSessionStorageState("mtsToken", {
		serializer: (value: any) => value,
		deserializer: (value: any) => value
	})
	const { loading, run } = useRequest(login, {
		manual: true,
		onSuccess: (res: LoginRes) => {
			setTokenStorage(res.token || undefined)
			navigate("/")
		}
	})

	return (
		<div></div>
	)
}

export default LoginPage
