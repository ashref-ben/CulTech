import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ProgrammeEchangeService } from 'src/app/Services/programme-echange.service';
import { ProgrammeEchange } from 'src/app/models/programme-echange';

@Component({
  selector: 'app-programme-echange',
  templateUrl: './programme-echange.component.html',
  styleUrls: ['./programme-echange.component.css']
})
export class ProgrammeEchangeComponent implements OnInit{
  programmes: ProgrammeEchange[] = [];

  constructor(private programmeService: ProgrammeEchangeService, public sanitizer: DomSanitizer,private router: Router) { }

  ngOnInit(): void {
    this.programmeService.getAllProgrammes().subscribe(data => {
      this.programmes = data;
      console.log(data);
    });
  }
  deleteProgramme(id: number): void {
    this.programmeService.deleteProgramme(id).subscribe(() => {
      this.programmeService.getAllProgrammes().subscribe(data => {
        this.programmes = data;
        console.log(data);
      });
    }, error => {
        console.error('Error deleting the programme:', error);
    });
}

redirectToUpdateProgramme(id: number): void {
    this.router.navigate(['updateprogramme', id]);
}
}
