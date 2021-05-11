import React from 'react';
import MBreadcrumb, {MBreadcrumbItemType} from "../../components/MBreadcrumb/MBreadcrumb";
import {v1} from "uuid";
import PageTitle from "../../components/PageTitle/PageTitle";
import StatisticsTable from "../../components/StatisticsTable/StatisticsTable";
import ContentBox from "../../components/ContentBox/ContentBox";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {Button} from "antd";
import {CustomersTableType} from "../../redux/customersTable.reducer";
import {NavLink} from 'react-router-dom';
import {appReducerType} from "../../redux/app.reducer";

const steps: Array<MBreadcrumbItemType> = [{
    id: v1(),
    name: "Klienci",
    link: ""
}]


const Customers = () => {
    const data = useSelector<AppRootStateType, CustomersTableType>(state => state.customersTable)

    const {isMobile} = useSelector<AppRootStateType, appReducerType>(state => state.app)


    const columns = [
        {
            title: "Nazwa użytkownika",
            dataIndex: "username",
            key: "username",
            fixed: !isMobile && "left"
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
                        size={"middle"}
                    >
                        <NavLink to={`/customers/${record.id}`}>Sczegóły</NavLink>
                    </Button>
                )
            }
        }
    ]

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