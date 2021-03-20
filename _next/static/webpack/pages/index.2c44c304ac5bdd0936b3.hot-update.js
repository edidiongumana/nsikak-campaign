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
  body: "Cheap and affordable healthcare services will be invested in and made available to every member of the constituenc",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0R2FsbGVyeS5qc3giXSwibmFtZXMiOlsiYWdlbmRhIiwidGl0bGUiLCJib2R5IiwiaWNvbiIsInJlZiIsIkNhcmQiLCJhbmltIiwicmVmZXJlbmNlIiwidXNlTWVkaWFRdWVyeSIsImlzTGFyZ2VyVGhhbjkxNCIsImlzTGFyZ2VyVGhhbjYwMCIsIlByb2plY3RHYWxsZXJ5IiwiaXNTbWFsbGVyVGhhbjYwMCIsImFib3V0RmxleERpciIsInVzZUJyZWFrcG9pbnRWYWx1ZSIsImJhc2UiLCJtZCIsImZvbnRGYW1pbHkiLCJkaXNwbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVVBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUcsQ0FDYjtBQUNFQyxPQUFLLEVBQUUsV0FEVDtBQUVFQyxNQUFJLEVBQ0YsNEVBSEo7QUFJRUMsTUFBSSxFQUFFLGdCQUpSO0FBS0VDLEtBQUcsRUFBQztBQUxOLENBRGEsRUFRYjtBQUNFSCxPQUFLLEVBQUUscUJBRFQ7QUFFRUMsTUFBSSxFQUNGLHdGQUhKO0FBSUVDLE1BQUksRUFBRSxpQkFKUjtBQUtFQyxLQUFHLEVBQUM7QUFMTixDQVJhLEVBZ0JiO0FBQ0VILE9BQUssRUFBRSxhQURUO0FBRUVDLE1BQUksRUFDRiw4RkFISjtBQUlFQyxNQUFJLEVBQUUsc0JBSlI7QUFLRUMsS0FBRyxFQUFDO0FBTE4sQ0FoQmEsRUF3QmI7QUFDRUgsT0FBSyxFQUFFLHFCQURUO0FBRUVDLE1BQUksRUFDRixtR0FISjtBQUlJQyxNQUFJLEVBQUUsa0JBSlY7QUFLSUMsS0FBRyxFQUFDO0FBTFIsQ0F4QmEsRUFpQ2I7QUFDRUgsT0FBSyxFQUFFLGlCQURUO0FBRUVDLE1BQUksRUFDRixvSEFISjtBQUlFQyxNQUFJLEVBQUUsdUJBSlI7QUFLRUMsS0FBRyxFQUFDO0FBTE4sQ0FqQ2EsRUF5Q2I7QUFDRUgsT0FBSyxFQUFFLG1CQURUO0FB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QU8sRUFBRVMsWUFIWDtBQUlFLG9CQUFjLEVBQUMsZUFKakI7QUFBQSw4QkFNRSxxRUFBQyxJQUFEO0FBQ0UsWUFBSSxFQUFDLGVBRFA7QUFFRSxhQUFLLEVBQUViLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVUMsS0FGbkI7QUFHRSxZQUFJLEVBQUVELE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVUUsSUFIbEI7QUFJRSxZQUFJLEVBQUVGLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVUcsSUFKbEI7QUFLRSxpQkFBUyxFQUFFSCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVJO0FBTHZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORixlQWVFLHFFQUFDLElBQUQ7QUFDRSxZQUFJLEVBQUMsY0FEUDtBQUVFLGFBQUssRUFBRUosTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVQyxLQUZuQjtBQUdFLFlBQUksRUFBRUQsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVRSxJQUhsQjtBQUlFLFlBQUksRUFBRUYsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVRyxJQUpsQjtBQUtFLGlCQUFTLEVBQUVILE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVUk7QUFMdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTFFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFHRDs7SUExR3VCTyxjO1VBQ0lILDhELEVBQ0NBLDhELEVBQ05NLG1FOzs7TUFIQ0gsYyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yYzQ0YzMwNGFjNWJkZDA5MzZiMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgRmxleCxcclxuICBUZXh0LFxyXG4gIEltYWdlLFxyXG4gIHVzZU1lZGlhUXVlcnksXHJcbiAgRGl2aWRlcixcclxuICB1c2VCcmVha3BvaW50VmFsdWUsXHJcbiAgQmFkZ2UsXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyBIZWFkaW5nIH0gZnJvbSAnQGNoYWtyYS11aS9sYXlvdXQnO1xyXG5cclxuY29uc3QgYWdlbmRhID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiBcIkVkdWNhdGlvblwiLFxyXG4gICAgYm9keTpcclxuICAgICAgXCJFZHVjYXRpb24gYnVpbGRzIGEgbmF0aW9uLCB0aGVyZWZvcmUgaXRzIGltcGVyYXRpdmUgdG8gaW1wcm92ZSB0aGlzIHNlY3RvclwiLFxyXG4gICAgaWNvbjogJy9pY29ucy9lZHUuc3ZnJyxcclxuICAgIHJlZjonZWR1Y2F0aW9uJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiUG92ZXJ0eSBBbGxldmlhdGlvblwiLFxyXG4gICAgYm9keTpcclxuICAgICAgXCJZb3V0aCBlbXBvd2VybWVudCBhbmQgZW5jb3VyYWdlbWVudCB0byBpbWJpYmUgZW50cmVwcmVuZXVyYWwgc2tpbGxzIHdpbGwgYmUgZW1waGFzaXplZFwiLFxyXG4gICAgaWNvbjogJy9pY29ucy9yaWNoLnN2ZycsXHJcbiAgICByZWY6J3BvdmVydHlBbGxldmlhdGlvbidcclxuXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJFbGVjdHJpY2l0eVwiLFxyXG4gICAgYm9keTpcclxuICAgICAgXCJNYW55IGJ1c2luZXNzIHJ1biBvbiBFbGVjdHJpY2l0eSwgc29sdmluZyB0aGUgcHJvYmxlbSBvZiBwb3dlciBmYWlsdXJlcyB3aWxsIGluY3JlYXNlIHByb2ZpdFwiLFxyXG4gICAgaWNvbjogJy9pY29ucy9saWdodG5pbmcuc3ZnJyxcclxuICAgIHJlZjonZWxlY3RyaWNpdHknXHJcblxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiV29tZW4gUGFydGljaXBhdGlvblwiLFxyXG4gICAgYm9keTpcclxuICAgICAgXCJXb21lbiB3aWxsIGJlIG9mZmVycmVkIGEgcGxhdGZvcm0gdG8gYWlyIHRoZWlyIHBlcnNvbmFsIHZpZXdzIG9uIHBvbGljaWVzIGRpcmVjdGx5IGFmZmVjdGluZyB0aGVtXCIsXHJcbiAgICAgIGljb246ICcvaWNvbnMvd29tYW4uc3ZnJyxcclxuICAgICAgcmVmOid3b21lblBhcnRpY2lwYXRpb24nXHJcblxyXG5cclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkNvbW11bmFsIEhlYWx0aFwiLFxyXG4gICAgYm9keTpcclxuICAgICAgXCJDaGVhcCBhbmQgYWZmb3JkYWJsZSBoZWFsdGhjYXJlIHNlcnZpY2VzIHdpbGwgYmUgaW52ZXN0ZWQgaW4gYW5kIG1hZGUgYXZhaWxhYmxlIHRvIGV2ZXJ5IG1lbWJlciBvZiB0aGUgY29uc3RpdHVlbmNcIixcclxuICAgIGljb246ICcvaWNvbnMvaGVhbHRoY2FyZS5zdmcnLFxyXG4gICAgcmVmOidjb21tdW5hbEhlYWx0aCdcclxuXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJZb3V0aCBJbnZvbHZlbWVudFwiLFxyXG4gICAgYm9keTpcclxuICAgICAgXCJJdCBpcyB0aGUgZ29hbCBvZiB0aGlzIGdvdmVybm1lbnQgdG8gYnJpbmcgcG9saXRpY3MgY2xvc2VyIHRvIHRoZSB5b3V0aHMsIG91ciBmdXR1cmVzIGxlYWRlcnNcIixcclxuICAgICAgaWNvbjogJy9pY29ucy95b3V0aC5zdmcnLFxyXG4gICAgICByZWY6J3lvdXRoSW52b2x2ZW1lbnQnXHJcblxyXG4gIH0sXHJcbl07XHJcbmZ1bmN0aW9uIENhcmQoeyB0aXRsZSwgYm9keSwgaWNvbiwgYW5pbSwgcmVmZXJlbmNlIH0pIHtcclxuICBjb25zdCBbaXNMYXJnZXJUaGFuOTE0XSA9IHVzZU1lZGlhUXVlcnkoXCIobWluLXdpZHRoOiA5MTRweClcIik7XHJcbiAgY29uc3QgW2lzTGFyZ2VyVGhhbjYwMF0gPSB1c2VNZWRpYVF1ZXJ5KFwiKG1pbi13aWR0aDogNjAxcHhcIik7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8TGluayBocmVmPXsnL21hbmlmZXN0byMnK3JlZmVyZW5jZX0+XHJcblxyXG4gICAgICA8Qm94IGFzPSdhJ1xyXG4gICAgICBjdXJzb3I9J3BvaW50ZXInXHJcbiAgICAgICAgZGF0YS1hb3M9e2FuaW19XHJcbiAgICAgICAgZGF0YS1hb3MtZWFzaW5nPVwiZWFzZS1pbi1zaW5lXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJwcm9qZWN0LWNhcmRzXCJcclxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiXHJcbiAgICAgICAgZmxleERpcj1cImNvbHVtblwiXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxyXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICAgIHA9XCI0cmVtXCJcclxuICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgIGJveFNoYWRvdz1cImxnXCJcclxuICAgICAgICBoZWlnaHQ9XCIzNzBweFwiXHJcbiAgICAgID5cclxuICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgbWluV2lkdGg9XCIxMDBweFwiXHJcbiAgICAgICAgbWF4Vz1cIjEwMHB4XCJcclxuICAgICAgICBoZWlnaHQ9XCIxMDBweFwiXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzPVwiNTAlXCJcclxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxyXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICAgIG92ZXJmbG93PVwiaGlkZGVuXCJcclxuICAgICAgICBtYj17aXNMYXJnZXJUaGFuNjAwID8gXCIyMHB4XCIgOiAwfVxyXG4gICAgICA+XHJcbiAgICAgICAgPEltYWdlIHNyYz17aWNvbn0gd2lkdGg9XCIxMDAlXCIgLz5cclxuICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgIDxUZXh0XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJxZm9udCBwcm9qZWN0LWNhcmQtdGl0bGVcIlxyXG4gICAgICAgICAgZm9udFNpemU9XCIxLjVyZW1cIlxyXG4gICAgICAgICAgZm9udFdlaWdodD1cImxpZ2h0XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDxUZXh0IGNsYXNzTmFtZT1cImFmb250XCIgZm9udFNpemU9XCIxcmVtXCIgZm9udFdlaWdodD1cImxpZ2h0XCI+XHJcbiAgICAgICAgICB7Ym9keX1cclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8L0xpbms+XHJcblxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdEdhbGxlcnkoKSB7XHJcbiAgY29uc3QgW2lzTGFyZ2VyVGhhbjkxNF0gPSB1c2VNZWRpYVF1ZXJ5KFwiKG1pbi13aWR0aDogOTE0cHgpXCIpO1xyXG4gIGNvbnN0IFtpc1NtYWxsZXJUaGFuNjAwXSA9IHVzZU1lZGlhUXVlcnkoXCIobWF4LXdpZHRoOiA2MDBweClcIik7XHJcbiAgY29uc3QgYWJvdXRGbGV4RGlyID0gdXNlQnJlYWtwb2ludFZhbHVlKHsgYmFzZTogXCJjb2x1bW5cIiwgbWQ6IFwicm93XCIgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RmxleFxyXG4gICAgICBmbGV4RGlyPVwiY29sdW1uXCJcclxuICAgICAgYm94U2hhZG93PVwibGdcIlxyXG4gICAgICBib3JkZXJSYWRpdXM9XCIwIDAgMjBweCAyMHB4XCJcclxuICAgICAgcHQ9XCIycmVtXCJcclxuICAgICAgaGVpZ2h0PVwiZml0LWNvbnRlbnRcIlxyXG4gICAgICBtbD17MH1cclxuICAgICAgaWQ9XCJwcm9qZWN0cy1zZWN0aW9uXCJcclxuICAgID5cclxuICAgICAgPEhlYWRpbmdcclxuICAgICAgcHk9ezJ9XHJcbiAgICAgIHB4PScxLjZyZW0nXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nY2FwdGlvbidcclxuICAgICAgICAgICAgIGRhdGEtYW9zPSdmYWRlLXJpZ2h0J1xyXG4gICAgICAgICAgICAgZGF0YS1hb3MtZWFzaW5nPVwiZWFzZS1pbi1zaW5lXCJcclxuICAgICAgICAgICAgICBhcz1cImgyXCJcclxuICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJRdWlja3NhbmRcIixcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICA8VGV4dCBtcj17Mn0gbWw9ezJ9IGNvbG9yPVwiZ3JlZW4uNTAwXCI+XHJcbiAgICAgICAgICBOc2lrYWsnc1xyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgICA8VGV4dD4gQWdlbmRhPC9UZXh0PlxyXG4gICAgICAgICAgICA8L0hlYWRpbmc+XHJcblxyXG4gICAgICA8RmxleFxyXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgZmxleERpcj17YWJvdXRGbGV4RGlyfVxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgYW5pbT1cInpvb20taW4tcmlnaHRcIlxyXG4gICAgICAgICAgdGl0bGU9e2FnZW5kYVswXS50aXRsZX1cclxuICAgICAgICAgIGJvZHk9e2FnZW5kYVswXS5ib2R5fVxyXG4gICAgICAgICAgaWNvbj17YWdlbmRhWzBdLmljb259XHJcbiAgICAgICAgICByZWZlcmVuY2U9e2FnZW5kYVswXS5yZWZ9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPENhcmRcclxuICAgICAgICAgIGFuaW09XCJ6b29tLWluLWxlZnRcIlxyXG4gICAgICAgICAgdGl0bGU9e2FnZW5kYVsxXS50aXRsZX1cclxuICAgICAgICAgIGJvZHk9e2FnZW5kYVsxXS5ib2R5fVxyXG4gICAgICAgICAgaWNvbj17YWdlbmRhWzFdLmljb259XHJcbiAgICAgICAgICByZWZlcmVuY2U9e2FnZW5kYVsxXS5yZWZ9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9GbGV4PlxyXG5cclxuICAgICAgPEZsZXhcclxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgIGZsZXhEaXI9e2Fib3V0RmxleERpcn1cclxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPENhcmRcclxuICAgICAgICAgIGFuaW09XCJ6b29tLWluLXJpZ2h0XCJcclxuICAgICAgICAgIHRpdGxlPXthZ2VuZGFbMl0udGl0bGV9XHJcbiAgICAgICAgICBib2R5PXthZ2VuZGFbMl0uYm9keX1cclxuICAgICAgICAgIGljb249e2FnZW5kYVsyXS5pY29ufVxyXG4gICAgICAgICAgcmVmZXJlbmNlPXthZ2VuZGFbMl0ucmVmfVxyXG5cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxDYXJkXHJcbiAgICAgICAgICBhbmltPVwiem9vbS1pbi1sZWZ0XCJcclxuICAgICAgICAgIHRpdGxlPXthZ2VuZGFbM10udGl0bGV9XHJcbiAgICAgICAgICBib2R5PXthZ2VuZGFbM10uYm9keX1cclxuICAgICAgICAgIGljb249e2FnZW5kYVszXS5pY29ufVxyXG4gICAgICAgICAgcmVmZXJlbmNlPXthZ2VuZGFbM10ucmVmfVxyXG5cclxuICAgICAgICAvPlxyXG4gICAgICA8L0ZsZXg+XHJcblxyXG4gICAgICA8RmxleFxyXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgZmxleERpcj17YWJvdXRGbGV4RGlyfVxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgYW5pbT1cInpvb20taW4tcmlnaHRcIlxyXG4gICAgICAgICAgdGl0bGU9e2FnZW5kYVs0XS50aXRsZX1cclxuICAgICAgICAgIGJvZHk9e2FnZW5kYVs0XS5ib2R5fVxyXG4gICAgICAgICAgaWNvbj17YWdlbmRhWzRdLmljb259XHJcbiAgICAgICAgICByZWZlcmVuY2U9e2FnZW5kYVs0XS5yZWZ9XHJcblxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxDYXJkXHJcbiAgICAgICAgICBhbmltPVwiem9vbS1pbi1sZWZ0XCJcclxuICAgICAgICAgIHRpdGxlPXthZ2VuZGFbNV0udGl0bGV9XHJcbiAgICAgICAgICBib2R5PXthZ2VuZGFbNV0uYm9keX1cclxuICAgICAgICAgIGljb249e2FnZW5kYVs1XS5pY29ufVxyXG4gICAgICAgICAgcmVmZXJlbmNlPXthZ2VuZGFbNV0ucmVmfVxyXG5cclxuICAgICAgICAvPlxyXG4gICAgICA8L0ZsZXg+XHJcbiAgICA8L0ZsZXg+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9