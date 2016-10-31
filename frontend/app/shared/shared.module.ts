import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from './user/user.service';
import { AuthGuard } from './auth-guard';
import { MiniatureComponent } from './miniature/miniature.component';
import { MiniatureContainerComponent } from './miniature/miniature-container.component';
import { LevelFinderComponent } from './spell-finder/level-finder.component';
import { NameFinderComponent } from './spell-finder/name-finder.component';
import { TypeFinderComponent } from './spell-finder/type-finder.component';
import { SpellFinderComponent } from './spell-finder/spell-finder.component';
import { SpellFinderElementComponent } from './spell-finder/spell-finder-element.component';
import { SpellFinderService } from './spell-finder/spell-finder.service';
import { EditModalComponent } from './edit-modal.component';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { Ng2PaginationModule } from 'ng2-pagination';
import { TabsModule } from 'ng2-tabs';
import { AUTH_PROVIDERS } from 'angular2-jwt';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Ng2Bs3ModalModule,
    Ng2PaginationModule,
    TabsModule,
  ],
  declarations: [
    EditModalComponent,
    MiniatureComponent,
    MiniatureContainerComponent,
    TypeFinderComponent,
    LevelFinderComponent,
    NameFinderComponent,
    SpellFinderComponent,
    SpellFinderElementComponent,
  ],
  providers: [
    AUTH_PROVIDERS,
    AuthGuard,
    SpellFinderService,
  ],
  exports: [
    EditModalComponent,
    MiniatureContainerComponent,
    SpellFinderComponent,
    CommonModule,
    FormsModule,
  ]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ UserService ]
    };
  }
}
