import React, {useState} from 'react';
import "../../pages/Auth/Auth.scss";
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox";
import {Button} from "antd";

const RegisterForm = () => {

    const [firstLastName, setFirstLastName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [pass, setPass] = useState<string>("")
    const [pass2, setPass2] = useState<string>("")
    const [isRemember, setIsRemember] = useState<boolean>(false)


    return (
        <form className={"auth__form"}>
            <div className={"auth__form__item"}>
                <i className="fas fa-font"/>
                <input type={"firstLastName"}
                       value={firstLastName}
                       onChange={e => setFirstLastName(e.currentTarget.value)}/>
            </div>
            <div className={"auth__form__item"}>
                <i className="fas fa-user"/>
                <input type={"email"}
                       value={email}
                       onChange={e => setEmail(e.currentTarget.value)}/>
            </div>
            <div className={"auth__form__item"}>
                <i className="fas fa-lock"/>
                <input type={"password"}
                       value={pass}
                       onChange={e => setPass(e.currentTarget.value)}
                />
            </div>

            <div className={"auth__form__item"}>
                <i className="fas fa-check"/>
                <input type={"password"}
                       value={pass2}
                       onChange={e => setPass2(e.currentTarget.value)}
                />
            </div>

            <div style={{margin: "30px 0"}} className={"flex-column center"}>
                <CustomCheckbox
                    text={"Akceptuję regulamin"}
                    checked={isRemember}
                    onChange={(e) => setIsRemember(e.target.checked)}
                    className={"auth__form__checkbox"}
                />

                <Button className={"btn btn--light-blue"}>
                    Załóż konto
                </Button>
            </div>

        </form>
    );
};

export default RegisterForm;