import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Data } from 'src/app/util/data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit
{
	private _name : string = "Ubaids.INC"


	private login : boolean;
	private user : string;

	constructor(private route: ActivatedRoute, private data : Data)
	{
		this.login = false;
	}

	ngOnInit()
	{
		this.user = this.route.snapshot.params["user"];
		this.login = this.data.login;
		console.log(this.login)
	}

}
