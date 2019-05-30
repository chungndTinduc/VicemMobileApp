(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/global.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/global.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "html.ios {\n    --ion-default-font: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Roboto\", sans-serif;\n}\n\nhtml.md {\n    --ion-default-font: \"Roboto\", \"Helvetica Neue\", sans-serif;\n}\n\nhtml {\n    --ion-font-family: var(--ion-default-font);\n}\n\nbody {\n    background: var(--ion-background-color);\n}\n\nbody.backdrop-no-scroll {\n        overflow: hidden;\n    }\n\n.ion-color-primary {\n    --ion-color-base: #A67E51 !important;\n    --ion-color-base-rgb: var(--ion-color-primary-rgb, 56,128,255) !important;\n    --ion-color-contrast: var(--ion-color-primary-contrast, #fff) !important;\n    --ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255,255,255) !important;\n    --ion-color-shade: var(--ion-color-primary-shade, #3171e0) !important;\n    --ion-color-tint: var(--ion-color-primary-tint, #4c8dff) !important;\n}\n\n.ion-color-secondary {\n    --ion-color-base: var(--ion-color-secondary, #0cd1e8) !important;\n    --ion-color-base-rgb: var(--ion-color-secondary-rgb, 12,209,232) !important;\n    --ion-color-contrast: var(--ion-color-secondary-contrast, #fff) !important;\n    --ion-color-contrast-rgb: var(--ion-color-secondary-contrast-rgb, 255,255,255) !important;\n    --ion-color-shade: var(--ion-color-secondary-shade, #0bb8cc) !important;\n    --ion-color-tint: var(--ion-color-secondary-tint, #24d6ea) !important;\n}\n\n.ion-color-tertiary {\n    --ion-color-base: var(--ion-color-tertiary, #7044ff) !important;\n    --ion-color-base-rgb: var(--ion-color-tertiary-rgb, 112,68,255) !important;\n    --ion-color-contrast: var(--ion-color-tertiary-contrast, #fff) !important;\n    --ion-color-contrast-rgb: var(--ion-color-tertiary-contrast-rgb, 255,255,255) !important;\n    --ion-color-shade: var(--ion-color-tertiary-shade, #633ce0) !important;\n    --ion-color-tint: var(--ion-color-tertiary-tint, #7e57ff) !important;\n}\n\n.ion-color-success {\n    --ion-color-base: var(--ion-color-success, #10dc60) !important;\n    --ion-color-base-rgb: var(--ion-color-success-rgb, 16,220,96) !important;\n    --ion-color-contrast: var(--ion-color-success-contrast, #fff) !important;\n    --ion-color-contrast-rgb: var(--ion-color-success-contrast-rgb, 255,255,255) !important;\n    --ion-color-shade: var(--ion-color-success-shade, #0ec254) !important;\n    --ion-color-tint: var(--ion-color-success-tint, #28e070) !important;\n}\n\n.ion-color-warning {\n    --ion-color-base: var(--ion-color-warning, #ffce00) !important;\n    --ion-color-base-rgb: var(--ion-color-warning-rgb, 255,206,0) !important;\n    --ion-color-contrast: var(--ion-color-warning-contrast, #fff) !important;\n    --ion-color-contrast-rgb: var(--ion-color-warning-contrast-rgb, 255,255,255) !important;\n    --ion-color-shade: var(--ion-color-warning-shade, #e0b500) !important;\n    --ion-color-tint: var(--ion-color-warning-tint, #ffd31a) !important;\n}\n\n.ion-color-danger {\n    --ion-color-base: var(--ion-color-danger, #f04141) !important;\n    --ion-color-base-rgb: var(--ion-color-danger-rgb, 240,65,65) !important;\n    --ion-color-contrast: var(--ion-color-danger-contrast, #fff) !important;\n    --ion-color-contrast-rgb: var(--ion-color-danger-contrast-rgb, 255,255,255) !important;\n    --ion-color-shade: var(--ion-color-danger-shade, #d33939) !important;\n    --ion-color-tint: var(--ion-color-danger-tint, #f25454) !important;\n}\n\n.ion-color-light {\n    --ion-color-base: var(--ion-color-light, #f4f5f8) !important;\n    --ion-color-base-rgb: var(--ion-color-light-rgb, 244,245,248) !important;\n    --ion-color-contrast: var(--ion-color-light-contrast, #000) !important;\n    --ion-color-contrast-rgb: var(--ion-color-light-contrast-rgb, 0,0,0) !important;\n    --ion-color-shade: var(--ion-color-light-shade, #d7d8da) !important;\n    --ion-color-tint: var(--ion-color-light-tint, #f5f6f9) !important;\n}\n\n.ion-color-medium {\n    --ion-color-base: var(--ion-color-medium, #989aa2) !important;\n    --ion-color-base-rgb: var(--ion-color-medium-rgb, 152,154,162) !important;\n    --ion-color-contrast: var(--ion-color-medium-contrast, #fff) !important;\n    --ion-color-contrast-rgb: var(--ion-color-medium-contrast-rgb, 255,255,255) !important;\n    --ion-color-shade: var(--ion-color-medium-shade, #86888f) !important;\n    --ion-color-tint: var(--ion-color-medium-tint, #a2a4ab) !important;\n}\n\n.ion-color-dark {\n    --ion-color-base: var(--ion-color-dark, #222428) !important;\n    --ion-color-base-rgb: var(--ion-color-dark-rgb, 34,36,40) !important;\n    --ion-color-contrast: var(--ion-color-dark-contrast, #fff) !important;\n    --ion-color-contrast-rgb: var(--ion-color-dark-contrast-rgb, 255,255,255) !important;\n    --ion-color-shade: var(--ion-color-dark-shade, #1e2023) !important;\n    --ion-color-tint: var(--ion-color-dark-tint, #383a3e) !important;\n}\n\n.ion-page {\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    display: flex;\n    position: absolute;\n    flex-direction: column;\n    justify-content: space-between;\n    contain: layout size style;\n    overflow: hidden;\n    z-index: 0;\n}\n\nion-route, ion-route-redirect, ion-router, ion-select-option, ion-nav-controller, ion-menu-controller, ion-action-sheet-controller, ion-alert-controller, ion-loading-controller, ion-modal-controller, ion-picker-controller, ion-popover-controller, ion-toast-controller, .ion-page-hidden, [hidden] {\n    display: none !important;\n}\n\n.ion-page-invisible {\n    opacity: 0;\n}\n\nhtml.plt-ios.plt-hybrid, html.plt-ios.plt-pwa {\n    --ion-statusbar-padding: 20px;\n}\n\n@supports (padding-top: 20px) {\n    html {\n        --ion-safe-area-top: var(--ion-statusbar-padding);\n    }\n}\n\n@supports (padding-top: constant(safe-area-inset-top)) {\n    html {\n        --ion-safe-area-top: constant(safe-area-inset-top);\n        --ion-safe-area-bottom: constant(safe-area-inset-bottom);\n        --ion-safe-area-left: constant(safe-area-inset-left);\n        --ion-safe-area-right: constant(safe-area-inset-right);\n    }\n}\n\n@supports (padding-top: env(safe-area-inset-top)) {\n    html {\n        --ion-safe-area-top: env(safe-area-inset-top);\n        --ion-safe-area-bottom: env(safe-area-inset-bottom);\n        --ion-safe-area-left: env(safe-area-inset-left);\n        --ion-safe-area-right: env(safe-area-inset-right);\n    }\n}\n\naudio,canvas,progress,video{vertical-align:baseline}\n\naudio:not([controls]){display:none;height:0}\n\nb,strong{font-weight:bold}\n\nimg{max-width:100%;border:0}\n\nsvg:not(:root){overflow:hidden}\n\nfigure{margin:1em 40px}\n\nhr{height:1px;border-width:0;box-sizing:content-box}\n\npre{overflow:auto}\n\ncode,kbd,pre,samp{font-family:monospace, monospace;font-size:1em}\n\nlabel,input,select,textarea{font-family:inherit;line-height:normal}\n\ntextarea{overflow:auto;height:auto;font:inherit;color:inherit}\n\ntextarea::-webkit-input-placeholder{padding-left:2px}\n\ntextarea::-moz-placeholder{padding-left:2px}\n\ntextarea:-ms-input-placeholder{padding-left:2px}\n\ntextarea::-ms-input-placeholder{padding-left:2px}\n\ntextarea::placeholder{padding-left:2px}\n\nform,input,optgroup,select{margin:0;font:inherit;color:inherit}\n\nhtml input[type=\"button\"],input[type=\"reset\"],input[type=\"submit\"]{cursor:pointer;-webkit-appearance:button}\n\na,a div,a span,a ion-icon,a ion-label,button,button div,button span,button ion-icon,button ion-label,.ion-tappable,[tappable],[tappable] div,[tappable] span,[tappable] ion-icon,[tappable] ion-label,input,textarea{touch-action:manipulation}\n\na ion-label,button ion-label{pointer-events:none}\n\nbutton{border:0;border-radius:0;font-family:inherit;font-style:inherit;font-variant:inherit;line-height:1;text-transform:none;cursor:pointer;-webkit-appearance:button}\n\n[tappable]{cursor:pointer}\n\na[disabled],button[disabled],html input[disabled]{cursor:default}\n\nbutton::-moz-focus-inner,input::-moz-focus-inner{padding:0;border:0}\n\ninput[type=\"checkbox\"],input[type=\"radio\"]{padding:0;box-sizing:border-box}\n\ninput[type=\"number\"]::-webkit-inner-spin-button,input[type=\"number\"]::-webkit-outer-spin-button{height:auto}\n\ninput[type=\"search\"]::-webkit-search-cancel-button,input[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}\n\ntable{border-collapse:collapse;border-spacing:0}\n\ntd,th{padding:0}\n\n*{box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none}\n\nhtml{width:100%;height:100%;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%}\n\nhtml.plt-pwa{height:100vh}\n\nbody{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;position:fixed;width:100%;max-width:100%;height:100%;max-height:100%;text-rendering:optimizeLegibility;overflow:hidden;touch-action:manipulation;-webkit-user-drag:none;-ms-content-zooming:none;word-wrap:break-word;overscroll-behavior-y:none;-webkit-text-size-adjust:none;-moz-text-size-adjust:none;-ms-text-size-adjust:none;text-size-adjust:none}\n\nhtml{font-family:var(--ion-font-family)}\n\na{background-color:transparent;color:var(--ion-color-primary, #3880ff)}\n\nh1,h2,h3,h4,h5,h6{margin-top:16px;margin-bottom:10px;font-weight:500;line-height:1.2}\n\nh1{margin-top:20px;font-size:26px}\n\nh2{margin-top:18px;font-size:24px}\n\nh3{font-size:22px}\n\nh4{font-size:20px}\n\nh5{font-size:18px}\n\nh6{font-size:16px}\n\nsmall{font-size:75%}\n\nsub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}\n\nsup{top:-.5em}\n\nsub{bottom:-.25em}\n\n.ion-hide{display:none !important}\n\n.ion-hide-up{display:none !important}\n\n@media (max-width: 575px){.ion-hide-down{display:none !important}}\n\n@media (min-width: 576px){.ion-hide-sm-up{display:none !important}}\n\n@media (max-width: 767px){.ion-hide-sm-down{display:none !important}}\n\n@media (min-width: 768px){.ion-hide-md-up{display:none !important}}\n\n@media (max-width: 991px){.ion-hide-md-down{display:none !important}}\n\n@media (min-width: 992px){.ion-hide-lg-up{display:none !important}}\n\n@media (max-width: 1199px){.ion-hide-lg-down{display:none !important}}\n\n@media (min-width: 1200px){.ion-hide-xl-up{display:none !important}}\n\n.ion-hide-xl-down{display:none !important}\n\n.ion-no-padding,[no-padding]{--padding-start: 0;--padding-end: 0;--padding-top: 0;--padding-bottom: 0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}\n\n.ion-padding,[padding]{--padding-start: var(--ion-padding, 16px);--padding-end: var(--ion-padding, 16px);--padding-top: var(--ion-padding, 16px);--padding-bottom: var(--ion-padding, 16px);padding-left:var(--ion-padding, 16px);padding-right:var(--ion-padding, 16px);padding-top:var(--ion-padding, 16px);padding-bottom:var(--ion-padding, 16px)}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.ion-padding,[padding]{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-padding, 16px);padding-inline-start:var(--ion-padding, 16px);-webkit-padding-end:var(--ion-padding, 16px);padding-inline-end:var(--ion-padding, 16px)}}\n\n.ion-padding-top,[padding-top]{--padding-top: var(--ion-padding, 16px);padding-top:var(--ion-padding, 16px)}\n\n.ion-padding-start,[padding-start]{--padding-start: var(--ion-padding, 16px);padding-left:var(--ion-padding, 16px)}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.ion-padding-start,[padding-start]{padding-left:unset;-webkit-padding-start:var(--ion-padding, 16px);padding-inline-start:var(--ion-padding, 16px)}}\n\n.ion-padding-end,[padding-end]{--padding-end: var(--ion-padding, 16px);padding-right:var(--ion-padding, 16px)}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.ion-padding-end,[padding-end]{padding-right:unset;-webkit-padding-end:var(--ion-padding, 16px);padding-inline-end:var(--ion-padding, 16px)}}\n\n.ion-padding-bottom,[padding-bottom]{--padding-bottom: var(--ion-padding, 16px);padding-bottom:var(--ion-padding, 16px)}\n\n.ion-padding-vertical,[padding-vertical]{--padding-top: var(--ion-padding, 16px);--padding-bottom: var(--ion-padding, 16px);padding-top:var(--ion-padding, 16px);padding-bottom:var(--ion-padding, 16px)}\n\n.ion-padding-horizontal,[padding-horizontal]{--padding-start: var(--ion-padding, 16px);--padding-end: var(--ion-padding, 16px);padding-left:var(--ion-padding, 16px);padding-right:var(--ion-padding, 16px)}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.ion-padding-horizontal,[padding-horizontal]{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-padding, 16px);padding-inline-start:var(--ion-padding, 16px);-webkit-padding-end:var(--ion-padding, 16px);padding-inline-end:var(--ion-padding, 16px)}}\n\n.ion-no-margin,[no-margin]{--margin-start: 0;--margin-end: 0;--margin-top: 0;--margin-bottom: 0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}\n\n.ion-margin,[margin]{--margin-start: var(--ion-margin, 16px);--margin-end: var(--ion-margin, 16px);--margin-top: var(--ion-margin, 16px);--margin-bottom: var(--ion-margin, 16px);margin-left:var(--ion-margin, 16px);margin-right:var(--ion-margin, 16px);margin-top:var(--ion-margin, 16px);margin-bottom:var(--ion-margin, 16px)}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.ion-margin,[margin]{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--ion-margin, 16px);margin-inline-start:var(--ion-margin, 16px);-webkit-margin-end:var(--ion-margin, 16px);margin-inline-end:var(--ion-margin, 16px)}}\n\n.ion-margin-top,[margin-top]{--margin-top: var(--ion-margin, 16px);margin-top:var(--ion-margin, 16px)}\n\n.ion-margin-start,[margin-start]{--margin-start: var(--ion-margin, 16px);margin-left:var(--ion-margin, 16px)}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.ion-margin-start,[margin-start]{margin-left:unset;-webkit-margin-start:var(--ion-margin, 16px);margin-inline-start:var(--ion-margin, 16px)}}\n\n.ion-margin-end,[margin-end]{--margin-end: var(--ion-margin, 16px);margin-right:var(--ion-margin, 16px)}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.ion-margin-end,[margin-end]{margin-right:unset;-webkit-margin-end:var(--ion-margin, 16px);margin-inline-end:var(--ion-margin, 16px)}}\n\n.ion-margin-bottom,[margin-bottom]{--margin-bottom: var(--ion-margin, 16px);margin-bottom:var(--ion-margin, 16px)}\n\n.ion-margin-vertical,[margin-vertical]{--margin-top: var(--ion-margin, 16px);--margin-bottom: var(--ion-margin, 16px);margin-top:var(--ion-margin, 16px);margin-bottom:var(--ion-margin, 16px)}\n\n.ion-margin-horizontal,[margin-horizontal]{--margin-start: var(--ion-margin, 16px);--margin-end: var(--ion-margin, 16px);margin-left:var(--ion-margin, 16px);margin-right:var(--ion-margin, 16px)}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.ion-margin-horizontal,[margin-horizontal]{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--ion-margin, 16px);margin-inline-start:var(--ion-margin, 16px);-webkit-margin-end:var(--ion-margin, 16px);margin-inline-end:var(--ion-margin, 16px)}}\n\n.ion-float-left,[float-left]{float:left !important}\n\n.ion-float-right,[float-right]{float:right !important}\n\n.ion-float-start,[float-start]{float:left !important}\n\n:host-context([dir=rtl]) .ion-float-start,:host-context([dir=rtl]) [float-start]{float:right !important}\n\n.ion-float-end,[float-end]{float:right !important}\n\n:host-context([dir=rtl]) .ion-float-end,:host-context([dir=rtl]) [float-end]{float:left !important}\n\n@media (min-width: 576px){.ion-float-sm-left,[float-sm-left]{float:left !important}.ion-float-sm-right,[float-sm-right]{float:right !important}.ion-float-sm-start,[float-sm-start]{float:left !important}:host-context([dir=rtl]) .ion-float-sm-start,:host-context([dir=rtl]) [float-sm-start]{float:right !important}.ion-float-sm-end,[float-sm-end]{float:right !important}:host-context([dir=rtl]) .ion-float-sm-end,:host-context([dir=rtl]) [float-sm-end]{float:left !important}}\n\n@media (min-width: 768px){.ion-float-md-left,[float-md-left]{float:left !important}.ion-float-md-right,[float-md-right]{float:right !important}.ion-float-md-start,[float-md-start]{float:left !important}:host-context([dir=rtl]) .ion-float-md-start,:host-context([dir=rtl]) [float-md-start]{float:right !important}.ion-float-md-end,[float-md-end]{float:right !important}:host-context([dir=rtl]) .ion-float-md-end,:host-context([dir=rtl]) [float-md-end]{float:left !important}}\n\n@media (min-width: 992px){.ion-float-lg-left,[float-lg-left]{float:left !important}.ion-float-lg-right,[float-lg-right]{float:right !important}.ion-float-lg-start,[float-lg-start]{float:left !important}:host-context([dir=rtl]) .ion-float-lg-start,:host-context([dir=rtl]) [float-lg-start]{float:right !important}.ion-float-lg-end,[float-lg-end]{float:right !important}:host-context([dir=rtl]) .ion-float-lg-end,:host-context([dir=rtl]) [float-lg-end]{float:left !important}}\n\n@media (min-width: 1200px){.ion-float-xl-left,[float-xl-left]{float:left !important}.ion-float-xl-right,[float-xl-right]{float:right !important}.ion-float-xl-start,[float-xl-start]{float:left !important}:host-context([dir=rtl]) .ion-float-xl-start,:host-context([dir=rtl]) [float-xl-start]{float:right !important}.ion-float-xl-end,[float-xl-end]{float:right !important}:host-context([dir=rtl]) .ion-float-xl-end,:host-context([dir=rtl]) [float-xl-end]{float:left !important}}\n\n.ion-text-center,[text-center]{text-align:center !important}\n\n.ion-text-justify,[text-justify]{text-align:justify !important}\n\n.ion-text-start,[text-start]{text-align:start !important}\n\n.ion-text-end,[text-end]{text-align:end !important}\n\n.ion-text-left,[text-left]{text-align:left !important}\n\n.ion-text-right,[text-right]{text-align:right !important}\n\n.ion-text-nowrap,[text-nowrap]{white-space:nowrap !important}\n\n.ion-text-wrap,[text-wrap]{white-space:normal !important}\n\n@media (min-width: 576px){.ion-text-sm-center,[text-sm-center]{text-align:center !important}.ion-text-sm-justify,[text-sm-justify]{text-align:justify !important}.ion-text-sm-start,[text-sm-start]{text-align:start !important}.ion-text-sm-end,[text-sm-end]{text-align:end !important}.ion-text-sm-left,[text-sm-left]{text-align:left !important}.ion-text-sm-right,[text-sm-right]{text-align:right !important}.ion-text-sm-nowrap,[text-sm-nowrap]{white-space:nowrap !important}.ion-text-sm-wrap,[text-sm-wrap]{white-space:normal !important}}\n\n@media (min-width: 768px){.ion-text-md-center,[text-md-center]{text-align:center !important}.ion-text-md-justify,[text-md-justify]{text-align:justify !important}.ion-text-md-start,[text-md-start]{text-align:start !important}.ion-text-md-end,[text-md-end]{text-align:end !important}.ion-text-md-left,[text-md-left]{text-align:left !important}.ion-text-md-right,[text-md-right]{text-align:right !important}.ion-text-md-nowrap,[text-md-nowrap]{white-space:nowrap !important}.ion-text-md-wrap,[text-md-wrap]{white-space:normal !important}}\n\n@media (min-width: 992px){.ion-text-lg-center,[text-lg-center]{text-align:center !important}.ion-text-lg-justify,[text-lg-justify]{text-align:justify !important}.ion-text-lg-start,[text-lg-start]{text-align:start !important}.ion-text-lg-end,[text-lg-end]{text-align:end !important}.ion-text-lg-left,[text-lg-left]{text-align:left !important}.ion-text-lg-right,[text-lg-right]{text-align:right !important}.ion-text-lg-nowrap,[text-lg-nowrap]{white-space:nowrap !important}.ion-text-lg-wrap,[text-lg-wrap]{white-space:normal !important}}\n\n@media (min-width: 1200px){.ion-text-xl-center,[text-xl-center]{text-align:center !important}.ion-text-xl-justify,[text-xl-justify]{text-align:justify !important}.ion-text-xl-start,[text-xl-start]{text-align:start !important}.ion-text-xl-end,[text-xl-end]{text-align:end !important}.ion-text-xl-left,[text-xl-left]{text-align:left !important}.ion-text-xl-right,[text-xl-right]{text-align:right !important}.ion-text-xl-nowrap,[text-xl-nowrap]{white-space:nowrap !important}.ion-text-xl-wrap,[text-xl-wrap]{white-space:normal !important}}\n\n.ion-text-uppercase,[text-uppercase]{text-transform:uppercase !important}\n\n.ion-text-lowercase,[text-lowercase]{text-transform:lowercase !important}\n\n.ion-text-capitalize,[text-capitalize]{text-transform:capitalize !important}\n\n@media (min-width: 576px){.ion-text-sm-uppercase,[text-sm-uppercase]{text-transform:uppercase !important}.ion-text-sm-lowercase,[text-sm-lowercase]{text-transform:lowercase !important}.ion-text-sm-capitalize,[text-sm-capitalize]{text-transform:capitalize !important}}\n\n@media (min-width: 768px){.ion-text-md-uppercase,[text-md-uppercase]{text-transform:uppercase !important}.ion-text-md-lowercase,[text-md-lowercase]{text-transform:lowercase !important}.ion-text-md-capitalize,[text-md-capitalize]{text-transform:capitalize !important}}\n\n@media (min-width: 992px){.ion-text-lg-uppercase,[text-lg-uppercase]{text-transform:uppercase !important}.ion-text-lg-lowercase,[text-lg-lowercase]{text-transform:lowercase !important}.ion-text-lg-capitalize,[text-lg-capitalize]{text-transform:capitalize !important}}\n\n@media (min-width: 1200px){.ion-text-xl-uppercase,[text-xl-uppercase]{text-transform:uppercase !important}.ion-text-xl-lowercase,[text-xl-lowercase]{text-transform:lowercase !important}.ion-text-xl-capitalize,[text-xl-capitalize]{text-transform:capitalize !important}}\n\n.ion-align-self-start,[align-self-start]{align-self:flex-start !important}\n\n.ion-align-self-end,[align-self-end]{align-self:flex-end !important}\n\n.ion-align-self-center,[align-self-center]{align-self:center !important}\n\n.ion-align-self-stretch,[align-self-stretch]{align-self:stretch !important}\n\n.ion-align-self-baseline,[align-self-baseline]{align-self:baseline !important}\n\n.ion-align-self-auto,[align-self-auto]{align-self:auto !important}\n\n.ion-wrap,[wrap]{flex-wrap:wrap !important}\n\n.ion-nowrap,[nowrap]{flex-wrap:nowrap !important}\n\n.ion-wrap-reverse,[wrap-reverse]{flex-wrap:wrap-reverse !important}\n\n.ion-justify-content-start,[justify-content-start]{justify-content:flex-start !important}\n\n.ion-justify-content-center,[justify-content-center]{justify-content:center !important}\n\n.ion-justify-content-end,[justify-content-end]{justify-content:flex-end !important}\n\n.ion-justify-content-around,[justify-content-around]{justify-content:space-around !important}\n\n.ion-justify-content-between,[justify-content-between]{justify-content:space-between !important}\n\n.ion-justify-content-evenly,[justify-content-evenly]{justify-content:space-evenly !important}\n\n.ion-align-items-start,[align-items-start]{align-items:flex-start !important}\n\n.ion-align-items-center,[align-items-center]{align-items:center !important}\n\n.ion-align-items-end,[align-items-end]{align-items:flex-end !important}\n\n.ion-align-items-stretch,[align-items-stretch]{align-items:stretch !important}\n\n.ion-align-items-baseline,[align-items-baseline]{align-items:baseline !important}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvY29yZS5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL25vcm1hbGl6ZS5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL3N0cnVjdHVyZS5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL3R5cG9ncmFwaHkuY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9kaXNwbGF5LmNzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvcGFkZGluZy5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL2Zsb2F0LWVsZW1lbnRzLmNzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvdGV4dC1hbGlnbm1lbnQuY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy90ZXh0LXRyYW5zZm9ybWF0aW9uLmNzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvZmxleC11dGlscy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2RkFBNkY7QUFDakc7O0FBRUE7SUFDSSwwREFBMEQ7QUFDOUQ7O0FBRUE7SUFDSSwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSx1Q0FBdUM7QUFDM0M7O0FBRUk7UUFDSSxnQkFBZ0I7SUFDcEI7O0FBRUo7SUFDSSxvQ0FBb0M7SUFDcEMseUVBQXlFO0lBQ3pFLHdFQUF3RTtJQUN4RSx1RkFBdUY7SUFDdkYscUVBQXFFO0lBQ3JFLG1FQUFtRTtBQUN2RTs7QUFFQTtJQUNJLGdFQUFnRTtJQUNoRSwyRUFBMkU7SUFDM0UsMEVBQTBFO0lBQzFFLHlGQUF5RjtJQUN6Rix1RUFBdUU7SUFDdkUscUVBQXFFO0FBQ3pFOztBQUVBO0lBQ0ksK0RBQStEO0lBQy9ELDBFQUEwRTtJQUMxRSx5RUFBeUU7SUFDekUsd0ZBQXdGO0lBQ3hG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QW1DOztBQUFDLHFEQUFxRCx1Q0FBdUM7O0FBQUMsdURBQXVELHdDQUF3Qzs7QUFBQyxxREFBcUQsdUNBQXVDOztBQUFDLDJDQUEyQyxpQ0FBaUM7O0FBQUMsNkNBQTZDLDZCQUE2Qjs7QUFBQyx1Q0FBdUMsK0JBQStCOztBQUFDLCtDQUErQyw4QkFBOEI7O0FBQUMsaURBQWlELCtCQUErQiIsImZpbGUiOiJzcmMvZ2xvYmFsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLmlvcyB7XG4gICAgLS1pb24tZGVmYXVsdC1mb250OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiSGVsdmV0aWNhIE5ldWVcIiwgXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuaHRtbC5tZCB7XG4gICAgLS1pb24tZGVmYXVsdC1mb250OiBcIlJvYm90b1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbmh0bWwge1xuICAgIC0taW9uLWZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZGVmYXVsdC1mb250KTtcbn1cblxuYm9keSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xufVxuXG4gICAgYm9keS5iYWNrZHJvcC1uby1zY3JvbGwge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cblxuLmlvbi1jb2xvci1wcmltYXJ5IHtcbiAgICAtLWlvbi1jb2xvci1iYXNlOiAjQTY3RTUxICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiwgNTYsMTI4LDI1NSkgIWltcG9ydGFudDtcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2IsIDI1NSwyNTUsMjU1KSAhaW1wb3J0YW50O1xuICAgIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSwgIzMxNzFlMCkgIWltcG9ydGFudDtcbiAgICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS10aW50LCAjNGM4ZGZmKSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWNvbG9yLXNlY29uZGFyeSB7XG4gICAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSwgIzBjZDFlOCkgIWltcG9ydGFudDtcbiAgICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2IsIDEyLDIwOSwyMzIpICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYiwgMjU1LDI1NSwyNTUpICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGUsICMwYmI4Y2MpICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50LCAjMjRkNmVhKSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWNvbG9yLXRlcnRpYXJ5IHtcbiAgICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnksICM3MDQ0ZmYpICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2IsIDExMiw2OCwyNTUpICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2IsIDI1NSwyNTUsMjU1KSAhaW1wb3J0YW50O1xuICAgIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGUsICM2MzNjZTApICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQsICM3ZTU3ZmYpICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tY29sb3Itc3VjY2VzcyB7XG4gICAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MsICMxMGRjNjApICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXJnYiwgMTYsMjIwLDk2KSAhaW1wb3J0YW50O1xuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYiwgMjU1LDI1NSwyNTUpICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlLCAjMGVjMjU0KSAhaW1wb3J0YW50O1xuICAgIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQsICMyOGUwNzApICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tY29sb3Itd2FybmluZyB7XG4gICAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcsICNmZmNlMDApICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLXJnYiwgMjU1LDIwNiwwKSAhaW1wb3J0YW50O1xuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYiwgMjU1LDI1NSwyNTUpICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlLCAjZTBiNTAwKSAhaW1wb3J0YW50O1xuICAgIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQsICNmZmQzMWEpICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tY29sb3ItZGFuZ2VyIHtcbiAgICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLCAjZjA0MTQxKSAhaW1wb3J0YW50O1xuICAgIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXJnYiwgMjQwLDY1LDY1KSAhaW1wb3J0YW50O1xuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LCAjZmZmKSAhaW1wb3J0YW50O1xuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2IsIDI1NSwyNTUsMjU1KSAhaW1wb3J0YW50O1xuICAgIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlLCAjZDMzOTM5KSAhaW1wb3J0YW50O1xuICAgIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItdGludCwgI2YyNTQ1NCkgIWltcG9ydGFudDtcbn1cblxuLmlvbi1jb2xvci1saWdodCB7XG4gICAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LCAjZjRmNWY4KSAhaW1wb3J0YW50O1xuICAgIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtcmdiLCAyNDQsMjQ1LDI0OCkgIWltcG9ydGFudDtcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LCAjMDAwKSAhaW1wb3J0YW50O1xuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYiwgMCwwLDApICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSwgI2Q3ZDhkYSkgIWltcG9ydGFudDtcbiAgICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItbGlnaHQtdGludCwgI2Y1ZjZmOSkgIWltcG9ydGFudDtcbn1cblxuLmlvbi1jb2xvci1tZWRpdW0ge1xuICAgIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0sICM5ODlhYTIpICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tcmdiLCAxNTIsMTU0LDE2MikgIWltcG9ydGFudDtcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiLCAyNTUsMjU1LDI1NSkgIWltcG9ydGFudDtcbiAgICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSwgIzg2ODg4ZikgIWltcG9ydGFudDtcbiAgICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQsICNhMmE0YWIpICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tY29sb3ItZGFyayB7XG4gICAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLWRhcmssICMyMjI0MjgpICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiwgMzQsMzYsNDApICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LCAjZmZmKSAhaW1wb3J0YW50O1xuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiLCAyNTUsMjU1LDI1NSkgIWltcG9ydGFudDtcbiAgICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWRhcmstc2hhZGUsICMxZTIwMjMpICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCwgIzM4M2EzZSkgIWltcG9ydGFudDtcbn1cblxuLmlvbi1wYWdlIHtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgY29udGFpbjogbGF5b3V0IHNpemUgc3R5bGU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB6LWluZGV4OiAwO1xufVxuXG5pb24tcm91dGUsIGlvbi1yb3V0ZS1yZWRpcmVjdCwgaW9uLXJvdXRlciwgaW9uLXNlbGVjdC1vcHRpb24sIGlvbi1uYXYtY29udHJvbGxlciwgaW9uLW1lbnUtY29udHJvbGxlciwgaW9uLWFjdGlvbi1zaGVldC1jb250cm9sbGVyLCBpb24tYWxlcnQtY29udHJvbGxlciwgaW9uLWxvYWRpbmctY29udHJvbGxlciwgaW9uLW1vZGFsLWNvbnRyb2xsZXIsIGlvbi1waWNrZXItY29udHJvbGxlciwgaW9uLXBvcG92ZXItY29udHJvbGxlciwgaW9uLXRvYXN0LWNvbnRyb2xsZXIsIC5pb24tcGFnZS1oaWRkZW4sIFtoaWRkZW5dIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tcGFnZS1pbnZpc2libGUge1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbmh0bWwucGx0LWlvcy5wbHQtaHlicmlkLCBodG1sLnBsdC1pb3MucGx0LXB3YSB7XG4gICAgLS1pb24tc3RhdHVzYmFyLXBhZGRpbmc6IDIwcHg7XG59XG5cbkBzdXBwb3J0cyAocGFkZGluZy10b3A6IDIwcHgpIHtcbiAgICBodG1sIHtcbiAgICAgICAgLS1pb24tc2FmZS1hcmVhLXRvcDogdmFyKC0taW9uLXN0YXR1c2Jhci1wYWRkaW5nKTtcbiAgICB9XG59XG5cbkBzdXBwb3J0cyAocGFkZGluZy10b3A6IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC10b3ApKSB7XG4gICAgaHRtbCB7XG4gICAgICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC10b3ApO1xuICAgICAgICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcbiAgICAgICAgLS1pb24tc2FmZS1hcmVhLWxlZnQ6IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1sZWZ0KTtcbiAgICAgICAgLS1pb24tc2FmZS1hcmVhLXJpZ2h0OiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtcmlnaHQpO1xuICAgIH1cbn1cblxuQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogZW52KHNhZmUtYXJlYS1pbnNldC10b3ApKSB7XG4gICAgaHRtbCB7XG4gICAgICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKTtcbiAgICAgICAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pO1xuICAgICAgICAtLWlvbi1zYWZlLWFyZWEtbGVmdDogZW52KHNhZmUtYXJlYS1pbnNldC1sZWZ0KTtcbiAgICAgICAgLS1pb24tc2FmZS1hcmVhLXJpZ2h0OiBlbnYoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KTtcbiAgICB9XG59XG4iLCJhdWRpbyxjYW52YXMscHJvZ3Jlc3MsdmlkZW97dmVydGljYWwtYWxpZ246YmFzZWxpbmV9YXVkaW86bm90KFtjb250cm9sc10pe2Rpc3BsYXk6bm9uZTtoZWlnaHQ6MH1iLHN0cm9uZ3tmb250LXdlaWdodDpib2xkfWltZ3ttYXgtd2lkdGg6MTAwJTtib3JkZXI6MH1zdmc6bm90KDpyb290KXtvdmVyZmxvdzpoaWRkZW59ZmlndXJle21hcmdpbjoxZW0gNDBweH1ocntoZWlnaHQ6MXB4O2JvcmRlci13aWR0aDowO2JveC1zaXppbmc6Y29udGVudC1ib3h9cHJle292ZXJmbG93OmF1dG99Y29kZSxrYmQscHJlLHNhbXB7Zm9udC1mYW1pbHk6bW9ub3NwYWNlLCBtb25vc3BhY2U7Zm9udC1zaXplOjFlbX1sYWJlbCxpbnB1dCxzZWxlY3QsdGV4dGFyZWF7Zm9udC1mYW1pbHk6aW5oZXJpdDtsaW5lLWhlaWdodDpub3JtYWx9dGV4dGFyZWF7b3ZlcmZsb3c6YXV0bztoZWlnaHQ6YXV0bztmb250OmluaGVyaXQ7Y29sb3I6aW5oZXJpdH10ZXh0YXJlYTo6cGxhY2Vob2xkZXJ7cGFkZGluZy1sZWZ0OjJweH1mb3JtLGlucHV0LG9wdGdyb3VwLHNlbGVjdHttYXJnaW46MDtmb250OmluaGVyaXQ7Y29sb3I6aW5oZXJpdH1odG1sIGlucHV0W3R5cGU9XCJidXR0b25cIl0saW5wdXRbdHlwZT1cInJlc2V0XCJdLGlucHV0W3R5cGU9XCJzdWJtaXRcIl17Y3Vyc29yOnBvaW50ZXI7LXdlYmtpdC1hcHBlYXJhbmNlOmJ1dHRvbn1hLGEgZGl2LGEgc3BhbixhIGlvbi1pY29uLGEgaW9uLWxhYmVsLGJ1dHRvbixidXR0b24gZGl2LGJ1dHRvbiBzcGFuLGJ1dHRvbiBpb24taWNvbixidXR0b24gaW9uLWxhYmVsLC5pb24tdGFwcGFibGUsW3RhcHBhYmxlXSxbdGFwcGFibGVdIGRpdixbdGFwcGFibGVdIHNwYW4sW3RhcHBhYmxlXSBpb24taWNvbixbdGFwcGFibGVdIGlvbi1sYWJlbCxpbnB1dCx0ZXh0YXJlYXt0b3VjaC1hY3Rpb246bWFuaXB1bGF0aW9ufWEgaW9uLWxhYmVsLGJ1dHRvbiBpb24tbGFiZWx7cG9pbnRlci1ldmVudHM6bm9uZX1idXR0b257Ym9yZGVyOjA7Ym9yZGVyLXJhZGl1czowO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zdHlsZTppbmhlcml0O2ZvbnQtdmFyaWFudDppbmhlcml0O2xpbmUtaGVpZ2h0OjE7dGV4dC10cmFuc2Zvcm06bm9uZTtjdXJzb3I6cG9pbnRlcjstd2Via2l0LWFwcGVhcmFuY2U6YnV0dG9ufVt0YXBwYWJsZV17Y3Vyc29yOnBvaW50ZXJ9YVtkaXNhYmxlZF0sYnV0dG9uW2Rpc2FibGVkXSxodG1sIGlucHV0W2Rpc2FibGVkXXtjdXJzb3I6ZGVmYXVsdH1idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsaW5wdXQ6Oi1tb3otZm9jdXMtaW5uZXJ7cGFkZGluZzowO2JvcmRlcjowfWlucHV0W3R5cGU9XCJjaGVja2JveFwiXSxpbnB1dFt0eXBlPVwicmFkaW9cIl17cGFkZGluZzowO2JveC1zaXppbmc6Ym9yZGVyLWJveH1pbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLGlucHV0W3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b257aGVpZ2h0OmF1dG99aW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixpbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uey13ZWJraXQtYXBwZWFyYW5jZTpub25lfXRhYmxle2JvcmRlci1jb2xsYXBzZTpjb2xsYXBzZTtib3JkZXItc3BhY2luZzowfXRkLHRoe3BhZGRpbmc6MH1cbiIsIip7Ym94LXNpemluZzpib3JkZXItYm94Oy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjpyZ2JhKDAsMCwwLDApOy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjp0cmFuc3BhcmVudDstd2Via2l0LXRvdWNoLWNhbGxvdXQ6bm9uZX1odG1se3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7dGV4dC1zaXplLWFkanVzdDoxMDAlfWh0bWwucGx0LXB3YXtoZWlnaHQ6MTAwdmh9Ym9keXstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDtwb3NpdGlvbjpmaXhlZDt3aWR0aDoxMDAlO21heC13aWR0aDoxMDAlO2hlaWdodDoxMDAlO21heC1oZWlnaHQ6MTAwJTt0ZXh0LXJlbmRlcmluZzpvcHRpbWl6ZUxlZ2liaWxpdHk7b3ZlcmZsb3c6aGlkZGVuO3RvdWNoLWFjdGlvbjptYW5pcHVsYXRpb247LXdlYmtpdC11c2VyLWRyYWc6bm9uZTstbXMtY29udGVudC16b29taW5nOm5vbmU7d29yZC13cmFwOmJyZWFrLXdvcmQ7b3ZlcnNjcm9sbC1iZWhhdmlvci15Om5vbmU7dGV4dC1zaXplLWFkanVzdDpub25lfVxuIiwiaHRtbHtmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHkpfWF7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZil9aDEsaDIsaDMsaDQsaDUsaDZ7bWFyZ2luLXRvcDoxNnB4O21hcmdpbi1ib3R0b206MTBweDtmb250LXdlaWdodDo1MDA7bGluZS1oZWlnaHQ6MS4yfWgxe21hcmdpbi10b3A6MjBweDtmb250LXNpemU6MjZweH1oMnttYXJnaW4tdG9wOjE4cHg7Zm9udC1zaXplOjI0cHh9aDN7Zm9udC1zaXplOjIycHh9aDR7Zm9udC1zaXplOjIwcHh9aDV7Zm9udC1zaXplOjE4cHh9aDZ7Zm9udC1zaXplOjE2cHh9c21hbGx7Zm9udC1zaXplOjc1JX1zdWIsc3Vwe3Bvc2l0aW9uOnJlbGF0aXZlO2ZvbnQtc2l6ZTo3NSU7bGluZS1oZWlnaHQ6MDt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZX1zdXB7dG9wOi0uNWVtfXN1Yntib3R0b206LS4yNWVtfVxuIiwiLmlvbi1oaWRle2Rpc3BsYXk6bm9uZSAhaW1wb3J0YW50fS5pb24taGlkZS11cHtkaXNwbGF5Om5vbmUgIWltcG9ydGFudH1AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpey5pb24taGlkZS1kb3due2Rpc3BsYXk6bm9uZSAhaW1wb3J0YW50fX1AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpey5pb24taGlkZS1zbS11cHtkaXNwbGF5Om5vbmUgIWltcG9ydGFudH19QG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KXsuaW9uLWhpZGUtc20tZG93bntkaXNwbGF5Om5vbmUgIWltcG9ydGFudH19QG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KXsuaW9uLWhpZGUtbWQtdXB7ZGlzcGxheTpub25lICFpbXBvcnRhbnR9fUBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCl7Lmlvbi1oaWRlLW1kLWRvd257ZGlzcGxheTpub25lICFpbXBvcnRhbnR9fUBtZWRpYSAobWluLXdpZHRoOiA5OTJweCl7Lmlvbi1oaWRlLWxnLXVwe2Rpc3BsYXk6bm9uZSAhaW1wb3J0YW50fX1AbWVkaWEgKG1heC13aWR0aDogMTE5OXB4KXsuaW9uLWhpZGUtbGctZG93bntkaXNwbGF5Om5vbmUgIWltcG9ydGFudH19QG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCl7Lmlvbi1oaWRlLXhsLXVwe2Rpc3BsYXk6bm9uZSAhaW1wb3J0YW50fX0uaW9uLWhpZGUteGwtZG93bntkaXNwbGF5Om5vbmUgIWltcG9ydGFudH1cbiIsIi5pb24tbm8tcGFkZGluZyxbbm8tcGFkZGluZ117LS1wYWRkaW5nLXN0YXJ0OiAwOy0tcGFkZGluZy1lbmQ6IDA7LS1wYWRkaW5nLXRvcDogMDstLXBhZGRpbmctYm90dG9tOiAwO3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6MDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjB9Lmlvbi1wYWRkaW5nLFtwYWRkaW5nXXstLXBhZGRpbmctc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTstLXBhZGRpbmctZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7LS1wYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpOy0tcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtwYWRkaW5nLWxlZnQ6dmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO3BhZGRpbmctcmlnaHQ6dmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO3BhZGRpbmctdG9wOnZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtwYWRkaW5nLWJvdHRvbTp2YXIoLS1pb24tcGFkZGluZywgMTZweCl9QHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApey5pb24tcGFkZGluZyxbcGFkZGluZ117cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OnZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtwYWRkaW5nLWlubGluZS1zdGFydDp2YXIoLS1pb24tcGFkZGluZywgMTZweCk7LXdlYmtpdC1wYWRkaW5nLWVuZDp2YXIoLS1pb24tcGFkZGluZywgMTZweCk7cGFkZGluZy1pbmxpbmUtZW5kOnZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KX19Lmlvbi1wYWRkaW5nLXRvcCxbcGFkZGluZy10b3Bdey0tcGFkZGluZy10b3A6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtwYWRkaW5nLXRvcDp2YXIoLS1pb24tcGFkZGluZywgMTZweCl9Lmlvbi1wYWRkaW5nLXN0YXJ0LFtwYWRkaW5nLXN0YXJ0XXstLXBhZGRpbmctc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtwYWRkaW5nLWxlZnQ6dmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpfUBzdXBwb3J0cyAobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKXsuaW9uLXBhZGRpbmctc3RhcnQsW3BhZGRpbmctc3RhcnRde3BhZGRpbmctbGVmdDp1bnNldDstd2Via2l0LXBhZGRpbmctc3RhcnQ6dmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO3BhZGRpbmctaW5saW5lLXN0YXJ0OnZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KX19Lmlvbi1wYWRkaW5nLWVuZCxbcGFkZGluZy1lbmRdey0tcGFkZGluZy1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtwYWRkaW5nLXJpZ2h0OnZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KX1Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCl7Lmlvbi1wYWRkaW5nLWVuZCxbcGFkZGluZy1lbmRde3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLWVuZDp2YXIoLS1pb24tcGFkZGluZywgMTZweCk7cGFkZGluZy1pbmxpbmUtZW5kOnZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KX19Lmlvbi1wYWRkaW5nLWJvdHRvbSxbcGFkZGluZy1ib3R0b21dey0tcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtwYWRkaW5nLWJvdHRvbTp2YXIoLS1pb24tcGFkZGluZywgMTZweCl9Lmlvbi1wYWRkaW5nLXZlcnRpY2FsLFtwYWRkaW5nLXZlcnRpY2FsXXstLXBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7LS1wYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO3BhZGRpbmctdG9wOnZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtwYWRkaW5nLWJvdHRvbTp2YXIoLS1pb24tcGFkZGluZywgMTZweCl9Lmlvbi1wYWRkaW5nLWhvcml6b250YWwsW3BhZGRpbmctaG9yaXpvbnRhbF17LS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7LS1wYWRkaW5nLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO3BhZGRpbmctbGVmdDp2YXIoLS1pb24tcGFkZGluZywgMTZweCk7cGFkZGluZy1yaWdodDp2YXIoLS1pb24tcGFkZGluZywgMTZweCl9QHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApey5pb24tcGFkZGluZy1ob3Jpem9udGFsLFtwYWRkaW5nLWhvcml6b250YWxde3BhZGRpbmctbGVmdDp1bnNldDtwYWRkaW5nLXJpZ2h0OnVuc2V0Oy13ZWJraXQtcGFkZGluZy1zdGFydDp2YXIoLS1pb24tcGFkZGluZywgMTZweCk7cGFkZGluZy1pbmxpbmUtc3RhcnQ6dmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpOy13ZWJraXQtcGFkZGluZy1lbmQ6dmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO3BhZGRpbmctaW5saW5lLWVuZDp2YXIoLS1pb24tcGFkZGluZywgMTZweCl9fS5pb24tbm8tbWFyZ2luLFtuby1tYXJnaW5dey0tbWFyZ2luLXN0YXJ0OiAwOy0tbWFyZ2luLWVuZDogMDstLW1hcmdpbi10b3A6IDA7LS1tYXJnaW4tYm90dG9tOiAwO21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MH0uaW9uLW1hcmdpbixbbWFyZ2luXXstLW1hcmdpbi1zdGFydDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7LS1tYXJnaW4tZW5kOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTstLW1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpOy0tbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7bWFyZ2luLWxlZnQ6dmFyKC0taW9uLW1hcmdpbiwgMTZweCk7bWFyZ2luLXJpZ2h0OnZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO21hcmdpbi10b3A6dmFyKC0taW9uLW1hcmdpbiwgMTZweCk7bWFyZ2luLWJvdHRvbTp2YXIoLS1pb24tbWFyZ2luLCAxNnB4KX1Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCl7Lmlvbi1tYXJnaW4sW21hcmdpbl17bWFyZ2luLWxlZnQ6dW5zZXQ7bWFyZ2luLXJpZ2h0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLXN0YXJ0OnZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO21hcmdpbi1pbmxpbmUtc3RhcnQ6dmFyKC0taW9uLW1hcmdpbiwgMTZweCk7LXdlYmtpdC1tYXJnaW4tZW5kOnZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO21hcmdpbi1pbmxpbmUtZW5kOnZhcigtLWlvbi1tYXJnaW4sIDE2cHgpfX0uaW9uLW1hcmdpbi10b3AsW21hcmdpbi10b3Bdey0tbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7bWFyZ2luLXRvcDp2YXIoLS1pb24tbWFyZ2luLCAxNnB4KX0uaW9uLW1hcmdpbi1zdGFydCxbbWFyZ2luLXN0YXJ0XXstLW1hcmdpbi1zdGFydDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7bWFyZ2luLWxlZnQ6dmFyKC0taW9uLW1hcmdpbiwgMTZweCl9QHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApey5pb24tbWFyZ2luLXN0YXJ0LFttYXJnaW4tc3RhcnRde21hcmdpbi1sZWZ0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLXN0YXJ0OnZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO21hcmdpbi1pbmxpbmUtc3RhcnQ6dmFyKC0taW9uLW1hcmdpbiwgMTZweCl9fS5pb24tbWFyZ2luLWVuZCxbbWFyZ2luLWVuZF17LS1tYXJnaW4tZW5kOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTttYXJnaW4tcmlnaHQ6dmFyKC0taW9uLW1hcmdpbiwgMTZweCl9QHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApey5pb24tbWFyZ2luLWVuZCxbbWFyZ2luLWVuZF17bWFyZ2luLXJpZ2h0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLWVuZDp2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTttYXJnaW4taW5saW5lLWVuZDp2YXIoLS1pb24tbWFyZ2luLCAxNnB4KX19Lmlvbi1tYXJnaW4tYm90dG9tLFttYXJnaW4tYm90dG9tXXstLW1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO21hcmdpbi1ib3R0b206dmFyKC0taW9uLW1hcmdpbiwgMTZweCl9Lmlvbi1tYXJnaW4tdmVydGljYWwsW21hcmdpbi12ZXJ0aWNhbF17LS1tYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTstLW1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO21hcmdpbi10b3A6dmFyKC0taW9uLW1hcmdpbiwgMTZweCk7bWFyZ2luLWJvdHRvbTp2YXIoLS1pb24tbWFyZ2luLCAxNnB4KX0uaW9uLW1hcmdpbi1ob3Jpem9udGFsLFttYXJnaW4taG9yaXpvbnRhbF17LS1tYXJnaW4tc3RhcnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpOy0tbWFyZ2luLWVuZDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7bWFyZ2luLWxlZnQ6dmFyKC0taW9uLW1hcmdpbiwgMTZweCk7bWFyZ2luLXJpZ2h0OnZhcigtLWlvbi1tYXJnaW4sIDE2cHgpfUBzdXBwb3J0cyAobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKXsuaW9uLW1hcmdpbi1ob3Jpem9udGFsLFttYXJnaW4taG9yaXpvbnRhbF17bWFyZ2luLWxlZnQ6dW5zZXQ7bWFyZ2luLXJpZ2h0OnVuc2V0Oy13ZWJraXQtbWFyZ2luLXN0YXJ0OnZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO21hcmdpbi1pbmxpbmUtc3RhcnQ6dmFyKC0taW9uLW1hcmdpbiwgMTZweCk7LXdlYmtpdC1tYXJnaW4tZW5kOnZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO21hcmdpbi1pbmxpbmUtZW5kOnZhcigtLWlvbi1tYXJnaW4sIDE2cHgpfX1cbiIsIi5pb24tZmxvYXQtbGVmdCxbZmxvYXQtbGVmdF17ZmxvYXQ6bGVmdCAhaW1wb3J0YW50fS5pb24tZmxvYXQtcmlnaHQsW2Zsb2F0LXJpZ2h0XXtmbG9hdDpyaWdodCAhaW1wb3J0YW50fS5pb24tZmxvYXQtc3RhcnQsW2Zsb2F0LXN0YXJ0XXtmbG9hdDpsZWZ0ICFpbXBvcnRhbnR9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQtc3RhcnQsOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIFtmbG9hdC1zdGFydF17ZmxvYXQ6cmlnaHQgIWltcG9ydGFudH0uaW9uLWZsb2F0LWVuZCxbZmxvYXQtZW5kXXtmbG9hdDpyaWdodCAhaW1wb3J0YW50fTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LWVuZCw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgW2Zsb2F0LWVuZF17ZmxvYXQ6bGVmdCAhaW1wb3J0YW50fUBtZWRpYSAobWluLXdpZHRoOiA1NzZweCl7Lmlvbi1mbG9hdC1zbS1sZWZ0LFtmbG9hdC1zbS1sZWZ0XXtmbG9hdDpsZWZ0ICFpbXBvcnRhbnR9Lmlvbi1mbG9hdC1zbS1yaWdodCxbZmxvYXQtc20tcmlnaHRde2Zsb2F0OnJpZ2h0ICFpbXBvcnRhbnR9Lmlvbi1mbG9hdC1zbS1zdGFydCxbZmxvYXQtc20tc3RhcnRde2Zsb2F0OmxlZnQgIWltcG9ydGFudH06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC1zbS1zdGFydCw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgW2Zsb2F0LXNtLXN0YXJ0XXtmbG9hdDpyaWdodCAhaW1wb3J0YW50fS5pb24tZmxvYXQtc20tZW5kLFtmbG9hdC1zbS1lbmRde2Zsb2F0OnJpZ2h0ICFpbXBvcnRhbnR9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQtc20tZW5kLDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSBbZmxvYXQtc20tZW5kXXtmbG9hdDpsZWZ0ICFpbXBvcnRhbnR9fUBtZWRpYSAobWluLXdpZHRoOiA3NjhweCl7Lmlvbi1mbG9hdC1tZC1sZWZ0LFtmbG9hdC1tZC1sZWZ0XXtmbG9hdDpsZWZ0ICFpbXBvcnRhbnR9Lmlvbi1mbG9hdC1tZC1yaWdodCxbZmxvYXQtbWQtcmlnaHRde2Zsb2F0OnJpZ2h0ICFpbXBvcnRhbnR9Lmlvbi1mbG9hdC1tZC1zdGFydCxbZmxvYXQtbWQtc3RhcnRde2Zsb2F0OmxlZnQgIWltcG9ydGFudH06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC1tZC1zdGFydCw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgW2Zsb2F0LW1kLXN0YXJ0XXtmbG9hdDpyaWdodCAhaW1wb3J0YW50fS5pb24tZmxvYXQtbWQtZW5kLFtmbG9hdC1tZC1lbmRde2Zsb2F0OnJpZ2h0ICFpbXBvcnRhbnR9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQtbWQtZW5kLDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSBbZmxvYXQtbWQtZW5kXXtmbG9hdDpsZWZ0ICFpbXBvcnRhbnR9fUBtZWRpYSAobWluLXdpZHRoOiA5OTJweCl7Lmlvbi1mbG9hdC1sZy1sZWZ0LFtmbG9hdC1sZy1sZWZ0XXtmbG9hdDpsZWZ0ICFpbXBvcnRhbnR9Lmlvbi1mbG9hdC1sZy1yaWdodCxbZmxvYXQtbGctcmlnaHRde2Zsb2F0OnJpZ2h0ICFpbXBvcnRhbnR9Lmlvbi1mbG9hdC1sZy1zdGFydCxbZmxvYXQtbGctc3RhcnRde2Zsb2F0OmxlZnQgIWltcG9ydGFudH06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC1sZy1zdGFydCw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgW2Zsb2F0LWxnLXN0YXJ0XXtmbG9hdDpyaWdodCAhaW1wb3J0YW50fS5pb24tZmxvYXQtbGctZW5kLFtmbG9hdC1sZy1lbmRde2Zsb2F0OnJpZ2h0ICFpbXBvcnRhbnR9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQtbGctZW5kLDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSBbZmxvYXQtbGctZW5kXXtmbG9hdDpsZWZ0ICFpbXBvcnRhbnR9fUBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpey5pb24tZmxvYXQteGwtbGVmdCxbZmxvYXQteGwtbGVmdF17ZmxvYXQ6bGVmdCAhaW1wb3J0YW50fS5pb24tZmxvYXQteGwtcmlnaHQsW2Zsb2F0LXhsLXJpZ2h0XXtmbG9hdDpyaWdodCAhaW1wb3J0YW50fS5pb24tZmxvYXQteGwtc3RhcnQsW2Zsb2F0LXhsLXN0YXJ0XXtmbG9hdDpsZWZ0ICFpbXBvcnRhbnR9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQteGwtc3RhcnQsOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIFtmbG9hdC14bC1zdGFydF17ZmxvYXQ6cmlnaHQgIWltcG9ydGFudH0uaW9uLWZsb2F0LXhsLWVuZCxbZmxvYXQteGwtZW5kXXtmbG9hdDpyaWdodCAhaW1wb3J0YW50fTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LXhsLWVuZCw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgW2Zsb2F0LXhsLWVuZF17ZmxvYXQ6bGVmdCAhaW1wb3J0YW50fX1cbiIsIi5pb24tdGV4dC1jZW50ZXIsW3RleHQtY2VudGVyXXt0ZXh0LWFsaWduOmNlbnRlciAhaW1wb3J0YW50fS5pb24tdGV4dC1qdXN0aWZ5LFt0ZXh0LWp1c3RpZnlde3RleHQtYWxpZ246anVzdGlmeSAhaW1wb3J0YW50fS5pb24tdGV4dC1zdGFydCxbdGV4dC1zdGFydF17dGV4dC1hbGlnbjpzdGFydCAhaW1wb3J0YW50fS5pb24tdGV4dC1lbmQsW3RleHQtZW5kXXt0ZXh0LWFsaWduOmVuZCAhaW1wb3J0YW50fS5pb24tdGV4dC1sZWZ0LFt0ZXh0LWxlZnRde3RleHQtYWxpZ246bGVmdCAhaW1wb3J0YW50fS5pb24tdGV4dC1yaWdodCxbdGV4dC1yaWdodF17dGV4dC1hbGlnbjpyaWdodCAhaW1wb3J0YW50fS5pb24tdGV4dC1ub3dyYXAsW3RleHQtbm93cmFwXXt3aGl0ZS1zcGFjZTpub3dyYXAgIWltcG9ydGFudH0uaW9uLXRleHQtd3JhcCxbdGV4dC13cmFwXXt3aGl0ZS1zcGFjZTpub3JtYWwgIWltcG9ydGFudH1AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpey5pb24tdGV4dC1zbS1jZW50ZXIsW3RleHQtc20tY2VudGVyXXt0ZXh0LWFsaWduOmNlbnRlciAhaW1wb3J0YW50fS5pb24tdGV4dC1zbS1qdXN0aWZ5LFt0ZXh0LXNtLWp1c3RpZnlde3RleHQtYWxpZ246anVzdGlmeSAhaW1wb3J0YW50fS5pb24tdGV4dC1zbS1zdGFydCxbdGV4dC1zbS1zdGFydF17dGV4dC1hbGlnbjpzdGFydCAhaW1wb3J0YW50fS5pb24tdGV4dC1zbS1lbmQsW3RleHQtc20tZW5kXXt0ZXh0LWFsaWduOmVuZCAhaW1wb3J0YW50fS5pb24tdGV4dC1zbS1sZWZ0LFt0ZXh0LXNtLWxlZnRde3RleHQtYWxpZ246bGVmdCAhaW1wb3J0YW50fS5pb24tdGV4dC1zbS1yaWdodCxbdGV4dC1zbS1yaWdodF17dGV4dC1hbGlnbjpyaWdodCAhaW1wb3J0YW50fS5pb24tdGV4dC1zbS1ub3dyYXAsW3RleHQtc20tbm93cmFwXXt3aGl0ZS1zcGFjZTpub3dyYXAgIWltcG9ydGFudH0uaW9uLXRleHQtc20td3JhcCxbdGV4dC1zbS13cmFwXXt3aGl0ZS1zcGFjZTpub3JtYWwgIWltcG9ydGFudH19QG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KXsuaW9uLXRleHQtbWQtY2VudGVyLFt0ZXh0LW1kLWNlbnRlcl17dGV4dC1hbGlnbjpjZW50ZXIgIWltcG9ydGFudH0uaW9uLXRleHQtbWQtanVzdGlmeSxbdGV4dC1tZC1qdXN0aWZ5XXt0ZXh0LWFsaWduOmp1c3RpZnkgIWltcG9ydGFudH0uaW9uLXRleHQtbWQtc3RhcnQsW3RleHQtbWQtc3RhcnRde3RleHQtYWxpZ246c3RhcnQgIWltcG9ydGFudH0uaW9uLXRleHQtbWQtZW5kLFt0ZXh0LW1kLWVuZF17dGV4dC1hbGlnbjplbmQgIWltcG9ydGFudH0uaW9uLXRleHQtbWQtbGVmdCxbdGV4dC1tZC1sZWZ0XXt0ZXh0LWFsaWduOmxlZnQgIWltcG9ydGFudH0uaW9uLXRleHQtbWQtcmlnaHQsW3RleHQtbWQtcmlnaHRde3RleHQtYWxpZ246cmlnaHQgIWltcG9ydGFudH0uaW9uLXRleHQtbWQtbm93cmFwLFt0ZXh0LW1kLW5vd3JhcF17d2hpdGUtc3BhY2U6bm93cmFwICFpbXBvcnRhbnR9Lmlvbi10ZXh0LW1kLXdyYXAsW3RleHQtbWQtd3JhcF17d2hpdGUtc3BhY2U6bm9ybWFsICFpbXBvcnRhbnR9fUBtZWRpYSAobWluLXdpZHRoOiA5OTJweCl7Lmlvbi10ZXh0LWxnLWNlbnRlcixbdGV4dC1sZy1jZW50ZXJde3RleHQtYWxpZ246Y2VudGVyICFpbXBvcnRhbnR9Lmlvbi10ZXh0LWxnLWp1c3RpZnksW3RleHQtbGctanVzdGlmeV17dGV4dC1hbGlnbjpqdXN0aWZ5ICFpbXBvcnRhbnR9Lmlvbi10ZXh0LWxnLXN0YXJ0LFt0ZXh0LWxnLXN0YXJ0XXt0ZXh0LWFsaWduOnN0YXJ0ICFpbXBvcnRhbnR9Lmlvbi10ZXh0LWxnLWVuZCxbdGV4dC1sZy1lbmRde3RleHQtYWxpZ246ZW5kICFpbXBvcnRhbnR9Lmlvbi10ZXh0LWxnLWxlZnQsW3RleHQtbGctbGVmdF17dGV4dC1hbGlnbjpsZWZ0ICFpbXBvcnRhbnR9Lmlvbi10ZXh0LWxnLXJpZ2h0LFt0ZXh0LWxnLXJpZ2h0XXt0ZXh0LWFsaWduOnJpZ2h0ICFpbXBvcnRhbnR9Lmlvbi10ZXh0LWxnLW5vd3JhcCxbdGV4dC1sZy1ub3dyYXBde3doaXRlLXNwYWNlOm5vd3JhcCAhaW1wb3J0YW50fS5pb24tdGV4dC1sZy13cmFwLFt0ZXh0LWxnLXdyYXBde3doaXRlLXNwYWNlOm5vcm1hbCAhaW1wb3J0YW50fX1AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KXsuaW9uLXRleHQteGwtY2VudGVyLFt0ZXh0LXhsLWNlbnRlcl17dGV4dC1hbGlnbjpjZW50ZXIgIWltcG9ydGFudH0uaW9uLXRleHQteGwtanVzdGlmeSxbdGV4dC14bC1qdXN0aWZ5XXt0ZXh0LWFsaWduOmp1c3RpZnkgIWltcG9ydGFudH0uaW9uLXRleHQteGwtc3RhcnQsW3RleHQteGwtc3RhcnRde3RleHQtYWxpZ246c3RhcnQgIWltcG9ydGFudH0uaW9uLXRleHQteGwtZW5kLFt0ZXh0LXhsLWVuZF17dGV4dC1hbGlnbjplbmQgIWltcG9ydGFudH0uaW9uLXRleHQteGwtbGVmdCxbdGV4dC14bC1sZWZ0XXt0ZXh0LWFsaWduOmxlZnQgIWltcG9ydGFudH0uaW9uLXRleHQteGwtcmlnaHQsW3RleHQteGwtcmlnaHRde3RleHQtYWxpZ246cmlnaHQgIWltcG9ydGFudH0uaW9uLXRleHQteGwtbm93cmFwLFt0ZXh0LXhsLW5vd3JhcF17d2hpdGUtc3BhY2U6bm93cmFwICFpbXBvcnRhbnR9Lmlvbi10ZXh0LXhsLXdyYXAsW3RleHQteGwtd3JhcF17d2hpdGUtc3BhY2U6bm9ybWFsICFpbXBvcnRhbnR9fVxuIiwiLmlvbi10ZXh0LXVwcGVyY2FzZSxbdGV4dC11cHBlcmNhc2Vde3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZSAhaW1wb3J0YW50fS5pb24tdGV4dC1sb3dlcmNhc2UsW3RleHQtbG93ZXJjYXNlXXt0ZXh0LXRyYW5zZm9ybTpsb3dlcmNhc2UgIWltcG9ydGFudH0uaW9uLXRleHQtY2FwaXRhbGl6ZSxbdGV4dC1jYXBpdGFsaXplXXt0ZXh0LXRyYW5zZm9ybTpjYXBpdGFsaXplICFpbXBvcnRhbnR9QG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KXsuaW9uLXRleHQtc20tdXBwZXJjYXNlLFt0ZXh0LXNtLXVwcGVyY2FzZV17dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlICFpbXBvcnRhbnR9Lmlvbi10ZXh0LXNtLWxvd2VyY2FzZSxbdGV4dC1zbS1sb3dlcmNhc2Vde3RleHQtdHJhbnNmb3JtOmxvd2VyY2FzZSAhaW1wb3J0YW50fS5pb24tdGV4dC1zbS1jYXBpdGFsaXplLFt0ZXh0LXNtLWNhcGl0YWxpemVde3RleHQtdHJhbnNmb3JtOmNhcGl0YWxpemUgIWltcG9ydGFudH19QG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KXsuaW9uLXRleHQtbWQtdXBwZXJjYXNlLFt0ZXh0LW1kLXVwcGVyY2FzZV17dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlICFpbXBvcnRhbnR9Lmlvbi10ZXh0LW1kLWxvd2VyY2FzZSxbdGV4dC1tZC1sb3dlcmNhc2Vde3RleHQtdHJhbnNmb3JtOmxvd2VyY2FzZSAhaW1wb3J0YW50fS5pb24tdGV4dC1tZC1jYXBpdGFsaXplLFt0ZXh0LW1kLWNhcGl0YWxpemVde3RleHQtdHJhbnNmb3JtOmNhcGl0YWxpemUgIWltcG9ydGFudH19QG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KXsuaW9uLXRleHQtbGctdXBwZXJjYXNlLFt0ZXh0LWxnLXVwcGVyY2FzZV17dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlICFpbXBvcnRhbnR9Lmlvbi10ZXh0LWxnLWxvd2VyY2FzZSxbdGV4dC1sZy1sb3dlcmNhc2Vde3RleHQtdHJhbnNmb3JtOmxvd2VyY2FzZSAhaW1wb3J0YW50fS5pb24tdGV4dC1sZy1jYXBpdGFsaXplLFt0ZXh0LWxnLWNhcGl0YWxpemVde3RleHQtdHJhbnNmb3JtOmNhcGl0YWxpemUgIWltcG9ydGFudH19QG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCl7Lmlvbi10ZXh0LXhsLXVwcGVyY2FzZSxbdGV4dC14bC11cHBlcmNhc2Vde3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZSAhaW1wb3J0YW50fS5pb24tdGV4dC14bC1sb3dlcmNhc2UsW3RleHQteGwtbG93ZXJjYXNlXXt0ZXh0LXRyYW5zZm9ybTpsb3dlcmNhc2UgIWltcG9ydGFudH0uaW9uLXRleHQteGwtY2FwaXRhbGl6ZSxbdGV4dC14bC1jYXBpdGFsaXplXXt0ZXh0LXRyYW5zZm9ybTpjYXBpdGFsaXplICFpbXBvcnRhbnR9fVxuIiwiLmlvbi1hbGlnbi1zZWxmLXN0YXJ0LFthbGlnbi1zZWxmLXN0YXJ0XXthbGlnbi1zZWxmOmZsZXgtc3RhcnQgIWltcG9ydGFudH0uaW9uLWFsaWduLXNlbGYtZW5kLFthbGlnbi1zZWxmLWVuZF17YWxpZ24tc2VsZjpmbGV4LWVuZCAhaW1wb3J0YW50fS5pb24tYWxpZ24tc2VsZi1jZW50ZXIsW2FsaWduLXNlbGYtY2VudGVyXXthbGlnbi1zZWxmOmNlbnRlciAhaW1wb3J0YW50fS5pb24tYWxpZ24tc2VsZi1zdHJldGNoLFthbGlnbi1zZWxmLXN0cmV0Y2hde2FsaWduLXNlbGY6c3RyZXRjaCAhaW1wb3J0YW50fS5pb24tYWxpZ24tc2VsZi1iYXNlbGluZSxbYWxpZ24tc2VsZi1iYXNlbGluZV17YWxpZ24tc2VsZjpiYXNlbGluZSAhaW1wb3J0YW50fS5pb24tYWxpZ24tc2VsZi1hdXRvLFthbGlnbi1zZWxmLWF1dG9de2FsaWduLXNlbGY6YXV0byAhaW1wb3J0YW50fS5pb24td3JhcCxbd3JhcF17ZmxleC13cmFwOndyYXAgIWltcG9ydGFudH0uaW9uLW5vd3JhcCxbbm93cmFwXXtmbGV4LXdyYXA6bm93cmFwICFpbXBvcnRhbnR9Lmlvbi13cmFwLXJldmVyc2UsW3dyYXAtcmV2ZXJzZV17ZmxleC13cmFwOndyYXAtcmV2ZXJzZSAhaW1wb3J0YW50fS5pb24tanVzdGlmeS1jb250ZW50LXN0YXJ0LFtqdXN0aWZ5LWNvbnRlbnQtc3RhcnRde2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0ICFpbXBvcnRhbnR9Lmlvbi1qdXN0aWZ5LWNvbnRlbnQtY2VudGVyLFtqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXXtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyICFpbXBvcnRhbnR9Lmlvbi1qdXN0aWZ5LWNvbnRlbnQtZW5kLFtqdXN0aWZ5LWNvbnRlbnQtZW5kXXtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQgIWltcG9ydGFudH0uaW9uLWp1c3RpZnktY29udGVudC1hcm91bmQsW2p1c3RpZnktY29udGVudC1hcm91bmRde2p1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQgIWltcG9ydGFudH0uaW9uLWp1c3RpZnktY29udGVudC1iZXR3ZWVuLFtqdXN0aWZ5LWNvbnRlbnQtYmV0d2Vlbl17anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW4gIWltcG9ydGFudH0uaW9uLWp1c3RpZnktY29udGVudC1ldmVubHksW2p1c3RpZnktY29udGVudC1ldmVubHlde2p1c3RpZnktY29udGVudDpzcGFjZS1ldmVubHkgIWltcG9ydGFudH0uaW9uLWFsaWduLWl0ZW1zLXN0YXJ0LFthbGlnbi1pdGVtcy1zdGFydF17YWxpZ24taXRlbXM6ZmxleC1zdGFydCAhaW1wb3J0YW50fS5pb24tYWxpZ24taXRlbXMtY2VudGVyLFthbGlnbi1pdGVtcy1jZW50ZXJde2FsaWduLWl0ZW1zOmNlbnRlciAhaW1wb3J0YW50fS5pb24tYWxpZ24taXRlbXMtZW5kLFthbGlnbi1pdGVtcy1lbmRde2FsaWduLWl0ZW1zOmZsZXgtZW5kICFpbXBvcnRhbnR9Lmlvbi1hbGlnbi1pdGVtcy1zdHJldGNoLFthbGlnbi1pdGVtcy1zdHJldGNoXXthbGlnbi1pdGVtczpzdHJldGNoICFpbXBvcnRhbnR9Lmlvbi1hbGlnbi1pdGVtcy1iYXNlbGluZSxbYWxpZ24taXRlbXMtYmFzZWxpbmVde2FsaWduLWl0ZW1zOmJhc2VsaW5lICFpbXBvcnRhbnR9XG4iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/theme/variables.scss":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/theme/variables.scss ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/** Ionic CSS Variables **/\n:root {\n  /** primary **/\n  --ion-color-primary: #3880ff;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3171e0;\n  --ion-color-primary-tint: #4c8dff;\n  /** secondary **/\n  --ion-color-secondary: #0cd1e8;\n  --ion-color-secondary-rgb: 12, 209, 232;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #0bb8cc;\n  --ion-color-secondary-tint: #24d6ea;\n  /** tertiary **/\n  --ion-color-tertiary: #7044ff;\n  --ion-color-tertiary-rgb: 112, 68, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #633ce0;\n  --ion-color-tertiary-tint: #7e57ff;\n  /** success **/\n  --ion-color-success: #10dc60;\n  --ion-color-success-rgb: 16, 220, 96;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #0ec254;\n  --ion-color-success-tint: #28e070;\n  /** warning **/\n  --ion-color-warning: #ffce00;\n  --ion-color-warning-rgb: 255, 206, 0;\n  --ion-color-warning-contrast: #ffffff;\n  --ion-color-warning-contrast-rgb: 255, 255, 255;\n  --ion-color-warning-shade: #e0b500;\n  --ion-color-warning-tint: #ffd31a;\n  /** danger **/\n  --ion-color-danger: #f04141;\n  --ion-color-danger-rgb: 245, 61, 61;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #d33939;\n  --ion-color-danger-tint: #f25454;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 34, 34;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #989aa2;\n  --ion-color-medium-rgb: 152, 154, 162;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #86888f;\n  --ion-color-medium-tint: #a2a4ab;\n  /** light **/\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244, 244, 244;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9; }\nion-label div span:first-child {\n  font-weight: bold; }\n.line-break {\n  overflow: inherit;\n  text-overflow: inherit;\n  white-space: normal; }\n.success {\n  background: #45B6AF;\n  padding: 5px 5px;\n  color: #fff; }\n.warning {\n  background: #dfba49;\n  padding: 5px 5px;\n  color: #fff; }\n.danger {\n  background: #F3565D;\n  padding: 5px 5px;\n  color: #fff; }\n.default {\n  background: #c6c6c6;\n  padding: 5px 5px;\n  color: #fff; }\nion-toolbar {\n  color: white;\n  --background: #c49d6b; }\nion-toolbar.header-menu {\n  color: #a07905;\n  --background: url('/assets/img/bg_menu.png') no-repeat;\n  background-size: 100%;\n  height: 120px; }\n.header-menu .avatar {\n  border-radius: 39px;\n  overflow: hidden;\n  width: 65px;\n  height: 65px;\n  margin: auto;\n  box-shadow: 1px 1px 6px 1px #cacaca; }\n.header-menu .fullname {\n  text-align: center;\n  padding: 5px;\n  color: #fff; }\n.header-menu .organizationUnit {\n  text-align: center;\n  color: #fff;\n  font-style: italic;\n  font-size: 14px; }\nion-tab-bar {\n  --background: #f9f9f9 ; }\nion-label {\n  color: #757575; }\nion-icon {\n  color: #a0a0a0; }\nion-tab-button:active ion-icon, ion-tab-button:active ion-label {\n  color: #c49d6b; }\nion-toolbar ion-icon, ion-toolbar ion-menu-button {\n  color: white; }\n.tab-selected .hydrated {\n  color: #c49d6b; }\nion-list ion-item.item-lines-none {\n  margin: 10px;\n  box-shadow: 0px 1px 3px 1px #d4d4d4;\n  border-radius: 3px; }\nion-tab-bar.header {\n  background: #fff;\n  --background: #fff;\n  border-bottom: 1px solid #ccc; }\nion-tab-bar.header .tab-selected {\n  border-bottom: 1px solid #c49d6b; }\n.header-md:after {\n  background-image: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9EOlxcQ1ZcXFRpbmhWYW5cXFZpY2VtXFxBcHBcXFZpY2VtTW9iaWxlQXBwL3NyY1xcdGhlbWVcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLDBCQUFBO0FBQ0E7RUFDRSxjQUFBO0VBQ0EsNEJBQW9CO0VBQ3BCLHFDQUF3QjtFQUN4QixxQ0FBNkI7RUFDN0IsK0NBQWlDO0VBQ2pDLGtDQUEwQjtFQUMxQixpQ0FBeUI7RUFFekIsZ0JBQUE7RUFDQSw4QkFBc0I7RUFDdEIsdUNBQTBCO0VBQzFCLHVDQUErQjtFQUMvQixpREFBbUM7RUFDbkMsb0NBQTRCO0VBQzVCLG1DQUEyQjtFQUUzQixlQUFBO0VBQ0EsNkJBQXFCO0VBQ3JCLHNDQUF5QjtFQUN6QixzQ0FBOEI7RUFDOUIsZ0RBQWtDO0VBQ2xDLG1DQUEyQjtFQUMzQixrQ0FBMEI7RUFFMUIsY0FBQTtFQUNBLDRCQUFvQjtFQUNwQixvQ0FBd0I7RUFDeEIscUNBQTZCO0VBQzdCLCtDQUFpQztFQUNqQyxrQ0FBMEI7RUFDMUIsaUNBQXlCO0VBRXpCLGNBQUE7RUFDQSw0QkFBb0I7RUFDcEIsb0NBQXdCO0VBQ3hCLHFDQUE2QjtFQUM3QiwrQ0FBaUM7RUFDakMsa0NBQTBCO0VBQzFCLGlDQUF5QjtFQUV6QixhQUFBO0VBQ0EsMkJBQW1CO0VBQ25CLG1DQUF1QjtFQUN2QixvQ0FBNEI7RUFDNUIsOENBQWdDO0VBQ2hDLGlDQUF5QjtFQUN6QixnQ0FBd0I7RUFFeEIsV0FBQTtFQUNBLHlCQUFpQjtFQUNqQixnQ0FBcUI7RUFDckIsa0NBQTBCO0VBQzFCLDRDQUE4QjtFQUM5QiwrQkFBdUI7RUFDdkIsOEJBQXNCO0VBRXRCLGFBQUE7RUFDQSwyQkFBbUI7RUFDbkIscUNBQXVCO0VBQ3ZCLG9DQUE0QjtFQUM1Qiw4Q0FBZ0M7RUFDaEMsaUNBQXlCO0VBQ3pCLGdDQUF3QjtFQUV4QixZQUFBO0VBQ0EsMEJBQWtCO0VBQ2xCLG9DQUFzQjtFQUN0QixtQ0FBMkI7RUFDM0IsdUNBQStCO0VBQy9CLGdDQUF3QjtFQUN4QiwrQkFBdUIsRUFBQTtBQVd6QjtFQUNFLGlCQUFpQixFQUFBO0FBRW5CO0VBQ0UsaUJBQWtCO0VBQ2xCLHNCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTtBQUVyQjtFQUNJLG1CQUFtQjtFQUNuQixnQkFBZTtFQUNmLFdBQVcsRUFBQTtBQUVmO0VBQ0UsbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2YsV0FBVyxFQUFBO0FBRWI7RUFDRSxtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixXQUFXLEVBQUE7QUFFYjtFQUNFLG1CQUFrQjtFQUNsQixnQkFBZTtFQUNmLFdBQVcsRUFBQTtBQUdiO0VBQ0UsWUFBVztFQUNYLHFCQUFhLEVBQUE7QUFFZjtFQUNFLGNBQWM7RUFDZCxzREFBYTtFQUNiLHFCQUFxQjtFQUNyQixhQUFhLEVBQUE7QUFFZjtFQUNFLG1CQUFtQjtFQUNqQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osbUNBQW1DLEVBQUE7QUFFdkM7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVcsRUFBQTtBQUViO0VBQ0Usa0JBQWtCO0VBQ2hCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZSxFQUFBO0FBRW5CO0VBQ0Usc0JBQWEsRUFBQTtBQUVmO0VBQ0UsY0FBYSxFQUFBO0FBRWY7RUFDRSxjQUFhLEVBQUE7QUFFZjtFQUNFLGNBQWEsRUFBQTtBQUVmO0VBQ0UsWUFBVyxFQUFBO0FBR2I7RUFDRSxjQUFhLEVBQUE7QUFFZjtFQUNFLFlBQVk7RUFDWixtQ0FBbUM7RUFDbkMsa0JBQWtCLEVBQUE7QUFJcEI7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWE7RUFDYiw2QkFDRixFQUFBO0FBQ0E7RUFDRSxnQ0FDRixFQUFBO0FBQ0E7RUFDRSxzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvdGhlbWUvdmFyaWFibGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJb25pYyBWYXJpYWJsZXMgYW5kIFRoZW1pbmcuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWU6XHJcbi8vIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy90aGVtaW5nL1xyXG5cclxuLyoqIElvbmljIENTUyBWYXJpYWJsZXMgKiovXHJcbjpyb290IHtcclxuICAvKiogcHJpbWFyeSAqKi9cclxuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjMzg4MGZmO1xyXG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiA1NiwgMTI4LCAyNTU7XHJcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogI2ZmZmZmZjtcclxuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcclxuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjMzE3MWUwO1xyXG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogIzRjOGRmZjtcclxuXHJcbiAgLyoqIHNlY29uZGFyeSAqKi9cclxuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICMwY2QxZTg7XHJcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogMTIsIDIwOSwgMjMyO1xyXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogI2ZmZmZmZjtcclxuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xyXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzBiYjhjYztcclxuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzI0ZDZlYTtcclxuXHJcbiAgLyoqIHRlcnRpYXJ5ICoqL1xyXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNzA0NGZmO1xyXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogMTEyLCA2OCwgMjU1O1xyXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xyXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcclxuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogIzYzM2NlMDtcclxuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjN2U1N2ZmO1xyXG5cclxuICAvKiogc3VjY2VzcyAqKi9cclxuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMTBkYzYwO1xyXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiAxNiwgMjIwLCA5NjtcclxuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0OiAjZmZmZmZmO1xyXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xyXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMwZWMyNTQ7XHJcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjMjhlMDcwO1xyXG5cclxuICAvKiogd2FybmluZyAqKi9cclxuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZjZTAwO1xyXG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsIDIwNiwgMDtcclxuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjZmZmZmZmO1xyXG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xyXG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGI1MDA7XHJcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZkMzFhO1xyXG5cclxuICAvKiogZGFuZ2VyICoqL1xyXG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2YwNDE0MTtcclxuICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyNDUsIDYxLCA2MTtcclxuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XHJcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcclxuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNkMzM5Mzk7XHJcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNmMjU0NTQ7XHJcblxyXG4gIC8qKiBkYXJrICoqL1xyXG4gIC0taW9uLWNvbG9yLWRhcms6ICMyMjI0Mjg7XHJcbiAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDM0LCAzNCwgMzQ7XHJcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogI2ZmZmZmZjtcclxuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcclxuICAtLWlvbi1jb2xvci1kYXJrLXNoYWRlOiAjMWUyMDIzO1xyXG4gIC0taW9uLWNvbG9yLWRhcmstdGludDogIzM4M2EzZTtcclxuXHJcbiAgLyoqIG1lZGl1bSAqKi9cclxuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5ODlhYTI7XHJcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTUyLCAxNTQsIDE2MjtcclxuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3Q6ICNmZmZmZmY7XHJcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcclxuICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4Njg4OGY7XHJcbiAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICNhMmE0YWI7XHJcblxyXG4gIC8qKiBsaWdodCAqKi9cclxuICAtLWlvbi1jb2xvci1saWdodDogI2Y0ZjVmODtcclxuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDI0NCwgMjQ0LCAyNDQ7XHJcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICMwMDAwMDA7XHJcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xyXG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjZDdkOGRhO1xyXG4gIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICNmNWY2Zjk7XHJcbn1cclxuJGNvbG9yczogKFxyXG4gIHByaW1hcnk6ICAgICMzODdlZjUsXHJcbiAgc2Vjb25kYXJ5OiAgIzAxOWEzZCxcclxuICBkYW5nZXI6ICAgICAjMDUwNTA1LFxyXG4gIGxpZ2h0OiAgICAgICNmNGY0ZjQsXHJcbiAgZGFyazogICAgICAgIzIyMixcclxuICB2aWJyYW50OiAgICByZWJlY2NhcHVycGxlLFxyXG4gIGJyaWdodDogICAgICNmZmMxMjVcclxuKTtcclxuaW9uLWxhYmVsIGRpdiBzcGFuOmZpcnN0LWNoaWxke1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5saW5lLWJyZWFre1xyXG4gIG92ZXJmbG93OiBpbmhlcml0IDtcclxuICB0ZXh0LW92ZXJmbG93OiBpbmhlcml0IDtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG59XHJcbi5zdWNjZXNze1xyXG4gICAgYmFja2dyb3VuZDogIzQ1QjZBRjtcclxuICAgIHBhZGRpbmc6NXB4IDVweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi53YXJuaW5ne1xyXG4gIGJhY2tncm91bmQ6I2RmYmE0OTtcclxuICBwYWRkaW5nOjVweCA1cHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmRhbmdlcntcclxuICBiYWNrZ3JvdW5kOiNGMzU2NUQ7XHJcbiAgcGFkZGluZzo1cHggNXB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5kZWZhdWx0e1xyXG4gIGJhY2tncm91bmQ6I2M2YzZjNjtcclxuICBwYWRkaW5nOjVweCA1cHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbmlvbi10b29sYmFye1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIC0tYmFja2dyb3VuZDogI2M0OWQ2YjtcclxufVxyXG5pb24tdG9vbGJhci5oZWFkZXItbWVudSB7XHJcbiAgY29sb3I6ICNhMDc5MDU7XHJcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL2JnX21lbnUucG5nJykgbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG59XHJcbi5oZWFkZXItbWVudSAuYXZhdGFye1xyXG4gIGJvcmRlci1yYWRpdXM6IDM5cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDY1cHg7XHJcbiAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDZweCAxcHggI2NhY2FjYTs7XHJcbn1cclxuLmhlYWRlci1tZW51IC5mdWxsbmFtZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5oZWFkZXItbWVudSAub3JnYW5pemF0aW9uVW5pdHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5pb24tdGFiLWJhcntcclxuICAtLWJhY2tncm91bmQ6ICNmOWY5ZjkgO1xyXG59XHJcbmlvbi1sYWJlbHtcclxuICBjb2xvcjojNzU3NTc1O1xyXG59XHJcbmlvbi1pY29ue1xyXG4gIGNvbG9yOiNhMGEwYTA7XHJcbn1cclxuaW9uLXRhYi1idXR0b246YWN0aXZlIGlvbi1pY29uLGlvbi10YWItYnV0dG9uOmFjdGl2ZSBpb24tbGFiZWx7XHJcbiAgY29sb3I6I2M0OWQ2YjtcclxufVxyXG5pb24tdG9vbGJhciBpb24taWNvbiwgaW9uLXRvb2xiYXIgaW9uLW1lbnUtYnV0dG9ue1xyXG4gIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG4udGFiLXNlbGVjdGVkIC5oeWRyYXRlZHtcclxuICBjb2xvcjojYzQ5ZDZiO1xyXG59XHJcbmlvbi1saXN0IGlvbi1pdGVtLml0ZW0tbGluZXMtbm9uZSB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IDFweCAjZDRkNGQ0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAvLyBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xyXG59XHJcblxyXG5pb24tdGFiLWJhci5oZWFkZXJ7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAtLWJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2NcclxufVxyXG5pb24tdGFiLWJhci5oZWFkZXIgLnRhYi1zZWxlY3RlZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjNDlkNmJcclxufVxyXG4uaGVhZGVyLW1kOmFmdGVye1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbn1cclxuIl19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/global.scss":
/*!*************************!*\
  !*** ./src/global.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--14-3!./global.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/global.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/theme/variables.scss":
/*!**********************************!*\
  !*** ./src/theme/variables.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../node_modules/postcss-loader/src??embedded!../../node_modules/sass-loader/lib/loader.js??ref--14-3!./variables.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/theme/variables.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 3:
/*!**********************************************************!*\
  !*** multi ./src/theme/variables.scss ./src/global.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\CV\TinhVan\Vicem\App\VicemMobileApp\src\theme\variables.scss */"./src/theme/variables.scss");
module.exports = __webpack_require__(/*! D:\CV\TinhVan\Vicem\App\VicemMobileApp\src\global.scss */"./src/global.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map