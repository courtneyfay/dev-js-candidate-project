webpackHotUpdate(5,{

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _MyLayout = __webpack_require__(400);

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _isomorphicUnfetch = __webpack_require__(413);

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/cfay/Desktop/wdi-work/dev-js-candidate-project/components/posttest.js';


var PostTest = function PostTest(props) {
	return _react2.default.createElement(_MyLayout2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 5
		}
	}, _react2.default.createElement('p', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 6
		}
	}, props.show));
};

PostTest.getInitialProps = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
	var _, id, res, show;

	return _regenerator2.default.wrap(function _callee$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					console.log('hitting getInitialProps for PostTest');
					_ = 975, id = _.id;
					_context.next = 4;
					return (0, _isomorphicUnfetch2.default)('https://api.tvmaze.com/shows/' + id);

				case 4:
					res = _context.sent;
					_context.next = 7;
					return res.json();

				case 7:
					show = _context.sent;

					console.log('Fetched show: ' + show.name);

					return _context.abrupt('return', { show: show });

				case 10:
				case 'end':
					return _context.stop();
			}
		}
	}, _callee, this);
}));

exports.default = PostTest;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcG9zdHRlc3QuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwiZmV0Y2giLCJQb3N0VGVzdCIsInByb3BzIiwic2hvdyIsImdldEluaXRpYWxQcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJpZCIsInJlcyIsImpzb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTSxXQUFXLFNBQVgsQUFBVyxTQUFBLEFBQUMsT0FBRDt3QkFDaEIsQUFBQzs7YUFBRDtlQUFBLEFBQ0M7QUFERDtBQUFBLEVBQUEsa0JBQ0MsY0FBQTs7YUFBQTtlQUFBLEFBQUk7QUFBSjtBQUFBLFVBRmUsQUFDaEIsQUFDQyxBQUFVO0FBRlo7O0FBTUEsU0FBQSxBQUFTLDJGQUFrQixtQkFBQTtpQkFBQTs7K0RBQUE7WUFBQTtvQ0FBQTtTQUMxQjthQUFBLEFBQVEsSUFEa0IsQUFDMUIsQUFBWTtTQURjLEFBRVgsS0FGVyxBQUVsQixPQUZrQixBQUVsQjtxQkFGa0I7WUFHUixtRUFIUSxBQUdSLEFBQXNDOztTQUFsRDtBQUhvQixvQkFBQTtxQkFBQTtZQUlQLElBSk8sQUFJUCxBQUFJOztTQUFqQjtBQUpvQixxQkFNMUI7O2FBQUEsQUFBUSx1QkFBcUIsS0FOSCxBQU0xQixBQUFrQzs7c0NBRTNCLEVBQUUsTUFSaUIsQUFRbkI7O1NBUm1CO1NBQUE7cUJBQUE7O0FBQUE7YUFBQTtBQUEzQixBQVdBOztrQkFBQSxBQUFlIiwiZmlsZSI6InBvc3R0ZXN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jZmF5L0Rlc2t0b3Avd2RpLXdvcmsvZGV2LWpzLWNhbmRpZGF0ZS1wcm9qZWN0In0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/cfay/Desktop/wdi-work/dev-js-candidate-project/components/posttest.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/cfay/Desktop/wdi-work/dev-js-candidate-project/components/posttest.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5jZjkwNmJhMDExNmQwOTdiZTM1Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wb3N0dGVzdC5qcz81MjY4Yzc4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCdcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5cbmNvbnN0IFBvc3RUZXN0ID0gKHByb3BzKSA9PiAoXG5cdDxMYXlvdXQ+XG5cdFx0PHA+e3Byb3BzLnNob3d9PC9wPlxuXHQ8L0xheW91dD5cbilcblxuUG9zdFRlc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuXHRjb25zb2xlLmxvZygnaGl0dGluZyBnZXRJbml0aWFsUHJvcHMgZm9yIFBvc3RUZXN0Jylcblx0Y29uc3QgeyBpZCB9ID0gOTc1XG5cdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS50dm1hemUuY29tL3Nob3dzLyR7aWR9YClcblx0Y29uc3Qgc2hvdyA9IGF3YWl0IHJlcy5qc29uKClcblxuXHRjb25zb2xlLmxvZyhgRmV0Y2hlZCBzaG93OiAke3Nob3cubmFtZX1gKVxuXG5cdHJldHVybiB7IHNob3cgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0VGVzdFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvcG9zdHRlc3QuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBQ0E7QUFLQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUdBO0FBQ0E7QUFEQTtBQUhBO0FBQUE7QUFJQTtBQUNBO0FBREE7QUFKQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQVdBO0FBQ0E7QUFEQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9