import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from './user/user.service';
import { EditModalComponent } from './edit-modal.component';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

@NgModule({
  imports:      [ CommonModule, FormsModule, Ng2Bs3ModalModule ],
  declarations: [ EditModalComponent ],
  exports:      [ EditModalComponent,
                  CommonModule, FormsModule ]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ UserService ]
    };
  }
}
