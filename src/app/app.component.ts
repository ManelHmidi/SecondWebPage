import { Component } from '@angular/core';
import { Servers } from 'src/shared/Data/serverData';
import { Server } from 'src/shared/structure/Server';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  title = 'application';
  
  servers:Server[]=Servers;

   fn() {
    alert("msg");
  }
}
