import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public faGithub = faGithub;

  constructor() { }

  ngOnInit(): void {
  }

  goToGithub(): void{
    window.open('https://github.com/famaranon/love-is-essential', '_blank');
  }

}
