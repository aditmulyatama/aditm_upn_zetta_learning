import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  Validators,
} from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit, OnChanges, DoCheck {
  dataId: any = this.activatedRoute.snapshot.paramMap.get('id');

  data: any = this.dataService.data.find((x) => x.Id == this.dataId);
  hasil: any[] = [];
  userForm = this.formBuilder.group({
    Id: [this.dataId, Validators.required],
    Nama: [this.data.Nama, Validators.required],
    Umur: [this.data.Umur, Validators.required],
    Gender: [this.data.Gender],
    Email: [this.data.Email, Validators.required],
    Domisili: [this.data.Domisili, Validators.required],
    StatusPernikahan: [this.data.StatusPernikahan, Validators.required],
    Alamat: [this.data.Alamat, Validators.required],
    KodePos: [this.data.KodePos, Validators.required],
    Kota: [this.data.Kota, Validators.required],
    Negara: [this.data.Negara, Validators.required],
  });
  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.dataId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.data = this.dataService.data.find((x) => x.Id == this.dataId);

    console.log(this.dataId);
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
  }
  ngDoCheck(): void {}
  editData() {
    this.dataService.changeData(this.userForm.value);
  }
}
