import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  DocumentEditorContainerComponent,
  Toolbar,
  Inject,
} from "@syncfusion/ej2-react-documenteditor";
function App() {
  return (
    <div className="App">
      <DocumentEditorContainerComponent height="590" enableToolbar={true}>
        <Inject services={[Toolbar]}></Inject>
      </DocumentEditorContainerComponent>
    </div>
  );
}

export default App;
