import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import ParkDTO from '../models/dto/parkDTO.model';


@Injectable({
  providedIn: 'root'
})
export class ParksService {

  constructor(private _httpClient : HttpClient) { }

  getParks() : Observable<ParkDTO[]>{
    return this._httpClient.get<ParkDTO[]>('http://localhost:8080/api/parks/getParks')
  }


  uploadPark(fd: FormData): Observable<ParkDTO> {
  return this._httpClient.post<ParkDTO>('http://localhost:8080/api/parks/uploadPark', fd);
}

}