webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ProjectGallery.jsx":
/*!***************************************!*\
  !*** ./components/ProjectGallery.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectGallery; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_user_Desktop_skyeproject_eddy_campaign_next_dev_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/layout */ "./node_modules/@chakra-ui/layout/dist/esm/index.js");




var _jsxFileName = "C:\\Users\\user\\Desktop\\skyeproject\\eddy-campaign-next-dev\\components\\ProjectGallery.jsx",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();




var agenda = [{
  title: "Education",
  body: "Education builds a nation, therefore its imperative to improve this sector",
  icon: '/icons/edu.svg',
  ref: 'education'
}, {
  title: "Poverty Alleviation",
  body: "Youth empowerment and encouragement to imbibe entrepreneural skills will be emphasized",
  icon: '/icons/rich.svg',
  ref: 'povertyAlleviation'
}, {
  title: "Electricity",
  body: "Many business run on Electricity, solving the problem of power failures will increase profit",
  icon: '/icons/lightning.svg',
  ref: 'electricity'
}, {
  title: "Women Participation",
  body: "Women will be offerred a platform to air their personal views on policies directly affecting them",
  icon: '/icons/woman.svg',
  ref: 'womenParticipation'
}, {
  title: "Communal Health",
  body: "Cheap and affordable healthcare services will be invested in and made available to every member of the constituency",
  icon: '/icons/healthcare.svg',
  ref: 'communalHealth'
}, {
  title: "Youth Involvement",
  body: "It is the goal of this government to bring politics closer to the youths, our futures leaders",
  icon: '/icons/youth.svg',
  ref: 'youthInvolvement'
}];

function Card(_ref) {
  _s();

  var title = _ref.title,
      body = _ref.body,
      icon = _ref.icon,
      anim = _ref.anim,
      reference = _ref.reference;

  var _useMediaQuery = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useMediaQuery"])("(min-width: 914px)"),
      _useMediaQuery2 = Object(C_Users_user_Desktop_skyeproject_eddy_campaign_next_dev_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMediaQuery, 1),
      isLargerThan914 = _useMediaQuery2[0];

  var _useMediaQuery3 = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useMediaQuery"])("(min-width: 601px"),
      _useMediaQuery4 = Object(C_Users_user_Desktop_skyeproject_eddy_campaign_next_dev_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMediaQuery3, 1),
      isLargerThan600 = _useMediaQuery4[0];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: '/manifesto#' + reference,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        as: "a",
        cursor: "pointer",
        "data-aos": anim,
        "data-aos-easing": "ease-in-sine",
        className: "project-cards",
        display: "flex",
        flexDir: "column",
        justifyContent: "center",
        alignItems: "center",
        p: "4rem",
        textAlign: "center",
        boxShadow: "lg",
        height: "370px",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
          minWidth: "100px",
          maxW: "100px",
          height: "100px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          mb: isLargerThan600 ? "20px" : 0,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
            src: icon,
            width: "100%"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          className: "qfont project-card-title",
          fontSize: "1.5rem",
          fontWeight: "light",
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          className: "afont",
          fontSize: "1rem",
          fontWeight: "light",
          children: body
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }, this)
  }, void 0, false);
}

_s(Card, "8UADzhNfmgzLh3s5dX1478RtRwE=", false, function () {
  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useMediaQuery"], _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useMediaQuery"]];
});

