import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProgrammeEchange } from '../models/programme-echange';

@Injectable({
  providedIn: 'root'
})
export class ProgrammeEchangeService {

  private baseUrl = 'http://localhost:8075/Progech';

  constructor(private http: HttpClient) { }

  getHello(): Observable<string> {
    return this.http.get<string>(`${this.baseUrl}/hey`);
  }

  getAllProgrammes(): Observable<ProgrammeEchange[]> {
    return this.http.get<ProgrammeEchange[]>(`${this.baseUrl}/getall`);
  }

  getProgrammeById(id: number): Observable<ProgrammeEchange> {
    return this.http.get<ProgrammeEchange>(`${this.baseUrl}/get/${id}`);
  }

  createProgramme(programme: ProgrammeEchange): Observable<ProgrammeEchange> {
    return this.http.post<ProgrammeEchange>(`${this.baseUrl}/add`, programme);
  }
  addProgrammeEchange(title: string, region: string, description: string, startDate: string, endDate: string, image: File): Observable<any> {
    const formData: FormData = new FormData();
  
    formData.append('title', title);
    formData.append('region', region);
    formData.append('description', description);
    formData.append('startDate', startDate);
    formData.append('endDate', endDate);
    formData.append('image', image, image.name);
  
    return this.http.post(`${this.baseUrl}/add`, formData);
  }
  updateProgrammeEchange(id:string,title: string, region: string, description: string, startDate: string, endDate: string, image: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('id', id);
    formData.append('title', title);
    formData.append('region', region);
    formData.append('description', description);
    formData.append('startDate', startDate);
    formData.append('endDate', endDate);
    formData.append('image', image, image.name);
  
    return this.http.put(`${this.baseUrl}/update`, formData);
  }
  

  deleteProgramme(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }
}

