import React, {useEffect} from 'react';
import MBreadcrumb, {MBreadcrumbItemType} from "../../../components/MBreadcrumb/MBreadcrumb";
import {v1} from "uuid";
import PageTitle from "../../../components/PageTitle/PageTitle";
import StatisticsTable from "../../../components/StatisticsTable/StatisticsTable";
import ContentBox from "../../../components/ContentBox/ContentBox";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/store";
import {Button} from "antd";
import {CustomerType, getCustomers} from "../../../redux/customers.reducer";
import {NavLink} from 'react-router-dom';
import {AppResponseType} from "../../../redux/app.reducer";

const steps: Array<MBreadcrumbItemType> = [{
    id: v1(),
    name: "Klienci",
    link: ""
}]

const Customers = () => {

    const {isMobile} = useSelector<AppRootStateType, AppResponseType>(state => state.app.response)
    const customersData = useSelector<AppRootStateType, CustomerType[]>(state => state.customers)

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getCustomers())
    }, [])

    const columns = [
        {
            title: "Nazwa użytkownika",
            dataIndex: "login",
            key: "login",
            fixed: !isMobile && "left"
        }, {
            title: "Imię i nazwisko",
            dataIndex: "customer.first_name",
            key: "first_name",
            render: (text: string, {customer}: CustomerType) => {
                return `${customer.first_name} ${customer.last_name}`
            }
        }, {
            title: "City",
            dataIndex: ["customer", "city"],
            key: "city"
        }, {
            title: "Adres e-mail",
            dataIndex: ["customer", "email"],
            key: "email"
        }, {
            title: "Operacje",
            dataIndex: "operacje",
            key: "operacje",
            render: (text: string, item: CustomerType) => {
                return (
                    <Button className={"btn"}>
                        <NavLink to={`/customers/${item.customer.customer_id}`}>Sczegóły</NavLink>
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
                <StatisticsTable data={customersData}
                                 searchAttr={"login"}
                                 columns={columns}/>
            </ContentBox>
        </div>
    );
};

export default Customers;