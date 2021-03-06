import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SDKService } from './sdk.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseURL: string;
  private userData: any;

  constructor(private http: HttpClient, private sdkService: SDKService) {
    this.baseURL = sdkService.getBaseURL();
  }

  //CATALOG ITEMS
  getCatalogItems(filters = {}): Observable<any> {
    filters = JSON.stringify(filters);
    return this.http.get(this.baseURL + 'item-catalogs?filter=' + filters);
  }
  
  postCatalogItem(item): Observable<any> {
    return this.http.post(this.baseURL + 'item-catalogs', item);
  }

  deleteCatalogItem(id): Observable<any> {
    return this.http.delete(this.baseURL + 'item-catalogs/' + id);
  }

  //ACTIVE ITEMS
  getActiveItems(filters = {}): Observable<any> {
    filters = JSON.stringify(filters);
    return this.http.get(this.baseURL + 'item-actives?filter=' + filters);
  }

  deleteActiveItem(id): Observable<any> {
    return this.http.delete(this.baseURL + 'item-actives/' + id);
  }

  addActiveItem(item): Observable<any> {
    return this.http.post(this.baseURL + 'item-actives/', item);
  }

  updateActiveItem(item): Observable<any> {
    return this.http.put(this.baseURL + 'item-actives/' +  item.id, item);
  }

  //USERS
  getUsers(filters = {}): Observable<any> {
    filters = JSON.stringify(filters);
    return this.http.get(this.baseURL + 'tempusers?filter=' + filters);
  }

}