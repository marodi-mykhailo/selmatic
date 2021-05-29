import React, {useState} from 'react';
import '../../pages/Auth/Auth.scss';
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox";
import {Button} from "antd";

const LoginForm = () => {

    const [email, setEmail] = useState<string>("")
    const [pass, setPass] = useState<string>("")
    const [isRemember, setIsRemember] = useState<boolean>(false)

    return (
        <form className={"auth__form"}>
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

            <div style={{marginTop: "30px"}} className={"space-between"}>
                <CustomCheckbox
                    text={"Zapamiętaj email"}
                    checked={isRemember}
                    onChange={(e) => setIsRemember(e.target.checked)}
                    className={"auth__form__checkbox"}
                />

                <Button className={"btn btn--light-blue"}>
                    ZALOGUJ
                </Button>
            </div>

        </form>
    )
};

export default LoginForm;