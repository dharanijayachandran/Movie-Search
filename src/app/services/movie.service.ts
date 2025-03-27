import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl = 'https://api.themoviedb.org/3/search/movie';
  private apiKey = 'e1ca94ae6e2622abc9f93ec9ebcf36c1'; // 🔹 Replace with your TMDb API Key

  constructor(private http: HttpClient) {}

  searchMovies(query: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?api_key=${this.apiKey}&query=${query}&include_adult=false`);
  }

}
