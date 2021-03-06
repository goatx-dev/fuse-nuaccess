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
  selector: 'app-member-ihq',
  templateUrl: './member-ihq.component.html',
  styleUrls: ['./member-ihq.component.scss']
})
export class MemberIHQComponent implements OnInit, OnDestroy {
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
    n1:any;
    n2:any;
    n3:any;
    n4:any;
    n5:any;
    n6:any;
    n7:any;
    n8:any;
    n9:any;
    n10:any;
    n11:any;
    n12:any;
    n13:any;
    n14:any;
    n15:any;
    n16:any;
    n17:any;
    n18:any;
    n19:any;
    n21:any;
    n20:any;

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
    ngOnInit(): void
    {    
      this.n1='';

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

    postQ(a: any) {
      this.data['ihqd']['question_id']=a;
      this.data['ihqd']['answer']=this.data['formData']['a'+a];
      this._dataService.postForm("post-ihq-answer", this.data.ihqd).subscribe((data:any)=>{
        if (data.error_code=="0") {
          if (data.message==1) this.n1='Saved';
          if (data.message==2) this.n2='Saved';
          if (data.message==3) this.n3='Saved';
          if (data.message==4) this.n4='Saved';
          if (data.message==5) this.n5='Saved';
          if (data.message==6) this.n6='Saved';
          if (data.message==7) this.n7='Saved';
          if (data.message==8) this.n8='Saved';
          if (data.message==9) this.n9='Saved';
          if (data.message==10) this.n10='Saved';
          if (data.message==11) this.n11='Saved';
          if (data.message==12) this.n12='Saved';
          if (data.message==13) this.n13='Saved';
          if (data.message==14) this.n14='Saved';
          if (data.message==15) this.n15='Saved';
          if (data.message==16) this.n16='Saved';
          if (data.message==17) this.n17='Saved';
          if (data.message==18) this.n18='Saved';
          if (data.message==19) this.n19='Saved';
          if (data.message==20) this.n20='Saved';
          if (data.message==21) this.n21='Saved';
//            this._router.navigate(['/org-dashboard',data.id])
        } else {     
//            this.error=data.error_message
        }
      });
    }

    postForm() {
        this._dataService.postForm("post-edit-employee", this.data).subscribe((data:any)=>{
          if (data.error_code=="0") {
            location.reload();
//            this._router.navigate(['/org-dashboard',data.id])
          } else {     
//            this.error=data.error_message
          }
        });
      }

}

