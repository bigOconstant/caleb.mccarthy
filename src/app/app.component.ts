
import { Component } from '@angular/core';
import  {HeaderComponent} from './header';
import  {TechnicalComponent} from './technical';
import {AboutComponent} from './about';
import {ContactComponent} from './contact';
import {ResumePageComponent} from './resume-page';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives:[HeaderComponent,TechnicalComponent,AboutComponent,ContactComponent,ResumePageComponent],
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
