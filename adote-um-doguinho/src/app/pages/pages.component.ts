import { DogService } from './../service2/dog.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  qtdDogs: number = 6;
  dogs: any;


  constructor(
    private dogService: DogService
  ) {}

  ngOnInit() {
    this.dogService.getDogs().subscribe(
      (data) => {
        console.log(data);
        this.dogs = data;

      },
      (error) => {
        console.log(error)
      },


    )

  }



  getQtdDogs(): number {
    return this.dogs.length;
  }

}
