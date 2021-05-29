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

    const customer = useSelector<AppRootStateType, CustomerType | undefined>(state =>
        state.customers.find(item => item.id === Number(id)))

    const steps: Array<MBreadcrumbItemType> = [{
        id: v1(),
        name: "Klienci",
        link: "/customers"
    }, {
        id: v1(),
        name: customer?.login,
        link: ""
    }]

    return (
        <div>
            <PageTitle title={"Klienci"} subtitle={"szegóły klienta Allegro"}/>
            <MBreadcrumb steps={steps}/>
            <ContentBox title={`szegóły klienta: ${customer?.first_name}`}>
                <Descriptions>
                    <Item labelStyle={itemStyle}
                          label={"Imie i Nazwisko"}>{customer?.first_name} {customer?.last_name}</Item>
                    <Item labelStyle={itemStyle}
                          label={"Adres"}>{customer?.first_name}</Item>
                    <Item labelStyle={itemStyle}
                          label={"Kod pocztowy, miasto"}> </Item>
                    <Item labelStyle={itemStyle}
                          label={"Telefon"}> </Item>
                    <Item labelStyle={itemStyle}
                          label={"E-mail"}>{customer?.email}</Item>
                    <Item labelStyle={itemStyle}
                          label={"Firma"}> </Item>
                    <Item labelStyle={itemStyle}
                          label={"Allegro login"}>{customer?.login}</Item>
                    <Item labelStyle={itemStyle}
                          label={"Suma transakcji (PLN)"}> </Item>
                    <Item labelStyle={itemStyle}
                          label={"Ostatni zakup"}> </Item>
                    <Item labelStyle={itemStyle}
                          label={"Liczba transakcji"}> </Item>
                    <Item labelStyle={itemStyle}
                          label={"Data pierwszego zakupu"}> </Item>
                    <Item labelStyle={itemStyle}
                          label={"Data ostatniego zakupu"}> </Item>
                </Descriptions>
            </ContentBox>
        </div>
    );
};

export default CustomersInfo;