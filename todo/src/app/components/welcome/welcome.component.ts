import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService, HelloWorldBean } from 'src/app/services/data/data-service.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit
{
    private name : string = '';

    private message : string;
    private error : string;

    constructor(private route:ActivatedRoute,
        private dataService : DataServiceService)
    {

    }

    ngOnInit()
    {
        this.name = this.route.snapshot.params['name'];
    }

    private getMessage() : string
    {
        console.log("Executing getMessage() at welcome component")
        this.dataService.executeHelloWorldService().subscribe(
            response => this.handleSuccessFulResponse(response),
            error => this.handleError(error)
        );
        console.log("Ending getMessage() at welcome component");
        return null;
    }

    private getMessageWithPathVariable() : void
    {
        console.log("Executing getMessage() at welcome component")
        this.dataService.executeHelloWorldWithPathVariable(this.name).subscribe(
            response => this.handleSuccessFulResponse(response),
            error => this.handleError(error)
        );
        console.log("Ending getMessage() at welcome component");

    }

    private handleSuccessFulResponse(response : any) : void
    {
        this.error = null;
        this.message = response.message;
        console.log(response);
    }

    private handleError(error : any) : void
    {
        this.message = null;
        this.error = error.error.message;
        console.log(error);

    }

}
