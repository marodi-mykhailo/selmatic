import {createSlice} from "@reduxjs/toolkit";

export type TransitionTableItemType = {
    key: string
    id: string
    auction: string
    codeShippingStatus: string,
    platform: string
    client: string
    count: string
    pricePerItem: string
    dateOfPurchase: string
    paymentStatus: string
    payUTransactionCompletionDate: string
    codeShipmentDate: string
    sentCodes: string[]

}

export type TransitionTableReducerStateType = Array<TransitionTableItemType>

const initialState: TransitionTableReducerStateType = [
    {
        key: '1',
        id: '1',
        auction: 'League Of Legends LOL Smurf Konto EUW 20 Kapsuł',
        codeShippingStatus: "Wysłany",
        platform: 'Allegro',
        client: 'Paweł Kowalski',
        count: '1',
        pricePerItem: '9,99 zł',
        dateOfPurchase: '01/05/2021  04:50:27',
        paymentStatus: 'Zakończona',
        payUTransactionCompletionDate: '01/05/2021  04:50:27',
        codeShipmentDate: '01/05/2021  04:50:27',
        sentCodes: ["GJIE-JSDN-FNWO-WFWG", "GJIE-JSDN-FNWO-WFWG", "GJIE-JSDN-FNWO-WFWG"]
    },
    {
        key: '2',
        id: '2',
        auction: 'League Of Legends LOL Smurf Konto EUW 20 Kapsuł',
        codeShippingStatus: "Wysłany",
        platform: 'Allegro',
        client: 'Paweł Kowalski',
        count: '1',
        pricePerItem: '9,99 zł',
        dateOfPurchase: '01/05/2021  04:50:27',
        paymentStatus: 'Zakończona',
        payUTransactionCompletionDate: '01/05/2021  04:50:27',
        codeShipmentDate: '01/05/2021  04:50:27',
        sentCodes: ["GJIE-JSDN-FNWO-WFWG", "GJIE-JSDN-FNWO-WFWG", "GJIE-JSDN-FNWO-WFWG"]
    }, {
        key: '3',
        id: '3',
        auction: 'League Of Legends LOL Smurf Konto EUW 20 Kapsuł',
        codeShippingStatus: "Wysłany",
        platform: 'Allegro',
        client: 'Paweł Kowalski',
        count: '1',
        pricePerItem: '9,99 zł',
        dateOfPurchase: '01/05/2021  04:50:27',
        paymentStatus: 'Zakończona',
        payUTransactionCompletionDate: '01/05/2021  04:50:27',
        codeShipmentDate: '01/05/2021  04:50:27',
        sentCodes: ["GJIE-JSDN-FNWO-WFWG", "GJIE-JSDN-FNWO-WFWG", "GJIE-JSDN-FNWO-WFWG"]
    }, {
        key: '4',
        id: '4',
        auction: 'League Of Legends LOL Smurf Konto EUW 20 Kapsuł',
        codeShippingStatus: "Wysłany",
        platform: 'Allegro',
        client: 'Paweł Kowalski',
        count: '1',
        pricePerItem: '9,99 zł',
        dateOfPurchase: '01/05/2021  04:50:27',
        paymentStatus: 'Zakończona',
        payUTransactionCompletionDate: '01/05/2021  04:50:27',
        codeShipmentDate: '01/05/2021  04:50:27',
        sentCodes: ["GJIE-JSDN-FNWO-WFWG", "GJIE-JSDN-FNWO-WFWG", "GJIE-JSDN-FNWO-WFWG"]
    }, {
        key: '5',
        id: '5',
        auction: 'League Of Legends LOL Smurf Konto EUW 20 Kapsuł',
        codeShippingStatus: "Wysłany",
        platform: 'Allegro',
        client: 'Paweł Kowalski',
        count: '1',
        pricePerItem: '9,99 zł',
        dateOfPurchase: '01/05/2021  04:50:27',
        paymentStatus: 'Zakończona',
        payUTransactionCompletionDate: '01/05/2021  04:50:27',
        codeShipmentDate: '01/05/2021  04:50:27',
        sentCodes: ["GJIE-JSDN-FNWO-WFWG", "GJIE-JSDN-FNWO-WFWG", "GJIE-JSDN-FNWO-WFWG"]
    }, {
        key: '6',
        id: '6',
        auction: 'League Of Legends LOL Smurf Konto EUW 20 Kapsuł',
        codeShippingStatus: "Wysłany",
        platform: 'Allegro',
        client: 'Paweł Kowalski',
        count: '1',
        pricePerItem: '9,99 zł',
        dateOfPurchase: '01/05/2021  04:50:27',
        paymentStatus: 'Zakończona',
        payUTransactionCompletionDate: '01/05/2021  04:50:27',
        codeShipmentDate: '01/05/2021  04:50:27',
        sentCodes: ["GJIE-JSDN-FNWO-WFWG", "GJIE-JSDN-FNWO-WFWG", "GJIE-JSDN-FNWO-WFWG"]
    }, {
        key: '7',
        id: '7',
        auction: 'League Of Legends LOL Smurf Konto EUW 20 Kapsuł',
        codeShippingStatus: "Wysłany",
        platform: 'Allegro',
        client: 'Paweł Kowalski',
        count: '1',
        pricePerItem: '9,99 zł',
        dateOfPurchase: '01/05/2021  04:50:27',
        paymentStatus: 'Zakończona',
        payUTransactionCompletionDate: '01/05/2021  04:50:27',
        codeShipmentDate: '01/05/2021  04:50:27',
        sentCodes: ["GJIE-JSDN-FNWO-WFWG", "GJIE-JSDN-FNWO-WFWG", "GJIE-JSDN-FNWO-WFWG"]
    }, {
        key: '8',
        id: '8',
        auction: 'League Of Legends LOL Smurf Konto EUW 20 Kapsuł',
        codeShippingStatus: "Wysłany",
        platform: 'Allegro',
        client: 'Paweł Kowalski',
        count: '1',
        pricePerItem: '9,99 zł',
        dateOfPurchase: '01/05/2021  04:50:27',
        paymentStatus: 'Zakończona',
        payUTransactionCompletionDate: '01/05/2021  04:50:27',
        codeShipmentDate: '01/05/2021  04:50:27',
        sentCodes: ["GJIE-JSDN-FNWO-WFWG", "GJIE-JSDN-FNWO-WFWG", "GJIE-JSDN-FNWO-WFWG"]
    }, {
        key: '9',
        id: '9',
        auction: 'League Of Legends LOL Smurf Konto EUW 20 Kapsuł',
        codeShippingStatus: "Wysłany",
        platform: 'Allegro',
        client: 'Paweł Kowalski',
        count: '1',
        pricePerItem: '9,99 zł',
        dateOfPurchase: '01/05/2021  04:50:27',
        paymentStatus: 'Zakończona',
        payUTransactionCompletionDate: '01/05/2021  04:50:27',
        codeShipmentDate: '01/05/2021  04:50:27',
        sentCodes: ["GJIE-JSDN-FNWO-WFWG", "GJIE-JSDN-FNWO-WFWG", "GJIE-JSDN-FNWO-WFWG"]
    }, {
        key: '10',
        id: '10',
        auction: 'League Of Legends LOL Smurf Konto EUW 20 Kapsuł',
        codeShippingStatus: "Wysłany",
        platform: 'Allegro',
        client: 'Paweł Kowalski',
        count: '1',
        pricePerItem: '9,99 zł',
        dateOfPurchase: '01/05/2021  04:50:27',
        paymentStatus: 'Zakończona',
        payUTransactionCompletionDate: '01/05/2021  04:50:27',
        codeShipmentDate: '01/05/2021  04:50:27',
        sentCodes: ["GJIE-JSDN-FNWO-WFWG", "GJIE-JSDN-FNWO-WFWG", "GJIE-JSDN-FNWO-WFWG"]
    }
]

const transactionTableSlice = createSlice({
    name: "transactionTable",
    initialState,
    reducers: {}
})

export default transactionTableSlice.reducer;