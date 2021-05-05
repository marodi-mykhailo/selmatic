import React from 'react';
import MBreadcrumb, {MBreadcrumbItemType} from "../../components/MBreadcrumb/MBreadcrumb";
import {v1} from "uuid";
import PageTitle from "../../components/PageTitle/PageTitle";
import StatisticsTable from "../../components/StatisticsTable/StatisticsTable";
import ContentBox from "../../components/ContentBox/ContentBox";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {CodeDatabaseTableType} from "../../redux/codeDatabaseTable.reducer";
import {Button, Space} from "antd";
import {CustomersTableType} from "../../redux/customersTable.reducer";

const steps: Array<MBreadcrumbItemType> = [{
    id: v1(),
    name: "Klienci",
    link: ""
}]

const columns = [
    {
        title: "Nazwa użytkownika",
        dataIndex: "username",
        key: "username"
    }, {
        title: "Imię i nazwisko",
        dataIndex: "firstLastName",
        key: "firstLastName"
    }, {
        title: "City",
        dataIndex: "city",
        key: "city"
    }, {
        title: "Adres e-mail",
        dataIndex: "email",
        key: "email"
    }, {
        title: "Operacje",
        dataIndex: "operacje",
        key: "operacje",
        render: (text: any, record: any) => {
            return (
                <Button
                    className={"statisticsTable__customers__button"}
                    size={"middle"}>
                    Sczegóły
                </Button>
            )
        }
    }
]

const Customers = () => {
    const data = useSelector<AppRootStateType, CustomersTableType>(state => state.customersTable)

    return (
        <div>
            <PageTitle title={"Klienci"} subtitle={"lista klientów allegro"}/>
            <MBreadcrumb steps={steps}/>
            <ContentBox title={"Lista klientów allegro"}>
                <StatisticsTable data={data} searchAttr={"firstLastName"} columns={columns}/>
            </ContentBox>
        </div>
    );
};

export default Customers;