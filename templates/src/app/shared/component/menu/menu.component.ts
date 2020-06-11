import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../../../core/services/data.service';
import {MENU_LISTS} from '../../../core/constants/menu-list.contstants';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService
  ) {
  }

  public isCollapsed = false;
  public menuList = [];
  public menuShow = [];


  public changeIsCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit(): void {

    // // Get Parent Path:  about 父级路由
    // this.route.parent.url.subscribe(url => console.log(url[0].path));

    // Get Current Path:  company 当前路由module
    this.route.url.subscribe(url => {
      const moduleName = url[0].path;
      this.menuList = this.getMenuList(moduleName);
      this.menuShow = this.dataService.makeMenu(this.menuList);
    });

    // // Route Data:  { title: 'Company' } 路由参数
    // this.route.data.subscribe(data => console.log(data));


  }

  getMenuList(moduleName) {
    let menuList = MENU_LISTS.menuList;
    switch (moduleName) {
      case 'world':
        menuList = MENU_LISTS.menuList;
        break;
      case 'welcome':
        menuList = MENU_LISTS.menuList;
        break;
    }
    return menuList;
  }
}
