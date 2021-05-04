import React from 'react';
import PageTitle from "../../components/PageTitle/PageTitle";
import MBreadcrumb, {MBreadcrumbItemType} from "../../components/MBreadcrumb/MBreadcrumb";
import {v1} from "uuid";
import ContentBox from "../../components/ContentBox/ContentBox";
import StatisticsTable from "../../components/StatisticsTable/StatisticsTable";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {MessageTemplatesTableStateType} from "../../redux/messageTemplatesTable.reducer";
import {Button, Space} from "antd";

const steps: Array<MBreadcrumbItemType> = [{
    id: v1(),
    name: "Lista szablonów wiadomości",
    link: ""
}]

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
                        className={"statisticsTable__options-icon statisticsTable__options-icon--settings"}
                        size={"large"}
                        shape={"circle"}>
                        <i className="fas fa-cog"/>
                    </Button>
                    <Button className={"statisticsTable__options-icon statisticsTable__options-icon--flag"}
                            size={"large"}
                            shape={"circle"}>
                        <i className="far fa-flag"/>
                    </Button>
                    <Button className={"statisticsTable__options-icon statisticsTable__options-icon--delete"}
                            size={"large"}
                            shape={"circle"}>
                        <i className="fas fa-trash"/>
                    </Button>
                </Space>
            )
        }
    }
]


const MessageTemplates = () => {
    const data = useSelector<AppRootStateType, MessageTemplatesTableStateType>(state => state.messageTemplatesTable)

    return (
        <div>
            <PageTitle title={"Szablony wiadomości"} subtitle={"lista szablonów wiadomości"}/>
            <MBreadcrumb steps={steps}/>
            <ContentBox title={"Lista szablonów wiadomości"}>
                <StatisticsTable data={data} searchAttr={"nazwaSzablonu"} columns={columns}/>
            </ContentBox>
        </div>
    );
};

export default MessageTemplates;