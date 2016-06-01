import {eventsData} from "services/eventsData";
import moment from "moment";

export class DataRepository {
    getEvents() {
        return new Promise((resolve, reject) => {
            if (!this.events) {
                setTimeout(_ => {
                    this.events = eventsData;                   
                    resolve(this.events);
                }, 2000);                
            } else {
               resolve(this.events); 
            }            
        });
    }
    
    getEvent(eventId) {
        return this.events.find(item => item.id === eventId);
    }
}