import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserSituation } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class SearchUserService {
  private readonly apiUrl = 'http://localhost:3001/users';
  private http = inject(HttpClient);

  getUserData(cpf: string): Observable<UserSituation[]> {
    return this.http.get<UserSituation[]>(`${this.apiUrl}?cpf=${cpf}`);
  }
}
