import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input()
  message = "hello world"

  @Output()
  clicked = new Subject<number>()

  form!: FormGroup
  // counter = 0

  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
    this.form = this.createForm();
  }

  createForm(): FormGroup{
    return this.fb.group({
      name: this.fb.control('', [Validators.minLength(3), Validators.required]),
      email: this.fb.control('', [Validators.email, Validators.required]),
      gender: this.fb.control('', [Validators.required]),


    })
  }

  // buttonPressed(event:Event){
  //   this.counter++
  //   this.clicked.next(this.counter);
  //   console.info('$event:')
  // }
  // uppercaseMe(){
  //   this.message = this.message.toUpperCase();
  // }

  // lowercaseMe(){
  //   this.message = this.message.toLowerCase();
  // }

}
