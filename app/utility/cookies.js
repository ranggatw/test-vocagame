import Cookies from 'js-cookie'
import { expiredTime } from './expiredTime'

export const setCookies = (name, value) => {
    Cookies.set(name, JSON.stringify(value), { expires: expiredTime() })
}

export const getCookies = (name) => {
    const cookies = Cookies.get(name)
    if (cookies) return JSON.parse(cookies)
    else return null
}

export const removeCookies = (name) => {
    Cookies.remove(name)
}