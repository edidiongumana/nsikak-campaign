webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CampaignFeat.jsx":
/*!*************************************!*\
  !*** ./components/CampaignFeat.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CampaignFeat; });
/* harmony import */ var C_Users_user_Desktop_skyeproject_eddy_campaign_next_dev_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_user_Desktop_skyeproject_eddy_campaign_next_dev_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _SectionWrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SectionWrap */ "./components/SectionWrap.jsx");




var _jsxFileName = "C:\\Users\\user\\Desktop\\skyeproject\\eddy-campaign-next-dev\\components\\CampaignFeat.jsx",
    _this = undefined,
    _s = $RefreshSig$();



var cardContent = [{
  title: "Community Care.",
  content: "The impact of a community centered agenda will be felt by every citizen"
}, {
  title: "Inclusive Governance.",
  content: "As a sailor cannot abandon his crew, Nsiskak's agenda takes every citizen into account"
}, {
  title: "Create a Constituency we love.",
  content: "The outcome of your collective contribution will shape the constituency into one we desired"
}];
var icons = ["/icons/care.svg", "/icons/place.svg", "/icons/teamwork.svg"];

var FeatureCard = function FeatureCard(_ref) {
  var isLargerThan600 = _ref.isLargerThan600,
      isLargerThan914 = _ref.isLargerThan914,
      title = _ref.title,
      content = _ref.content,
      image = _ref.image,
      delay = _ref.delay;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    id: "campaign-feature-card",
    p: 1,
    justifyContent: "center",
    alignItems: "center",
    my: 5,
    "data-aos": "flip-down",
    "data-aos-delay": delay,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      minWidth: "90px",
      maxW: "90px",
      height: "90px",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
      backgroundColor: "#f9f9f9",
      boxShadow: "-5px -5px 15px #ef272724, 5px 5px 15px #6cd46a38",
      mb: isLargerThan600 ? "20px" : 0,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Image"], {
        src: image,
        width: "60%"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      ml: isLargerThan914 ? "25px" : isLargerThan600 ? 0 : "25px",
      width: isLargerThan600 ? "100%" : "70%",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Text"], {
        id: "campaign-feature-card-title",
        color: "blue.500",
        fontWeight: "bold",
        className: "qfont",
        fontSize: "20px",
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Text"], {
        className: "qfont",
        fontSize: "15px",
        children: content
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, _this);
};

_c = FeatureCard;
function CampaignFeat() {
  _s();

  var _jsxDEV2,
      _jsxDEV3,
      _this2 = this;

  var _useMediaQuery = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["useMediaQuery"])("(min-width: 914px)"),
      _useMediaQuery2 = Object(C_Users_user_Desktop_skyeproject_eddy_campaign_next_dev_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMediaQuery, 1),
      isLargerThan914 = _useMediaQuery2[0];

  var _useMediaQuery3 = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["useMediaQuery"])("(min-width: 601px"),
      _useMediaQuery4 = Object(C_Users_user_Desktop_skyeproject_eddy_campaign_next_dev_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMediaQuery3, 1),
      isLargerThan600 = _useMediaQuery4[0]; // const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_SectionWrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
      justifyContent: "center",
      height: "100px",
      alignItems: "center",
      bg: "#4844440a",
      mb: 2,
      py: 2,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Text"], (_jsxDEV2 = {
        color: "white",
        px: 1,
        width: "fit-content"
      }, Object(C_Users_user_Desktop_skyeproject_eddy_campaign_next_dev_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsxDEV2, "color", "green.500"), Object(C_Users_user_Desktop_skyeproject_eddy_campaign_next_dev_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsxDEV2, "fontSize", "26px"), Object(C_Users_user_Desktop_skyeproject_eddy_campaign_next_dev_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsxDEV2, "className", "afont"), Object(C_Users_user_Desktop_skyeproject_eddy_campaign_next_dev_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsxDEV2, "fontWeight", "bold"), Object(C_Users_user_Desktop_skyeproject_eddy_campaign_next_dev_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsxDEV2, "children", "Nsikak"), _jsxDEV2), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Text"], {
        color: "#7a7a7a",
        px: 1,
        width: "fit-content",
        fontSize: "26px",
        className: "afont",
        fontWeight: "bold",
        children: "Abasi"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Text"], (_jsxDEV3 = {
        color: "white",
        px: 1,
        width: "fit-content"
      }, Object(C_Users_user_Desktop_skyeproject_eddy_campaign_next_dev_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsxDEV3, "color", "red.500"), Object(C_Users_user_Desktop_skyeproject_eddy_campaign_next_dev_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsxDEV3, "fontSize", "26px"), Object(C_Users_user_Desktop_skyeproject_eddy_campaign_next_dev_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsxDEV3, "className", "afont"), Object(C_Users_user_Desktop_skyeproject_eddy_campaign_next_dev_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsxDEV3, "fontWeight", "bold"), Object(C_Users_user_Desktop_skyeproject_eddy_campaign_next_dev_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsxDEV3, "children", "2023"), _jsxDEV3), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
      id: "campaign-feature-container",
      alignItems: "center",
      padding: "2rem",
      children: cardContent.map(function (c, i) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(FeatureCard, {
          isLargerThan600: isLargerThan600,
          isLargerThan914: isLargerThan914,
          title: c.title,
          content: c.content,
          image: icons[i],
          delay: i == 0 ? '0' : i == 1 ? '300' : 500
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 13
        }, _this2);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 5
  }, this);
}

