import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import animals from '../animal-obj/animals.json';

@Component({
  selector: 'app-animal-group-page',
  templateUrl: './animal-group-page.component.html',
  styleUrls: ['./animal-group-page.component.scss','../animals-page.component.scss']
})
export class AnimalGroupPageComponent implements OnInit {

  constructor( private route: ActivatedRoute) { }

  animals:any;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.animals=animals[id.toUpperCase()]

  }

  

}
