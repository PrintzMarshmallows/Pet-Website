import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PetComponent } from './pet/pet.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AboutComponent } from './about/about.component';

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
    {
        path: 'register',
        component: RegisterComponent,
        title: 'Register'
    },
    {
        path: 'checkout',
        component: CheckoutComponent,
        title: 'Checkout'
    },
    {
        path: 'about',
        component: AboutComponent,
        title: 'About Us'
    }
];

export default routeConfig;