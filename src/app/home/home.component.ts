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
  bioImage = '../../assets/nav-images/bio_white.png';
  constructor(private referenceDataService: ReferenceDataService, private router: Router) { }

  ngOnInit() {
    this.navLinks = this.referenceDataService.getNavImages();
  }

  navigateLink(linkName: string) {
    this.router.navigateByUrl(linkName)
  }
}
