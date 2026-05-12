import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { uuid } from "@visuallyjs/browser-ui"
import {BaseNodeComponent} from "@visuallyjs/browser-ui-angular";

@Component({
  template: `<div class="vjs-chatbot-choice" data-vjs-target="true">
      <div class="vjs-delete" (click)="removeNode()"></div>
      <span style="padding:0.5rem">{{ data.message }}</span>
      <div class="vjs-choice-add" (click)="addChoice()"></div>
        @for(c of data.choices; track c) {
        <div class="vjs-chatbot-choice-option" 
           data-vjs-source="true" data-vjs-port-type="choice" [attr.data-vjs-port]="c.id" 
           (click)="$event.stopPropagation(); inspectChoice(c.id)">
        {{ c.label }}
        <div class="vjs-choice-delete" (click)="$event.stopPropagation(); removeChoice(c.id)"></div>
      </div>
		}
    </div>`,
  standalone: true
})
export class ChoiceComponent extends BaseNodeComponent {

  addChoice() {
    const p = this.model.addPort(this.getNode(), {
      id: uuid()
    })
    setTimeout(() => this.model.setSelection(p))
  }

  removeChoice(id: string) {
    this.model.removePort(this.getNode(), id)
  }

  inspectChoice(id: string) {
    this.model.setSelection(this.getNode().getPort(id))
  }
}
