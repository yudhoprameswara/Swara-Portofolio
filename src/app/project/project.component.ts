import { Component, inject } from '@angular/core';
import { ProjectService } from './project.service';
import { Project } from './project.model';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  projectService = inject(ProjectService);

  projects:Project[] = this.projectService.projects
}
