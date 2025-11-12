import { Component, ElementRef, ViewChild } from '@angular/core';
import Park from '../../models/park.model';
import Users from '../../models/users.model';
import Cities from '../../models/cities.model';
import { ParksService } from '../../services/parks.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-park',
  imports: [FormsModule],
  templateUrl: './add-park.component.html',
  styleUrl: './add-park.component.css'
})
export class AddParkComponent {

  public selectedFile: File | null = null;

    public newPark: Park = {
      name: "",
      desc: "",
      address: "",
      uploadDate: new Date(),
      id: 0,
      picturePath: '',
      user: new Users,
      city: new Cities
    }

     constructor(public _parksService: ParksService, private router:Router) { }

    onFileSelected(event: any) {
  if (event.target.files.length > 0) {
    this.selectedFile = event.target.files[0];
  }
}


    addPark() {

      const parkDataToSend = {
            name: this.newPark.name,
            desc: this.newPark.desc,
            address: this.newPark.address,

            //הגדרנו בינתיים ערכים קבועים למשתמש והעיר עד שנסדר אותם בהתאם לדרישות האתר
            user: { 
                id: 1 
            }, 
            city: { 
                id: 2 
            },
        };
    const fd = new FormData();


    
    if(this.selectedFile){
    fd.append('image', this.selectedFile, this.selectedFile.name);

    const parkJson = JSON.stringify(parkDataToSend);
    const parkBlob = new Blob([parkJson], {
    type: 'application/json' 
    });

    fd.append('Park', parkBlob);
    this._parksService.uploadPark(fd).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/parks-list']);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  }
}
