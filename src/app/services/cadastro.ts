import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {

  private apiUrl = 'http://localhost:8080/cadastro';

  constructor(private http: HttpClient) {}

  criarCadastro(dados: any) {
    return this.http.post(this.apiUrl, dados);
  }
}
