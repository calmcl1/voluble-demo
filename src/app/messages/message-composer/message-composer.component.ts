import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { ContactsService } from 'src/app/contacts.service';
import { Contact } from 'src/app/contacts/contact';
import { MessagesService } from 'src/app/messages.service';
import { ServicechainService } from 'src/app/servicechain.service';
import { Servicechain } from 'src/app/servicechains/servicechain';
import { Message } from '../message';

@Component({
  selector: 'app-message-composer',
  templateUrl: './message-composer.component.html',
  styleUrls: ['./message-composer.component.css']
})
export class MessageComposerComponent implements OnInit, OnChanges {

  constructor(private contactsService: ContactsService,
    private messagesService: MessagesService,
    private scService: ServicechainService,
    private authService: AuthService) { }

  @Input() message_text: string = ""
  @Input() contact: Contact
  public servicechainsAvailable: Servicechain[]
  @Input() public servicechain: Servicechain
  public contactsList: Contact[]

  getContacts() {
    this.contactsService.get100Contacts(0)
      .subscribe((contactsReq) => {
        this.contactsList = contactsReq.data
      })
  }

  getServicechainsAvailable() {
    if (this.contact) {
      this.scService.getServicechainsForOrg(this.contact.OrganizationId)
        .subscribe((scsReq) => {
          this.servicechainsAvailable = scsReq.data
        })

      this.scService.getServicechain(this.contact.ServicechainId)
        .subscribe((scReq) => {
          this.servicechain = scReq.data
        })
    }

  }

  sendMessage() {
    let msg = {
      msg_body: this.message_text,
      contact_id: this.contact.id,
      servicechain_id: this.servicechain.id,
    }

    console.log(msg)
    this.messagesService.sendMessage(msg)
      .subscribe((msgReq) => {
        console.log(msgReq)
      })
  }

  ngOnInit() {
    this.getContacts()
    this.getServicechainsAvailable()
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("change")
    console.log(changes)
    if (changes) {
      console.log(changes)
    }
  }

}
