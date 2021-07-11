import React, {ChangeEvent, useEffect, useState} from 'react';
import './StatisticsTable.scss';
import {Input, Table} from "antd";
import {TransitionTableReducerStateType} from "../../redux/transactionTable.reducer";

type StatisticsTablePropsType = {
    data: any
    searchAttr: string
    columns: any
}


const pagination = {
    defaultCurrent: 1,
    showSizeChanger: true,
    pageSizeOptions: ['1', '10', '15', '20', '50'],
    showTotal: (total: any, range: any) => `Pozycje od ${range[0]} do ${range[1]} z ${total} łącznie`,
    itemRender: itemRender,
}

function itemRender(current: any, type: any, originalElement: any) {
    if (type === 'prev') {
        return <a>Poprzednia</a>;
    }
    if (type === 'next') {
        return <a>Następna</a>;
    }
    return originalElement;
}


const StatisticsTable = ({data, searchAttr, columns}: StatisticsTablePropsType) => {


    const [filteredData, setFilteredData] = useState<TransitionTableReducerStateType>()

    useEffect(() => {
        setFilteredData(data)
    }, [data])

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value.length > 0) {

            let filtered = data?.filter((item: any) =>
                item[searchAttr].toLowerCase().includes(e.currentTarget.value))

            setFilteredData(filtered)
        } else {
            setFilteredData(data)
        }
    }


    return (
        <div className={"statisticsTable"}>
            <div className={"statisticsTable__header"}>
                <div className={"statisticsTable__header__select"}>
                    <div>Pokaż</div>
                    <div className={"statisticsTable__header--hide"}/>
                    <div>Pozycji</div>
                </div>
                <div className={"statisticsTable__header__search"}>
                    <div className={"statisticsTable__header__search__text"}>Szukaj</div>
                    <Input className={"statisticsTable__header__search__input"}
                           onChange={onChangeHandler}
                           placeholder={"Search..."}/>
                </div>
            </div>
            <Table dataSource={filteredData}
                   columns={columns}
                   pagination={pagination}
                   className={"table-striped-rows"}
                   bordered
                   size={"small"}
                   scroll={{x: 1000}}
                   rowKey={"id"}
            />
        </div>
    );
};

export default StatisticsTable;