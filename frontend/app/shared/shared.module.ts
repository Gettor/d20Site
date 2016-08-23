import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from './user/user.service';
import { EditModalComponent } from './edit-modal.component';

@NgModule({
  imports:      [ CommonModule, FormsModule ],
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
