import { Component, inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  amigos: Observable<any[]>;
  firestore : Firestore = inject(Firestore);
  
  constructor(private http : HttpClient, private route:Router) {

    let user = localStorage.getItem('user');
    if (user == null) {
      this.route.navigate(['/login']);
    }

     // traemos los eventos de firebase
     const amigoCollection = collection(this.firestore,'amigos');
     this.amigos = collectionData(amigoCollection,{
      idField: '_id'
    });
  }
  VerDetalle(amigo:any){
    // console.log(evento)  
    this.route.navigate(['/amigo/' + amigo._id])
  }
  
  registrar(){ 
    this.route.navigate(['/registraramigo/'])
  }

}
