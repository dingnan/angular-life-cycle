import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  userName = "Anonymous";
  userForm: FormGroup;
  
  constructor() { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl('')
    });
    console.log(
      '%cparent %cngOnInit',
      'color: blue',
      'color: darkgrey',
    );
  }

  ngDoCheck() {
    console.log(
      '%cparent %cngDoCheck',
      'color: blue',
      'color: red',
    );
  }

  onUpdate(model: any) {
    console.log(
      '%cparent %cbutton click ---------------------------------------------------------------------------',
      'color: blue',
      'color: green',
    );
    this.userName = model.name;
  }

}
