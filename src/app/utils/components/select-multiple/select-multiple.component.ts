import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {CustomSelectService, SelectOption} from '../../../shared/custom-select/custom-select.service';

@Component({
  selector: 'app-select-multiple',
  templateUrl: './select-multiple.component.html',
  styleUrls: ['./select-multiple.component.scss']
})
export class SelectMultipleComponent implements OnInit {

  @Output() onItem = new EventEmitter<{label: string, value: string[]}>();
  @Input() selectOption: SelectOption;
  @ViewChild('wrapper', {static: true}) wrapper: ElementRef;
  @Input()isDropDown = false;
  selectedMultipleItems: string[] = ['appartement'];
  constructor( private customSelectService: CustomSelectService) { }

  ngOnInit(): void {
    this.customSelectService.onDroppedOne.subscribe( label => {
      if (!this.wrapper.nativeElement.classList.contains(label)) {
        this.isDropDown = false;
      }
    });
    this.customSelectService.onReset.subscribe( () => {
      this.selectedMultipleItems = ['appartement'];
    });
  }

  onDropDown(label: string) {
    this.isDropDown = !this.isDropDown;
    this.customSelectService.onDroppedOne.emit(label);
  }

  onSelectedItem(option: string, event) {
    const found = this.selectedMultipleItems.find( item => {
      return item === option;
    });

    if (!found) {
      this.selectedMultipleItems.push(option);
    } else {
      const indexToDelete = this.selectedMultipleItems.indexOf(option);
      if (this.selectedMultipleItems.length > 1) {
        this.selectedMultipleItems.splice(indexToDelete, 1);
      }
    }
  }
  markIt(option): boolean {
    return this.selectedMultipleItems.indexOf(option) !== -1;
  }

  onValidate() {
    this.isDropDown = false;
    this.onItem.emit({label: this.selectOption.label, value: this.selectedMultipleItems});
  }

}
