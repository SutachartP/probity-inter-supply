import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  contact: any;

  constructor(
    private fb: FormBuilder,
    private service: ContactService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.contactForm = this.fb.group({
      name: [null, [Validators.required]]
      , business: [null, [Validators.required]]
      , phoneNumber: [null, [Validators.required]]
      , email: [null, [Validators.required]]
      , description: null
    });
  }

  sendMessage() {
    if (this.contactForm.valid) {
      this.service.sendToEmail(this.contactForm.value).subscribe();
    } else {
      this.contactForm.dirty;
    }
  }
}
