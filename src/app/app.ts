import { Component, Input } from '@angular/core';
import { VisuallyJsModule } from "@visuallyjs/browser-ui-angular";
import { CommonModule } from '@angular/common';

import renderOptions from "./render-options"
import viewOptions from "./view-options"
import modelOptions from "./model-options"
import {ChatbotPaletteComponent} from "./components/palette.component";
import {ChatbotInspectorComponent} from "./components/inspector.component";

import { Node, Group} from "@visuallyjs/browser-ui"

@Component({
  selector: 'app-root',
  imports: [VisuallyJsModule, ChatbotPaletteComponent, ChatbotInspectorComponent, CommonModule],
  templateUrl: './app.html'
})
export class App {
  renderOptions = renderOptions
  viewOptions= viewOptions
  modelOptions = modelOptions
  
  @Input() url = "/dataset.json"
  @Input() hidePaletteAndInspector = false

    /**
     * Assign a type to miniview elements, which then is picked up by the CSS and colors each one.
     * @param v
     */
    miniviewType(v:Node|Group) {
      return v.type
    }
}
