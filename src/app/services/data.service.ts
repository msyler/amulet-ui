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

  //ITEMS
  getItems(filters = {}): Observable<any> {
    filters = JSON.stringify(filters);
    return this.http.get(this.baseURL + 'items?filter=' + filters);
  }

}