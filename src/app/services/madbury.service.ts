import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MadburyService {

  
  constructor(private http: HttpClient) { }

  getid() {
    return new Promise((resolve, reject) => {
      // this.showloader()
      this.http.get(environment.URL+'getid')

        .subscribe((success: any) => {
          // this.hideloader()
          return resolve(success);
        }, error => {
          return reject(error);
        });
    });
  }
}
