"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
/**
 * ScrollToTop component scrolls to the top of the page whenever the route changes
 * Place this component near the root of your app, inside the Router but outside of Routes
 * Memoized to prevent unnecessary re-renders
 */
var ScrollToTop = function () {
    var pathname = (0, react_router_dom_1.useLocation)().pathname;
    (0, react_1.useEffect)(function () {
        // Scroll to top when pathname changes - using instant scroll to avoid flickering
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    }, [pathname]);
    return null;
};
// Memoize component as it never needs to re-render based on props
exports.default = (0, react_1.memo)(ScrollToTop);
