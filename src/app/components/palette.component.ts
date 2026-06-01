import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    PaletteComponent,
    PaletteComponent as VjsPaletteComponent,
    VisuallyJsModule
} from "@visuallyjs/browser-ui-angular";
import { ACTION_CHOICE, ACTION_INPUT, ACTION_MESSAGE, ACTION_TEST, nodeTypes } from "../constants";
import {BrowserElement} from "@visuallyjs/browser-ui";

@Component({
  selector: 'app-palette',
  template: `
    <div vjs-palette [dataGenerator]="dataGenerator" class="vjs-chatbot-palette">
      @for(nt of nodeTypes; track nt) {
          <div class="vjs-chatbot-palette-item" [attr.data-vjs-type]="nt.type">
			  {{ nt.label }}
		  </div>
      }
    </div>
  `,
  standalone: true,
  imports: [CommonModule, VisuallyJsModule]
})
export class ChatbotPaletteComponent {
  nodeTypes = nodeTypes;

  dataGenerator(el: BrowserElement) {
    const type = el.getAttribute("data-vjs-type")
    const base: any = { type }
    if (type === ACTION_MESSAGE) {
      Object.assign(base, { message: "Send a message" })
    } else if (type === ACTION_INPUT) {
      Object.assign(base, { message: "Grab some input", prompt: "please enter input" })
    } else if (type === ACTION_CHOICE) {
      Object.assign(base, {
        message: "Please choose:",
        choices: [
          { id: "1", label: "Choice 1" },
          { id: "2", label: "Choice 2" },
        ]
      })
    } else if (type === ACTION_TEST) {
      Object.assign(base, {
        message: "Test",
        choices: [
          { id: "1", label: "Result 1" },
          { id: "2", label: "Result 2" },
        ]
      })
    }
    return base
  }
}
