import React, {useRef} from 'react';
import './MobileApp.scss';
import PageTitle from "../../../components/PageTitle/PageTitle";
import MBreadcrumb, {MBreadcrumbItemType} from "../../../components/MBreadcrumb/MBreadcrumb";
import {v1} from "uuid";
import ContentBox from "../../../components/ContentBox/ContentBox";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/store";
import {AppReducerType, AppResponseType} from "../../../redux/app.reducer";
import {Button, Input} from "antd";


const steps: Array<MBreadcrumbItemType> = [{
    id: v1(),
    name: "Ustawienia mobilne",
    link: ""
}]

const MobileApp = () => {

    const {isDesktop} = useSelector<AppRootStateType, AppResponseType>(state => state.app.response)

    const textInput = useRef<Input>(null)


    const onCopy = () => {
        const input = textInput.current

        input?.select()
        input?.setSelectionRange(0, 99999);
        document.execCommand("copy");
    }


    return (
        <div className={'mobile-app-settings'}>
            <PageTitle title={"Ustawienia mobilne"}
                       subtitle={"konfiguracja aplikacji mobilnej"}/>
            <MBreadcrumb steps={steps}/>

            <div className={"settings-page__content"}>
                <ContentBox title={"Dane personalne"}
                            className={`settings-header settings-page__content__item ${isDesktop && "settings-page__content__item--40"}`}>

                    <div className={'mobile-app-settings__key'}>
                        <p className={'mobile-app-settings__key-text'}>Klucz dostępu</p>
                        <div className={"mobile-app-settings__key__input-box"}>
                            <Input type={'text'}
                                   value={"3123123"}
                                   ref={textInput}
                                   readOnly
                            />

                            <Button className={"btn btn--green"}
                                    onClick={onCopy}
                            >
                                Kopiuj
                            </Button>
                        </div>
                        <p className={'mobile-app-settings__key-text'}>
                            Wygenerowano dnia: 14/05/2021 10:03
                        </p>

                        <Button className={"btn"}>
                            Wygeneruj klucz ponownie
                        </Button>
                    </div>

                </ContentBox>

                <ContentBox title={"AKTYWNE URZĄDZENIA"}
                            className={`info-header settings-page__content__item 
                            ${isDesktop && "settings-page__content__item--60"}`}>
                </ContentBox>
            </div>
        </div>
    )
};

export default MobileApp;