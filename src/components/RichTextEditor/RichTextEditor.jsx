import '../RichTextEditor/RichTextEditor.css';
import * as React from 'react';
import {addClass, removeClass, Browser} from '@syncfusion/ej2-base';
import {
    RichTextEditorComponent,
    Toolbar,
    Inject,
    Image,
    Link,
    HtmlEditor,
    Count,
    QuickToolbar,
    Table
} from '@syncfusion/ej2-react-richtexteditor';
import {FileManager} from '@syncfusion/ej2-react-richtexteditor';
import {createElement} from '@syncfusion/ej2-base';
import {SampleBase} from './sample-base';
import * as CodeMirror from 'codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css.js';
import 'codemirror/mode/htmlmixed/htmlmixed.js';

export class RichTextEditor extends SampleBase {
    constructor() {
        super(...arguments);
        this.hostUrl = '';
        // Rich Text Editor items list
        this.items = ['Bold', 'Italic', 'Underline',
            'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
            'LowerCase', 'UpperCase', '|',
            'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
            'Outdent', 'Indent', 'SuperScript', 'SubScript', '|',
            'CreateTable', 'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
            'SourceCode', '|', 'Undo', 'Redo'
        ];
        this.quickToolbarSettings = {
            table: ['TableHeader', 'TableRows', 'TableColumns', 'TableCell', '-', 'BackgroundColor', 'TableRemove', 'TableCellVerticalAlign', 'Styles']
        };
        //Rich Text Editor ToolbarSettings
        this.toolbarSettings = {
            items: this.items
        };
    }

    mirrorConversion(e) {
        this.textArea = this.rteObj.contentModule.getEditPanel();
        let id = this.rteObj.getID() + 'mirror-view';
        let mirrorView = this.rteObj.element.querySelector('#' + id);
        let charCount = this.rteObj.element.querySelector('.e-rte-character-count');
        if (e.targetItem === 'Preview') {
            this.textArea.style.display = 'block';
            mirrorView.style.display = 'none';
            this.textArea.innerHTML = this.myCodeMirror.getValue();
            charCount.style.display = 'block';
        } else {
            if (!mirrorView) {
                mirrorView = createElement('div', {className: 'e-content'});
                mirrorView.id = id;
                this.textArea.parentNode.appendChild(mirrorView);
            } else {
                mirrorView.innerHTML = '';
            }
            this.textArea.style.display = 'none';
            mirrorView.style.display = 'block';
            this.renderCodeMirror(mirrorView, this.rteObj.value);
            charCount.style.display = 'none';
        }
    }

    renderCodeMirror(mirrorView, content) {
        this.myCodeMirror = CodeMirror(mirrorView, {
            value: content,
            lineNumbers: true,
            mode: 'text/html',
            lineWrapping: true,
        });
    }

    handleFullScreen(e) {
        let sbCntEle = document.querySelector('.sb-content.e-view');
        let sbHdrEle = document.querySelector('.sb-header.e-view');
        let leftBar;
        let transformElement;
        if (Browser.isDevice) {
            leftBar = document.querySelector('#right-sidebar');
            transformElement = document.querySelector('.sample-browser.e-view.e-content-animation');
        } else {
            leftBar = document.querySelector('#left-sidebar');
            transformElement = document.querySelector('#right-pane');
        }
        if (e.targetItem === 'Maximize') {
            if (Browser.isDevice && Browser.isIos) {
                addClass([sbCntEle, sbHdrEle], ['hide-header']);
            }
            addClass([leftBar], ['e-close']);
            removeClass([leftBar], ['e-open']);
            if (!Browser.isDevice) {
                transformElement.style.marginLeft = '0px';
            }
            transformElement.style.transform = 'inherit';
        } else if (e.targetItem === 'Minimize') {
            if (Browser.isDevice && Browser.isIos) {
                removeClass([sbCntEle, sbHdrEle], ['hide-header']);
            }
            removeClass([leftBar], ['e-close']);
            if (!Browser.isDevice) {
                addClass([leftBar], ['e-open']);
                transformElement.style.marginLeft = leftBar.offsetWidth + 'px';
            }
            transformElement.style.transform = 'translateX(0px)';
        }
    }

    actionCompleteHandler(e) {
        if (e.targetItem && (e.targetItem === 'SourceCode' || e.targetItem === 'Preview')) {
            this.rteObj.sourceCodeModule.getPanel().style.display = 'none';
            this.mirrorConversion(e);
        } else {
            setTimeout(() => {
                this.rteObj.toolbarModule.refreshToolbarOverflow();
            }, 400);
        }
    }

    render() {
        return (<div className='control-pane'>
            <div className='control-section' id="rteTools">
                <div className='rte-control-section'>
                    <RichTextEditorComponent id="toolsRTE"
                                             height={"300px"}
                                             ref={(richtexteditor) => {
                                                 this.rteObj = richtexteditor;
                                             }} showCharCount={true} actionBegin={this.handleFullScreen.bind(this)}
                                             actionComplete={this.actionCompleteHandler.bind(this)}
                                             toolbarSettings={this.toolbarSettings}
                                             fileManagerSettings={this.fileManagerSettings}
                                             quickToolbarSettings={this.quickToolbarSettings}>
                        <Inject services={[Toolbar, Image, Link, HtmlEditor, Count, QuickToolbar, Table, FileManager]}/>
                    </RichTextEditorComponent>
                </div>
            </div>

        </div>);
    }
}
