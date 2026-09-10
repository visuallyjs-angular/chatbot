import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InspectorComponent, VisuallyJsModule} from "@visuallyjs/browser-ui-angular";
import {
  ACTION_TEST, ACTION_MESSAGE, ACTION_CHOICE, ACTION_INPUT, ACTION_AI, START, END
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

            @if(currentType === ACTION_AI) {
                <span>Node Label:</span>
                <input type="text" vjs-att="label" placeholder="Analyze & Respond"/>
                <span>Model Selection:</span>
                <select vjs-att="model">
                    <option value="gpt-4o">gpt-4o</option>
                    <option value="gpt-4o-mini">gpt-4o-mini</option>
                    <option value="claude-3-5-sonnet">claude-3-5-sonnet</option>
                    <option value="custom-llm-api">custom-llm-api</option>
                </select>
                <span>System Prompt:</span>
                <textarea vjs-att="systemPrompt" rows="3"></textarea>
                <span>User Prompt / Input Binding:</span>
                <textarea vjs-att="userPrompt" rows="3"></textarea>
                <span>Temperature:</span>
                <input type="range" vjs-att="temperature" min="0" max="1" step="0.1"/>
                <span>Max Tokens:</span>
                <input type="number" vjs-att="maxTokens"/>
                <span>Output Variable:</span>
                <input type="text" vjs-att="outputVariable"/>
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
  ACTION_AI = ACTION_AI;

}
