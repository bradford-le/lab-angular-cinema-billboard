import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {MyCinemaServiceService} from "../../services/my-cinema-service.service";


@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css'],
  providers: [MyCinemaServiceService]  //DON'T FORGET TO ADD SERVICE PROVIDERS!!!!!
})
export class MyMovieComponent implements OnInit {

  constructor(
    private route:ActivatedRoute, 
    private router:Router,
    private cinemaService: MyCinemaServiceService
  ) { }

  movie: any;

  ngOnInit() {
    this.route.params
      .subscribe((params)=> this.movie = this.cinemaService.getMovie(Number(params['id'])));
  }

  goToHome(){
    console.log("HOME CLICKED!");
    this.router.navigate(['home']);
  }
}
