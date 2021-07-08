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

  isLoggedIn(): boolean {
    const cookies = document.cookie.split(';');
    for (let i=0; i < cookies.length; i++) {
      let cookie = cookies[i];
      while (cookie.charAt(0) == ' ') cookie = cookie.substring(1, cookie.length);
      if (cookie.indexOf("refresh-token=") == 0)
        return true;
    }
    return false;
  }

}
