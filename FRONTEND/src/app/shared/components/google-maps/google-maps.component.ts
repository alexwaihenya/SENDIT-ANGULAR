import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})
export class GoogleMapsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

//   mapOptions: google.maps.MapOptions = {
//     center: { lat: 38.9987208, lng: -77.2538699 },
//     zoom : 14
//  }
//  marker = {
//     position: { lat: 38.9987208, lng: -77.2538699 },
//  }

@ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined
display: any;
center: google.maps.LatLngLiteral = {
    lat: 0.0236,
    lng: 37.9062
};
zoom = 8;
moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = (event.latLng.toJSON());
}
move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
}
markerOptions: google.maps.MarkerOptions = {
  draggable: false
};
markerPositions: google.maps.LatLngLiteral[] = [];
addMarker(event: google.maps.MapMouseEvent) {
  if (event.latLng != null) this.markerPositions.push(event.latLng.toJSON());
}
openInfoWindow(marker: MapMarker) {
if (this.infoWindow != undefined) this.infoWindow.open(marker);
}

}
