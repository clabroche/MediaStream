webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/music/music.module": [
		"../../../../../src/app/music/music.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>\n<div class=\"appContainer\">\n    <sidebar></sidebar>\n    <router-outlet></router-outlet>\n    <sidePanel></sidePanel>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100vh; }\n  :host .appContainer {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n    height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var core_module_1 = __webpack_require__("../../../../../src/core/core.module.ts");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var music_module_1 = __webpack_require__("../../../../../src/app/music/music.module.ts");
var app_routing_module_1 = __webpack_require__("../../../../../src/routing/app-routing.module.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                core_module_1.CoreModule.forRoot(),
                app_routing_module_1.AppRoutingModule,
                music_module_1.MusicModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/music/music.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  music works! ldkededk\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/music/music.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/music/music.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var MusicComponent = /** @class */ (function () {
    function MusicComponent() {
    }
    MusicComponent.prototype.ngOnInit = function () {
    };
    MusicComponent = __decorate([
        core_1.Component({
            selector: 'app-music',
            template: __webpack_require__("../../../../../src/app/music/music.component.html"),
            styles: [__webpack_require__("../../../../../src/app/music/music.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MusicComponent);
    return MusicComponent;
}());
exports.MusicComponent = MusicComponent;


/***/ }),

/***/ "../../../../../src/app/music/music.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var music_component_1 = __webpack_require__("../../../../../src/app/music/music.component.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var routes = [];
var MusicModule = /** @class */ (function () {
    function MusicModule() {
    }
    MusicModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(routes)
            ],
            declarations: [music_component_1.MusicComponent]
        })
    ], MusicModule);
    return MusicModule;
}());
exports.MusicModule = MusicModule;


/***/ }),

/***/ "../../../../../src/app/routes.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var music_component_1 = __webpack_require__("../../../../../src/app/music/music.component.ts");
exports.profile = 'app/profilePage/profilePage.module#ProfilePageModule';
/**
 * Describe all routes of the home component (imported routing module)
 */
exports.HomeRoutes = [
    { path: "music", component: music_component_1.MusicComponent, data: { state: 'home' } },
    {
        path: "profile", component: music_component_1.MusicComponent,
        data: { state: 'profilePage' }, loadChildren: 'app/music/music.module#MusicModule'
    }
];


/***/ }),

/***/ "../../../../../src/assets/img/nav.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "nav.dee8d501ccdb8b1fb350.png";

/***/ }),

/***/ "../../../../../src/assets/img/side.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "side.c5fb33654b9a215d17e1.png";

/***/ }),

/***/ "../../../../../src/core/bootstrap/bootstrap.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var dropdown_1 = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
var tooltip_1 = __webpack_require__("../../../../ngx-bootstrap/tooltip/index.js");
var modal_1 = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
var tabs_1 = __webpack_require__("../../../../ngx-bootstrap/tabs/index.js");
var popover_1 = __webpack_require__("../../../../ngx-bootstrap/popover/index.js");
var BootstrapModule = /** @class */ (function () {
    function BootstrapModule() {
    }
    BootstrapModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                dropdown_1.BsDropdownModule.forRoot(),
                tooltip_1.TooltipModule.forRoot(),
                modal_1.ModalModule.forRoot(),
                tabs_1.TabsModule.forRoot(),
                popover_1.PopoverModule.forRoot()
            ],
            exports: [dropdown_1.BsDropdownModule, tooltip_1.TooltipModule, modal_1.ModalModule, tabs_1.TabsModule, popover_1.PopoverModule]
        })
    ], BootstrapModule);
    return BootstrapModule;
}());
exports.BootstrapModule = BootstrapModule;


/***/ }),

/***/ "../../../../../src/core/box/box.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"box\">\n    <div id=\"box-title\">\n        {{title}}\n    </div>\n    <div class=\"box-container\">\n        <ng-content></ng-content>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/core/box/box.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  width: 100%; }\n  :host #box {\n    width: 100%; }\n  :host #box .box-title {\n      font-size: 1.2rem; }\n  :host #box .box-container {\n      background-color: #fff;\n      -webkit-box-shadow: 1px 1px 9px 0px grey;\n              box-shadow: 1px 1px 9px 0px grey; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/core/box/box.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
/**
 * Display Box Container
 */
var BoxComponent = /** @class */ (function () {
    function BoxComponent() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], BoxComponent.prototype, "title", void 0);
    BoxComponent = __decorate([
        core_1.Component({
            selector: "box",
            template: __webpack_require__("../../../../../src/core/box/box.component.html"),
            styles: [__webpack_require__("../../../../../src/core/box/box.component.scss")]
        })
    ], BoxComponent);
    return BoxComponent;
}());
exports.BoxComponent = BoxComponent;


/***/ }),

