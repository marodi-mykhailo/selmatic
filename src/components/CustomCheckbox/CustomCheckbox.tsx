import React, {FunctionComponent} from 'react';
import './CustomCheckbox.scss';
import {Checkbox} from "antd";
import {CheckboxChangeEvent} from "antd/lib/checkbox/Checkbox";

type CustomCheckboxPropsType = {
    text: string
    checked?: boolean
    onChange?: (e: CheckboxChangeEvent) => void
    className?: string
}

const CustomCheckbox: FunctionComponent<CustomCheckboxPropsType> = ({
                                                                        text,
                                                                        checked,
                                                                        onChange,
                                                                        className,
                                                                        children
                                                                    }) => {


    return (
        <div className={`checkbox-wrapper ${className}`}>
            <div style={{display: "flex"}}>
                <Checkbox
                    checked={checked}
                    onChange={onChange}
                    className={"checkbox-wrapper__checkbox"}
                />
                <p className={"checkbox-wrapper__text"}>
                    {text}
                </p>
            </div>
            {children}
        </div>
    );
};

export default CustomCheckbox;