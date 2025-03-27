import { Component } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent {
  searchTerm = '';
  movies: any[] = [];

  constructor(private movieService: MovieService) {}

  searchMovies() {
    if (this.searchTerm.trim() === '') return;

    this.movieService.searchMovies(this.searchTerm).subscribe((data) => {
      this.movies = data.results;
    });
  }
}
