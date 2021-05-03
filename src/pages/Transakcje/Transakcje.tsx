import React from 'react';
import './Transakcje.scss';
import MBreadcrumb, {MBreadcrumbItemType} from "../../components/MBreadcrumb/MBreadcrumb";
import {v1} from "uuid";
import PageTitle from "../../components/PageTitle/PageTitle";
import ContentBox from "../../components/ContentBox/ContentBox";
import StatisticsTable from "../../components/StatisticsTable/StatisticsTable";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {transitionTableReducerStateType} from "../../redux/transactionTable.reducer";

const steps: Array<MBreadcrumbItemType> = [{
    id: v1(),
    name: "Transakcje",
    link: "#"
}]


const columns = [
    {
        title: "Aukcja",
        dataIndex: "aukcja",
        key: "aukcja",
    },
    {
        title: "Klient",
        dataIndex: "klient",
        key: "kient",
    },
    {
        title: "Sztuk",
        dataIndex: "sztuk",
        key: "sztuk",
    },
    {
        title: "Cena/sztuka",
        dataIndex: "cenaSztuka",
        key: "cenaSztuka",
    },
    {
        title: "Data zakupu",
        dataIndex: "dataZakupu",
        key: "dataZakupu",
    },
    {
        title: "Kod wysłany",
        dataIndex: "kodWyslany",
        key: "kodWyslany",
    },
    {
        title: "Płatność",
        dataIndex: "platnosc",
        key: "platnosc",
    },
    {
        title: "Szczegóły",
        dataIndex: "szczegoly",
        key: "szczegoly",
    }
]

const Transactions = () => {

    const data = useSelector<AppRootStateType, transitionTableReducerStateType>(state => state.transitionTable)

    return (
        <div>
            <PageTitle title={"Transakcje"} subtitle={"lista transakcji Allegro"}/>
            <MBreadcrumb steps={steps}/>
            <ContentBox title={"LISTA TRANSAKCJI ALLEGRO"} className={"light"}>
                <StatisticsTable data={data} searchAttr={"aukcja"} columns={columns}/>
            </ContentBox>
        </div>
    );
};

export default Transactions;