/***/ "../../../../../src/core/core.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var bootstrap_module_1 = __webpack_require__("../../../../../src/core/bootstrap/bootstrap.module.ts");
var sidebar_component_1 = __webpack_require__("../../../../../src/core/sidebar/sidebar.component.ts");
var navbar_component_1 = __webpack_require__("../../../../../src/core/navbar/navbar.component.ts");
var tabs_panel_component_1 = __webpack_require__("../../../../../src/core/tabs-panel/tabs-panel.component.ts");
var form_errors_component_1 = __webpack_require__("../../../../../src/core/form-errors/form-errors.component.ts");
var form_group_component_1 = __webpack_require__("../../../../../src/core/form-group/form-group.component.ts");
var popover_component_1 = __webpack_require__("../../../../../src/core/popover/popover.component.ts");
var notifications_component_1 = __webpack_require__("../../../../../src/core/notifications/notifications.component.ts");
var side_panel_component_1 = __webpack_require__("../../../../../src/core/side-panel/side-panel.component.ts");
var box_component_1 = __webpack_require__("../../../../../src/core/box/box.component.ts");
var common_service_1 = __webpack_require__("../../../../../src/core/providers/common.service.ts");
var sidebar_service_1 = __webpack_require__("../../../../../src/core/providers/sidebar.service.ts");
var sidepanel_service_1 = __webpack_require__("../../../../../src/core/providers/sidepanel.service.ts");
var notifications_service_1 = __webpack_require__("../../../../../src/core/providers/notifications.service.ts");
var debounceInput_directive_1 = __webpack_require__("../../../../../src/core/directives/debounceInput.directive.ts");
var spinningIcon_directive_1 = __webpack_require__("../../../../../src/core/directives/spinningIcon.directive.ts");
var stopPropagation_directive_1 = __webpack_require__("../../../../../src/core/directives/stopPropagation.directive.ts");
var validators_directive_1 = __webpack_require__("../../../../../src/core/directives/validators.directive.ts");
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule_1 = CoreModule;
    CoreModule.forRoot = function () {
        return {
            ngModule: CoreModule_1,
            providers: [
                common_service_1.CommonService,
                sidebar_service_1.SideBarService,
                notifications_service_1.NotificationsService,
                sidepanel_service_1.SidePanelService
            ]
        };
    };
    CoreModule = CoreModule_1 = __decorate([
        core_1.NgModule({
            declarations: [
                sidebar_component_1.SidebarComponent,
                navbar_component_1.NavbarComponent,
                tabs_panel_component_1.TabsPanelComponent,
                form_errors_component_1.FormErrorsComponent,
                form_group_component_1.FormGroupComponent,
                box_component_1.BoxComponent,
                popover_component_1.PopoverComponent,
                side_panel_component_1.SidePanelComponent,
                // SourceVectorComponent,
                notifications_component_1.NotificationsComponent,
                debounceInput_directive_1.DebounceInputDirective,
                stopPropagation_directive_1.ClickStopPropagation,
                spinningIcon_directive_1.SpinningIconDirective,
                validators_directive_1.ValidatorsDirective,
            ],
            imports: [
                common_1.CommonModule,
                http_1.HttpClientModule,
                bootstrap_module_1.BootstrapModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                router_1.RouterModule
            ],
            exports: [
                // SourceVectorComponent,
                sidebar_component_1.SidebarComponent,
                navbar_component_1.NavbarComponent,
                tabs_panel_component_1.TabsPanelComponent,
                form_errors_component_1.FormErrorsComponent,
                form_group_component_1.FormGroupComponent,
                popover_component_1.PopoverComponent,
                side_panel_component_1.SidePanelComponent,
                notifications_component_1.NotificationsComponent,
                box_component_1.BoxComponent,
                bootstrap_module_1.BootstrapModule,
                forms_1.FormsModule,
                spinningIcon_directive_1.SpinningIconDirective,
                validators_directive_1.ValidatorsDirective,
                forms_1.ReactiveFormsModule,
            ]
        })
    ], CoreModule);
    return CoreModule;
    var CoreModule_1;
}());
exports.CoreModule = CoreModule;


/***/ }),

/***/ "../../../../../src/core/directives/debounceInput.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var Subject_1 = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var operators_1 = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/**
 * Directive that debounce an element that supports keyListener
 */
var DebounceInputDirective = /** @class */ (function () {
    function DebounceInputDirective() {
        /**
         * Describe the debounce time; Default: 500ms
         */
        this.debounceTime = 500;
        /**
         * Emit and call function after the debounce time
         */
        this.debounceClick = new core_1.EventEmitter();
        /**
         * Observable that register the flow
         */
        this.subject = new Subject_1.Subject();
    }
    /**
     * Register observable pipe that describe the flow of the debounce directive
     */
    DebounceInputDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.subject.pipe(operators_1.debounceTime(this.debounceTime)).subscribe(function (e) { return _this.debounceClick.emit(e); });
    };
    /**
     * Unregister observable on the component destruct
     */
    DebounceInputDirective.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    /**
     * Trigger keyup event and inject it to the pipe of the debounce
     * @param {Object} event
     */
    DebounceInputDirective.prototype.keyupEvent = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.subject.next(event);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DebounceInputDirective.prototype, "debounceTime", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DebounceInputDirective.prototype, "debounceClick", void 0);
    __decorate([
        core_1.HostListener('keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DebounceInputDirective.prototype, "keyupEvent", null);
    DebounceInputDirective = __decorate([
        core_1.Directive({
            selector: '[debounce-input]'
        })
    ], DebounceInputDirective);
    return DebounceInputDirective;
}());
exports.DebounceInputDirective = DebounceInputDirective;


/***/ }),

/***/ "../../../../../src/core/directives/spinningIcon.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
/**
 * spin an icon
 */
var SpinningIconDirective = /** @class */ (function () {
    /**
    * Load some dependencies
    * @param renderer
    * @param hostElement
    */
    function SpinningIconDirective(renderer, hostElement) {
        this.renderer = renderer;
        this.hostElement = hostElement;
    }
    SpinningIconDirective.prototype.start = function (event) {
        this.renderer.addClass(this.hostElement.nativeElement, 'spin-animation');
        this.renderer.addClass(this.hostElement.nativeElement, 'fa-spinner');
    };
    SpinningIconDirective.prototype.stop = function () {
        this.renderer.removeClass(this.hostElement.nativeElement, 'spin-animation');
        this.renderer.removeClass(this.hostElement.nativeElement, 'fa-spinner');
    };
    SpinningIconDirective = __decorate([
        core_1.Directive({
            selector: "[spinning-icon]",
            exportAs: 'spinning'
        }),
        __metadata("design:paramtypes", [core_1.Renderer2, core_1.ElementRef])
    ], SpinningIconDirective);
    return SpinningIconDirective;
}());
exports.SpinningIconDirective = SpinningIconDirective;


/***/ }),

/***/ "../../../../../src/core/directives/stopPropagation.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
/**
 * Prevent bubbling of events
 */
var ClickStopPropagation = /** @class */ (function () {
    function ClickStopPropagation() {
    }
    /**
     * Trigger click event to stop propagation
     * @param {Object} event
     */
    ClickStopPropagation.prototype.onClick = function (event) {
        event.stopPropagation();
    };
    __decorate([
        core_1.HostListener("click", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ClickStopPropagation.prototype, "onClick", null);
    ClickStopPropagation = __decorate([
        core_1.Directive({
            selector: "[click-stop-propagation]"
        })
    ], ClickStopPropagation);
    return ClickStopPropagation;
}());
exports.ClickStopPropagation = ClickStopPropagation;


/***/ }),

/***/ "../../../../../src/core/directives/validators.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
/**
 * Load differents directive with an array of key value
 */
