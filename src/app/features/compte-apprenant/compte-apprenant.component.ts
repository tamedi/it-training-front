import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'selenium-webdriver';
import { Apprenant } from 'src/app/models/Apprenant';
import { ApprenantHttpService } from 'src/app/services/apprenant-http.service';

@Component({
  selector: 'app-compte-apprenant',
  templateUrl: './compte-apprenant.component.html',
  styleUrls: ['./compte-apprenant.component.css']
})
export class CompteApprenantComponent implements OnInit {

  //apprenant:any={}
  apprenant:Apprenant
  id:number;
  
  constructor(private apprenantHttpService: ApprenantHttpService,
              private route: ActivatedRoute,
              private router: Router) { }


  

  ngOnInit(): void {
    this.apprenant = new Apprenant();
    this.id = this.route.snapshot.params['id'];

    this.apprenantHttpService.findById(this.id).subscribe(data=>{
      console.log(data)
      this.apprenant = data;
    }, error=>console.log(error))
    
    // this.apprenant = localStorage.getItem('Apprenants')
    // JSON.parse(this.apprenant)
    
  }
  deConnexion(){
    localStorage.removeItem("user")
    this.router.navigate(['authentification'])
  }


}
