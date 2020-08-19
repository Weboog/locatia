import { Injectable } from "@angular/core";
import { Apart } from "../shared/custom-types/apart";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ApartsService {
  showHeaderBottomBorder = new Subject<boolean>();
  aparts: Apart[];
  registeredAparts: Apart[] = [];

  constructor(private httpClient: HttpClient) {}

  // http://db-services.web/apart/${id}
  // https://db-services.incoloria.com/apart/${id}
  getApart(id: string) {
    return this.httpClient.get(`https://db-services.incoloria.com/apart/${id}`);
  }

  getAparts() {
    return this.httpClient.get("https://db-services.incoloria.com/apart/");
    // return this.aparts.slice();
  }

  getRegisteredAparts(indexes: string[]) {
    this.registeredAparts = [];
    indexes.forEach((id) => {
      this.registeredAparts.push(
        this.aparts.find((apart) => {
          return apart.id === id;
        })
      );
    });
    return this.registeredAparts.slice();
  }
  getDescription(id: number) {
    return this.aparts[id].description;
  }

  incrementViewCount(id: string) {
    return this.httpClient.get(
      `https://db-services.incoloria.com/apart/increment/${id}`
    );
  }
}
