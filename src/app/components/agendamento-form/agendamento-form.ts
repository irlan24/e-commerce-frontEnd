import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { PedidoService } from '../../services/pedido';





@Component({
  selector: 'app-agendamento-form',
  imports: [ReactiveFormsModule],
  templateUrl: './agendamento-form.html',
  styleUrl: './agendamento-form.css',
})
export class AgendamentoForm {

  valorKit: Record<string, string> = {
    "COMBO_MINI": "R$ 28,00",
    "COMBO_FAMILIA": "R$ 52,50",
    "COMBO_FESTA": "R$ 100,00",
    "COMBO_PERSONALIZADO": "Necessário combinar valores"
  };

  valorOption = signal<string>("");
  agendamentoForm: FormGroup;

  constructor(private fb: FormBuilder, private pedidoService: PedidoService) {

    this.agendamentoForm = this.fb.group({

      kitId: ['', Validators.required],

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

    const dados = this.agendamentoForm.value;

    this.pedidoService.criarPedido(dados).subscribe({
      next: (res) => {
        console.log('Sucesso', res);
      },
      error: (err) => {
        console.error('Erro', err);
      }
    });

    // if (this.agendamentoForm.valid) {

    //   console.log("Agendamento enviado");

    // }else{
    //   this.agendamentoForm.markAllAsTouched();
    //   alert('Por favor, preencha todos os campos obrigatórios corretamente.');
    //   // console.log("Elemento " + this.agendamentoForm.controls + " necessário.")
    // } 

  }

  aoMudarKit(event: Event) {
    const element = event.target as HTMLSelectElement;
    const id = element.value;
    this.valorOption.set(id);
  }

}
