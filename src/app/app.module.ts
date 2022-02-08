import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { FuseModule } from '@fuse';
import { FuseConfigModule } from '@fuse/services/config';
import { CoreModule } from 'app/core/core.module';
import { appConfig } from 'app/core/config/app.config';
import { LayoutModule } from 'app/layout/layout.module';
import { AppComponent } from 'app/app.component';
import { appRoutes } from 'app/app.routing';
import { NgxTablePaginationModule } from 'ngx-table-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FuseNavigationModule } from '@fuse/components/navigation';
import { FuseLoadingBarModule } from '@fuse/components/loading-bar';
import { FuseFullscreenModule } from '@fuse/components/fullscreen/fullscreen.module';
import { LanguagesModule } from 'app/layout/common/languages/languages.module';
import { MessagesModule } from 'app/layout/common/messages/messages.module';
import { NotificationsModule } from 'app/layout/common/notifications/notifications.module';
import { QuickChatModule } from 'app/layout/common/quick-chat/quick-chat.module';
import { SearchModule } from 'app/layout/common/search/search.module';
import { ShortcutsModule } from 'app/layout/common/shortcuts/shortcuts.module';
import { UserModule } from 'app/layout/common/user/user.module';
import { SharedModule } from 'app/shared/shared.module';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AdminDashboardComponent } from './nuaxess/admin-dashboard/admin-dashboard.component';
import { VerticalMenuComponent } from './nuaxess/vertical-menu/vertical-menu.component';
import { TopMenuComponent } from './nuaxess/top-menu/top-menu.component';
import { AddUserComponent } from './nuaxess/add-user/add-user.component';
import { UserDashboardComponent } from './nuaxess/user-dashboard/user-dashboard.component';
import { AddOrgComponent } from './nuaxess/add-org/add-org.component';
import { OrgDashboardComponent } from './nuaxess/org-dashboard/org-dashboard.component';
import { UserListComponent } from './nuaxess/user-list/user-list.component';
import { OrgListComponent } from './nuaxess/org-list/org-list.component';
import { AddCompanyComponent } from './nuaxess/add-company/add-company.component';
import { CompanyListComponent } from './nuaxess/company-list/company-list.component';
import { CompanyDashboardComponent } from './nuaxess/company-dashboard/company-dashboard.component';
import { QuoteListComponent } from './nuaxess/quote-list/quote-list.component';
import { AddPlanComponent } from './nuaxess/add-plan/add-plan.component';
import { PlanListComponent } from './nuaxess/plan-list/plan-list.component';
import { PlanDashboardComponent } from './nuaxess/plan-dashboard/plan-dashboard.component';
import { QuoteDashboardComponent } from './nuaxess/quote-dashboard/quote-dashboard.component';
import { AddMemberComponent } from './nuaxess/add-member/add-member.component';
import { MemberListComponent } from './nuaxess/member-list/member-list.component';
import { MemberDashboardComponent } from './nuaxess/member-dashboard/member-dashboard.component';
import { AddQuoteComponent } from './nuaxess/add-quote/add-quote.component';
import { AddQuoteRequestComponent } from './nuaxess/add-quote-request/add-quote-request.component';
import { QuoteRequestListComponent } from './nuaxess/quote-request-list/quote-request-list.component';
import { QuoteRequestDashboardComponent } from './nuaxess/quote-request-dashboard/quote-request-dashboard.component'

