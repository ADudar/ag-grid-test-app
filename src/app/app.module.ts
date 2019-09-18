import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AgGridModule} from 'ag-grid-angular';
import 'ag-grid-enterprise';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CountStatusBarComponent} from './count-status-bar/count-status-bar.component';
import {CountSelectedRecordsComponent} from './count-selected-records/count-selected-records.component';

@NgModule({
  declarations: [
    AppComponent,
    CountStatusBarComponent,
    CountSelectedRecordsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule.withComponents([CountStatusBarComponent, CountSelectedRecordsComponent])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
