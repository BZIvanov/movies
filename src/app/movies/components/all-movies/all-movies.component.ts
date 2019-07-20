import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { MoviesHandlerService } from '../../services/movies-handler.service';
import { Movie } from '../../../core/interfaces';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.scss']
})
export class AllMoviesComponent implements OnInit {
  private movies$: Observable<Array<Movie>>;
  
  constructor(private movieService: MoviesHandlerService) { }

  ngOnInit() {
    this.movies$ = this.movieService.getAllMovies();
  }
}
