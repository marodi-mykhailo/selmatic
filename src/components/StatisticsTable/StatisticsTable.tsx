import React, {ChangeEvent, useEffect, useState} from 'react';
import './StatisticsTable.scss';
import {Input, Table} from "antd";
import {transitionTableReducerStateType} from "../../redux/transactionTable.reducer";

type StatisticsTablePropsType = {
    data: any
    searchAttr: string
    columns: any
}


const pagination = {
    defaultCurrent: 10,
    showSizeChanger: true,
    pageSizeOptions: ['1', '10', '15', '20', '50'],
}

const StatisticsTable = ({data, searchAttr, columns}: StatisticsTablePropsType) => {

    const [filteredData, setFilteredData] = useState<transitionTableReducerStateType>()

    useEffect(() => {
        setFilteredData(data)
    }, [])

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
            <Input.Search className={"statisticsTable__search"}
                          onChange={onChangeHandler}
                          placeholder={"Search..."}
                          allowClear/>
            <Table dataSource={filteredData}
                   columns={columns}
                   pagination={pagination}
                   className={"table-striped-rows"}
                   bordered
            />
        </div>
    );
};

export default StatisticsTable;