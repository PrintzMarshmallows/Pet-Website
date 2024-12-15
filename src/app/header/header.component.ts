import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
  
  <header id="header-container">
    <nav>
        <ul id="nav-links">
            <li><a [routerLink]="['/']">Home</a></li>
            <li><a [routerLink]="['about']">About</a></li>
            <li><a [routerLink]="['login']">Login</a></li>
        </ul>
    </nav>
  </header>
  
  `,

  styleUrl: './header.component.css'
})

export class HeaderComponent {

}
