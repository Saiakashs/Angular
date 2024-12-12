import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectiveComponent } from './directive/directive.component';
import {ToogleimageComponent} from './toogleimage/toogleimage.component';
import {ButtonimageComponent} from './buttonimage/buttonimage.component';
import {ParentcompoenentComponent} from './parentcompoenent/parentcompoenent.component'
import { MypipesComponent } from './mypipes/mypipes.component';
import { Day1task3Component } from './tasks/day1task3/day1task3.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DatabindingComponent,DirectiveComponent,ToogleimageComponent,ButtonimageComponent,Day1task3Component,ParentcompoenentComponent,MypipesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularproject';
}
