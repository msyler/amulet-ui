import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ActiveItemsComponent } from './components/active-items/active-items.component';
import { ActiveItemsMapComponent } from './components/active-items-map/active-items-map.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersComponent } from './components/users/users.component';


const appRoutes: Routes = [
  { path: 'catalog', component: CatalogComponent },
  { path: 'active-items', component: ActiveItemsComponent },
  { path: 'active-items-map', component: ActiveItemsMapComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: UsersComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }

  /*{ path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
  */
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})


export class AppRoutingModule {



}
