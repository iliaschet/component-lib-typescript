var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from "react";
function SvgArrowDown(props) {
    return (React.createElement("svg", __assign({ width: 24, height: 24, xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M11 21.883l-6.235-7.527L4 15l7.521 9L19 15l-.764-.645L12 21.884V0h-1v21.883z" })));
}
export default SvgArrowDown;
