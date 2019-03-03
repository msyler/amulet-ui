import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

import { DataService } from './services/data.service';
import { SDKService } from './services/sdk.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ActiveItemsComponent } from './components/active-items/active-items.component';
import { ActiveItemsMapComponent } from './components/active-items-map/active-items-map.component';

import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    ActiveItemsComponent,
    ActiveItemsMapComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoibXNpbGxlciIsImEiOiJjanNoeHJuMmYxaGJzNDRxZ3h1NWJrNXUxIn0.HzGVd3cMbsSqszrcCM8yTA' // Optionnal, can also be set per map (accessToken input of mgl-map)
    })
  ],
  providers: [DataService, SDKService],
  bootstrap: [AppComponent]
})
export class AppModule { }
