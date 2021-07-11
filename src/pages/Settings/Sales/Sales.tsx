import React, {useState} from 'react';
import PageTitle from "../../../components/PageTitle/PageTitle";
import MBreadcrumb, {MBreadcrumbItemType} from "../../../components/MBreadcrumb/MBreadcrumb";
import {v1} from "uuid";
import ContentBox from "../../../components/ContentBox/ContentBox";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/store";
import {AppReducerType, AppResponseType} from "../../../redux/app.reducer";
import {Button} from "antd";
import CustomCheckbox from "../../../components/CustomCheckbox/CustomCheckbox";


const steps: Array<MBreadcrumbItemType> = [{
    id: v1(),
    name: "Ustawienia sprzedaży",
    link: ""
}]

const Sales = () => {

    const {isDesktop} = useSelector<AppRootStateType, AppResponseType>(state => state.app.response)

    const [commissionReturns, setCommissionReturns] = useState<boolean>()
    const [automateOff, setAutomateOff] = useState<boolean>()

    return (
        <div>
            <PageTitle title={"Ustawienia sprzedaży"}
                       subtitle={"konfiguracja sprzedaży"}/>
            <MBreadcrumb steps={steps}/>
            <div className={"settings-page__content"}>
                <ContentBox title={"ZWROTY PROWIZJI"}
                            className={`settings-header settings-page__content__item ${isDesktop && "settings-page__content__item--60"}`}>

                    <CustomCheckbox
                        text={"Brak wpłaty od kupującego w terminie 14 dni od daty zakupu spowoduje wysłanie do Allegro formularza zwrotu prowizji"}
                        checked={commissionReturns}
                        onChange={(e) => setCommissionReturns(e.target.checked)}
                    />

                    <Button style={{marginTop: "20px"}} className={"btn"}>
                        Zapisz zmiany
                    </Button>

                </ContentBox>


                <ContentBox title={"WYŁĄCZENIE AUTOMATU"}
                            className={`settings-header settings-page__content__item ${isDesktop && "settings-page__content__item--40"}`}>

                    <CustomCheckbox
                        text={"Po wyłączeniu automatu transakcje nie będą księgowane ani realizowane przez Selmatic"}
                        checked={automateOff}
                        onChange={(e) => setAutomateOff(e.target.checked)}
                    />

                    <Button style={{marginTop: "20px"}} className={"btn"}>
                        Zapisz zmiany
                    </Button>

                </ContentBox>
            </div>
        </div>
    );
};

export default Sales;