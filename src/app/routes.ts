import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PetComponent } from './pet/pet.component';
import { LoginComponent } from './login/login.component';

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home',
    },
    {
        path: 'pet/:id',
        component: PetComponent,
        title: 'Pet',
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Login',
    },
];

export default routeConfig;