"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTheme = void 0;
var react_1 = require("react");
var ThemeContextTypes_1 = require("./ThemeContextTypes");
var useTheme = function () {
    var context = (0, react_1.useContext)(ThemeContextTypes_1.ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
exports.useTheme = useTheme;
