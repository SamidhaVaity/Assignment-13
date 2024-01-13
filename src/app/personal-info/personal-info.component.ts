import { Component } from '@angular/core';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {ReactiveFormsModule} from '@angular/forms';
// import classes which are required for reactive forms
import {FormGroup,FormControl} from '@angular/forms'

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [ButtonsModule,AlertModule,BsDropdownModule,ReactiveFormsModule],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css'
})
export class PersonalInfoComponent {
  MarvellousForm = new FormGroup(
    {
      username : new FormControl(''),
      Lastname : new FormControl(''),
      email : new FormControl(''),
      phone : new FormControl(''),
      Address : new FormControl('')
    }
  );

}
