import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';


@Component({
  selector: 'app-registraramigo',
  templateUrl: './registraramigo.page.html',
  styleUrls: ['./registraramigo.page.scss'],
})
export class RegistraramigoPage implements OnInit {

  nombre_completo : any = '';
  telefono : any = '';
  cumpleanos : any = '';
  correo : any = '';
  contrasena : any = '';

  notificar: boolean = false;
  firestore: Firestore = inject(Firestore);


  botones = [
    {
      text: 'Regresar',
      handler: () => {
        this.route.navigate(['/tabs/tabs2/']);
      },
    },
  ];
  constructor(private http : HttpClient, private route:Router) { }

  ngOnInit() {
  }

  guardar(){
    let valores = {
      'nombre_completo' : this.nombre_completo,
      'telefono' : this.telefono,
      'cumpleanos' : this.cumpleanos,
      'correo' : this.correo,
      'contrasena' : this.contrasena,
    }

    console.log(valores)

    addDoc(collection(this.firestore, "amigos"), valores);
    this.notificar = true;



    // let url = 'http://localhost:3000/amigos/registraramigo';
    // this.http.post(url, valores).subscribe(data =>{
    //   console.log('respuesta', data);

    //   this.notificar = true;  
    // })
    //console.log(data)
  }
  
}
