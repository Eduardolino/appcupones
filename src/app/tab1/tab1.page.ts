import { Component,OnInit,ViewChild } from '@angular/core';

import { AngularFireDatabase, AngularFireList,AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {IonSlides} from '@ionic/angular';
import {Router} from '@angular/router';
import { AngularFireModule } from '@angular/fire';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  /*segment:string='internacional';*/
  @ViewChild('slides',{static:true})slider:IonSlides;
  segment=0;
  itemsRef:AngularFireList<any>;
  itemsRef2: AngularFireList<any>;
  
  noticias: Observable<any[]>;
  publicaciones:Observable<any[]>;
  itemsRef3:AngularFireObject<any>;
  autor_p:any;
constructor(private route:Router,db: AngularFireDatabase){
 this.itemsRef3= db.object('usuarios'+'/cTSvLN6CgCeMaJFTPyqrYqdIBDk2');
  this.itemsRef = db.list('noticias');
    // Use snapshotChanges().map() to store the key
    this.noticias = this.itemsRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
    console.log(this.noticias);
    
    this.itemsRef2 = db.list('publicaciones');
    // Use snapshotChanges().map() to store the key
    this.publicaciones = this.itemsRef2.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val()/*,autor:
          pedirnombre(c.payload.val().autor_p)*/
         
        }))
      )
    );
    
    console.log('es este');
  /*  function pedirnombre(autor_p){
      
    
    /*  this.itemsRef3.snapshotChanges().subscribe(action => {
    
        console.log(action.payload.val().nombre,action.payload.val().apellido)
      
     /* this.itemRef3.snapshotChanges().subscribe(action => {
  
       console.log(action.payload.val().nombre,action.payload.val().apellido)
     */
      
 /* });
      return 'llego';
    }
    */
    
    
    
}
uno={
  
  slidesPerView:1.5,
 
};
irnoticia(key){
 console.log("esta es la llave que llega"+key);
 
  
  this.route.navigate(['/notice',{id:key}]);
  
}
irnoticiai(key){
console.log(key);

  this.route.navigate(['/notice-i',{id:key}]);
}
addnoteInt(){
  console.log();
  
  this.route.navigate(['./add-notice-int']);
}
addnoteNac(){
  this.route.navigate(['./add-notice-nal']);
}
ngOnInit() {

}
  async segmentChanged(){
await this.slider.slideTo(this.segment);
  }
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  
async slideChanged(){
  this.segment=await this.slider.getActiveIndex();
}
}
