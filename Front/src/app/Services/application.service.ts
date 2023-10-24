import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplicationEchange } from '../models/application';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private baseUrl = 'http://localhost:8095/Application';
  constructor(private http: HttpClient) { }

  getAllApplications(): Observable<ApplicationEchange[]> {
    return this.http.get<ApplicationEchange[]>(`${this.baseUrl}/all`);
  }

  getApplicationById(id: number): Observable<ApplicationEchange> {
    return this.http.get<ApplicationEchange>(`${this.baseUrl}/${id}`);
  }

  addApplicationEchange(nomEtudiant: string, emailEtudiant: string, lettreDeMotivation: string, idProgrammeEchange: string, cv: File): Observable<any> {
    const formData: FormData = new FormData();
    
    formData.append('nomEtudiant', nomEtudiant);
    formData.append('emailEtudiant', emailEtudiant);
    formData.append('lettreDeMotivation', lettreDeMotivation);
    formData.append('idProgrammeEchange', idProgrammeEchange);
    formData.append('cv', cv, cv.name);

    return this.http.post(`${this.baseUrl}/add`, formData);
  }

  updateApplicationEchange(id: string, nomEtudiant: string, emailEtudiant: string, lettreDeMotivation: string, idProgrammeEchange: string, cv: File): Observable<any> {
    const formData: FormData = new FormData();
    
    formData.append('id', id);
    formData.append('nomEtudiant', nomEtudiant);
    formData.append('emailEtudiant', emailEtudiant);
    formData.append('lettreDeMotivation', lettreDeMotivation);
    formData.append('idProgrammeEchange', idProgrammeEchange);
    formData.append('cv', cv, cv.name);

    return this.http.put(`${this.baseUrl}/update`, formData);
  }

  deleteApplication(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }
}
