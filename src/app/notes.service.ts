import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from './note';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private notes_api_url: string = 'https://www.npmjs.com/package/json-server';

  constructor(private httpClient: HttpClient) {

  }


  getNotes(): Observable<Note[]> 
  {
    return this.httpClient.get<Note[]>(this.notes_api_url);

  }

  addNote(note: Note): Observable<Note> {
    return this.httpClient.post<Note>(this.notes_api_url, note);

  }

}
