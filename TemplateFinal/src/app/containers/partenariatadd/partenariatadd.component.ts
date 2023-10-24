import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PartenariatService } from 'src/app/Services/Partenariats/partenariat.service';
import { Partenariats } from 'src/app/models/Partenariats';

@Component({
  selector: 'app-partenariatadd',
  templateUrl: './partenariatadd.component.html',
  styleUrls: ['./partenariatadd.component.scss']
})
export class PartenariataddComponent implements OnInit{
  list_partenariat: Partenariats[] = []; 
  selectedPartenariat: Partenariats | undefined; 


  constructor(private route: ActivatedRoute, 
    private router: Router, private http: HttpClient,
     private partenariatService: PartenariatService) {
    this.newPartenariat = new Partenariats
    this.list_partenariat = [];
  }
  newPartenariat: Partenariats = {
    partenariatID: null,
    nom: '',
    description: '',
    dateDebut: null,
    dateFin: null,
    type: ''
  };
  ngOnInit(): void {
    
  }
  onSubmit() {

  
    
    this.partenariatService.save(this.newPartenariat).subscribe(
        (result) => {
            console.log('Article saved successfully', result);
            // Handle success, e.g., navigate to a success page or reset the form
        },
        (error) => {
            console.error('Error saving article', error);
            // Handle error, e.g., display an error message
        }
    );
}



}
