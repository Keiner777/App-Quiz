import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  @ViewChild('nombre') nameKey!: ElementRef
  constructor() { }

  ngOnInit(): void {
  }

  Comenzar(){
    localStorage.setItem('nombre',this.nameKey.nativeElement.value);
  }

}
