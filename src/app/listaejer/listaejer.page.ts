import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-listaejer',
  standalone: false,
  templateUrl: './listaejer.page.html',
  styleUrls: ['./listaejer.page.scss'],
})
export class ListaejerPage implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {}
}
