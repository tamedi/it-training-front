import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  formationSearchGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formationSearchGroup = this.fb.group({
      titre: ['']
    });
   }

  ngOnInit(): void {
  }

  findFormation(): void {
    console.log(this.formationSearchGroup.value);
  }

}
