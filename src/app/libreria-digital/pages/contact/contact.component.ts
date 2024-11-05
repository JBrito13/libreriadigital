import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactForm: FormGroup = this.fb.group({
    name: [''],
    email: [''],
    message: [''],
  });

  constructor(
    private fb: FormBuilder,
  ) { }

  onSubmit() {
    console.log(this.contactForm.value);
  }

}
