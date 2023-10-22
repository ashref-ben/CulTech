import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Participation } from '../models/participation';

@Injectable({
  providedIn: 'root'
})
export class ParticipationService {
  private baseUrl = 'http://localhost:8090/Participation';

  constructor(private http: HttpClient) {}

  getAllParticipations(): Observable<Participation[]> {
    return this.http.get<Participation[]>(`${this.baseUrl}/all`);
  }

  addParticipation(participation: Participation): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrl}/add`, participation);
  }

  deleteParticipation(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseUrl}/delete/${id}`);
  }

  updateParticipation(participation: Participation): Observable<boolean> {
    return this.http.put<boolean>(`${this.baseUrl}/update`, participation);
  }

  getParticipationById(id: number): Observable<Participation> {
    return this.http.get<Participation>(`${this.baseUrl}/getParticipation/${id}`);
  }
}
