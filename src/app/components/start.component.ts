import { Component} from '@angular/core';
import {BaseNodeComponent} from "@visuallyjs/browser-ui-angular";

@Component({
  template: `
    <div class="vjs-chatbot-start" data-vjs-source="true">
      <div class="vjs-chatbot-start-icon"></div>
    </div>
  `,
  standalone: true
})
export class StartComponent extends BaseNodeComponent {
}
