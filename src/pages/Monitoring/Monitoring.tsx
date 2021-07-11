import React, {useEffect} from 'react';
import './Monitoring.scss';
import PageTitle from "../../components/PageTitle/PageTitle";
import MBreadcrumb, {MBreadcrumbItemType} from "../../components/MBreadcrumb/MBreadcrumb";
import {v1} from "uuid";
import ContentBox from "../../components/ContentBox/ContentBox";
import StatisticsTable from "../../components/StatisticsTable/StatisticsTable";
import {AppRootStateType} from "../../redux/store";
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from 'react-router-dom';
import {changeOfferIsActive, getOffers, OfferType} from "../../redux/offers.reducer";

const steps: Array<MBreadcrumbItemType> = [{
    id: v1(),
    name: "Monitoring",
    link: ""
}]


const Monitoring = () => {
    const data = useSelector<AppRootStateType, OfferType[]>(state => state.offers)

    const dispatch = useDispatch()

    const onIsActiveChange = (id: string) => {
        dispatch(changeOfferIsActive(id))
    }

    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id"
        }, {
            title: "Nazwa aukcji",
            dataIndex: "offer_name",
            key: "offer_name",
        },
        {
            title: "Koniec aukcji",
            dataIndex: "endingAt",
            key: "endingAt"
        },
        {
            title: "Operacje",
            dataIndex: "operacje",
            key: "operacje",
            render: (text: any, item: any) => {
                return (
                    <div className={"monitoringTable__options"}>
                    <span className={"monitoringTable__options-item text-blue"}>
                     <NavLink to={`/auction/${item.id}`}>Szczegóły</NavLink>
                    </span>
                        <span>/</span>
                        {item.is_active === "YES"
                            ? <span onClick={() => onIsActiveChange(item.offer_id)}
                                    className={"monitoringTable__options-item text-red"}>Wyłacz monitoring</span>
                            : <span onClick={() => onIsActiveChange(item.offer_id)}
                                    className={"monitoringTable__options-item text-green"}>Włacz monitoring</span>
                        }
                    </div>
                )
            }
        }
    ]


    useEffect(() => {
        dispatch(getOffers())
    }, [])

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