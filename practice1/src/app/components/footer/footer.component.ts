import { Component, OnInit } from '@angular/core';
import {faFacebook, faTwitter, faLinkedin, faGithub, IconDefinition} from "@fortawesome/free-brands-svg-icons"

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit
{

	facebook : IconDefinition = null;
	twitter : IconDefinition = null;
	linkedIn : IconDefinition = null;
	github : IconDefinition = null;


	constructor()
	{
	
	}

	ngOnInit()
	{
		this.facebook = faFacebook;
		this.twitter = faTwitter;
		this.linkedIn = faLinkedin;
		this.github = faGithub;
	}

}
