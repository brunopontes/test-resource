import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

// Actions
import { ExtractActions } from './actions/extract.actions';

// Repositories
import { BaseRepository } from './repositories/base.repository';
import { ExtractRepository } from './repositories/extract.repository';

// Services
import { BaseService } from './services/base.service';
import { ExtractService } from './services/extract.service';

// Components
import { AppComponent } from './app.component';

// Mapper
import { ExtractMapper } from './mapper/extract.mapper';

// Reducers
import { ExtractReducer } from './reducers/extract.reducer';

// Import containers
import { DefaultLayoutComponent } from './containers';

// Import views
import { ExtractComponent } from './views/extract/extract.component';



import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    StoreModule.forRoot({
      extractState: ExtractReducer,
    }),
  ],
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    ExtractComponent
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  },
    // Repositories
    BaseRepository,
    ExtractRepository,
    // Services
    BaseService,
    ExtractService,
    // Mapper
    ExtractMapper,
    // Actions
    ExtractActions,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
