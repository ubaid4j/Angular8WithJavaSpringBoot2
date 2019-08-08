import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/util/data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{

	private username : string;
	private password : string;

	constructor(private data : Data, private route : Router)
	{

	}

	ngOnInit()
	{
		console.log(this.data.login);

	}

	validate() : void
	{
		if(this.username === "test" && this.password == "123")
		{
			this.data.login = true;
			this.route.navigate(["welcome", this.username]);
		}
	}


}
