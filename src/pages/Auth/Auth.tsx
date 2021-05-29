import React from 'react';
import LoginForm from "../../components/LoginForm/LoginForm";
import background from "../../assets/img/bg-image.png";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const Auth = ({isRegister}: { isRegister: boolean }) => {
    return (
        <div style={{backgroundImage: `url(${background})`}}
             className={"auth"}>

            <div className={"auth__content"}>
                <span className={"header__logo"}>cybersent.net</span>

                <div className={"auth__box"}>
                    <h1 className={"page-title"}>{isRegister ? "Zaloguj się" : "Zarejestruj konto"}</h1>
                    {
                        isRegister
                            ? <>
                                <LoginForm/>
                                <div className={"auth__options"}>

                                    <div className={"auth__options__item"}>
                                        <h2 className={"page-title"}>Zaloguj się</h2>
                                        <p className={"auth-sub__link text-center"}>Kliknij tutaj aby odzyskać hasło.</p>
                                    </div>

                                    <div className={"auth__options__item"}>
                                        <h2 className={"page-title"}>Nie masz jeszcze konta?</h2>
                                        <p className={"auth-sub__link text-center"}>Zarejestruj się</p>
                                    </div>

                                </div>
                            </>
                            : <RegisterForm/>
                    }

                    <div className={"auth__footer"}>
                        <p className={"auth-sub__link text-center"}>cybersent.net 2021 All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;