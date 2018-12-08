var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core", "@ionic-native/core"], function (require, exports, core_1, core_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @name Call Number
     * @description
     * Call a number directly from your Cordova/Ionic application.
     * **NOTE**: The iOS Simulator (and maybe Android Simulators) do not provide access to the phone subsystem.
     *
     * @usage
     * ```typescript
     * import { CallNumber } from '@ionic-native/call-number';
     *
     * constructor(private callNumber: CallNumber) { }
     *
     * ...
     *
     *
     * this.callNumber.callNumber("18001010101", true)
     *   .then(res => console.log('Launched dialer!', res))
     *   .catch(err => console.log('Error launching dialer', err));
     *
     * ```
     */
    var CallNumber = /** @class */ (function (_super) {
        __extends(CallNumber, _super);
        function CallNumber() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Calls a phone number
         * @param {string} numberToCall The phone number to call as a string
         * @param {boolean} bypassAppChooser Set to true to bypass the app chooser and go directly to dialer
         * @return {Promise<any>}
         */
        CallNumber.prototype.callNumber = function (numberToCall, bypassAppChooser) {
            return;
        };
        /**
         * Check if call feature is available
         * @return {Promise<any>}
         */
        CallNumber.prototype.isCallSupported = function () {
            return;
        };
        __decorate([
            core_2.Cordova({
                callbackOrder: 'reverse'
            })
        ], CallNumber.prototype, "callNumber", null);
        __decorate([
            core_2.Cordova()
        ], CallNumber.prototype, "isCallSupported", null);
        CallNumber = __decorate([
            core_2.Plugin({
                pluginName: 'AKCallNumber',
                plugin: '@and_roux/call-number-modified',
                pluginRef: 'AKCallNumber',
                repo: 'https://github.com/Andrewpk/CordovaCallNumberPlugin',
                platforms: ['Android', 'iOS']
            }),
            core_1.Injectable()
        ], CallNumber);
        return CallNumber;
    }(core_2.IonicNativePlugin));
    exports.CallNumber = CallNumber;
});
