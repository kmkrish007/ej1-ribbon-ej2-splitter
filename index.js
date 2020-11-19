import { render } from "react-dom";
import "./index.css";
import * as React from "react";
import ReactDOM from "react-dom";
import createClass from "create-react-class";
import { SampleBase } from "./sample-base";
import {
  SplitterComponent,
  PanesDirective,
  PaneDirective
} from "@syncfusion/ej2-react-layouts";
import {
  ColumnDirective,
  ColumnsDirective,
  TreeGridComponent
} from "@syncfusion/ej2-react-treegrid";
import { Filter, Inject, Page, Sort } from "@syncfusion/ej2-react-treegrid";
import { DataManager, WebApiAdaptor } from "@syncfusion/ej2-data";
import { MenuComponent } from "@syncfusion/ej2-react-navigations";
import {
  AccordionComponent,
  AccordionItemDirective,
  AccordionItemsDirective
} from "@syncfusion/ej2-react-navigations";

window.React = React;
window.ReactDOM = ReactDOM;
window.createReactClass = createClass;

require("syncfusion-javascript/Scripts/ej/web/ej.web.all.min");
require("syncfusion-javascript/Content/ej/web/default-theme/ej.web.all.min.css");
require("syncfusion-javascript/Scripts/ej/common/ej.web.react.min");

/**
 *  Sample for code editor layout
 */
const EJ = window.EJ;

const imgStyle = {
  width: "20%",
  margin: "0 auto"
};
const paneImg = {
  margin: "auto auto 5px"
};
const lastPaneStyle = {
  padding: "auto auto 20px"
};
export class CodeEditor extends SampleBase {
  constructor() {
    super(...arguments);
    this.paneSize = "53%";
    this.minimumSize = "30%";
    this.data = new DataManager({
      adaptor: new WebApiAdaptor(),
      crossDomain: true,
      url:
        "https://ej2services.syncfusion.com/production/web-services/api/SelfReferenceData"
    });
  }

