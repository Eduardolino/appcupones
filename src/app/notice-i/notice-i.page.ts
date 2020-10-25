import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { AngularFireDatabase,AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-notice-i',
  templateUrl: './notice-i.page.html',
  styleUrls: ['./notice-i.page.scss'],
})
export class NoticeIPage implements OnInit {
lugar:any;
img:any;
id:String;
itemRef:AngularFireObject<any>;
item:Observable<any>;
noticia:any={};
  constructor(private activatedRoute:ActivatedRoute,public db: AngularFireDatabase) { 

    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    this.itemRef = db.object('noticia/'+this.id);
   this.itemRef.snapshotChanges().subscribe(action => {
   console.log(action.type);
   console.log(action.key)
   console.log(action.payload.val())
   const $key=action.key;
   this.noticia={$key,...action.payload.val() }
   console.log(this.noticia);
   
   });
  }

  ngOnInit() {
    /*this.lugar=this.activatedRoute.snapshot.paramMap.get('lugar')
    this.img=this.activatedRoute.snapshot.paramMap.get('imge')*/
    
    
  }

}
