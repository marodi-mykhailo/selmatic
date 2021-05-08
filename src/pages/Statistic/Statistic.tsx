import React from 'react';
import './Statistic.scss';
import PageTitle from "../../components/PageTitle/PageTitle";
import MBreadcrumb, {MBreadcrumbItemType} from "../../components/MBreadcrumb/MBreadcrumb";
import {v1} from "uuid";
import StatCard from "../../components/StatCard/StatCard";

const steps: Array<MBreadcrumbItemType> = [{
    id: v1(),
    name: "Zaawansowane statystyki",
    link: ""
},]

const Statistic = () => {
    return (
        <div>
            <PageTitle title={"Statystyki"} subtitle={"zaawansowane statystyki sprzedaży"}/>
            <MBreadcrumb steps={steps}/>
            <div className={"statistic__card__wrapper"}>
                <StatCard
                    backgroundColor={"#588FBE"}
                    title={"NAN"}
                    subTitle={"Średni czas wysyłki kodu"}
                    icon={"fas fa-paper-plane"}
                    link={"#"}
                    bottomBgc={"#4A86B9"}
                />
                <StatCard
                    backgroundColor={"#E45B5A"}
                    title={"50"}
                    subTitle={"Pozostała ilość kredytów"}
                    icon={"fas fa-dollar-sign"}
                    link={"#"}
                    bottomBgc={"#E04C4B"}
                />
                <StatCard
                    backgroundColor={"#44B6AD"}
                    title={"50"}
                    subTitle={"Pozostała ilość kredytów"}
                    icon={"fas fa-euro-sign"}
                    link={"#"}
                    bottomBgc={"#40A9A0"}
                />
                <StatCard
                    backgroundColor={"#8776A7"}
                    title={"50"}
                    subTitle={"Pozostała ilość kredytów"}
                    icon={"fas fa-bolt"}
                    link={"#"}
                    bottomBgc={"#7D6B9F"}
                />
                <StatCard
                    backgroundColor={"#44B6AD"}
                    title={"50"}
                    subTitle={"Pozostała ilość kredytów"}
                    icon={"fas fa-barcode"}
                    link={"#"}
                    bottomBgc={"#40A9A0"}
                />
                <StatCard
                    backgroundColor={"#8776A7"}
                    title={"50"}
                    subTitle={"Pozostała ilość kredytów"}
                    icon={"fa fa-shopping-cart"}
                    link={"#"}
                    bottomBgc={"#7D6B9F"}
                />
                <StatCard
                    backgroundColor={"#588FBE"}
                    title={"50"}
                    subTitle={"Pozostała ilość kredytów"}
                    icon={"fas fa-users"}
                    link={"#"}
                    bottomBgc={"#4A86B9"}
                />
                <StatCard
                    backgroundColor={"#E45B5A"}
                    title={"50"}
                    subTitle={"Pozostała ilość kredytów"}
                    icon={"fas fa-dollar-sign"}
                    link={"#"}
                    bottomBgc={"#E04C4B"}
                />
            </div>
        </div>
    );
};

export default Statistic;