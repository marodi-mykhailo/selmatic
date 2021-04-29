import React from 'react';
import './Transakcje.scss';
import MBreadcrumb, {MBreadcrumbItemType} from "../../components/MBreadcrumb/MBreadcrumb";
import {v1} from "uuid";
import PageTitle from "../../components/PageTitle/PageTitle";
import ContentBox from "../../components/ContentBox/ContentBox";
import TransactionTable from "../../components/TransactionTable/TransactionTable";

const steps: Array<MBreadcrumbItemType> = [{
    id: v1(),
    name: "Transakcje",
    link: "#"
}]

const Transactions = () => {

    const columns = [{
        title: ""
    }]

    return (
        <div>
            <PageTitle title={"Transakcje"} subtitle={"lista transakcji Allegro"}/>
            <MBreadcrumb steps={steps}/>
            <ContentBox title={"LISTA TRANSAKCJI ALLEGRO"} className={"light"}>
                <TransactionTable/>
            </ContentBox>
        </div>
    );
};

export default Transactions;