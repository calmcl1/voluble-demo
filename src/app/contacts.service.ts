import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { VolubleRequest } from './voluble-request'
import { Contact } from './contacts/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private httpClient: HttpClient) {
  }

  get100Contacts(offset = 0): Observable<VolubleRequest<Contact[]>> {
    return this.httpClient.get<VolubleRequest<any[]>>(`${environment.volubleApiUrl}/contacts?offset=${offset}`)
      .pipe(retry(3))
  }

  getContact(id: string): Observable<VolubleRequest<Contact>> {
    return this.httpClient.get<VolubleRequest<Contact>>(`${environment.volubleApiUrl}/contacts/${id}`)
      .pipe(retry(3))
  }

  createNewContact(contact: Contact): Observable<VolubleRequest<Contact[]>> {
    return this.httpClient.post<VolubleRequest<Contact[]>>(`${environment.volubleApiUrl}/contacts/`, [contact])
  }

  deleteContact(contact_id: string): Observable<VolubleRequest<boolean>> {
    return this.httpClient.delete<VolubleRequest<boolean>>(`${environment.volubleApiUrl}/contacts/${contact_id}`)
  }
}
