import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from 'src/app/models/formation';
import { FormationHttpService } from 'src/app/services/formation-http.service';

@Component({
  selector: 'app-formation-by-id',
  templateUrl: './formation-by-id.component.html',
  styleUrls: ['./formation-by-id.component.css']
})
export class FormationByIdComponent implements OnInit {

  id: number;
  formation: Formation;

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
