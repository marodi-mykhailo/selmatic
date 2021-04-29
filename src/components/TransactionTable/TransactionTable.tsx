import React, {ChangeEvent, useEffect, useState} from 'react';
import './TransactionTable.scss';
import {Input, Table} from "antd";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {
    transitionTableReducerStateType
} from "./transactionTable.reducer";

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


const pagination = {
    defaultCurrent: 10,
    showSizeChanger: true,
    pageSizeOptions: ['1', '10', '15', '20', '50'],
}


const TransactionTable = () => {
    const data = useSelector<AppRootStateType, transitionTableReducerStateType>(state => state.transitionTable)

    const [filteredData, setFilteredData] = useState<transitionTableReducerStateType>()

    useEffect(() => {
        setFilteredData(data)
    }, [])

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value.length > 0) {
            let filtered = filteredData?.filter(item => item.aukcja.includes(e.currentTarget.value))
            setFilteredData(filtered)
        } else {
            setFilteredData(data)
        }
    }

    return (
        <div className={"transactionTable"}>
            <Input.Search className={"transactionTable__search"}
                          onChange={onChangeHandler}
                          placeholder={"Search..."}
                          allowClear/>
            <Table dataSource={filteredData}
                   columns={columns}
                   pagination={pagination}
                   bordered
            />
        </div>
    );
};

export default TransactionTable;