import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalService } from '../animal.service';
import { AnimalDetails } from '../AnimalDetails';
import { ActivatedRoute } from '@angular/router';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-pet',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <article> 
      <img
        class="listing-photo"
        [src]="animalDetails?.photo"
        alt="Exterior photo of {{ animalDetails?.animalName }}"
      />

      <section class="listing-info-container"> 
        <ul class="listing-info">
          <li> Name: {{ animalDetails?.animalName }} </li>
          <li> Age: {{ animalDetails?.age }}</li>
          <li>  </li>
        </ul>

        <p id="info"> {{ animalDetails?.info }} </p>
        
        <a [routerLink]="['/login']" id="adopt-link"> 
          Adopt Now
        </a>

      </section>

    </article>
  `,
  styleUrl: './pet.component.css'
})

export class PetComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  animalService = inject(AnimalService);

  animalDetails: AnimalDetails | undefined;

  

  animalID = -1;

  constructor() {
    const animalID = parseInt(this.route.snapshot.params['id']);

    this.animalService.getAnimalDetailsById(animalID).then((animalDetails) => {
      this.animalDetails = animalDetails;
    });
  }

}
