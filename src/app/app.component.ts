import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ReferenceDataService } from './reference-data-service.service'

import { NavigationLink } from '../models/navigationLink';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  navLinks: NavigationLink[];
  
  constructor(private referenceDataService: ReferenceDataService, private router: Router) { }

  ngOnInit() {
    this.navLinks = this.referenceDataService.getNavImages();
  }

  isHomePage() {
    return (this.router.url === '/home');
  }

  navigateLink(linkName: string) {
    this.router.navigateByUrl(linkName)
  }
}
