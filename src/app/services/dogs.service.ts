import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DogsService {
  constructor (private http: HttpClient) {}

  getRandom() {
    return this.http.get('https://dog.ceo/api/breeds/image/random');
  }
}
