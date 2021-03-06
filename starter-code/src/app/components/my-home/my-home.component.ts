import { Component, OnInit } from '@angular/core';
import {MyCinemaServiceService} from '../../services/my-cinema-service.service'; //don't inlclude service when creating service with angular-cli or you'll get dumb name with service twice
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css'],
  providers: [MyCinemaServiceService]
})
export class MyHomeComponent implements OnInit {

  movies: Array<Object> = this.cinemaService.getMovies();
  
  constructor(private cinemaService: MyCinemaServiceService,private router:Router) { }

  ngOnInit() {
  }

  viewDetails(id){
    this.router.navigate(['movie',id]);
  }

}
