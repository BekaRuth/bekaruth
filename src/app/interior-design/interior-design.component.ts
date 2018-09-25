import { Component, OnInit } from '@angular/core';

import { ReferenceDataService } from '../reference-data-service.service';


@Component({
  selector: 'app-interior-design',
  templateUrl: './interior-design.component.html',
  styleUrls: ['./interior-design.component.css']
})

export class InteriorDesignComponent implements OnInit {
  designImages;

  constructor(private referenceDataService: ReferenceDataService) { }

  ngOnInit() {
    this.designImages = this.referenceDataService.getInteriorDesignImages();
  }

}
