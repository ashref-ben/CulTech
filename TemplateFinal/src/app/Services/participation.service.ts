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

  getAll(): Observable<Participation[]> {
    return this.http.get<Participation[]>(`${this.baseUrl}/all`);
  }

  getParticipationByUser(userId: number): Observable<Participation[]> {
    return this.http.get<Participation[]>(`${this.baseUrl}/getParticipationByUser/${userId}`);
  }

  addParticipation(participation: Participation): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrl}/add`, participation);
  }

  deleteParticipation(participationId: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseUrl}/delete/${participationId}`);
  }

  updateParticipation(participation: Participation): Observable<boolean> {
    return this.http.put<boolean>(`${this.baseUrl}/update`, participation);
  }
}
