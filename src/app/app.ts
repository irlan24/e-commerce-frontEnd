import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AgendamentoForm } from './components/agendamento-form/agendamento-form'
import { Header } from './components/header/header';







@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AgendamentoForm, Header],
  templateUrl: './app.html',
  styleUrl: './app.css',
  
})
export class App {
  // protected title = ('first-project-angular');
 
}
