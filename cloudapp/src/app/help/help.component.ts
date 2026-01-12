import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  template: `
   <div class="eca-actions">
    <button mat-flat-button color="secondary" [routerLink]="['/']"><mat-icon>arrow_back</mat-icon>Back</button>
  </div>
  <div class="title">
    <h1>{{ 'Help.Title' | translate }}</h1>
  </div>
  <div [innerHTML]="'Help.Description' | translate"></div>
  <div [innerHTML]="'Help.ConfigurationTitle' | translate"></div>
  <div [innerHTML]="'Help.ConfigurationText' | translate"></div>
  <div [innerHTML]="'Help.GeneralTabTitle' | translate"></div>
  <div [innerHTML]="'Help.GeneralTabText' | translate"></div>
  <div [innerHTML]="'Help.AppearanceTabTitle' | translate"></div>
  <div [innerHTML]="'Help.AppearanceTabText' | translate"></div>
  <div [innerHTML]="'Help.LabelsTabTitle' | translate"></div>
  <div [innerHTML]="'Help.LabelsTabText' | translate"></div>
  <div [innerHTML]="'Help.LogoTabTitle' | translate"></div>
  <div [innerHTML]="'Help.LogoTabText' | translate"></div>
  <div [innerHTML]="'Help.OrderTabTitle' | translate"></div>
  <div [innerHTML]="'Help.OrderTabText' | translate"></div>
  `
})
export class HelpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}