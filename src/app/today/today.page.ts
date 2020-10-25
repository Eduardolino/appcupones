import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-today',
  templateUrl: './today.page.html',
  styleUrls: ['./today.page.scss'],
})
export class TodayPage implements OnInit {

  constructor( 
    public alertController: AlertController,
    private router: Router,
    public toastController: ToastController) { }

  ngOnInit() {
  }
  obtenerCupon(){
    this.showConfirm();
  }

  async showConfirm() {
    this.alertController.create({
      header: 'CuponApp',
      subHeader: 'Cupon de descuentos %',
      message: 'Se agregara este cupon a su cuenta',
      buttons: [
        {
          text: 'Salir',
          handler: () => {
            console.log('I care about humanity');
          }
        },
        {
          text: 'Agregar',
          handler: () => {
            this.presentToast();
          //    this.router.navigate(['/mycoupons']);
          }
        }
      ]
    }).then(res => {
      res.present();
    });
  }
  async presentToast() {
    const toast = await this.toastController.create({
      color:'primary',
      message: 'Cupon Agregado Correctamente',
      duration: 2000
    });
    toast.present();
  }

}
