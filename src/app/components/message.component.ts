import { Component, Input } from '@angular/core';
import {BaseNodeComponent} from "@visuallyjs/browser-ui-angular";

@Component({
  template: `
    <div class="vjs-chatbot-message" data-vjs-target="true">
      <div class="vjs-delete" (click)="removeNode()"></div>
      {{ data.message }}
      <div class="vjs-chatbot-connect" data-vjs-source="true"></div>
    </div>
  `,
  standalone: true
})
export class MessageComponent extends BaseNodeComponent {
}
