import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {CustomSelectService, SelectOption} from './custom-select.service';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss']
})
export class CustomSelectComponent implements OnInit {

  @Output() onItem = new EventEmitter<{label: string, value: string}>();
  @Input() selectOption: SelectOption;
  @ViewChild('wrapper', {static: true}) wrapper: ElementRef;
  @Input()isDropDown = false;
  selectedItem: string;
  constructor( private customSelectService: CustomSelectService) { }

  ngOnInit(): void {
    this.customSelectService.onDroppedOne.subscribe( label => {
      if (!this.wrapper.nativeElement.classList.contains(label)) {
        this.isDropDown = false;
      }
    });
    this.customSelectService.onReset.subscribe( () => {
      this.selectedItem = null;
    });
  }

  onDropDown(label: string) {
    this.isDropDown = !this.isDropDown;
    this.customSelectService.onDroppedOne.emit(label);
  }

  onSelectedItem(option: string, event) {
    this.isDropDown = false;
    this.selectedItem = option;
    this.onItem.emit({label: this.selectOption.label, value: option});
  }
}
