'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MyLayout = require('../components/MyLayout');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _isomorphicUnfetch = require('isomorphic-unfetch');

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