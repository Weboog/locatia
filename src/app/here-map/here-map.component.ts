import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  AfterViewInit,
} from '@angular/core';
import {HereMapService} from './here-map.service';
import {GeoLocation} from '../shared/custom-types/geo-location';

declare var H: any;
declare var mapboxgl: any;
declare var L: any;

@Component({
  selector: 'app-here-map',
  templateUrl: './here-map.component.html',
  styleUrls: ['./here-map.component.scss']
})
export class HereMapComponent implements OnInit, AfterViewInit {

  @ViewChild('map') public mapElement: ElementRef;
  @Input() appId: any;
  @Input() lat: string;
  @Input() lng: string;
  @Input() width: any;
  @Input() height: any;

  public constructor() { }

  public ngOnInit() {
  }


  private addMarker(map, location) {
    const parisMarker = new H.map.Marker({lat: location.coords.latitude, lng: location.coords.longitude});
    map.addObject(parisMarker);
}

  private loadMap(location) {
    const platform = new H.service.Platform({
      apikey: 'IfrDWyi7etu97J61RBCZ4Sa1o8DhFKyaWCCQqB6XPOo'
    });
    const maptypes = platform.createDefaultLayers();
    const map = new H.Map(
      this.mapElement.nativeElement,
      maptypes.vector.normal.map,
      {
        zoom: 11,
        center: { lat: location.coords.latitude, lng: location.coords.longitude },
        pixelRatio: window.devicePixelRatio || 1
      });

    this.addMarker(map, location);

    window.addEventListener('resize', () => map.getViewPort().resize());
    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
    const ui = H.ui.UI.createDefault(map, maptypes);
  }

  ngAfterViewInit() {
    /*if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition( position => {
            this.loadMap(position);
      });
    }*/
    /*if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition( position => {
        mapboxgl.accessToken = 'pk.eyJ1Ijoia2lsbHN5cmUiLCJhIjoiY2s4endkejVjMDduajNsbWpqa250cWl3dSJ9.nPbyD3D8wGKHBRXUbQU95A';
        const map = new mapboxgl.Map({
          container: document.getElementById('map'),
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [position.coords.longitude, position.coords.latitude],
          zoom: 12
        });
        new mapboxgl.Marker()
          .setLngLat([position.coords.longitude, position.coords.latitude])
          .addTo(map);
      });
    }*/

    const mymap = L.map('map').setView([33.971588, -6.849813], 11);
    L.marker([33.971588, -6.849813]).addTo(mymap);
    // tslint:disable-next-line:max-line-length
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      // tslint:disable-next-line:max-line-length
      attribution: '<span style="font-weight: 600; color: #ff0099">LOCATIA.&reg;</span>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1Ijoia2lsbHN5cmUiLCJhIjoiY2s4endkejVjMDduajNsbWpqa250cWl3dSJ9.nPbyD3D8wGKHBRXUbQU95A'
    }).addTo(mymap);
  }
}


