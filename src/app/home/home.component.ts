import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ReferenceDataService } from '../reference-data-service.service';

import { NavigationLink } from '../../models/navigationLink';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  navLinks: NavigationLink[];
  socialMediaLinks;
  
  constructor(private referenceDataService: ReferenceDataService, private router: Router) { }

  ngOnInit() {
    this.navLinks = this.referenceDataService.getNavImages();
    this.socialMediaLinks = this.referenceDataService.getSocialMedia();

    // Home page will not display Home navigation.
    this.navLinks = this.navLinks.filter(function( link ) {
      return link.name !== 'home';
  });
  }

  navigateLink(linkName: string) {
    this.router.navigateByUrl(linkName)
  }

  navigateSocialLink(link: string) {
    window.open(link);
  }
}
