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

  getAllEvents(): Observable<Events[]> {
    return this.http.get<Events[]>(`${this.baseUrl}/all`);
  }

  addEvent(event: Events): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrl}/add`, event);
  }

  deleteEvent(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseUrl}/delete/${id}`);
  }

  updateEvent(event: Events): Observable<boolean> {
    return this.http.put<boolean>(`${this.baseUrl}/update`, event);
  }

  getEventById(id: number): Observable<Events> {
    return this.http.get<Events>(`${this.baseUrl}/getEvent/${id}`);
  }
}