var ValidatorsDirective = /** @class */ (function () {
    /**
     * Load some dependencies
     * @param renderer
     * @param hostElement
     */
    function ValidatorsDirective(renderer, hostElement) {
        this.renderer = renderer;
        this.hostElement = hostElement;
    }
    /**
     * Launch validator check for the first time init
     */
    ValidatorsDirective.prototype.ngAfterViewChecked = function () {
        this.onInputChange();
    };
    /**
     * Change appearance of input with goodInput/badInout class
     */
    ValidatorsDirective.prototype.onInputChange = function () {
        if (this.validators.valid) {
            this.renderer.addClass(this.hostElement.nativeElement, 'goodInput');
            this.renderer.removeClass(this.hostElement.nativeElement, 'badInput');
        }
        else {
            this.renderer.addClass(this.hostElement.nativeElement, 'badInput');
            this.renderer.removeClass(this.hostElement.nativeElement, 'goodInput');
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ValidatorsDirective.prototype, "validators", void 0);
    ValidatorsDirective = __decorate([
        core_1.Directive({
            selector: '[validators]',
            host: {
                "(input)": 'onInputChange($event)'
            }
        }),
        __metadata("design:paramtypes", [core_1.Renderer2, core_1.ElementRef])
    ], ValidatorsDirective);
    return ValidatorsDirective;
}());
exports.ValidatorsDirective = ValidatorsDirective;


/***/ }),

/***/ "../../../../../src/core/form-errors/form-errors.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- {{model.errors | json}} -->\n\n<ul *ngIf=\"model && model.errors\">\n    <li *ngIf=\"model.errors.pattern\" class=\"hint\">\n         <ng-container *ngIf=\"patternName; else notPatternName\">\n            {{patternName}}\n        </ng-container>\n        <ng-template #notPatternName>\n            Pattern: {{model.errors.pattern.requiredPattern}}\n        </ng-template>\n    </li>\n    <li *ngIf=\"model.errors.required\" class=\"hint\">\n        Obligatoire\n    </li>\n    <li *ngIf=\"model.errors.minlength\" class=\"hint\">\n        Contient au moins {{model.errors.minlength.requiredLength}} caractères\n    </li>\n    <li *ngIf=\"model.errors.recheckPassphrase\" class=\"hint\">\n        Doit correspondre à la phrase de passe\n    </li>\n    <li *ngIf=\"model.errors.email\" class=\"hint\">\n        Doit être un email\n    </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/core/form-errors/form-errors.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".formGroup {\n  margin-bottom: 10px; }\n  .formGroup label {\n    width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/core/form-errors/form-errors.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
/**
 * Encapsule an input and all validators attached
 */
var FormErrorsComponent = /** @class */ (function () {
    function FormErrorsComponent() {
    }
    __decorate([
        core_1.Input('model'),
        __metadata("design:type", Object)
    ], FormErrorsComponent.prototype, "model", void 0);
    __decorate([
        core_1.Input('patternName'),
        __metadata("design:type", String)
    ], FormErrorsComponent.prototype, "patternName", void 0);
    FormErrorsComponent = __decorate([
        core_1.Component({
            selector: "formErrors",
            template: __webpack_require__("../../../../../src/core/form-errors/form-errors.component.html"),
            styles: [__webpack_require__("../../../../../src/core/form-errors/form-errors.component.scss")]
        })
    ], FormErrorsComponent);
    return FormErrorsComponent;
}());
exports.FormErrorsComponent = FormErrorsComponent;


/***/ }),

/***/ "../../../../../src/core/form-group/form-group.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"formGroup\">\n    <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "../../../../../src/core/form-group/form-group.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".formGroup {\n  margin-bottom: 10px; }\n  .formGroup label {\n    width: 100%; }\n  #formGroup .label {\n  width: 100% !important; }\n  #formGroup ::ng-deep .formContainer {\n  margin-bottom: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/core/form-group/form-group.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
/**
 * Check if all input inside are valid to submit result
 */
var FormGroupComponent = /** @class */ (function () {
    function FormGroupComponent() {
        /**
         * Expose valid property if all inputs are valids
         */
        this.valid = true;
    }
    /**
     * On change of input property recheck inputs validity
     */
    FormGroupComponent.prototype.ngDoCheck = function () { this.isValid(); };
    /**
     * Check inputs validity on first time init
     */
    FormGroupComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.ngModels.map(function (model) {
            if (model.update) {
                model.update.subscribe(function (data) {
                    _this.isValid();
                });
            }
        });
        this.isValid();
    };
    /**
     * Check inputs validity;
     *
     * false: one inputs or more is/are invalid/s;
     *
     * true : all inputs are valids
     */
    FormGroupComponent.prototype.isValid = function () {
        var _this = this;
        setTimeout(function () {
            _this.valid = _this.ngModels.reduce(function (prev, curr) {
                if (!prev || !curr.valid)
                    return false;
                return true;
            }, true);
        }, 10);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], FormGroupComponent.prototype, "ngModels", void 0);
    FormGroupComponent = __decorate([
        core_1.Component({
            selector: "formGroup",
            template: __webpack_require__("../../../../../src/core/form-group/form-group.component.html"),
            styles: [__webpack_require__("../../../../../src/core/form-group/form-group.component.scss")]
        })
    ], FormGroupComponent);
    return FormGroupComponent;
}());
exports.FormGroupComponent = FormGroupComponent;


/***/ }),

