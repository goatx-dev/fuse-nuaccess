import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  t: any;
  uid: any;
  url: any;
  un: any;
  role: any;

  constructor(private http: HttpClient) { 
      this.url='https://quadm.tech/data/';
    }

  getLocalStorage() {
    //
    if (localStorage.getItem('uid')===null) {
      this.uid="";
    } else {
      this.uid=localStorage.getItem('uid')
    }

    if (localStorage.getItem('un')===null) {
      this.un="";
    } else {
      this.un=localStorage.getItem('un')
    }

    if (localStorage.getItem('role')===null) {
      this.role="";
    } else {
      this.role=localStorage.getItem('role')
    }
  }

  getData(path: any, id: any, id2: any, id3: any) {
    this.getLocalStorage();
    const data = {
      "q" : path,
      "id": id,
      "id2": id2,
      "id3": id3,      
      "uid": this.uid
    }

  this.t= this.http.post(this.url, data);
  return this.t;

  }

  postForm(formID: any, formData: any[]) {
    this.getLocalStorage();
    const data = {
      "q" : formID,
      "data": formData,
      "uid": this.uid
    }

  this.t= this.http.post(this.url, data);
  return this.t;

  }

  postLogin(username: any, password: any) {
    const data = {
      "q" : "login",
      "username": username,
      "password": password
    }
  console.log(data)
  this.t= this.http.post(this.url, data);
  return this.t;

  }

  getVerticalMenu() {
    this.getLocalStorage()
    const data = {
      "q" : "vertical-menu",
      "role": this.role
    }

  this.t= this.http.post("https://quadm.tech/data/t.php", data);
  return this.t;

  }

  getUser() {
    this.getLocalStorage()
    const data = {
      "q" : "vertical-menu",
      "uid": this.uid,
      "role": this.role
    }

  this.t= this.http.post("https://quadm.tech/data/u.php", data);
  return this.t;

  }

}
