import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import { AnimalDetails } from '../AnimalDetails';
import { RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-animal',
  standalone: true,
  imports: [RouterLink, CommonModule, RouterOutlet],
  template: `
  <a [routerLink]="['/pet', animalDetails.id]" target="_blank">
    <section class="listing"> 
        <img 
          class="listing-photo"
          [src]="animalDetails.photo"
          alt="Exterior photo of {{ animalDetails.animalName }}"
        />
        <h2 class="listing-heading"> {{ animalDetails.animalName}} </h2>
        <h3 class="listing-location"> {{ animalDetails.city }}, {{ animalDetails.country }} </h3>
    </section> 
  </a>
  `,
  styleUrl: './animal.component.css'
})

export class AnimalComponent {
  @Input() animalDetails!: AnimalDetails;
}


//<a [routerLink]="['/pet', animalDetails.animalID]> Learn more </a>