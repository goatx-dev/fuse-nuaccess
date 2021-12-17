import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertType } from '@fuse/components/alert';
import { AuthService } from 'app/core/auth/auth.service';
import { DataService } from 'app/data.service';

@Component({
    selector     : 'auth-sign-in',
    templateUrl  : './sign-in.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class AuthSignInComponent implements OnInit
{
    @ViewChild('signInNgForm') signInNgForm: NgForm;

    alert: { type: FuseAlertType; message: string } = {
        type   : 'success',
        message: ''
    };
    signInForm: FormGroup;
    showAlert: boolean = false;

    /**
     * Constructor
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _authService: AuthService,
        private _formBuilder: FormBuilder,
        private _router: Router,
        private _dataService: DataService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Create the form
        this.signInForm = this._formBuilder.group({
            email     : ['', [Validators.required]],
            password  : ['', Validators.required],
            rememberMe: ['']
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Sign in
     */
     signIn(): void
     {
         if ( this.signInForm.invalid )
         {
             return;
         }
 
         this.signInForm = this._formBuilder.group({
            email     : ['hughes.brian@company.com', [Validators.required, Validators.email]],
            password  : ['admin', Validators.required],
            rememberMe: ['']
        });

         this.signInForm.disable();
         this.showAlert = false;
         this._authService.signIn(this.signInForm.value)
             .subscribe(
                 () => {
 
                     // Set the redirect url.
                     // The '/signed-in-redirect' is a dummy url to catch the request and redirect the user
                     // to the correct page after a successful sign in. This way, that url can be set via
                     // routing file and we don't have to touch here.
                     //const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/signed-in-redirect';
 
                     // Navigate to the redirect url
                     //this._router.navigateByUrl(redirectURL);
                 },
                 (response) => {
                     // Re-enable the form
                     this.signInForm.enable();
                     // Reset the form
                     this.signInNgForm.resetForm();
                     // Set the alert
                     this.alert = {
                         type   : 'error',
                         message: 'Wrong email or password'
                     };
 
                     // Show the alert
                     this.showAlert = true;
                 }
             );
     }
                        
              setUID(): void {
                localStorage.setItem('uid','999')
                this._router.navigate(['/active-claims'])
            }
            
    postForm() {
    
        // Return if the form is invalid
        if ( this.signInForm.invalid )
        {
            return;
        }

        // Disable the form
        this.signInForm.disable();

        // Hide the alert
        this.showAlert = false;

              this._dataService.postLogin(this.signInForm.value['email'], this.signInForm.value['password']).subscribe((data:any)=>{
                if (data.error_code=="0") {
                  console.log(data)
                  localStorage.setItem('uid',data.uid)
                  localStorage.setItem('role',data.role)
                  this.signIn()
                  if (data.role=="sadmin") { 
                      this._router.navigateByUrl('/dashboards/project/1'); 
                      location.replace('/dashboards/projects');
                    }
                  if (data.role=="badmin") { this._router.navigateByUrl('/dashboards/project'); }
                  if (data.role=="broker") { this._router.navigateByUrl('/dashboards/project'); }
                  if (data.role=="eadmin") { this._router.navigateByUrl('/dashboards/project'); }
                  if (data.role=="employee") { this._router.navigate(['/dashboards/project']) }
                  if (data.role=="user") { this._router.navigate(['/dashboards/profile']) }
                } else {      
                    this.signInForm.enable();
                    this.signInNgForm.resetForm();
                    this.alert = {
                        type   : 'error',
                        message: 'Wrong email or password'
                    };
                    this.showAlert = true;
                }
              });
    }
            
}
