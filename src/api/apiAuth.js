import { isExpired } from "./helpers"
import { newToken } from "./apiAds"
const baseHost = "http://localhost:8090"

export async function registerUser(params) {
    const response = await fetch(`${baseHost}/auth/register/`, {
        method: "POST",
        body: JSON.stringify({
            password: params.password,
            role: params.role,
            email: params.email,
            name: params.name,
            surname: params.surname,
            city: params.city,
            surname: params.surname,
        }),
        headers: {
            "content-type": "application/json",
        },
    })

    if (!response.ok) {
        const error = await response.json()
        if (error?.email) {
            throw new Error(error.email[0])
        }
        if (error?.password) {
            throw new Error(error.password[0])
        }
        if (error?.message === "Database Error") {
            throw new Error("Пользователь с таким email уже существует")
        }
        throw new Error(error?.message)
    }
    const data = await response.json()
    return data
}

export async function loginUser(params) {
    const response = await fetch(`${baseHost}/auth/login/`, {
        method: "POST",
        body: JSON.stringify({
            password: params.password,
            email: params.email,
            id: params.id,
        }),
        headers: {
            "content-type": "application/json",
        },
    })

    if (!response.ok) {
        const error = await response.json()
        if (error?.detail === "Incorrect email") {
            throw new Error("Пользователь с таким email не существует")
        }
        if (error?.detail === "Incorrect password") {
            throw new Error("Неправильно введен пароль")
        }
        throw new Error(error?.message)
    }
    const data = await response.json()
    localStorage.setItem("access_token", data.access_token)
    localStorage.setItem("refresh_token", data.refresh_token)
    return data
}

export async function getUser() {
    let accessToken = localStorage.getItem("access_token")
    let url = new URL(`/user`, baseHost)
    if (isExpired(accessToken)) {
        await newToken()
        accessToken = localStorage.getItem("access_token")
    }
    const response = await fetch(url, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
        },
    })

    if (!response.ok) {
        throw new Error("Ошибка сервера")
    }
    const data = await response.json()
    return data
}
