import { Routes } from '@angular/router';
import { AgendamentoForm } from './components/agendamento-form/agendamento-form';
import { Login } from './components/login/login';

export const routes: Routes = [
    { 
    path: 'pedidos', 
    component: AgendamentoForm 
    }, 

    { 
    path: 'login', 
    component: Login 
    }, 

    
];
