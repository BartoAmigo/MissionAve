import { Component, OnInit } from '@angular/core';
import { SliderService } from 'src/app/services/slider-service.service';
import { GroupFile } from './group-slider/models/group-file.model';
import { SliderFile } from './models/slider-file.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor(
    private sliderService: SliderService
    ) { }

  inputGroup!: SliderFile;

  ngOnInit(): void {

    this.inputGroup = this.sliderService.getSliderContent();
  }


}
