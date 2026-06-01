import {Component} from '@angular/core';
import {BaseNodeComponent} from "@visuallyjs/browser-ui-angular";

@Component({
  template: `
    <div class="vjs-chatbot-input" data-vjs-target="true">
      <div class="vjs-delete" (click)="removeNode()"></div>
      {{ data.message }}
      <textarea rows="5" cols="10" [placeholder]="getPrompt()"></textarea>
      <div class="vjs-chatbot-connect" data-vjs-source="true"></div>
    </div>
  `,
  standalone: true
})
export class InputComponent extends BaseNodeComponent {

    getPrompt():string {
        return this.data.prompt || ""
    }
}
