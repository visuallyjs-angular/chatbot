### Chatbot Builder Demo

This demo illustrates a chatbot conversation flow builder using VisuallyJS in an Angular application.

#### How it works

The demo uses the `vjs-surface` component to provide an interactive canvas where users can design chatbot logic. It features custom node types for questions, answers, and logic gates.

#### Components Used

- `vjs-surface`: The main drawing surface for the chatbot flow.
- `vjs-controls`: Standard zoom and navigation tools.
- `vjs-miniview`: A small navigation window with a custom `typeFunction` to determine how different node types are displayed in the miniview.

#### Component Options

The `vjs-surface` component is configured with:
- `viewOptions`: Defines node and edge types, and how data maps to them.
- `renderOptions`: Specifies visual styles, layouts, and interaction behaviors.
- `modelOptions`: Controls the behavior of the underlying graph data model.

#### Stylesheets

For the VisuallyJS components to render correctly, the following stylesheets must be included in the project (usually in `styles.css`):

```css
@import "@visuallyjs/browser-ui/css/visuallyjs.css";
@import "@visuallyjs/browser-ui-angular/css/visuallyjs-angular.css";
```
