import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CadastroService } from '../../services/cadastro';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {

  cadastroForm: FormGroup;

  constructor(private fb: FormBuilder, private cadastroService: CadastroService) {
  
      this.cadastroForm = this.fb.group({
  
        nomeCliente: ['', [Validators.required, Validators.maxLength(25)]],
  
        telefone: ['', Validators.required],

        email: ['', Validators.email],
  
        usuario: ['', [Validators.required, Validators.minLength(4)]],
  
        senha: ['', [Validators.required, Validators.minLength(6)]],
        
  
      });
  
    }
  
    onSubmit() {
  
      const dados = this.cadastroForm.value;
  
      this.cadastroService.criarCadastro(dados).subscribe({
        next: (res) => {
          console.log('Sucesso', res);
        },
        error: (err) => {
          console.error('Erro', err);
        }
      });
  }
}