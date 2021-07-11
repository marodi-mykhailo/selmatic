import React, {useEffect} from 'react';
import './Orders.scss';
import MBreadcrumb, {MBreadcrumbItemType} from "../../components/MBreadcrumb/MBreadcrumb";
import {v1} from "uuid";
import PageTitle from "../../components/PageTitle/PageTitle";
import ContentBox from "../../components/ContentBox/ContentBox";
import StatisticsTable from "../../components/StatisticsTable/StatisticsTable";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {AppResponseType} from "../../redux/app.reducer";
import {Link, NavLink} from 'react-router-dom';
import {getOrders, OrderType} from "../../redux/orders.reducer";


const steps: Array<MBreadcrumbItemType> = [{
    id: v1(),
    name: "Transakcje",
    link: ""
}]


const Transactions = () => {

    const data = useSelector<AppRootStateType, any>(state => (
        state.orders.map(item => (
                {...item.order["0"], customer: item.customer.name, link: item.order.link}
            )
        ))
    )
    const {isMobile} = useSelector<AppRootStateType, AppResponseType>(state => state.app.response)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getOrders())
    }, [])

    const columns = [
        {
            title: "Aukcja",
            dataIndex: "offer_name",
            key: "offer_name",
            fixed: !isMobile && "left",
            render: (text: any, record: any) => {
                return <a key={v1()} href={`${record.link}`}>{text}</a>
            }
        },
        {
            title: "Klient",
            dataIndex: "customer",
            key: "customer",
        },
        {
            title: "Sztuk",
            dataIndex: "quantity",
            key: "quantity",
        },
        {
            title: "Cena/sztuka",
            dataIndex: "pricePerItem",
            key: "pricePerItem",
            render: (_: any, item: OrderType) => {
                return `${item.offer_price} ${item.offer_currency}`
            }
        },
        {
            title: "Data zakupu",
            dataIndex: "order_date",
            key: "order_date",
            render: (record: string) => {
                return (new Date(record)).toUTCString()
            }

        },
        {
            title: "Kod wysłany",
            dataIndex: "sent_date",
            key: "sent_date",
            render: (text: string, record: any) => {
                return new Date(text).toUTCString()
            }
        },
        {
            title: "Płatność",
            dataIndex: "paymentStatus",
            key: "paymentStatus",
            render: (text: any, record: OrderType) => {
                return <NavLink key={v1()} to={`/transactions/${record.order_id}`}>Karta platności</NavLink>
            }
        },
    ]


    return (
        <div>
            <PageTitle title={"Transakcje"} subtitle={"lista transakcji Allegro"}/>
            <MBreadcrumb steps={steps}/>
            <ContentBox className={"light"}>
                <StatisticsTable data={data} searchAttr={"aukcja"} columns={columns}/>
            </ContentBox>
        </div>
    );
};

export default Transactions;