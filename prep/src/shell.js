export class Shell {
    configureRouter(config, router) {
        this.router = router;
        config.title = "Our fancy app";
        
        config.map([
           {route:["", "events"], name: "Events", title: "Events", moduleId: "events/events", nav: true},
           {route:"jobs", name: "Jobs", title: "Jobs Board", moduleId: "jobs/jobs", nav: true},
           {route:"eventDetail/:eventId", moduleId: "events/eventDetail", name: "eventDetail"} 
        ]);
    }
}