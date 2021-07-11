import React from 'react';
import PageTitle from "../../components/PageTitle/PageTitle";
import MBreadcrumb, {MBreadcrumbItemType} from "../../components/MBreadcrumb/MBreadcrumb";
import {v1} from "uuid";
import ContentBox from "../../components/ContentBox/ContentBox";
import StatisticsTable from "../../components/StatisticsTable/StatisticsTable";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {deleteItemFromMessageTemplate, MessageTemplatesStateType} from "../../redux/messageTemplatesTable.reducer";
import {Button, Space} from "antd";
import settingsIcon from "../../assets/icons/settings_icon.png";
import deleteIcon from "../../assets/icons/delete_icon.png";

const steps: Array<MBreadcrumbItemType> = [{
    id: v1(),
    name: "Lista szablonów wiadomości",
    link: ""
}]


const MessageTemplates = () => {
    const data = useSelector<AppRootStateType, MessageTemplatesStateType>(state => state.messageTemplatesTable)

    const dispatch = useDispatch()

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
            render: (record: any, item: any) => {
                return (
                    <Space size="small">
                        <img className={"statisticsTable__options-icon statisticsTable__options-icon--settings"}
                             src={settingsIcon}/>
                        <img className={"statisticsTable__options-icon statisticsTable__options-icon--delete"}
                             src={deleteIcon}
                             onClick={() => onDeleteItemHandler(item.id)}
                        />
                    </Space>
                )
            }
        }
    ]


    const onDeleteItemHandler = (id: number) => {
        dispatch(deleteItemFromMessageTemplate(id))
    }


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