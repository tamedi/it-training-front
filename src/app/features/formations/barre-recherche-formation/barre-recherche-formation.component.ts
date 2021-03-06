import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from 'src/app/models/formation';
import { FormationHttpService } from 'src/app/services/formation-http.service';

@Component({
  selector: 'app-barre-recherche-formation',
  templateUrl: './barre-recherche-formation.component.html',
  styleUrls: ['./barre-recherche-formation.component.css']
})
export class BarreRechercheFormationComponent implements OnInit {

  constructor(private router: Router,
              private formationHttpservice: FormationHttpService) { }

  formations: Formation[];
  ngOnInit(): void {
    
  }

  // searchFormations(key:string): void {
  //   const results: Formation[] = []
  //   for(const formation of this.formations){
  //     if(formation.titre.toLocaleLowerCase().indexOf(key.toLocaleLowerCase()) !== -1) {
  //       results.push(formation)
  //     }
  //   }
  //   this.formations = results;
  //   if(results.length ===0 || !key){
  //     this.formationHttpservice.getFormationList().subscribe(res=>{
  //     this.formations = res;
  //   })
  //   }
    
  // }

  doSearch(value:String){
    console.log(`value=${value}`);
    this.router.navigateByUrl(`/search/${value}`)
  }
}
