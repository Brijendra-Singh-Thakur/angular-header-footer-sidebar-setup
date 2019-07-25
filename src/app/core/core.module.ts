import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { SideNavModule } from './side-nav/side-nav.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { NotFoundComponent } from './404/not-found.component';
import { NotFoundModule } from './404/not-found.module';
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    SideNavModule,
    NotFoundModule, 
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    NotFoundComponent,
    HeaderModule,
    FooterModule,
    SideNavModule,
    NotFoundModule,
    RouterModule
  ],
})
export class CoreModule { }
