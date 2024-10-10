import { Injectable } from '@angular/core';
import { Project } from './project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  public projects: Project[] = [
    {
      title: "Nissan Best Retro",
      thumbnail: "/assets/thumbnail/nissan-thumbnail.png",
      detailLink: "https://yudhoprameswara.github.io/Nissan-Web-Site/",
      repoLink: "https://github.com/yudhoprameswara/Nissan-Web-Site",
      skillUse: [
        { skillName: "HTML", skillImage: "/assets/html.png" },
        { skillName: "JavaScript", skillImage: "/assets/javascript.png" },
        { skillName: "CSS", skillImage: "/assets/css.png" }
      ]
    },
    {
      title: "BLissful Bite",
      thumbnail: "/assets/thumbnail/blissfulBite-thumbnail.png",
      detailLink: "",
      repoLink: "https://github.com/yudhoprameswara/Blissful-Bite",
      skillUse: [
        { skillName: "HTML", skillImage: "/assets/html.png" },
        { skillName: "JavaScript", skillImage: "/assets/javascript.png" },
        { skillName: "CSS", skillImage: "/assets/css.png" },
        { skillName: "Java", skillImage: "/assets/java.png" },
        { skillName: "Spring", skillImage: "/assets/spring.png" },
        { skillName: "SQL", skillImage: "/assets/mssql.png" }
      ]
    },
    {
      title: "Troll Market",
      thumbnail: "/assets/thumbnail/trollMarket-thumbnail.png",
      detailLink: "",
      repoLink: "https://github.com/yudhoprameswara/Troll-Market",
      skillUse: [
        { skillName: "HTML", skillImage: "/assets/html.png" },
        { skillName: "JavaScript", skillImage: "/assets/javascript.png" },
        { skillName: "CSS", skillImage: "/assets/css.png" },
        { skillName: "Java", skillImage: "/assets/java.png" },
        { skillName: "Spring", skillImage: "/assets/spring.png" },
        { skillName: "SQL", skillImage: "/assets/mssql.png" }
      ]
    },
    {
      title: "Winterhold",
      thumbnail: "/assets/thumbnail/winterhold-thumbnail.png",
      detailLink: "",
      repoLink: "https://github.com/yudhoprameswara/Winterhold",
      skillUse: [
        { skillName: "HTML", skillImage: "/assets/html.png" },
        { skillName: "JavaScript", skillImage: "/assets/javascript.png" },
        { skillName: "CSS", skillImage: "/assets/css.png" },
        { skillName: "Java", skillImage: "/assets/java.png" },
        { skillName: "Spring", skillImage: "/assets/spring.png" },
        { skillName: "SQL", skillImage: "/assets/mssql.png" }
      ]
    }


  ];

}
