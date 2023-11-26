import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getUser(githubUsername: string): Observable<any> {
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}`).pipe(
      catchError(this.handleError)
    );
  }

  getRepos(githubUsername: string, page: number, perPage: number): Observable<any> {
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}/repos?per_page=${perPage}&page=${page}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    let errorMessage = 'Something went wrong. Please try again later.';
    if (error.error instanceof ErrorEvent) {
       errorMessage =  `Error: ${error.error.message}`;
    }
    else{
      errorMessage = `Errors Code: ${error.status}\nMessage: ${error.message}`;
    }

    console.error('API error', error);
    return throwError(errorMessage)
  }
}
