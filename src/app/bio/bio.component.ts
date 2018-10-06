import { Component, OnInit } from '@angular/core';

import { ReferenceDataService } from '../reference-data-service.service';

@Component({
  selector: 'bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {
  socialMediaLinks;
  randomBio;

  constructor(private referenceDataService: ReferenceDataService) { }

  ngOnInit() {
    this.socialMediaLinks = this.referenceDataService.getSocialMedia();
    this.getRandomBio();
  }

  getRandomBio() {
    let bioOptions: Array<string> = [
      'Tina Fey is my spirit animal.',
      'I am a Dance Dance Revolution Master.',
      'No Items, Wendy Only, Town and City.'
    ]

    this.randomBio = bioOptions[Math.floor(Math.random()*bioOptions.length)];
  }

  navigateSocialLink(link: string) {
    window.open(link);
  }
}
