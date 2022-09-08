import {Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {CustomSelectService, SelectOption} from './custom-select.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss']
})
export class CustomSelectComponent implements OnInit, OnDestroy {
  constructor( private customSelectService: CustomSelectService, private route: ActivatedRoute) { }

  eventSubscription: Subscription;
  onResetSubscription: Subscription;

  @Output() onItem = new EventEmitter<{label: string, value: string}>();
  @Input() selectOption: SelectOption;
  @Input() isDropDown = false;
  @ViewChild('wrapper', {static: true}) wrapper: ElementRef;
  selectedItem: string;

  ngOnInit(): void {
    this.eventSubscription = this.customSelectService.onDroppedOne.subscribe( label => {
      if (!this.wrapper.nativeElement.classList.contains(label)) {
        this.isDropDown = false;
      }
    });
    this.onResetSubscription = this.customSelectService.onReset.subscribe( () => {
      this.selectedItem = null;
    });

    this.route.queryParamMap.subscribe((paramMap: ParamMap) => {
      this.onSelectedItem(paramMap.get('city'));
    });
  }

  ngOnDestroy(): void {
    this.eventSubscription.unsubscribe();
    this.onResetSubscription.unsubscribe();
  }

  onDropDown(label: string) {
    this.isDropDown = !this.isDropDown;
    this.customSelectService.onDroppedOne.emit(label);
  }

  onSelectedItem(option: string, event = null) {
    this.isDropDown = false;
    this.selectedItem = option;
    this.onItem.emit({label: this.selectOption.label, value: option});
  }
}
