import { NavLink, useNavigate } from "react-router-dom"
import * as S from "./style"
import { loginUser, registerUser } from "../../api/apiAuth"
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { setUser } from "../../store/slices/userSlice"

import { setUserPassword } from "../../store/slices/adsSlice"

export default function Register() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [error, setError] = useState(null)
    const [offButton, setOffButton] = useState(false)
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [city, setCity] = useState("")
    const setCurrentUser = (value) => dispatch(setUser(value))

    const [errorsForm, setErrorsForm] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    })

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

        if (confirmPassword.trim() === "") {
            newErrors.password = "Подтвердите пароль"
            isValid = false
        } else if (confirmPassword !== password) {
            newErrors.confirmPassword = "Пароли не совпадают"
            isValid = false
        } else {
            newErrors.password = ""
        }

        setErrorsForm(newErrors)

        return isValid
    }

    useEffect(() => {
        setError(null)
    }, [email, password, confirmPassword])

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

    useEffect(() => {
        const newErrors = { ...errorsForm }
        newErrors.confirmPassword = ""
        setErrorsForm(newErrors)
    }, [confirmPassword])

    const handleReg = async () => {
        if (validateForm()) {
            setOffButton(true)
            try {
                const response = await registerUser({
                    email,
                    password,
                    name,
                    surname,
                    city,
                })
                dispatch(
                    setUser({
                        email: response.email,
                        password: response.password,
                        name: response.name,
                        surname: response.surname,
                        city: response.city,
                        id: response.id,
                    }),
                )
                await loginUser({ email, password })
                setCurrentUser(response)
                dispatch(setUserPassword(password))
                localStorage.setItem("userPassword", password)
                localStorage.setItem("user", JSON.stringify(response))
                navigate("/")
                setOffButton(false)
            } catch (error) {
                setError(error.message)
            }
        }
    }

    return (
        <S.Wrapper>
            <S.ContainerSignup>
                <S.ModalBlock>
                    <S.ModalFormLogin onSubmit={(e) => e.preventDefault()}>
                        <NavLink to="/">
                            <S.ModalLogo>
                                <img src="../img/logo_modal.png" alt="logo" />
                            </S.ModalLogo>
                        </NavLink>

                        {errorsForm.email && (
                            <S.Error>{errorsForm.email}</S.Error>
                        )}
                        <S.ModalInput
                            type="text"
                            name="login"
                            id="loginReg"
                            autoComplete="username"
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
                            id="passwordFirst"
                            placeholder="Пароль"
                            autoComplete="new-password"
                            value={password}
                            onInput={(event) => {
                                setPassword(event.target.value)
                            }}
                        />

                        {errorsForm.confirmPassword && (
                            <S.Error>{errorsForm.confirmPassword}</S.Error>
                        )}
                        <S.ModalInput
                            type="password"
                            name="password"
                            id="passwordSecond"
                            placeholder="Повторите пароль"
                            autoComplete="new-password"
                            value={confirmPassword}
                            onChange={(event) => {
                                setConfirmPassword(event.target.value)
                            }}
                        />

                        <S.ModalInput
                            type="text"
                            name="first-name"
                            id="first-name"
                            placeholder="Имя (необязательно)"
                            value={name}
                            onChange={(event) => {
                                setName(event.target.value)
                            }}
                        />

                        <S.ModalInput
                            type="text"
                            name="first-last"
                            id="first-last"
                            placeholder="Фамилия (необязательно)"
                            value={surname}
                            onChange={(event) => {
                                setSurname(event.target.value)
                            }}
                        />

                        <S.ModalInput
                            type="text"
                            name="city"
                            id="city"
                            placeholder="Город (необязательно)"
                            value={city}
                            onChange={(event) => {
                                setCity(event.target.value)
                            }}
                        />

                        {error && <S.Error>{error}</S.Error>}
                        <S.ModalBtnSignupEnt
                            id="SignUpEnter"
                            onClick={handleReg}
                            disabled={offButton}
                        >
                            {" "}
                            {offButton
                                ? "Осуществляем регистрацию"
                                : "Зарегистрироваться"}
                        </S.ModalBtnSignupEnt>
                    </S.ModalFormLogin>
                </S.ModalBlock>
            </S.ContainerSignup>
        </S.Wrapper>
    )
}
