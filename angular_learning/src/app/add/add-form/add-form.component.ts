import { DataServiceService } from './../../service/data-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  status: any;
  constructor(private ds: DataServiceService) { }
  data: FormGroup = new FormGroup({
    civility: new FormControl(null, Validators.required),
    first_name: new FormControl(null, Validators.required),
    last_name: new FormControl(null, Validators.required),
    dob: new FormControl(null, Validators.required),
    gender: new FormControl(null, Validators.required),
    status: new FormControl(null, Validators.required),
  })
  ngOnInit(): void {
    this.data.statusChanges.subscribe((stat) => {
      this.status = stat;
      console.log(this.status)
    })

  }

  addDataButton() {
    if (this.status == 'VALID') {
      Swal.fire(
        'Good job!',
        'Data have been submitted',
        'success'
      )
      this.ds.addData(this.data.value).subscribe((stat) => {
        console.log(stat)
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Data Invalid',
      })
    }
  }
}
