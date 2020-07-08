import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable()
export class UsersService{

    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    constructor(private counterService: CounterService){ 
        this.onInit();
    }

    onInit(){
        this.counterService.activeNum = this.activeUsers.length;
        this.counterService.inactiveNum = this.inactiveUsers.length;
        this.counterService.logUsers();
    }

    setToInactive(id: number){
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.counterService.newInactive();
    }

    setToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.counterService.newActive();
    }

}