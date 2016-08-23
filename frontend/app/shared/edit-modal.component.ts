import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { MODAL_DIRECTIVES, ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
  selector : 'edit-modal',
  directives : [ MODAL_DIRECTIVES ],
  template : `
    <modal #mymodal>
        <modal-header [show-close]="true">
            <h4 class="modal-title">{{ header }}</h4>
        </modal-header>
        <modal-body>
          <div class="form-group">
              <label for="textbox">{{ label }}</label>
              <input autofocus type="{{ inputType }}"
                class="form-control" id="textbox" [(ngModel)]="value">
          </div>
        </modal-body>
        <modal-footer>
          <button type="button" class="btn btn-default" data-dismiss="mymodal" (click)="mymodal.dismiss()">Cancel</button>
          <button type="button" class="btn btn-primary" (click)="close()">Ok</button>
        </modal-footer>
    </modal>
    <button type="button" class="btn btn-default" (click)="mymodal.open()">Edit</button>
  `
})

export class EditModalComponent {
  @ViewChild('mymodal')
  modal : ModalComponent;

  @Input()
  header  = 'Edit';

  @Input()
  label = '';

  @Input()
  inputType = 'text';

  @Input()
  value = '';

  @Output()
  newValue = new EventEmitter();

  close() {
    this.newValue.emit(this.value);
    this.modal.close();
  }
}
