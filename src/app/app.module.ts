import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TariffListComponent } from './tariff-list/tariff-list.component';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TariffData } from './tariff-data';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TariffFilterComponent } from './tariff-filter/tariff-filter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, TariffListComponent, TariffFilterComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(TariffData),
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
