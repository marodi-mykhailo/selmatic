import axios from "axios";
import {CustomerType} from "../redux/customers.reducer";
import {OfferType} from "../redux/offers.reducer";
import {newCodeDatabase} from "../pages/CodeDatabase/NewCodeDatabase/NewCodeDatabase";
import {UserType} from "../redux/users.reducer";

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
    getSellable() {
        return instance.get('get_sellable_code')
    },
    getSold() {
        return instance.get('get_sold_codes')
    },
    getCustomers() {
        return instance.get<GetCustomersResponseType>('get_customers?dev=set')
    },
    getOffers() {
        return instance.get<Array<OfferType>>('get_offers?dev=set')
    },

}

export const orderAPI = {
    getOrders() {
        return instance.get('get_orders?dev=set')
    },
    sendCodesAgain(order_id: string, email: string="") {
        return instance.get(`/send_email_again?dev=set&order_id=${order_id}&email=${email}`)
    },
    orderCancellation(order_id: string) {
        return instance.get(`cancel_order?order_id=${order_id}`)
    }
}

export const offerAPI = {
    changeIsActive(id: string) {
        return instance.get(`set_offer?offer_id=${id}`)
    }
}

export const codeDatabaseAPI = {
    getAllCodes() {
        return instance.get('get_all_code?dev=set')
    },
    addNewCode(newCodeDatabase: newCodeDatabase) {
        return instance.get('add_code?dev=set')
    },
    getCodeDatabaseNames(){
        return instance.get('/get_name_of_DB_codes?user_id=14')
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

export const statisticsAPI = {
    getTodayOrdersCount() {
        return instance.get<number>(`stat/orders/today/count?dev=set`)
    },
    getActiveOffersCount() {
        return instance.get<number>(`stat/offers/active/count?dev=set`)
    },
    getTransactionOrdersForChart(month: string = "") {
        return instance.get<{ [key: string]: number }>(
            `stat/quantity/transaction_per_month?m=${month}&dev=set`)
    },
    getValueOfSalesForChart(month: string = "") {
        return instance.get<{ [key: string]: number }>(
            `stat/cash/transaction/value?m=${month}&dev=set`)
    },
}
//
// export const messageTemplatesAPI = {
//     createMessageTemplates()
// }


export const userAPI = {
    getPersonalData(){
        return instance.get<UserType>(`get_presonal_data?dev=set`)
    }
}
