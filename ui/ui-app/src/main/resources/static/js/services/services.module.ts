import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {UpgradeModule} from "@angular/upgrade/static";

import {addButtonServiceProvider, broadcastServiceProvider, notificationServiceProvider, 
        paginationServiceProvider, tableOptionsServiceProvider, accessControlServiceProvider,
        stateServiceProvider,
        commonRestURLServiceProvider,
        userGroupServiceProvider} from "./angular2";

@NgModule({
    imports: [
        CommonModule,
        UpgradeModule
    ],
    providers: [
        addButtonServiceProvider,
        broadcastServiceProvider,
        notificationServiceProvider,
        paginationServiceProvider,
        tableOptionsServiceProvider,
        accessControlServiceProvider,
        stateServiceProvider,
        commonRestURLServiceProvider,
        userGroupServiceProvider
    ]
})
export class KyloServicesModule {

}