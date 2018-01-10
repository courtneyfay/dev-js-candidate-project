'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MyLayout = require('../components/MyLayout');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _posttest = require('../components/posttest');

var _posttest2 = _interopRequireDefault(_posttest);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/cfay/Desktop/wdi-work/dev-js-candidate-project/pages/index.js?entry';


var Index = function Index(props) {
	return _react2.default.createElement(_MyLayout2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 7
		}
	}, _react2.default.createElement('h1', {
		className: 'jsx-2477714983',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 8
		}
	}, 'Batman Shows'), _react2.default.createElement('ul', {
		className: 'jsx-2477714983',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 9
		}
	}, props.shows.map(function (_ref) {
		var show = _ref.show;
		return _react2.default.createElement('li', { key: show.id, className: 'jsx-2477714983',
			__source: {
				fileName: _jsxFileName,
				lineNumber: 11
			}
		}, _react2.default.createElement(_link2.default, { as: '/p/' + show.id, href: '/', __source: {
				fileName: _jsxFileName,
				lineNumber: 12
			}
		}, _react2.default.createElement('a', {
			className: 'jsx-2477714983',
			__source: {
				fileName: _jsxFileName,
				lineNumber: 13
			}
		}, show.name)));
	})), _react2.default.createElement(_posttest2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 18
		}
	}), _react2.default.createElement(_style2.default, {
		styleId: '2477714983',
		css: 'h1.jsx-2477714983,a.jsx-2477714983{font-family:"Arial";}ul.jsx-2477714983{padding:0;}li.jsx-2477714983{list-style:none;margin:5px 0;}a.jsx-2477714983{text-decoration:none;color:blue;}a.jsx-2477714983:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCYyxBQUd5QixBQUlWLEFBSU0sQUFLSyxBQUtULFVBYmIsRUFjQSxJQVZjLElBUmQsQ0FhWSxRQUpaLEdBS0EiLCJmaWxlIjoicGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NmYXkvRGVza3RvcC93ZGktd29yay9kZXYtanMtY2FuZGlkYXRlLXByb2plY3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnXG5pbXBvcnQgUG9zdFRlc3QgZnJvbSAnLi4vY29tcG9uZW50cy9wb3N0dGVzdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5cbmNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiAoXG5cdDxMYXlvdXQ+XG5cdFx0PGgxPkJhdG1hbiBTaG93czwvaDE+XG5cdFx0PHVsPlxuXHRcdFx0e3Byb3BzLnNob3dzLm1hcCgoe3Nob3d9KSA9PiAoXG5cdFx0XHRcdDxsaSBrZXk9e3Nob3cuaWR9PlxuXHRcdFx0XHRcdDxMaW5rIGFzPXtgL3AvJHtzaG93LmlkfWB9IGhyZWY9e2AvYH0+IFxuXHRcdFx0XHRcdFx0PGE+e3Nob3cubmFtZX08L2E+XG5cdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQ8L2xpPlxuXHRcdFx0KSl9XG5cdFx0PC91bD5cblx0XHQ8UG9zdFRlc3Q+PC9Qb3N0VGVzdD5cblx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRoMSwgYSB7XG5cdFx0XHRcdGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7XG5cdFx0XHR9XG5cblx0XHRcdHVsIHtcblx0XHRcdFx0cGFkZGluZzogMDtcblx0XHRcdH1cblxuXHRcdFx0bGkge1xuXHRcdFx0XHRsaXN0LXN0eWxlOiBub25lO1xuXHRcdFx0XHRtYXJnaW46IDVweCAwO1xuXHRcdFx0fVxuXG5cdFx0XHRhIHtcblx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdFx0XHRjb2xvcjogYmx1ZTtcblx0XHRcdH1cblxuXHRcdFx0YTpob3ZlciB7XG5cdFx0XHRcdG9wYWNpdHk6IDAuNjtcblx0XHRcdH1cblx0XHRgfTwvc3R5bGU+XG5cdDwvTGF5b3V0PlxuKVxuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcblx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2VhcmNoL3Nob3dzP3E9YmF0bWFuJylcblx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcblxuXHRjb25zb2xlLmxvZyhgU2hvdyBkYXRhIGZldGNoZWQuIENvdW50OiAke2RhdGEubGVuZ3RofWApXG5cblx0cmV0dXJuIHtcblx0XHRzaG93czogZGF0YVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4ICJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
	}));
};

