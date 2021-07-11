// import React, {ChangeEvent, useState} from 'react';
// import './NewCodeDatabase.scss';
// import MBreadcrumb, {MBreadcrumbItemType} from "../../../components/MBreadcrumb/MBreadcrumb";
// import {v1} from "uuid";
// import PageTitle from "../../../components/PageTitle/PageTitle";
// import ContentBox from "../../../components/ContentBox/ContentBox";
// import FloatLabel from "../../../components/FloatLabel/FloatLabel";
// import {Button, Input, message, Select, Upload} from "antd";
// import TextArea from "antd/es/input/TextArea";
// import {PlusOutlined} from '@ant-design/icons';
// import {RcFile, UploadChangeParam} from "antd/lib/upload/interface";
// import {useParams} from "react-router-dom";
// import {useSelector} from "react-redux";
// import {AppRootStateType} from "../../../redux/store";
// import {CodeDatabaseItemType} from "../../../redux/codeDatabase.reduce";
//
// type TypeFileImport = "nonSelect" | "insertCodes" | "fromTxt" | "addFiles"
//
// type TypeCodeBase = "nonSelect" | "default" | "recursion"
//
// const steps: Array<MBreadcrumbItemType> = [{
//     id: v1(),
//     name: "Bazy kodów",
//     link: "/databases"
// }, {
//     id: v1(),
//     name: "Nowa baza kodów",
//     link: ""
// }]
//
// const acceptableTypes = ['image/png', "image/gif", "image/jpeg", "image/jpg",
//     "application/pdf", "application/zip", "application/x-rar-compressed"]
//
// const uploadProps = {
//     beforeUpload: (file: RcFile) => {
//         if (file.type && acceptableTypes.includes(file.type)) {
//             message.info(`${file.name} it is a ${file.type}`);
//             return true
//         } else {
//             message.error(`${file.name} not allowed type of file`);
//
//             return Upload.LIST_IGNORE
//         }
//     },
//     onChange: (info: UploadChangeParam) => {
//         console.log(info.fileList);
//     },
// }
//
// const dummyRequest = (props: any) => {
//     setTimeout(() => {
//         props.onSuccess("ok");
//     }, 0);
// };
//
// const UpdateCodeDatabase = () => {
//
//     const {id} = useParams<{ id?: string }>()
//
//     const codeDatabase = useSelector<AppRootStateType, CodeDatabaseItemType | undefined>(state =>
//         state.codeDatabase.find(item => item.id === Number(id))
//     )
//
//     const [codeBaseName, setCodeBaseName] = useState<string>(codeDatabase?.code || "")
//     const [codeBaseNameError, setCodeBaseNameError] = useState<string>("")
//
//     const [typeCodeBase, setTypeCodeBase] = useState<TypeCodeBase>()
//     const [typeCodeBaseError, setTypeCodeBaseError] = useState<string>()
//
//     const [typeFileImport, setTypeFileImport] = useState<TypeFileImport>()
//
//
//     const [textAreaCodes, setTextAreaCodes] = useState<string>()
//     const [codesFromTxt, setCodesFromTxt] = useState<any>()
//
//     const [codeFiles, setCodeFiles] = useState<FileList | null>()
//
//     const getCodesArrayFromFile = () => {
//         const file = codeFiles![0]
//
//         const reader = new FileReader();
//
//         reader.readAsText(file);
//
//         reader.onload = function () {
//             let res: any = []
//             let a = reader.result?.toString().split("\n")
//             a?.forEach(item => {
//                 if (item.trim().length > 0)
//                     res.push(item.trim())
//             })
//             console.log(res)
//
//             setCodesFromTxt(res)
//
//             // console.log(a?.map(item => item.trim()).filter(item => ite))
//             // setCodesFromTxt(c)
//         }
//         reader.onerror = function () {
//             console.log(reader.error)
//         }
//
//     }
//
//     const onCodeBaseNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
//         setCodeBaseName(e.currentTarget.value)
//         setCodeBaseNameError("")
//     }
//
//     const onTypeCodeBaseHandler = (value: TypeCodeBase) => {
//         setTypeCodeBase(value)
//         setTypeCodeBaseError("")
//     }
//
//     const checkInputs = () => {
//         if (!codeBaseName) {
//             setCodeBaseNameError("This field is required")
//         }
//         if (!typeCodeBase || typeCodeBase === "nonSelect") {
//             setTypeCodeBaseError("This field is required")
//         }
//     }
//
//
//     const createNewCodeDatabaseHandler = () => {
//
//         checkInputs()
//
//         switch (typeFileImport) {
//             case "nonSelect":
//                 return ''
//             case "insertCodes":
//                 console.log({
//                     db_name: codeBaseName,
//                     db_type: typeCodeBase,
//                     codes: textAreaCodes?.replace(/\n+/g, '\n')?.split('\n').map(item => item.trim())
//                 })
//                 return ""
//             case "fromTxt":
//                 getCodesArrayFromFile()
//                 console.log(codesFromTxt)
//                 return ""
//
//         }
//     }
//
//     const getTitle = (type: string | undefined) => {
//         switch (type) {
//             case "insertCodes":
//                 return "WKLEJ KODY"
//
//             case "fromTxt":
//                 return "IMPORTUJ BAZĘ KODÓW"
//
//             case "addFiles":
//                 return "DODAJ PLIKI"
//
//             default:
//                 return ""
//         }
//     }
//
//     return (
//         <div className={"new-code-database"}>
//             <PageTitle title={"Nowa baza kodów"} subtitle={""}/>
//             <MBreadcrumb steps={steps}/>
//             <div className={"content-wrapper"}>
//                 <ContentBox title={"SZCZEGÓŁY BAZY KODÓW"}>
//                     <div className={"content-wrapper__content"}>
//                         <div className={"content-wrapper__content__item"}>
//                             <FloatLabel label={"Nazwa bazy kodów"} value={codeBaseName}>
//                                 <Input
//                                     className={"custom-input"}
//                                     value={codeBaseName}
//                                     onChange={onCodeBaseNameHandler}/>
//                             </FloatLabel>
//                             {codeBaseNameError &&
//                             <span className={"content-wrapper__content__item--error"}>
//                                 {codeBaseNameError}
//                             </span>
//                             }
//                         </div>
//                         <div className={"content-wrapper__content__item"}>
//                             <FloatLabel label={"Rodzaj bazów kodów"}
//                                         value={typeCodeBase}
//                             >
//                                 <Select showSearch
//                                         style={{width: "100%"}}
//                                         onChange={value => onTypeCodeBaseHandler(value)}
//                                         value={typeCodeBase}
//                                         className={"custom-select"}
//                                 >
//                                     <Select.Option value={'nonSelect'}>- wybierz -</Select.Option>
//                                     <Select.Option value={'0'}>Baza zwykła</Select.Option>
//                                     <Select.Option value={'1'}>Baza rekurencyjna</Select.Option>
//                                 </Select>
//                             </FloatLabel>
//                             {typeCodeBaseError &&
//                             <span className={"content-wrapper__content__item--error"}>
//                                 {typeCodeBaseError}
//                             </span>
//                             }
//                         </div>
//                         <div className={"content-wrapper__content__item"}>
//                             <FloatLabel label={"Typ importu plików"}
//                                         value={typeFileImport}
//                             >
//                                 <Select showSearch
//                                         style={{width: "100%"}}
//                                         onChange={value => setTypeFileImport(value)}
//                                         value={typeFileImport}
//                                         className={"custom-select"}
//                                 >
//                                     <Select.Option value={'nonSelect'}>- wybierz -</Select.Option>
//                                     <Select.Option value={'insertCodes'}>Wklej kody</Select.Option>
//                                     <Select.Option value={'fromTxt'}>Import z pliku txt</Select.Option>
//                                     <Select.Option value={'addFiles'}>Załącz pliki</Select.Option>
//                                 </Select>
//                             </FloatLabel>
//                         </div>
//                     </div>
//
//                 </ContentBox>
//
//
//                 <ContentBox title={"Wskazówka"}
//                             className={"tip-box"}
//                 >
//                     <p className={"tip-box__text"}>
//                         Selmatic udostępnia dwa rodzaje baz kodów:
//                     </p>
//
//                     <p className={"tip-box__text"}>
//                         <b>Baza zwykła</b> - jeden kod zostaje wysłany do jednego kupującego (jednej transakcji),
//                         nie
//                         jest już dostępny w puli kodów do wysłania w kolejnych transakcjach.
//
//                     </p>
//
//                     <p className={"tip-box__text"}>
//                         <b> Baza rekurencyjna</b> - ten sam kod zostaje wysłany do wszystkich kupujących. Kod nie
//                         jest
//                         usuwany z puli kodów do wysłania.
//                     </p>
//
//                 </ContentBox>
//             </div>
//
//
//             {typeFileImport
//             && typeFileImport !== "nonSelect"
//             && <div style={{margin: "20px 0"}}>
//                 <ContentBox title={getTitle(typeFileImport)}>
//                     <div style={{margin: "20px 0", padding: "20px 0"}}>
//
//                         {/*Insert by TextArea*/}
//                         {typeFileImport
//                         && typeFileImport === "insertCodes"
//                         && <FloatLabel label={"Wklej tutaj kody (każdy w nowej linii)"}
//                                        value={textAreaCodes}>
//                             <TextArea
//                                 className={"custom-input custom-text-area"}
//                                 value={textAreaCodes}
//                                 size={"large"}
//                                 onChange={e => setTextAreaCodes(e.currentTarget.value)}/>
//                         </FloatLabel>
//                         }
//                         {/*/////////////////////////////*/}
//
//                         {typeFileImport
//                         && typeFileImport === "fromTxt"
//                         && <div>
//                             <input type={"file"}
//                                    id={"code_files"}
//                                    onChange={e => setCodeFiles(e.currentTarget.files)}
//                             />
//                             <label
//                                 style={{display: "block"}}
//                                 htmlFor={"code_files"}
//                             >Załącz plik txt z kodami (każdy w nowej linii)</label>
//                         </div>
//                         }
//                         {/*   ----------------------  */}
//
//
//                         {typeFileImport
//                         && typeFileImport === "addFiles"
//                         && <Upload {...uploadProps}
//                                    customRequest={dummyRequest}
//                         >
//                             <Button
//                                 className={"btn btn--green"}
//                                 icon={<PlusOutlined/>}>Upload</Button>
//                         </Upload>
//                         }
//
//                     </div>
//
//
//                     <Button className={"btn"}
//                             onClick={createNewCodeDatabaseHandler}
//                     >
//                         Dodaj bazę
//                     </Button>
//                 </ContentBox>
//             </div>
//             }
//         </div>
//     );
// };
//
// export default UpdateCodeDatabase;


export default 1