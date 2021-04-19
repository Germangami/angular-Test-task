import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { TablePageComponent } from './table-page/table-page.component';
import { TableDataDetailComponent } from './table-data-detail/table-data-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TablePageComponent,
    TableDataDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
