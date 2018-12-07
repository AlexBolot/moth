import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "text/html" })
};
@Injectable({
  providedIn: 'root'
})
export class ChatBotService {
  baseURL = "http://fr.wikipedia.org/wiki/";

  constructor(private http: HttpClient) { }

  get(mot: string) {
    return this.baseURL + mot;
  }
}

