import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  private sliderFrontEnd : { name:string, image:string}[] = [
    {
      name: "HTML",
      image: "/assets/html.png",
    },
    {
      name: "Javascript",
      image: "/assets/javascript.png",
    },
    {
      name: "CSS",
      image: "/assets/css.png",
    },
    {
      name: "Angular",
      image: "/assets/angular.png",
    },
    {
      name: "Boothstrap",
      image: "/assets/bootstrap.png",
    },
    {
      name: "Newgen",
      image: "/assets/newgen.png"
    }
  

  ]; 

  private sliderBackend : { name:string, image:string}[] = [
    {
      name: "Java",
      image: "/assets/java.png",
    },
    {
      name: "C#",
      image: "/assets/Csharp.png",
    },
    {
      name: "Springboot",
      image: "/assets/spring.png",
    },
    {
      name: ".NET",
      image: "/assets/net.png",
    },
    {
      name: "MicrosoftSQL",
      image: "/assets/sql.png",
    },
    {
      name: "Postgre",
      image: "/assets/pstgre.png",
    },
    {
      name: "Oracle",
      image: "/assets/oracle.png",
    },
  

  ]; 

  get sliderBE(){
    return this.sliderBackend;
  }

  get sliderFE(){
    return this.sliderFrontEnd;
  }

  constructor() { }
}
