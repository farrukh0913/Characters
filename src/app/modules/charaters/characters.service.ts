import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CharactersService {
  constructor(private http: HttpClient) { }

  /**
   * get characters
   */
  getCharcterDetail() {
    return this.http.get("https://rickandmortyapi.com/api/character");
  }

  /**
   * get character detail by id
   * @param id character id
   */
  getSingleCharcterDetail(id: number) {
    return this.http.get(`https://rickandmortyapi.com/api/character/${id}`);
  }

}
