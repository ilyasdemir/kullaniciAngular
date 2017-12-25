import { Injectable } from '@angular/core';
import { Kullanici } from './../models/Kullanici';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { parse } from 'url';
@Injectable()
export class KullaniciService {

  kulanicilar: Observable<Kullanici[]>;

  constructor(private http: HttpClient) { }
  getKullanicilar():Observable<Kullanici[]>{

    return this.http.get<Kullanici[]>('http://localhost:3000/api/kullanici');
    
  }
  girisYap(kAdi:string,sifre:string):Observable<Kullanici>{
    return this.http.get<Kullanici>('http://localhost:3000/api/kullanici/'+kAdi+'/'+sifre);
  }
}
