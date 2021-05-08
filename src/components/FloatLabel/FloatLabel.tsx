import React, {FunctionComponent, useState} from 'react';
import './FloatLabel.scss';

type FloatLabelPropsType = {
    label: string
    value?: string
    type?: "input" | "select"
}

const FloatLabel: FunctionComponent<FloatLabelPropsType> = props => {
    const [focus, setFocus] = useState(false);
    const {children, label, value, type = "input"} = props;

    const labelClass =
        focus || (value && value.length !== 0) ? "label label-float" : "label";

    const getFontColor = (type: string) => {
        if (focus) {
            switch (type) {
                case "input":
                    return "fontColor--green"
                case "select":
                    return "fontColor--blue"
                default:
                    return ""
            }
        }
    }

    return (
        <div
            className="float-label"
            onBlur={() => setFocus(false)}
            onFocus={() => setFocus(true)}
        >
            {children}
            <label className={`${labelClass} ${getFontColor(type)}`}>{label}</label>
        </div>
    );
};

export default FloatLabel;
