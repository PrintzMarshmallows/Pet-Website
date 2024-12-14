import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalComponent } from '../animal/animal.component';
import { AnimalDetails } from '../AnimalDetails';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AnimalComponent],
  template: `
    <section class="results">
      <app-animal *ngFor="let animalDetails of filteredAnimalList" [animalDetails]="animalDetails"></app-animal>
    </section>
    `,
  styleUrl: './home.component.css'
})

export class HomeComponent {
  animalList: AnimalDetails[] = [];

  filteredAnimalList: AnimalDetails[] = [];

  animalService: AnimalService = inject(AnimalService);

  constructor() {
    this.animalService.getAllAnimalDetails().then((animalList: AnimalDetails[]) => {
        this.animalList = animalList;
        this.filteredAnimalList = animalList;
    })
  }
}
