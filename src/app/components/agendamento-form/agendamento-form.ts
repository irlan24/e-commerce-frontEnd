import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';





@Component({
  selector: 'app-agendamento-form',
  imports: [ReactiveFormsModule],
  templateUrl: './agendamento-form.html',
  styleUrl: './agendamento-form.css',
})
export class AgendamentoForm {

  valorKit: Record<number, string> = {
    1: "R$ 28,00",
    2: "R$ 52,50",
    3: "R$ 100,00",
    4: "Necessário combinar valores"
  };

  valorOption = signal<number>(0);



  
  agendamentoForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.agendamentoForm = this.fb.group({

      nomeCliente: ['', Validators.required],

      telefone: ['', Validators.required],

      email: ['', Validators.email],

      kitId: ['', Validators.required],

      // quantidade: [1, Validators.required],

      observacoes: [''],

      dataEntrega: ['', Validators.required],

      horarioEntrega: ['', Validators.required],

      endereco: ['', Validators.required],

      complemento: [''],

      bairro: ['', Validators.required],

      referencia: ['']

    });

    

  }

  onSubmit() {

    if (this.agendamentoForm.valid) {

      console.log("Agendamento enviado");

    }else{
      this.agendamentoForm.markAllAsTouched();
      alert('Por favor, preencha todos os campos obrigatórios corretamente.');
      // console.log("Elemento " + this.agendamentoForm.controls + " necessário.")
    } 

  }

  aoMudarKit(evento: Event) {
    const elemento = evento.target as HTMLSelectElement;
    const id = Number(elemento.value);
    this.valorOption.set(id);
  }

}
