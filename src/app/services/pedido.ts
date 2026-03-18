import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PedidoService {

  private apiUrl = 'http://localhost:8080/pedidos';

  constructor(private http: HttpClient) {}

  criarPedido(dados: any) {
    return this.http.post(this.apiUrl, dados);
  }

}