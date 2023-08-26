import { Component, OnInit } from '@angular/core';

interface Tarjeta{
  titulo:string;
  subtitulo:string;
  //nro?:number;//esta propiedad puede venir nula
  image:string;
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
      {titulo:"Jack Daniels",subtitulo:"subtitulo video 1",image:"../assets/wisky-1.jpg"},
      {titulo:"Jack Daniels 18 años",subtitulo:"subtitulo video 2",image:"../assets/wisky-2.jpg"},
      {titulo:"Old Parr",subtitulo:"subtitulo video 3",image:"../assets/wisky-3.jpg"}
    ]
  }
}

//el atributo title se inyecta en el html, lo voy a ver asi entre {{ title }} esto es interpolacion <span>{{ title }} app is running!</span> 
//crear componente ng 