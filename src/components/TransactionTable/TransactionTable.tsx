import React from 'react';
import './TransactionTable.scss';
import {Table} from "antd";

const columns = [
    {
        title: "Aukcja",
        dataIndex: "aukcja",
        key: "aukcja",
    },
    {
        title: "Klient",
        dataIndex: "klient",
        key: "kient",
    },
    {
        title: "Sztuk",
        dataIndex: "sztuk",
        key: "sztuk",
    },
    {
        title: "Cena/sztuka",
        dataIndex: "cenaSztuka",
        key: "cenaSztuka",
    },
    {
        title: "Data zakupu",
        dataIndex: "dataZakupu",
        key: "dataZakupu",
    },
    {
        title: "Kod wysłany",
        dataIndex: "kodWyslany",
        key: "kodWyslany",
    },
    {
        title: "Płatność",
        dataIndex: "platnosc",
        key: "platnosc",
    },
    {
        title: "Szczegóły",
        dataIndex: "szczegoly",
        key: "szczegoly",
    }
]

const dataSource = [
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
        aukcja: 'aukcja',
        klient: "klient",
        sztuk: 'sztuk',
        cenaSztuka: 'cenaSztuka',
        dataZakupu: 'dataZakupu',
        kodWyslany: 'kodWyslany',
        platnosc: 'platnosc',
        szczegoly: 'szczegoly',
    }, {
        key: '3',
        aukcja: 'aukcja',
        klient: "klient",
        sztuk: 'sztuk',
        cenaSztuka: 'cenaSztuka',
        dataZakupu: 'dataZakupu',
        kodWyslany: 'kodWyslany',
        platnosc: 'platnosc',
        szczegoly: 'szczegoly',
    }, {
        key: '4',
        aukcja: 'aukcja',
        klient: "klient",
        sztuk: 'sztuk',
        cenaSztuka: 'cenaSztuka',
        dataZakupu: 'dataZakupu',
        kodWyslany: 'kodWyslany',
        platnosc: 'platnosc',
        szczegoly: 'szczegoly',
    }, {
        key: '5',
        aukcja: 'aukcja',
        klient: "klient",
        sztuk: 'sztuk',
        cenaSztuka: 'cenaSztuka',
        dataZakupu: 'dataZakupu',
        kodWyslany: 'kodWyslany',
        platnosc: 'platnosc',
        szczegoly: 'szczegoly',
    }, {
        key: '6',
        aukcja: 'aukcja',
        klient: "klient",
        sztuk: 'sztuk',
        cenaSztuka: 'cenaSztuka',
        dataZakupu: 'dataZakupu',
        kodWyslany: 'kodWyslany',
        platnosc: 'platnosc',
        szczegoly: 'szczegoly',
    }, {
        key: '7',
        aukcja: 'aukcja',
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
];

const TransactionTable = () => {
    return (
        <div>
            <Table dataSource={dataSource}
                   columns={columns}
            />
        </div>
    );
};

export default TransactionTable;