/***/ "../../../../../src/core/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"navbar\">\n  <div id=\"leftRight\">\n    <div id=\"left\">\n      <div id=\"logoContainer\">\n        <div id=\"logo\">\n          <img src=\"assets/img/logo.png\" alt=\"\">\n        </div>\n      </div>\n      <div id=\"description\">\n        MediaStream\n      </div>\n    </div>\n\n    <div id=\"right\">\n      <div id=\"actions\">\n        <div class=\"icon\">\n        </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/core/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".formGroup {\n  margin-bottom: 10px; }\n  .formGroup label {\n    width: 100%; }\n  #navbar {\n  height: 40px;\n  background-color: #000000;\n  color: #ffffff;\n  max-height: 40px;\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/img/nav.png")) + ");\n  background-size: 100%; }\n  #navbar #leftRight {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    height: 100%; }\n  #navbar #leftRight #left {\n      height: 100%;\n      padding-left: 5px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n  #navbar #leftRight #left #logoContainer {\n        height: 80%; }\n  #navbar #leftRight #left #logoContainer #logo {\n          height: 100%;\n          border-radius: 100%;\n          overflow: hidden; }\n  #navbar #leftRight #left #logoContainer #logo img {\n            height: 100%; }\n  #navbar #leftRight #left #description {\n        margin-left: 10px;\n        color: white;\n        font-size: 1.2em; }\n  #navbar #leftRight #right {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      height: 100%;\n      margin-right: 10px; }\n  #navbar #leftRight #right #actions {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n  #navbar #leftRight #right .icon {\n        font-size: 1.7em; }\n  #navbar #userDropdown {\n    margin-left: 10px;\n    margin-right: 10px; }\n  #navbar #userDropdown .row .userInfo {\n      width: 200px; }\n  #navbar #userDropdown .row .avatar {\n      margin-left: 10px;\n      margin-right: 10px;\n      width: 100px; }\n  #navbar #userDropdown .row .avatar img {\n        width: 100%; }\n  #navbar #userDropdown .row#list ul {\n      width: 100%;\n      margin-top: 10px;\n      padding: 10px;\n      border-top: 1px solid #d2d2d2; }\n  #navbar #userDropdown .row#list ul li {\n        cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/core/navbar/navbar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
/**
 * Navbar Component
 */
var NavbarComponent = /** @class */ (function () {
    /**
     * Load dependencies instances
     * @param auth  AuthService to track authenticated user
     */
    function NavbarComponent(router) {
        this.router = router;
    }
    NavbarComponent = __decorate([
        core_1.Component({
            selector: "navbar",
            template: __webpack_require__("../../../../../src/core/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/core/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;


/***/ }),

/***/ "../../../../../src/core/notifications/notifications.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"notifications\">\n    <div id=\"closeAll\" *ngIf='_notifications.length' (click)=\"deleteAll()\">\n        <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n    </div>\n    <div class=\"notifsWrapper\">\n        <div class=\"notifWrapper\" (click)=\"ns.delete(notif.id)\" #notifModel *ngFor=\"let notif of _notifications\" [id]=\"notif.id\">\n            <div class=\"notifContainer\">\n                <div class=\"title\">\n                    {{notif.title}}\n                </div>\n                <div class=\"msg\">\n                    {{notif.msg}}\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/core/notifications/notifications.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".formGroup {\n  margin-bottom: 10px; }\n  .formGroup label {\n    width: 100%; }\n  @-webkit-keyframes openNotif {\n  0% {\n    max-height: 0; }\n  to {\n    max-height: 400px; } }\n  @keyframes openNotif {\n  0% {\n    max-height: 0; }\n  to {\n    max-height: 400px; } }\n  @-webkit-keyframes closeNotif {\n  0% {\n    max-height: 400px; }\n  to {\n    max-height: 0; } }\n  @keyframes closeNotif {\n  0% {\n    max-height: 400px; }\n  to {\n    max-height: 0; } }\n  #notifications {\n  z-index: 100000;\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end; }\n  #notifications #closeAll {\n    text-align: right; }\n  #notifications #closeAll i {\n      font-size: 1.7em;\n      background-color: #000000;\n      color: #ffffff;\n      padding: 10px;\n      -webkit-box-shadow: 0 0 10px grey;\n              box-shadow: 0 0 10px grey; }\n  #notifications .notifWrapper {\n    -webkit-animation-name: openNotif;\n            animation-name: openNotif;\n    -webkit-animation-duration: 400ms;\n            animation-duration: 400ms;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    overflow-y: hidden;\n    -webkit-box-shadow: 0 0 10px grey;\n            box-shadow: 0 0 10px grey;\n    margin-top: 10px;\n    background-color: #000000;\n    color: #ffffff; }\n  #notifications .notifWrapper.deleteNotif {\n      -webkit-animation-name: closeNotif;\n              animation-name: closeNotif;\n      -webkit-animation-duration: 400ms;\n              animation-duration: 400ms;\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards; }\n  #notifications .notifWrapper .notifContainer {\n      padding: 10px;\n      width: 400px; }\n  #notifications .notifWrapper .notifContainer .title {\n        width: 100%;\n        border-bottom: 1px solid #ffffff; }\n  #notifications .notifWrapper .notifContainer .msg {\n        width: 100%;\n        padding-top: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/core/notifications/notifications.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var notifications_service_1 = __webpack_require__("../../../../../src/core/providers/notifications.service.ts");
var bluebird = __webpack_require__("../../../../bluebird/js/browser/bluebird.js");
var common_service_1 = __webpack_require__("../../../../../src/core/providers/common.service.ts");
/**
 * Display an mini-popup
 */
var NotificationsComponent = /** @class */ (function () {
    /**
     * load dependencies instances
     * @param ns to track notifications outside component
     * @param renderer2
     * @param common
     */
    function NotificationsComponent(ns, renderer2, common) {
        var _this = this;
        this.ns = ns;
        this.renderer2 = renderer2;
        this.common = common;
        this._notifications = [];
        this.ns.addEvent.subscribe(function (data) { return _this._notifications.push(data); });
        this.ns.removeEvent.subscribe(function (id) { return _this.deleteNotif(id); });
    }
    /**
     * launch css animations and delete notification from id
     * @param id
     * @param html
     */
    NotificationsComponent.prototype.deleteNotif = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var htmlNotif;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getHtmlNotif(id)];
                    case 1:
                        htmlNotif = _a.sent();
                        if (!htmlNotif)
                            return [2 /*return*/];
                        this.renderer2.addClass(htmlNotif, "deleteNotif");
                        setTimeout(function () {
                            _this._notifications = _this._notifications.filter(function (notif) { return notif.id !== id; });
                            resolve();
                        }, 500);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    /**
     * delete All notifications
     */
    NotificationsComponent.prototype.deleteAll = function () {
        var _this = this;
        return bluebird.each(this.htmlNotifications, function (htmlNotif) {
            _this.deleteNotif(htmlNotif.nativeElement.id);
            return _this.common.wait(50);
        });
    };
    /**
     * Get HTML ref of the concern id
     */
    NotificationsComponent.prototype.getHtmlNotif = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var htmlNotif;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bluebird.filter(this.htmlNotifications, function (htmlNotif) { return htmlNotif.nativeElement.id === id; })];
                    case 1:
                        htmlNotif = _a.sent();
                        if (htmlNotif.length)
                            return [2 /*return*/, htmlNotif.pop().nativeElement];
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        core_1.ViewChildren('notifModel'),
        __metadata("design:type", Object)
    ], NotificationsComponent.prototype, "htmlNotifications", void 0);
    NotificationsComponent = __decorate([
        core_1.Component({
            selector: "notifications",
            template: __webpack_require__("../../../../../src/core/notifications/notifications.component.html"),
            styles: [__webpack_require__("../../../../../src/core/notifications/notifications.component.scss")]
        }),
        __metadata("design:paramtypes", [notifications_service_1.NotificationsService, core_1.Renderer2, common_service_1.CommonService])
    ], NotificationsComponent);
    return NotificationsComponent;
}());
exports.NotificationsComponent = NotificationsComponent;


/***/ }),

