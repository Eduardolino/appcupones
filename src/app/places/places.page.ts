import { Component, OnInit, OnDestroy } from '@angular/core';
import * as Leaflet from 'leaflet';
import { antPath } from 'leaflet-ant-path';
@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit, OnDestroy{
  map: Leaflet.Map;
  constructor() { }
  ionViewDidEnter() { this.leafletMap(); }


  leafletMap() {
    this.loadMap();
    const markPoint2 = Leaflet.marker([13.972442, 77.594563]).addTo(this.map);
    markPoint2.bindPopup('<p>Tashi Delek - Bangalore 2</p>');
    const markPoint3 = Leaflet.marker([9.972442, 63.594563]).addTo(this.map);
    markPoint3.bindPopup('<p>Tashi Delek - Bangalore 2</p>');
    const markPoint4 = Leaflet.marker([7.972442, 47.594563]).addTo(this.map);
    markPoint4.bindPopup('<p>Tashi Delek - Bangalore 2</p>');
  }

  loadMap(){
    this.map = Leaflet.map('mapId').setView([28.644800, 77.216721], 5);
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'LeafLet',
    }).addTo(this.map);
  }
  ngOnInit() { }
  /** Remove map when we have multiple map object */
  ngOnDestroy() {
  }
}