Index.getInitialProps = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
	var res, data;
	return _regenerator2.default.wrap(function _callee$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					_context.next = 2;
					return (0, _isomorphicUnfetch2.default)('https://api.tvmaze.com/search/shows?q=batman');

				case 2:
					res = _context.sent;
					_context.next = 5;
					return res.json();

				case 5:
					data = _context.sent;

					console.log('Show data fetched. Count: ' + data.length);

					return _context.abrupt('return', {
						shows: data
					});

				case 8:
				case 'end':
					return _context.stop();
			}
		}
	}, _callee, this);
}));

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkxheW91dCIsIlBvc3RUZXN0IiwiTGluayIsImZldGNoIiwiSW5kZXgiLCJwcm9wcyIsInNob3dzIiwibWFwIiwic2hvdyIsImlkIiwibmFtZSIsImdldEluaXRpYWxQcm9wcyIsInJlcyIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7OztBQUVQLElBQU0sUUFBUSxTQUFSLEFBQVEsTUFBQSxBQUFDLE9BQUQ7d0JBQ2IsQUFBQzs7YUFBRDtlQUFBLEFBQ0M7QUFERDtBQUFBLEVBQUEsa0JBQ0MsY0FBQTthQUFBOzthQUFBO2VBQUE7QUFBQTtBQUFBLElBREQsQUFDQyxBQUNBLGlDQUFBLGNBQUE7YUFBQTs7YUFBQTtlQUFBLEFBQ0U7QUFERjtBQUFBLFVBQ0UsQUFBTSxNQUFOLEFBQVksSUFBSSxnQkFBQTtNQUFBLEFBQUUsWUFBRixBQUFFO3lCQUNsQixjQUFBLFFBQUksS0FBSyxLQUFULEFBQWMsZUFBZDs7Y0FBQTtnQkFBQSxBQUNDO0FBREQ7R0FBQSxrQkFDQyxBQUFDLGdDQUFLLFlBQVUsS0FBaEIsQUFBcUIsSUFBTSxNQUEzQjtjQUFBO2dCQUFBLEFBQ0M7QUFERDtxQkFDQyxjQUFBO2NBQUE7O2NBQUE7Z0JBQUEsQUFBSTtBQUFKO0FBQUEsVUFIYyxBQUNoQixBQUNDLEFBQ0MsQUFBUztBQU5kLEFBRUMsQUFDRSxBQVFGLHNCQUFBLEFBQUM7O2FBQUQ7ZUFYRCxBQVdDO0FBQUE7QUFBQTtXQVhEO09BRGEsQUFDYjtBQUFBO0FBREQ7O0FBdUNBLE1BQUEsQUFBTSwyRkFBa0IsbUJBQUE7VUFBQTsrREFBQTtZQUFBO29DQUFBO1NBQUE7cUJBQUE7WUFDTCxpQ0FESyxBQUNMLEFBQU07O1NBQWxCO0FBRGlCLG9CQUFBO3FCQUFBO1lBRUosSUFGSSxBQUVKLEFBQUk7O1NBQWpCO0FBRmlCLHFCQUl2Qjs7YUFBQSxBQUFRLG1DQUFpQyxLQUpsQixBQUl2QixBQUE4Qzs7O2FBSnZCLEFBTWhCLEFBQ0M7QUFERCxBQUNOOztTQVBzQjtTQUFBO3FCQUFBOztBQUFBO2FBQUE7QUFBeEIsQUFXQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvY2ZheS9EZXNrdG9wL3dkaS13b3JrL2Rldi1qcy1jYW5kaWRhdGUtcHJvamVjdCJ9