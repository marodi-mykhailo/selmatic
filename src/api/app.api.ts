import axios from "axios";

const settings = {
    withCredentials: true,
    headers: {}
}

const instance = axios.create({
    baseURL: "https://kodomat.herokuapp.com/",
    ...settings
})

export const codesAPI = {
    getAll() {
        return instance.get('get_all_code')
    },
    getSellable() {
        return instance.get('get_sellable_code')
    },
    getSold() {
        return instance.get('get_sold_codes')
    },
}


export const authAPI = {
    login(email: string, password: string) {
        return instance.post(`login?email=${email}&password=${password}`)
    },
    getMe() {
        return instance.get('me')
    },
}

