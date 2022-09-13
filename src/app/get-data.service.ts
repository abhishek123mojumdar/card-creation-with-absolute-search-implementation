import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GetDataService {
  constructor(private http: HttpClient) {}

  public getDataForCards() {
    return this.http.get('https://gorest.co.in/public/v2/users');
  }
}
