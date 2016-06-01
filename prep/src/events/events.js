import {inject} from "aurelia-framework";
import {DataRepository} from "services/dataRepository";
import {Router} from "aurelia-router";

@inject(DataRepository, Router)
export class Events {
    constructor(dataRepository, router) {
        this.dataRepository = dataRepository;
        this.router = router;
    }

    activate(params, routeConfig) {
        console.log("activate called");
        this.dataRepository.getEvents().then(events => {            
            this.events = events;
            this.events.forEach(item => item.detailUrl = this.router.generate("eventDetail", {eventId: item.id}));
        });
    }

    canActivate() {
        console.log("canActivate called");
        return true;
    }
}