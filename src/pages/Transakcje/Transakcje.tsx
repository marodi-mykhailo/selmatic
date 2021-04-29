import React from 'react';
import './Transakcje.scss';
import MBreadcrumb, {MBreadcrumbItemType} from "../../components/MBreadcrumb/MBreadcrumb";
import {v1} from "uuid";
import PageTitle from "../../components/PageTitle/PageTitle";
import ContentBox from "../../components/ContentBox/ContentBox";

const steps: Array<MBreadcrumbItemType> = [{
    id: v1(),
    name: "Transakcje",
    link: "#"
}]

const Transactions = () => {
    return (
        <div>
            <PageTitle title={"Transakcje"} subtitle={"lista transakcji Allegro"}/>
            <MBreadcrumb steps={steps}/>
            <ContentBox title={"LISTA TRANSAKCJI ALLEGRO"} className={"light"}/>
        </div>
    );
};

export default Transactions;