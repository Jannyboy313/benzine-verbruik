import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor() { }

  storeData(name: string, data: string) {
    localStorage.setItem(name, data);
  }

  getStoredData(name: string): string | null {
    return localStorage.getItem(name);
  }

  clearDataStorage() {
    sessionStorage.clear();
    localStorage.clear();
  }

}
