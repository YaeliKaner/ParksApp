import { Routes } from '@angular/router';
import { ParksListComponent } from './components/parks-list/parks-list.component';
import { AddParkComponent } from './components/add-park/add-park.component';

export const routes: Routes = [
        { path: "", redirectTo: "add-park", pathMatch: "full" },
        { path: "add-park", component: AddParkComponent },
        { path: "parks-list", component: ParksListComponent },
];
