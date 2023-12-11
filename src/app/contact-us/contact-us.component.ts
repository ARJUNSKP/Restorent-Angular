import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  
  
  constructor(private fb:FormBuilder){}

  contactDateFrom = this.fb.group({
    userName:['',Validators.required],
    email:['',Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')],
    subject:['',Validators.required],
    message:['',Validators.required]
  })
  submitData=()=>{
    const path=this.contactDateFrom.value
    const yourName=path.userName
    const email=path.email
    const subject=path.subject
    const message=path.message
    console.log({yourName,email,subject,message})
  }

}
