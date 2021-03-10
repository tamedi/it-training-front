import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Formation } from 'src/app/models/formation';
import { FormationHttpService } from 'src/app/services/formation-http.service';


@Component({
  selector: 'app-page-formation',
  templateUrl: './page-formation.component.html',
  styleUrls: ['./page-formation.component.css']
})
export class PageFormationComponent implements OnInit {

 @Input() idFormation:number 
 
 id:number;
 formation: Formation

 constructor(private formationHttpservice: FormationHttpService,
  private route: ActivatedRoute) { }

ngOnInit(): void {
this.formation = new Formation();
this.id = this.route.snapshot.params['id'];

this.formationHttpservice.findById(this.id).subscribe(data => {
console.log(data)
this.formation = data;
}, error => console.log(error))
}

}
