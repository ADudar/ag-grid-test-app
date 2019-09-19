import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AgGridModule} from 'ag-grid-angular';
import 'ag-grid-enterprise';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RecordsCountComponent} from './components/grid/status-bars/records-count/records-count.component';
import {SelectedRecordsCountComponent} from './components/grid/status-bars/selected-records-count/selected-records-count.component';
import {SelectionToggleComponent} from './components/grid/status-bars/selection-toggle/selection-toggle.component';
import {CheckboxComponent} from './components/grid/cell-renderers/checkbox/checkbox.component';
import {FormsModule} from '@angular/forms';
import {GridComponent} from './components/grid/grid.component';
import {ContainerComponent} from './components/container/container.component';
import {LinkComponent} from './components/grid/cell-renderers/link/link.component';
import {DateComponent} from './components/grid/cell-renderers/date/date.component';
import {ImageComponent} from './components/grid/cell-renderers/image/image.component';

const agGridComponents = [
  RecordsCountComponent,
  SelectedRecordsCountComponent,
  SelectionToggleComponent,
  CheckboxComponent,
  LinkComponent,
  DateComponent,
  ImageComponent,
];


@NgModule({
  declarations: [
    AppComponent,
    ...agGridComponents,
    GridComponent,
    ContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule.withComponents(agGridComponents),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
