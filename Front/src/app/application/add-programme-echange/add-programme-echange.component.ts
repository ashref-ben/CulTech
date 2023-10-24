import { Component, OnInit } from '@angular/core';
import { ProgrammeEchangeService } from 'src/app/Services/programme-echange.service';
import { ProgrammeEchange } from 'src/app/models/programme-echange';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-programme-echange',
  templateUrl: './add-programme-echange.component.html',
  styleUrls: ['./add-programme-echange.component.css']
})
export class AddProgrammeEchangeComponent implements OnInit {

  programme:ProgrammeEchange=new ProgrammeEchange();
  selectedFile!:File;
  constructor(private service: ProgrammeEchangeService, private router:Router) { }

  ngOnInit(): void {}

  onFileSelect(event: any): void {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  onSubmit(): void {/*
    this.service.createProgramme(this.programme).subscribe(data => {
      console.log('Programme créé avec succès:', data);
    });*/
    console.log(this.programme);
    this.service.addProgrammeEchange(
      this.programme.title,
      this.programme.region,
      this.programme.description,
      this.programme.startDate,
      this.programme.endDate,
      this.selectedFile
    ).subscribe(response => {
      console.log("ProgrammeEchange added successfully");
      this.router.navigate(['admin/programme']);
    }, error => {
      console.error("There was an error!", error);
    });

  }
}
