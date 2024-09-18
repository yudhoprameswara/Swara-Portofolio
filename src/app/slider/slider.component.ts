import { Component, inject, Input, input } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  @Input() slidersData : { name: string; image: string; }[] | undefined;
  currentIndex = 0;
  slidesToShow = 4; // Number of slides to show at a time
  autoSlideInterval: any;

  // ngOnInit() {
  //   this.startSlider();
  // }

  ngOnDestroy() {
    this.stopSlider(); // Clear interval when component is destroyed
  }

  startSlider() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 3000); // Slide every 3 seconds
  }

  stopSlider() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  prevSlide() {
    this.stopSlider(); // Reset the timer on manual control
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = Math.ceil(this.slidersData!.length / this.slidesToShow) - 1;
    }
    this.startSlider(); // Restart the auto slider after manual control
  }

  nextSlide() {
    this.stopSlider(); // Reset the timer on manual control
    const totalSets = Math.ceil(this.slidersData!.length / this.slidesToShow);
    if (this.currentIndex < totalSets - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.startSlider(); // Restart the auto slider after manual control
  }
}
