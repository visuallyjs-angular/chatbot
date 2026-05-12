import { Component } from '@angular/core';
import { VisuallyJsModule } from "@visuallyjs/browser-ui-angular";

import renderOptions from "./render-options"
import viewOptions from "./view-options"
import modelOptions from "./model-options"
import {ChatbotPaletteComponent} from "./components/palette.component";
import {ChatbotInspectorComponent} from "./components/inspector.component";

import { Node, Group} from "@visuallyjs/browser-ui"

@Component({
  selector: 'app-root',
  imports: [VisuallyJsModule, ChatbotPaletteComponent, ChatbotInspectorComponent],
  templateUrl: './app.html'
})
export class App {
  renderOptions = renderOptions
  viewOptions= viewOptions
  modelOptions = modelOptions
  url = "/dataset.json"

    /**
     * Assign a type to miniview elements, which then is picked up by the CSS and colors each one.
     * @param v
     */
    miniviewType(v:Node|Group) {
      return v.type
    }
}
