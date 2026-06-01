import {AnchorLocations, BrowserElement, EdgeEventCallbackPayload, EVENT_TAP, NodeEventCallbackPayload,
    OverlayVisibility, PlainArrowOverlay, PortEventCallbackPayload} from "@visuallyjs/browser-ui";
import {ACTION_CHOICE, ACTION_INPUT, ACTION_MESSAGE, ACTION_TEST, END, SELECTABLE, START} from "./constants";
import {EndComponent} from "./components/end.component";
import {StartComponent} from "./components/start.component";
import {MessageComponent} from "./components/message.component";
import {InputComponent} from "./components/input.component";
import {ChoiceComponent} from "./components/choice.component";
import {TestComponent} from "./components/test.component";

const viewOptions = {
    nodes:{
        [SELECTABLE]:{
            events:{
                [EVENT_TAP]:(p:NodeEventCallbackPayload<BrowserElement>) => {
                    p.model.setSelection(p.obj)
                }
            }
        },
        [START]:{
            parent:SELECTABLE,
            component:StartComponent
        },
        [END]:{
            parent:SELECTABLE,
            component:EndComponent
        },
        [ACTION_MESSAGE]:{
            parent:SELECTABLE,
            component:MessageComponent
        },
        [ACTION_INPUT]:{
            parent:SELECTABLE,
            component:InputComponent
        },
        [ACTION_CHOICE]:{
            parent:SELECTABLE,
            component:ChoiceComponent
        },
        [ACTION_TEST]:{
            parent:SELECTABLE,
            component:TestComponent
        }
    },
    edges:{
        default:{
            deleteButton:"hover" as OverlayVisibility,
            overlays:[
            {
                type:PlainArrowOverlay.type,
                options:{
                    location:1,
                    width:10,
                    length:10
                }
            }
            ],
            label:"{{label}}",
            useHTMLLabel:true,
            events:{
                [EVENT_TAP]:(p:EdgeEventCallbackPayload) => {
                    p.model.setSelection(p.obj)
                }
            }
        }
    },
    ports:{
        choice:{
            anchor:[AnchorLocations.Left, AnchorLocations.Right ],
            events:{
            [EVENT_TAP]:(p:PortEventCallbackPayload<BrowserElement>) => {
                    p.model.setSelection(p.obj)
                }
            }
        }
    }
}

export default viewOptions
