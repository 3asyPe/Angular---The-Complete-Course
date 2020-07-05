import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: "./servers.component.html",
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = "No server was created";
  serverName: string = "Test Server";

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = "Server was created! Name is " + this.serverName;
    setTimeout(() => {
      this.serverCreationStatus = "No server was created";
    }, 2000);
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
