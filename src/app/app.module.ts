import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProcessListComponent } from './components/process-list/process-list.component';
import { ProcessInfoComponent } from './components/process-info/process-info.component';
import { ProcessInstanceTasklistHistoryComponent } from './components/process-instance-tasklist-history/process-instance-tasklist-history.component';

@NgModule({
  declarations: [
    AppComponent,
    ProcessListComponent,
    ProcessInfoComponent,
    ProcessInstanceTasklistHistoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
