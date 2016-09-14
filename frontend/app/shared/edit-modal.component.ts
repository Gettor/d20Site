import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
  selector : 'edit-modal',
  template : `
    <button type="button" class="btn btn-default" (click)="open()">Edit</button>
    <modal #mymodal>
        <modal-header [show-close]="true">
            <h4 class="modal-title">Edit {{ label }}</h4>
        </modal-header>
        <modal-body>
          <div class="form-group">
              <input autofocus type="{{ inputType }}"
                class="form-control" id="textbox" [(ngModel)]="formValue">
          </div>
        </modal-body>
        <modal-footer>
          <button type="button" class="btn btn-default" data-dismiss="mymodal" (click)="mymodal.dismiss()">Cancel</button>
          <button type="button" class="btn btn-primary" (click)="close()">Ok</button>
        </modal-footer>
    </modal>
  `
})

export class EditModalComponent {
  @ViewChild('mymodal')
  modal : ModalComponent;

  @Input()
  label = '';

  @Input()
  inputType = 'text';

  @Input()
  value : any;

  @Output()
  newValue = new EventEmitter();

  formValue : any;

  open() {
    this.formValue = this.value;
    this.modal.open()
  }

  close() {
    this.newValue.emit(this.formValue);
    this.modal.close();
  }
}
