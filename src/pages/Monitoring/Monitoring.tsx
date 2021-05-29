import React from 'react';
import './Monitoring.scss';
import PageTitle from "../../components/PageTitle/PageTitle";
import MBreadcrumb, {MBreadcrumbItemType} from "../../components/MBreadcrumb/MBreadcrumb";
import {v1} from "uuid";
import ContentBox from "../../components/ContentBox/ContentBox";
import StatisticsTable from "../../components/StatisticsTable/StatisticsTable";
import {AppRootStateType} from "../../redux/store";
import {useSelector} from "react-redux";
import {NavLink} from 'react-router-dom';
import {TransitionTableReducerStateType} from "../../redux/transactionTable.reducer";

const steps: Array<MBreadcrumbItemType> = [{
    id: v1(),
    name: "Monitoring",
    link: ""
}]

const columns = [
    {
        title: "ID",
        dataIndex: "id",
        key: "id"
    }, {
        title: "Nazwa aukcji",
        dataIndex: "auction",
        key: "auction",
    },
    {
        title: "Koniec aukcji",
        dataIndex: "codeShipmentDate",
        key: "codeShipmentDate"
    },
    {
        title: "Operacje",
        dataIndex: "operacje",
        key: "operacje",
        render: (text: any, record: any) => {
            console.log(record)
            return (
                <div className={"monitoringTable__options"}>
                    <span className={"monitoringTable__options-item text-blue"}>
                     <NavLink to={`/auction/${record.id}`}>Szczegóły</NavLink>
                    </span>
                    <span>/</span>
                    <span className={"monitoringTable__options-item text-red"}>Wyłacz monitoring</span>
                </div>
            )
        }
    }
]


const Monitoring = () => {
    const data = useSelector<AppRootStateType, TransitionTableReducerStateType>(state => state.transitionTable)

    return (
        <div>
            <PageTitle title={"Monitoring"} subtitle={"lista aukcji Alegro"}/>
            <MBreadcrumb steps={steps}/>
            <ContentBox title={"Aukcje Monitorowane"}>
                <StatisticsTable data={data} searchAttr={"nazwaAukcji"} columns={columns}/>
            </ContentBox>
        </div>
    );
};

export default Monitoring;