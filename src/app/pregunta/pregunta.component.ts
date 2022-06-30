import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { PreguntaService } from '../services/pregunta.service';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {

  public nombreQ: string = '';
  preguntasList:any = [];
  preguntaActual: number = 0;
  puntos: number = 0;
  contador = 60;
  respuestaCorrecta:number = 0;
  respuestaIncorrecta: number = 0;
  intervalo$:any;
  progress:string = '0';
  QuizCompletado: boolean = false;
  constructor(private _preguntaService: PreguntaService) { }

  ngOnInit(): void {

    this.nombreQ = localStorage.getItem('nombre')!;
    this.getAllPreguntas();
    this.startCounter();
  }

  getAllPreguntas(){

    this._preguntaService.getPreguntaJson().subscribe(data=>{
      this.preguntasList = data.preguntas;
      
    })
  }

  nextPregunta(){

    this.preguntaActual += 1 
  }

  previusPregunta(){
    this.preguntaActual -= 1
  }

  respuesta(preguntaN: number, optiones:any){

    if(preguntaN=== this.preguntasList.length){

      this.QuizCompletado = true;
      this.stoptCounter();
    }
    if(optiones.correct){
      this.puntos+= 10;
      this.respuestaCorrecta++;
      setTimeout(() => {
        this.preguntaActual++;
      this.resetCounter()
      this.getProgress();
      }, 1000);
      
      

    }else{

      
      setTimeout(() => {
        this.preguntaActual++;
      this.respuestaIncorrecta++;
      this.resetCounter()
      this.getProgress();
      }, 1000);

      this.puntos-=10;
      
    }
  }

  startCounter(){

    this.intervalo$ = interval(1000).subscribe(val=>{
      this.contador--;
      if(this.contador===0){
        this.preguntaActual++
        this.contador=60;
        this.puntos-=10;
      }
    });
    setTimeout(() => {
      this.intervalo$.unsubscribe()
    }, 6000000);
  }

  stoptCounter(){
    this.intervalo$.unsubscribe()
    this.contador = 0;
  }

  resetCounter(){

    this.stoptCounter();
    this.contador = 60;
    this.progress = '0';
    this.startCounter();
  }

  resetQuiz(){
    this.resetCounter();
    this.getAllPreguntas();
    this.puntos = 0;
    this.contador= 60;
    this.preguntaActual = 0;


  }


  getProgress(){
    this.progress = ((this.preguntaActual/this.preguntasList.length)*100).toString()
    return this.progress
  }

}