  innerSplitterElement() {
    return (
      <SplitterComponent
        id="codeEditor"
        ref={splitter => {
          this.innerSplitterInstance = splitter;
        }}
      >
        <PanesDirective>
          <PaneDirective size="29%" min="23%" content="#accordion_splitter" />
          <PaneDirective size="20%" min="15%" />
          <PaneDirective size="35%" min="35%" content="#treegrid_splitter" />
        </PanesDirective>
      </SplitterComponent>
    );
  }
  content0() {
    return (
      <div>
        Microsoft ASP.NET is a set of technologies in the Microsoft .NET
        Framework for building Web applications and XML Web services.
      </div>
    );
  }
  content1() {
    return (
      <div>
        The Model-View-Controller (MVC) architectural pattern separates an
        application into three main components: the model, the view, and the
        controller.
      </div>
    );
  }
  content2() {
    return (
      <div>
        JavaScript (JS) is an interpreted computer programming language.It was
        originally implemented as part of web browsers so that client-side
        scripts could interact with the user, control the browser, communicate
        asynchronously, and alter the document content that was displayed.
      </div>
    );
  }
  executeAction(args) {
    if (args.target.textContent == "Copy") console.log("Copy is clicked");
    else if (args.target.textContent == "Cut") console.log("Cut is clicked");
  }
  render() {
    return (
      <div id="target" className="control-section code-editor">
        <EJ.Ribbon
          id="defaultRibbon"
          width="100%"
          applicationTab-type="menu"
          applicationTab-menuItemID="ribbonmenu1"
          applicationTab-menuSettings-openOnClick={false}
        >
          <tabs>
            <tab id="home" text="HOME">
              <groups>
                <group text="Clipboard" alignType="rows">
                  <content>
                    <content
                      defaults-type="button"
                      defaults-width={60}
                      defaults-height={70}
                    >
                      <groups>
                        <group
                          id="cut"
                          text="Cut"
                          toolTip="Remove the selection and put it on clipboard"
                          buttonSettings-contentType="textandimage"
                          buttonSettings-prefixIcon="e-icon e-ribbon e-ribboncut"
                          buttonSettings-click="executeAction"
                        />
                        <group
                          id="copy"
                          text="Copy"
                          toolTip="Put a copy of selection on clipboard"
                          buttonSettings-contentType="textandimage"
                          buttonSettings-prefixIcon="e-icon e-ribbon e-ribboncopy"
                          buttonSettings-click="executeAction"
                        />
                      </groups>
                    </content>
                  </content>
                </group>
              </groups>
            </tab>
            <tab id="insert" text="INSERT">
              <groups>
                <group text="Tables" alignType="columns">
                  <content>
                    <content
                      defaults-type="button"
                      defaults-width={50}
                      defaults-height={70}
                    >
                      <groups>
                        <group
                          id="tables"
                          text="Tables"
                          buttonSettings-contentType="textandimage"
                          buttonSettings-imagePosition="imagetop"
                          buttonSettings-prefixIcon="e-icon e-ribbon e-table"
                          buttonSettings-click="executeAction"
                        />
                      </groups>
                    </content>
                  </content>
                </group>
                <group text="Illustrations" alignType="rows">
                  <content>
                    <content
                      defaults-type="button"
                      defaults-width={56}
                      defaults-height={70}
                    >
                      <groups>
                        <group
                          id="pictures"
                          text="Pictures"
                          buttonSettings-contentType="textandimage"
                          buttonSettings-imagePosition="imagetop"
                          buttonSettings-prefixIcon="e-icon e-ribbon e-picture"
                          buttonSettings-click="executeAction"
                        />
                        <group
                          id="videos"
                          text="Videos"
                          buttonSettings-contentType="textandimage"
                          buttonSettings-imagePosition="imagetop"
                          buttonSettings-prefixIcon="e-icon e-ribbon e-video"
                          buttonSettings-click="executeAction"
                        />
                        <group
                          id="shapes"
                          text="Shapes"
                          buttonSettings-contentType="textandimage"
                          buttonSettings-imagePosition="imagetop"
                          buttonSettings-prefixIcon="e-icon e-ribbon e-shape"
                          buttonSettings-click="executeAction"
                        />
                        <group
                          id="charts"
                          text="Charts"
                          buttonSettings-contentType="textandimage"
                          buttonSettings-imagePosition="imagetop"
                          buttonSettings-prefixIcon="e-icon e-ribbon e-chart"
                          buttonSettings-click="executeAction"
                        />
                      </groups>
                    </content>
                  </content>
                </group>
                <group text="Comments" alignType="rows">
                  <content>
                    <content
                      defaults-type="button"
                      defaults-width={70}
                      defaults-height={70}
                    >
                      <groups>
                        <group
                          id="comments"
                          text="Comments"
                          buttonSettings-contentType="textandimage"
                          buttonSettings-imagePosition="imagetop"
                          buttonSettings-prefixIcon="e-icon e-ribbon e-comment"
                          buttonSettings-click="executeAction"
                        />
                      </groups>
                    </content>
                  </content>
                </group>
              </groups>
            </tab>
          </tabs>
        </EJ.Ribbon>

        <ul id="ribbonmenu1">
          <li>
            <a>FILE</a>
            <ul>
              <li>
                <a>New</a>
              </li>
              <li>
                <a>Open</a>
              </li>
              <li>
                <a>Save</a>
              </li>
              <li>
                <a>Save As</a>
              </li>
              <li>
                <a>Print</a>
              </li>
            </ul>
          </li>
        </ul>
        <SplitterComponent
          id="splitter2"
          orientation="Vertical"
          height="100%"
          width="100%"
          ref={splitter => {
            this.splitterInstance = splitter;
          }}
        >
          <PanesDirective>
            <PaneDirective content="#defaultRibbon" />
            <PaneDirective
              size={this.paneSize}
              min={this.minimumSize}
              content={this.innerSplitterElement.bind(this)}
            />
          </PanesDirective>
        </SplitterComponent>
        <TreeGridComponent
          id="treegrid_splitter"
          dataSource={this.data}
          hasChildMapping="isParent"
          treeColumnIndex={1}
          idMapping="TaskID"
          parentIdMapping="ParentItem"
          height="260"
          allowPaging="true"
        >
          <ColumnsDirective>
            <ColumnDirective
              field="TaskID"
              headerText="Task ID"
              width="90"
              textAlign="Right"
            />
            <ColumnDirective
              field="TaskName"
              headerText="Task Name"
              width="180"
            />
            <ColumnDirective
              field="StartDate"
              headerText="Start Date"
              width="90"
              format="yMd"
              textAlign="Right"
              type="date"
            />
            <ColumnDirective
              field="Duration"
              headerText="Duration"
              width="80"
              textAlign="Right"
            />
          </ColumnsDirective>
          <Inject services={[Page]} />
        </TreeGridComponent>
        <AccordionComponent id="accordion_splitter">
          <AccordionItemsDirective>
            <AccordionItemDirective
              expanded="true"
              header="ASP.NET"
              content={this.content0}
            />
            <AccordionItemDirective
              header="ASP.NET MVC"
              content={this.content1}
            />
            <AccordionItemDirective
              header="JavaScript"
              content={this.content2}
            />
          </AccordionItemsDirective>
        </AccordionComponent>
      </div>
    );
  }
}

render(<CodeEditor />, document.getElementById("sample"));
