import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConditionsBuilderComponent } from './pages/conditions-builder/conditions-builder.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ConditionsBuilderComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sk-my-task';
}
