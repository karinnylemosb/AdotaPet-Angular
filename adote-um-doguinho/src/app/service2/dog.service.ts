import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  SERVER_URL = 'http://api.thedogapi.com/v1/images/search';

  constructor(private http: HttpClient) { }

public getDogs(){
  return this.http.get(`${this.SERVER_URL}`)
}

}
