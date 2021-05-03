import React from 'react';
import MessageTemplatesTable from "../../components/MessageTemplatesTable/MessageTemplatesTable";
import PageTitle from "../../components/PageTitle/PageTitle";
import MBreadcrumb, {MBreadcrumbItemType} from "../../components/MBreadcrumb/MBreadcrumb";
import {v1} from "uuid";
import ContentBox from "../../components/ContentBox/ContentBox";

const steps: Array<MBreadcrumbItemType> = [{
    id: v1(),
    name: "Lista szablonów wiadomości",
    link: "#"
}]

const MessageTemplates = () => {
    return (
        <div>
            <PageTitle title={"Szablony wiadomości"} subtitle={"lista szablonów wiadomości"}/>
            <MBreadcrumb steps={steps}/>
            <ContentBox title={"Lista szablonów wiadomości"}>
                <MessageTemplatesTable/>
            </ContentBox>
        </div>
    );
};

export default MessageTemplates;