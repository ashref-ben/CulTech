import { Component,OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Partenariats } from '../../models/Partenariats';
import { PartenariatService } from '../../Services/Partenariats/partenariat.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-partenariat-list',
  templateUrl: './partenariat-list.component.html',
  styleUrls: ['./partenariat-list.component.scss']
})
export class PartenariatListComponent implements OnInit {
  cols: any[] = [];

  list_partenariat: Partenariats[] = []; 
  selectedPartenariat: Partenariats | undefined;

  //partenariats!: Partenariats[];

  // constructor(private articleService: ArticleService, private sanitizer: DomSanitizer) { }

  constructor(private fb: FormBuilder,private http: HttpClient, private partenariatService: PartenariatService, private sanitizer: DomSanitizer) {
    
  }
  ngOnInit(): void {
   this.loadAllPartnerships();
  }
  loadAllPartnerships(): void {
    this.partenariatService.findAll().subscribe(
      (data: Partenariats[]) => {
        this.list_partenariat=data;
      console.log(data);   
    });      
  }


  onPartenariatSelected(partenariat: Partenariats) {
    this.selectedPartenariat = { ...partenariat };
    console.log(partenariat);
}

updatePartenariat() {
    if (this.selectedPartenariat) {
        this.http.put<Partenariats>('/api/update-partenariat', this.selectedPartenariat)
            .subscribe((updatedPartenariat: Partenariats) => {
                const index = this.list_partenariat.findIndex(p => p.partenariatID === updatedPartenariat.partenariatID);
                if (index !== -1) {
                    this.list_partenariat[index] = updatedPartenariat;
                }
                console.log('Partenariat updated:', updatedPartenariat);
            }, error => {
                console.error('Update failed:', error);
            });
    }
}

  // onPartenariatSelected(event: Event) {
  //   this.selectedPartenariat = { ...partenariat };
  //   // Clear the form fields if "Select a Partenariat" is chosen
  //   const selectedValue = parseInt((<HTMLSelectElement>event.target).value); // Convert selectedValue to a number
  //   this.selectedPartenariat = this.list_partenariat.find(p => p.partenariatID === selectedValue);
  //   // if (!this.selectedPartenariat) {
  //   //   this.selectedPartenariat = new Partenariats();
  //   // }
  // }
  
  // updatePartenariat() {
  //   if (this.selectedPartenariat) {
  //       this.http.put<Partenariats>('/api/update-partenariat', this.selectedPartenariat)
  //           .subscribe((updatedPartenariat: Partenariats) => {
  //               // Handle successful update response (if needed)
  //               console.log('Partenariat updated:', updatedPartenariat);
  //           }, error => {
  //               // Handle error (e.g., show an error message to the user)
  //               console.error('Update failed:', error);
  //           });
  //   }
  // }
 
}
