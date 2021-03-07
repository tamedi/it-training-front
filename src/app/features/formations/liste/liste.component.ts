import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Formation } from 'src/app/models/formation';
import { FormationHttpService } from 'src/app/services/formation-http.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  formations: Formation[];
  // searchMode: boolean;
  constructor(private formationHttpservice: FormationHttpService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.formationHttpservice.getFormationList().subscribe(res=>{
      this.formations = res;
    })

    
  }
//   


    

//     this.listFormations()
    
//   }
//   listFormations(){
//     this.searchMode = this.route.snapshot.paramMap.has('keyword')
//     if (this.searchMode){
//       this.handleSearchFormations()
//     }else{
//       this.handleListFormations
//     }
//   }

//   handleSearchFormations(){
//     const titre:string = this.route.snapshot.params['keyword'];
//     this.formationHttpservice.searchFormations(titre).subscribe(data=>{
//       console.log(data)
//       // this.formations = data;
//     })

//   }
//   handleListFormations(){

//     this.formationHttpservice.getFormationList().subscribe(res=>{
//       this.formations = res;
//     })
//   }




  

}
