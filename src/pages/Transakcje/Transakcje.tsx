import React from 'react';
import './Transakcje.scss';
import MBreadcrumb, {MBreadcrumbItemType} from "../../components/MBreadcrumb/MBreadcrumb";
import {v1} from "uuid";
import PageTitle from "../../components/PageTitle/PageTitle";
import ContentBox from "../../components/ContentBox/ContentBox";
import StatisticsTable from "../../components/StatisticsTable/StatisticsTable";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {TransitionTableReducerStateType} from "../../redux/transactionTable.reducer";
import {AppReducerType} from "../../redux/app.reducer";
import {NavLink} from 'react-router-dom';


const steps: Array<MBreadcrumbItemType> = [{
    id: v1(),
    name: "Transakcje",
    link: ""
}]


const Transactions = () => {

    const data = useSelector<AppRootStateType, TransitionTableReducerStateType>(state => state.transitionTable)
    const {isMobile} = useSelector<AppRootStateType, AppReducerType>(state => state.app)

    const columns = [
        {
            title: "Aukcja",
            dataIndex: "auction",
            key: "auction",
            fixed: !isMobile && "left",
            render: (text: any, record: any) => {
                return <NavLink key={v1()} to={`/transactions/${record.id}`}>{text}</NavLink>
            }
        },
        {
            title: "Klient",
            dataIndex: "client",
            key: "cient",
        },
        {
            title: "Sztuk",
            dataIndex: "count",
            key: "count",
        },
        {
            title: "Cena/sztuka",
            dataIndex: "pricePerItem",
            key: "pricePerItem",
        },
        {
            title: "Data zakupu",
            dataIndex: "dateOfPurchase",
            key: "dateOfPurchase",
        },
        {
            title: "Kod wysłany",
            dataIndex: "sentCodes",
            key: "sentCodes",
            render: (text: any, record: any) => {
                return text.map((item: string, index: number) => <div key={v1()}>
                    {`${index + 1}. ${item}`}
                </div>)
            }
        },
        {
            title: "Płatność",
            dataIndex: "paymentStatus",
            key: "paymentStatus",
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