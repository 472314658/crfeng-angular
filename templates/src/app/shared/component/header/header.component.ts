import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../../../core/services/data.service';
import {MENU_HEADER} from '../../../core/constants/menu-header.contstants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})

export class HeaderComponent implements OnInit {
  public menuList = [];
  public menuShow = [];

  constructor(
    private router: Router,
    private dataService: DataService
  ) {
  }

  ngOnInit(): void {
    this.menuList = MENU_HEADER.menuList;
    this.menuShow = this.dataService.makeMenu(this.menuList);
  }

}
