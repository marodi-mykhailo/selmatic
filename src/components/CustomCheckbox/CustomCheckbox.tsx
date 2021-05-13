import React, {FunctionComponent} from 'react';
import './CustomCheckbox.scss';
import {Checkbox} from "antd";
import {CheckboxChangeEvent} from "antd/lib/checkbox/Checkbox";

type CustomCheckboxPropsType = {
    text: string
    label: string
    checked?: boolean
    onChange?: (e: CheckboxChangeEvent) => void
    className?: string
}

const CustomCheckbox: FunctionComponent<CustomCheckboxPropsType> = ({
                                                                        text,
                                                                        label,
                                                                        checked,
                                                                        onChange,
                                                                        className,
                                                                        children
                                                                    }) => {


    return (
        <div className={`checkbox-wrapper ${className}`}>
            <p className={"checkbox-wrapper__text"}>
                {text}
            </p>
            <Checkbox
                checked={checked}
                onChange={onChange}
            >
                {label}
            </Checkbox>
            {children}
        </div>
    );
};

export default CustomCheckbox;