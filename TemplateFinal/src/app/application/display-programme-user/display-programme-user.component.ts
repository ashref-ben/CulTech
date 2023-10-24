import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ProgrammeEchangeService } from 'src/app/Services/programme-echange.service';
import { ProgrammeEchange } from 'src/app/models/programme-echange';

@Component({
  selector: 'app-display-programme-user',
  templateUrl: './display-programme-user.component.html',
  styleUrls: ['./display-programme-user.component.css']
})
export class DisplayProgrammeUserComponent implements OnInit{
  programmes: ProgrammeEchange[] = [];

  constructor(private programmeService: ProgrammeEchangeService, public sanitizer: DomSanitizer,private router: Router) { }

  ngOnInit(): void {
    this.programmeService.getAllProgrammes().subscribe(data => {
      this.programmes = data;
      console.log(data);
    });
  }
  applyProgramme(id: number): void {
    this.router.navigate(['user/apply', id]);
}


}
