import React, {useState} from 'react';
import ContentBox from "../../../components/ContentBox/ContentBox";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/store";
import {appReducerType} from "../../../redux/app.reducer";
import MBreadcrumb, {MBreadcrumbItemType} from "../../../components/MBreadcrumb/MBreadcrumb";
import {v1} from "uuid";
import PageTitle from "../../../components/PageTitle/PageTitle";
import CustomCheckbox from "../../../components/CustomCheckbox/CustomCheckbox";
import {Button} from "antd";

const steps: Array<MBreadcrumbItemType> = [{
    id: v1(),
    name: "Ustawienia powiadomień",
    link: ""
}]

const Notifications = () => {

    const {isDesktop} = useSelector<AppRootStateType, appReducerType>(state => state.app)

    const [sendMessageCopy, setSendMessageCopy] = useState<boolean>()
    const [notifyComplaint, setNotifyComplaint] = useState<boolean>()
    const [notifyCreditsLow, setNotifyCreditsLow] = useState<boolean>()
    const [notifyCreditsZero, setNotifyCreditsZero] = useState<boolean>()
    const [notifyCodesZero, setNotifyCodesZero] = useState<boolean>()

    const [email, setEmail] = useState<string>()
    const [creditsCount, setCreditsCount] = useState<string>()

    return (
        <div>
            <PageTitle title={"Ustawienia powiadomień"}
                       subtitle={"konfiguracja powiadomień mailowych"}/>
            <MBreadcrumb steps={steps}/>

            <ContentBox title={"Powiadomienia"}
                        icon={"fas fa-cog"}
                        className={`settings-header settings-page__content__item ${isDesktop && "settings-page__content__item--60"}`}>

                <div style={{paddingTop: "10px"}}>

                    <CustomCheckbox
                        text={"Wysyłaj kopię wiadomości transakcyjnych (maile z kodami)"}
                        label={"Aktywne"}
                        checked={sendMessageCopy}
                        onChange={(e) => setSendMessageCopy(e.target.checked)}
                        className={"mb20"}
                    >
                        {sendMessageCopy && <input value={email}
                                                   style={{marginLeft: "20px", border: "1px solid #E5E5E5"}}
                                                   onChange={(e) =>
                                                       setEmail(e.currentTarget.value)}
                        />}
                    </CustomCheckbox>

                    <CustomCheckbox
                        text={"Powiadom mnie, gdy pojawi się nowa reklamacja"}
                        label={"Aktywne"}
                        checked={notifyComplaint}
                        onChange={(e) => setNotifyComplaint(e.target.checked)}
                        className={"mb20"}
                    />

                    <CustomCheckbox
                        text={"Powiadom mnie, kiedy kończą się kredyty na koncie"}
                        label={"Aktywne"}
                        checked={notifyCreditsLow}
                        onChange={(e) => setNotifyCreditsLow(e.target.checked)}
                        className={"mb20"}
                    >
                        {notifyCreditsLow && <input value={creditsCount}
                                                    type={"number"}
                                                    style={{
                                                        width: "60px",
                                                        marginLeft: "20px",
                                                        border: "1px solid #E5E5E5"
                                                    }}
                                                    onChange={(e) =>
                                                        setCreditsCount(e.currentTarget.value)}
                        />}
                    </CustomCheckbox>

                    <CustomCheckbox
                        text={"Powiadom mnie, kiedy na koncie pozostanie 0 kredytów"}
                        label={"Aktywne"}
                        checked={notifyCreditsZero}
                        onChange={(e) => setNotifyCreditsZero(e.target.checked)}
                        className={"mb20"}
                    />

                    <CustomCheckbox
                        text={"Powiadom mnie, kiedy w bazach skończą się kody"}
                        label={"Aktywne"}
                        checked={notifyCodesZero}
                        onChange={(e) => setNotifyCodesZero(e.target.checked)}
                        className={"mb20"}
                    />

                    <Button style={{marginTop: "20px"}} className={"btn"}>
                        Zapisz zmiany
                    </Button>

                </div>

            </ContentBox>
        </div>
    );
};

export default Notifications;