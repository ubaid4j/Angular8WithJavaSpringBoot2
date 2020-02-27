import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService, HelloWorldBean } from 'src/app/services/data/data-service.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
    public name = '';

    public message: string;
    public error: string;

    constructor(private route: ActivatedRoute,
                private dataService: DataServiceService) {

    }

    ngOnInit() {
        this.name = this.route.snapshot.params.name;
    }

    getMessage(): string {
        this.dataService.executeHelloWorldService().subscribe(
            response => this.handleSuccessFulResponse(response),
            error => this.handleError(error)
        );
        return null;
    }

    public getMessageWithPathVariable(): void {
        this.dataService.executeHelloWorldWithPathVariable(this.name).subscribe(
            response => this.handleSuccessFulResponse(response),
            error => this.handleError(error)
        );

    }

    public  handleSuccessFulResponse(response: any): void {
        this.error = null;
        this.message = response.message;
    }

    handleError(error: any): void {
        this.message = null;
        this.error = error.error.message;
    }
}
