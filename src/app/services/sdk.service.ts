import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SDKService {

  private serviceLocations: Object = {
    LOCAL: 'http://localhost:3000/api/'
  };
  
  private environment: string = 'LOCAL';

  constructor() { }

  getBaseURL() {
    return this.serviceLocations[this.environment];
  }

  setEnvirnoment(environment: string) {
    this.environment = environment;
  }

  getEnvironment(): string {
    return this.environment;
  }
}