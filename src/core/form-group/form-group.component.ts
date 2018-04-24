import { Component, Input, AfterViewInit, SimpleChanges, IterableDiffers, IterableDiffer} from "@angular/core";
import { FormControl, Validators, NgModel } from "@angular/forms";

/**
 * Check if all input inside are valid to submit result
 */
@Component({
  selector: "formGroup",
  templateUrl: "./form-group.component.html",
  styleUrls: ["./form-group.component.scss"]
})
export class FormGroupComponent implements AfterViewInit {
  /**
   * ngModel list containing valid property 
   */
  @Input() ngModels: Array<NgModel>
  
  /**
   * Expose valid property if all inputs are valids
   */
  valid=true

  /**
   * On change of input property recheck inputs validity
   */
  ngDoCheck() { this.isValid() }
  
  /**
   * Check inputs validity on first time init
   */
  ngAfterViewInit(){ 
    this.ngModels.map(model=>{
      if (model.update){
        model.update.subscribe(data=>{
          this.isValid()
        })
      }
    })
    this.isValid()
  }

  /**
   * Check inputs validity;
   * 
   * false: one inputs or more is/are invalid/s;
   * 
   * true : all inputs are valids
   */
  isValid(){
    setTimeout(() => { // let Angular to Perform an checkError on all ngModel
      this.valid = this.ngModels.reduce((prev, curr) => {
        if (!prev || !curr.valid) return false
        return true
      }, true)
    }, 10);
  }
}