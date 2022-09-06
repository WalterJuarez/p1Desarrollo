import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Marcaje } from 'src/app/models/marcaje';
import { MarcajeService } from 'src/app/services/marcaje.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form!: FormGroup;
  
  constructor(
    private marcajeService: MarcajeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      cliemt_id: new FormControl('', [Validators.required]),
      marcaje_id: new FormControl('', [Validators.required]),
      fecha: new FormControl('', Validators.required),
      hora: new FormControl('', Validators.required)
    });
  }

  get f(){
    return this.form.controls;
  }

  onSubmit(){
    if (!this.form.valid) {
      return;
    }
    let marcaje: Marcaje = this.form.value;
    this.marcajeService.create(marcaje).subscribe((res:any) => {
      alert(
        'Exito'+
        res.message+
        'success'
      )
         this.router.navigateByUrl('admini/admin');
    })
  }
}
