import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private api: string = 'https://mailthis.to/sutachart_me@hotmail.com';
  constructor(private http: HttpClient) { }

  sendToEmail(input: any) {
    return this.http.post<any>(this.api, input);
  }
}