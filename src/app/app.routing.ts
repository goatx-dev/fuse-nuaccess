import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';
import { AdminDashboardComponent } from './nuaxess/admin-dashboard/admin-dashboard.component';
import { AuthGuardOriginal } from './auth.guard';
import { DataResolver, EnrollResolver, MenuResolver, UserResolver } from './data.resolver';
import { AddUserComponent } from './nuaxess/add-user/add-user.component';
import { UserListComponent } from './nuaxess/user-list/user-list.component';
import { UserDashboardComponent } from './nuaxess/user-dashboard/user-dashboard.component';
import { AddOrgComponent } from './nuaxess/add-org/add-org.component';
import { OrgListComponent } from './nuaxess/org-list/org-list.component';
import { OrgDashboardComponent } from './nuaxess/org-dashboard/org-dashboard.component';
import { AddCompanyComponent } from './nuaxess/add-company/add-company.component';
import { CompanyListComponent } from './nuaxess/company-list/company-list.component';
import { CompanyDashboardComponent } from './nuaxess/company-dashboard/company-dashboard.component';
import { AddPlanComponent } from './nuaxess/add-plan/add-plan.component';
import { PlanListComponent } from './nuaxess/plan-list/plan-list.component';
import { PlanDashboardComponent } from './nuaxess/plan-dashboard/plan-dashboard.component';
import { AddQuoteComponent } from './nuaxess/add-quote/add-quote.component';
import { QuoteListComponent } from './nuaxess/quote-list/quote-list.component';
import { QuoteDashboardComponent } from './nuaxess/quote-dashboard/quote-dashboard.component';
import { AddQuoteRequestComponent } from './nuaxess/add-quote-request/add-quote-request.component';
import { QuoteRequestListComponent } from './nuaxess/quote-request-list/quote-request-list.component';
import { QuoteRequestDashboardComponent } from './nuaxess/quote-request-dashboard/quote-request-dashboard.component';
import { EditOrgComponent } from './nuaxess/edit-org/edit-org.component';
import { EditPlanComponent } from './nuaxess/edit-plan/edit-plan.component';
import { EditCompanyComponent } from './nuaxess/edit-company/edit-company.component';
import { EditMemberComponent } from './nuaxess/edit-member/edit-member.component';
import { EditUserComponent } from './nuaxess/edit-user/edit-user.component';
import { EditQuoteComponent } from './nuaxess/edit-quote/edit-quote.component';
import { UserEnrollComponent } from './nuaxess/user-enroll/user-enroll.component';
import { BadminComponent } from './nuaxess/badmin/badmin.component';
import { EadminComponent } from './nuaxess/eadmin/eadmin.component';
import { DashboardComponent } from './nuaxess/dashboard/dashboard.component';
import { ActivePlanDashboardComponent } from './nuaxess/active-plan-dashboard/active-plan-dashboard.component';
import { EmployeeDashboardComponent } from './nuaxess/employee-dashboard/employee-dashboard.component';
import { EmployeeIHQComponent } from './nuaxess/employee-ihq/employee-ihq.component';
import { MemberInfoComponent } from './nuaxess/member-info/member-info.component';
import { MemberFamilyComponent } from './nuaxess/member-family/member-family.component';
import { MemberPlansComponent } from './nuaxess/member-plans/member-plans.component';
import { MemberIHQComponent } from './nuaxess/member-ihq/member-ihq.component';
import { MemberProfileComponent } from './nuaxess/member-profile/member-profile.component';
import { MemberMedicationsComponent } from './nuaxess/member-medications/member-medications.component';
import { MemberInsuranceComponent } from './nuaxess/member-insurance/member-insurance.component';
import { InvalidTokenComponent } from './nuaxess/invalid-token/invalid-token.component';
import { ForcedLogoutComponent } from './nuaxess/forced-logout/forced-logout.component';
import { NewSigninComponent } from './nuaxess/new-signin/new-signin.component';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [


    {path: '', pathMatch : 'full', redirectTo: 'sign-in'},

    // Redirect signed in user to the '/dashboards/project'
    //
    // After the user signs in, the sign in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'sign-in'},

    // Auth routes for guests
    {
        path: '',
        //canActivate: [NoAuthGuard],
        //canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'confirmation-required', loadChildren: () => import('app/modules/auth/confirmation-required/confirmation-required.module').then(m => m.AuthConfirmationRequiredModule)},
            {path: 'forgot-password', loadChildren: () => import('app/modules/auth/forgot-password/forgot-password.module').then(m => m.AuthForgotPasswordModule)},
            {path: 'reset-password', loadChildren: () => import('app/modules/auth/reset-password/reset-password.module').then(m => m.AuthResetPasswordModule)},
            {path: 'sign-in2', loadChildren: () => import('app/modules/auth/sign-in/sign-in.module').then(m => m.AuthSignInModule)},
            {path: 'sign-up', loadChildren: () => import('app/modules/auth/sign-up/sign-up.module').then(m => m.AuthSignUpModule)},
            {path: 'enroll/:id', component: UserEnrollComponent, resolve: { data: EnrollResolver }, },
            {path: 'e/:id', component: UserEnrollComponent, resolve: { data: EnrollResolver }, },
            {path: 'e', component: UserEnrollComponent, resolve: { data: EnrollResolver }, },
            {path: 'forced-off/:id', component: ForcedLogoutComponent },
            {path: 'forced-off', component: ForcedLogoutComponent },
            {path: 'sign-in', component: NewSigninComponent },
            {path: 'error', component: InvalidTokenComponent },
            {path: 'enroll', component: UserEnrollComponent, resolve: { data: EnrollResolver }, }
        ]
    },

    // Auth routes for authenticated users
    {
        path: '',
        canActivate: [AuthGuardOriginal],
//        canActivateChild: [AuthGuardOriginal],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'sign-out', loadChildren: () => import('app/modules/auth/sign-out/sign-out.module').then(m => m.AuthSignOutModule)},
            {path: 'unlock-session', loadChildren: () => import('app/modules/auth/unlock-session/unlock-session.module').then(m => m.AuthUnlockSessionModule)},
            {path: 'sadmin', component: AdminDashboardComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'info', component: MemberInfoComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'family', component: MemberFamilyComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'plans', component: MemberPlansComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'ihq', component: MemberIHQComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'medications', component: MemberMedicationsComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'previous', component: MemberInsuranceComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'profile', component: MemberProfileComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'badmin', component: BadminComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'badmin', component: EadminComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'dashboard', component: DashboardComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'add-user', component: AddUserComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'add-user/:id', component: AddUserComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'add-user/:id/:id2', component: AddUserComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'user-list', component: UserListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'user-list/:id', component: UserListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'user-dashboard/:id', component: UserDashboardComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'user-dashboard/:id/:id2', component: UserDashboardComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'add-org', component: AddOrgComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'add-org/:id', component: AddOrgComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'add-org/:id/:id2', component: AddOrgComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'org-list', component: OrgListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'org-dashboard/:id', component: OrgDashboardComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'edit-org/:id', component: EditOrgComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'edit-org/:id/:id2', component: EditOrgComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'edit-plan/:id', component: EditPlanComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'edit-company/:id', component: EditCompanyComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'edit-member/:id', component: EditMemberComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'edit-user/:id', component: EditUserComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'edit-org/:id', component: EditQuoteComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'add-company', component: AddCompanyComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'add-company/:id', component: AddCompanyComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'add-company/:id/:id2', component: AddCompanyComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'company-list/:id', component: CompanyListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'company-list', component: CompanyListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'company-dashboard/:id', component: CompanyDashboardComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'employee-dashboard/:id', component: EmployeeDashboardComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'employee-dashboard/:id/:id2', component: EmployeeDashboardComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'company-dashboard/:id/:id2', component: CompanyDashboardComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'add-plan', component: AddPlanComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'plan-list', component: PlanListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'plan-dashboard/:id', component: PlanDashboardComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'add-quote/:id', component: AddQuoteComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'quote-list/:id', component: QuoteListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'quote-list/:id/:id2', component: QuoteListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'quote-list', component: QuoteListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'quote-dashboard/:id', component: QuoteDashboardComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'quote-dashboard/:id/:id2', component: QuoteDashboardComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'add-quote-request/:id', component: AddQuoteRequestComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'quote-request-list', component: QuoteRequestListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'quote-request-list/:id', component: QuoteRequestListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'quote-request-list/:id/:id2', component: QuoteRequestListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'quote-request-dashboard/:id', component: QuoteRequestDashboardComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'quote-request-dashboard/:id/:id2', component: QuoteRequestDashboardComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'edit-quote-request/:id', component: EditQuoteComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'employee-ihq/:id', component: EmployeeIHQComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'active-plan-dashboard/:id', component: ActivePlanDashboardComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'enroll/:id', component: UserEnrollComponent, resolve: { data: EnrollResolver }, },
            {path: 'enroll', component: UserEnrollComponent, resolve: { data: EnrollResolver }, }
        ]
    },

    // Landing routes
    {
        path: '',
        component  : LayoutComponent,
        data: {
            layout: 'empty'
        },
        children   : [
            {path: 'home', loadChildren: () => import('app/modules/landing/home/home.module').then(m => m.LandingHomeModule)},
        ]
    },

    // Admin routes
    {
        path       : '',
        //canActivate: [AuthGuard],
        //canActivateChild: [AuthGuard],
        component  : LayoutComponent,
        resolve    : {
            initialData: InitialDataResolver,
        },
        children   : [

            // Dashboards
            {path: 'dashboards', children: [
                {path: 'project', loadChildren: () => import('app/modules/admin/dashboards/project/project.module').then(m => m.ProjectModule)},
                {path: 'analytics', loadChildren: () => import('app/modules/admin/dashboards/analytics/analytics.module').then(m => m.AnalyticsModule)},
                {path: 'finance', loadChildren: () => import('app/modules/admin/dashboards/finance/finance.module').then(m => m.FinanceModule)},
                {path: 'crypto', loadChildren: () => import('app/modules/admin/dashboards/crypto/crypto.module').then(m => m.CryptoModule)},
            ]},

            // Apps
//            {path: 'apps', children: [
//                {path: 'academy', loadChildren: () => import('app/modules/admin/apps/academy/academy.module').then(m => m.AcademyModule)},
//                {path: 'chat', loadChildren: () => import('app/modules/admin/apps/chat/chat.module').then(m => m.ChatModule)},
//                {path: 'contacts', loadChildren: () => import('app/modules/admin/apps/contacts/contacts.module').then(m => m.ContactsModule)},
//                {path: 'ecommerce', loadChildren: () => import('app/modules/admin/apps/ecommerce/ecommerce.module').then(m => m.ECommerceModule)},
//                {path: 'file-manager', loadChildren: () => import('app/modules/admin/apps/file-manager/file-manager.module').then(m => m.FileManagerModule)},
//                {path: 'help-center', loadChildren: () => import('app/modules/admin/apps/help-center/help-center.module').then(m => m.HelpCenterModule)},
//                {path: 'mailbox', loadChildren: () => import('app/modules/admin/apps/mailbox/mailbox.module').then(m => m.MailboxModule)},
//              {path: 'scrumboard', loadChildren: () => import('app/modules/admin/apps/scrumboard/scrumboard.module').then(m => m.ScrumboardModule)},
//                {path: 'tasks', loadChildren: () => import('app/modules/admin/apps/tasks/tasks.module').then(m => m.TasksModule)},
//            ]},

            // Pages
            {path: 'pages', children: [

                {path: 'activities', loadChildren: () => import('app/modules/admin/pages/activities/activities.module').then(m => m.ActivitiesModule)},
                {path: 'authentication', loadChildren: () => import('app/modules/admin/pages/authentication/authentication.module').then(m => m.AuthenticationModule)},
                {path: 'coming-soon', loadChildren: () => import('app/modules/admin/pages/coming-soon/coming-soon.module').then(m => m.ComingSoonModule)},
                {path: 'error', children: [
                    {path: '404', loadChildren: () => import('app/modules/admin/pages/error/error-404/error-404.module').then(m => m.Error404Module)},
                    {path: '500', loadChildren: () => import('app/modules/admin/pages/error/error-500/error-500.module').then(m => m.Error500Module)}
                ]},
                {path: 'invoice', children: [
                    {path: 'printable', children: [
                        {path: 'compact', loadChildren: () => import('app/modules/admin/pages/invoice/printable/compact/compact.module').then(m => m.CompactModule)},
                        {path: 'modern', loadChildren: () => import('app/modules/admin/pages/invoice/printable/modern/modern.module').then(m => m.ModernModule)}
                    ]}
                ]},
                {path: 'maintenance', loadChildren: () => import('app/modules/admin/pages/maintenance/maintenance.module').then(m => m.MaintenanceModule)},
                {path: 'pricing', children: [
                    {path: 'modern', loadChildren: () => import('app/modules/admin/pages/pricing/modern/modern.module').then(m => m.PricingModernModule)},
                    {path: 'simple', loadChildren: () => import('app/modules/admin/pages/pricing/simple/simple.module').then(m => m.PricingSimpleModule)},
                    {path: 'single', loadChildren: () => import('app/modules/admin/pages/pricing/single/single.module').then(m => m.PricingSingleModule)},
                    {path: 'table', loadChildren: () => import('app/modules/admin/pages/pricing/table/table.module').then(m => m.PricingTableModule)}
                ]},
                {path: 'profile', loadChildren: () => import('app/modules/admin/pages/profile/profile.module').then(m => m.ProfileModule)},
                {path: 'settings', loadChildren: () => import('app/modules/admin/pages/settings/settings.module').then(m => m.SettingsModule)},
            ]},

            // 
            {path: 'ui', children: [
                {path: 'material-components', loadChildren: () => import('app/modules/admin/ui/material-components/material-components.module').then(m => m.MaterialComponentsModule)},
                {path: 'fuse-components', loadChildren: () => import('app/modules/admin/ui/fuse-components/fuse-components.module').then(m => m.FuseComponentsModule)},
                {path: 'other-components', loadChildren: () => import('app/modules/admin/ui/other-components/other-components.module').then(m => m.OtherComponentsModule)},
                {path: 'tailwindcss', loadChildren: () => import('app/modules/admin/ui/tailwindcss/tailwindcss.module').then(m => m.TailwindCSSModule)},
                {path: 'advanced-search', loadChildren: () => import('app/modules/admin/ui/advanced-search/advanced-search.module').then(m => m.AdvancedSearchModule)},
                {path: 'animations', loadChildren: () => import('app/modules/admin/ui/animations/animations.module').then(m => m.AnimationsModule)},
                {path: 'cards', loadChildren: () => import('app/modules/admin/ui/cards/cards.module').then(m => m.CardsModule)},
                {path: 'colors', loadChildren: () => import('app/modules/admin/ui/colors/colors.module').then(m => m.ColorsModule)},
                {path: 'confirmation-dialog', loadChildren: () => import('app/modules/admin/ui/confirmation-dialog/confirmation-dialog.module').then(m => m.ConfirmationDialogModule)},
                {path: 'datatable', loadChildren: () => import('app/modules/admin/ui/datatable/datatable.module').then(m => m.DatatableModule)},
                {path: 'forms', children: [
                    {path: 'fields', loadChildren: () => import('app/modules/admin/ui/forms/fields/fields.module').then(m => m.FormsFieldsModule)},
                    {path: 'layouts', loadChildren: () => import('app/modules/admin/ui/forms/layouts/layouts.module').then(m => m.FormsLayoutsModule)},
                    {path: 'wizards', loadChildren: () => import('app/modules/admin/ui/forms/wizards/wizards.module').then(m => m.FormsWizardsModule)}
                ]},
                {path: 'icons', loadChildren: () => import('app/modules/admin/ui/icons/icons.module').then(m => m.IconsModule)},
                {path: 'page-layouts', loadChildren: () => import('app/modules/admin/ui/page-layouts/page-layouts.module').then(m => m.PageLayoutsModule)},
                {path: 'typography', loadChildren: () => import('app/modules/admin/ui/typography/typography.module').then(m => m.TypographyModule)}
            ]},
            {path: 'docs', children: [
                {path: 'changelog', loadChildren: () => import('app/modules/admin/docs/changelog/changelog.module').then(m => m.ChangelogModule)},
                {path: 'guides', loadChildren: () => import('app/modules/admin/docs/guides/guides.module').then(m => m.GuidesModule)}
            ]},

            {path: '404-not-found', pathMatch: 'full', loadChildren: () => import('app/modules/admin/pages/error/error-404/error-404.module').then(m => m.Error404Module)},
            {path: '**', redirectTo: '404-not-found'}
        ]
    }
];
