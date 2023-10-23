import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Events } from '../models/event';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private baseUrl = 'http://localhost:8060/Event';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Events[]> {
    return this.http.get<Events[]>(`${this.baseUrl}/all`);
  }

  geteventsfromtoday(): Observable<Events[]> {
    return this.http.get<Events[]>(`${this.baseUrl}/geteventsfromtoday`);
  }

  add(event: Event): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrl}/add`, event);
  }

  delete(eventId: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseUrl}/delete/${eventId}`);
  }

  update(event: Event): Observable<boolean> {
    return this.http.put<boolean>(`${this.baseUrl}/update`, event);
  }
}
