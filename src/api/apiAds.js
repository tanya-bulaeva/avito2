import { isExpired } from "./helpers"

const baseHost = "http://localhost:8090"

export async function getAds(params) {
    let url = new URL("/ads", baseHost)

    if (params?.user_id) url.searchParams.append("user_id", params.user_id)
    if (params?.sorting) url.searchParams.append("sorting", "new")
    if (params?.page) url.searchParams.append("page", params.page)

    const response = await fetch(url)
    if (!response.ok) {
        throw new Error("ошибка сервера")
    }
    const data = await response.json()
    return data
}

export async function getUserById(id) {
    const response = await fetch(`${baseHost}/user/all`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    })

    if (!response.ok) {
        throw new Error("Ошибка сервера")
    }
    const data = await response.json()
    const user = data?.filter((el) => el.id === Number(id))
    return user?.length > 0 ? user[0] : null
}

export async function newToken() {
    if (sessionStorage.getItem("updatingToken") === "true") return
    const refreshToken = localStorage.getItem("refresh_token")

    const accessToken = localStorage.getItem("access_token")
    sessionStorage.setItem("updatingToken", "true")
    const response = await fetch(`${baseHost}/auth/login`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            access_token: accessToken,
            refresh_token: refreshToken,
        }),
    })
    if (!response.ok) {
        throw new Error("Ошибка сервера")
    }
    const data = await response.json()
    if (data) {
        if (data.access_token)
            localStorage.setItem("access_token", data.access_token)
        if (data.refresh_token)
            localStorage.setItem("refresh_token", data.refresh_token)
    }
    sessionStorage.setItem("updatingToken", "false")
    return data
}

export async function patchUser(params) {
    let url = new URL(`/user`, baseHost)
    let accessToken = localStorage.getItem("access_token")
    if (isExpired(accessToken)) {
        await newToken()
        accessToken = localStorage.getItem("access_token")
    }

    const response = await fetch(url, {
        method: "PATCH",
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            role: "user",
            name: params.name,
            surname: params.surname,
            phone: params.phone,
            city: params.city,
        }),
    })

    if (!response.ok) {
        throw new Error("Ошибка сервера")
    }
    const data = await response.json()
    return data
}
export async function postNewUserPhoto(formData) {
    let accessToken = localStorage.getItem("access_token")
    if (isExpired(accessToken)) {
        await newToken()
        accessToken = localStorage.getItem("access_token")
    }
    const response = await fetch(`${baseHost}/user/avatar`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
    })
    if (!response.ok) {
        throw new Error("Ошибка сервера")
    }
    const userPhoto = await response.json()
    return userPhoto
}

export async function getAdComments(params, ad_id) {
    let url = new URL(`ads/${ad_id}/comments`, baseHost)

    if (params?.user_id) url.searchParams.append("user_id", params.user_id)
    if (params?.page) url.searchParams.append("page", params.page)

    const response = await fetch(url, {
        method: "GET",
    })
    if (!response.ok) {
        throw new Error("Ошибка сервера")
    }
    const data = await response.json()
    return data
}

export async function newComment(params, ad_id) {
    let accessToken = localStorage.getItem("access_token")
    if (isExpired(accessToken)) {
        await newToken()
        accessToken = localStorage.getItem("access_token")
    }
    const response = await fetch(`${baseHost}/ads/${ad_id}/comments`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            text: params.text,
        }),
    })

    if (!response.ok) {
        throw new Error("Ошибка сервера")
    }
    const data = await response.json()
    return data
}

export async function newAd(title, description, price) {
    let accessToken = localStorage.getItem("access_token")
    if (isExpired(accessToken)) {
        await newToken()
        accessToken = localStorage.getItem("access_token")
    }
    const response = await fetch(`${baseHost}/adstext`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: title,
            description: description,
            price: price,
        }),
    })
    if (!response.ok) {
        throw new Error("Ошибка сервера")
    }
    const data = await response.json()
    return data
}
export async function postNewAdPhoto(formData, id) {
    let accessToken = localStorage.getItem("access_token")
    if (isExpired(accessToken)) {
        await newToken()
        accessToken = localStorage.getItem("access_token")
    }
    const response = await fetch(`${baseHost}/ads/${id}/image`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
    })
    if (!response.ok) {
        throw new Error("Ошибка сервера")
    }
    const userPhoto = await response.json()
    return userPhoto
}

export async function delAd(ad_id) {
    let accessToken = localStorage.getItem("access_token")
    if (isExpired(accessToken)) {
        await newToken()
        accessToken = localStorage.getItem("access_token")
    }
    const response = await fetch(`${baseHost}/ads/${ad_id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    })
    if (!response.ok) {
        throw new Error("Ошибка сервера")
    }
}
export async function patchAd(params, ad_id) {
    let url = new URL(`/ads/${ad_id}`, baseHost)
    let accessToken = localStorage.getItem("access_token")
    if (isExpired(accessToken)) {
        await newToken()
        accessToken = localStorage.getItem("access_token")
    }

    const response = await fetch(url, {
        method: "PATCH",
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: params.title,
            description: params.description,
            price: params.price,
        }),
    })

    if (!response.ok) {
        throw new Error("Ошибка сервера")
    }
    const data = await response.json()
    return data
}

export async function ChangeUserPassword(passwordOld, passwordNew) {
    let accessToken = localStorage.getItem("access_token")
    if (isExpired(accessToken)) {
        await newToken()
        accessToken = localStorage.getItem("access_token")
    }
    const response = await fetch(`${baseHost}/user/password`, {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "content-type": "application/json",
        },
        body: JSON.stringify({
            password_1: passwordOld,
            password_2: passwordNew,
        }),
    })
    return response
}

export async function delImg(ad_id, url) {
    let accessToken = localStorage.getItem("access_token")
    if (url) url.searchParams.append("file_url", url)

    if (isExpired(accessToken)) {
        await newToken()
        accessToken = localStorage.getItem("access_token")
    }
    const response = await fetch(`${baseHost}/ads/${ad_id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    })
    if (!response.ok) {
        throw new Error("Ошибка сервера")
    }
}
