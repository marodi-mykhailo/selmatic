import React from 'react';
import './CodeDatabase.scss';
import MBreadcrumb, {MBreadcrumbItemType} from "../../components/MBreadcrumb/MBreadcrumb";
import {v1} from "uuid";
import PageTitle from "../../components/PageTitle/PageTitle";
import ContentBox from "../../components/ContentBox/ContentBox";
import StatisticsTable from "../../components/StatisticsTable/StatisticsTable";
import {Button, Space} from "antd";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {CodeDatabaseTableType} from "../../redux/codeDatabaseTable.reducer";
import {AppReducerType} from "../../redux/app.reducer";

const steps: Array<MBreadcrumbItemType> = [{
    id: v1(),
    name: "Lista baz kodów",
    link: ""
}]


const CodeDatabase = () => {

    const {isMobile} = useSelector<AppRootStateType, AppReducerType>(state => state.app)


    const data = useSelector<AppRootStateType, CodeDatabaseTableType>(state => state.codeDatabaseTable)


    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
            fixed: !isMobile && "left"
        }, {
            title: "Nazwa bazy",
            dataIndex: "nazwaBazy",
            key: "nazwaBazy",
            fixed: !isMobile && "left"
        },
        {
            title: "Data dodania",
            dataIndex: "dataDodania",
            key: "dataDodania"
        }, {
            title: "Kodów",
            dataIndex: "codesCount",
            key: "codesCount"
        }, {
            title: "Sprzedanych",
            dataIndex: "soldCount",
            key: "soldCount"
        }, {
            title: "Pozostało",
            dataIndex: "leftCount",
            key: "leftCount"
        }, {
            title: "Typ bazy",
            dataIndex: "typBazy",
            key: "typBazy"
        }, {
            title: "Operacje",
            dataIndex: "operacje",
            key: "operacje",
            render: () => {
                return (
                    <Space size="small">
                        <Button
                            className={"statisticsTable__options-icon statisticsTable__options-icon--settings"}
                            size={"large"}
                            shape={"circle"}>
                            <i className="fas fa-cog"/>
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

    return (
        <div>
            <PageTitle title={"Bazy kodów"} subtitle={"lista baz kodów"}/>
            <MBreadcrumb steps={steps}/>
            <ContentBox title={"Lista baz kodów"}>
                <StatisticsTable data={data} searchAttr={"nazwaBazy"} columns={columns}/>
            </ContentBox>
        </div>
    );
};

export default CodeDatabase;