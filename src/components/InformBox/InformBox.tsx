import React, {FunctionComponent, useEffect} from 'react';
import './InformBox.scss';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {AppResponseType, AppStatusType, setStatus} from "../../redux/app.reducer";

const InformBox: FunctionComponent = ({children}) => {

    const {message, type} = useSelector<AppRootStateType, AppStatusType>(state => state.app.status)

    const isCollapsed = useSelector<AppRootStateType, boolean>(state => state.sidebar.isCollapsed)
    const {isMobile, isTablet} = useSelector<AppRootStateType, AppResponseType>(state => state.app.response)

    const dispatch = useDispatch()

    useEffect(() => {
        console.log("Inform box mounted")

        setTimeout(() => {
            if (type !== "idle") {
                dispatch(setStatus({type: "idle", message: ""}))
            }
        }, 3000)
    }, [type])


    const getStyle = () => {
        switch (type) {
            case "error":
                return "inform-box__error"
            case "idle":
                return ""
            case "loading":
                return ""
            case "success":
                return "inform-box__success"
            default:
                return ""
        }
    }

    const getIcon = () => {
        switch (type) {
            case "success":
                return "fas fa-check"
            case "loading":
                return ""
            case "idle":
                return ""
            case "error":
                return "far fa-times-circle"
            default:
                return ""
        }
    }


    const getLeftMargin = () => {
        return (isTablet || isMobile) ? "0" : isCollapsed ? "0" : "80px"
    }

    if (type === "idle") {
        return null;
    }

    return (
        <div style={{marginLeft: getLeftMargin()}} className={`inform-box ${getStyle()}`}>
            <span className={`inform-box__icon`}>
                <i className={getIcon()}/>
            </span>
            {message}
        </div>
    );
};

export default InformBox;