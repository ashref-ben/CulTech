import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProgrammeEchangeService } from 'src/app/Services/programme-echange.service';
import { ProgrammeEchange } from 'src/app/models/programme-echange';

@Component({
  selector: 'app-update-programme',
  templateUrl: './update-programme.component.html',
  styleUrls: ['./update-programme.component.css']
})
export class UpdateProgrammeComponent implements OnInit{
  programme:ProgrammeEchange=new ProgrammeEchange();
  selectedFile!:File;
  constructor(private service: ProgrammeEchangeService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;

    this.service.getProgrammeById(id).subscribe(data => {
      this.programme = data;
      console.log("*************");
      console.log(this.programme);
  });
  }
  onFileSelect(event: any): void {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  onSubmit(): void {
    console.log(this.programme);
    this.service.updateProgrammeEchange(
      this.programme.id.toString(),
      this.programme.title,
      this.programme.region,
      this.programme.description,
      this.programme.startDate,
      this.programme.endDate,
      this.selectedFile
    ).subscribe(response => {
      this.router.navigate(['/programme']);
      console.log("ProgrammeEchange added successfully");
    }, error => {
      console.error("There was an error!", error);
    });

  }
}
