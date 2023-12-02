import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
//agregamos los imports necesarios
import { Firestore, addDoc, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-registrarevento',
  templateUrl: './registrarevento.page.html',
  styleUrls: ['./registrarevento.page.scss'],
})
export class RegistrareventoPage implements OnInit {

  nombre : any = '';
  fecha : any = '';
  lugar : any = '';
  notas : any = '';

  notificar: boolean = false;
  //llamamos al modulo de firestore (base de datos de firebase)
  firestore: Firestore = inject(Firestore);

  botones = [
    {
      text: 'Regresar',
      handler: () => {
        this.route.navigate(['/tabs/tabs1/']);
      },
    },
  ];

  constructor(private http : HttpClient, private route:Router) { }

  ngOnInit() {
  }

  guardar(){
    let valores = {
      'nombre' : this.nombre,
      'lugar' : this.lugar,
      'fecha' : this.fecha,
      'notas' : this.notas,
    }

    console.log(valores)

    addDoc(collection(this.firestore, "eventos"), valores);
    this.notificar = true;

    // let url = 'http://localhost:3000/eventos/registrar';
    // this.http.post(url, valores).subscribe(data =>{
    //   console.log('respuesta', data);

    //   this.notificar = true;  
    // })
   // console.log(data)
  }
  
}
