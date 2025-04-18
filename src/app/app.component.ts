import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { FormsModule } from '@angular/forms';
import { AccueilComponent } from "./accueil/accueil.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FormsModule, AccueilComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'quiz-app';
}
