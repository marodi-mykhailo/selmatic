import React, {ChangeEvent, useEffect, useState} from 'react';
import './MessageTemplatesTable.scss';
import {Button, Input, Space, Table} from "antd";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {MessageTemplatesTableStateType} from "./messageTemplatesTable.reducer";
import {transitionTableReducerStateType} from "../TransactionTable/transactionTable.reducer";


const columns = [
    {
        title: "ID",
        dataIndex: "id",
        key: "id"
    }, {
        title: "Nazwa Szablonu",
        dataIndex: "nazwaSzablonu",
        key: "nazwaSzablonu"
    }, {
        title: "Operacje",
        dataIndex: "operacje",
        key: "operacje",
        render: (text: any, record: any) => {
            console.log("text", text)
            console.log("record", record)
            return (
                <Space size="small">
                    <Button
                        className={"messageTemplateTable__options-icon messageTemplateTable__options-icon--settings"}
                        size={"large"}
                        shape={"circle"}>
                        <i className="fas fa-cog"/>
                    </Button>
                    <Button className={"messageTemplateTable__options-icon messageTemplateTable__options-icon--flag"}
                            size={"large"}
                            shape={"circle"}>
                        <i className="far fa-flag"/>
                    </Button>
                    <Button className={"messageTemplateTable__options-icon messageTemplateTable__options-icon--delete"}
                            size={"large"}
                            shape={"circle"}>
                        <i className="fas fa-trash"/>
                    </Button>
                </Space>
            )
        }
    }
]

const pagination = {
    defaultCurrent: 10,
    showSizeChanger: true,
    pageSizeOptions: ['1', '10', '15', '20', '50'],
}

const MessageTemplatesTable = () => {

    const data = useSelector<AppRootStateType, MessageTemplatesTableStateType>(state => state.messageTemplatesTable)

    const [filteredData, setFilteredData] = useState<MessageTemplatesTableStateType>()

    useEffect(() => {
        setFilteredData(data)
    }, [])

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value.length > 0) {
            let filtered = filteredData?.filter(item => item.nazwaSzablonu.toLowerCase().includes(e.currentTarget.value))
            setFilteredData(filtered)
        } else {
            setFilteredData(data)
        }
    }

    return (
        <div className={"messageTemplateTable"}>
            <Input.Search className={"messageTemplateTable__search"}
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

export default MessageTemplatesTable;