/***/ "../../../../../src/core/popover/popover.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"popover\" [popover]=\"popTemplate\" [isOpen]=\"_open\" [placement]='placement' triggers='focuson'>\n    <ng-template #popTemplate>\n        <ng-content select=\"[popover=content]\"></ng-content>\n    </ng-template>\n\n    <ng-content></ng-content>\n</div>"

/***/ }),

/***/ "../../../../../src/core/popover/popover.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host #popover {\n  display: inline-block;\n  width: 100%; }\n\n:host ::ng-deep ul {\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n\n:host ::ng-deep .popover-arrow::after {\n  top: -10px; }\n\n:host ::ng-deep .popover-arrow::before {\n  top: -10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/core/popover/popover.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
/**
 * Make a popoper around items
 */
var PopoverComponent = /** @class */ (function () {
    function PopoverComponent() {
        /**
         * Open or close popover;
         * Default: close
         */
        this.open = false;
        /**
         * Define the placment of popover
         */
        this.placement = 'right';
        /**
         * private boolean to watching open/close status
         */
        this._open = false;
    }
    /**
     * Track changes on input open to reflect status on private keys
     * @param changes
     */
    PopoverComponent.prototype.ngOnChanges = function (changes) {
        this._open = changes['open'].currentValue;
    };
    __decorate([
        core_1.Input('open'),
        __metadata("design:type", Object)
    ], PopoverComponent.prototype, "open", void 0);
    __decorate([
        core_1.Input('placement'),
        __metadata("design:type", Object)
    ], PopoverComponent.prototype, "placement", void 0);
    PopoverComponent = __decorate([
        core_1.Component({
            selector: "popover",
            template: __webpack_require__("../../../../../src/core/popover/popover.component.html"),
            styles: [__webpack_require__("../../../../../src/core/popover/popover.component.scss")]
        })
    ], PopoverComponent);
    return PopoverComponent;
}());
exports.PopoverComponent = PopoverComponent;


/***/ }),

/***/ "../../../../../src/core/providers/common.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var _ = __webpack_require__("../../../../lodash/lodash.js");
/**
 * Share variable and function commonly use in the app
 */
var CommonService = /** @class */ (function () {
    /**
     * Instanciate all members
     */
    function CommonService() {
        this.api = "http://localhost:3000";
        this.graphQL = this.api + '/graphql';
        this.refreshTokenInterval = 4000;
    }
    /**
     * Test equality objects
     * @param {Object} obj1 First object
     * @param {Object} obj2 Second object
     * @returns {boolean} true if there's differences
     */
    CommonService.prototype.equalityObjects = function (a, b) {
        var differences = this.differences(a, b);
        var d = differences.different.length + differences.missing_from_first.length + differences.missing_from_second.length;
        return d === 0 ? true : false;
    };
    /**
     * Load all
     * @param a
     * @param b
     * @returns {differences}
     */
    CommonService.prototype.differences = function (a, b) {
        var _this = this;
        var result = {
            different: [],
            missing_from_first: [],
            missing_from_second: []
        };
        _.reduce(a, function (result, value, key) {
            if (b.hasOwnProperty(key)) {
                if (_.isEqual(value, b[key]))
                    return result;
                else {
                    if (typeof (a[key]) != typeof ({}) || typeof (b[key]) != typeof ({})) {
                        result.different.push(key);
                        return result;
                    }
                    else {
                        var deeper = _this.differences(a[key], b[key]);
                        result.different = result.different.concat(_.map(deeper.different, function (sub_path) { return key + "." + sub_path; }));
                        result.missing_from_second = result.missing_from_second.concat(_.map(deeper.missing_from_second, function (sub_path) { return key + "." + sub_path; }));
                        result.missing_from_first = result.missing_from_first.concat(_.map(deeper.missing_from_first, function (sub_path) { return key + "." + sub_path; }));
                        return result;
                    }
                }
            }
            else {
                result.missing_from_second.push(key);
                return result;
            }
        }, result);
        _.reduce(b, function (result, value, key) {
            if (a.hasOwnProperty(key))
                return result;
            else {
                result.missing_from_first.push(key);
                return result;
            }
        }, result);
        return result;
    };
    /**
     * Wait function
     */
    CommonService.prototype.wait = function (ms) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve();
            }, ms);
        });
    };
    /**
     * Flat an object
     */
    CommonService.prototype.flatten = function (obj) {
        var newObj = {};
        function flat(obj) {
            Object.keys(obj).map(function (key) {
                if (typeof obj[key] === "object")
                    flat(obj[key]);
                else
                    newObj[key] = obj[key];
            });
        }
        flat(obj);
        return newObj;
    };
    /**
     * stringifyWithoutPropertiesQuote
     */
    CommonService.prototype.stringifyWithoutPropertiesQuote = function (obj) {
        return JSON.stringify(obj)
            .replace(/\\"/g, "\uFFFF")
            .replace(/\"([^"]+)\":/g, "$1:")
            .replace(/\uFFFF/g, "\\\"");
    };
    CommonService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], CommonService);
    return CommonService;
}());
exports.CommonService = CommonService;


/***/ }),

