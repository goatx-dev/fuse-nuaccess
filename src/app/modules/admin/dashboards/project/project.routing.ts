import { Route } from '@angular/router';
import { ProjectComponent } from 'app/modules/admin/dashboards/project/project.component';
import { ProjectResolver } from 'app/modules/admin/dashboards/project/project.resolvers';
import { DataResolver, MenuResolver } from 'app/data.resolver';

export const projectRoutes: Route[] = [
    {
        path     : '',
        component: ProjectComponent,
        resolve: { data: DataResolver }
    },                                             
    {
        path     : ':id',
        component: ProjectComponent,
        resolve: { data: DataResolver }
    },
];
