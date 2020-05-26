import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration-view-panel',
  templateUrl: './registration-view-panel.component.html',
  styleUrls: ['./registration-view-panel.component.css']
})
export class RegistrationViewPanelComponent implements OnInit {

  public roles = ['Потребител', 'Мениджър на заведение'];
  public form: FormGroup;
  public isVisibleToast = false;

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.form = this.formBuilder.group(
      {
        firstName: [null, [Validators.required]],
        lastName: [null, [Validators.required]],
        password: [null, [Validators.required]],
        rePassword: [null, [Validators.required]],
        email: [null, [Validators.required, Validators.email]],
        phone: [null, [Validators.required, Validators.pattern]],
        role: [this.roles[0], [Validators.required]]
      }
    );
  }

  onClickRegister() {
    this.isVisibleToast = true;
  }

}
