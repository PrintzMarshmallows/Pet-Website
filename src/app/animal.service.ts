import { Injectable } from '@angular/core';
import { AnimalDetails } from './AnimalDetails';

@Injectable({
  providedIn: 'root'
})

export class AnimalService {
  url = 'http://localhost:3000/pets';

  async getAllAnimalDetails(): Promise<AnimalDetails[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getAnimalDetailsById(id: number): Promise<AnimalDetails | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Adoption application received: First Name: ${firstName}, Last Name: ${lastName}, Email: ${email}`);
  }
}
