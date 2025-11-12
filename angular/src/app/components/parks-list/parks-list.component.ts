import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ParksService } from '../../services/parks.service';
import ParkDTO from '../../models/dto/parkDTO.model';


@Component({
  selector: 'app-parks-list',
  imports: [RouterModule],
  templateUrl: './parks-list.component.html',
  styleUrl: './parks-list.component.css'
})
export class ParksListComponent implements OnInit{
  public parksList: ParkDTO[] = []


  constructor(private router: Router, private _parksService: ParksService){}

  ngOnInit(): void {
    this._parksService.getParks().subscribe({
      next:(res)=> {
        this.parksList = res
      },
      error:(err) => {
        console.log(err)
      }
    })

  //   const fd = new FormData();
  //   fd.append('park', objFromForm);
  //   fd.append('image', f);
  //   this._parksService.add(fd);
   }

}
