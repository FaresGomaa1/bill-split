import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemFormComponent } from './features/bill-splitter/components/item-form/item-form.component';
import { ItemListComponent } from './features/bill-splitter/components/item-list/item-list.component';
import { ParticipantFormComponent } from './features/bill-splitter/components/participant-form/participant-form.component';
import { ParticipantListComponent } from './features/bill-splitter/components/participant-list/participant-list.component';
import { SummaryDashboardComponent } from './features/bill-splitter/components/summary-dashboard/summary-dashboard.component';
import { CurrencyFormatPipe } from './shared/pipes/currency-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ItemFormComponent,
    ItemListComponent,
    ParticipantFormComponent,
    ParticipantListComponent,
    SummaryDashboardComponent,
    CurrencyFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
