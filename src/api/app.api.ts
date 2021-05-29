import axios from "axios";
import {CustomerType} from "../redux/customers.reducer";

const settings = {
    withCredentials: true,
    headers: {}
}

const instance = axios.create({
    baseURL: "https://kodomat.herokuapp.com/",
    ...settings
})

type GetCustomersResponseType = CustomerType[]


export const appAPI = {
    getOrders() {
        return instance.get('get_orders?&from=2021-05-25&to=2021-05-26&limit=1000')
    },
    getSellable() {
        return instance.get('get_sellable_code')
    },
    getSold() {
        return instance.get('get_sold_codes')
    },
    getCustomers() {
        return instance.get<GetCustomersResponseType>('get_customers?dev=set')
    }
}


export const authAPI = {
    login(email: string, password: string) {
        return instance.post(`login?email=${email}&password=${password}`)
    },
    getMe() {
        return instance.get('me')
    },
}