/***/ "../../../../../src/core/providers/notifications.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var uuid = __webpack_require__("../../../../uuid/v4.js");
var rxjs_1 = __webpack_require__("../../../../rxjs/Rx.js");
/**
 * Control the sidebar outside the component
 */
var NotificationsService = /** @class */ (function () {
    /**
     * Fetch delay from localStorage
     */
    function NotificationsService() {
        /**
         * Component watch this variable to open/close the sidebar
         */
        this.notifications = [];
        /**
         * Emit event that contains complete notification on add
         */
        this.addEvent = new rxjs_1.Subject();
        /**
         * Emit event that contains id on remove
         */
        this.removeEvent = new rxjs_1.Subject();
        var notificationsDelay = +localStorage.getItem('notificationsDelay');
        if (notificationsDelay < 500) {
            notificationsDelay = 6000;
            localStorage.setItem('notificationsDelay', '6000');
        }
    }
    /**
     * Open sidebar
     */
    NotificationsService.prototype.add = function (title, msg) {
        var _this = this;
        var notif = {
            id: uuid(),
            title: title || "",
            msg: msg || ""
        };
        this.addEvent.next(notif);
        this.notifications.push(notif);
        setTimeout(function () {
            _this.delete(notif.id);
        }, +localStorage.getItem('notificationsDelay'));
        return notif;
    };
    /**
     * delete a notification
     */
    NotificationsService.prototype.delete = function (id) {
        this.removeEvent.next(id);
        this.notifications = this.notifications.filter(function (notif) { return notif.id !== id; });
    };
    /**
     * Delete all notifications
     */
    NotificationsService.prototype.deleteAll = function () {
        var _this = this;
        this.notifications.map(function (notif) { return _this.delete(notif.id); });
    };
    NotificationsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], NotificationsService);
    return NotificationsService;
}());
exports.NotificationsService = NotificationsService;


/***/ }),

/***/ "../../../../../src/core/providers/sidebar.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
/**
 * Control the sidebar outside the component
 */
var SideBarService = /** @class */ (function () {
    function SideBarService() {
        /**
         * Component watch this variable to open/close the sidebar
         */
        this._open = false;
    }
    /**
     * Open sidebar
     */
    SideBarService.prototype.open = function () {
        this._open = true;
    };
    /**
     * Close sidebar
     */
    SideBarService.prototype.close = function () {
        this._open = false;
    };
    /**
     * Toggle sidebar
     */
    SideBarService.prototype.toggle = function () {
        this._open = !this._open;
    };
    SideBarService = __decorate([
        core_1.Injectable()
    ], SideBarService);
    return SideBarService;
}());
exports.SideBarService = SideBarService;


/***/ }),

/***/ "../../../../../src/core/providers/sidepanel.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
/**
 * Control the sidePanel outside the component
 */
var SidePanelService = /** @class */ (function () {
    function SidePanelService() {
        /**
         * Component watch this variable to open/close the sidePanel
         */
        this._open = false;
    }
    /**
     * Open sidePanel
     */
    SidePanelService.prototype.open = function (template, context) {
        if (template)
            this.template = template;
        if (context)
            this.context = context;
        this._open = true;
    };
    /**
     * Close sidePanel
     */
    SidePanelService.prototype.close = function () {
        this._open = false;
    };
    /**
     * Toggle sidePanel
     */
    SidePanelService.prototype.toggle = function () {
        this._open = !this._open;
    };
    SidePanelService = __decorate([
        core_1.Injectable()
    ], SidePanelService);
    return SidePanelService;
}());
exports.SidePanelService = SidePanelService;


/***/ }),

/***/ "../../../../../src/core/side-panel/side-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"sidePanelClose\" [ngClass]=\"{'openSidePanel':sidepanel._open, 'closeSidePanel':!sidepanel._open}\" (click)=\"sidepanel._open=false\">\n    <i class='fa fa-chevron-right'></i>\n    <div id=\"sidePanelContainer\" click-stop-propagation>\n        <ng-container *ngTemplateOutlet=\"sidepanel.template; context: sidepanel.context\"></ng-container>\n    </div>\n</div>\n "

/***/ }),

/***/ "../../../../../src/core/side-panel/side-panel.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".formGroup {\n  margin-bottom: 10px; }\n  .formGroup label {\n    width: 100%; }\n  @-webkit-keyframes openSidePanel {\n  0% {\n    max-width: 0;\n    padding-left: 0; }\n  100% {\n    padding-left: 10%;\n    max-width: 100vw; } }\n  @keyframes openSidePanel {\n  0% {\n    max-width: 0;\n    padding-left: 0; }\n  100% {\n    padding-left: 10%;\n    max-width: 100vw; } }\n  @-webkit-keyframes closeSidePanel {\n  0% {\n    padding-left: 10%;\n    max-width: 100vw; }\n  100% {\n    padding-left: 0;\n    max-width: 0; } }\n  @keyframes closeSidePanel {\n  0% {\n    padding-left: 10%;\n    max-width: 100vw; }\n  100% {\n    padding-left: 0;\n    max-width: 0; } }\n  :host {\n  height: 100%; }\n  :host #sidePanelClose {\n    position: absolute;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    right: 0;\n    width: 100vw;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.7);\n    max-width: 0;\n    overflow-x: hidden; }\n  :host #sidePanelClose i {\n      color: white;\n      height: 100%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      background-color: #343a40;\n      padding-left: 10px;\n      padding-right: 10px; }\n  :host #sidePanelClose ::ng-deep #sideHeader {\n      background-color: #343a40;\n      color: white;\n      text-align: center;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      padding: 10px; }\n  :host #sidePanelClose ::ng-deep #sideContainer {\n      padding: 20px; }\n  :host #sidePanelClose #sidePanelContainer {\n      background-color: #fff;\n      height: 100%; }\n  :host #sidePanelClose.closeSidePanel {\n      -webkit-animation-name: closeSidePanel;\n              animation-name: closeSidePanel;\n      -webkit-animation-duration: 0.2s;\n              animation-duration: 0.2s;\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards; }\n  :host #sidePanelClose.openSidePanel {\n      -webkit-animation-name: openSidePanel;\n              animation-name: openSidePanel;\n      -webkit-animation-duration: 0.2s;\n              animation-duration: 0.2s;\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/core/side-panel/side-panel.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var sidepanel_service_1 = __webpack_require__("../../../../../src/core/providers/sidepanel.service.ts");
/**
 * SidePanel Component
 */
