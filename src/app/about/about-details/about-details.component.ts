import { Component, inject } from '@angular/core';
import { SliderComponent } from "../../slider/slider.component";
import { SliderService } from '../../slider/slider.service';
import { AccordeonComponent } from "../../accordeon/accordeon.component";

@Component({
  selector: 'app-about-details',
  standalone: true,
  imports: [SliderComponent, AccordeonComponent],
  templateUrl: './about-details.component.html',
  styleUrl: './about-details.component.css'
})
export class AboutDetailsComponent {
  sliderService = inject(SliderService);
  slidesFe = this.sliderService.sliderFE;
  slidesBE = this.sliderService.sliderBE;
}
