import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent,ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my_application';
  screenHeight:any;
  screenWidth:any;
  footerMaxHeight!:number;

  constructor(){
    this.getScreenSize(event);
  }
  @HostListener('window:resize',['$event'])
  getScreenSize(event:any){
    this.screenHeight =window.innerHeight;
    this.screenWidth = window.innerWidth;
    //console.log(this.screenHeight,this.screenHeight)
    this.footerMaxHeight =this.screenHeight -160;

  }
}
