import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import animals from './animal-obj/animals.json';

@Component({
  selector: 'app-animals-page',
  templateUrl: './animals-page.component.html',
  styleUrls: ['./animals-page.component.scss']
})
export class AnimalsPageComponent implements OnInit {


  animals:any[]=[]
  jdata

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    Object.keys(animals).forEach(el=>{
      this.animals.push(animals[el])
    })
    this.jdata=animals;
  }

  goToAnimal(el) {
    this.router.navigate([`./${el.tipo}`], { relativeTo: this.route });
  }

}
