import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FormService {
  private scriptURL =
    'https://script.google.com/macros/s/AKfycbwJRAG9P7HZasrBLq6lG0iD7donHeyomf9jDqQMcYwCW4wnrW2F8tbS9OR0ppzS08XjNg/exec';

  constructor(private http: HttpClient) {}

  enviarFormulario(data: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.scriptURL, JSON.stringify(data), {
      headers,
      responseType: 'text',
    });
  }
}
