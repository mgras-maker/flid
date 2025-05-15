"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var fontLoader_1 = require("../../utils/fontLoader");
/**
 * Component to preload essential resources on application start
 */
var ResourcePreloader = function () {
    (0, react_1.useEffect)(function () {
        // Images that need preloading - these are causing warnings in the console
        var imagesToPreload = [
            '/projects/lotnisko-wiec.jpg',
            '/projects/eco-packaging.jpg',
            '/projects/energia-jutra.jpg'
        ];
        // Create a promise for each image load
        var imagePromises = imagesToPreload.map(function (src) {
            return new Promise(function (resolve, reject) {
                var img = new Image();
                img.onload = function () {
                    console.log("\u2713 Image loaded: ".concat(src));
                    resolve(src);
                };
                img.onerror = function () {
                    console.error("\u2717 Failed to load image: ".concat(src));
                    reject(src);
                };
                img.src = src;
            });
        });
        // Preload fonts using our utility
        var fontPromise = (0, fontLoader_1.preloadFonts)()
            .then(function () { return console.log('✓ Fonts preloaded via fontLoader'); })
            .catch(function (err) { return console.error('✗ Error preloading fonts:', err); });
        // Load all resources
        Promise.all(__spreadArray([
            fontPromise
        ], imagePromises, true))
            .then(function () { return console.log('✓ All critical resources preloaded successfully'); })
            .catch(function (err) { return console.error('✗ Some resources failed to preload', err); });
    }, []);
    // This component doesn't render anything
    return null;
};
exports.default = ResourcePreloader;
