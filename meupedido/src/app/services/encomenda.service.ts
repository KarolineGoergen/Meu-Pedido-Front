import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Encomenda } from '../models/encomenda';

@Injectable({
  providedIn: 'root'
})
export class EncomendaService{

    constructor(private http: HttpClient) { }

    findById(id: any): Observable<Encomenda>{
        return this.http.get<Encomenda>(`${API_CONFIG.baseUrl}/encomendas/${id}`);
    }

    findAll(): Observable<Encomenda[]> {
        return this.http.get<Encomenda[]>(`${API_CONFIG.baseUrl}/encomendas`);
    }

    create(encomenda: Encomenda): Observable<Encomenda> {
        return this.http.post<Encomenda>(`${API_CONFIG.baseUrl}/encomendas`, encomenda)
    }

    update(encomenda: Encomenda): Observable<Encomenda>{
        return this.http.put<Encomenda>(`${API_CONFIG.baseUrl}/encomendas/${encomenda.id}`, encomenda);
    }

    delete(encomenda: Encomenda): Observable<Encomenda>{
        return this.http.put<Encomenda>(`${API_CONFIG.baseUrl}/encomendas/${encomenda.id}`, encomenda);
    }
}