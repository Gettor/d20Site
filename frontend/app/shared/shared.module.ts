import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from './user/user.service';
import { MiniatureComponent } from './miniature/miniature.component';
import { MiniatureContainerComponent } from './miniature/miniature-container.component';
import { EditModalComponent } from './edit-modal.component';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { Ng2PaginationModule } from 'ng2-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Ng2Bs3ModalModule,
    Ng2PaginationModule,
  ],
  declarations: [
    EditModalComponent,
    MiniatureComponent,
    MiniatureContainerComponent,
  ],
  exports: [
    EditModalComponent,
    MiniatureContainerComponent,
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
