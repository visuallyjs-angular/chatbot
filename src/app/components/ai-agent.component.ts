import { Component } from '@angular/core';
import { BaseNodeComponent } from "@visuallyjs/browser-ui-angular";

@Component({
  template: `
    <div class="vjs-chatbot-ai" data-vjs-target="true">
      <div class="vjs-delete" (click)="removeNode()"></div>
      <div class="vjs-chatbot-ai-header">
        <span class="vjs-chatbot-ai-icon">✨</span>
        <span class="vjs-chatbot-ai-title">{{ data.label || 'AI Prompt / Agent' }}</span>
      </div>
      <div class="vjs-chatbot-ai-body">
        @for(c of data.choices; track c.id) {
          <div class="vjs-chatbot-choice-option" 
             data-vjs-source="true" data-vjs-port-type="choice" [attr.data-vjs-port]="c.id" 
             (click)="$event.stopPropagation(); inspectChoice(c.id)">
            {{ c.label }}
          </div>
        }
      </div>
    </div>
  `,
  standalone: true
})
export class AiAgentComponent extends BaseNodeComponent {
  inspectChoice(id: string) {
    this.model.setSelection(this.getNode().getPort(id))
  }
}
