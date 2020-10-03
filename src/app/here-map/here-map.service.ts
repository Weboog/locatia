import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GeoLocation} from '../shared/custom-types/geo-location';

@Injectable({
  providedIn: 'root'
})
export class HereMapService {

  constructor( private httpClient: HttpClient) { }

  getGeoLocation() {
    return this.httpClient.post<GeoLocation>(
      'https://pos.ls.hereapi.com/positioning/v1/locate?apiKey=IfrDWyi7etu97J61RBCZ4Sa1o8DhFKyaWCCQqB6XPOo',
      {
        gsm: [{
          mcc: 262,
          mnc: 1,
          lac: 5126,
          cid: 16504,
          nmr: [
            { bsic: '6', bcch: '82' },
            { bsic: '7', bcch: '85' },
            { bsic: '12', bcch: '93' },
            { bsic: '13', bcch: '88' },
            { bsic: '19', bcch: '88' }
          ]
        }]
      }
    );
  }
}