import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatSelectModule } from '@angular/material/select';
import { FuseHighlightModule } from '@fuse/components/highlight';
import { FormsFieldsComponent } from 'app/modules/admin/ui/forms/fields/fields.component';
import { EditOrgComponent } from './nuaxess/edit-org/edit-org.component';
import { EditUserComponent } from './nuaxess/edit-user/edit-user.component';
import { EditCompanyComponent } from './nuaxess/edit-company/edit-company.component';
import { EditPlanComponent } from './nuaxess/edit-plan/edit-plan.component';
import { EditQuoteComponent } from './nuaxess/edit-quote/edit-quote.component';
import { EditMemberComponent } from './nuaxess/edit-member/edit-member.component';
import { UserEnrollComponent } from './nuaxess/user-enroll/user-enroll.component';
import { BadminComponent } from './nuaxess/badmin/badmin.component';
import { DashboardComponent } from './nuaxess/dashboard/dashboard.component';
import { EadminComponent } from './nuaxess/eadmin/eadmin.component';
import { ActivePlanDashboardComponent } from './nuaxess/active-plan-dashboard/active-plan-dashboard.component';
import { EmployeeDashboardComponent } from './nuaxess/employee-dashboard/employee-dashboard.component';
import { FuseCardComponent, FuseCardModule } from '@fuse/components/card';
import { EmployeeIHQComponent } from './nuaxess/employee-ihq/employee-ihq.component';
import { MemberInfoComponent } from './nuaxess/member-info/member-info.component';
import { MemberFamilyComponent } from './nuaxess/member-family/member-family.component';
import { MemberPlansComponent } from './nuaxess/member-plans/member-plans.component';
import { MemberIHQComponent } from './nuaxess/member-ihq/member-ihq.component';
import { MemberProfileComponent } from './nuaxess/member-profile/member-profile.component';
import { MemberMedicationsComponent } from './nuaxess/member-medications/member-medications.component';
import { MemberInsuranceComponent } from './nuaxess/member-insurance/member-insurance.component';
import { InvalidTokenComponent } from './nuaxess/invalid-token/invalid-token.component';
import { AddBrokerComponent } from './nuaxess/add-broker/add-broker.component';
import { EditBrokerComponent } from './nuaxess/edit-broker/edit-broker.component';
import { ForcedLogoutComponent } from './nuaxess/forced-logout/forced-logout.component';
import { NewSigninComponent } from './nuaxess/new-signin/new-signin.component';
import { MemberLookupComponent } from './nuaxess/member-lookup/member-lookup.component';
import { GuardianLookupComponent } from './nuaxess/guardian-lookup/guardian-lookup.component';
import { EmployeeLookupComponent } from './nuaxess/employee-lookup/employee-lookup.component';
import { AddInvoiceComponent } from './nuaxess/add-invoice/add-invoice.component';
import { InvoiceDashboardComponent } from './nuaxess/invoice-dashboard/invoice-dashboard.component';
import { InvoiceListComponent } from './nuaxess/invoice-list/invoice-list.component';
import { ApaPlanListComponent } from './nuaxess/apa-plan-list/apa-plan-list.component';
import { ApaCompanyDashboardComponent } from './nuaxess/apa-company-dashboard/apa-company-dashboard.component';

const routerConfig: ExtraOptions = {
    preloadingStrategy       : PreloadAllModules,
    scrollPositionRestoration: 'enabled'
};

@NgModule({
    declarations: [
        AppComponent,
        AdminDashboardComponent,
        VerticalMenuComponent,
        TopMenuComponent,
        AddUserComponent,
        UserDashboardComponent,
        AddOrgComponent,
        OrgDashboardComponent,
        UserListComponent,
        OrgListComponent,
        AddCompanyComponent,
        CompanyListComponent,
        CompanyDashboardComponent,
        QuoteListComponent,
        AddPlanComponent,
        PlanListComponent,
        PlanDashboardComponent,
        QuoteDashboardComponent,
        AddMemberComponent,
        MemberListComponent,
        MemberDashboardComponent,
        AddQuoteComponent,
        AddQuoteRequestComponent,
        QuoteRequestListComponent,
        QuoteRequestDashboardComponent,
        EditOrgComponent,
        EditUserComponent,
        EditCompanyComponent,
        EditPlanComponent,
        EditQuoteComponent,
        EditMemberComponent,
        UserEnrollComponent,
        BadminComponent,
        DashboardComponent,
        EadminComponent,
        ActivePlanDashboardComponent,
        EmployeeDashboardComponent,
        EmployeeIHQComponent,
        MemberInfoComponent,
        MemberFamilyComponent,
        MemberPlansComponent,
        MemberIHQComponent,
        MemberProfileComponent,
        MemberMedicationsComponent,
        MemberInsuranceComponent,
        InvalidTokenComponent,
        AddBrokerComponent,
        EditBrokerComponent,
        ForcedLogoutComponent,
        NewSigninComponent,
        MemberLookupComponent,
        GuardianLookupComponent,
        EmployeeLookupComponent,
        AddInvoiceComponent,
        InvoiceDashboardComponent,
        InvoiceListComponent,
        ApaPlanListComponent,
        ApaCompanyDashboardComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        CoreModule,
        FuseModule,
        FuseConfigModule.forRoot(appConfig),
  //      FuseMockApiModule.forRoot(mockApiServices),
        FuseFullscreenModule,
        FuseHighlightModule,
        FuseLoadingBarModule,
        FuseNavigationModule,
        FuseCardModule,
        LayoutModule,
        LanguagesModule,
        MatButtonModule,
        MatChipsModule,
        MatFormFieldModule,
        MatButtonToggleModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatInputModule,
        MatProgressBarModule,
        MatDatepickerModule,
        MatRippleModule,
        MatSidenavModule,
        MatSortModule,
        MatSelectModule,
        MatTableModule,
        MatTabsModule,
        MessagesModule,
        MatMomentDateModule,
        NgxTablePaginationModule,
        Ng2SearchPipeModule,
        NgApexchartsModule,
        NotificationsModule,
        RouterModule.forRoot(appRoutes, routerConfig),
        QuickChatModule,
        SearchModule,
        ShortcutsModule,
        UserModule,
        SharedModule,
        MarkdownModule.forRoot({})
    ],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
