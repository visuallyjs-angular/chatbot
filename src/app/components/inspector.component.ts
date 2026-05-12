import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InspectorComponent, VisuallyJsModule} from "@visuallyjs/browser-ui-angular";
import {
  ACTION_TEST, ACTION_MESSAGE, ACTION_CHOICE, ACTION_INPUT, START, END
} from "../constants";

@Component({
  selector: 'app-inspector',
  template: `
    <div class="vjs-chatbot-inspector">
        @if(currentObjectType === NODE) {
            
            @if(currentType === '' || currentType === START || currentType === END) {
                <div></div>
			}
    
            @if(currentType === ACTION_MESSAGE || currentType === ACTION_CHOICE || currentType === ACTION_TEST)  {
                <span>Message:</span>
                <input type="text" vjs-att="message" placeholder="message" vjs-focus="true" />
			}
    
            @if(currentType === ACTION_INPUT) {
                <span>Message:</span>
                <input type="text" vjs-att="message" placeholder="message" />
                <span>Prompt:</span>
                <input type="text" vjs-att="prompt" placeholder="prompt" />
			}
    
            @if(currentType === CHOICE_PORT) {
                <span>Label:</span>
                <input type="text" vjs-att="label" vjs-focus="true" placeholder="enter label..." />
			}
		}

        @if(currentObjectType === EDGE || currentObjectType === PORT) {
            <div>Label</div>
            <input type="text" vjs-att="label" vjs-focus="true" />
		}
    </div>`,
  standalone: true,
  imports: [CommonModule, VisuallyJsModule]
})
export class ChatbotInspectorComponent extends InspectorComponent {
  CHOICE_PORT = "choicePort";
  START = START;
  END = END;
  ACTION_MESSAGE = ACTION_MESSAGE;
  ACTION_CHOICE = ACTION_CHOICE;
  ACTION_TEST = ACTION_TEST;
  ACTION_INPUT = ACTION_INPUT;

}
