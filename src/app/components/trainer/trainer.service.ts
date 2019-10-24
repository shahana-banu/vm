import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";

@Injectable(
    { providedIn: 'root'}
)
export class TrainerService {
  constructor(private http: HttpClient, private router: Router) { }
  url = 'http://localhost:3000';
  getAlltrainer() {
    return this
      .http
      .get(`${this.url}/trainer`);
  }

  createTrainer(data) {
    this.http.post(`${this.url}/trainer`, data)
      .subscribe(
        res => {
          console.log(res);
          
          this.router.navigateByUrl('/trainer');
        }
      );

    }

    getTrainerById(id) {
        return this
          .http
          .get(`${this.url}/trainer`, id);
      }
    
        
}