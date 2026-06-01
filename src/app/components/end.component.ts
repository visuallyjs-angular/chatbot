import { Component} from '@angular/core';
import {BaseNodeComponent} from "@visuallyjs/browser-ui-angular";

@Component({
  template: `
    <div class="vjs-chatbot-end" data-vjs-target="true">
      <div class="vjs-chatbot-end-icon"></div>
    </div>
  `,
  standalone: true
})
export class EndComponent extends BaseNodeComponent {
}
