import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Partenariats } from '../../models/Partenariats';


@Injectable({
  providedIn: 'root'
})
export class PartenariatService {

  private usersUrl: string;
 
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {
    this.usersUrl = 'http://localhost:8055/Partenariat';
  }

  public findAll(): Observable<Partenariats[]> {
    return this.http.get<Partenariats[]>(this.usersUrl+"/retrieveAllPartenariat");
  }

  public save(partenariats: Partenariats) {
    return this.http.post<Partenariats>(this.usersUrl+"/add", partenariats);
  }
  updatePartenariats(id: number, partenariat: Partenariats): Observable<Partenariats> {
    return this.http.put<Partenariats>(`${this.usersUrl}/update/${id}`, partenariat);
  }

  deletePartenariats(id: number): Observable<void> {
    return this.http.delete<void>(`${this.usersUrl}/delete/${id}`);
  }
}
