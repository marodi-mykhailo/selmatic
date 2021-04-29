import React from 'react';
import './Transakcje.scss';
import MBreadcrumb, {MBreadcrumbItemType} from "../../components/MBreadcrumb/MBreadcrumb";
import {v1} from "uuid";
import PageTitle from "../../components/PageTitle/PageTitle";

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
            <div className={"content-box"}></div>
        </div>
    );
};

export default Transactions;