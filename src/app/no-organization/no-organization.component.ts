import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-no-organization',
  templateUrl: './no-organization.component.html',
  styleUrls: ['./no-organization.component.css']
})
export class NoOrganizationComponent implements OnInit {

  constructor() { }

  @Input() public profile: any;
  ngOnInit() {
  }

}
