import React, {useRef, useState} from 'react';
import './NewMessageTemplates.scss';
import MBreadcrumb, {MBreadcrumbItemType} from "../../../components/MBreadcrumb/MBreadcrumb";
import {v1} from "uuid";
import PageTitle from "../../../components/PageTitle/PageTitle";
import ContentBox from "../../../components/ContentBox/ContentBox";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/store";
import {AppReducerType} from "../../../redux/app.reducer";
import FloatLabel from "../../../components/FloatLabel/FloatLabel";
import {Button, Input, message, Upload} from "antd";
import {RichTextEditor} from "../../../components/RichTextEditor/RichTextEditor";
import {PlusOutlined} from "@ant-design/icons";
import {RcFile, UploadChangeParam} from "antd/lib/upload/interface";

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

const acceptableTypes = ['image/png', "image/gif", "image/jpeg", "image/jpg",
    "application/pdf", "application/zip", "application/x-rar-compressed"]

const uploadProps = {
    beforeUpload: (file: RcFile) => {
        if (file.type && acceptableTypes.includes(file.type)) {
            message.info(`${file.name} it is a ${file.type}`);
            return true
        } else {
            message.error(`${file.name} not allowed type of file`);

            return Upload.LIST_IGNORE
        }
    },
    onChange: (info: UploadChangeParam) => {
        console.log(info.fileList);
    },
}

const dummyRequest = (props: any) => {
    setTimeout(() => {
        props.onSuccess("ok");
    }, 0);
};

const NewMessageTemplates = () => {
    const {isDesktop} = useSelector<AppRootStateType, AppReducerType>(state => state.app)

    const [templateName, setTemplateName] = useState<string>()
    const [emailTitle, setEmailTitle] = useState<string>()
    const [emailToResponse, setEmailToResponse] = useState<string>()

    const textEditor = useRef<any>()

    return (
        <div>
            <PageTitle title={"Nowy szablon wiadomości"}/>
            <MBreadcrumb steps={steps}/>
            <div className={"settings-page__content space-between"}>
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

                    <div style={{marginTop: "20px"}}>
                        <Upload {...uploadProps}
                                customRequest={dummyRequest}

                        >
                            <Button
                                className={"btn btn--green"}
                                icon={<PlusOutlined/>}>Upload</Button>
                        </Upload>
                    </div>


                    <div style={{display: "flex", marginTop: "35px"}}>
                        <Button style={{marginRight: "5px"}} className={"btn btn--blue"}>
                            ZAPISZ
                        </Button>
                        <Button className={"btn"}>
                            WYŚLIJ I ZAPISZ WIADOMOŚC TESTOWĄ
                        </Button>
                    </div>

                </ContentBox>

                <ContentBox title={"LISTA TAGÓW - INFORMACJE"}
                            className={`${isDesktop && "settings-page__content__item--40"} p-sticky templates__info__box`}>
                    <div className={"templates__info__box__content"}>
                        <p>W treści wiadomości możesz użyć poniższych tagów, które zostaną zastąpione odpowiednio
                            na:</p>

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
                    </div>
                </ContentBox>
            </div>
        </div>
    );
};

export default NewMessageTemplates;