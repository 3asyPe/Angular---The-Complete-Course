import { Injectable } from "@angular/core";

@Injectable()
export class CounterService{

    activeNum: number = 0;
    inactiveNum: number = 0;

    newActive(){
        this.activeNum++;
        this.inactiveNum--;
        this.logUsers();
    }

    newInactive(){
        this.inactiveNum++;
        this.activeNum--;
        this.logUsers();
    }

    logUsers(){
        console.log("Active users: " + this.activeNum);
        console.log("Inactive users: " + this.inactiveNum);
    }

}