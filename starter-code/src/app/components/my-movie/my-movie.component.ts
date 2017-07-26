import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';


@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router) { }

  movieID: Number;

  ngOnInit() {
    this.route.params
      .subscribe((params)=> this.movieID = Number(params['id']));
  }

  goToHome(){
    this.router.navigate(['home']);
  }
}