_c = Card;
function ProjectGallery() {
  _s2();

  var _useMediaQuery5 = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useMediaQuery"])("(min-width: 914px)"),
      _useMediaQuery6 = Object(C_Users_user_Desktop_skyeproject_eddy_campaign_next_dev_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMediaQuery5, 1),
      isLargerThan914 = _useMediaQuery6[0];

  var _useMediaQuery7 = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useMediaQuery"])("(max-width: 600px)"),
      _useMediaQuery8 = Object(C_Users_user_Desktop_skyeproject_eddy_campaign_next_dev_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMediaQuery7, 1),
      isSmallerThan600 = _useMediaQuery8[0];

  var aboutFlexDir = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useBreakpointValue"])({
    base: "column",
    md: "row"
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    flexDir: "column",
    boxShadow: "lg",
    borderRadius: "0 0 20px 20px",
    pt: "2rem",
    height: "fit-content",
    ml: 0,
    id: "projects-section",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__["Heading"], {
      py: 2,
      px: "1.6rem",
      className: "caption",
      "data-aos": "fade-right",
      "data-aos-easing": "ease-in-sine",
      as: "h2",
      sx: {
        fontFamily: "Quicksand",
        display: "flex"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        mr: 2,
        ml: 2,
        color: "green.500",
        children: "Nsikak's"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        children: " Agenda"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
      alignItems: "center",
      width: "100%",
      flexDir: aboutFlexDir,
      justifyContent: "space-between",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Card, {
        anim: "zoom-in-right",
        title: agenda[0].title,
        body: agenda[0].body,
        icon: agenda[0].icon,
        reference: agenda[0].ref
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Card, {
        anim: "zoom-in-left",
        title: agenda[1].title,
        body: agenda[1].body,
        icon: agenda[1].icon,
        reference: agenda[1].ref
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
      alignItems: "center",
      width: "100%",
      flexDir: aboutFlexDir,
      justifyContent: "space-between",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Card, {
        anim: "zoom-in-right",
        title: agenda[2].title,
        body: agenda[2].body,
        icon: agenda[2].icon,
        reference: agenda[2].ref
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Card, {
        anim: "zoom-in-left",
        title: agenda[3].title,
        body: agenda[3].body,
        icon: agenda[3].icon,
        reference: agenda[3].ref
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
      alignItems: "center",
      width: "100%",
      flexDir: aboutFlexDir,
      justifyContent: "space-between",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Card, {
        anim: "zoom-in-right",
        title: agenda[4].title,
        body: agenda[4].body,
        icon: agenda[4].icon,
        reference: agenda[4].ref
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Card, {
        anim: "zoom-in-left",
        title: agenda[5].title,
        body: agenda[5].body,
        icon: agenda[5].icon,
        reference: agenda[5].ref
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 122,
    columnNumber: 5
  }, this);
}

_s2(ProjectGallery, "q56F3PYSNjoxdR1M1oCwRb/Sjlk=", false, function () {
  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useMediaQuery"], _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useMediaQuery"], _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useBreakpointValue"]];
});

_c2 = ProjectGallery;

var _c, _c2;

$RefreshReg$(_c, "Card");
$RefreshReg$(_c2, "ProjectGallery");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0R2FsbGVyeS5qc3giXSwibmFtZXMiOlsiYWdlbmRhIiwidGl0bGUiLCJib2R5IiwiaWNvbiIsInJlZiIsIkNhcmQiLCJhbmltIiwicmVmZXJlbmNlIiwidXNlTWVkaWFRdWVyeSIsImlzTGFyZ2VyVGhhbjkxNCIsImlzTGFyZ2VyVGhhbjYwMCIsIlByb2plY3RHYWxsZXJ5IiwiaXNTbWFsbGVyVGhhbjYwMCIsImFib3V0RmxleERpciIsInVzZUJyZWFrcG9pbnRWYWx1ZSIsImJhc2UiLCJtZCIsImZvbnRGYW1pbHkiLCJkaXNwbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVVBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUcsQ0FDYjtBQUNFQyxPQUFLLEVBQUUsV0FEVDtBQUVFQyxNQUFJLEVBQ0YsNEVBSEo7QUFJRUMsTUFBSSxFQUFFLGdCQUpSO0FBS0VDLEtBQUcsRUFBQztBQUxOLENBRGEsRUFRYjtBQUNFSCxPQUFLLEVBQUUscUJBRFQ7QUFFRUMsTUFBSSxFQUNGLHdGQUhKO0FBSUVDLE1BQUksRUFBRSxpQkFKUjtBQUtFQyxLQUFHLEVBQUM7QUFMTixDQVJhLEVBZ0JiO0FBQ0VILE9BQUssRUFBRSxhQURUO0FBRUVDLE1BQUksRUFDRiw4RkFISjtBQUlFQyxNQUFJLEVBQUUsc0JBSlI7QUFLRUMsS0FBRyxFQUFDO0FBTE4sQ0FoQmEsRUF3QmI7QUFDRUgsT0FBSyxFQUFFLHFCQURUO0FBRUVDLE1BQUksRUFDRixtR0FISjtBQUlJQyxNQUFJLEVBQUUsa0JBSlY7QUFLSUMsS0FBRyxFQUFDO0FBTFIsQ0F4QmEsRUFpQ2I7QUFDRUgsT0FBSyxFQUFFLGlCQURUO0FBRUVDLE1BQUksRUFDRixxSEFISjtBQUlFQyxNQUFJLEVBQUUsdUJBSlI7QUFLRUMsS0FBRyxFQUFDO0FBTE4sQ0FqQ2EsRUF5Q2I7QUFDRUgsT0FBSyxFQUFFLG1CQURUO0FB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QU8sRUFBRVMsWUFIWDtBQUlFLG9CQUFjLEVBQUMsZUFKakI7QUFBQSw4QkFNRSxxRUFBQyxJQUFEO0FBQ0UsWUFBSSxFQUFDLGVBRFA7QUFFRSxhQUFLLEVBQUViLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVUMsS0FGbkI7QUFHRSxZQUFJLEVBQUVELE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVUUsSUFIbEI7QUFJRSxZQUFJLEVBQUVGLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVUcsSUFKbEI7QUFLRSxpQkFBUyxFQUFFSCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVJO0FBTHZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORixlQWVFLHFFQUFDLElBQUQ7QUFDRSxZQUFJLEVBQUMsY0FEUDtBQUVFLGFBQUssRUFBRUosTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVQyxLQUZuQjtBQUdFLFlBQUksRUFBRUQsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVRSxJQUhsQjtBQUlFLFlBQUksRUFBRUYsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVRyxJQUpsQjtBQUtFLGlCQUFTLEVBQUVILE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVUk7QUFMdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTFFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFHRDs7SUExR3VCTyxjO1VBQ0lILDhELEVBQ0NBLDhELEVBQ05NLG1FOzs7TUFIQ0gsYyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wYjg5ODBhZmMzOWZhOTY1MmNlYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgRmxleCxcclxuICBUZXh0LFxyXG4gIEltYWdlLFxyXG4gIHVzZU1lZGlhUXVlcnksXHJcbiAgRGl2aWRlcixcclxuICB1c2VCcmVha3BvaW50VmFsdWUsXHJcbiAgQmFkZ2UsXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyBIZWFkaW5nIH0gZnJvbSAnQGNoYWtyYS11aS9sYXlvdXQnO1xyXG5cclxuY29uc3QgYWdlbmRhID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiBcIkVkdWNhdGlvblwiLFxyXG4gICAgYm9keTpcclxuICAgICAgXCJFZHVjYXRpb24gYnVpbGRzIGEgbmF0aW9uLCB0aGVyZWZvcmUgaXRzIGltcGVyYXRpdmUgdG8gaW1wcm92ZSB0aGlzIHNlY3RvclwiLFxyXG4gICAgaWNvbjogJy9pY29ucy9lZHUuc3ZnJyxcclxuICAgIHJlZjonZWR1Y2F0aW9uJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiUG92ZXJ0eSBBbGxldmlhdGlvblwiLFxyXG4gICAgYm9keTpcclxuICAgICAgXCJZb3V0aCBlbXBvd2VybWVudCBhbmQgZW5jb3VyYWdlbWVudCB0byBpbWJpYmUgZW50cmVwcmVuZXVyYWwgc2tpbGxzIHdpbGwgYmUgZW1waGFzaXplZFwiLFxyXG4gICAgaWNvbjogJy9pY29ucy9yaWNoLnN2ZycsXHJcbiAgICByZWY6J3BvdmVydHlBbGxldmlhdGlvbidcclxuXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJFbGVjdHJpY2l0eVwiLFxyXG4gICAgYm9keTpcclxuICAgICAgXCJNYW55IGJ1c2luZXNzIHJ1biBvbiBFbGVjdHJpY2l0eSwgc29sdmluZyB0aGUgcHJvYmxlbSBvZiBwb3dlciBmYWlsdXJlcyB3aWxsIGluY3JlYXNlIHByb2ZpdFwiLFxyXG4gICAgaWNvbjogJy9pY29ucy9saWdodG5pbmcuc3ZnJyxcclxuICAgIHJlZjonZWxlY3RyaWNpdHknXHJcblxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiV29tZW4gUGFydGljaXBhdGlvblwiLFxyXG4gICAgYm9keTpcclxuICAgICAgXCJXb21lbiB3aWxsIGJlIG9mZmVycmVkIGEgcGxhdGZvcm0gdG8gYWlyIHRoZWlyIHBlcnNvbmFsIHZpZXdzIG9uIHBvbGljaWVzIGRpcmVjdGx5IGFmZmVjdGluZyB0aGVtXCIsXHJcbiAgICAgIGljb246ICcvaWNvbnMvd29tYW4uc3ZnJyxcclxuICAgICAgcmVmOid3b21lblBhcnRpY2lwYXRpb24nXHJcblxyXG5cclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkNvbW11bmFsIEhlYWx0aFwiLFxyXG4gICAgYm9keTpcclxuICAgICAgXCJDaGVhcCBhbmQgYWZmb3JkYWJsZSBoZWFsdGhjYXJlIHNlcnZpY2VzIHdpbGwgYmUgaW52ZXN0ZWQgaW4gYW5kIG1hZGUgYXZhaWxhYmxlIHRvIGV2ZXJ5IG1lbWJlciBvZiB0aGUgY29uc3RpdHVlbmN5XCIsXHJcbiAgICBpY29uOiAnL2ljb25zL2hlYWx0aGNhcmUuc3ZnJyxcclxuICAgIHJlZjonY29tbXVuYWxIZWFsdGgnXHJcblxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiWW91dGggSW52b2x2ZW1lbnRcIixcclxuICAgIGJvZHk6XHJcbiAgICAgIFwiSXQgaXMgdGhlIGdvYWwgb2YgdGhpcyBnb3Zlcm5tZW50IHRvIGJyaW5nIHBvbGl0aWNzIGNsb3NlciB0byB0aGUgeW91dGhzLCBvdXIgZnV0dXJlcyBsZWFkZXJzXCIsXHJcbiAgICAgIGljb246ICcvaWNvbnMveW91dGguc3ZnJyxcclxuICAgICAgcmVmOid5b3V0aEludm9sdmVtZW50J1xyXG5cclxuICB9LFxyXG5dO1xyXG5mdW5jdGlvbiBDYXJkKHsgdGl0bGUsIGJvZHksIGljb24sIGFuaW0sIHJlZmVyZW5jZSB9KSB7XHJcbiAgY29uc3QgW2lzTGFyZ2VyVGhhbjkxNF0gPSB1c2VNZWRpYVF1ZXJ5KFwiKG1pbi13aWR0aDogOTE0cHgpXCIpO1xyXG4gIGNvbnN0IFtpc0xhcmdlclRoYW42MDBdID0gdXNlTWVkaWFRdWVyeShcIihtaW4td2lkdGg6IDYwMXB4XCIpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPExpbmsgaHJlZj17Jy9tYW5pZmVzdG8jJytyZWZlcmVuY2V9PlxyXG5cclxuICAgICAgPEJveCBhcz0nYSdcclxuICAgICAgY3Vyc29yPSdwb2ludGVyJ1xyXG4gICAgICAgIGRhdGEtYW9zPXthbmltfVxyXG4gICAgICAgIGRhdGEtYW9zLWVhc2luZz1cImVhc2UtaW4tc2luZVwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwicHJvamVjdC1jYXJkc1wiXHJcbiAgICAgICAgZGlzcGxheT1cImZsZXhcIlxyXG4gICAgICAgIGZsZXhEaXI9XCJjb2x1bW5cIlxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcclxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICBwPVwiNHJlbVwiXHJcbiAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICBib3hTaGFkb3c9XCJsZ1wiXHJcbiAgICAgICAgaGVpZ2h0PVwiMzcwcHhcIlxyXG4gICAgICA+XHJcbiAgICAgICAgICAgICAgPEJveFxyXG4gICAgICAgIG1pbldpZHRoPVwiMTAwcHhcIlxyXG4gICAgICAgIG1heFc9XCIxMDBweFwiXHJcbiAgICAgICAgaGVpZ2h0PVwiMTAwcHhcIlxyXG4gICAgICAgIGJvcmRlclJhZGl1cz1cIjUwJVwiXHJcbiAgICAgICAgZGlzcGxheT1cImZsZXhcIlxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcclxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICBvdmVyZmxvdz1cImhpZGRlblwiXHJcbiAgICAgICAgbWI9e2lzTGFyZ2VyVGhhbjYwMCA/IFwiMjBweFwiIDogMH1cclxuICAgICAgPlxyXG4gICAgICAgIDxJbWFnZSBzcmM9e2ljb259IHdpZHRoPVwiMTAwJVwiIC8+XHJcbiAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicWZvbnQgcHJvamVjdC1jYXJkLXRpdGxlXCJcclxuICAgICAgICAgIGZvbnRTaXplPVwiMS41cmVtXCJcclxuICAgICAgICAgIGZvbnRXZWlnaHQ9XCJsaWdodFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJhZm9udFwiIGZvbnRTaXplPVwiMXJlbVwiIGZvbnRXZWlnaHQ9XCJsaWdodFwiPlxyXG4gICAgICAgICAge2JvZHl9XHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPC9MaW5rPlxyXG5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RHYWxsZXJ5KCkge1xyXG4gIGNvbnN0IFtpc0xhcmdlclRoYW45MTRdID0gdXNlTWVkaWFRdWVyeShcIihtaW4td2lkdGg6IDkxNHB4KVwiKTtcclxuICBjb25zdCBbaXNTbWFsbGVyVGhhbjYwMF0gPSB1c2VNZWRpYVF1ZXJ5KFwiKG1heC13aWR0aDogNjAwcHgpXCIpO1xyXG4gIGNvbnN0IGFib3V0RmxleERpciA9IHVzZUJyZWFrcG9pbnRWYWx1ZSh7IGJhc2U6IFwiY29sdW1uXCIsIG1kOiBcInJvd1wiIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZsZXhcclxuICAgICAgZmxleERpcj1cImNvbHVtblwiXHJcbiAgICAgIGJveFNoYWRvdz1cImxnXCJcclxuICAgICAgYm9yZGVyUmFkaXVzPVwiMCAwIDIwcHggMjBweFwiXHJcbiAgICAgIHB0PVwiMnJlbVwiXHJcbiAgICAgIGhlaWdodD1cImZpdC1jb250ZW50XCJcclxuICAgICAgbWw9ezB9XHJcbiAgICAgIGlkPVwicHJvamVjdHMtc2VjdGlvblwiXHJcbiAgICA+XHJcbiAgICAgIDxIZWFkaW5nXHJcbiAgICAgIHB5PXsyfVxyXG4gICAgICBweD0nMS42cmVtJ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9J2NhcHRpb24nXHJcbiAgICAgICAgICAgICBkYXRhLWFvcz0nZmFkZS1yaWdodCdcclxuICAgICAgICAgICAgIGRhdGEtYW9zLWVhc2luZz1cImVhc2UtaW4tc2luZVwiXHJcbiAgICAgICAgICAgICAgYXM9XCJoMlwiXHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiUXVpY2tzYW5kXCIsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgPFRleHQgbXI9ezJ9IG1sPXsyfSBjb2xvcj1cImdyZWVuLjUwMFwiPlxyXG4gICAgICAgICAgTnNpa2FrJ3NcclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgPFRleHQ+IEFnZW5kYTwvVGV4dD5cclxuICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG5cclxuICAgICAgPEZsZXhcclxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgIGZsZXhEaXI9e2Fib3V0RmxleERpcn1cclxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPENhcmRcclxuICAgICAgICAgIGFuaW09XCJ6b29tLWluLXJpZ2h0XCJcclxuICAgICAgICAgIHRpdGxlPXthZ2VuZGFbMF0udGl0bGV9XHJcbiAgICAgICAgICBib2R5PXthZ2VuZGFbMF0uYm9keX1cclxuICAgICAgICAgIGljb249e2FnZW5kYVswXS5pY29ufVxyXG4gICAgICAgICAgcmVmZXJlbmNlPXthZ2VuZGFbMF0ucmVmfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxDYXJkXHJcbiAgICAgICAgICBhbmltPVwiem9vbS1pbi1sZWZ0XCJcclxuICAgICAgICAgIHRpdGxlPXthZ2VuZGFbMV0udGl0bGV9XHJcbiAgICAgICAgICBib2R5PXthZ2VuZGFbMV0uYm9keX1cclxuICAgICAgICAgIGljb249e2FnZW5kYVsxXS5pY29ufVxyXG4gICAgICAgICAgcmVmZXJlbmNlPXthZ2VuZGFbMV0ucmVmfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvRmxleD5cclxuXHJcbiAgICAgIDxGbGV4XHJcbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICBmbGV4RGlyPXthYm91dEZsZXhEaXJ9XHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxDYXJkXHJcbiAgICAgICAgICBhbmltPVwiem9vbS1pbi1yaWdodFwiXHJcbiAgICAgICAgICB0aXRsZT17YWdlbmRhWzJdLnRpdGxlfVxyXG4gICAgICAgICAgYm9keT17YWdlbmRhWzJdLmJvZHl9XHJcbiAgICAgICAgICBpY29uPXthZ2VuZGFbMl0uaWNvbn1cclxuICAgICAgICAgIHJlZmVyZW5jZT17YWdlbmRhWzJdLnJlZn1cclxuXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgYW5pbT1cInpvb20taW4tbGVmdFwiXHJcbiAgICAgICAgICB0aXRsZT17YWdlbmRhWzNdLnRpdGxlfVxyXG4gICAgICAgICAgYm9keT17YWdlbmRhWzNdLmJvZHl9XHJcbiAgICAgICAgICBpY29uPXthZ2VuZGFbM10uaWNvbn1cclxuICAgICAgICAgIHJlZmVyZW5jZT17YWdlbmRhWzNdLnJlZn1cclxuXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9GbGV4PlxyXG5cclxuICAgICAgPEZsZXhcclxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgIGZsZXhEaXI9e2Fib3V0RmxleERpcn1cclxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPENhcmRcclxuICAgICAgICAgIGFuaW09XCJ6b29tLWluLXJpZ2h0XCJcclxuICAgICAgICAgIHRpdGxlPXthZ2VuZGFbNF0udGl0bGV9XHJcbiAgICAgICAgICBib2R5PXthZ2VuZGFbNF0uYm9keX1cclxuICAgICAgICAgIGljb249e2FnZW5kYVs0XS5pY29ufVxyXG4gICAgICAgICAgcmVmZXJlbmNlPXthZ2VuZGFbNF0ucmVmfVxyXG5cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgYW5pbT1cInpvb20taW4tbGVmdFwiXHJcbiAgICAgICAgICB0aXRsZT17YWdlbmRhWzVdLnRpdGxlfVxyXG4gICAgICAgICAgYm9keT17YWdlbmRhWzVdLmJvZHl9XHJcbiAgICAgICAgICBpY29uPXthZ2VuZGFbNV0uaWNvbn1cclxuICAgICAgICAgIHJlZmVyZW5jZT17YWdlbmRhWzVdLnJlZn1cclxuXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9GbGV4PlxyXG4gICAgPC9GbGV4PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==