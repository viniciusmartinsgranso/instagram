import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavbarEnum } from '../../enums/navbar.enum';
import { NavbarInterface } from '../../interfaces/navbar.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  constructor(
    private readonly router: Router,
  ) {
    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((route: NavigationEnd) => {
        console.log(route);

        if (route.url.includes('/feed'))
          this.currentNavbar = NavbarEnum.FEED;

        if (route.url.includes('/chats'))
          this.currentNavbar = NavbarEnum.CHATS;

        if (route.url.includes('/notifications'))
          this.currentNavbar = NavbarEnum.NOTIFICATIONS;
      });
  }

  public currentNavbar: NavbarEnum = NavbarEnum.FEED;

  public navbarList: NavbarInterface[] = [
    {
      type: NavbarEnum.FEED,
      link: '/home',
      icon: 'assets/images/home.svg',
      iconActivated: 'assets/images/home-selected.svg',
    },
    {
      type: NavbarEnum.CHATS,
      link: '/chats',
      icon: 'assets/images/chat.svg',
      iconActivated: 'assets/images/chat-selected.svg',
    },
    {
      type: NavbarEnum.NOTIFICATIONS,
      link: '/notifications',
      icon: 'assets/images/heart.svg',
      iconActivated: 'assets/images/heart-selected.svg',
    },
  ];

  ngOnInit() {}

}
