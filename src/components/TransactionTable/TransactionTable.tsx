import React from 'react';
import './TransactionTable.scss';
import {Table} from "antd";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {transitionTableReducerStateType} from "./transactionTable.reducer";

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


const TransactionTable = () => {
    const data = useSelector<AppRootStateType, transitionTableReducerStateType>(state => state.transitionTable)
    return (
        <div>
            <Table dataSource={data}
                   columns={columns}
                   bordered
            />
        </div>
    );
};

export default TransactionTable;