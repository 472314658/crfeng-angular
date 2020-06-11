import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.less']
})
/**
 * 公告
 */
export class NoticeComponent implements OnInit {

  data = [
    {
      name: '发布公告人'
    },
    {
      name: '发布公告人'
    }
  ];

  visible = false;
  constructor() { }

  ngOnInit(): void {
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}
