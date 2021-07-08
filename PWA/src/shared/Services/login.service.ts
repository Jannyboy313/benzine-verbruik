import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() {}

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
