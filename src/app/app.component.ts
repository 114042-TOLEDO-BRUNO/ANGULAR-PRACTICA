import { Component, OnInit } from '@angular/core';

interface Tarjeta{
  titulo:string;
  subtitulo:string;
  nro?:number;//esta propiedad puede venir nula
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Mi primer app';
  public ArregloTarjetas:Tarjeta[]=[];

  ngOnInit(): void {//cuando se inicializa el proyecto se carga por unica vez este metodo
    this.ArregloTarjetas=[
      {titulo:"Video 1",subtitulo:"subtitulo video 1"},
      {titulo:"Video 2",subtitulo:"subtitulo video 2"},
      {titulo:"Video 3",subtitulo:"subtitulo video 3"}
    ]
  }
}

//el atributo title se inyecta en el html, lo voy a ver asi entre {{ title }} esto es interpolacion <span>{{ title }} app is running!</span> 
//crear componente ng 