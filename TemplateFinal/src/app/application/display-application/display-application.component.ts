import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ApplicationService } from 'src/app/Services/application.service';
import { ApplicationEchange } from 'src/app/models/application';

@Component({
  selector: 'app-display-application',
  templateUrl: './display-application.component.html',
  styleUrls: ['./display-application.component.css']
})
export class DisplayApplicationComponent implements OnInit{
  applications: ApplicationEchange[] = []; // You would typically get this data from a service
  fileUrl!:SafeResourceUrl;
  constructor(private service: ApplicationService,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.service.getAllApplications().subscribe(data => {
      this.applications = data;
      console.log(data);
    });
  }

  downloadCV(cvBase64: string): void {
    const byteCharacters = atob(cvBase64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
  
    const blob = new Blob([byteArray], { type: 'application/pdf' });
  
    const blobUrl = window.URL.createObjectURL(blob);
  
    const anchor = document.createElement('a');
    anchor.href = blobUrl;
    anchor.download = 'downloaded_cv.pdf';
    anchor.click();
  
    // Clean up by revoking the blob URL
    window.URL.revokeObjectURL(blobUrl);
  }
  
  
  
  

  deleteApplication(id: number): void {
    this.service.deleteApplication(id).subscribe(d=>{
      this.service.getAllApplications().subscribe(data => {
        this.applications = data;
        console.log(data);
      });
    })
  }
}