var SidePanelComponent = /** @class */ (function () {
    /**
     * Load dependencies
     * @param {SidePanelService} sidepanel SidePanelService to track change outside the component
     */
    function SidePanelComponent(sidepanel) {
        this.sidepanel = sidepanel;
    }
    SidePanelComponent = __decorate([
        core_1.Component({
            selector: "sidePanel",
            template: __webpack_require__("../../../../../src/core/side-panel/side-panel.component.html"),
            styles: [__webpack_require__("../../../../../src/core/side-panel/side-panel.component.scss")]
        }),
        __metadata("design:paramtypes", [sidepanel_service_1.SidePanelService])
    ], SidePanelComponent);
    return SidePanelComponent;
}());
exports.SidePanelComponent = SidePanelComponent;


/***/ }),

/***/ "../../../../../src/core/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"openSidebar\" [ngClass]=\"{'openSidebar':sidebar._open, 'closeSidebar':!sidebar._open}\" id=\"sidebar\">\n\n    <div class=\"list\">\n        <div id=\"home\" class=\"item\" (click)=\"goToHome();\" routerLinkActive=\"active\" (mouseover)=\"toggleHint($event)\" (mouseleave)=\"toggleHint($event)\">\n            <div class=\"icon\">\n                <i class=\"fa fa-home\"></i>\n            </div>\n            <div class=\"description\" [ngClass]=\"{'openSidebar':sidebar._open, 'closeSidebar':!sidebar._open}\">\n                Accueil\n            </div>\n            <div id=\"hintHome\" class=\"hintContainer\" [ngClass]=\"hintClass\">\n                <div class=\"hint\">Accueil</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"bottomList\">\n        <div id=\"settings\" class=\"item\" (click)=\"goToSettings();\" routerLinkActive=\"active\" (mouseover)=\"toggleHint($event)\" (mouseleave)=\"toggleHint($event)\">\n            <div class=\"icon\">\n                <i class=\"fa fa-cog\"></i>\n            </div>\n            <div class=\"description\" [ngClass]=\"{'openSidebar':sidebar._open, 'closeSidebar':!sidebar._open}\">\n                Paramètres\n            </div>\n            <div id=\"hintSettings\" class=\"hintContainer\" [ngClass]=\"hintClass\">\n                <div class=\"hint\">Paramètres</div>\n            </div>\n        </div>\n        <div id=\"toggleSidebar\" class=\"item\" (click)=\"toggleSidebar();\" [ngClass]=\"{'openSidebar':sidebar._open, 'closeSidebar':!sidebar._open}\">\n            <div class=\"icon\" >\n                <i class=\"fa fa-arrow-right\"></i>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/core/sidebar/sidebar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".formGroup {\n  margin-bottom: 10px; }\n  .formGroup label {\n    width: 100%; }\n  @-webkit-keyframes openSidebar {\n  0% {\n    width: 40px; }\n  to {\n    width: 175px; } }\n  @keyframes openSidebar {\n  0% {\n    width: 40px; }\n  to {\n    width: 175px; } }\n  @-webkit-keyframes closeSidebar {\n  0% {\n    width: 175px; }\n  to {\n    width: 40px; } }\n  @keyframes closeSidebar {\n  0% {\n    width: 175px; }\n  to {\n    width: 40px; } }\n  @-webkit-keyframes openSidebarDescription {\n  0% {\n    width: 0; }\n  to {\n    width: 40px; } }\n  @keyframes openSidebarDescription {\n  0% {\n    width: 0; }\n  to {\n    width: 40px; } }\n  @-webkit-keyframes closeSidebarDescription {\n  0% {\n    width: 40px; }\n  to {\n    width: 0; } }\n  @keyframes closeSidebarDescription {\n  0% {\n    width: 40px; }\n  to {\n    width: 0; } }\n  @-webkit-keyframes openSidebarIcon {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  to {\n    -webkit-transform: scale(-1);\n            transform: scale(-1); } }\n  @keyframes openSidebarIcon {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  to {\n    -webkit-transform: scale(-1);\n            transform: scale(-1); } }\n  @-webkit-keyframes closeSidebarIcon {\n  0% {\n    -webkit-transform: scale(-1);\n            transform: scale(-1); }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n  @keyframes closeSidebarIcon {\n  0% {\n    -webkit-transform: scale(-1);\n            transform: scale(-1); }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n  @-webkit-keyframes openHint {\n  0% {\n    max-width: 0; }\n  to {\n    max-width: 200px; } }\n  @keyframes openHint {\n  0% {\n    max-width: 0; }\n  to {\n    max-width: 200px; } }\n  @-webkit-keyframes closeHint {\n  0% {\n    max-width: 200px; }\n  to {\n    max-width: 0; } }\n  @keyframes closeHint {\n  0% {\n    max-width: 200px; }\n  to {\n    max-width: 0; } }\n  #sidebar {\n  color: #ffffff;\n  height: 100%;\n  overflow-x: hidden;\n  width: 40px;\n  background-color: #000000;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background-size: auto 100%;\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/img/side.png")) + "); }\n  #sidebar.openSidebar {\n    -webkit-animation-name: openSidebar;\n            animation-name: openSidebar;\n    -webkit-animation-duration: 0.2s;\n            animation-duration: 0.2s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards; }\n  #sidebar.closeSidebar {\n    -webkit-animation-name: closeSidebar;\n            animation-name: closeSidebar;\n    -webkit-animation-duration: 0.2s;\n            animation-duration: 0.2s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards; }\n  #sidebar .list, #sidebar .bottomList {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    width: 100%; }\n  #sidebar .list.list, #sidebar .bottomList.list {\n      height: 100%; }\n  #sidebar .list .item, #sidebar .bottomList .item {\n      -webkit-box-shadow: none;\n              box-shadow: none;\n      -webkit-box-pack: left;\n          -ms-flex-pack: left;\n              justify-content: left;\n      margin: 0;\n      border: none;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      cursor: pointer;\n      padding-bottom: 15px;\n      padding-top: 15px; }\n  #sidebar .list .item:hover, #sidebar .bottomList .item:hover {\n        background-color: rgba(0, 0, 0, 0.5); }\n  #sidebar .list .item .hintContainer, #sidebar .bottomList .item .hintContainer {\n        position: absolute;\n        overflow: hidden;\n        left: 40px;\n        max-width: 0;\n        background-color: black; }\n  #sidebar .list .item .hintContainer.openHint, #sidebar .bottomList .item .hintContainer.openHint {\n          -webkit-animation-name: openHint;\n                  animation-name: openHint;\n          -webkit-animation-duration: 0.2s;\n                  animation-duration: 0.2s;\n          -webkit-animation-fill-mode: forwards;\n                  animation-fill-mode: forwards; }\n  #sidebar .list .item .hintContainer.closeHint, #sidebar .bottomList .item .hintContainer.closeHint {\n          -webkit-animation-name: closeHint;\n                  animation-name: closeHint;\n          -webkit-animation-duration: 0.2s;\n                  animation-duration: 0.2s;\n          -webkit-animation-fill-mode: forwards;\n                  animation-fill-mode: forwards; }\n  #sidebar .list .item .hintContainer .hint, #sidebar .bottomList .item .hintContainer .hint {\n          color: white;\n          padding: 10px; }\n  #sidebar .list .item .icon, #sidebar .bottomList .item .icon {\n        width: 40px;\n        text-align: center;\n        font-size: 1.5em; }\n  #sidebar .list .item .description.openSidebar, #sidebar .bottomList .item .description.openSidebar {\n        -webkit-animation-name: openSidebarDescription;\n                animation-name: openSidebarDescription;\n        -webkit-animation-duration: 0.2s;\n                animation-duration: 0.2s;\n        -webkit-animation-fill-mode: forwards;\n                animation-fill-mode: forwards; }\n  #sidebar .list .item .description.closeSidebar, #sidebar .bottomList .item .description.closeSidebar {\n        -webkit-animation-name: closeSidebarDescription;\n                animation-name: closeSidebarDescription;\n        -webkit-animation-duration: 0.2s;\n                animation-duration: 0.2s;\n        -webkit-animation-fill-mode: forwards;\n                animation-fill-mode: forwards; }\n  #sidebar .list #toggleSidebar, #sidebar .bottomList #toggleSidebar {\n      background-color: rgba(0, 0, 0, 0.5); }\n  #sidebar .list #toggleSidebar .icon, #sidebar .bottomList #toggleSidebar .icon {\n        font-size: 1em; }\n  #sidebar .list #toggleSidebar.openSidebar, #sidebar .bottomList #toggleSidebar.openSidebar {\n        -webkit-animation-name: openSidebarIcon;\n                animation-name: openSidebarIcon;\n        -webkit-animation-duration: 0.2s;\n                animation-duration: 0.2s;\n        -webkit-animation-fill-mode: forwards;\n                animation-fill-mode: forwards; }\n  #sidebar .list #toggleSidebar.closeSidebar, #sidebar .bottomList #toggleSidebar.closeSidebar {\n        -webkit-animation-name: closeSidebarIcon;\n                animation-name: closeSidebarIcon;\n        -webkit-animation-duration: 0.2s;\n                animation-duration: 0.2s;\n        -webkit-animation-fill-mode: forwards;\n                animation-fill-mode: forwards; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/core/sidebar/sidebar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var sidebar_service_1 = __webpack_require__("../../../../../src/core/providers/sidebar.service.ts");
/**
 * Display Sidebar on the app component
 */
var SidebarComponent = /** @class */ (function () {
    /**
     * import dependencies
     * @param {Router} router allow to navigate between routes
     * @param {SideBarService} sidebar control sidebar from her service
     */
    function SidebarComponent(router, sidebar) {
        this.router = router;
        this.sidebar = sidebar;
        /**
         * control css class that open/close sidebar: openHint/closeHint
         */
        this.hintClass = '';
    }
    /**
     * Go to Home route
     */
    SidebarComponent.prototype.goToHome = function () { this.router.navigate(["/home"]); };
    /**
     * Go to Settings route
     */
    SidebarComponent.prototype.goToSettings = function () { this.router.navigate(["/settings"]); };
    /**
     * Toggle sidebar
     */
    SidebarComponent.prototype.toggleSidebar = function () { this.sidebar.toggle(); };
    /**
     * Toggle hint beside links icons on hover
     * @param  {Object} event event from dom element
     */
    SidebarComponent.prototype.toggleHint = function ($event) { this.hintClass = $event.type == 'mouseover' && !this.sidebar._open ? 'openHint' : 'closeHint'; };
    SidebarComponent = __decorate([
        core_1.Component({
            selector: "sidebar",
            template: __webpack_require__("../../../../../src/core/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/core/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            sidebar_service_1.SideBarService])
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;


/***/ }),

/***/ "../../../../../src/core/tabs-panel/tabs-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"tabsPanel\">\n    <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "../../../../../src/core/tabs-panel/tabs-panel.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host #tabsPanel {\n  height: 100%; }\n\n:host ::ng-deep .nav-tabs {\n  background-color: #f7f7f7; }\n\n:host ::ng-deep .nav-tabs a {\n    color: #495057;\n    padding-bottom: 0px; }\n\n:host ::ng-deep .tab-container {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n:host ::ng-deep .tab-container .tab-content {\n    height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/core/tabs-panel/tabs-panel.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
/**
 * Organize sections with tabs
 */
var TabsPanelComponent = /** @class */ (function () {
    function TabsPanelComponent() {
    }
    TabsPanelComponent = __decorate([
        core_1.Component({
            selector: "tabsPanel",
            template: __webpack_require__("../../../../../src/core/tabs-panel/tabs-panel.component.html"),
            styles: [__webpack_require__("../../../../../src/core/tabs-panel/tabs-panel.component.scss")]
        })
    ], TabsPanelComponent);
    return TabsPanelComponent;
}());
exports.TabsPanelComponent = TabsPanelComponent;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../../src/routing/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var routes_1 = __webpack_require__("../../../../../src/app/routes.ts");
/**
 * All routes of the application
 */
var APP_ROUTES = [
    { path: "", redirectTo: "music", pathMatch: "full" }
].concat(routes_1.HomeRoutes, [
    { path: "**", redirectTo: "home", pathMatch: "full" }
]);
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(APP_ROUTES)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map