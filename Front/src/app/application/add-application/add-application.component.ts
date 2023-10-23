import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationService } from 'src/app/Services/application.service';
import { ApplicationEchange } from 'src/app/models/application';

@Component({
  selector: 'app-add-application',
  templateUrl: './add-application.component.html',
  styleUrls: ['./add-application.component.css']
})
export class AddApplicationComponent {
  selectedFile!:File;
  constructor(private service: ApplicationService,private route: ActivatedRoute, private router: Router) { }
  application:ApplicationEchange=new ApplicationEchange();
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.application.idProgrammeEchange=id;
    
  }
  onFileSelect(event: any): void {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  onSubmit(): void {
    console.log(this.application);
    
    this.service.addApplicationEchange(
      this.application.nomEtudiant,
      this.application.emailEtudiant,
      this.application.lettreDeMotivation,
      this.application.idProgrammeEchange.toString(),  
      this.selectedFile
    ).subscribe(response => {
      this.router.navigate(['user/programme']); 
      console.log("ApplicationEchange added successfully");
    }, error => {
      console.error("There was an error!", error);
    });
    
  }
}
