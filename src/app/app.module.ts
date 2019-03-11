import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    ActiveItemsComponent,
    ActiveItemsMapComponent,
    DashboardComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    AutoCompleteModule,
    TableModule,
    DialogModule,
    ButtonModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoibXNpbGxlciIsImEiOiJjanNoeHJuMmYxaGJzNDRxZ3h1NWJrNXUxIn0.HzGVd3cMbsSqszrcCM8yTA' // Optionnal, can also be set per map (accessToken input of mgl-map)
    })
  ],
  providers: [DataService, SDKService],
  bootstrap: [AppComponent]
})
export class AppModule { }
