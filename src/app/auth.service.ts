import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CookieService } from './cookie.service';

@Injectable({
  providedIn: 'root'  // This ensures the service is available globally
})

export class AuthService {
  private apiUrl = 'http://localhost:3000/users';  // URL to JSON server or your backend

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  // Method to validate user login
  validateUser(username: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(users => {
        const isValid = users.some(user => user.username === username && user.password === password)
        
        if (isValid) {
          this.cookieService.setCookie('loggedIn', 'true', 1);
        }
        return isValid;
      }),
      catchError(() => {
        return [false];
      })
    );
  }

  signUp(username: string, password: string): Observable<boolean> {
    // First check if the username already exists
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(users => {
        // If the username already exists, return false
        if (users.some(user => user.username === username)) {
          return false;
        }
        
        // Otherwise, create a new user and add it to the database
        const newUser = { username, password };
        this.http.post(this.apiUrl, newUser).subscribe(); // Create the new user
        
        this.cookieService.setCookie('loggedIn', 'true', 1);
        
        return true;  // Sign-up successful
      }),
      catchError(() => {
        // Handle any errors (e.g., network issues)
        return [false];
      })
    );
  }
}

