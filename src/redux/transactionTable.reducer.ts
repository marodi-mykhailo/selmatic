import {createSlice} from "@reduxjs/toolkit";

type transitionTableItemType = {
    key: string
    aukcja: string
    klient: string
    sztuk: string
    cenaSztuka: string
    dataZakupu: string
    kodWyslany: string
    platnosc: string
    szczegoly: string
}

export type transitionTableReducerStateType = Array<transitionTableItemType>

const initialState: transitionTableReducerStateType = [
    {
        key: '1',
        aukcja: 'aukcja',
        klient: "klient",
        sztuk: 'sztuk',
        cenaSztuka: 'cenaSztuka',
        dataZakupu: 'dataZakupu',
        kodWyslany: 'kodWyslany',
        platnosc: 'platnosc',
        szczegoly: 'szczegoly',
    },
    {
        key: '2',
        aukcja: 'mecha',
        klient: "klient",
        sztuk: 'sztuk',
        cenaSztuka: 'cenaSztuka',
        dataZakupu: 'dataZakupu',
        kodWyslany: 'kodWyslany',
        platnosc: 'platnosc',
        szczegoly: 'szczegoly',
    }, {
        key: '3',
        aukcja: 'dascw',
        klient: "klient",
        sztuk: 'sztuk',
        cenaSztuka: 'cenaSztuka',
        dataZakupu: 'dataZakupu',
        kodWyslany: 'kodWyslany',
        platnosc: 'platnosc',
        szczegoly: 'szczegoly',
    }, {
        key: '4',
        aukcja: 'lfgr',
        klient: "klient",
        sztuk: 'sztuk',
        cenaSztuka: 'cenaSztuka',
        dataZakupu: 'dataZakupu',
        kodWyslany: 'kodWyslany',
        platnosc: 'platnosc',
        szczegoly: 'szczegoly',
    }, {
        key: '5',
        aukcja: 'idicv',
        klient: "klient",
        sztuk: 'sztuk',
        cenaSztuka: 'cenaSztuka',
        dataZakupu: 'dataZakupu',
        kodWyslany: 'kodWyslany',
        platnosc: 'platnosc',
        szczegoly: 'szczegoly',
    }, {
        key: '6',
        aukcja: 'eeeer',
        klient: "klient",
        sztuk: 'sztuk',
        cenaSztuka: 'cenaSztuka',
        dataZakupu: 'dataZakupu',
        kodWyslany: 'kodWyslany',
        platnosc: 'platnosc',
        szczegoly: 'szczegoly',
    }, {
        key: '7',
        aukcja: 'eewer',
        klient: "klient",
        sztuk: 'sztuk',
        cenaSztuka: 'cenaSztuka',
        dataZakupu: 'dataZakupu',
        kodWyslany: 'kodWyslany',
        platnosc: 'platnosc',
        szczegoly: 'szczegoly',
    }, {
        key: '8',
        aukcja: 'aukcja',
        klient: "klient",
        sztuk: 'sztuk',
        cenaSztuka: 'cenaSztuka',
        dataZakupu: 'dataZakupu',
        kodWyslany: 'kodWyslany',
        platnosc: 'platnosc',
        szczegoly: 'szczegoly',
    }, {
        key: '9',
        aukcja: 'aukcja',
        klient: "klient",
        sztuk: 'sztuk',
        cenaSztuka: 'cenaSztuka',
        dataZakupu: 'dataZakupu',
        kodWyslany: 'kodWyslany',
        platnosc: 'platnosc',
        szczegoly: 'szczegoly',
    },
]

const transactionTableSlice = createSlice({
    name: "transactionTable",
    initialState,
    reducers: {}
})

export default transactionTableSlice.reducer;