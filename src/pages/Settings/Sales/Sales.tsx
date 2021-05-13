import React, {useState} from 'react';
import PageTitle from "../../../components/PageTitle/PageTitle";
import MBreadcrumb, {MBreadcrumbItemType} from "../../../components/MBreadcrumb/MBreadcrumb";
import {v1} from "uuid";
import ContentBox from "../../../components/ContentBox/ContentBox";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/store";
import {appReducerType} from "../../../redux/app.reducer";
import {Button, Checkbox} from "antd";


const steps: Array<MBreadcrumbItemType> = [{
    id: v1(),
    name: "Ustawienia sprzedaży",
    link: ""
}]

const Sales = () => {

    const {isDesktop} = useSelector<AppRootStateType, appReducerType>(state => state.app)

    const [commissionReturns, setCommissionReturns] = useState<boolean>()
    const [automateOff, setAutomateOff] = useState<boolean>()

    return (
        <div>
            <PageTitle title={"Ustawienia sprzedaży"}
                       subtitle={"konfiguracja sprzedaży"}/>
            <MBreadcrumb steps={steps}/>
            <div className={"settings-page__content"}>
                <ContentBox title={"ZWROTY PROWIZJI"}
                            icon={"fas fa-cog"}
                            className={`settings-header settings-page__content__item ${isDesktop && "settings-page__content__item--60"}`}>

                    <div className={"checkbox-wrapper"}>
                        <p className={"checkbox-wrapper__text"}>
                            Brak wpłaty od kupującego w terminie 14 dni od daty zakupu spowoduje wysłanie do Allegro
                            formularza zwrotu prowizji
                        </p>
                        <Checkbox
                            value={commissionReturns}
                            onChange={(e) => setCommissionReturns(e.target.checked)}
                        >
                            Aktywne
                        </Checkbox>
                    </div>

                    <Button style={{marginTop: "20px"}} className={"btn"}>
                        Zapisz zmiany
                    </Button>

                </ContentBox>


                <ContentBox title={"WYŁĄCZENIE AUTOMATU"}
                            icon={"fas fa-cog"}
                            className={`settings-header settings-page__content__item ${isDesktop && "settings-page__content__item--40"}`}>

                    <div className={"checkbox-wrapper"}>
                        <p className={"checkbox-wrapper__text"}>
                            Po wyłączeniu automatu transakcje nie będą księgowane ani realizowane przez Selmatic
                        </p>
                        <Checkbox
                            value={automateOff}
                            onChange={(e) => setAutomateOff(e.target.checked)}
                        >
                            Włącz automat dla całego konta
                        </Checkbox>
                    </div>

                    <Button style={{marginTop: "20px"}} className={"btn"}>
                        Zapisz zmiany
                    </Button>

                </ContentBox>
            </div>
        </div>
    );
};

export default Sales;