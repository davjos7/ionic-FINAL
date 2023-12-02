import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Firestore, doc, docData } from '@angular/fire/firestore';


@Component({
  selector: 'app-amigo',
  templateUrl: './amigo.page.html',
  styleUrls: ['./amigo.page.scss'],
})
export class AmigoPage implements OnInit {
  amigo: any = {};
  firestore: Firestore = inject(Firestore);


  constructor(private route:ActivatedRoute,private http : HttpClient) {

    this.route.params.subscribe(params => {
      const amigo_id = params['id'];

      const amigo = doc(this.firestore,'amigos/'+ amigo_id);
      docData<any>(amigo).subscribe(data => {
        this.amigo = data;
      })


      //llamamos nuevamente a todo el JSON de eventos
      //this.http.get<any>('http://localhost:3000/amigo/detalle/'+amigo_id).subscribe(data =>{
       // console.log('amigos', data);
      //fin de llamada de eventos.json
      })
      
   // });

   }

  ngOnInit() {
  }

}