_s(CampaignFeat, "8UADzhNfmgzLh3s5dX1478RtRwE=", false, function () {
  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["useMediaQuery"], _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["useMediaQuery"]];
});

_c2 = CampaignFeat;

var _c, _c2;

$RefreshReg$(_c, "FeatureCard");
$RefreshReg$(_c2, "CampaignFeat");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYW1wYWlnbkZlYXQuanN4Il0sIm5hbWVzIjpbImNhcmRDb250ZW50IiwidGl0bGUiLCJjb250ZW50IiwiaWNvbnMiLCJGZWF0dXJlQ2FyZCIsImlzTGFyZ2VyVGhhbjYwMCIsImlzTGFyZ2VyVGhhbjkxNCIsImltYWdlIiwiZGVsYXkiLCJDYW1wYWlnbkZlYXQiLCJ1c2VNZWRpYVF1ZXJ5IiwibWFwIiwiYyIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFTQTtBQUVBLElBQU1BLFdBQVcsR0FBRyxDQUNsQjtBQUNFQyxPQUFLLEVBQUUsaUJBRFQ7QUFFRUMsU0FBTyxFQUNMO0FBSEosQ0FEa0IsRUFNbEI7QUFDRUQsT0FBSyxFQUFFLHVCQURUO0FBRUVDLFNBQU8sRUFDTDtBQUhKLENBTmtCLEVBV2xCO0FBQ0VELE9BQUssRUFBRSxnQ0FEVDtBQUVFQyxTQUFPLEVBQ0w7QUFISixDQVhrQixDQUFwQjtBQWlCQSxJQUFNQyxLQUFLLEdBQUcsQ0FBQyxpQkFBRCxFQUFvQixrQkFBcEIsRUFBd0MscUJBQXhDLENBQWQ7O0FBRUEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FPZDtBQUFBLE1BTkpDLGVBTUksUUFOSkEsZUFNSTtBQUFBLE1BTEpDLGVBS0ksUUFMSkEsZUFLSTtBQUFBLE1BSkpMLEtBSUksUUFKSkEsS0FJSTtBQUFBLE1BSEpDLE9BR0ksUUFISkEsT0FHSTtBQUFBLE1BRkpLLEtBRUksUUFGSkEsS0FFSTtBQUFBLE1BREpDLEtBQ0ksUUFESkEsS0FDSTtBQUNKLHNCQUNFLHFFQUFDLHFEQUFEO0FBQ0EsTUFBRSxFQUFDLHVCQURIO0FBRUUsS0FBQyxFQUFFLENBRkw7QUFHRSxrQkFBYyxFQUFDLFFBSGpCO0FBSUUsY0FBVSxFQUFDLFFBSmI7QUFLRSxNQUFFLEVBQUUsQ0FMTjtBQU1FLGdCQUFTLFdBTlg7QUFPRSxzQkFBZ0JBLEtBUGxCO0FB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LFdBQVcsQ0FBQ1csR0FBWixDQUFnQixVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUN6Qiw0QkFDRSxxRUFBQyxXQUFEO0FBRUUseUJBQWUsRUFBRVIsZUFGbkI7QUFHRSx5QkFBZSxFQUFFQyxlQUhuQjtBQUlFLGVBQUssRUFBRU0sQ0FBQyxDQUFDWCxLQUpYO0FBS0UsaUJBQU8sRUFBRVcsQ0FBQyxDQUFDVixPQUxiO0FBTUUsZUFBSyxFQUFFQyxLQUFLLENBQUNVLENBQUQsQ0FOZDtBQU9FLGVBQUssRUFBRUEsQ0FBQyxJQUFJLENBQUwsR0FBTyxHQUFQLEdBQVdBLENBQUMsSUFBRSxDQUFILEdBQUssS0FBTCxHQUFZO0FBUGhDLFdBQ0tBLENBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERjtBQVlELE9BYkE7QUFMSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBM0NGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBa0VEOztHQXRFdUJKLFk7VUFDSUMsOEQsRUFDQUEsOEQ7OztNQUZKRCxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmY3MmVkZDFkNDEyNmVmYzllYzRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEJveCxcclxuICBGbGV4LFxyXG4gIFRleHQsXHJcbiAgSW1hZ2UsXHJcbiAgdXNlTWVkaWFRdWVyeSxcclxuICBEaXZpZGVyLFxyXG4gIFN0YWNrLFxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBTZWN0aW9uV3JhcCBmcm9tIFwiLi9TZWN0aW9uV3JhcFwiO1xyXG5cclxuY29uc3QgY2FyZENvbnRlbnQgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiQ29tbXVuaXR5IENhcmUuXCIsXHJcbiAgICBjb250ZW50OlxyXG4gICAgICBcIlRoZSBpbXBhY3Qgb2YgYSBjb21tdW5pdHkgY2VudGVyZWQgYWdlbmRhIHdpbGwgYmUgZmVsdCBieSBldmVyeSBjaXRpemVuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJJbmNsdXNpdmUgR292ZXJuYW5jZS5cIixcclxuICAgIGNvbnRlbnQ6XHJcbiAgICAgIFwiQXMgYSBzYWlsb3IgY2Fubm90IGFiYW5kb24gaGlzIGNyZXcsIE5zaXNrYWsncyBhZ2VuZGEgdGFrZXMgZXZlcnkgY2l0aXplbiBpbnRvIGFjY291bnRcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkNyZWF0ZSBhIENvbnN0aXR1ZW5jeSB3ZSBsb3ZlLlwiLFxyXG4gICAgY29udGVudDpcclxuICAgICAgXCJUaGUgb3V0Y29tZSBvZiB5b3VyIGNvbGxlY3RpdmUgY29udHJpYnV0aW9uIHdpbGwgc2hhcGUgdGhlIGNvbnN0aXR1ZW5jeSBpbnRvIG9uZSB3ZSBkZXNpcmVkXCIsXHJcbiAgfSxcclxuXTtcclxuY29uc3QgaWNvbnMgPSBbXCIvaWNvbnMvY2FyZS5zdmdcIiwgXCIvaWNvbnMvcGxhY2Uuc3ZnXCIsIFwiL2ljb25zL3RlYW13b3JrLnN2Z1wiXTtcclxuXHJcbmNvbnN0IEZlYXR1cmVDYXJkID0gKHtcclxuICBpc0xhcmdlclRoYW42MDAsXHJcbiAgaXNMYXJnZXJUaGFuOTE0LFxyXG4gIHRpdGxlLFxyXG4gIGNvbnRlbnQsXHJcbiAgaW1hZ2UsXHJcbiAgZGVsYXlcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RmxleFxyXG4gICAgaWQ9J2NhbXBhaWduLWZlYXR1cmUtY2FyZCdcclxuICAgICAgcD17MX1cclxuICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxyXG4gICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgbXk9ezV9XHJcbiAgICAgIGRhdGEtYW9zPSdmbGlwLWRvd24nXHJcbiAgICAgIGRhdGEtYW9zLWRlbGF5PXtkZWxheX1cclxuICAgID5cclxuICAgICAgPEJveFxyXG4gICAgICAgIG1pbldpZHRoPVwiOTBweFwiXHJcbiAgICAgICAgbWF4Vz1cIjkwcHhcIlxyXG4gICAgICAgIGhlaWdodD1cIjkwcHhcIlxyXG4gICAgICAgIGJvcmRlclJhZGl1cz1cIjUwJVwiXHJcbiAgICAgICAgZGlzcGxheT1cImZsZXhcIlxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcclxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICBvdmVyZmxvdz1cImhpZGRlblwiXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yPVwiI2Y5ZjlmOVwiXHJcbiAgICAgICAgYm94U2hhZG93PVwiLTVweCAtNXB4IDE1cHggI2VmMjcyNzI0LCA1cHggNXB4IDE1cHggIzZjZDQ2YTM4XCJcclxuICAgICAgICBtYj17aXNMYXJnZXJUaGFuNjAwID8gXCIyMHB4XCIgOiAwfVxyXG4gICAgICA+XHJcbiAgICAgICAgPEltYWdlIHNyYz17aW1hZ2V9IHdpZHRoPVwiNjAlXCIgLz5cclxuICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgbWw9e2lzTGFyZ2VyVGhhbjkxNCA/IFwiMjVweFwiIDogaXNMYXJnZXJUaGFuNjAwID8gMCA6IFwiMjVweFwifVxyXG4gICAgICAgIHdpZHRoPXtpc0xhcmdlclRoYW42MDAgPyBcIjEwMCVcIiA6IFwiNzAlXCJ9XHJcbiAgICAgID5cclxuICAgICAgICA8VGV4dFxyXG4gICAgICAgIGlkPSdjYW1wYWlnbi1mZWF0dXJlLWNhcmQtdGl0bGUnXHJcbiAgICAgICAgICBjb2xvcj1cImJsdWUuNTAwXCJcclxuICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInFmb250XCJcclxuICAgICAgICAgIGZvbnRTaXplPVwiMjBweFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgIDwvVGV4dD5cclxuXHJcbiAgICAgICAgPFRleHQgY2xhc3NOYW1lPVwicWZvbnRcIiBmb250U2l6ZT1cIjE1cHhcIj5cclxuICAgICAgICAgIHtjb250ZW50fVxyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0ZsZXg+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhbXBhaWduRmVhdCgpIHtcclxuICBjb25zdCBbaXNMYXJnZXJUaGFuOTE0XSA9IHVzZU1lZGlhUXVlcnkoXCIobWluLXdpZHRoOiA5MTRweClcIik7XHJcbiAgY29uc3QgW2lzTGFyZ2VyVGhhbjYwMF0gPSB1c2VNZWRpYVF1ZXJ5KFwiKG1pbi13aWR0aDogNjAxcHhcIik7XHJcbiAgLy8gY29uc3QgW2lzU21hbGxlclRoYW42MDBdID0gdXNlTWVkaWFRdWVyeShcIihtYXgtd2lkdGg6IDYwMHB4KVwiKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFNlY3Rpb25XcmFwPlxyXG4gICAgICA8RmxleFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcclxuICAgICAgICBoZWlnaHQ9XCIxMDBweFwiXHJcbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgYmc9XCIjNDg0NDQ0MGFcIlxyXG4gICAgICAgIG1iPXsyfVxyXG4gICAgICAgIHB5PXsyfVxyXG4gICAgICA+XHJcbiAgICAgICAgPFRleHRcclxuICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxyXG4gICAgICAgICAgcHg9ezF9XHJcbiAgICAgICAgICB3aWR0aD1cImZpdC1jb250ZW50XCJcclxuICAgICAgICAgIGNvbG9yPVwiZ3JlZW4uNTAwXCJcclxuICAgICAgICAgIGZvbnRTaXplPVwiMjZweFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJhZm9udFwiXHJcbiAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgTnNpa2FrXHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDxUZXh0XHJcbiAgICAgICAgICBjb2xvcj1cIiM3YTdhN2FcIlxyXG4gICAgICAgICAgcHg9ezF9XHJcbiAgICAgICAgICB3aWR0aD1cImZpdC1jb250ZW50XCJcclxuICAgICAgICAgIGZvbnRTaXplPVwiMjZweFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJhZm9udFwiXHJcbiAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQWJhc2lcclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgPFRleHRcclxuICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxyXG4gICAgICAgICAgcHg9ezF9XHJcbiAgICAgICAgICB3aWR0aD1cImZpdC1jb250ZW50XCJcclxuICAgICAgICAgIGNvbG9yPVwicmVkLjUwMFwiXHJcbiAgICAgICAgICBmb250U2l6ZT1cIjI2cHhcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWZvbnRcIlxyXG4gICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDIwMjNcclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgIDwvRmxleD5cclxuXHJcbiAgICAgIDxGbGV4XHJcbiAgICAgIGlkPSdjYW1wYWlnbi1mZWF0dXJlLWNvbnRhaW5lcidcclxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICBwYWRkaW5nPVwiMnJlbVwiXHJcbiAgICAgID5cclxuICAgICAgICB7Y2FyZENvbnRlbnQubWFwKChjLCBpKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8RmVhdHVyZUNhcmRcclxuICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgIGlzTGFyZ2VyVGhhbjYwMD17aXNMYXJnZXJUaGFuNjAwfVxyXG4gICAgICAgICAgICAgIGlzTGFyZ2VyVGhhbjkxND17aXNMYXJnZXJUaGFuOTE0fVxyXG4gICAgICAgICAgICAgIHRpdGxlPXtjLnRpdGxlfVxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ9e2MuY29udGVudH1cclxuICAgICAgICAgICAgICBpbWFnZT17aWNvbnNbaV19XHJcbiAgICAgICAgICAgICAgZGVsYXk9e2kgPT0gMD8nMCc6aT09MT8nMzAwJzogNTAwfVxyXG5cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvRmxleD5cclxuICAgIDwvU2VjdGlvbldyYXA+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9