import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase,AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-notice',
  templateUrl: './notice.page.html',
  styleUrls: ['./notice.page.scss'],
})
export class NoticePage implements OnInit {
id:String;
itemRef: AngularFireObject<any>;
 publicacion:any={}; 
  constructor(private activatedRoute:ActivatedRoute,public db: AngularFireDatabase) { 
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    this.itemRef = db.object('publicaciones/'+this.id);
this.itemRef.snapshotChanges().subscribe(action => {
  console.log(action.type);
  console.log(action.key)
  console.log(action.payload.val())
  const $key=action.key;
  this.publicacion={$key,...action.payload.val()}
  console.log(this.publicacion);
  
});
    
  }

  ngOnInit() {
    
    

    
  }

}
