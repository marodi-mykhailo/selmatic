import React from 'react';
import './CustomersInfo.scss';
import {useParams} from 'react-router-dom';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/store";
import PageTitle from "../../../components/PageTitle/PageTitle";
import MBreadcrumb, {MBreadcrumbItemType} from "../../../components/MBreadcrumb/MBreadcrumb";
import {v1} from "uuid";
import ContentBox from "../../../components/ContentBox/ContentBox";
import {Descriptions} from "antd";
import {CustomerType} from "../../../redux/customers.reducer";

const {Item} = Descriptions;

const itemStyle = {
    fontSize: "14px",
    fontWeight: "bold"
} as const


const CustomersInfo = () => {
    const {id} = useParams<{ id?: string }>()

    const data = useSelector<AppRootStateType, CustomerType | undefined>(state => state.customers.find((item: CustomerType) => item.customer.customer_id === id))


    const steps: Array<MBreadcrumbItemType> = [{
        id: v1(),
        name: "Klienci",
        link: "/customers"
    }, {
        id: v1(),
        name: data?.customer.login,
        link: ""
    }]

    return (
        <div>
            <PageTitle title={"Klienci"} subtitle={"szegóły klienta Allegro"}/>
            <MBreadcrumb steps={steps}/>
            <ContentBox title={`szegóły klienta: ${data?.customer.first_name}`}>
                <Descriptions>
                    <Item labelStyle={itemStyle}
                          label={"Imie i Nazwisko"}>{data?.customer.first_name} {data?.customer.last_name}</Item>
                    <Item labelStyle={itemStyle}
                          label={"Adres"}>{data?.customer.address}</Item>
                    <Item labelStyle={itemStyle}
                          label={"Kod pocztowy, miasto"}>{data?.customer.city}</Item>
                    <Item labelStyle={itemStyle}
                          label={"Telefon"}>{data?.customer.no_tel}</Item>
                    <Item labelStyle={itemStyle}
                          label={"E-mail"}>{data?.customer.email}</Item>
                    <Item labelStyle={itemStyle}
                          label={"Firma"}>{data?.customer.office}</Item>
                    <Item labelStyle={itemStyle}
                          label={"Allegro login"}>{data?.customer.login}</Item>
                    <Item labelStyle={itemStyle}
                          label={"Suma transakcji (PLN)"}>{data?.customer.orders_table_id}</Item>
                    <Item labelStyle={itemStyle}
                          label={"Ostatni zakup"}> </Item>
                    <Item labelStyle={itemStyle}
                          label={"Liczba transakcji"}>{data?.customer.orders}</Item>
                    <Item labelStyle={itemStyle}
                          label={"Data pierwszego zakupu"}>{
                        (new Date(data?.customer.created_at || 0)).toUTCString()
                    }</Item>
                    <Item labelStyle={itemStyle}
                          label={"Data ostatniego zakupu"}>{
                        (new Date(data?.customer.updated_at || 0)).toUTCString()
                    }</Item>
                </Descriptions>
            </ContentBox>
        </div>
    );
};

export default CustomersInfo;