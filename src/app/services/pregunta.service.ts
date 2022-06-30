import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

  constructor(private http: HttpClient) { }

  getPreguntaJson(){
    return this.http.get<any>('assets/preguntas.json');
  }
}
