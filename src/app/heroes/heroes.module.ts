import { NgModule } from "@angular/cli";
import { CommonModule } from "@angular/common";
import { HeroeComponent } from "./heroe.component";

@NgModule({
    declarations:
    HeroeComponent,
    
},
exports:[
ListadoComponent
  //CommonModule
]
) export class HeroeModule{}