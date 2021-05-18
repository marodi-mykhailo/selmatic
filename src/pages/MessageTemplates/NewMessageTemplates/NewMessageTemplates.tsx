import React, {useRef, useState} from 'react';
import './NewMessageTemplates.scss';
import MBreadcrumb, {MBreadcrumbItemType} from "../../../components/MBreadcrumb/MBreadcrumb";
import {v1} from "uuid";
import PageTitle from "../../../components/PageTitle/PageTitle";
import ContentBox from "../../../components/ContentBox/ContentBox";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/store";
import {appReducerType} from "../../../redux/app.reducer";
import FloatLabel from "../../../components/FloatLabel/FloatLabel";
import {Button, Input} from "antd";
import {RichTextEditor} from "../../../components/RichTextEditor/RichTextEditor";

const steps: Array<MBreadcrumbItemType> = [
    {
        id: v1(),
        name: "Szablony wiadomości",
        link: "/templates"
    }, {
        id: v1(),
        name: "Nowy szablon wiadomości",
        link: ""
    }
]

const NewMessageTemplates = () => {
    const {isDesktop} = useSelector<AppRootStateType, appReducerType>(state => state.app)

    const [templateName, setTemplateName] = useState<string>()
    const [emailTitle, setEmailTitle] = useState<string>()
    const [emailToResponse, setEmailToResponse] = useState<string>()

    const [text, setText] = useState<any>()

    const textEditor = useRef<any>()

    const onClickHandler = () => {
        console.log(textEditor)
    }


    return (
        <div>
            <PageTitle title={"Nowy szablon wiadomości"}/>
            <MBreadcrumb steps={steps}/>
            <div className={"space-between"}>
                <ContentBox title={"KONFIGURACJA SZABLONU WIADOMOŚCI"}
                            className={`${isDesktop && "settings-page__content__item--60"}`}>
                    <div className={"content-wrapper__content__item"}>
                        <FloatLabel label={"Nazwa szablonu"} value={templateName}>
                            <Input
                                className={"custom-input"}
                                value={templateName}
                                onChange={e => setTemplateName(e.currentTarget.value)}/>
                        </FloatLabel>
                    </div>
                    <div className={"content-wrapper__content__item"}>
                        <FloatLabel label={"Tytuł wiadomości e-mail"} value={emailTitle}>
                            <Input
                                className={"custom-input"}
                                value={emailTitle}
                                onChange={e => setEmailTitle(e.currentTarget.value)}/>
                        </FloatLabel>
                    </div>
                    <div className={"content-wrapper__content__item"}>
                        <FloatLabel label={"Adres e-mail do odpowiedzi"} value={emailToResponse}>
                            <Input
                                className={"custom-input"}
                                value={emailToResponse}
                                onChange={e => setEmailToResponse(e.currentTarget.value)}/>
                        </FloatLabel>
                    </div>

                    <RichTextEditor ref={textEditor}/>

                    <div style={{marginTop: "40px"}} className={"custom-checkbox"}>
                        <p className={"checkbox-wrapper__text"}>
                            Możliwość zgłaszania reklamacji
                        </p>
                        <label className={"custom-checkbox__label"}>
                            <input className={"custom-checkbox__input"}
                                   type="radio" name="radio" checked/>
                            <span className={"custom-checkbox__text"}>Tak</span>
                        </label>
                        <label className={"custom-checkbox__label"}>
                            <input className={"custom-checkbox__input"}
                                   type="radio" name="radio"/>
                            <span className={"custom-checkbox__text"}>Nie</span>
                        </label>
                    </div>

                    <Button style={{marginTop: "20px"}} className={"btn"}>
                        Dodaj Szablon
                    </Button>
                </ContentBox>

                <ContentBox title={"LISTA TAGÓW - INFORMACJE"}
                            className={`${isDesktop && "settings-page__content__item--40"} p-sticky`}>
                    <p>W treści wiadomości możesz użyć poniższych tagów, które zostaną zastąpione odpowiednio na:</p>

                    <ul>
                        <li><strong>[KOD]</strong> - kod pobrany z bazy</li>
                        <li><strong>[NAZWA_AUKCJI]</strong> - Nazwa zakupionego przedmiotu</li>
                        <li><strong>[ILOSC]</strong> - Ilość sztuk zakupionych przedmiotów</li>
                        <li><strong>[CENA]</strong> - Cena za sztukę</li>
                        <li><strong>[EMAIL]</strong> - Adres e-mail kupującego</li>
                        <li><strong>[TEL]</strong> - Telefon kupującego</li>
                        <li><strong>[ALLEGRO_LOGIN]</strong> - nazwa użytkownika Allegro</li>
                        <li><strong>[ALLEGRO_AUKCJA]</strong> - numer (id) aukcji Allegro</li>
                        <li><strong>[NAZWA_SPRZEDAJACEGO]</strong> - nazwa sprzedającego użytkownika (Twoja) Allegro
                        </li>
                    </ul>
                </ContentBox>
            </div>
        </div>
    );
};

export default NewMessageTemplates;