import React, {useState} from 'react';
import "./Account.scss";
import PageTitle from "../../../components/PageTitle/PageTitle";
import MBreadcrumb, {MBreadcrumbItemType} from "../../../components/MBreadcrumb/MBreadcrumb";
import {v1} from "uuid";
import ContentBox from "../../../components/ContentBox/ContentBox";
import FloatLabel from "../../../components/FloatLabel/FloatLabel";
import {Button, Input, Select} from "antd";


const steps: Array<MBreadcrumbItemType> = [{
    id: v1(),
    name: "Ustawienia konta",
    link: ""
}]

const Account = () => {

    const [accountType, setAccountType] = useState()
    const [firsLastName, setFirsLastName] = useState<string>()
    const [companyName, setCompanyName] = useState<string>()
    const [address, setAddress] = useState<string>()
    const [zipCode, setZipCode] = useState<string>()
    const [city, setCity] = useState<string>()
    const [TIN, setTIN] = useState<string>()
    const [phoneNumber, setPhoneNumber] = useState<string>()
    const [country, setCountry] = useState()

    const [email, setEmail] = useState<string>()
    const [avatar, setAvatar] = useState<FileList | null>()
    const [nonActiveTime, setNonActiveTime] = useState<string>("120")
    const [currentPass, setCurrentPass] = useState<string>()
    const [newPass, setNewPass] = useState<string>()
    const [newPassCheck, setNewPassCheck] = useState<string>()


    return (
        <div className={"settings-page"}>
            <PageTitle title={"Ustawienia konta"}
                       subtitle={"zmiana danych konta"}/>
            <MBreadcrumb steps={steps}/>
            <div className={"settings-page__content"}>
                <ContentBox title={"Dane personalne"}
                            icon={"fas fa-cog"}
                            className={"settings-header settings-page__content__item settings-page__content__item--60"}>
                    <div className={"settings-page__content__input"}>
                        <FloatLabel label={"Typ konta"}
                                    value={accountType}
                                    type={"select"}
                        >
                            <Select showSearch
                                    style={{width: "100%"}}
                                    onChange={value => setAccountType(value)}
                                    value={accountType}
                                    className={"custom-select"}
                            >
                                <Select.Option value={'nonSelect'}>- wybierz -</Select.Option>
                                <Select.Option value={'private'}>Prywatne</Select.Option>
                                <Select.Option value={'company'}>Firmowe</Select.Option>
                            </Select>
                        </FloatLabel>
                    </div>

                    <div className={"settings-page__content__input"}>
                        <FloatLabel label={"Imię i Nazwisko"} value={firsLastName}>
                            <Input
                                className={"custom-input"}
                                value={firsLastName}
                                onChange={e => setFirsLastName(e.currentTarget.value)}/>
                        </FloatLabel>
                    </div>

                    <div className={"settings-page__content__input"}>
                        <FloatLabel label={"Pełna nazwa firmy"} value={companyName}>
                            <Input
                                className={"custom-input"}
                                value={companyName}
                                onChange={e => setCompanyName(e.currentTarget.value)}/>
                        </FloatLabel>
                    </div>

                    <div className={"settings-page__content__input"}>
                        <FloatLabel label={"Addres"} value={address}>
                            <Input
                                className={"custom-input"}
                                value={address}
                                onChange={e => setAddress(e.currentTarget.value)}/>
                        </FloatLabel>
                    </div>

                    <div className={"settings-page__content__input"}>
                        <FloatLabel label={"Kod pocztowy"} value={zipCode}>
                            <Input
                                className={"custom-input"}
                                value={zipCode}
                                onChange={e => setZipCode(e.currentTarget.value)}/>
                        </FloatLabel>
                    </div>

                    <div className={"settings-page__content__input"}>
                        <FloatLabel label={"Miasto"} value={city}>
                            <Input
                                className={"custom-input"}
                                value={city}
                                onChange={e => setCity(e.currentTarget.value)}/>
                        </FloatLabel>
                    </div>

                    <div className={"settings-page__content__input"}>
                        <FloatLabel label={"NIP"} value={TIN}>
                            <Input
                                className={"custom-input"}
                                value={TIN}
                                onChange={e => setTIN(e.currentTarget.value)}/>
                        </FloatLabel>
                    </div>

                    <div className={"settings-page__content__input"}>
                        <FloatLabel label={"Telefon kontaktowy"} value={phoneNumber}>
                            <Input
                                className={"custom-input"}
                                value={phoneNumber}
                                onChange={e => setPhoneNumber(e.currentTarget.value)}/>
                        </FloatLabel>
                    </div>


                    <div className={"settings-page__content__input"}>
                        <FloatLabel label={"Państwo"}
                                    value={country}
                                    type={"select"}
                        >
                            <Select showSearch
                                    style={{width: "100%"}}
                                    onChange={value => setCountry(value)}
                                    value={country}
                                    className={"custom-select"}
                            >
                                <Select.Option value={'nonSelect'}>- wybierz -</Select.Option>
                                <Select.Option value={'poland'}>Polska</Select.Option>
                                <Select.Option value={'england'}>Wielka Brytania</Select.Option>
                            </Select>
                        </FloatLabel>
                    </div>

                    <Button className={"btn"}>
                        Zapisz zmiany
                    </Button>

                </ContentBox>

                <ContentBox title={"USTAWIENIA KONTA"}
                            icon={"fas fa-cog"}
                            className={"settings-header settings-page__content__item settings-page__content__item--40"}>


                    <div className={"settings-page__content__input"}>
                        <FloatLabel label={"Adres e-mail"} value={email}>
                            <Input
                                className={"custom-input"}
                                value={email}
                                onChange={e => setEmail(e.currentTarget.value)}/>
                        </FloatLabel>
                    </div>

                    <div className={"settings-page__content__input"}>
                        <input type={"file"}
                               id={"code_files"}
                               onChange={e => setAvatar(e.currentTarget.files)}
                        />
                        <label
                            style={{display: "block"}}
                            htmlFor={"code_files"}
                        >Avatar</label>
                    </div>


                    <div className={"settings-page__content__input"}>
                        <FloatLabel
                            label={"Maksymalny czas nieaktywności, po którym sesja wygasa"}
                            value={nonActiveTime}
                            type={"select"}
                        >
                            <Select showSearch
                                    style={{width: "100%"}}
                                    onChange={value => setNonActiveTime(value)}
                                    value={nonActiveTime}
                                    className={"custom-select"}
                            >
                                <Select.Option value={'5'}>5 minut</Select.Option>
                                <Select.Option value={'15'}>15 minut</Select.Option>
                                <Select.Option value={'30'}>30 minut</Select.Option>
                                <Select.Option value={'60'}>1 godzina</Select.Option>
                                <Select.Option value={'120'}>2 godziny</Select.Option>
                                <Select.Option value={'240'}>4 godziny</Select.Option>
                            </Select>
                        </FloatLabel>

                        <hr style={{margin: "60px 0 0px"}}/>

                        <div className={"settings-page__content__input"}>
                            Pozostaw puste, jeżeli nie chcesz aktualizować hasła.
                        </div>
                    </div>

                    <div className={"settings-page__content__input"}>
                        <FloatLabel label={"Aktualne hasło"} value={currentPass}>
                            <Input
                                className={"custom-input"}
                                value={currentPass}
                                onChange={e => setCurrentPass(e.currentTarget.value)}/>
                        </FloatLabel>
                    </div>

                    <div className={"settings-page__content__input"}>
                        <FloatLabel label={"Nowe hasło"} value={newPass}>
                            <Input
                                className={"custom-input"}
                                value={newPass}
                                onChange={e => setNewPass(e.currentTarget.value)}/>
                        </FloatLabel>
                    </div>

                    <div className={"settings-page__content__input"}>
                        <FloatLabel label={"Powtórz nowe hasło"} value={newPassCheck}>
                            <Input
                                className={"custom-input"}
                                value={newPassCheck}
                                onChange={e => setNewPassCheck(e.currentTarget.value)}/>
                        </FloatLabel>
                    </div>

                    <Button className={"btn"}>
                        Zapisz zmiany
                    </Button>

                </ContentBox>
            </div>

        </div>
    );
};

export default Account;