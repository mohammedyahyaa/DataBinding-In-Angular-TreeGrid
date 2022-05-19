import { Component, OnInit } from '@angular/core';
import SampleData from './files/user.json';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import {trigger, state,style,animate,transition} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //animation
  animations: [
    trigger('fade', [
      transition('void <=> *',[
        style({backgroundColor : 'greenYellow' , opacity :0 }),
        animate(3000)
      ] )
    ])
    
  ]
})



export class AppComponent implements OnInit {

  public data: Object[] | undefined;
  public pageSettings: PageSettingsModel | undefined;

  ngOnInit(): void {
    this.data = SampleData;
    this.pageSettings = { pageSize: 6 };
  }
}

