import React, {useState} from 'react';
import './Notifications.scss';
import ContentBox from "../../../components/ContentBox/ContentBox";
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
                        className={`settings-page__content__item`}>

                <div style={{paddingTop: "10px"}}>

                    <CustomCheckbox
                        text={"Wysyłaj kopię wiadomości transakcyjnych (Emaile z kodami)"}
                        checked={sendMessageCopy}
                        onChange={(e) => setSendMessageCopy(e.target.checked)}
                        className={"mb20"}
                    >
                        {sendMessageCopy && <div className={"notification__hide__box"}>
                            <p>Email: </p>
                            <input value={email}
                                   style={{textAlign: "start", width: "max-content"}}
                                   onChange={(e) =>
                                       setEmail(e.currentTarget.value)}
                            />
                        </div>}
                    </CustomCheckbox>

                    <CustomCheckbox
                        text={"Powiadom mnie, gdy pojawi się nowa reklamacja"}
                        checked={notifyComplaint}
                        onChange={(e) => setNotifyComplaint(e.target.checked)}
                        className={"mb20"}
                    />

                    <CustomCheckbox
                        text={"Powiadom mnie, kiedy kończą się kredyty na koncie"}
                        checked={notifyCreditsLow}
                        onChange={(e) => setNotifyCreditsLow(e.target.checked)}
                        className={"mb20"}
                    >
                        {notifyCreditsLow && <div className={"notification__hide__box"}>
                            <p>Wyślij powiadomienie gdy ilość kredytów wynosi: </p>
                            <input value={creditsCount}
                                   type={"number"}
                                   onChange={(e) =>
                                       setCreditsCount(e.currentTarget.value)}
                            />
                        </div>}
                    </CustomCheckbox>

                    <CustomCheckbox
                        text={"Powiadom mnie, kiedy na koncie pozostanie 0 kredytów"}
                        checked={notifyCreditsZero}
                        onChange={(e) => setNotifyCreditsZero(e.target.checked)}
                        className={"mb20"}
                    />

                    <CustomCheckbox
                        text={"Powiadom mnie, kiedy w bazach skończą się kody"}
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