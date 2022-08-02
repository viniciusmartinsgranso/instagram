import { Component, OnInit } from '@angular/core';
import { FooterLinksInterface } from '../interfaces/footer.links.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor() { }

  public linkList: FooterLinksInterface[] = [
    {
      name: 'Meta',
      link: 'https://about.facebook.com/meta',
    },
    {
      name: 'Sobre',
      link: 'https://about.instagram.com/',
    },
    {
      name: 'Blog',
      link: 'https://about.instagram.com/blog/',
    },
    {
      name: 'Ajuda',
      link: 'https://help.instagram.com/',
    },
    {
      name: 'API',
      link: 'https://developers.facebook.com/docs/instagram',
    },
    {
      name: 'Carregamento de contatos e não usuários',
      link: 'https://www.facebook.com/help/instagram/261704639352628',
    },
    {
      name: '© 2022 Instagram from Meta',
      link: '',
    }
  ];

  ngOnInit() {}

}
