import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class EventServices{
    private subject = new Subject(); 
    emit(eventName : any, payload : any){
        this.subject.next({eventName, payload})
    }

    listen(eventName : any, Callback : any){
        this.subject.asObservable().subscribe((nextObj:any) =>{
            if(nextObj.eventName === eventName){
                Callback(nextObj.payload);
            }
        })
    }
}