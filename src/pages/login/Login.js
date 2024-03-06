import { Link, NavLink, useNavigate } from "react-router-dom"
import * as S from "./style"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { getUser, loginUser } from "../../api/apiAuth"
import { setUser } from "../../store/slices/userSlice"
import { setUserPassword } from "../../store/slices/adsSlice"

export default function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [error, setError] = useState(null)
    const [offButton, setOffButton] = useState(false)
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const [errorsForm, setErrorsForm] = useState({
        email: "",
        password: "",
    })
    const setCurrentUser = (value) => dispatch(setUser(value))
    const validateForm = () => {
        let isValid = true
        const newErrors = { ...errorsForm }
        const passPattern = /^[^\s]+$/g
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (email.trim() === "") {
            newErrors.email = "Введите почту"
            isValid = false
        } else if (!emailPattern.test(email)) {
            newErrors.email = "Введите корректную почту"
            isValid = false
        } else {
            newErrors.email = ""
        }

        if (password.trim() === "") {
            newErrors.password = "Введите пароль"
            isValid = false
        } else if (!passPattern.test(password)) {
            newErrors.password = "Пароль не должен содержать пробелы"
            isValid = false
        } else {
            newErrors.password = ""
        }

        setErrorsForm(newErrors)

        return isValid
    }

    useEffect(() => {
        setError(null)
    }, [email, password])

    useEffect(() => {
        const newErrors = { ...errorsForm }
        newErrors.email = ""
        setErrorsForm(newErrors)
    }, [email])

    useEffect(() => {
        const newErrors = { ...errorsForm }
        newErrors.password = ""
        setErrorsForm(newErrors)
    }, [password])

    const handleLogin = async () => {
        if (validateForm()) {
            loginUser({ email, password })
                .then(() => {
                    getUser().then((data) => {
                        if (data) {
                            setCurrentUser(data)
                            localStorage.setItem("user", JSON.stringify(data))
                            dispatch(setUserPassword(password))
                            localStorage.setItem("userPassword", password)
                        }
                    })
                })
                .then(() => navigate("/"))
                .catch((error) => setError(error?.message))
        }
    }
    return (
        <S.Wrapper>
            <S.ContainerEnter>
                <S.ModalBlock>
                    <S.ModalFormLogin
                        id="formLogIn"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <NavLink to="/">
                            <S.ModalLogo>
                                <img src="./img/logo_modal.png" alt="logo" />
                            </S.ModalLogo>
                        </NavLink>
                        {errorsForm.email && (
                            <S.Error>{errorsForm.email}</S.Error>
                        )}
                        <S.ModalInputLogin
                            type="text"
                            name="login"
                            id="formlogin"
                            placeholder="email"
                            value={email}
                            onChange={(event) => {
                                setEmail(event.target.value)
                            }}
                        />

                        {errorsForm.password && (
                            <S.Error>{errorsForm.password}</S.Error>
                        )}
                        <S.ModalInput
                            type="password"
                            name="password"
                            id="formpassword"
                            placeholder="Пароль"
                            autocomplete="current-password"
                            value={password}
                            onChange={(event) => {
                                setPassword(event.target.value)
                            }}
                        />
                        {error && <S.Error>{error}</S.Error>}
                        <S.ModalBtnEnter
                            id="btnEnter"
                            onClick={handleLogin}
                            disabled={offButton}
                        >
                            {" "}
                            {offButton ? "Осуществляем вход" : "Войти"}
                        </S.ModalBtnEnter>

                        <S.ModalBtnSignup id="btnSignUp">
                            <NavLink to="/register">Зарегистрироваться</NavLink>
                        </S.ModalBtnSignup>
                    </S.ModalFormLogin>
                </S.ModalBlock>
            </S.ContainerEnter>
        </S.Wrapper>
    )
}
