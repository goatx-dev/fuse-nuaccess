import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ApexOptions, ApexYAxis } from 'ng-apexcharts';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { FuseNavigationService, FuseVerticalNavigationComponent } from '@fuse/components/navigation';
import { Navigation } from 'app/core/navigation/navigation.types';
import { NavigationService } from 'app/core/navigation/navigation.service';
import { DataService } from 'app/data.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-member-family',
  templateUrl: './member-family.component.html',
  styleUrls: ['./member-family.component.scss']
})
export class MemberFamilyComponent implements OnInit, OnDestroy {
  navigation: Navigation;
  isScreenSmall: boolean;
  term: any;
  p: any;
  formFieldHelpers: string[] = [''];
  adding: any;

    data: any;
    selectedProject: string = 'ACME Corp. Backend App';
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    currentYear: any;
    email: any;
    user: any;
    editing: any;
    isLoading: any;
    addF: any;

    /**
     * Constructor
     */

     constructor(
      private _activatedRoute: ActivatedRoute,
      private _router: Router,
      private _navigationService: NavigationService,
      private _fuseMediaWatcherService: FuseMediaWatcherService,
      private _fuseNavigationService: FuseNavigationService,
      private _dataService: DataService,
      private _formBuilder: FormBuilder
  ) { }

  createProduct() {

  }

  addFamily() {

    if (this.addF=='N') {
      this.addF='Y' 
      this.data['formData'].id="";
      this.data['formData'].first_name="";
      this.data['formData'].last_name="";
      this.data['formData'].middle_name="";
      this.data['formData'].suffix="";
      this.data['formData'].member_type="";
      this.data['formData'].gender="";
      this.data['formData'].date_of_birth="";
      this.data['formData'].social_security_number="";
    } else {
      this.addF='N'
    }
  }

  edit(id: any, first_name: any, middle_name:any, last_name:any, suffix:any, member_type: any, 
    gender: any, date_of_birth: any, social_security_number: any, height: any, weight:any) {
      this.addF='Y'
      this.data['formData'].id=id;
      this.data['formData'].first_name=first_name;
      this.data['formData'].last_name=last_name;
      this.data['formData'].middle_name=middle_name;
      this.data['formData'].suffix=suffix;
      this.data['formData'].member_type=member_type;
      this.data['formData'].gender=gender;
      this.data['formData'].date_of_birth=date_of_birth;
      this.data['formData'].social_security_number=social_security_number;
      this.data['formData'].height=height;
      this.data['formData'].weight=weight;
  }

    ngOnInit(): void
    {      
      this.addF='N';
            this.isLoading=false;
            this._activatedRoute.data.subscribe(({ 
              data, menudata, userdata })=> { 
                this.data=data;
                if (this.data.user.force_logout>0) {
                  localStorage.removeItem('uid');
                  this._router.navigate(['/forced-off',this.data.user.force_logout]);
              }
                this.user=userdata;
                this.navigation=menudata
                console.log(data)
            }) 
           this.editing='N';
            this._fuseMediaWatcherService.onMediaChange$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(({matchingAliases}) => {
                // Check if the screen is small
                this.isScreenSmall = !matchingAliases.includes('md');
            });
              
    }

    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    toggleEdit() {
      if (this.editing=='Y') {
          this.editing='N'
      } else {
          this.editing='Y'
      }
    }

    trackByFn(index: number, item: any): any
    {
        return item.id || index;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    private _fixSvgFill(element: Element): void
    {
        // Current URL
        const currentURL = this._router.url;

        // 1. Find all elements with 'fill' attribute within the element
        // 2. Filter out the ones that doesn't have cross reference so we only left with the ones that use the 'url(#id)' syntax
        // 3. Insert the 'currentURL' at the front of the 'fill' attribute value
        Array.from(element.querySelectorAll('*[fill]'))
             .filter(el => el.getAttribute('fill').indexOf('url(') !== -1)
             .forEach((el) => {
                 const attrVal = el.getAttribute('fill');
                 el.setAttribute('fill', `url(${currentURL}${attrVal.slice(attrVal.indexOf('#'))}`);
             });
    }

    /**
     * Prepare the chart data from the data
     *
     * @private
     */

    toggleNavigation(name: string): void
    {
        // Get the navigation
        const navigation = this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>(name);

        if ( navigation )
        {
            // Toggle the opened status
            navigation.toggle();
        }
    }

    getFormFieldHelpersAsString(): string
    {
        return this.formFieldHelpers.join(' ');
    }

    notifySMS() {

    }

    notifyEMAIL() {

    }
  
    addEmployee () {

    }
    postForm() {
        this._dataService.postForm("post-add-member-family", this.data).subscribe((data:any)=>{
          if (data.error_code=="0") {
            location.reload();
//            this._router.navigate(['/org-dashboard',data.id])
          } else {     
//            this.error=data.error_message
          }
        });
      }

}
