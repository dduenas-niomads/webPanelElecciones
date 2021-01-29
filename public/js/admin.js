! function (e) {
	var t = {};

	function n(r) {
		if (t[r]) return t[r].exports;
		var a = t[r] = {
			i: r,
			l: !1,
			exports: {}
		};
		return e[r].call(a.exports, a, a.exports, n), a.l = !0, a.exports
	}
	n.m = e, n.c = t, n.d = function (e, t, r) {
		n.o(e, t) || Object.defineProperty(e, t, {
			configurable: !1,
			enumerable: !0,
			get: r
		})
	}, n.n = function (e) {
		var t = e && e.__esModule ? function () {
			return e.default
		} : function () {
			return e
		};
		return n.d(t, "a", t), t
	}, n.o = function (e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, n.p = "/", n(n.s = 221)
}([function (e, t, n) {
	(function (e) {
		var t, r;
		r = function () {
			"use strict";
			var r, a;

			function i() {
				return r.apply(null, arguments)
			}

			function s(e) {
				return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
			}

			function o(e) {
				return null != e && "[object Object]" === Object.prototype.toString.call(e)
			}

			function l(e, t) {
				return Object.prototype.hasOwnProperty.call(e, t)
			}

			function d(e) {
				if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
				var t;
				for (t in e)
					if (l(e, t)) return !1;
				return !0
			}

			function u(e) {
				return void 0 === e
			}

			function c(e) {
				return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
			}

			function f(e) {
				return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
			}

			function m(e, t) {
				var n, r = [];
				for (n = 0; n < e.length; ++n) r.push(t(e[n], n));
				return r
			}

			function h(e, t) {
				for (var n in t) l(t, n) && (e[n] = t[n]);
				return l(t, "toString") && (e.toString = t.toString), l(t, "valueOf") && (e.valueOf = t.valueOf), e
			}

			function p(e, t, n, r) {
				return Ht(e, t, n, r, !0).utc()
			}

			function _(e) {
				return null == e._pf && (e._pf = {
					empty: !1,
					unusedTokens: [],
					unusedInput: [],
					overflow: -2,
					charsLeftOver: 0,
					nullInput: !1,
					invalidEra: null,
					invalidMonth: null,
					invalidFormat: !1,
					userInvalidated: !1,
					iso: !1,
					parsedDateParts: [],
					era: null,
					meridiem: null,
					rfc2822: !1,
					weekdayMismatch: !1
				}), e._pf
			}

			function v(e) {
				if (null == e._isValid) {
					var t = _(e),
						n = a.call(t.parsedDateParts, function (e) {
							return null != e
						}),
						r = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
					if (e._strict && (r = r && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return r;
					e._isValid = r
				}
				return e._isValid
			}

			function y(e) {
				var t = p(NaN);
				return null != e ? h(_(t), e) : _(t).userInvalidated = !0, t
			}
			a = Array.prototype.some ? Array.prototype.some : function (e) {
				var t, n = Object(this),
					r = n.length >>> 0;
				for (t = 0; t < r; t++)
					if (t in n && e.call(this, n[t], t, n)) return !0;
				return !1
			};
			var g = i.momentProperties = [],
				M = !1;

			function b(e, t) {
				var n, r, a;
				if (u(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), u(t._i) || (e._i = t._i), u(t._f) || (e._f = t._f), u(t._l) || (e._l = t._l), u(t._strict) || (e._strict = t._strict), u(t._tzm) || (e._tzm = t._tzm), u(t._isUTC) || (e._isUTC = t._isUTC), u(t._offset) || (e._offset = t._offset), u(t._pf) || (e._pf = _(t)), u(t._locale) || (e._locale = t._locale), g.length > 0)
					for (n = 0; n < g.length; n++) u(a = t[r = g[n]]) || (e[r] = a);
				return e
			}

			function L(e) {
				b(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === M && (M = !0, i.updateOffset(this), M = !1)
			}

			function k(e) {
				return e instanceof L || null != e && null != e._isAMomentObject
			}

			function w(e) {
				!1 === i.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
			}

			function Y(e, t) {
				var n = !0;
				return h(function () {
					if (null != i.deprecationHandler && i.deprecationHandler(null, e), n) {
						var r, a, s, o = [];
						for (a = 0; a < arguments.length; a++) {
							if (r = "", "object" == typeof arguments[a]) {
								for (s in r += "\n[" + a + "] ", arguments[0]) l(arguments[0], s) && (r += s + ": " + arguments[0][s] + ", ");
								r = r.slice(0, -2)
							} else r = arguments[a];
							o.push(r)
						}
						w(e + "\nArguments: " + Array.prototype.slice.call(o).join("") + "\n" + (new Error).stack), n = !1
					}
					return t.apply(this, arguments)
				}, t)
			}
			var x, T = {};

			function D(e, t) {
				null != i.deprecationHandler && i.deprecationHandler(e, t), T[e] || (w(t), T[e] = !0)
			}

			function S(e) {
				return "undefined" != typeof Function && e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
			}

			function j(e, t) {
				var n, r = h({}, e);
				for (n in t) l(t, n) && (o(e[n]) && o(t[n]) ? (r[n] = {}, h(r[n], e[n]), h(r[n], t[n])) : null != t[n] ? r[n] = t[n] : delete r[n]);
				for (n in e) l(e, n) && !l(t, n) && o(e[n]) && (r[n] = h({}, r[n]));
				return r
			}

			function C(e) {
				null != e && this.set(e)
			}
			i.suppressDeprecationWarnings = !1, i.deprecationHandler = null, x = Object.keys ? Object.keys : function (e) {
				var t, n = [];
				for (t in e) l(e, t) && n.push(t);
				return n
			};

			function H(e, t, n) {
				var r = "" + Math.abs(e),
					a = t - r.length;
				return (e >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + r
			}
			var A = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
				E = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
				P = {},
				O = {};

			function $(e, t, n, r) {
				var a = r;
				"string" == typeof r && (a = function () {
					return this[r]()
				}), e && (O[e] = a), t && (O[t[0]] = function () {
					return H(a.apply(this, arguments), t[1], t[2])
				}), n && (O[n] = function () {
					return this.localeData().ordinal(a.apply(this, arguments), e)
				})
			}

			function N(e, t) {
				return e.isValid() ? (t = R(t, e.localeData()), P[t] = P[t] || function (e) {
					var t, n, r, a = e.match(A);
					for (t = 0, n = a.length; t < n; t++) O[a[t]] ? a[t] = O[a[t]] : a[t] = (r = a[t]).match(/\[[\s\S]/) ? r.replace(/^\[|\]$/g, "") : r.replace(/\\/g, "");
					return function (t) {
						var r, i = "";
						for (r = 0; r < n; r++) i += S(a[r]) ? a[r].call(t, e) : a[r];
						return i
					}
				}(t), P[t](e)) : e.localeData().invalidDate()
			}

			function R(e, t) {
				var n = 5;

				function r(e) {
					return t.longDateFormat(e) || e
				}
				for (E.lastIndex = 0; n >= 0 && E.test(e);) e = e.replace(E, r), E.lastIndex = 0, n -= 1;
				return e
			}
			var F = {};

			function W(e, t) {
				var n = e.toLowerCase();
				F[n] = F[n + "s"] = F[t] = e
			}

			function I(e) {
				return "string" == typeof e ? F[e] || F[e.toLowerCase()] : void 0
			}

			function z(e) {
				var t, n, r = {};
				for (n in e) l(e, n) && (t = I(n)) && (r[t] = e[n]);
				return r
			}
			var U = {};

			function q(e, t) {
				U[e] = t
			}

			function J(e) {
				return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
			}

			function B(e) {
				return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
			}

			function V(e) {
				var t = +e,
					n = 0;
				return 0 !== t && isFinite(t) && (n = B(t)), n
			}

			function G(e, t) {
				return function (n) {
					return null != n ? (X(this, e, n), i.updateOffset(this, t), this) : K(this, e)
				}
			}

			function K(e, t) {
				return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
			}

			function X(e, t, n) {
				e.isValid() && !isNaN(n) && ("FullYear" === t && J(e.year()) && 1 === e.month() && 29 === e.date() ? (n = V(n), e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), He(n, e.month()))) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n))
			}
			var Q, Z = /\d/,
				ee = /\d\d/,
				te = /\d{3}/,
				ne = /\d{4}/,
				re = /[+-]?\d{6}/,
				ae = /\d\d?/,
				ie = /\d\d\d\d?/,
				se = /\d\d\d\d\d\d?/,
				oe = /\d{1,3}/,
				le = /\d{1,4}/,
				de = /[+-]?\d{1,6}/,
				ue = /\d+/,
				ce = /[+-]?\d+/,
				fe = /Z|[+-]\d\d:?\d\d/gi,
				me = /Z|[+-]\d\d(?::?\d\d)?/gi,
				he = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;

			function pe(e, t, n) {
				Q[e] = S(t) ? t : function (e, r) {
					return e && n ? n : t
				}
			}

			function _e(e, t) {
				return l(Q, e) ? Q[e](t._strict, t._locale) : new RegExp(ve(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, t, n, r, a) {
					return t || n || r || a
				})))
			}

			function ve(e) {
				return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
			}
			Q = {};
			var ye = {};

			function ge(e, t) {
				var n, r = t;
				for ("string" == typeof e && (e = [e]), c(t) && (r = function (e, n) {
						n[t] = V(e)
					}), n = 0; n < e.length; n++) ye[e[n]] = r
			}

			function Me(e, t) {
				ge(e, function (e, n, r, a) {
					r._w = r._w || {}, t(e, r._w, r, a)
				})
			}

			function be(e, t, n) {
				null != t && l(ye, e) && ye[e](t, n._a, n, e)
			}
			var Le, ke = 0,
				we = 1,
				Ye = 2,
				xe = 3,
				Te = 4,
				De = 5,
				Se = 6,
				je = 7,
				Ce = 8;

			function He(e, t) {
				if (isNaN(e) || isNaN(t)) return NaN;
				var n, r = (t % (n = 12) + n) % n;
				return e += (t - r) / 12, 1 === r ? J(e) ? 29 : 28 : 31 - r % 7 % 2
			}
			Le = Array.prototype.indexOf ? Array.prototype.indexOf : function (e) {
				var t;
				for (t = 0; t < this.length; ++t)
					if (this[t] === e) return t;
				return -1
			}, $("M", ["MM", 2], "Mo", function () {
				return this.month() + 1
			}), $("MMM", 0, 0, function (e) {
				return this.localeData().monthsShort(this, e)
			}), $("MMMM", 0, 0, function (e) {
				return this.localeData().months(this, e)
			}), W("month", "M"), q("month", 8), pe("M", ae), pe("MM", ae, ee), pe("MMM", function (e, t) {
				return t.monthsShortRegex(e)
			}), pe("MMMM", function (e, t) {
				return t.monthsRegex(e)
			}), ge(["M", "MM"], function (e, t) {
				t[we] = V(e) - 1
			}), ge(["MMM", "MMMM"], function (e, t, n, r) {
				var a = n._locale.monthsParse(e, r, n._strict);
				null != a ? t[we] = a : _(n).invalidMonth = e
			});
			var Ae = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
				Ee = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
				Pe = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
				Oe = he,
				$e = he;

			function Ne(e, t) {
				var n;
				if (!e.isValid()) return e;
				if ("string" == typeof t)
					if (/^\d+$/.test(t)) t = V(t);
					else if (!c(t = e.localeData().monthsParse(t))) return e;
				return n = Math.min(e.date(), He(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e
			}

			function Re(e) {
				return null != e ? (Ne(this, e), i.updateOffset(this, !0), this) : K(this, "Month")
			}

			function Fe() {
				function e(e, t) {
					return t.length - e.length
				}
				var t, n, r = [],
					a = [],
					i = [];
				for (t = 0; t < 12; t++) n = p([2e3, t]), r.push(this.monthsShort(n, "")), a.push(this.months(n, "")), i.push(this.months(n, "")), i.push(this.monthsShort(n, ""));
				for (r.sort(e), a.sort(e), i.sort(e), t = 0; t < 12; t++) r[t] = ve(r[t]), a[t] = ve(a[t]);
				for (t = 0; t < 24; t++) i[t] = ve(i[t]);
				this._monthsRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")
			}

			function We(e) {
				return J(e) ? 366 : 365
			}
			$("Y", 0, 0, function () {
				var e = this.year();
				return e <= 9999 ? H(e, 4) : "+" + e
			}), $(0, ["YY", 2], 0, function () {
				return this.year() % 100
			}), $(0, ["YYYY", 4], 0, "year"), $(0, ["YYYYY", 5], 0, "year"), $(0, ["YYYYYY", 6, !0], 0, "year"), W("year", "y"), q("year", 1), pe("Y", ce), pe("YY", ae, ee), pe("YYYY", le, ne), pe("YYYYY", de, re), pe("YYYYYY", de, re), ge(["YYYYY", "YYYYYY"], ke), ge("YYYY", function (e, t) {
				t[ke] = 2 === e.length ? i.parseTwoDigitYear(e) : V(e)
			}), ge("YY", function (e, t) {
				t[ke] = i.parseTwoDigitYear(e)
			}), ge("Y", function (e, t) {
				t[ke] = parseInt(e, 10)
			}), i.parseTwoDigitYear = function (e) {
				return V(e) + (V(e) > 68 ? 1900 : 2e3)
			};
			var Ie = G("FullYear", !0);

			function ze(e) {
				var t, n;
				return e < 100 && e >= 0 ? ((n = Array.prototype.slice.call(arguments))[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t
			}

			function Ue(e, t, n) {
				var r = 7 + t - n;
				return -((7 + ze(e, 0, r).getUTCDay() - t) % 7) + r - 1
			}

			function qe(e, t, n, r, a) {
				var i, s, o = 1 + 7 * (t - 1) + (7 + n - r) % 7 + Ue(e, r, a);
				return o <= 0 ? s = We(i = e - 1) + o : o > We(e) ? (i = e + 1, s = o - We(e)) : (i = e, s = o), {
					year: i,
					dayOfYear: s
				}
			}

			function Je(e, t, n) {
				var r, a, i = Ue(e.year(), t, n),
					s = Math.floor((e.dayOfYear() - i - 1) / 7) + 1;
				return s < 1 ? r = s + Be(a = e.year() - 1, t, n) : s > Be(e.year(), t, n) ? (r = s - Be(e.year(), t, n), a = e.year() + 1) : (a = e.year(), r = s), {
					week: r,
					year: a
				}
			}

			function Be(e, t, n) {
				var r = Ue(e, t, n),
					a = Ue(e + 1, t, n);
				return (We(e) - r + a) / 7
			}
			$("w", ["ww", 2], "wo", "week"), $("W", ["WW", 2], "Wo", "isoWeek"), W("week", "w"), W("isoWeek", "W"), q("week", 5), q("isoWeek", 5), pe("w", ae), pe("ww", ae, ee), pe("W", ae), pe("WW", ae, ee), Me(["w", "ww", "W", "WW"], function (e, t, n, r) {
				t[r.substr(0, 1)] = V(e)
			});

			function Ve(e, t) {
				return e.slice(t, 7).concat(e.slice(0, t))
			}
			$("d", 0, "do", "day"), $("dd", 0, 0, function (e) {
				return this.localeData().weekdaysMin(this, e)
			}), $("ddd", 0, 0, function (e) {
				return this.localeData().weekdaysShort(this, e)
			}), $("dddd", 0, 0, function (e) {
				return this.localeData().weekdays(this, e)
			}), $("e", 0, 0, "weekday"), $("E", 0, 0, "isoWeekday"), W("day", "d"), W("weekday", "e"), W("isoWeekday", "E"), q("day", 11), q("weekday", 11), q("isoWeekday", 11), pe("d", ae), pe("e", ae), pe("E", ae), pe("dd", function (e, t) {
				return t.weekdaysMinRegex(e)
			}), pe("ddd", function (e, t) {
				return t.weekdaysShortRegex(e)
			}), pe("dddd", function (e, t) {
				return t.weekdaysRegex(e)
			}), Me(["dd", "ddd", "dddd"], function (e, t, n, r) {
				var a = n._locale.weekdaysParse(e, r, n._strict);
				null != a ? t.d = a : _(n).invalidWeekday = e
			}), Me(["d", "e", "E"], function (e, t, n, r) {
				t[r] = V(e)
			});
			var Ge = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
				Ke = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
				Xe = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
				Qe = he,
				Ze = he,
				et = he;

			function tt() {
				function e(e, t) {
					return t.length - e.length
				}
				var t, n, r, a, i, s = [],
					o = [],
					l = [],
					d = [];
				for (t = 0; t < 7; t++) n = p([2e3, 1]).day(t), r = ve(this.weekdaysMin(n, "")), a = ve(this.weekdaysShort(n, "")), i = ve(this.weekdays(n, "")), s.push(r), o.push(a), l.push(i), d.push(r), d.push(a), d.push(i);
				s.sort(e), o.sort(e), l.sort(e), d.sort(e), this._weekdaysRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")
			}

			function nt() {
				return this.hours() % 12 || 12
			}

			function rt(e, t) {
				$(e, 0, 0, function () {
					return this.localeData().meridiem(this.hours(), this.minutes(), t)
				})
			}

			function at(e, t) {
				return t._meridiemParse
			}
			$("H", ["HH", 2], 0, "hour"), $("h", ["hh", 2], 0, nt), $("k", ["kk", 2], 0, function () {
				return this.hours() || 24
			}), $("hmm", 0, 0, function () {
				return "" + nt.apply(this) + H(this.minutes(), 2)
			}), $("hmmss", 0, 0, function () {
				return "" + nt.apply(this) + H(this.minutes(), 2) + H(this.seconds(), 2)
			}), $("Hmm", 0, 0, function () {
				return "" + this.hours() + H(this.minutes(), 2)
			}), $("Hmmss", 0, 0, function () {
				return "" + this.hours() + H(this.minutes(), 2) + H(this.seconds(), 2)
			}), rt("a", !0), rt("A", !1), W("hour", "h"), q("hour", 13), pe("a", at), pe("A", at), pe("H", ae), pe("h", ae), pe("k", ae), pe("HH", ae, ee), pe("hh", ae, ee), pe("kk", ae, ee), pe("hmm", ie), pe("hmmss", se), pe("Hmm", ie), pe("Hmmss", se), ge(["H", "HH"], xe), ge(["k", "kk"], function (e, t, n) {
				var r = V(e);
				t[xe] = 24 === r ? 0 : r
			}), ge(["a", "A"], function (e, t, n) {
				n._isPm = n._locale.isPM(e), n._meridiem = e
			}), ge(["h", "hh"], function (e, t, n) {
				t[xe] = V(e), _(n).bigHour = !0
			}), ge("hmm", function (e, t, n) {
				var r = e.length - 2;
				t[xe] = V(e.substr(0, r)), t[Te] = V(e.substr(r)), _(n).bigHour = !0
			}), ge("hmmss", function (e, t, n) {
				var r = e.length - 4,
					a = e.length - 2;
				t[xe] = V(e.substr(0, r)), t[Te] = V(e.substr(r, 2)), t[De] = V(e.substr(a)), _(n).bigHour = !0
			}), ge("Hmm", function (e, t, n) {
				var r = e.length - 2;
				t[xe] = V(e.substr(0, r)), t[Te] = V(e.substr(r))
			}), ge("Hmmss", function (e, t, n) {
				var r = e.length - 4,
					a = e.length - 2;
				t[xe] = V(e.substr(0, r)), t[Te] = V(e.substr(r, 2)), t[De] = V(e.substr(a))
			});
			var it = G("Hours", !0);
			var st, ot = {
					calendar: {
						sameDay: "[Today at] LT",
						nextDay: "[Tomorrow at] LT",
						nextWeek: "dddd [at] LT",
						lastDay: "[Yesterday at] LT",
						lastWeek: "[Last] dddd [at] LT",
						sameElse: "L"
					},
					longDateFormat: {
						LTS: "h:mm:ss A",
						LT: "h:mm A",
						L: "MM/DD/YYYY",
						LL: "MMMM D, YYYY",
						LLL: "MMMM D, YYYY h:mm A",
						LLLL: "dddd, MMMM D, YYYY h:mm A"
					},
					invalidDate: "Invalid date",
					ordinal: "%d",
					dayOfMonthOrdinalParse: /\d{1,2}/,
					relativeTime: {
						future: "in %s",
						past: "%s ago",
						s: "a few seconds",
						ss: "%d seconds",
						m: "a minute",
						mm: "%d minutes",
						h: "an hour",
						hh: "%d hours",
						d: "a day",
						dd: "%d days",
						w: "a week",
						ww: "%d weeks",
						M: "a month",
						MM: "%d months",
						y: "a year",
						yy: "%d years"
					},
					months: Ae,
					monthsShort: Ee,
					week: {
						dow: 0,
						doy: 6
					},
					weekdays: Ge,
					weekdaysMin: Xe,
					weekdaysShort: Ke,
					meridiemParse: /[ap]\.?m?\.?/i
				},
				lt = {},
				dt = {};

			function ut(e, t) {
				var n, r = Math.min(e.length, t.length);
				for (n = 0; n < r; n += 1)
					if (e[n] !== t[n]) return n;
				return r
			}

			function ct(e) {
				return e ? e.toLowerCase().replace("_", "-") : e
			}

			function ft(r) {
				var a = null;
				if (void 0 === lt[r] && void 0 !== e && e && e.exports) try {
					a = st._abbr, t, n(196)("./" + r), mt(a)
				} catch (e) {
					lt[r] = null
				}
				return lt[r]
			}

			function mt(e, t) {
				var n;
				return e && ((n = u(t) ? pt(e) : ht(e, t)) ? st = n : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), st._abbr
			}

			function ht(e, t) {
				if (null !== t) {
					var n, r = ot;
					if (t.abbr = e, null != lt[e]) D("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), r = lt[e]._config;
					else if (null != t.parentLocale)
						if (null != lt[t.parentLocale]) r = lt[t.parentLocale]._config;
						else {
							if (null == (n = ft(t.parentLocale))) return dt[t.parentLocale] || (dt[t.parentLocale] = []), dt[t.parentLocale].push({
								name: e,
								config: t
							}), null;
							r = n._config
						}
					return lt[e] = new C(j(r, t)), dt[e] && dt[e].forEach(function (e) {
						ht(e.name, e.config)
					}), mt(e), lt[e]
				}
				return delete lt[e], null
			}

			function pt(e) {
				var t;
				if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return st;
				if (!s(e)) {
					if (t = ft(e)) return t;
					e = [e]
				}
				return function (e) {
					for (var t, n, r, a, i = 0; i < e.length;) {
						for (t = (a = ct(e[i]).split("-")).length, n = (n = ct(e[i + 1])) ? n.split("-") : null; t > 0;) {
							if (r = ft(a.slice(0, t).join("-"))) return r;
							if (n && n.length >= t && ut(a, n) >= t - 1) break;
							t--
						}
						i++
					}
					return st
				}(e)
			}

			function _t(e) {
				var t, n = e._a;
				return n && -2 === _(e).overflow && (t = n[we] < 0 || n[we] > 11 ? we : n[Ye] < 1 || n[Ye] > He(n[ke], n[we]) ? Ye : n[xe] < 0 || n[xe] > 24 || 24 === n[xe] && (0 !== n[Te] || 0 !== n[De] || 0 !== n[Se]) ? xe : n[Te] < 0 || n[Te] > 59 ? Te : n[De] < 0 || n[De] > 59 ? De : n[Se] < 0 || n[Se] > 999 ? Se : -1, _(e)._overflowDayOfYear && (t < ke || t > Ye) && (t = Ye), _(e)._overflowWeeks && -1 === t && (t = je), _(e)._overflowWeekday && -1 === t && (t = Ce), _(e).overflow = t), e
			}
			var vt = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
				yt = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
				gt = /Z|[+-]\d\d(?::?\d\d)?/,
				Mt = [
					["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
					["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
					["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
					["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
					["YYYY-DDD", /\d{4}-\d{3}/],
					["YYYY-MM", /\d{4}-\d\d/, !1],
					["YYYYYYMMDD", /[+-]\d{10}/],
					["YYYYMMDD", /\d{8}/],
					["GGGG[W]WWE", /\d{4}W\d{3}/],
					["GGGG[W]WW", /\d{4}W\d{2}/, !1],
					["YYYYDDD", /\d{7}/],
					["YYYYMM", /\d{6}/, !1],
					["YYYY", /\d{4}/, !1]
				],
				bt = [
					["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
					["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
					["HH:mm:ss", /\d\d:\d\d:\d\d/],
					["HH:mm", /\d\d:\d\d/],
					["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
					["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
					["HHmmss", /\d\d\d\d\d\d/],
					["HHmm", /\d\d\d\d/],
					["HH", /\d\d/]
				],
				Lt = /^\/?Date\((-?\d+)/i,
				kt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
				wt = {
					UT: 0,
					GMT: 0,
					EDT: -240,
					EST: -300,
					CDT: -300,
					CST: -360,
					MDT: -360,
					MST: -420,
					PDT: -420,
					PST: -480
				};

			function Yt(e) {
				var t, n, r, a, i, s, o = e._i,
					l = vt.exec(o) || yt.exec(o);
				if (l) {
					for (_(e).iso = !0, t = 0, n = Mt.length; t < n; t++)
						if (Mt[t][1].exec(l[1])) {
							a = Mt[t][0], r = !1 !== Mt[t][2];
							break
						}
					if (null == a) return void(e._isValid = !1);
					if (l[3]) {
						for (t = 0, n = bt.length; t < n; t++)
							if (bt[t][1].exec(l[3])) {
								i = (l[2] || " ") + bt[t][0];
								break
							}
						if (null == i) return void(e._isValid = !1)
					}
					if (!r && null != i) return void(e._isValid = !1);
					if (l[4]) {
						if (!gt.exec(l[4])) return void(e._isValid = !1);
						s = "Z"
					}
					e._f = a + (i || "") + (s || ""), jt(e)
				} else e._isValid = !1
			}

			function xt(e, t, n, r, a, i) {
				var s = [function (e) {
					var t = parseInt(e, 10);
					if (t <= 49) return 2e3 + t;
					if (t <= 999) return 1900 + t;
					return t
				}(e), Ee.indexOf(t), parseInt(n, 10), parseInt(r, 10), parseInt(a, 10)];
				return i && s.push(parseInt(i, 10)), s
			}

			function Tt(e) {
				var t, n = kt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
				if (n) {
					if (t = xt(n[4], n[3], n[2], n[5], n[6], n[7]), ! function (e, t, n) {
							return !e || Ke.indexOf(e) === new Date(t[0], t[1], t[2]).getDay() || (_(n).weekdayMismatch = !0, n._isValid = !1, !1)
						}(n[1], t, e)) return;
					e._a = t, e._tzm = function (e, t, n) {
						if (e) return wt[e];
						if (t) return 0;
						var r = parseInt(n, 10),
							a = r % 100;
						return (r - a) / 100 * 60 + a
					}(n[8], n[9], n[10]), e._d = ze.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), _(e).rfc2822 = !0
				} else e._isValid = !1
			}

			function Dt(e, t, n) {
				return null != e ? e : null != t ? t : n
			}

			function St(e) {
				var t, n, r, a, s, o = [];
				if (!e._d) {
					for (r = function (e) {
							var t = new Date(i.now());
							return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
						}(e), e._w && null == e._a[Ye] && null == e._a[we] && function (e) {
							var t, n, r, a, i, s, o, l, d;
							null != (t = e._w).GG || null != t.W || null != t.E ? (i = 1, s = 4, n = Dt(t.GG, e._a[ke], Je(At(), 1, 4).year), r = Dt(t.W, 1), ((a = Dt(t.E, 1)) < 1 || a > 7) && (l = !0)) : (i = e._locale._week.dow, s = e._locale._week.doy, d = Je(At(), i, s), n = Dt(t.gg, e._a[ke], d.year), r = Dt(t.w, d.week), null != t.d ? ((a = t.d) < 0 || a > 6) && (l = !0) : null != t.e ? (a = t.e + i, (t.e < 0 || t.e > 6) && (l = !0)) : a = i);
							r < 1 || r > Be(n, i, s) ? _(e)._overflowWeeks = !0 : null != l ? _(e)._overflowWeekday = !0 : (o = qe(n, r, a, i, s), e._a[ke] = o.year, e._dayOfYear = o.dayOfYear)
						}(e), null != e._dayOfYear && (s = Dt(e._a[ke], r[ke]), (e._dayOfYear > We(s) || 0 === e._dayOfYear) && (_(e)._overflowDayOfYear = !0), n = ze(s, 0, e._dayOfYear), e._a[we] = n.getUTCMonth(), e._a[Ye] = n.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = o[t] = r[t];
					for (; t < 7; t++) e._a[t] = o[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
					24 === e._a[xe] && 0 === e._a[Te] && 0 === e._a[De] && 0 === e._a[Se] && (e._nextDay = !0, e._a[xe] = 0), e._d = (e._useUTC ? ze : function (e, t, n, r, a, i, s) {
						var o;
						return e < 100 && e >= 0 ? (o = new Date(e + 400, t, n, r, a, i, s), isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e, t, n, r, a, i, s), o
					}).apply(null, o), a = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[xe] = 24), e._w && void 0 !== e._w.d && e._w.d !== a && (_(e).weekdayMismatch = !0)
				}
			}

			function jt(e) {
				if (e._f !== i.ISO_8601)
					if (e._f !== i.RFC_2822) {
						e._a = [], _(e).empty = !0;
						var t, n, r, a, s, o, l = "" + e._i,
							d = l.length,
							u = 0;
						for (r = R(e._f, e._locale).match(A) || [], t = 0; t < r.length; t++) a = r[t], (n = (l.match(_e(a, e)) || [])[0]) && ((s = l.substr(0, l.indexOf(n))).length > 0 && _(e).unusedInput.push(s), l = l.slice(l.indexOf(n) + n.length), u += n.length), O[a] ? (n ? _(e).empty = !1 : _(e).unusedTokens.push(a), be(a, n, e)) : e._strict && !n && _(e).unusedTokens.push(a);
						_(e).charsLeftOver = d - u, l.length > 0 && _(e).unusedInput.push(l), e._a[xe] <= 12 && !0 === _(e).bigHour && e._a[xe] > 0 && (_(e).bigHour = void 0), _(e).parsedDateParts = e._a.slice(0), _(e).meridiem = e._meridiem, e._a[xe] = function (e, t, n) {
							var r;
							if (null == n) return t;
							return null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? ((r = e.isPM(n)) && t < 12 && (t += 12), r || 12 !== t || (t = 0), t) : t
						}(e._locale, e._a[xe], e._meridiem), null !== (o = _(e).era) && (e._a[ke] = e._locale.erasConvertYear(o, e._a[ke])), St(e), _t(e)
					} else Tt(e);
				else Yt(e)
			}

			function Ct(e) {
				var t = e._i,
					n = e._f;
				return e._locale = e._locale || pt(e._l), null === t || void 0 === n && "" === t ? y({
					nullInput: !0
				}) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), k(t) ? new L(_t(t)) : (f(t) ? e._d = t : s(n) ? function (e) {
					var t, n, r, a, i, s, o = !1;
					if (0 === e._f.length) return _(e).invalidFormat = !0, void(e._d = new Date(NaN));
					for (a = 0; a < e._f.length; a++) i = 0, s = !1, t = b({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[a], jt(t), v(t) && (s = !0), i += _(t).charsLeftOver, i += 10 * _(t).unusedTokens.length, _(t).score = i, o ? i < r && (r = i, n = t) : (null == r || i < r || s) && (r = i, n = t, s && (o = !0));
					h(e, n || t)
				}(e) : n ? jt(e) : function (e) {
					var t = e._i;
					u(t) ? e._d = new Date(i.now()) : f(t) ? e._d = new Date(t.valueOf()) : "string" == typeof t ? function (e) {
						var t = Lt.exec(e._i);
						null === t ? (Yt(e), !1 === e._isValid && (delete e._isValid, Tt(e), !1 === e._isValid && (delete e._isValid, e._strict ? e._isValid = !1 : i.createFromInputFallback(e)))) : e._d = new Date(+t[1])
					}(e) : s(t) ? (e._a = m(t.slice(0), function (e) {
						return parseInt(e, 10)
					}), St(e)) : o(t) ? function (e) {
						if (!e._d) {
							var t = z(e._i),
								n = void 0 === t.day ? t.date : t.day;
							e._a = m([t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond], function (e) {
								return e && parseInt(e, 10)
							}), St(e)
						}
					}(e) : c(t) ? e._d = new Date(t) : i.createFromInputFallback(e)
				}(e), v(e) || (e._d = null), e))
			}

			function Ht(e, t, n, r, a) {
				var i, l = {};
				return !0 !== t && !1 !== t || (r = t, t = void 0), !0 !== n && !1 !== n || (r = n, n = void 0), (o(e) && d(e) || s(e) && 0 === e.length) && (e = void 0), l._isAMomentObject = !0, l._useUTC = l._isUTC = a, l._l = n, l._i = e, l._f = t, l._strict = r, (i = new L(_t(Ct(l))))._nextDay && (i.add(1, "d"), i._nextDay = void 0), i
			}

			function At(e, t, n, r) {
				return Ht(e, t, n, r, !1)
			}
			i.createFromInputFallback = Y("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (e) {
				e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
			}), i.ISO_8601 = function () {}, i.RFC_2822 = function () {};
			var Et = Y("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
					var e = At.apply(null, arguments);
					return this.isValid() && e.isValid() ? e < this ? this : e : y()
				}),
				Pt = Y("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
					var e = At.apply(null, arguments);
					return this.isValid() && e.isValid() ? e > this ? this : e : y()
				});

			function Ot(e, t) {
				var n, r;
				if (1 === t.length && s(t[0]) && (t = t[0]), !t.length) return At();
				for (n = t[0], r = 1; r < t.length; ++r) t[r].isValid() && !t[r][e](n) || (n = t[r]);
				return n
			}
			var $t = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

			function Nt(e) {
				var t = z(e),
					n = t.year || 0,
					r = t.quarter || 0,
					a = t.month || 0,
					i = t.week || t.isoWeek || 0,
					s = t.day || 0,
					o = t.hour || 0,
					d = t.minute || 0,
					u = t.second || 0,
					c = t.millisecond || 0;
				this._isValid = function (e) {
					var t, n, r = !1;
					for (t in e)
						if (l(e, t) && (-1 === Le.call($t, t) || null != e[t] && isNaN(e[t]))) return !1;
					for (n = 0; n < $t.length; ++n)
						if (e[$t[n]]) {
							if (r) return !1;
							parseFloat(e[$t[n]]) !== V(e[$t[n]]) && (r = !0)
						}
					return !0
				}(t), this._milliseconds = +c + 1e3 * u + 6e4 * d + 1e3 * o * 60 * 60, this._days = +s + 7 * i, this._months = +a + 3 * r + 12 * n, this._data = {}, this._locale = pt(), this._bubble()
			}

			function Rt(e) {
				return e instanceof Nt
			}

			function Ft(e) {
				return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
			}

			function Wt(e, t) {
				$(e, 0, 0, function () {
					var e = this.utcOffset(),
						n = "+";
					return e < 0 && (e = -e, n = "-"), n + H(~~(e / 60), 2) + t + H(~~e % 60, 2)
				})
			}
			Wt("Z", ":"), Wt("ZZ", ""), pe("Z", me), pe("ZZ", me), ge(["Z", "ZZ"], function (e, t, n) {
				n._useUTC = !0, n._tzm = zt(me, e)
			});
			var It = /([\+\-]|\d\d)/gi;

			function zt(e, t) {
				var n, r, a = (t || "").match(e);
				return null === a ? null : 0 === (r = 60 * (n = ((a[a.length - 1] || []) + "").match(It) || ["-", 0, 0])[1] + V(n[2])) ? 0 : "+" === n[0] ? r : -r
			}

			function Ut(e, t) {
				var n, r;
				return t._isUTC ? (n = t.clone(), r = (k(e) || f(e) ? e.valueOf() : At(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + r), i.updateOffset(n, !1), n) : At(e).local()
			}

			function qt(e) {
				return -Math.round(e._d.getTimezoneOffset())
			}

			function Jt() {
				return !!this.isValid() && (this._isUTC && 0 === this._offset)
			}
			i.updateOffset = function () {};
			var Bt = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
				Vt = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

			function Gt(e, t) {
				var n, r, a, i = e,
					s = null;
				return Rt(e) ? i = {
					ms: e._milliseconds,
					d: e._days,
					M: e._months
				} : c(e) || !isNaN(+e) ? (i = {}, t ? i[t] = +e : i.milliseconds = +e) : (s = Bt.exec(e)) ? (n = "-" === s[1] ? -1 : 1, i = {
					y: 0,
					d: V(s[Ye]) * n,
					h: V(s[xe]) * n,
					m: V(s[Te]) * n,
					s: V(s[De]) * n,
					ms: V(Ft(1e3 * s[Se])) * n
				}) : (s = Vt.exec(e)) ? (n = "-" === s[1] ? -1 : 1, i = {
					y: Kt(s[2], n),
					M: Kt(s[3], n),
					w: Kt(s[4], n),
					d: Kt(s[5], n),
					h: Kt(s[6], n),
					m: Kt(s[7], n),
					s: Kt(s[8], n)
				}) : null == i ? i = {} : "object" == typeof i && ("from" in i || "to" in i) && (a = function (e, t) {
					var n;
					if (!e.isValid() || !t.isValid()) return {
						milliseconds: 0,
						months: 0
					};
					t = Ut(t, e), e.isBefore(t) ? n = Xt(e, t) : ((n = Xt(t, e)).milliseconds = -n.milliseconds, n.months = -n.months);
					return n
				}(At(i.from), At(i.to)), (i = {}).ms = a.milliseconds, i.M = a.months), r = new Nt(i), Rt(e) && l(e, "_locale") && (r._locale = e._locale), Rt(e) && l(e, "_isValid") && (r._isValid = e._isValid), r
			}

			function Kt(e, t) {
				var n = e && parseFloat(e.replace(",", "."));
				return (isNaN(n) ? 0 : n) * t
			}

			function Xt(e, t) {
				var n = {};
				return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
			}

			function Qt(e, t) {
				return function (n, r) {
					var a;
					return null === r || isNaN(+r) || (D(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), a = n, n = r, r = a), Zt(this, Gt(n, r), e), this
				}
			}

			function Zt(e, t, n, r) {
				var a = t._milliseconds,
					s = Ft(t._days),
					o = Ft(t._months);
				e.isValid() && (r = null == r || r, o && Ne(e, K(e, "Month") + o * n), s && X(e, "Date", K(e, "Date") + s * n), a && e._d.setTime(e._d.valueOf() + a * n), r && i.updateOffset(e, s || o))
			}
			Gt.fn = Nt.prototype, Gt.invalid = function () {
				return Gt(NaN)
			};
			var en = Qt(1, "add"),
				tn = Qt(-1, "subtract");

			function nn(e) {
				return "string" == typeof e || e instanceof String
			}

			function rn(e) {
				return k(e) || f(e) || nn(e) || c(e) || function (e) {
					var t = s(e),
						n = !1;
					t && (n = 0 === e.filter(function (t) {
						return !c(t) && nn(e)
					}).length);
					return t && n
				}(e) || function (e) {
					var t, n = o(e) && !d(e),
						r = !1,
						a = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"];
					for (t = 0; t < a.length; t += 1) r = r || l(e, a[t]);
					return n && r
				}(e) || null === e || void 0 === e
			}

			function an(e, t) {
				if (e.date() < t.date()) return -an(t, e);
				var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
					r = e.clone().add(n, "months");
				return -(n + (t - r < 0 ? (t - r) / (r - e.clone().add(n - 1, "months")) : (t - r) / (e.clone().add(n + 1, "months") - r))) || 0
			}

			function sn(e) {
				var t;
				return void 0 === e ? this._locale._abbr : (null != (t = pt(e)) && (this._locale = t), this)
			}
			i.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", i.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
			var on = Y("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (e) {
				return void 0 === e ? this.localeData() : this.locale(e)
			});

			function ln() {
				return this._locale
			}
			var dn = 1e3,
				un = 60 * dn,
				cn = 60 * un,
				fn = 3506328 * cn;

			function mn(e, t) {
				return (e % t + t) % t
			}

			function hn(e, t, n) {
				return e < 100 && e >= 0 ? new Date(e + 400, t, n) - fn : new Date(e, t, n).valueOf()
			}

			function pn(e, t, n) {
				return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - fn : Date.UTC(e, t, n)
			}

			function _n(e, t) {
				return t.erasAbbrRegex(e)
			}

			function vn() {
				var e, t, n = [],
					r = [],
					a = [],
					i = [],
					s = this.eras();
				for (e = 0, t = s.length; e < t; ++e) r.push(ve(s[e].name)), n.push(ve(s[e].abbr)), a.push(ve(s[e].narrow)), i.push(ve(s[e].name)), i.push(ve(s[e].abbr)), i.push(ve(s[e].narrow));
				this._erasRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp("^(" + a.join("|") + ")", "i")
			}

			function yn(e, t) {
				$(0, [e, e.length], 0, t)
			}

			function gn(e, t, n, r, a) {
				var i;
				return null == e ? Je(this, r, a).year : (t > (i = Be(e, r, a)) && (t = i), function (e, t, n, r, a) {
					var i = qe(e, t, n, r, a),
						s = ze(i.year, 0, i.dayOfYear);
					return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this
				}.call(this, e, t, n, r, a))
			}
			$("N", 0, 0, "eraAbbr"), $("NN", 0, 0, "eraAbbr"), $("NNN", 0, 0, "eraAbbr"), $("NNNN", 0, 0, "eraName"), $("NNNNN", 0, 0, "eraNarrow"), $("y", ["y", 1], "yo", "eraYear"), $("y", ["yy", 2], 0, "eraYear"), $("y", ["yyy", 3], 0, "eraYear"), $("y", ["yyyy", 4], 0, "eraYear"), pe("N", _n), pe("NN", _n), pe("NNN", _n), pe("NNNN", function (e, t) {
				return t.erasNameRegex(e)
			}), pe("NNNNN", function (e, t) {
				return t.erasNarrowRegex(e)
			}), ge(["N", "NN", "NNN", "NNNN", "NNNNN"], function (e, t, n, r) {
				var a = n._locale.erasParse(e, r, n._strict);
				a ? _(n).era = a : _(n).invalidEra = e
			}), pe("y", ue), pe("yy", ue), pe("yyy", ue), pe("yyyy", ue), pe("yo", function (e, t) {
				return t._eraYearOrdinalRegex || ue
			}), ge(["y", "yy", "yyy", "yyyy"], ke), ge(["yo"], function (e, t, n, r) {
				var a;
				n._locale._eraYearOrdinalRegex && (a = e.match(n._locale._eraYearOrdinalRegex)), n._locale.eraYearOrdinalParse ? t[ke] = n._locale.eraYearOrdinalParse(e, a) : t[ke] = parseInt(e, 10)
			}), $(0, ["gg", 2], 0, function () {
				return this.weekYear() % 100
			}), $(0, ["GG", 2], 0, function () {
				return this.isoWeekYear() % 100
			}), yn("gggg", "weekYear"), yn("ggggg", "weekYear"), yn("GGGG", "isoWeekYear"), yn("GGGGG", "isoWeekYear"), W("weekYear", "gg"), W("isoWeekYear", "GG"), q("weekYear", 1), q("isoWeekYear", 1), pe("G", ce), pe("g", ce), pe("GG", ae, ee), pe("gg", ae, ee), pe("GGGG", le, ne), pe("gggg", le, ne), pe("GGGGG", de, re), pe("ggggg", de, re), Me(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, r) {
				t[r.substr(0, 2)] = V(e)
			}), Me(["gg", "GG"], function (e, t, n, r) {
				t[r] = i.parseTwoDigitYear(e)
			}), $("Q", 0, "Qo", "quarter"), W("quarter", "Q"), q("quarter", 7), pe("Q", Z), ge("Q", function (e, t) {
				t[we] = 3 * (V(e) - 1)
			}), $("D", ["DD", 2], "Do", "date"), W("date", "D"), q("date", 9), pe("D", ae), pe("DD", ae, ee), pe("Do", function (e, t) {
				return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
			}), ge(["D", "DD"], Ye), ge("Do", function (e, t) {
				t[Ye] = V(e.match(ae)[0])
			});
			var Mn = G("Date", !0);
			$("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), W("dayOfYear", "DDD"), q("dayOfYear", 4), pe("DDD", oe), pe("DDDD", te), ge(["DDD", "DDDD"], function (e, t, n) {
				n._dayOfYear = V(e)
			}), $("m", ["mm", 2], 0, "minute"), W("minute", "m"), q("minute", 14), pe("m", ae), pe("mm", ae, ee), ge(["m", "mm"], Te);
			var bn = G("Minutes", !1);
			$("s", ["ss", 2], 0, "second"), W("second", "s"), q("second", 15), pe("s", ae), pe("ss", ae, ee), ge(["s", "ss"], De);
			var Ln, kn, wn = G("Seconds", !1);
			for ($("S", 0, 0, function () {
					return ~~(this.millisecond() / 100)
				}), $(0, ["SS", 2], 0, function () {
					return ~~(this.millisecond() / 10)
				}), $(0, ["SSS", 3], 0, "millisecond"), $(0, ["SSSS", 4], 0, function () {
					return 10 * this.millisecond()
				}), $(0, ["SSSSS", 5], 0, function () {
					return 100 * this.millisecond()
				}), $(0, ["SSSSSS", 6], 0, function () {
					return 1e3 * this.millisecond()
				}), $(0, ["SSSSSSS", 7], 0, function () {
					return 1e4 * this.millisecond()
				}), $(0, ["SSSSSSSS", 8], 0, function () {
					return 1e5 * this.millisecond()
				}), $(0, ["SSSSSSSSS", 9], 0, function () {
					return 1e6 * this.millisecond()
				}), W("millisecond", "ms"), q("millisecond", 16), pe("S", oe, Z), pe("SS", oe, ee), pe("SSS", oe, te), Ln = "SSSS"; Ln.length <= 9; Ln += "S") pe(Ln, ue);

			function Yn(e, t) {
				t[Se] = V(1e3 * ("0." + e))
			}
			for (Ln = "S"; Ln.length <= 9; Ln += "S") ge(Ln, Yn);
			kn = G("Milliseconds", !1), $("z", 0, 0, "zoneAbbr"), $("zz", 0, 0, "zoneName");
			var xn = L.prototype;

			function Tn(e) {
				return e
			}
			xn.add = en, xn.calendar = function (e, t) {
				1 === arguments.length && (arguments[0] ? rn(arguments[0]) ? (e = arguments[0], t = void 0) : function (e) {
					var t, n = o(e) && !d(e),
						r = !1,
						a = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"];
					for (t = 0; t < a.length; t += 1) r = r || l(e, a[t]);
					return n && r
				}(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
				var n = e || At(),
					r = Ut(n, this).startOf("day"),
					a = i.calendarFormat(this, r) || "sameElse",
					s = t && (S(t[a]) ? t[a].call(this, n) : t[a]);
				return this.format(s || this.localeData().calendar(a, this, At(n)))
			}, xn.clone = function () {
				return new L(this)
			}, xn.diff = function (e, t, n) {
				var r, a, i;
				if (!this.isValid()) return NaN;
				if (!(r = Ut(e, this)).isValid()) return NaN;
				switch (a = 6e4 * (r.utcOffset() - this.utcOffset()), t = I(t)) {
					case "year":
						i = an(this, r) / 12;
						break;
					case "month":
						i = an(this, r);
						break;
					case "quarter":
						i = an(this, r) / 3;
						break;
					case "second":
						i = (this - r) / 1e3;
						break;
					case "minute":
						i = (this - r) / 6e4;
						break;
					case "hour":
						i = (this - r) / 36e5;
						break;
					case "day":
						i = (this - r - a) / 864e5;
						break;
					case "week":
						i = (this - r - a) / 6048e5;
						break;
					default:
						i = this - r
				}
				return n ? i : B(i)
			}, xn.endOf = function (e) {
				var t, n;
				if (void 0 === (e = I(e)) || "millisecond" === e || !this.isValid()) return this;
				switch (n = this._isUTC ? pn : hn, e) {
					case "year":
						t = n(this.year() + 1, 0, 1) - 1;
						break;
					case "quarter":
						t = n(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
						break;
					case "month":
						t = n(this.year(), this.month() + 1, 1) - 1;
						break;
					case "week":
						t = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
						break;
					case "isoWeek":
						t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
						break;
					case "day":
					case "date":
						t = n(this.year(), this.month(), this.date() + 1) - 1;
						break;
					case "hour":
						t = this._d.valueOf(), t += cn - mn(t + (this._isUTC ? 0 : this.utcOffset() * un), cn) - 1;
						break;
					case "minute":
						t = this._d.valueOf(), t += un - mn(t, un) - 1;
						break;
					case "second":
						t = this._d.valueOf(), t += dn - mn(t, dn) - 1
				}
				return this._d.setTime(t), i.updateOffset(this, !0), this
			}, xn.format = function (e) {
				e || (e = this.isUtc() ? i.defaultFormatUtc : i.defaultFormat);
				var t = N(this, e);
				return this.localeData().postformat(t)
			}, xn.from = function (e, t) {
				return this.isValid() && (k(e) && e.isValid() || At(e).isValid()) ? Gt({
					to: this,
					from: e
				}).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
			}, xn.fromNow = function (e) {
				return this.from(At(), e)
			}, xn.to = function (e, t) {
				return this.isValid() && (k(e) && e.isValid() || At(e).isValid()) ? Gt({
					from: this,
					to: e
				}).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
			}, xn.toNow = function (e) {
				return this.to(At(), e)
			}, xn.get = function (e) {
				return S(this[e = I(e)]) ? this[e]() : this
			}, xn.invalidAt = function () {
				return _(this).overflow
			}, xn.isAfter = function (e, t) {
				var n = k(e) ? e : At(e);
				return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = I(t) || "millisecond") ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
			}, xn.isBefore = function (e, t) {
				var n = k(e) ? e : At(e);
				return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = I(t) || "millisecond") ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
			}, xn.isBetween = function (e, t, n, r) {
				var a = k(e) ? e : At(e),
					i = k(t) ? t : At(t);
				return !!(this.isValid() && a.isValid() && i.isValid()) && ("(" === (r = r || "()")[0] ? this.isAfter(a, n) : !this.isBefore(a, n)) && (")" === r[1] ? this.isBefore(i, n) : !this.isAfter(i, n))
			}, xn.isSame = function (e, t) {
				var n, r = k(e) ? e : At(e);
				return !(!this.isValid() || !r.isValid()) && ("millisecond" === (t = I(t) || "millisecond") ? this.valueOf() === r.valueOf() : (n = r.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
			}, xn.isSameOrAfter = function (e, t) {
				return this.isSame(e, t) || this.isAfter(e, t)
			}, xn.isSameOrBefore = function (e, t) {
				return this.isSame(e, t) || this.isBefore(e, t)
			}, xn.isValid = function () {
				return v(this)
			}, xn.lang = on, xn.locale = sn, xn.localeData = ln, xn.max = Pt, xn.min = Et, xn.parsingFlags = function () {
				return h({}, _(this))
			}, xn.set = function (e, t) {
				if ("object" == typeof e) {
					var n, r = function (e) {
						var t, n = [];
						for (t in e) l(e, t) && n.push({
							unit: t,
							priority: U[t]
						});
						return n.sort(function (e, t) {
							return e.priority - t.priority
						}), n
					}(e = z(e));
					for (n = 0; n < r.length; n++) this[r[n].unit](e[r[n].unit])
				} else if (S(this[e = I(e)])) return this[e](t);
				return this
			}, xn.startOf = function (e) {
				var t, n;
				if (void 0 === (e = I(e)) || "millisecond" === e || !this.isValid()) return this;
				switch (n = this._isUTC ? pn : hn, e) {
					case "year":
						t = n(this.year(), 0, 1);
						break;
					case "quarter":
						t = n(this.year(), this.month() - this.month() % 3, 1);
						break;
					case "month":
						t = n(this.year(), this.month(), 1);
						break;
					case "week":
						t = n(this.year(), this.month(), this.date() - this.weekday());
						break;
					case "isoWeek":
						t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
						break;
					case "day":
					case "date":
						t = n(this.year(), this.month(), this.date());
						break;
					case "hour":
						t = this._d.valueOf(), t -= mn(t + (this._isUTC ? 0 : this.utcOffset() * un), cn);
						break;
					case "minute":
						t = this._d.valueOf(), t -= mn(t, un);
						break;
					case "second":
						t = this._d.valueOf(), t -= mn(t, dn)
				}
				return this._d.setTime(t), i.updateOffset(this, !0), this
			}, xn.subtract = tn, xn.toArray = function () {
				var e = this;
				return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
			}, xn.toObject = function () {
				var e = this;
				return {
					years: e.year(),
					months: e.month(),
					date: e.date(),
					hours: e.hours(),
					minutes: e.minutes(),
					seconds: e.seconds(),
					milliseconds: e.milliseconds()
				}
			}, xn.toDate = function () {
				return new Date(this.valueOf())
			}, xn.toISOString = function (e) {
				if (!this.isValid()) return null;
				var t = !0 !== e,
					n = t ? this.clone().utc() : this;
				return n.year() < 0 || n.year() > 9999 ? N(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : S(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", N(n, "Z")) : N(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
			}, xn.inspect = function () {
				if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
				var e, t, n, r = "moment",
					a = "";
				return this.isLocal() || (r = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", a = "Z"), e = "[" + r + '("]', t = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", n = a + '[")]', this.format(e + t + "-MM-DD[T]HH:mm:ss.SSS" + n)
			}, "undefined" != typeof Symbol && null != Symbol.for && (xn[Symbol.for("nodejs.util.inspect.custom")] = function () {
				return "Moment<" + this.format() + ">"
			}), xn.toJSON = function () {
				return this.isValid() ? this.toISOString() : null
			}, xn.toString = function () {
				return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
			}, xn.unix = function () {
				return Math.floor(this.valueOf() / 1e3)
			}, xn.valueOf = function () {
				return this._d.valueOf() - 6e4 * (this._offset || 0)
			}, xn.creationData = function () {
				return {
					input: this._i,
					format: this._f,
					locale: this._locale,
					isUTC: this._isUTC,
					strict: this._strict
				}
			}, xn.eraName = function () {
				var e, t, n, r = this.localeData().eras();
				for (e = 0, t = r.length; e < t; ++e) {
					if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until) return r[e].name;
					if (r[e].until <= n && n <= r[e].since) return r[e].name
				}
				return ""
			}, xn.eraNarrow = function () {
				var e, t, n, r = this.localeData().eras();
				for (e = 0, t = r.length; e < t; ++e) {
					if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until) return r[e].narrow;
					if (r[e].until <= n && n <= r[e].since) return r[e].narrow
				}
				return ""
			}, xn.eraAbbr = function () {
				var e, t, n, r = this.localeData().eras();
				for (e = 0, t = r.length; e < t; ++e) {
					if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until) return r[e].abbr;
					if (r[e].until <= n && n <= r[e].since) return r[e].abbr
				}
				return ""
			}, xn.eraYear = function () {
				var e, t, n, r, a = this.localeData().eras();
				for (e = 0, t = a.length; e < t; ++e)
					if (n = a[e].since <= a[e].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), a[e].since <= r && r <= a[e].until || a[e].until <= r && r <= a[e].since) return (this.year() - i(a[e].since).year()) * n + a[e].offset;
				return this.year()
			}, xn.year = Ie, xn.isLeapYear = function () {
				return J(this.year())
			}, xn.weekYear = function (e) {
				return gn.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
			}, xn.isoWeekYear = function (e) {
				return gn.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
			}, xn.quarter = xn.quarters = function (e) {
				return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
			}, xn.month = Re, xn.daysInMonth = function () {
				return He(this.year(), this.month())
			}, xn.week = xn.weeks = function (e) {
				var t = this.localeData().week(this);
				return null == e ? t : this.add(7 * (e - t), "d")
			}, xn.isoWeek = xn.isoWeeks = function (e) {
				var t = Je(this, 1, 4).week;
				return null == e ? t : this.add(7 * (e - t), "d")
			}, xn.weeksInYear = function () {
				var e = this.localeData()._week;
				return Be(this.year(), e.dow, e.doy)
			}, xn.weeksInWeekYear = function () {
				var e = this.localeData()._week;
				return Be(this.weekYear(), e.dow, e.doy)
			}, xn.isoWeeksInYear = function () {
				return Be(this.year(), 1, 4)
			}, xn.isoWeeksInISOWeekYear = function () {
				return Be(this.isoWeekYear(), 1, 4)
			}, xn.date = Mn, xn.day = xn.days = function (e) {
				if (!this.isValid()) return null != e ? this : NaN;
				var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
				return null != e ? (e = function (e, t) {
					return "string" != typeof e ? e : isNaN(e) ? "number" == typeof (e = t.weekdaysParse(e)) ? e : null : parseInt(e, 10)
				}(e, this.localeData()), this.add(e - t, "d")) : t
			}, xn.weekday = function (e) {
				if (!this.isValid()) return null != e ? this : NaN;
				var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
				return null == e ? t : this.add(e - t, "d")
			}, xn.isoWeekday = function (e) {
				if (!this.isValid()) return null != e ? this : NaN;
				if (null != e) {
					var t = function (e, t) {
						return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
					}(e, this.localeData());
					return this.day(this.day() % 7 ? t : t - 7)
				}
				return this.day() || 7
			}, xn.dayOfYear = function (e) {
				var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
				return null == e ? t : this.add(e - t, "d")
			}, xn.hour = xn.hours = it, xn.minute = xn.minutes = bn, xn.second = xn.seconds = wn, xn.millisecond = xn.milliseconds = kn, xn.utcOffset = function (e, t, n) {
				var r, a = this._offset || 0;
				if (!this.isValid()) return null != e ? this : NaN;
				if (null != e) {
					if ("string" == typeof e) {
						if (null === (e = zt(me, e))) return this
					} else Math.abs(e) < 16 && !n && (e *= 60);
					return !this._isUTC && t && (r = qt(this)), this._offset = e, this._isUTC = !0, null != r && this.add(r, "m"), a !== e && (!t || this._changeInProgress ? Zt(this, Gt(e - a, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, i.updateOffset(this, !0), this._changeInProgress = null)), this
				}
				return this._isUTC ? a : qt(this)
			}, xn.utc = function (e) {
				return this.utcOffset(0, e)
			}, xn.local = function (e) {
				return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(qt(this), "m")), this
			}, xn.parseZone = function () {
				if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
				else if ("string" == typeof this._i) {
					var e = zt(fe, this._i);
					null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
				}
				return this
			}, xn.hasAlignedHourOffset = function (e) {
				return !!this.isValid() && (e = e ? At(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
			}, xn.isDST = function () {
				return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
			}, xn.isLocal = function () {
				return !!this.isValid() && !this._isUTC
			}, xn.isUtcOffset = function () {
				return !!this.isValid() && this._isUTC
			}, xn.isUtc = Jt, xn.isUTC = Jt, xn.zoneAbbr = function () {
				return this._isUTC ? "UTC" : ""
			}, xn.zoneName = function () {
				return this._isUTC ? "Coordinated Universal Time" : ""
			}, xn.dates = Y("dates accessor is deprecated. Use date instead.", Mn), xn.months = Y("months accessor is deprecated. Use month instead", Re), xn.years = Y("years accessor is deprecated. Use year instead", Ie), xn.zone = Y("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function (e, t) {
				return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
			}), xn.isDSTShifted = Y("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function () {
				if (!u(this._isDSTShifted)) return this._isDSTShifted;
				var e, t = {};
				return b(t, this), (t = Ct(t))._a ? (e = t._isUTC ? p(t._a) : At(t._a), this._isDSTShifted = this.isValid() && function (e, t, n) {
					var r, a = Math.min(e.length, t.length),
						i = Math.abs(e.length - t.length),
						s = 0;
					for (r = 0; r < a; r++)(n && e[r] !== t[r] || !n && V(e[r]) !== V(t[r])) && s++;
					return s + i
				}(t._a, e.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted
			});
			var Dn = C.prototype;

			function Sn(e, t, n, r) {
				var a = pt(),
					i = p().set(r, t);
				return a[n](i, e)
			}

			function jn(e, t, n) {
				if (c(e) && (t = e, e = void 0), e = e || "", null != t) return Sn(e, t, n, "month");
				var r, a = [];
				for (r = 0; r < 12; r++) a[r] = Sn(e, r, n, "month");
				return a
			}

			function Cn(e, t, n, r) {
				"boolean" == typeof e ? (c(t) && (n = t, t = void 0), t = t || "") : (n = t = e, e = !1, c(t) && (n = t, t = void 0), t = t || "");
				var a, i = pt(),
					s = e ? i._week.dow : 0,
					o = [];
				if (null != n) return Sn(t, (n + s) % 7, r, "day");
				for (a = 0; a < 7; a++) o[a] = Sn(t, (a + s) % 7, r, "day");
				return o
			}
			Dn.calendar = function (e, t, n) {
				var r = this._calendar[e] || this._calendar.sameElse;
				return S(r) ? r.call(t, n) : r
			}, Dn.longDateFormat = function (e) {
				var t = this._longDateFormat[e],
					n = this._longDateFormat[e.toUpperCase()];
				return t || !n ? t : (this._longDateFormat[e] = n.match(A).map(function (e) {
					return "MMMM" === e || "MM" === e || "DD" === e || "dddd" === e ? e.slice(1) : e
				}).join(""), this._longDateFormat[e])
			}, Dn.invalidDate = function () {
				return this._invalidDate
			}, Dn.ordinal = function (e) {
				return this._ordinal.replace("%d", e)
			}, Dn.preparse = Tn, Dn.postformat = Tn, Dn.relativeTime = function (e, t, n, r) {
				var a = this._relativeTime[n];
				return S(a) ? a(e, t, n, r) : a.replace(/%d/i, e)
			}, Dn.pastFuture = function (e, t) {
				var n = this._relativeTime[e > 0 ? "future" : "past"];
				return S(n) ? n(t) : n.replace(/%s/i, t)
			}, Dn.set = function (e) {
				var t, n;
				for (n in e) l(e, n) && (S(t = e[n]) ? this[n] = t : this["_" + n] = t);
				this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
			}, Dn.eras = function (e, t) {
				var n, r, a, s = this._eras || pt("en")._eras;
				for (n = 0, r = s.length; n < r; ++n) {
					switch (typeof s[n].since) {
						case "string":
							a = i(s[n].since).startOf("day"), s[n].since = a.valueOf()
					}
					switch (typeof s[n].until) {
						case "undefined":
							s[n].until = 1 / 0;
							break;
						case "string":
							a = i(s[n].until).startOf("day").valueOf(), s[n].until = a.valueOf()
					}
				}
				return s
			}, Dn.erasParse = function (e, t, n) {
				var r, a, i, s, o, l = this.eras();
				for (e = e.toUpperCase(), r = 0, a = l.length; r < a; ++r)
					if (i = l[r].name.toUpperCase(), s = l[r].abbr.toUpperCase(), o = l[r].narrow.toUpperCase(), n) switch (t) {
						case "N":
						case "NN":
						case "NNN":
							if (s === e) return l[r];
							break;
						case "NNNN":
							if (i === e) return l[r];
							break;
						case "NNNNN":
							if (o === e) return l[r]
					} else if ([i, s, o].indexOf(e) >= 0) return l[r]
			}, Dn.erasConvertYear = function (e, t) {
				var n = e.since <= e.until ? 1 : -1;
				return void 0 === t ? i(e.since).year() : i(e.since).year() + (t - e.offset) * n
			}, Dn.erasAbbrRegex = function (e) {
				return l(this, "_erasAbbrRegex") || vn.call(this), e ? this._erasAbbrRegex : this._erasRegex
			}, Dn.erasNameRegex = function (e) {
				return l(this, "_erasNameRegex") || vn.call(this), e ? this._erasNameRegex : this._erasRegex
			}, Dn.erasNarrowRegex = function (e) {
				return l(this, "_erasNarrowRegex") || vn.call(this), e ? this._erasNarrowRegex : this._erasRegex
			}, Dn.months = function (e, t) {
				return e ? s(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Pe).test(t) ? "format" : "standalone"][e.month()] : s(this._months) ? this._months : this._months.standalone
			}, Dn.monthsShort = function (e, t) {
				return e ? s(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Pe.test(t) ? "format" : "standalone"][e.month()] : s(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
			}, Dn.monthsParse = function (e, t, n) {
				var r, a, i;
				if (this._monthsParseExact) return function (e, t, n) {
					var r, a, i, s = e.toLocaleLowerCase();
					if (!this._monthsParse)
						for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r) i = p([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(i, "").toLocaleLowerCase(), this._longMonthsParse[r] = this.months(i, "").toLocaleLowerCase();
					return n ? "MMM" === t ? -1 !== (a = Le.call(this._shortMonthsParse, s)) ? a : null : -1 !== (a = Le.call(this._longMonthsParse, s)) ? a : null : "MMM" === t ? -1 !== (a = Le.call(this._shortMonthsParse, s)) ? a : -1 !== (a = Le.call(this._longMonthsParse, s)) ? a : null : -1 !== (a = Le.call(this._longMonthsParse, s)) ? a : -1 !== (a = Le.call(this._shortMonthsParse, s)) ? a : null
				}.call(this, e, t, n);
				for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
					if (a = p([2e3, r]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(a, "").replace(".", "") + "$", "i"), this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(a, "").replace(".", "") + "$", "i")), n || this._monthsParse[r] || (i = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""), this._monthsParse[r] = new RegExp(i.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[r].test(e)) return r;
					if (n && "MMM" === t && this._shortMonthsParse[r].test(e)) return r;
					if (!n && this._monthsParse[r].test(e)) return r
				}
			}, Dn.monthsRegex = function (e) {
				return this._monthsParseExact ? (l(this, "_monthsRegex") || Fe.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (l(this, "_monthsRegex") || (this._monthsRegex = $e), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
			}, Dn.monthsShortRegex = function (e) {
				return this._monthsParseExact ? (l(this, "_monthsRegex") || Fe.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (l(this, "_monthsShortRegex") || (this._monthsShortRegex = Oe), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
			}, Dn.week = function (e) {
				return Je(e, this._week.dow, this._week.doy).week
			}, Dn.firstDayOfYear = function () {
				return this._week.doy
			}, Dn.firstDayOfWeek = function () {
				return this._week.dow
			}, Dn.weekdays = function (e, t) {
				var n = s(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
				return !0 === e ? Ve(n, this._week.dow) : e ? n[e.day()] : n
			}, Dn.weekdaysMin = function (e) {
				return !0 === e ? Ve(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
			}, Dn.weekdaysShort = function (e) {
				return !0 === e ? Ve(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort
			}, Dn.weekdaysParse = function (e, t, n) {
				var r, a, i;
				if (this._weekdaysParseExact) return function (e, t, n) {
					var r, a, i, s = e.toLocaleLowerCase();
					if (!this._weekdaysParse)
						for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r) i = p([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(i, "").toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(i, "").toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(i, "").toLocaleLowerCase();
					return n ? "dddd" === t ? -1 !== (a = Le.call(this._weekdaysParse, s)) ? a : null : "ddd" === t ? -1 !== (a = Le.call(this._shortWeekdaysParse, s)) ? a : null : -1 !== (a = Le.call(this._minWeekdaysParse, s)) ? a : null : "dddd" === t ? -1 !== (a = Le.call(this._weekdaysParse, s)) ? a : -1 !== (a = Le.call(this._shortWeekdaysParse, s)) ? a : -1 !== (a = Le.call(this._minWeekdaysParse, s)) ? a : null : "ddd" === t ? -1 !== (a = Le.call(this._shortWeekdaysParse, s)) ? a : -1 !== (a = Le.call(this._weekdaysParse, s)) ? a : -1 !== (a = Le.call(this._minWeekdaysParse, s)) ? a : null : -1 !== (a = Le.call(this._minWeekdaysParse, s)) ? a : -1 !== (a = Le.call(this._weekdaysParse, s)) ? a : -1 !== (a = Le.call(this._shortWeekdaysParse, s)) ? a : null
				}.call(this, e, t, n);
				for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
					if (a = p([2e3, 1]).day(r), n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp("^" + this.weekdays(a, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[r] = new RegExp("^" + this.weekdaysShort(a, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[r] = new RegExp("^" + this.weekdaysMin(a, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[r] || (i = "^" + this.weekdays(a, "") + "|^" + this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""), this._weekdaysParse[r] = new RegExp(i.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[r].test(e)) return r;
					if (n && "ddd" === t && this._shortWeekdaysParse[r].test(e)) return r;
					if (n && "dd" === t && this._minWeekdaysParse[r].test(e)) return r;
					if (!n && this._weekdaysParse[r].test(e)) return r
				}
			}, Dn.weekdaysRegex = function (e) {
				return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || tt.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (l(this, "_weekdaysRegex") || (this._weekdaysRegex = Qe), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
			}, Dn.weekdaysShortRegex = function (e) {
				return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || tt.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (l(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Ze), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
			}, Dn.weekdaysMinRegex = function (e) {
				return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || tt.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (l(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = et), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
			}, Dn.isPM = function (e) {
				return "p" === (e + "").toLowerCase().charAt(0)
			}, Dn.meridiem = function (e, t, n) {
				return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
			}, mt("en", {
				eras: [{
					since: "0001-01-01",
					until: 1 / 0,
					offset: 1,
					name: "Anno Domini",
					narrow: "AD",
					abbr: "AD"
				}, {
					since: "0000-12-31",
					until: -1 / 0,
					offset: 1,
					name: "Before Christ",
					narrow: "BC",
					abbr: "BC"
				}],
				dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
				ordinal: function (e) {
					var t = e % 10;
					return e + (1 === V(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
				}
			}), i.lang = Y("moment.lang is deprecated. Use moment.locale instead.", mt), i.langData = Y("moment.langData is deprecated. Use moment.localeData instead.", pt);
			var Hn = Math.abs;

			function An(e, t, n, r) {
				var a = Gt(t, n);
				return e._milliseconds += r * a._milliseconds, e._days += r * a._days, e._months += r * a._months, e._bubble()
			}

			function En(e) {
				return e < 0 ? Math.floor(e) : Math.ceil(e)
			}

			function Pn(e) {
				return 4800 * e / 146097
			}

			function On(e) {
				return 146097 * e / 4800
			}

			function $n(e) {
				return function () {
					return this.as(e)
				}
			}
			var Nn = $n("ms"),
				Rn = $n("s"),
				Fn = $n("m"),
				Wn = $n("h"),
				In = $n("d"),
				zn = $n("w"),
				Un = $n("M"),
				qn = $n("Q"),
				Jn = $n("y");

			function Bn(e) {
				return function () {
					return this.isValid() ? this._data[e] : NaN
				}
			}
			var Vn = Bn("milliseconds"),
				Gn = Bn("seconds"),
				Kn = Bn("minutes"),
				Xn = Bn("hours"),
				Qn = Bn("days"),
				Zn = Bn("months"),
				er = Bn("years");
			var tr = Math.round,
				nr = {
					ss: 44,
					s: 45,
					m: 45,
					h: 22,
					d: 26,
					w: null,
					M: 11
				};
			var rr = Math.abs;

			function ar(e) {
				return (e > 0) - (e < 0) || +e
			}

			function ir() {
				if (!this.isValid()) return this.localeData().invalidDate();
				var e, t, n, r, a, i, s, o, l = rr(this._milliseconds) / 1e3,
					d = rr(this._days),
					u = rr(this._months),
					c = this.asSeconds();
				return c ? (t = B((e = B(l / 60)) / 60), l %= 60, e %= 60, n = B(u / 12), u %= 12, r = l ? l.toFixed(3).replace(/\.?0+$/, "") : "", a = c < 0 ? "-" : "", i = ar(this._months) !== ar(c) ? "-" : "", s = ar(this._days) !== ar(c) ? "-" : "", o = ar(this._milliseconds) !== ar(c) ? "-" : "", a + "P" + (n ? i + n + "Y" : "") + (u ? i + u + "M" : "") + (d ? s + d + "D" : "") + (t || e || l ? "T" : "") + (t ? o + t + "H" : "") + (e ? o + e + "M" : "") + (l ? o + r + "S" : "")) : "P0D"
			}
			var sr = Nt.prototype;
			return sr.isValid = function () {
				return this._isValid
			}, sr.abs = function () {
				var e = this._data;
				return this._milliseconds = Hn(this._milliseconds), this._days = Hn(this._days), this._months = Hn(this._months), e.milliseconds = Hn(e.milliseconds), e.seconds = Hn(e.seconds), e.minutes = Hn(e.minutes), e.hours = Hn(e.hours), e.months = Hn(e.months), e.years = Hn(e.years), this
			}, sr.add = function (e, t) {
				return An(this, e, t, 1)
			}, sr.subtract = function (e, t) {
				return An(this, e, t, -1)
			}, sr.as = function (e) {
				if (!this.isValid()) return NaN;
				var t, n, r = this._milliseconds;
				if ("month" === (e = I(e)) || "quarter" === e || "year" === e) switch (t = this._days + r / 864e5, n = this._months + Pn(t), e) {
					case "month":
						return n;
					case "quarter":
						return n / 3;
					case "year":
						return n / 12
				} else switch (t = this._days + Math.round(On(this._months)), e) {
					case "week":
						return t / 7 + r / 6048e5;
					case "day":
						return t + r / 864e5;
					case "hour":
						return 24 * t + r / 36e5;
					case "minute":
						return 1440 * t + r / 6e4;
					case "second":
						return 86400 * t + r / 1e3;
					case "millisecond":
						return Math.floor(864e5 * t) + r;
					default:
						throw new Error("Unknown unit " + e)
				}
			}, sr.asMilliseconds = Nn, sr.asSeconds = Rn, sr.asMinutes = Fn, sr.asHours = Wn, sr.asDays = In, sr.asWeeks = zn, sr.asMonths = Un, sr.asQuarters = qn, sr.asYears = Jn, sr.valueOf = function () {
				return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * V(this._months / 12) : NaN
			}, sr._bubble = function () {
				var e, t, n, r, a, i = this._milliseconds,
					s = this._days,
					o = this._months,
					l = this._data;
				return i >= 0 && s >= 0 && o >= 0 || i <= 0 && s <= 0 && o <= 0 || (i += 864e5 * En(On(o) + s), s = 0, o = 0), l.milliseconds = i % 1e3, e = B(i / 1e3), l.seconds = e % 60, t = B(e / 60), l.minutes = t % 60, n = B(t / 60), l.hours = n % 24, o += a = B(Pn(s += B(n / 24))), s -= En(On(a)), r = B(o / 12), o %= 12, l.days = s, l.months = o, l.years = r, this
			}, sr.clone = function () {
				return Gt(this)
			}, sr.get = function (e) {
				return e = I(e), this.isValid() ? this[e + "s"]() : NaN
			}, sr.milliseconds = Vn, sr.seconds = Gn, sr.minutes = Kn, sr.hours = Xn, sr.days = Qn, sr.weeks = function () {
				return B(this.days() / 7)
			}, sr.months = Zn, sr.years = er, sr.humanize = function (e, t) {
				if (!this.isValid()) return this.localeData().invalidDate();
				var n, r, a = !1,
					i = nr;
				return "object" == typeof e && (t = e, e = !1), "boolean" == typeof e && (a = e), "object" == typeof t && (i = Object.assign({}, nr, t), null != t.s && null == t.ss && (i.ss = t.s - 1)), r = function (e, t, n, r) {
					var a = Gt(e).abs(),
						i = tr(a.as("s")),
						s = tr(a.as("m")),
						o = tr(a.as("h")),
						l = tr(a.as("d")),
						d = tr(a.as("M")),
						u = tr(a.as("w")),
						c = tr(a.as("y")),
						f = i <= n.ss && ["s", i] || i < n.s && ["ss", i] || s <= 1 && ["m"] || s < n.m && ["mm", s] || o <= 1 && ["h"] || o < n.h && ["hh", o] || l <= 1 && ["d"] || l < n.d && ["dd", l];
					return null != n.w && (f = f || u <= 1 && ["w"] || u < n.w && ["ww", u]), (f = f || d <= 1 && ["M"] || d < n.M && ["MM", d] || c <= 1 && ["y"] || ["yy", c])[2] = t, f[3] = +e > 0, f[4] = r,
						function (e, t, n, r, a) {
							return a.relativeTime(t || 1, !!n, e, r)
						}.apply(null, f)
				}(this, !a, i, n = this.localeData()), a && (r = n.pastFuture(+this, r)), n.postformat(r)
			}, sr.toISOString = ir, sr.toString = ir, sr.toJSON = ir, sr.locale = sn, sr.localeData = ln, sr.toIsoString = Y("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", ir), sr.lang = on, $("X", 0, 0, "unix"), $("x", 0, 0, "valueOf"), pe("x", ce), pe("X", /[+-]?\d+(\.\d{1,3})?/), ge("X", function (e, t, n) {
				n._d = new Date(1e3 * parseFloat(e))
			}), ge("x", function (e, t, n) {
				n._d = new Date(V(e))
			}), i.version = "2.29.1", r = At, i.fn = xn, i.min = function () {
				return Ot("isBefore", [].slice.call(arguments, 0))
			}, i.max = function () {
				return Ot("isAfter", [].slice.call(arguments, 0))
			}, i.now = function () {
				return Date.now ? Date.now() : +new Date
			}, i.utc = p, i.unix = function (e) {
				return At(1e3 * e)
			}, i.months = function (e, t) {
				return jn(e, t, "months")
			}, i.isDate = f, i.locale = mt, i.invalid = y, i.duration = Gt, i.isMoment = k, i.weekdays = function (e, t, n) {
				return Cn(e, t, n, "weekdays")
			}, i.parseZone = function () {
				return At.apply(null, arguments).parseZone()
			}, i.localeData = pt, i.isDuration = Rt, i.monthsShort = function (e, t) {
				return jn(e, t, "monthsShort")
			}, i.weekdaysMin = function (e, t, n) {
				return Cn(e, t, n, "weekdaysMin")
			}, i.defineLocale = ht, i.updateLocale = function (e, t) {
				if (null != t) {
					var n, r, a = ot;
					null != lt[e] && null != lt[e].parentLocale ? lt[e].set(j(lt[e]._config, t)) : (null != (r = ft(e)) && (a = r._config), t = j(a, t), null == r && (t.abbr = e), (n = new C(t)).parentLocale = lt[e], lt[e] = n), mt(e)
				} else null != lt[e] && (null != lt[e].parentLocale ? (lt[e] = lt[e].parentLocale, e === mt() && mt(e)) : null != lt[e] && delete lt[e]);
				return lt[e]
			}, i.locales = function () {
				return x(lt)
			}, i.weekdaysShort = function (e, t, n) {
				return Cn(e, t, n, "weekdaysShort")
			}, i.normalizeUnits = I, i.relativeTimeRounding = function (e) {
				return void 0 === e ? tr : "function" == typeof e && (tr = e, !0)
			}, i.relativeTimeThreshold = function (e, t) {
				return void 0 !== nr[e] && (void 0 === t ? nr[e] : (nr[e] = t, "s" === e && (nr.ss = t - 1), !0))
			}, i.calendarFormat = function (e, t) {
				var n = e.diff(t, "days", !0);
				return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
			}, i.prototype = xn, i.HTML5_FMT = {
				DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
				DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
				DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
				DATE: "YYYY-MM-DD",
				TIME: "HH:mm",
				TIME_SECONDS: "HH:mm:ss",
				TIME_MS: "HH:mm:ss.SSS",
				WEEK: "GGGG-[W]WW",
				MONTH: "YYYY-MM"
			}, i
		}, e.exports = r()
	}).call(t, n(195)(e))
}, function (e, t) {
	e.exports = function (e, t, n, r, a, i) {
		var s, o = e = e || {},
			l = typeof e.default;
		"object" !== l && "function" !== l || (s = e, o = e.default);
		var d, u = "function" == typeof o ? o.options : o;
		if (t && (u.render = t.render, u.staticRenderFns = t.staticRenderFns, u._compiled = !0), n && (u.functional = !0), a && (u._scopeId = a), i ? (d = function (e) {
				(e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), r && r.call(this, e), e && e._registeredComponents && e._registeredComponents.add(i)
			}, u._ssrRegister = d) : r && (d = r), d) {
			var c = u.functional,
				f = c ? u.render : u.beforeCreate;
			c ? (u._injectStyles = d, u.render = function (e, t) {
				return d.call(t), f(e, t)
			}) : u.beforeCreate = f ? [].concat(f, d) : [d]
		}
		return {
			esModule: s,
			exports: o,
			options: u
		}
	}
}, function (e, t, n) {
	"use strict";
	var r = n(8),
		a = n(153),
		i = Object.prototype.toString;

	function s(e) {
		return "[object Array]" === i.call(e)
	}

	function o(e) {
		return null !== e && "object" == typeof e
	}

	function l(e) {
		return "[object Function]" === i.call(e)
	}

	function d(e, t) {
		if (null !== e && void 0 !== e)
			if ("object" != typeof e && (e = [e]), s(e))
				for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
			else
				for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.call(null, e[a], a, e)
	}
	e.exports = {
		isArray: s,
		isArrayBuffer: function (e) {
			return "[object ArrayBuffer]" === i.call(e)
		},
		isBuffer: a,
		isFormData: function (e) {
			return "undefined" != typeof FormData && e instanceof FormData
		},
		isArrayBufferView: function (e) {
			return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
		},
		isString: function (e) {
			return "string" == typeof e
		},
		isNumber: function (e) {
			return "number" == typeof e
		},
		isObject: o,
		isUndefined: function (e) {
			return void 0 === e
		},
		isDate: function (e) {
			return "[object Date]" === i.call(e)
		},
		isFile: function (e) {
			return "[object File]" === i.call(e)
		},
		isBlob: function (e) {
			return "[object Blob]" === i.call(e)
		},
		isFunction: l,
		isStream: function (e) {
			return o(e) && l(e.pipe)
		},
		isURLSearchParams: function (e) {
			return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
		},
		isStandardBrowserEnv: function () {
			return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
		},
		forEach: d,
		merge: function e() {
			var t = {};

			function n(n, r) {
				"object" == typeof t[r] && "object" == typeof n ? t[r] = e(t[r], n) : t[r] = n
			}
			for (var r = 0, a = arguments.length; r < a; r++) d(arguments[r], n);
			return t
		},
		extend: function (e, t, n) {
			return d(t, function (t, a) {
				e[a] = n && "function" == typeof t ? r(t, n) : t
			}), e
		},
		trim: function (e) {
			return e.replace(/^\s*/, "").replace(/\s*$/, "")
		}
	}
}, function (e, t) {
	e.exports = function (e) {
		var t = [];
		return t.toString = function () {
			return this.map(function (t) {
				var n = function (e, t) {
					var n = e[1] || "",
						r = e[3];
					if (!r) return n;
					if (t && "function" == typeof btoa) {
						var a = (s = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(s)))) + " */"),
							i = r.sources.map(function (e) {
								return "/*# sourceURL=" + r.sourceRoot + e + " */"
							});
						return [n].concat(i).concat([a]).join("\n")
					}
					var s;
					return [n].join("\n")
				}(t, e);
				return t[2] ? "@media " + t[2] + "{" + n + "}" : n
			}).join("")
		}, t.i = function (e, n) {
			"string" == typeof e && (e = [
				[null, e, ""]
			]);
			for (var r = {}, a = 0; a < this.length; a++) {
				var i = this[a][0];
				"number" == typeof i && (r[i] = !0)
			}
			for (a = 0; a < e.length; a++) {
				var s = e[a];
				"number" == typeof s[0] && r[s[0]] || (n && !s[2] ? s[2] = n : n && (s[2] = "(" + s[2] + ") and (" + n + ")"), t.push(s))
			}
		}, t
	}
}, function (e, t, n) {
	var r = "undefined" != typeof document;
	if ("undefined" != typeof DEBUG && DEBUG && !r) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
	var a = n(179),
		i = {},
		s = r && (document.head || document.getElementsByTagName("head")[0]),
		o = null,
		l = 0,
		d = !1,
		u = function () {},
		c = null,
		f = "data-vue-ssr-id",
		m = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

	function h(e) {
		for (var t = 0; t < e.length; t++) {
			var n = e[t],
				r = i[n.id];
			if (r) {
				r.refs++;
				for (var a = 0; a < r.parts.length; a++) r.parts[a](n.parts[a]);
				for (; a < n.parts.length; a++) r.parts.push(_(n.parts[a]));
				r.parts.length > n.parts.length && (r.parts.length = n.parts.length)
			} else {
				var s = [];
				for (a = 0; a < n.parts.length; a++) s.push(_(n.parts[a]));
				i[n.id] = {
					id: n.id,
					refs: 1,
					parts: s
				}
			}
		}
	}

	function p() {
		var e = document.createElement("style");
		return e.type = "text/css", s.appendChild(e), e
	}

	function _(e) {
		var t, n, r = document.querySelector("style[" + f + '~="' + e.id + '"]');
		if (r) {
			if (d) return u;
			r.parentNode.removeChild(r)
		}
		if (m) {
			var a = l++;
			r = o || (o = p()), t = g.bind(null, r, a, !1), n = g.bind(null, r, a, !0)
		} else r = p(), t = function (e, t) {
			var n = t.css,
				r = t.media,
				a = t.sourceMap;
			r && e.setAttribute("media", r);
			c.ssrId && e.setAttribute(f, t.id);
			a && (n += "\n/*# sourceURL=" + a.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */");
			if (e.styleSheet) e.styleSheet.cssText = n;
			else {
				for (; e.firstChild;) e.removeChild(e.firstChild);
				e.appendChild(document.createTextNode(n))
			}
		}.bind(null, r), n = function () {
			r.parentNode.removeChild(r)
		};
		return t(e),
			function (r) {
				if (r) {
					if (r.css === e.css && r.media === e.media && r.sourceMap === e.sourceMap) return;
					t(e = r)
				} else n()
			}
	}
	e.exports = function (e, t, n, r) {
		d = n, c = r || {};
		var s = a(e, t);
		return h(s),
			function (t) {
				for (var n = [], r = 0; r < s.length; r++) {
					var o = s[r];
					(l = i[o.id]).refs--, n.push(l)
				}
				t ? h(s = a(e, t)) : s = [];
				for (r = 0; r < n.length; r++) {
					var l;
					if (0 === (l = n[r]).refs) {
						for (var d = 0; d < l.parts.length; d++) l.parts[d]();
						delete i[l.id]
					}
				}
			}
	};
	var v, y = (v = [], function (e, t) {
		return v[e] = t, v.filter(Boolean).join("\n")
	});

	function g(e, t, n, r) {
		var a = n ? "" : r.css;
		if (e.styleSheet) e.styleSheet.cssText = y(t, a);
		else {
			var i = document.createTextNode(a),
				s = e.childNodes;
			s[t] && e.removeChild(s[t]), s.length ? e.insertBefore(i, s[t]) : e.appendChild(i)
		}
	}
}, function (e, t, n) {
	var r;
	! function (t, n) {
		"use strict";
		"object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function (e) {
			if (!e.document) throw new Error("jQuery requires a window with a document");
			return n(e)
		} : n(t)
	}("undefined" != typeof window ? window : this, function (n, a) {
		"use strict";
		var i = [],
			s = Object.getPrototypeOf,
			o = i.slice,
			l = i.flat ? function (e) {
				return i.flat.call(e)
			} : function (e) {
				return i.concat.apply([], e)
			},
			d = i.push,
			u = i.indexOf,
			c = {},
			f = c.toString,
			m = c.hasOwnProperty,
			h = m.toString,
			p = h.call(Object),
			_ = {},
			v = function (e) {
				return "function" == typeof e && "number" != typeof e.nodeType
			},
			y = function (e) {
				return null != e && e === e.window
			},
			g = n.document,
			M = {
				type: !0,
				src: !0,
				nonce: !0,
				noModule: !0
			};

		function b(e, t, n) {
			var r, a, i = (n = n || g).createElement("script");
			if (i.text = e, t)
				for (r in M)(a = t[r] || t.getAttribute && t.getAttribute(r)) && i.setAttribute(r, a);
			n.head.appendChild(i).parentNode.removeChild(i)
		}

		function L(e) {
			return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[f.call(e)] || "object" : typeof e
		}
		var k = function (e, t) {
			return new k.fn.init(e, t)
		};

		function w(e) {
			var t = !!e && "length" in e && e.length,
				n = L(e);
			return !v(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
		}
		k.fn = k.prototype = {
			jquery: "3.5.1",
			constructor: k,
			length: 0,
			toArray: function () {
				return o.call(this)
			},
			get: function (e) {
				return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
			},
			pushStack: function (e) {
				var t = k.merge(this.constructor(), e);
				return t.prevObject = this, t
			},
			each: function (e) {
				return k.each(this, e)
			},
			map: function (e) {
				return this.pushStack(k.map(this, function (t, n) {
					return e.call(t, n, t)
				}))
			},
			slice: function () {
				return this.pushStack(o.apply(this, arguments))
			},
			first: function () {
				return this.eq(0)
			},
			last: function () {
				return this.eq(-1)
			},
			even: function () {
				return this.pushStack(k.grep(this, function (e, t) {
					return (t + 1) % 2
				}))
			},
			odd: function () {
				return this.pushStack(k.grep(this, function (e, t) {
					return t % 2
				}))
			},
			eq: function (e) {
				var t = this.length,
					n = +e + (e < 0 ? t : 0);
				return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
			},
			end: function () {
				return this.prevObject || this.constructor()
			},
			push: d,
			sort: i.sort,
			splice: i.splice
		}, k.extend = k.fn.extend = function () {
			var e, t, n, r, a, i, s = arguments[0] || {},
				o = 1,
				l = arguments.length,
				d = !1;
			for ("boolean" == typeof s && (d = s, s = arguments[o] || {}, o++), "object" == typeof s || v(s) || (s = {}), o === l && (s = this, o--); o < l; o++)
				if (null != (e = arguments[o]))
					for (t in e) r = e[t], "__proto__" !== t && s !== r && (d && r && (k.isPlainObject(r) || (a = Array.isArray(r))) ? (n = s[t], i = a && !Array.isArray(n) ? [] : a || k.isPlainObject(n) ? n : {}, a = !1, s[t] = k.extend(d, i, r)) : void 0 !== r && (s[t] = r));
			return s
		}, k.extend({
			expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
			isReady: !0,
			error: function (e) {
				throw new Error(e)
			},
			noop: function () {},
			isPlainObject: function (e) {
				var t, n;
				return !(!e || "[object Object]" !== f.call(e)) && (!(t = s(e)) || "function" == typeof (n = m.call(t, "constructor") && t.constructor) && h.call(n) === p)
			},
			isEmptyObject: function (e) {
				var t;
				for (t in e) return !1;
				return !0
			},
			globalEval: function (e, t, n) {
				b(e, {
					nonce: t && t.nonce
				}, n)
			},
			each: function (e, t) {
				var n, r = 0;
				if (w(e))
					for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
				else
					for (r in e)
						if (!1 === t.call(e[r], r, e[r])) break;
				return e
			},
			makeArray: function (e, t) {
				var n = t || [];
				return null != e && (w(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : d.call(n, e)), n
			},
			inArray: function (e, t, n) {
				return null == t ? -1 : u.call(t, e, n)
			},
			merge: function (e, t) {
				for (var n = +t.length, r = 0, a = e.length; r < n; r++) e[a++] = t[r];
				return e.length = a, e
			},
			grep: function (e, t, n) {
				for (var r = [], a = 0, i = e.length, s = !n; a < i; a++) !t(e[a], a) !== s && r.push(e[a]);
				return r
			},
			map: function (e, t, n) {
				var r, a, i = 0,
					s = [];
				if (w(e))
					for (r = e.length; i < r; i++) null != (a = t(e[i], i, n)) && s.push(a);
				else
					for (i in e) null != (a = t(e[i], i, n)) && s.push(a);
				return l(s)
			},
			guid: 1,
			support: _
		}), "function" == typeof Symbol && (k.fn[Symbol.iterator] = i[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
			c["[object " + t + "]"] = t.toLowerCase()
		});
		var Y = function (e) {
			var t, n, r, a, i, s, o, l, d, u, c, f, m, h, p, _, v, y, g, M = "sizzle" + 1 * new Date,
				b = e.document,
				L = 0,
				k = 0,
				w = le(),
				Y = le(),
				x = le(),
				T = le(),
				D = function (e, t) {
					return e === t && (c = !0), 0
				},
				S = {}.hasOwnProperty,
				j = [],
				C = j.pop,
				H = j.push,
				A = j.push,
				E = j.slice,
				P = function (e, t) {
					for (var n = 0, r = e.length; n < r; n++)
						if (e[n] === t) return n;
					return -1
				},
				O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
				$ = "[\\x20\\t\\r\\n\\f]",
				N = "(?:\\\\[\\da-fA-F]{1,6}" + $ + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
				R = "\\[" + $ + "*(" + N + ")(?:" + $ + "*([*^$|!~]?=)" + $ + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + $ + "*\\]",
				F = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
				W = new RegExp($ + "+", "g"),
				I = new RegExp("^" + $ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + $ + "+$", "g"),
				z = new RegExp("^" + $ + "*," + $ + "*"),
				U = new RegExp("^" + $ + "*([>+~]|" + $ + ")" + $ + "*"),
				q = new RegExp($ + "|>"),
				J = new RegExp(F),
				B = new RegExp("^" + N + "$"),
				V = {
					ID: new RegExp("^#(" + N + ")"),
					CLASS: new RegExp("^\\.(" + N + ")"),
					TAG: new RegExp("^(" + N + "|[*])"),
					ATTR: new RegExp("^" + R),
					PSEUDO: new RegExp("^" + F),
					CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + $ + "*(even|odd|(([+-]|)(\\d*)n|)" + $ + "*(?:([+-]|)" + $ + "*(\\d+)|))" + $ + "*\\)|)", "i"),
					bool: new RegExp("^(?:" + O + ")$", "i"),
					needsContext: new RegExp("^" + $ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + $ + "*((?:-\\d)?\\d*)" + $ + "*\\)|)(?=[^-]|$)", "i")
				},
				G = /HTML$/i,
				K = /^(?:input|select|textarea|button)$/i,
				X = /^h\d$/i,
				Q = /^[^{]+\{\s*\[native \w/,
				Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				ee = /[+~]/,
				te = new RegExp("\\\\[\\da-fA-F]{1,6}" + $ + "?|\\\\([^\\r\\n\\f])", "g"),
				ne = function (e, t) {
					var n = "0x" + e.slice(1) - 65536;
					return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
				},
				re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
				ae = function (e, t) {
					return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
				},
				ie = function () {
					f()
				},
				se = Me(function (e) {
					return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
				}, {
					dir: "parentNode",
					next: "legend"
				});
			try {
				A.apply(j = E.call(b.childNodes), b.childNodes), j[b.childNodes.length].nodeType
			} catch (e) {
				A = {
					apply: j.length ? function (e, t) {
						H.apply(e, E.call(t))
					} : function (e, t) {
						for (var n = e.length, r = 0; e[n++] = t[r++];);
						e.length = n - 1
					}
				}
			}

			function oe(e, t, r, a) {
				var i, o, d, u, c, h, v, y = t && t.ownerDocument,
					b = t ? t.nodeType : 9;
				if (r = r || [], "string" != typeof e || !e || 1 !== b && 9 !== b && 11 !== b) return r;
				if (!a && (f(t), t = t || m, p)) {
					if (11 !== b && (c = Z.exec(e)))
						if (i = c[1]) {
							if (9 === b) {
								if (!(d = t.getElementById(i))) return r;
								if (d.id === i) return r.push(d), r
							} else if (y && (d = y.getElementById(i)) && g(t, d) && d.id === i) return r.push(d), r
						} else {
							if (c[2]) return A.apply(r, t.getElementsByTagName(e)), r;
							if ((i = c[3]) && n.getElementsByClassName && t.getElementsByClassName) return A.apply(r, t.getElementsByClassName(i)), r
						}
					if (n.qsa && !T[e + " "] && (!_ || !_.test(e)) && (1 !== b || "object" !== t.nodeName.toLowerCase())) {
						if (v = e, y = t, 1 === b && (q.test(e) || U.test(e))) {
							for ((y = ee.test(e) && ve(t.parentNode) || t) === t && n.scope || ((u = t.getAttribute("id")) ? u = u.replace(re, ae) : t.setAttribute("id", u = M)), o = (h = s(e)).length; o--;) h[o] = (u ? "#" + u : ":scope") + " " + ge(h[o]);
							v = h.join(",")
						}
						try {
							return A.apply(r, y.querySelectorAll(v)), r
						} catch (t) {
							T(e, !0)
						} finally {
							u === M && t.removeAttribute("id")
						}
					}
				}
				return l(e.replace(I, "$1"), t, r, a)
			}

			function le() {
				var e = [];
				return function t(n, a) {
					return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = a
				}
			}

			function de(e) {
				return e[M] = !0, e
			}

			function ue(e) {
				var t = m.createElement("fieldset");
				try {
					return !!e(t)
				} catch (e) {
					return !1
				} finally {
					t.parentNode && t.parentNode.removeChild(t), t = null
				}
			}

			function ce(e, t) {
				for (var n = e.split("|"), a = n.length; a--;) r.attrHandle[n[a]] = t
			}

			function fe(e, t) {
				var n = t && e,
					r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
				if (r) return r;
				if (n)
					for (; n = n.nextSibling;)
						if (n === t) return -1;
				return e ? 1 : -1
			}

			function me(e) {
				return function (t) {
					return "input" === t.nodeName.toLowerCase() && t.type === e
				}
			}

			function he(e) {
				return function (t) {
					var n = t.nodeName.toLowerCase();
					return ("input" === n || "button" === n) && t.type === e
				}
			}

			function pe(e) {
				return function (t) {
					return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && se(t) === e : t.disabled === e : "label" in t && t.disabled === e
				}
			}

			function _e(e) {
				return de(function (t) {
					return t = +t, de(function (n, r) {
						for (var a, i = e([], n.length, t), s = i.length; s--;) n[a = i[s]] && (n[a] = !(r[a] = n[a]))
					})
				})
			}

			function ve(e) {
				return e && void 0 !== e.getElementsByTagName && e
			}
			for (t in n = oe.support = {}, i = oe.isXML = function (e) {
					var t = e.namespaceURI,
						n = (e.ownerDocument || e).documentElement;
					return !G.test(t || n && n.nodeName || "HTML")
				}, f = oe.setDocument = function (e) {
					var t, a, s = e ? e.ownerDocument || e : b;
					return s != m && 9 === s.nodeType && s.documentElement ? (h = (m = s).documentElement, p = !i(m), b != m && (a = m.defaultView) && a.top !== a && (a.addEventListener ? a.addEventListener("unload", ie, !1) : a.attachEvent && a.attachEvent("onunload", ie)), n.scope = ue(function (e) {
						return h.appendChild(e).appendChild(m.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
					}), n.attributes = ue(function (e) {
						return e.className = "i", !e.getAttribute("className")
					}), n.getElementsByTagName = ue(function (e) {
						return e.appendChild(m.createComment("")), !e.getElementsByTagName("*").length
					}), n.getElementsByClassName = Q.test(m.getElementsByClassName), n.getById = ue(function (e) {
						return h.appendChild(e).id = M, !m.getElementsByName || !m.getElementsByName(M).length
					}), n.getById ? (r.filter.ID = function (e) {
						var t = e.replace(te, ne);
						return function (e) {
							return e.getAttribute("id") === t
						}
					}, r.find.ID = function (e, t) {
						if (void 0 !== t.getElementById && p) {
							var n = t.getElementById(e);
							return n ? [n] : []
						}
					}) : (r.filter.ID = function (e) {
						var t = e.replace(te, ne);
						return function (e) {
							var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
							return n && n.value === t
						}
					}, r.find.ID = function (e, t) {
						if (void 0 !== t.getElementById && p) {
							var n, r, a, i = t.getElementById(e);
							if (i) {
								if ((n = i.getAttributeNode("id")) && n.value === e) return [i];
								for (a = t.getElementsByName(e), r = 0; i = a[r++];)
									if ((n = i.getAttributeNode("id")) && n.value === e) return [i]
							}
							return []
						}
					}), r.find.TAG = n.getElementsByTagName ? function (e, t) {
						return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
					} : function (e, t) {
						var n, r = [],
							a = 0,
							i = t.getElementsByTagName(e);
						if ("*" === e) {
							for (; n = i[a++];) 1 === n.nodeType && r.push(n);
							return r
						}
						return i
					}, r.find.CLASS = n.getElementsByClassName && function (e, t) {
						if (void 0 !== t.getElementsByClassName && p) return t.getElementsByClassName(e)
					}, v = [], _ = [], (n.qsa = Q.test(m.querySelectorAll)) && (ue(function (e) {
						var t;
						h.appendChild(e).innerHTML = "<a id='" + M + "'></a><select id='" + M + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && _.push("[*^$]=" + $ + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || _.push("\\[" + $ + "*(?:value|" + O + ")"), e.querySelectorAll("[id~=" + M + "-]").length || _.push("~="), (t = m.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || _.push("\\[" + $ + "*name" + $ + "*=" + $ + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || _.push(":checked"), e.querySelectorAll("a#" + M + "+*").length || _.push(".#.+[+~]"), e.querySelectorAll("\\\f"), _.push("[\\r\\n\\f]")
					}), ue(function (e) {
						e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
						var t = m.createElement("input");
						t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && _.push("name" + $ + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && _.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && _.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), _.push(",.*:")
					})), (n.matchesSelector = Q.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function (e) {
						n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", F)
					}), _ = _.length && new RegExp(_.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), g = t || Q.test(h.contains) ? function (e, t) {
						var n = 9 === e.nodeType ? e.documentElement : e,
							r = t && t.parentNode;
						return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
					} : function (e, t) {
						if (t)
							for (; t = t.parentNode;)
								if (t === e) return !0;
						return !1
					}, D = t ? function (e, t) {
						if (e === t) return c = !0, 0;
						var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
						return r || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == m || e.ownerDocument == b && g(b, e) ? -1 : t == m || t.ownerDocument == b && g(b, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & r ? -1 : 1)
					} : function (e, t) {
						if (e === t) return c = !0, 0;
						var n, r = 0,
							a = e.parentNode,
							i = t.parentNode,
							s = [e],
							o = [t];
						if (!a || !i) return e == m ? -1 : t == m ? 1 : a ? -1 : i ? 1 : u ? P(u, e) - P(u, t) : 0;
						if (a === i) return fe(e, t);
						for (n = e; n = n.parentNode;) s.unshift(n);
						for (n = t; n = n.parentNode;) o.unshift(n);
						for (; s[r] === o[r];) r++;
						return r ? fe(s[r], o[r]) : s[r] == b ? -1 : o[r] == b ? 1 : 0
					}, m) : m
				}, oe.matches = function (e, t) {
					return oe(e, null, null, t)
				}, oe.matchesSelector = function (e, t) {
					if (f(e), n.matchesSelector && p && !T[t + " "] && (!v || !v.test(t)) && (!_ || !_.test(t))) try {
						var r = y.call(e, t);
						if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
					} catch (e) {
						T(t, !0)
					}
					return oe(t, m, null, [e]).length > 0
				}, oe.contains = function (e, t) {
					return (e.ownerDocument || e) != m && f(e), g(e, t)
				}, oe.attr = function (e, t) {
					(e.ownerDocument || e) != m && f(e);
					var a = r.attrHandle[t.toLowerCase()],
						i = a && S.call(r.attrHandle, t.toLowerCase()) ? a(e, t, !p) : void 0;
					return void 0 !== i ? i : n.attributes || !p ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
				}, oe.escape = function (e) {
					return (e + "").replace(re, ae)
				}, oe.error = function (e) {
					throw new Error("Syntax error, unrecognized expression: " + e)
				}, oe.uniqueSort = function (e) {
					var t, r = [],
						a = 0,
						i = 0;
					if (c = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(D), c) {
						for (; t = e[i++];) t === e[i] && (a = r.push(i));
						for (; a--;) e.splice(r[a], 1)
					}
					return u = null, e
				}, a = oe.getText = function (e) {
					var t, n = "",
						r = 0,
						i = e.nodeType;
					if (i) {
						if (1 === i || 9 === i || 11 === i) {
							if ("string" == typeof e.textContent) return e.textContent;
							for (e = e.firstChild; e; e = e.nextSibling) n += a(e)
						} else if (3 === i || 4 === i) return e.nodeValue
					} else
						for (; t = e[r++];) n += a(t);
					return n
				}, (r = oe.selectors = {
					cacheLength: 50,
					createPseudo: de,
					match: V,
					attrHandle: {},
					find: {},
					relative: {
						">": {
							dir: "parentNode",
							first: !0
						},
						" ": {
							dir: "parentNode"
						},
						"+": {
							dir: "previousSibling",
							first: !0
						},
						"~": {
							dir: "previousSibling"
						}
					},
					preFilter: {
						ATTR: function (e) {
							return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
						},
						CHILD: function (e) {
							return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
						},
						PSEUDO: function (e) {
							var t, n = !e[6] && e[2];
							return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && J.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
						}
					},
					filter: {
						TAG: function (e) {
							var t = e.replace(te, ne).toLowerCase();
							return "*" === e ? function () {
								return !0
							} : function (e) {
								return e.nodeName && e.nodeName.toLowerCase() === t
							}
						},
						CLASS: function (e) {
							var t = w[e + " "];
							return t || (t = new RegExp("(^|" + $ + ")" + e + "(" + $ + "|$)")) && w(e, function (e) {
								return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
							})
						},
						ATTR: function (e, t, n) {
							return function (r) {
								var a = oe.attr(r, e);
								return null == a ? "!=" === t : !t || (a += "", "=" === t ? a === n : "!=" === t ? a !== n : "^=" === t ? n && 0 === a.indexOf(n) : "*=" === t ? n && a.indexOf(n) > -1 : "$=" === t ? n && a.slice(-n.length) === n : "~=" === t ? (" " + a.replace(W, " ") + " ").indexOf(n) > -1 : "|=" === t && (a === n || a.slice(0, n.length + 1) === n + "-"))
							}
						},
						CHILD: function (e, t, n, r, a) {
							var i = "nth" !== e.slice(0, 3),
								s = "last" !== e.slice(-4),
								o = "of-type" === t;
							return 1 === r && 0 === a ? function (e) {
								return !!e.parentNode
							} : function (t, n, l) {
								var d, u, c, f, m, h, p = i !== s ? "nextSibling" : "previousSibling",
									_ = t.parentNode,
									v = o && t.nodeName.toLowerCase(),
									y = !l && !o,
									g = !1;
								if (_) {
									if (i) {
										for (; p;) {
											for (f = t; f = f[p];)
												if (o ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
											h = p = "only" === e && !h && "nextSibling"
										}
										return !0
									}
									if (h = [s ? _.firstChild : _.lastChild], s && y) {
										for (g = (m = (d = (u = (c = (f = _)[M] || (f[M] = {}))[f.uniqueID] || (c[f.uniqueID] = {}))[e] || [])[0] === L && d[1]) && d[2], f = m && _.childNodes[m]; f = ++m && f && f[p] || (g = m = 0) || h.pop();)
											if (1 === f.nodeType && ++g && f === t) {
												u[e] = [L, m, g];
												break
											}
									} else if (y && (g = m = (d = (u = (c = (f = t)[M] || (f[M] = {}))[f.uniqueID] || (c[f.uniqueID] = {}))[e] || [])[0] === L && d[1]), !1 === g)
										for (;
											(f = ++m && f && f[p] || (g = m = 0) || h.pop()) && ((o ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++g || (y && ((u = (c = f[M] || (f[M] = {}))[f.uniqueID] || (c[f.uniqueID] = {}))[e] = [L, g]), f !== t)););
									return (g -= a) === r || g % r == 0 && g / r >= 0
								}
							}
						},
						PSEUDO: function (e, t) {
							var n, a = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
							return a[M] ? a(t) : a.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? de(function (e, n) {
								for (var r, i = a(e, t), s = i.length; s--;) e[r = P(e, i[s])] = !(n[r] = i[s])
							}) : function (e) {
								return a(e, 0, n)
							}) : a
						}
					},
					pseudos: {
						not: de(function (e) {
							var t = [],
								n = [],
								r = o(e.replace(I, "$1"));
							return r[M] ? de(function (e, t, n, a) {
								for (var i, s = r(e, null, a, []), o = e.length; o--;)(i = s[o]) && (e[o] = !(t[o] = i))
							}) : function (e, a, i) {
								return t[0] = e, r(t, null, i, n), t[0] = null, !n.pop()
							}
						}),
						has: de(function (e) {
							return function (t) {
								return oe(e, t).length > 0
							}
						}),
						contains: de(function (e) {
							return e = e.replace(te, ne),
								function (t) {
									return (t.textContent || a(t)).indexOf(e) > -1
								}
						}),
						lang: de(function (e) {
							return B.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
								function (t) {
									var n;
									do {
										if (n = p ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
									} while ((t = t.parentNode) && 1 === t.nodeType);
									return !1
								}
						}),
						target: function (t) {
							var n = e.location && e.location.hash;
							return n && n.slice(1) === t.id
						},
						root: function (e) {
							return e === h
						},
						focus: function (e) {
							return e === m.activeElement && (!m.hasFocus || m.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
						},
						enabled: pe(!1),
						disabled: pe(!0),
						checked: function (e) {
							var t = e.nodeName.toLowerCase();
							return "input" === t && !!e.checked || "option" === t && !!e.selected
						},
						selected: function (e) {
							return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
						},
						empty: function (e) {
							for (e = e.firstChild; e; e = e.nextSibling)
								if (e.nodeType < 6) return !1;
							return !0
						},
						parent: function (e) {
							return !r.pseudos.empty(e)
						},
						header: function (e) {
							return X.test(e.nodeName)
						},
						input: function (e) {
							return K.test(e.nodeName)
						},
						button: function (e) {
							var t = e.nodeName.toLowerCase();
							return "input" === t && "button" === e.type || "button" === t
						},
						text: function (e) {
							var t;
							return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
						},
						first: _e(function () {
							return [0]
						}),
						last: _e(function (e, t) {
							return [t - 1]
						}),
						eq: _e(function (e, t, n) {
							return [n < 0 ? n + t : n]
						}),
						even: _e(function (e, t) {
							for (var n = 0; n < t; n += 2) e.push(n);
							return e
						}),
						odd: _e(function (e, t) {
							for (var n = 1; n < t; n += 2) e.push(n);
							return e
						}),
						lt: _e(function (e, t, n) {
							for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) e.push(r);
							return e
						}),
						gt: _e(function (e, t, n) {
							for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
							return e
						})
					}
				}).pseudos.nth = r.pseudos.eq, {
					radio: !0,
					checkbox: !0,
					file: !0,
					password: !0,
					image: !0
				}) r.pseudos[t] = me(t);
			for (t in {
					submit: !0,
					reset: !0
				}) r.pseudos[t] = he(t);

			function ye() {}

			function ge(e) {
				for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
				return r
			}

			function Me(e, t, n) {
				var r = t.dir,
					a = t.next,
					i = a || r,
					s = n && "parentNode" === i,
					o = k++;
				return t.first ? function (t, n, a) {
					for (; t = t[r];)
						if (1 === t.nodeType || s) return e(t, n, a);
					return !1
				} : function (t, n, l) {
					var d, u, c, f = [L, o];
					if (l) {
						for (; t = t[r];)
							if ((1 === t.nodeType || s) && e(t, n, l)) return !0
					} else
						for (; t = t[r];)
							if (1 === t.nodeType || s)
								if (u = (c = t[M] || (t[M] = {}))[t.uniqueID] || (c[t.uniqueID] = {}), a && a === t.nodeName.toLowerCase()) t = t[r] || t;
								else {
									if ((d = u[i]) && d[0] === L && d[1] === o) return f[2] = d[2];
									if (u[i] = f, f[2] = e(t, n, l)) return !0
								} return !1
				}
			}

			function be(e) {
				return e.length > 1 ? function (t, n, r) {
					for (var a = e.length; a--;)
						if (!e[a](t, n, r)) return !1;
					return !0
				} : e[0]
			}

			function Le(e, t, n, r, a) {
				for (var i, s = [], o = 0, l = e.length, d = null != t; o < l; o++)(i = e[o]) && (n && !n(i, r, a) || (s.push(i), d && t.push(o)));
				return s
			}

			function ke(e, t, n, r, a, i) {
				return r && !r[M] && (r = ke(r)), a && !a[M] && (a = ke(a, i)), de(function (i, s, o, l) {
					var d, u, c, f = [],
						m = [],
						h = s.length,
						p = i || function (e, t, n) {
							for (var r = 0, a = t.length; r < a; r++) oe(e, t[r], n);
							return n
						}(t || "*", o.nodeType ? [o] : o, []),
						_ = !e || !i && t ? p : Le(p, f, e, o, l),
						v = n ? a || (i ? e : h || r) ? [] : s : _;
					if (n && n(_, v, o, l), r)
						for (d = Le(v, m), r(d, [], o, l), u = d.length; u--;)(c = d[u]) && (v[m[u]] = !(_[m[u]] = c));
					if (i) {
						if (a || e) {
							if (a) {
								for (d = [], u = v.length; u--;)(c = v[u]) && d.push(_[u] = c);
								a(null, v = [], d, l)
							}
							for (u = v.length; u--;)(c = v[u]) && (d = a ? P(i, c) : f[u]) > -1 && (i[d] = !(s[d] = c))
						}
					} else v = Le(v === s ? v.splice(h, v.length) : v), a ? a(null, s, v, l) : A.apply(s, v)
				})
			}

			function we(e) {
				for (var t, n, a, i = e.length, s = r.relative[e[0].type], o = s || r.relative[" "], l = s ? 1 : 0, u = Me(function (e) {
						return e === t
					}, o, !0), c = Me(function (e) {
						return P(t, e) > -1
					}, o, !0), f = [function (e, n, r) {
						var a = !s && (r || n !== d) || ((t = n).nodeType ? u(e, n, r) : c(e, n, r));
						return t = null, a
					}]; l < i; l++)
					if (n = r.relative[e[l].type]) f = [Me(be(f), n)];
					else {
						if ((n = r.filter[e[l].type].apply(null, e[l].matches))[M]) {
							for (a = ++l; a < i && !r.relative[e[a].type]; a++);
							return ke(l > 1 && be(f), l > 1 && ge(e.slice(0, l - 1).concat({
								value: " " === e[l - 2].type ? "*" : ""
							})).replace(I, "$1"), n, l < a && we(e.slice(l, a)), a < i && we(e = e.slice(a)), a < i && ge(e))
						}
						f.push(n)
					}
				return be(f)
			}
			return ye.prototype = r.filters = r.pseudos, r.setFilters = new ye, s = oe.tokenize = function (e, t) {
				var n, a, i, s, o, l, d, u = Y[e + " "];
				if (u) return t ? 0 : u.slice(0);
				for (o = e, l = [], d = r.preFilter; o;) {
					for (s in n && !(a = z.exec(o)) || (a && (o = o.slice(a[0].length) || o), l.push(i = [])), n = !1, (a = U.exec(o)) && (n = a.shift(), i.push({
							value: n,
							type: a[0].replace(I, " ")
						}), o = o.slice(n.length)), r.filter) !(a = V[s].exec(o)) || d[s] && !(a = d[s](a)) || (n = a.shift(), i.push({
						value: n,
						type: s,
						matches: a
					}), o = o.slice(n.length));
					if (!n) break
				}
				return t ? o.length : o ? oe.error(e) : Y(e, l).slice(0)
			}, o = oe.compile = function (e, t) {
				var n, a = [],
					i = [],
					o = x[e + " "];
				if (!o) {
					for (t || (t = s(e)), n = t.length; n--;)(o = we(t[n]))[M] ? a.push(o) : i.push(o);
					(o = x(e, function (e, t) {
						var n = t.length > 0,
							a = e.length > 0,
							i = function (i, s, o, l, u) {
								var c, h, _, v = 0,
									y = "0",
									g = i && [],
									M = [],
									b = d,
									k = i || a && r.find.TAG("*", u),
									w = L += null == b ? 1 : Math.random() || .1,
									Y = k.length;
								for (u && (d = s == m || s || u); y !== Y && null != (c = k[y]); y++) {
									if (a && c) {
										for (h = 0, s || c.ownerDocument == m || (f(c), o = !p); _ = e[h++];)
											if (_(c, s || m, o)) {
												l.push(c);
												break
											}
										u && (L = w)
									}
									n && ((c = !_ && c) && v--, i && g.push(c))
								}
								if (v += y, n && y !== v) {
									for (h = 0; _ = t[h++];) _(g, M, s, o);
									if (i) {
										if (v > 0)
											for (; y--;) g[y] || M[y] || (M[y] = C.call(l));
										M = Le(M)
									}
									A.apply(l, M), u && !i && M.length > 0 && v + t.length > 1 && oe.uniqueSort(l)
								}
								return u && (L = w, d = b), g
							};
						return n ? de(i) : i
					}(i, a))).selector = e
				}
				return o
			}, l = oe.select = function (e, t, n, a) {
				var i, l, d, u, c, f = "function" == typeof e && e,
					m = !a && s(e = f.selector || e);
				if (n = n || [], 1 === m.length) {
					if ((l = m[0] = m[0].slice(0)).length > 2 && "ID" === (d = l[0]).type && 9 === t.nodeType && p && r.relative[l[1].type]) {
						if (!(t = (r.find.ID(d.matches[0].replace(te, ne), t) || [])[0])) return n;
						f && (t = t.parentNode), e = e.slice(l.shift().value.length)
					}
					for (i = V.needsContext.test(e) ? 0 : l.length; i-- && (d = l[i], !r.relative[u = d.type]);)
						if ((c = r.find[u]) && (a = c(d.matches[0].replace(te, ne), ee.test(l[0].type) && ve(t.parentNode) || t))) {
							if (l.splice(i, 1), !(e = a.length && ge(l))) return A.apply(n, a), n;
							break
						}
				}
				return (f || o(e, m))(a, t, !p, n, !t || ee.test(e) && ve(t.parentNode) || t), n
			}, n.sortStable = M.split("").sort(D).join("") === M, n.detectDuplicates = !!c, f(), n.sortDetached = ue(function (e) {
				return 1 & e.compareDocumentPosition(m.createElement("fieldset"))
			}), ue(function (e) {
				return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
			}) || ce("type|href|height|width", function (e, t, n) {
				if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
			}), n.attributes && ue(function (e) {
				return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
			}) || ce("value", function (e, t, n) {
				if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
			}), ue(function (e) {
				return null == e.getAttribute("disabled")
			}) || ce(O, function (e, t, n) {
				var r;
				if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
			}), oe
		}(n);
		k.find = Y, k.expr = Y.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = Y.uniqueSort, k.text = Y.getText, k.isXMLDoc = Y.isXML, k.contains = Y.contains, k.escapeSelector = Y.escape;
		var x = function (e, t, n) {
				for (var r = [], a = void 0 !== n;
					(e = e[t]) && 9 !== e.nodeType;)
					if (1 === e.nodeType) {
						if (a && k(e).is(n)) break;
						r.push(e)
					}
				return r
			},
			T = function (e, t) {
				for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
				return n
			},
			D = k.expr.match.needsContext;

		function S(e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		}
		var j = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

		function C(e, t, n) {
			return v(t) ? k.grep(e, function (e, r) {
				return !!t.call(e, r, e) !== n
			}) : t.nodeType ? k.grep(e, function (e) {
				return e === t !== n
			}) : "string" != typeof t ? k.grep(e, function (e) {
				return u.call(t, e) > -1 !== n
			}) : k.filter(t, e, n)
		}
		k.filter = function (e, t, n) {
			var r = t[0];
			return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [r] : [] : k.find.matches(e, k.grep(t, function (e) {
				return 1 === e.nodeType
			}))
		}, k.fn.extend({
			find: function (e) {
				var t, n, r = this.length,
					a = this;
				if ("string" != typeof e) return this.pushStack(k(e).filter(function () {
					for (t = 0; t < r; t++)
						if (k.contains(a[t], this)) return !0
				}));
				for (n = this.pushStack([]), t = 0; t < r; t++) k.find(e, a[t], n);
				return r > 1 ? k.uniqueSort(n) : n
			},
			filter: function (e) {
				return this.pushStack(C(this, e || [], !1))
			},
			not: function (e) {
				return this.pushStack(C(this, e || [], !0))
			},
			is: function (e) {
				return !!C(this, "string" == typeof e && D.test(e) ? k(e) : e || [], !1).length
			}
		});
		var H, A = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
		(k.fn.init = function (e, t, n) {
			var r, a;
			if (!e) return this;
			if (n = n || H, "string" == typeof e) {
				if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : A.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
				if (r[1]) {
					if (t = t instanceof k ? t[0] : t, k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : g, !0)), j.test(r[1]) && k.isPlainObject(t))
						for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
					return this
				}
				return (a = g.getElementById(r[2])) && (this[0] = a, this.length = 1), this
			}
			return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this)
		}).prototype = k.fn, H = k(g);
		var E = /^(?:parents|prev(?:Until|All))/,
			P = {
				children: !0,
				contents: !0,
				next: !0,
				prev: !0
			};

		function O(e, t) {
			for (;
				(e = e[t]) && 1 !== e.nodeType;);
			return e
		}
		k.fn.extend({
			has: function (e) {
				var t = k(e, this),
					n = t.length;
				return this.filter(function () {
					for (var e = 0; e < n; e++)
						if (k.contains(this, t[e])) return !0
				})
			},
			closest: function (e, t) {
				var n, r = 0,
					a = this.length,
					i = [],
					s = "string" != typeof e && k(e);
				if (!D.test(e))
					for (; r < a; r++)
						for (n = this[r]; n && n !== t; n = n.parentNode)
							if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
								i.push(n);
								break
							}
				return this.pushStack(i.length > 1 ? k.uniqueSort(i) : i)
			},
			index: function (e) {
				return e ? "string" == typeof e ? u.call(k(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
			},
			add: function (e, t) {
				return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))))
			},
			addBack: function (e) {
				return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
			}
		}), k.each({
			parent: function (e) {
				var t = e.parentNode;
				return t && 11 !== t.nodeType ? t : null
			},
			parents: function (e) {
				return x(e, "parentNode")
			},
			parentsUntil: function (e, t, n) {
				return x(e, "parentNode", n)
			},
			next: function (e) {
				return O(e, "nextSibling")
			},
			prev: function (e) {
				return O(e, "previousSibling")
			},
			nextAll: function (e) {
				return x(e, "nextSibling")
			},
			prevAll: function (e) {
				return x(e, "previousSibling")
			},
			nextUntil: function (e, t, n) {
				return x(e, "nextSibling", n)
			},
			prevUntil: function (e, t, n) {
				return x(e, "previousSibling", n)
			},
			siblings: function (e) {
				return T((e.parentNode || {}).firstChild, e)
			},
			children: function (e) {
				return T(e.firstChild)
			},
			contents: function (e) {
				return null != e.contentDocument && s(e.contentDocument) ? e.contentDocument : (S(e, "template") && (e = e.content || e), k.merge([], e.childNodes))
			}
		}, function (e, t) {
			k.fn[e] = function (n, r) {
				var a = k.map(this, t, n);
				return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (a = k.filter(r, a)), this.length > 1 && (P[e] || k.uniqueSort(a), E.test(e) && a.reverse()), this.pushStack(a)
			}
		});
		var $ = /[^\x20\t\r\n\f]+/g;

		function N(e) {
			return e
		}

		function R(e) {
			throw e
		}

		function F(e, t, n, r) {
			var a;
			try {
				e && v(a = e.promise) ? a.call(e).done(t).fail(n) : e && v(a = e.then) ? a.call(e, t, n) : t.apply(void 0, [e].slice(r))
			} catch (e) {
				n.apply(void 0, [e])
			}
		}
		k.Callbacks = function (e) {
			e = "string" == typeof e ? function (e) {
				var t = {};
				return k.each(e.match($) || [], function (e, n) {
					t[n] = !0
				}), t
			}(e) : k.extend({}, e);
			var t, n, r, a, i = [],
				s = [],
				o = -1,
				l = function () {
					for (a = a || e.once, r = t = !0; s.length; o = -1)
						for (n = s.shift(); ++o < i.length;) !1 === i[o].apply(n[0], n[1]) && e.stopOnFalse && (o = i.length, n = !1);
					e.memory || (n = !1), t = !1, a && (i = n ? [] : "")
				},
				d = {
					add: function () {
						return i && (n && !t && (o = i.length - 1, s.push(n)), function t(n) {
							k.each(n, function (n, r) {
								v(r) ? e.unique && d.has(r) || i.push(r) : r && r.length && "string" !== L(r) && t(r)
							})
						}(arguments), n && !t && l()), this
					},
					remove: function () {
						return k.each(arguments, function (e, t) {
							for (var n;
								(n = k.inArray(t, i, n)) > -1;) i.splice(n, 1), n <= o && o--
						}), this
					},
					has: function (e) {
						return e ? k.inArray(e, i) > -1 : i.length > 0
					},
					empty: function () {
						return i && (i = []), this
					},
					disable: function () {
						return a = s = [], i = n = "", this
					},
					disabled: function () {
						return !i
					},
					lock: function () {
						return a = s = [], n || t || (i = n = ""), this
					},
					locked: function () {
						return !!a
					},
					fireWith: function (e, n) {
						return a || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || l()), this
					},
					fire: function () {
						return d.fireWith(this, arguments), this
					},
					fired: function () {
						return !!r
					}
				};
			return d
		}, k.extend({
			Deferred: function (e) {
				var t = [
						["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2],
						["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"],
						["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]
					],
					r = "pending",
					a = {
						state: function () {
							return r
						},
						always: function () {
							return i.done(arguments).fail(arguments), this
						},
						catch: function (e) {
							return a.then(null, e)
						},
						pipe: function () {
							var e = arguments;
							return k.Deferred(function (n) {
								k.each(t, function (t, r) {
									var a = v(e[r[4]]) && e[r[4]];
									i[r[1]](function () {
										var e = a && a.apply(this, arguments);
										e && v(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, a ? [e] : arguments)
									})
								}), e = null
							}).promise()
						},
						then: function (e, r, a) {
							var i = 0;

							function s(e, t, r, a) {
								return function () {
									var o = this,
										l = arguments,
										d = function () {
											var n, d;
											if (!(e < i)) {
												if ((n = r.apply(o, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
												d = n && ("object" == typeof n || "function" == typeof n) && n.then, v(d) ? a ? d.call(n, s(i, t, N, a), s(i, t, R, a)) : (i++, d.call(n, s(i, t, N, a), s(i, t, R, a), s(i, t, N, t.notifyWith))) : (r !== N && (o = void 0, l = [n]), (a || t.resolveWith)(o, l))
											}
										},
										u = a ? d : function () {
											try {
												d()
											} catch (n) {
												k.Deferred.exceptionHook && k.Deferred.exceptionHook(n, u.stackTrace), e + 1 >= i && (r !== R && (o = void 0, l = [n]), t.rejectWith(o, l))
											}
										};
									e ? u() : (k.Deferred.getStackHook && (u.stackTrace = k.Deferred.getStackHook()), n.setTimeout(u))
								}
							}
							return k.Deferred(function (n) {
								t[0][3].add(s(0, n, v(a) ? a : N, n.notifyWith)), t[1][3].add(s(0, n, v(e) ? e : N)), t[2][3].add(s(0, n, v(r) ? r : R))
							}).promise()
						},
						promise: function (e) {
							return null != e ? k.extend(e, a) : a
						}
					},
					i = {};
				return k.each(t, function (e, n) {
					var s = n[2],
						o = n[5];
					a[n[1]] = s.add, o && s.add(function () {
						r = o
					}, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), s.add(n[3].fire), i[n[0]] = function () {
						return i[n[0] + "With"](this === i ? void 0 : this, arguments), this
					}, i[n[0] + "With"] = s.fireWith
				}), a.promise(i), e && e.call(i, i), i
			},
			when: function (e) {
				var t = arguments.length,
					n = t,
					r = Array(n),
					a = o.call(arguments),
					i = k.Deferred(),
					s = function (e) {
						return function (n) {
							r[e] = this, a[e] = arguments.length > 1 ? o.call(arguments) : n, --t || i.resolveWith(r, a)
						}
					};
				if (t <= 1 && (F(e, i.done(s(n)).resolve, i.reject, !t), "pending" === i.state() || v(a[n] && a[n].then))) return i.then();
				for (; n--;) F(a[n], s(n), i.reject);
				return i.promise()
			}
		});
		var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
		k.Deferred.exceptionHook = function (e, t) {
			n.console && n.console.warn && e && W.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
		}, k.readyException = function (e) {
			n.setTimeout(function () {
				throw e
			})
		};
		var I = k.Deferred();

		function z() {
			g.removeEventListener("DOMContentLoaded", z), n.removeEventListener("load", z), k.ready()
		}
		k.fn.ready = function (e) {
			return I.then(e).catch(function (e) {
				k.readyException(e)
			}), this
		}, k.extend({
			isReady: !1,
			readyWait: 1,
			ready: function (e) {
				(!0 === e ? --k.readyWait : k.isReady) || (k.isReady = !0, !0 !== e && --k.readyWait > 0 || I.resolveWith(g, [k]))
			}
		}), k.ready.then = I.then, "complete" === g.readyState || "loading" !== g.readyState && !g.documentElement.doScroll ? n.setTimeout(k.ready) : (g.addEventListener("DOMContentLoaded", z), n.addEventListener("load", z));
		var U = function (e, t, n, r, a, i, s) {
				var o = 0,
					l = e.length,
					d = null == n;
				if ("object" === L(n))
					for (o in a = !0, n) U(e, t, o, n[o], !0, i, s);
				else if (void 0 !== r && (a = !0, v(r) || (s = !0), d && (s ? (t.call(e, r), t = null) : (d = t, t = function (e, t, n) {
						return d.call(k(e), n)
					})), t))
					for (; o < l; o++) t(e[o], n, s ? r : r.call(e[o], o, t(e[o], n)));
				return a ? e : d ? t.call(e) : l ? t(e[0], n) : i
			},
			q = /^-ms-/,
			J = /-([a-z])/g;

		function B(e, t) {
			return t.toUpperCase()
		}

		function V(e) {
			return e.replace(q, "ms-").replace(J, B)
		}
		var G = function (e) {
			return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
		};

		function K() {
			this.expando = k.expando + K.uid++
		}
		K.uid = 1, K.prototype = {
			cache: function (e) {
				var t = e[this.expando];
				return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
					value: t,
					configurable: !0
				}))), t
			},
			set: function (e, t, n) {
				var r, a = this.cache(e);
				if ("string" == typeof t) a[V(t)] = n;
				else
					for (r in t) a[V(r)] = t[r];
				return a
			},
			get: function (e, t) {
				return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)]
			},
			access: function (e, t, n) {
				return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
			},
			remove: function (e, t) {
				var n, r = e[this.expando];
				if (void 0 !== r) {
					if (void 0 !== t) {
						n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match($) || []).length;
						for (; n--;) delete r[t[n]]
					}(void 0 === t || k.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
				}
			},
			hasData: function (e) {
				var t = e[this.expando];
				return void 0 !== t && !k.isEmptyObject(t)
			}
		};
		var X = new K,
			Q = new K,
			Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
			ee = /[A-Z]/g;

		function te(e, t, n) {
			var r;
			if (void 0 === n && 1 === e.nodeType)
				if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
					try {
						n = function (e) {
							return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e)
						}(n)
					} catch (e) {}
					Q.set(e, t, n)
				} else n = void 0;
			return n
		}
		k.extend({
			hasData: function (e) {
				return Q.hasData(e) || X.hasData(e)
			},
			data: function (e, t, n) {
				return Q.access(e, t, n)
			},
			removeData: function (e, t) {
				Q.remove(e, t)
			},
			_data: function (e, t, n) {
				return X.access(e, t, n)
			},
			_removeData: function (e, t) {
				X.remove(e, t)
			}
		}), k.fn.extend({
			data: function (e, t) {
				var n, r, a, i = this[0],
					s = i && i.attributes;
				if (void 0 === e) {
					if (this.length && (a = Q.get(i), 1 === i.nodeType && !X.get(i, "hasDataAttrs"))) {
						for (n = s.length; n--;) s[n] && 0 === (r = s[n].name).indexOf("data-") && (r = V(r.slice(5)), te(i, r, a[r]));
						X.set(i, "hasDataAttrs", !0)
					}
					return a
				}
				return "object" == typeof e ? this.each(function () {
					Q.set(this, e)
				}) : U(this, function (t) {
					var n;
					if (i && void 0 === t) return void 0 !== (n = Q.get(i, e)) ? n : void 0 !== (n = te(i, e)) ? n : void 0;
					this.each(function () {
						Q.set(this, e, t)
					})
				}, null, t, arguments.length > 1, null, !0)
			},
			removeData: function (e) {
				return this.each(function () {
					Q.remove(this, e)
				})
			}
		}), k.extend({
			queue: function (e, t, n) {
				var r;
				if (e) return t = (t || "fx") + "queue", r = X.get(e, t), n && (!r || Array.isArray(n) ? r = X.access(e, t, k.makeArray(n)) : r.push(n)), r || []
			},
			dequeue: function (e, t) {
				t = t || "fx";
				var n = k.queue(e, t),
					r = n.length,
					a = n.shift(),
					i = k._queueHooks(e, t);
				"inprogress" === a && (a = n.shift(), r--), a && ("fx" === t && n.unshift("inprogress"), delete i.stop, a.call(e, function () {
					k.dequeue(e, t)
				}, i)), !r && i && i.empty.fire()
			},
			_queueHooks: function (e, t) {
				var n = t + "queueHooks";
				return X.get(e, n) || X.access(e, n, {
					empty: k.Callbacks("once memory").add(function () {
						X.remove(e, [t + "queue", n])
					})
				})
			}
		}), k.fn.extend({
			queue: function (e, t) {
				var n = 2;
				return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? k.queue(this[0], e) : void 0 === t ? this : this.each(function () {
					var n = k.queue(this, e, t);
					k._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && k.dequeue(this, e)
				})
			},
			dequeue: function (e) {
				return this.each(function () {
					k.dequeue(this, e)
				})
			},
			clearQueue: function (e) {
				return this.queue(e || "fx", [])
			},
			promise: function (e, t) {
				var n, r = 1,
					a = k.Deferred(),
					i = this,
					s = this.length,
					o = function () {
						--r || a.resolveWith(i, [i])
					};
				for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = X.get(i[s], e + "queueHooks")) && n.empty && (r++, n.empty.add(o));
				return o(), a.promise(t)
			}
		});
		var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
			re = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$", "i"),
			ae = ["Top", "Right", "Bottom", "Left"],
			ie = g.documentElement,
			se = function (e) {
				return k.contains(e.ownerDocument, e)
			},
			oe = {
				composed: !0
			};
		ie.getRootNode && (se = function (e) {
			return k.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
		});
		var le = function (e, t) {
			return "none" === (e = t || e).style.display || "" === e.style.display && se(e) && "none" === k.css(e, "display")
		};

		function de(e, t, n, r) {
			var a, i, s = 20,
				o = r ? function () {
					return r.cur()
				} : function () {
					return k.css(e, t, "")
				},
				l = o(),
				d = n && n[3] || (k.cssNumber[t] ? "" : "px"),
				u = e.nodeType && (k.cssNumber[t] || "px" !== d && +l) && re.exec(k.css(e, t));
			if (u && u[3] !== d) {
				for (l /= 2, d = d || u[3], u = +l || 1; s--;) k.style(e, t, u + d), (1 - i) * (1 - (i = o() / l || .5)) <= 0 && (s = 0), u /= i;
				u *= 2, k.style(e, t, u + d), n = n || []
			}
			return n && (u = +u || +l || 0, a = n[1] ? u + (n[1] + 1) * n[2] : +n[2], r && (r.unit = d, r.start = u, r.end = a)), a
		}
		var ue = {};

		function ce(e) {
			var t, n = e.ownerDocument,
				r = e.nodeName,
				a = ue[r];
			return a || (t = n.body.appendChild(n.createElement(r)), a = k.css(t, "display"), t.parentNode.removeChild(t), "none" === a && (a = "block"), ue[r] = a, a)
		}

		function fe(e, t) {
			for (var n, r, a = [], i = 0, s = e.length; i < s; i++)(r = e[i]).style && (n = r.style.display, t ? ("none" === n && (a[i] = X.get(r, "display") || null, a[i] || (r.style.display = "")), "" === r.style.display && le(r) && (a[i] = ce(r))) : "none" !== n && (a[i] = "none", X.set(r, "display", n)));
			for (i = 0; i < s; i++) null != a[i] && (e[i].style.display = a[i]);
			return e
		}
		k.fn.extend({
			show: function () {
				return fe(this, !0)
			},
			hide: function () {
				return fe(this)
			},
			toggle: function (e) {
				return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
					le(this) ? k(this).show() : k(this).hide()
				})
			}
		});
		var me, he, pe = /^(?:checkbox|radio)$/i,
			_e = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
			ve = /^$|^module$|\/(?:java|ecma)script/i;
		me = g.createDocumentFragment().appendChild(g.createElement("div")), (he = g.createElement("input")).setAttribute("type", "radio"), he.setAttribute("checked", "checked"), he.setAttribute("name", "t"), me.appendChild(he), _.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked, me.innerHTML = "<textarea>x</textarea>", _.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue, me.innerHTML = "<option></option>", _.option = !!me.lastChild;
		var ye = {
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};

		function ge(e, t) {
			var n;
			return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && S(e, t) ? k.merge([e], n) : n
		}

		function Me(e, t) {
			for (var n = 0, r = e.length; n < r; n++) X.set(e[n], "globalEval", !t || X.get(t[n], "globalEval"))
		}
		ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead, ye.th = ye.td, _.option || (ye.optgroup = ye.option = [1, "<select multiple='multiple'>", "</select>"]);
		var be = /<|&#?\w+;/;

		function Le(e, t, n, r, a) {
			for (var i, s, o, l, d, u, c = t.createDocumentFragment(), f = [], m = 0, h = e.length; m < h; m++)
				if ((i = e[m]) || 0 === i)
					if ("object" === L(i)) k.merge(f, i.nodeType ? [i] : i);
					else if (be.test(i)) {
				for (s = s || c.appendChild(t.createElement("div")), o = (_e.exec(i) || ["", ""])[1].toLowerCase(), l = ye[o] || ye._default, s.innerHTML = l[1] + k.htmlPrefilter(i) + l[2], u = l[0]; u--;) s = s.lastChild;
				k.merge(f, s.childNodes), (s = c.firstChild).textContent = ""
			} else f.push(t.createTextNode(i));
			for (c.textContent = "", m = 0; i = f[m++];)
				if (r && k.inArray(i, r) > -1) a && a.push(i);
				else if (d = se(i), s = ge(c.appendChild(i), "script"), d && Me(s), n)
				for (u = 0; i = s[u++];) ve.test(i.type || "") && n.push(i);
			return c
		}
		var ke = /^key/,
			we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
			Ye = /^([^.]*)(?:\.(.+)|)/;

		function xe() {
			return !0
		}

		function Te() {
			return !1
		}

		function De(e, t) {
			return e === function () {
				try {
					return g.activeElement
				} catch (e) {}
			}() == ("focus" === t)
		}

		function Se(e, t, n, r, a, i) {
			var s, o;
			if ("object" == typeof t) {
				for (o in "string" != typeof n && (r = r || n, n = void 0), t) Se(e, o, n, r, t[o], i);
				return e
			}
			if (null == r && null == a ? (a = n, r = n = void 0) : null == a && ("string" == typeof n ? (a = r, r = void 0) : (a = r, r = n, n = void 0)), !1 === a) a = Te;
			else if (!a) return e;
			return 1 === i && (s = a, (a = function (e) {
				return k().off(e), s.apply(this, arguments)
			}).guid = s.guid || (s.guid = k.guid++)), e.each(function () {
				k.event.add(this, t, a, r, n)
			})
		}

		function je(e, t, n) {
			n ? (X.set(e, t, !1), k.event.add(e, t, {
				namespace: !1,
				handler: function (e) {
					var r, a, i = X.get(this, t);
					if (1 & e.isTrigger && this[t]) {
						if (i.length)(k.event.special[t] || {}).delegateType && e.stopPropagation();
						else if (i = o.call(arguments), X.set(this, t, i), r = n(this, t), this[t](), i !== (a = X.get(this, t)) || r ? X.set(this, t, !1) : a = {}, i !== a) return e.stopImmediatePropagation(), e.preventDefault(), a.value
					} else i.length && (X.set(this, t, {
						value: k.event.trigger(k.extend(i[0], k.Event.prototype), i.slice(1), this)
					}), e.stopImmediatePropagation())
				}
			})) : void 0 === X.get(e, t) && k.event.add(e, t, xe)
		}
		k.event = {
			global: {},
			add: function (e, t, n, r, a) {
				var i, s, o, l, d, u, c, f, m, h, p, _ = X.get(e);
				if (G(e))
					for (n.handler && (n = (i = n).handler, a = i.selector), a && k.find.matchesSelector(ie, a), n.guid || (n.guid = k.guid++), (l = _.events) || (l = _.events = Object.create(null)), (s = _.handle) || (s = _.handle = function (t) {
							return void 0 !== k && k.event.triggered !== t.type ? k.event.dispatch.apply(e, arguments) : void 0
						}), d = (t = (t || "").match($) || [""]).length; d--;) m = p = (o = Ye.exec(t[d]) || [])[1], h = (o[2] || "").split(".").sort(), m && (c = k.event.special[m] || {}, m = (a ? c.delegateType : c.bindType) || m, c = k.event.special[m] || {}, u = k.extend({
						type: m,
						origType: p,
						data: r,
						handler: n,
						guid: n.guid,
						selector: a,
						needsContext: a && k.expr.match.needsContext.test(a),
						namespace: h.join(".")
					}, i), (f = l[m]) || ((f = l[m] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(e, r, h, s) || e.addEventListener && e.addEventListener(m, s)), c.add && (c.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), a ? f.splice(f.delegateCount++, 0, u) : f.push(u), k.event.global[m] = !0)
			},
			remove: function (e, t, n, r, a) {
				var i, s, o, l, d, u, c, f, m, h, p, _ = X.hasData(e) && X.get(e);
				if (_ && (l = _.events)) {
					for (d = (t = (t || "").match($) || [""]).length; d--;)
						if (m = p = (o = Ye.exec(t[d]) || [])[1], h = (o[2] || "").split(".").sort(), m) {
							for (c = k.event.special[m] || {}, f = l[m = (r ? c.delegateType : c.bindType) || m] || [], o = o[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = i = f.length; i--;) u = f[i], !a && p !== u.origType || n && n.guid !== u.guid || o && !o.test(u.namespace) || r && r !== u.selector && ("**" !== r || !u.selector) || (f.splice(i, 1), u.selector && f.delegateCount--, c.remove && c.remove.call(e, u));
							s && !f.length && (c.teardown && !1 !== c.teardown.call(e, h, _.handle) || k.removeEvent(e, m, _.handle), delete l[m])
						} else
							for (m in l) k.event.remove(e, m + t[d], n, r, !0);
					k.isEmptyObject(l) && X.remove(e, "handle events")
				}
			},
			dispatch: function (e) {
				var t, n, r, a, i, s, o = new Array(arguments.length),
					l = k.event.fix(e),
					d = (X.get(this, "events") || Object.create(null))[l.type] || [],
					u = k.event.special[l.type] || {};
				for (o[0] = l, t = 1; t < arguments.length; t++) o[t] = arguments[t];
				if (l.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, l)) {
					for (s = k.event.handlers.call(this, l, d), t = 0;
						(a = s[t++]) && !l.isPropagationStopped();)
						for (l.currentTarget = a.elem, n = 0;
							(i = a.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== i.namespace && !l.rnamespace.test(i.namespace) || (l.handleObj = i, l.data = i.data, void 0 !== (r = ((k.event.special[i.origType] || {}).handle || i.handler).apply(a.elem, o)) && !1 === (l.result = r) && (l.preventDefault(), l.stopPropagation()));
					return u.postDispatch && u.postDispatch.call(this, l), l.result
				}
			},
			handlers: function (e, t) {
				var n, r, a, i, s, o = [],
					l = t.delegateCount,
					d = e.target;
				if (l && d.nodeType && !("click" === e.type && e.button >= 1))
					for (; d !== this; d = d.parentNode || this)
						if (1 === d.nodeType && ("click" !== e.type || !0 !== d.disabled)) {
							for (i = [], s = {}, n = 0; n < l; n++) void 0 === s[a = (r = t[n]).selector + " "] && (s[a] = r.needsContext ? k(a, this).index(d) > -1 : k.find(a, this, null, [d]).length), s[a] && i.push(r);
							i.length && o.push({
								elem: d,
								handlers: i
							})
						}
				return d = this, l < t.length && o.push({
					elem: d,
					handlers: t.slice(l)
				}), o
			},
			addProp: function (e, t) {
				Object.defineProperty(k.Event.prototype, e, {
					enumerable: !0,
					configurable: !0,
					get: v(t) ? function () {
						if (this.originalEvent) return t(this.originalEvent)
					} : function () {
						if (this.originalEvent) return this.originalEvent[e]
					},
					set: function (t) {
						Object.defineProperty(this, e, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: t
						})
					}
				})
			},
			fix: function (e) {
				return e[k.expando] ? e : new k.Event(e)
			},
			special: {
				load: {
					noBubble: !0
				},
				click: {
					setup: function (e) {
						var t = this || e;
						return pe.test(t.type) && t.click && S(t, "input") && je(t, "click", xe), !1
					},
					trigger: function (e) {
						var t = this || e;
						return pe.test(t.type) && t.click && S(t, "input") && je(t, "click"), !0
					},
					_default: function (e) {
						var t = e.target;
						return pe.test(t.type) && t.click && S(t, "input") && X.get(t, "click") || S(t, "a")
					}
				},
				beforeunload: {
					postDispatch: function (e) {
						void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
					}
				}
			}
		}, k.removeEvent = function (e, t, n) {
			e.removeEventListener && e.removeEventListener(t, n)
		}, k.Event = function (e, t) {
			if (!(this instanceof k.Event)) return new k.Event(e, t);
			e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? xe : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && k.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[k.expando] = !0
		}, k.Event.prototype = {
			constructor: k.Event,
			isDefaultPrevented: Te,
			isPropagationStopped: Te,
			isImmediatePropagationStopped: Te,
			isSimulated: !1,
			preventDefault: function () {
				var e = this.originalEvent;
				this.isDefaultPrevented = xe, e && !this.isSimulated && e.preventDefault()
			},
			stopPropagation: function () {
				var e = this.originalEvent;
				this.isPropagationStopped = xe, e && !this.isSimulated && e.stopPropagation()
			},
			stopImmediatePropagation: function () {
				var e = this.originalEvent;
				this.isImmediatePropagationStopped = xe, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
			}
		}, k.each({
			altKey: !0,
			bubbles: !0,
			cancelable: !0,
			changedTouches: !0,
			ctrlKey: !0,
			detail: !0,
			eventPhase: !0,
			metaKey: !0,
			pageX: !0,
			pageY: !0,
			shiftKey: !0,
			view: !0,
			char: !0,
			code: !0,
			charCode: !0,
			key: !0,
			keyCode: !0,
			button: !0,
			buttons: !0,
			clientX: !0,
			clientY: !0,
			offsetX: !0,
			offsetY: !0,
			pointerId: !0,
			pointerType: !0,
			screenX: !0,
			screenY: !0,
			targetTouches: !0,
			toElement: !0,
			touches: !0,
			which: function (e) {
				var t = e.button;
				return null == e.which && ke.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
			}
		}, k.event.addProp), k.each({
			focus: "focusin",
			blur: "focusout"
		}, function (e, t) {
			k.event.special[e] = {
				setup: function () {
					return je(this, e, De), !1
				},
				trigger: function () {
					return je(this, e), !0
				},
				delegateType: t
			}
		}), k.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout",
			pointerenter: "pointerover",
			pointerleave: "pointerout"
		}, function (e, t) {
			k.event.special[e] = {
				delegateType: t,
				bindType: t,
				handle: function (e) {
					var n, r = e.relatedTarget,
						a = e.handleObj;
					return r && (r === this || k.contains(this, r)) || (e.type = a.origType, n = a.handler.apply(this, arguments), e.type = t), n
				}
			}
		}), k.fn.extend({
			on: function (e, t, n, r) {
				return Se(this, e, t, n, r)
			},
			one: function (e, t, n, r) {
				return Se(this, e, t, n, r, 1)
			},
			off: function (e, t, n) {
				var r, a;
				if (e && e.preventDefault && e.handleObj) return r = e.handleObj, k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
				if ("object" == typeof e) {
					for (a in e) this.off(a, t, e[a]);
					return this
				}
				return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each(function () {
					k.event.remove(this, e, n, t)
				})
			}
		});
		var Ce = /<script|<style|<link/i,
			He = /checked\s*(?:[^=]|=\s*.checked.)/i,
			Ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

		function Ee(e, t) {
			return S(e, "table") && S(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0] || e
		}

		function Pe(e) {
			return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
		}

		function Oe(e) {
			return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
		}

		function $e(e, t) {
			var n, r, a, i, s, o;
			if (1 === t.nodeType) {
				if (X.hasData(e) && (o = X.get(e).events))
					for (a in X.remove(t, "handle events"), o)
						for (n = 0, r = o[a].length; n < r; n++) k.event.add(t, a, o[a][n]);
				Q.hasData(e) && (i = Q.access(e), s = k.extend({}, i), Q.set(t, s))
			}
		}

		function Ne(e, t, n, r) {
			t = l(t);
			var a, i, s, o, d, u, c = 0,
				f = e.length,
				m = f - 1,
				h = t[0],
				p = v(h);
			if (p || f > 1 && "string" == typeof h && !_.checkClone && He.test(h)) return e.each(function (a) {
				var i = e.eq(a);
				p && (t[0] = h.call(this, a, i.html())), Ne(i, t, n, r)
			});
			if (f && (i = (a = Le(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === a.childNodes.length && (a = i), i || r)) {
				for (o = (s = k.map(ge(a, "script"), Pe)).length; c < f; c++) d = a, c !== m && (d = k.clone(d, !0, !0), o && k.merge(s, ge(d, "script"))), n.call(e[c], d, c);
				if (o)
					for (u = s[s.length - 1].ownerDocument, k.map(s, Oe), c = 0; c < o; c++) d = s[c], ve.test(d.type || "") && !X.access(d, "globalEval") && k.contains(u, d) && (d.src && "module" !== (d.type || "").toLowerCase() ? k._evalUrl && !d.noModule && k._evalUrl(d.src, {
						nonce: d.nonce || d.getAttribute("nonce")
					}, u) : b(d.textContent.replace(Ae, ""), d, u))
			}
			return e
		}

		function Re(e, t, n) {
			for (var r, a = t ? k.filter(t, e) : e, i = 0; null != (r = a[i]); i++) n || 1 !== r.nodeType || k.cleanData(ge(r)), r.parentNode && (n && se(r) && Me(ge(r, "script")), r.parentNode.removeChild(r));
			return e
		}
		k.extend({
			htmlPrefilter: function (e) {
				return e
			},
			clone: function (e, t, n) {
				var r, a, i, s, o, l, d, u = e.cloneNode(!0),
					c = se(e);
				if (!(_.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e)))
					for (s = ge(u), r = 0, a = (i = ge(e)).length; r < a; r++) o = i[r], l = s[r], void 0, "input" === (d = l.nodeName.toLowerCase()) && pe.test(o.type) ? l.checked = o.checked : "input" !== d && "textarea" !== d || (l.defaultValue = o.defaultValue);
				if (t)
					if (n)
						for (i = i || ge(e), s = s || ge(u), r = 0, a = i.length; r < a; r++) $e(i[r], s[r]);
					else $e(e, u);
				return (s = ge(u, "script")).length > 0 && Me(s, !c && ge(e, "script")), u
			},
			cleanData: function (e) {
				for (var t, n, r, a = k.event.special, i = 0; void 0 !== (n = e[i]); i++)
					if (G(n)) {
						if (t = n[X.expando]) {
							if (t.events)
								for (r in t.events) a[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
							n[X.expando] = void 0
						}
						n[Q.expando] && (n[Q.expando] = void 0)
					}
			}
		}), k.fn.extend({
			detach: function (e) {
				return Re(this, e, !0)
			},
			remove: function (e) {
				return Re(this, e)
			},
			text: function (e) {
				return U(this, function (e) {
					return void 0 === e ? k.text(this) : this.empty().each(function () {
						1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
					})
				}, null, e, arguments.length)
			},
			append: function () {
				return Ne(this, arguments, function (e) {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ee(this, e).appendChild(e)
				})
			},
			prepend: function () {
				return Ne(this, arguments, function (e) {
					if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
						var t = Ee(this, e);
						t.insertBefore(e, t.firstChild)
					}
				})
			},
			before: function () {
				return Ne(this, arguments, function (e) {
					this.parentNode && this.parentNode.insertBefore(e, this)
				})
			},
			after: function () {
				return Ne(this, arguments, function (e) {
					this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
				})
			},
			empty: function () {
				for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (k.cleanData(ge(e, !1)), e.textContent = "");
				return this
			},
			clone: function (e, t) {
				return e = null != e && e, t = null == t ? e : t, this.map(function () {
					return k.clone(this, e, t)
				})
			},
			html: function (e) {
				return U(this, function (e) {
					var t = this[0] || {},
						n = 0,
						r = this.length;
					if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
					if ("string" == typeof e && !Ce.test(e) && !ye[(_e.exec(e) || ["", ""])[1].toLowerCase()]) {
						e = k.htmlPrefilter(e);
						try {
							for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (k.cleanData(ge(t, !1)), t.innerHTML = e);
							t = 0
						} catch (e) {}
					}
					t && this.empty().append(e)
				}, null, e, arguments.length)
			},
			replaceWith: function () {
				var e = [];
				return Ne(this, arguments, function (t) {
					var n = this.parentNode;
					k.inArray(this, e) < 0 && (k.cleanData(ge(this)), n && n.replaceChild(t, this))
				}, e)
			}
		}), k.each({
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
		}, function (e, t) {
			k.fn[e] = function (e) {
				for (var n, r = [], a = k(e), i = a.length - 1, s = 0; s <= i; s++) n = s === i ? this : this.clone(!0), k(a[s])[t](n), d.apply(r, n.get());
				return this.pushStack(r)
			}
		});
		var Fe = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"),
			We = function (e) {
				var t = e.ownerDocument.defaultView;
				return t && t.opener || (t = n), t.getComputedStyle(e)
			},
			Ie = function (e, t, n) {
				var r, a, i = {};
				for (a in t) i[a] = e.style[a], e.style[a] = t[a];
				for (a in r = n.call(e), t) e.style[a] = i[a];
				return r
			},
			ze = new RegExp(ae.join("|"), "i");

		function Ue(e, t, n) {
			var r, a, i, s, o = e.style;
			return (n = n || We(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || se(e) || (s = k.style(e, t)), !_.pixelBoxStyles() && Fe.test(s) && ze.test(t) && (r = o.width, a = o.minWidth, i = o.maxWidth, o.minWidth = o.maxWidth = o.width = s, s = n.width, o.width = r, o.minWidth = a, o.maxWidth = i)), void 0 !== s ? s + "" : s
		}

		function qe(e, t) {
			return {
				get: function () {
					if (!e()) return (this.get = t).apply(this, arguments);
					delete this.get
				}
			}
		}! function () {
			function e() {
				if (u) {
					d.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(d).appendChild(u);
					var e = n.getComputedStyle(u);
					r = "1%" !== e.top, l = 12 === t(e.marginLeft), u.style.right = "60%", s = 36 === t(e.right), a = 36 === t(e.width), u.style.position = "absolute", i = 12 === t(u.offsetWidth / 3), ie.removeChild(d), u = null
				}
			}

			function t(e) {
				return Math.round(parseFloat(e))
			}
			var r, a, i, s, o, l, d = g.createElement("div"),
				u = g.createElement("div");
			u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", _.clearCloneStyle = "content-box" === u.style.backgroundClip, k.extend(_, {
				boxSizingReliable: function () {
					return e(), a
				},
				pixelBoxStyles: function () {
					return e(), s
				},
				pixelPosition: function () {
					return e(), r
				},
				reliableMarginLeft: function () {
					return e(), l
				},
				scrollboxSize: function () {
					return e(), i
				},
				reliableTrDimensions: function () {
					var e, t, r, a;
					return null == o && (e = g.createElement("table"), t = g.createElement("tr"), r = g.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", r.style.height = "9px", ie.appendChild(e).appendChild(t).appendChild(r), a = n.getComputedStyle(t), o = parseInt(a.height) > 3, ie.removeChild(e)), o
				}
			}))
		}();
		var Je = ["Webkit", "Moz", "ms"],
			Be = g.createElement("div").style,
			Ve = {};

		function Ge(e) {
			var t = k.cssProps[e] || Ve[e];
			return t || (e in Be ? e : Ve[e] = function (e) {
				for (var t = e[0].toUpperCase() + e.slice(1), n = Je.length; n--;)
					if ((e = Je[n] + t) in Be) return e
			}(e) || e)
		}
		var Ke = /^(none|table(?!-c[ea]).+)/,
			Xe = /^--/,
			Qe = {
				position: "absolute",
				visibility: "hidden",
				display: "block"
			},
			Ze = {
				letterSpacing: "0",
				fontWeight: "400"
			};

		function et(e, t, n) {
			var r = re.exec(t);
			return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
		}

		function tt(e, t, n, r, a, i) {
			var s = "width" === t ? 1 : 0,
				o = 0,
				l = 0;
			if (n === (r ? "border" : "content")) return 0;
			for (; s < 4; s += 2) "margin" === n && (l += k.css(e, n + ae[s], !0, a)), r ? ("content" === n && (l -= k.css(e, "padding" + ae[s], !0, a)), "margin" !== n && (l -= k.css(e, "border" + ae[s] + "Width", !0, a))) : (l += k.css(e, "padding" + ae[s], !0, a), "padding" !== n ? l += k.css(e, "border" + ae[s] + "Width", !0, a) : o += k.css(e, "border" + ae[s] + "Width", !0, a));
			return !r && i >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - l - o - .5)) || 0), l
		}

		function nt(e, t, n) {
			var r = We(e),
				a = (!_.boxSizingReliable() || n) && "border-box" === k.css(e, "boxSizing", !1, r),
				i = a,
				s = Ue(e, t, r),
				o = "offset" + t[0].toUpperCase() + t.slice(1);
			if (Fe.test(s)) {
				if (!n) return s;
				s = "auto"
			}
			return (!_.boxSizingReliable() && a || !_.reliableTrDimensions() && S(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === k.css(e, "display", !1, r)) && e.getClientRects().length && (a = "border-box" === k.css(e, "boxSizing", !1, r), (i = o in e) && (s = e[o])), (s = parseFloat(s) || 0) + tt(e, t, n || (a ? "border" : "content"), i, r, s) + "px"
		}

		function rt(e, t, n, r, a) {
			return new rt.prototype.init(e, t, n, r, a)
		}
		k.extend({
			cssHooks: {
				opacity: {
					get: function (e, t) {
						if (t) {
							var n = Ue(e, "opacity");
							return "" === n ? "1" : n
						}
					}
				}
			},
			cssNumber: {
				animationIterationCount: !0,
				columnCount: !0,
				fillOpacity: !0,
				flexGrow: !0,
				flexShrink: !0,
				fontWeight: !0,
				gridArea: !0,
				gridColumn: !0,
				gridColumnEnd: !0,
				gridColumnStart: !0,
				gridRow: !0,
				gridRowEnd: !0,
				gridRowStart: !0,
				lineHeight: !0,
				opacity: !0,
				order: !0,
				orphans: !0,
				widows: !0,
				zIndex: !0,
				zoom: !0
			},
			cssProps: {},
			style: function (e, t, n, r) {
				if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
					var a, i, s, o = V(t),
						l = Xe.test(t),
						d = e.style;
					if (l || (t = Ge(o)), s = k.cssHooks[t] || k.cssHooks[o], void 0 === n) return s && "get" in s && void 0 !== (a = s.get(e, !1, r)) ? a : d[t];
					"string" === (i = typeof n) && (a = re.exec(n)) && a[1] && (n = de(e, t, a), i = "number"), null != n && n == n && ("number" !== i || l || (n += a && a[3] || (k.cssNumber[o] ? "" : "px")), _.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (d[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (l ? d.setProperty(t, n) : d[t] = n))
				}
			},
			css: function (e, t, n, r) {
				var a, i, s, o = V(t);
				return Xe.test(t) || (t = Ge(o)), (s = k.cssHooks[t] || k.cssHooks[o]) && "get" in s && (a = s.get(e, !0, n)), void 0 === a && (a = Ue(e, t, r)), "normal" === a && t in Ze && (a = Ze[t]), "" === n || n ? (i = parseFloat(a), !0 === n || isFinite(i) ? i || 0 : a) : a
			}
		}), k.each(["height", "width"], function (e, t) {
			k.cssHooks[t] = {
				get: function (e, n, r) {
					if (n) return !Ke.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? nt(e, t, r) : Ie(e, Qe, function () {
						return nt(e, t, r)
					})
				},
				set: function (e, n, r) {
					var a, i = We(e),
						s = !_.scrollboxSize() && "absolute" === i.position,
						o = (s || r) && "border-box" === k.css(e, "boxSizing", !1, i),
						l = r ? tt(e, t, r, o, i) : 0;
					return o && s && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(i[t]) - tt(e, t, "border", !1, i) - .5)), l && (a = re.exec(n)) && "px" !== (a[3] || "px") && (e.style[t] = n, n = k.css(e, t)), et(0, n, l)
				}
			}
		}), k.cssHooks.marginLeft = qe(_.reliableMarginLeft, function (e, t) {
			if (t) return (parseFloat(Ue(e, "marginLeft")) || e.getBoundingClientRect().left - Ie(e, {
				marginLeft: 0
			}, function () {
				return e.getBoundingClientRect().left
			})) + "px"
		}), k.each({
			margin: "",
			padding: "",
			border: "Width"
		}, function (e, t) {
			k.cssHooks[e + t] = {
				expand: function (n) {
					for (var r = 0, a = {}, i = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) a[e + ae[r] + t] = i[r] || i[r - 2] || i[0];
					return a
				}
			}, "margin" !== e && (k.cssHooks[e + t].set = et)
		}), k.fn.extend({
			css: function (e, t) {
				return U(this, function (e, t, n) {
					var r, a, i = {},
						s = 0;
					if (Array.isArray(t)) {
						for (r = We(e), a = t.length; s < a; s++) i[t[s]] = k.css(e, t[s], !1, r);
						return i
					}
					return void 0 !== n ? k.style(e, t, n) : k.css(e, t)
				}, e, t, arguments.length > 1)
			}
		}), k.Tween = rt, rt.prototype = {
			constructor: rt,
			init: function (e, t, n, r, a, i) {
				this.elem = e, this.prop = n, this.easing = a || k.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = i || (k.cssNumber[n] ? "" : "px")
			},
			cur: function () {
				var e = rt.propHooks[this.prop];
				return e && e.get ? e.get(this) : rt.propHooks._default.get(this)
			},
			run: function (e) {
				var t, n = rt.propHooks[this.prop];
				return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rt.propHooks._default.set(this), this
			}
		}, rt.prototype.init.prototype = rt.prototype, rt.propHooks = {
			_default: {
				get: function (e) {
					var t;
					return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
				},
				set: function (e) {
					k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !k.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit)
				}
			}
		}, rt.propHooks.scrollTop = rt.propHooks.scrollLeft = {
			set: function (e) {
				e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
			}
		}, k.easing = {
			linear: function (e) {
				return e
			},
			swing: function (e) {
				return .5 - Math.cos(e * Math.PI) / 2
			},
			_default: "swing"
		}, k.fx = rt.prototype.init, k.fx.step = {};
		var at, it, st = /^(?:toggle|show|hide)$/,
			ot = /queueHooks$/;

		function lt() {
			it && (!1 === g.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(lt) : n.setTimeout(lt, k.fx.interval), k.fx.tick())
		}

		function dt() {
			return n.setTimeout(function () {
				at = void 0
			}), at = Date.now()
		}

		function ut(e, t) {
			var n, r = 0,
				a = {
					height: e
				};
			for (t = t ? 1 : 0; r < 4; r += 2 - t) a["margin" + (n = ae[r])] = a["padding" + n] = e;
			return t && (a.opacity = a.width = e), a
		}

		function ct(e, t, n) {
			for (var r, a = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), i = 0, s = a.length; i < s; i++)
				if (r = a[i].call(n, t, e)) return r
		}

		function ft(e, t, n) {
			var r, a, i = 0,
				s = ft.prefilters.length,
				o = k.Deferred().always(function () {
					delete l.elem
				}),
				l = function () {
					if (a) return !1;
					for (var t = at || dt(), n = Math.max(0, d.startTime + d.duration - t), r = 1 - (n / d.duration || 0), i = 0, s = d.tweens.length; i < s; i++) d.tweens[i].run(r);
					return o.notifyWith(e, [d, r, n]), r < 1 && s ? n : (s || o.notifyWith(e, [d, 1, 0]), o.resolveWith(e, [d]), !1)
				},
				d = o.promise({
					elem: e,
					props: k.extend({}, t),
					opts: k.extend(!0, {
						specialEasing: {},
						easing: k.easing._default
					}, n),
					originalProperties: t,
					originalOptions: n,
					startTime: at || dt(),
					duration: n.duration,
					tweens: [],
					createTween: function (t, n) {
						var r = k.Tween(e, d.opts, t, n, d.opts.specialEasing[t] || d.opts.easing);
						return d.tweens.push(r), r
					},
					stop: function (t) {
						var n = 0,
							r = t ? d.tweens.length : 0;
						if (a) return this;
						for (a = !0; n < r; n++) d.tweens[n].run(1);
						return t ? (o.notifyWith(e, [d, 1, 0]), o.resolveWith(e, [d, t])) : o.rejectWith(e, [d, t]), this
					}
				}),
				u = d.props;
			for (! function (e, t) {
					var n, r, a, i, s;
					for (n in e)
						if (a = t[r = V(n)], i = e[n], Array.isArray(i) && (a = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), (s = k.cssHooks[r]) && "expand" in s)
							for (n in i = s.expand(i), delete e[r], i) n in e || (e[n] = i[n], t[n] = a);
						else t[r] = a
				}(u, d.opts.specialEasing); i < s; i++)
				if (r = ft.prefilters[i].call(d, e, u, d.opts)) return v(r.stop) && (k._queueHooks(d.elem, d.opts.queue).stop = r.stop.bind(r)), r;
			return k.map(u, ct, d), v(d.opts.start) && d.opts.start.call(e, d), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always), k.fx.timer(k.extend(l, {
				elem: e,
				anim: d,
				queue: d.opts.queue
			})), d
		}
		k.Animation = k.extend(ft, {
				tweeners: {
					"*": [function (e, t) {
						var n = this.createTween(e, t);
						return de(n.elem, e, re.exec(t), n), n
					}]
				},
				tweener: function (e, t) {
					v(e) ? (t = e, e = ["*"]) : e = e.match($);
					for (var n, r = 0, a = e.length; r < a; r++) n = e[r], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t)
				},
				prefilters: [function (e, t, n) {
					var r, a, i, s, o, l, d, u, c = "width" in t || "height" in t,
						f = this,
						m = {},
						h = e.style,
						p = e.nodeType && le(e),
						_ = X.get(e, "fxshow");
					for (r in n.queue || (null == (s = k._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, o = s.empty.fire, s.empty.fire = function () {
							s.unqueued || o()
						}), s.unqueued++, f.always(function () {
							f.always(function () {
								s.unqueued--, k.queue(e, "fx").length || s.empty.fire()
							})
						})), t)
						if (a = t[r], st.test(a)) {
							if (delete t[r], i = i || "toggle" === a, a === (p ? "hide" : "show")) {
								if ("show" !== a || !_ || void 0 === _[r]) continue;
								p = !0
							}
							m[r] = _ && _[r] || k.style(e, r)
						}
					if ((l = !k.isEmptyObject(t)) || !k.isEmptyObject(m))
						for (r in c && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (d = _ && _.display) && (d = X.get(e, "display")), "none" === (u = k.css(e, "display")) && (d ? u = d : (fe([e], !0), d = e.style.display || d, u = k.css(e, "display"), fe([e]))), ("inline" === u || "inline-block" === u && null != d) && "none" === k.css(e, "float") && (l || (f.done(function () {
								h.display = d
							}), null == d && (u = h.display, d = "none" === u ? "" : u)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", f.always(function () {
								h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
							})), l = !1, m) l || (_ ? "hidden" in _ && (p = _.hidden) : _ = X.access(e, "fxshow", {
							display: d
						}), i && (_.hidden = !p), p && fe([e], !0), f.done(function () {
							for (r in p || fe([e]), X.remove(e, "fxshow"), m) k.style(e, r, m[r])
						})), l = ct(p ? _[r] : 0, r, f), r in _ || (_[r] = l.start, p && (l.end = l.start, l.start = 0))
				}],
				prefilter: function (e, t) {
					t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
				}
			}), k.speed = function (e, t, n) {
				var r = e && "object" == typeof e ? k.extend({}, e) : {
					complete: n || !n && t || v(e) && e,
					duration: e,
					easing: n && t || t && !v(t) && t
				};
				return k.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[r.duration] : r.duration = k.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
					v(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue)
				}, r
			}, k.fn.extend({
				fadeTo: function (e, t, n, r) {
					return this.filter(le).css("opacity", 0).show().end().animate({
						opacity: t
					}, e, n, r)
				},
				animate: function (e, t, n, r) {
					var a = k.isEmptyObject(e),
						i = k.speed(t, n, r),
						s = function () {
							var t = ft(this, k.extend({}, e), i);
							(a || X.get(this, "finish")) && t.stop(!0)
						};
					return s.finish = s, a || !1 === i.queue ? this.each(s) : this.queue(i.queue, s)
				},
				stop: function (e, t, n) {
					var r = function (e) {
						var t = e.stop;
						delete e.stop, t(n)
					};
					return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each(function () {
						var t = !0,
							a = null != e && e + "queueHooks",
							i = k.timers,
							s = X.get(this);
						if (a) s[a] && s[a].stop && r(s[a]);
						else
							for (a in s) s[a] && s[a].stop && ot.test(a) && r(s[a]);
						for (a = i.length; a--;) i[a].elem !== this || null != e && i[a].queue !== e || (i[a].anim.stop(n), t = !1, i.splice(a, 1));
						!t && n || k.dequeue(this, e)
					})
				},
				finish: function (e) {
					return !1 !== e && (e = e || "fx"), this.each(function () {
						var t, n = X.get(this),
							r = n[e + "queue"],
							a = n[e + "queueHooks"],
							i = k.timers,
							s = r ? r.length : 0;
						for (n.finish = !0, k.queue(this, e, []), a && a.stop && a.stop.call(this, !0), t = i.length; t--;) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
						for (t = 0; t < s; t++) r[t] && r[t].finish && r[t].finish.call(this);
						delete n.finish
					})
				}
			}), k.each(["toggle", "show", "hide"], function (e, t) {
				var n = k.fn[t];
				k.fn[t] = function (e, r, a) {
					return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, a)
				}
			}), k.each({
				slideDown: ut("show"),
				slideUp: ut("hide"),
				slideToggle: ut("toggle"),
				fadeIn: {
					opacity: "show"
				},
				fadeOut: {
					opacity: "hide"
				},
				fadeToggle: {
					opacity: "toggle"
				}
			}, function (e, t) {
				k.fn[e] = function (e, n, r) {
					return this.animate(t, e, n, r)
				}
			}), k.timers = [], k.fx.tick = function () {
				var e, t = 0,
					n = k.timers;
				for (at = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
				n.length || k.fx.stop(), at = void 0
			}, k.fx.timer = function (e) {
				k.timers.push(e), k.fx.start()
			}, k.fx.interval = 13, k.fx.start = function () {
				it || (it = !0, lt())
			}, k.fx.stop = function () {
				it = null
			}, k.fx.speeds = {
				slow: 600,
				fast: 200,
				_default: 400
			}, k.fn.delay = function (e, t) {
				return e = k.fx && k.fx.speeds[e] || e, t = t || "fx", this.queue(t, function (t, r) {
					var a = n.setTimeout(t, e);
					r.stop = function () {
						n.clearTimeout(a)
					}
				})
			},
			function () {
				var e = g.createElement("input"),
					t = g.createElement("select").appendChild(g.createElement("option"));
				e.type = "checkbox", _.checkOn = "" !== e.value, _.optSelected = t.selected, (e = g.createElement("input")).value = "t", e.type = "radio", _.radioValue = "t" === e.value
			}();
		var mt, ht = k.expr.attrHandle;
		k.fn.extend({
			attr: function (e, t) {
				return U(this, k.attr, e, t, arguments.length > 1)
			},
			removeAttr: function (e) {
				return this.each(function () {
					k.removeAttr(this, e)
				})
			}
		}), k.extend({
			attr: function (e, t, n) {
				var r, a, i = e.nodeType;
				if (3 !== i && 8 !== i && 2 !== i) return void 0 === e.getAttribute ? k.prop(e, t, n) : (1 === i && k.isXMLDoc(e) || (a = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? mt : void 0)), void 0 !== n ? null === n ? void k.removeAttr(e, t) : a && "set" in a && void 0 !== (r = a.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : a && "get" in a && null !== (r = a.get(e, t)) ? r : null == (r = k.find.attr(e, t)) ? void 0 : r)
			},
			attrHooks: {
				type: {
					set: function (e, t) {
						if (!_.radioValue && "radio" === t && S(e, "input")) {
							var n = e.value;
							return e.setAttribute("type", t), n && (e.value = n), t
						}
					}
				}
			},
			removeAttr: function (e, t) {
				var n, r = 0,
					a = t && t.match($);
				if (a && 1 === e.nodeType)
					for (; n = a[r++];) e.removeAttribute(n)
			}
		}), mt = {
			set: function (e, t, n) {
				return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n
			}
		}, k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) {
			var n = ht[t] || k.find.attr;
			ht[t] = function (e, t, r) {
				var a, i, s = t.toLowerCase();
				return r || (i = ht[s], ht[s] = a, a = null != n(e, t, r) ? s : null, ht[s] = i), a
			}
		});
		var pt = /^(?:input|select|textarea|button)$/i,
			_t = /^(?:a|area)$/i;

		function vt(e) {
			return (e.match($) || []).join(" ")
		}

		function yt(e) {
			return e.getAttribute && e.getAttribute("class") || ""
		}

		function gt(e) {
			return Array.isArray(e) ? e : "string" == typeof e && e.match($) || []
		}
		k.fn.extend({
			prop: function (e, t) {
				return U(this, k.prop, e, t, arguments.length > 1)
			},
			removeProp: function (e) {
				return this.each(function () {
					delete this[k.propFix[e] || e]
				})
			}
		}), k.extend({
			prop: function (e, t, n) {
				var r, a, i = e.nodeType;
				if (3 !== i && 8 !== i && 2 !== i) return 1 === i && k.isXMLDoc(e) || (t = k.propFix[t] || t, a = k.propHooks[t]), void 0 !== n ? a && "set" in a && void 0 !== (r = a.set(e, n, t)) ? r : e[t] = n : a && "get" in a && null !== (r = a.get(e, t)) ? r : e[t]
			},
			propHooks: {
				tabIndex: {
					get: function (e) {
						var t = k.find.attr(e, "tabindex");
						return t ? parseInt(t, 10) : pt.test(e.nodeName) || _t.test(e.nodeName) && e.href ? 0 : -1
					}
				}
			},
			propFix: {
				for: "htmlFor",
				class: "className"
			}
		}), _.optSelected || (k.propHooks.selected = {
			get: function (e) {
				var t = e.parentNode;
				return t && t.parentNode && t.parentNode.selectedIndex, null
			},
			set: function (e) {
				var t = e.parentNode;
				t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
			}
		}), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
			k.propFix[this.toLowerCase()] = this
		}), k.fn.extend({
			addClass: function (e) {
				var t, n, r, a, i, s, o, l = 0;
				if (v(e)) return this.each(function (t) {
					k(this).addClass(e.call(this, t, yt(this)))
				});
				if ((t = gt(e)).length)
					for (; n = this[l++];)
						if (a = yt(n), r = 1 === n.nodeType && " " + vt(a) + " ") {
							for (s = 0; i = t[s++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
							a !== (o = vt(r)) && n.setAttribute("class", o)
						}
				return this
			},
			removeClass: function (e) {
				var t, n, r, a, i, s, o, l = 0;
				if (v(e)) return this.each(function (t) {
					k(this).removeClass(e.call(this, t, yt(this)))
				});
				if (!arguments.length) return this.attr("class", "");
				if ((t = gt(e)).length)
					for (; n = this[l++];)
						if (a = yt(n), r = 1 === n.nodeType && " " + vt(a) + " ") {
							for (s = 0; i = t[s++];)
								for (; r.indexOf(" " + i + " ") > -1;) r = r.replace(" " + i + " ", " ");
							a !== (o = vt(r)) && n.setAttribute("class", o)
						}
				return this
			},
			toggleClass: function (e, t) {
				var n = typeof e,
					r = "string" === n || Array.isArray(e);
				return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : v(e) ? this.each(function (n) {
					k(this).toggleClass(e.call(this, n, yt(this), t), t)
				}) : this.each(function () {
					var t, a, i, s;
					if (r)
						for (a = 0, i = k(this), s = gt(e); t = s[a++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
					else void 0 !== e && "boolean" !== n || ((t = yt(this)) && X.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : X.get(this, "__className__") || ""))
				})
			},
			hasClass: function (e) {
				var t, n, r = 0;
				for (t = " " + e + " "; n = this[r++];)
					if (1 === n.nodeType && (" " + vt(yt(n)) + " ").indexOf(t) > -1) return !0;
				return !1
			}
		});
		var Mt = /\r/g;
		k.fn.extend({
			val: function (e) {
				var t, n, r, a = this[0];
				return arguments.length ? (r = v(e), this.each(function (n) {
					var a;
					1 === this.nodeType && (null == (a = r ? e.call(this, n, k(this).val()) : e) ? a = "" : "number" == typeof a ? a += "" : Array.isArray(a) && (a = k.map(a, function (e) {
						return null == e ? "" : e + ""
					})), (t = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, a, "value") || (this.value = a))
				})) : a ? (t = k.valHooks[a.type] || k.valHooks[a.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(a, "value")) ? n : "string" == typeof (n = a.value) ? n.replace(Mt, "") : null == n ? "" : n : void 0
			}
		}), k.extend({
			valHooks: {
				option: {
					get: function (e) {
						var t = k.find.attr(e, "value");
						return null != t ? t : vt(k.text(e))
					}
				},
				select: {
					get: function (e) {
						var t, n, r, a = e.options,
							i = e.selectedIndex,
							s = "select-one" === e.type,
							o = s ? null : [],
							l = s ? i + 1 : a.length;
						for (r = i < 0 ? l : s ? i : 0; r < l; r++)
							if (((n = a[r]).selected || r === i) && !n.disabled && (!n.parentNode.disabled || !S(n.parentNode, "optgroup"))) {
								if (t = k(n).val(), s) return t;
								o.push(t)
							}
						return o
					},
					set: function (e, t) {
						for (var n, r, a = e.options, i = k.makeArray(t), s = a.length; s--;)((r = a[s]).selected = k.inArray(k.valHooks.option.get(r), i) > -1) && (n = !0);
						return n || (e.selectedIndex = -1), i
					}
				}
			}
		}), k.each(["radio", "checkbox"], function () {
			k.valHooks[this] = {
				set: function (e, t) {
					if (Array.isArray(t)) return e.checked = k.inArray(k(e).val(), t) > -1
				}
			}, _.checkOn || (k.valHooks[this].get = function (e) {
				return null === e.getAttribute("value") ? "on" : e.value
			})
		}), _.focusin = "onfocusin" in n;
		var bt = /^(?:focusinfocus|focusoutblur)$/,
			Lt = function (e) {
				e.stopPropagation()
			};
		k.extend(k.event, {
			trigger: function (e, t, r, a) {
				var i, s, o, l, d, u, c, f, h = [r || g],
					p = m.call(e, "type") ? e.type : e,
					_ = m.call(e, "namespace") ? e.namespace.split(".") : [];
				if (s = f = o = r = r || g, 3 !== r.nodeType && 8 !== r.nodeType && !bt.test(p + k.event.triggered) && (p.indexOf(".") > -1 && (p = (_ = p.split(".")).shift(), _.sort()), d = p.indexOf(":") < 0 && "on" + p, (e = e[k.expando] ? e : new k.Event(p, "object" == typeof e && e)).isTrigger = a ? 2 : 3, e.namespace = _.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + _.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : k.makeArray(t, [e]), c = k.event.special[p] || {}, a || !c.trigger || !1 !== c.trigger.apply(r, t))) {
					if (!a && !c.noBubble && !y(r)) {
						for (l = c.delegateType || p, bt.test(l + p) || (s = s.parentNode); s; s = s.parentNode) h.push(s), o = s;
						o === (r.ownerDocument || g) && h.push(o.defaultView || o.parentWindow || n)
					}
					for (i = 0;
						(s = h[i++]) && !e.isPropagationStopped();) f = s, e.type = i > 1 ? l : c.bindType || p, (u = (X.get(s, "events") || Object.create(null))[e.type] && X.get(s, "handle")) && u.apply(s, t), (u = d && s[d]) && u.apply && G(s) && (e.result = u.apply(s, t), !1 === e.result && e.preventDefault());
					return e.type = p, a || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(h.pop(), t) || !G(r) || d && v(r[p]) && !y(r) && ((o = r[d]) && (r[d] = null), k.event.triggered = p, e.isPropagationStopped() && f.addEventListener(p, Lt), r[p](), e.isPropagationStopped() && f.removeEventListener(p, Lt), k.event.triggered = void 0, o && (r[d] = o)), e.result
				}
			},
			simulate: function (e, t, n) {
				var r = k.extend(new k.Event, n, {
					type: e,
					isSimulated: !0
				});
				k.event.trigger(r, null, t)
			}
		}), k.fn.extend({
			trigger: function (e, t) {
				return this.each(function () {
					k.event.trigger(e, t, this)
				})
			},
			triggerHandler: function (e, t) {
				var n = this[0];
				if (n) return k.event.trigger(e, t, n, !0)
			}
		}), _.focusin || k.each({
			focus: "focusin",
			blur: "focusout"
		}, function (e, t) {
			var n = function (e) {
				k.event.simulate(t, e.target, k.event.fix(e))
			};
			k.event.special[t] = {
				setup: function () {
					var r = this.ownerDocument || this.document || this,
						a = X.access(r, t);
					a || r.addEventListener(e, n, !0), X.access(r, t, (a || 0) + 1)
				},
				teardown: function () {
					var r = this.ownerDocument || this.document || this,
						a = X.access(r, t) - 1;
					a ? X.access(r, t, a) : (r.removeEventListener(e, n, !0), X.remove(r, t))
				}
			}
		});
		var kt = n.location,
			wt = {
				guid: Date.now()
			},
			Yt = /\?/;
		k.parseXML = function (e) {
			var t;
			if (!e || "string" != typeof e) return null;
			try {
				t = (new n.DOMParser).parseFromString(e, "text/xml")
			} catch (e) {
				t = void 0
			}
			return t && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e), t
		};
		var xt = /\[\]$/,
			Tt = /\r?\n/g,
			Dt = /^(?:submit|button|image|reset|file)$/i,
			St = /^(?:input|select|textarea|keygen)/i;

		function jt(e, t, n, r) {
			var a;
			if (Array.isArray(t)) k.each(t, function (t, a) {
				n || xt.test(e) ? r(e, a) : jt(e + "[" + ("object" == typeof a && null != a ? t : "") + "]", a, n, r)
			});
			else if (n || "object" !== L(t)) r(e, t);
			else
				for (a in t) jt(e + "[" + a + "]", t[a], n, r)
		}
		k.param = function (e, t) {
			var n, r = [],
				a = function (e, t) {
					var n = v(t) ? t() : t;
					r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
				};
			if (null == e) return "";
			if (Array.isArray(e) || e.jquery && !k.isPlainObject(e)) k.each(e, function () {
				a(this.name, this.value)
			});
			else
				for (n in e) jt(n, e[n], t, a);
			return r.join("&")
		}, k.fn.extend({
			serialize: function () {
				return k.param(this.serializeArray())
			},
			serializeArray: function () {
				return this.map(function () {
					var e = k.prop(this, "elements");
					return e ? k.makeArray(e) : this
				}).filter(function () {
					var e = this.type;
					return this.name && !k(this).is(":disabled") && St.test(this.nodeName) && !Dt.test(e) && (this.checked || !pe.test(e))
				}).map(function (e, t) {
					var n = k(this).val();
					return null == n ? null : Array.isArray(n) ? k.map(n, function (e) {
						return {
							name: t.name,
							value: e.replace(Tt, "\r\n")
						}
					}) : {
						name: t.name,
						value: n.replace(Tt, "\r\n")
					}
				}).get()
			}
		});
		var Ct = /%20/g,
			Ht = /#.*$/,
			At = /([?&])_=[^&]*/,
			Et = /^(.*?):[ \t]*([^\r\n]*)$/gm,
			Pt = /^(?:GET|HEAD)$/,
			Ot = /^\/\//,
			$t = {},
			Nt = {},
			Rt = "*/".concat("*"),
			Ft = g.createElement("a");

		function Wt(e) {
			return function (t, n) {
				"string" != typeof t && (n = t, t = "*");
				var r, a = 0,
					i = t.toLowerCase().match($) || [];
				if (v(n))
					for (; r = i[a++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
			}
		}

		function It(e, t, n, r) {
			var a = {},
				i = e === Nt;

			function s(o) {
				var l;
				return a[o] = !0, k.each(e[o] || [], function (e, o) {
					var d = o(t, n, r);
					return "string" != typeof d || i || a[d] ? i ? !(l = d) : void 0 : (t.dataTypes.unshift(d), s(d), !1)
				}), l
			}
			return s(t.dataTypes[0]) || !a["*"] && s("*")
		}

		function zt(e, t) {
			var n, r, a = k.ajaxSettings.flatOptions || {};
			for (n in t) void 0 !== t[n] && ((a[n] ? e : r || (r = {}))[n] = t[n]);
			return r && k.extend(!0, e, r), e
		}
		Ft.href = kt.href, k.extend({
			active: 0,
			lastModified: {},
			etag: {},
			ajaxSettings: {
				url: kt.href,
				type: "GET",
				isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(kt.protocol),
				global: !0,
				processData: !0,
				async: !0,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				accepts: {
					"*": Rt,
					text: "text/plain",
					html: "text/html",
					xml: "application/xml, text/xml",
					json: "application/json, text/javascript"
				},
				contents: {
					xml: /\bxml\b/,
					html: /\bhtml/,
					json: /\bjson\b/
				},
				responseFields: {
					xml: "responseXML",
					text: "responseText",
					json: "responseJSON"
				},
				converters: {
					"* text": String,
					"text html": !0,
					"text json": JSON.parse,
					"text xml": k.parseXML
				},
				flatOptions: {
					url: !0,
					context: !0
				}
			},
			ajaxSetup: function (e, t) {
				return t ? zt(zt(e, k.ajaxSettings), t) : zt(k.ajaxSettings, e)
			},
			ajaxPrefilter: Wt($t),
			ajaxTransport: Wt(Nt),
			ajax: function (e, t) {
				"object" == typeof e && (t = e, e = void 0), t = t || {};
				var r, a, i, s, o, l, d, u, c, f, m = k.ajaxSetup({}, t),
					h = m.context || m,
					p = m.context && (h.nodeType || h.jquery) ? k(h) : k.event,
					_ = k.Deferred(),
					v = k.Callbacks("once memory"),
					y = m.statusCode || {},
					M = {},
					b = {},
					L = "canceled",
					w = {
						readyState: 0,
						getResponseHeader: function (e) {
							var t;
							if (d) {
								if (!s)
									for (s = {}; t = Et.exec(i);) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
								t = s[e.toLowerCase() + " "]
							}
							return null == t ? null : t.join(", ")
						},
						getAllResponseHeaders: function () {
							return d ? i : null
						},
						setRequestHeader: function (e, t) {
							return null == d && (e = b[e.toLowerCase()] = b[e.toLowerCase()] || e, M[e] = t), this
						},
						overrideMimeType: function (e) {
							return null == d && (m.mimeType = e), this
						},
						statusCode: function (e) {
							var t;
							if (e)
								if (d) w.always(e[w.status]);
								else
									for (t in e) y[t] = [y[t], e[t]];
							return this
						},
						abort: function (e) {
							var t = e || L;
							return r && r.abort(t), Y(0, t), this
						}
					};
				if (_.promise(w), m.url = ((e || m.url || kt.href) + "").replace(Ot, kt.protocol + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = (m.dataType || "*").toLowerCase().match($) || [""], null == m.crossDomain) {
					l = g.createElement("a");
					try {
						l.href = m.url, l.href = l.href, m.crossDomain = Ft.protocol + "//" + Ft.host != l.protocol + "//" + l.host
					} catch (e) {
						m.crossDomain = !0
					}
				}
				if (m.data && m.processData && "string" != typeof m.data && (m.data = k.param(m.data, m.traditional)), It($t, m, t, w), d) return w;
				for (c in (u = k.event && m.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !Pt.test(m.type), a = m.url.replace(Ht, ""), m.hasContent ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(Ct, "+")) : (f = m.url.slice(a.length), m.data && (m.processData || "string" == typeof m.data) && (a += (Yt.test(a) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (a = a.replace(At, "$1"), f = (Yt.test(a) ? "&" : "?") + "_=" + wt.guid++ + f), m.url = a + f), m.ifModified && (k.lastModified[a] && w.setRequestHeader("If-Modified-Since", k.lastModified[a]), k.etag[a] && w.setRequestHeader("If-None-Match", k.etag[a])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && w.setRequestHeader("Content-Type", m.contentType), w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : m.accepts["*"]), m.headers) w.setRequestHeader(c, m.headers[c]);
				if (m.beforeSend && (!1 === m.beforeSend.call(h, w, m) || d)) return w.abort();
				if (L = "abort", v.add(m.complete), w.done(m.success), w.fail(m.error), r = It(Nt, m, t, w)) {
					if (w.readyState = 1, u && p.trigger("ajaxSend", [w, m]), d) return w;
					m.async && m.timeout > 0 && (o = n.setTimeout(function () {
						w.abort("timeout")
					}, m.timeout));
					try {
						d = !1, r.send(M, Y)
					} catch (e) {
						if (d) throw e;
						Y(-1, e)
					}
				} else Y(-1, "No Transport");

				function Y(e, t, s, l) {
					var c, f, g, M, b, L = t;
					d || (d = !0, o && n.clearTimeout(o), r = void 0, i = l || "", w.readyState = e > 0 ? 4 : 0, c = e >= 200 && e < 300 || 304 === e, s && (M = function (e, t, n) {
						for (var r, a, i, s, o = e.contents, l = e.dataTypes;
							"*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
						if (r)
							for (a in o)
								if (o[a] && o[a].test(r)) {
									l.unshift(a);
									break
								}
						if (l[0] in n) i = l[0];
						else {
							for (a in n) {
								if (!l[0] || e.converters[a + " " + l[0]]) {
									i = a;
									break
								}
								s || (s = a)
							}
							i = i || s
						}
						if (i) return i !== l[0] && l.unshift(i), n[i]
					}(m, w, s)), !c && k.inArray("script", m.dataTypes) > -1 && (m.converters["text script"] = function () {}), M = function (e, t, n, r) {
						var a, i, s, o, l, d = {},
							u = e.dataTypes.slice();
						if (u[1])
							for (s in e.converters) d[s.toLowerCase()] = e.converters[s];
						for (i = u.shift(); i;)
							if (e.responseFields[i] && (n[e.responseFields[i]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = i, i = u.shift())
								if ("*" === i) i = l;
								else if ("*" !== l && l !== i) {
							if (!(s = d[l + " " + i] || d["* " + i]))
								for (a in d)
									if ((o = a.split(" "))[1] === i && (s = d[l + " " + o[0]] || d["* " + o[0]])) {
										!0 === s ? s = d[a] : !0 !== d[a] && (i = o[0], u.unshift(o[1]));
										break
									}
							if (!0 !== s)
								if (s && e.throws) t = s(t);
								else try {
									t = s(t)
								} catch (e) {
									return {
										state: "parsererror",
										error: s ? e : "No conversion from " + l + " to " + i
									}
								}
						}
						return {
							state: "success",
							data: t
						}
					}(m, M, w, c), c ? (m.ifModified && ((b = w.getResponseHeader("Last-Modified")) && (k.lastModified[a] = b), (b = w.getResponseHeader("etag")) && (k.etag[a] = b)), 204 === e || "HEAD" === m.type ? L = "nocontent" : 304 === e ? L = "notmodified" : (L = M.state, f = M.data, c = !(g = M.error))) : (g = L, !e && L || (L = "error", e < 0 && (e = 0))), w.status = e, w.statusText = (t || L) + "", c ? _.resolveWith(h, [f, L, w]) : _.rejectWith(h, [w, L, g]), w.statusCode(y), y = void 0, u && p.trigger(c ? "ajaxSuccess" : "ajaxError", [w, m, c ? f : g]), v.fireWith(h, [w, L]), u && (p.trigger("ajaxComplete", [w, m]), --k.active || k.event.trigger("ajaxStop")))
				}
				return w
			},
			getJSON: function (e, t, n) {
				return k.get(e, t, n, "json")
			},
			getScript: function (e, t) {
				return k.get(e, void 0, t, "script")
			}
		}), k.each(["get", "post"], function (e, t) {
			k[t] = function (e, n, r, a) {
				return v(n) && (a = a || r, r = n, n = void 0), k.ajax(k.extend({
					url: e,
					type: t,
					dataType: a,
					data: n,
					success: r
				}, k.isPlainObject(e) && e))
			}
		}), k.ajaxPrefilter(function (e) {
			var t;
			for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
		}), k._evalUrl = function (e, t, n) {
			return k.ajax({
				url: e,
				type: "GET",
				dataType: "script",
				cache: !0,
				async: !1,
				global: !1,
				converters: {
					"text script": function () {}
				},
				dataFilter: function (e) {
					k.globalEval(e, t, n)
				}
			})
		}, k.fn.extend({
			wrapAll: function (e) {
				var t;
				return this[0] && (v(e) && (e = e.call(this[0])), t = k(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
					for (var e = this; e.firstElementChild;) e = e.firstElementChild;
					return e
				}).append(this)), this
			},
			wrapInner: function (e) {
				return v(e) ? this.each(function (t) {
					k(this).wrapInner(e.call(this, t))
				}) : this.each(function () {
					var t = k(this),
						n = t.contents();
					n.length ? n.wrapAll(e) : t.append(e)
				})
			},
			wrap: function (e) {
				var t = v(e);
				return this.each(function (n) {
					k(this).wrapAll(t ? e.call(this, n) : e)
				})
			},
			unwrap: function (e) {
				return this.parent(e).not("body").each(function () {
					k(this).replaceWith(this.childNodes)
				}), this
			}
		}), k.expr.pseudos.hidden = function (e) {
			return !k.expr.pseudos.visible(e)
		}, k.expr.pseudos.visible = function (e) {
			return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
		}, k.ajaxSettings.xhr = function () {
			try {
				return new n.XMLHttpRequest
			} catch (e) {}
		};
		var Ut = {
				0: 200,
				1223: 204
			},
			qt = k.ajaxSettings.xhr();
		_.cors = !!qt && "withCredentials" in qt, _.ajax = qt = !!qt, k.ajaxTransport(function (e) {
			var t, r;
			if (_.cors || qt && !e.crossDomain) return {
				send: function (a, i) {
					var s, o = e.xhr();
					if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
						for (s in e.xhrFields) o[s] = e.xhrFields[s];
					for (s in e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || a["X-Requested-With"] || (a["X-Requested-With"] = "XMLHttpRequest"), a) o.setRequestHeader(s, a[s]);
					t = function (e) {
						return function () {
							t && (t = r = o.onload = o.onerror = o.onabort = o.ontimeout = o.onreadystatechange = null, "abort" === e ? o.abort() : "error" === e ? "number" != typeof o.status ? i(0, "error") : i(o.status, o.statusText) : i(Ut[o.status] || o.status, o.statusText, "text" !== (o.responseType || "text") || "string" != typeof o.responseText ? {
								binary: o.response
							} : {
								text: o.responseText
							}, o.getAllResponseHeaders()))
						}
					}, o.onload = t(), r = o.onerror = o.ontimeout = t("error"), void 0 !== o.onabort ? o.onabort = r : o.onreadystatechange = function () {
						4 === o.readyState && n.setTimeout(function () {
							t && r()
						})
					}, t = t("abort");
					try {
						o.send(e.hasContent && e.data || null)
					} catch (e) {
						if (t) throw e
					}
				},
				abort: function () {
					t && t()
				}
			}
		}), k.ajaxPrefilter(function (e) {
			e.crossDomain && (e.contents.script = !1)
		}), k.ajaxSetup({
			accepts: {
				script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
			},
			contents: {
				script: /\b(?:java|ecma)script\b/
			},
			converters: {
				"text script": function (e) {
					return k.globalEval(e), e
				}
			}
		}), k.ajaxPrefilter("script", function (e) {
			void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
		}), k.ajaxTransport("script", function (e) {
			var t, n;
			if (e.crossDomain || e.scriptAttrs) return {
				send: function (r, a) {
					t = k("<script>").attr(e.scriptAttrs || {}).prop({
						charset: e.scriptCharset,
						src: e.url
					}).on("load error", n = function (e) {
						t.remove(), n = null, e && a("error" === e.type ? 404 : 200, e.type)
					}), g.head.appendChild(t[0])
				},
				abort: function () {
					n && n()
				}
			}
		});
		var Jt, Bt = [],
			Vt = /(=)\?(?=&|$)|\?\?/;
		k.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function () {
				var e = Bt.pop() || k.expando + "_" + wt.guid++;
				return this[e] = !0, e
			}
		}), k.ajaxPrefilter("json jsonp", function (e, t, r) {
			var a, i, s, o = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
			if (o || "jsonp" === e.dataTypes[0]) return a = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, o ? e[o] = e[o].replace(Vt, "$1" + a) : !1 !== e.jsonp && (e.url += (Yt.test(e.url) ? "&" : "?") + e.jsonp + "=" + a), e.converters["script json"] = function () {
				return s || k.error(a + " was not called"), s[0]
			}, e.dataTypes[0] = "json", i = n[a], n[a] = function () {
				s = arguments
			}, r.always(function () {
				void 0 === i ? k(n).removeProp(a) : n[a] = i, e[a] && (e.jsonpCallback = t.jsonpCallback, Bt.push(a)), s && v(i) && i(s[0]), s = i = void 0
			}), "script"
		}), _.createHTMLDocument = ((Jt = g.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Jt.childNodes.length), k.parseHTML = function (e, t, n) {
			return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (_.createHTMLDocument ? ((r = (t = g.implementation.createHTMLDocument("")).createElement("base")).href = g.location.href, t.head.appendChild(r)) : t = g), a = j.exec(e), i = !n && [], a ? [t.createElement(a[1])] : (a = Le([e], t, i), i && i.length && k(i).remove(), k.merge([], a.childNodes)));
			var r, a, i
		}, k.fn.load = function (e, t, n) {
			var r, a, i, s = this,
				o = e.indexOf(" ");
			return o > -1 && (r = vt(e.slice(o)), e = e.slice(0, o)), v(t) ? (n = t, t = void 0) : t && "object" == typeof t && (a = "POST"), s.length > 0 && k.ajax({
				url: e,
				type: a || "GET",
				dataType: "html",
				data: t
			}).done(function (e) {
				i = arguments, s.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e)
			}).always(n && function (e, t) {
				s.each(function () {
					n.apply(this, i || [e.responseText, t, e])
				})
			}), this
		}, k.expr.pseudos.animated = function (e) {
			return k.grep(k.timers, function (t) {
				return e === t.elem
			}).length
		}, k.offset = {
			setOffset: function (e, t, n) {
				var r, a, i, s, o, l, d = k.css(e, "position"),
					u = k(e),
					c = {};
				"static" === d && (e.style.position = "relative"), o = u.offset(), i = k.css(e, "top"), l = k.css(e, "left"), ("absolute" === d || "fixed" === d) && (i + l).indexOf("auto") > -1 ? (s = (r = u.position()).top, a = r.left) : (s = parseFloat(i) || 0, a = parseFloat(l) || 0), v(t) && (t = t.call(e, n, k.extend({}, o))), null != t.top && (c.top = t.top - o.top + s), null != t.left && (c.left = t.left - o.left + a), "using" in t ? t.using.call(e, c) : ("number" == typeof c.top && (c.top += "px"), "number" == typeof c.left && (c.left += "px"), u.css(c))
			}
		}, k.fn.extend({
			offset: function (e) {
				if (arguments.length) return void 0 === e ? this : this.each(function (t) {
					k.offset.setOffset(this, e, t)
				});
				var t, n, r = this[0];
				return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
					top: t.top + n.pageYOffset,
					left: t.left + n.pageXOffset
				}) : {
					top: 0,
					left: 0
				} : void 0
			},
			position: function () {
				if (this[0]) {
					var e, t, n, r = this[0],
						a = {
							top: 0,
							left: 0
						};
					if ("fixed" === k.css(r, "position")) t = r.getBoundingClientRect();
					else {
						for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position");) e = e.parentNode;
						e && e !== r && 1 === e.nodeType && ((a = k(e).offset()).top += k.css(e, "borderTopWidth", !0), a.left += k.css(e, "borderLeftWidth", !0))
					}
					return {
						top: t.top - a.top - k.css(r, "marginTop", !0),
						left: t.left - a.left - k.css(r, "marginLeft", !0)
					}
				}
			},
			offsetParent: function () {
				return this.map(function () {
					for (var e = this.offsetParent; e && "static" === k.css(e, "position");) e = e.offsetParent;
					return e || ie
				})
			}
		}), k.each({
			scrollLeft: "pageXOffset",
			scrollTop: "pageYOffset"
		}, function (e, t) {
			var n = "pageYOffset" === t;
			k.fn[e] = function (r) {
				return U(this, function (e, r, a) {
					var i;
					if (y(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === a) return i ? i[t] : e[r];
					i ? i.scrollTo(n ? i.pageXOffset : a, n ? a : i.pageYOffset) : e[r] = a
				}, e, r, arguments.length)
			}
		}), k.each(["top", "left"], function (e, t) {
			k.cssHooks[t] = qe(_.pixelPosition, function (e, n) {
				if (n) return n = Ue(e, t), Fe.test(n) ? k(e).position()[t] + "px" : n
			})
		}), k.each({
			Height: "height",
			Width: "width"
		}, function (e, t) {
			k.each({
				padding: "inner" + e,
				content: t,
				"": "outer" + e
			}, function (n, r) {
				k.fn[r] = function (a, i) {
					var s = arguments.length && (n || "boolean" != typeof a),
						o = n || (!0 === a || !0 === i ? "margin" : "border");
					return U(this, function (t, n, a) {
						var i;
						return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === a ? k.css(t, n, o) : k.style(t, n, a, o)
					}, t, s ? a : void 0, s)
				}
			})
		}), k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
			k.fn[t] = function (e) {
				return this.on(t, e)
			}
		}), k.fn.extend({
			bind: function (e, t, n) {
				return this.on(e, null, t, n)
			},
			unbind: function (e, t) {
				return this.off(e, null, t)
			},
			delegate: function (e, t, n, r) {
				return this.on(t, e, n, r)
			},
			undelegate: function (e, t, n) {
				return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
			},
			hover: function (e, t) {
				return this.mouseenter(e).mouseleave(t || e)
			}
		}), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
			k.fn[t] = function (e, n) {
				return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
			}
		});
		var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
		k.proxy = function (e, t) {
			var n, r, a;
			if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return r = o.call(arguments, 2), (a = function () {
				return e.apply(t || this, r.concat(o.call(arguments)))
			}).guid = e.guid = e.guid || k.guid++, a
		}, k.holdReady = function (e) {
			e ? k.readyWait++ : k.ready(!0)
		}, k.isArray = Array.isArray, k.parseJSON = JSON.parse, k.nodeName = S, k.isFunction = v, k.isWindow = y, k.camelCase = V, k.type = L, k.now = Date.now, k.isNumeric = function (e) {
			var t = k.type(e);
			return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
		}, k.trim = function (e) {
			return null == e ? "" : (e + "").replace(Gt, "")
		}, void 0 === (r = function () {
			return k
		}.apply(t, [])) || (e.exports = r);
		var Kt = n.jQuery,
			Xt = n.$;
		return k.noConflict = function (e) {
			return n.$ === k && (n.$ = Xt), e && n.jQuery === k && (n.jQuery = Kt), k
		}, void 0 === a && (n.jQuery = n.$ = k), k
	})
}, function (e, t, n) {
	"use strict";
	(function (t) {
		var r = n(2),
			a = n(155),
			i = {
				"Content-Type": "application/x-www-form-urlencoded"
			};

		function s(e, t) {
			!r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
		}
		var o, l = {
			adapter: ("undefined" != typeof XMLHttpRequest ? o = n(10) : void 0 !== t && (o = n(10)), o),
			transformRequest: [function (e, t) {
				return a(t, "Content-Type"), r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e) ? e : r.isArrayBufferView(e) ? e.buffer : r.isURLSearchParams(e) ? (s(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : r.isObject(e) ? (s(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
			}],
			transformResponse: [function (e) {
				if ("string" == typeof e) try {
					e = JSON.parse(e)
				} catch (e) {}
				return e
			}],
			timeout: 0,
			xsrfCookieName: "XSRF-TOKEN",
			xsrfHeaderName: "X-XSRF-TOKEN",
			maxContentLength: -1,
			validateStatus: function (e) {
				return e >= 200 && e < 300
			}
		};
		l.headers = {
			common: {
				Accept: "application/json, text/plain, */*"
			}
		}, r.forEach(["delete", "get", "head"], function (e) {
			l.headers[e] = {}
		}), r.forEach(["post", "put", "patch"], function (e) {
			l.headers[e] = r.merge(i)
		}), e.exports = l
	}).call(t, n(9))
}, function (e, t) {
	var n;
	n = function () {
		return this
	}();
	try {
		n = n || Function("return this")() || (0, eval)("this")
	} catch (e) {
		"object" == typeof window && (n = window)
	}
	e.exports = n
}, function (e, t, n) {
	"use strict";
	e.exports = function (e, t) {
		return function () {
			for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
			return e.apply(t, n)
		}
	}
}, function (e, t) {
	var n, r, a = e.exports = {};

	function i() {
		throw new Error("setTimeout has not been defined")
	}

	function s() {
		throw new Error("clearTimeout has not been defined")
	}

	function o(e) {
		if (n === setTimeout) return setTimeout(e, 0);
		if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
		try {
			return n(e, 0)
		} catch (t) {
			try {
				return n.call(null, e, 0)
			} catch (t) {
				return n.call(this, e, 0)
			}
		}
	}! function () {
		try {
			n = "function" == typeof setTimeout ? setTimeout : i
		} catch (e) {
			n = i
		}
		try {
			r = "function" == typeof clearTimeout ? clearTimeout : s
		} catch (e) {
			r = s
		}
	}();
	var l, d = [],
		u = !1,
		c = -1;

	function f() {
		u && l && (u = !1, l.length ? d = l.concat(d) : c = -1, d.length && m())
	}

	function m() {
		if (!u) {
			var e = o(f);
			u = !0;
			for (var t = d.length; t;) {
				for (l = d, d = []; ++c < t;) l && l[c].run();
				c = -1, t = d.length
			}
			l = null, u = !1,
				function (e) {
					if (r === clearTimeout) return clearTimeout(e);
					if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
					try {
						r(e)
					} catch (t) {
						try {
							return r.call(null, e)
						} catch (t) {
							return r.call(this, e)
						}
					}
				}(e)
		}
	}

	function h(e, t) {
		this.fun = e, this.array = t
	}

	function p() {}
	a.nextTick = function (e) {
		var t = new Array(arguments.length - 1);
		if (arguments.length > 1)
			for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
		d.push(new h(e, t)), 1 !== d.length || u || o(m)
	}, h.prototype.run = function () {
		this.fun.apply(null, this.array)
	}, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", a.versions = {}, a.on = p, a.addListener = p, a.once = p, a.off = p, a.removeListener = p, a.removeAllListeners = p, a.emit = p, a.prependListener = p, a.prependOnceListener = p, a.listeners = function (e) {
		return []
	}, a.binding = function (e) {
		throw new Error("process.binding is not supported")
	}, a.cwd = function () {
		return "/"
	}, a.chdir = function (e) {
		throw new Error("process.chdir is not supported")
	}, a.umask = function () {
		return 0
	}
}, function (e, t, n) {
	"use strict";
	var r = n(2),
		a = n(156),
		i = n(158),
		s = n(159),
		o = n(160),
		l = n(11);
	e.exports = function (e) {
		return new Promise(function (t, d) {
			var u = e.data,
				c = e.headers;
			r.isFormData(u) && delete c["Content-Type"];
			var f = new XMLHttpRequest;
			if (e.auth) {
				var m = e.auth.username || "",
					h = e.auth.password || "";
				c.Authorization = "Basic " + btoa(m + ":" + h)
			}
			if (f.open(e.method.toUpperCase(), i(e.url, e.params, e.paramsSerializer), !0), f.timeout = e.timeout, f.onreadystatechange = function () {
					if (f && 4 === f.readyState && (0 !== f.status || f.responseURL && 0 === f.responseURL.indexOf("file:"))) {
						var n = "getAllResponseHeaders" in f ? s(f.getAllResponseHeaders()) : null,
							r = {
								data: e.responseType && "text" !== e.responseType ? f.response : f.responseText,
								status: f.status,
								statusText: f.statusText,
								headers: n,
								config: e,
								request: f
							};
						a(t, d, r), f = null
					}
				}, f.onerror = function () {
					d(l("Network Error", e, null, f)), f = null
				}, f.ontimeout = function () {
					d(l("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", f)), f = null
				}, r.isStandardBrowserEnv()) {
				var p = n(161),
					_ = (e.withCredentials || o(e.url)) && e.xsrfCookieName ? p.read(e.xsrfCookieName) : void 0;
				_ && (c[e.xsrfHeaderName] = _)
			}
			if ("setRequestHeader" in f && r.forEach(c, function (e, t) {
					void 0 === u && "content-type" === t.toLowerCase() ? delete c[t] : f.setRequestHeader(t, e)
				}), e.withCredentials && (f.withCredentials = !0), e.responseType) try {
				f.responseType = e.responseType
			} catch (t) {
				if ("json" !== e.responseType) throw t
			}
			"function" == typeof e.onDownloadProgress && f.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && f.upload && f.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function (e) {
				f && (f.abort(), d(e), f = null)
			}), void 0 === u && (u = null), f.send(u)
		})
	}
}, function (e, t, n) {
	"use strict";
	var r = n(157);
	e.exports = function (e, t, n, a, i) {
		var s = new Error(e);
		return r(s, t, n, a, i)
	}
}, function (e, t, n) {
	"use strict";
	e.exports = function (e) {
		return !(!e || !e.__CANCEL__)
	}
}, function (e, t, n) {
	"use strict";

	function r(e) {
		this.message = e
	}
	r.prototype.toString = function () {
		return "Cancel" + (this.message ? ": " + this.message : "")
	}, r.prototype.__CANCEL__ = !0, e.exports = r
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("af", {
			months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
			monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
			weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
			weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
			weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
			meridiemParse: /vm|nm/i,
			isPM: function (e) {
				return /^nm$/i.test(e)
			},
			meridiem: function (e, t, n) {
				return e < 12 ? n ? "vm" : "VM" : n ? "nm" : "NM"
			},
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Vandag om] LT",
				nextDay: "[Môre om] LT",
				nextWeek: "dddd [om] LT",
				lastDay: "[Gister om] LT",
				lastWeek: "[Laas] dddd [om] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "oor %s",
				past: "%s gelede",
				s: "'n paar sekondes",
				ss: "%d sekondes",
				m: "'n minuut",
				mm: "%d minute",
				h: "'n uur",
				hh: "%d ure",
				d: "'n dag",
				dd: "%d dae",
				M: "'n maand",
				MM: "%d maande",
				y: "'n jaar",
				yy: "%d jaar"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
			ordinal: function (e) {
				return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		var t = {
				1: "١",
				2: "٢",
				3: "٣",
				4: "٤",
				5: "٥",
				6: "٦",
				7: "٧",
				8: "٨",
				9: "٩",
				0: "٠"
			},
			n = {
				"١": "1",
				"٢": "2",
				"٣": "3",
				"٤": "4",
				"٥": "5",
				"٦": "6",
				"٧": "7",
				"٨": "8",
				"٩": "9",
				"٠": "0"
			},
			r = function (e) {
				return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
			},
			a = {
				s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
				m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
				h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
				d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
				M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
				y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
			},
			i = function (e) {
				return function (t, n, i, s) {
					var o = r(t),
						l = a[e][r(t)];
					return 2 === o && (l = l[n ? 0 : 1]), l.replace(/%d/i, t)
				}
			},
			s = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
		e.defineLocale("ar", {
			months: s,
			monthsShort: s,
			weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
			weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
			weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "D/‏M/‏YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			meridiemParse: /ص|م/,
			isPM: function (e) {
				return "م" === e
			},
			meridiem: function (e, t, n) {
				return e < 12 ? "ص" : "م"
			},
			calendar: {
				sameDay: "[اليوم عند الساعة] LT",
				nextDay: "[غدًا عند الساعة] LT",
				nextWeek: "dddd [عند الساعة] LT",
				lastDay: "[أمس عند الساعة] LT",
				lastWeek: "dddd [عند الساعة] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "بعد %s",
				past: "منذ %s",
				s: i("s"),
				ss: i("s"),
				m: i("m"),
				mm: i("m"),
				h: i("h"),
				hh: i("h"),
				d: i("d"),
				dd: i("d"),
				M: i("M"),
				MM: i("M"),
				y: i("y"),
				yy: i("y")
			},
			preparse: function (e) {
				return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
					return n[e]
				}).replace(/،/g, ",")
			},
			postformat: function (e) {
				return e.replace(/\d/g, function (e) {
					return t[e]
				}).replace(/,/g, "،")
			},
			week: {
				dow: 6,
				doy: 12
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		var t = function (e) {
				return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
			},
			n = {
				s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
				m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
				h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
				d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
				M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
				y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
			},
			r = function (e) {
				return function (r, a, i, s) {
					var o = t(r),
						l = n[e][t(r)];
					return 2 === o && (l = l[a ? 0 : 1]), l.replace(/%d/i, r)
				}
			},
			a = ["جانفي", "فيفري", "مارس", "أفريل", "ماي", "جوان", "جويلية", "أوت", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
		e.defineLocale("ar-dz", {
			months: a,
			monthsShort: a,
			weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
			weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
			weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "D/‏M/‏YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			meridiemParse: /ص|م/,
			isPM: function (e) {
				return "م" === e
			},
			meridiem: function (e, t, n) {
				return e < 12 ? "ص" : "م"
			},
			calendar: {
				sameDay: "[اليوم عند الساعة] LT",
				nextDay: "[غدًا عند الساعة] LT",
				nextWeek: "dddd [عند الساعة] LT",
				lastDay: "[أمس عند الساعة] LT",
				lastWeek: "dddd [عند الساعة] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "بعد %s",
				past: "منذ %s",
				s: r("s"),
				ss: r("s"),
				m: r("m"),
				mm: r("m"),
				h: r("h"),
				hh: r("h"),
				d: r("d"),
				dd: r("d"),
				M: r("M"),
				MM: r("M"),
				y: r("y"),
				yy: r("y")
			},
			postformat: function (e) {
				return e.replace(/,/g, "،")
			},
			week: {
				dow: 0,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("ar-kw", {
			months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
			monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
			weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
			weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
			weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[اليوم على الساعة] LT",
				nextDay: "[غدا على الساعة] LT",
				nextWeek: "dddd [على الساعة] LT",
				lastDay: "[أمس على الساعة] LT",
				lastWeek: "dddd [على الساعة] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "في %s",
				past: "منذ %s",
				s: "ثوان",
				ss: "%d ثانية",
				m: "دقيقة",
				mm: "%d دقائق",
				h: "ساعة",
				hh: "%d ساعات",
				d: "يوم",
				dd: "%d أيام",
				M: "شهر",
				MM: "%d أشهر",
				y: "سنة",
				yy: "%d سنوات"
			},
			week: {
				dow: 0,
				doy: 12
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		var t = {
				1: "1",
				2: "2",
				3: "3",
				4: "4",
				5: "5",
				6: "6",
				7: "7",
				8: "8",
				9: "9",
				0: "0"
			},
			n = function (e) {
				return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
			},
			r = {
				s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
				m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
				h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
				d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
				M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
				y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
			},
			a = function (e) {
				return function (t, a, i, s) {
					var o = n(t),
						l = r[e][n(t)];
					return 2 === o && (l = l[a ? 0 : 1]), l.replace(/%d/i, t)
				}
			},
			i = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
		e.defineLocale("ar-ly", {
			months: i,
			monthsShort: i,
			weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
			weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
			weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "D/‏M/‏YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			meridiemParse: /ص|م/,
			isPM: function (e) {
				return "م" === e
			},
			meridiem: function (e, t, n) {
				return e < 12 ? "ص" : "م"
			},
			calendar: {
				sameDay: "[اليوم عند الساعة] LT",
				nextDay: "[غدًا عند الساعة] LT",
				nextWeek: "dddd [عند الساعة] LT",
				lastDay: "[أمس عند الساعة] LT",
				lastWeek: "dddd [عند الساعة] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "بعد %s",
				past: "منذ %s",
				s: a("s"),
				ss: a("s"),
				m: a("m"),
				mm: a("m"),
				h: a("h"),
				hh: a("h"),
				d: a("d"),
				dd: a("d"),
				M: a("M"),
				MM: a("M"),
				y: a("y"),
				yy: a("y")
			},
			preparse: function (e) {
				return e.replace(/،/g, ",")
			},
			postformat: function (e) {
				return e.replace(/\d/g, function (e) {
					return t[e]
				}).replace(/,/g, "،")
			},
			week: {
				dow: 6,
				doy: 12
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("ar-ma", {
			months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
			monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
			weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
			weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
			weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[اليوم على الساعة] LT",
				nextDay: "[غدا على الساعة] LT",
				nextWeek: "dddd [على الساعة] LT",
				lastDay: "[أمس على الساعة] LT",
				lastWeek: "dddd [على الساعة] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "في %s",
				past: "منذ %s",
				s: "ثوان",
				ss: "%d ثانية",
				m: "دقيقة",
				mm: "%d دقائق",
				h: "ساعة",
				hh: "%d ساعات",
				d: "يوم",
				dd: "%d أيام",
				M: "شهر",
				MM: "%d أشهر",
				y: "سنة",
				yy: "%d سنوات"
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		var t = {
				1: "١",
				2: "٢",
				3: "٣",
				4: "٤",
				5: "٥",
				6: "٦",
				7: "٧",
				8: "٨",
				9: "٩",
				0: "٠"
			},
			n = {
				"١": "1",
				"٢": "2",
				"٣": "3",
				"٤": "4",
				"٥": "5",
				"٦": "6",
				"٧": "7",
				"٨": "8",
				"٩": "9",
				"٠": "0"
			};
		e.defineLocale("ar-sa", {
			months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
			monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
			weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
			weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
			weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			meridiemParse: /ص|م/,
			isPM: function (e) {
				return "م" === e
			},
			meridiem: function (e, t, n) {
				return e < 12 ? "ص" : "م"
			},
			calendar: {
				sameDay: "[اليوم على الساعة] LT",
				nextDay: "[غدا على الساعة] LT",
				nextWeek: "dddd [على الساعة] LT",
				lastDay: "[أمس على الساعة] LT",
				lastWeek: "dddd [على الساعة] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "في %s",
				past: "منذ %s",
				s: "ثوان",
				ss: "%d ثانية",
				m: "دقيقة",
				mm: "%d دقائق",
				h: "ساعة",
				hh: "%d ساعات",
				d: "يوم",
				dd: "%d أيام",
				M: "شهر",
				MM: "%d أشهر",
				y: "سنة",
				yy: "%d سنوات"
			},
			preparse: function (e) {
				return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
					return n[e]
				}).replace(/،/g, ",")
			},
			postformat: function (e) {
				return e.replace(/\d/g, function (e) {
					return t[e]
				}).replace(/,/g, "،")
			},
			week: {
				dow: 0,
				doy: 6
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("ar-tn", {
			months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
			monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
			weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
			weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
			weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[اليوم على الساعة] LT",
				nextDay: "[غدا على الساعة] LT",
				nextWeek: "dddd [على الساعة] LT",
				lastDay: "[أمس على الساعة] LT",
				lastWeek: "dddd [على الساعة] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "في %s",
				past: "منذ %s",
				s: "ثوان",
				ss: "%d ثانية",
				m: "دقيقة",
				mm: "%d دقائق",
				h: "ساعة",
				hh: "%d ساعات",
				d: "يوم",
				dd: "%d أيام",
				M: "شهر",
				MM: "%d أشهر",
				y: "سنة",
				yy: "%d سنوات"
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		var t = {
			1: "-inci",
			5: "-inci",
			8: "-inci",
			70: "-inci",
			80: "-inci",
			2: "-nci",
			7: "-nci",
			20: "-nci",
			50: "-nci",
			3: "-üncü",
			4: "-üncü",
			100: "-üncü",
			6: "-ncı",
			9: "-uncu",
			10: "-uncu",
			30: "-uncu",
			60: "-ıncı",
			90: "-ıncı"
		};
		e.defineLocale("az", {
			months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
			monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
			weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
			weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
			weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[bugün saat] LT",
				nextDay: "[sabah saat] LT",
				nextWeek: "[gələn həftə] dddd [saat] LT",
				lastDay: "[dünən] LT",
				lastWeek: "[keçən həftə] dddd [saat] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s sonra",
				past: "%s əvvəl",
				s: "bir neçə saniyə",
				ss: "%d saniyə",
				m: "bir dəqiqə",
				mm: "%d dəqiqə",
				h: "bir saat",
				hh: "%d saat",
				d: "bir gün",
				dd: "%d gün",
				M: "bir ay",
				MM: "%d ay",
				y: "bir il",
				yy: "%d il"
			},
			meridiemParse: /gecə|səhər|gündüz|axşam/,
			isPM: function (e) {
				return /^(gündüz|axşam)$/.test(e)
			},
			meridiem: function (e, t, n) {
				return e < 4 ? "gecə" : e < 12 ? "səhər" : e < 17 ? "gündüz" : "axşam"
			},
			dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
			ordinal: function (e) {
				if (0 === e) return e + "-ıncı";
				var n = e % 10;
				return e + (t[n] || t[e % 100 - n] || t[e >= 100 ? 100 : null])
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";

		function t(e, t, n) {
			var r, a;
			return "m" === n ? t ? "хвіліна" : "хвіліну" : "h" === n ? t ? "гадзіна" : "гадзіну" : e + " " + (r = +e, a = {
				ss: t ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
				mm: t ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
				hh: t ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
				dd: "дзень_дні_дзён",
				MM: "месяц_месяцы_месяцаў",
				yy: "год_гады_гадоў"
			}[n].split("_"), r % 10 == 1 && r % 100 != 11 ? a[0] : r % 10 >= 2 && r % 10 <= 4 && (r % 100 < 10 || r % 100 >= 20) ? a[1] : a[2])
		}
		e.defineLocale("be", {
			months: {
				format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),
				standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")
			},
			monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
			weekdays: {
				format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),
				standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),
				isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/
			},
			weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
			weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY г.",
				LLL: "D MMMM YYYY г., HH:mm",
				LLLL: "dddd, D MMMM YYYY г., HH:mm"
			},
			calendar: {
				sameDay: "[Сёння ў] LT",
				nextDay: "[Заўтра ў] LT",
				lastDay: "[Учора ў] LT",
				nextWeek: function () {
					return "[У] dddd [ў] LT"
				},
				lastWeek: function () {
					switch (this.day()) {
						case 0:
						case 3:
						case 5:
						case 6:
							return "[У мінулую] dddd [ў] LT";
						case 1:
						case 2:
						case 4:
							return "[У мінулы] dddd [ў] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "праз %s",
				past: "%s таму",
				s: "некалькі секунд",
				m: t,
				mm: t,
				h: t,
				hh: t,
				d: "дзень",
				dd: t,
				M: "месяц",
				MM: t,
				y: "год",
				yy: t
			},
			meridiemParse: /ночы|раніцы|дня|вечара/,
			isPM: function (e) {
				return /^(дня|вечара)$/.test(e)
			},
			meridiem: function (e, t, n) {
				return e < 4 ? "ночы" : e < 12 ? "раніцы" : e < 17 ? "дня" : "вечара"
			},
			dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
			ordinal: function (e, t) {
				switch (t) {
					case "M":
					case "d":
					case "DDD":
					case "w":
					case "W":
						return e % 10 != 2 && e % 10 != 3 || e % 100 == 12 || e % 100 == 13 ? e + "-ы" : e + "-і";
					case "D":
						return e + "-га";
					default:
						return e
				}
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("bg", {
			months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
			monthsShort: "яну_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
			weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
			weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
			weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "D.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY H:mm",
				LLLL: "dddd, D MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[Днес в] LT",
				nextDay: "[Утре в] LT",
				nextWeek: "dddd [в] LT",
				lastDay: "[Вчера в] LT",
				lastWeek: function () {
					switch (this.day()) {
						case 0:
						case 3:
						case 6:
							return "[Миналата] dddd [в] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[Миналия] dddd [в] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "след %s",
				past: "преди %s",
				s: "няколко секунди",
				ss: "%d секунди",
				m: "минута",
				mm: "%d минути",
				h: "час",
				hh: "%d часа",
				d: "ден",
				dd: "%d дена",
				w: "седмица",
				ww: "%d седмици",
				M: "месец",
				MM: "%d месеца",
				y: "година",
				yy: "%d години"
			},
			dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
			ordinal: function (e) {
				var t = e % 10,
					n = e % 100;
				return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && n < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("bm", {
			months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split("_"),
			monthsShort: "Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split("_"),
			weekdays: "Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),
			weekdaysShort: "Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"),
			weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "MMMM [tile] D [san] YYYY",
				LLL: "MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",
				LLLL: "dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm"
			},
			calendar: {
				sameDay: "[Bi lɛrɛ] LT",
				nextDay: "[Sini lɛrɛ] LT",
				nextWeek: "dddd [don lɛrɛ] LT",
				lastDay: "[Kunu lɛrɛ] LT",
				lastWeek: "dddd [tɛmɛnen lɛrɛ] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s kɔnɔ",
				past: "a bɛ %s bɔ",
				s: "sanga dama dama",
				ss: "sekondi %d",
				m: "miniti kelen",
				mm: "miniti %d",
				h: "lɛrɛ kelen",
				hh: "lɛrɛ %d",
				d: "tile kelen",
				dd: "tile %d",
				M: "kalo kelen",
				MM: "kalo %d",
				y: "san kelen",
				yy: "san %d"
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		var t = {
				1: "১",
				2: "২",
				3: "৩",
				4: "৪",
				5: "৫",
				6: "৬",
				7: "৭",
				8: "৮",
				9: "৯",
				0: "০"
			},
			n = {
				"১": "1",
				"২": "2",
				"৩": "3",
				"৪": "4",
				"৫": "5",
				"৬": "6",
				"৭": "7",
				"৮": "8",
				"৯": "9",
				"০": "0"
			};
		e.defineLocale("bn", {
			months: "জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
			monthsShort: "জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),
			weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),
			weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
			weekdaysMin: "রবি_সোম_মঙ্গল_বুধ_বৃহ_শুক্র_শনি".split("_"),
			longDateFormat: {
				LT: "A h:mm সময়",
				LTS: "A h:mm:ss সময়",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, A h:mm সময়",
				LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
			},
			calendar: {
				sameDay: "[আজ] LT",
				nextDay: "[আগামীকাল] LT",
				nextWeek: "dddd, LT",
				lastDay: "[গতকাল] LT",
				lastWeek: "[গত] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s পরে",
				past: "%s আগে",
				s: "কয়েক সেকেন্ড",
				ss: "%d সেকেন্ড",
				m: "এক মিনিট",
				mm: "%d মিনিট",
				h: "এক ঘন্টা",
				hh: "%d ঘন্টা",
				d: "এক দিন",
				dd: "%d দিন",
				M: "এক মাস",
				MM: "%d মাস",
				y: "এক বছর",
				yy: "%d বছর"
			},
			preparse: function (e) {
				return e.replace(/[১২৩৪৫৬৭৮৯০]/g, function (e) {
					return n[e]
				})
			},
			postformat: function (e) {
				return e.replace(/\d/g, function (e) {
					return t[e]
				})
			},
			meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "রাত" === t && e >= 4 || "দুপুর" === t && e < 5 || "বিকাল" === t ? e + 12 : e
			},
			meridiem: function (e, t, n) {
				return e < 4 ? "রাত" : e < 10 ? "সকাল" : e < 17 ? "দুপুর" : e < 20 ? "বিকাল" : "রাত"
			},
			week: {
				dow: 0,
				doy: 6
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		var t = {
				1: "১",
				2: "২",
				3: "৩",
				4: "৪",
				5: "৫",
				6: "৬",
				7: "৭",
				8: "৮",
				9: "৯",
				0: "০"
			},
			n = {
				"১": "1",
				"২": "2",
				"৩": "3",
				"৪": "4",
				"৫": "5",
				"৬": "6",
				"৭": "7",
				"৮": "8",
				"৯": "9",
				"০": "0"
			};
		e.defineLocale("bn-bd", {
			months: "জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
			monthsShort: "জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),
			weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),
			weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
			weekdaysMin: "রবি_সোম_মঙ্গল_বুধ_বৃহ_শুক্র_শনি".split("_"),
			longDateFormat: {
				LT: "A h:mm সময়",
				LTS: "A h:mm:ss সময়",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, A h:mm সময়",
				LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
			},
			calendar: {
				sameDay: "[আজ] LT",
				nextDay: "[আগামীকাল] LT",
				nextWeek: "dddd, LT",
				lastDay: "[গতকাল] LT",
				lastWeek: "[গত] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s পরে",
				past: "%s আগে",
				s: "কয়েক সেকেন্ড",
				ss: "%d সেকেন্ড",
				m: "এক মিনিট",
				mm: "%d মিনিট",
				h: "এক ঘন্টা",
				hh: "%d ঘন্টা",
				d: "এক দিন",
				dd: "%d দিন",
				M: "এক মাস",
				MM: "%d মাস",
				y: "এক বছর",
				yy: "%d বছর"
			},
			preparse: function (e) {
				return e.replace(/[১২৩৪৫৬৭৮৯০]/g, function (e) {
					return n[e]
				})
			},
			postformat: function (e) {
				return e.replace(/\d/g, function (e) {
					return t[e]
				})
			},
			meridiemParse: /রাত|ভোর|সকাল|দুপুর|বিকাল|সন্ধ্যা|রাত/,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "রাত" === t ? e < 4 ? e : e + 12 : "ভোর" === t ? e : "সকাল" === t ? e : "দুপুর" === t ? e >= 3 ? e : e + 12 : "বিকাল" === t ? e + 12 : "সন্ধ্যা" === t ? e + 12 : void 0
			},
			meridiem: function (e, t, n) {
				return e < 4 ? "রাত" : e < 6 ? "ভোর" : e < 12 ? "সকাল" : e < 15 ? "দুপুর" : e < 18 ? "বিকাল" : e < 20 ? "সন্ধ্যা" : "রাত"
			},
			week: {
				dow: 0,
				doy: 6
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		var t = {
				1: "༡",
				2: "༢",
				3: "༣",
				4: "༤",
				5: "༥",
				6: "༦",
				7: "༧",
				8: "༨",
				9: "༩",
				0: "༠"
			},
			n = {
				"༡": "1",
				"༢": "2",
				"༣": "3",
				"༤": "4",
				"༥": "5",
				"༦": "6",
				"༧": "7",
				"༨": "8",
				"༩": "9",
				"༠": "0"
			};
		e.defineLocale("bo", {
			months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
			monthsShort: "ཟླ་1_ཟླ་2_ཟླ་3_ཟླ་4_ཟླ་5_ཟླ་6_ཟླ་7_ཟླ་8_ཟླ་9_ཟླ་10_ཟླ་11_ཟླ་12".split("_"),
			monthsShortRegex: /^(ཟླ་\d{1,2})/,
			monthsParseExact: !0,
			weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),
			weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
			weekdaysMin: "ཉི_ཟླ_མིག_ལྷག_ཕུར_སངས_སྤེན".split("_"),
			longDateFormat: {
				LT: "A h:mm",
				LTS: "A h:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, A h:mm",
				LLLL: "dddd, D MMMM YYYY, A h:mm"
			},
			calendar: {
				sameDay: "[དི་རིང] LT",
				nextDay: "[སང་ཉིན] LT",
				nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
				lastDay: "[ཁ་སང] LT",
				lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s ལ་",
				past: "%s སྔན་ལ",
				s: "ལམ་སང",
				ss: "%d སྐར་ཆ།",
				m: "སྐར་མ་གཅིག",
				mm: "%d སྐར་མ",
				h: "ཆུ་ཚོད་གཅིག",
				hh: "%d ཆུ་ཚོད",
				d: "ཉིན་གཅིག",
				dd: "%d ཉིན་",
				M: "ཟླ་བ་གཅིག",
				MM: "%d ཟླ་བ",
				y: "ལོ་གཅིག",
				yy: "%d ལོ"
			},
			preparse: function (e) {
				return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (e) {
					return n[e]
				})
			},
			postformat: function (e) {
				return e.replace(/\d/g, function (e) {
					return t[e]
				})
			},
			meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "མཚན་མོ" === t && e >= 4 || "ཉིན་གུང" === t && e < 5 || "དགོང་དག" === t ? e + 12 : e
			},
			meridiem: function (e, t, n) {
				return e < 4 ? "མཚན་མོ" : e < 10 ? "ཞོགས་ཀས" : e < 17 ? "ཉིན་གུང" : e < 20 ? "དགོང་དག" : "མཚན་མོ"
			},
			week: {
				dow: 0,
				doy: 6
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";

		function t(e, t, n) {
			return e + " " + function (e, t) {
				if (2 === t) return function (e) {
					var t = {
						m: "v",
						b: "v",
						d: "z"
					};
					if (void 0 === t[e.charAt(0)]) return e;
					return t[e.charAt(0)] + e.substring(1)
				}(e);
				return e
			}({
				mm: "munutenn",
				MM: "miz",
				dd: "devezh"
			}[n], e)
		}
		var n = [/^gen/i, /^c[ʼ\']hwe/i, /^meu/i, /^ebr/i, /^mae/i, /^(mez|eve)/i, /^gou/i, /^eos/i, /^gwe/i, /^her/i, /^du/i, /^ker/i],
			r = /^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu|gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
			a = [/^Su/i, /^Lu/i, /^Me([^r]|$)/i, /^Mer/i, /^Ya/i, /^Gw/i, /^Sa/i];
		e.defineLocale("br", {
			months: "Genver_Cʼhwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
			monthsShort: "Gen_Cʼhwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
			weekdays: "Sul_Lun_Meurzh_Mercʼher_Yaou_Gwener_Sadorn".split("_"),
			weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
			weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
			weekdaysParse: a,
			fullWeekdaysParse: [/^sul/i, /^lun/i, /^meurzh/i, /^merc[ʼ\']her/i, /^yaou/i, /^gwener/i, /^sadorn/i],
			shortWeekdaysParse: [/^Sul/i, /^Lun/i, /^Meu/i, /^Mer/i, /^Yao/i, /^Gwe/i, /^Sad/i],
			minWeekdaysParse: a,
			monthsRegex: r,
			monthsShortRegex: r,
			monthsStrictRegex: /^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu)/i,
			monthsShortStrictRegex: /^(gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
			monthsParse: n,
			longMonthsParse: n,
			shortMonthsParse: n,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D [a viz] MMMM YYYY",
				LLL: "D [a viz] MMMM YYYY HH:mm",
				LLLL: "dddd, D [a viz] MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Hiziv da] LT",
				nextDay: "[Warcʼhoazh da] LT",
				nextWeek: "dddd [da] LT",
				lastDay: "[Decʼh da] LT",
				lastWeek: "dddd [paset da] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "a-benn %s",
				past: "%s ʼzo",
				s: "un nebeud segondennoù",
				ss: "%d eilenn",
				m: "ur vunutenn",
				mm: t,
				h: "un eur",
				hh: "%d eur",
				d: "un devezh",
				dd: t,
				M: "ur miz",
				MM: t,
				y: "ur bloaz",
				yy: function (e) {
					switch (function e(t) {
						return t > 9 ? e(t % 10) : t
					}(e)) {
						case 1:
						case 3:
						case 4:
						case 5:
						case 9:
							return e + " bloaz";
						default:
							return e + " vloaz"
					}
				}
			},
			dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
			ordinal: function (e) {
				return e + (1 === e ? "añ" : "vet")
			},
			week: {
				dow: 1,
				doy: 4
			},
			meridiemParse: /a.m.|g.m./,
			isPM: function (e) {
				return "g.m." === e
			},
			meridiem: function (e, t, n) {
				return e < 12 ? "a.m." : "g.m."
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";

		function t(e, t, n) {
			var r = e + " ";
			switch (n) {
				case "ss":
					return r += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
				case "m":
					return t ? "jedna minuta" : "jedne minute";
				case "mm":
					return r += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
				case "h":
					return t ? "jedan sat" : "jednog sata";
				case "hh":
					return r += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
				case "dd":
					return r += 1 === e ? "dan" : "dana";
				case "MM":
					return r += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
				case "yy":
					return r += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
			}
		}
		e.defineLocale("bs", {
			months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
			monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
			monthsParseExact: !0,
			weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
			weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
			weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm",
				LLLL: "dddd, D. MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[danas u] LT",
				nextDay: "[sutra u] LT",
				nextWeek: function () {
					switch (this.day()) {
						case 0:
							return "[u] [nedjelju] [u] LT";
						case 3:
							return "[u] [srijedu] [u] LT";
						case 6:
							return "[u] [subotu] [u] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[u] dddd [u] LT"
					}
				},
				lastDay: "[jučer u] LT",
				lastWeek: function () {
					switch (this.day()) {
						case 0:
						case 3:
							return "[prošlu] dddd [u] LT";
						case 6:
							return "[prošle] [subote] [u] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[prošli] dddd [u] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "za %s",
				past: "prije %s",
				s: "par sekundi",
				ss: t,
				m: t,
				mm: t,
				h: t,
				hh: t,
				d: "dan",
				dd: t,
				M: "mjesec",
				MM: t,
				y: "godinu",
				yy: t
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("ca", {
			months: {
				standalone: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
				format: "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),
				isFormat: /D[oD]?(\s)+MMMM/
			},
			monthsShort: "gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),
			monthsParseExact: !0,
			weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
			weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
			weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM [de] YYYY",
				ll: "D MMM YYYY",
				LLL: "D MMMM [de] YYYY [a les] H:mm",
				lll: "D MMM YYYY, H:mm",
				LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
				llll: "ddd D MMM YYYY, H:mm"
			},
			calendar: {
				sameDay: function () {
					return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
				},
				nextDay: function () {
					return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT"
				},
				nextWeek: function () {
					return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
				},
				lastDay: function () {
					return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
				},
				lastWeek: function () {
					return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "d'aquí %s",
				past: "fa %s",
				s: "uns segons",
				ss: "%d segons",
				m: "un minut",
				mm: "%d minuts",
				h: "una hora",
				hh: "%d hores",
				d: "un dia",
				dd: "%d dies",
				M: "un mes",
				MM: "%d mesos",
				y: "un any",
				yy: "%d anys"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
			ordinal: function (e, t) {
				var n = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
				return "w" !== t && "W" !== t || (n = "a"), e + n
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		var t = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
			n = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),
			r = [/^led/i, /^úno/i, /^bře/i, /^dub/i, /^kvě/i, /^(čvn|červen$|června)/i, /^(čvc|červenec|července)/i, /^srp/i, /^zář/i, /^říj/i, /^lis/i, /^pro/i],
			a = /^(leden|únor|březen|duben|květen|červenec|července|červen|června|srpen|září|říjen|listopad|prosinec|led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i;

		function i(e) {
			return e > 1 && e < 5 && 1 != ~~(e / 10)
		}

		function s(e, t, n, r) {
			var a = e + " ";
			switch (n) {
				case "s":
					return t || r ? "pár sekund" : "pár sekundami";
				case "ss":
					return t || r ? a + (i(e) ? "sekundy" : "sekund") : a + "sekundami";
				case "m":
					return t ? "minuta" : r ? "minutu" : "minutou";
				case "mm":
					return t || r ? a + (i(e) ? "minuty" : "minut") : a + "minutami";
				case "h":
					return t ? "hodina" : r ? "hodinu" : "hodinou";
				case "hh":
					return t || r ? a + (i(e) ? "hodiny" : "hodin") : a + "hodinami";
				case "d":
					return t || r ? "den" : "dnem";
				case "dd":
					return t || r ? a + (i(e) ? "dny" : "dní") : a + "dny";
				case "M":
					return t || r ? "měsíc" : "měsícem";
				case "MM":
					return t || r ? a + (i(e) ? "měsíce" : "měsíců") : a + "měsíci";
				case "y":
					return t || r ? "rok" : "rokem";
				case "yy":
					return t || r ? a + (i(e) ? "roky" : "let") : a + "lety"
			}
		}
		e.defineLocale("cs", {
			months: t,
			monthsShort: n,
			monthsRegex: a,
			monthsShortRegex: a,
			monthsStrictRegex: /^(leden|ledna|února|únor|březen|března|duben|dubna|květen|května|červenec|července|červen|června|srpen|srpna|září|říjen|října|listopadu|listopad|prosinec|prosince)/i,
			monthsShortStrictRegex: /^(led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,
			monthsParse: r,
			longMonthsParse: r,
			shortMonthsParse: r,
			weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
			weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
			weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm",
				LLLL: "dddd D. MMMM YYYY H:mm",
				l: "D. M. YYYY"
			},
			calendar: {
				sameDay: "[dnes v] LT",
				nextDay: "[zítra v] LT",
				nextWeek: function () {
					switch (this.day()) {
						case 0:
							return "[v neděli v] LT";
						case 1:
						case 2:
							return "[v] dddd [v] LT";
						case 3:
							return "[ve středu v] LT";
						case 4:
							return "[ve čtvrtek v] LT";
						case 5:
							return "[v pátek v] LT";
						case 6:
							return "[v sobotu v] LT"
					}
				},
				lastDay: "[včera v] LT",
				lastWeek: function () {
					switch (this.day()) {
						case 0:
							return "[minulou neděli v] LT";
						case 1:
						case 2:
							return "[minulé] dddd [v] LT";
						case 3:
							return "[minulou středu v] LT";
						case 4:
						case 5:
							return "[minulý] dddd [v] LT";
						case 6:
							return "[minulou sobotu v] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "za %s",
				past: "před %s",
				s: s,
				ss: s,
				m: s,
				mm: s,
				h: s,
				hh: s,
				d: s,
				dd: s,
				M: s,
				MM: s,
				y: s,
				yy: s
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("cv", {
			months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),
			monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),
			weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),
			weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
			weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD-MM-YYYY",
				LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
				LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
				LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"
			},
			calendar: {
				sameDay: "[Паян] LT [сехетре]",
				nextDay: "[Ыран] LT [сехетре]",
				lastDay: "[Ӗнер] LT [сехетре]",
				nextWeek: "[Ҫитес] dddd LT [сехетре]",
				lastWeek: "[Иртнӗ] dddd LT [сехетре]",
				sameElse: "L"
			},
			relativeTime: {
				future: function (e) {
					return e + (/сехет$/i.exec(e) ? "рен" : /ҫул$/i.exec(e) ? "тан" : "ран")
				},
				past: "%s каялла",
				s: "пӗр-ик ҫеккунт",
				ss: "%d ҫеккунт",
				m: "пӗр минут",
				mm: "%d минут",
				h: "пӗр сехет",
				hh: "%d сехет",
				d: "пӗр кун",
				dd: "%d кун",
				M: "пӗр уйӑх",
				MM: "%d уйӑх",
				y: "пӗр ҫул",
				yy: "%d ҫул"
			},
			dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
			ordinal: "%d-мӗш",
			week: {
				dow: 1,
				doy: 7
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("cy", {
			months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
			monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
			weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
			weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
			weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Heddiw am] LT",
				nextDay: "[Yfory am] LT",
				nextWeek: "dddd [am] LT",
				lastDay: "[Ddoe am] LT",
				lastWeek: "dddd [diwethaf am] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "mewn %s",
				past: "%s yn ôl",
				s: "ychydig eiliadau",
				ss: "%d eiliad",
				m: "munud",
				mm: "%d munud",
				h: "awr",
				hh: "%d awr",
				d: "diwrnod",
				dd: "%d diwrnod",
				M: "mis",
				MM: "%d mis",
				y: "blwyddyn",
				yy: "%d flynedd"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
			ordinal: function (e) {
				var t = "";
				return e > 20 ? t = 40 === e || 50 === e || 60 === e || 80 === e || 100 === e ? "fed" : "ain" : e > 0 && (t = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"][e]), e + t
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("da", {
			months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
			monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
			weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
			weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
			weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY HH:mm",
				LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
			},
			calendar: {
				sameDay: "[i dag kl.] LT",
				nextDay: "[i morgen kl.] LT",
				nextWeek: "på dddd [kl.] LT",
				lastDay: "[i går kl.] LT",
				lastWeek: "[i] dddd[s kl.] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "om %s",
				past: "%s siden",
				s: "få sekunder",
				ss: "%d sekunder",
				m: "et minut",
				mm: "%d minutter",
				h: "en time",
				hh: "%d timer",
				d: "en dag",
				dd: "%d dage",
				M: "en måned",
				MM: "%d måneder",
				y: "et år",
				yy: "%d år"
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";

		function t(e, t, n, r) {
			var a = {
				m: ["eine Minute", "einer Minute"],
				h: ["eine Stunde", "einer Stunde"],
				d: ["ein Tag", "einem Tag"],
				dd: [e + " Tage", e + " Tagen"],
				w: ["eine Woche", "einer Woche"],
				M: ["ein Monat", "einem Monat"],
				MM: [e + " Monate", e + " Monaten"],
				y: ["ein Jahr", "einem Jahr"],
				yy: [e + " Jahre", e + " Jahren"]
			};
			return t ? a[n][0] : a[n][1]
		}
		e.defineLocale("de", {
			months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
			monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
			monthsParseExact: !0,
			weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
			weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
			weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY HH:mm",
				LLLL: "dddd, D. MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[heute um] LT [Uhr]",
				sameElse: "L",
				nextDay: "[morgen um] LT [Uhr]",
				nextWeek: "dddd [um] LT [Uhr]",
				lastDay: "[gestern um] LT [Uhr]",
				lastWeek: "[letzten] dddd [um] LT [Uhr]"
			},
			relativeTime: {
				future: "in %s",
				past: "vor %s",
				s: "ein paar Sekunden",
				ss: "%d Sekunden",
				m: t,
				mm: "%d Minuten",
				h: t,
				hh: "%d Stunden",
				d: t,
				dd: t,
				w: t,
				ww: "%d Wochen",
				M: t,
				MM: t,
				y: t,
				yy: t
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";

		function t(e, t, n, r) {
			var a = {
				m: ["eine Minute", "einer Minute"],
				h: ["eine Stunde", "einer Stunde"],
				d: ["ein Tag", "einem Tag"],
				dd: [e + " Tage", e + " Tagen"],
				w: ["eine Woche", "einer Woche"],
				M: ["ein Monat", "einem Monat"],
				MM: [e + " Monate", e + " Monaten"],
				y: ["ein Jahr", "einem Jahr"],
				yy: [e + " Jahre", e + " Jahren"]
			};
			return t ? a[n][0] : a[n][1]
		}
		e.defineLocale("de-at", {
			months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
			monthsShort: "Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
			monthsParseExact: !0,
			weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
			weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
			weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY HH:mm",
				LLLL: "dddd, D. MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[heute um] LT [Uhr]",
				sameElse: "L",
				nextDay: "[morgen um] LT [Uhr]",
				nextWeek: "dddd [um] LT [Uhr]",
				lastDay: "[gestern um] LT [Uhr]",
				lastWeek: "[letzten] dddd [um] LT [Uhr]"
			},
			relativeTime: {
				future: "in %s",
				past: "vor %s",
				s: "ein paar Sekunden",
				ss: "%d Sekunden",
				m: t,
				mm: "%d Minuten",
				h: t,
				hh: "%d Stunden",
				d: t,
				dd: t,
				w: t,
				ww: "%d Wochen",
				M: t,
				MM: t,
				y: t,
				yy: t
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";

		function t(e, t, n, r) {
			var a = {
				m: ["eine Minute", "einer Minute"],
				h: ["eine Stunde", "einer Stunde"],
				d: ["ein Tag", "einem Tag"],
				dd: [e + " Tage", e + " Tagen"],
				w: ["eine Woche", "einer Woche"],
				M: ["ein Monat", "einem Monat"],
				MM: [e + " Monate", e + " Monaten"],
				y: ["ein Jahr", "einem Jahr"],
				yy: [e + " Jahre", e + " Jahren"]
			};
			return t ? a[n][0] : a[n][1]
		}
		e.defineLocale("de-ch", {
			months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
			monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
			monthsParseExact: !0,
			weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
			weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
			weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY HH:mm",
				LLLL: "dddd, D. MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[heute um] LT [Uhr]",
				sameElse: "L",
				nextDay: "[morgen um] LT [Uhr]",
				nextWeek: "dddd [um] LT [Uhr]",
				lastDay: "[gestern um] LT [Uhr]",
				lastWeek: "[letzten] dddd [um] LT [Uhr]"
			},
			relativeTime: {
				future: "in %s",
				past: "vor %s",
				s: "ein paar Sekunden",
				ss: "%d Sekunden",
				m: t,
				mm: "%d Minuten",
				h: t,
				hh: "%d Stunden",
				d: t,
				dd: t,
				w: t,
				ww: "%d Wochen",
				M: t,
				MM: t,
				y: t,
				yy: t
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		var t = ["ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު"],
			n = ["އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު"];
		e.defineLocale("dv", {
			months: t,
			monthsShort: t,
			weekdays: n,
			weekdaysShort: n,
			weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "D/M/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			meridiemParse: /މކ|މފ/,
			isPM: function (e) {
				return "މފ" === e
			},
			meridiem: function (e, t, n) {
				return e < 12 ? "މކ" : "މފ"
			},
			calendar: {
				sameDay: "[މިއަދު] LT",
				nextDay: "[މާދަމާ] LT",
				nextWeek: "dddd LT",
				lastDay: "[އިއްޔެ] LT",
				lastWeek: "[ފާއިތުވި] dddd LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "ތެރޭގައި %s",
				past: "ކުރިން %s",
				s: "ސިކުންތުކޮޅެއް",
				ss: "d% ސިކުންތު",
				m: "މިނިޓެއް",
				mm: "މިނިޓު %d",
				h: "ގަޑިއިރެއް",
				hh: "ގަޑިއިރު %d",
				d: "ދުވަހެއް",
				dd: "ދުވަސް %d",
				M: "މަހެއް",
				MM: "މަސް %d",
				y: "އަހަރެއް",
				yy: "އަހަރު %d"
			},
			preparse: function (e) {
				return e.replace(/،/g, ",")
			},
			postformat: function (e) {
				return e.replace(/,/g, "،")
			},
			week: {
				dow: 7,
				doy: 12
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("el", {
			monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
			monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
			months: function (e, t) {
				return e ? "string" == typeof t && /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl
			},
			monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
			weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
			weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
			weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
			meridiem: function (e, t, n) {
				return e > 11 ? n ? "μμ" : "ΜΜ" : n ? "πμ" : "ΠΜ"
			},
			isPM: function (e) {
				return "μ" === (e + "").toLowerCase()[0]
			},
			meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY h:mm A",
				LLLL: "dddd, D MMMM YYYY h:mm A"
			},
			calendarEl: {
				sameDay: "[Σήμερα {}] LT",
				nextDay: "[Αύριο {}] LT",
				nextWeek: "dddd [{}] LT",
				lastDay: "[Χθες {}] LT",
				lastWeek: function () {
					switch (this.day()) {
						case 6:
							return "[το προηγούμενο] dddd [{}] LT";
						default:
							return "[την προηγούμενη] dddd [{}] LT"
					}
				},
				sameElse: "L"
			},
			calendar: function (e, t) {
				var n, r = this._calendarEl[e],
					a = t && t.hours();
				return n = r, ("undefined" != typeof Function && n instanceof Function || "[object Function]" === Object.prototype.toString.call(n)) && (r = r.apply(t)), r.replace("{}", a % 12 == 1 ? "στη" : "στις")
			},
			relativeTime: {
				future: "σε %s",
				past: "%s πριν",
				s: "λίγα δευτερόλεπτα",
				ss: "%d δευτερόλεπτα",
				m: "ένα λεπτό",
				mm: "%d λεπτά",
				h: "μία ώρα",
				hh: "%d ώρες",
				d: "μία μέρα",
				dd: "%d μέρες",
				M: "ένας μήνας",
				MM: "%d μήνες",
				y: "ένας χρόνος",
				yy: "%d χρόνια"
			},
			dayOfMonthOrdinalParse: /\d{1,2}η/,
			ordinal: "%dη",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("en-au", {
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
			weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY h:mm A",
				LLLL: "dddd, D MMMM YYYY h:mm A"
			},
			calendar: {
				sameDay: "[Today at] LT",
				nextDay: "[Tomorrow at] LT",
				nextWeek: "dddd [at] LT",
				lastDay: "[Yesterday at] LT",
				lastWeek: "[Last] dddd [at] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "in %s",
				past: "%s ago",
				s: "a few seconds",
				ss: "%d seconds",
				m: "a minute",
				mm: "%d minutes",
				h: "an hour",
				hh: "%d hours",
				d: "a day",
				dd: "%d days",
				M: "a month",
				MM: "%d months",
				y: "a year",
				yy: "%d years"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function (e) {
				var t = e % 10;
				return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
			},
			week: {
				dow: 0,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("en-ca", {
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
			weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "YYYY-MM-DD",
				LL: "MMMM D, YYYY",
				LLL: "MMMM D, YYYY h:mm A",
				LLLL: "dddd, MMMM D, YYYY h:mm A"
			},
			calendar: {
				sameDay: "[Today at] LT",
				nextDay: "[Tomorrow at] LT",
				nextWeek: "dddd [at] LT",
				lastDay: "[Yesterday at] LT",
				lastWeek: "[Last] dddd [at] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "in %s",
				past: "%s ago",
				s: "a few seconds",
				ss: "%d seconds",
				m: "a minute",
				mm: "%d minutes",
				h: "an hour",
				hh: "%d hours",
				d: "a day",
				dd: "%d days",
				M: "a month",
				MM: "%d months",
				y: "a year",
				yy: "%d years"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function (e) {
				var t = e % 10;
				return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("en-gb", {
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
			weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Today at] LT",
				nextDay: "[Tomorrow at] LT",
				nextWeek: "dddd [at] LT",
				lastDay: "[Yesterday at] LT",
				lastWeek: "[Last] dddd [at] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "in %s",
				past: "%s ago",
				s: "a few seconds",
				ss: "%d seconds",
				m: "a minute",
				mm: "%d minutes",
				h: "an hour",
				hh: "%d hours",
				d: "a day",
				dd: "%d days",
				M: "a month",
				MM: "%d months",
				y: "a year",
				yy: "%d years"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function (e) {
				var t = e % 10;
				return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("en-ie", {
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
			weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Today at] LT",
				nextDay: "[Tomorrow at] LT",
				nextWeek: "dddd [at] LT",
				lastDay: "[Yesterday at] LT",
				lastWeek: "[Last] dddd [at] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "in %s",
				past: "%s ago",
				s: "a few seconds",
				ss: "%d seconds",
				m: "a minute",
				mm: "%d minutes",
				h: "an hour",
				hh: "%d hours",
				d: "a day",
				dd: "%d days",
				M: "a month",
				MM: "%d months",
				y: "a year",
				yy: "%d years"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function (e) {
				var t = e % 10;
				return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("en-il", {
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
			weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Today at] LT",
				nextDay: "[Tomorrow at] LT",
				nextWeek: "dddd [at] LT",
				lastDay: "[Yesterday at] LT",
				lastWeek: "[Last] dddd [at] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "in %s",
				past: "%s ago",
				s: "a few seconds",
				ss: "%d seconds",
				m: "a minute",
				mm: "%d minutes",
				h: "an hour",
				hh: "%d hours",
				d: "a day",
				dd: "%d days",
				M: "a month",
				MM: "%d months",
				y: "a year",
				yy: "%d years"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function (e) {
				var t = e % 10;
				return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("en-in", {
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
			weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY h:mm A",
				LLLL: "dddd, D MMMM YYYY h:mm A"
			},
			calendar: {
				sameDay: "[Today at] LT",
				nextDay: "[Tomorrow at] LT",
				nextWeek: "dddd [at] LT",
				lastDay: "[Yesterday at] LT",
				lastWeek: "[Last] dddd [at] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "in %s",
				past: "%s ago",
				s: "a few seconds",
				ss: "%d seconds",
				m: "a minute",
				mm: "%d minutes",
				h: "an hour",
				hh: "%d hours",
				d: "a day",
				dd: "%d days",
				M: "a month",
				MM: "%d months",
				y: "a year",
				yy: "%d years"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function (e) {
				var t = e % 10;
				return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
			},
			week: {
				dow: 0,
				doy: 6
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("en-nz", {
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
			weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY h:mm A",
				LLLL: "dddd, D MMMM YYYY h:mm A"
			},
			calendar: {
				sameDay: "[Today at] LT",
				nextDay: "[Tomorrow at] LT",
				nextWeek: "dddd [at] LT",
				lastDay: "[Yesterday at] LT",
				lastWeek: "[Last] dddd [at] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "in %s",
				past: "%s ago",
				s: "a few seconds",
				ss: "%d seconds",
				m: "a minute",
				mm: "%d minutes",
				h: "an hour",
				hh: "%d hours",
				d: "a day",
				dd: "%d days",
				M: "a month",
				MM: "%d months",
				y: "a year",
				yy: "%d years"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function (e) {
				var t = e % 10;
				return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("en-sg", {
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
			weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Today at] LT",
				nextDay: "[Tomorrow at] LT",
				nextWeek: "dddd [at] LT",
				lastDay: "[Yesterday at] LT",
				lastWeek: "[Last] dddd [at] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "in %s",
				past: "%s ago",
				s: "a few seconds",
				ss: "%d seconds",
				m: "a minute",
				mm: "%d minutes",
				h: "an hour",
				hh: "%d hours",
				d: "a day",
				dd: "%d days",
				M: "a month",
				MM: "%d months",
				y: "a year",
				yy: "%d years"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function (e) {
				var t = e % 10;
				return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("eo", {
			months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
			monthsShort: "jan_feb_mart_apr_maj_jun_jul_aŭg_sept_okt_nov_dec".split("_"),
			weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"),
			weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"),
			weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY-MM-DD",
				LL: "[la] D[-an de] MMMM, YYYY",
				LLL: "[la] D[-an de] MMMM, YYYY HH:mm",
				LLLL: "dddd[n], [la] D[-an de] MMMM, YYYY HH:mm",
				llll: "ddd, [la] D[-an de] MMM, YYYY HH:mm"
			},
			meridiemParse: /[ap]\.t\.m/i,
			isPM: function (e) {
				return "p" === e.charAt(0).toLowerCase()
			},
			meridiem: function (e, t, n) {
				return e > 11 ? n ? "p.t.m." : "P.T.M." : n ? "a.t.m." : "A.T.M."
			},
			calendar: {
				sameDay: "[Hodiaŭ je] LT",
				nextDay: "[Morgaŭ je] LT",
				nextWeek: "dddd[n je] LT",
				lastDay: "[Hieraŭ je] LT",
				lastWeek: "[pasintan] dddd[n je] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "post %s",
				past: "antaŭ %s",
				s: "kelkaj sekundoj",
				ss: "%d sekundoj",
				m: "unu minuto",
				mm: "%d minutoj",
				h: "unu horo",
				hh: "%d horoj",
				d: "unu tago",
				dd: "%d tagoj",
				M: "unu monato",
				MM: "%d monatoj",
				y: "unu jaro",
				yy: "%d jaroj"
			},
			dayOfMonthOrdinalParse: /\d{1,2}a/,
			ordinal: "%da",
			week: {
				dow: 1,
				doy: 7
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
			n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
			r = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
			a = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
		e.defineLocale("es", {
			months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
			monthsShort: function (e, r) {
				return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
			},
			monthsRegex: a,
			monthsShortRegex: a,
			monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
			monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
			monthsParse: r,
			longMonthsParse: r,
			shortMonthsParse: r,
			weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
			weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
			weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D [de] MMMM [de] YYYY",
				LLL: "D [de] MMMM [de] YYYY H:mm",
				LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
			},
			calendar: {
				sameDay: function () {
					return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				nextDay: function () {
					return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				nextWeek: function () {
					return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				lastDay: function () {
					return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				lastWeek: function () {
					return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "en %s",
				past: "hace %s",
				s: "unos segundos",
				ss: "%d segundos",
				m: "un minuto",
				mm: "%d minutos",
				h: "una hora",
				hh: "%d horas",
				d: "un día",
				dd: "%d días",
				w: "una semana",
				ww: "%d semanas",
				M: "un mes",
				MM: "%d meses",
				y: "un año",
				yy: "%d años"
			},
			dayOfMonthOrdinalParse: /\d{1,2}º/,
			ordinal: "%dº",
			week: {
				dow: 1,
				doy: 4
			},
			invalidDate: "Fecha inválida"
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
			n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
			r = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
			a = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
		e.defineLocale("es-do", {
			months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
			monthsShort: function (e, r) {
				return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
			},
			monthsRegex: a,
			monthsShortRegex: a,
			monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
			monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
			monthsParse: r,
			longMonthsParse: r,
			shortMonthsParse: r,
			weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
			weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
			weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D [de] MMMM [de] YYYY",
				LLL: "D [de] MMMM [de] YYYY h:mm A",
				LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
			},
			calendar: {
				sameDay: function () {
					return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				nextDay: function () {
					return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				nextWeek: function () {
					return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				lastDay: function () {
					return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				lastWeek: function () {
					return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "en %s",
				past: "hace %s",
				s: "unos segundos",
				ss: "%d segundos",
				m: "un minuto",
				mm: "%d minutos",
				h: "una hora",
				hh: "%d horas",
				d: "un día",
				dd: "%d días",
				w: "una semana",
				ww: "%d semanas",
				M: "un mes",
				MM: "%d meses",
				y: "un año",
				yy: "%d años"
			},
			dayOfMonthOrdinalParse: /\d{1,2}º/,
			ordinal: "%dº",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
			n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
			r = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
			a = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
		e.defineLocale("es-mx", {
			months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
			monthsShort: function (e, r) {
				return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
			},
			monthsRegex: a,
			monthsShortRegex: a,
			monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
			monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
			monthsParse: r,
			longMonthsParse: r,
			shortMonthsParse: r,
			weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
			weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
			weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D [de] MMMM [de] YYYY",
				LLL: "D [de] MMMM [de] YYYY H:mm",
				LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
			},
			calendar: {
				sameDay: function () {
					return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				nextDay: function () {
					return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				nextWeek: function () {
					return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				lastDay: function () {
					return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				lastWeek: function () {
					return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "en %s",
				past: "hace %s",
				s: "unos segundos",
				ss: "%d segundos",
				m: "un minuto",
				mm: "%d minutos",
				h: "una hora",
				hh: "%d horas",
				d: "un día",
				dd: "%d días",
				w: "una semana",
				ww: "%d semanas",
				M: "un mes",
				MM: "%d meses",
				y: "un año",
				yy: "%d años"
			},
			dayOfMonthOrdinalParse: /\d{1,2}º/,
			ordinal: "%dº",
			week: {
				dow: 0,
				doy: 4
			},
			invalidDate: "Fecha inválida"
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
			n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
			r = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
			a = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
		e.defineLocale("es-us", {
			months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
			monthsShort: function (e, r) {
				return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
			},
			monthsRegex: a,
			monthsShortRegex: a,
			monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
			monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
			monthsParse: r,
			longMonthsParse: r,
			shortMonthsParse: r,
			weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
			weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
			weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "MM/DD/YYYY",
				LL: "D [de] MMMM [de] YYYY",
				LLL: "D [de] MMMM [de] YYYY h:mm A",
				LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
			},
			calendar: {
				sameDay: function () {
					return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				nextDay: function () {
					return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				nextWeek: function () {
					return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				lastDay: function () {
					return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				lastWeek: function () {
					return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "en %s",
				past: "hace %s",
				s: "unos segundos",
				ss: "%d segundos",
				m: "un minuto",
				mm: "%d minutos",
				h: "una hora",
				hh: "%d horas",
				d: "un día",
				dd: "%d días",
				w: "una semana",
				ww: "%d semanas",
				M: "un mes",
				MM: "%d meses",
				y: "un año",
				yy: "%d años"
			},
			dayOfMonthOrdinalParse: /\d{1,2}º/,
			ordinal: "%dº",
			week: {
				dow: 0,
				doy: 6
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";

		function t(e, t, n, r) {
			var a = {
				s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
				ss: [e + "sekundi", e + "sekundit"],
				m: ["ühe minuti", "üks minut"],
				mm: [e + " minuti", e + " minutit"],
				h: ["ühe tunni", "tund aega", "üks tund"],
				hh: [e + " tunni", e + " tundi"],
				d: ["ühe päeva", "üks päev"],
				M: ["kuu aja", "kuu aega", "üks kuu"],
				MM: [e + " kuu", e + " kuud"],
				y: ["ühe aasta", "aasta", "üks aasta"],
				yy: [e + " aasta", e + " aastat"]
			};
			return t ? a[n][2] ? a[n][2] : a[n][1] : r ? a[n][0] : a[n][1]
		}
		e.defineLocale("et", {
			months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
			monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
			weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
			weekdaysShort: "P_E_T_K_N_R_L".split("_"),
			weekdaysMin: "P_E_T_K_N_R_L".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm",
				LLLL: "dddd, D. MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[Täna,] LT",
				nextDay: "[Homme,] LT",
				nextWeek: "[Järgmine] dddd LT",
				lastDay: "[Eile,] LT",
				lastWeek: "[Eelmine] dddd LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s pärast",
				past: "%s tagasi",
				s: t,
				ss: t,
				m: t,
				mm: t,
				h: t,
				hh: t,
				d: t,
				dd: "%d päeva",
				M: t,
				MM: t,
				y: t,
				yy: t
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("eu", {
			months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
			monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
			monthsParseExact: !0,
			weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
			weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
			weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY-MM-DD",
				LL: "YYYY[ko] MMMM[ren] D[a]",
				LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
				LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
				l: "YYYY-M-D",
				ll: "YYYY[ko] MMM D[a]",
				lll: "YYYY[ko] MMM D[a] HH:mm",
				llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
			},
			calendar: {
				sameDay: "[gaur] LT[etan]",
				nextDay: "[bihar] LT[etan]",
				nextWeek: "dddd LT[etan]",
				lastDay: "[atzo] LT[etan]",
				lastWeek: "[aurreko] dddd LT[etan]",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s barru",
				past: "duela %s",
				s: "segundo batzuk",
				ss: "%d segundo",
				m: "minutu bat",
				mm: "%d minutu",
				h: "ordu bat",
				hh: "%d ordu",
				d: "egun bat",
				dd: "%d egun",
				M: "hilabete bat",
				MM: "%d hilabete",
				y: "urte bat",
				yy: "%d urte"
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		var t = {
				1: "۱",
				2: "۲",
				3: "۳",
				4: "۴",
				5: "۵",
				6: "۶",
				7: "۷",
				8: "۸",
				9: "۹",
				0: "۰"
			},
			n = {
				"۱": "1",
				"۲": "2",
				"۳": "3",
				"۴": "4",
				"۵": "5",
				"۶": "6",
				"۷": "7",
				"۸": "8",
				"۹": "9",
				"۰": "0"
			};
		e.defineLocale("fa", {
			months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
			monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
			weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
			weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
			weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			meridiemParse: /قبل از ظهر|بعد از ظهر/,
			isPM: function (e) {
				return /بعد از ظهر/.test(e)
			},
			meridiem: function (e, t, n) {
				return e < 12 ? "قبل از ظهر" : "بعد از ظهر"
			},
			calendar: {
				sameDay: "[امروز ساعت] LT",
				nextDay: "[فردا ساعت] LT",
				nextWeek: "dddd [ساعت] LT",
				lastDay: "[دیروز ساعت] LT",
				lastWeek: "dddd [پیش] [ساعت] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "در %s",
				past: "%s پیش",
				s: "چند ثانیه",
				ss: "%d ثانیه",
				m: "یک دقیقه",
				mm: "%d دقیقه",
				h: "یک ساعت",
				hh: "%d ساعت",
				d: "یک روز",
				dd: "%d روز",
				M: "یک ماه",
				MM: "%d ماه",
				y: "یک سال",
				yy: "%d سال"
			},
			preparse: function (e) {
				return e.replace(/[۰-۹]/g, function (e) {
					return n[e]
				}).replace(/،/g, ",")
			},
			postformat: function (e) {
				return e.replace(/\d/g, function (e) {
					return t[e]
				}).replace(/,/g, "،")
			},
			dayOfMonthOrdinalParse: /\d{1,2}م/,
			ordinal: "%dم",
			week: {
				dow: 6,
				doy: 12
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		var t = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),
			n = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", t[7], t[8], t[9]];

		function r(e, r, a, i) {
			var s = "";
			switch (a) {
				case "s":
					return i ? "muutaman sekunnin" : "muutama sekunti";
				case "ss":
					s = i ? "sekunnin" : "sekuntia";
					break;
				case "m":
					return i ? "minuutin" : "minuutti";
				case "mm":
					s = i ? "minuutin" : "minuuttia";
					break;
				case "h":
					return i ? "tunnin" : "tunti";
				case "hh":
					s = i ? "tunnin" : "tuntia";
					break;
				case "d":
					return i ? "päivän" : "päivä";
				case "dd":
					s = i ? "päivän" : "päivää";
					break;
				case "M":
					return i ? "kuukauden" : "kuukausi";
				case "MM":
					s = i ? "kuukauden" : "kuukautta";
					break;
				case "y":
					return i ? "vuoden" : "vuosi";
				case "yy":
					s = i ? "vuoden" : "vuotta"
			}
			return s = function (e, r) {
				return e < 10 ? r ? n[e] : t[e] : e
			}(e, i) + " " + s
		}
		e.defineLocale("fi", {
			months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
			monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
			weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
			weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
			weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
			longDateFormat: {
				LT: "HH.mm",
				LTS: "HH.mm.ss",
				L: "DD.MM.YYYY",
				LL: "Do MMMM[ta] YYYY",
				LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
				LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
				l: "D.M.YYYY",
				ll: "Do MMM YYYY",
				lll: "Do MMM YYYY, [klo] HH.mm",
				llll: "ddd, Do MMM YYYY, [klo] HH.mm"
			},
			calendar: {
				sameDay: "[tänään] [klo] LT",
				nextDay: "[huomenna] [klo] LT",
				nextWeek: "dddd [klo] LT",
				lastDay: "[eilen] [klo] LT",
				lastWeek: "[viime] dddd[na] [klo] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s päästä",
				past: "%s sitten",
				s: r,
				ss: r,
				m: r,
				mm: r,
				h: r,
				hh: r,
				d: r,
				dd: r,
				M: r,
				MM: r,
				y: r,
				yy: r
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("fil", {
			months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
			monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
			weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
			weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
			weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "MM/D/YYYY",
				LL: "MMMM D, YYYY",
				LLL: "MMMM D, YYYY HH:mm",
				LLLL: "dddd, MMMM DD, YYYY HH:mm"
			},
			calendar: {
				sameDay: "LT [ngayong araw]",
				nextDay: "[Bukas ng] LT",
				nextWeek: "LT [sa susunod na] dddd",
				lastDay: "LT [kahapon]",
				lastWeek: "LT [noong nakaraang] dddd",
				sameElse: "L"
			},
			relativeTime: {
				future: "sa loob ng %s",
				past: "%s ang nakalipas",
				s: "ilang segundo",
				ss: "%d segundo",
				m: "isang minuto",
				mm: "%d minuto",
				h: "isang oras",
				hh: "%d oras",
				d: "isang araw",
				dd: "%d araw",
				M: "isang buwan",
				MM: "%d buwan",
				y: "isang taon",
				yy: "%d taon"
			},
			dayOfMonthOrdinalParse: /\d{1,2}/,
			ordinal: function (e) {
				return e
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("fo", {
			months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
			monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
			weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),
			weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
			weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D. MMMM, YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Í dag kl.] LT",
				nextDay: "[Í morgin kl.] LT",
				nextWeek: "dddd [kl.] LT",
				lastDay: "[Í gjár kl.] LT",
				lastWeek: "[síðstu] dddd [kl] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "um %s",
				past: "%s síðani",
				s: "fá sekund",
				ss: "%d sekundir",
				m: "ein minuttur",
				mm: "%d minuttir",
				h: "ein tími",
				hh: "%d tímar",
				d: "ein dagur",
				dd: "%d dagar",
				M: "ein mánaður",
				MM: "%d mánaðir",
				y: "eitt ár",
				yy: "%d ár"
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		var t = /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?|janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i,
			n = [/^janv/i, /^févr/i, /^mars/i, /^avr/i, /^mai/i, /^juin/i, /^juil/i, /^août/i, /^sept/i, /^oct/i, /^nov/i, /^déc/i];
		e.defineLocale("fr", {
			months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
			monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
			monthsRegex: t,
			monthsShortRegex: t,
			monthsStrictRegex: /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i,
			monthsShortStrictRegex: /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?)/i,
			monthsParse: n,
			longMonthsParse: n,
			shortMonthsParse: n,
			weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
			weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
			weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Aujourd’hui à] LT",
				nextDay: "[Demain à] LT",
				nextWeek: "dddd [à] LT",
				lastDay: "[Hier à] LT",
				lastWeek: "dddd [dernier à] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dans %s",
				past: "il y a %s",
				s: "quelques secondes",
				ss: "%d secondes",
				m: "une minute",
				mm: "%d minutes",
				h: "une heure",
				hh: "%d heures",
				d: "un jour",
				dd: "%d jours",
				w: "une semaine",
				ww: "%d semaines",
				M: "un mois",
				MM: "%d mois",
				y: "un an",
				yy: "%d ans"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
			ordinal: function (e, t) {
				switch (t) {
					case "D":
						return e + (1 === e ? "er" : "");
					default:
					case "M":
					case "Q":
					case "DDD":
					case "d":
						return e + (1 === e ? "er" : "e");
					case "w":
					case "W":
						return e + (1 === e ? "re" : "e")
				}
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("fr-ca", {
			months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
			monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
			monthsParseExact: !0,
			weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
			weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
			weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY-MM-DD",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Aujourd’hui à] LT",
				nextDay: "[Demain à] LT",
				nextWeek: "dddd [à] LT",
				lastDay: "[Hier à] LT",
				lastWeek: "dddd [dernier à] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dans %s",
				past: "il y a %s",
				s: "quelques secondes",
				ss: "%d secondes",
				m: "une minute",
				mm: "%d minutes",
				h: "une heure",
				hh: "%d heures",
				d: "un jour",
				dd: "%d jours",
				M: "un mois",
				MM: "%d mois",
				y: "un an",
				yy: "%d ans"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
			ordinal: function (e, t) {
				switch (t) {
					default:
						case "M":
						case "Q":
						case "D":
						case "DDD":
						case "d":
						return e + (1 === e ? "er" : "e");
					case "w":
							case "W":
							return e + (1 === e ? "re" : "e")
				}
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("fr-ch", {
			months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
			monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
			monthsParseExact: !0,
			weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
			weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
			weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Aujourd’hui à] LT",
				nextDay: "[Demain à] LT",
				nextWeek: "dddd [à] LT",
				lastDay: "[Hier à] LT",
				lastWeek: "dddd [dernier à] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dans %s",
				past: "il y a %s",
				s: "quelques secondes",
				ss: "%d secondes",
				m: "une minute",
				mm: "%d minutes",
				h: "une heure",
				hh: "%d heures",
				d: "un jour",
				dd: "%d jours",
				M: "un mois",
				MM: "%d mois",
				y: "un an",
				yy: "%d ans"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
			ordinal: function (e, t) {
				switch (t) {
					default:
						case "M":
						case "Q":
						case "D":
						case "DDD":
						case "d":
						return e + (1 === e ? "er" : "e");
					case "w":
							case "W":
							return e + (1 === e ? "re" : "e")
				}
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		var t = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
			n = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
		e.defineLocale("fy", {
			months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
			monthsShort: function (e, r) {
				return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
			},
			monthsParseExact: !0,
			weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
			weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
			weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD-MM-YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[hjoed om] LT",
				nextDay: "[moarn om] LT",
				nextWeek: "dddd [om] LT",
				lastDay: "[juster om] LT",
				lastWeek: "[ôfrûne] dddd [om] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "oer %s",
				past: "%s lyn",
				s: "in pear sekonden",
				ss: "%d sekonden",
				m: "ien minút",
				mm: "%d minuten",
				h: "ien oere",
				hh: "%d oeren",
				d: "ien dei",
				dd: "%d dagen",
				M: "ien moanne",
				MM: "%d moannen",
				y: "ien jier",
				yy: "%d jierren"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
			ordinal: function (e) {
				return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("ga", {
			months: ["Eanáir", "Feabhra", "Márta", "Aibreán", "Bealtaine", "Meitheamh", "Iúil", "Lúnasa", "Meán Fómhair", "Deireadh Fómhair", "Samhain", "Nollaig"],
			monthsShort: ["Ean", "Feabh", "Márt", "Aib", "Beal", "Meith", "Iúil", "Lún", "M.F.", "D.F.", "Samh", "Noll"],
			monthsParseExact: !0,
			weekdays: ["Dé Domhnaigh", "Dé Luain", "Dé Máirt", "Dé Céadaoin", "Déardaoin", "Dé hAoine", "Dé Sathairn"],
			weekdaysShort: ["Domh", "Luan", "Máirt", "Céad", "Déar", "Aoine", "Sath"],
			weekdaysMin: ["Do", "Lu", "Má", "Cé", "Dé", "A", "Sa"],
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Inniu ag] LT",
				nextDay: "[Amárach ag] LT",
				nextWeek: "dddd [ag] LT",
				lastDay: "[Inné ag] LT",
				lastWeek: "dddd [seo caite] [ag] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "i %s",
				past: "%s ó shin",
				s: "cúpla soicind",
				ss: "%d soicind",
				m: "nóiméad",
				mm: "%d nóiméad",
				h: "uair an chloig",
				hh: "%d uair an chloig",
				d: "lá",
				dd: "%d lá",
				M: "mí",
				MM: "%d míonna",
				y: "bliain",
				yy: "%d bliain"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
			ordinal: function (e) {
				return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh")
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("gd", {
			months: ["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd"],
			monthsShort: ["Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh"],
			monthsParseExact: !0,
			weekdays: ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
			weekdaysShort: ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
			weekdaysMin: ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"],
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[An-diugh aig] LT",
				nextDay: "[A-màireach aig] LT",
				nextWeek: "dddd [aig] LT",
				lastDay: "[An-dè aig] LT",
				lastWeek: "dddd [seo chaidh] [aig] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "ann an %s",
				past: "bho chionn %s",
				s: "beagan diogan",
				ss: "%d diogan",
				m: "mionaid",
				mm: "%d mionaidean",
				h: "uair",
				hh: "%d uairean",
				d: "latha",
				dd: "%d latha",
				M: "mìos",
				MM: "%d mìosan",
				y: "bliadhna",
				yy: "%d bliadhna"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
			ordinal: function (e) {
				return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh")
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("gl", {
			months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),
			monthsShort: "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"),
			monthsParseExact: !0,
			weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),
			weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"),
			weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D [de] MMMM [de] YYYY",
				LLL: "D [de] MMMM [de] YYYY H:mm",
				LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
			},
			calendar: {
				sameDay: function () {
					return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT"
				},
				nextDay: function () {
					return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT"
				},
				nextWeek: function () {
					return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT"
				},
				lastDay: function () {
					return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT"
				},
				lastWeek: function () {
					return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: function (e) {
					return 0 === e.indexOf("un") ? "n" + e : "en " + e
				},
				past: "hai %s",
				s: "uns segundos",
				ss: "%d segundos",
				m: "un minuto",
				mm: "%d minutos",
				h: "unha hora",
				hh: "%d horas",
				d: "un día",
				dd: "%d días",
				M: "un mes",
				MM: "%d meses",
				y: "un ano",
				yy: "%d anos"
			},
			dayOfMonthOrdinalParse: /\d{1,2}º/,
			ordinal: "%dº",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";

		function t(e, t, n, r) {
			var a = {
				s: ["थोडया सॅकंडांनी", "थोडे सॅकंड"],
				ss: [e + " सॅकंडांनी", e + " सॅकंड"],
				m: ["एका मिणटान", "एक मिनूट"],
				mm: [e + " मिणटांनी", e + " मिणटां"],
				h: ["एका वरान", "एक वर"],
				hh: [e + " वरांनी", e + " वरां"],
				d: ["एका दिसान", "एक दीस"],
				dd: [e + " दिसांनी", e + " दीस"],
				M: ["एका म्हयन्यान", "एक म्हयनो"],
				MM: [e + " म्हयन्यानी", e + " म्हयने"],
				y: ["एका वर्सान", "एक वर्स"],
				yy: [e + " वर्सांनी", e + " वर्सां"]
			};
			return r ? a[n][0] : a[n][1]
		}
		e.defineLocale("gom-deva", {
			months: {
				standalone: "जानेवारी_फेब्रुवारी_मार्च_एप्रील_मे_जून_जुलय_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
				format: "जानेवारीच्या_फेब्रुवारीच्या_मार्चाच्या_एप्रीलाच्या_मेयाच्या_जूनाच्या_जुलयाच्या_ऑगस्टाच्या_सप्टेंबराच्या_ऑक्टोबराच्या_नोव्हेंबराच्या_डिसेंबराच्या".split("_"),
				isFormat: /MMMM(\s)+D[oD]?/
			},
			monthsShort: "जाने._फेब्रु._मार्च_एप्री._मे_जून_जुल._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
			monthsParseExact: !0,
			weekdays: "आयतार_सोमार_मंगळार_बुधवार_बिरेस्तार_सुक्रार_शेनवार".split("_"),
			weekdaysShort: "आयत._सोम._मंगळ._बुध._ब्रेस्त._सुक्र._शेन.".split("_"),
			weekdaysMin: "आ_सो_मं_बु_ब्रे_सु_शे".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "A h:mm [वाजतां]",
				LTS: "A h:mm:ss [वाजतां]",
				L: "DD-MM-YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY A h:mm [वाजतां]",
				LLLL: "dddd, MMMM Do, YYYY, A h:mm [वाजतां]",
				llll: "ddd, D MMM YYYY, A h:mm [वाजतां]"
			},
			calendar: {
				sameDay: "[आयज] LT",
				nextDay: "[फाल्यां] LT",
				nextWeek: "[फुडलो] dddd[,] LT",
				lastDay: "[काल] LT",
				lastWeek: "[फाटलो] dddd[,] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s",
				past: "%s आदीं",
				s: t,
				ss: t,
				m: t,
				mm: t,
				h: t,
				hh: t,
				d: t,
				dd: t,
				M: t,
				MM: t,
				y: t,
				yy: t
			},
			dayOfMonthOrdinalParse: /\d{1,2}(वेर)/,
			ordinal: function (e, t) {
				switch (t) {
					case "D":
						return e + "वेर";
					default:
					case "M":
					case "Q":
					case "DDD":
					case "d":
					case "w":
					case "W":
						return e
				}
			},
			week: {
				dow: 0,
				doy: 3
			},
			meridiemParse: /राती|सकाळीं|दनपारां|सांजे/,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "राती" === t ? e < 4 ? e : e + 12 : "सकाळीं" === t ? e : "दनपारां" === t ? e > 12 ? e : e + 12 : "सांजे" === t ? e + 12 : void 0
			},
			meridiem: function (e, t, n) {
				return e < 4 ? "राती" : e < 12 ? "सकाळीं" : e < 16 ? "दनपारां" : e < 20 ? "सांजे" : "राती"
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";

		function t(e, t, n, r) {
			var a = {
				s: ["thoddea sekondamni", "thodde sekond"],
				ss: [e + " sekondamni", e + " sekond"],
				m: ["eka mintan", "ek minut"],
				mm: [e + " mintamni", e + " mintam"],
				h: ["eka voran", "ek vor"],
				hh: [e + " voramni", e + " voram"],
				d: ["eka disan", "ek dis"],
				dd: [e + " disamni", e + " dis"],
				M: ["eka mhoinean", "ek mhoino"],
				MM: [e + " mhoineamni", e + " mhoine"],
				y: ["eka vorsan", "ek voros"],
				yy: [e + " vorsamni", e + " vorsam"]
			};
			return r ? a[n][0] : a[n][1]
		}
		e.defineLocale("gom-latn", {
			months: {
				standalone: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),
				format: "Janerachea_Febrerachea_Marsachea_Abrilachea_Maiachea_Junachea_Julaiachea_Agostachea_Setembrachea_Otubrachea_Novembrachea_Dezembrachea".split("_"),
				isFormat: /MMMM(\s)+D[oD]?/
			},
			monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),
			monthsParseExact: !0,
			weekdays: "Aitar_Somar_Mongllar_Budhvar_Birestar_Sukrar_Son'var".split("_"),
			weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
			weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "A h:mm [vazta]",
				LTS: "A h:mm:ss [vazta]",
				L: "DD-MM-YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY A h:mm [vazta]",
				LLLL: "dddd, MMMM Do, YYYY, A h:mm [vazta]",
				llll: "ddd, D MMM YYYY, A h:mm [vazta]"
			},
			calendar: {
				sameDay: "[Aiz] LT",
				nextDay: "[Faleam] LT",
				nextWeek: "[Fuddlo] dddd[,] LT",
				lastDay: "[Kal] LT",
				lastWeek: "[Fattlo] dddd[,] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s",
				past: "%s adim",
				s: t,
				ss: t,
				m: t,
				mm: t,
				h: t,
				hh: t,
				d: t,
				dd: t,
				M: t,
				MM: t,
				y: t,
				yy: t
			},
			dayOfMonthOrdinalParse: /\d{1,2}(er)/,
			ordinal: function (e, t) {
				switch (t) {
					case "D":
						return e + "er";
					default:
					case "M":
					case "Q":
					case "DDD":
					case "d":
					case "w":
					case "W":
						return e
				}
			},
			week: {
				dow: 0,
				doy: 3
			},
			meridiemParse: /rati|sokallim|donparam|sanje/,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "rati" === t ? e < 4 ? e : e + 12 : "sokallim" === t ? e : "donparam" === t ? e > 12 ? e : e + 12 : "sanje" === t ? e + 12 : void 0
			},
			meridiem: function (e, t, n) {
				return e < 4 ? "rati" : e < 12 ? "sokallim" : e < 16 ? "donparam" : e < 20 ? "sanje" : "rati"
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		var t = {
				1: "૧",
				2: "૨",
				3: "૩",
				4: "૪",
				5: "૫",
				6: "૬",
				7: "૭",
				8: "૮",
				9: "૯",
				0: "૦"
			},
			n = {
				"૧": "1",
				"૨": "2",
				"૩": "3",
				"૪": "4",
				"૫": "5",
				"૬": "6",
				"૭": "7",
				"૮": "8",
				"૯": "9",
				"૦": "0"
			};
		e.defineLocale("gu", {
			months: "જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split("_"),
			monthsShort: "જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split("_"),
			monthsParseExact: !0,
			weekdays: "રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split("_"),
			weekdaysShort: "રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"),
			weekdaysMin: "ર_સો_મં_બુ_ગુ_શુ_શ".split("_"),
			longDateFormat: {
				LT: "A h:mm વાગ્યે",
				LTS: "A h:mm:ss વાગ્યે",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, A h:mm વાગ્યે",
				LLLL: "dddd, D MMMM YYYY, A h:mm વાગ્યે"
			},
			calendar: {
				sameDay: "[આજ] LT",
				nextDay: "[કાલે] LT",
				nextWeek: "dddd, LT",
				lastDay: "[ગઇકાલે] LT",
				lastWeek: "[પાછલા] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s મા",
				past: "%s પહેલા",
				s: "અમુક પળો",
				ss: "%d સેકંડ",
				m: "એક મિનિટ",
				mm: "%d મિનિટ",
				h: "એક કલાક",
				hh: "%d કલાક",
				d: "એક દિવસ",
				dd: "%d દિવસ",
				M: "એક મહિનો",
				MM: "%d મહિનો",
				y: "એક વર્ષ",
				yy: "%d વર્ષ"
			},
			preparse: function (e) {
				return e.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, function (e) {
					return n[e]
				})
			},
			postformat: function (e) {
				return e.replace(/\d/g, function (e) {
					return t[e]
				})
			},
			meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "રાત" === t ? e < 4 ? e : e + 12 : "સવાર" === t ? e : "બપોર" === t ? e >= 10 ? e : e + 12 : "સાંજ" === t ? e + 12 : void 0
			},
			meridiem: function (e, t, n) {
				return e < 4 ? "રાત" : e < 10 ? "સવાર" : e < 17 ? "બપોર" : e < 20 ? "સાંજ" : "રાત"
			},
			week: {
				dow: 0,
				doy: 6
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("he", {
			months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
			monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
			weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
			weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
			weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D [ב]MMMM YYYY",
				LLL: "D [ב]MMMM YYYY HH:mm",
				LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
				l: "D/M/YYYY",
				ll: "D MMM YYYY",
				lll: "D MMM YYYY HH:mm",
				llll: "ddd, D MMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[היום ב־]LT",
				nextDay: "[מחר ב־]LT",
				nextWeek: "dddd [בשעה] LT",
				lastDay: "[אתמול ב־]LT",
				lastWeek: "[ביום] dddd [האחרון בשעה] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "בעוד %s",
				past: "לפני %s",
				s: "מספר שניות",
				ss: "%d שניות",
				m: "דקה",
				mm: "%d דקות",
				h: "שעה",
				hh: function (e) {
					return 2 === e ? "שעתיים" : e + " שעות"
				},
				d: "יום",
				dd: function (e) {
					return 2 === e ? "יומיים" : e + " ימים"
				},
				M: "חודש",
				MM: function (e) {
					return 2 === e ? "חודשיים" : e + " חודשים"
				},
				y: "שנה",
				yy: function (e) {
					return 2 === e ? "שנתיים" : e % 10 == 0 && 10 !== e ? e + " שנה" : e + " שנים"
				}
			},
			meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
			isPM: function (e) {
				return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e)
			},
			meridiem: function (e, t, n) {
				return e < 5 ? "לפנות בוקר" : e < 10 ? "בבוקר" : e < 12 ? n ? 'לפנה"צ' : "לפני הצהריים" : e < 18 ? n ? 'אחה"צ' : "אחרי הצהריים" : "בערב"
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		var t = {
				1: "१",
				2: "२",
				3: "३",
				4: "४",
				5: "५",
				6: "६",
				7: "७",
				8: "८",
				9: "९",
				0: "०"
			},
			n = {
				"१": "1",
				"२": "2",
				"३": "3",
				"४": "4",
				"५": "5",
				"६": "6",
				"७": "7",
				"८": "8",
				"९": "9",
				"०": "0"
			},
			r = [/^जन/i, /^फ़र|फर/i, /^मार्च/i, /^अप्रै/i, /^मई/i, /^जून/i, /^जुल/i, /^अग/i, /^सितं|सित/i, /^अक्टू/i, /^नव|नवं/i, /^दिसं|दिस/i];
		e.defineLocale("hi", {
			months: {
				format: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
				standalone: "जनवरी_फरवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितंबर_अक्टूबर_नवंबर_दिसंबर".split("_")
			},
			monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
			weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
			weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
			weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
			longDateFormat: {
				LT: "A h:mm बजे",
				LTS: "A h:mm:ss बजे",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, A h:mm बजे",
				LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
			},
			monthsParse: r,
			longMonthsParse: r,
			shortMonthsParse: [/^जन/i, /^फ़र/i, /^मार्च/i, /^अप्रै/i, /^मई/i, /^जून/i, /^जुल/i, /^अग/i, /^सित/i, /^अक्टू/i, /^नव/i, /^दिस/i],
			monthsRegex: /^(जनवरी|जन\.?|फ़रवरी|फरवरी|फ़र\.?|मार्च?|अप्रैल|अप्रै\.?|मई?|जून?|जुलाई|जुल\.?|अगस्त|अग\.?|सितम्बर|सितंबर|सित\.?|अक्टूबर|अक्टू\.?|नवम्बर|नवंबर|नव\.?|दिसम्बर|दिसंबर|दिस\.?)/i,
			monthsShortRegex: /^(जनवरी|जन\.?|फ़रवरी|फरवरी|फ़र\.?|मार्च?|अप्रैल|अप्रै\.?|मई?|जून?|जुलाई|जुल\.?|अगस्त|अग\.?|सितम्बर|सितंबर|सित\.?|अक्टूबर|अक्टू\.?|नवम्बर|नवंबर|नव\.?|दिसम्बर|दिसंबर|दिस\.?)/i,
			monthsStrictRegex: /^(जनवरी?|फ़रवरी|फरवरी?|मार्च?|अप्रैल?|मई?|जून?|जुलाई?|अगस्त?|सितम्बर|सितंबर|सित?\.?|अक्टूबर|अक्टू\.?|नवम्बर|नवंबर?|दिसम्बर|दिसंबर?)/i,
			monthsShortStrictRegex: /^(जन\.?|फ़र\.?|मार्च?|अप्रै\.?|मई?|जून?|जुल\.?|अग\.?|सित\.?|अक्टू\.?|नव\.?|दिस\.?)/i,
			calendar: {
				sameDay: "[आज] LT",
				nextDay: "[कल] LT",
				nextWeek: "dddd, LT",
				lastDay: "[कल] LT",
				lastWeek: "[पिछले] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s में",
				past: "%s पहले",
				s: "कुछ ही क्षण",
				ss: "%d सेकंड",
				m: "एक मिनट",
				mm: "%d मिनट",
				h: "एक घंटा",
				hh: "%d घंटे",
				d: "एक दिन",
				dd: "%d दिन",
				M: "एक महीने",
				MM: "%d महीने",
				y: "एक वर्ष",
				yy: "%d वर्ष"
			},
			preparse: function (e) {
				return e.replace(/[१२३४५६७८९०]/g, function (e) {
					return n[e]
				})
			},
			postformat: function (e) {
				return e.replace(/\d/g, function (e) {
					return t[e]
				})
			},
			meridiemParse: /रात|सुबह|दोपहर|शाम/,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "रात" === t ? e < 4 ? e : e + 12 : "सुबह" === t ? e : "दोपहर" === t ? e >= 10 ? e : e + 12 : "शाम" === t ? e + 12 : void 0
			},
			meridiem: function (e, t, n) {
				return e < 4 ? "रात" : e < 10 ? "सुबह" : e < 17 ? "दोपहर" : e < 20 ? "शाम" : "रात"
			},
			week: {
				dow: 0,
				doy: 6
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";

		function t(e, t, n) {
			var r = e + " ";
			switch (n) {
				case "ss":
					return r += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
				case "m":
					return t ? "jedna minuta" : "jedne minute";
				case "mm":
					return r += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
				case "h":
					return t ? "jedan sat" : "jednog sata";
				case "hh":
					return r += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
				case "dd":
					return r += 1 === e ? "dan" : "dana";
				case "MM":
					return r += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
				case "yy":
					return r += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
			}
		}
		e.defineLocale("hr", {
			months: {
				format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
				standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
			},
			monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
			monthsParseExact: !0,
			weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
			weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
			weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "Do MMMM YYYY",
				LLL: "Do MMMM YYYY H:mm",
				LLLL: "dddd, Do MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[danas u] LT",
				nextDay: "[sutra u] LT",
				nextWeek: function () {
					switch (this.day()) {
						case 0:
							return "[u] [nedjelju] [u] LT";
						case 3:
							return "[u] [srijedu] [u] LT";
						case 6:
							return "[u] [subotu] [u] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[u] dddd [u] LT"
					}
				},
				lastDay: "[jučer u] LT",
				lastWeek: function () {
					switch (this.day()) {
						case 0:
							return "[prošlu] [nedjelju] [u] LT";
						case 3:
							return "[prošlu] [srijedu] [u] LT";
						case 6:
							return "[prošle] [subote] [u] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[prošli] dddd [u] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "za %s",
				past: "prije %s",
				s: "par sekundi",
				ss: t,
				m: t,
				mm: t,
				h: t,
				hh: t,
				d: "dan",
				dd: t,
				M: "mjesec",
				MM: t,
				y: "godinu",
				yy: t
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		var t = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");

		function n(e, t, n, r) {
			var a = e;
			switch (n) {
				case "s":
					return r || t ? "néhány másodperc" : "néhány másodperce";
				case "ss":
					return a + (r || t) ? " másodperc" : " másodperce";
				case "m":
					return "egy" + (r || t ? " perc" : " perce");
				case "mm":
					return a + (r || t ? " perc" : " perce");
				case "h":
					return "egy" + (r || t ? " óra" : " órája");
				case "hh":
					return a + (r || t ? " óra" : " órája");
				case "d":
					return "egy" + (r || t ? " nap" : " napja");
				case "dd":
					return a + (r || t ? " nap" : " napja");
				case "M":
					return "egy" + (r || t ? " hónap" : " hónapja");
				case "MM":
					return a + (r || t ? " hónap" : " hónapja");
				case "y":
					return "egy" + (r || t ? " év" : " éve");
				case "yy":
					return a + (r || t ? " év" : " éve")
			}
			return ""
		}

		function r(e) {
			return (e ? "" : "[múlt] ") + "[" + t[this.day()] + "] LT[-kor]"
		}
		e.defineLocale("hu", {
			months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
			monthsShort: "jan._feb._márc._ápr._máj._jún._júl._aug._szept._okt._nov._dec.".split("_"),
			monthsParseExact: !0,
			weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
			weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
			weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "YYYY.MM.DD.",
				LL: "YYYY. MMMM D.",
				LLL: "YYYY. MMMM D. H:mm",
				LLLL: "YYYY. MMMM D., dddd H:mm"
			},
			meridiemParse: /de|du/i,
			isPM: function (e) {
				return "u" === e.charAt(1).toLowerCase()
			},
			meridiem: function (e, t, n) {
				return e < 12 ? !0 === n ? "de" : "DE" : !0 === n ? "du" : "DU"
			},
			calendar: {
				sameDay: "[ma] LT[-kor]",
				nextDay: "[holnap] LT[-kor]",
				nextWeek: function () {
					return r.call(this, !0)
				},
				lastDay: "[tegnap] LT[-kor]",
				lastWeek: function () {
					return r.call(this, !1)
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "%s múlva",
				past: "%s",
				s: n,
				ss: n,
				m: n,
				mm: n,
				h: n,
				hh: n,
				d: n,
				dd: n,
				M: n,
				MM: n,
				y: n,
				yy: n
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("hy-am", {
			months: {
				format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),
				standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")
			},
			monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),
			weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),
			weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
			weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY թ.",
				LLL: "D MMMM YYYY թ., HH:mm",
				LLLL: "dddd, D MMMM YYYY թ., HH:mm"
			},
			calendar: {
				sameDay: "[այսօր] LT",
				nextDay: "[վաղը] LT",
				lastDay: "[երեկ] LT",
				nextWeek: function () {
					return "dddd [օրը ժամը] LT"
				},
				lastWeek: function () {
					return "[անցած] dddd [օրը ժամը] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "%s հետո",
				past: "%s առաջ",
				s: "մի քանի վայրկյան",
				ss: "%d վայրկյան",
				m: "րոպե",
				mm: "%d րոպե",
				h: "ժամ",
				hh: "%d ժամ",
				d: "օր",
				dd: "%d օր",
				M: "ամիս",
				MM: "%d ամիս",
				y: "տարի",
				yy: "%d տարի"
			},
			meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
			isPM: function (e) {
				return /^(ցերեկվա|երեկոյան)$/.test(e)
			},
			meridiem: function (e) {
				return e < 4 ? "գիշերվա" : e < 12 ? "առավոտվա" : e < 17 ? "ցերեկվա" : "երեկոյան"
			},
			dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
			ordinal: function (e, t) {
				switch (t) {
					case "DDD":
					case "w":
					case "W":
					case "DDDo":
						return 1 === e ? e + "-ին" : e + "-րդ";
					default:
						return e
				}
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("id", {
			months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),
			weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
			weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
			weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
			longDateFormat: {
				LT: "HH.mm",
				LTS: "HH.mm.ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY [pukul] HH.mm",
				LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
			},
			meridiemParse: /pagi|siang|sore|malam/,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "pagi" === t ? e : "siang" === t ? e >= 11 ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0
			},
			meridiem: function (e, t, n) {
				return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam"
			},
			calendar: {
				sameDay: "[Hari ini pukul] LT",
				nextDay: "[Besok pukul] LT",
				nextWeek: "dddd [pukul] LT",
				lastDay: "[Kemarin pukul] LT",
				lastWeek: "dddd [lalu pukul] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dalam %s",
				past: "%s yang lalu",
				s: "beberapa detik",
				ss: "%d detik",
				m: "semenit",
				mm: "%d menit",
				h: "sejam",
				hh: "%d jam",
				d: "sehari",
				dd: "%d hari",
				M: "sebulan",
				MM: "%d bulan",
				y: "setahun",
				yy: "%d tahun"
			},
			week: {
				dow: 0,
				doy: 6
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";

		function t(e) {
			return e % 100 == 11 || e % 10 != 1
		}

		function n(e, n, r, a) {
			var i = e + " ";
			switch (r) {
				case "s":
					return n || a ? "nokkrar sekúndur" : "nokkrum sekúndum";
				case "ss":
					return t(e) ? i + (n || a ? "sekúndur" : "sekúndum") : i + "sekúnda";
				case "m":
					return n ? "mínúta" : "mínútu";
				case "mm":
					return t(e) ? i + (n || a ? "mínútur" : "mínútum") : n ? i + "mínúta" : i + "mínútu";
				case "hh":
					return t(e) ? i + (n || a ? "klukkustundir" : "klukkustundum") : i + "klukkustund";
				case "d":
					return n ? "dagur" : a ? "dag" : "degi";
				case "dd":
					return t(e) ? n ? i + "dagar" : i + (a ? "daga" : "dögum") : n ? i + "dagur" : i + (a ? "dag" : "degi");
				case "M":
					return n ? "mánuður" : a ? "mánuð" : "mánuði";
				case "MM":
					return t(e) ? n ? i + "mánuðir" : i + (a ? "mánuði" : "mánuðum") : n ? i + "mánuður" : i + (a ? "mánuð" : "mánuði");
				case "y":
					return n || a ? "ár" : "ári";
				case "yy":
					return t(e) ? i + (n || a ? "ár" : "árum") : i + (n || a ? "ár" : "ári")
			}
		}
		e.defineLocale("is", {
			months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
			monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
			weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
			weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
			weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY [kl.] H:mm",
				LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
			},
			calendar: {
				sameDay: "[í dag kl.] LT",
				nextDay: "[á morgun kl.] LT",
				nextWeek: "dddd [kl.] LT",
				lastDay: "[í gær kl.] LT",
				lastWeek: "[síðasta] dddd [kl.] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "eftir %s",
				past: "fyrir %s síðan",
				s: n,
				ss: n,
				m: n,
				mm: n,
				h: "klukkustund",
				hh: n,
				d: n,
				dd: n,
				M: n,
				MM: n,
				y: n,
				yy: n
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("it", {
			months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
			monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
			weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
			weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
			weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: function () {
					return "[Oggi a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
				},
				nextDay: function () {
					return "[Domani a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
				},
				nextWeek: function () {
					return "dddd [a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
				},
				lastDay: function () {
					return "[Ieri a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
				},
				lastWeek: function () {
					switch (this.day()) {
						case 0:
							return "[La scorsa] dddd [a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT";
						default:
							return "[Lo scorso] dddd [a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "tra %s",
				past: "%s fa",
				s: "alcuni secondi",
				ss: "%d secondi",
				m: "un minuto",
				mm: "%d minuti",
				h: "un'ora",
				hh: "%d ore",
				d: "un giorno",
				dd: "%d giorni",
				w: "una settimana",
				ww: "%d settimane",
				M: "un mese",
				MM: "%d mesi",
				y: "un anno",
				yy: "%d anni"
			},
			dayOfMonthOrdinalParse: /\d{1,2}º/,
			ordinal: "%dº",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("it-ch", {
			months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
			monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
			weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
			weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
			weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Oggi alle] LT",
				nextDay: "[Domani alle] LT",
				nextWeek: "dddd [alle] LT",
				lastDay: "[Ieri alle] LT",
				lastWeek: function () {
					switch (this.day()) {
						case 0:
							return "[la scorsa] dddd [alle] LT";
						default:
							return "[lo scorso] dddd [alle] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: function (e) {
					return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
				},
				past: "%s fa",
				s: "alcuni secondi",
				ss: "%d secondi",
				m: "un minuto",
				mm: "%d minuti",
				h: "un'ora",
				hh: "%d ore",
				d: "un giorno",
				dd: "%d giorni",
				M: "un mese",
				MM: "%d mesi",
				y: "un anno",
				yy: "%d anni"
			},
			dayOfMonthOrdinalParse: /\d{1,2}º/,
			ordinal: "%dº",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("ja", {
			eras: [{
				since: "2019-05-01",
				offset: 1,
				name: "令和",
				narrow: "㋿",
				abbr: "R"
			}, {
				since: "1989-01-08",
				until: "2019-04-30",
				offset: 1,
				name: "平成",
				narrow: "㍻",
				abbr: "H"
			}, {
				since: "1926-12-25",
				until: "1989-01-07",
				offset: 1,
				name: "昭和",
				narrow: "㍼",
				abbr: "S"
			}, {
				since: "1912-07-30",
				until: "1926-12-24",
				offset: 1,
				name: "大正",
				narrow: "㍽",
				abbr: "T"
			}, {
				since: "1873-01-01",
				until: "1912-07-29",
				offset: 6,
				name: "明治",
				narrow: "㍾",
				abbr: "M"
			}, {
				since: "0001-01-01",
				until: "1873-12-31",
				offset: 1,
				name: "西暦",
				narrow: "AD",
				abbr: "AD"
			}, {
				since: "0000-12-31",
				until: -1 / 0,
				offset: 1,
				name: "紀元前",
				narrow: "BC",
				abbr: "BC"
			}],
			eraYearOrdinalRegex: /(元|\d+)年/,
			eraYearOrdinalParse: function (e, t) {
				return "元" === t[1] ? 1 : parseInt(t[1] || e, 10)
			},
			months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
			monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
			weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
			weekdaysShort: "日_月_火_水_木_金_土".split("_"),
			weekdaysMin: "日_月_火_水_木_金_土".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY/MM/DD",
				LL: "YYYY年M月D日",
				LLL: "YYYY年M月D日 HH:mm",
				LLLL: "YYYY年M月D日 dddd HH:mm",
				l: "YYYY/MM/DD",
				ll: "YYYY年M月D日",
				lll: "YYYY年M月D日 HH:mm",
				llll: "YYYY年M月D日(ddd) HH:mm"
			},
			meridiemParse: /午前|午後/i,
			isPM: function (e) {
				return "午後" === e
			},
			meridiem: function (e, t, n) {
				return e < 12 ? "午前" : "午後"
			},
			calendar: {
				sameDay: "[今日] LT",
				nextDay: "[明日] LT",
				nextWeek: function (e) {
					return e.week() !== this.week() ? "[来週]dddd LT" : "dddd LT"
				},
				lastDay: "[昨日] LT",
				lastWeek: function (e) {
					return this.week() !== e.week() ? "[先週]dddd LT" : "dddd LT"
				},
				sameElse: "L"
			},
			dayOfMonthOrdinalParse: /\d{1,2}日/,
			ordinal: function (e, t) {
				switch (t) {
					case "y":
						return 1 === e ? "元年" : e + "年";
					case "d":
					case "D":
					case "DDD":
						return e + "日";
					default:
						return e
				}
			},
			relativeTime: {
				future: "%s後",
				past: "%s前",
				s: "数秒",
				ss: "%d秒",
				m: "1分",
				mm: "%d分",
				h: "1時間",
				hh: "%d時間",
				d: "1日",
				dd: "%d日",
				M: "1ヶ月",
				MM: "%dヶ月",
				y: "1年",
				yy: "%d年"
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("jv", {
			months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
			weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
			weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
			weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
			longDateFormat: {
				LT: "HH.mm",
				LTS: "HH.mm.ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY [pukul] HH.mm",
				LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
			},
			meridiemParse: /enjing|siyang|sonten|ndalu/,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "enjing" === t ? e : "siyang" === t ? e >= 11 ? e : e + 12 : "sonten" === t || "ndalu" === t ? e + 12 : void 0
			},
			meridiem: function (e, t, n) {
				return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu"
			},
			calendar: {
				sameDay: "[Dinten puniko pukul] LT",
				nextDay: "[Mbenjang pukul] LT",
				nextWeek: "dddd [pukul] LT",
				lastDay: "[Kala wingi pukul] LT",
				lastWeek: "dddd [kepengker pukul] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "wonten ing %s",
				past: "%s ingkang kepengker",
				s: "sawetawis detik",
				ss: "%d detik",
				m: "setunggal menit",
				mm: "%d menit",
				h: "setunggal jam",
				hh: "%d jam",
				d: "sedinten",
				dd: "%d dinten",
				M: "sewulan",
				MM: "%d wulan",
				y: "setaun",
				yy: "%d taun"
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("ka", {
			months: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
			monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
			weekdays: {
				standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
				format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),
				isFormat: /(წინა|შემდეგ)/
			},
			weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
			weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[დღეს] LT[-ზე]",
				nextDay: "[ხვალ] LT[-ზე]",
				lastDay: "[გუშინ] LT[-ზე]",
				nextWeek: "[შემდეგ] dddd LT[-ზე]",
				lastWeek: "[წინა] dddd LT-ზე",
				sameElse: "L"
			},
			relativeTime: {
				future: function (e) {
					return e.replace(/(წამ|წუთ|საათ|წელ|დღ|თვ)(ი|ე)/, function (e, t, n) {
						return "ი" === n ? t + "ში" : t + n + "ში"
					})
				},
				past: function (e) {
					return /(წამი|წუთი|საათი|დღე|თვე)/.test(e) ? e.replace(/(ი|ე)$/, "ის წინ") : /წელი/.test(e) ? e.replace(/წელი$/, "წლის წინ") : e
				},
				s: "რამდენიმე წამი",
				ss: "%d წამი",
				m: "წუთი",
				mm: "%d წუთი",
				h: "საათი",
				hh: "%d საათი",
				d: "დღე",
				dd: "%d დღე",
				M: "თვე",
				MM: "%d თვე",
				y: "წელი",
				yy: "%d წელი"
			},
			dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
			ordinal: function (e) {
				return 0 === e ? e : 1 === e ? e + "-ლი" : e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? "მე-" + e : e + "-ე"
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		var t = {
			0: "-ші",
			1: "-ші",
			2: "-ші",
			3: "-ші",
			4: "-ші",
			5: "-ші",
			6: "-шы",
			7: "-ші",
			8: "-ші",
			9: "-шы",
			10: "-шы",
			20: "-шы",
			30: "-шы",
			40: "-шы",
			50: "-ші",
			60: "-шы",
			70: "-ші",
			80: "-ші",
			90: "-шы",
			100: "-ші"
		};
		e.defineLocale("kk", {
			months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),
			monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),
			weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),
			weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
			weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Бүгін сағат] LT",
				nextDay: "[Ертең сағат] LT",
				nextWeek: "dddd [сағат] LT",
				lastDay: "[Кеше сағат] LT",
				lastWeek: "[Өткен аптаның] dddd [сағат] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s ішінде",
				past: "%s бұрын",
				s: "бірнеше секунд",
				ss: "%d секунд",
				m: "бір минут",
				mm: "%d минут",
				h: "бір сағат",
				hh: "%d сағат",
				d: "бір күн",
				dd: "%d күн",
				M: "бір ай",
				MM: "%d ай",
				y: "бір жыл",
				yy: "%d жыл"
			},
			dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
			ordinal: function (e) {
				return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null])
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		var t = {
				1: "១",
				2: "២",
				3: "៣",
				4: "៤",
				5: "៥",
				6: "៦",
				7: "៧",
				8: "៨",
				9: "៩",
				0: "០"
			},
			n = {
				"១": "1",
				"២": "2",
				"៣": "3",
				"៤": "4",
				"៥": "5",
				"៦": "6",
				"៧": "7",
				"៨": "8",
				"៩": "9",
				"០": "0"
			};
		e.defineLocale("km", {
			months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
			monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
			weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
			weekdaysShort: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
			weekdaysMin: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			meridiemParse: /ព្រឹក|ល្ងាច/,
			isPM: function (e) {
				return "ល្ងាច" === e
			},
			meridiem: function (e, t, n) {
				return e < 12 ? "ព្រឹក" : "ល្ងាច"
			},
			calendar: {
				sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
				nextDay: "[ស្អែក ម៉ោង] LT",
				nextWeek: "dddd [ម៉ោង] LT",
				lastDay: "[ម្សិលមិញ ម៉ោង] LT",
				lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%sទៀត",
				past: "%sមុន",
				s: "ប៉ុន្មានវិនាទី",
				ss: "%d វិនាទី",
				m: "មួយនាទី",
				mm: "%d នាទី",
				h: "មួយម៉ោង",
				hh: "%d ម៉ោង",
				d: "មួយថ្ងៃ",
				dd: "%d ថ្ងៃ",
				M: "មួយខែ",
				MM: "%d ខែ",
				y: "មួយឆ្នាំ",
				yy: "%d ឆ្នាំ"
			},
			dayOfMonthOrdinalParse: /ទី\d{1,2}/,
			ordinal: "ទី%d",
			preparse: function (e) {
				return e.replace(/[១២៣៤៥៦៧៨៩០]/g, function (e) {
					return n[e]
				})
			},
			postformat: function (e) {
				return e.replace(/\d/g, function (e) {
					return t[e]
				})
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		var t = {
				1: "೧",
				2: "೨",
				3: "೩",
				4: "೪",
				5: "೫",
				6: "೬",
				7: "೭",
				8: "೮",
				9: "೯",
				0: "೦"
			},
			n = {
				"೧": "1",
				"೨": "2",
				"೩": "3",
				"೪": "4",
				"೫": "5",
				"೬": "6",
				"೭": "7",
				"೮": "8",
				"೯": "9",
				"೦": "0"
			};
		e.defineLocale("kn", {
			months: "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split("_"),
			monthsShort: "ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ".split("_"),
			monthsParseExact: !0,
			weekdays: "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"),
			weekdaysShort: "ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),
			weekdaysMin: "ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),
			longDateFormat: {
				LT: "A h:mm",
				LTS: "A h:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, A h:mm",
				LLLL: "dddd, D MMMM YYYY, A h:mm"
			},
			calendar: {
				sameDay: "[ಇಂದು] LT",
				nextDay: "[ನಾಳೆ] LT",
				nextWeek: "dddd, LT",
				lastDay: "[ನಿನ್ನೆ] LT",
				lastWeek: "[ಕೊನೆಯ] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s ನಂತರ",
				past: "%s ಹಿಂದೆ",
				s: "ಕೆಲವು ಕ್ಷಣಗಳು",
				ss: "%d ಸೆಕೆಂಡುಗಳು",
				m: "ಒಂದು ನಿಮಿಷ",
				mm: "%d ನಿಮಿಷ",
				h: "ಒಂದು ಗಂಟೆ",
				hh: "%d ಗಂಟೆ",
				d: "ಒಂದು ದಿನ",
				dd: "%d ದಿನ",
				M: "ಒಂದು ತಿಂಗಳು",
				MM: "%d ತಿಂಗಳು",
				y: "ಒಂದು ವರ್ಷ",
				yy: "%d ವರ್ಷ"
			},
			preparse: function (e) {
				return e.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function (e) {
					return n[e]
				})
			},
			postformat: function (e) {
				return e.replace(/\d/g, function (e) {
					return t[e]
				})
			},
			meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "ರಾತ್ರಿ" === t ? e < 4 ? e : e + 12 : "ಬೆಳಿಗ್ಗೆ" === t ? e : "ಮಧ್ಯಾಹ್ನ" === t ? e >= 10 ? e : e + 12 : "ಸಂಜೆ" === t ? e + 12 : void 0
			},
			meridiem: function (e, t, n) {
				return e < 4 ? "ರಾತ್ರಿ" : e < 10 ? "ಬೆಳಿಗ್ಗೆ" : e < 17 ? "ಮಧ್ಯಾಹ್ನ" : e < 20 ? "ಸಂಜೆ" : "ರಾತ್ರಿ"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
			ordinal: function (e) {
				return e + "ನೇ"
			},
			week: {
				dow: 0,
				doy: 6
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("ko", {
			months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
			monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
			weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
			weekdaysShort: "일_월_화_수_목_금_토".split("_"),
			weekdaysMin: "일_월_화_수_목_금_토".split("_"),
			longDateFormat: {
				LT: "A h:mm",
				LTS: "A h:mm:ss",
				L: "YYYY.MM.DD.",
				LL: "YYYY년 MMMM D일",
				LLL: "YYYY년 MMMM D일 A h:mm",
				LLLL: "YYYY년 MMMM D일 dddd A h:mm",
				l: "YYYY.MM.DD.",
				ll: "YYYY년 MMMM D일",
				lll: "YYYY년 MMMM D일 A h:mm",
				llll: "YYYY년 MMMM D일 dddd A h:mm"
			},
			calendar: {
				sameDay: "오늘 LT",
				nextDay: "내일 LT",
				nextWeek: "dddd LT",
				lastDay: "어제 LT",
				lastWeek: "지난주 dddd LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s 후",
				past: "%s 전",
				s: "몇 초",
				ss: "%d초",
				m: "1분",
				mm: "%d분",
				h: "한 시간",
				hh: "%d시간",
				d: "하루",
				dd: "%d일",
				M: "한 달",
				MM: "%d달",
				y: "일 년",
				yy: "%d년"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
			ordinal: function (e, t) {
				switch (t) {
					case "d":
					case "D":
					case "DDD":
						return e + "일";
					case "M":
						return e + "월";
					case "w":
					case "W":
						return e + "주";
					default:
						return e
				}
			},
			meridiemParse: /오전|오후/,
			isPM: function (e) {
				return "오후" === e
			},
			meridiem: function (e, t, n) {
				return e < 12 ? "오전" : "오후"
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		var t = {
				1: "١",
				2: "٢",
				3: "٣",
				4: "٤",
				5: "٥",
				6: "٦",
				7: "٧",
				8: "٨",
				9: "٩",
				0: "٠"
			},
			n = {
				"١": "1",
				"٢": "2",
				"٣": "3",
				"٤": "4",
				"٥": "5",
				"٦": "6",
				"٧": "7",
				"٨": "8",
				"٩": "9",
				"٠": "0"
			},
			r = ["کانونی دووەم", "شوبات", "ئازار", "نیسان", "ئایار", "حوزەیران", "تەمموز", "ئاب", "ئەیلوول", "تشرینی یەكەم", "تشرینی دووەم", "كانونی یەکەم"];
		e.defineLocale("ku", {
			months: r,
			monthsShort: r,
			weekdays: "یه‌كشه‌ممه‌_دووشه‌ممه‌_سێشه‌ممه‌_چوارشه‌ممه‌_پێنجشه‌ممه‌_هه‌ینی_شه‌ممه‌".split("_"),
			weekdaysShort: "یه‌كشه‌م_دووشه‌م_سێشه‌م_چوارشه‌م_پێنجشه‌م_هه‌ینی_شه‌ممه‌".split("_"),
			weekdaysMin: "ی_د_س_چ_پ_ه_ش".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			meridiemParse: /ئێواره‌|به‌یانی/,
			isPM: function (e) {
				return /ئێواره‌/.test(e)
			},
			meridiem: function (e, t, n) {
				return e < 12 ? "به‌یانی" : "ئێواره‌"
			},
			calendar: {
				sameDay: "[ئه‌مرۆ كاتژمێر] LT",
				nextDay: "[به‌یانی كاتژمێر] LT",
				nextWeek: "dddd [كاتژمێر] LT",
				lastDay: "[دوێنێ كاتژمێر] LT",
				lastWeek: "dddd [كاتژمێر] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "له‌ %s",
				past: "%s",
				s: "چه‌ند چركه‌یه‌ك",
				ss: "چركه‌ %d",
				m: "یه‌ك خوله‌ك",
				mm: "%d خوله‌ك",
				h: "یه‌ك كاتژمێر",
				hh: "%d كاتژمێر",
				d: "یه‌ك ڕۆژ",
				dd: "%d ڕۆژ",
				M: "یه‌ك مانگ",
				MM: "%d مانگ",
				y: "یه‌ك ساڵ",
				yy: "%d ساڵ"
			},
			preparse: function (e) {
				return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
					return n[e]
				}).replace(/،/g, ",")
			},
			postformat: function (e) {
				return e.replace(/\d/g, function (e) {
					return t[e]
				}).replace(/,/g, "،")
			},
			week: {
				dow: 6,
				doy: 12
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		var t = {
			0: "-чү",
			1: "-чи",
			2: "-чи",
			3: "-чү",
			4: "-чү",
			5: "-чи",
			6: "-чы",
			7: "-чи",
			8: "-чи",
			9: "-чу",
			10: "-чу",
			20: "-чы",
			30: "-чу",
			40: "-чы",
			50: "-чү",
			60: "-чы",
			70: "-чи",
			80: "-чи",
			90: "-чу",
			100: "-чү"
		};
		e.defineLocale("ky", {
			months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
			monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
			weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),
			weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
			weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Бүгүн саат] LT",
				nextDay: "[Эртең саат] LT",
				nextWeek: "dddd [саат] LT",
				lastDay: "[Кечээ саат] LT",
				lastWeek: "[Өткөн аптанын] dddd [күнү] [саат] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s ичинде",
				past: "%s мурун",
				s: "бирнече секунд",
				ss: "%d секунд",
				m: "бир мүнөт",
				mm: "%d мүнөт",
				h: "бир саат",
				hh: "%d саат",
				d: "бир күн",
				dd: "%d күн",
				M: "бир ай",
				MM: "%d ай",
				y: "бир жыл",
				yy: "%d жыл"
			},
			dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
			ordinal: function (e) {
				return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null])
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";

		function t(e, t, n, r) {
			var a = {
				m: ["eng Minutt", "enger Minutt"],
				h: ["eng Stonn", "enger Stonn"],
				d: ["een Dag", "engem Dag"],
				M: ["ee Mount", "engem Mount"],
				y: ["ee Joer", "engem Joer"]
			};
			return t ? a[n][0] : a[n][1]
		}

		function n(e) {
			if (e = parseInt(e, 10), isNaN(e)) return !1;
			if (e < 0) return !0;
			if (e < 10) return 4 <= e && e <= 7;
			if (e < 100) {
				var t = e % 10;
				return n(0 === t ? e / 10 : t)
			}
			if (e < 1e4) {
				for (; e >= 10;) e /= 10;
				return n(e)
			}
			return n(e /= 1e3)
		}
		e.defineLocale("lb", {
			months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
			monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
			monthsParseExact: !0,
			weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
			weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
			weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm [Auer]",
				LTS: "H:mm:ss [Auer]",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm [Auer]",
				LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
			},
			calendar: {
				sameDay: "[Haut um] LT",
				sameElse: "L",
				nextDay: "[Muer um] LT",
				nextWeek: "dddd [um] LT",
				lastDay: "[Gëschter um] LT",
				lastWeek: function () {
					switch (this.day()) {
						case 2:
						case 4:
							return "[Leschten] dddd [um] LT";
						default:
							return "[Leschte] dddd [um] LT"
					}
				}
			},
			relativeTime: {
				future: function (e) {
					return n(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e
				},
				past: function (e) {
					return n(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e
				},
				s: "e puer Sekonnen",
				ss: "%d Sekonnen",
				m: t,
				mm: "%d Minutten",
				h: t,
				hh: "%d Stonnen",
				d: t,
				dd: "%d Deeg",
				M: t,
				MM: "%d Méint",
				y: t,
				yy: "%d Joer"
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("lo", {
			months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
			monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
			weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
			weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
			weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "ວັນdddd D MMMM YYYY HH:mm"
			},
			meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
			isPM: function (e) {
				return "ຕອນແລງ" === e
			},
			meridiem: function (e, t, n) {
				return e < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ"
			},
			calendar: {
				sameDay: "[ມື້ນີ້ເວລາ] LT",
				nextDay: "[ມື້ອື່ນເວລາ] LT",
				nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
				lastDay: "[ມື້ວານນີ້ເວລາ] LT",
				lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "ອີກ %s",
				past: "%sຜ່ານມາ",
				s: "ບໍ່ເທົ່າໃດວິນາທີ",
				ss: "%d ວິນາທີ",
				m: "1 ນາທີ",
				mm: "%d ນາທີ",
				h: "1 ຊົ່ວໂມງ",
				hh: "%d ຊົ່ວໂມງ",
				d: "1 ມື້",
				dd: "%d ມື້",
				M: "1 ເດືອນ",
				MM: "%d ເດືອນ",
				y: "1 ປີ",
				yy: "%d ປີ"
			},
			dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
			ordinal: function (e) {
				return "ທີ່" + e
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		var t = {
			ss: "sekundė_sekundžių_sekundes",
			m: "minutė_minutės_minutę",
			mm: "minutės_minučių_minutes",
			h: "valanda_valandos_valandą",
			hh: "valandos_valandų_valandas",
			d: "diena_dienos_dieną",
			dd: "dienos_dienų_dienas",
			M: "mėnuo_mėnesio_mėnesį",
			MM: "mėnesiai_mėnesių_mėnesius",
			y: "metai_metų_metus",
			yy: "metai_metų_metus"
		};

		function n(e, t, n, r) {
			return t ? a(n)[0] : r ? a(n)[1] : a(n)[2]
		}

		function r(e) {
			return e % 10 == 0 || e > 10 && e < 20
		}

		function a(e) {
			return t[e].split("_")
		}

		function i(e, t, i, s) {
			var o = e + " ";
			return 1 === e ? o + n(0, t, i[0], s) : t ? o + (r(e) ? a(i)[1] : a(i)[0]) : s ? o + a(i)[1] : o + (r(e) ? a(i)[1] : a(i)[2])
		}
		e.defineLocale("lt", {
			months: {
				format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
				standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),
				isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
			},
			monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
			weekdays: {
				format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),
				standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
				isFormat: /dddd HH:mm/
			},
			weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
			weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY-MM-DD",
				LL: "YYYY [m.] MMMM D [d.]",
				LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
				LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
				l: "YYYY-MM-DD",
				ll: "YYYY [m.] MMMM D [d.]",
				lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
				llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
			},
			calendar: {
				sameDay: "[Šiandien] LT",
				nextDay: "[Rytoj] LT",
				nextWeek: "dddd LT",
				lastDay: "[Vakar] LT",
				lastWeek: "[Praėjusį] dddd LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "po %s",
				past: "prieš %s",
				s: function (e, t, n, r) {
					return t ? "kelios sekundės" : r ? "kelių sekundžių" : "kelias sekundes"
				},
				ss: i,
				m: n,
				mm: i,
				h: n,
				hh: i,
				d: n,
				dd: i,
				M: n,
				MM: i,
				y: n,
				yy: i
			},
			dayOfMonthOrdinalParse: /\d{1,2}-oji/,
			ordinal: function (e) {
				return e + "-oji"
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		var t = {
			ss: "sekundes_sekundēm_sekunde_sekundes".split("_"),
			m: "minūtes_minūtēm_minūte_minūtes".split("_"),
			mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
			h: "stundas_stundām_stunda_stundas".split("_"),
			hh: "stundas_stundām_stunda_stundas".split("_"),
			d: "dienas_dienām_diena_dienas".split("_"),
			dd: "dienas_dienām_diena_dienas".split("_"),
			M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
			MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
			y: "gada_gadiem_gads_gadi".split("_"),
			yy: "gada_gadiem_gads_gadi".split("_")
		};

		function n(e, t, n) {
			return n ? t % 10 == 1 && t % 100 != 11 ? e[2] : e[3] : t % 10 == 1 && t % 100 != 11 ? e[0] : e[1]
		}

		function r(e, r, a) {
			return e + " " + n(t[a], e, r)
		}

		function a(e, r, a) {
			return n(t[a], e, r)
		}
		e.defineLocale("lv", {
			months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
			monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
			weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
			weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
			weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY.",
				LL: "YYYY. [gada] D. MMMM",
				LLL: "YYYY. [gada] D. MMMM, HH:mm",
				LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
			},
			calendar: {
				sameDay: "[Šodien pulksten] LT",
				nextDay: "[Rīt pulksten] LT",
				nextWeek: "dddd [pulksten] LT",
				lastDay: "[Vakar pulksten] LT",
				lastWeek: "[Pagājušā] dddd [pulksten] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "pēc %s",
				past: "pirms %s",
				s: function (e, t) {
					return t ? "dažas sekundes" : "dažām sekundēm"
				},
				ss: r,
				m: a,
				mm: r,
				h: a,
				hh: r,
				d: a,
				dd: r,
				M: a,
				MM: r,
				y: a,
				yy: r
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		var t = {
			words: {
				ss: ["sekund", "sekunda", "sekundi"],
				m: ["jedan minut", "jednog minuta"],
				mm: ["minut", "minuta", "minuta"],
				h: ["jedan sat", "jednog sata"],
				hh: ["sat", "sata", "sati"],
				dd: ["dan", "dana", "dana"],
				MM: ["mjesec", "mjeseca", "mjeseci"],
				yy: ["godina", "godine", "godina"]
			},
			correctGrammaticalCase: function (e, t) {
				return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
			},
			translate: function (e, n, r) {
				var a = t.words[r];
				return 1 === r.length ? n ? a[0] : a[1] : e + " " + t.correctGrammaticalCase(e, a)
			}
		};
		e.defineLocale("me", {
			months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
			monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
			monthsParseExact: !0,
			weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
			weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
			weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm",
				LLLL: "dddd, D. MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[danas u] LT",
				nextDay: "[sjutra u] LT",
				nextWeek: function () {
					switch (this.day()) {
						case 0:
							return "[u] [nedjelju] [u] LT";
						case 3:
							return "[u] [srijedu] [u] LT";
						case 6:
							return "[u] [subotu] [u] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[u] dddd [u] LT"
					}
				},
				lastDay: "[juče u] LT",
				lastWeek: function () {
					return ["[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "za %s",
				past: "prije %s",
				s: "nekoliko sekundi",
				ss: t.translate,
				m: t.translate,
				mm: t.translate,
				h: t.translate,
				hh: t.translate,
				d: "dan",
				dd: t.translate,
				M: "mjesec",
				MM: t.translate,
				y: "godinu",
				yy: t.translate
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("mi", {
			months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"),
			monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),
			monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
			monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
			monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
			monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
			weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),
			weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
			weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY [i] HH:mm",
				LLLL: "dddd, D MMMM YYYY [i] HH:mm"
			},
			calendar: {
				sameDay: "[i teie mahana, i] LT",
				nextDay: "[apopo i] LT",
				nextWeek: "dddd [i] LT",
				lastDay: "[inanahi i] LT",
				lastWeek: "dddd [whakamutunga i] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "i roto i %s",
				past: "%s i mua",
				s: "te hēkona ruarua",
				ss: "%d hēkona",
				m: "he meneti",
				mm: "%d meneti",
				h: "te haora",
				hh: "%d haora",
				d: "he ra",
				dd: "%d ra",
				M: "he marama",
				MM: "%d marama",
				y: "he tau",
				yy: "%d tau"
			},
			dayOfMonthOrdinalParse: /\d{1,2}º/,
			ordinal: "%dº",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("mk", {
			months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
			monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
			weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
			weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
			weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "D.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY H:mm",
				LLLL: "dddd, D MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[Денес во] LT",
				nextDay: "[Утре во] LT",
				nextWeek: "[Во] dddd [во] LT",
				lastDay: "[Вчера во] LT",
				lastWeek: function () {
					switch (this.day()) {
						case 0:
						case 3:
						case 6:
							return "[Изминатата] dddd [во] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[Изминатиот] dddd [во] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "за %s",
				past: "пред %s",
				s: "неколку секунди",
				ss: "%d секунди",
				m: "една минута",
				mm: "%d минути",
				h: "еден час",
				hh: "%d часа",
				d: "еден ден",
				dd: "%d дена",
				M: "еден месец",
				MM: "%d месеци",
				y: "една година",
				yy: "%d години"
			},
			dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
			ordinal: function (e) {
				var t = e % 10,
					n = e % 100;
				return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && n < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("ml", {
			months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
			monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
			monthsParseExact: !0,
			weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
			weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
			weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
			longDateFormat: {
				LT: "A h:mm -നു",
				LTS: "A h:mm:ss -നു",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, A h:mm -നു",
				LLLL: "dddd, D MMMM YYYY, A h:mm -നു"
			},
			calendar: {
				sameDay: "[ഇന്ന്] LT",
				nextDay: "[നാളെ] LT",
				nextWeek: "dddd, LT",
				lastDay: "[ഇന്നലെ] LT",
				lastWeek: "[കഴിഞ്ഞ] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s കഴിഞ്ഞ്",
				past: "%s മുൻപ്",
				s: "അൽപ നിമിഷങ്ങൾ",
				ss: "%d സെക്കൻഡ്",
				m: "ഒരു മിനിറ്റ്",
				mm: "%d മിനിറ്റ്",
				h: "ഒരു മണിക്കൂർ",
				hh: "%d മണിക്കൂർ",
				d: "ഒരു ദിവസം",
				dd: "%d ദിവസം",
				M: "ഒരു മാസം",
				MM: "%d മാസം",
				y: "ഒരു വർഷം",
				yy: "%d വർഷം"
			},
			meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "രാത്രി" === t && e >= 4 || "ഉച്ച കഴിഞ്ഞ്" === t || "വൈകുന്നേരം" === t ? e + 12 : e
			},
			meridiem: function (e, t, n) {
				return e < 4 ? "രാത്രി" : e < 12 ? "രാവിലെ" : e < 17 ? "ഉച്ച കഴിഞ്ഞ്" : e < 20 ? "വൈകുന്നേരം" : "രാത്രി"
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";

		function t(e, t, n, r) {
			switch (n) {
				case "s":
					return t ? "хэдхэн секунд" : "хэдхэн секундын";
				case "ss":
					return e + (t ? " секунд" : " секундын");
				case "m":
				case "mm":
					return e + (t ? " минут" : " минутын");
				case "h":
				case "hh":
					return e + (t ? " цаг" : " цагийн");
				case "d":
				case "dd":
					return e + (t ? " өдөр" : " өдрийн");
				case "M":
				case "MM":
					return e + (t ? " сар" : " сарын");
				case "y":
				case "yy":
					return e + (t ? " жил" : " жилийн");
				default:
					return e
			}
		}
		e.defineLocale("mn", {
			months: "Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split("_"),
			monthsShort: "1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split("_"),
			monthsParseExact: !0,
			weekdays: "Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"),
			weekdaysShort: "Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"),
			weekdaysMin: "Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY-MM-DD",
				LL: "YYYY оны MMMMын D",
				LLL: "YYYY оны MMMMын D HH:mm",
				LLLL: "dddd, YYYY оны MMMMын D HH:mm"
			},
			meridiemParse: /ҮӨ|ҮХ/i,
			isPM: function (e) {
				return "ҮХ" === e
			},
			meridiem: function (e, t, n) {
				return e < 12 ? "ҮӨ" : "ҮХ"
			},
			calendar: {
				sameDay: "[Өнөөдөр] LT",
				nextDay: "[Маргааш] LT",
				nextWeek: "[Ирэх] dddd LT",
				lastDay: "[Өчигдөр] LT",
				lastWeek: "[Өнгөрсөн] dddd LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s дараа",
				past: "%s өмнө",
				s: t,
				ss: t,
				m: t,
				mm: t,
				h: t,
				hh: t,
				d: t,
				dd: t,
				M: t,
				MM: t,
				y: t,
				yy: t
			},
			dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
			ordinal: function (e, t) {
				switch (t) {
					case "d":
					case "D":
					case "DDD":
						return e + " өдөр";
					default:
						return e
				}
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		var t = {
				1: "१",
				2: "२",
				3: "३",
				4: "४",
				5: "५",
				6: "६",
				7: "७",
				8: "८",
				9: "९",
				0: "०"
			},
			n = {
				"१": "1",
				"२": "2",
				"३": "3",
				"४": "4",
				"५": "5",
				"६": "6",
				"७": "7",
				"८": "8",
				"९": "9",
				"०": "0"
			};

		function r(e, t, n, r) {
			var a = "";
			if (t) switch (n) {
				case "s":
					a = "काही सेकंद";
					break;
				case "ss":
					a = "%d सेकंद";
					break;
				case "m":
					a = "एक मिनिट";
					break;
				case "mm":
					a = "%d मिनिटे";
					break;
				case "h":
					a = "एक तास";
					break;
				case "hh":
					a = "%d तास";
					break;
				case "d":
					a = "एक दिवस";
					break;
				case "dd":
					a = "%d दिवस";
					break;
				case "M":
					a = "एक महिना";
					break;
				case "MM":
					a = "%d महिने";
					break;
				case "y":
					a = "एक वर्ष";
					break;
				case "yy":
					a = "%d वर्षे"
			} else switch (n) {
				case "s":
					a = "काही सेकंदां";
					break;
				case "ss":
					a = "%d सेकंदां";
					break;
				case "m":
					a = "एका मिनिटा";
					break;
				case "mm":
					a = "%d मिनिटां";
					break;
				case "h":
					a = "एका तासा";
					break;
				case "hh":
					a = "%d तासां";
					break;
				case "d":
					a = "एका दिवसा";
					break;
				case "dd":
					a = "%d दिवसां";
					break;
				case "M":
					a = "एका महिन्या";
					break;
				case "MM":
					a = "%d महिन्यां";
					break;
				case "y":
					a = "एका वर्षा";
					break;
				case "yy":
					a = "%d वर्षां"
			}
			return a.replace(/%d/i, e)
		}
		e.defineLocale("mr", {
			months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
			monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
			monthsParseExact: !0,
			weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
			weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
			weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
			longDateFormat: {
				LT: "A h:mm वाजता",
				LTS: "A h:mm:ss वाजता",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, A h:mm वाजता",
				LLLL: "dddd, D MMMM YYYY, A h:mm वाजता"
			},
			calendar: {
				sameDay: "[आज] LT",
				nextDay: "[उद्या] LT",
				nextWeek: "dddd, LT",
				lastDay: "[काल] LT",
				lastWeek: "[मागील] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%sमध्ये",
				past: "%sपूर्वी",
				s: r,
				ss: r,
				m: r,
				mm: r,
				h: r,
				hh: r,
				d: r,
				dd: r,
				M: r,
				MM: r,
				y: r,
				yy: r
			},
			preparse: function (e) {
				return e.replace(/[१२३४५६७८९०]/g, function (e) {
					return n[e]
				})
			},
			postformat: function (e) {
				return e.replace(/\d/g, function (e) {
					return t[e]
				})
			},
			meridiemParse: /पहाटे|सकाळी|दुपारी|सायंकाळी|रात्री/,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "पहाटे" === t || "सकाळी" === t ? e : "दुपारी" === t || "सायंकाळी" === t || "रात्री" === t ? e >= 12 ? e : e + 12 : void 0
			},
			meridiem: function (e, t, n) {
				return e >= 0 && e < 6 ? "पहाटे" : e < 12 ? "सकाळी" : e < 17 ? "दुपारी" : e < 20 ? "सायंकाळी" : "रात्री"
			},
			week: {
				dow: 0,
				doy: 6
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("ms", {
			months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
			monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
			weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
			weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
			weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
			longDateFormat: {
				LT: "HH.mm",
				LTS: "HH.mm.ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY [pukul] HH.mm",
				LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
			},
			meridiemParse: /pagi|tengahari|petang|malam/,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
			},
			meridiem: function (e, t, n) {
				return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
			},
			calendar: {
				sameDay: "[Hari ini pukul] LT",
				nextDay: "[Esok pukul] LT",
				nextWeek: "dddd [pukul] LT",
				lastDay: "[Kelmarin pukul] LT",
				lastWeek: "dddd [lepas pukul] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dalam %s",
				past: "%s yang lepas",
				s: "beberapa saat",
				ss: "%d saat",
				m: "seminit",
				mm: "%d minit",
				h: "sejam",
				hh: "%d jam",
				d: "sehari",
				dd: "%d hari",
				M: "sebulan",
				MM: "%d bulan",
				y: "setahun",
				yy: "%d tahun"
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("ms-my", {
			months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
			monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
			weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
			weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
			weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
			longDateFormat: {
				LT: "HH.mm",
				LTS: "HH.mm.ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY [pukul] HH.mm",
				LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
			},
			meridiemParse: /pagi|tengahari|petang|malam/,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
			},
			meridiem: function (e, t, n) {
				return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
			},
			calendar: {
				sameDay: "[Hari ini pukul] LT",
				nextDay: "[Esok pukul] LT",
				nextWeek: "dddd [pukul] LT",
				lastDay: "[Kelmarin pukul] LT",
				lastWeek: "dddd [lepas pukul] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dalam %s",
				past: "%s yang lepas",
				s: "beberapa saat",
				ss: "%d saat",
				m: "seminit",
				mm: "%d minit",
				h: "sejam",
				hh: "%d jam",
				d: "sehari",
				dd: "%d hari",
				M: "sebulan",
				MM: "%d bulan",
				y: "setahun",
				yy: "%d tahun"
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("mt", {
			months: "Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split("_"),
			monthsShort: "Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split("_"),
			weekdays: "Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split("_"),
			weekdaysShort: "Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"),
			weekdaysMin: "Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Illum fil-]LT",
				nextDay: "[Għada fil-]LT",
				nextWeek: "dddd [fil-]LT",
				lastDay: "[Il-bieraħ fil-]LT",
				lastWeek: "dddd [li għadda] [fil-]LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "f’ %s",
				past: "%s ilu",
				s: "ftit sekondi",
				ss: "%d sekondi",
				m: "minuta",
				mm: "%d minuti",
				h: "siegħa",
				hh: "%d siegħat",
				d: "ġurnata",
				dd: "%d ġranet",
				M: "xahar",
				MM: "%d xhur",
				y: "sena",
				yy: "%d sni"
			},
			dayOfMonthOrdinalParse: /\d{1,2}º/,
			ordinal: "%dº",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		var t = {
				1: "၁",
				2: "၂",
				3: "၃",
				4: "၄",
				5: "၅",
				6: "၆",
				7: "၇",
				8: "၈",
				9: "၉",
				0: "၀"
			},
			n = {
				"၁": "1",
				"၂": "2",
				"၃": "3",
				"၄": "4",
				"၅": "5",
				"၆": "6",
				"၇": "7",
				"၈": "8",
				"၉": "9",
				"၀": "0"
			};
		e.defineLocale("my", {
			months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),
			monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
			weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
			weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
			weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[ယနေ.] LT [မှာ]",
				nextDay: "[မနက်ဖြန်] LT [မှာ]",
				nextWeek: "dddd LT [မှာ]",
				lastDay: "[မနေ.က] LT [မှာ]",
				lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
				sameElse: "L"
			},
			relativeTime: {
				future: "လာမည့် %s မှာ",
				past: "လွန်ခဲ့သော %s က",
				s: "စက္ကန်.အနည်းငယ်",
				ss: "%d စက္ကန့်",
				m: "တစ်မိနစ်",
				mm: "%d မိနစ်",
				h: "တစ်နာရီ",
				hh: "%d နာရီ",
				d: "တစ်ရက်",
				dd: "%d ရက်",
				M: "တစ်လ",
				MM: "%d လ",
				y: "တစ်နှစ်",
				yy: "%d နှစ်"
			},
			preparse: function (e) {
				return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (e) {
					return n[e]
				})
			},
			postformat: function (e) {
				return e.replace(/\d/g, function (e) {
					return t[e]
				})
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("nb", {
			months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
			monthsShort: "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
			monthsParseExact: !0,
			weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
			weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
			weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY [kl.] HH:mm",
				LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
			},
			calendar: {
				sameDay: "[i dag kl.] LT",
				nextDay: "[i morgen kl.] LT",
				nextWeek: "dddd [kl.] LT",
				lastDay: "[i går kl.] LT",
				lastWeek: "[forrige] dddd [kl.] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "om %s",
				past: "%s siden",
				s: "noen sekunder",
				ss: "%d sekunder",
				m: "ett minutt",
				mm: "%d minutter",
				h: "en time",
				hh: "%d timer",
				d: "en dag",
				dd: "%d dager",
				w: "en uke",
				ww: "%d uker",
				M: "en måned",
				MM: "%d måneder",
				y: "ett år",
				yy: "%d år"
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		var t = {
				1: "१",
				2: "२",
				3: "३",
				4: "४",
				5: "५",
				6: "६",
				7: "७",
				8: "८",
				9: "९",
				0: "०"
			},
			n = {
				"१": "1",
				"२": "2",
				"३": "3",
				"४": "4",
				"५": "5",
				"६": "6",
				"७": "7",
				"८": "8",
				"९": "9",
				"०": "0"
			};
		e.defineLocale("ne", {
			months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
			monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
			monthsParseExact: !0,
			weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
			weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
			weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "Aको h:mm बजे",
				LTS: "Aको h:mm:ss बजे",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, Aको h:mm बजे",
				LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे"
			},
			preparse: function (e) {
				return e.replace(/[१२३४५६७८९०]/g, function (e) {
					return n[e]
				})
			},
			postformat: function (e) {
				return e.replace(/\d/g, function (e) {
					return t[e]
				})
			},
			meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "राति" === t ? e < 4 ? e : e + 12 : "बिहान" === t ? e : "दिउँसो" === t ? e >= 10 ? e : e + 12 : "साँझ" === t ? e + 12 : void 0
			},
			meridiem: function (e, t, n) {
				return e < 3 ? "राति" : e < 12 ? "बिहान" : e < 16 ? "दिउँसो" : e < 20 ? "साँझ" : "राति"
			},
			calendar: {
				sameDay: "[आज] LT",
				nextDay: "[भोलि] LT",
				nextWeek: "[आउँदो] dddd[,] LT",
				lastDay: "[हिजो] LT",
				lastWeek: "[गएको] dddd[,] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%sमा",
				past: "%s अगाडि",
				s: "केही क्षण",
				ss: "%d सेकेण्ड",
				m: "एक मिनेट",
				mm: "%d मिनेट",
				h: "एक घण्टा",
				hh: "%d घण्टा",
				d: "एक दिन",
				dd: "%d दिन",
				M: "एक महिना",
				MM: "%d महिना",
				y: "एक बर्ष",
				yy: "%d बर्ष"
			},
			week: {
				dow: 0,
				doy: 6
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
			n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
			r = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
			a = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
		e.defineLocale("nl", {
			months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
			monthsShort: function (e, r) {
				return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
			},
			monthsRegex: a,
			monthsShortRegex: a,
			monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
			monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
			monthsParse: r,
			longMonthsParse: r,
			shortMonthsParse: r,
			weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
			weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
			weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD-MM-YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[vandaag om] LT",
				nextDay: "[morgen om] LT",
				nextWeek: "dddd [om] LT",
				lastDay: "[gisteren om] LT",
				lastWeek: "[afgelopen] dddd [om] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "over %s",
				past: "%s geleden",
				s: "een paar seconden",
				ss: "%d seconden",
				m: "één minuut",
				mm: "%d minuten",
				h: "één uur",
				hh: "%d uur",
				d: "één dag",
				dd: "%d dagen",
				w: "één week",
				ww: "%d weken",
				M: "één maand",
				MM: "%d maanden",
				y: "één jaar",
				yy: "%d jaar"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
			ordinal: function (e) {
				return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
			n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
			r = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
			a = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
		e.defineLocale("nl-be", {
			months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
			monthsShort: function (e, r) {
				return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
			},
			monthsRegex: a,
			monthsShortRegex: a,
			monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
			monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
			monthsParse: r,
			longMonthsParse: r,
			shortMonthsParse: r,
			weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
			weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
			weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[vandaag om] LT",
				nextDay: "[morgen om] LT",
				nextWeek: "dddd [om] LT",
				lastDay: "[gisteren om] LT",
				lastWeek: "[afgelopen] dddd [om] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "over %s",
				past: "%s geleden",
				s: "een paar seconden",
				ss: "%d seconden",
				m: "één minuut",
				mm: "%d minuten",
				h: "één uur",
				hh: "%d uur",
				d: "één dag",
				dd: "%d dagen",
				M: "één maand",
				MM: "%d maanden",
				y: "één jaar",
				yy: "%d jaar"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
			ordinal: function (e) {
				return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("nn", {
			months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
			monthsShort: "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
			monthsParseExact: !0,
			weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
			weekdaysShort: "su._må._ty._on._to._fr._lau.".split("_"),
			weekdaysMin: "su_må_ty_on_to_fr_la".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY [kl.] H:mm",
				LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
			},
			calendar: {
				sameDay: "[I dag klokka] LT",
				nextDay: "[I morgon klokka] LT",
				nextWeek: "dddd [klokka] LT",
				lastDay: "[I går klokka] LT",
				lastWeek: "[Føregåande] dddd [klokka] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "om %s",
				past: "%s sidan",
				s: "nokre sekund",
				ss: "%d sekund",
				m: "eit minutt",
				mm: "%d minutt",
				h: "ein time",
				hh: "%d timar",
				d: "ein dag",
				dd: "%d dagar",
				w: "ei veke",
				ww: "%d veker",
				M: "ein månad",
				MM: "%d månader",
				y: "eit år",
				yy: "%d år"
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("oc-lnc", {
			months: {
				standalone: "genièr_febrièr_març_abril_mai_junh_julhet_agost_setembre_octòbre_novembre_decembre".split("_"),
				format: "de genièr_de febrièr_de març_d'abril_de mai_de junh_de julhet_d'agost_de setembre_d'octòbre_de novembre_de decembre".split("_"),
				isFormat: /D[oD]?(\s)+MMMM/
			},
			monthsShort: "gen._febr._març_abr._mai_junh_julh._ago._set._oct._nov._dec.".split("_"),
			monthsParseExact: !0,
			weekdays: "dimenge_diluns_dimars_dimècres_dijòus_divendres_dissabte".split("_"),
			weekdaysShort: "dg._dl._dm._dc._dj._dv._ds.".split("_"),
			weekdaysMin: "dg_dl_dm_dc_dj_dv_ds".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM [de] YYYY",
				ll: "D MMM YYYY",
				LLL: "D MMMM [de] YYYY [a] H:mm",
				lll: "D MMM YYYY, H:mm",
				LLLL: "dddd D MMMM [de] YYYY [a] H:mm",
				llll: "ddd D MMM YYYY, H:mm"
			},
			calendar: {
				sameDay: "[uèi a] LT",
				nextDay: "[deman a] LT",
				nextWeek: "dddd [a] LT",
				lastDay: "[ièr a] LT",
				lastWeek: "dddd [passat a] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "d'aquí %s",
				past: "fa %s",
				s: "unas segondas",
				ss: "%d segondas",
				m: "una minuta",
				mm: "%d minutas",
				h: "una ora",
				hh: "%d oras",
				d: "un jorn",
				dd: "%d jorns",
				M: "un mes",
				MM: "%d meses",
				y: "un an",
				yy: "%d ans"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
			ordinal: function (e, t) {
				var n = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
				return "w" !== t && "W" !== t || (n = "a"), e + n
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		var t = {
				1: "੧",
				2: "੨",
				3: "੩",
				4: "੪",
				5: "੫",
				6: "੬",
				7: "੭",
				8: "੮",
				9: "੯",
				0: "੦"
			},
			n = {
				"੧": "1",
				"੨": "2",
				"੩": "3",
				"੪": "4",
				"੫": "5",
				"੬": "6",
				"੭": "7",
				"੮": "8",
				"੯": "9",
				"੦": "0"
			};
		e.defineLocale("pa-in", {
			months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
			monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
			weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),
			weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
			weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
			longDateFormat: {
				LT: "A h:mm ਵਜੇ",
				LTS: "A h:mm:ss ਵਜੇ",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
				LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ"
			},
			calendar: {
				sameDay: "[ਅਜ] LT",
				nextDay: "[ਕਲ] LT",
				nextWeek: "[ਅਗਲਾ] dddd, LT",
				lastDay: "[ਕਲ] LT",
				lastWeek: "[ਪਿਛਲੇ] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s ਵਿੱਚ",
				past: "%s ਪਿਛਲੇ",
				s: "ਕੁਝ ਸਕਿੰਟ",
				ss: "%d ਸਕਿੰਟ",
				m: "ਇਕ ਮਿੰਟ",
				mm: "%d ਮਿੰਟ",
				h: "ਇੱਕ ਘੰਟਾ",
				hh: "%d ਘੰਟੇ",
				d: "ਇੱਕ ਦਿਨ",
				dd: "%d ਦਿਨ",
				M: "ਇੱਕ ਮਹੀਨਾ",
				MM: "%d ਮਹੀਨੇ",
				y: "ਇੱਕ ਸਾਲ",
				yy: "%d ਸਾਲ"
			},
			preparse: function (e) {
				return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function (e) {
					return n[e]
				})
			},
			postformat: function (e) {
				return e.replace(/\d/g, function (e) {
					return t[e]
				})
			},
			meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "ਰਾਤ" === t ? e < 4 ? e : e + 12 : "ਸਵੇਰ" === t ? e : "ਦੁਪਹਿਰ" === t ? e >= 10 ? e : e + 12 : "ਸ਼ਾਮ" === t ? e + 12 : void 0
			},
			meridiem: function (e, t, n) {
				return e < 4 ? "ਰਾਤ" : e < 10 ? "ਸਵੇਰ" : e < 17 ? "ਦੁਪਹਿਰ" : e < 20 ? "ਸ਼ਾਮ" : "ਰਾਤ"
			},
			week: {
				dow: 0,
				doy: 6
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		var t = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
			n = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),
			r = [/^sty/i, /^lut/i, /^mar/i, /^kwi/i, /^maj/i, /^cze/i, /^lip/i, /^sie/i, /^wrz/i, /^paź/i, /^lis/i, /^gru/i];

		function a(e) {
			return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1
		}

		function i(e, t, n) {
			var r = e + " ";
			switch (n) {
				case "ss":
					return r + (a(e) ? "sekundy" : "sekund");
				case "m":
					return t ? "minuta" : "minutę";
				case "mm":
					return r + (a(e) ? "minuty" : "minut");
				case "h":
					return t ? "godzina" : "godzinę";
				case "hh":
					return r + (a(e) ? "godziny" : "godzin");
				case "ww":
					return r + (a(e) ? "tygodnie" : "tygodni");
				case "MM":
					return r + (a(e) ? "miesiące" : "miesięcy");
				case "yy":
					return r + (a(e) ? "lata" : "lat")
			}
		}
		e.defineLocale("pl", {
			months: function (e, r) {
				return e ? /D MMMM/.test(r) ? n[e.month()] : t[e.month()] : t
			},
			monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
			monthsParse: r,
			longMonthsParse: r,
			shortMonthsParse: r,
			weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
			weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
			weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Dziś o] LT",
				nextDay: "[Jutro o] LT",
				nextWeek: function () {
					switch (this.day()) {
						case 0:
							return "[W niedzielę o] LT";
						case 2:
							return "[We wtorek o] LT";
						case 3:
							return "[W środę o] LT";
						case 6:
							return "[W sobotę o] LT";
						default:
							return "[W] dddd [o] LT"
					}
				},
				lastDay: "[Wczoraj o] LT",
				lastWeek: function () {
					switch (this.day()) {
						case 0:
							return "[W zeszłą niedzielę o] LT";
						case 3:
							return "[W zeszłą środę o] LT";
						case 6:
							return "[W zeszłą sobotę o] LT";
						default:
							return "[W zeszły] dddd [o] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "za %s",
				past: "%s temu",
				s: "kilka sekund",
				ss: i,
				m: i,
				mm: i,
				h: i,
				hh: i,
				d: "1 dzień",
				dd: "%d dni",
				w: "tydzień",
				ww: i,
				M: "miesiąc",
				MM: i,
				y: "rok",
				yy: i
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("pt", {
			months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
			monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
			weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
			weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
			weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D [de] MMMM [de] YYYY",
				LLL: "D [de] MMMM [de] YYYY HH:mm",
				LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Hoje às] LT",
				nextDay: "[Amanhã às] LT",
				nextWeek: "dddd [às] LT",
				lastDay: "[Ontem às] LT",
				lastWeek: function () {
					return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "em %s",
				past: "há %s",
				s: "segundos",
				ss: "%d segundos",
				m: "um minuto",
				mm: "%d minutos",
				h: "uma hora",
				hh: "%d horas",
				d: "um dia",
				dd: "%d dias",
				w: "uma semana",
				ww: "%d semanas",
				M: "um mês",
				MM: "%d meses",
				y: "um ano",
				yy: "%d anos"
			},
			dayOfMonthOrdinalParse: /\d{1,2}º/,
			ordinal: "%dº",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("pt-br", {
			months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
			monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
			weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"),
			weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"),
			weekdaysMin: "do_2ª_3ª_4ª_5ª_6ª_sá".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D [de] MMMM [de] YYYY",
				LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
				LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
			},
			calendar: {
				sameDay: "[Hoje às] LT",
				nextDay: "[Amanhã às] LT",
				nextWeek: "dddd [às] LT",
				lastDay: "[Ontem às] LT",
				lastWeek: function () {
					return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "em %s",
				past: "há %s",
				s: "poucos segundos",
				ss: "%d segundos",
				m: "um minuto",
				mm: "%d minutos",
				h: "uma hora",
				hh: "%d horas",
				d: "um dia",
				dd: "%d dias",
				M: "um mês",
				MM: "%d meses",
				y: "um ano",
				yy: "%d anos"
			},
			dayOfMonthOrdinalParse: /\d{1,2}º/,
			ordinal: "%dº",
			invalidDate: "Data inválida"
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";

		function t(e, t, n) {
			var r = " ";
			return (e % 100 >= 20 || e >= 100 && e % 100 == 0) && (r = " de "), e + r + {
				ss: "secunde",
				mm: "minute",
				hh: "ore",
				dd: "zile",
				ww: "săptămâni",
				MM: "luni",
				yy: "ani"
			}[n]
		}
		e.defineLocale("ro", {
			months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
			monthsShort: "ian._feb._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
			monthsParseExact: !0,
			weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
			weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
			weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY H:mm",
				LLLL: "dddd, D MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[azi la] LT",
				nextDay: "[mâine la] LT",
				nextWeek: "dddd [la] LT",
				lastDay: "[ieri la] LT",
				lastWeek: "[fosta] dddd [la] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "peste %s",
				past: "%s în urmă",
				s: "câteva secunde",
				ss: t,
				m: "un minut",
				mm: t,
				h: "o oră",
				hh: t,
				d: "o zi",
				dd: t,
				w: "o săptămână",
				ww: t,
				M: "o lună",
				MM: t,
				y: "un an",
				yy: t
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";

		function t(e, t, n) {
			var r, a;
			return "m" === n ? t ? "минута" : "минуту" : e + " " + (r = +e, a = {
				ss: t ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
				mm: t ? "минута_минуты_минут" : "минуту_минуты_минут",
				hh: "час_часа_часов",
				dd: "день_дня_дней",
				ww: "неделя_недели_недель",
				MM: "месяц_месяца_месяцев",
				yy: "год_года_лет"
			}[n].split("_"), r % 10 == 1 && r % 100 != 11 ? a[0] : r % 10 >= 2 && r % 10 <= 4 && (r % 100 < 10 || r % 100 >= 20) ? a[1] : a[2])
		}
		var n = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
		e.defineLocale("ru", {
			months: {
				format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
				standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
			},
			monthsShort: {
				format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
				standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
			},
			weekdays: {
				standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
				format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
				isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?] ?dddd/
			},
			weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
			weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
			monthsParse: n,
			longMonthsParse: n,
			shortMonthsParse: n,
			monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
			monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
			monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
			monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY г.",
				LLL: "D MMMM YYYY г., H:mm",
				LLLL: "dddd, D MMMM YYYY г., H:mm"
			},
			calendar: {
				sameDay: "[Сегодня, в] LT",
				nextDay: "[Завтра, в] LT",
				lastDay: "[Вчера, в] LT",
				nextWeek: function (e) {
					if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
					switch (this.day()) {
						case 0:
							return "[В следующее] dddd, [в] LT";
						case 1:
						case 2:
						case 4:
							return "[В следующий] dddd, [в] LT";
						case 3:
						case 5:
						case 6:
							return "[В следующую] dddd, [в] LT"
					}
				},
				lastWeek: function (e) {
					if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
					switch (this.day()) {
						case 0:
							return "[В прошлое] dddd, [в] LT";
						case 1:
						case 2:
						case 4:
							return "[В прошлый] dddd, [в] LT";
						case 3:
						case 5:
						case 6:
							return "[В прошлую] dddd, [в] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "через %s",
				past: "%s назад",
				s: "несколько секунд",
				ss: t,
				m: t,
				mm: t,
				h: "час",
				hh: t,
				d: "день",
				dd: t,
				w: "неделя",
				ww: t,
				M: "месяц",
				MM: t,
				y: "год",
				yy: t
			},
			meridiemParse: /ночи|утра|дня|вечера/i,
			isPM: function (e) {
				return /^(дня|вечера)$/.test(e)
			},
			meridiem: function (e, t, n) {
				return e < 4 ? "ночи" : e < 12 ? "утра" : e < 17 ? "дня" : "вечера"
			},
			dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
			ordinal: function (e, t) {
				switch (t) {
					case "M":
					case "d":
					case "DDD":
						return e + "-й";
					case "D":
						return e + "-го";
					case "w":
					case "W":
						return e + "-я";
					default:
						return e
				}
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		var t = ["جنوري", "فيبروري", "مارچ", "اپريل", "مئي", "جون", "جولاءِ", "آگسٽ", "سيپٽمبر", "آڪٽوبر", "نومبر", "ڊسمبر"],
			n = ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"];
		e.defineLocale("sd", {
			months: t,
			monthsShort: t,
			weekdays: n,
			weekdaysShort: n,
			weekdaysMin: n,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd، D MMMM YYYY HH:mm"
			},
			meridiemParse: /صبح|شام/,
			isPM: function (e) {
				return "شام" === e
			},
			meridiem: function (e, t, n) {
				return e < 12 ? "صبح" : "شام"
			},
			calendar: {
				sameDay: "[اڄ] LT",
				nextDay: "[سڀاڻي] LT",
				nextWeek: "dddd [اڳين هفتي تي] LT",
				lastDay: "[ڪالهه] LT",
				lastWeek: "[گزريل هفتي] dddd [تي] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s پوء",
				past: "%s اڳ",
				s: "چند سيڪنڊ",
				ss: "%d سيڪنڊ",
				m: "هڪ منٽ",
				mm: "%d منٽ",
				h: "هڪ ڪلاڪ",
				hh: "%d ڪلاڪ",
				d: "هڪ ڏينهن",
				dd: "%d ڏينهن",
				M: "هڪ مهينو",
				MM: "%d مهينا",
				y: "هڪ سال",
				yy: "%d سال"
			},
			preparse: function (e) {
				return e.replace(/،/g, ",")
			},
			postformat: function (e) {
				return e.replace(/,/g, "،")
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("se", {
			months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),
			monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),
			weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),
			weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
			weekdaysMin: "s_v_m_g_d_b_L".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "MMMM D. [b.] YYYY",
				LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
				LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
			},
			calendar: {
				sameDay: "[otne ti] LT",
				nextDay: "[ihttin ti] LT",
				nextWeek: "dddd [ti] LT",
				lastDay: "[ikte ti] LT",
				lastWeek: "[ovddit] dddd [ti] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s geažes",
				past: "maŋit %s",
				s: "moadde sekunddat",
				ss: "%d sekunddat",
				m: "okta minuhta",
				mm: "%d minuhtat",
				h: "okta diimmu",
				hh: "%d diimmut",
				d: "okta beaivi",
				dd: "%d beaivvit",
				M: "okta mánnu",
				MM: "%d mánut",
				y: "okta jahki",
				yy: "%d jagit"
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("si", {
			months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),
			monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
			weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),
			weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
			weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "a h:mm",
				LTS: "a h:mm:ss",
				L: "YYYY/MM/DD",
				LL: "YYYY MMMM D",
				LLL: "YYYY MMMM D, a h:mm",
				LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss"
			},
			calendar: {
				sameDay: "[අද] LT[ට]",
				nextDay: "[හෙට] LT[ට]",
				nextWeek: "dddd LT[ට]",
				lastDay: "[ඊයේ] LT[ට]",
				lastWeek: "[පසුගිය] dddd LT[ට]",
				sameElse: "L"
			},
			relativeTime: {
				future: "%sකින්",
				past: "%sකට පෙර",
				s: "තත්පර කිහිපය",
				ss: "තත්පර %d",
				m: "මිනිත්තුව",
				mm: "මිනිත්තු %d",
				h: "පැය",
				hh: "පැය %d",
				d: "දිනය",
				dd: "දින %d",
				M: "මාසය",
				MM: "මාස %d",
				y: "වසර",
				yy: "වසර %d"
			},
			dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
			ordinal: function (e) {
				return e + " වැනි"
			},
			meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
			isPM: function (e) {
				return "ප.ව." === e || "පස් වරු" === e
			},
			meridiem: function (e, t, n) {
				return e > 11 ? n ? "ප.ව." : "පස් වරු" : n ? "පෙ.ව." : "පෙර වරු"
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		var t = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),
			n = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");

		function r(e) {
			return e > 1 && e < 5
		}

		function a(e, t, n, a) {
			var i = e + " ";
			switch (n) {
				case "s":
					return t || a ? "pár sekúnd" : "pár sekundami";
				case "ss":
					return t || a ? i + (r(e) ? "sekundy" : "sekúnd") : i + "sekundami";
				case "m":
					return t ? "minúta" : a ? "minútu" : "minútou";
				case "mm":
					return t || a ? i + (r(e) ? "minúty" : "minút") : i + "minútami";
				case "h":
					return t ? "hodina" : a ? "hodinu" : "hodinou";
				case "hh":
					return t || a ? i + (r(e) ? "hodiny" : "hodín") : i + "hodinami";
				case "d":
					return t || a ? "deň" : "dňom";
				case "dd":
					return t || a ? i + (r(e) ? "dni" : "dní") : i + "dňami";
				case "M":
					return t || a ? "mesiac" : "mesiacom";
				case "MM":
					return t || a ? i + (r(e) ? "mesiace" : "mesiacov") : i + "mesiacmi";
				case "y":
					return t || a ? "rok" : "rokom";
				case "yy":
					return t || a ? i + (r(e) ? "roky" : "rokov") : i + "rokmi"
			}
		}
		e.defineLocale("sk", {
			months: t,
			monthsShort: n,
			weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
			weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
			weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm",
				LLLL: "dddd D. MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[dnes o] LT",
				nextDay: "[zajtra o] LT",
				nextWeek: function () {
					switch (this.day()) {
						case 0:
							return "[v nedeľu o] LT";
						case 1:
						case 2:
							return "[v] dddd [o] LT";
						case 3:
							return "[v stredu o] LT";
						case 4:
							return "[vo štvrtok o] LT";
						case 5:
							return "[v piatok o] LT";
						case 6:
							return "[v sobotu o] LT"
					}
				},
				lastDay: "[včera o] LT",
				lastWeek: function () {
					switch (this.day()) {
						case 0:
							return "[minulú nedeľu o] LT";
						case 1:
						case 2:
							return "[minulý] dddd [o] LT";
						case 3:
							return "[minulú stredu o] LT";
						case 4:
						case 5:
							return "[minulý] dddd [o] LT";
						case 6:
							return "[minulú sobotu o] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "za %s",
				past: "pred %s",
				s: a,
				ss: a,
				m: a,
				mm: a,
				h: a,
				hh: a,
				d: a,
				dd: a,
				M: a,
				MM: a,
				y: a,
				yy: a
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";

		function t(e, t, n, r) {
			var a = e + " ";
			switch (n) {
				case "s":
					return t || r ? "nekaj sekund" : "nekaj sekundami";
				case "ss":
					return a += 1 === e ? t ? "sekundo" : "sekundi" : 2 === e ? t || r ? "sekundi" : "sekundah" : e < 5 ? t || r ? "sekunde" : "sekundah" : "sekund";
				case "m":
					return t ? "ena minuta" : "eno minuto";
				case "mm":
					return a += 1 === e ? t ? "minuta" : "minuto" : 2 === e ? t || r ? "minuti" : "minutama" : e < 5 ? t || r ? "minute" : "minutami" : t || r ? "minut" : "minutami";
				case "h":
					return t ? "ena ura" : "eno uro";
				case "hh":
					return a += 1 === e ? t ? "ura" : "uro" : 2 === e ? t || r ? "uri" : "urama" : e < 5 ? t || r ? "ure" : "urami" : t || r ? "ur" : "urami";
				case "d":
					return t || r ? "en dan" : "enim dnem";
				case "dd":
					return a += 1 === e ? t || r ? "dan" : "dnem" : 2 === e ? t || r ? "dni" : "dnevoma" : t || r ? "dni" : "dnevi";
				case "M":
					return t || r ? "en mesec" : "enim mesecem";
				case "MM":
					return a += 1 === e ? t || r ? "mesec" : "mesecem" : 2 === e ? t || r ? "meseca" : "mesecema" : e < 5 ? t || r ? "mesece" : "meseci" : t || r ? "mesecev" : "meseci";
				case "y":
					return t || r ? "eno leto" : "enim letom";
				case "yy":
					return a += 1 === e ? t || r ? "leto" : "letom" : 2 === e ? t || r ? "leti" : "letoma" : e < 5 ? t || r ? "leta" : "leti" : t || r ? "let" : "leti"
			}
		}
		e.defineLocale("sl", {
			months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
			monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
			monthsParseExact: !0,
			weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
			weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
			weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD. MM. YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm",
				LLLL: "dddd, D. MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[danes ob] LT",
				nextDay: "[jutri ob] LT",
				nextWeek: function () {
					switch (this.day()) {
						case 0:
							return "[v] [nedeljo] [ob] LT";
						case 3:
							return "[v] [sredo] [ob] LT";
						case 6:
							return "[v] [soboto] [ob] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[v] dddd [ob] LT"
					}
				},
				lastDay: "[včeraj ob] LT",
				lastWeek: function () {
					switch (this.day()) {
						case 0:
							return "[prejšnjo] [nedeljo] [ob] LT";
						case 3:
							return "[prejšnjo] [sredo] [ob] LT";
						case 6:
							return "[prejšnjo] [soboto] [ob] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[prejšnji] dddd [ob] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "čez %s",
				past: "pred %s",
				s: t,
				ss: t,
				m: t,
				mm: t,
				h: t,
				hh: t,
				d: t,
				dd: t,
				M: t,
				MM: t,
				y: t,
				yy: t
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("sq", {
			months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
			monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
			weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),
			weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
			weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
			weekdaysParseExact: !0,
			meridiemParse: /PD|MD/,
			isPM: function (e) {
				return "M" === e.charAt(0)
			},
			meridiem: function (e, t, n) {
				return e < 12 ? "PD" : "MD"
			},
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Sot në] LT",
				nextDay: "[Nesër në] LT",
				nextWeek: "dddd [në] LT",
				lastDay: "[Dje në] LT",
				lastWeek: "dddd [e kaluar në] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "në %s",
				past: "%s më parë",
				s: "disa sekonda",
				ss: "%d sekonda",
				m: "një minutë",
				mm: "%d minuta",
				h: "një orë",
				hh: "%d orë",
				d: "një ditë",
				dd: "%d ditë",
				M: "një muaj",
				MM: "%d muaj",
				y: "një vit",
				yy: "%d vite"
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		var t = {
			words: {
				ss: ["sekunda", "sekunde", "sekundi"],
				m: ["jedan minut", "jedne minute"],
				mm: ["minut", "minute", "minuta"],
				h: ["jedan sat", "jednog sata"],
				hh: ["sat", "sata", "sati"],
				dd: ["dan", "dana", "dana"],
				MM: ["mesec", "meseca", "meseci"],
				yy: ["godina", "godine", "godina"]
			},
			correctGrammaticalCase: function (e, t) {
				return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
			},
			translate: function (e, n, r) {
				var a = t.words[r];
				return 1 === r.length ? n ? a[0] : a[1] : e + " " + t.correctGrammaticalCase(e, a)
			}
		};
		e.defineLocale("sr", {
			months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
			monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
			monthsParseExact: !0,
			weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),
			weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
			weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "D. M. YYYY.",
				LL: "D. MMMM YYYY.",
				LLL: "D. MMMM YYYY. H:mm",
				LLLL: "dddd, D. MMMM YYYY. H:mm"
			},
			calendar: {
				sameDay: "[danas u] LT",
				nextDay: "[sutra u] LT",
				nextWeek: function () {
					switch (this.day()) {
						case 0:
							return "[u] [nedelju] [u] LT";
						case 3:
							return "[u] [sredu] [u] LT";
						case 6:
							return "[u] [subotu] [u] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[u] dddd [u] LT"
					}
				},
				lastDay: "[juče u] LT",
				lastWeek: function () {
					return ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "za %s",
				past: "pre %s",
				s: "nekoliko sekundi",
				ss: t.translate,
				m: t.translate,
				mm: t.translate,
				h: t.translate,
				hh: t.translate,
				d: "dan",
				dd: t.translate,
				M: "mesec",
				MM: t.translate,
				y: "godinu",
				yy: t.translate
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		var t = {
			words: {
				ss: ["секунда", "секунде", "секунди"],
				m: ["један минут", "једне минуте"],
				mm: ["минут", "минуте", "минута"],
				h: ["један сат", "једног сата"],
				hh: ["сат", "сата", "сати"],
				dd: ["дан", "дана", "дана"],
				MM: ["месец", "месеца", "месеци"],
				yy: ["година", "године", "година"]
			},
			correctGrammaticalCase: function (e, t) {
				return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
			},
			translate: function (e, n, r) {
				var a = t.words[r];
				return 1 === r.length ? n ? a[0] : a[1] : e + " " + t.correctGrammaticalCase(e, a)
			}
		};
		e.defineLocale("sr-cyrl", {
			months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),
			monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),
			monthsParseExact: !0,
			weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),
			weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
			weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "D. M. YYYY.",
				LL: "D. MMMM YYYY.",
				LLL: "D. MMMM YYYY. H:mm",
				LLLL: "dddd, D. MMMM YYYY. H:mm"
			},
			calendar: {
				sameDay: "[данас у] LT",
				nextDay: "[сутра у] LT",
				nextWeek: function () {
					switch (this.day()) {
						case 0:
							return "[у] [недељу] [у] LT";
						case 3:
							return "[у] [среду] [у] LT";
						case 6:
							return "[у] [суботу] [у] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[у] dddd [у] LT"
					}
				},
				lastDay: "[јуче у] LT",
				lastWeek: function () {
					return ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"][this.day()]
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "за %s",
				past: "пре %s",
				s: "неколико секунди",
				ss: t.translate,
				m: t.translate,
				mm: t.translate,
				h: t.translate,
				hh: t.translate,
				d: "дан",
				dd: t.translate,
				M: "месец",
				MM: t.translate,
				y: "годину",
				yy: t.translate
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("ss", {
			months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
			monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
			weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
			weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
			weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY h:mm A",
				LLLL: "dddd, D MMMM YYYY h:mm A"
			},
			calendar: {
				sameDay: "[Namuhla nga] LT",
				nextDay: "[Kusasa nga] LT",
				nextWeek: "dddd [nga] LT",
				lastDay: "[Itolo nga] LT",
				lastWeek: "dddd [leliphelile] [nga] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "nga %s",
				past: "wenteka nga %s",
				s: "emizuzwana lomcane",
				ss: "%d mzuzwana",
				m: "umzuzu",
				mm: "%d emizuzu",
				h: "lihora",
				hh: "%d emahora",
				d: "lilanga",
				dd: "%d emalanga",
				M: "inyanga",
				MM: "%d tinyanga",
				y: "umnyaka",
				yy: "%d iminyaka"
			},
			meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
			meridiem: function (e, t, n) {
				return e < 11 ? "ekuseni" : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku"
			},
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "ekuseni" === t ? e : "emini" === t ? e >= 11 ? e : e + 12 : "entsambama" === t || "ebusuku" === t ? 0 === e ? 0 : e + 12 : void 0
			},
			dayOfMonthOrdinalParse: /\d{1,2}/,
			ordinal: "%d",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("sv", {
			months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
			monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
			weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
			weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
			weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY-MM-DD",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY [kl.] HH:mm",
				LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
				lll: "D MMM YYYY HH:mm",
				llll: "ddd D MMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Idag] LT",
				nextDay: "[Imorgon] LT",
				lastDay: "[Igår] LT",
				nextWeek: "[På] dddd LT",
				lastWeek: "[I] dddd[s] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "om %s",
				past: "för %s sedan",
				s: "några sekunder",
				ss: "%d sekunder",
				m: "en minut",
				mm: "%d minuter",
				h: "en timme",
				hh: "%d timmar",
				d: "en dag",
				dd: "%d dagar",
				M: "en månad",
				MM: "%d månader",
				y: "ett år",
				yy: "%d år"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(\:e|\:a)/,
			ordinal: function (e) {
				var t = e % 10;
				return e + (1 == ~~(e % 100 / 10) ? ":e" : 1 === t ? ":a" : 2 === t ? ":a" : ":e")
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("sw", {
			months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
			monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
			weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
			weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
			weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "hh:mm A",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[leo saa] LT",
				nextDay: "[kesho saa] LT",
				nextWeek: "[wiki ijayo] dddd [saat] LT",
				lastDay: "[jana] LT",
				lastWeek: "[wiki iliyopita] dddd [saat] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s baadaye",
				past: "tokea %s",
				s: "hivi punde",
				ss: "sekunde %d",
				m: "dakika moja",
				mm: "dakika %d",
				h: "saa limoja",
				hh: "masaa %d",
				d: "siku moja",
				dd: "siku %d",
				M: "mwezi mmoja",
				MM: "miezi %d",
				y: "mwaka mmoja",
				yy: "miaka %d"
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		var t = {
				1: "௧",
				2: "௨",
				3: "௩",
				4: "௪",
				5: "௫",
				6: "௬",
				7: "௭",
				8: "௮",
				9: "௯",
				0: "௦"
			},
			n = {
				"௧": "1",
				"௨": "2",
				"௩": "3",
				"௪": "4",
				"௫": "5",
				"௬": "6",
				"௭": "7",
				"௮": "8",
				"௯": "9",
				"௦": "0"
			};
		e.defineLocale("ta", {
			months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
			monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
			weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
			weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
			weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, HH:mm",
				LLLL: "dddd, D MMMM YYYY, HH:mm"
			},
			calendar: {
				sameDay: "[இன்று] LT",
				nextDay: "[நாளை] LT",
				nextWeek: "dddd, LT",
				lastDay: "[நேற்று] LT",
				lastWeek: "[கடந்த வாரம்] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s இல்",
				past: "%s முன்",
				s: "ஒரு சில விநாடிகள்",
				ss: "%d விநாடிகள்",
				m: "ஒரு நிமிடம்",
				mm: "%d நிமிடங்கள்",
				h: "ஒரு மணி நேரம்",
				hh: "%d மணி நேரம்",
				d: "ஒரு நாள்",
				dd: "%d நாட்கள்",
				M: "ஒரு மாதம்",
				MM: "%d மாதங்கள்",
				y: "ஒரு வருடம்",
				yy: "%d ஆண்டுகள்"
			},
			dayOfMonthOrdinalParse: /\d{1,2}வது/,
			ordinal: function (e) {
				return e + "வது"
			},
			preparse: function (e) {
				return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (e) {
					return n[e]
				})
			},
			postformat: function (e) {
				return e.replace(/\d/g, function (e) {
					return t[e]
				})
			},
			meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
			meridiem: function (e, t, n) {
				return e < 2 ? " யாமம்" : e < 6 ? " வைகறை" : e < 10 ? " காலை" : e < 14 ? " நண்பகல்" : e < 18 ? " எற்பாடு" : e < 22 ? " மாலை" : " யாமம்"
			},
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "யாமம்" === t ? e < 2 ? e : e + 12 : "வைகறை" === t || "காலை" === t ? e : "நண்பகல்" === t && e >= 10 ? e : e + 12
			},
			week: {
				dow: 0,
				doy: 6
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("te", {
			months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),
			monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),
			monthsParseExact: !0,
			weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),
			weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
			weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
			longDateFormat: {
				LT: "A h:mm",
				LTS: "A h:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, A h:mm",
				LLLL: "dddd, D MMMM YYYY, A h:mm"
			},
			calendar: {
				sameDay: "[నేడు] LT",
				nextDay: "[రేపు] LT",
				nextWeek: "dddd, LT",
				lastDay: "[నిన్న] LT",
				lastWeek: "[గత] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s లో",
				past: "%s క్రితం",
				s: "కొన్ని క్షణాలు",
				ss: "%d సెకన్లు",
				m: "ఒక నిమిషం",
				mm: "%d నిమిషాలు",
				h: "ఒక గంట",
				hh: "%d గంటలు",
				d: "ఒక రోజు",
				dd: "%d రోజులు",
				M: "ఒక నెల",
				MM: "%d నెలలు",
				y: "ఒక సంవత్సరం",
				yy: "%d సంవత్సరాలు"
			},
			dayOfMonthOrdinalParse: /\d{1,2}వ/,
			ordinal: "%dవ",
			meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "రాత్రి" === t ? e < 4 ? e : e + 12 : "ఉదయం" === t ? e : "మధ్యాహ్నం" === t ? e >= 10 ? e : e + 12 : "సాయంత్రం" === t ? e + 12 : void 0
			},
			meridiem: function (e, t, n) {
				return e < 4 ? "రాత్రి" : e < 10 ? "ఉదయం" : e < 17 ? "మధ్యాహ్నం" : e < 20 ? "సాయంత్రం" : "రాత్రి"
			},
			week: {
				dow: 0,
				doy: 6
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("tet", {
			months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"),
			monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
			weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"),
			weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),
			weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Ohin iha] LT",
				nextDay: "[Aban iha] LT",
				nextWeek: "dddd [iha] LT",
				lastDay: "[Horiseik iha] LT",
				lastWeek: "dddd [semana kotuk] [iha] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "iha %s",
				past: "%s liuba",
				s: "segundu balun",
				ss: "segundu %d",
				m: "minutu ida",
				mm: "minutu %d",
				h: "oras ida",
				hh: "oras %d",
				d: "loron ida",
				dd: "loron %d",
				M: "fulan ida",
				MM: "fulan %d",
				y: "tinan ida",
				yy: "tinan %d"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function (e) {
				var t = e % 10;
				return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		var t = {
			0: "-ум",
			1: "-ум",
			2: "-юм",
			3: "-юм",
			4: "-ум",
			5: "-ум",
			6: "-ум",
			7: "-ум",
			8: "-ум",
			9: "-ум",
			10: "-ум",
			12: "-ум",
			13: "-ум",
			20: "-ум",
			30: "-юм",
			40: "-ум",
			50: "-ум",
			60: "-ум",
			70: "-ум",
			80: "-ум",
			90: "-ум",
			100: "-ум"
		};
		e.defineLocale("tg", {
			months: {
				format: "январи_феврали_марти_апрели_майи_июни_июли_августи_сентябри_октябри_ноябри_декабри".split("_"),
				standalone: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_")
			},
			monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
			weekdays: "якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе".split("_"),
			weekdaysShort: "яшб_дшб_сшб_чшб_пшб_ҷум_шнб".split("_"),
			weekdaysMin: "яш_дш_сш_чш_пш_ҷм_шб".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Имрӯз соати] LT",
				nextDay: "[Фардо соати] LT",
				lastDay: "[Дирӯз соати] LT",
				nextWeek: "dddd[и] [ҳафтаи оянда соати] LT",
				lastWeek: "dddd[и] [ҳафтаи гузашта соати] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "баъди %s",
				past: "%s пеш",
				s: "якчанд сония",
				m: "як дақиқа",
				mm: "%d дақиқа",
				h: "як соат",
				hh: "%d соат",
				d: "як рӯз",
				dd: "%d рӯз",
				M: "як моҳ",
				MM: "%d моҳ",
				y: "як сол",
				yy: "%d сол"
			},
			meridiemParse: /шаб|субҳ|рӯз|бегоҳ/,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "шаб" === t ? e < 4 ? e : e + 12 : "субҳ" === t ? e : "рӯз" === t ? e >= 11 ? e : e + 12 : "бегоҳ" === t ? e + 12 : void 0
			},
			meridiem: function (e, t, n) {
				return e < 4 ? "шаб" : e < 11 ? "субҳ" : e < 16 ? "рӯз" : e < 19 ? "бегоҳ" : "шаб"
			},
			dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/,
			ordinal: function (e) {
				return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null])
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("th", {
			months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
			monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),
			monthsParseExact: !0,
			weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
			weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
			weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY เวลา H:mm",
				LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm"
			},
			meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
			isPM: function (e) {
				return "หลังเที่ยง" === e
			},
			meridiem: function (e, t, n) {
				return e < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง"
			},
			calendar: {
				sameDay: "[วันนี้ เวลา] LT",
				nextDay: "[พรุ่งนี้ เวลา] LT",
				nextWeek: "dddd[หน้า เวลา] LT",
				lastDay: "[เมื่อวานนี้ เวลา] LT",
				lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "อีก %s",
				past: "%sที่แล้ว",
				s: "ไม่กี่วินาที",
				ss: "%d วินาที",
				m: "1 นาที",
				mm: "%d นาที",
				h: "1 ชั่วโมง",
				hh: "%d ชั่วโมง",
				d: "1 วัน",
				dd: "%d วัน",
				w: "1 สัปดาห์",
				ww: "%d สัปดาห์",
				M: "1 เดือน",
				MM: "%d เดือน",
				y: "1 ปี",
				yy: "%d ปี"
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		var t = {
			1: "'inji",
			5: "'inji",
			8: "'inji",
			70: "'inji",
			80: "'inji",
			2: "'nji",
			7: "'nji",
			20: "'nji",
			50: "'nji",
			3: "'ünji",
			4: "'ünji",
			100: "'ünji",
			6: "'njy",
			9: "'unjy",
			10: "'unjy",
			30: "'unjy",
			60: "'ynjy",
			90: "'ynjy"
		};
		e.defineLocale("tk", {
			months: "Ýanwar_Fewral_Mart_Aprel_Maý_Iýun_Iýul_Awgust_Sentýabr_Oktýabr_Noýabr_Dekabr".split("_"),
			monthsShort: "Ýan_Few_Mar_Apr_Maý_Iýn_Iýl_Awg_Sen_Okt_Noý_Dek".split("_"),
			weekdays: "Ýekşenbe_Duşenbe_Sişenbe_Çarşenbe_Penşenbe_Anna_Şenbe".split("_"),
			weekdaysShort: "Ýek_Duş_Siş_Çar_Pen_Ann_Şen".split("_"),
			weekdaysMin: "Ýk_Dş_Sş_Çr_Pn_An_Şn".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[bugün sagat] LT",
				nextDay: "[ertir sagat] LT",
				nextWeek: "[indiki] dddd [sagat] LT",
				lastDay: "[düýn] LT",
				lastWeek: "[geçen] dddd [sagat] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s soň",
				past: "%s öň",
				s: "birnäçe sekunt",
				m: "bir minut",
				mm: "%d minut",
				h: "bir sagat",
				hh: "%d sagat",
				d: "bir gün",
				dd: "%d gün",
				M: "bir aý",
				MM: "%d aý",
				y: "bir ýyl",
				yy: "%d ýyl"
			},
			ordinal: function (e, n) {
				switch (n) {
					case "d":
					case "D":
					case "Do":
					case "DD":
						return e;
					default:
						if (0 === e) return e + "'unjy";
						var r = e % 10;
						return e + (t[r] || t[e % 100 - r] || t[e >= 100 ? 100 : null])
				}
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("tl-ph", {
			months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
			monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
			weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
			weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
			weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "MM/D/YYYY",
				LL: "MMMM D, YYYY",
				LLL: "MMMM D, YYYY HH:mm",
				LLLL: "dddd, MMMM DD, YYYY HH:mm"
			},
			calendar: {
				sameDay: "LT [ngayong araw]",
				nextDay: "[Bukas ng] LT",
				nextWeek: "LT [sa susunod na] dddd",
				lastDay: "LT [kahapon]",
				lastWeek: "LT [noong nakaraang] dddd",
				sameElse: "L"
			},
			relativeTime: {
				future: "sa loob ng %s",
				past: "%s ang nakalipas",
				s: "ilang segundo",
				ss: "%d segundo",
				m: "isang minuto",
				mm: "%d minuto",
				h: "isang oras",
				hh: "%d oras",
				d: "isang araw",
				dd: "%d araw",
				M: "isang buwan",
				MM: "%d buwan",
				y: "isang taon",
				yy: "%d taon"
			},
			dayOfMonthOrdinalParse: /\d{1,2}/,
			ordinal: function (e) {
				return e
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		var t = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");

		function n(e, n, r, a) {
			var i = function (e) {
				var n = Math.floor(e % 1e3 / 100),
					r = Math.floor(e % 100 / 10),
					a = e % 10,
					i = "";
				n > 0 && (i += t[n] + "vatlh");
				r > 0 && (i += ("" !== i ? " " : "") + t[r] + "maH");
				a > 0 && (i += ("" !== i ? " " : "") + t[a]);
				return "" === i ? "pagh" : i
			}(e);
			switch (r) {
				case "ss":
					return i + " lup";
				case "mm":
					return i + " tup";
				case "hh":
					return i + " rep";
				case "dd":
					return i + " jaj";
				case "MM":
					return i + " jar";
				case "yy":
					return i + " DIS"
			}
		}
		e.defineLocale("tlh", {
			months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),
			monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),
			monthsParseExact: !0,
			weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
			weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
			weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[DaHjaj] LT",
				nextDay: "[wa’leS] LT",
				nextWeek: "LLL",
				lastDay: "[wa’Hu’] LT",
				lastWeek: "LLL",
				sameElse: "L"
			},
			relativeTime: {
				future: function (e) {
					var t = e;
					return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "leS" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "waQ" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "nem" : t + " pIq"
				},
				past: function (e) {
					var t = e;
					return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "Hu’" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "wen" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "ben" : t + " ret"
				},
				s: "puS lup",
				ss: n,
				m: "wa’ tup",
				mm: n,
				h: "wa’ rep",
				hh: n,
				d: "wa’ jaj",
				dd: n,
				M: "wa’ jar",
				MM: n,
				y: "wa’ DIS",
				yy: n
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		var t = {
			1: "'inci",
			5: "'inci",
			8: "'inci",
			70: "'inci",
			80: "'inci",
			2: "'nci",
			7: "'nci",
			20: "'nci",
			50: "'nci",
			3: "'üncü",
			4: "'üncü",
			100: "'üncü",
			6: "'ncı",
			9: "'uncu",
			10: "'uncu",
			30: "'uncu",
			60: "'ıncı",
			90: "'ıncı"
		};
		e.defineLocale("tr", {
			months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
			monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
			weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
			weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
			weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
			meridiem: function (e, t, n) {
				return e < 12 ? n ? "öö" : "ÖÖ" : n ? "ös" : "ÖS"
			},
			meridiemParse: /öö|ÖÖ|ös|ÖS/,
			isPM: function (e) {
				return "ös" === e || "ÖS" === e
			},
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[bugün saat] LT",
				nextDay: "[yarın saat] LT",
				nextWeek: "[gelecek] dddd [saat] LT",
				lastDay: "[dün] LT",
				lastWeek: "[geçen] dddd [saat] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s sonra",
				past: "%s önce",
				s: "birkaç saniye",
				ss: "%d saniye",
				m: "bir dakika",
				mm: "%d dakika",
				h: "bir saat",
				hh: "%d saat",
				d: "bir gün",
				dd: "%d gün",
				w: "bir hafta",
				ww: "%d hafta",
				M: "bir ay",
				MM: "%d ay",
				y: "bir yıl",
				yy: "%d yıl"
			},
			ordinal: function (e, n) {
				switch (n) {
					case "d":
					case "D":
					case "Do":
					case "DD":
						return e;
					default:
						if (0 === e) return e + "'ıncı";
						var r = e % 10;
						return e + (t[r] || t[e % 100 - r] || t[e >= 100 ? 100 : null])
				}
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";

		function t(e, t, n, r) {
			var a = {
				s: ["viensas secunds", "'iensas secunds"],
				ss: [e + " secunds", e + " secunds"],
				m: ["'n míut", "'iens míut"],
				mm: [e + " míuts", e + " míuts"],
				h: ["'n þora", "'iensa þora"],
				hh: [e + " þoras", e + " þoras"],
				d: ["'n ziua", "'iensa ziua"],
				dd: [e + " ziuas", e + " ziuas"],
				M: ["'n mes", "'iens mes"],
				MM: [e + " mesen", e + " mesen"],
				y: ["'n ar", "'iens ar"],
				yy: [e + " ars", e + " ars"]
			};
			return r ? a[n][0] : t ? a[n][0] : a[n][1]
		}
		e.defineLocale("tzl", {
			months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),
			monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
			weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),
			weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
			weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
			longDateFormat: {
				LT: "HH.mm",
				LTS: "HH.mm.ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM [dallas] YYYY",
				LLL: "D. MMMM [dallas] YYYY HH.mm",
				LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
			},
			meridiemParse: /d\'o|d\'a/i,
			isPM: function (e) {
				return "d'o" === e.toLowerCase()
			},
			meridiem: function (e, t, n) {
				return e > 11 ? n ? "d'o" : "D'O" : n ? "d'a" : "D'A"
			},
			calendar: {
				sameDay: "[oxhi à] LT",
				nextDay: "[demà à] LT",
				nextWeek: "dddd [à] LT",
				lastDay: "[ieiri à] LT",
				lastWeek: "[sür el] dddd [lasteu à] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "osprei %s",
				past: "ja%s",
				s: t,
				ss: t,
				m: t,
				mm: t,
				h: t,
				hh: t,
				d: t,
				dd: t,
				M: t,
				MM: t,
				y: t,
				yy: t
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("tzm", {
			months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
			monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
			weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
			weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
			weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
				nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
				nextWeek: "dddd [ⴴ] LT",
				lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
				lastWeek: "dddd [ⴴ] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
				past: "ⵢⴰⵏ %s",
				s: "ⵉⵎⵉⴽ",
				ss: "%d ⵉⵎⵉⴽ",
				m: "ⵎⵉⵏⵓⴺ",
				mm: "%d ⵎⵉⵏⵓⴺ",
				h: "ⵙⴰⵄⴰ",
				hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
				d: "ⴰⵙⵙ",
				dd: "%d oⵙⵙⴰⵏ",
				M: "ⴰⵢoⵓⵔ",
				MM: "%d ⵉⵢⵢⵉⵔⵏ",
				y: "ⴰⵙⴳⴰⵙ",
				yy: "%d ⵉⵙⴳⴰⵙⵏ"
			},
			week: {
				dow: 6,
				doy: 12
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("tzm-latn", {
			months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
			monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
			weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
			weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
			weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[asdkh g] LT",
				nextDay: "[aska g] LT",
				nextWeek: "dddd [g] LT",
				lastDay: "[assant g] LT",
				lastWeek: "dddd [g] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dadkh s yan %s",
				past: "yan %s",
				s: "imik",
				ss: "%d imik",
				m: "minuḍ",
				mm: "%d minuḍ",
				h: "saɛa",
				hh: "%d tassaɛin",
				d: "ass",
				dd: "%d ossan",
				M: "ayowr",
				MM: "%d iyyirn",
				y: "asgas",
				yy: "%d isgasn"
			},
			week: {
				dow: 6,
				doy: 12
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("ug-cn", {
			months: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
			monthsShort: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
			weekdays: "يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە".split("_"),
			weekdaysShort: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
			weekdaysMin: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY-MM-DD",
				LL: "YYYY-يىلىM-ئاينىڭD-كۈنى",
				LLL: "YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",
				LLLL: "dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm"
			},
			meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "يېرىم كېچە" === t || "سەھەر" === t || "چۈشتىن بۇرۇن" === t ? e : "چۈشتىن كېيىن" === t || "كەچ" === t ? e + 12 : e >= 11 ? e : e + 12
			},
			meridiem: function (e, t, n) {
				var r = 100 * e + t;
				return r < 600 ? "يېرىم كېچە" : r < 900 ? "سەھەر" : r < 1130 ? "چۈشتىن بۇرۇن" : r < 1230 ? "چۈش" : r < 1800 ? "چۈشتىن كېيىن" : "كەچ"
			},
			calendar: {
				sameDay: "[بۈگۈن سائەت] LT",
				nextDay: "[ئەتە سائەت] LT",
				nextWeek: "[كېلەركى] dddd [سائەت] LT",
				lastDay: "[تۆنۈگۈن] LT",
				lastWeek: "[ئالدىنقى] dddd [سائەت] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s كېيىن",
				past: "%s بۇرۇن",
				s: "نەچچە سېكونت",
				ss: "%d سېكونت",
				m: "بىر مىنۇت",
				mm: "%d مىنۇت",
				h: "بىر سائەت",
				hh: "%d سائەت",
				d: "بىر كۈن",
				dd: "%d كۈن",
				M: "بىر ئاي",
				MM: "%d ئاي",
				y: "بىر يىل",
				yy: "%d يىل"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,
			ordinal: function (e, t) {
				switch (t) {
					case "d":
					case "D":
					case "DDD":
						return e + "-كۈنى";
					case "w":
					case "W":
						return e + "-ھەپتە";
					default:
						return e
				}
			},
			preparse: function (e) {
				return e.replace(/،/g, ",")
			},
			postformat: function (e) {
				return e.replace(/,/g, "،")
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";

		function t(e, t, n) {
			var r, a;
			return "m" === n ? t ? "хвилина" : "хвилину" : "h" === n ? t ? "година" : "годину" : e + " " + (r = +e, a = {
				ss: t ? "секунда_секунди_секунд" : "секунду_секунди_секунд",
				mm: t ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
				hh: t ? "година_години_годин" : "годину_години_годин",
				dd: "день_дні_днів",
				MM: "місяць_місяці_місяців",
				yy: "рік_роки_років"
			}[n].split("_"), r % 10 == 1 && r % 100 != 11 ? a[0] : r % 10 >= 2 && r % 10 <= 4 && (r % 100 < 10 || r % 100 >= 20) ? a[1] : a[2])
		}

		function n(e) {
			return function () {
				return e + "о" + (11 === this.hours() ? "б" : "") + "] LT"
			}
		}
		e.defineLocale("uk", {
			months: {
				format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
				standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
			},
			monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
			weekdays: function (e, t) {
				var n = {
					nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
					accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
					genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
				};
				return !0 === e ? n.nominative.slice(1, 7).concat(n.nominative.slice(0, 1)) : e ? n[/(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative"][e.day()] : n.nominative
			},
			weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
			weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY р.",
				LLL: "D MMMM YYYY р., HH:mm",
				LLLL: "dddd, D MMMM YYYY р., HH:mm"
			},
			calendar: {
				sameDay: n("[Сьогодні "),
				nextDay: n("[Завтра "),
				lastDay: n("[Вчора "),
				nextWeek: n("[У] dddd ["),
				lastWeek: function () {
					switch (this.day()) {
						case 0:
						case 3:
						case 5:
						case 6:
							return n("[Минулої] dddd [").call(this);
						case 1:
						case 2:
						case 4:
							return n("[Минулого] dddd [").call(this)
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "за %s",
				past: "%s тому",
				s: "декілька секунд",
				ss: t,
				m: t,
				mm: t,
				h: "годину",
				hh: t,
				d: "день",
				dd: t,
				M: "місяць",
				MM: t,
				y: "рік",
				yy: t
			},
			meridiemParse: /ночі|ранку|дня|вечора/,
			isPM: function (e) {
				return /^(дня|вечора)$/.test(e)
			},
			meridiem: function (e, t, n) {
				return e < 4 ? "ночі" : e < 12 ? "ранку" : e < 17 ? "дня" : "вечора"
			},
			dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
			ordinal: function (e, t) {
				switch (t) {
					case "M":
					case "d":
					case "DDD":
					case "w":
					case "W":
						return e + "-й";
					case "D":
						return e + "-го";
					default:
						return e
				}
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		var t = ["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"],
			n = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];
		e.defineLocale("ur", {
			months: t,
			monthsShort: t,
			weekdays: n,
			weekdaysShort: n,
			weekdaysMin: n,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd، D MMMM YYYY HH:mm"
			},
			meridiemParse: /صبح|شام/,
			isPM: function (e) {
				return "شام" === e
			},
			meridiem: function (e, t, n) {
				return e < 12 ? "صبح" : "شام"
			},
			calendar: {
				sameDay: "[آج بوقت] LT",
				nextDay: "[کل بوقت] LT",
				nextWeek: "dddd [بوقت] LT",
				lastDay: "[گذشتہ روز بوقت] LT",
				lastWeek: "[گذشتہ] dddd [بوقت] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s بعد",
				past: "%s قبل",
				s: "چند سیکنڈ",
				ss: "%d سیکنڈ",
				m: "ایک منٹ",
				mm: "%d منٹ",
				h: "ایک گھنٹہ",
				hh: "%d گھنٹے",
				d: "ایک دن",
				dd: "%d دن",
				M: "ایک ماہ",
				MM: "%d ماہ",
				y: "ایک سال",
				yy: "%d سال"
			},
			preparse: function (e) {
				return e.replace(/،/g, ",")
			},
			postformat: function (e) {
				return e.replace(/,/g, "،")
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("uz", {
			months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
			monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
			weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
			weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
			weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "D MMMM YYYY, dddd HH:mm"
			},
			calendar: {
				sameDay: "[Бугун соат] LT [да]",
				nextDay: "[Эртага] LT [да]",
				nextWeek: "dddd [куни соат] LT [да]",
				lastDay: "[Кеча соат] LT [да]",
				lastWeek: "[Утган] dddd [куни соат] LT [да]",
				sameElse: "L"
			},
			relativeTime: {
				future: "Якин %s ичида",
				past: "Бир неча %s олдин",
				s: "фурсат",
				ss: "%d фурсат",
				m: "бир дакика",
				mm: "%d дакика",
				h: "бир соат",
				hh: "%d соат",
				d: "бир кун",
				dd: "%d кун",
				M: "бир ой",
				MM: "%d ой",
				y: "бир йил",
				yy: "%d йил"
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("uz-latn", {
			months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),
			monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),
			weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),
			weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
			weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "D MMMM YYYY, dddd HH:mm"
			},
			calendar: {
				sameDay: "[Bugun soat] LT [da]",
				nextDay: "[Ertaga] LT [da]",
				nextWeek: "dddd [kuni soat] LT [da]",
				lastDay: "[Kecha soat] LT [da]",
				lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
				sameElse: "L"
			},
			relativeTime: {
				future: "Yaqin %s ichida",
				past: "Bir necha %s oldin",
				s: "soniya",
				ss: "%d soniya",
				m: "bir daqiqa",
				mm: "%d daqiqa",
				h: "bir soat",
				hh: "%d soat",
				d: "bir kun",
				dd: "%d kun",
				M: "bir oy",
				MM: "%d oy",
				y: "bir yil",
				yy: "%d yil"
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("vi", {
			months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
			monthsShort: "Thg 01_Thg 02_Thg 03_Thg 04_Thg 05_Thg 06_Thg 07_Thg 08_Thg 09_Thg 10_Thg 11_Thg 12".split("_"),
			monthsParseExact: !0,
			weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
			weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
			weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
			weekdaysParseExact: !0,
			meridiemParse: /sa|ch/i,
			isPM: function (e) {
				return /^ch$/i.test(e)
			},
			meridiem: function (e, t, n) {
				return e < 12 ? n ? "sa" : "SA" : n ? "ch" : "CH"
			},
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM [năm] YYYY",
				LLL: "D MMMM [năm] YYYY HH:mm",
				LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
				l: "DD/M/YYYY",
				ll: "D MMM YYYY",
				lll: "D MMM YYYY HH:mm",
				llll: "ddd, D MMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Hôm nay lúc] LT",
				nextDay: "[Ngày mai lúc] LT",
				nextWeek: "dddd [tuần tới lúc] LT",
				lastDay: "[Hôm qua lúc] LT",
				lastWeek: "dddd [tuần trước lúc] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s tới",
				past: "%s trước",
				s: "vài giây",
				ss: "%d giây",
				m: "một phút",
				mm: "%d phút",
				h: "một giờ",
				hh: "%d giờ",
				d: "một ngày",
				dd: "%d ngày",
				w: "một tuần",
				ww: "%d tuần",
				M: "một tháng",
				MM: "%d tháng",
				y: "một năm",
				yy: "%d năm"
			},
			dayOfMonthOrdinalParse: /\d{1,2}/,
			ordinal: function (e) {
				return e
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("x-pseudo", {
			months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),
			monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),
			monthsParseExact: !0,
			weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),
			weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),
			weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[T~ódá~ý át] LT",
				nextDay: "[T~ómó~rró~w át] LT",
				nextWeek: "dddd [át] LT",
				lastDay: "[Ý~ést~érdá~ý át] LT",
				lastWeek: "[L~ást] dddd [át] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "í~ñ %s",
				past: "%s á~gó",
				s: "á ~féw ~sécó~ñds",
				ss: "%d s~écóñ~ds",
				m: "á ~míñ~úté",
				mm: "%d m~íñú~tés",
				h: "á~ñ hó~úr",
				hh: "%d h~óúrs",
				d: "á ~dáý",
				dd: "%d d~áýs",
				M: "á ~móñ~th",
				MM: "%d m~óñt~hs",
				y: "á ~ýéár",
				yy: "%d ý~éárs"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
			ordinal: function (e) {
				var t = e % 10;
				return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("yo", {
			months: "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"),
			monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"),
			weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),
			weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),
			weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY h:mm A",
				LLLL: "dddd, D MMMM YYYY h:mm A"
			},
			calendar: {
				sameDay: "[Ònì ni] LT",
				nextDay: "[Ọ̀la ni] LT",
				nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
				lastDay: "[Àna ni] LT",
				lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "ní %s",
				past: "%s kọjá",
				s: "ìsẹjú aayá die",
				ss: "aayá %d",
				m: "ìsẹjú kan",
				mm: "ìsẹjú %d",
				h: "wákati kan",
				hh: "wákati %d",
				d: "ọjọ́ kan",
				dd: "ọjọ́ %d",
				M: "osù kan",
				MM: "osù %d",
				y: "ọdún kan",
				yy: "ọdún %d"
			},
			dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
			ordinal: "ọjọ́ %d",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("zh-cn", {
			months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
			monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
			weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
			weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
			weekdaysMin: "日_一_二_三_四_五_六".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY/MM/DD",
				LL: "YYYY年M月D日",
				LLL: "YYYY年M月D日Ah点mm分",
				LLLL: "YYYY年M月D日ddddAh点mm分",
				l: "YYYY/M/D",
				ll: "YYYY年M月D日",
				lll: "YYYY年M月D日 HH:mm",
				llll: "YYYY年M月D日dddd HH:mm"
			},
			meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "下午" === t || "晚上" === t ? e + 12 : e >= 11 ? e : e + 12
			},
			meridiem: function (e, t, n) {
				var r = 100 * e + t;
				return r < 600 ? "凌晨" : r < 900 ? "早上" : r < 1130 ? "上午" : r < 1230 ? "中午" : r < 1800 ? "下午" : "晚上"
			},
			calendar: {
				sameDay: "[今天]LT",
				nextDay: "[明天]LT",
				nextWeek: function (e) {
					return e.week() !== this.week() ? "[下]dddLT" : "[本]dddLT"
				},
				lastDay: "[昨天]LT",
				lastWeek: function (e) {
					return this.week() !== e.week() ? "[上]dddLT" : "[本]dddLT"
				},
				sameElse: "L"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
			ordinal: function (e, t) {
				switch (t) {
					case "d":
					case "D":
					case "DDD":
						return e + "日";
					case "M":
						return e + "月";
					case "w":
					case "W":
						return e + "周";
					default:
						return e
				}
			},
			relativeTime: {
				future: "%s后",
				past: "%s前",
				s: "几秒",
				ss: "%d 秒",
				m: "1 分钟",
				mm: "%d 分钟",
				h: "1 小时",
				hh: "%d 小时",
				d: "1 天",
				dd: "%d 天",
				w: "1 周",
				ww: "%d 周",
				M: "1 个月",
				MM: "%d 个月",
				y: "1 年",
				yy: "%d 年"
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("zh-hk", {
			months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
			monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
			weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
			weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
			weekdaysMin: "日_一_二_三_四_五_六".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY/MM/DD",
				LL: "YYYY年M月D日",
				LLL: "YYYY年M月D日 HH:mm",
				LLLL: "YYYY年M月D日dddd HH:mm",
				l: "YYYY/M/D",
				ll: "YYYY年M月D日",
				lll: "YYYY年M月D日 HH:mm",
				llll: "YYYY年M月D日dddd HH:mm"
			},
			meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
			},
			meridiem: function (e, t, n) {
				var r = 100 * e + t;
				return r < 600 ? "凌晨" : r < 900 ? "早上" : r < 1200 ? "上午" : 1200 === r ? "中午" : r < 1800 ? "下午" : "晚上"
			},
			calendar: {
				sameDay: "[今天]LT",
				nextDay: "[明天]LT",
				nextWeek: "[下]ddddLT",
				lastDay: "[昨天]LT",
				lastWeek: "[上]ddddLT",
				sameElse: "L"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
			ordinal: function (e, t) {
				switch (t) {
					case "d":
					case "D":
					case "DDD":
						return e + "日";
					case "M":
						return e + "月";
					case "w":
					case "W":
						return e + "週";
					default:
						return e
				}
			},
			relativeTime: {
				future: "%s後",
				past: "%s前",
				s: "幾秒",
				ss: "%d 秒",
				m: "1 分鐘",
				mm: "%d 分鐘",
				h: "1 小時",
				hh: "%d 小時",
				d: "1 天",
				dd: "%d 天",
				M: "1 個月",
				MM: "%d 個月",
				y: "1 年",
				yy: "%d 年"
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("zh-mo", {
			months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
			monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
			weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
			weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
			weekdaysMin: "日_一_二_三_四_五_六".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "YYYY年M月D日",
				LLL: "YYYY年M月D日 HH:mm",
				LLLL: "YYYY年M月D日dddd HH:mm",
				l: "D/M/YYYY",
				ll: "YYYY年M月D日",
				lll: "YYYY年M月D日 HH:mm",
				llll: "YYYY年M月D日dddd HH:mm"
			},
			meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
			},
			meridiem: function (e, t, n) {
				var r = 100 * e + t;
				return r < 600 ? "凌晨" : r < 900 ? "早上" : r < 1130 ? "上午" : r < 1230 ? "中午" : r < 1800 ? "下午" : "晚上"
			},
			calendar: {
				sameDay: "[今天] LT",
				nextDay: "[明天] LT",
				nextWeek: "[下]dddd LT",
				lastDay: "[昨天] LT",
				lastWeek: "[上]dddd LT",
				sameElse: "L"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
			ordinal: function (e, t) {
				switch (t) {
					case "d":
					case "D":
					case "DDD":
						return e + "日";
					case "M":
						return e + "月";
					case "w":
					case "W":
						return e + "週";
					default:
						return e
				}
			},
			relativeTime: {
				future: "%s內",
				past: "%s前",
				s: "幾秒",
				ss: "%d 秒",
				m: "1 分鐘",
				mm: "%d 分鐘",
				h: "1 小時",
				hh: "%d 小時",
				d: "1 天",
				dd: "%d 天",
				M: "1 個月",
				MM: "%d 個月",
				y: "1 年",
				yy: "%d 年"
			}
		})
	})(n(0))
}, function (e, t, n) {
	(function (e) {
		"use strict";
		e.defineLocale("zh-tw", {
			months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
			monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
			weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
			weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
			weekdaysMin: "日_一_二_三_四_五_六".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY/MM/DD",
				LL: "YYYY年M月D日",
				LLL: "YYYY年M月D日 HH:mm",
				LLLL: "YYYY年M月D日dddd HH:mm",
				l: "YYYY/M/D",
				ll: "YYYY年M月D日",
				lll: "YYYY年M月D日 HH:mm",
				llll: "YYYY年M月D日dddd HH:mm"
			},
			meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
			},
			meridiem: function (e, t, n) {
				var r = 100 * e + t;
				return r < 600 ? "凌晨" : r < 900 ? "早上" : r < 1130 ? "上午" : r < 1230 ? "中午" : r < 1800 ? "下午" : "晚上"
			},
			calendar: {
				sameDay: "[今天] LT",
				nextDay: "[明天] LT",
				nextWeek: "[下]dddd LT",
				lastDay: "[昨天] LT",
				lastWeek: "[上]dddd LT",
				sameElse: "L"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
			ordinal: function (e, t) {
				switch (t) {
					case "d":
					case "D":
					case "DDD":
						return e + "日";
					case "M":
						return e + "月";
					case "w":
					case "W":
						return e + "週";
					default:
						return e
				}
			},
			relativeTime: {
				future: "%s後",
				past: "%s前",
				s: "幾秒",
				ss: "%d 秒",
				m: "1 分鐘",
				mm: "%d 分鐘",
				h: "1 小時",
				hh: "%d 小時",
				d: "1 天",
				dd: "%d 天",
				M: "1 個月",
				MM: "%d 個月",
				y: "1 年",
				yy: "%d 年"
			}
		})
	})(n(0))
}, function (e, t, n) {
	window.$ = window.jQuery = n(5), n(150), window.axios = n(151), window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest", window.Vue = n(169), n(173), n(174), n(175), n(193), n(194), window.moment = n(0)
}, function (e, t) {
	if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
	! function (e) {
		"use strict";
		var t = e.fn.jquery.split(" ")[0].split(".");
		if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || t[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
	}(jQuery),
	function (e) {
		"use strict";
		e.fn.emulateTransitionEnd = function (t) {
			var n = !1,
				r = this;
			e(this).one("bsTransitionEnd", function () {
				n = !0
			});
			return setTimeout(function () {
				n || e(r).trigger(e.support.transition.end)
			}, t), this
		}, e(function () {
			e.support.transition = function () {
				var e = document.createElement("bootstrap"),
					t = {
						WebkitTransition: "webkitTransitionEnd",
						MozTransition: "transitionend",
						OTransition: "oTransitionEnd otransitionend",
						transition: "transitionend"
					};
				for (var n in t)
					if (void 0 !== e.style[n]) return {
						end: t[n]
					};
				return !1
			}(), e.support.transition && (e.event.special.bsTransitionEnd = {
				bindType: e.support.transition.end,
				delegateType: e.support.transition.end,
				handle: function (t) {
					if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
				}
			})
		})
	}(jQuery),
	function (e) {
		"use strict";
		var t = '[data-dismiss="alert"]',
			n = function (n) {
				e(n).on("click", t, this.close)
			};
		n.VERSION = "3.4.1", n.TRANSITION_DURATION = 150, n.prototype.close = function (t) {
			var r = e(this),
				a = r.attr("data-target");
			a || (a = (a = r.attr("href")) && a.replace(/.*(?=#[^\s]*$)/, "")), a = "#" === a ? [] : a;
			var i = e(document).find(a);

			function s() {
				i.detach().trigger("closed.bs.alert").remove()
			}
			t && t.preventDefault(), i.length || (i = r.closest(".alert")), i.trigger(t = e.Event("close.bs.alert")), t.isDefaultPrevented() || (i.removeClass("in"), e.support.transition && i.hasClass("fade") ? i.one("bsTransitionEnd", s).emulateTransitionEnd(n.TRANSITION_DURATION) : s())
		};
		var r = e.fn.alert;
		e.fn.alert = function (t) {
			return this.each(function () {
				var r = e(this),
					a = r.data("bs.alert");
				a || r.data("bs.alert", a = new n(this)), "string" == typeof t && a[t].call(r)
			})
		}, e.fn.alert.Constructor = n, e.fn.alert.noConflict = function () {
			return e.fn.alert = r, this
		}, e(document).on("click.bs.alert.data-api", t, n.prototype.close)
	}(jQuery),
	function (e) {
		"use strict";
		var t = function (n, r) {
			this.$element = e(n), this.options = e.extend({}, t.DEFAULTS, r), this.isLoading = !1
		};

		function n(n) {
			return this.each(function () {
				var r = e(this),
					a = r.data("bs.button"),
					i = "object" == typeof n && n;
				a || r.data("bs.button", a = new t(this, i)), "toggle" == n ? a.toggle() : n && a.setState(n)
			})
		}
		t.VERSION = "3.4.1", t.DEFAULTS = {
			loadingText: "loading..."
		}, t.prototype.setState = function (t) {
			var n = "disabled",
				r = this.$element,
				a = r.is("input") ? "val" : "html",
				i = r.data();
			t += "Text", null == i.resetText && r.data("resetText", r[a]()), setTimeout(e.proxy(function () {
				r[a](null == i[t] ? this.options[t] : i[t]), "loadingText" == t ? (this.isLoading = !0, r.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1, r.removeClass(n).removeAttr(n).prop(n, !1))
			}, this), 0)
		}, t.prototype.toggle = function () {
			var e = !0,
				t = this.$element.closest('[data-toggle="buttons"]');
			if (t.length) {
				var n = this.$element.find("input");
				"radio" == n.prop("type") ? (n.prop("checked") && (e = !1), t.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (e = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), e && n.trigger("change")
			} else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
		};
		var r = e.fn.button;
		e.fn.button = n, e.fn.button.Constructor = t, e.fn.button.noConflict = function () {
			return e.fn.button = r, this
		}, e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (t) {
			var r = e(t.target).closest(".btn");
			n.call(r, "toggle"), e(t.target).is('input[type="radio"], input[type="checkbox"]') || (t.preventDefault(), r.is("input,button") ? r.trigger("focus") : r.find("input:visible,button:visible").first().trigger("focus"))
		}).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (t) {
			e(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
		})
	}(jQuery),
	function (e) {
		"use strict";
		var t = function (t, n) {
			this.$element = e(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", e.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", e.proxy(this.pause, this)).on("mouseleave.bs.carousel", e.proxy(this.cycle, this))
		};

		function n(n) {
			return this.each(function () {
				var r = e(this),
					a = r.data("bs.carousel"),
					i = e.extend({}, t.DEFAULTS, r.data(), "object" == typeof n && n),
					s = "string" == typeof n ? n : i.slide;
				a || r.data("bs.carousel", a = new t(this, i)), "number" == typeof n ? a.to(n) : s ? a[s]() : i.interval && a.pause().cycle()
			})
		}
		t.VERSION = "3.4.1", t.TRANSITION_DURATION = 600, t.DEFAULTS = {
			interval: 5e3,
			pause: "hover",
			wrap: !0,
			keyboard: !0
		}, t.prototype.keydown = function (e) {
			if (!/input|textarea/i.test(e.target.tagName)) {
				switch (e.which) {
					case 37:
						this.prev();
						break;
					case 39:
						this.next();
						break;
					default:
						return
				}
				e.preventDefault()
			}
		}, t.prototype.cycle = function (t) {
			return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
		}, t.prototype.getItemIndex = function (e) {
			return this.$items = e.parent().children(".item"), this.$items.index(e || this.$active)
		}, t.prototype.getItemForDirection = function (e, t) {
			var n = this.getItemIndex(t);
			if (("prev" == e && 0 === n || "next" == e && n == this.$items.length - 1) && !this.options.wrap) return t;
			var r = (n + ("prev" == e ? -1 : 1)) % this.$items.length;
			return this.$items.eq(r)
		}, t.prototype.to = function (e) {
			var t = this,
				n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
			if (!(e > this.$items.length - 1 || e < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function () {
				t.to(e)
			}) : n == e ? this.pause().cycle() : this.slide(e > n ? "next" : "prev", this.$items.eq(e))
		}, t.prototype.pause = function (t) {
			return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
		}, t.prototype.next = function () {
			if (!this.sliding) return this.slide("next")
		}, t.prototype.prev = function () {
			if (!this.sliding) return this.slide("prev")
		}, t.prototype.slide = function (n, r) {
			var a = this.$element.find(".item.active"),
				i = r || this.getItemForDirection(n, a),
				s = this.interval,
				o = "next" == n ? "left" : "right",
				l = this;
			if (i.hasClass("active")) return this.sliding = !1;
			var d = i[0],
				u = e.Event("slide.bs.carousel", {
					relatedTarget: d,
					direction: o
				});
			if (this.$element.trigger(u), !u.isDefaultPrevented()) {
				if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
					this.$indicators.find(".active").removeClass("active");
					var c = e(this.$indicators.children()[this.getItemIndex(i)]);
					c && c.addClass("active")
				}
				var f = e.Event("slid.bs.carousel", {
					relatedTarget: d,
					direction: o
				});
				return e.support.transition && this.$element.hasClass("slide") ? (i.addClass(n), "object" == typeof i && i.length && i[0].offsetWidth, a.addClass(o), i.addClass(o), a.one("bsTransitionEnd", function () {
					i.removeClass([n, o].join(" ")).addClass("active"), a.removeClass(["active", o].join(" ")), l.sliding = !1, setTimeout(function () {
						l.$element.trigger(f)
					}, 0)
				}).emulateTransitionEnd(t.TRANSITION_DURATION)) : (a.removeClass("active"), i.addClass("active"), this.sliding = !1, this.$element.trigger(f)), s && this.cycle(), this
			}
		};
		var r = e.fn.carousel;
		e.fn.carousel = n, e.fn.carousel.Constructor = t, e.fn.carousel.noConflict = function () {
			return e.fn.carousel = r, this
		};
		var a = function (t) {
			var r = e(this),
				a = r.attr("href");
			a && (a = a.replace(/.*(?=#[^\s]+$)/, ""));
			var i = r.attr("data-target") || a,
				s = e(document).find(i);
			if (s.hasClass("carousel")) {
				var o = e.extend({}, s.data(), r.data()),
					l = r.attr("data-slide-to");
				l && (o.interval = !1), n.call(s, o), l && s.data("bs.carousel").to(l), t.preventDefault()
			}
		};
		e(document).on("click.bs.carousel.data-api", "[data-slide]", a).on("click.bs.carousel.data-api", "[data-slide-to]", a), e(window).on("load", function () {
			e('[data-ride="carousel"]').each(function () {
				var t = e(this);
				n.call(t, t.data())
			})
		})
	}(jQuery),
	function (e) {
		"use strict";
		var t = function (n, r) {
			this.$element = e(n), this.options = e.extend({}, t.DEFAULTS, r), this.$trigger = e('[data-toggle="collapse"][href="#' + n.id + '"],[data-toggle="collapse"][data-target="#' + n.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
		};

		function n(t) {
			var n, r = t.attr("data-target") || (n = t.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
			return e(document).find(r)
		}

		function r(n) {
			return this.each(function () {
				var r = e(this),
					a = r.data("bs.collapse"),
					i = e.extend({}, t.DEFAULTS, r.data(), "object" == typeof n && n);
				!a && i.toggle && /show|hide/.test(n) && (i.toggle = !1), a || r.data("bs.collapse", a = new t(this, i)), "string" == typeof n && a[n]()
			})
		}
		t.VERSION = "3.4.1", t.TRANSITION_DURATION = 350, t.DEFAULTS = {
			toggle: !0
		}, t.prototype.dimension = function () {
			return this.$element.hasClass("width") ? "width" : "height"
		}, t.prototype.show = function () {
			if (!this.transitioning && !this.$element.hasClass("in")) {
				var n, a = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
				if (!(a && a.length && (n = a.data("bs.collapse")) && n.transitioning)) {
					var i = e.Event("show.bs.collapse");
					if (this.$element.trigger(i), !i.isDefaultPrevented()) {
						a && a.length && (r.call(a, "hide"), n || a.data("bs.collapse", null));
						var s = this.dimension();
						this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
						var o = function () {
							this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
						};
						if (!e.support.transition) return o.call(this);
						var l = e.camelCase(["scroll", s].join("-"));
						this.$element.one("bsTransitionEnd", e.proxy(o, this)).emulateTransitionEnd(t.TRANSITION_DURATION)[s](this.$element[0][l])
					}
				}
			}
		}, t.prototype.hide = function () {
			if (!this.transitioning && this.$element.hasClass("in")) {
				var n = e.Event("hide.bs.collapse");
				if (this.$element.trigger(n), !n.isDefaultPrevented()) {
					var r = this.dimension();
					this.$element[r](this.$element[r]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
					var a = function () {
						this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
					};
					if (!e.support.transition) return a.call(this);
					this.$element[r](0).one("bsTransitionEnd", e.proxy(a, this)).emulateTransitionEnd(t.TRANSITION_DURATION)
				}
			}
		}, t.prototype.toggle = function () {
			this[this.$element.hasClass("in") ? "hide" : "show"]()
		}, t.prototype.getParent = function () {
			return e(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(e.proxy(function (t, r) {
				var a = e(r);
				this.addAriaAndCollapsedClass(n(a), a)
			}, this)).end()
		}, t.prototype.addAriaAndCollapsedClass = function (e, t) {
			var n = e.hasClass("in");
			e.attr("aria-expanded", n), t.toggleClass("collapsed", !n).attr("aria-expanded", n)
		};
		var a = e.fn.collapse;
		e.fn.collapse = r, e.fn.collapse.Constructor = t, e.fn.collapse.noConflict = function () {
			return e.fn.collapse = a, this
		}, e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (t) {
			var a = e(this);
			a.attr("data-target") || t.preventDefault();
			var i = n(a),
				s = i.data("bs.collapse") ? "toggle" : a.data();
			r.call(i, s)
		})
	}(jQuery),
	function (e) {
		"use strict";
		var t = ".dropdown-backdrop",
			n = '[data-toggle="dropdown"]',
			r = function (t) {
				e(t).on("click.bs.dropdown", this.toggle)
			};

		function a(t) {
			var n = t.attr("data-target");
			n || (n = (n = t.attr("href")) && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
			var r = "#" !== n ? e(document).find(n) : null;
			return r && r.length ? r : t.parent()
		}

		function i(r) {
			r && 3 === r.which || (e(t).remove(), e(n).each(function () {
				var t = e(this),
					n = a(t),
					i = {
						relatedTarget: this
					};
				n.hasClass("open") && (r && "click" == r.type && /input|textarea/i.test(r.target.tagName) && e.contains(n[0], r.target) || (n.trigger(r = e.Event("hide.bs.dropdown", i)), r.isDefaultPrevented() || (t.attr("aria-expanded", "false"), n.removeClass("open").trigger(e.Event("hidden.bs.dropdown", i)))))
			}))
		}
		r.VERSION = "3.4.1", r.prototype.toggle = function (t) {
			var n = e(this);
			if (!n.is(".disabled, :disabled")) {
				var r = a(n),
					s = r.hasClass("open");
				if (i(), !s) {
					"ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && e(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(e(this)).on("click", i);
					var o = {
						relatedTarget: this
					};
					if (r.trigger(t = e.Event("show.bs.dropdown", o)), t.isDefaultPrevented()) return;
					n.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger(e.Event("shown.bs.dropdown", o))
				}
				return !1
			}
		}, r.prototype.keydown = function (t) {
			if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName)) {
				var r = e(this);
				if (t.preventDefault(), t.stopPropagation(), !r.is(".disabled, :disabled")) {
					var i = a(r),
						s = i.hasClass("open");
					if (!s && 27 != t.which || s && 27 == t.which) return 27 == t.which && i.find(n).trigger("focus"), r.trigger("click");
					var o = i.find(".dropdown-menu li:not(.disabled):visible a");
					if (o.length) {
						var l = o.index(t.target);
						38 == t.which && l > 0 && l--, 40 == t.which && l < o.length - 1 && l++, ~l || (l = 0), o.eq(l).trigger("focus")
					}
				}
			}
		};
		var s = e.fn.dropdown;
		e.fn.dropdown = function (t) {
			return this.each(function () {
				var n = e(this),
					a = n.data("bs.dropdown");
				a || n.data("bs.dropdown", a = new r(this)), "string" == typeof t && a[t].call(n)
			})
		}, e.fn.dropdown.Constructor = r, e.fn.dropdown.noConflict = function () {
			return e.fn.dropdown = s, this
		}, e(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function (e) {
			e.stopPropagation()
		}).on("click.bs.dropdown.data-api", n, r.prototype.toggle).on("keydown.bs.dropdown.data-api", n, r.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", r.prototype.keydown)
	}(jQuery),
	function (e) {
		"use strict";
		var t = function (t, n) {
			this.options = n, this.$body = e(document.body), this.$element = e(t), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.fixedContent = ".navbar-fixed-top, .navbar-fixed-bottom", this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function () {
				this.$element.trigger("loaded.bs.modal")
			}, this))
		};

		function n(n, r) {
			return this.each(function () {
				var a = e(this),
					i = a.data("bs.modal"),
					s = e.extend({}, t.DEFAULTS, a.data(), "object" == typeof n && n);
				i || a.data("bs.modal", i = new t(this, s)), "string" == typeof n ? i[n](r) : s.show && i.show(r)
			})
		}
		t.VERSION = "3.4.1", t.TRANSITION_DURATION = 300, t.BACKDROP_TRANSITION_DURATION = 150, t.DEFAULTS = {
			backdrop: !0,
			keyboard: !0,
			show: !0
		}, t.prototype.toggle = function (e) {
			return this.isShown ? this.hide() : this.show(e)
		}, t.prototype.show = function (n) {
			var r = this,
				a = e.Event("show.bs.modal", {
					relatedTarget: n
				});
			this.$element.trigger(a), this.isShown || a.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
				r.$element.one("mouseup.dismiss.bs.modal", function (t) {
					e(t.target).is(r.$element) && (r.ignoreBackdropClick = !0)
				})
			}), this.backdrop(function () {
				var a = e.support.transition && r.$element.hasClass("fade");
				r.$element.parent().length || r.$element.appendTo(r.$body), r.$element.show().scrollTop(0), r.adjustDialog(), a && r.$element[0].offsetWidth, r.$element.addClass("in"), r.enforceFocus();
				var i = e.Event("shown.bs.modal", {
					relatedTarget: n
				});
				a ? r.$dialog.one("bsTransitionEnd", function () {
					r.$element.trigger("focus").trigger(i)
				}).emulateTransitionEnd(t.TRANSITION_DURATION) : r.$element.trigger("focus").trigger(i)
			}))
		}, t.prototype.hide = function (n) {
			n && n.preventDefault(), n = e.Event("hide.bs.modal"), this.$element.trigger(n), this.isShown && !n.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(t.TRANSITION_DURATION) : this.hideModal())
		}, t.prototype.enforceFocus = function () {
			e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function (e) {
				document === e.target || this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
			}, this))
		}, t.prototype.escape = function () {
			this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", e.proxy(function (e) {
				27 == e.which && this.hide()
			}, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
		}, t.prototype.resize = function () {
			this.isShown ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this)) : e(window).off("resize.bs.modal")
		}, t.prototype.hideModal = function () {
			var e = this;
			this.$element.hide(), this.backdrop(function () {
				e.$body.removeClass("modal-open"), e.resetAdjustments(), e.resetScrollbar(), e.$element.trigger("hidden.bs.modal")
			})
		}, t.prototype.removeBackdrop = function () {
			this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
		}, t.prototype.backdrop = function (n) {
			var r = this,
				a = this.$element.hasClass("fade") ? "fade" : "";
			if (this.isShown && this.options.backdrop) {
				var i = e.support.transition && a;
				if (this.$backdrop = e(document.createElement("div")).addClass("modal-backdrop " + a).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", e.proxy(function (e) {
						this.ignoreBackdropClick ? this.ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
					}, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !n) return;
				i ? this.$backdrop.one("bsTransitionEnd", n).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : n()
			} else if (!this.isShown && this.$backdrop) {
				this.$backdrop.removeClass("in");
				var s = function () {
					r.removeBackdrop(), n && n()
				};
				e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : s()
			} else n && n()
		}, t.prototype.handleUpdate = function () {
			this.adjustDialog()
		}, t.prototype.adjustDialog = function () {
			var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
			this.$element.css({
				paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
				paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
			})
		}, t.prototype.resetAdjustments = function () {
			this.$element.css({
				paddingLeft: "",
				paddingRight: ""
			})
		}, t.prototype.checkScrollbar = function () {
			var e = window.innerWidth;
			if (!e) {
				var t = document.documentElement.getBoundingClientRect();
				e = t.right - Math.abs(t.left)
			}
			this.bodyIsOverflowing = document.body.clientWidth < e, this.scrollbarWidth = this.measureScrollbar()
		}, t.prototype.setScrollbar = function () {
			var t = parseInt(this.$body.css("padding-right") || 0, 10);
			this.originalBodyPad = document.body.style.paddingRight || "";
			var n = this.scrollbarWidth;
			this.bodyIsOverflowing && (this.$body.css("padding-right", t + n), e(this.fixedContent).each(function (t, r) {
				var a = r.style.paddingRight,
					i = e(r).css("padding-right");
				e(r).data("padding-right", a).css("padding-right", parseFloat(i) + n + "px")
			}))
		}, t.prototype.resetScrollbar = function () {
			this.$body.css("padding-right", this.originalBodyPad), e(this.fixedContent).each(function (t, n) {
				var r = e(n).data("padding-right");
				e(n).removeData("padding-right"), n.style.paddingRight = r || ""
			})
		}, t.prototype.measureScrollbar = function () {
			var e = document.createElement("div");
			e.className = "modal-scrollbar-measure", this.$body.append(e);
			var t = e.offsetWidth - e.clientWidth;
			return this.$body[0].removeChild(e), t
		};
		var r = e.fn.modal;
		e.fn.modal = n, e.fn.modal.Constructor = t, e.fn.modal.noConflict = function () {
			return e.fn.modal = r, this
		}, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (t) {
			var r = e(this),
				a = r.attr("href"),
				i = r.attr("data-target") || a && a.replace(/.*(?=#[^\s]+$)/, ""),
				s = e(document).find(i),
				o = s.data("bs.modal") ? "toggle" : e.extend({
					remote: !/#/.test(a) && a
				}, s.data(), r.data());
			r.is("a") && t.preventDefault(), s.one("show.bs.modal", function (e) {
				e.isDefaultPrevented() || s.one("hidden.bs.modal", function () {
					r.is(":visible") && r.trigger("focus")
				})
			}), n.call(s, o, this)
		})
	}(jQuery),
	function (e) {
		"use strict";
		var t = ["sanitize", "whiteList", "sanitizeFn"],
			n = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
			r = {
				"*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
				a: ["target", "href", "title", "rel"],
				area: [],
				b: [],
				br: [],
				col: [],
				code: [],
				div: [],
				em: [],
				hr: [],
				h1: [],
				h2: [],
				h3: [],
				h4: [],
				h5: [],
				h6: [],
				i: [],
				img: ["src", "alt", "title", "width", "height"],
				li: [],
				ol: [],
				p: [],
				pre: [],
				s: [],
				small: [],
				span: [],
				sub: [],
				sup: [],
				strong: [],
				u: [],
				ul: []
			},
			a = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
			i = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

		function s(t, r) {
			var s = t.nodeName.toLowerCase();
			if (-1 !== e.inArray(s, r)) return -1 === e.inArray(s, n) || Boolean(t.nodeValue.match(a) || t.nodeValue.match(i));
			for (var o = e(r).filter(function (e, t) {
					return t instanceof RegExp
				}), l = 0, d = o.length; l < d; l++)
				if (s.match(o[l])) return !0;
			return !1
		}

		function o(t, n, r) {
			if (0 === t.length) return t;
			if (r && "function" == typeof r) return r(t);
			if (!document.implementation || !document.implementation.createHTMLDocument) return t;
			var a = document.implementation.createHTMLDocument("sanitization");
			a.body.innerHTML = t;
			for (var i = e.map(n, function (e, t) {
					return t
				}), o = e(a.body).find("*"), l = 0, d = o.length; l < d; l++) {
				var u = o[l],
					c = u.nodeName.toLowerCase();
				if (-1 !== e.inArray(c, i))
					for (var f = e.map(u.attributes, function (e) {
							return e
						}), m = [].concat(n["*"] || [], n[c] || []), h = 0, p = f.length; h < p; h++) s(f[h], m) || u.removeAttribute(f[h].nodeName);
				else u.parentNode.removeChild(u)
			}
			return a.body.innerHTML
		}
		var l = function (e, t) {
			this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", e, t)
		};
		l.VERSION = "3.4.1", l.TRANSITION_DURATION = 150, l.DEFAULTS = {
			animation: !0,
			placement: "top",
			selector: !1,
			template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
			trigger: "hover focus",
			title: "",
			delay: 0,
			html: !1,
			container: !1,
			viewport: {
				selector: "body",
				padding: 0
			},
			sanitize: !0,
			sanitizeFn: null,
			whiteList: r
		}, l.prototype.init = function (t, n, r) {
			if (this.enabled = !0, this.type = t, this.$element = e(n), this.options = this.getOptions(r), this.$viewport = this.options.viewport && e(document).find(e.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
					click: !1,
					hover: !1,
					focus: !1
				}, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
			for (var a = this.options.trigger.split(" "), i = a.length; i--;) {
				var s = a[i];
				if ("click" == s) this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
				else if ("manual" != s) {
					var o = "hover" == s ? "mouseenter" : "focusin",
						l = "hover" == s ? "mouseleave" : "focusout";
					this.$element.on(o + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, e.proxy(this.leave, this))
				}
			}
			this.options.selector ? this._options = e.extend({}, this.options, {
				trigger: "manual",
				selector: ""
			}) : this.fixTitle()
		}, l.prototype.getDefaults = function () {
			return l.DEFAULTS
		}, l.prototype.getOptions = function (n) {
			var r = this.$element.data();
			for (var a in r) r.hasOwnProperty(a) && -1 !== e.inArray(a, t) && delete r[a];
			return (n = e.extend({}, this.getDefaults(), r, n)).delay && "number" == typeof n.delay && (n.delay = {
				show: n.delay,
				hide: n.delay
			}), n.sanitize && (n.template = o(n.template, n.whiteList, n.sanitizeFn)), n
		}, l.prototype.getDelegateOptions = function () {
			var t = {},
				n = this.getDefaults();
			return this._options && e.each(this._options, function (e, r) {
				n[e] != r && (t[e] = r)
			}), t
		}, l.prototype.enter = function (t) {
			var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
			if (n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusin" == t.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState) n.hoverState = "in";
			else {
				if (clearTimeout(n.timeout), n.hoverState = "in", !n.options.delay || !n.options.delay.show) return n.show();
				n.timeout = setTimeout(function () {
					"in" == n.hoverState && n.show()
				}, n.options.delay.show)
			}
		}, l.prototype.isInStateTrue = function () {
			for (var e in this.inState)
				if (this.inState[e]) return !0;
			return !1
		}, l.prototype.leave = function (t) {
			var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
			if (n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusout" == t.type ? "focus" : "hover"] = !1), !n.isInStateTrue()) {
				if (clearTimeout(n.timeout), n.hoverState = "out", !n.options.delay || !n.options.delay.hide) return n.hide();
				n.timeout = setTimeout(function () {
					"out" == n.hoverState && n.hide()
				}, n.options.delay.hide)
			}
		}, l.prototype.show = function () {
			var t = e.Event("show.bs." + this.type);
			if (this.hasContent() && this.enabled) {
				this.$element.trigger(t);
				var n = e.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
				if (t.isDefaultPrevented() || !n) return;
				var r = this,
					a = this.tip(),
					i = this.getUID(this.type);
				this.setContent(), a.attr("id", i), this.$element.attr("aria-describedby", i), this.options.animation && a.addClass("fade");
				var s = "function" == typeof this.options.placement ? this.options.placement.call(this, a[0], this.$element[0]) : this.options.placement,
					o = /\s?auto?\s?/i,
					d = o.test(s);
				d && (s = s.replace(o, "") || "top"), a.detach().css({
					top: 0,
					left: 0,
					display: "block"
				}).addClass(s).data("bs." + this.type, this), this.options.container ? a.appendTo(e(document).find(this.options.container)) : a.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
				var u = this.getPosition(),
					c = a[0].offsetWidth,
					f = a[0].offsetHeight;
				if (d) {
					var m = s,
						h = this.getPosition(this.$viewport);
					s = "bottom" == s && u.bottom + f > h.bottom ? "top" : "top" == s && u.top - f < h.top ? "bottom" : "right" == s && u.right + c > h.width ? "left" : "left" == s && u.left - c < h.left ? "right" : s, a.removeClass(m).addClass(s)
				}
				var p = this.getCalculatedOffset(s, u, c, f);
				this.applyPlacement(p, s);
				var _ = function () {
					var e = r.hoverState;
					r.$element.trigger("shown.bs." + r.type), r.hoverState = null, "out" == e && r.leave(r)
				};
				e.support.transition && this.$tip.hasClass("fade") ? a.one("bsTransitionEnd", _).emulateTransitionEnd(l.TRANSITION_DURATION) : _()
			}
		}, l.prototype.applyPlacement = function (t, n) {
			var r = this.tip(),
				a = r[0].offsetWidth,
				i = r[0].offsetHeight,
				s = parseInt(r.css("margin-top"), 10),
				o = parseInt(r.css("margin-left"), 10);
			isNaN(s) && (s = 0), isNaN(o) && (o = 0), t.top += s, t.left += o, e.offset.setOffset(r[0], e.extend({
				using: function (e) {
					r.css({
						top: Math.round(e.top),
						left: Math.round(e.left)
					})
				}
			}, t), 0), r.addClass("in");
			var l = r[0].offsetWidth,
				d = r[0].offsetHeight;
			"top" == n && d != i && (t.top = t.top + i - d);
			var u = this.getViewportAdjustedDelta(n, t, l, d);
			u.left ? t.left += u.left : t.top += u.top;
			var c = /top|bottom/.test(n),
				f = c ? 2 * u.left - a + l : 2 * u.top - i + d,
				m = c ? "offsetWidth" : "offsetHeight";
			r.offset(t), this.replaceArrow(f, r[0][m], c)
		}, l.prototype.replaceArrow = function (e, t, n) {
			this.arrow().css(n ? "left" : "top", 50 * (1 - e / t) + "%").css(n ? "top" : "left", "")
		}, l.prototype.setContent = function () {
			var e = this.tip(),
				t = this.getTitle();
			this.options.html ? (this.options.sanitize && (t = o(t, this.options.whiteList, this.options.sanitizeFn)), e.find(".tooltip-inner").html(t)) : e.find(".tooltip-inner").text(t), e.removeClass("fade in top bottom left right")
		}, l.prototype.hide = function (t) {
			var n = this,
				r = e(this.$tip),
				a = e.Event("hide.bs." + this.type);

			function i() {
				"in" != n.hoverState && r.detach(), n.$element && n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), t && t()
			}
			if (this.$element.trigger(a), !a.isDefaultPrevented()) return r.removeClass("in"), e.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(l.TRANSITION_DURATION) : i(), this.hoverState = null, this
		}, l.prototype.fixTitle = function () {
			var e = this.$element;
			(e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
		}, l.prototype.hasContent = function () {
			return this.getTitle()
		}, l.prototype.getPosition = function (t) {
			var n = (t = t || this.$element)[0],
				r = "BODY" == n.tagName,
				a = n.getBoundingClientRect();
			null == a.width && (a = e.extend({}, a, {
				width: a.right - a.left,
				height: a.bottom - a.top
			}));
			var i = window.SVGElement && n instanceof window.SVGElement,
				s = r ? {
					top: 0,
					left: 0
				} : i ? null : t.offset(),
				o = {
					scroll: r ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
				},
				l = r ? {
					width: e(window).width(),
					height: e(window).height()
				} : null;
			return e.extend({}, a, o, l, s)
		}, l.prototype.getCalculatedOffset = function (e, t, n, r) {
			return "bottom" == e ? {
				top: t.top + t.height,
				left: t.left + t.width / 2 - n / 2
			} : "top" == e ? {
				top: t.top - r,
				left: t.left + t.width / 2 - n / 2
			} : "left" == e ? {
				top: t.top + t.height / 2 - r / 2,
				left: t.left - n
			} : {
				top: t.top + t.height / 2 - r / 2,
				left: t.left + t.width
			}
		}, l.prototype.getViewportAdjustedDelta = function (e, t, n, r) {
			var a = {
				top: 0,
				left: 0
			};
			if (!this.$viewport) return a;
			var i = this.options.viewport && this.options.viewport.padding || 0,
				s = this.getPosition(this.$viewport);
			if (/right|left/.test(e)) {
				var o = t.top - i - s.scroll,
					l = t.top + i - s.scroll + r;
				o < s.top ? a.top = s.top - o : l > s.top + s.height && (a.top = s.top + s.height - l)
			} else {
				var d = t.left - i,
					u = t.left + i + n;
				d < s.left ? a.left = s.left - d : u > s.right && (a.left = s.left + s.width - u)
			}
			return a
		}, l.prototype.getTitle = function () {
			var e = this.$element,
				t = this.options;
			return e.attr("data-original-title") || ("function" == typeof t.title ? t.title.call(e[0]) : t.title)
		}, l.prototype.getUID = function (e) {
			do {
				e += ~~(1e6 * Math.random())
			} while (document.getElementById(e));
			return e
		}, l.prototype.tip = function () {
			if (!this.$tip && (this.$tip = e(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
			return this.$tip
		}, l.prototype.arrow = function () {
			return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
		}, l.prototype.enable = function () {
			this.enabled = !0
		}, l.prototype.disable = function () {
			this.enabled = !1
		}, l.prototype.toggleEnabled = function () {
			this.enabled = !this.enabled
		}, l.prototype.toggle = function (t) {
			var n = this;
			t && ((n = e(t.currentTarget).data("bs." + this.type)) || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n))), t ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
		}, l.prototype.destroy = function () {
			var e = this;
			clearTimeout(this.timeout), this.hide(function () {
				e.$element.off("." + e.type).removeData("bs." + e.type), e.$tip && e.$tip.detach(), e.$tip = null, e.$arrow = null, e.$viewport = null, e.$element = null
			})
		}, l.prototype.sanitizeHtml = function (e) {
			return o(e, this.options.whiteList, this.options.sanitizeFn)
		};
		var d = e.fn.tooltip;
		e.fn.tooltip = function (t) {
			return this.each(function () {
				var n = e(this),
					r = n.data("bs.tooltip"),
					a = "object" == typeof t && t;
				!r && /destroy|hide/.test(t) || (r || n.data("bs.tooltip", r = new l(this, a)), "string" == typeof t && r[t]())
			})
		}, e.fn.tooltip.Constructor = l, e.fn.tooltip.noConflict = function () {
			return e.fn.tooltip = d, this
		}
	}(jQuery),
	function (e) {
		"use strict";
		var t = function (e, t) {
			this.init("popover", e, t)
		};
		if (!e.fn.tooltip) throw new Error("Popover requires tooltip.js");
		t.VERSION = "3.4.1", t.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
			placement: "right",
			trigger: "click",
			content: "",
			template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
		}), t.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype), t.prototype.constructor = t, t.prototype.getDefaults = function () {
			return t.DEFAULTS
		}, t.prototype.setContent = function () {
			var e = this.tip(),
				t = this.getTitle(),
				n = this.getContent();
			if (this.options.html) {
				var r = typeof n;
				this.options.sanitize && (t = this.sanitizeHtml(t), "string" === r && (n = this.sanitizeHtml(n))), e.find(".popover-title").html(t), e.find(".popover-content").children().detach().end()["string" === r ? "html" : "append"](n)
			} else e.find(".popover-title").text(t), e.find(".popover-content").children().detach().end().text(n);
			e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide()
		}, t.prototype.hasContent = function () {
			return this.getTitle() || this.getContent()
		}, t.prototype.getContent = function () {
			var e = this.$element,
				t = this.options;
			return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
		}, t.prototype.arrow = function () {
			return this.$arrow = this.$arrow || this.tip().find(".arrow")
		};
		var n = e.fn.popover;
		e.fn.popover = function (n) {
			return this.each(function () {
				var r = e(this),
					a = r.data("bs.popover"),
					i = "object" == typeof n && n;
				!a && /destroy|hide/.test(n) || (a || r.data("bs.popover", a = new t(this, i)), "string" == typeof n && a[n]())
			})
		}, e.fn.popover.Constructor = t, e.fn.popover.noConflict = function () {
			return e.fn.popover = n, this
		}
	}(jQuery),
	function (e) {
		"use strict";

		function t(n, r) {
			this.$body = e(document.body), this.$scrollElement = e(n).is(document.body) ? e(window) : e(n), this.options = e.extend({}, t.DEFAULTS, r), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", e.proxy(this.process, this)), this.refresh(), this.process()
		}

		function n(n) {
			return this.each(function () {
				var r = e(this),
					a = r.data("bs.scrollspy"),
					i = "object" == typeof n && n;
				a || r.data("bs.scrollspy", a = new t(this, i)), "string" == typeof n && a[n]()
			})
		}
		t.VERSION = "3.4.1", t.DEFAULTS = {
			offset: 10
		}, t.prototype.getScrollHeight = function () {
			return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
		}, t.prototype.refresh = function () {
			var t = this,
				n = "offset",
				r = 0;
			this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), e.isWindow(this.$scrollElement[0]) || (n = "position", r = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
				var t = e(this),
					a = t.data("target") || t.attr("href"),
					i = /^#./.test(a) && e(a);
				return i && i.length && i.is(":visible") && [
					[i[n]().top + r, a]
				] || null
			}).sort(function (e, t) {
				return e[0] - t[0]
			}).each(function () {
				t.offsets.push(this[0]), t.targets.push(this[1])
			})
		}, t.prototype.process = function () {
			var e, t = this.$scrollElement.scrollTop() + this.options.offset,
				n = this.getScrollHeight(),
				r = this.options.offset + n - this.$scrollElement.height(),
				a = this.offsets,
				i = this.targets,
				s = this.activeTarget;
			if (this.scrollHeight != n && this.refresh(), t >= r) return s != (e = i[i.length - 1]) && this.activate(e);
			if (s && t < a[0]) return this.activeTarget = null, this.clear();
			for (e = a.length; e--;) s != i[e] && t >= a[e] && (void 0 === a[e + 1] || t < a[e + 1]) && this.activate(i[e])
		}, t.prototype.activate = function (t) {
			this.activeTarget = t, this.clear();
			var n = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
				r = e(n).parents("li").addClass("active");
			r.parent(".dropdown-menu").length && (r = r.closest("li.dropdown").addClass("active")), r.trigger("activate.bs.scrollspy")
		}, t.prototype.clear = function () {
			e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
		};
		var r = e.fn.scrollspy;
		e.fn.scrollspy = n, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.noConflict = function () {
			return e.fn.scrollspy = r, this
		}, e(window).on("load.bs.scrollspy.data-api", function () {
			e('[data-spy="scroll"]').each(function () {
				var t = e(this);
				n.call(t, t.data())
			})
		})
	}(jQuery),
	function (e) {
		"use strict";
		var t = function (t) {
			this.element = e(t)
		};

		function n(n) {
			return this.each(function () {
				var r = e(this),
					a = r.data("bs.tab");
				a || r.data("bs.tab", a = new t(this)), "string" == typeof n && a[n]()
			})
		}
		t.VERSION = "3.4.1", t.TRANSITION_DURATION = 150, t.prototype.show = function () {
			var t = this.element,
				n = t.closest("ul:not(.dropdown-menu)"),
				r = t.data("target");
			if (r || (r = (r = t.attr("href")) && r.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
				var a = n.find(".active:last a"),
					i = e.Event("hide.bs.tab", {
						relatedTarget: t[0]
					}),
					s = e.Event("show.bs.tab", {
						relatedTarget: a[0]
					});
				if (a.trigger(i), t.trigger(s), !s.isDefaultPrevented() && !i.isDefaultPrevented()) {
					var o = e(document).find(r);
					this.activate(t.closest("li"), n), this.activate(o, o.parent(), function () {
						a.trigger({
							type: "hidden.bs.tab",
							relatedTarget: t[0]
						}), t.trigger({
							type: "shown.bs.tab",
							relatedTarget: a[0]
						})
					})
				}
			}
		}, t.prototype.activate = function (n, r, a) {
			var i = r.find("> .active"),
				s = a && e.support.transition && (i.length && i.hasClass("fade") || !!r.find("> .fade").length);

			function o() {
				i.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), n.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), s ? (n[0].offsetWidth, n.addClass("in")) : n.removeClass("fade"), n.parent(".dropdown-menu").length && n.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), a && a()
			}
			i.length && s ? i.one("bsTransitionEnd", o).emulateTransitionEnd(t.TRANSITION_DURATION) : o(), i.removeClass("in")
		};
		var r = e.fn.tab;
		e.fn.tab = n, e.fn.tab.Constructor = t, e.fn.tab.noConflict = function () {
			return e.fn.tab = r, this
		};
		var a = function (t) {
			t.preventDefault(), n.call(e(this), "show")
		};
		e(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', a).on("click.bs.tab.data-api", '[data-toggle="pill"]', a)
	}(jQuery),
	function (e) {
		"use strict";
		var t = function (n, r) {
			this.options = e.extend({}, t.DEFAULTS, r);
			var a = this.options.target === t.DEFAULTS.target ? e(this.options.target) : e(document).find(this.options.target);
			this.$target = a.on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)), this.$element = e(n), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
		};

		function n(n) {
			return this.each(function () {
				var r = e(this),
					a = r.data("bs.affix"),
					i = "object" == typeof n && n;
				a || r.data("bs.affix", a = new t(this, i)), "string" == typeof n && a[n]()
			})
		}
		t.VERSION = "3.4.1", t.RESET = "affix affix-top affix-bottom", t.DEFAULTS = {
			offset: 0,
			target: window
		}, t.prototype.getState = function (e, t, n, r) {
			var a = this.$target.scrollTop(),
				i = this.$element.offset(),
				s = this.$target.height();
			if (null != n && "top" == this.affixed) return a < n && "top";
			if ("bottom" == this.affixed) return null != n ? !(a + this.unpin <= i.top) && "bottom" : !(a + s <= e - r) && "bottom";
			var o = null == this.affixed,
				l = o ? a : i.top;
			return null != n && a <= n ? "top" : null != r && l + (o ? s : t) >= e - r && "bottom"
		}, t.prototype.getPinnedOffset = function () {
			if (this.pinnedOffset) return this.pinnedOffset;
			this.$element.removeClass(t.RESET).addClass("affix");
			var e = this.$target.scrollTop(),
				n = this.$element.offset();
			return this.pinnedOffset = n.top - e
		}, t.prototype.checkPositionWithEventLoop = function () {
			setTimeout(e.proxy(this.checkPosition, this), 1)
		}, t.prototype.checkPosition = function () {
			if (this.$element.is(":visible")) {
				var n = this.$element.height(),
					r = this.options.offset,
					a = r.top,
					i = r.bottom,
					s = Math.max(e(document).height(), e(document.body).height());
				"object" != typeof r && (i = a = r), "function" == typeof a && (a = r.top(this.$element)), "function" == typeof i && (i = r.bottom(this.$element));
				var o = this.getState(s, n, a, i);
				if (this.affixed != o) {
					null != this.unpin && this.$element.css("top", "");
					var l = "affix" + (o ? "-" + o : ""),
						d = e.Event(l + ".bs.affix");
					if (this.$element.trigger(d), d.isDefaultPrevented()) return;
					this.affixed = o, this.unpin = "bottom" == o ? this.getPinnedOffset() : null, this.$element.removeClass(t.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
				}
				"bottom" == o && this.$element.offset({
					top: s - n - i
				})
			}
		};
		var r = e.fn.affix;
		e.fn.affix = n, e.fn.affix.Constructor = t, e.fn.affix.noConflict = function () {
			return e.fn.affix = r, this
		}, e(window).on("load", function () {
			e('[data-spy="affix"]').each(function () {
				var t = e(this),
					r = t.data();
				r.offset = r.offset || {}, null != r.offsetBottom && (r.offset.bottom = r.offsetBottom), null != r.offsetTop && (r.offset.top = r.offsetTop), n.call(t, r)
			})
		})
	}(jQuery)
}, function (e, t, n) {
	e.exports = n(152)
}, function (e, t, n) {
	"use strict";
	var r = n(2),
		a = n(8),
		i = n(154),
		s = n(6);

	function o(e) {
		var t = new i(e),
			n = a(i.prototype.request, t);
		return r.extend(n, i.prototype, t), r.extend(n, t), n
	}
	var l = o(s);
	l.Axios = i, l.create = function (e) {
		return o(r.merge(s, e))
	}, l.Cancel = n(13), l.CancelToken = n(167), l.isCancel = n(12), l.all = function (e) {
		return Promise.all(e)
	}, l.spread = n(168), e.exports = l, e.exports.default = l
}, function (e, t) {
	e.exports = function (e) {
		return null != e && null != e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
	}
}, function (e, t, n) {
	"use strict";
	var r = n(6),
		a = n(2),
		i = n(162),
		s = n(163);

	function o(e) {
		this.defaults = e, this.interceptors = {
			request: new i,
			response: new i
		}
	}
	o.prototype.request = function (e) {
		"string" == typeof e && (e = a.merge({
			url: arguments[0]
		}, arguments[1])), (e = a.merge(r, {
			method: "get"
		}, this.defaults, e)).method = e.method.toLowerCase();
		var t = [s, void 0],
			n = Promise.resolve(e);
		for (this.interceptors.request.forEach(function (e) {
				t.unshift(e.fulfilled, e.rejected)
			}), this.interceptors.response.forEach(function (e) {
				t.push(e.fulfilled, e.rejected)
			}); t.length;) n = n.then(t.shift(), t.shift());
		return n
	}, a.forEach(["delete", "get", "head", "options"], function (e) {
		o.prototype[e] = function (t, n) {
			return this.request(a.merge(n || {}, {
				method: e,
				url: t
			}))
		}
	}), a.forEach(["post", "put", "patch"], function (e) {
		o.prototype[e] = function (t, n, r) {
			return this.request(a.merge(r || {}, {
				method: e,
				url: t,
				data: n
			}))
		}
	}), e.exports = o
}, function (e, t, n) {
	"use strict";
	var r = n(2);
	e.exports = function (e, t) {
		r.forEach(e, function (n, r) {
			r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r])
		})
	}
}, function (e, t, n) {
	"use strict";
	var r = n(11);
	e.exports = function (e, t, n) {
		var a = n.config.validateStatus;
		n.status && a && !a(n.status) ? t(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n)
	}
}, function (e, t, n) {
	"use strict";
	e.exports = function (e, t, n, r, a) {
		return e.config = t, n && (e.code = n), e.request = r, e.response = a, e
	}
}, function (e, t, n) {
	"use strict";
	var r = n(2);

	function a(e) {
		return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
	}
	e.exports = function (e, t, n) {
		if (!t) return e;
		var i;
		if (n) i = n(t);
		else if (r.isURLSearchParams(t)) i = t.toString();
		else {
			var s = [];
			r.forEach(t, function (e, t) {
				null !== e && void 0 !== e && (r.isArray(e) ? t += "[]" : e = [e], r.forEach(e, function (e) {
					r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)), s.push(a(t) + "=" + a(e))
				}))
			}), i = s.join("&")
		}
		return i && (e += (-1 === e.indexOf("?") ? "?" : "&") + i), e
	}
}, function (e, t, n) {
	"use strict";
	var r = n(2),
		a = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
	e.exports = function (e) {
		var t, n, i, s = {};
		return e ? (r.forEach(e.split("\n"), function (e) {
			if (i = e.indexOf(":"), t = r.trim(e.substr(0, i)).toLowerCase(), n = r.trim(e.substr(i + 1)), t) {
				if (s[t] && a.indexOf(t) >= 0) return;
				s[t] = "set-cookie" === t ? (s[t] ? s[t] : []).concat([n]) : s[t] ? s[t] + ", " + n : n
			}
		}), s) : s
	}
}, function (e, t, n) {
	"use strict";
	var r = n(2);
	e.exports = r.isStandardBrowserEnv() ? function () {
		var e, t = /(msie|trident)/i.test(navigator.userAgent),
			n = document.createElement("a");

		function a(e) {
			var r = e;
			return t && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), {
				href: n.href,
				protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
				host: n.host,
				search: n.search ? n.search.replace(/^\?/, "") : "",
				hash: n.hash ? n.hash.replace(/^#/, "") : "",
				hostname: n.hostname,
				port: n.port,
				pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
			}
		}
		return e = a(window.location.href),
			function (t) {
				var n = r.isString(t) ? a(t) : t;
				return n.protocol === e.protocol && n.host === e.host
			}
	}() : function () {
		return !0
	}
}, function (e, t, n) {
	"use strict";
	var r = n(2);
	e.exports = r.isStandardBrowserEnv() ? {
		write: function (e, t, n, a, i, s) {
			var o = [];
			o.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()), r.isString(a) && o.push("path=" + a), r.isString(i) && o.push("domain=" + i), !0 === s && o.push("secure"), document.cookie = o.join("; ")
		},
		read: function (e) {
			var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
			return t ? decodeURIComponent(t[3]) : null
		},
		remove: function (e) {
			this.write(e, "", Date.now() - 864e5)
		}
	} : {
		write: function () {},
		read: function () {
			return null
		},
		remove: function () {}
	}
}, function (e, t, n) {
	"use strict";
	var r = n(2);

	function a() {
		this.handlers = []
	}
	a.prototype.use = function (e, t) {
		return this.handlers.push({
			fulfilled: e,
			rejected: t
		}), this.handlers.length - 1
	}, a.prototype.eject = function (e) {
		this.handlers[e] && (this.handlers[e] = null)
	}, a.prototype.forEach = function (e) {
		r.forEach(this.handlers, function (t) {
			null !== t && e(t)
		})
	}, e.exports = a
}, function (e, t, n) {
	"use strict";
	var r = n(2),
		a = n(164),
		i = n(12),
		s = n(6),
		o = n(165),
		l = n(166);

	function d(e) {
		e.cancelToken && e.cancelToken.throwIfRequested()
	}
	e.exports = function (e) {
		return d(e), e.baseURL && !o(e.url) && (e.url = l(e.baseURL, e.url)), e.headers = e.headers || {}, e.data = a(e.data, e.headers, e.transformRequest), e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (t) {
			delete e.headers[t]
		}), (e.adapter || s.adapter)(e).then(function (t) {
			return d(e), t.data = a(t.data, t.headers, e.transformResponse), t
		}, function (t) {
			return i(t) || (d(e), t && t.response && (t.response.data = a(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
		})
	}
}, function (e, t, n) {
	"use strict";
	var r = n(2);
	e.exports = function (e, t, n) {
		return r.forEach(n, function (n) {
			e = n(e, t)
		}), e
	}
}, function (e, t, n) {
	"use strict";
	e.exports = function (e) {
		return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
	}
}, function (e, t, n) {
	"use strict";
	e.exports = function (e, t) {
		return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
	}
}, function (e, t, n) {
	"use strict";
	var r = n(13);

	function a(e) {
		if ("function" != typeof e) throw new TypeError("executor must be a function.");
		var t;
		this.promise = new Promise(function (e) {
			t = e
		});
		var n = this;
		e(function (e) {
			n.reason || (n.reason = new r(e), t(n.reason))
		})
	}
	a.prototype.throwIfRequested = function () {
		if (this.reason) throw this.reason
	}, a.source = function () {
		var e;
		return {
			token: new a(function (t) {
				e = t
			}),
			cancel: e
		}
	}, e.exports = a
}, function (e, t, n) {
	"use strict";
	e.exports = function (e) {
		return function (t) {
			return e.apply(null, t)
		}
	}
}, function (e, t, n) {
	e.exports = n(170)
}, function (e, t, n) {
	"use strict";
	(function (t, n) {
		var r = Object.freeze({});

		function a(e) {
			return null == e
		}

		function i(e) {
			return null != e
		}

		function s(e) {
			return !0 === e
		}

		function o(e) {
			return "string" == typeof e || "number" == typeof e || "symbol" == typeof e || "boolean" == typeof e
		}

		function l(e) {
			return null !== e && "object" == typeof e
		}
		var d = Object.prototype.toString;

		function u(e) {
			return "[object Object]" === d.call(e)
		}

		function c(e) {
			var t = parseFloat(String(e));
			return t >= 0 && Math.floor(t) === t && isFinite(e)
		}

		function f(e) {
			return i(e) && "function" == typeof e.then && "function" == typeof e.catch
		}

		function m(e) {
			return null == e ? "" : Array.isArray(e) || u(e) && e.toString === d ? JSON.stringify(e, null, 2) : String(e)
		}

		function h(e) {
			var t = parseFloat(e);
			return isNaN(t) ? e : t
		}

		function p(e, t) {
			for (var n = Object.create(null), r = e.split(","), a = 0; a < r.length; a++) n[r[a]] = !0;
			return t ? function (e) {
				return n[e.toLowerCase()]
			} : function (e) {
				return n[e]
			}
		}
		var _ = p("slot,component", !0),
			v = p("key,ref,slot,slot-scope,is");

		function y(e, t) {
			if (e.length) {
				var n = e.indexOf(t);
				if (n > -1) return e.splice(n, 1)
			}
		}
		var g = Object.prototype.hasOwnProperty;

		function M(e, t) {
			return g.call(e, t)
		}

		function b(e) {
			var t = Object.create(null);
			return function (n) {
				return t[n] || (t[n] = e(n))
			}
		}
		var L = /-(\w)/g,
			k = b(function (e) {
				return e.replace(L, function (e, t) {
					return t ? t.toUpperCase() : ""
				})
			}),
			w = b(function (e) {
				return e.charAt(0).toUpperCase() + e.slice(1)
			}),
			Y = /\B([A-Z])/g,
			x = b(function (e) {
				return e.replace(Y, "-$1").toLowerCase()
			}),
			T = Function.prototype.bind ? function (e, t) {
				return e.bind(t)
			} : function (e, t) {
				function n(n) {
					var r = arguments.length;
					return r ? r > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t)
				}
				return n._length = e.length, n
			};

		function D(e, t) {
			t = t || 0;
			for (var n = e.length - t, r = new Array(n); n--;) r[n] = e[n + t];
			return r
		}

		function S(e, t) {
			for (var n in t) e[n] = t[n];
			return e
		}

		function j(e) {
			for (var t = {}, n = 0; n < e.length; n++) e[n] && S(t, e[n]);
			return t
		}

		function C(e, t, n) {}
		var H = function (e, t, n) {
				return !1
			},
			A = function (e) {
				return e
			};

		function E(e, t) {
			if (e === t) return !0;
			var n = l(e),
				r = l(t);
			if (!n || !r) return !n && !r && String(e) === String(t);
			try {
				var a = Array.isArray(e),
					i = Array.isArray(t);
				if (a && i) return e.length === t.length && e.every(function (e, n) {
					return E(e, t[n])
				});
				if (e instanceof Date && t instanceof Date) return e.getTime() === t.getTime();
				if (a || i) return !1;
				var s = Object.keys(e),
					o = Object.keys(t);
				return s.length === o.length && s.every(function (n) {
					return E(e[n], t[n])
				})
			} catch (e) {
				return !1
			}
		}

		function P(e, t) {
			for (var n = 0; n < e.length; n++)
				if (E(e[n], t)) return n;
			return -1
		}

		function O(e) {
			var t = !1;
			return function () {
				t || (t = !0, e.apply(this, arguments))
			}
		}
		var $ = "data-server-rendered",
			N = ["component", "directive", "filter"],
			R = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch"],
			F = {
				optionMergeStrategies: Object.create(null),
				silent: !1,
				productionTip: !1,
				devtools: !1,
				performance: !1,
				errorHandler: null,
				warnHandler: null,
				ignoredElements: [],
				keyCodes: Object.create(null),
				isReservedTag: H,
				isReservedAttr: H,
				isUnknownElement: H,
				getTagNamespace: C,
				parsePlatformTagName: A,
				mustUseProp: H,
				async: !0,
				_lifecycleHooks: R
			},
			W = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

		function I(e, t, n, r) {
			Object.defineProperty(e, t, {
				value: n,
				enumerable: !!r,
				writable: !0,
				configurable: !0
			})
		}
		var z, U = new RegExp("[^" + W.source + ".$_\\d]"),
			q = "__proto__" in {},
			J = "undefined" != typeof window,
			B = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform,
			V = B && WXEnvironment.platform.toLowerCase(),
			G = J && window.navigator.userAgent.toLowerCase(),
			K = G && /msie|trident/.test(G),
			X = G && G.indexOf("msie 9.0") > 0,
			Q = G && G.indexOf("edge/") > 0,
			Z = (G && G.indexOf("android"), G && /iphone|ipad|ipod|ios/.test(G) || "ios" === V),
			ee = (G && /chrome\/\d+/.test(G), G && /phantomjs/.test(G), G && G.match(/firefox\/(\d+)/)),
			te = {}.watch,
			ne = !1;
		if (J) try {
			var re = {};
			Object.defineProperty(re, "passive", {
				get: function () {
					ne = !0
				}
			}), window.addEventListener("test-passive", null, re)
		} catch (r) {}
		var ae = function () {
				return void 0 === z && (z = !J && !B && void 0 !== t && t.process && "server" === t.process.env.VUE_ENV), z
			},
			ie = J && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

		function se(e) {
			return "function" == typeof e && /native code/.test(e.toString())
		}
		var oe, le = "undefined" != typeof Symbol && se(Symbol) && "undefined" != typeof Reflect && se(Reflect.ownKeys);
		oe = "undefined" != typeof Set && se(Set) ? Set : function () {
			function e() {
				this.set = Object.create(null)
			}
			return e.prototype.has = function (e) {
				return !0 === this.set[e]
			}, e.prototype.add = function (e) {
				this.set[e] = !0
			}, e.prototype.clear = function () {
				this.set = Object.create(null)
			}, e
		}();
		var de = C,
			ue = 0,
			ce = function () {
				this.id = ue++, this.subs = []
			};
		ce.prototype.addSub = function (e) {
			this.subs.push(e)
		}, ce.prototype.removeSub = function (e) {
			y(this.subs, e)
		}, ce.prototype.depend = function () {
			ce.target && ce.target.addDep(this)
		}, ce.prototype.notify = function () {
			for (var e = this.subs.slice(), t = 0, n = e.length; t < n; t++) e[t].update()
		}, ce.target = null;
		var fe = [];

		function me(e) {
			fe.push(e), ce.target = e
		}

		function he() {
			fe.pop(), ce.target = fe[fe.length - 1]
		}
		var pe = function (e, t, n, r, a, i, s, o) {
				this.tag = e, this.data = t, this.children = n, this.text = r, this.elm = a, this.ns = void 0, this.context = i, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = t && t.key, this.componentOptions = s, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = o, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1
			},
			_e = {
				child: {
					configurable: !0
				}
			};
		_e.child.get = function () {
			return this.componentInstance
		}, Object.defineProperties(pe.prototype, _e);
		var ve = function (e) {
			void 0 === e && (e = "");
			var t = new pe;
			return t.text = e, t.isComment = !0, t
		};

		function ye(e) {
			return new pe(void 0, void 0, void 0, String(e))
		}

		function ge(e) {
			var t = new pe(e.tag, e.data, e.children && e.children.slice(), e.text, e.elm, e.context, e.componentOptions, e.asyncFactory);
			return t.ns = e.ns, t.isStatic = e.isStatic, t.key = e.key, t.isComment = e.isComment, t.fnContext = e.fnContext, t.fnOptions = e.fnOptions, t.fnScopeId = e.fnScopeId, t.asyncMeta = e.asyncMeta, t.isCloned = !0, t
		}
		var Me = Array.prototype,
			be = Object.create(Me);
		["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function (e) {
			var t = Me[e];
			I(be, e, function () {
				for (var n = [], r = arguments.length; r--;) n[r] = arguments[r];
				var a, i = t.apply(this, n),
					s = this.__ob__;
				switch (e) {
					case "push":
					case "unshift":
						a = n;
						break;
					case "splice":
						a = n.slice(2)
				}
				return a && s.observeArray(a), s.dep.notify(), i
			})
		});
		var Le = Object.getOwnPropertyNames(be),
			ke = !0;

		function we(e) {
			ke = e
		}
		var Ye = function (e) {
			var t;
			this.value = e, this.dep = new ce, this.vmCount = 0, I(e, "__ob__", this), Array.isArray(e) ? (q ? (t = be, e.__proto__ = t) : function (e, t, n) {
				for (var r = 0, a = n.length; r < a; r++) {
					var i = n[r];
					I(e, i, t[i])
				}
			}(e, be, Le), this.observeArray(e)) : this.walk(e)
		};

		function xe(e, t) {
			var n;
			if (l(e) && !(e instanceof pe)) return M(e, "__ob__") && e.__ob__ instanceof Ye ? n = e.__ob__ : ke && !ae() && (Array.isArray(e) || u(e)) && Object.isExtensible(e) && !e._isVue && (n = new Ye(e)), t && n && n.vmCount++, n
		}

		function Te(e, t, n, r, a) {
			var i = new ce,
				s = Object.getOwnPropertyDescriptor(e, t);
			if (!s || !1 !== s.configurable) {
				var o = s && s.get,
					l = s && s.set;
				o && !l || 2 !== arguments.length || (n = e[t]);
				var d = !a && xe(n);
				Object.defineProperty(e, t, {
					enumerable: !0,
					configurable: !0,
					get: function () {
						var t = o ? o.call(e) : n;
						return ce.target && (i.depend(), d && (d.dep.depend(), Array.isArray(t) && function e(t) {
							for (var n = void 0, r = 0, a = t.length; r < a; r++)(n = t[r]) && n.__ob__ && n.__ob__.dep.depend(), Array.isArray(n) && e(n)
						}(t))), t
					},
					set: function (t) {
						var r = o ? o.call(e) : n;
						t === r || t != t && r != r || o && !l || (l ? l.call(e, t) : n = t, d = !a && xe(t), i.notify())
					}
				})
			}
		}

		function De(e, t, n) {
			if (Array.isArray(e) && c(t)) return e.length = Math.max(e.length, t), e.splice(t, 1, n), n;
			if (t in e && !(t in Object.prototype)) return e[t] = n, n;
			var r = e.__ob__;
			return e._isVue || r && r.vmCount ? n : r ? (Te(r.value, t, n), r.dep.notify(), n) : (e[t] = n, n)
		}

		function Se(e, t) {
			if (Array.isArray(e) && c(t)) e.splice(t, 1);
			else {
				var n = e.__ob__;
				e._isVue || n && n.vmCount || M(e, t) && (delete e[t], n && n.dep.notify())
			}
		}
		Ye.prototype.walk = function (e) {
			for (var t = Object.keys(e), n = 0; n < t.length; n++) Te(e, t[n])
		}, Ye.prototype.observeArray = function (e) {
			for (var t = 0, n = e.length; t < n; t++) xe(e[t])
		};
		var je = F.optionMergeStrategies;

		function Ce(e, t) {
			if (!t) return e;
			for (var n, r, a, i = le ? Reflect.ownKeys(t) : Object.keys(t), s = 0; s < i.length; s++) "__ob__" !== (n = i[s]) && (r = e[n], a = t[n], M(e, n) ? r !== a && u(r) && u(a) && Ce(r, a) : De(e, n, a));
			return e
		}

		function He(e, t, n) {
			return n ? function () {
				var r = "function" == typeof t ? t.call(n, n) : t,
					a = "function" == typeof e ? e.call(n, n) : e;
				return r ? Ce(r, a) : a
			} : t ? e ? function () {
				return Ce("function" == typeof t ? t.call(this, this) : t, "function" == typeof e ? e.call(this, this) : e)
			} : t : e
		}

		function Ae(e, t) {
			var n = t ? e ? e.concat(t) : Array.isArray(t) ? t : [t] : e;
			return n ? function (e) {
				for (var t = [], n = 0; n < e.length; n++) - 1 === t.indexOf(e[n]) && t.push(e[n]);
				return t
			}(n) : n
		}

		function Ee(e, t, n, r) {
			var a = Object.create(e || null);
			return t ? S(a, t) : a
		}
		je.data = function (e, t, n) {
			return n ? He(e, t, n) : t && "function" != typeof t ? e : He(e, t)
		}, R.forEach(function (e) {
			je[e] = Ae
		}), N.forEach(function (e) {
			je[e + "s"] = Ee
		}), je.watch = function (e, t, n, r) {
			if (e === te && (e = void 0), t === te && (t = void 0), !t) return Object.create(e || null);
			if (!e) return t;
			var a = {};
			for (var i in S(a, e), t) {
				var s = a[i],
					o = t[i];
				s && !Array.isArray(s) && (s = [s]), a[i] = s ? s.concat(o) : Array.isArray(o) ? o : [o]
			}
			return a
		}, je.props = je.methods = je.inject = je.computed = function (e, t, n, r) {
			if (!e) return t;
			var a = Object.create(null);
			return S(a, e), t && S(a, t), a
		}, je.provide = He;
		var Pe = function (e, t) {
			return void 0 === t ? e : t
		};

		function Oe(e, t, n) {
			if ("function" == typeof t && (t = t.options), function (e, t) {
					var n = e.props;
					if (n) {
						var r, a, i = {};
						if (Array.isArray(n))
							for (r = n.length; r--;) "string" == typeof (a = n[r]) && (i[k(a)] = {
								type: null
							});
						else if (u(n))
							for (var s in n) a = n[s], i[k(s)] = u(a) ? a : {
								type: a
							};
						e.props = i
					}
				}(t), function (e, t) {
					var n = e.inject;
					if (n) {
						var r = e.inject = {};
						if (Array.isArray(n))
							for (var a = 0; a < n.length; a++) r[n[a]] = {
								from: n[a]
							};
						else if (u(n))
							for (var i in n) {
								var s = n[i];
								r[i] = u(s) ? S({
									from: i
								}, s) : {
									from: s
								}
							}
					}
				}(t), function (e) {
					var t = e.directives;
					if (t)
						for (var n in t) {
							var r = t[n];
							"function" == typeof r && (t[n] = {
								bind: r,
								update: r
							})
						}
				}(t), !t._base && (t.extends && (e = Oe(e, t.extends, n)), t.mixins))
				for (var r = 0, a = t.mixins.length; r < a; r++) e = Oe(e, t.mixins[r], n);
			var i, s = {};
			for (i in e) o(i);
			for (i in t) M(e, i) || o(i);

			function o(r) {
				var a = je[r] || Pe;
				s[r] = a(e[r], t[r], n, r)
			}
			return s
		}

		function $e(e, t, n, r) {
			if ("string" == typeof n) {
				var a = e[t];
				if (M(a, n)) return a[n];
				var i = k(n);
				if (M(a, i)) return a[i];
				var s = w(i);
				return M(a, s) ? a[s] : a[n] || a[i] || a[s]
			}
		}

		function Ne(e, t, n, r) {
			var a = t[e],
				i = !M(n, e),
				s = n[e],
				o = We(Boolean, a.type);
			if (o > -1)
				if (i && !M(a, "default")) s = !1;
				else if ("" === s || s === x(e)) {
				var l = We(String, a.type);
				(l < 0 || o < l) && (s = !0)
			}
			if (void 0 === s) {
				s = function (e, t, n) {
					if (M(t, "default")) {
						var r = t.default;
						return e && e.$options.propsData && void 0 === e.$options.propsData[n] && void 0 !== e._props[n] ? e._props[n] : "function" == typeof r && "Function" !== Re(t.type) ? r.call(e) : r
					}
				}(r, a, e);
				var d = ke;
				we(!0), xe(s), we(d)
			}
			return s
		}

		function Re(e) {
			var t = e && e.toString().match(/^\s*function (\w+)/);
			return t ? t[1] : ""
		}

		function Fe(e, t) {
			return Re(e) === Re(t)
		}

		function We(e, t) {
			if (!Array.isArray(t)) return Fe(t, e) ? 0 : -1;
			for (var n = 0, r = t.length; n < r; n++)
				if (Fe(t[n], e)) return n;
			return -1
		}

		function Ie(e, t, n) {
			me();
			try {
				if (t)
					for (var r = t; r = r.$parent;) {
						var a = r.$options.errorCaptured;
						if (a)
							for (var i = 0; i < a.length; i++) try {
								if (!1 === a[i].call(r, e, t, n)) return
							} catch (e) {
								Ue(e, r, "errorCaptured hook")
							}
					}
				Ue(e, t, n)
			} finally {
				he()
			}
		}

		function ze(e, t, n, r, a) {
			var i;
			try {
				(i = n ? e.apply(t, n) : e.call(t)) && !i._isVue && f(i) && !i._handled && (i.catch(function (e) {
					return Ie(e, r, a + " (Promise/async)")
				}), i._handled = !0)
			} catch (e) {
				Ie(e, r, a)
			}
			return i
		}

		function Ue(e, t, n) {
			if (F.errorHandler) try {
				return F.errorHandler.call(null, e, t, n)
			} catch (t) {
				t !== e && qe(t, null, "config.errorHandler")
			}
			qe(e, t, n)
		}

		function qe(e, t, n) {
			if (!J && !B || "undefined" == typeof console) throw e;
			console.error(e)
		}
		var Je, Be = !1,
			Ve = [],
			Ge = !1;

		function Ke() {
			Ge = !1;
			var e = Ve.slice(0);
			Ve.length = 0;
			for (var t = 0; t < e.length; t++) e[t]()
		}
		if ("undefined" != typeof Promise && se(Promise)) {
			var Xe = Promise.resolve();
			Je = function () {
				Xe.then(Ke), Z && setTimeout(C)
			}, Be = !0
		} else if (K || "undefined" == typeof MutationObserver || !se(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) Je = void 0 !== n && se(n) ? function () {
			n(Ke)
		} : function () {
			setTimeout(Ke, 0)
		};
		else {
			var Qe = 1,
				Ze = new MutationObserver(Ke),
				et = document.createTextNode(String(Qe));
			Ze.observe(et, {
				characterData: !0
			}), Je = function () {
				Qe = (Qe + 1) % 2, et.data = String(Qe)
			}, Be = !0
		}

		function tt(e, t) {
			var n;
			if (Ve.push(function () {
					if (e) try {
						e.call(t)
					} catch (e) {
						Ie(e, t, "nextTick")
					} else n && n(t)
				}), Ge || (Ge = !0, Je()), !e && "undefined" != typeof Promise) return new Promise(function (e) {
				n = e
			})
		}
		var nt = new oe;

		function rt(e) {
			! function e(t, n) {
				var r, a, i = Array.isArray(t);
				if (!(!i && !l(t) || Object.isFrozen(t) || t instanceof pe)) {
					if (t.__ob__) {
						var s = t.__ob__.dep.id;
						if (n.has(s)) return;
						n.add(s)
					}
					if (i)
						for (r = t.length; r--;) e(t[r], n);
					else
						for (r = (a = Object.keys(t)).length; r--;) e(t[a[r]], n)
				}
			}(e, nt), nt.clear()
		}
		var at = b(function (e) {
			var t = "&" === e.charAt(0),
				n = "~" === (e = t ? e.slice(1) : e).charAt(0),
				r = "!" === (e = n ? e.slice(1) : e).charAt(0);
			return {
				name: e = r ? e.slice(1) : e,
				once: n,
				capture: r,
				passive: t
			}
		});

		function it(e, t) {
			function n() {
				var e = arguments,
					r = n.fns;
				if (!Array.isArray(r)) return ze(r, null, arguments, t, "v-on handler");
				for (var a = r.slice(), i = 0; i < a.length; i++) ze(a[i], null, e, t, "v-on handler")
			}
			return n.fns = e, n
		}

		function st(e, t, n, r, i, o) {
			var l, d, u, c;
			for (l in e) d = e[l], u = t[l], c = at(l), a(d) || (a(u) ? (a(d.fns) && (d = e[l] = it(d, o)), s(c.once) && (d = e[l] = i(c.name, d, c.capture)), n(c.name, d, c.capture, c.passive, c.params)) : d !== u && (u.fns = d, e[l] = u));
			for (l in t) a(e[l]) && r((c = at(l)).name, t[l], c.capture)
		}

		function ot(e, t, n) {
			var r;
			e instanceof pe && (e = e.data.hook || (e.data.hook = {}));
			var o = e[t];

			function l() {
				n.apply(this, arguments), y(r.fns, l)
			}
			a(o) ? r = it([l]) : i(o.fns) && s(o.merged) ? (r = o).fns.push(l) : r = it([o, l]), r.merged = !0, e[t] = r
		}

		function lt(e, t, n, r, a) {
			if (i(t)) {
				if (M(t, n)) return e[n] = t[n], a || delete t[n], !0;
				if (M(t, r)) return e[n] = t[r], a || delete t[r], !0
			}
			return !1
		}

		function dt(e) {
			return o(e) ? [ye(e)] : Array.isArray(e) ? function e(t, n) {
				var r, l, d, u, c = [];
				for (r = 0; r < t.length; r++) a(l = t[r]) || "boolean" == typeof l || (u = c[d = c.length - 1], Array.isArray(l) ? l.length > 0 && (ut((l = e(l, (n || "") + "_" + r))[0]) && ut(u) && (c[d] = ye(u.text + l[0].text), l.shift()), c.push.apply(c, l)) : o(l) ? ut(u) ? c[d] = ye(u.text + l) : "" !== l && c.push(ye(l)) : ut(l) && ut(u) ? c[d] = ye(u.text + l.text) : (s(t._isVList) && i(l.tag) && a(l.key) && i(n) && (l.key = "__vlist" + n + "_" + r + "__"), c.push(l)));
				return c
			}(e) : void 0
		}

		function ut(e) {
			return i(e) && i(e.text) && !1 === e.isComment
		}

		function ct(e, t) {
			if (e) {
				for (var n = Object.create(null), r = le ? Reflect.ownKeys(e) : Object.keys(e), a = 0; a < r.length; a++) {
					var i = r[a];
					if ("__ob__" !== i) {
						for (var s = e[i].from, o = t; o;) {
							if (o._provided && M(o._provided, s)) {
								n[i] = o._provided[s];
								break
							}
							o = o.$parent
						}
						if (!o && "default" in e[i]) {
							var l = e[i].default;
							n[i] = "function" == typeof l ? l.call(t) : l
						}
					}
				}
				return n
			}
		}

		function ft(e, t) {
			if (!e || !e.length) return {};
			for (var n = {}, r = 0, a = e.length; r < a; r++) {
				var i = e[r],
					s = i.data;
				if (s && s.attrs && s.attrs.slot && delete s.attrs.slot, i.context !== t && i.fnContext !== t || !s || null == s.slot)(n.default || (n.default = [])).push(i);
				else {
					var o = s.slot,
						l = n[o] || (n[o] = []);
					"template" === i.tag ? l.push.apply(l, i.children || []) : l.push(i)
				}
			}
			for (var d in n) n[d].every(mt) && delete n[d];
			return n
		}

		function mt(e) {
			return e.isComment && !e.asyncFactory || " " === e.text
		}

		function ht(e, t, n) {
			var a, i = Object.keys(t).length > 0,
				s = e ? !!e.$stable : !i,
				o = e && e.$key;
			if (e) {
				if (e._normalized) return e._normalized;
				if (s && n && n !== r && o === n.$key && !i && !n.$hasNormal) return n;
				for (var l in a = {}, e) e[l] && "$" !== l[0] && (a[l] = pt(t, l, e[l]))
			} else a = {};
			for (var d in t) d in a || (a[d] = _t(t, d));
			return e && Object.isExtensible(e) && (e._normalized = a), I(a, "$stable", s), I(a, "$key", o), I(a, "$hasNormal", i), a
		}

		function pt(e, t, n) {
			var r = function () {
				var e = arguments.length ? n.apply(null, arguments) : n({});
				return (e = e && "object" == typeof e && !Array.isArray(e) ? [e] : dt(e)) && (0 === e.length || 1 === e.length && e[0].isComment) ? void 0 : e
			};
			return n.proxy && Object.defineProperty(e, t, {
				get: r,
				enumerable: !0,
				configurable: !0
			}), r
		}

		function _t(e, t) {
			return function () {
				return e[t]
			}
		}

		function vt(e, t) {
			var n, r, a, s, o;
			if (Array.isArray(e) || "string" == typeof e)
				for (n = new Array(e.length), r = 0, a = e.length; r < a; r++) n[r] = t(e[r], r);
			else if ("number" == typeof e)
				for (n = new Array(e), r = 0; r < e; r++) n[r] = t(r + 1, r);
			else if (l(e))
				if (le && e[Symbol.iterator]) {
					n = [];
					for (var d = e[Symbol.iterator](), u = d.next(); !u.done;) n.push(t(u.value, n.length)), u = d.next()
				} else
					for (s = Object.keys(e), n = new Array(s.length), r = 0, a = s.length; r < a; r++) o = s[r], n[r] = t(e[o], o, r);
			return i(n) || (n = []), n._isVList = !0, n
		}

		function yt(e, t, n, r) {
			var a, i = this.$scopedSlots[e];
			i ? (n = n || {}, r && (n = S(S({}, r), n)), a = i(n) || t) : a = this.$slots[e] || t;
			var s = n && n.slot;
			return s ? this.$createElement("template", {
				slot: s
			}, a) : a
		}

		function gt(e) {
			return $e(this.$options, "filters", e) || A
		}

		function Mt(e, t) {
			return Array.isArray(e) ? -1 === e.indexOf(t) : e !== t
		}

		function bt(e, t, n, r, a) {
			var i = F.keyCodes[t] || n;
			return a && r && !F.keyCodes[t] ? Mt(a, r) : i ? Mt(i, e) : r ? x(r) !== t : void 0
		}

		function Lt(e, t, n, r, a) {
			if (n && l(n)) {
				var i;
				Array.isArray(n) && (n = j(n));
				var s = function (s) {
					if ("class" === s || "style" === s || v(s)) i = e;
					else {
						var o = e.attrs && e.attrs.type;
						i = r || F.mustUseProp(t, o, s) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {})
					}
					var l = k(s),
						d = x(s);
					l in i || d in i || (i[s] = n[s], a && ((e.on || (e.on = {}))["update:" + s] = function (e) {
						n[s] = e
					}))
				};
				for (var o in n) s(o)
			}
			return e
		}

		function kt(e, t) {
			var n = this._staticTrees || (this._staticTrees = []),
				r = n[e];
			return r && !t ? r : (Yt(r = n[e] = this.$options.staticRenderFns[e].call(this._renderProxy, null, this), "__static__" + e, !1), r)
		}

		function wt(e, t, n) {
			return Yt(e, "__once__" + t + (n ? "_" + n : ""), !0), e
		}

		function Yt(e, t, n) {
			if (Array.isArray(e))
				for (var r = 0; r < e.length; r++) e[r] && "string" != typeof e[r] && xt(e[r], t + "_" + r, n);
			else xt(e, t, n)
		}

		function xt(e, t, n) {
			e.isStatic = !0, e.key = t, e.isOnce = n
		}

		function Tt(e, t) {
			if (t && u(t)) {
				var n = e.on = e.on ? S({}, e.on) : {};
				for (var r in t) {
					var a = n[r],
						i = t[r];
					n[r] = a ? [].concat(a, i) : i
				}
			}
			return e
		}

		function Dt(e, t, n, r) {
			t = t || {
				$stable: !n
			};
			for (var a = 0; a < e.length; a++) {
				var i = e[a];
				Array.isArray(i) ? Dt(i, t, n) : i && (i.proxy && (i.fn.proxy = !0), t[i.key] = i.fn)
			}
			return r && (t.$key = r), t
		}

		function St(e, t) {
			for (var n = 0; n < t.length; n += 2) {
				var r = t[n];
				"string" == typeof r && r && (e[t[n]] = t[n + 1])
			}
			return e
		}

		function jt(e, t) {
			return "string" == typeof e ? t + e : e
		}

		function Ct(e) {
			e._o = wt, e._n = h, e._s = m, e._l = vt, e._t = yt, e._q = E, e._i = P, e._m = kt, e._f = gt, e._k = bt, e._b = Lt, e._v = ye, e._e = ve, e._u = Dt, e._g = Tt, e._d = St, e._p = jt
		}

		function Ht(e, t, n, a, i) {
			var o, l = this,
				d = i.options;
			M(a, "_uid") ? (o = Object.create(a))._original = a : (o = a, a = a._original);
			var u = s(d._compiled),
				c = !u;
			this.data = e, this.props = t, this.children = n, this.parent = a, this.listeners = e.on || r, this.injections = ct(d.inject, a), this.slots = function () {
				return l.$slots || ht(e.scopedSlots, l.$slots = ft(n, a)), l.$slots
			}, Object.defineProperty(this, "scopedSlots", {
				enumerable: !0,
				get: function () {
					return ht(e.scopedSlots, this.slots())
				}
			}), u && (this.$options = d, this.$slots = this.slots(), this.$scopedSlots = ht(e.scopedSlots, this.$slots)), d._scopeId ? this._c = function (e, t, n, r) {
				var i = Wt(o, e, t, n, r, c);
				return i && !Array.isArray(i) && (i.fnScopeId = d._scopeId, i.fnContext = a), i
			} : this._c = function (e, t, n, r) {
				return Wt(o, e, t, n, r, c)
			}
		}

		function At(e, t, n, r, a) {
			var i = ge(e);
			return i.fnContext = n, i.fnOptions = r, t.slot && ((i.data || (i.data = {})).slot = t.slot), i
		}

		function Et(e, t) {
			for (var n in t) e[k(n)] = t[n]
		}
		Ct(Ht.prototype);
		var Pt = {
				init: function (e, t) {
					if (e.componentInstance && !e.componentInstance._isDestroyed && e.data.keepAlive) {
						var n = e;
						Pt.prepatch(n, n)
					} else(e.componentInstance = function (e, t) {
						var n = {
								_isComponent: !0,
								_parentVnode: e,
								parent: Xt
							},
							r = e.data.inlineTemplate;
						return i(r) && (n.render = r.render, n.staticRenderFns = r.staticRenderFns), new e.componentOptions.Ctor(n)
					}(e)).$mount(t ? e.elm : void 0, t)
				},
				prepatch: function (e, t) {
					var n = t.componentOptions;
					! function (e, t, n, a, i) {
						var s = a.data.scopedSlots,
							o = e.$scopedSlots,
							l = !!(s && !s.$stable || o !== r && !o.$stable || s && e.$scopedSlots.$key !== s.$key),
							d = !!(i || e.$options._renderChildren || l);
						if (e.$options._parentVnode = a, e.$vnode = a, e._vnode && (e._vnode.parent = a), e.$options._renderChildren = i, e.$attrs = a.data.attrs || r, e.$listeners = n || r, t && e.$options.props) {
							we(!1);
							for (var u = e._props, c = e.$options._propKeys || [], f = 0; f < c.length; f++) {
								var m = c[f],
									h = e.$options.props;
								u[m] = Ne(m, h, t, e)
							}
							we(!0), e.$options.propsData = t
						}
						n = n || r;
						var p = e.$options._parentListeners;
						e.$options._parentListeners = n, Kt(e, n, p), d && (e.$slots = ft(i, a.context), e.$forceUpdate())
					}(t.componentInstance = e.componentInstance, n.propsData, n.listeners, t, n.children)
				},
				insert: function (e) {
					var t, n = e.context,
						r = e.componentInstance;
					r._isMounted || (r._isMounted = !0, tn(r, "mounted")), e.data.keepAlive && (n._isMounted ? ((t = r)._inactive = !1, rn.push(t)) : en(r, !0))
				},
				destroy: function (e) {
					var t = e.componentInstance;
					t._isDestroyed || (e.data.keepAlive ? function e(t, n) {
						if (!(n && (t._directInactive = !0, Zt(t)) || t._inactive)) {
							t._inactive = !0;
							for (var r = 0; r < t.$children.length; r++) e(t.$children[r]);
							tn(t, "deactivated")
						}
					}(t, !0) : t.$destroy())
				}
			},
			Ot = Object.keys(Pt);

		function $t(e, t, n, o, d) {
			if (!a(e)) {
				var u = n.$options._base;
				if (l(e) && (e = u.extend(e)), "function" == typeof e) {
					var c;
					if (a(e.cid) && void 0 === (e = function (e, t) {
							if (s(e.error) && i(e.errorComp)) return e.errorComp;
							if (i(e.resolved)) return e.resolved;
							var n = zt;
							if (n && i(e.owners) && -1 === e.owners.indexOf(n) && e.owners.push(n), s(e.loading) && i(e.loadingComp)) return e.loadingComp;
							if (n && !i(e.owners)) {
								var r = e.owners = [n],
									o = !0,
									d = null,
									u = null;
								n.$on("hook:destroyed", function () {
									return y(r, n)
								});
								var c = function (e) {
										for (var t = 0, n = r.length; t < n; t++) r[t].$forceUpdate();
										e && (r.length = 0, null !== d && (clearTimeout(d), d = null), null !== u && (clearTimeout(u), u = null))
									},
									m = O(function (n) {
										e.resolved = Ut(n, t), o ? r.length = 0 : c(!0)
									}),
									h = O(function (t) {
										i(e.errorComp) && (e.error = !0, c(!0))
									}),
									p = e(m, h);
								return l(p) && (f(p) ? a(e.resolved) && p.then(m, h) : f(p.component) && (p.component.then(m, h), i(p.error) && (e.errorComp = Ut(p.error, t)), i(p.loading) && (e.loadingComp = Ut(p.loading, t), 0 === p.delay ? e.loading = !0 : d = setTimeout(function () {
									d = null, a(e.resolved) && a(e.error) && (e.loading = !0, c(!1))
								}, p.delay || 200)), i(p.timeout) && (u = setTimeout(function () {
									u = null, a(e.resolved) && h(null)
								}, p.timeout)))), o = !1, e.loading ? e.loadingComp : e.resolved
							}
						}(c = e, u))) return function (e, t, n, r, a) {
						var i = ve();
						return i.asyncFactory = e, i.asyncMeta = {
							data: t,
							context: n,
							children: r,
							tag: a
						}, i
					}(c, t, n, o, d);
					t = t || {}, kn(e), i(t.model) && function (e, t) {
						var n = e.model && e.model.prop || "value",
							r = e.model && e.model.event || "input";
						(t.attrs || (t.attrs = {}))[n] = t.model.value;
						var a = t.on || (t.on = {}),
							s = a[r],
							o = t.model.callback;
						i(s) ? (Array.isArray(s) ? -1 === s.indexOf(o) : s !== o) && (a[r] = [o].concat(s)) : a[r] = o
					}(e.options, t);
					var m = function (e, t, n) {
						var r = t.options.props;
						if (!a(r)) {
							var s = {},
								o = e.attrs,
								l = e.props;
							if (i(o) || i(l))
								for (var d in r) {
									var u = x(d);
									lt(s, l, d, u, !0) || lt(s, o, d, u, !1)
								}
							return s
						}
					}(t, e);
					if (s(e.options.functional)) return function (e, t, n, a, s) {
						var o = e.options,
							l = {},
							d = o.props;
						if (i(d))
							for (var u in d) l[u] = Ne(u, d, t || r);
						else i(n.attrs) && Et(l, n.attrs), i(n.props) && Et(l, n.props);
						var c = new Ht(n, l, s, a, e),
							f = o.render.call(null, c._c, c);
						if (f instanceof pe) return At(f, n, c.parent, o);
						if (Array.isArray(f)) {
							for (var m = dt(f) || [], h = new Array(m.length), p = 0; p < m.length; p++) h[p] = At(m[p], n, c.parent, o);
							return h
						}
					}(e, m, t, n, o);
					var h = t.on;
					if (t.on = t.nativeOn, s(e.options.abstract)) {
						var p = t.slot;
						t = {}, p && (t.slot = p)
					}! function (e) {
						for (var t = e.hook || (e.hook = {}), n = 0; n < Ot.length; n++) {
							var r = Ot[n],
								a = t[r],
								i = Pt[r];
							a === i || a && a._merged || (t[r] = a ? Nt(i, a) : i)
						}
					}(t);
					var _ = e.options.name || d;
					return new pe("vue-component-" + e.cid + (_ ? "-" + _ : ""), t, void 0, void 0, void 0, n, {
						Ctor: e,
						propsData: m,
						listeners: h,
						tag: d,
						children: o
					}, c)
				}
			}
		}

		function Nt(e, t) {
			var n = function (n, r) {
				e(n, r), t(n, r)
			};
			return n._merged = !0, n
		}
		var Rt = 1,
			Ft = 2;

		function Wt(e, t, n, r, d, u) {
			return (Array.isArray(n) || o(n)) && (d = r, r = n, n = void 0), s(u) && (d = Ft),
				function (e, t, n, r, o) {
					if (i(n) && i(n.__ob__)) return ve();
					if (i(n) && i(n.is) && (t = n.is), !t) return ve();
					var d, u, c;
					(Array.isArray(r) && "function" == typeof r[0] && ((n = n || {}).scopedSlots = {
						default: r[0]
					}, r.length = 0), o === Ft ? r = dt(r) : o === Rt && (r = function (e) {
						for (var t = 0; t < e.length; t++)
							if (Array.isArray(e[t])) return Array.prototype.concat.apply([], e);
						return e
					}(r)), "string" == typeof t) ? (u = e.$vnode && e.$vnode.ns || F.getTagNamespace(t), d = F.isReservedTag(t) ? new pe(F.parsePlatformTagName(t), n, r, void 0, void 0, e) : n && n.pre || !i(c = $e(e.$options, "components", t)) ? new pe(t, n, r, void 0, void 0, e) : $t(c, n, e, r, t)) : d = $t(t, n, e, r);
					return Array.isArray(d) ? d : i(d) ? (i(u) && function e(t, n, r) {
						if (t.ns = n, "foreignObject" === t.tag && (n = void 0, r = !0), i(t.children))
							for (var o = 0, l = t.children.length; o < l; o++) {
								var d = t.children[o];
								i(d.tag) && (a(d.ns) || s(r) && "svg" !== d.tag) && e(d, n, r)
							}
					}(d, u), i(n) && function (e) {
						l(e.style) && rt(e.style), l(e.class) && rt(e.class)
					}(n), d) : ve()
				}(e, t, n, r, d)
		}
		var It, zt = null;

		function Ut(e, t) {
			return (e.__esModule || le && "Module" === e[Symbol.toStringTag]) && (e = e.default), l(e) ? t.extend(e) : e
		}

		function qt(e) {
			return e.isComment && e.asyncFactory
		}

		function Jt(e) {
			if (Array.isArray(e))
				for (var t = 0; t < e.length; t++) {
					var n = e[t];
					if (i(n) && (i(n.componentOptions) || qt(n))) return n
				}
		}

		function Bt(e, t) {
			It.$on(e, t)
		}

		function Vt(e, t) {
			It.$off(e, t)
		}

		function Gt(e, t) {
			var n = It;
			return function r() {
				null !== t.apply(null, arguments) && n.$off(e, r)
			}
		}

		function Kt(e, t, n) {
			It = e, st(t, n || {}, Bt, Vt, Gt, e), It = void 0
		}
		var Xt = null;

		function Qt(e) {
			var t = Xt;
			return Xt = e,
				function () {
					Xt = t
				}
		}

		function Zt(e) {
			for (; e && (e = e.$parent);)
				if (e._inactive) return !0;
			return !1
		}

		function en(e, t) {
			if (t) {
				if (e._directInactive = !1, Zt(e)) return
			} else if (e._directInactive) return;
			if (e._inactive || null === e._inactive) {
				e._inactive = !1;
				for (var n = 0; n < e.$children.length; n++) en(e.$children[n]);
				tn(e, "activated")
			}
		}

		function tn(e, t) {
			me();
			var n = e.$options[t],
				r = t + " hook";
			if (n)
				for (var a = 0, i = n.length; a < i; a++) ze(n[a], e, null, e, r);
			e._hasHookEvent && e.$emit("hook:" + t), he()
		}
		var nn = [],
			rn = [],
			an = {},
			sn = !1,
			on = !1,
			ln = 0,
			dn = 0,
			un = Date.now;
		if (J && !K) {
			var cn = window.performance;
			cn && "function" == typeof cn.now && un() > document.createEvent("Event").timeStamp && (un = function () {
				return cn.now()
			})
		}

		function fn() {
			var e, t;
			for (dn = un(), on = !0, nn.sort(function (e, t) {
					return e.id - t.id
				}), ln = 0; ln < nn.length; ln++)(e = nn[ln]).before && e.before(), t = e.id, an[t] = null, e.run();
			var n = rn.slice(),
				r = nn.slice();
			ln = nn.length = rn.length = 0, an = {}, sn = on = !1,
				function (e) {
					for (var t = 0; t < e.length; t++) e[t]._inactive = !0, en(e[t], !0)
				}(n),
				function (e) {
					for (var t = e.length; t--;) {
						var n = e[t],
							r = n.vm;
						r._watcher === n && r._isMounted && !r._isDestroyed && tn(r, "updated")
					}
				}(r), ie && F.devtools && ie.emit("flush")
		}
		var mn = 0,
			hn = function (e, t, n, r, a) {
				this.vm = e, a && (e._watcher = this), e._watchers.push(this), r ? (this.deep = !!r.deep, this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync, this.before = r.before) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++mn, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new oe, this.newDepIds = new oe, this.expression = "", "function" == typeof t ? this.getter = t : (this.getter = function (e) {
					if (!U.test(e)) {
						var t = e.split(".");
						return function (e) {
							for (var n = 0; n < t.length; n++) {
								if (!e) return;
								e = e[t[n]]
							}
							return e
						}
					}
				}(t), this.getter || (this.getter = C)), this.value = this.lazy ? void 0 : this.get()
			};
		hn.prototype.get = function () {
			var e;
			me(this);
			var t = this.vm;
			try {
				e = this.getter.call(t, t)
			} catch (e) {
				if (!this.user) throw e;
				Ie(e, t, 'getter for watcher "' + this.expression + '"')
			} finally {
				this.deep && rt(e), he(), this.cleanupDeps()
			}
			return e
		}, hn.prototype.addDep = function (e) {
			var t = e.id;
			this.newDepIds.has(t) || (this.newDepIds.add(t), this.newDeps.push(e), this.depIds.has(t) || e.addSub(this))
		}, hn.prototype.cleanupDeps = function () {
			for (var e = this.deps.length; e--;) {
				var t = this.deps[e];
				this.newDepIds.has(t.id) || t.removeSub(this)
			}
			var n = this.depIds;
			this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0
		}, hn.prototype.update = function () {
			this.lazy ? this.dirty = !0 : this.sync ? this.run() : function (e) {
				var t = e.id;
				if (null == an[t]) {
					if (an[t] = !0, on) {
						for (var n = nn.length - 1; n > ln && nn[n].id > e.id;) n--;
						nn.splice(n + 1, 0, e)
					} else nn.push(e);
					sn || (sn = !0, tt(fn))
				}
			}(this)
		}, hn.prototype.run = function () {
			if (this.active) {
				var e = this.get();
				if (e !== this.value || l(e) || this.deep) {
					var t = this.value;
					if (this.value = e, this.user) try {
						this.cb.call(this.vm, e, t)
					} catch (e) {
						Ie(e, this.vm, 'callback for watcher "' + this.expression + '"')
					} else this.cb.call(this.vm, e, t)
				}
			}
		}, hn.prototype.evaluate = function () {
			this.value = this.get(), this.dirty = !1
		}, hn.prototype.depend = function () {
			for (var e = this.deps.length; e--;) this.deps[e].depend()
		}, hn.prototype.teardown = function () {
			if (this.active) {
				this.vm._isBeingDestroyed || y(this.vm._watchers, this);
				for (var e = this.deps.length; e--;) this.deps[e].removeSub(this);
				this.active = !1
			}
		};
		var pn = {
			enumerable: !0,
			configurable: !0,
			get: C,
			set: C
		};

		function _n(e, t, n) {
			pn.get = function () {
				return this[t][n]
			}, pn.set = function (e) {
				this[t][n] = e
			}, Object.defineProperty(e, n, pn)
		}
		var vn = {
			lazy: !0
		};

		function yn(e, t, n) {
			var r = !ae();
			"function" == typeof n ? (pn.get = r ? gn(t) : Mn(n), pn.set = C) : (pn.get = n.get ? r && !1 !== n.cache ? gn(t) : Mn(n.get) : C, pn.set = n.set || C), Object.defineProperty(e, t, pn)
		}

		function gn(e) {
			return function () {
				var t = this._computedWatchers && this._computedWatchers[e];
				if (t) return t.dirty && t.evaluate(), ce.target && t.depend(), t.value
			}
		}

		function Mn(e) {
			return function () {
				return e.call(this, this)
			}
		}

		function bn(e, t, n, r) {
			return u(n) && (r = n, n = n.handler), "string" == typeof n && (n = e[n]), e.$watch(t, n, r)
		}
		var Ln = 0;

		function kn(e) {
			var t = e.options;
			if (e.super) {
				var n = kn(e.super);
				if (n !== e.superOptions) {
					e.superOptions = n;
					var r = function (e) {
						var t, n = e.options,
							r = e.sealedOptions;
						for (var a in n) n[a] !== r[a] && (t || (t = {}), t[a] = n[a]);
						return t
					}(e);
					r && S(e.extendOptions, r), (t = e.options = Oe(n, e.extendOptions)).name && (t.components[t.name] = e)
				}
			}
			return t
		}

		function wn(e) {
			this._init(e)
		}

		function Yn(e) {
			return e && (e.Ctor.options.name || e.tag)
		}

		function xn(e, t) {
			return Array.isArray(e) ? e.indexOf(t) > -1 : "string" == typeof e ? e.split(",").indexOf(t) > -1 : (n = e, "[object RegExp]" === d.call(n) && e.test(t));
			var n
		}

		function Tn(e, t) {
			var n = e.cache,
				r = e.keys,
				a = e._vnode;
			for (var i in n) {
				var s = n[i];
				if (s) {
					var o = Yn(s.componentOptions);
					o && !t(o) && Dn(n, i, r, a)
				}
			}
		}

		function Dn(e, t, n, r) {
			var a = e[t];
			!a || r && a.tag === r.tag || a.componentInstance.$destroy(), e[t] = null, y(n, t)
		}
		wn.prototype._init = function (e) {
				var t = this;
				t._uid = Ln++, t._isVue = !0, e && e._isComponent ? function (e, t) {
						var n = e.$options = Object.create(e.constructor.options),
							r = t._parentVnode;
						n.parent = t.parent, n._parentVnode = r;
						var a = r.componentOptions;
						n.propsData = a.propsData, n._parentListeners = a.listeners, n._renderChildren = a.children, n._componentTag = a.tag, t.render && (n.render = t.render, n.staticRenderFns = t.staticRenderFns)
					}(t, e) : t.$options = Oe(kn(t.constructor), e || {}, t), t._renderProxy = t, t._self = t,
					function (e) {
						var t = e.$options,
							n = t.parent;
						if (n && !t.abstract) {
							for (; n.$options.abstract && n.$parent;) n = n.$parent;
							n.$children.push(e)
						}
						e.$parent = n, e.$root = n ? n.$root : e, e.$children = [], e.$refs = {}, e._watcher = null, e._inactive = null, e._directInactive = !1, e._isMounted = !1, e._isDestroyed = !1, e._isBeingDestroyed = !1
					}(t),
					function (e) {
						e._events = Object.create(null), e._hasHookEvent = !1;
						var t = e.$options._parentListeners;
						t && Kt(e, t)
					}(t),
					function (e) {
						e._vnode = null, e._staticTrees = null;
						var t = e.$options,
							n = e.$vnode = t._parentVnode,
							a = n && n.context;
						e.$slots = ft(t._renderChildren, a), e.$scopedSlots = r, e._c = function (t, n, r, a) {
							return Wt(e, t, n, r, a, !1)
						}, e.$createElement = function (t, n, r, a) {
							return Wt(e, t, n, r, a, !0)
						};
						var i = n && n.data;
						Te(e, "$attrs", i && i.attrs || r, null, !0), Te(e, "$listeners", t._parentListeners || r, null, !0)
					}(t), tn(t, "beforeCreate"),
					function (e) {
						var t = ct(e.$options.inject, e);
						t && (we(!1), Object.keys(t).forEach(function (n) {
							Te(e, n, t[n])
						}), we(!0))
					}(t),
					function (e) {
						e._watchers = [];
						var t = e.$options;
						t.props && function (e, t) {
							var n = e.$options.propsData || {},
								r = e._props = {},
								a = e.$options._propKeys = [];
							e.$parent && we(!1);
							var i = function (i) {
								a.push(i);
								var s = Ne(i, t, n, e);
								Te(r, i, s), i in e || _n(e, "_props", i)
							};
							for (var s in t) i(s);
							we(!0)
						}(e, t.props), t.methods && function (e, t) {
							for (var n in e.$options.props, t) e[n] = "function" != typeof t[n] ? C : T(t[n], e)
						}(e, t.methods), t.data ? function (e) {
							var t = e.$options.data;
							u(t = e._data = "function" == typeof t ? function (e, t) {
								me();
								try {
									return e.call(t, t)
								} catch (e) {
									return Ie(e, t, "data()"), {}
								} finally {
									he()
								}
							}(t, e) : t || {}) || (t = {});
							for (var n, r = Object.keys(t), a = e.$options.props, i = (e.$options.methods, r.length); i--;) {
								var s = r[i];
								a && M(a, s) || 36 !== (n = (s + "").charCodeAt(0)) && 95 !== n && _n(e, "_data", s)
							}
							xe(t, !0)
						}(e) : xe(e._data = {}, !0), t.computed && function (e, t) {
							var n = e._computedWatchers = Object.create(null),
								r = ae();
							for (var a in t) {
								var i = t[a],
									s = "function" == typeof i ? i : i.get;
								r || (n[a] = new hn(e, s || C, C, vn)), a in e || yn(e, a, i)
							}
						}(e, t.computed), t.watch && t.watch !== te && function (e, t) {
							for (var n in t) {
								var r = t[n];
								if (Array.isArray(r))
									for (var a = 0; a < r.length; a++) bn(e, n, r[a]);
								else bn(e, n, r)
							}
						}(e, t.watch)
					}(t),
					function (e) {
						var t = e.$options.provide;
						t && (e._provided = "function" == typeof t ? t.call(e) : t)
					}(t), tn(t, "created"), t.$options.el && t.$mount(t.$options.el)
			},
			function (e) {
				Object.defineProperty(e.prototype, "$data", {
					get: function () {
						return this._data
					}
				}), Object.defineProperty(e.prototype, "$props", {
					get: function () {
						return this._props
					}
				}), e.prototype.$set = De, e.prototype.$delete = Se, e.prototype.$watch = function (e, t, n) {
					if (u(t)) return bn(this, e, t, n);
					(n = n || {}).user = !0;
					var r = new hn(this, e, t, n);
					if (n.immediate) try {
						t.call(this, r.value)
					} catch (e) {
						Ie(e, this, 'callback for immediate watcher "' + r.expression + '"')
					}
					return function () {
						r.teardown()
					}
				}
			}(wn),
			function (e) {
				var t = /^hook:/;
				e.prototype.$on = function (e, n) {
					var r = this;
					if (Array.isArray(e))
						for (var a = 0, i = e.length; a < i; a++) r.$on(e[a], n);
					else(r._events[e] || (r._events[e] = [])).push(n), t.test(e) && (r._hasHookEvent = !0);
					return r
				}, e.prototype.$once = function (e, t) {
					var n = this;

					function r() {
						n.$off(e, r), t.apply(n, arguments)
					}
					return r.fn = t, n.$on(e, r), n
				}, e.prototype.$off = function (e, t) {
					var n = this;
					if (!arguments.length) return n._events = Object.create(null), n;
					if (Array.isArray(e)) {
						for (var r = 0, a = e.length; r < a; r++) n.$off(e[r], t);
						return n
					}
					var i, s = n._events[e];
					if (!s) return n;
					if (!t) return n._events[e] = null, n;
					for (var o = s.length; o--;)
						if ((i = s[o]) === t || i.fn === t) {
							s.splice(o, 1);
							break
						}
					return n
				}, e.prototype.$emit = function (e) {
					var t = this._events[e];
					if (t) {
						t = t.length > 1 ? D(t) : t;
						for (var n = D(arguments, 1), r = 'event handler for "' + e + '"', a = 0, i = t.length; a < i; a++) ze(t[a], this, n, this, r)
					}
					return this
				}
			}(wn),
			function (e) {
				e.prototype._update = function (e, t) {
					var n = this,
						r = n.$el,
						a = n._vnode,
						i = Qt(n);
					n._vnode = e, n.$el = a ? n.__patch__(a, e) : n.__patch__(n.$el, e, t, !1), i(), r && (r.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el)
				}, e.prototype.$forceUpdate = function () {
					this._watcher && this._watcher.update()
				}, e.prototype.$destroy = function () {
					var e = this;
					if (!e._isBeingDestroyed) {
						tn(e, "beforeDestroy"), e._isBeingDestroyed = !0;
						var t = e.$parent;
						!t || t._isBeingDestroyed || e.$options.abstract || y(t.$children, e), e._watcher && e._watcher.teardown();
						for (var n = e._watchers.length; n--;) e._watchers[n].teardown();
						e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, e.__patch__(e._vnode, null), tn(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null), e.$vnode && (e.$vnode.parent = null)
					}
				}
			}(wn),
			function (e) {
				Ct(e.prototype), e.prototype.$nextTick = function (e) {
					return tt(e, this)
				}, e.prototype._render = function () {
					var e, t = this,
						n = t.$options,
						r = n.render,
						a = n._parentVnode;
					a && (t.$scopedSlots = ht(a.data.scopedSlots, t.$slots, t.$scopedSlots)), t.$vnode = a;
					try {
						zt = t, e = r.call(t._renderProxy, t.$createElement)
					} catch (n) {
						Ie(n, t, "render"), e = t._vnode
					} finally {
						zt = null
					}
					return Array.isArray(e) && 1 === e.length && (e = e[0]), e instanceof pe || (e = ve()), e.parent = a, e
				}
			}(wn);
		var Sn = [String, RegExp, Array],
			jn = {
				KeepAlive: {
					name: "keep-alive",
					abstract: !0,
					props: {
						include: Sn,
						exclude: Sn,
						max: [String, Number]
					},
					created: function () {
						this.cache = Object.create(null), this.keys = []
					},
					destroyed: function () {
						for (var e in this.cache) Dn(this.cache, e, this.keys)
					},
					mounted: function () {
						var e = this;
						this.$watch("include", function (t) {
							Tn(e, function (e) {
								return xn(t, e)
							})
						}), this.$watch("exclude", function (t) {
							Tn(e, function (e) {
								return !xn(t, e)
							})
						})
					},
					render: function () {
						var e = this.$slots.default,
							t = Jt(e),
							n = t && t.componentOptions;
						if (n) {
							var r = Yn(n),
								a = this.include,
								i = this.exclude;
							if (a && (!r || !xn(a, r)) || i && r && xn(i, r)) return t;
							var s = this.cache,
								o = this.keys,
								l = null == t.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : t.key;
							s[l] ? (t.componentInstance = s[l].componentInstance, y(o, l), o.push(l)) : (s[l] = t, o.push(l), this.max && o.length > parseInt(this.max) && Dn(s, o[0], o, this._vnode)), t.data.keepAlive = !0
						}
						return t || e && e[0]
					}
				}
			};
		! function (e) {
			var t = {
				get: function () {
					return F
				}
			};
			Object.defineProperty(e, "config", t), e.util = {
					warn: de,
					extend: S,
					mergeOptions: Oe,
					defineReactive: Te
				}, e.set = De, e.delete = Se, e.nextTick = tt, e.observable = function (e) {
					return xe(e), e
				}, e.options = Object.create(null), N.forEach(function (t) {
					e.options[t + "s"] = Object.create(null)
				}), e.options._base = e, S(e.options.components, jn),
				function (e) {
					e.use = function (e) {
						var t = this._installedPlugins || (this._installedPlugins = []);
						if (t.indexOf(e) > -1) return this;
						var n = D(arguments, 1);
						return n.unshift(this), "function" == typeof e.install ? e.install.apply(e, n) : "function" == typeof e && e.apply(null, n), t.push(e), this
					}
				}(e),
				function (e) {
					e.mixin = function (e) {
						return this.options = Oe(this.options, e), this
					}
				}(e),
				function (e) {
					e.cid = 0;
					var t = 1;
					e.extend = function (e) {
						e = e || {};
						var n = this,
							r = n.cid,
							a = e._Ctor || (e._Ctor = {});
						if (a[r]) return a[r];
						var i = e.name || n.options.name,
							s = function (e) {
								this._init(e)
							};
						return (s.prototype = Object.create(n.prototype)).constructor = s, s.cid = t++, s.options = Oe(n.options, e), s.super = n, s.options.props && function (e) {
							var t = e.options.props;
							for (var n in t) _n(e.prototype, "_props", n)
						}(s), s.options.computed && function (e) {
							var t = e.options.computed;
							for (var n in t) yn(e.prototype, n, t[n])
						}(s), s.extend = n.extend, s.mixin = n.mixin, s.use = n.use, N.forEach(function (e) {
							s[e] = n[e]
						}), i && (s.options.components[i] = s), s.superOptions = n.options, s.extendOptions = e, s.sealedOptions = S({}, s.options), a[r] = s, s
					}
				}(e),
				function (e) {
					N.forEach(function (t) {
						e[t] = function (e, n) {
							return n ? ("component" === t && u(n) && (n.name = n.name || e, n = this.options._base.extend(n)), "directive" === t && "function" == typeof n && (n = {
								bind: n,
								update: n
							}), this.options[t + "s"][e] = n, n) : this.options[t + "s"][e]
						}
					})
				}(e)
		}(wn), Object.defineProperty(wn.prototype, "$isServer", {
			get: ae
		}), Object.defineProperty(wn.prototype, "$ssrContext", {
			get: function () {
				return this.$vnode && this.$vnode.ssrContext
			}
		}), Object.defineProperty(wn, "FunctionalRenderContext", {
			value: Ht
		}), wn.version = "2.6.12";
		var Cn = p("style,class"),
			Hn = p("input,textarea,option,select,progress"),
			An = function (e, t, n) {
				return "value" === n && Hn(e) && "button" !== t || "selected" === n && "option" === e || "checked" === n && "input" === e || "muted" === n && "video" === e
			},
			En = p("contenteditable,draggable,spellcheck"),
			Pn = p("events,caret,typing,plaintext-only"),
			On = function (e, t) {
				return Wn(t) || "false" === t ? "false" : "contenteditable" === e && Pn(t) ? t : "true"
			},
			$n = p("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
			Nn = "http://www.w3.org/1999/xlink",
			Rn = function (e) {
				return ":" === e.charAt(5) && "xlink" === e.slice(0, 5)
			},
			Fn = function (e) {
				return Rn(e) ? e.slice(6, e.length) : ""
			},
			Wn = function (e) {
				return null == e || !1 === e
			};

		function In(e, t) {
			return {
				staticClass: zn(e.staticClass, t.staticClass),
				class: i(e.class) ? [e.class, t.class] : t.class
			}
		}

		function zn(e, t) {
			return e ? t ? e + " " + t : e : t || ""
		}

		function Un(e) {
			return Array.isArray(e) ? function (e) {
				for (var t, n = "", r = 0, a = e.length; r < a; r++) i(t = Un(e[r])) && "" !== t && (n && (n += " "), n += t);
				return n
			}(e) : l(e) ? function (e) {
				var t = "";
				for (var n in e) e[n] && (t && (t += " "), t += n);
				return t
			}(e) : "string" == typeof e ? e : ""
		}
		var qn = {
				svg: "http://www.w3.org/2000/svg",
				math: "http://www.w3.org/1998/Math/MathML"
			},
			Jn = p("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),
			Bn = p("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
			Vn = function (e) {
				return Jn(e) || Bn(e)
			};

		function Gn(e) {
			return Bn(e) ? "svg" : "math" === e ? "math" : void 0
		}
		var Kn = Object.create(null),
			Xn = p("text,number,password,search,email,tel,url");

		function Qn(e) {
			return "string" == typeof e ? document.querySelector(e) || document.createElement("div") : e
		}
		var Zn = Object.freeze({
				createElement: function (e, t) {
					var n = document.createElement(e);
					return "select" !== e ? n : (t.data && t.data.attrs && void 0 !== t.data.attrs.multiple && n.setAttribute("multiple", "multiple"), n)
				},
				createElementNS: function (e, t) {
					return document.createElementNS(qn[e], t)
				},
				createTextNode: function (e) {
					return document.createTextNode(e)
				},
				createComment: function (e) {
					return document.createComment(e)
				},
				insertBefore: function (e, t, n) {
					e.insertBefore(t, n)
				},
				removeChild: function (e, t) {
					e.removeChild(t)
				},
				appendChild: function (e, t) {
					e.appendChild(t)
				},
				parentNode: function (e) {
					return e.parentNode
				},
				nextSibling: function (e) {
					return e.nextSibling
				},
				tagName: function (e) {
					return e.tagName
				},
				setTextContent: function (e, t) {
					e.textContent = t
				},
				setStyleScope: function (e, t) {
					e.setAttribute(t, "")
				}
			}),
			er = {
				create: function (e, t) {
					tr(t)
				},
				update: function (e, t) {
					e.data.ref !== t.data.ref && (tr(e, !0), tr(t))
				},
				destroy: function (e) {
					tr(e, !0)
				}
			};

		function tr(e, t) {
			var n = e.data.ref;
			if (i(n)) {
				var r = e.context,
					a = e.componentInstance || e.elm,
					s = r.$refs;
				t ? Array.isArray(s[n]) ? y(s[n], a) : s[n] === a && (s[n] = void 0) : e.data.refInFor ? Array.isArray(s[n]) ? s[n].indexOf(a) < 0 && s[n].push(a) : s[n] = [a] : s[n] = a
			}
		}
		var nr = new pe("", {}, []),
			rr = ["create", "activate", "update", "remove", "destroy"];

		function ar(e, t) {
			return e.key === t.key && (e.tag === t.tag && e.isComment === t.isComment && i(e.data) === i(t.data) && function (e, t) {
				if ("input" !== e.tag) return !0;
				var n, r = i(n = e.data) && i(n = n.attrs) && n.type,
					a = i(n = t.data) && i(n = n.attrs) && n.type;
				return r === a || Xn(r) && Xn(a)
			}(e, t) || s(e.isAsyncPlaceholder) && e.asyncFactory === t.asyncFactory && a(t.asyncFactory.error))
		}

		function ir(e, t, n) {
			var r, a, s = {};
			for (r = t; r <= n; ++r) i(a = e[r].key) && (s[a] = r);
			return s
		}
		var sr = {
			create: or,
			update: or,
			destroy: function (e) {
				or(e, nr)
			}
		};

		function or(e, t) {
			(e.data.directives || t.data.directives) && function (e, t) {
				var n, r, a, i = e === nr,
					s = t === nr,
					o = dr(e.data.directives, e.context),
					l = dr(t.data.directives, t.context),
					d = [],
					u = [];
				for (n in l) r = o[n], a = l[n], r ? (a.oldValue = r.value, a.oldArg = r.arg, cr(a, "update", t, e), a.def && a.def.componentUpdated && u.push(a)) : (cr(a, "bind", t, e), a.def && a.def.inserted && d.push(a));
				if (d.length) {
					var c = function () {
						for (var n = 0; n < d.length; n++) cr(d[n], "inserted", t, e)
					};
					i ? ot(t, "insert", c) : c()
				}
				if (u.length && ot(t, "postpatch", function () {
						for (var n = 0; n < u.length; n++) cr(u[n], "componentUpdated", t, e)
					}), !i)
					for (n in o) l[n] || cr(o[n], "unbind", e, e, s)
			}(e, t)
		}
		var lr = Object.create(null);

		function dr(e, t) {
			var n, r, a = Object.create(null);
			if (!e) return a;
			for (n = 0; n < e.length; n++)(r = e[n]).modifiers || (r.modifiers = lr), a[ur(r)] = r, r.def = $e(t.$options, "directives", r.name);
			return a
		}

		function ur(e) {
			return e.rawName || e.name + "." + Object.keys(e.modifiers || {}).join(".")
		}

		function cr(e, t, n, r, a) {
			var i = e.def && e.def[t];
			if (i) try {
				i(n.elm, e, n, r, a)
			} catch (r) {
				Ie(r, n.context, "directive " + e.name + " " + t + " hook")
			}
		}
		var fr = [er, sr];

		function mr(e, t) {
			var n = t.componentOptions;
			if (!(i(n) && !1 === n.Ctor.options.inheritAttrs || a(e.data.attrs) && a(t.data.attrs))) {
				var r, s, o = t.elm,
					l = e.data.attrs || {},
					d = t.data.attrs || {};
				for (r in i(d.__ob__) && (d = t.data.attrs = S({}, d)), d) s = d[r], l[r] !== s && hr(o, r, s);
				for (r in (K || Q) && d.value !== l.value && hr(o, "value", d.value), l) a(d[r]) && (Rn(r) ? o.removeAttributeNS(Nn, Fn(r)) : En(r) || o.removeAttribute(r))
			}
		}

		function hr(e, t, n) {
			e.tagName.indexOf("-") > -1 ? pr(e, t, n) : $n(t) ? Wn(n) ? e.removeAttribute(t) : (n = "allowfullscreen" === t && "EMBED" === e.tagName ? "true" : t, e.setAttribute(t, n)) : En(t) ? e.setAttribute(t, On(t, n)) : Rn(t) ? Wn(n) ? e.removeAttributeNS(Nn, Fn(t)) : e.setAttributeNS(Nn, t, n) : pr(e, t, n)
		}

		function pr(e, t, n) {
			if (Wn(n)) e.removeAttribute(t);
			else {
				if (K && !X && "TEXTAREA" === e.tagName && "placeholder" === t && "" !== n && !e.__ieph) {
					var r = function (t) {
						t.stopImmediatePropagation(), e.removeEventListener("input", r)
					};
					e.addEventListener("input", r), e.__ieph = !0
				}
				e.setAttribute(t, n)
			}
		}
		var _r = {
			create: mr,
			update: mr
		};

		function vr(e, t) {
			var n = t.elm,
				r = t.data,
				s = e.data;
			if (!(a(r.staticClass) && a(r.class) && (a(s) || a(s.staticClass) && a(s.class)))) {
				var o = function (e) {
						for (var t = e.data, n = e, r = e; i(r.componentInstance);)(r = r.componentInstance._vnode) && r.data && (t = In(r.data, t));
						for (; i(n = n.parent);) n && n.data && (t = In(t, n.data));
						return function (e, t) {
							return i(e) || i(t) ? zn(e, Un(t)) : ""
						}(t.staticClass, t.class)
					}(t),
					l = n._transitionClasses;
				i(l) && (o = zn(o, Un(l))), o !== n._prevClass && (n.setAttribute("class", o), n._prevClass = o)
			}
		}
		var yr, gr, Mr, br, Lr, kr, wr = {
				create: vr,
				update: vr
			},
			Yr = /[\w).+\-_$\]]/;

		function xr(e) {
			var t, n, r, a, i, s = !1,
				o = !1,
				l = !1,
				d = !1,
				u = 0,
				c = 0,
				f = 0,
				m = 0;
			for (r = 0; r < e.length; r++)
				if (n = t, t = e.charCodeAt(r), s) 39 === t && 92 !== n && (s = !1);
				else if (o) 34 === t && 92 !== n && (o = !1);
			else if (l) 96 === t && 92 !== n && (l = !1);
			else if (d) 47 === t && 92 !== n && (d = !1);
			else if (124 !== t || 124 === e.charCodeAt(r + 1) || 124 === e.charCodeAt(r - 1) || u || c || f) {
				switch (t) {
					case 34:
						o = !0;
						break;
					case 39:
						s = !0;
						break;
					case 96:
						l = !0;
						break;
					case 40:
						f++;
						break;
					case 41:
						f--;
						break;
					case 91:
						c++;
						break;
					case 93:
						c--;
						break;
					case 123:
						u++;
						break;
					case 125:
						u--
				}
				if (47 === t) {
					for (var h = r - 1, p = void 0; h >= 0 && " " === (p = e.charAt(h)); h--);
					p && Yr.test(p) || (d = !0)
				}
			} else void 0 === a ? (m = r + 1, a = e.slice(0, r).trim()) : _();

			function _() {
				(i || (i = [])).push(e.slice(m, r).trim()), m = r + 1
			}
			if (void 0 === a ? a = e.slice(0, r).trim() : 0 !== m && _(), i)
				for (r = 0; r < i.length; r++) a = Tr(a, i[r]);
			return a
		}

		function Tr(e, t) {
			var n = t.indexOf("(");
			if (n < 0) return '_f("' + t + '")(' + e + ")";
			var r = t.slice(0, n),
				a = t.slice(n + 1);
			return '_f("' + r + '")(' + e + (")" !== a ? "," + a : a)
		}

		function Dr(e, t) {
			console.error("[Vue compiler]: " + e)
		}

		function Sr(e, t) {
			return e ? e.map(function (e) {
				return e[t]
			}).filter(function (e) {
				return e
			}) : []
		}

		function jr(e, t, n, r, a) {
			(e.props || (e.props = [])).push(Rr({
				name: t,
				value: n,
				dynamic: a
			}, r)), e.plain = !1
		}

		function Cr(e, t, n, r, a) {
			(a ? e.dynamicAttrs || (e.dynamicAttrs = []) : e.attrs || (e.attrs = [])).push(Rr({
				name: t,
				value: n,
				dynamic: a
			}, r)), e.plain = !1
		}

		function Hr(e, t, n, r) {
			e.attrsMap[t] = n, e.attrsList.push(Rr({
				name: t,
				value: n
			}, r))
		}

		function Ar(e, t, n, r, a, i, s, o) {
			(e.directives || (e.directives = [])).push(Rr({
				name: t,
				rawName: n,
				value: r,
				arg: a,
				isDynamicArg: i,
				modifiers: s
			}, o)), e.plain = !1
		}

		function Er(e, t, n) {
			return n ? "_p(" + t + ',"' + e + '")' : e + t
		}

		function Pr(e, t, n, a, i, s, o, l) {
			var d;
			(a = a || r).right ? l ? t = "(" + t + ")==='click'?'contextmenu':(" + t + ")" : "click" === t && (t = "contextmenu", delete a.right) : a.middle && (l ? t = "(" + t + ")==='click'?'mouseup':(" + t + ")" : "click" === t && (t = "mouseup")), a.capture && (delete a.capture, t = Er("!", t, l)), a.once && (delete a.once, t = Er("~", t, l)), a.passive && (delete a.passive, t = Er("&", t, l)), a.native ? (delete a.native, d = e.nativeEvents || (e.nativeEvents = {})) : d = e.events || (e.events = {});
			var u = Rr({
				value: n.trim(),
				dynamic: l
			}, o);
			a !== r && (u.modifiers = a);
			var c = d[t];
			Array.isArray(c) ? i ? c.unshift(u) : c.push(u) : d[t] = c ? i ? [u, c] : [c, u] : u, e.plain = !1
		}

		function Or(e, t, n) {
			var r = $r(e, ":" + t) || $r(e, "v-bind:" + t);
			if (null != r) return xr(r);
			if (!1 !== n) {
				var a = $r(e, t);
				if (null != a) return JSON.stringify(a)
			}
		}

		function $r(e, t, n) {
			var r;
			if (null != (r = e.attrsMap[t]))
				for (var a = e.attrsList, i = 0, s = a.length; i < s; i++)
					if (a[i].name === t) {
						a.splice(i, 1);
						break
					}
			return n && delete e.attrsMap[t], r
		}

		function Nr(e, t) {
			for (var n = e.attrsList, r = 0, a = n.length; r < a; r++) {
				var i = n[r];
				if (t.test(i.name)) return n.splice(r, 1), i
			}
		}

		function Rr(e, t) {
			return t && (null != t.start && (e.start = t.start), null != t.end && (e.end = t.end)), e
		}

		function Fr(e, t, n) {
			var r = n || {},
				a = r.number,
				i = "$$v";
			r.trim && (i = "(typeof $$v === 'string'? $$v.trim(): $$v)"), a && (i = "_n(" + i + ")");
			var s = Wr(t, i);
			e.model = {
				value: "(" + t + ")",
				expression: JSON.stringify(t),
				callback: "function ($$v) {" + s + "}"
			}
		}

		function Wr(e, t) {
			var n = function (e) {
				if (e = e.trim(), yr = e.length, e.indexOf("[") < 0 || e.lastIndexOf("]") < yr - 1) return (br = e.lastIndexOf(".")) > -1 ? {
					exp: e.slice(0, br),
					key: '"' + e.slice(br + 1) + '"'
				} : {
					exp: e,
					key: null
				};
				for (gr = e, br = Lr = kr = 0; !zr();) Ur(Mr = Ir()) ? Jr(Mr) : 91 === Mr && qr(Mr);
				return {
					exp: e.slice(0, Lr),
					key: e.slice(Lr + 1, kr)
				}
			}(e);
			return null === n.key ? e + "=" + t : "$set(" + n.exp + ", " + n.key + ", " + t + ")"
		}

		function Ir() {
			return gr.charCodeAt(++br)
		}

		function zr() {
			return br >= yr
		}

		function Ur(e) {
			return 34 === e || 39 === e
		}

		function qr(e) {
			var t = 1;
			for (Lr = br; !zr();)
				if (Ur(e = Ir())) Jr(e);
				else if (91 === e && t++, 93 === e && t--, 0 === t) {
				kr = br;
				break
			}
		}

		function Jr(e) {
			for (var t = e; !zr() && (e = Ir()) !== t;);
		}
		var Br, Vr = "__r",
			Gr = "__c";

		function Kr(e, t, n) {
			var r = Br;
			return function a() {
				null !== t.apply(null, arguments) && Zr(e, a, n, r)
			}
		}
		var Xr = Be && !(ee && Number(ee[1]) <= 53);

		function Qr(e, t, n, r) {
			if (Xr) {
				var a = dn,
					i = t;
				t = i._wrapper = function (e) {
					if (e.target === e.currentTarget || e.timeStamp >= a || e.timeStamp <= 0 || e.target.ownerDocument !== document) return i.apply(this, arguments)
				}
			}
			Br.addEventListener(e, t, ne ? {
				capture: n,
				passive: r
			} : n)
		}

		function Zr(e, t, n, r) {
			(r || Br).removeEventListener(e, t._wrapper || t, n)
		}

		function ea(e, t) {
			if (!a(e.data.on) || !a(t.data.on)) {
				var n = t.data.on || {},
					r = e.data.on || {};
				Br = t.elm,
					function (e) {
						if (i(e[Vr])) {
							var t = K ? "change" : "input";
							e[t] = [].concat(e[Vr], e[t] || []), delete e[Vr]
						}
						i(e[Gr]) && (e.change = [].concat(e[Gr], e.change || []), delete e[Gr])
					}(n), st(n, r, Qr, Zr, Kr, t.context), Br = void 0
			}
		}
		var ta, na = {
			create: ea,
			update: ea
		};

		function ra(e, t) {
			if (!a(e.data.domProps) || !a(t.data.domProps)) {
				var n, r, s = t.elm,
					o = e.data.domProps || {},
					l = t.data.domProps || {};
				for (n in i(l.__ob__) && (l = t.data.domProps = S({}, l)), o) n in l || (s[n] = "");
				for (n in l) {
					if (r = l[n], "textContent" === n || "innerHTML" === n) {
						if (t.children && (t.children.length = 0), r === o[n]) continue;
						1 === s.childNodes.length && s.removeChild(s.childNodes[0])
					}
					if ("value" === n && "PROGRESS" !== s.tagName) {
						s._value = r;
						var d = a(r) ? "" : String(r);
						aa(s, d) && (s.value = d)
					} else if ("innerHTML" === n && Bn(s.tagName) && a(s.innerHTML)) {
						(ta = ta || document.createElement("div")).innerHTML = "<svg>" + r + "</svg>";
						for (var u = ta.firstChild; s.firstChild;) s.removeChild(s.firstChild);
						for (; u.firstChild;) s.appendChild(u.firstChild)
					} else if (r !== o[n]) try {
						s[n] = r
					} catch (e) {}
				}
			}
		}

		function aa(e, t) {
			return !e.composing && ("OPTION" === e.tagName || function (e, t) {
				var n = !0;
				try {
					n = document.activeElement !== e
				} catch (e) {}
				return n && e.value !== t
			}(e, t) || function (e, t) {
				var n = e.value,
					r = e._vModifiers;
				if (i(r)) {
					if (r.number) return h(n) !== h(t);
					if (r.trim) return n.trim() !== t.trim()
				}
				return n !== t
			}(e, t))
		}
		var ia = {
				create: ra,
				update: ra
			},
			sa = b(function (e) {
				var t = {},
					n = /:(.+)/;
				return e.split(/;(?![^(]*\))/g).forEach(function (e) {
					if (e) {
						var r = e.split(n);
						r.length > 1 && (t[r[0].trim()] = r[1].trim())
					}
				}), t
			});

		function oa(e) {
			var t = la(e.style);
			return e.staticStyle ? S(e.staticStyle, t) : t
		}

		function la(e) {
			return Array.isArray(e) ? j(e) : "string" == typeof e ? sa(e) : e
		}
		var da, ua = /^--/,
			ca = /\s*!important$/,
			fa = function (e, t, n) {
				if (ua.test(t)) e.style.setProperty(t, n);
				else if (ca.test(n)) e.style.setProperty(x(t), n.replace(ca, ""), "important");
				else {
					var r = ha(t);
					if (Array.isArray(n))
						for (var a = 0, i = n.length; a < i; a++) e.style[r] = n[a];
					else e.style[r] = n
				}
			},
			ma = ["Webkit", "Moz", "ms"],
			ha = b(function (e) {
				if (da = da || document.createElement("div").style, "filter" !== (e = k(e)) && e in da) return e;
				for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < ma.length; n++) {
					var r = ma[n] + t;
					if (r in da) return r
				}
			});

		function pa(e, t) {
			var n = t.data,
				r = e.data;
			if (!(a(n.staticStyle) && a(n.style) && a(r.staticStyle) && a(r.style))) {
				var s, o, l = t.elm,
					d = r.staticStyle,
					u = r.normalizedStyle || r.style || {},
					c = d || u,
					f = la(t.data.style) || {};
				t.data.normalizedStyle = i(f.__ob__) ? S({}, f) : f;
				var m = function (e, t) {
					for (var n, r = {}, a = e; a.componentInstance;)(a = a.componentInstance._vnode) && a.data && (n = oa(a.data)) && S(r, n);
					(n = oa(e.data)) && S(r, n);
					for (var i = e; i = i.parent;) i.data && (n = oa(i.data)) && S(r, n);
					return r
				}(t);
				for (o in c) a(m[o]) && fa(l, o, "");
				for (o in m)(s = m[o]) !== c[o] && fa(l, o, null == s ? "" : s)
			}
		}
		var _a = {
				create: pa,
				update: pa
			},
			va = /\s+/;

		function ya(e, t) {
			if (t && (t = t.trim()))
				if (e.classList) t.indexOf(" ") > -1 ? t.split(va).forEach(function (t) {
					return e.classList.add(t)
				}) : e.classList.add(t);
				else {
					var n = " " + (e.getAttribute("class") || "") + " ";
					n.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim())
				}
		}

		function ga(e, t) {
			if (t && (t = t.trim()))
				if (e.classList) t.indexOf(" ") > -1 ? t.split(va).forEach(function (t) {
					return e.classList.remove(t)
				}) : e.classList.remove(t), e.classList.length || e.removeAttribute("class");
				else {
					for (var n = " " + (e.getAttribute("class") || "") + " ", r = " " + t + " "; n.indexOf(r) >= 0;) n = n.replace(r, " ");
					(n = n.trim()) ? e.setAttribute("class", n): e.removeAttribute("class")
				}
		}

		function Ma(e) {
			if (e) {
				if ("object" == typeof e) {
					var t = {};
					return !1 !== e.css && S(t, ba(e.name || "v")), S(t, e), t
				}
				return "string" == typeof e ? ba(e) : void 0
			}
		}
		var ba = b(function (e) {
				return {
					enterClass: e + "-enter",
					enterToClass: e + "-enter-to",
					enterActiveClass: e + "-enter-active",
					leaveClass: e + "-leave",
					leaveToClass: e + "-leave-to",
					leaveActiveClass: e + "-leave-active"
				}
			}),
			La = J && !X,
			ka = "transition",
			wa = "animation",
			Ya = "transition",
			xa = "transitionend",
			Ta = "animation",
			Da = "animationend";
		La && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (Ya = "WebkitTransition", xa = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (Ta = "WebkitAnimation", Da = "webkitAnimationEnd"));
		var Sa = J ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function (e) {
			return e()
		};

		function ja(e) {
			Sa(function () {
				Sa(e)
			})
		}

		function Ca(e, t) {
			var n = e._transitionClasses || (e._transitionClasses = []);
			n.indexOf(t) < 0 && (n.push(t), ya(e, t))
		}

		function Ha(e, t) {
			e._transitionClasses && y(e._transitionClasses, t), ga(e, t)
		}

		function Aa(e, t, n) {
			var r = Pa(e, t),
				a = r.type,
				i = r.timeout,
				s = r.propCount;
			if (!a) return n();
			var o = a === ka ? xa : Da,
				l = 0,
				d = function () {
					e.removeEventListener(o, u), n()
				},
				u = function (t) {
					t.target === e && ++l >= s && d()
				};
			setTimeout(function () {
				l < s && d()
			}, i + 1), e.addEventListener(o, u)
		}
		var Ea = /\b(transform|all)(,|$)/;

		function Pa(e, t) {
			var n, r = window.getComputedStyle(e),
				a = (r[Ya + "Delay"] || "").split(", "),
				i = (r[Ya + "Duration"] || "").split(", "),
				s = Oa(a, i),
				o = (r[Ta + "Delay"] || "").split(", "),
				l = (r[Ta + "Duration"] || "").split(", "),
				d = Oa(o, l),
				u = 0,
				c = 0;
			return t === ka ? s > 0 && (n = ka, u = s, c = i.length) : t === wa ? d > 0 && (n = wa, u = d, c = l.length) : c = (n = (u = Math.max(s, d)) > 0 ? s > d ? ka : wa : null) ? n === ka ? i.length : l.length : 0, {
				type: n,
				timeout: u,
				propCount: c,
				hasTransform: n === ka && Ea.test(r[Ya + "Property"])
			}
		}

		function Oa(e, t) {
			for (; e.length < t.length;) e = e.concat(e);
			return Math.max.apply(null, t.map(function (t, n) {
				return $a(t) + $a(e[n])
			}))
		}

		function $a(e) {
			return 1e3 * Number(e.slice(0, -1).replace(",", "."))
		}

		function Na(e, t) {
			var n = e.elm;
			i(n._leaveCb) && (n._leaveCb.cancelled = !0, n._leaveCb());
			var r = Ma(e.data.transition);
			if (!a(r) && !i(n._enterCb) && 1 === n.nodeType) {
				for (var s = r.css, o = r.type, d = r.enterClass, u = r.enterToClass, c = r.enterActiveClass, f = r.appearClass, m = r.appearToClass, p = r.appearActiveClass, _ = r.beforeEnter, v = r.enter, y = r.afterEnter, g = r.enterCancelled, M = r.beforeAppear, b = r.appear, L = r.afterAppear, k = r.appearCancelled, w = r.duration, Y = Xt, x = Xt.$vnode; x && x.parent;) Y = x.context, x = x.parent;
				var T = !Y._isMounted || !e.isRootInsert;
				if (!T || b || "" === b) {
					var D = T && f ? f : d,
						S = T && p ? p : c,
						j = T && m ? m : u,
						C = T && M || _,
						H = T && "function" == typeof b ? b : v,
						A = T && L || y,
						E = T && k || g,
						P = h(l(w) ? w.enter : w),
						$ = !1 !== s && !X,
						N = Wa(H),
						R = n._enterCb = O(function () {
							$ && (Ha(n, j), Ha(n, S)), R.cancelled ? ($ && Ha(n, D), E && E(n)) : A && A(n), n._enterCb = null
						});
					e.data.show || ot(e, "insert", function () {
						var t = n.parentNode,
							r = t && t._pending && t._pending[e.key];
						r && r.tag === e.tag && r.elm._leaveCb && r.elm._leaveCb(), H && H(n, R)
					}), C && C(n), $ && (Ca(n, D), Ca(n, S), ja(function () {
						Ha(n, D), R.cancelled || (Ca(n, j), N || (Fa(P) ? setTimeout(R, P) : Aa(n, o, R)))
					})), e.data.show && (t && t(), H && H(n, R)), $ || N || R()
				}
			}
		}

		function Ra(e, t) {
			var n = e.elm;
			i(n._enterCb) && (n._enterCb.cancelled = !0, n._enterCb());
			var r = Ma(e.data.transition);
			if (a(r) || 1 !== n.nodeType) return t();
			if (!i(n._leaveCb)) {
				var s = r.css,
					o = r.type,
					d = r.leaveClass,
					u = r.leaveToClass,
					c = r.leaveActiveClass,
					f = r.beforeLeave,
					m = r.leave,
					p = r.afterLeave,
					_ = r.leaveCancelled,
					v = r.delayLeave,
					y = r.duration,
					g = !1 !== s && !X,
					M = Wa(m),
					b = h(l(y) ? y.leave : y),
					L = n._leaveCb = O(function () {
						n.parentNode && n.parentNode._pending && (n.parentNode._pending[e.key] = null), g && (Ha(n, u), Ha(n, c)), L.cancelled ? (g && Ha(n, d), _ && _(n)) : (t(), p && p(n)), n._leaveCb = null
					});
				v ? v(k) : k()
			}

			function k() {
				L.cancelled || (!e.data.show && n.parentNode && ((n.parentNode._pending || (n.parentNode._pending = {}))[e.key] = e), f && f(n), g && (Ca(n, d), Ca(n, c), ja(function () {
					Ha(n, d), L.cancelled || (Ca(n, u), M || (Fa(b) ? setTimeout(L, b) : Aa(n, o, L)))
				})), m && m(n, L), g || M || L())
			}
		}

		function Fa(e) {
			return "number" == typeof e && !isNaN(e)
		}

		function Wa(e) {
			if (a(e)) return !1;
			var t = e.fns;
			return i(t) ? Wa(Array.isArray(t) ? t[0] : t) : (e._length || e.length) > 1
		}

		function Ia(e, t) {
			!0 !== t.data.show && Na(t)
		}
		var za = function (e) {
			var t, n, r = {},
				l = e.modules,
				d = e.nodeOps;
			for (t = 0; t < rr.length; ++t)
				for (r[rr[t]] = [], n = 0; n < l.length; ++n) i(l[n][rr[t]]) && r[rr[t]].push(l[n][rr[t]]);

			function u(e) {
				var t = d.parentNode(e);
				i(t) && d.removeChild(t, e)
			}

			function c(e, t, n, a, o, l, u) {
				if (i(e.elm) && i(l) && (e = l[u] = ge(e)), e.isRootInsert = !o, ! function (e, t, n, a) {
						var o = e.data;
						if (i(o)) {
							var l = i(e.componentInstance) && o.keepAlive;
							if (i(o = o.hook) && i(o = o.init) && o(e, !1), i(e.componentInstance)) return f(e, t), m(n, e.elm, a), s(l) && function (e, t, n, a) {
								for (var s, o = e; o.componentInstance;)
									if (i(s = (o = o.componentInstance._vnode).data) && i(s = s.transition)) {
										for (s = 0; s < r.activate.length; ++s) r.activate[s](nr, o);
										t.push(o);
										break
									}
								m(n, e.elm, a)
							}(e, t, n, a), !0
						}
					}(e, t, n, a)) {
					var c = e.data,
						p = e.children,
						_ = e.tag;
					i(_) ? (e.elm = e.ns ? d.createElementNS(e.ns, _) : d.createElement(_, e), y(e), h(e, p, t), i(c) && v(e, t), m(n, e.elm, a)) : s(e.isComment) ? (e.elm = d.createComment(e.text), m(n, e.elm, a)) : (e.elm = d.createTextNode(e.text), m(n, e.elm, a))
				}
			}

			function f(e, t) {
				i(e.data.pendingInsert) && (t.push.apply(t, e.data.pendingInsert), e.data.pendingInsert = null), e.elm = e.componentInstance.$el, _(e) ? (v(e, t), y(e)) : (tr(e), t.push(e))
			}

			function m(e, t, n) {
				i(e) && (i(n) ? d.parentNode(n) === e && d.insertBefore(e, t, n) : d.appendChild(e, t))
			}

			function h(e, t, n) {
				if (Array.isArray(t))
					for (var r = 0; r < t.length; ++r) c(t[r], n, e.elm, null, !0, t, r);
				else o(e.text) && d.appendChild(e.elm, d.createTextNode(String(e.text)))
			}

			function _(e) {
				for (; e.componentInstance;) e = e.componentInstance._vnode;
				return i(e.tag)
			}

			function v(e, n) {
				for (var a = 0; a < r.create.length; ++a) r.create[a](nr, e);
				i(t = e.data.hook) && (i(t.create) && t.create(nr, e), i(t.insert) && n.push(e))
			}

			function y(e) {
				var t;
				if (i(t = e.fnScopeId)) d.setStyleScope(e.elm, t);
				else
					for (var n = e; n;) i(t = n.context) && i(t = t.$options._scopeId) && d.setStyleScope(e.elm, t), n = n.parent;
				i(t = Xt) && t !== e.context && t !== e.fnContext && i(t = t.$options._scopeId) && d.setStyleScope(e.elm, t)
			}

			function g(e, t, n, r, a, i) {
				for (; r <= a; ++r) c(n[r], i, e, t, !1, n, r)
			}

			function M(e) {
				var t, n, a = e.data;
				if (i(a))
					for (i(t = a.hook) && i(t = t.destroy) && t(e), t = 0; t < r.destroy.length; ++t) r.destroy[t](e);
				if (i(t = e.children))
					for (n = 0; n < e.children.length; ++n) M(e.children[n])
			}

			function b(e, t, n) {
				for (; t <= n; ++t) {
					var r = e[t];
					i(r) && (i(r.tag) ? (L(r), M(r)) : u(r.elm))
				}
			}

			function L(e, t) {
				if (i(t) || i(e.data)) {
					var n, a = r.remove.length + 1;
					for (i(t) ? t.listeners += a : t = function (e, t) {
							function n() {
								0 == --n.listeners && u(e)
							}
							return n.listeners = t, n
						}(e.elm, a), i(n = e.componentInstance) && i(n = n._vnode) && i(n.data) && L(n, t), n = 0; n < r.remove.length; ++n) r.remove[n](e, t);
					i(n = e.data.hook) && i(n = n.remove) ? n(e, t) : t()
				} else u(e.elm)
			}

			function k(e, t, n, r) {
				for (var a = n; a < r; a++) {
					var s = t[a];
					if (i(s) && ar(e, s)) return a
				}
			}

			function w(e, t, n, o, l, u) {
				if (e !== t) {
					i(t.elm) && i(o) && (t = o[l] = ge(t));
					var f = t.elm = e.elm;
					if (s(e.isAsyncPlaceholder)) i(t.asyncFactory.resolved) ? T(e.elm, t, n) : t.isAsyncPlaceholder = !0;
					else if (s(t.isStatic) && s(e.isStatic) && t.key === e.key && (s(t.isCloned) || s(t.isOnce))) t.componentInstance = e.componentInstance;
					else {
						var m, h = t.data;
						i(h) && i(m = h.hook) && i(m = m.prepatch) && m(e, t);
						var p = e.children,
							v = t.children;
						if (i(h) && _(t)) {
							for (m = 0; m < r.update.length; ++m) r.update[m](e, t);
							i(m = h.hook) && i(m = m.update) && m(e, t)
						}
						a(t.text) ? i(p) && i(v) ? p !== v && function (e, t, n, r, s) {
							for (var o, l, u, f = 0, m = 0, h = t.length - 1, p = t[0], _ = t[h], v = n.length - 1, y = n[0], M = n[v], L = !s; f <= h && m <= v;) a(p) ? p = t[++f] : a(_) ? _ = t[--h] : ar(p, y) ? (w(p, y, r, n, m), p = t[++f], y = n[++m]) : ar(_, M) ? (w(_, M, r, n, v), _ = t[--h], M = n[--v]) : ar(p, M) ? (w(p, M, r, n, v), L && d.insertBefore(e, p.elm, d.nextSibling(_.elm)), p = t[++f], M = n[--v]) : ar(_, y) ? (w(_, y, r, n, m), L && d.insertBefore(e, _.elm, p.elm), _ = t[--h], y = n[++m]) : (a(o) && (o = ir(t, f, h)), a(l = i(y.key) ? o[y.key] : k(y, t, f, h)) ? c(y, r, e, p.elm, !1, n, m) : ar(u = t[l], y) ? (w(u, y, r, n, m), t[l] = void 0, L && d.insertBefore(e, u.elm, p.elm)) : c(y, r, e, p.elm, !1, n, m), y = n[++m]);
							f > h ? g(e, a(n[v + 1]) ? null : n[v + 1].elm, n, m, v, r) : m > v && b(t, f, h)
						}(f, p, v, n, u) : i(v) ? (i(e.text) && d.setTextContent(f, ""), g(f, null, v, 0, v.length - 1, n)) : i(p) ? b(p, 0, p.length - 1) : i(e.text) && d.setTextContent(f, "") : e.text !== t.text && d.setTextContent(f, t.text), i(h) && i(m = h.hook) && i(m = m.postpatch) && m(e, t)
					}
				}
			}

			function Y(e, t, n) {
				if (s(n) && i(e.parent)) e.parent.data.pendingInsert = t;
				else
					for (var r = 0; r < t.length; ++r) t[r].data.hook.insert(t[r])
			}
			var x = p("attrs,class,staticClass,staticStyle,key");

			function T(e, t, n, r) {
				var a, o = t.tag,
					l = t.data,
					d = t.children;
				if (r = r || l && l.pre, t.elm = e, s(t.isComment) && i(t.asyncFactory)) return t.isAsyncPlaceholder = !0, !0;
				if (i(l) && (i(a = l.hook) && i(a = a.init) && a(t, !0), i(a = t.componentInstance))) return f(t, n), !0;
				if (i(o)) {
					if (i(d))
						if (e.hasChildNodes())
							if (i(a = l) && i(a = a.domProps) && i(a = a.innerHTML)) {
								if (a !== e.innerHTML) return !1
							} else {
								for (var u = !0, c = e.firstChild, m = 0; m < d.length; m++) {
									if (!c || !T(c, d[m], n, r)) {
										u = !1;
										break
									}
									c = c.nextSibling
								}
								if (!u || c) return !1
							}
					else h(t, d, n);
					if (i(l)) {
						var p = !1;
						for (var _ in l)
							if (!x(_)) {
								p = !0, v(t, n);
								break
							}!p && l.class && rt(l.class)
					}
				} else e.data !== t.text && (e.data = t.text);
				return !0
			}
			return function (e, t, n, o) {
				if (!a(t)) {
					var l, u = !1,
						f = [];
					if (a(e)) u = !0, c(t, f);
					else {
						var m = i(e.nodeType);
						if (!m && ar(e, t)) w(e, t, f, null, null, o);
						else {
							if (m) {
								if (1 === e.nodeType && e.hasAttribute($) && (e.removeAttribute($), n = !0), s(n) && T(e, t, f)) return Y(t, f, !0), e;
								l = e, e = new pe(d.tagName(l).toLowerCase(), {}, [], void 0, l)
							}
							var h = e.elm,
								p = d.parentNode(h);
							if (c(t, f, h._leaveCb ? null : p, d.nextSibling(h)), i(t.parent))
								for (var v = t.parent, y = _(t); v;) {
									for (var g = 0; g < r.destroy.length; ++g) r.destroy[g](v);
									if (v.elm = t.elm, y) {
										for (var L = 0; L < r.create.length; ++L) r.create[L](nr, v);
										var k = v.data.hook.insert;
										if (k.merged)
											for (var x = 1; x < k.fns.length; x++) k.fns[x]()
									} else tr(v);
									v = v.parent
								}
							i(p) ? b([e], 0, 0) : i(e.tag) && M(e)
						}
					}
					return Y(t, f, u), t.elm
				}
				i(e) && M(e)
			}
		}({
			nodeOps: Zn,
			modules: [_r, wr, na, ia, _a, J ? {
				create: Ia,
				activate: Ia,
				remove: function (e, t) {
					!0 !== e.data.show ? Ra(e, t) : t()
				}
			} : {}].concat(fr)
		});
		X && document.addEventListener("selectionchange", function () {
			var e = document.activeElement;
			e && e.vmodel && Xa(e, "input")
		});
		var Ua = {
			inserted: function (e, t, n, r) {
				"select" === n.tag ? (r.elm && !r.elm._vOptions ? ot(n, "postpatch", function () {
					Ua.componentUpdated(e, t, n)
				}) : qa(e, t, n.context), e._vOptions = [].map.call(e.options, Va)) : ("textarea" === n.tag || Xn(e.type)) && (e._vModifiers = t.modifiers, t.modifiers.lazy || (e.addEventListener("compositionstart", Ga), e.addEventListener("compositionend", Ka), e.addEventListener("change", Ka), X && (e.vmodel = !0)))
			},
			componentUpdated: function (e, t, n) {
				if ("select" === n.tag) {
					qa(e, t, n.context);
					var r = e._vOptions,
						a = e._vOptions = [].map.call(e.options, Va);
					a.some(function (e, t) {
						return !E(e, r[t])
					}) && (e.multiple ? t.value.some(function (e) {
						return Ba(e, a)
					}) : t.value !== t.oldValue && Ba(t.value, a)) && Xa(e, "change")
				}
			}
		};

		function qa(e, t, n) {
			Ja(e, t, n), (K || Q) && setTimeout(function () {
				Ja(e, t, n)
			}, 0)
		}

		function Ja(e, t, n) {
			var r = t.value,
				a = e.multiple;
			if (!a || Array.isArray(r)) {
				for (var i, s, o = 0, l = e.options.length; o < l; o++)
					if (s = e.options[o], a) i = P(r, Va(s)) > -1, s.selected !== i && (s.selected = i);
					else if (E(Va(s), r)) return void(e.selectedIndex !== o && (e.selectedIndex = o));
				a || (e.selectedIndex = -1)
			}
		}

		function Ba(e, t) {
			return t.every(function (t) {
				return !E(t, e)
			})
		}

		function Va(e) {
			return "_value" in e ? e._value : e.value
		}

		function Ga(e) {
			e.target.composing = !0
		}

		function Ka(e) {
			e.target.composing && (e.target.composing = !1, Xa(e.target, "input"))
		}

		function Xa(e, t) {
			var n = document.createEvent("HTMLEvents");
			n.initEvent(t, !0, !0), e.dispatchEvent(n)
		}

		function Qa(e) {
			return !e.componentInstance || e.data && e.data.transition ? e : Qa(e.componentInstance._vnode)
		}
		var Za = {
				model: Ua,
				show: {
					bind: function (e, t, n) {
						var r = t.value,
							a = (n = Qa(n)).data && n.data.transition,
							i = e.__vOriginalDisplay = "none" === e.style.display ? "" : e.style.display;
						r && a ? (n.data.show = !0, Na(n, function () {
							e.style.display = i
						})) : e.style.display = r ? i : "none"
					},
					update: function (e, t, n) {
						var r = t.value;
						!r != !t.oldValue && ((n = Qa(n)).data && n.data.transition ? (n.data.show = !0, r ? Na(n, function () {
							e.style.display = e.__vOriginalDisplay
						}) : Ra(n, function () {
							e.style.display = "none"
						})) : e.style.display = r ? e.__vOriginalDisplay : "none")
					},
					unbind: function (e, t, n, r, a) {
						a || (e.style.display = e.__vOriginalDisplay)
					}
				}
			},
			ei = {
				name: String,
				appear: Boolean,
				css: Boolean,
				mode: String,
				type: String,
				enterClass: String,
				leaveClass: String,
				enterToClass: String,
				leaveToClass: String,
				enterActiveClass: String,
				leaveActiveClass: String,
				appearClass: String,
				appearActiveClass: String,
				appearToClass: String,
				duration: [Number, String, Object]
			};

		function ti(e) {
			var t = e && e.componentOptions;
			return t && t.Ctor.options.abstract ? ti(Jt(t.children)) : e
		}

		function ni(e) {
			var t = {},
				n = e.$options;
			for (var r in n.propsData) t[r] = e[r];
			var a = n._parentListeners;
			for (var i in a) t[k(i)] = a[i];
			return t
		}

		function ri(e, t) {
			if (/\d-keep-alive$/.test(t.tag)) return e("keep-alive", {
				props: t.componentOptions.propsData
			})
		}
		var ai = function (e) {
				return e.tag || qt(e)
			},
			ii = function (e) {
				return "show" === e.name
			},
			si = {
				name: "transition",
				props: ei,
				abstract: !0,
				render: function (e) {
					var t = this,
						n = this.$slots.default;
					if (n && (n = n.filter(ai)).length) {
						var r = this.mode,
							a = n[0];
						if (function (e) {
								for (; e = e.parent;)
									if (e.data.transition) return !0
							}(this.$vnode)) return a;
						var i = ti(a);
						if (!i) return a;
						if (this._leaving) return ri(e, a);
						var s = "__transition-" + this._uid + "-";
						i.key = null == i.key ? i.isComment ? s + "comment" : s + i.tag : o(i.key) ? 0 === String(i.key).indexOf(s) ? i.key : s + i.key : i.key;
						var l = (i.data || (i.data = {})).transition = ni(this),
							d = this._vnode,
							u = ti(d);
						if (i.data.directives && i.data.directives.some(ii) && (i.data.show = !0), u && u.data && ! function (e, t) {
								return t.key === e.key && t.tag === e.tag
							}(i, u) && !qt(u) && (!u.componentInstance || !u.componentInstance._vnode.isComment)) {
							var c = u.data.transition = S({}, l);
							if ("out-in" === r) return this._leaving = !0, ot(c, "afterLeave", function () {
								t._leaving = !1, t.$forceUpdate()
							}), ri(e, a);
							if ("in-out" === r) {
								if (qt(i)) return d;
								var f, m = function () {
									f()
								};
								ot(l, "afterEnter", m), ot(l, "enterCancelled", m), ot(c, "delayLeave", function (e) {
									f = e
								})
							}
						}
						return a
					}
				}
			},
			oi = S({
				tag: String,
				moveClass: String
			}, ei);

		function li(e) {
			e.elm._moveCb && e.elm._moveCb(), e.elm._enterCb && e.elm._enterCb()
		}

		function di(e) {
			e.data.newPos = e.elm.getBoundingClientRect()
		}

		function ui(e) {
			var t = e.data.pos,
				n = e.data.newPos,
				r = t.left - n.left,
				a = t.top - n.top;
			if (r || a) {
				e.data.moved = !0;
				var i = e.elm.style;
				i.transform = i.WebkitTransform = "translate(" + r + "px," + a + "px)", i.transitionDuration = "0s"
			}
		}
		delete oi.mode;
		var ci = {
			Transition: si,
			TransitionGroup: {
				props: oi,
				beforeMount: function () {
					var e = this,
						t = this._update;
					this._update = function (n, r) {
						var a = Qt(e);
						e.__patch__(e._vnode, e.kept, !1, !0), e._vnode = e.kept, a(), t.call(e, n, r)
					}
				},
				render: function (e) {
					for (var t = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), r = this.prevChildren = this.children, a = this.$slots.default || [], i = this.children = [], s = ni(this), o = 0; o < a.length; o++) {
						var l = a[o];
						l.tag && null != l.key && 0 !== String(l.key).indexOf("__vlist") && (i.push(l), n[l.key] = l, (l.data || (l.data = {})).transition = s)
					}
					if (r) {
						for (var d = [], u = [], c = 0; c < r.length; c++) {
							var f = r[c];
							f.data.transition = s, f.data.pos = f.elm.getBoundingClientRect(), n[f.key] ? d.push(f) : u.push(f)
						}
						this.kept = e(t, null, d), this.removed = u
					}
					return e(t, null, i)
				},
				updated: function () {
					var e = this.prevChildren,
						t = this.moveClass || (this.name || "v") + "-move";
					e.length && this.hasMove(e[0].elm, t) && (e.forEach(li), e.forEach(di), e.forEach(ui), this._reflow = document.body.offsetHeight, e.forEach(function (e) {
						if (e.data.moved) {
							var n = e.elm,
								r = n.style;
							Ca(n, t), r.transform = r.WebkitTransform = r.transitionDuration = "", n.addEventListener(xa, n._moveCb = function e(r) {
								r && r.target !== n || r && !/transform$/.test(r.propertyName) || (n.removeEventListener(xa, e), n._moveCb = null, Ha(n, t))
							})
						}
					}))
				},
				methods: {
					hasMove: function (e, t) {
						if (!La) return !1;
						if (this._hasMove) return this._hasMove;
						var n = e.cloneNode();
						e._transitionClasses && e._transitionClasses.forEach(function (e) {
							ga(n, e)
						}), ya(n, t), n.style.display = "none", this.$el.appendChild(n);
						var r = Pa(n);
						return this.$el.removeChild(n), this._hasMove = r.hasTransform
					}
				}
			}
		};
		wn.config.mustUseProp = An, wn.config.isReservedTag = Vn, wn.config.isReservedAttr = Cn, wn.config.getTagNamespace = Gn, wn.config.isUnknownElement = function (e) {
			if (!J) return !0;
			if (Vn(e)) return !1;
			if (e = e.toLowerCase(), null != Kn[e]) return Kn[e];
			var t = document.createElement(e);
			return e.indexOf("-") > -1 ? Kn[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement : Kn[e] = /HTMLUnknownElement/.test(t.toString())
		}, S(wn.options.directives, Za), S(wn.options.components, ci), wn.prototype.__patch__ = J ? za : C, wn.prototype.$mount = function (e, t) {
			return function (e, t, n) {
				return e.$el = t, e.$options.render || (e.$options.render = ve), tn(e, "beforeMount"), new hn(e, function () {
					e._update(e._render(), n)
				}, C, {
					before: function () {
						e._isMounted && !e._isDestroyed && tn(e, "beforeUpdate")
					}
				}, !0), n = !1, null == e.$vnode && (e._isMounted = !0, tn(e, "mounted")), e
			}(this, e = e && J ? Qn(e) : void 0, t)
		}, J && setTimeout(function () {
			F.devtools && ie && ie.emit("init", wn)
		}, 0);
		var fi, mi = /\{\{((?:.|\r?\n)+?)\}\}/g,
			hi = /[-.*+?^${}()|[\]\/\\]/g,
			pi = b(function (e) {
				var t = e[0].replace(hi, "\\$&"),
					n = e[1].replace(hi, "\\$&");
				return new RegExp(t + "((?:.|\\n)+?)" + n, "g")
			}),
			_i = {
				staticKeys: ["staticClass"],
				transformNode: function (e, t) {
					t.warn;
					var n = $r(e, "class");
					n && (e.staticClass = JSON.stringify(n));
					var r = Or(e, "class", !1);
					r && (e.classBinding = r)
				},
				genData: function (e) {
					var t = "";
					return e.staticClass && (t += "staticClass:" + e.staticClass + ","), e.classBinding && (t += "class:" + e.classBinding + ","), t
				}
			},
			vi = {
				staticKeys: ["staticStyle"],
				transformNode: function (e, t) {
					t.warn;
					var n = $r(e, "style");
					n && (e.staticStyle = JSON.stringify(sa(n)));
					var r = Or(e, "style", !1);
					r && (e.styleBinding = r)
				},
				genData: function (e) {
					var t = "";
					return e.staticStyle && (t += "staticStyle:" + e.staticStyle + ","), e.styleBinding && (t += "style:(" + e.styleBinding + "),"), t
				}
			},
			yi = p("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),
			gi = p("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),
			Mi = p("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),
			bi = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
			Li = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
			ki = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + W.source + "]*",
			wi = "((?:" + ki + "\\:)?" + ki + ")",
			Yi = new RegExp("^<" + wi),
			xi = /^\s*(\/?)>/,
			Ti = new RegExp("^<\\/" + wi + "[^>]*>"),
			Di = /^<!DOCTYPE [^>]+>/i,
			Si = /^<!\--/,
			ji = /^<!\[/,
			Ci = p("script,style,textarea", !0),
			Hi = {},
			Ai = {
				"&lt;": "<",
				"&gt;": ">",
				"&quot;": '"',
				"&amp;": "&",
				"&#10;": "\n",
				"&#9;": "\t",
				"&#39;": "'"
			},
			Ei = /&(?:lt|gt|quot|amp|#39);/g,
			Pi = /&(?:lt|gt|quot|amp|#39|#10|#9);/g,
			Oi = p("pre,textarea", !0),
			$i = function (e, t) {
				return e && Oi(e) && "\n" === t[0]
			};

		function Ni(e, t) {
			var n = t ? Pi : Ei;
			return e.replace(n, function (e) {
				return Ai[e]
			})
		}
		var Ri, Fi, Wi, Ii, zi, Ui, qi, Ji, Bi = /^@|^v-on:/,
			Vi = /^v-|^@|^:|^#/,
			Gi = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
			Ki = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
			Xi = /^\(|\)$/g,
			Qi = /^\[.*\]$/,
			Zi = /:(.*)$/,
			es = /^:|^\.|^v-bind:/,
			ts = /\.[^.\]]+(?=[^\]]*$)/g,
			ns = /^v-slot(:|$)|^#/,
			rs = /[\r\n]/,
			as = /\s+/g,
			is = b(function (e) {
				return (fi = fi || document.createElement("div")).innerHTML = e, fi.textContent
			}),
			ss = "_empty_";

		function os(e, t, n) {
			return {
				type: 1,
				tag: e,
				attrsList: t,
				attrsMap: function (e) {
					for (var t = {}, n = 0, r = e.length; n < r; n++) t[e[n].name] = e[n].value;
					return t
				}(t),
				rawAttrsMap: {},
				parent: n,
				children: []
			}
		}

		function ls(e, t) {
			var n, r;
			(r = Or(n = e, "key")) && (n.key = r), e.plain = !e.key && !e.scopedSlots && !e.attrsList.length,
				function (e) {
					var t = Or(e, "ref");
					t && (e.ref = t, e.refInFor = function (e) {
						for (var t = e; t;) {
							if (void 0 !== t.for) return !0;
							t = t.parent
						}
						return !1
					}(e))
				}(e),
				function (e) {
					var t;
					"template" === e.tag ? (t = $r(e, "scope"), e.slotScope = t || $r(e, "slot-scope")) : (t = $r(e, "slot-scope")) && (e.slotScope = t);
					var n = Or(e, "slot");
					if (n && (e.slotTarget = '""' === n ? '"default"' : n, e.slotTargetDynamic = !(!e.attrsMap[":slot"] && !e.attrsMap["v-bind:slot"]), "template" === e.tag || e.slotScope || Cr(e, "slot", n, function (e, t) {
							return e.rawAttrsMap[":" + t] || e.rawAttrsMap["v-bind:" + t] || e.rawAttrsMap[t]
						}(e, "slot"))), "template" === e.tag) {
						var r = Nr(e, ns);
						if (r) {
							var a = cs(r),
								i = a.name,
								s = a.dynamic;
							e.slotTarget = i, e.slotTargetDynamic = s, e.slotScope = r.value || ss
						}
					} else {
						var o = Nr(e, ns);
						if (o) {
							var l = e.scopedSlots || (e.scopedSlots = {}),
								d = cs(o),
								u = d.name,
								c = d.dynamic,
								f = l[u] = os("template", [], e);
							f.slotTarget = u, f.slotTargetDynamic = c, f.children = e.children.filter(function (e) {
								if (!e.slotScope) return e.parent = f, !0
							}), f.slotScope = o.value || ss, e.children = [], e.plain = !1
						}
					}
				}(e),
				function (e) {
					"slot" === e.tag && (e.slotName = Or(e, "name"))
				}(e),
				function (e) {
					var t;
					(t = Or(e, "is")) && (e.component = t), null != $r(e, "inline-template") && (e.inlineTemplate = !0)
				}(e);
			for (var a = 0; a < Wi.length; a++) e = Wi[a](e, t) || e;
			return function (e) {
				var t, n, r, a, i, s, o, l, d = e.attrsList;
				for (t = 0, n = d.length; t < n; t++)
					if (r = a = d[t].name, i = d[t].value, Vi.test(r))
						if (e.hasBindings = !0, (s = fs(r.replace(Vi, ""))) && (r = r.replace(ts, "")), es.test(r)) r = r.replace(es, ""), i = xr(i), (l = Qi.test(r)) && (r = r.slice(1, -1)), s && (s.prop && !l && "innerHtml" === (r = k(r)) && (r = "innerHTML"), s.camel && !l && (r = k(r)), s.sync && (o = Wr(i, "$event"), l ? Pr(e, '"update:"+(' + r + ")", o, null, !1, 0, d[t], !0) : (Pr(e, "update:" + k(r), o, null, !1, 0, d[t]), x(r) !== k(r) && Pr(e, "update:" + x(r), o, null, !1, 0, d[t])))), s && s.prop || !e.component && qi(e.tag, e.attrsMap.type, r) ? jr(e, r, i, d[t], l) : Cr(e, r, i, d[t], l);
						else if (Bi.test(r)) r = r.replace(Bi, ""), (l = Qi.test(r)) && (r = r.slice(1, -1)), Pr(e, r, i, s, !1, 0, d[t], l);
				else {
					var u = (r = r.replace(Vi, "")).match(Zi),
						c = u && u[1];
					l = !1, c && (r = r.slice(0, -(c.length + 1)), Qi.test(c) && (c = c.slice(1, -1), l = !0)), Ar(e, r, a, i, c, l, s, d[t])
				} else Cr(e, r, JSON.stringify(i), d[t]), !e.component && "muted" === r && qi(e.tag, e.attrsMap.type, r) && jr(e, r, "true", d[t])
			}(e), e
		}

		function ds(e) {
			var t;
			if (t = $r(e, "v-for")) {
				var n = function (e) {
					var t = e.match(Gi);
					if (t) {
						var n = {};
						n.for = t[2].trim();
						var r = t[1].trim().replace(Xi, ""),
							a = r.match(Ki);
						return a ? (n.alias = r.replace(Ki, "").trim(), n.iterator1 = a[1].trim(), a[2] && (n.iterator2 = a[2].trim())) : n.alias = r, n
					}
				}(t);
				n && S(e, n)
			}
		}

		function us(e, t) {
			e.ifConditions || (e.ifConditions = []), e.ifConditions.push(t)
		}

		function cs(e) {
			var t = e.name.replace(ns, "");
			return t || "#" !== e.name[0] && (t = "default"), Qi.test(t) ? {
				name: t.slice(1, -1),
				dynamic: !0
			} : {
				name: '"' + t + '"',
				dynamic: !1
			}
		}

		function fs(e) {
			var t = e.match(ts);
			if (t) {
				var n = {};
				return t.forEach(function (e) {
					n[e.slice(1)] = !0
				}), n
			}
		}
		var ms = /^xmlns:NS\d+/,
			hs = /^NS\d+:/;

		function ps(e) {
			return os(e.tag, e.attrsList.slice(), e.parent)
		}
		var _s, vs, ys = [_i, vi, {
				preTransformNode: function (e, t) {
					if ("input" === e.tag) {
						var n, r = e.attrsMap;
						if (!r["v-model"]) return;
						if ((r[":type"] || r["v-bind:type"]) && (n = Or(e, "type")), r.type || n || !r["v-bind"] || (n = "(" + r["v-bind"] + ").type"), n) {
							var a = $r(e, "v-if", !0),
								i = a ? "&&(" + a + ")" : "",
								s = null != $r(e, "v-else", !0),
								o = $r(e, "v-else-if", !0),
								l = ps(e);
							ds(l), Hr(l, "type", "checkbox"), ls(l, t), l.processed = !0, l.if = "(" + n + ")==='checkbox'" + i, us(l, {
								exp: l.if,
								block: l
							});
							var d = ps(e);
							$r(d, "v-for", !0), Hr(d, "type", "radio"), ls(d, t), us(l, {
								exp: "(" + n + ")==='radio'" + i,
								block: d
							});
							var u = ps(e);
							return $r(u, "v-for", !0), Hr(u, ":type", n), ls(u, t), us(l, {
								exp: a,
								block: u
							}), s ? l.else = !0 : o && (l.elseif = o), l
						}
					}
				}
			}],
			gs = {
				expectHTML: !0,
				modules: ys,
				directives: {
					model: function (e, t, n) {
						var r = t.value,
							a = t.modifiers,
							i = e.tag,
							s = e.attrsMap.type;
						if (e.component) return Fr(e, r, a), !1;
						if ("select" === i) ! function (e, t, n) {
							var r = 'var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' + (a && a.number ? "_n(val)" : "val") + "});";
							Pr(e, "change", r = r + " " + Wr(t, "$event.target.multiple ? $$selectedVal : $$selectedVal[0]"), null, !0)
						}(e, r);
						else if ("input" === i && "checkbox" === s) ! function (e, t, n) {
							var r = n && n.number,
								a = Or(e, "value") || "null",
								i = Or(e, "true-value") || "true",
								s = Or(e, "false-value") || "false";
							jr(e, "checked", "Array.isArray(" + t + ")?_i(" + t + "," + a + ")>-1" + ("true" === i ? ":(" + t + ")" : ":_q(" + t + "," + i + ")")), Pr(e, "change", "var $$a=" + t + ",$$el=$event.target,$$c=$$el.checked?(" + i + "):(" + s + ");if(Array.isArray($$a)){var $$v=" + (r ? "_n(" + a + ")" : a) + ",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&(" + Wr(t, "$$a.concat([$$v])") + ")}else{$$i>-1&&(" + Wr(t, "$$a.slice(0,$$i).concat($$a.slice($$i+1))") + ")}}else{" + Wr(t, "$$c") + "}", null, !0)
						}(e, r, a);
						else if ("input" === i && "radio" === s) ! function (e, t, n) {
							var r = n && n.number,
								a = Or(e, "value") || "null";
							jr(e, "checked", "_q(" + t + "," + (a = r ? "_n(" + a + ")" : a) + ")"), Pr(e, "change", Wr(t, a), null, !0)
						}(e, r, a);
						else if ("input" === i || "textarea" === i) ! function (e, t, n) {
							var r = e.attrsMap.type,
								a = n || {},
								i = a.lazy,
								s = a.number,
								o = a.trim,
								l = !i && "range" !== r,
								d = i ? "change" : "range" === r ? Vr : "input",
								u = "$event.target.value";
							o && (u = "$event.target.value.trim()"), s && (u = "_n(" + u + ")");
							var c = Wr(t, u);
							l && (c = "if($event.target.composing)return;" + c), jr(e, "value", "(" + t + ")"), Pr(e, d, c, null, !0), (o || s) && Pr(e, "blur", "$forceUpdate()")
						}(e, r, a);
						else if (!F.isReservedTag(i)) return Fr(e, r, a), !1;
						return !0
					},
					text: function (e, t) {
						t.value && jr(e, "textContent", "_s(" + t.value + ")", t)
					},
					html: function (e, t) {
						t.value && jr(e, "innerHTML", "_s(" + t.value + ")", t)
					}
				},
				isPreTag: function (e) {
					return "pre" === e
				},
				isUnaryTag: yi,
				mustUseProp: An,
				canBeLeftOpenTag: gi,
				isReservedTag: Vn,
				getTagNamespace: Gn,
				staticKeys: ys.reduce(function (e, t) {
					return e.concat(t.staticKeys || [])
				}, []).join(",")
			},
			Ms = b(function (e) {
				return p("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap" + (e ? "," + e : ""))
			});
		var bs = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/,
			Ls = /\([^)]*?\);*$/,
			ks = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,
			ws = {
				esc: 27,
				tab: 9,
				enter: 13,
				space: 32,
				up: 38,
				left: 37,
				right: 39,
				down: 40,
				delete: [8, 46]
			},
			Ys = {
				esc: ["Esc", "Escape"],
				tab: "Tab",
				enter: "Enter",
				space: [" ", "Spacebar"],
				up: ["Up", "ArrowUp"],
				left: ["Left", "ArrowLeft"],
				right: ["Right", "ArrowRight"],
				down: ["Down", "ArrowDown"],
				delete: ["Backspace", "Delete", "Del"]
			},
			xs = function (e) {
				return "if(" + e + ")return null;"
			},
			Ts = {
				stop: "$event.stopPropagation();",
				prevent: "$event.preventDefault();",
				self: xs("$event.target !== $event.currentTarget"),
				ctrl: xs("!$event.ctrlKey"),
				shift: xs("!$event.shiftKey"),
				alt: xs("!$event.altKey"),
				meta: xs("!$event.metaKey"),
				left: xs("'button' in $event && $event.button !== 0"),
				middle: xs("'button' in $event && $event.button !== 1"),
				right: xs("'button' in $event && $event.button !== 2")
			};

		function Ds(e, t) {
			var n = t ? "nativeOn:" : "on:",
				r = "",
				a = "";
			for (var i in e) {
				var s = Ss(e[i]);
				e[i] && e[i].dynamic ? a += i + "," + s + "," : r += '"' + i + '":' + s + ","
			}
			return r = "{" + r.slice(0, -1) + "}", a ? n + "_d(" + r + ",[" + a.slice(0, -1) + "])" : n + r
		}

		function Ss(e) {
			if (!e) return "function(){}";
			if (Array.isArray(e)) return "[" + e.map(function (e) {
				return Ss(e)
			}).join(",") + "]";
			var t = ks.test(e.value),
				n = bs.test(e.value),
				r = ks.test(e.value.replace(Ls, ""));
			if (e.modifiers) {
				var a = "",
					i = "",
					s = [];
				for (var o in e.modifiers)
					if (Ts[o]) i += Ts[o], ws[o] && s.push(o);
					else if ("exact" === o) {
					var l = e.modifiers;
					i += xs(["ctrl", "shift", "alt", "meta"].filter(function (e) {
						return !l[e]
					}).map(function (e) {
						return "$event." + e + "Key"
					}).join("||"))
				} else s.push(o);
				return s.length && (a += "if(!$event.type.indexOf('key')&&" + s.map(js).join("&&") + ")return null;"), i && (a += i), "function($event){" + a + (t ? "return " + e.value + "($event)" : n ? "return (" + e.value + ")($event)" : r ? "return " + e.value : e.value) + "}"
			}
			return t || n ? e.value : "function($event){" + (r ? "return " + e.value : e.value) + "}"
		}

		function js(e) {
			var t = parseInt(e, 10);
			if (t) return "$event.keyCode!==" + t;
			var n = ws[e],
				r = Ys[e];
			return "_k($event.keyCode," + JSON.stringify(e) + "," + JSON.stringify(n) + ",$event.key," + JSON.stringify(r) + ")"
		}
		var Cs = {
				on: function (e, t) {
					e.wrapListeners = function (e) {
						return "_g(" + e + "," + t.value + ")"
					}
				},
				bind: function (e, t) {
					e.wrapData = function (n) {
						return "_b(" + n + ",'" + e.tag + "'," + t.value + "," + (t.modifiers && t.modifiers.prop ? "true" : "false") + (t.modifiers && t.modifiers.sync ? ",true" : "") + ")"
					}
				},
				cloak: C
			},
			Hs = function (e) {
				this.options = e, this.warn = e.warn || Dr, this.transforms = Sr(e.modules, "transformCode"), this.dataGenFns = Sr(e.modules, "genData"), this.directives = S(S({}, Cs), e.directives);
				var t = e.isReservedTag || H;
				this.maybeComponent = function (e) {
					return !!e.component || !t(e.tag)
				}, this.onceId = 0, this.staticRenderFns = [], this.pre = !1
			};

		function As(e, t) {
			var n = new Hs(t);
			return {
				render: "with(this){return " + (e ? Es(e, n) : '_c("div")') + "}",
				staticRenderFns: n.staticRenderFns
			}
		}

		function Es(e, t) {
			if (e.parent && (e.pre = e.pre || e.parent.pre), e.staticRoot && !e.staticProcessed) return Ps(e, t);
			if (e.once && !e.onceProcessed) return Os(e, t);
			if (e.for && !e.forProcessed) return Ns(e, t);
			if (e.if && !e.ifProcessed) return $s(e, t);
			if ("template" !== e.tag || e.slotTarget || t.pre) {
				if ("slot" === e.tag) return function (e, t) {
					var n = e.slotName || '"default"',
						r = Is(e, t),
						a = "_t(" + n + (r ? "," + r : ""),
						i = e.attrs || e.dynamicAttrs ? qs((e.attrs || []).concat(e.dynamicAttrs || []).map(function (e) {
							return {
								name: k(e.name),
								value: e.value,
								dynamic: e.dynamic
							}
						})) : null,
						s = e.attrsMap["v-bind"];
					return !i && !s || r || (a += ",null"), i && (a += "," + i), s && (a += (i ? "" : ",null") + "," + s), a + ")"
				}(e, t);
				var n;
				if (e.component) n = function (e, t, n) {
					var r = t.inlineTemplate ? null : Is(t, n, !0);
					return "_c(" + e + "," + Rs(t, n) + (r ? "," + r : "") + ")"
				}(e.component, e, t);
				else {
					var r;
					(!e.plain || e.pre && t.maybeComponent(e)) && (r = Rs(e, t));
					var a = e.inlineTemplate ? null : Is(e, t, !0);
					n = "_c('" + e.tag + "'" + (r ? "," + r : "") + (a ? "," + a : "") + ")"
				}
				for (var i = 0; i < t.transforms.length; i++) n = t.transforms[i](e, n);
				return n
			}
			return Is(e, t) || "void 0"
		}

		function Ps(e, t) {
			e.staticProcessed = !0;
			var n = t.pre;
			return e.pre && (t.pre = e.pre), t.staticRenderFns.push("with(this){return " + Es(e, t) + "}"), t.pre = n, "_m(" + (t.staticRenderFns.length - 1) + (e.staticInFor ? ",true" : "") + ")"
		}

		function Os(e, t) {
			if (e.onceProcessed = !0, e.if && !e.ifProcessed) return $s(e, t);
			if (e.staticInFor) {
				for (var n = "", r = e.parent; r;) {
					if (r.for) {
						n = r.key;
						break
					}
					r = r.parent
				}
				return n ? "_o(" + Es(e, t) + "," + t.onceId++ + "," + n + ")" : Es(e, t)
			}
			return Ps(e, t)
		}

		function $s(e, t, n, r) {
			return e.ifProcessed = !0,
				function e(t, n, r, a) {
					if (!t.length) return a || "_e()";
					var i = t.shift();
					return i.exp ? "(" + i.exp + ")?" + s(i.block) + ":" + e(t, n, r, a) : "" + s(i.block);

					function s(e) {
						return r ? r(e, n) : e.once ? Os(e, n) : Es(e, n)
					}
				}(e.ifConditions.slice(), t, n, r)
		}

		function Ns(e, t, n, r) {
			var a = e.for,
				i = e.alias,
				s = e.iterator1 ? "," + e.iterator1 : "",
				o = e.iterator2 ? "," + e.iterator2 : "";
			return e.forProcessed = !0, (r || "_l") + "((" + a + "),function(" + i + s + o + "){return " + (n || Es)(e, t) + "})"
		}

		function Rs(e, t) {
			var n = "{",
				r = function (e, t) {
					var n = e.directives;
					if (n) {
						var r, a, i, s, o = "directives:[",
							l = !1;
						for (r = 0, a = n.length; r < a; r++) {
							i = n[r], s = !0;
							var d = t.directives[i.name];
							d && (s = !!d(e, i, t.warn)), s && (l = !0, o += '{name:"' + i.name + '",rawName:"' + i.rawName + '"' + (i.value ? ",value:(" + i.value + "),expression:" + JSON.stringify(i.value) : "") + (i.arg ? ",arg:" + (i.isDynamicArg ? i.arg : '"' + i.arg + '"') : "") + (i.modifiers ? ",modifiers:" + JSON.stringify(i.modifiers) : "") + "},")
						}
						return l ? o.slice(0, -1) + "]" : void 0
					}
				}(e, t);
			r && (n += r + ","), e.key && (n += "key:" + e.key + ","), e.ref && (n += "ref:" + e.ref + ","), e.refInFor && (n += "refInFor:true,"), e.pre && (n += "pre:true,"), e.component && (n += 'tag:"' + e.tag + '",');
			for (var a = 0; a < t.dataGenFns.length; a++) n += t.dataGenFns[a](e);
			if (e.attrs && (n += "attrs:" + qs(e.attrs) + ","), e.props && (n += "domProps:" + qs(e.props) + ","), e.events && (n += Ds(e.events, !1) + ","), e.nativeEvents && (n += Ds(e.nativeEvents, !0) + ","), e.slotTarget && !e.slotScope && (n += "slot:" + e.slotTarget + ","), e.scopedSlots && (n += function (e, t, n) {
					var r = e.for || Object.keys(t).some(function (e) {
							var n = t[e];
							return n.slotTargetDynamic || n.if || n.for || Fs(n)
						}),
						a = !!e.if;
					if (!r)
						for (var i = e.parent; i;) {
							if (i.slotScope && i.slotScope !== ss || i.for) {
								r = !0;
								break
							}
							i.if && (a = !0), i = i.parent
						}
					var s = Object.keys(t).map(function (e) {
						return Ws(t[e], n)
					}).join(",");
					return "scopedSlots:_u([" + s + "]" + (r ? ",null,true" : "") + (!r && a ? ",null,false," + function (e) {
						for (var t = 5381, n = e.length; n;) t = 33 * t ^ e.charCodeAt(--n);
						return t >>> 0
					}(s) : "") + ")"
				}(e, e.scopedSlots, t) + ","), e.model && (n += "model:{value:" + e.model.value + ",callback:" + e.model.callback + ",expression:" + e.model.expression + "},"), e.inlineTemplate) {
				var i = function (e, t) {
					var n = e.children[0];
					if (n && 1 === n.type) {
						var r = As(n, t.options);
						return "inlineTemplate:{render:function(){" + r.render + "},staticRenderFns:[" + r.staticRenderFns.map(function (e) {
							return "function(){" + e + "}"
						}).join(",") + "]}"
					}
				}(e, t);
				i && (n += i + ",")
			}
			return n = n.replace(/,$/, "") + "}", e.dynamicAttrs && (n = "_b(" + n + ',"' + e.tag + '",' + qs(e.dynamicAttrs) + ")"), e.wrapData && (n = e.wrapData(n)), e.wrapListeners && (n = e.wrapListeners(n)), n
		}

		function Fs(e) {
			return 1 === e.type && ("slot" === e.tag || e.children.some(Fs))
		}

		function Ws(e, t) {
			var n = e.attrsMap["slot-scope"];
			if (e.if && !e.ifProcessed && !n) return $s(e, t, Ws, "null");
			if (e.for && !e.forProcessed) return Ns(e, t, Ws);
			var r = e.slotScope === ss ? "" : String(e.slotScope),
				a = "function(" + r + "){return " + ("template" === e.tag ? e.if && n ? "(" + e.if+")?" + (Is(e, t) || "undefined") + ":undefined" : Is(e, t) || "undefined" : Es(e, t)) + "}",
				i = r ? "" : ",proxy:true";
			return "{key:" + (e.slotTarget || '"default"') + ",fn:" + a + i + "}"
		}

		function Is(e, t, n, r, a) {
			var i = e.children;
			if (i.length) {
				var s = i[0];
				if (1 === i.length && s.for && "template" !== s.tag && "slot" !== s.tag) {
					var o = n ? t.maybeComponent(s) ? ",1" : ",0" : "";
					return "" + (r || Es)(s, t) + o
				}
				var l = n ? function (e, t) {
						for (var n = 0, r = 0; r < e.length; r++) {
							var a = e[r];
							if (1 === a.type) {
								if (zs(a) || a.ifConditions && a.ifConditions.some(function (e) {
										return zs(e.block)
									})) {
									n = 2;
									break
								}(t(a) || a.ifConditions && a.ifConditions.some(function (e) {
									return t(e.block)
								})) && (n = 1)
							}
						}
						return n
					}(i, t.maybeComponent) : 0,
					d = a || Us;
				return "[" + i.map(function (e) {
					return d(e, t)
				}).join(",") + "]" + (l ? "," + l : "")
			}
		}

		function zs(e) {
			return void 0 !== e.for || "template" === e.tag || "slot" === e.tag
		}

		function Us(e, t) {
			return 1 === e.type ? Es(e, t) : 3 === e.type && e.isComment ? (r = e, "_e(" + JSON.stringify(r.text) + ")") : "_v(" + (2 === (n = e).type ? n.expression : Js(JSON.stringify(n.text))) + ")";
			var n, r
		}

		function qs(e) {
			for (var t = "", n = "", r = 0; r < e.length; r++) {
				var a = e[r],
					i = Js(a.value);
				a.dynamic ? n += a.name + "," + i + "," : t += '"' + a.name + '":' + i + ","
			}
			return t = "{" + t.slice(0, -1) + "}", n ? "_d(" + t + ",[" + n.slice(0, -1) + "])" : t
		}

		function Js(e) {
			return e.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029")
		}

		function Bs(e, t) {
			try {
				return new Function(e)
			} catch (n) {
				return t.push({
					err: n,
					code: e
				}), C
			}
		}
		new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") + "\\b");
		var Vs, Gs, Ks = (Vs = function (e, t) {
				var n = function (e, t) {
					Ri = t.warn || Dr, Ui = t.isPreTag || H, qi = t.mustUseProp || H, Ji = t.getTagNamespace || H, t.isReservedTag, Wi = Sr(t.modules, "transformNode"), Ii = Sr(t.modules, "preTransformNode"), zi = Sr(t.modules, "postTransformNode"), Fi = t.delimiters;
					var n, r, a = [],
						i = !1 !== t.preserveWhitespace,
						s = t.whitespace,
						o = !1,
						l = !1;

					function d(e) {
						if (u(e), o || e.processed || (e = ls(e, t)), a.length || e === n || n.if && (e.elseif || e.else) && us(n, {
								exp: e.elseif,
								block: e
							}), r && !e.forbidden)
							if (e.elseif || e.else) s = e, (d = function (e) {
								for (var t = e.length; t--;) {
									if (1 === e[t].type) return e[t];
									e.pop()
								}
							}(r.children)) && d.if && us(d, {
								exp: s.elseif,
								block: s
							});
							else {
								if (e.slotScope) {
									var i = e.slotTarget || '"default"';
									(r.scopedSlots || (r.scopedSlots = {}))[i] = e
								}
								r.children.push(e), e.parent = r
							}
						var s, d;
						e.children = e.children.filter(function (e) {
							return !e.slotScope
						}), u(e), e.pre && (o = !1), Ui(e.tag) && (l = !1);
						for (var c = 0; c < zi.length; c++) zi[c](e, t)
					}

					function u(e) {
						if (!l)
							for (var t;
								(t = e.children[e.children.length - 1]) && 3 === t.type && " " === t.text;) e.children.pop()
					}
					return function (e, t) {
						for (var n, r, a = [], i = t.expectHTML, s = t.isUnaryTag || H, o = t.canBeLeftOpenTag || H, l = 0; e;) {
							if (n = e, r && Ci(r)) {
								var d = 0,
									u = r.toLowerCase(),
									c = Hi[u] || (Hi[u] = new RegExp("([\\s\\S]*?)(</" + u + "[^>]*>)", "i")),
									f = e.replace(c, function (e, n, r) {
										return d = r.length, Ci(u) || "noscript" === u || (n = n.replace(/<!\--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")), $i(u, n) && (n = n.slice(1)), t.chars && t.chars(n), ""
									});
								l += e.length - f.length, e = f, x(u, l - d, l)
							} else {
								var m = e.indexOf("<");
								if (0 === m) {
									if (Si.test(e)) {
										var h = e.indexOf("--\x3e");
										if (h >= 0) {
											t.shouldKeepComment && t.comment(e.substring(4, h), l, l + h + 3), k(h + 3);
											continue
										}
									}
									if (ji.test(e)) {
										var p = e.indexOf("]>");
										if (p >= 0) {
											k(p + 2);
											continue
										}
									}
									var _ = e.match(Di);
									if (_) {
										k(_[0].length);
										continue
									}
									var v = e.match(Ti);
									if (v) {
										var y = l;
										k(v[0].length), x(v[1], y, l);
										continue
									}
									var g = w();
									if (g) {
										Y(g), $i(g.tagName, e) && k(1);
										continue
									}
								}
								var M = void 0,
									b = void 0,
									L = void 0;
								if (m >= 0) {
									for (b = e.slice(m); !(Ti.test(b) || Yi.test(b) || Si.test(b) || ji.test(b) || (L = b.indexOf("<", 1)) < 0);) m += L, b = e.slice(m);
									M = e.substring(0, m)
								}
								m < 0 && (M = e), M && k(M.length), t.chars && M && t.chars(M, l - M.length, l)
							}
							if (e === n) {
								t.chars && t.chars(e);
								break
							}
						}

						function k(t) {
							l += t, e = e.substring(t)
						}

						function w() {
							var t = e.match(Yi);
							if (t) {
								var n, r, a = {
									tagName: t[1],
									attrs: [],
									start: l
								};
								for (k(t[0].length); !(n = e.match(xi)) && (r = e.match(Li) || e.match(bi));) r.start = l, k(r[0].length), r.end = l, a.attrs.push(r);
								if (n) return a.unarySlash = n[1], k(n[0].length), a.end = l, a
							}
						}

						function Y(e) {
							var n = e.tagName,
								l = e.unarySlash;
							i && ("p" === r && Mi(n) && x(r), o(n) && r === n && x(n));
							for (var d = s(n) || !!l, u = e.attrs.length, c = new Array(u), f = 0; f < u; f++) {
								var m = e.attrs[f],
									h = m[3] || m[4] || m[5] || "",
									p = "a" === n && "href" === m[1] ? t.shouldDecodeNewlinesForHref : t.shouldDecodeNewlines;
								c[f] = {
									name: m[1],
									value: Ni(h, p)
								}
							}
							d || (a.push({
								tag: n,
								lowerCasedTag: n.toLowerCase(),
								attrs: c,
								start: e.start,
								end: e.end
							}), r = n), t.start && t.start(n, c, d, e.start, e.end)
						}

						function x(e, n, i) {
							var s, o;
							if (null == n && (n = l), null == i && (i = l), e)
								for (o = e.toLowerCase(), s = a.length - 1; s >= 0 && a[s].lowerCasedTag !== o; s--);
							else s = 0;
							if (s >= 0) {
								for (var d = a.length - 1; d >= s; d--) t.end && t.end(a[d].tag, n, i);
								a.length = s, r = s && a[s - 1].tag
							} else "br" === o ? t.start && t.start(e, [], !0, n, i) : "p" === o && (t.start && t.start(e, [], !1, n, i), t.end && t.end(e, n, i))
						}
						x()
					}(e, {
						warn: Ri,
						expectHTML: t.expectHTML,
						isUnaryTag: t.isUnaryTag,
						canBeLeftOpenTag: t.canBeLeftOpenTag,
						shouldDecodeNewlines: t.shouldDecodeNewlines,
						shouldDecodeNewlinesForHref: t.shouldDecodeNewlinesForHref,
						shouldKeepComment: t.comments,
						outputSourceRange: t.outputSourceRange,
						start: function (e, i, s, u, c) {
							var f = r && r.ns || Ji(e);
							K && "svg" === f && (i = function (e) {
								for (var t = [], n = 0; n < e.length; n++) {
									var r = e[n];
									ms.test(r.name) || (r.name = r.name.replace(hs, ""), t.push(r))
								}
								return t
							}(i));
							var m, h = os(e, i, r);
							f && (h.ns = f), "style" !== (m = h).tag && ("script" !== m.tag || m.attrsMap.type && "text/javascript" !== m.attrsMap.type) || ae() || (h.forbidden = !0);
							for (var p = 0; p < Ii.length; p++) h = Ii[p](h, t) || h;
							o || (function (e) {
								null != $r(e, "v-pre") && (e.pre = !0)
							}(h), h.pre && (o = !0)), Ui(h.tag) && (l = !0), o ? function (e) {
								var t = e.attrsList,
									n = t.length;
								if (n)
									for (var r = e.attrs = new Array(n), a = 0; a < n; a++) r[a] = {
										name: t[a].name,
										value: JSON.stringify(t[a].value)
									}, null != t[a].start && (r[a].start = t[a].start, r[a].end = t[a].end);
								else e.pre || (e.plain = !0)
							}(h) : h.processed || (ds(h), function (e) {
								var t = $r(e, "v-if");
								if (t) e.if = t, us(e, {
									exp: t,
									block: e
								});
								else {
									null != $r(e, "v-else") && (e.else = !0);
									var n = $r(e, "v-else-if");
									n && (e.elseif = n)
								}
							}(h), function (e) {
								null != $r(e, "v-once") && (e.once = !0)
							}(h)), n || (n = h), s ? d(h) : (r = h, a.push(h))
						},
						end: function (e, t, n) {
							var i = a[a.length - 1];
							a.length -= 1, r = a[a.length - 1], d(i)
						},
						chars: function (e, t, n) {
							if (r && (!K || "textarea" !== r.tag || r.attrsMap.placeholder !== e)) {
								var a, d, u, c = r.children;
								(e = l || e.trim() ? "script" === (a = r).tag || "style" === a.tag ? e : is(e) : c.length ? s ? "condense" === s && rs.test(e) ? "" : " " : i ? " " : "" : "") && (l || "condense" !== s || (e = e.replace(as, " ")), !o && " " !== e && (d = function (e, t) {
									var n = Fi ? pi(Fi) : mi;
									if (n.test(e)) {
										for (var r, a, i, s = [], o = [], l = n.lastIndex = 0; r = n.exec(e);) {
											(a = r.index) > l && (o.push(i = e.slice(l, a)), s.push(JSON.stringify(i)));
											var d = xr(r[1].trim());
											s.push("_s(" + d + ")"), o.push({
												"@binding": d
											}), l = a + r[0].length
										}
										return l < e.length && (o.push(i = e.slice(l)), s.push(JSON.stringify(i))), {
											expression: s.join("+"),
											tokens: o
										}
									}
								}(e)) ? u = {
									type: 2,
									expression: d.expression,
									tokens: d.tokens,
									text: e
								} : " " === e && c.length && " " === c[c.length - 1].text || (u = {
									type: 3,
									text: e
								}), u && c.push(u))
							}
						},
						comment: function (e, t, n) {
							if (r) {
								var a = {
									type: 3,
									text: e,
									isComment: !0
								};
								r.children.push(a)
							}
						}
					}), n
				}(e.trim(), t);
				!1 !== t.optimize && function (e, t) {
					e && (_s = Ms(t.staticKeys || ""), vs = t.isReservedTag || H, function e(t) {
						if (t.static = function (e) {
								return 2 !== e.type && (3 === e.type || !(!e.pre && (e.hasBindings || e.if || e.for || _(e.tag) || !vs(e.tag) || function (e) {
									for (; e.parent;) {
										if ("template" !== (e = e.parent).tag) return !1;
										if (e.for) return !0
									}
									return !1
								}(e) || !Object.keys(e).every(_s))))
							}(t), 1 === t.type) {
							if (!vs(t.tag) && "slot" !== t.tag && null == t.attrsMap["inline-template"]) return;
							for (var n = 0, r = t.children.length; n < r; n++) {
								var a = t.children[n];
								e(a), a.static || (t.static = !1)
							}
							if (t.ifConditions)
								for (var i = 1, s = t.ifConditions.length; i < s; i++) {
									var o = t.ifConditions[i].block;
									e(o), o.static || (t.static = !1)
								}
						}
					}(e), function e(t, n) {
						if (1 === t.type) {
							if ((t.static || t.once) && (t.staticInFor = n), t.static && t.children.length && (1 !== t.children.length || 3 !== t.children[0].type)) return void(t.staticRoot = !0);
							if (t.staticRoot = !1, t.children)
								for (var r = 0, a = t.children.length; r < a; r++) e(t.children[r], n || !!t.for);
							if (t.ifConditions)
								for (var i = 1, s = t.ifConditions.length; i < s; i++) e(t.ifConditions[i].block, n)
						}
					}(e, !1))
				}(n, t);
				var r = As(n, t);
				return {
					ast: n,
					render: r.render,
					staticRenderFns: r.staticRenderFns
				}
			}, function (e) {
				function t(t, n) {
					var r = Object.create(e),
						a = [],
						i = [];
					if (n)
						for (var s in n.modules && (r.modules = (e.modules || []).concat(n.modules)), n.directives && (r.directives = S(Object.create(e.directives || null), n.directives)), n) "modules" !== s && "directives" !== s && (r[s] = n[s]);
					r.warn = function (e, t, n) {
						(n ? i : a).push(e)
					};
					var o = Vs(t.trim(), r);
					return o.errors = a, o.tips = i, o
				}
				return {
					compile: t,
					compileToFunctions: function (e) {
						var t = Object.create(null);
						return function (n, r, a) {
							(r = S({}, r)).warn, delete r.warn;
							var i = r.delimiters ? String(r.delimiters) + n : n;
							if (t[i]) return t[i];
							var s = e(n, r),
								o = {},
								l = [];
							return o.render = Bs(s.render, l), o.staticRenderFns = s.staticRenderFns.map(function (e) {
								return Bs(e, l)
							}), t[i] = o
						}
					}(t)
				}
			})(gs),
			Xs = (Ks.compile, Ks.compileToFunctions);

		function Qs(e) {
			return (Gs = Gs || document.createElement("div")).innerHTML = e ? '<a href="\n"/>' : '<div a="\n"/>', Gs.innerHTML.indexOf("&#10;") > 0
		}
		var Zs = !!J && Qs(!1),
			eo = !!J && Qs(!0),
			to = b(function (e) {
				var t = Qn(e);
				return t && t.innerHTML
			}),
			no = wn.prototype.$mount;
		wn.prototype.$mount = function (e, t) {
			if ((e = e && Qn(e)) === document.body || e === document.documentElement) return this;
			var n = this.$options;
			if (!n.render) {
				var r = n.template;
				if (r)
					if ("string" == typeof r) "#" === r.charAt(0) && (r = to(r));
					else {
						if (!r.nodeType) return this;
						r = r.innerHTML
					}
				else e && (r = function (e) {
					if (e.outerHTML) return e.outerHTML;
					var t = document.createElement("div");
					return t.appendChild(e.cloneNode(!0)), t.innerHTML
				}(e));
				if (r) {
					var a = Xs(r, {
							outputSourceRange: !1,
							shouldDecodeNewlines: Zs,
							shouldDecodeNewlinesForHref: eo,
							delimiters: n.delimiters,
							comments: n.comments
						}, this),
						i = a.render,
						s = a.staticRenderFns;
					n.render = i, n.staticRenderFns = s
				}
			}
			return no.call(this, e, t)
		}, wn.compile = Xs, e.exports = wn
	}).call(t, n(7), n(171).setImmediate)
}, function (e, t, n) {
	(function (e) {
		var r = void 0 !== e && e || "undefined" != typeof self && self || window,
			a = Function.prototype.apply;

		function i(e, t) {
			this._id = e, this._clearFn = t
		}
		t.setTimeout = function () {
			return new i(a.call(setTimeout, r, arguments), clearTimeout)
		}, t.setInterval = function () {
			return new i(a.call(setInterval, r, arguments), clearInterval)
		}, t.clearTimeout = t.clearInterval = function (e) {
			e && e.close()
		}, i.prototype.unref = i.prototype.ref = function () {}, i.prototype.close = function () {
			this._clearFn.call(r, this._id)
		}, t.enroll = function (e, t) {
			clearTimeout(e._idleTimeoutId), e._idleTimeout = t
		}, t.unenroll = function (e) {
			clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
		}, t._unrefActive = t.active = function (e) {
			clearTimeout(e._idleTimeoutId);
			var t = e._idleTimeout;
			t >= 0 && (e._idleTimeoutId = setTimeout(function () {
				e._onTimeout && e._onTimeout()
			}, t))
		}, n(172), t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate, t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate
	}).call(t, n(7))
}, function (e, t, n) {
	(function (e, t) {
		! function (e, n) {
			"use strict";
			if (!e.setImmediate) {
				var r, a, i, s, o, l = 1,
					d = {},
					u = !1,
					c = e.document,
					f = Object.getPrototypeOf && Object.getPrototypeOf(e);
				f = f && f.setTimeout ? f : e, "[object process]" === {}.toString.call(e.process) ? r = function (e) {
					t.nextTick(function () {
						h(e)
					})
				} : ! function () {
					if (e.postMessage && !e.importScripts) {
						var t = !0,
							n = e.onmessage;
						return e.onmessage = function () {
							t = !1
						}, e.postMessage("", "*"), e.onmessage = n, t
					}
				}() ? e.MessageChannel ? ((i = new MessageChannel).port1.onmessage = function (e) {
					h(e.data)
				}, r = function (e) {
					i.port2.postMessage(e)
				}) : c && "onreadystatechange" in c.createElement("script") ? (a = c.documentElement, r = function (e) {
					var t = c.createElement("script");
					t.onreadystatechange = function () {
						h(e), t.onreadystatechange = null, a.removeChild(t), t = null
					}, a.appendChild(t)
				}) : r = function (e) {
					setTimeout(h, 0, e)
				} : (s = "setImmediate$" + Math.random() + "$", o = function (t) {
					t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(s) && h(+t.data.slice(s.length))
				}, e.addEventListener ? e.addEventListener("message", o, !1) : e.attachEvent("onmessage", o), r = function (t) {
					e.postMessage(s + t, "*")
				}), f.setImmediate = function (e) {
					"function" != typeof e && (e = new Function("" + e));
					for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
					var a = {
						callback: e,
						args: t
					};
					return d[l] = a, r(l), l++
				}, f.clearImmediate = m
			}

			function m(e) {
				delete d[e]
			}

			function h(e) {
				if (u) setTimeout(h, 0, e);
				else {
					var t = d[e];
					if (t) {
						u = !0;
						try {
							! function (e) {
								var t = e.callback,
									r = e.args;
								switch (r.length) {
									case 0:
										t();
										break;
									case 1:
										t(r[0]);
										break;
									case 2:
										t(r[0], r[1]);
										break;
									case 3:
										t(r[0], r[1], r[2]);
										break;
									default:
										t.apply(n, r)
								}
							}(t)
						} finally {
							m(e), u = !1
						}
					}
				}
			}
		}("undefined" == typeof self ? void 0 === e ? this : e : self)
	}).call(t, n(7), n(9))
}, function (e, t, n) {
	var r, a, i, s;
	s = function (e) {
		var t = {
			element: "body",
			position: null,
			type: "info",
			allow_dismiss: !0,
			newest_on_top: !1,
			showProgressbar: !1,
			placement: {
				from: "top",
				align: "right"
			},
			offset: 20,
			spacing: 10,
			z_index: 1031,
			delay: 5e3,
			timer: 1e3,
			url_target: "_blank",
			mouse_over: null,
			animate: {
				enter: "animated fadeInDown",
				exit: "animated fadeOutUp"
			},
			onShow: null,
			onShown: null,
			onClose: null,
			onClosed: null,
			icon_type: "class",
			template: '<div data-notify="container" class="col-xs-11 col-sm-4 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">&times;</button><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'
		};

		function n(n, r, a) {
			r = {
				content: {
					message: "object" == typeof r ? r.message : r,
					title: r.title ? r.title : "",
					icon: r.icon ? r.icon : "",
					url: r.url ? r.url : "#",
					target: r.target ? r.target : "-"
				}
			};
			a = e.extend(!0, {}, r, a), this.settings = e.extend(!0, {}, t, a), this._defaults = t, "-" == this.settings.content.target && (this.settings.content.target = this.settings.url_target), this.animations = {
				start: "webkitAnimationStart oanimationstart MSAnimationStart animationstart",
				end: "webkitAnimationEnd oanimationend MSAnimationEnd animationend"
			}, "number" == typeof this.settings.offset && (this.settings.offset = {
				x: this.settings.offset,
				y: this.settings.offset
			}), this.init()
		}
		String.format = function () {
			for (var e = arguments[0], t = 1; t < arguments.length; t++) e = e.replace(RegExp("\\{" + (t - 1) + "\\}", "gm"), arguments[t]);
			return e
		}, e.extend(n.prototype, {
			init: function () {
				var e = this;
				this.buildNotify(), this.settings.content.icon && this.setIcon(), "#" != this.settings.content.url && this.styleURL(), this.styleDismiss(), this.placement(), this.bind(), this.notify = {
					$ele: this.$ele,
					update: function (t, n) {
						var r = {};
						for (var t in "string" == typeof t ? r[t] = n : r = t, r) switch (t) {
							case "type":
								this.$ele.removeClass("alert-" + e.settings.type), this.$ele.find('[data-notify="progressbar"] > .progress-bar').removeClass("progress-bar-" + e.settings.type), e.settings.type = r[t], this.$ele.addClass("alert-" + r[t]).find('[data-notify="progressbar"] > .progress-bar').addClass("progress-bar-" + r[t]);
								break;
							case "icon":
								var a = this.$ele.find('[data-notify="icon"]');
								"class" == e.settings.icon_type.toLowerCase() ? a.removeClass(e.settings.content.icon).addClass(r[t]) : (a.is("img") || a.find("img"), a.attr("src", r[t]));
								break;
							case "progress":
								var i = e.settings.delay - e.settings.delay * (r[t] / 100);
								this.$ele.data("notify-delay", i), this.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow", r[t]).css("width", r[t] + "%");
								break;
							case "url":
								this.$ele.find('[data-notify="url"]').attr("href", r[t]);
								break;
							case "target":
								this.$ele.find('[data-notify="url"]').attr("target", r[t]);
								break;
							default:
								this.$ele.find('[data-notify="' + t + '"]').html(r[t])
						}
						var s = this.$ele.outerHeight() + parseInt(e.settings.spacing) + parseInt(e.settings.offset.y);
						e.reposition(s)
					},
					close: function () {
						e.close()
					}
				}
			},
			buildNotify: function () {
				var t = this.settings.content;
				this.$ele = e(String.format(this.settings.template, this.settings.type, t.title, t.message, t.url, t.target)), this.$ele.attr("data-notify-position", this.settings.placement.from + "-" + this.settings.placement.align), this.settings.allow_dismiss || this.$ele.find('[data-notify="dismiss"]').css("display", "none"), (this.settings.delay <= 0 && !this.settings.showProgressbar || !this.settings.showProgressbar) && this.$ele.find('[data-notify="progressbar"]').remove()
			},
			setIcon: function () {
				"class" == this.settings.icon_type.toLowerCase() ? this.$ele.find('[data-notify="icon"]').addClass(this.settings.content.icon) : this.$ele.find('[data-notify="icon"]').is("img") ? this.$ele.find('[data-notify="icon"]').attr("src", this.settings.content.icon) : this.$ele.find('[data-notify="icon"]').append('<img src="' + this.settings.content.icon + '" alt="Notify Icon" />')
			},
			styleDismiss: function () {
				this.$ele.find('[data-notify="dismiss"]').css({
					position: "absolute",
					right: "10px",
					top: "5px",
					zIndex: this.settings.z_index + 2
				})
			},
			styleURL: function () {
				this.$ele.find('[data-notify="url"]').css({
					backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)",
					height: "100%",
					left: "0px",
					position: "absolute",
					top: "0px",
					width: "100%",
					zIndex: this.settings.z_index + 1
				})
			},
			placement: function () {
				var t = this,
					n = this.settings.offset.y,
					r = {
						display: "inline-block",
						margin: "0px auto",
						position: this.settings.position ? this.settings.position : "body" === this.settings.element ? "fixed" : "absolute",
						transition: "all .5s ease-in-out",
						zIndex: this.settings.z_index
					},
					a = !1,
					i = this.settings;
				switch (e('[data-notify-position="' + this.settings.placement.from + "-" + this.settings.placement.align + '"]:not([data-closing="true"])').each(function () {
					return n = Math.max(n, parseInt(e(this).css(i.placement.from)) + parseInt(e(this).outerHeight()) + parseInt(i.spacing))
				}), 1 == this.settings.newest_on_top && (n = this.settings.offset.y), r[this.settings.placement.from] = n + "px", this.settings.placement.align) {
					case "left":
					case "right":
						r[this.settings.placement.align] = this.settings.offset.x + "px";
						break;
					case "center":
						r.left = 0, r.right = 0
				}
				this.$ele.css(r).addClass(this.settings.animate.enter), e.each(Array("webkit-", "moz-", "o-", "ms-", ""), function (e, n) {
					t.$ele[0].style[n + "AnimationIterationCount"] = 1
				}), e(this.settings.element).append(this.$ele), 1 == this.settings.newest_on_top && (n = parseInt(n) + parseInt(this.settings.spacing) + this.$ele.outerHeight(), this.reposition(n)), e.isFunction(t.settings.onShow) && t.settings.onShow.call(this.$ele), this.$ele.one(this.animations.start, function (e) {
					a = !0
				}).one(this.animations.end, function (n) {
					e.isFunction(t.settings.onShown) && t.settings.onShown.call(this)
				}), setTimeout(function () {
					a || e.isFunction(t.settings.onShown) && t.settings.onShown.call(this)
				}, 600)
			},
			bind: function () {
				var t = this;
				if (this.$ele.find('[data-notify="dismiss"]').on("click", function () {
						t.close()
					}), this.$ele.mouseover(function (t) {
						e(this).data("data-hover", "true")
					}).mouseout(function (t) {
						e(this).data("data-hover", "false")
					}), this.$ele.data("data-hover", "false"), this.settings.delay > 0) {
					t.$ele.data("notify-delay", t.settings.delay);
					var n = setInterval(function () {
						var e = parseInt(t.$ele.data("notify-delay")) - t.settings.timer;
						if ("false" === t.$ele.data("data-hover") && "pause" == t.settings.mouse_over || "pause" != t.settings.mouse_over) {
							var r = (t.settings.delay - e) / t.settings.delay * 100;
							t.$ele.data("notify-delay", e), t.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow", r).css("width", r + "%")
						}
						e <= -t.settings.timer && (clearInterval(n), t.close())
					}, t.settings.timer)
				}
			},
			close: function () {
				var t = this,
					n = parseInt(this.$ele.css(this.settings.placement.from)),
					r = !1;
				this.$ele.data("closing", "true").addClass(this.settings.animate.exit), t.reposition(n), e.isFunction(t.settings.onClose) && t.settings.onClose.call(this.$ele), this.$ele.one(this.animations.start, function (e) {
					r = !0
				}).one(this.animations.end, function (n) {
					e(this).remove(), e.isFunction(t.settings.onClosed) && t.settings.onClosed.call(this)
				}), setTimeout(function () {
					r || (t.$ele.remove(), t.settings.onClosed && t.settings.onClosed(t.$ele))
				}, 600)
			},
			reposition: function (t) {
				var n = this,
					r = '[data-notify-position="' + this.settings.placement.from + "-" + this.settings.placement.align + '"]:not([data-closing="true"])',
					a = this.$ele.nextAll(r);
				1 == this.settings.newest_on_top && (a = this.$ele.prevAll(r)), a.each(function () {
					e(this).css(n.settings.placement.from, t), t = parseInt(t) + parseInt(n.settings.spacing) + e(this).outerHeight()
				})
			}
		}), e.notify = function (e, t) {
			return new n(this, e, t).notify
		}, e.notifyDefaults = function (n) {
			return t = e.extend(!0, {}, t, n)
		}, e.notifyClose = function (t) {
			void 0 === t || "all" == t ? e("[data-notify]").find('[data-notify="dismiss"]').trigger("click") : e('[data-notify-position="' + t + '"]').find('[data-notify="dismiss"]').trigger("click")
		}
	}, a = [n(5)], void 0 === (i = "function" == typeof (r = s) ? r.apply(t, a) : r) || (e.exports = i)
}, function (e, t, n) {
	var r, a, i, s;
	s = function (e) {
		"use strict";
		var t = /\r?\n/g,
			n = {};
		n.fileapi = void 0 !== e('<input type="file">').get(0).files, n.formdata = void 0 !== window.FormData;
		var r = !!e.fn.prop;

		function a(t) {
			var n = t.data;
			t.isDefaultPrevented() || (t.preventDefault(), e(t.target).closest("form").ajaxSubmit(n))
		}

		function i(t) {
			var n = t.target,
				r = e(n);
			if (!r.is("[type=submit],[type=image]")) {
				var a = r.closest("[type=submit]");
				if (0 === a.length) return;
				n = a[0]
			}
			var i, s = n.form;
			"image" === (s.clk = n).type && (void 0 !== t.offsetX ? (s.clk_x = t.offsetX, s.clk_y = t.offsetY) : "function" == typeof e.fn.offset ? (i = r.offset(), s.clk_x = t.pageX - i.left, s.clk_y = t.pageY - i.top) : (s.clk_x = t.pageX - n.offsetLeft, s.clk_y = t.pageY - n.offsetTop)), setTimeout(function () {
				s.clk = s.clk_x = s.clk_y = null
			}, 100)
		}

		function s() {
			var t;
			e.fn.ajaxSubmit.debug && (t = "[jquery.form] " + Array.prototype.join.call(arguments, ""), window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t))
		}
		e.fn.attr2 = function () {
			if (!r) return this.attr.apply(this, arguments);
			var e = this.prop.apply(this, arguments);
			return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments)
		}, e.fn.ajaxSubmit = function (t, a, i, o) {
			if (!this.length) return s("ajaxSubmit: skipping submit process - no element selected"), this;
			var l, d, u, c, f = this;
			"function" == typeof t ? t = {
				success: t
			} : "string" == typeof t || !1 === t && 0 < arguments.length ? (t = {
				url: t,
				data: a,
				dataType: i
			}, "function" == typeof o && (t.success = o)) : void 0 === t && (t = {}), l = t.method || t.type || this.attr2("method"), u = (u = (u = "string" == typeof (d = t.url || this.attr2("action")) ? e.trim(d) : "") || window.location.href || "") && (u.match(/^([^#]+)/) || [])[1], c = /(MSIE|Trident)/.test(navigator.userAgent || "") && /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank", t = e.extend(!0, {
				url: u,
				success: e.ajaxSettings.success,
				type: l || e.ajaxSettings.type,
				iframeSrc: c
			}, t);
			var m = {};
			if (this.trigger("form-pre-serialize", [this, t, m]), m.veto) return s("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
			if (t.beforeSerialize && !1 === t.beforeSerialize(this, t)) return s("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
			var h = t.traditional;
			void 0 === h && (h = e.ajaxSettings.traditional);
			var p, _, v = [],
				y = this.formToArray(t.semantic, v, t.filtering);
			if (t.data && (_ = e.isFunction(t.data) ? t.data(y) : t.data, t.extraData = _, p = e.param(_, h)), t.beforeSubmit && !1 === t.beforeSubmit(y, this, t)) return s("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
			if (this.trigger("form-submit-validate", [y, this, t, m]), m.veto) return s("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
			var g = e.param(y, h);
			p && (g = g ? g + "&" + p : p), "GET" === t.type.toUpperCase() ? (t.url += (0 <= t.url.indexOf("?") ? "&" : "?") + g, t.data = null) : t.data = g;
			var M, b, L, k = [];
			t.resetForm && k.push(function () {
				f.resetForm()
			}), t.clearForm && k.push(function () {
				f.clearForm(t.includeHidden)
			}), !t.dataType && t.target ? (M = t.success || function () {}, k.push(function (n, r, a) {
				var i = arguments,
					s = t.replaceTarget ? "replaceWith" : "html";
				e(t.target)[s](n).each(function () {
					M.apply(this, i)
				})
			})) : t.success && (e.isArray(t.success) ? e.merge(k, t.success) : k.push(t.success)), t.success = function (e, n, r) {
				for (var a = t.context || this, i = 0, s = k.length; i < s; i++) k[i].apply(a, [e, n, r || f, f])
			}, t.error && (b = t.error, t.error = function (e, n, r) {
				var a = t.context || this;
				b.apply(a, [e, n, r, f])
			}), t.complete && (L = t.complete, t.complete = function (e, n) {
				var r = t.context || this;
				L.apply(r, [e, n, f])
			});
			var w = 0 < e("input[type=file]:enabled", this).filter(function () {
					return "" !== e(this).val()
				}).length,
				Y = "multipart/form-data",
				x = f.attr("enctype") === Y || f.attr("encoding") === Y,
				T = n.fileapi && n.formdata;
			s("fileAPI :" + T);
			var D, S = (w || x) && !T;
			!1 !== t.iframe && (t.iframe || S) ? t.closeKeepAlive ? e.get(t.closeKeepAlive, function () {
				D = C(y)
			}) : D = C(y) : D = (w || x) && T ? function (n) {
				for (var r = new FormData, a = 0; a < n.length; a++) r.append(n[a].name, n[a].value);
				if (t.extraData) {
					var i = function (n) {
						var r, a, i = e.param(n, t.traditional).split("&"),
							s = i.length,
							o = [];
						for (r = 0; r < s; r++) i[r] = i[r].replace(/\+/g, " "), a = i[r].split("="), o.push([decodeURIComponent(a[0]), decodeURIComponent(a[1])]);
						return o
					}(t.extraData);
					for (a = 0; a < i.length; a++) i[a] && r.append(i[a][0], i[a][1])
				}
				t.data = null;
				var s = e.extend(!0, {}, e.ajaxSettings, t, {
					contentType: !1,
					processData: !1,
					cache: !1,
					type: l || "POST"
				});
				t.uploadProgress && (s.xhr = function () {
					var n = e.ajaxSettings.xhr();
					return n.upload && n.upload.addEventListener("progress", function (e) {
						var n = 0,
							r = e.loaded || e.position,
							a = e.total;
						e.lengthComputable && (n = Math.ceil(r / a * 100)), t.uploadProgress(e, r, a, n)
					}, !1), n
				}), s.data = null;
				var o = s.beforeSend;
				return s.beforeSend = function (e, n) {
					t.formData ? n.data = t.formData : n.data = r, o && o.call(this, e, n)
				}, e.ajax(s)
			}(y) : e.ajax(t), f.removeData("jqxhr").data("jqxhr", D);
			for (var j = 0; j < v.length; j++) v[j] = null;
			return this.trigger("form-submit-notify", [this, t]), this;

			function C(n) {
				var a, i, o, d, u, c, m, h, p, _, y, g, M = f[0],
					b = e.Deferred();
				if (b.abort = function (e) {
						h.abort(e)
					}, n)
					for (i = 0; i < v.length; i++) a = e(v[i]), r ? a.prop("disabled", !1) : a.removeAttr("disabled");
				(o = e.extend(!0, {}, e.ajaxSettings, t)).context = o.context || o, u = "jqFormIO" + (new Date).getTime();
				var L = M.ownerDocument,
					k = f.closest("body");
				if (o.iframeTarget ? (_ = (c = e(o.iframeTarget, L)).attr2("name")) ? u = _ : c.attr2("name", u) : (c = e('<iframe name="' + u + '" src="' + o.iframeSrc + '" />', L)).css({
						position: "absolute",
						top: "-1000px",
						left: "-1000px"
					}), m = c[0], h = {
						aborted: 0,
						responseText: null,
						responseXML: null,
						status: 0,
						statusText: "n/a",
						getAllResponseHeaders: function () {},
						getResponseHeader: function () {},
						setRequestHeader: function () {},
						abort: function (t) {
							var n = "timeout" === t ? "timeout" : "aborted";
							s("aborting upload... " + n), this.aborted = 1;
							try {
								m.contentWindow.document.execCommand && m.contentWindow.document.execCommand("Stop")
							} catch (t) {}
							c.attr("src", o.iframeSrc), h.error = n, o.error && o.error.call(o.context, h, n, t), d && e.event.trigger("ajaxError", [h, o, n]), o.complete && o.complete.call(o.context, h, n)
						}
					}, (d = o.global) && 0 == e.active++ && e.event.trigger("ajaxStart"), d && e.event.trigger("ajaxSend", [h, o]), o.beforeSend && !1 === o.beforeSend.call(o.context, h, o)) return o.global && e.active--, b.reject(), b;
				if (h.aborted) return b.reject(), b;
				(p = M.clk) && (_ = p.name) && !p.disabled && (o.extraData = o.extraData || {}, o.extraData[_] = p.value, "image" === p.type && (o.extraData[_ + ".x"] = M.clk_x, o.extraData[_ + ".y"] = M.clk_y));
				var w = 1,
					Y = 2;

				function x(e) {
					var t = null;
					try {
						e.contentWindow && (t = e.contentWindow.document)
					} catch (e) {
						s("cannot get iframe.contentWindow document: " + e)
					}
					if (t) return t;
					try {
						t = e.contentDocument ? e.contentDocument : e.document
					} catch (n) {
						s("cannot get iframe.contentDocument: " + n), t = e.document
					}
					return t
				}
				var T = e("meta[name=csrf-token]").attr("content"),
					D = e("meta[name=csrf-param]").attr("content");

				function S() {
					var t = f.attr2("target"),
						n = f.attr2("action"),
						r = f.attr("enctype") || f.attr("encoding") || "multipart/form-data";
					M.setAttribute("target", u), l && !/post/i.test(l) || M.setAttribute("method", "POST"), n !== o.url && M.setAttribute("action", o.url), o.skipEncodingOverride || l && !/post/i.test(l) || f.attr({
						encoding: "multipart/form-data",
						enctype: "multipart/form-data"
					}), o.timeout && (g = setTimeout(function () {
						y = !0, E(w)
					}, o.timeout));
					var a = [];
					try {
						if (o.extraData)
							for (var i in o.extraData) o.extraData.hasOwnProperty(i) && (e.isPlainObject(o.extraData[i]) && o.extraData[i].hasOwnProperty("name") && o.extraData[i].hasOwnProperty("value") ? a.push(e('<input type="hidden" name="' + o.extraData[i].name + '">', L).val(o.extraData[i].value).appendTo(M)[0]) : a.push(e('<input type="hidden" name="' + i + '">', L).val(o.extraData[i]).appendTo(M)[0]));
						o.iframeTarget || c.appendTo(k), m.attachEvent ? m.attachEvent("onload", E) : m.addEventListener("load", E, !1), setTimeout(function e() {
							try {
								var t = x(m).readyState;
								s("state = " + t), t && "uninitialized" === t.toLowerCase() && setTimeout(e, 50)
							} catch (e) {
								s("Server abort: ", e, " (", e.name, ")"), E(Y), g && clearTimeout(g), g = void 0
							}
						}, 15);
						try {
							M.submit()
						} catch (t) {
							document.createElement("form").submit.apply(M)
						}
					} finally {
						M.setAttribute("action", n), M.setAttribute("enctype", r), t ? M.setAttribute("target", t) : f.removeAttr("target"), e(a).remove()
					}
				}
				D && T && (o.extraData = o.extraData || {}, o.extraData[D] = T), o.forceSync ? S() : setTimeout(S, 10);
				var j, C, H, A = 50;

				function E(t) {
					if (!h.aborted && !H) {
						if ((C = x(m)) || (s("cannot access response document"), t = Y), t === w && h) return h.abort("timeout"), void b.reject(h, "timeout");
						if (t === Y && h) return h.abort("server abort"), void b.reject(h, "error", "server abort");
						if (C && C.location.href !== o.iframeSrc || y) {
							m.detachEvent ? m.detachEvent("onload", E) : m.removeEventListener("load", E, !1);
							var n, r = "success";
							try {
								if (y) throw "timeout";
								var a = "xml" === o.dataType || C.XMLDocument || e.isXMLDoc(C);
								if (s("isXml=" + a), !a && window.opera && (null === C.body || !C.body.innerHTML) && --A) return s("requeing onLoad callback, DOM not available"), void setTimeout(E, 250);
								var i = C.body ? C.body : C.documentElement;
								h.responseText = i ? i.innerHTML : null, h.responseXML = C.XMLDocument ? C.XMLDocument : C, a && (o.dataType = "xml"), h.getResponseHeader = function (e) {
									return {
										"content-type": o.dataType
									}[e.toLowerCase()]
								}, i && (h.status = Number(i.getAttribute("status")) || h.status, h.statusText = i.getAttribute("statusText") || h.statusText);
								var l, u, f, p = (o.dataType || "").toLowerCase(),
									_ = /(json|script|text)/.test(p);
								_ || o.textarea ? (l = C.getElementsByTagName("textarea")[0]) ? (h.responseText = l.value, h.status = Number(l.getAttribute("status")) || h.status, h.statusText = l.getAttribute("statusText") || h.statusText) : _ && (u = C.getElementsByTagName("pre")[0], f = C.getElementsByTagName("body")[0], u ? h.responseText = u.textContent ? u.textContent : u.innerText : f && (h.responseText = f.textContent ? f.textContent : f.innerText)) : "xml" === p && !h.responseXML && h.responseText && (h.responseXML = P(h.responseText));
								try {
									j = $(h, p, o)
								} catch (t) {
									r = "parsererror", h.error = n = t || r
								}
							} catch (t) {
								s("error caught: ", t), r = "error", h.error = n = t || r
							}
							h.aborted && (s("upload aborted"), r = null), h.status && (r = 200 <= h.status && h.status < 300 || 304 === h.status ? "success" : "error"), "success" === r ? (o.success && o.success.call(o.context, j, "success", h), b.resolve(h.responseText, "success", h), d && e.event.trigger("ajaxSuccess", [h, o])) : r && (void 0 === n && (n = h.statusText), o.error && o.error.call(o.context, h, r, n), b.reject(h, "error", n), d && e.event.trigger("ajaxError", [h, o, n])), d && e.event.trigger("ajaxComplete", [h, o]), d && !--e.active && e.event.trigger("ajaxStop"), o.complete && o.complete.call(o.context, h, r), H = !0, o.timeout && clearTimeout(g), setTimeout(function () {
								o.iframeTarget ? c.attr("src", o.iframeSrc) : c.remove(), h.responseXML = null
							}, 100)
						}
					}
				}
				var P = e.parseXML || function (e, t) {
						return window.ActiveXObject ? ((t = new ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" !== t.documentElement.nodeName ? t : null
					},
					O = e.parseJSON || function (e) {
						return window.eval("(" + e + ")")
					},
					$ = function (t, n, r) {
						var a = t.getResponseHeader("content-type") || "",
							i = ("xml" === n || !n) && 0 <= a.indexOf("xml"),
							s = i ? t.responseXML : t.responseText;
						return i && "parsererror" === s.documentElement.nodeName && e.error && e.error("parsererror"), r && r.dataFilter && (s = r.dataFilter(s, n)), "string" == typeof s && (("json" === n || !n) && 0 <= a.indexOf("json") ? s = O(s) : ("script" === n || !n) && 0 <= a.indexOf("javascript") && e.globalEval(s)), s
					};
				return b
			}
		}, e.fn.ajaxForm = function (t, n, r, o) {
			if (("string" == typeof t || !1 === t && 0 < arguments.length) && (t = {
					url: t,
					data: n,
					dataType: r
				}, "function" == typeof o && (t.success = o)), (t = t || {}).delegation = t.delegation && e.isFunction(e.fn.on), t.delegation || 0 !== this.length) return t.delegation ? (e(document).off("submit.form-plugin", this.selector, a).off("click.form-plugin", this.selector, i).on("submit.form-plugin", this.selector, t, a).on("click.form-plugin", this.selector, t, i), this) : (t.beforeFormUnbind && t.beforeFormUnbind(this, t), this.ajaxFormUnbind().on("submit.form-plugin", t, a).on("click.form-plugin", t, i));
			var l = {
				s: this.selector,
				c: this.context
			};
			return !e.isReady && l.s ? (s("DOM not ready, queuing ajaxForm"), e(function () {
				e(l.s, l.c).ajaxForm(t)
			})) : s("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")), this
		}, e.fn.ajaxFormUnbind = function () {
			return this.off("submit.form-plugin click.form-plugin")
		}, e.fn.formToArray = function (t, r, a) {
			var i = [];
			if (0 === this.length) return i;
			var s, o, l, d, u, c, f, m, h, p, _ = this[0],
				v = this.attr("id"),
				y = (y = t || void 0 === _.elements ? _.getElementsByTagName("*") : _.elements) && e.makeArray(y);
			if (v && (t || /(Edge|Trident)\//.test(navigator.userAgent)) && (s = e(':input[form="' + v + '"]').get()).length && (y = (y || []).concat(s)), !y || !y.length) return i;
			for (e.isFunction(a) && (y = e.map(y, a)), o = 0, c = y.length; o < c; o++)
				if ((p = (u = y[o]).name) && !u.disabled)
					if (t && _.clk && "image" === u.type) _.clk === u && (i.push({
						name: p,
						value: e(u).val(),
						type: u.type
					}), i.push({
						name: p + ".x",
						value: _.clk_x
					}, {
						name: p + ".y",
						value: _.clk_y
					}));
					else if ((d = e.fieldValue(u, !0)) && d.constructor === Array)
				for (r && r.push(u), l = 0, f = d.length; l < f; l++) i.push({
					name: p,
					value: d[l]
				});
			else if (n.fileapi && "file" === u.type) {
				r && r.push(u);
				var g = u.files;
				if (g.length)
					for (l = 0; l < g.length; l++) i.push({
						name: p,
						value: g[l],
						type: u.type
					});
				else i.push({
					name: p,
					value: "",
					type: u.type
				})
			} else null != d && (r && r.push(u), i.push({
				name: p,
				value: d,
				type: u.type,
				required: u.required
			}));
			return t || !_.clk || (p = (h = (m = e(_.clk))[0]).name) && !h.disabled && "image" === h.type && (i.push({
				name: p,
				value: m.val()
			}), i.push({
				name: p + ".x",
				value: _.clk_x
			}, {
				name: p + ".y",
				value: _.clk_y
			})), i
		}, e.fn.formSerialize = function (t) {
			return e.param(this.formToArray(t))
		}, e.fn.fieldSerialize = function (t) {
			var n = [];
			return this.each(function () {
				var r = this.name;
				if (r) {
					var a = e.fieldValue(this, t);
					if (a && a.constructor === Array)
						for (var i = 0, s = a.length; i < s; i++) n.push({
							name: r,
							value: a[i]
						});
					else null != a && n.push({
						name: this.name,
						value: a
					})
				}
			}), e.param(n)
		}, e.fn.fieldValue = function (t) {
			for (var n = [], r = 0, a = this.length; r < a; r++) {
				var i = this[r],
					s = e.fieldValue(i, t);
				null == s || s.constructor === Array && !s.length || (s.constructor === Array ? e.merge(n, s) : n.push(s))
			}
			return n
		}, e.fieldValue = function (n, r) {
			var a = n.name,
				i = n.type,
				s = n.tagName.toLowerCase();
			if (void 0 === r && (r = !0), r && (!a || n.disabled || "reset" === i || "button" === i || ("checkbox" === i || "radio" === i) && !n.checked || ("submit" === i || "image" === i) && n.form && n.form.clk !== n || "select" === s && -1 === n.selectedIndex)) return null;
			if ("select" !== s) return e(n).val().replace(t, "\r\n");
			var o = n.selectedIndex;
			if (o < 0) return null;
			for (var l = [], d = n.options, u = "select-one" === i, c = u ? o + 1 : d.length, f = u ? o : 0; f < c; f++) {
				var m = d[f];
				if (m.selected && !m.disabled) {
					var h = (h = m.value) || (m.attributes && m.attributes.value && !m.attributes.value.specified ? m.text : m.value);
					if (u) return h;
					l.push(h)
				}
			}
			return l
		}, e.fn.clearForm = function (t) {
			return this.each(function () {
				e("input,select,textarea", this).clearFields(t)
			})
		}, e.fn.clearFields = e.fn.clearInputs = function (t) {
			var n = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
			return this.each(function () {
				var r = this.type,
					a = this.tagName.toLowerCase();
				n.test(r) || "textarea" === a ? this.value = "" : "checkbox" === r || "radio" === r ? this.checked = !1 : "select" === a ? this.selectedIndex = -1 : "file" === r ? /MSIE/.test(navigator.userAgent) ? e(this).replaceWith(e(this).clone(!0)) : e(this).val("") : t && (!0 === t && /hidden/.test(r) || "string" == typeof t && e(this).is(t)) && (this.value = "")
			})
		}, e.fn.resetForm = function () {
			return this.each(function () {
				var t = e(this),
					n = this.tagName.toLowerCase();
				switch (n) {
					case "input":
						this.checked = this.defaultChecked;
					case "textarea":
						return this.value = this.defaultValue, !0;
					case "option":
					case "optgroup":
						var r = t.parents("select");
						return r.length && r[0].multiple ? "option" === n ? this.selected = this.defaultSelected : t.find("option").resetForm() : r.resetForm(), !0;
					case "select":
						return t.find("option").each(function (e) {
							if (this.selected = this.defaultSelected, this.defaultSelected && !t[0].multiple) return t[0].selectedIndex = e, !1
						}), !0;
					case "label":
						var a = e(t.attr("for")),
							i = t.find("input,select,textarea");
						return a[0] && i.unshift(a[0]), i.resetForm(), !0;
					case "form":
						return "function" != typeof this.reset && ("object" != typeof this.reset || this.reset.nodeType) || this.reset(), !0;
					default:
						return t.find("form,input,label,select,textarea").resetForm(), !0
				}
			})
		}, e.fn.enable = function (e) {
			return void 0 === e && (e = !0), this.each(function () {
				this.disabled = !e
			})
		}, e.fn.selected = function (t) {
			return void 0 === t && (t = !0), this.each(function () {
				var n, r = this.type;
				"checkbox" === r || "radio" === r ? this.checked = t : "option" === this.tagName.toLowerCase() && (n = e(this).parent("select"), t && n[0] && "select-one" === n[0].type && n.find("option").selected(!1), this.selected = t)
			})
		}, e.fn.ajaxSubmit.debug = !1
	}, a = [n(5)], void 0 === (i = "function" == typeof (r = s) ? r.apply(t, a) : r) || (e.exports = i)
}, function (e, t, n) {
	Vue.component("modal", n(176)), Vue.component("modal-header", n(182)), Vue.component("modal-body", n(184)), Vue.component("modal-footer", n(186)), Vue.component("uploader", n(188))
}, function (e, t, n) {
	var r = n(1)(n(180), n(181), !1, function (e) {
		n(177)
	}, null, null);
	e.exports = r.exports
}, function (e, t, n) {
	var r = n(178);
	"string" == typeof r && (r = [
		[e.i, r, ""]
	]), r.locals && (e.exports = r.locals);
	n(4)("4fa68ab4", r, !0, {})
}, function (e, t, n) {
	(e.exports = n(3)(!1)).push([e.i, ".primary{background-color:#337ab7;color:#fff}.primary .modal-body,.primary .modal-footer{background-color:#fff;border-left:1px solid #337ab7;border-right:1px solid #337ab7;color:#000}.primary .modal-footer{border-radius:5px;border-bottom:1px solid #337ab7}", ""])
}, function (e, t) {
	e.exports = function (e, t) {
		for (var n = [], r = {}, a = 0; a < t.length; a++) {
			var i = t[a],
				s = i[0],
				o = {
					id: e + ":" + a,
					css: i[1],
					media: i[2],
					sourceMap: i[3]
				};
			r[s] ? r[s].parts.push(o) : n.push(r[s] = {
				id: s,
				parts: [o]
			})
		}
		return n
	}
}, function (e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = {
		props: ["id", "aClass"]
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return t("div", {
				staticClass: "modal fade",
				attrs: {
					id: this.id,
					role: "dialog"
				}
			}, [t("div", {
				staticClass: "modal-dialog"
			}, [t("div", {
				staticClass: "modal-content",
				class: this.aClass
			}, [this._t("default")], 2)])])
		},
		staticRenderFns: []
	}
}, function (e, t, n) {
	var r = n(1)(null, n(183), !1, null, null, null);
	e.exports = r.exports
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return t("div", {
				staticClass: "modal-header"
			}, [t("button", {
				staticClass: "close",
				attrs: {
					type: "button",
					"data-dismiss": "modal"
				}
			}, [this._v("×")]), this._v(" "), t("h4", [this._t("default")], 2)])
		},
		staticRenderFns: []
	}
}, function (e, t, n) {
	var r = n(1)(null, n(185), !1, null, null, null);
	e.exports = r.exports
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this.$createElement;
			return (this._self._c || e)("div", {
				staticClass: "modal-body"
			}, [this._t("default")], 2)
		},
		staticRenderFns: []
	}
}, function (e, t, n) {
	var r = n(1)(null, n(187), !1, null, null, null);
	e.exports = r.exports
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this.$createElement;
			return (this._self._c || e)("div", {
				staticClass: "modal-footer"
			}, [this._t("default")], 2)
		},
		staticRenderFns: []
	}
}, function (e, t, n) {
	var r = n(1)(n(191), n(192), !1, function (e) {
		n(189)
	}, null, null);
	e.exports = r.exports
}, function (e, t, n) {
	var r = n(190);
	"string" == typeof r && (r = [
		[e.i, r, ""]
	]), r.locals && (e.exports = r.locals);
	n(4)("3bc2dcc7", r, !0, {})
}, function (e, t, n) {
	(e.exports = n(3)(!1)).push([e.i, ".imgContainer{position:relative;height:200px;width:200px}.file{position:absolute;height:100%;width:100%;opacity:0}.imgUpload{background-color:#fff;border:2px solid #000}.imgText{position:absolute;left:0;top:45%;width:100%;text-align:center}", ""])
}, function (e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = {
		props: {
			fileId: {
				default: "fileId"
			},
			fileName: {
				default: "file_name"
			},
			imageId: {
				default: "imageId"
			},
			imageSrc: {
				default: "#"
			}
		},
		methods: {
			readFile: function (e, t) {
				var n = $("#" + e)[0],
					r = $("#" + t);
				if (n.files && n.files[0]) {
					var a = new FileReader;
					a.onload = function (e) {
						r.attr("src", e.target.result)
					}, a.readAsDataURL(n.files[0])
				}
			}
		}
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("center", [n("div", {
				staticClass: "imgContainer"
			}, [n("input", {
				staticClass: "file",
				attrs: {
					type: "file",
					id: e.fileId,
					name: e.fileName
				},
				on: {
					change: function (t) {
						return e.readFile(e.fileId, e.imageId)
					}
				}
			}), e._v(" "), n("img", {
				staticClass: "imgUpload img-rounded",
				attrs: {
					src: e.imageSrc,
					height: "100%",
					width: "100%",
					id: e.imageId
				}
			}), e._v(" "), n("span", {
				staticClass: "imgText"
			}, [e._v("Elegir Imagen")])])])
		},
		staticRenderFns: []
	}
}, function (e, t) {
	! function (e) {
		e.color = {}, e.color.make = function (t, n, r, a) {
			var i = {};
			return i.r = t || 0, i.g = n || 0, i.b = r || 0, i.a = null != a ? a : 1, i.add = function (e, t) {
				for (var n = 0; n < e.length; ++n) i[e.charAt(n)] += t;
				return i.normalize()
			}, i.scale = function (e, t) {
				for (var n = 0; n < e.length; ++n) i[e.charAt(n)] *= t;
				return i.normalize()
			}, i.toString = function () {
				return i.a >= 1 ? "rgb(" + [i.r, i.g, i.b].join(",") + ")" : "rgba(" + [i.r, i.g, i.b, i.a].join(",") + ")"
			}, i.normalize = function () {
				function e(e, t, n) {
					return t < e ? e : t > n ? n : t
				}
				return i.r = e(0, parseInt(i.r), 255), i.g = e(0, parseInt(i.g), 255), i.b = e(0, parseInt(i.b), 255), i.a = e(0, i.a, 1), i
			}, i.clone = function () {
				return e.color.make(i.r, i.b, i.g, i.a)
			}, i.normalize()
		}, e.color.extract = function (t, n) {
			var r;
			do {
				if ("" != (r = t.css(n).toLowerCase()) && "transparent" != r) break;
				t = t.parent()
			} while (t.length && !e.nodeName(t.get(0), "body"));
			return "rgba(0, 0, 0, 0)" == r && (r = "transparent"), e.color.parse(r)
		}, e.color.parse = function (n) {
			var r, a = e.color.make;
			if (r = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(n)) return a(parseInt(r[1], 10), parseInt(r[2], 10), parseInt(r[3], 10));
			if (r = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(n)) return a(parseInt(r[1], 10), parseInt(r[2], 10), parseInt(r[3], 10), parseFloat(r[4]));
			if (r = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(n)) return a(2.55 * parseFloat(r[1]), 2.55 * parseFloat(r[2]), 2.55 * parseFloat(r[3]));
			if (r = /rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(n)) return a(2.55 * parseFloat(r[1]), 2.55 * parseFloat(r[2]), 2.55 * parseFloat(r[3]), parseFloat(r[4]));
			if (r = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(n)) return a(parseInt(r[1], 16), parseInt(r[2], 16), parseInt(r[3], 16));
			if (r = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(n)) return a(parseInt(r[1] + r[1], 16), parseInt(r[2] + r[2], 16), parseInt(r[3] + r[3], 16));
			var i = e.trim(n).toLowerCase();
			return "transparent" == i ? a(255, 255, 255, 0) : a((r = t[i] || [0, 0, 0])[0], r[1], r[2])
		};
		var t = {
			aqua: [0, 255, 255],
			azure: [240, 255, 255],
			beige: [245, 245, 220],
			black: [0, 0, 0],
			blue: [0, 0, 255],
			brown: [165, 42, 42],
			cyan: [0, 255, 255],
			darkblue: [0, 0, 139],
			darkcyan: [0, 139, 139],
			darkgrey: [169, 169, 169],
			darkgreen: [0, 100, 0],
			darkkhaki: [189, 183, 107],
			darkmagenta: [139, 0, 139],
			darkolivegreen: [85, 107, 47],
			darkorange: [255, 140, 0],
			darkorchid: [153, 50, 204],
			darkred: [139, 0, 0],
			darksalmon: [233, 150, 122],
			darkviolet: [148, 0, 211],
			fuchsia: [255, 0, 255],
			gold: [255, 215, 0],
			green: [0, 128, 0],
			indigo: [75, 0, 130],
			khaki: [240, 230, 140],
			lightblue: [173, 216, 230],
			lightcyan: [224, 255, 255],
			lightgreen: [144, 238, 144],
			lightgrey: [211, 211, 211],
			lightpink: [255, 182, 193],
			lightyellow: [255, 255, 224],
			lime: [0, 255, 0],
			magenta: [255, 0, 255],
			maroon: [128, 0, 0],
			navy: [0, 0, 128],
			olive: [128, 128, 0],
			orange: [255, 165, 0],
			pink: [255, 192, 203],
			purple: [128, 0, 128],
			violet: [128, 0, 128],
			red: [255, 0, 0],
			silver: [192, 192, 192],
			white: [255, 255, 255],
			yellow: [255, 255, 0]
		}
	}(jQuery),
	function (e) {
		var t = Object.prototype.hasOwnProperty;

		function n(t, n) {
			var r = n.children("." + t)[0];
			if (null == r && ((r = document.createElement("canvas")).className = t, e(r).css({
					direction: "ltr",
					position: "absolute",
					left: 0,
					top: 0
				}).appendTo(n), !r.getContext)) {
				if (!window.G_vmlCanvasManager) throw new Error("Canvas is not available. If you're using IE with a fall-back such as Excanvas, then there's either a mistake in your conditional include, or the page has no DOCTYPE and is rendering in Quirks Mode.");
				r = window.G_vmlCanvasManager.initElement(r)
			}
			this.element = r;
			var a = this.context = r.getContext("2d"),
				i = window.devicePixelRatio || 1,
				s = a.webkitBackingStorePixelRatio || a.mozBackingStorePixelRatio || a.msBackingStorePixelRatio || a.oBackingStorePixelRatio || a.backingStorePixelRatio || 1;
			this.pixelRatio = i / s, this.resize(n.width(), n.height()), this.textContainer = null, this.text = {}, this._textCache = {}
		}

		function r(t, r, a, i) {
			var s = [],
				o = {
					colors: ["#edc240", "#afd8f8", "#cb4b4b", "#4da74d", "#9440ed"],
					legend: {
						show: !0,
						noColumns: 1,
						labelFormatter: null,
						labelBoxBorderColor: "#ccc",
						container: null,
						position: "ne",
						margin: 5,
						backgroundColor: null,
						backgroundOpacity: .85,
						sorted: null
					},
					xaxis: {
						show: null,
						position: "bottom",
						mode: null,
						font: null,
						color: null,
						tickColor: null,
						transform: null,
						inverseTransform: null,
						min: null,
						max: null,
						autoscaleMargin: null,
						ticks: null,
						tickFormatter: null,
						labelWidth: null,
						labelHeight: null,
						reserveSpace: null,
						tickLength: null,
						alignTicksWithAxis: null,
						tickDecimals: null,
						tickSize: null,
						minTickSize: null
					},
					yaxis: {
						autoscaleMargin: .02,
						position: "left"
					},
					xaxes: [],
					yaxes: [],
					series: {
						points: {
							show: !1,
							radius: 3,
							lineWidth: 2,
							fill: !0,
							fillColor: "#ffffff",
							symbol: "circle"
						},
						lines: {
							lineWidth: 2,
							fill: !1,
							fillColor: null,
							steps: !1
						},
						bars: {
							show: !1,
							lineWidth: 2,
							barWidth: 1,
							fill: !0,
							fillColor: null,
							align: "left",
							horizontal: !1,
							zero: !0
						},
						shadowSize: 3,
						highlightColor: null
					},
					grid: {
						show: !0,
						aboveData: !1,
						color: "#545454",
						backgroundColor: null,
						borderColor: null,
						tickColor: null,
						margin: 0,
						labelMargin: 5,
						axisMargin: 8,
						borderWidth: 2,
						minBorderMargin: null,
						markings: null,
						markingsColor: "#f4f4f4",
						markingsLineWidth: 2,
						clickable: !1,
						hoverable: !1,
						autoHighlight: !0,
						mouseActiveRadius: 10
					},
					interaction: {
						redrawOverlayInterval: 1e3 / 60
					},
					hooks: {}
				},
				l = null,
				d = null,
				u = null,
				c = null,
				f = null,
				m = [],
				h = [],
				p = {
					left: 0,
					right: 0,
					top: 0,
					bottom: 0
				},
				_ = 0,
				v = 0,
				y = {
					processOptions: [],
					processRawData: [],
					processDatapoints: [],
					processOffset: [],
					drawBackground: [],
					drawSeries: [],
					draw: [],
					bindEvents: [],
					drawOverlay: [],
					shutdown: []
				},
				g = this;

			function M(e, t) {
				t = [g].concat(t);
				for (var n = 0; n < e.length; ++n) e[n].apply(this, t)
			}

			function b(t) {
				s = function (t) {
						for (var n = [], r = 0; r < t.length; ++r) {
							var a = e.extend(!0, {}, o.series);
							null != t[r].data ? (a.data = t[r].data, delete t[r].data, e.extend(!0, a, t[r]), t[r].data = a.data) : a.data = t[r], n.push(a)
						}
						return n
					}(t),
					function () {
						var t, n = s.length,
							r = -1;
						for (t = 0; t < s.length; ++t) {
							var a = s[t].color;
							null != a && (n--, "number" == typeof a && a > r && (r = a))
						}
						n <= r && (n = r + 1);
						var i, l = [],
							d = o.colors,
							u = d.length,
							c = 0;
						for (t = 0; t < n; t++) i = e.color.parse(d[t % u] || "#666"), t % u == 0 && t && (c = c >= 0 ? c < .5 ? -c - .2 : 0 : -c), l[t] = i.scale("rgb", 1 + c);
						var f, p = 0;
						for (t = 0; t < s.length; ++t) {
							if (null == (f = s[t]).color ? (f.color = l[p].toString(), ++p) : "number" == typeof f.color && (f.color = l[f.color].toString()), null == f.lines.show) {
								var _, v = !0;
								for (_ in f)
									if (f[_] && f[_].show) {
										v = !1;
										break
									}
								v && (f.lines.show = !0)
							}
							null == f.lines.zero && (f.lines.zero = !!f.lines.fill), f.xaxis = Y(m, L(f, "x")), f.yaxis = Y(h, L(f, "y"))
						}
					}(),
					function () {
						var t, n, r, a, i, o, l, d, u, c, f, m, h = Number.POSITIVE_INFINITY,
							p = Number.NEGATIVE_INFINITY,
							_ = Number.MAX_VALUE;

						function v(e, t, n) {
							t < e.datamin && t != -_ && (e.datamin = t), n > e.datamax && n != _ && (e.datamax = n)
						}
						for (e.each(k(), function (e, t) {
								t.datamin = h, t.datamax = p, t.used = !1
							}), t = 0; t < s.length; ++t)(i = s[t]).datapoints = {
							points: []
						}, M(y.processRawData, [i, i.data, i.datapoints]);
						for (t = 0; t < s.length; ++t) {
							if (i = s[t], f = i.data, !(m = i.datapoints.format)) {
								if ((m = []).push({
										x: !0,
										number: !0,
										required: !0
									}), m.push({
										y: !0,
										number: !0,
										required: !0
									}), i.bars.show || i.lines.show && i.lines.fill) {
									var g = !!(i.bars.show && i.bars.zero || i.lines.show && i.lines.zero);
									m.push({
										y: !0,
										number: !0,
										required: !1,
										defaultValue: 0,
										autoscale: g
									}), i.bars.horizontal && (delete m[m.length - 1].y, m[m.length - 1].x = !0)
								}
								i.datapoints.format = m
							}
							if (null == i.datapoints.pointsize) {
								i.datapoints.pointsize = m.length, l = i.datapoints.pointsize, o = i.datapoints.points;
								var b = i.lines.show && i.lines.steps;
								for (i.xaxis.used = i.yaxis.used = !0, n = r = 0; n < f.length; ++n, r += l) {
									var L = null == (c = f[n]);
									if (!L)
										for (a = 0; a < l; ++a) d = c[a], (u = m[a]) && (u.number && null != d && (d = +d, isNaN(d) ? d = null : d == 1 / 0 ? d = _ : d == -1 / 0 && (d = -_)), null == d && (u.required && (L = !0), null != u.defaultValue && (d = u.defaultValue))), o[r + a] = d;
									if (L)
										for (a = 0; a < l; ++a) null != (d = o[r + a]) && !1 !== (u = m[a]).autoscale && (u.x && v(i.xaxis, d, d), u.y && v(i.yaxis, d, d)), o[r + a] = null;
									else if (b && r > 0 && null != o[r - l] && o[r - l] != o[r] && o[r - l + 1] != o[r + 1]) {
										for (a = 0; a < l; ++a) o[r + l + a] = o[r + a];
										o[r + 1] = o[r - l + 1], r += l
									}
								}
							}
						}
						for (t = 0; t < s.length; ++t) i = s[t], M(y.processDatapoints, [i, i.datapoints]);
						for (t = 0; t < s.length; ++t) {
							i = s[t], o = i.datapoints.points, l = i.datapoints.pointsize, m = i.datapoints.format;
							var w = h,
								Y = h,
								x = p,
								T = p;
							for (n = 0; n < o.length; n += l)
								if (null != o[n])
									for (a = 0; a < l; ++a) d = o[n + a], (u = m[a]) && !1 !== u.autoscale && d != _ && d != -_ && (u.x && (d < w && (w = d), d > x && (x = d)), u.y && (d < Y && (Y = d), d > T && (T = d)));
							if (i.bars.show) {
								var D;
								switch (i.bars.align) {
									case "left":
										D = 0;
										break;
									case "right":
										D = -i.bars.barWidth;
										break;
									default:
										D = -i.bars.barWidth / 2
								}
								i.bars.horizontal ? (Y += D, T += D + i.bars.barWidth) : (w += D, x += D + i.bars.barWidth)
							}
							v(i.xaxis, w, x), v(i.yaxis, Y, T)
						}
						e.each(k(), function (e, t) {
							t.datamin == h && (t.datamin = null), t.datamax == p && (t.datamax = null)
						})
					}()
			}

			function L(e, t) {
				var n = e[t + "axis"];
				return "object" == typeof n && (n = n.n), "number" != typeof n && (n = 1), n
			}

			function k() {
				return e.grep(m.concat(h), function (e) {
					return e
				})
			}

			function w(e) {
				var t, n, r = {};
				for (t = 0; t < m.length; ++t)(n = m[t]) && n.used && (r["x" + n.n] = n.c2p(e.left));
				for (t = 0; t < h.length; ++t)(n = h[t]) && n.used && (r["y" + n.n] = n.c2p(e.top));
				return void 0 !== r.x1 && (r.x = r.x1), void 0 !== r.y1 && (r.y = r.y1), r
			}

			function Y(t, n) {
				return t[n - 1] || (t[n - 1] = {
					n: n,
					direction: t == m ? "x" : "y",
					options: e.extend(!0, {}, t == m ? o.xaxis : o.yaxis)
				}), t[n - 1]
			}

			function x() {
				O && clearTimeout(O), u.unbind("mousemove", $), u.unbind("mouseleave", N), u.unbind("click", R), M(y.shutdown, [u])
			}

			function T(t) {
				var n = t.labelWidth,
					r = t.labelHeight,
					a = t.options.position,
					i = "x" === t.direction,
					s = t.options.tickLength,
					d = o.grid.axisMargin,
					u = o.grid.labelMargin,
					c = !0,
					f = !0,
					_ = !0,
					v = !1;
				e.each(i ? m : h, function (e, n) {
					n && (n.show || n.reserveSpace) && (n === t ? v = !0 : n.options.position === a && (v ? f = !1 : c = !1), v || (_ = !1))
				}), f && (d = 0), null == s && (s = _ ? "full" : 5), isNaN(+s) || (u += +s), i ? (r += u, "bottom" == a ? (p.bottom += r + d, t.box = {
					top: l.height - p.bottom,
					height: r
				}) : (t.box = {
					top: p.top + d,
					height: r
				}, p.top += r + d)) : (n += u, "left" == a ? (t.box = {
					left: p.left + d,
					width: n
				}, p.left += n + d) : (p.right += n + d, t.box = {
					left: l.width - p.right,
					width: n
				})), t.position = a, t.tickLength = s, t.box.padding = u, t.innermost = c
			}

			function D() {
				var n, r = k(),
					a = o.grid.show;
				for (var i in p) {
					var d = o.grid.margin || 0;
					p[i] = "number" == typeof d ? d : d[i] || 0
				}
				for (var i in M(y.processOffset, [p]), p) "object" == typeof o.grid.borderWidth ? p[i] += a ? o.grid.borderWidth[i] : 0 : p[i] += a ? o.grid.borderWidth : 0;
				if (e.each(r, function (e, t) {
						var n = t.options;
						t.show = null == n.show ? t.used : n.show, t.reserveSpace = null == n.reserveSpace ? t.show : n.reserveSpace,
							function (e) {
								var t = e.options,
									n = +(null != t.min ? t.min : e.datamin),
									r = +(null != t.max ? t.max : e.datamax),
									a = r - n;
								if (0 == a) {
									var i = 0 == r ? 1 : .01;
									null == t.min && (n -= i), null != t.max && null == t.min || (r += i)
								} else {
									var s = t.autoscaleMargin;
									null != s && (null == t.min && (n -= a * s) < 0 && null != e.datamin && e.datamin >= 0 && (n = 0), null == t.max && (r += a * s) > 0 && null != e.datamax && e.datamax <= 0 && (r = 0))
								}
								e.min = n, e.max = r
							}(t)
					}), a) {
					var u = e.grep(r, function (e) {
						return e.show || e.reserveSpace
					});
					for (e.each(u, function (t, n) {
							! function (t) {
								var n, r = t.options;
								n = "number" == typeof r.ticks && r.ticks > 0 ? r.ticks : .3 * Math.sqrt("x" == t.direction ? l.width : l.height);
								var a = (t.max - t.min) / n,
									i = -Math.floor(Math.log(a) / Math.LN10),
									s = r.tickDecimals;
								null != s && i > s && (i = s);
								var o, d = Math.pow(10, -i),
									u = a / d;
								u < 1.5 ? o = 1 : u < 3 ? (o = 2, u > 2.25 && (null == s || i + 1 <= s) && (o = 2.5, ++i)) : o = u < 7.5 ? 5 : 10;
								o *= d, null != r.minTickSize && o < r.minTickSize && (o = r.minTickSize);
								if (t.delta = a, t.tickDecimals = Math.max(0, null != s ? s : i), t.tickSize = r.tickSize || o, "time" == r.mode && !t.tickGenerator) throw new Error("Time mode requires the flot.time plugin.");
								t.tickGenerator || (t.tickGenerator = function (e) {
									var t, n, r, a = [],
										i = (n = e.min, (r = e.tickSize) * Math.floor(n / r)),
										s = 0,
										o = Number.NaN;
									do {
										t = o, o = i + s * e.tickSize, a.push(o), ++s
									} while (o < e.max && o != t);
									return a
								}, t.tickFormatter = function (e, t) {
									var n = t.tickDecimals ? Math.pow(10, t.tickDecimals) : 1,
										r = "" + Math.round(e * n) / n;
									if (null != t.tickDecimals) {
										var a = r.indexOf("."),
											i = -1 == a ? 0 : r.length - a - 1;
										if (i < t.tickDecimals) return (i ? r : r + ".") + ("" + n).substr(1, t.tickDecimals - i)
									}
									return r
								});
								e.isFunction(r.tickFormatter) && (t.tickFormatter = function (e, t) {
									return "" + r.tickFormatter(e, t)
								});
								if (null != r.alignTicksWithAxis) {
									var c = ("x" == t.direction ? m : h)[r.alignTicksWithAxis - 1];
									if (c && c.used && c != t) {
										var f = t.tickGenerator(t);
										if (f.length > 0 && (null == r.min && (t.min = Math.min(t.min, f[0])), null == r.max && f.length > 1 && (t.max = Math.max(t.max, f[f.length - 1]))), t.tickGenerator = function (e) {
												var t, n, r = [];
												for (n = 0; n < c.ticks.length; ++n) t = (c.ticks[n].v - c.min) / (c.max - c.min), t = e.min + t * (e.max - e.min), r.push(t);
												return r
											}, !t.mode && null == r.tickDecimals) {
											var p = Math.max(0, 1 - Math.floor(Math.log(t.delta) / Math.LN10)),
												_ = t.tickGenerator(t);
											_.length > 1 && /\..*0$/.test((_[1] - _[0]).toFixed(p)) || (t.tickDecimals = p)
										}
									}
								}
							}(n),
							function (t) {
								var n, r, a = t.options.ticks,
									i = [];
								null == a || "number" == typeof a && a > 0 ? i = t.tickGenerator(t) : a && (i = e.isFunction(a) ? a(t) : a);
								for (t.ticks = [], n = 0; n < i.length; ++n) {
									var s = null,
										o = i[n];
									"object" == typeof o ? (r = +o[0], o.length > 1 && (s = o[1])) : r = +o, null == s && (s = t.tickFormatter(r, t)), isNaN(r) || t.ticks.push({
										v: r,
										label: s
									})
								}
							}(n),
							function (e, t) {
								e.options.autoscaleMargin && t.length > 0 && (null == e.options.min && (e.min = Math.min(e.min, t[0].v)), null == e.options.max && t.length > 1 && (e.max = Math.max(e.max, t[t.length - 1].v)))
							}(n, n.ticks),
							function (e) {
								for (var t = e.options, n = e.ticks || [], r = t.labelWidth || 0, a = t.labelHeight || 0, i = r || ("x" == e.direction ? Math.floor(l.width / (n.length || 1)) : null), s = e.direction + "Axis " + e.direction + e.n + "Axis", o = "flot-" + e.direction + "-axis flot-" + e.direction + e.n + "-axis " + s, d = t.font || "flot-tick-label tickLabel", u = 0; u < n.length; ++u) {
									var c = n[u];
									if (c.label) {
										var f = l.getTextInfo(o, c.label, d, null, i);
										r = Math.max(r, f.width), a = Math.max(a, f.height)
									}
								}
								e.labelWidth = t.labelWidth || r, e.labelHeight = t.labelHeight || a
							}(n)
						}), n = u.length - 1; n >= 0; --n) T(u[n]);
					! function () {
						var t, n = o.grid.minBorderMargin;
						if (null == n)
							for (n = 0, t = 0; t < s.length; ++t) n = Math.max(n, 2 * (s[t].points.radius + s[t].points.lineWidth / 2));
						var r = {
							left: n,
							right: n,
							top: n,
							bottom: n
						};
						e.each(k(), function (e, t) {
							t.reserveSpace && t.ticks && t.ticks.length && ("x" === t.direction ? (r.left = Math.max(r.left, t.labelWidth / 2), r.right = Math.max(r.right, t.labelWidth / 2)) : (r.bottom = Math.max(r.bottom, t.labelHeight / 2), r.top = Math.max(r.top, t.labelHeight / 2)))
						}), p.left = Math.ceil(Math.max(r.left, p.left)), p.right = Math.ceil(Math.max(r.right, p.right)), p.top = Math.ceil(Math.max(r.top, p.top)), p.bottom = Math.ceil(Math.max(r.bottom, p.bottom))
					}(), e.each(u, function (e, t) {
						! function (e) {
							"x" == e.direction ? (e.box.left = p.left - e.labelWidth / 2, e.box.width = l.width - p.left - p.right + e.labelWidth) : (e.box.top = p.top - e.labelHeight / 2, e.box.height = l.height - p.bottom - p.top + e.labelHeight)
						}(t)
					})
				}
				_ = l.width - p.left - p.right, v = l.height - p.bottom - p.top, e.each(r, function (e, t) {
						! function (e) {
							function t(e) {
								return e
							}
							var n, r, a = e.options.transform || t,
								i = e.options.inverseTransform;
							"x" == e.direction ? (n = e.scale = _ / Math.abs(a(e.max) - a(e.min)), r = Math.min(a(e.max), a(e.min))) : (n = -(n = e.scale = v / Math.abs(a(e.max) - a(e.min))), r = Math.max(a(e.max), a(e.min))), e.p2c = a == t ? function (e) {
								return (e - r) * n
							} : function (e) {
								return (a(e) - r) * n
							}, e.c2p = i ? function (e) {
								return i(r + e / n)
							} : function (e) {
								return r + e / n
							}
						}(t)
					}), a && e.each(k(), function (e, t) {
						var n, r, a, i, s, o = t.box,
							d = t.direction + "Axis " + t.direction + t.n + "Axis",
							u = "flot-" + t.direction + "-axis flot-" + t.direction + t.n + "-axis " + d,
							c = t.options.font || "flot-tick-label tickLabel";
						if (l.removeText(u), t.show && 0 != t.ticks.length)
							for (var f = 0; f < t.ticks.length; ++f) !(n = t.ticks[f]).label || n.v < t.min || n.v > t.max || ("x" == t.direction ? (i = "center", r = p.left + t.p2c(n.v), "bottom" == t.position ? a = o.top + o.padding : (a = o.top + o.height - o.padding, s = "bottom")) : (s = "middle", a = p.top + t.p2c(n.v), "left" == t.position ? (r = o.left + o.width - o.padding, i = "right") : r = o.left + o.padding), l.addText(u, r, a, n.label, c, null, null, i, s))
					}),
					function () {
						null != o.legend.container ? e(o.legend.container).html("") : t.find(".legend").remove();
						if (!o.legend.show) return;
						for (var n, r, a = [], i = [], l = !1, d = o.legend.labelFormatter, u = 0; u < s.length; ++u)(n = s[u]).label && (r = d ? d(n.label, n) : n.label) && i.push({
							label: r,
							color: n.color
						});
						if (o.legend.sorted)
							if (e.isFunction(o.legend.sorted)) i.sort(o.legend.sorted);
							else if ("reverse" == o.legend.sorted) i.reverse();
						else {
							var c = "descending" != o.legend.sorted;
							i.sort(function (e, t) {
								return e.label == t.label ? 0 : e.label < t.label != c ? 1 : -1
							})
						}
						for (var u = 0; u < i.length; ++u) {
							var f = i[u];
							u % o.legend.noColumns == 0 && (l && a.push("</tr>"), a.push("<tr>"), l = !0), a.push('<td class="legendColorBox"><div style="border:1px solid ' + o.legend.labelBoxBorderColor + ';padding:1px"><div style="width:4px;height:0;border:5px solid ' + f.color + ';overflow:hidden"></div></div></td><td class="legendLabel">' + f.label + "</td>")
						}
						l && a.push("</tr>");
						if (0 == a.length) return;
						var m = '<table style="font-size:smaller;color:' + o.grid.color + '">' + a.join("") + "</table>";
						if (null != o.legend.container) e(o.legend.container).html(m);
						else {
							var h = "",
								_ = o.legend.position,
								v = o.legend.margin;
							null == v[0] && (v = [v, v]), "n" == _.charAt(0) ? h += "top:" + (v[1] + p.top) + "px;" : "s" == _.charAt(0) && (h += "bottom:" + (v[1] + p.bottom) + "px;"), "e" == _.charAt(1) ? h += "right:" + (v[0] + p.right) + "px;" : "w" == _.charAt(1) && (h += "left:" + (v[0] + p.left) + "px;");
							var y = e('<div class="legend">' + m.replace('style="', 'style="position:absolute;' + h + ";") + "</div>").appendTo(t);
							if (0 != o.legend.backgroundOpacity) {
								var g = o.legend.backgroundColor;
								null == g && ((g = (g = o.grid.backgroundColor) && "string" == typeof g ? e.color.parse(g) : e.color.extract(y, "background-color")).a = 1, g = g.toString());
								var M = y.children();
								e('<div style="position:absolute;width:' + M.width() + "px;height:" + M.height() + "px;" + h + "background-color:" + g + ';"> </div>').prependTo(y).css("opacity", o.legend.backgroundOpacity)
							}
						}
					}()
			}

			function S() {
				l.clear(), M(y.drawBackground, [c]);
				var e = o.grid;
				e.show && e.backgroundColor && (c.save(), c.translate(p.left, p.top), c.fillStyle = V(o.grid.backgroundColor, v, 0, "rgba(255, 255, 255, 0)"), c.fillRect(0, 0, _, v), c.restore()), e.show && !e.aboveData && C();
				for (var t = 0; t < s.length; ++t) M(y.drawSeries, [c, s[t]]), H(s[t]);
				M(y.draw, [c]), e.show && e.aboveData && C(), l.render(), W()
			}

			function j(e, t) {
				for (var n, r, a, i, s = k(), o = 0; o < s.length; ++o)
					if ((n = s[o]).direction == t && (e[i = t + n.n + "axis"] || 1 != n.n || (i = t + "axis"), e[i])) {
						r = e[i].from, a = e[i].to;
						break
					}
				if (e[i] || (n = "x" == t ? m[0] : h[0], r = e[t + "1"], a = e[t + "2"]), null != r && null != a && r > a) {
					var l = r;
					r = a, a = l
				}
				return {
					from: r,
					to: a,
					axis: n
				}
			}

			function C() {
				var t, n, r, a;
				c.save(), c.translate(p.left, p.top);
				var i = o.grid.markings;
				if (i)
					for (e.isFunction(i) && ((n = g.getAxes()).xmin = n.xaxis.min, n.xmax = n.xaxis.max, n.ymin = n.yaxis.min, n.ymax = n.yaxis.max, i = i(n)), t = 0; t < i.length; ++t) {
						var s = i[t],
							l = j(s, "x"),
							d = j(s, "y");
						if (null == l.from && (l.from = l.axis.min), null == l.to && (l.to = l.axis.max), null == d.from && (d.from = d.axis.min), null == d.to && (d.to = d.axis.max), !(l.to < l.axis.min || l.from > l.axis.max || d.to < d.axis.min || d.from > d.axis.max)) {
							l.from = Math.max(l.from, l.axis.min), l.to = Math.min(l.to, l.axis.max), d.from = Math.max(d.from, d.axis.min), d.to = Math.min(d.to, d.axis.max);
							var u = l.from === l.to,
								f = d.from === d.to;
							if (!u || !f)
								if (l.from = Math.floor(l.axis.p2c(l.from)), l.to = Math.floor(l.axis.p2c(l.to)), d.from = Math.floor(d.axis.p2c(d.from)), d.to = Math.floor(d.axis.p2c(d.to)), u || f) {
									var m = s.lineWidth || o.grid.markingsLineWidth,
										h = m % 2 ? .5 : 0;
									c.beginPath(), c.strokeStyle = s.color || o.grid.markingsColor, c.lineWidth = m, u ? (c.moveTo(l.to + h, d.from), c.lineTo(l.to + h, d.to)) : (c.moveTo(l.from, d.to + h), c.lineTo(l.to, d.to + h)), c.stroke()
								} else c.fillStyle = s.color || o.grid.markingsColor, c.fillRect(l.from, d.to, l.to - l.from, d.from - d.to)
						}
					}
				n = k(), r = o.grid.borderWidth;
				for (var y = 0; y < n.length; ++y) {
					var M, b, L, w, Y = n[y],
						x = Y.box,
						T = Y.tickLength;
					if (Y.show && 0 != Y.ticks.length) {
						for (c.lineWidth = 1, "x" == Y.direction ? (M = 0, b = "full" == T ? "top" == Y.position ? 0 : v : x.top - p.top + ("top" == Y.position ? x.height : 0)) : (b = 0, M = "full" == T ? "left" == Y.position ? 0 : _ : x.left - p.left + ("left" == Y.position ? x.width : 0)), Y.innermost || (c.strokeStyle = Y.options.color, c.beginPath(), L = w = 0, "x" == Y.direction ? L = _ + 1 : w = v + 1, 1 == c.lineWidth && ("x" == Y.direction ? b = Math.floor(b) + .5 : M = Math.floor(M) + .5), c.moveTo(M, b), c.lineTo(M + L, b + w), c.stroke()), c.strokeStyle = Y.options.tickColor, c.beginPath(), t = 0; t < Y.ticks.length; ++t) {
							var D = Y.ticks[t].v;
							L = w = 0, isNaN(D) || D < Y.min || D > Y.max || "full" == T && ("object" == typeof r && r[Y.position] > 0 || r > 0) && (D == Y.min || D == Y.max) || ("x" == Y.direction ? (M = Y.p2c(D), w = "full" == T ? -v : T, "top" == Y.position && (w = -w)) : (b = Y.p2c(D), L = "full" == T ? -_ : T, "left" == Y.position && (L = -L)), 1 == c.lineWidth && ("x" == Y.direction ? M = Math.floor(M) + .5 : b = Math.floor(b) + .5), c.moveTo(M, b), c.lineTo(M + L, b + w))
						}
						c.stroke()
					}
				}
				r && (a = o.grid.borderColor, "object" == typeof r || "object" == typeof a ? ("object" != typeof r && (r = {
					top: r,
					right: r,
					bottom: r,
					left: r
				}), "object" != typeof a && (a = {
					top: a,
					right: a,
					bottom: a,
					left: a
				}), r.top > 0 && (c.strokeStyle = a.top, c.lineWidth = r.top, c.beginPath(), c.moveTo(0 - r.left, 0 - r.top / 2), c.lineTo(_, 0 - r.top / 2), c.stroke()), r.right > 0 && (c.strokeStyle = a.right, c.lineWidth = r.right, c.beginPath(), c.moveTo(_ + r.right / 2, 0 - r.top), c.lineTo(_ + r.right / 2, v), c.stroke()), r.bottom > 0 && (c.strokeStyle = a.bottom, c.lineWidth = r.bottom, c.beginPath(), c.moveTo(_ + r.right, v + r.bottom / 2), c.lineTo(0, v + r.bottom / 2), c.stroke()), r.left > 0 && (c.strokeStyle = a.left, c.lineWidth = r.left, c.beginPath(), c.moveTo(0 - r.left / 2, v + r.bottom), c.lineTo(0 - r.left / 2, 0), c.stroke())) : (c.lineWidth = r, c.strokeStyle = o.grid.borderColor, c.strokeRect(-r / 2, -r / 2, _ + r, v + r))), c.restore()
			}

			function H(e) {
				e.lines.show && function (e) {
					function t(e, t, n, r, a) {
						var i = e.points,
							s = e.pointsize,
							o = null,
							l = null;
						c.beginPath();
						for (var d = s; d < i.length; d += s) {
							var u = i[d - s],
								f = i[d - s + 1],
								m = i[d],
								h = i[d + 1];
							if (null != u && null != m) {
								if (f <= h && f < a.min) {
									if (h < a.min) continue;
									u = (a.min - f) / (h - f) * (m - u) + u, f = a.min
								} else if (h <= f && h < a.min) {
									if (f < a.min) continue;
									m = (a.min - f) / (h - f) * (m - u) + u, h = a.min
								}
								if (f >= h && f > a.max) {
									if (h > a.max) continue;
									u = (a.max - f) / (h - f) * (m - u) + u, f = a.max
								} else if (h >= f && h > a.max) {
									if (f > a.max) continue;
									m = (a.max - f) / (h - f) * (m - u) + u, h = a.max
								}
								if (u <= m && u < r.min) {
									if (m < r.min) continue;
									f = (r.min - u) / (m - u) * (h - f) + f, u = r.min
								} else if (m <= u && m < r.min) {
									if (u < r.min) continue;
									h = (r.min - u) / (m - u) * (h - f) + f, m = r.min
								}
								if (u >= m && u > r.max) {
									if (m > r.max) continue;
									f = (r.max - u) / (m - u) * (h - f) + f, u = r.max
								} else if (m >= u && m > r.max) {
									if (u > r.max) continue;
									h = (r.max - u) / (m - u) * (h - f) + f, m = r.max
								}
								u == o && f == l || c.moveTo(r.p2c(u) + t, a.p2c(f) + n), o = m, l = h, c.lineTo(r.p2c(m) + t, a.p2c(h) + n)
							}
						}
						c.stroke()
					}
					c.save(), c.translate(p.left, p.top), c.lineJoin = "round";
					var n = e.lines.lineWidth,
						r = e.shadowSize;
					if (n > 0 && r > 0) {
						c.lineWidth = r, c.strokeStyle = "rgba(0,0,0,0.1)";
						var a = Math.PI / 18;
						t(e.datapoints, Math.sin(a) * (n / 2 + r / 2), Math.cos(a) * (n / 2 + r / 2), e.xaxis, e.yaxis), c.lineWidth = r / 2, t(e.datapoints, Math.sin(a) * (n / 2 + r / 4), Math.cos(a) * (n / 2 + r / 4), e.xaxis, e.yaxis)
					}
					c.lineWidth = n, c.strokeStyle = e.color;
					var i = E(e.lines, e.color, 0, v);
					i && (c.fillStyle = i, function (e, t, n) {
						var r = e.points,
							a = e.pointsize,
							i = Math.min(Math.max(0, n.min), n.max),
							s = 0,
							o = !1,
							l = 1,
							d = 0,
							u = 0;
						for (; !(a > 0 && s > r.length + a);) {
							var f = r[(s += a) - a],
								m = r[s - a + l],
								h = r[s],
								p = r[s + l];
							if (o) {
								if (a > 0 && null != f && null == h) {
									u = s, a = -a, l = 2;
									continue
								}
								if (a < 0 && s == d + a) {
									c.fill(), o = !1, l = 1, s = d = u + (a = -a);
									continue
								}
							}
							if (null != f && null != h) {
								if (f <= h && f < t.min) {
									if (h < t.min) continue;
									m = (t.min - f) / (h - f) * (p - m) + m, f = t.min
								} else if (h <= f && h < t.min) {
									if (f < t.min) continue;
									p = (t.min - f) / (h - f) * (p - m) + m, h = t.min
								}
								if (f >= h && f > t.max) {
									if (h > t.max) continue;
									m = (t.max - f) / (h - f) * (p - m) + m, f = t.max
								} else if (h >= f && h > t.max) {
									if (f > t.max) continue;
									p = (t.max - f) / (h - f) * (p - m) + m, h = t.max
								}
								if (o || (c.beginPath(), c.moveTo(t.p2c(f), n.p2c(i)), o = !0), m >= n.max && p >= n.max) c.lineTo(t.p2c(f), n.p2c(n.max)), c.lineTo(t.p2c(h), n.p2c(n.max));
								else if (m <= n.min && p <= n.min) c.lineTo(t.p2c(f), n.p2c(n.min)), c.lineTo(t.p2c(h), n.p2c(n.min));
								else {
									var _ = f,
										v = h;
									m <= p && m < n.min && p >= n.min ? (f = (n.min - m) / (p - m) * (h - f) + f, m = n.min) : p <= m && p < n.min && m >= n.min && (h = (n.min - m) / (p - m) * (h - f) + f, p = n.min), m >= p && m > n.max && p <= n.max ? (f = (n.max - m) / (p - m) * (h - f) + f, m = n.max) : p >= m && p > n.max && m <= n.max && (h = (n.max - m) / (p - m) * (h - f) + f, p = n.max), f != _ && c.lineTo(t.p2c(_), n.p2c(m)), c.lineTo(t.p2c(f), n.p2c(m)), c.lineTo(t.p2c(h), n.p2c(p)), h != v && (c.lineTo(t.p2c(h), n.p2c(p)), c.lineTo(t.p2c(v), n.p2c(p)))
								}
							}
						}
					}(e.datapoints, e.xaxis, e.yaxis));
					n > 0 && t(e.datapoints, 0, 0, e.xaxis, e.yaxis);
					c.restore()
				}(e), e.bars.show && function (e) {
					var t;
					switch (c.save(), c.translate(p.left, p.top), c.lineWidth = e.bars.lineWidth, c.strokeStyle = e.color, e.bars.align) {
						case "left":
							t = 0;
							break;
						case "right":
							t = -e.bars.barWidth;
							break;
						default:
							t = -e.bars.barWidth / 2
					}
					var n = e.bars.fill ? function (t, n) {
						return E(e.bars, e.color, t, n)
					} : null;
					(function (t, n, r, a, i, s) {
						for (var o = t.points, l = t.pointsize, d = 0; d < o.length; d += l) null != o[d] && A(o[d], o[d + 1], o[d + 2], n, r, a, i, s, c, e.bars.horizontal, e.bars.lineWidth)
					})(e.datapoints, t, t + e.bars.barWidth, n, e.xaxis, e.yaxis), c.restore()
				}(e), e.points.show && function (e) {
					function t(e, t, n, r, a, i, s, o) {
						for (var l = e.points, d = e.pointsize, u = 0; u < l.length; u += d) {
							var f = l[u],
								m = l[u + 1];
							null == f || f < i.min || f > i.max || m < s.min || m > s.max || (c.beginPath(), f = i.p2c(f), m = s.p2c(m) + r, "circle" == o ? c.arc(f, m, t, 0, a ? Math.PI : 2 * Math.PI, !1) : o(c, f, m, t, a), c.closePath(), n && (c.fillStyle = n, c.fill()), c.stroke())
						}
					}
					c.save(), c.translate(p.left, p.top);
					var n = e.points.lineWidth,
						r = e.shadowSize,
						a = e.points.radius,
						i = e.points.symbol;
					0 == n && (n = 1e-4);
					if (n > 0 && r > 0) {
						var s = r / 2;
						c.lineWidth = s, c.strokeStyle = "rgba(0,0,0,0.1)", t(e.datapoints, a, null, s + s / 2, !0, e.xaxis, e.yaxis, i), c.strokeStyle = "rgba(0,0,0,0.2)", t(e.datapoints, a, null, s / 2, !0, e.xaxis, e.yaxis, i)
					}
					c.lineWidth = n, c.strokeStyle = e.color, t(e.datapoints, a, E(e.points, e.color), 0, !1, e.xaxis, e.yaxis, i), c.restore()
				}(e)
			}

			function A(e, t, n, r, a, i, s, o, l, d, u) {
				var c, f, m, h, p, _, v, y, g;
				d ? (y = _ = v = !0, p = !1, h = t + r, m = t + a, (f = e) < (c = n) && (g = f, f = c, c = g, p = !0, _ = !1)) : (p = _ = v = !0, y = !1, c = e + r, f = e + a, (h = t) < (m = n) && (g = h, h = m, m = g, y = !0, v = !1)), f < s.min || c > s.max || h < o.min || m > o.max || (c < s.min && (c = s.min, p = !1), f > s.max && (f = s.max, _ = !1), m < o.min && (m = o.min, y = !1), h > o.max && (h = o.max, v = !1), c = s.p2c(c), m = o.p2c(m), f = s.p2c(f), h = o.p2c(h), i && (l.fillStyle = i(m, h), l.fillRect(c, h, f - c, m - h)), u > 0 && (p || _ || v || y) && (l.beginPath(), l.moveTo(c, m), p ? l.lineTo(c, h) : l.moveTo(c, h), v ? l.lineTo(f, h) : l.moveTo(f, h), _ ? l.lineTo(f, m) : l.moveTo(f, m), y ? l.lineTo(c, m) : l.moveTo(c, m), l.stroke()))
			}

			function E(t, n, r, a) {
				var i = t.fill;
				if (!i) return null;
				if (t.fillColor) return V(t.fillColor, r, a, n);
				var s = e.color.parse(n);
				return s.a = "number" == typeof i ? i : .4, s.normalize(), s.toString()
			}
			g.setData = b, g.setupGrid = D, g.draw = S, g.getPlaceholder = function () {
					return t
				}, g.getCanvas = function () {
					return l.element
				}, g.getPlotOffset = function () {
					return p
				}, g.width = function () {
					return _
				}, g.height = function () {
					return v
				}, g.offset = function () {
					var e = u.offset();
					return e.left += p.left, e.top += p.top, e
				}, g.getData = function () {
					return s
				}, g.getAxes = function () {
					var t = {};
					return e.each(m.concat(h), function (e, n) {
						n && (t[n.direction + (1 != n.n ? n.n : "") + "axis"] = n)
					}), t
				}, g.getXAxes = function () {
					return m
				}, g.getYAxes = function () {
					return h
				}, g.c2p = w, g.p2c = function (e) {
					var t, n, r, a = {};
					for (t = 0; t < m.length; ++t)
						if ((n = m[t]) && n.used && (r = "x" + n.n, null == e[r] && 1 == n.n && (r = "x"), null != e[r])) {
							a.left = n.p2c(e[r]);
							break
						}
					for (t = 0; t < h.length; ++t)
						if ((n = h[t]) && n.used && (r = "y" + n.n, null == e[r] && 1 == n.n && (r = "y"), null != e[r])) {
							a.top = n.p2c(e[r]);
							break
						}
					return a
				}, g.getOptions = function () {
					return o
				}, g.highlight = z, g.unhighlight = U, g.triggerRedrawOverlay = W, g.pointOffset = function (e) {
					return {
						left: parseInt(m[L(e, "x") - 1].p2c(+e.x) + p.left, 10),
						top: parseInt(h[L(e, "y") - 1].p2c(+e.y) + p.top, 10)
					}
				}, g.shutdown = x, g.destroy = function () {
					x(), t.removeData("plot").empty(), s = [], o = null, l = null, d = null, u = null, c = null, f = null, m = [], h = [], y = null, P = [], g = null
				}, g.resize = function () {
					var e = t.width(),
						n = t.height();
					l.resize(e, n), d.resize(e, n)
				}, g.hooks = y,
				function () {
					for (var t = {
							Canvas: n
						}, r = 0; r < i.length; ++r) {
						var a = i[r];
						a.init(g, t), a.options && e.extend(!0, o, a.options)
					}
				}(),
				function (n) {
					e.extend(!0, o, n), n && n.colors && (o.colors = n.colors);
					null == o.xaxis.color && (o.xaxis.color = e.color.parse(o.grid.color).scale("a", .22).toString());
					null == o.yaxis.color && (o.yaxis.color = e.color.parse(o.grid.color).scale("a", .22).toString());
					null == o.xaxis.tickColor && (o.xaxis.tickColor = o.grid.tickColor || o.xaxis.color);
					null == o.yaxis.tickColor && (o.yaxis.tickColor = o.grid.tickColor || o.yaxis.color);
					null == o.grid.borderColor && (o.grid.borderColor = o.grid.color);
					null == o.grid.tickColor && (o.grid.tickColor = e.color.parse(o.grid.color).scale("a", .22).toString());
					var r, a, i, s = t.css("font-size"),
						l = s ? +s.replace("px", "") : 13,
						d = {
							style: t.css("font-style"),
							size: Math.round(.8 * l),
							variant: t.css("font-variant"),
							weight: t.css("font-weight"),
							family: t.css("font-family")
						};
					for (i = o.xaxes.length || 1, r = 0; r < i; ++r)(a = o.xaxes[r]) && !a.tickColor && (a.tickColor = a.color), a = e.extend(!0, {}, o.xaxis, a), o.xaxes[r] = a, a.font && (a.font = e.extend({}, d, a.font), a.font.color || (a.font.color = a.color), a.font.lineHeight || (a.font.lineHeight = Math.round(1.15 * a.font.size)));
					for (i = o.yaxes.length || 1, r = 0; r < i; ++r)(a = o.yaxes[r]) && !a.tickColor && (a.tickColor = a.color), a = e.extend(!0, {}, o.yaxis, a), o.yaxes[r] = a, a.font && (a.font = e.extend({}, d, a.font), a.font.color || (a.font.color = a.color), a.font.lineHeight || (a.font.lineHeight = Math.round(1.15 * a.font.size)));
					o.xaxis.noTicks && null == o.xaxis.ticks && (o.xaxis.ticks = o.xaxis.noTicks);
					o.yaxis.noTicks && null == o.yaxis.ticks && (o.yaxis.ticks = o.yaxis.noTicks);
					o.x2axis && (o.xaxes[1] = e.extend(!0, {}, o.xaxis, o.x2axis), o.xaxes[1].position = "top", null == o.x2axis.min && (o.xaxes[1].min = null), null == o.x2axis.max && (o.xaxes[1].max = null));
					o.y2axis && (o.yaxes[1] = e.extend(!0, {}, o.yaxis, o.y2axis), o.yaxes[1].position = "right", null == o.y2axis.min && (o.yaxes[1].min = null), null == o.y2axis.max && (o.yaxes[1].max = null));
					o.grid.coloredAreas && (o.grid.markings = o.grid.coloredAreas);
					o.grid.coloredAreasColor && (o.grid.markingsColor = o.grid.coloredAreasColor);
					o.lines && e.extend(!0, o.series.lines, o.lines);
					o.points && e.extend(!0, o.series.points, o.points);
					o.bars && e.extend(!0, o.series.bars, o.bars);
					null != o.shadowSize && (o.series.shadowSize = o.shadowSize);
					null != o.highlightColor && (o.series.highlightColor = o.highlightColor);
					for (r = 0; r < o.xaxes.length; ++r) Y(m, r + 1).options = o.xaxes[r];
					for (r = 0; r < o.yaxes.length; ++r) Y(h, r + 1).options = o.yaxes[r];
					for (var u in y) o.hooks[u] && o.hooks[u].length && (y[u] = y[u].concat(o.hooks[u]));
					M(y.processOptions, [o])
				}(a),
				function () {
					t.css("padding", 0).children().filter(function () {
						return !e(this).hasClass("flot-overlay") && !e(this).hasClass("flot-base")
					}).remove(), "static" == t.css("position") && t.css("position", "relative");
					l = new n("flot-base", t), d = new n("flot-overlay", t), c = l.context, f = d.context, u = e(d.element).unbind();
					var r = t.data("plot");
					r && (r.shutdown(), d.clear());
					t.data("plot", g)
				}(), b(r), D(), S(),
				function () {
					o.grid.hoverable && (u.mousemove($), u.bind("mouseleave", N));
					o.grid.clickable && u.click(R);
					M(y.bindEvents, [u])
				}();
			var P = [],
				O = null;

			function $(e) {
				o.grid.hoverable && F("plothover", e, function (e) {
					return 0 != e.hoverable
				})
			}

			function N(e) {
				o.grid.hoverable && F("plothover", e, function (e) {
					return !1
				})
			}

			function R(e) {
				F("plotclick", e, function (e) {
					return 0 != e.clickable
				})
			}

			function F(e, n, r) {
				var a = u.offset(),
					i = n.pageX - a.left - p.left,
					l = n.pageY - a.top - p.top,
					d = w({
						left: i,
						top: l
					});
				d.pageX = n.pageX, d.pageY = n.pageY;
				var c = function (e, t, n) {
					var r, a, i, l = o.grid.mouseActiveRadius,
						d = l * l + 1,
						u = null;
					for (r = s.length - 1; r >= 0; --r)
						if (n(s[r])) {
							var c = s[r],
								f = c.xaxis,
								m = c.yaxis,
								h = c.datapoints.points,
								p = f.c2p(e),
								_ = m.c2p(t),
								v = l / f.scale,
								y = l / m.scale;
							if (i = c.datapoints.pointsize, f.options.inverseTransform && (v = Number.MAX_VALUE), m.options.inverseTransform && (y = Number.MAX_VALUE), c.lines.show || c.points.show)
								for (a = 0; a < h.length; a += i) {
									var g = h[a],
										M = h[a + 1];
									if (null != g && !(g - p > v || g - p < -v || M - _ > y || M - _ < -y)) {
										var b = Math.abs(f.p2c(g) - e),
											L = Math.abs(m.p2c(M) - t),
											k = b * b + L * L;
										k < d && (d = k, u = [r, a / i])
									}
								}
							if (c.bars.show && !u) {
								var w, Y;
								switch (c.bars.align) {
									case "left":
										w = 0;
										break;
									case "right":
										w = -c.bars.barWidth;
										break;
									default:
										w = -c.bars.barWidth / 2
								}
								for (Y = w + c.bars.barWidth, a = 0; a < h.length; a += i) {
									g = h[a], M = h[a + 1];
									var x = h[a + 2];
									null != g && (s[r].bars.horizontal ? p <= Math.max(x, g) && p >= Math.min(x, g) && _ >= M + w && _ <= M + Y : p >= g + w && p <= g + Y && _ >= Math.min(x, M) && _ <= Math.max(x, M)) && (u = [r, a / i])
								}
							}
						}
					return u ? (r = u[0], a = u[1], i = s[r].datapoints.pointsize, {
						datapoint: s[r].datapoints.points.slice(a * i, (a + 1) * i),
						dataIndex: a,
						series: s[r],
						seriesIndex: r
					}) : null
				}(i, l, r);
				if (c && (c.pageX = parseInt(c.series.xaxis.p2c(c.datapoint[0]) + a.left + p.left, 10), c.pageY = parseInt(c.series.yaxis.p2c(c.datapoint[1]) + a.top + p.top, 10)), o.grid.autoHighlight) {
					for (var f = 0; f < P.length; ++f) {
						var m = P[f];
						m.auto != e || c && m.series == c.series && m.point[0] == c.datapoint[0] && m.point[1] == c.datapoint[1] || U(m.series, m.point)
					}
					c && z(c.series, c.datapoint, e)
				}
				t.trigger(e, [d, c])
			}

			function W() {
				var e = o.interaction.redrawOverlayInterval; - 1 != e ? O || (O = setTimeout(I, e)) : I()
			}

			function I() {
				var e, t;
				for (O = null, f.save(), d.clear(), f.translate(p.left, p.top), e = 0; e < P.length; ++e)(t = P[e]).series.bars.show ? B(t.series, t.point) : J(t.series, t.point);
				f.restore(), M(y.drawOverlay, [f])
			}

			function z(e, t, n) {
				if ("number" == typeof e && (e = s[e]), "number" == typeof t) {
					var r = e.datapoints.pointsize;
					t = e.datapoints.points.slice(r * t, r * (t + 1))
				}
				var a = q(e, t); - 1 == a ? (P.push({
					series: e,
					point: t,
					auto: n
				}), W()) : n || (P[a].auto = !1)
			}

			function U(e, t) {
				if (null == e && null == t) return P = [], void W();
				if ("number" == typeof e && (e = s[e]), "number" == typeof t) {
					var n = e.datapoints.pointsize;
					t = e.datapoints.points.slice(n * t, n * (t + 1))
				}
				var r = q(e, t); - 1 != r && (P.splice(r, 1), W())
			}

			function q(e, t) {
				for (var n = 0; n < P.length; ++n) {
					var r = P[n];
					if (r.series == e && r.point[0] == t[0] && r.point[1] == t[1]) return n
				}
				return -1
			}

			function J(t, n) {
				var r = n[0],
					a = n[1],
					i = t.xaxis,
					s = t.yaxis,
					o = "string" == typeof t.highlightColor ? t.highlightColor : e.color.parse(t.color).scale("a", .5).toString();
				if (!(r < i.min || r > i.max || a < s.min || a > s.max)) {
					var l = t.points.radius + t.points.lineWidth / 2;
					f.lineWidth = l, f.strokeStyle = o;
					var d = 1.5 * l;
					r = i.p2c(r), a = s.p2c(a), f.beginPath(), "circle" == t.points.symbol ? f.arc(r, a, d, 0, 2 * Math.PI, !1) : t.points.symbol(f, r, a, d, !1), f.closePath(), f.stroke()
				}
			}

			function B(t, n) {
				var r, a = "string" == typeof t.highlightColor ? t.highlightColor : e.color.parse(t.color).scale("a", .5).toString(),
					i = a;
				switch (t.bars.align) {
					case "left":
						r = 0;
						break;
					case "right":
						r = -t.bars.barWidth;
						break;
					default:
						r = -t.bars.barWidth / 2
				}
				f.lineWidth = t.bars.lineWidth, f.strokeStyle = a, A(n[0], n[1], n[2] || 0, r, r + t.bars.barWidth, function () {
					return i
				}, t.xaxis, t.yaxis, f, t.bars.horizontal, t.bars.lineWidth)
			}

			function V(t, n, r, a) {
				if ("string" == typeof t) return t;
				for (var i = c.createLinearGradient(0, r, 0, n), s = 0, o = t.colors.length; s < o; ++s) {
					var l = t.colors[s];
					if ("string" != typeof l) {
						var d = e.color.parse(a);
						null != l.brightness && (d = d.scale("rgb", l.brightness)), null != l.opacity && (d.a *= l.opacity), l = d.toString()
					}
					i.addColorStop(s / (o - 1), l)
				}
				return i
			}
		}
		e.fn.detach || (e.fn.detach = function () {
			return this.each(function () {
				this.parentNode && this.parentNode.removeChild(this)
			})
		}), n.prototype.resize = function (e, t) {
			if (e <= 0 || t <= 0) throw new Error("Invalid dimensions for plot, width = " + e + ", height = " + t);
			var n = this.element,
				r = this.context,
				a = this.pixelRatio;
			this.width != e && (n.width = e * a, n.style.width = e + "px", this.width = e), this.height != t && (n.height = t * a, n.style.height = t + "px", this.height = t), r.restore(), r.save(), r.scale(a, a)
		}, n.prototype.clear = function () {
			this.context.clearRect(0, 0, this.width, this.height)
		}, n.prototype.render = function () {
			var e = this._textCache;
			for (var n in e)
				if (t.call(e, n)) {
					var r = this.getTextLayer(n),
						a = e[n];
					for (var i in r.hide(), a)
						if (t.call(a, i)) {
							var s = a[i];
							for (var o in s)
								if (t.call(s, o)) {
									for (var l, d = s[o].positions, u = 0; l = d[u]; u++) l.active ? l.rendered || (r.append(l.element), l.rendered = !0) : (d.splice(u--, 1), l.rendered && l.element.detach());
									0 == d.length && delete s[o]
								}
						}
					r.show()
				}
		}, n.prototype.getTextLayer = function (t) {
			var n = this.text[t];
			return null == n && (null == this.textContainer && (this.textContainer = e("<div class='flot-text'></div>").css({
				position: "absolute",
				top: 0,
				left: 0,
				bottom: 0,
				right: 0,
				"font-size": "smaller",
				color: "#545454"
			}).insertAfter(this.element)), n = this.text[t] = e("<div></div>").addClass(t).css({
				position: "absolute",
				top: 0,
				left: 0,
				bottom: 0,
				right: 0
			}).appendTo(this.textContainer)), n
		}, n.prototype.getTextInfo = function (t, n, r, a, i) {
			var s, o, l, d;
			if (n = "" + n, s = "object" == typeof r ? r.style + " " + r.variant + " " + r.weight + " " + r.size + "px/" + r.lineHeight + "px " + r.family : r, null == (o = this._textCache[t]) && (o = this._textCache[t] = {}), null == (l = o[s]) && (l = o[s] = {}), null == (d = l[n])) {
				var u = e("<div></div>").html(n).css({
					position: "absolute",
					"max-width": i,
					top: -9999
				}).appendTo(this.getTextLayer(t));
				"object" == typeof r ? u.css({
					font: s,
					color: r.color
				}) : "string" == typeof r && u.addClass(r), d = l[n] = {
					width: u.outerWidth(!0),
					height: u.outerHeight(!0),
					element: u,
					positions: []
				}, u.detach()
			}
			return d
		}, n.prototype.addText = function (e, t, n, r, a, i, s, o, l) {
			var d = this.getTextInfo(e, r, a, i, s),
				u = d.positions;
			"center" == o ? t -= d.width / 2 : "right" == o && (t -= d.width), "middle" == l ? n -= d.height / 2 : "bottom" == l && (n -= d.height);
			for (var c, f = 0; c = u[f]; f++)
				if (c.x == t && c.y == n) return void(c.active = !0);
			c = {
				active: !0,
				rendered: !1,
				element: u.length ? d.element.clone() : d.element,
				x: t,
				y: n
			}, u.push(c), c.element.css({
				top: Math.round(n),
				left: Math.round(t),
				"text-align": o
			})
		}, n.prototype.removeText = function (e, n, r, a, i, s) {
			if (null == a) {
				var o = this._textCache[e];
				if (null != o)
					for (var l in o)
						if (t.call(o, l)) {
							var d = o[l];
							for (var u in d)
								if (t.call(d, u))
									for (var c = d[u].positions, f = 0; m = c[f]; f++) m.active = !1
						}
			} else {
				var m;
				for (c = this.getTextInfo(e, a, i, s).positions, f = 0; m = c[f]; f++) m.x == n && m.y == r && (m.active = !1)
			}
		}, e.plot = function (t, n, a) {
			return new r(e(t), n, a, e.plot.plugins)
		}, e.plot.version = "0.8.3", e.plot.plugins = [], e.fn.plot = function (t, n) {
			return this.each(function () {
				e.plot(this, t, n)
			})
		}
	}(jQuery)
}, function (e, t) {
	! function (e) {
		var t = 10,
			n = .95;
		var r = {
			series: {
				pie: {
					show: !1,
					radius: "auto",
					innerRadius: 0,
					startAngle: 1.5,
					tilt: 1,
					shadow: {
						left: 5,
						top: 15,
						alpha: .02
					},
					offset: {
						top: 0,
						left: "auto"
					},
					stroke: {
						color: "#fff",
						width: 1
					},
					label: {
						show: "auto",
						formatter: function (e, t) {
							return "<div style='font-size:x-small;text-align:center;padding:2px;color:" + t.color + ";'>" + e + "<br/>" + Math.round(t.percent) + "%</div>"
						},
						radius: 1,
						background: {
							color: null,
							opacity: 0
						},
						threshold: 0
					},
					combine: {
						threshold: -1,
						color: null,
						label: "Other"
					},
					highlight: {
						opacity: .5
					}
				}
			}
		};
		e.plot.plugins.push({
			init: function (r) {
				var a = null,
					i = null,
					s = null,
					o = null,
					l = null,
					d = null,
					u = !1,
					c = null,
					f = [];

				function m(t, n, r) {
					u || (u = !0, a = t.getCanvas(), i = e(a).parent(), s = t.getOptions(), t.setData(function (t) {
						for (var n = 0, r = 0, a = 0, i = s.series.pie.combine.color, o = [], l = 0; l < t.length; ++l) {
							var d = t[l].data;
							e.isArray(d) && 1 == d.length && (d = d[0]), e.isArray(d) ? !isNaN(parseFloat(d[1])) && isFinite(d[1]) ? d[1] = +d[1] : d[1] = 0 : d = !isNaN(parseFloat(d)) && isFinite(d) ? [1, +d] : [1, 0], t[l].data = [d]
						}
						for (var l = 0; l < t.length; ++l) n += t[l].data[0][1];
						for (var l = 0; l < t.length; ++l) {
							var d = t[l].data[0][1];
							d / n <= s.series.pie.combine.threshold && (r += d, a++, i || (i = t[l].color))
						}
						for (var l = 0; l < t.length; ++l) {
							var d = t[l].data[0][1];
							(a < 2 || d / n > s.series.pie.combine.threshold) && o.push(e.extend(t[l], {
								data: [
									[1, d]
								],
								color: t[l].color,
								label: t[l].label,
								angle: d * Math.PI * 2 / n,
								percent: d / (n / 100)
							}))
						}
						return a > 1 && o.push({
							data: [
								[1, r]
							],
							color: i,
							label: s.series.pie.combine.label,
							angle: r * Math.PI * 2 / n,
							percent: r / (n / 100)
						}), o
					}(t.getData())))
				}

				function h(r, a) {
					if (i) {
						var f = r.getPlaceholder().width(),
							m = r.getPlaceholder().height(),
							h = i.children().filter(".legend").children().width() || 0;
						c = a, u = !1, o = Math.min(f, m / s.series.pie.tilt) / 2, d = m / 2 + s.series.pie.offset.top, l = f / 2, "auto" == s.series.pie.offset.left ? (s.legend.position.match("w") ? l += h / 2 : l -= h / 2, l < o ? l = o : l > f - o && (l = f - o)) : l += s.series.pie.offset.left;
						var _ = r.getData(),
							v = 0;
						do {
							v > 0 && (o *= n), v += 1, y(), s.series.pie.tilt <= .8 && g()
						} while (!M() && v < t);
						v >= t && (y(), i.prepend("<div class='error'>Could not draw pie with labels contained inside canvas</div>")), r.setSeries && r.insertLegend && (r.setSeries(_), r.insertLegend())
					}

					function y() {
						c.clearRect(0, 0, f, m), i.children().filter(".pieLabel, .pieLabelBackground").remove()
					}

					function g() {
						var e = s.series.pie.shadow.left,
							t = s.series.pie.shadow.top,
							n = s.series.pie.shadow.alpha,
							r = s.series.pie.radius > 1 ? s.series.pie.radius : o * s.series.pie.radius;
						if (!(r >= f / 2 - e || r * s.series.pie.tilt >= m / 2 - t || r <= 10)) {
							c.save(), c.translate(e, t), c.globalAlpha = n, c.fillStyle = "#000", c.translate(l, d), c.scale(1, s.series.pie.tilt);
							for (var a = 1; a <= 10; a++) c.beginPath(), c.arc(0, 0, r, 0, 2 * Math.PI, !1), c.fill(), r -= a;
							c.restore()
						}
					}

					function M() {
						var t = Math.PI * s.series.pie.startAngle,
							n = s.series.pie.radius > 1 ? s.series.pie.radius : o * s.series.pie.radius;
						c.save(), c.translate(l, d), c.scale(1, s.series.pie.tilt), c.save();
						for (var r = t, a = 0; a < _.length; ++a) _[a].startAngle = r, u(_[a].angle, _[a].color, !0);
						if (c.restore(), s.series.pie.stroke.width > 0) {
							for (c.save(), c.lineWidth = s.series.pie.stroke.width, r = t, a = 0; a < _.length; ++a) u(_[a].angle, s.series.pie.stroke.color, !1);
							c.restore()
						}
						return p(c), c.restore(), !s.series.pie.label.show || function () {
							for (var n = t, r = s.series.pie.label.radius > 1 ? s.series.pie.label.radius : o * s.series.pie.label.radius, a = 0; a < _.length; ++a) {
								if (_[a].percent >= 100 * s.series.pie.label.threshold && !u(_[a], n, a)) return !1;
								n += _[a].angle
							}
							return !0;

							function u(t, n, a) {
								if (0 == t.data[0][1]) return !0;
								var o, u = s.legend.labelFormatter,
									c = s.series.pie.label.formatter;
								o = u ? u(t.label, t) : t.label, c && (o = c(o, t));
								var h = (n + t.angle + n) / 2,
									p = l + Math.round(Math.cos(h) * r),
									_ = d + Math.round(Math.sin(h) * r) * s.series.pie.tilt,
									v = "<span class='pieLabel' id='pieLabel" + a + "' style='position:absolute;top:" + _ + "px;left:" + p + "px;'>" + o + "</span>";
								i.append(v);
								var y = i.children("#pieLabel" + a),
									g = _ - y.height() / 2,
									M = p - y.width() / 2;
								if (y.css("top", g), y.css("left", M), 0 - g > 0 || 0 - M > 0 || m - (g + y.height()) < 0 || f - (M + y.width()) < 0) return !1;
								if (0 != s.series.pie.label.background.opacity) {
									var b = s.series.pie.label.background.color;
									null == b && (b = t.color);
									var L = "top:" + g + "px;left:" + M + "px;";
									e("<div class='pieLabelBackground' style='position:absolute;width:" + y.width() + "px;height:" + y.height() + "px;" + L + "background-color:" + b + ";'></div>").css("opacity", s.series.pie.label.background.opacity).insertBefore(y)
								}
								return !0
							}
						}();

						function u(e, t, a) {
							e <= 0 || isNaN(e) || (a ? c.fillStyle = t : (c.strokeStyle = t, c.lineJoin = "round"), c.beginPath(), Math.abs(e - 2 * Math.PI) > 1e-9 && c.moveTo(0, 0), c.arc(0, 0, n, r, r + e / 2, !1), c.arc(0, 0, n, r + e / 2, r + e, !1), c.closePath(), r += e, a ? c.fill() : c.stroke())
						}
					}
				}

				function p(e) {
					if (s.series.pie.innerRadius > 0) {
						e.save();
						var t = s.series.pie.innerRadius > 1 ? s.series.pie.innerRadius : o * s.series.pie.innerRadius;
						e.globalCompositeOperation = "destination-out", e.beginPath(), e.fillStyle = s.series.pie.stroke.color, e.arc(0, 0, t, 0, 2 * Math.PI, !1), e.fill(), e.closePath(), e.restore(), e.save(), e.beginPath(), e.strokeStyle = s.series.pie.stroke.color, e.arc(0, 0, t, 0, 2 * Math.PI, !1), e.stroke(), e.closePath(), e.restore()
					}
				}

				function _(e, t) {
					for (var n = !1, r = -1, a = e.length, i = a - 1; ++r < a; i = r)(e[r][1] <= t[1] && t[1] < e[i][1] || e[i][1] <= t[1] && t[1] < e[r][1]) && t[0] < (e[i][0] - e[r][0]) * (t[1] - e[r][1]) / (e[i][1] - e[r][1]) + e[r][0] && (n = !n);
					return n
				}

				function v(e) {
					g("plothover", e)
				}

				function y(e) {
					g("plotclick", e)
				}

				function g(e, t) {
					var n = r.offset(),
						a = function (e, t) {
							for (var n, a, i = r.getData(), s = r.getOptions(), u = s.series.pie.radius > 1 ? s.series.pie.radius : o * s.series.pie.radius, f = 0; f < i.length; ++f) {
								var m = i[f];
								if (m.pie.show) {
									if (c.save(), c.beginPath(), c.moveTo(0, 0), c.arc(0, 0, u, m.startAngle, m.startAngle + m.angle / 2, !1), c.arc(0, 0, u, m.startAngle + m.angle / 2, m.startAngle + m.angle, !1), c.closePath(), n = e - l, a = t - d, c.isPointInPath) {
										if (c.isPointInPath(e - l, t - d)) return c.restore(), {
											datapoint: [m.percent, m.data],
											dataIndex: 0,
											series: m,
											seriesIndex: f
										}
									} else if (_([
											[0, 0],
											[u * Math.cos(m.startAngle), u * Math.sin(m.startAngle)],
											[u * Math.cos(m.startAngle + m.angle / 4), u * Math.sin(m.startAngle + m.angle / 4)],
											[u * Math.cos(m.startAngle + m.angle / 2), u * Math.sin(m.startAngle + m.angle / 2)],
											[u * Math.cos(m.startAngle + m.angle / 1.5), u * Math.sin(m.startAngle + m.angle / 1.5)],
											[u * Math.cos(m.startAngle + m.angle), u * Math.sin(m.startAngle + m.angle)]
										], [n, a])) return c.restore(), {
										datapoint: [m.percent, m.data],
										dataIndex: 0,
										series: m,
										seriesIndex: f
									};
									c.restore()
								}
							}
							return null
						}(parseInt(t.pageX - n.left), parseInt(t.pageY - n.top));
					if (s.grid.autoHighlight)
						for (var u = 0; u < f.length; ++u) {
							var m = f[u];
							m.auto != e || a && m.series == a.series || M(m.series)
						}
					a && function (e, t) {
						var n = b(e); - 1 == n ? (f.push({
							series: e,
							auto: t
						}), r.triggerRedrawOverlay()) : t || (f[n].auto = !1)
					}(a.series, e);
					var h = {
						pageX: t.pageX,
						pageY: t.pageY
					};
					i.trigger(e, [h, a])
				}

				function M(e) {
					null == e && (f = [], r.triggerRedrawOverlay());
					var t = b(e); - 1 != t && (f.splice(t, 1), r.triggerRedrawOverlay())
				}

				function b(e) {
					for (var t = 0; t < f.length; ++t)
						if (f[t].series == e) return t;
					return -1
				}
				r.hooks.processOptions.push(function (e, t) {
					t.series.pie.show && (t.grid.show = !1, "auto" == t.series.pie.label.show && (t.legend.show ? t.series.pie.label.show = !1 : t.series.pie.label.show = !0), "auto" == t.series.pie.radius && (t.series.pie.label.show ? t.series.pie.radius = .75 : t.series.pie.radius = 1), t.series.pie.tilt > 1 ? t.series.pie.tilt = 1 : t.series.pie.tilt < 0 && (t.series.pie.tilt = 0))
				}), r.hooks.bindEvents.push(function (e, t) {
					var n = e.getOptions();
					n.series.pie.show && (n.grid.hoverable && t.unbind("mousemove").mousemove(v), n.grid.clickable && t.unbind("click").click(y))
				}), r.hooks.processDatapoints.push(function (e, t, n, r) {
					e.getOptions().series.pie.show && m(e)
				}), r.hooks.drawOverlay.push(function (e, t) {
					e.getOptions().series.pie.show && function (e, t) {
						var n = e.getOptions(),
							r = n.series.pie.radius > 1 ? n.series.pie.radius : o * n.series.pie.radius;
						t.save(), t.translate(l, d), t.scale(1, n.series.pie.tilt);
						for (var a = 0; a < f.length; ++a) i(f[a].series);

						function i(e) {
							e.angle <= 0 || isNaN(e.angle) || (t.fillStyle = "rgba(255, 255, 255, " + n.series.pie.highlight.opacity + ")", t.beginPath(), Math.abs(e.angle - 2 * Math.PI) > 1e-9 && t.moveTo(0, 0), t.arc(0, 0, r, e.startAngle, e.startAngle + e.angle / 2, !1), t.arc(0, 0, r, e.startAngle + e.angle / 2, e.startAngle + e.angle, !1), t.closePath(), t.fill())
						}
						p(t), t.restore()
					}(e, t)
				}), r.hooks.draw.push(function (e, t) {
					e.getOptions().series.pie.show && h(e, t)
				})
			},
			options: r,
			name: "pie",
			version: "1.1"
		})
	}(jQuery)
}, function (e, t) {
	e.exports = function (e) {
		return e.webpackPolyfill || (e.deprecate = function () {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
			enumerable: !0,
			get: function () {
				return e.l
			}
		}), Object.defineProperty(e, "id", {
			enumerable: !0,
			get: function () {
				return e.i
			}
		}), e.webpackPolyfill = 1), e
	}
}, function (e, t, n) {
	var r = {
		"./af": 14,
		"./af.js": 14,
		"./ar": 15,
		"./ar-dz": 16,
		"./ar-dz.js": 16,
		"./ar-kw": 17,
		"./ar-kw.js": 17,
		"./ar-ly": 18,
		"./ar-ly.js": 18,
		"./ar-ma": 19,
		"./ar-ma.js": 19,
		"./ar-sa": 20,
		"./ar-sa.js": 20,
		"./ar-tn": 21,
		"./ar-tn.js": 21,
		"./ar.js": 15,
		"./az": 22,
		"./az.js": 22,
		"./be": 23,
		"./be.js": 23,
		"./bg": 24,
		"./bg.js": 24,
		"./bm": 25,
		"./bm.js": 25,
		"./bn": 26,
		"./bn-bd": 27,
		"./bn-bd.js": 27,
		"./bn.js": 26,
		"./bo": 28,
		"./bo.js": 28,
		"./br": 29,
		"./br.js": 29,
		"./bs": 30,
		"./bs.js": 30,
		"./ca": 31,
		"./ca.js": 31,
		"./cs": 32,
		"./cs.js": 32,
		"./cv": 33,
		"./cv.js": 33,
		"./cy": 34,
		"./cy.js": 34,
		"./da": 35,
		"./da.js": 35,
		"./de": 36,
		"./de-at": 37,
		"./de-at.js": 37,
		"./de-ch": 38,
		"./de-ch.js": 38,
		"./de.js": 36,
		"./dv": 39,
		"./dv.js": 39,
		"./el": 40,
		"./el.js": 40,
		"./en-au": 41,
		"./en-au.js": 41,
		"./en-ca": 42,
		"./en-ca.js": 42,
		"./en-gb": 43,
		"./en-gb.js": 43,
		"./en-ie": 44,
		"./en-ie.js": 44,
		"./en-il": 45,
		"./en-il.js": 45,
		"./en-in": 46,
		"./en-in.js": 46,
		"./en-nz": 47,
		"./en-nz.js": 47,
		"./en-sg": 48,
		"./en-sg.js": 48,
		"./eo": 49,
		"./eo.js": 49,
		"./es": 50,
		"./es-do": 51,
		"./es-do.js": 51,
		"./es-mx": 52,
		"./es-mx.js": 52,
		"./es-us": 53,
		"./es-us.js": 53,
		"./es.js": 50,
		"./et": 54,
		"./et.js": 54,
		"./eu": 55,
		"./eu.js": 55,
		"./fa": 56,
		"./fa.js": 56,
		"./fi": 57,
		"./fi.js": 57,
		"./fil": 58,
		"./fil.js": 58,
		"./fo": 59,
		"./fo.js": 59,
		"./fr": 60,
		"./fr-ca": 61,
		"./fr-ca.js": 61,
		"./fr-ch": 62,
		"./fr-ch.js": 62,
		"./fr.js": 60,
		"./fy": 63,
		"./fy.js": 63,
		"./ga": 64,
		"./ga.js": 64,
		"./gd": 65,
		"./gd.js": 65,
		"./gl": 66,
		"./gl.js": 66,
		"./gom-deva": 67,
		"./gom-deva.js": 67,
		"./gom-latn": 68,
		"./gom-latn.js": 68,
		"./gu": 69,
		"./gu.js": 69,
		"./he": 70,
		"./he.js": 70,
		"./hi": 71,
		"./hi.js": 71,
		"./hr": 72,
		"./hr.js": 72,
		"./hu": 73,
		"./hu.js": 73,
		"./hy-am": 74,
		"./hy-am.js": 74,
		"./id": 75,
		"./id.js": 75,
		"./is": 76,
		"./is.js": 76,
		"./it": 77,
		"./it-ch": 78,
		"./it-ch.js": 78,
		"./it.js": 77,
		"./ja": 79,
		"./ja.js": 79,
		"./jv": 80,
		"./jv.js": 80,
		"./ka": 81,
		"./ka.js": 81,
		"./kk": 82,
		"./kk.js": 82,
		"./km": 83,
		"./km.js": 83,
		"./kn": 84,
		"./kn.js": 84,
		"./ko": 85,
		"./ko.js": 85,
		"./ku": 86,
		"./ku.js": 86,
		"./ky": 87,
		"./ky.js": 87,
		"./lb": 88,
		"./lb.js": 88,
		"./lo": 89,
		"./lo.js": 89,
		"./lt": 90,
		"./lt.js": 90,
		"./lv": 91,
		"./lv.js": 91,
		"./me": 92,
		"./me.js": 92,
		"./mi": 93,
		"./mi.js": 93,
		"./mk": 94,
		"./mk.js": 94,
		"./ml": 95,
		"./ml.js": 95,
		"./mn": 96,
		"./mn.js": 96,
		"./mr": 97,
		"./mr.js": 97,
		"./ms": 98,
		"./ms-my": 99,
		"./ms-my.js": 99,
		"./ms.js": 98,
		"./mt": 100,
		"./mt.js": 100,
		"./my": 101,
		"./my.js": 101,
		"./nb": 102,
		"./nb.js": 102,
		"./ne": 103,
		"./ne.js": 103,
		"./nl": 104,
		"./nl-be": 105,
		"./nl-be.js": 105,
		"./nl.js": 104,
		"./nn": 106,
		"./nn.js": 106,
		"./oc-lnc": 107,
		"./oc-lnc.js": 107,
		"./pa-in": 108,
		"./pa-in.js": 108,
		"./pl": 109,
		"./pl.js": 109,
		"./pt": 110,
		"./pt-br": 111,
		"./pt-br.js": 111,
		"./pt.js": 110,
		"./ro": 112,
		"./ro.js": 112,
		"./ru": 113,
		"./ru.js": 113,
		"./sd": 114,
		"./sd.js": 114,
		"./se": 115,
		"./se.js": 115,
		"./si": 116,
		"./si.js": 116,
		"./sk": 117,
		"./sk.js": 117,
		"./sl": 118,
		"./sl.js": 118,
		"./sq": 119,
		"./sq.js": 119,
		"./sr": 120,
		"./sr-cyrl": 121,
		"./sr-cyrl.js": 121,
		"./sr.js": 120,
		"./ss": 122,
		"./ss.js": 122,
		"./sv": 123,
		"./sv.js": 123,
		"./sw": 124,
		"./sw.js": 124,
		"./ta": 125,
		"./ta.js": 125,
		"./te": 126,
		"./te.js": 126,
		"./tet": 127,
		"./tet.js": 127,
		"./tg": 128,
		"./tg.js": 128,
		"./th": 129,
		"./th.js": 129,
		"./tk": 130,
		"./tk.js": 130,
		"./tl-ph": 131,
		"./tl-ph.js": 131,
		"./tlh": 132,
		"./tlh.js": 132,
		"./tr": 133,
		"./tr.js": 133,
		"./tzl": 134,
		"./tzl.js": 134,
		"./tzm": 135,
		"./tzm-latn": 136,
		"./tzm-latn.js": 136,
		"./tzm.js": 135,
		"./ug-cn": 137,
		"./ug-cn.js": 137,
		"./uk": 138,
		"./uk.js": 138,
		"./ur": 139,
		"./ur.js": 139,
		"./uz": 140,
		"./uz-latn": 141,
		"./uz-latn.js": 141,
		"./uz.js": 140,
		"./vi": 142,
		"./vi.js": 142,
		"./x-pseudo": 143,
		"./x-pseudo.js": 143,
		"./yo": 144,
		"./yo.js": 144,
		"./zh-cn": 145,
		"./zh-cn.js": 145,
		"./zh-hk": 146,
		"./zh-hk.js": 146,
		"./zh-mo": 147,
		"./zh-mo.js": 147,
		"./zh-tw": 148,
		"./zh-tw.js": 148
	};

	function a(e) {
		return n(i(e))
	}

	function i(e) {
		var t = r[e];
		if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
		return t
	}
	a.keys = function () {
		return Object.keys(r)
	}, a.resolve = i, e.exports = a, a.id = 196
}, function (e, t, n) {
	"use strict";

	function r(e, t) {
		0
	}

	function a(e, t) {
		for (var n in t) e[n] = t[n];
		return e
	}
	var i = /[!'()*]/g,
		s = function (e) {
			return "%" + e.charCodeAt(0).toString(16)
		},
		o = /%2C/g,
		l = function (e) {
			return encodeURIComponent(e).replace(i, s).replace(o, ",")
		};

	function d(e) {
		try {
			return decodeURIComponent(e)
		} catch (e) {
			0
		}
		return e
	}
	var u = function (e) {
		return null == e || "object" == typeof e ? e : String(e)
	};

	function c(e) {
		var t = {};
		return (e = e.trim().replace(/^(\?|#|&)/, "")) ? (e.split("&").forEach(function (e) {
			var n = e.replace(/\+/g, " ").split("="),
				r = d(n.shift()),
				a = n.length > 0 ? d(n.join("=")) : null;
			void 0 === t[r] ? t[r] = a : Array.isArray(t[r]) ? t[r].push(a) : t[r] = [t[r], a]
		}), t) : t
	}

	function f(e) {
		var t = e ? Object.keys(e).map(function (t) {
			var n = e[t];
			if (void 0 === n) return "";
			if (null === n) return l(t);
			if (Array.isArray(n)) {
				var r = [];
				return n.forEach(function (e) {
					void 0 !== e && (null === e ? r.push(l(t)) : r.push(l(t) + "=" + l(e)))
				}), r.join("&")
			}
			return l(t) + "=" + l(n)
		}).filter(function (e) {
			return e.length > 0
		}).join("&") : null;
		return t ? "?" + t : ""
	}
	var m = /\/?$/;

	function h(e, t, n, r) {
		var a = r && r.options.stringifyQuery,
			i = t.query || {};
		try {
			i = p(i)
		} catch (e) {}
		var s = {
			name: t.name || e && e.name,
			meta: e && e.meta || {},
			path: t.path || "/",
			hash: t.hash || "",
			query: i,
			params: t.params || {},
			fullPath: v(t, a),
			matched: e ? function (e) {
				var t = [];
				for (; e;) t.unshift(e), e = e.parent;
				return t
			}(e) : []
		};
		return n && (s.redirectedFrom = v(n, a)), Object.freeze(s)
	}

	function p(e) {
		if (Array.isArray(e)) return e.map(p);
		if (e && "object" == typeof e) {
			var t = {};
			for (var n in e) t[n] = p(e[n]);
			return t
		}
		return e
	}
	var _ = h(null, {
		path: "/"
	});

	function v(e, t) {
		var n = e.path,
			r = e.query;
		void 0 === r && (r = {});
		var a = e.hash;
		return void 0 === a && (a = ""), (n || "/") + (t || f)(r) + a
	}

	function y(e, t) {
		return t === _ ? e === t : !!t && (e.path && t.path ? e.path.replace(m, "") === t.path.replace(m, "") && e.hash === t.hash && g(e.query, t.query) : !(!e.name || !t.name) && (e.name === t.name && e.hash === t.hash && g(e.query, t.query) && g(e.params, t.params)))
	}

	function g(e, t) {
		if (void 0 === e && (e = {}), void 0 === t && (t = {}), !e || !t) return e === t;
		var n = Object.keys(e).sort(),
			r = Object.keys(t).sort();
		return n.length === r.length && n.every(function (n, a) {
			var i = e[n];
			if (r[a] !== n) return !1;
			var s = t[n];
			return null == i || null == s ? i === s : "object" == typeof i && "object" == typeof s ? g(i, s) : String(i) === String(s)
		})
	}

	function M(e) {
		for (var t = 0; t < e.matched.length; t++) {
			var n = e.matched[t];
			for (var r in n.instances) {
				var a = n.instances[r],
					i = n.enteredCbs[r];
				if (a && i) {
					delete n.enteredCbs[r];
					for (var s = 0; s < i.length; s++) a._isBeingDestroyed || i[s](a)
				}
			}
		}
	}
	var b = {
		name: "RouterView",
		functional: !0,
		props: {
			name: {
				type: String,
				default: "default"
			}
		},
		render: function (e, t) {
			var n = t.props,
				r = t.children,
				i = t.parent,
				s = t.data;
			s.routerView = !0;
			for (var o = i.$createElement, l = n.name, d = i.$route, u = i._routerViewCache || (i._routerViewCache = {}), c = 0, f = !1; i && i._routerRoot !== i;) {
				var m = i.$vnode ? i.$vnode.data : {};
				m.routerView && c++, m.keepAlive && i._directInactive && i._inactive && (f = !0), i = i.$parent
			}
			if (s.routerViewDepth = c, f) {
				var h = u[l],
					p = h && h.component;
				return p ? (h.configProps && L(p, s, h.route, h.configProps), o(p, s, r)) : o()
			}
			var _ = d.matched[c],
				v = _ && _.components[l];
			if (!_ || !v) return u[l] = null, o();
			u[l] = {
				component: v
			}, s.registerRouteInstance = function (e, t) {
				var n = _.instances[l];
				(t && n !== e || !t && n === e) && (_.instances[l] = t)
			}, (s.hook || (s.hook = {})).prepatch = function (e, t) {
				_.instances[l] = t.componentInstance
			}, s.hook.init = function (e) {
				e.data.keepAlive && e.componentInstance && e.componentInstance !== _.instances[l] && (_.instances[l] = e.componentInstance), M(d)
			};
			var y = _.props && _.props[l];
			return y && (a(u[l], {
				route: d,
				configProps: y
			}), L(v, s, d, y)), o(v, s, r)
		}
	};

	function L(e, t, n, r) {
		var i = t.props = function (e, t) {
			switch (typeof t) {
				case "undefined":
					return;
				case "object":
					return t;
				case "function":
					return t(e);
				case "boolean":
					return t ? e.params : void 0;
				default:
					0
			}
		}(n, r);
		if (i) {
			i = t.props = a({}, i);
			var s = t.attrs = t.attrs || {};
			for (var o in i) e.props && o in e.props || (s[o] = i[o], delete i[o])
		}
	}

	function k(e, t, n) {
		var r = e.charAt(0);
		if ("/" === r) return e;
		if ("?" === r || "#" === r) return t + e;
		var a = t.split("/");
		n && a[a.length - 1] || a.pop();
		for (var i = e.replace(/^\//, "").split("/"), s = 0; s < i.length; s++) {
			var o = i[s];
			".." === o ? a.pop() : "." !== o && a.push(o)
		}
		return "" !== a[0] && a.unshift(""), a.join("/")
	}

	function w(e) {
		return e.replace(/\/\//g, "/")
	}
	var Y = Array.isArray || function (e) {
			return "[object Array]" == Object.prototype.toString.call(e)
		},
		x = F,
		T = H,
		D = function (e, t) {
			return E(H(e, t), t)
		},
		S = E,
		j = R,
		C = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");

	function H(e, t) {
		for (var n, r = [], a = 0, i = 0, s = "", o = t && t.delimiter || "/"; null != (n = C.exec(e));) {
			var l = n[0],
				d = n[1],
				u = n.index;
			if (s += e.slice(i, u), i = u + l.length, d) s += d[1];
			else {
				var c = e[i],
					f = n[2],
					m = n[3],
					h = n[4],
					p = n[5],
					_ = n[6],
					v = n[7];
				s && (r.push(s), s = "");
				var y = null != f && null != c && c !== f,
					g = "+" === _ || "*" === _,
					M = "?" === _ || "*" === _,
					b = n[2] || o,
					L = h || p;
				r.push({
					name: m || a++,
					prefix: f || "",
					delimiter: b,
					optional: M,
					repeat: g,
					partial: y,
					asterisk: !!v,
					pattern: L ? O(L) : v ? ".*" : "[^" + P(b) + "]+?"
				})
			}
		}
		return i < e.length && (s += e.substr(i)), s && r.push(s), r
	}

	function A(e) {
		return encodeURI(e).replace(/[\/?#]/g, function (e) {
			return "%" + e.charCodeAt(0).toString(16).toUpperCase()
		})
	}

	function E(e, t) {
		for (var n = new Array(e.length), r = 0; r < e.length; r++) "object" == typeof e[r] && (n[r] = new RegExp("^(?:" + e[r].pattern + ")$", N(t)));
		return function (t, r) {
			for (var a = "", i = t || {}, s = (r || {}).pretty ? A : encodeURIComponent, o = 0; o < e.length; o++) {
				var l = e[o];
				if ("string" != typeof l) {
					var d, u = i[l.name];
					if (null == u) {
						if (l.optional) {
							l.partial && (a += l.prefix);
							continue
						}
						throw new TypeError('Expected "' + l.name + '" to be defined')
					}
					if (Y(u)) {
						if (!l.repeat) throw new TypeError('Expected "' + l.name + '" to not repeat, but received `' + JSON.stringify(u) + "`");
						if (0 === u.length) {
							if (l.optional) continue;
							throw new TypeError('Expected "' + l.name + '" to not be empty')
						}
						for (var c = 0; c < u.length; c++) {
							if (d = s(u[c]), !n[o].test(d)) throw new TypeError('Expected all "' + l.name + '" to match "' + l.pattern + '", but received `' + JSON.stringify(d) + "`");
							a += (0 === c ? l.prefix : l.delimiter) + d
						}
					} else {
						if (d = l.asterisk ? encodeURI(u).replace(/[?#]/g, function (e) {
								return "%" + e.charCodeAt(0).toString(16).toUpperCase()
							}) : s(u), !n[o].test(d)) throw new TypeError('Expected "' + l.name + '" to match "' + l.pattern + '", but received "' + d + '"');
						a += l.prefix + d
					}
				} else a += l
			}
			return a
		}
	}

	function P(e) {
		return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1")
	}

	function O(e) {
		return e.replace(/([=!:$\/()])/g, "\\$1")
	}

	function $(e, t) {
		return e.keys = t, e
	}

	function N(e) {
		return e && e.sensitive ? "" : "i"
	}

	function R(e, t, n) {
		Y(t) || (n = t || n, t = []);
		for (var r = (n = n || {}).strict, a = !1 !== n.end, i = "", s = 0; s < e.length; s++) {
			var o = e[s];
			if ("string" == typeof o) i += P(o);
			else {
				var l = P(o.prefix),
					d = "(?:" + o.pattern + ")";
				t.push(o), o.repeat && (d += "(?:" + l + d + ")*"), i += d = o.optional ? o.partial ? l + "(" + d + ")?" : "(?:" + l + "(" + d + "))?" : l + "(" + d + ")"
			}
		}
		var u = P(n.delimiter || "/"),
			c = i.slice(-u.length) === u;
		return r || (i = (c ? i.slice(0, -u.length) : i) + "(?:" + u + "(?=$))?"), i += a ? "$" : r && c ? "" : "(?=" + u + "|$)", $(new RegExp("^" + i, N(n)), t)
	}

	function F(e, t, n) {
		return Y(t) || (n = t || n, t = []), n = n || {}, e instanceof RegExp ? function (e, t) {
			var n = e.source.match(/\((?!\?)/g);
			if (n)
				for (var r = 0; r < n.length; r++) t.push({
					name: r,
					prefix: null,
					delimiter: null,
					optional: !1,
					repeat: !1,
					partial: !1,
					asterisk: !1,
					pattern: null
				});
			return $(e, t)
		}(e, t) : Y(e) ? function (e, t, n) {
			for (var r = [], a = 0; a < e.length; a++) r.push(F(e[a], t, n).source);
			return $(new RegExp("(?:" + r.join("|") + ")", N(n)), t)
		}(e, t, n) : function (e, t, n) {
			return R(H(e, n), t, n)
		}(e, t, n)
	}
	x.parse = T, x.compile = D, x.tokensToFunction = S, x.tokensToRegExp = j;
	var W = Object.create(null);

	function I(e, t, n) {
		t = t || {};
		try {
			var r = W[e] || (W[e] = x.compile(e));
			return "string" == typeof t.pathMatch && (t[0] = t.pathMatch), r(t, {
				pretty: !0
			})
		} catch (e) {
			return ""
		} finally {
			delete t[0]
		}
	}

	function z(e, t, n, r) {
		var i = "string" == typeof e ? {
			path: e
		} : e;
		if (i._normalized) return i;
		if (i.name) {
			var s = (i = a({}, e)).params;
			return s && "object" == typeof s && (i.params = a({}, s)), i
		}
		if (!i.path && i.params && t) {
			(i = a({}, i))._normalized = !0;
			var o = a(a({}, t.params), i.params);
			if (t.name) i.name = t.name, i.params = o;
			else if (t.matched.length) {
				var l = t.matched[t.matched.length - 1].path;
				i.path = I(l, o, t.path)
			} else 0;
			return i
		}
		var d = function (e) {
				var t = "",
					n = "",
					r = e.indexOf("#");
				r >= 0 && (t = e.slice(r), e = e.slice(0, r));
				var a = e.indexOf("?");
				return a >= 0 && (n = e.slice(a + 1), e = e.slice(0, a)), {
					path: e,
					query: n,
					hash: t
				}
			}(i.path || ""),
			f = t && t.path || "/",
			m = d.path ? k(d.path, f, n || i.append) : f,
			h = function (e, t, n) {
				void 0 === t && (t = {});
				var r, a = n || c;
				try {
					r = a(e || "")
				} catch (e) {
					r = {}
				}
				for (var i in t) {
					var s = t[i];
					r[i] = Array.isArray(s) ? s.map(u) : u(s)
				}
				return r
			}(d.query, i.query, r && r.options.parseQuery),
			p = i.hash || d.hash;
		return p && "#" !== p.charAt(0) && (p = "#" + p), {
			_normalized: !0,
			path: m,
			query: h,
			hash: p
		}
	}
	var U, q = [String, Object],
		J = [String, Array],
		B = function () {},
		V = {
			name: "RouterLink",
			props: {
				to: {
					type: q,
					required: !0
				},
				tag: {
					type: String,
					default: "a"
				},
				exact: Boolean,
				append: Boolean,
				replace: Boolean,
				activeClass: String,
				exactActiveClass: String,
				ariaCurrentValue: {
					type: String,
					default: "page"
				},
				event: {
					type: J,
					default: "click"
				}
			},
			render: function (e) {
				var t = this,
					n = this.$router,
					r = this.$route,
					i = n.resolve(this.to, r, this.append),
					s = i.location,
					o = i.route,
					l = i.href,
					d = {},
					u = n.options.linkActiveClass,
					c = n.options.linkExactActiveClass,
					f = null == u ? "router-link-active" : u,
					p = null == c ? "router-link-exact-active" : c,
					_ = null == this.activeClass ? f : this.activeClass,
					v = null == this.exactActiveClass ? p : this.exactActiveClass,
					g = o.redirectedFrom ? h(null, z(o.redirectedFrom), null, n) : o;
				d[v] = y(r, g), d[_] = this.exact ? d[v] : function (e, t) {
					return 0 === e.path.replace(m, "/").indexOf(t.path.replace(m, "/")) && (!t.hash || e.hash === t.hash) && function (e, t) {
						for (var n in t)
							if (!(n in e)) return !1;
						return !0
					}(e.query, t.query)
				}(r, g);
				var M = d[v] ? this.ariaCurrentValue : null,
					b = function (e) {
						G(e) && (t.replace ? n.replace(s, B) : n.push(s, B))
					},
					L = {
						click: G
					};
				Array.isArray(this.event) ? this.event.forEach(function (e) {
					L[e] = b
				}) : L[this.event] = b;
				var k = {
						class: d
					},
					w = !this.$scopedSlots.$hasNormal && this.$scopedSlots.default && this.$scopedSlots.default({
						href: l,
						route: o,
						navigate: b,
						isActive: d[_],
						isExactActive: d[v]
					});
				if (w) {
					if (1 === w.length) return w[0];
					if (w.length > 1 || !w.length) return 0 === w.length ? e() : e("span", {}, w)
				}
				if ("a" === this.tag) k.on = L, k.attrs = {
					href: l,
					"aria-current": M
				};
				else {
					var Y = function e(t) {
						if (t)
							for (var n, r = 0; r < t.length; r++) {
								if ("a" === (n = t[r]).tag) return n;
								if (n.children && (n = e(n.children))) return n
							}
					}(this.$slots.default);
					if (Y) {
						Y.isStatic = !1;
						var x = Y.data = a({}, Y.data);
						for (var T in x.on = x.on || {}, x.on) {
							var D = x.on[T];
							T in L && (x.on[T] = Array.isArray(D) ? D : [D])
						}
						for (var S in L) S in x.on ? x.on[S].push(L[S]) : x.on[S] = b;
						var j = Y.data.attrs = a({}, Y.data.attrs);
						j.href = l, j["aria-current"] = M
					} else k.on = L
				}
				return e(this.tag, k, this.$slots.default)
			}
		};

	function G(e) {
		if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey || e.defaultPrevented || void 0 !== e.button && 0 !== e.button)) {
			if (e.currentTarget && e.currentTarget.getAttribute) {
				var t = e.currentTarget.getAttribute("target");
				if (/\b_blank\b/i.test(t)) return
			}
			return e.preventDefault && e.preventDefault(), !0
		}
	}

	function K(e) {
		if (!K.installed || U !== e) {
			K.installed = !0, U = e;
			var t = function (e) {
					return void 0 !== e
				},
				n = function (e, n) {
					var r = e.$options._parentVnode;
					t(r) && t(r = r.data) && t(r = r.registerRouteInstance) && r(e, n)
				};
			e.mixin({
				beforeCreate: function () {
					t(this.$options.router) ? (this._routerRoot = this, this._router = this.$options.router, this._router.init(this), e.util.defineReactive(this, "_route", this._router.history.current)) : this._routerRoot = this.$parent && this.$parent._routerRoot || this, n(this, this)
				},
				destroyed: function () {
					n(this)
				}
			}), Object.defineProperty(e.prototype, "$router", {
				get: function () {
					return this._routerRoot._router
				}
			}), Object.defineProperty(e.prototype, "$route", {
				get: function () {
					return this._routerRoot._route
				}
			}), e.component("RouterView", b), e.component("RouterLink", V);
			var r = e.config.optionMergeStrategies;
			r.beforeRouteEnter = r.beforeRouteLeave = r.beforeRouteUpdate = r.created
		}
	}
	var X = "undefined" != typeof window;

	function Q(e, t, n, r) {
		var a = t || [],
			i = n || Object.create(null),
			s = r || Object.create(null);
		e.forEach(function (e) {
			! function e(t, n, r, a, i, s) {
				var o = a.path;
				var l = a.name;
				0;
				var d = a.pathToRegexpOptions || {};
				var u = function (e, t, n) {
					n || (e = e.replace(/\/$/, ""));
					if ("/" === e[0]) return e;
					if (null == t) return e;
					return w(t.path + "/" + e)
				}(o, i, d.strict);
				"boolean" == typeof a.caseSensitive && (d.sensitive = a.caseSensitive);
				var c = {
					path: u,
					regex: function (e, t) {
						var n = x(e, [], t);
						return n
					}(u, d),
					components: a.components || {
						default: a.component
					},
					instances: {},
					enteredCbs: {},
					name: l,
					parent: i,
					matchAs: s,
					redirect: a.redirect,
					beforeEnter: a.beforeEnter,
					meta: a.meta || {},
					props: null == a.props ? {} : a.components ? a.props : {
						default: a.props
					}
				};
				a.children && a.children.forEach(function (a) {
					var i = s ? w(s + "/" + a.path) : void 0;
					e(t, n, r, a, c, i)
				});
				n[c.path] || (t.push(c.path), n[c.path] = c);
				if (void 0 !== a.alias)
					for (var f = Array.isArray(a.alias) ? a.alias : [a.alias], m = 0; m < f.length; ++m) {
						var h = f[m];
						0;
						var p = {
							path: h,
							children: a.children
						};
						e(t, n, r, p, i, c.path || "/")
					}
				l && (r[l] || (r[l] = c))
			}(a, i, s, e)
		});
		for (var o = 0, l = a.length; o < l; o++) "*" === a[o] && (a.push(a.splice(o, 1)[0]), l--, o--);
		return {
			pathList: a,
			pathMap: i,
			nameMap: s
		}
	}

	function Z(e, t) {
		var n = Q(e),
			r = n.pathList,
			a = n.pathMap,
			i = n.nameMap;

		function s(e, n, s) {
			var o = z(e, n, !1, t),
				d = o.name;
			if (d) {
				var u = i[d];
				if (!u) return l(null, o);
				var c = u.regex.keys.filter(function (e) {
					return !e.optional
				}).map(function (e) {
					return e.name
				});
				if ("object" != typeof o.params && (o.params = {}), n && "object" == typeof n.params)
					for (var f in n.params) !(f in o.params) && c.indexOf(f) > -1 && (o.params[f] = n.params[f]);
				return o.path = I(u.path, o.params), l(u, o, s)
			}
			if (o.path) {
				o.params = {};
				for (var m = 0; m < r.length; m++) {
					var h = r[m],
						p = a[h];
					if (ee(p.regex, o.path, o.params)) return l(p, o, s)
				}
			}
			return l(null, o)
		}

		function o(e, n) {
			var r = e.redirect,
				a = "function" == typeof r ? r(h(e, n, null, t)) : r;
			if ("string" == typeof a && (a = {
					path: a
				}), !a || "object" != typeof a) return l(null, n);
			var o = a,
				d = o.name,
				u = o.path,
				c = n.query,
				f = n.hash,
				m = n.params;
			if (c = o.hasOwnProperty("query") ? o.query : c, f = o.hasOwnProperty("hash") ? o.hash : f, m = o.hasOwnProperty("params") ? o.params : m, d) {
				i[d];
				return s({
					_normalized: !0,
					name: d,
					query: c,
					hash: f,
					params: m
				}, void 0, n)
			}
			if (u) {
				var p = function (e, t) {
					return k(e, t.parent ? t.parent.path : "/", !0)
				}(u, e);
				return s({
					_normalized: !0,
					path: I(p, m),
					query: c,
					hash: f
				}, void 0, n)
			}
			return l(null, n)
		}

		function l(e, n, r) {
			return e && e.redirect ? o(e, r || n) : e && e.matchAs ? function (e, t, n) {
				var r = s({
					_normalized: !0,
					path: I(n, t.params)
				});
				if (r) {
					var a = r.matched,
						i = a[a.length - 1];
					return t.params = r.params, l(i, t)
				}
				return l(null, t)
			}(0, n, e.matchAs) : h(e, n, r, t)
		}
		return {
			match: s,
			addRoutes: function (e) {
				Q(e, r, a, i)
			}
		}
	}

	function ee(e, t, n) {
		var r = t.match(e);
		if (!r) return !1;
		if (!n) return !0;
		for (var a = 1, i = r.length; a < i; ++a) {
			var s = e.keys[a - 1];
			s && (n[s.name || "pathMatch"] = "string" == typeof r[a] ? d(r[a]) : r[a])
		}
		return !0
	}
	var te = X && window.performance && window.performance.now ? window.performance : Date;

	function ne() {
		return te.now().toFixed(3)
	}
	var re = ne();

	function ae() {
		return re
	}

	function ie(e) {
		return re = e
	}
	var se = Object.create(null);

	function oe() {
		"scrollRestoration" in window.history && (window.history.scrollRestoration = "manual");
		var e = window.location.protocol + "//" + window.location.host,
			t = window.location.href.replace(e, ""),
			n = a({}, window.history.state);
		return n.key = ae(), window.history.replaceState(n, "", t), window.addEventListener("popstate", ue),
			function () {
				window.removeEventListener("popstate", ue)
			}
	}

	function le(e, t, n, r) {
		if (e.app) {
			var a = e.options.scrollBehavior;
			a && e.app.$nextTick(function () {
				var i = function () {
						var e = ae();
						if (e) return se[e]
					}(),
					s = a.call(e, t, n, r ? i : null);
				s && ("function" == typeof s.then ? s.then(function (e) {
					pe(e, i)
				}).catch(function (e) {
					0
				}) : pe(s, i))
			})
		}
	}

	function de() {
		var e = ae();
		e && (se[e] = {
			x: window.pageXOffset,
			y: window.pageYOffset
		})
	}

	function ue(e) {
		de(), e.state && e.state.key && ie(e.state.key)
	}

	function ce(e) {
		return me(e.x) || me(e.y)
	}

	function fe(e) {
		return {
			x: me(e.x) ? e.x : window.pageXOffset,
			y: me(e.y) ? e.y : window.pageYOffset
		}
	}

	function me(e) {
		return "number" == typeof e
	}
	var he = /^#\d/;

	function pe(e, t) {
		var n, r = "object" == typeof e;
		if (r && "string" == typeof e.selector) {
			var a = he.test(e.selector) ? document.getElementById(e.selector.slice(1)) : document.querySelector(e.selector);
			if (a) {
				var i = e.offset && "object" == typeof e.offset ? e.offset : {};
				t = function (e, t) {
					var n = document.documentElement.getBoundingClientRect(),
						r = e.getBoundingClientRect();
					return {
						x: r.left - n.left - t.x,
						y: r.top - n.top - t.y
					}
				}(a, i = {
					x: me((n = i).x) ? n.x : 0,
					y: me(n.y) ? n.y : 0
				})
			} else ce(e) && (t = fe(e))
		} else r && ce(e) && (t = fe(e));
		t && ("scrollBehavior" in document.documentElement.style ? window.scrollTo({
			left: t.x,
			top: t.y,
			behavior: e.behavior
		}) : window.scrollTo(t.x, t.y))
	}
	var _e, ve = X && ((-1 === (_e = window.navigator.userAgent).indexOf("Android 2.") && -1 === _e.indexOf("Android 4.0") || -1 === _e.indexOf("Mobile Safari") || -1 !== _e.indexOf("Chrome") || -1 !== _e.indexOf("Windows Phone")) && window.history && "function" == typeof window.history.pushState);

	function ye(e, t) {
		de();
		var n = window.history;
		try {
			if (t) {
				var r = a({}, n.state);
				r.key = ae(), n.replaceState(r, "", e)
			} else n.pushState({
				key: ie(ne())
			}, "", e)
		} catch (n) {
			window.location[t ? "replace" : "assign"](e)
		}
	}

	function ge(e) {
		ye(e, !0)
	}

	function Me(e, t, n) {
		var r = function (a) {
			a >= e.length ? n() : e[a] ? t(e[a], function () {
				r(a + 1)
			}) : r(a + 1)
		};
		r(0)
	}
	var be = {
		redirected: 2,
		aborted: 4,
		cancelled: 8,
		duplicated: 16
	};

	function Le(e, t) {
		return we(e, t, be.redirected, 'Redirected when going from "' + e.fullPath + '" to "' + function (e) {
			if ("string" == typeof e) return e;
			if ("path" in e) return e.path;
			var t = {};
			return Ye.forEach(function (n) {
				n in e && (t[n] = e[n])
			}), JSON.stringify(t, null, 2)
		}(t) + '" via a navigation guard.')
	}

	function ke(e, t) {
		return we(e, t, be.cancelled, 'Navigation cancelled from "' + e.fullPath + '" to "' + t.fullPath + '" with a new navigation.')
	}

	function we(e, t, n, r) {
		var a = new Error(r);
		return a._isRouter = !0, a.from = e, a.to = t, a.type = n, a
	}
	var Ye = ["params", "query", "hash"];

	function xe(e) {
		return Object.prototype.toString.call(e).indexOf("Error") > -1
	}

	function Te(e, t) {
		return xe(e) && e._isRouter && (null == t || e.type === t)
	}

	function De(e) {
		return function (t, n, r) {
			var a = !1,
				i = 0,
				s = null;
			Se(e, function (e, t, n, o) {
				if ("function" == typeof e && void 0 === e.cid) {
					a = !0, i++;
					var l, d = He(function (t) {
							var a;
							((a = t).__esModule || Ce && "Module" === a[Symbol.toStringTag]) && (t = t.default), e.resolved = "function" == typeof t ? t : U.extend(t), n.components[o] = t, --i <= 0 && r()
						}),
						u = He(function (e) {
							var t = "Failed to resolve async component " + o + ": " + e;
							s || (s = xe(e) ? e : new Error(t), r(s))
						});
					try {
						l = e(d, u)
					} catch (e) {
						u(e)
					}
					if (l)
						if ("function" == typeof l.then) l.then(d, u);
						else {
							var c = l.component;
							c && "function" == typeof c.then && c.then(d, u)
						}
				}
			}), a || r()
		}
	}

	function Se(e, t) {
		return je(e.map(function (e) {
			return Object.keys(e.components).map(function (n) {
				return t(e.components[n], e.instances[n], e, n)
			})
		}))
	}

	function je(e) {
		return Array.prototype.concat.apply([], e)
	}
	var Ce = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;

	function He(e) {
		var t = !1;
		return function () {
			for (var n = [], r = arguments.length; r--;) n[r] = arguments[r];
			if (!t) return t = !0, e.apply(this, n)
		}
	}
	var Ae = function (e, t) {
		this.router = e, this.base = function (e) {
			if (!e)
				if (X) {
					var t = document.querySelector("base");
					e = (e = t && t.getAttribute("href") || "/").replace(/^https?:\/\/[^\/]+/, "")
				} else e = "/";
			"/" !== e.charAt(0) && (e = "/" + e);
			return e.replace(/\/$/, "")
		}(t), this.current = _, this.pending = null, this.ready = !1, this.readyCbs = [], this.readyErrorCbs = [], this.errorCbs = [], this.listeners = []
	};

	function Ee(e, t, n, r) {
		var a = Se(e, function (e, r, a, i) {
			var s = function (e, t) {
				"function" != typeof e && (e = U.extend(e));
				return e.options[t]
			}(e, t);
			if (s) return Array.isArray(s) ? s.map(function (e) {
				return n(e, r, a, i)
			}) : n(s, r, a, i)
		});
		return je(r ? a.reverse() : a)
	}

	function Pe(e, t) {
		if (t) return function () {
			return e.apply(t, arguments)
		}
	}
	Ae.prototype.listen = function (e) {
		this.cb = e
	}, Ae.prototype.onReady = function (e, t) {
		this.ready ? e() : (this.readyCbs.push(e), t && this.readyErrorCbs.push(t))
	}, Ae.prototype.onError = function (e) {
		this.errorCbs.push(e)
	}, Ae.prototype.transitionTo = function (e, t, n) {
		var r, a = this;
		try {
			r = this.router.match(e, this.current)
		} catch (e) {
			throw this.errorCbs.forEach(function (t) {
				t(e)
			}), e
		}
		var i = this.current;
		this.confirmTransition(r, function () {
			a.updateRoute(r), t && t(r), a.ensureURL(), a.router.afterHooks.forEach(function (e) {
				e && e(r, i)
			}), a.ready || (a.ready = !0, a.readyCbs.forEach(function (e) {
				e(r)
			}))
		}, function (e) {
			n && n(e), e && !a.ready && (Te(e, be.redirected) && i === _ || (a.ready = !0, a.readyErrorCbs.forEach(function (t) {
				t(e)
			})))
		})
	}, Ae.prototype.confirmTransition = function (e, t, n) {
		var a = this,
			i = this.current;
		this.pending = e;
		var s, o, l = function (e) {
				!Te(e) && xe(e) && (a.errorCbs.length ? a.errorCbs.forEach(function (t) {
					t(e)
				}) : (r(), console.error(e))), n && n(e)
			},
			d = e.matched.length - 1,
			u = i.matched.length - 1;
		if (y(e, i) && d === u && e.matched[d] === i.matched[u]) return this.ensureURL(), l(((o = we(s = i, e, be.duplicated, 'Avoided redundant navigation to current location: "' + s.fullPath + '".')).name = "NavigationDuplicated", o));
		var c = function (e, t) {
				var n, r = Math.max(e.length, t.length);
				for (n = 0; n < r && e[n] === t[n]; n++);
				return {
					updated: t.slice(0, n),
					activated: t.slice(n),
					deactivated: e.slice(n)
				}
			}(this.current.matched, e.matched),
			f = c.updated,
			m = c.deactivated,
			h = c.activated,
			p = function (t, n) {
				if (a.pending !== e) return l(ke(i, e));
				try {
					t(e, i, function (t) {
						!1 === t ? (a.ensureURL(!0), l(function (e, t) {
							return we(e, t, be.aborted, 'Navigation aborted from "' + e.fullPath + '" to "' + t.fullPath + '" via a navigation guard.')
						}(i, e))) : xe(t) ? (a.ensureURL(!0), l(t)) : "string" == typeof t || "object" == typeof t && ("string" == typeof t.path || "string" == typeof t.name) ? (l(Le(i, e)), "object" == typeof t && t.replace ? a.replace(t) : a.push(t)) : n(t)
					})
				} catch (e) {
					l(e)
				}
			};
		Me([].concat(function (e) {
			return Ee(e, "beforeRouteLeave", Pe, !0)
		}(m), this.router.beforeHooks, function (e) {
			return Ee(e, "beforeRouteUpdate", Pe)
		}(f), h.map(function (e) {
			return e.beforeEnter
		}), De(h)), p, function () {
			Me(function (e) {
				return Ee(e, "beforeRouteEnter", function (e, t, n, r) {
					return function (e, t, n) {
						return function (r, a, i) {
							return e(r, a, function (e) {
								"function" == typeof e && (t.enteredCbs[n] || (t.enteredCbs[n] = []), t.enteredCbs[n].push(e)), i(e)
							})
						}
					}(e, n, r)
				})
			}(h).concat(a.router.resolveHooks), p, function () {
				if (a.pending !== e) return l(ke(i, e));
				a.pending = null, t(e), a.router.app && a.router.app.$nextTick(function () {
					M(e)
				})
			})
		})
	}, Ae.prototype.updateRoute = function (e) {
		this.current = e, this.cb && this.cb(e)
	}, Ae.prototype.setupListeners = function () {}, Ae.prototype.teardown = function () {
		this.listeners.forEach(function (e) {
			e()
		}), this.listeners = [], this.current = _, this.pending = null
	};
	var Oe = function (e) {
		function t(t, n) {
			e.call(this, t, n), this._startLocation = $e(this.base)
		}
		return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.setupListeners = function () {
			var e = this;
			if (!(this.listeners.length > 0)) {
				var t = this.router,
					n = t.options.scrollBehavior,
					r = ve && n;
				r && this.listeners.push(oe());
				var a = function () {
					var n = e.current,
						a = $e(e.base);
					e.current === _ && a === e._startLocation || e.transitionTo(a, function (e) {
						r && le(t, e, n, !0)
					})
				};
				window.addEventListener("popstate", a), this.listeners.push(function () {
					window.removeEventListener("popstate", a)
				})
			}
		}, t.prototype.go = function (e) {
			window.history.go(e)
		}, t.prototype.push = function (e, t, n) {
			var r = this,
				a = this.current;
			this.transitionTo(e, function (e) {
				ye(w(r.base + e.fullPath)), le(r.router, e, a, !1), t && t(e)
			}, n)
		}, t.prototype.replace = function (e, t, n) {
			var r = this,
				a = this.current;
			this.transitionTo(e, function (e) {
				ge(w(r.base + e.fullPath)), le(r.router, e, a, !1), t && t(e)
			}, n)
		}, t.prototype.ensureURL = function (e) {
			if ($e(this.base) !== this.current.fullPath) {
				var t = w(this.base + this.current.fullPath);
				e ? ye(t) : ge(t)
			}
		}, t.prototype.getCurrentLocation = function () {
			return $e(this.base)
		}, t
	}(Ae);

	function $e(e) {
		var t = window.location.pathname;
		return e && 0 === t.toLowerCase().indexOf(e.toLowerCase()) && (t = t.slice(e.length)), (t || "/") + window.location.search + window.location.hash
	}
	var Ne = function (e) {
		function t(t, n, r) {
			e.call(this, t, n), r && function (e) {
				var t = $e(e);
				if (!/^\/#/.test(t)) return window.location.replace(w(e + "/#" + t)), !0
			}(this.base) || Re()
		}
		return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.setupListeners = function () {
			var e = this;
			if (!(this.listeners.length > 0)) {
				var t = this.router.options.scrollBehavior,
					n = ve && t;
				n && this.listeners.push(oe());
				var r = function () {
						var t = e.current;
						Re() && e.transitionTo(Fe(), function (r) {
							n && le(e.router, r, t, !0), ve || ze(r.fullPath)
						})
					},
					a = ve ? "popstate" : "hashchange";
				window.addEventListener(a, r), this.listeners.push(function () {
					window.removeEventListener(a, r)
				})
			}
		}, t.prototype.push = function (e, t, n) {
			var r = this,
				a = this.current;
			this.transitionTo(e, function (e) {
				Ie(e.fullPath), le(r.router, e, a, !1), t && t(e)
			}, n)
		}, t.prototype.replace = function (e, t, n) {
			var r = this,
				a = this.current;
			this.transitionTo(e, function (e) {
				ze(e.fullPath), le(r.router, e, a, !1), t && t(e)
			}, n)
		}, t.prototype.go = function (e) {
			window.history.go(e)
		}, t.prototype.ensureURL = function (e) {
			var t = this.current.fullPath;
			Fe() !== t && (e ? Ie(t) : ze(t))
		}, t.prototype.getCurrentLocation = function () {
			return Fe()
		}, t
	}(Ae);

	function Re() {
		var e = Fe();
		return "/" === e.charAt(0) || (ze("/" + e), !1)
	}

	function Fe() {
		var e = window.location.href,
			t = e.indexOf("#");
		return t < 0 ? "" : e = e.slice(t + 1)
	}

	function We(e) {
		var t = window.location.href,
			n = t.indexOf("#");
		return (n >= 0 ? t.slice(0, n) : t) + "#" + e
	}

	function Ie(e) {
		ve ? ye(We(e)) : window.location.hash = e
	}

	function ze(e) {
		ve ? ge(We(e)) : window.location.replace(We(e))
	}
	var Ue = function (e) {
			function t(t, n) {
				e.call(this, t, n), this.stack = [], this.index = -1
			}
			return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.push = function (e, t, n) {
				var r = this;
				this.transitionTo(e, function (e) {
					r.stack = r.stack.slice(0, r.index + 1).concat(e), r.index++, t && t(e)
				}, n)
			}, t.prototype.replace = function (e, t, n) {
				var r = this;
				this.transitionTo(e, function (e) {
					r.stack = r.stack.slice(0, r.index).concat(e), t && t(e)
				}, n)
			}, t.prototype.go = function (e) {
				var t = this,
					n = this.index + e;
				if (!(n < 0 || n >= this.stack.length)) {
					var r = this.stack[n];
					this.confirmTransition(r, function () {
						var e = t.current;
						t.index = n, t.updateRoute(r), t.router.afterHooks.forEach(function (t) {
							t && t(r, e)
						})
					}, function (e) {
						Te(e, be.duplicated) && (t.index = n)
					})
				}
			}, t.prototype.getCurrentLocation = function () {
				var e = this.stack[this.stack.length - 1];
				return e ? e.fullPath : "/"
			}, t.prototype.ensureURL = function () {}, t
		}(Ae),
		qe = function (e) {
			void 0 === e && (e = {}), this.app = null, this.apps = [], this.options = e, this.beforeHooks = [], this.resolveHooks = [], this.afterHooks = [], this.matcher = Z(e.routes || [], this);
			var t = e.mode || "hash";
			switch (this.fallback = "history" === t && !ve && !1 !== e.fallback, this.fallback && (t = "hash"), X || (t = "abstract"), this.mode = t, t) {
				case "history":
					this.history = new Oe(this, e.base);
					break;
				case "hash":
					this.history = new Ne(this, e.base, this.fallback);
					break;
				case "abstract":
					this.history = new Ue(this, e.base);
					break;
				default:
					0
			}
		},
		Je = {
			currentRoute: {
				configurable: !0
			}
		};

	function Be(e, t) {
		return e.push(t),
			function () {
				var n = e.indexOf(t);
				n > -1 && e.splice(n, 1)
			}
	}
	qe.prototype.match = function (e, t, n) {
		return this.matcher.match(e, t, n)
	}, Je.currentRoute.get = function () {
		return this.history && this.history.current
	}, qe.prototype.init = function (e) {
		var t = this;
		if (this.apps.push(e), e.$once("hook:destroyed", function () {
				var n = t.apps.indexOf(e);
				n > -1 && t.apps.splice(n, 1), t.app === e && (t.app = t.apps[0] || null), t.app || t.history.teardown()
			}), !this.app) {
			this.app = e;
			var n = this.history;
			if (n instanceof Oe || n instanceof Ne) {
				var r = function (e) {
					n.setupListeners(),
						function (e) {
							var r = n.current,
								a = t.options.scrollBehavior;
							ve && a && "fullPath" in e && le(t, e, r, !1)
						}(e)
				};
				n.transitionTo(n.getCurrentLocation(), r, r)
			}
			n.listen(function (e) {
				t.apps.forEach(function (t) {
					t._route = e
				})
			})
		}
	}, qe.prototype.beforeEach = function (e) {
		return Be(this.beforeHooks, e)
	}, qe.prototype.beforeResolve = function (e) {
		return Be(this.resolveHooks, e)
	}, qe.prototype.afterEach = function (e) {
		return Be(this.afterHooks, e)
	}, qe.prototype.onReady = function (e, t) {
		this.history.onReady(e, t)
	}, qe.prototype.onError = function (e) {
		this.history.onError(e)
	}, qe.prototype.push = function (e, t, n) {
		var r = this;
		if (!t && !n && "undefined" != typeof Promise) return new Promise(function (t, n) {
			r.history.push(e, t, n)
		});
		this.history.push(e, t, n)
	}, qe.prototype.replace = function (e, t, n) {
		var r = this;
		if (!t && !n && "undefined" != typeof Promise) return new Promise(function (t, n) {
			r.history.replace(e, t, n)
		});
		this.history.replace(e, t, n)
	}, qe.prototype.go = function (e) {
		this.history.go(e)
	}, qe.prototype.back = function () {
		this.go(-1)
	}, qe.prototype.forward = function () {
		this.go(1)
	}, qe.prototype.getMatchedComponents = function (e) {
		var t = e ? e.matched ? e : this.resolve(e).route : this.currentRoute;
		return t ? [].concat.apply([], t.matched.map(function (e) {
			return Object.keys(e.components).map(function (t) {
				return e.components[t]
			})
		})) : []
	}, qe.prototype.resolve = function (e, t, n) {
		var r = z(e, t = t || this.history.current, n, this),
			a = this.match(r, t),
			i = a.redirectedFrom || a.fullPath;
		return {
			location: r,
			route: a,
			href: function (e, t, n) {
				var r = "hash" === n ? "#" + t : t;
				return e ? w(e + "/" + r) : r
			}(this.history.base, i, this.mode),
			normalizedTo: r,
			resolved: a
		}
	}, qe.prototype.addRoutes = function (e) {
		this.matcher.addRoutes(e), this.history.current !== _ && this.history.transitionTo(this.history.getCurrentLocation())
	}, Object.defineProperties(qe.prototype, Je), qe.install = K, qe.version = "3.4.9", qe.isNavigationFailure = Te, qe.NavigationFailureType = be, X && window.Vue && window.Vue.use(qe), t.a = qe
}, function (e, t, n) {
	"use strict";
	var r = {
			hideModal: function (e) {
				$(e).modal("hide")
			},
			isLogin: function () {
				return !!localStorage["Access Token"]
			},
			log: function (e) {
				config.debug && console.log(e)
			},
			notify: function (e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "info",
					n = arguments[2],
					r = 5e3,
					a = "info",
					i = "fa fa-info";
				switch (t) {
					case "error":
						a = "danger", i = "fa fa-warning";
						break;
					case "loading":
						r = 0, i = "fa fa-refresh fa-spin";
						break;
					case "success":
						a = "success", i = "fa fa-check";
						break;
					case "progress":
						$.notifyClose(), r = 0, e = "<label>" + e + '</label>\n\t\t\t\t\t\t\t<div class="progress">\n\t\t\t\t\t\t\t\t<div class="progress-bar progress-bar-green" role="progressbar" aria-valuenow="' + n + '" aria-valuemin="0" aria-valuemax="100" style="width: ' + n + '%">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>', i = "fa fa-refresh fa-spin"
				}
				return $.notify({
					message: e,
					icon: i
				}, {
					type: a,
					delay: r,
					placement: {
						from: "top",
						align: "center"
					}
				})
			},
			setAuthorization: function () {
				axios.defaults.headers.common.Authorization = localStorage["Access Token"], $.ajaxSetup({
					headers: {
						Authorization: localStorage["Access Token"]
					}
				})
			},
			setTitle: function (e) {
				$("title").text(e)
			},
			getErrorMessage: function (e, t) {
				var n = "";
				switch (t) {
					case 200:
						n = e.message;
						break;
					case 422:
						for (var r in e = "string" == typeof e ? JSON.parse(e) : e) e[r].map(function (e) {
							n += e + "<br/>"
						});
						break;
					case 401:
						n = "You need to login first.";
						break;
					default:
						n = "An error occured."
				}
				return n
			},
			showModal: function (e) {
				$(e).modal("show")
			},
			showResult: function (e, t) {
				var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "axios";
				this.log(e);
				var r = function (e) {
					return "success" == e.status
				};
				if ("axios" == n) {
					if ("success" != t) {
						var a = e.response ? e.response.status : 500,
							i = this.getErrorMessage(e.response.data, a);
						return this.notify(i, "error"), a
					}
					if (r(e.data)) return this.notify(e.data.message, "success"), !0;
					this.notify(e.data.message, "error")
				} else if ("ajax" == n)
					if ("success" == t) {
						if (r(e)) return this.notify(e.message, "success"), !0;
						this.notify(e.message, "error")
					} else if ("error" == t) {
					a = e.status, i = this.getErrorMessage(e.responseText, a);
					return this.notify(i, "error"), a
				}
			}
		},
		a = {
			baseURL: config.baseURL,
			API: config.API,
			storageURL: config.storageURL,
			elections: [],
			election: {},
			user: {},
			positions: [],
			position: {},
			partylists: [],
			partylist: {},
			voters: {},
			voter: {},
			nominees: [],
			nominee: {},
			admins: [],
			information: {},
			result: [],
			results: [],
			last_update: new Date
		};
	t.a = {
		data: function () {
			return {
				util: r,
				data: a
			}
		}
	}
}, , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
	e.exports = n(222)
}, function (e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = n(197),
		a = n(198),
		i = n(223),
		s = n.n(i),
		o = n(228),
		l = n.n(o),
		d = n(233),
		u = n.n(d),
		c = n(236),
		f = n.n(c),
		m = n(239),
		h = n.n(m),
		p = n(242),
		_ = n.n(p),
		v = n(245),
		y = n.n(v),
		g = n(248),
		M = n.n(g),
		b = n(251),
		L = n.n(b),
		k = n(254),
		w = n.n(k),
		Y = n(257),
		x = n.n(Y),
		T = n(260),
		D = n.n(T),
		S = n(263),
		j = n.n(S),
		C = n(266),
		H = n.n(C),
		A = n(269),
		E = n.n(A),
		P = n(272),
		O = n.n(P),
		$ = n(275),
		N = n.n($),
		R = n(278),
		F = n.n(R),
		W = n(281),
		I = n.n(W),
		z = n(284),
		U = n.n(z),
		q = n(287),
		J = n.n(q),
		B = n(290),
		V = n.n(B),
		G = n(293),
		K = n.n(G),
		X = n(296),
		Q = n.n(X),
		Z = n(299),
		ee = n.n(Z),
		te = n(302),
		ne = n.n(te),
		re = n(305),
		ae = n.n(re),
		ie = n(308),
		se = n.n(ie),
		oe = [{
			path: "/",
			component: s.a,
			children: [{
				path: "result/:election_id",
				component: f.a,
				name: "Election Result"
			}, {
				path: "",
				component: h.a,
				children: [{
					path: "",
					component: _.a,
					name: "Admin Home"
				}, {
					path: "result",
					component: y.a,
					name: "Result"
				}]
			}, {
				path: "position",
				component: M.a,
				children: [{
					path: "",
					component: L.a,
					name: "Manage Position"
				}, {
					path: "add",
					component: w.a,
					name: "Add Position"
				}, {
					path: "edit/:id",
					component: x.a,
					name: "Edit Position"
				}]
			}, {
				path: "partylist",
				component: D.a,
				children: [{
					path: "",
					component: j.a,
					name: "Manage Partylist"
				}, {
					path: "add",
					component: H.a,
					name: "Add Partylist"
				}, {
					path: "edit/:id",
					component: E.a,
					name: "Edit Partylist"
				}]
			}, {
				path: "voter",
				component: O.a,
				children: [{
					path: "",
					component: N.a,
					name: "Manage Voter"
				}, {
					path: "add",
					component: F.a,
					name: "Add Voter"
				}, {
					path: "edit/:id",
					component: I.a,
					name: "Edit Voter"
				}]
			}, {
				path: "nominee",
				component: U.a,
				children: [{
					path: "",
					component: J.a,
					name: "Manage Nominee"
				}, {
					path: "add",
					component: V.a,
					name: "Add Nominee"
				}, {
					path: "edit/:id",
					component: K.a,
					name: "Edit Nominee"
				}]
			}, {
				path: "/account",
				component: Q.a,
				children: [{
					path: "",
					component: ee.a,
					name: "Manage Account"
				}, {
					path: "update",
					component: ne.a,
					name: "Update Account"
				}, {
					path: "password",
					component: ae.a,
					name: "Update Password"
				}, {
					path: "add",
					component: se.a,
					name: "Add Account"
				}]
			}]
		}, {
			path: "/login",
			component: l.a,
			name: "Admin Login"
		}, {
			path: "/test",
			component: u.a
		}];
	n(149), Vue.use(r.a), Vue.mixin(a.a);
	var le = new r.a({
		linkActiveClass: "active",
		routes: oe
	});
	new Vue({
		router: le
	}).$mount("#app")
}, function (e, t, n) {
	var r = n(1)(n(226), n(227), !1, function (e) {
		n(224)
	}, null, null);
	e.exports = r.exports
}, function (e, t, n) {
	var r = n(225);
	"string" == typeof r && (r = [
		[e.i, r, ""]
	]), r.locals && (e.exports = r.locals);
	n(4)("5edc85fc", r, !0, {})
}, function (e, t, n) {
	(e.exports = n(3)(!1)).push([e.i, "body{padding:70px 5px}", ""])
}, function (e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = {
		data: function () {
			return {
				loading: !0
			}
		},
		created: function () {
			var e = this;
			this.util.setTitle("Sistema de Votación - Administrador");
			var t = this;
			this.util.isLogin() ? (this.util.setAuthorization(), axios.get(config.API + "admin/information").then(function (e) {
				console.log(e), t.data.user = e.data.user, t.data.election = e.data.election, t.data.partylists = e.data.partylist, t.data.positions = e.data.position, t.loading = !1
			}).catch(function (n) {
				$.notifyClose(), 401 == e.util.showResult(n) && t.logout()
			})) : this.$router.push({
				name: "Admin Login"
			})
		},
		methods: {
			logout: function () {
				localStorage.clear(), this.$router.push({
					name: "Admin Login"
				})
			}
		}
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("div", [e.loading ? e._e() : n("div", [n("nav", {
				staticClass: "navbar navbar-default navbar-fixed-top",
				attrs: {
					id: "nav"
				}
			}, [n("div", {
				staticClass: "container-fluid"
			}, [n("div", {
				staticClass: "navbar-header"
			}, [e._m(0), e._v(" "), n("a", {
				staticClass: "navbar-brand",
				attrs: {
					href: e.data.baseURL
				}
			}, [e._v("Sistema de Votación")])]), e._v(" "), n("div", {
				staticClass: "collapse navbar-collapse",
				attrs: {
					id: "myNavbar"
				}
			}, [n("ul", {
				staticClass: "nav navbar-nav"
			}, [n("router-link", {
				attrs: {
					to: {
						name: "Admin Home"
					},
					tag: "li",
					exact: ""
				}
			}, [n("a", {
				attrs: {
					href: "#"
				}
			}, [e._v("Inicio")])]), e._v(" "), n("router-link", {
				attrs: {
					to: {
						name: "Manage Position"
					},
					tag: "li"
				}
			}, [n("a", {
				attrs: {
					href: "#"
				}
			}, [e._v("Administrar Posición")])]), e._v(" "), n("router-link", {
				attrs: {
					to: {
						name: "Manage Partylist"
					},
					tag: "li"
				}
			}, [n("a", {
				attrs: {
					href: "#"
				}
			}, [e._v("Administrar Listas")])]), e._v(" "), n("router-link", {
				attrs: {
					to: {
						name: "Manage Voter"
					},
					tag: "li"
				}
			}, [n("a", {
				attrs: {
					href: "#"
				}
			}, [e._v("Administrar Votantes")])]), e._v(" "), n("router-link", {
				attrs: {
					to: {
						name: "Manage Nominee"
					},
					tag: "li"
				}
			}, [n("a", {
				attrs: {
					href: "#"
				}
			}, [e._v("Administrar Nominados")])])], 1), e._v(" "), n("ul", {
				staticClass: "nav navbar-right navbar-nav"
			}, [n("li", {
				staticClass: "dropdown"
			}, [n("a", {
				staticClass: "dropdown-toggle",
				attrs: {
					href: "#",
					"data-toggle": "dropdown",
					role: "button",
					"aria-haspopup": "true",
					"aria-expanded": "false"
				}
			}, [n("span", {
				staticClass: "fa fa-user"
			}), e._v(" " + e._s(e.data.user.name) + " "), n("span", {
				staticClass: "caret"
			})]), e._v(" "), n("ul", {
				staticClass: "dropdown-menu"
			}, [n("router-link", {
				attrs: {
					to: {
						name: "Update Account"
					},
					tag: "li",
					exact: ""
				}
			}, [n("a", {
				attrs: {
					href: "#"
				}
			}, [e._v("Actualizar Cuenta")])]), e._v(" "), 1 == e.data.user.id ? n("router-link", {
				attrs: {
					to: {
						name: "Manage Account"
					},
					tag: "li"
				}
			}, [n("a", {
				attrs: {
					href: "#"
				}
			}, [e._v("Administrar Cuenta")])]) : e._e(), e._v(" "), n("li", {
				on: {
					click: function (t) {
						return e.logout()
					}
				}
			}, [n("a", [e._v("Cerrar sesión")])])], 1)])])])])]), e._v(" "), n("router-view")], 1), e._v(" "), e.loading ? n("div", {
				staticClass: "container"
			}, [e._m(1)]) : e._e()])
		},
		staticRenderFns: [function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return t("button", {
				staticClass: "navbar-toggle",
				attrs: {
					type: "button",
					"data-toggle": "collapse",
					"data-target": "#myNavbar"
				}
			}, [t("span", {
				staticClass: "icon-bar"
			}), this._v(" "), t("span", {
				staticClass: "icon-bar"
			}), this._v(" "), t("span", {
				staticClass: "icon-bar"
			})])
		}, function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return t("div", {
				staticClass: "jumbotron"
			}, [t("h1", [this._v("Loading "), t("i", {
				staticClass: "fa fa-refresh fa-spin"
			})])])
		}]
	}
}, function (e, t, n) {
	var r = n(1)(n(231), n(232), !1, function (e) {
		n(229)
	}, null, null);
	e.exports = r.exports
}, function (e, t, n) {
	var r = n(230);
	"string" == typeof r && (r = [
		[e.i, r, ""]
	]), r.locals && (e.exports = r.locals);
	n(4)("013fadee", r, !0, {})
}, function (e, t, n) {
	(e.exports = n(3)(!1)).push([e.i, "body{padding:50px 5px}", ""])
}, function (e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = {
		data: function () {
			return {
				loading: {
					value: "Login",
					isLoading: !1
				}
			}
		},
		created: function () {
			if (this.util.isLogin()) return this.$router.push({
				name: "Admin Home"
			});
			this.util.setTitle("Admin Login")
		},
		methods: {
			login: function () {
				var e = this;
				if (!this.loading.isLoading) {
					var t = this;
					this.startLoading(), axios.post(config.API + "admin/login", $("#login_form").serialize()).then(function (n) {
						t.stopLoading(), e.util.showResult(n, "success") && (localStorage["Access Token"] = "Bearer " + n.data.token, e.util.setAuthorization(), t.$router.push({
							name: "Admin Home"
						}))
					}).catch(function (n) {
						t.stopLoading(), e.util.showResult(n, "error")
					})
				}
			},
			startLoading: function () {
				this.util.notify("Iniciando sesión", "loading"), this.loading = {
					value: "Loading...",
					isLoading: !0
				}
			},
			stopLoading: function () {
				$.notifyClose(), this.loading = {
					value: "Login",
					isLoading: !1
				}
			}
		}
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("div", {
				staticClass: "col-md-5 col-md-offset-3"
			}, [n("div", {
				staticClass: "panel panel-default"
			}, [e._m(0), e._v(" "), n("div", {
				staticClass: "panel-body"
			}, [n("form", {
				attrs: {
					id: "login_form"
				},
				on: {
					submit: function (t) {
						return t.preventDefault(), e.login(t)
					}
				}
			}, [e._m(1), e._v(" "), e._m(2), e._v(" "), e._m(3), e._v(" "), n("div", {
				staticClass: "form-group"
			}, [n("input", {
				staticClass: "btn btn-primary form-control",
				class: {
					disabled: e.loading.isLoading
				},
				attrs: {
					type: "submit"
				},
				domProps: {
					value: e.loading.value
				}
			})])])])])])
		},
		staticRenderFns: [function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return t("div", {
				staticClass: "panel-heading"
			}, [t("h4", [this._v("Inicio de sesión de Admin")])])
		}, function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return t("div", {
				staticClass: "form-group"
			}, [t("label", {
				attrs: {
					for: "email"
				}
			}, [this._v("E-mail")]), this._v(" "), t("input", {
				staticClass: "form-control",
				attrs: {
					type: "email",
					name: "email",
					required: ""
				}
			})])
		}, function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return t("div", {
				staticClass: "form-group"
			}, [t("label", {
				attrs: {
					for: "password"
				}
			}, [this._v("Contraseña")]), this._v(" "), t("input", {
				staticClass: "form-control",
				attrs: {
					type: "password",
					name: "password",
					id: "password",
					required: ""
				}
			})])
		}, function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return t("label", [t("input", {
				attrs: {
					type: "checkbox",
					id: "visibility",
					onclick: " $(this)[0].checked ? \r\n\t\t\t\t\t\t\t\t\t$('#password').attr('type','text'):\r\n\t\t\t\t\t\t\t\t\t$('#password').attr('type','password')"
				}
			}), this._v(" Mostrar contraseña\r\n\t\t\t\t")])
		}]
	}
}, function (e, t, n) {
	var r = n(1)(n(234), n(235), !1, null, null, null);
	e.exports = r.exports
}, function (e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = {
		created: function () {
			var e = [
				["Column1", "Column2", '<button v-on:click="x()">click me</button>'],
				["Column1", "Column2", '<button v-on:click="x()">click me</button>'],
				["Column1", "Column2", '<button v-on:click="x()">click me</button>'],
				["Column1", "Column2", '<button v-on:click="x()">click me</button>'],
				["Column1", "Column2", '<button v-on:click="x()">click me</button>'],
				["Column1", "Column2", '<button v-on:click="x()">click me</button>'],
				["Column1", "Column2", '<button v-on:click="x()">click me</button>'],
				["Column1", "Column2", '<button v-on:click="x()">click me</button>'],
				["Column1", "Column2", '<button v-on:click="x()">click me</button>'],
				["Column1", "Column2", '<button v-on:click="x()">click me</button>'],
				["Column1", "Column2", '<button v-on:click="x()">click me</button>']
			];
			this.$nextTick(function () {
				$("#sample_table").dataTable({
					aaData: e
				})
			})
		},
		methods: {
			x: function () {
				console.log("clicked")
			}
		}
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			this.$createElement;
			this._self._c;
			return this._m(0)
		},
		staticRenderFns: [function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return t("table", {
				staticClass: "table table-hover",
				attrs: {
					id: "sample_table"
				}
			}, [t("thead", [t("tr", [t("th", [this._v("A")]), this._v(" "), t("th", [this._v("B")]), this._v(" "), t("th", [this._v("C")])])]), this._v(" "), t("tbody")])
		}]
	}
}, function (e, t, n) {
	var r = n(1)(n(237), n(238), !1, null, null, null);
	e.exports = r.exports
}, function (e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = {
		data: function () {
			return {
				nominees: [],
				results: [],
				partylists: [],
				positions: []
			}
		},
		methods: {
			getNominee: function (e) {
				var t = this.nominees;
				for (var n in t)
					if (e == t[n].id) return t[n];
				return {}
			},
			getPartylist: function (e) {
				var t = this.partylists;
				for (var n in t)
					if (e == t[n].id) return t[n].name;
				return "No Partylist"
			}
		},
		created: function () {
			this.util.notify("Cargando por favor espere...", "loading");
			var e = this;
			axios.get(config.API + "election/result/" + this.election_id).then(function (t) {
				$.notifyClose(), e.nominees = t.data.nominee, e.results = t.data.result, e.partylists = t.data.partylist, e.positions = t.data.position
			}).catch(function (t) {
				$.notifyClose(), e.util.showResult(t, "error")
			})
		},
		computed: {
			election_id: function () {
				return this.$route.params.election_id
			},
			no_votes: function () {
				var e = this.nominees,
					t = this.results,
					n = [];
				for (var r in e) {
					var a = !1;
					for (var i in t) t[i].nominee_id == e[r].id && (a = !0);
					a || n.push(e[r])
				}
				return n
			}
		}
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("div", {
				staticClass: "container"
			}, [n("div", {
				staticClass: "row"
			}, [n("div", {
				staticClass: "col-md-12"
			}, e._l(e.positions, function (t) {
				return n("div", [n("h5", [e._v(e._s(t.name))]), e._v(" "), n("div", {
					staticClass: "table-responsive"
				}, [n("table", {
					staticClass: "table table-striped table-condensed"
				}, [e._m(0, !0), e._v(" "), n("tbody", [e._l(e.results, function (r) {
					return r.position_id == t.id ? n("tr", [n("td", [e._v(e._s(e.getNominee(r.nominee_id).student_id))]), e._v(" "), n("td", [e._v(e._s(e.getNominee(r.nominee_id).name))]), e._v(" "), n("td", [e._v(e._s(e.getPartylist(e.getNominee(r.nominee_id).partylist_id)))]), e._v(" "), n("td", [e._v(e._s(r.votes))])]) : e._e()
				}), e._v(" "), e._l(e.no_votes, function (r) {
					return r.position_id == t.id ? n("tr", [n("td", [e._v(e._s(r.student_id))]), e._v(" "), n("td", [e._v(e._s(r.name))]), e._v(" "), n("td", [e._v(e._s(e.getPartylist(r.partylist_id)))]), e._v(" "), n("td", [e._v("0")])]) : e._e()
				})], 2)])]), e._v(" "), n("hr")])
			}), 0)])])
		},
		staticRenderFns: [function () {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("thead", [n("tr", [n("th", {
				attrs: {
					width: "10%"
				}
			}, [e._v("Código")]), e._v(" "), n("th", {
				attrs: {
					width: "30%"
				}
			}, [e._v("Nombre")]), e._v(" "), n("th", {
				attrs: {
					width: "20%"
				}
			}, [e._v("Lista")]), e._v(" "), n("th", {
				attrs: {
					width: "20%"
				}
			}, [e._v("Votos")])])])
		}]
	}
}, function (e, t, n) {
	var r = n(1)(n(240), n(241), !1, null, null, null);
	e.exports = r.exports
}, function (e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = {
		created: function () {
			this.util.setTitle("Sistema de Votación - Administrar Elección")
		}
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return t("div", {
				staticClass: "container col-md-8 col-md-offset-2"
			}, [t("h4", [this._v("Administrar Elección")]), this._v(" "), t("router-view")], 1)
		},
		staticRenderFns: []
	}
}, function (e, t, n) {
	var r = n(1)(n(243), n(244), !1, null, null, null);
	e.exports = r.exports
}, function (e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = {
		data: function () {
			return {
				start_date: null
			}
		},
		created: function () {
			this.refreshElection();
			var e = this;
			setInterval(function () {
				e.start_date = moment(e.data.election.start).fromNow()
			}, 1e3)
		},
		methods: {
			stop: function () {
				var e = this;
				this.util.hideModal("#stop-election-modal"), this.util.notify("Stopping Election", "loading"), axios.post(config.API + "election/stop", $("#stop_form").serialize()).then(function (t) {
					$.notifyClose(), e.util.showResult(t, "success") && (e.refreshElection(), e.data.election = t.data.election, e.data.positions = [], e.data.partylists = [], e.data.voters = [], e.data.nominees = [], e.data.results = [])
				}).catch(function (t) {
					$.notifyClose(), e.util.showResult(t, "error")
				})
			},
			start: function () {
				var e = this;
				this.util.hideModal("#start-election-modal"), this.util.notify("Cargando por favor espere", "loading"), axios.post(config.API + "election/start", $("#start_form").serialize()).then(function (t) {
					$.notifyClose(), e.util.showResult(t, "success") && (e.refreshElection(), e.data.election = t.data.election)
				}).catch(function (t) {
					$.notifyClose(), e.util.showResult(t, "error")
				})
			},
			refreshElection: function () {
				this.util.notify("Actualizando Elección", "loading");
				var e = this;
				axios.get(config.API + "election").then(function (t) {
					$.notifyClose(), e.data.elections = t.data
				}).catch(function (t) {
					$.notifyClose(), e.util.showResult(t, "error")
				})
			}
		}
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("div", {
				staticClass: "panel panel-default"
			}, [n("div", {
				staticClass: "panel-body"
			}, [n("h4", [e._v(" Elecciones recientes")]), e._v(" "), n("div", {
				staticClass: "form-group"
			}, [1 == e.data.election.status ? n("button", {
				staticClass: "btn btn-success",
				on: {
					click: function (t) {
						return e.util.showModal("#start-election-modal")
					}
				}
			}, [e._v("Iniciar elección")]) : e._e(), e._v(" "), 2 == e.data.election.status ? n("router-link", {
				staticClass: "btn btn-info",
				attrs: {
					to: {
						name: "Result"
					}
				}
			}, [e._v("\r\n\t\t\t\tVer resultados\r\n\t\t\t")]) : e._e(), e._v(" "), 2 == e.data.election.status ? n("button", {
				staticClass: "btn btn-danger",
				on: {
					click: function (t) {
						return e.util.showModal("#stop-election-modal")
					}
				}
			}, [e._v("Finalizar Elección")]) : e._e(), e._v(" "), 2 == e.data.election.status ? n("label", [e._v("La elección ha comenzado " + e._s(e.start_date))]) : e._e()], 1), e._v(" "), n("div", {
				staticClass: "table-responsive"
			}, [n("table", {
				staticClass: "table table-hover"
			}, [e._m(0), e._v(" "), n("tbody", [e._l(e.data.elections, function (t) {
				return n("tr", [n("td", [e._v(e._s(t.id))]), e._v(" "), n("td", [e._v(e._s(t.name))]), e._v(" "), n("td", [e._v(e._s(t.start))]), e._v(" "), n("td", [e._v(e._s(t.end))]), e._v(" "), n("td", [n("router-link", {
					staticClass: "btn btn-info",
					attrs: {
						to: {
							name: "Election Result",
							params: {
								election_id: t.id
							}
						}
					}
				}, [e._v("Ver resultado")])], 1)])
			}), e._v(" "), e.data.elections.length < 1 ? n("tr", [n("td", {
				attrs: {
					colspan: "5"
				}
			}, [e._v("Aún no hay elecciones")])]) : e._e()], 2)])]), e._v(" "), n("form", {
				attrs: {
					id: "start_form"
				},
				on: {
					submit: function (t) {
						return t.preventDefault(), e.start(t)
					}
				}
			}, [n("modal", {
				attrs: {
					id: "start-election-modal"
				}
			}, [n("modal-header", [e._v("Iniciar elección")]), e._v(" "), n("modal-body", [n("div", {
				staticClass: "form-group"
			}, [n("label", {
				attrs: {
					for: "name"
				}
			}, [e._v("Nombre de la elección")]), e._v(" "), n("input", {
				staticClass: "form-control",
				attrs: {
					type: "text",
					name: "name",
					placeholder: "(Optional)"
				}
			})]), e._v(" "), n("div", {
				staticClass: "form-group"
			}, [n("label", {
				attrs: {
					for: "password"
				}
			}, [e._v("Confirmar contraseña")]), e._v(" "), n("input", {
				staticClass: "form-control",
				attrs: {
					type: "password",
					name: "password",
					required: ""
				}
			})])]), e._v(" "), n("modal-footer", [n("input", {
				staticClass: "btn btn-info",
				attrs: {
					type: "submit",
					value: "Iniciar"
				}
			}), e._v(" "), n("input", {
				staticClass: "btn btn-default",
				attrs: {
					type: "button",
					"data-dismiss": "modal",
					value: "Cancelar"
				}
			})])], 1)], 1), e._v(" "), n("form", {
				attrs: {
					id: "stop_form"
				},
				on: {
					submit: function (t) {
						return t.preventDefault(), e.stop(t)
					}
				}
			}, [n("modal", {
				attrs: {
					id: "stop-election-modal"
				}
			}, [n("modal-header", [e._v("Detener las elecciones")]), e._v(" "), n("modal-body", [n("div", {
				staticClass: "form-group"
			}, [n("label", {
				attrs: {
					for: "name"
				}
			}, [e._v("Nombre de la elección")]), e._v(" "), n("input", {
				staticClass: "form-control",
				attrs: {
					type: "text",
					name: "name",
					placeholder: "(Opcional)"
				},
				domProps: {
					value: e.data.election.name
				}
			})]), e._v(" "), n("div", {
				staticClass: "form-group"
			}, [n("label", {
				attrs: {
					for: "password"
				}
			}, [e._v("Confirmar contraseña")]), e._v(" "), n("input", {
				staticClass: "form-control",
				attrs: {
					type: "password",
					name: "password",
					required: ""
				}
			})])]), e._v(" "), n("modal-footer", [n("input", {
				staticClass: "btn btn-danger",
				attrs: {
					type: "submit",
					value: "Detener las elecciones"
				}
			}), e._v(" "), n("input", {
				staticClass: "btn btn-default",
				attrs: {
					type: "button",
					"data-dismiss": "modal",
					value: "Cancelar"
				}
			})])], 1)], 1)])])
		},
		staticRenderFns: [function () {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("thead", [n("tr", [n("th", [e._v("ID")]), e._v(" "), n("th", [e._v("Nombre de la elección")]), e._v(" "), n("th", [e._v("Inicio de Elección")]), e._v(" "), n("th", [e._v("Fin de Elección")]), e._v(" "), n("th", [e._v("Ver")])])])
		}]
	}
}, function (e, t, n) {
	var r = n(1)(n(246), n(247), !1, null, null, null);
	e.exports = r.exports
}, function (e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = {
		created: function () {
			console.log(this), this.refreshNominees(), this.$nextTick(function () {
				this.initChart()
			})
		},
		watch: {
			position_id: function () {
				this.initChart()
			}
		},
		methods: {
			refreshNominees: function () {
				var e = this;
				this.util.notify("Actualizando resultados", "loading"), axios.get(config.API + "nominee").then(function (t) {
					$.notifyClose(), e.data.nominees = t.data, e.refreshResults()
				}).catch(function (t) {
					$.notifyClose(), e.util.showResult(t)
				})
			},
			refreshResults: function () {
				var e = this;
				this.util.notify("Actualizando resultados", "loading"), axios.get(config.API + "election/results").then(function (t) {
					$.notifyClose(), e.data.results = t.data, e.data.last_update = new Date, e.initChart()
				}).catch(function (t) {
					$.notifyClose(), e.util.showResult(t)
				})
			},
			initChart: function () {
				$.plot($("#chart"), this.datas, {
					series: {
						pie: {
							show: !0,
							innerRadius: .5
						}
					}
				})
			},
			getPosition: function (e) {
				var t = this.data.positions;
				for (var n in t)
					if (e == t[n].id) return t[n].name;
				return ""
			},
			getNominee: function (e) {
				var t = this.data.nominees;
				for (var n in t)
					if (e == t[n].id) return t[n].name;
				return ""
			},
			getVotes: function (e) {
				var t = this.data.results;
				for (var n in t)
					if (t[n].nominee_id == e) return t[n].votes;
				return 0
			}
		},
		computed: {
			last_update: function () {
				var e = this.data.last_update;
				return e.toDateString() + " " + e.toLocaleTimeString()
			},
			position_id: function () {
				return this.$route.query.position_id ? this.$route.query.position_id : this.data.positions[0].id
			},
			datas: function () {
				var e = [],
					t = this.data.nominees;
				for (var n in t)
					if (t[n].position_id == this.position_id) {
						var r = [];
						r.label = t[n].name, r.data = [
							[1, this.getVotes(t[n].id)]
						], e.push(r)
					}
				return e
			}
		}
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("div", {
				staticClass: "row"
			}, [n("div", {
				staticClass: "col-md-4"
			}, [n("h4", [e._v("Posiciones")]), n("hr"), e._v(" "), n("ul", {
				staticClass: "list-group"
			}, [e._l(e.data.positions, function (t) {
				return n("router-link", {
					key: t.id,
					staticClass: "list-group-item",
					class: {
						active: t.id == e.position_id
					},
					attrs: {
						tag: "li",
						to: {
							query: {
								position_id: t.id
							}
						},
						exact: "",
						replace: ""
					}
				}, [e._v("\r\n\t\t\t\t" + e._s(t.name) + "\r\n\t\t\t")])
			}), e._v(" "), n("li", {
				staticClass: "list-group-item"
			}, [n("center", [n("button", {
				staticClass: "btn btn-info",
				on: {
					click: function (t) {
						return e.refreshNominees()
					}
				}
			}, [e._v("\r\n\t\t\t\t\t\tActualizar resultados "), n("i", {
				staticClass: "fa fa-refresh"
			})])])], 1)], 2)]), e._v(" "), n("div", {
				staticClass: "col-md-8"
			}, [n("h4", [e._v("Resultados")]), n("hr"), e._v(" "), n("div", {
				staticClass: "panel panel-default"
			}, [n("div", {
				staticClass: "panel-heading"
			}, [e._v(e._s(e.getPosition(e.position_id)) + " - Resultados de : " + e._s(e.last_update))]), e._v(" "), e._m(0)])])])
		},
		staticRenderFns: [function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return t("div", {
				staticClass: "panel-body"
			}, [t("div", {
				staticStyle: {
					height: "300px",
					width: "300px"
				},
				attrs: {
					id: "chart"
				}
			})])
		}]
	}
}, function (e, t, n) {
	var r = n(1)(n(249), n(250), !1, null, null, null);
	e.exports = r.exports
}, function (e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = {
		created: function () {
			this.util.setTitle("Sistema de Votación - Administrar Posición")
		}
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return t("div", {
				staticClass: "container col-md-8 col-md-offset-2"
			}, [t("h4", [this._v("Administrar Posición")]), this._v(" "), t("router-view")], 1)
		},
		staticRenderFns: []
	}
}, function (e, t, n) {
	var r = n(1)(n(252), n(253), !1, null, null, null);
	e.exports = r.exports
}, function (e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = {
		data: function () {
			return {
				id: 0
			}
		},
		created: function () {
			this.$route.query.refresh && (this.refreshPosition(), this.$router.replace({
				name: "Manage Position"
			}))
		},
		methods: {
			refreshPosition: function () {
				var e = this;
				this.util.notify("Actualizando Posición", "loading"), axios.get(config.API + "position").then(function (t) {
					console.log(t), $.notifyClose(), e.data.positions = t.data
				}).catch(function (t) {
					$.notifyClose(), e.util.showResult(t)
				})
			},
			initDatatable: function () {
				$("#position_table").DataTable({
					destroy: !0,
					searching: !1,
					info: !1,
					autoWidth: !1,
					dom: "Bfrtip"
				})
			},
			edit: function (e) {
				this.data.position = this.data.positions[e], this.$router.push({
					name: "Edit Position",
					params: {
						id: this.data.position.id
					}
				})
			},
			deletePosition: function () {
				var e = this;
				this.util.notify("Eliminando posición", "loading"), this.util.hideModal("#delete-position-modal"), axios.delete(config.API + "position/" + this.id).then(function (t) {
					$.notifyClose(), e.util.showResult(t, "success") && e.refreshPosition()
				}).catch(function (t) {
					$.notifyClose(), e.util.showResult(t)
				})
			}
		}
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("div", [n("div", {
				staticClass: "panel panel-default"
			}, [n("div", {
				staticClass: "panel-body"
			}, [n("div", {
				staticClass: "form-group"
			}, [n("router-link", {
				staticClass: "btn btn-success",
				attrs: {
					to: {
						name: "Add Position"
					}
				}
			}, [n("i", {
				staticClass: "fa fa-plus"
			}), e._v(" Agregar posición\r\n\t\t\t")]), e._v(" "), n("button", {
				staticClass: "btn btn-default",
				on: {
					click: function (t) {
						return e.refreshPosition()
					}
				}
			}, [n("i", {
				staticClass: "fa fa-refresh"
			}), e._v(" Actualizar Posición\r\n\t\t\t")])], 1), e._v(" "), n("div", {
				staticClass: "table-responsive"
			}, [n("table", {
				staticClass: "table table-hover",
				attrs: {
					id: "position_table"
				}
			}, [e._m(0), e._v(" "), n("tbody", [e._l(e.data.positions, function (t, r) {
				return n("tr", [n("td", [e._v(e._s(t.id))]), e._v(" "), n("td", [e._v(e._s(t.name))]), e._v(" "), n("td", [n("button", {
					staticClass: "btn btn-info",
					on: {
						click: function (t) {
							return e.edit(r)
						}
					}
				}, [n("i", {
					staticClass: "fa fa-edit"
				}), e._v(" Editar\r\n\t\t\t\t\t\t\t")]), e._v(" "), n("button", {
					staticClass: "btn btn-danger",
					on: {
						click: function (n) {
							e.util.showModal("#delete-position-modal"), e.id = t.id
						}
					}
				}, [n("i", {
					staticClass: "fa fa-trash"
				}), e._v(" Eliminar\r\n\t\t\t\t\t\t\t")])])])
			}), e._v(" "), e.data.positions.length < 1 ? n("tr", [n("td", {
				attrs: {
					colspan: "3"
				}
			}, [e._v("Sin posiciones")])]) : e._e()], 2)])])])]), e._v(" "), n("modal", {
				attrs: {
					id: "delete-position-modal"
				}
			}, [n("modal-header", [e._v("Eliminar posición")]), e._v(" "), n("modal-body", [n("h2", [e._v("¿Estás seguro de eliminar la posición?")])]), e._v(" "), n("modal-footer", [n("button", {
				staticClass: "btn btn-danger",
				on: {
					click: function (t) {
						return e.deletePosition()
					}
				}
			}, [e._v("Eliminar")]), e._v(" "), n("button", {
				staticClass: "btn btn-default",
				on: {
					click: function (t) {
						return e.util.hideModal("#delete-position-modal")
					}
				}
			}, [e._v("Cancelar")])])], 1)], 1)
		},
		staticRenderFns: [function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return t("thead", [t("tr", [t("th", [this._v("ID")]), this._v(" "), t("th", [this._v("Nombre")]), this._v(" "), t("th", [this._v("Acción")])])])
		}]
	}
}, function (e, t, n) {
	var r = n(1)(n(255), n(256), !1, null, null, null);
	e.exports = r.exports
}, function (e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = {
		data: function () {
			return {
				loading: !1
			}
		},
		methods: {
			add: function () {
				if (!this.loading) {
					this.loading = !0;
					var e = this;
					this.util.notify("Agregar posición", "loading"), axios.post(config.API + "position", $("#add-form").serialize()).then(function (t) {
						$.notifyClose(), e.loading = !1, e.util.showResult(t, "success") && e.$router.push({
							name: "Manage Position",
							query: {
								refresh: !0
							}
						})
					}).catch(function (t) {
						$.notifyClose(), e.loading = !1, e.util.showResult(t)
					})
				}
			}
		}
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("div", {
				staticClass: "panel panel-default"
			}, [n("div", {
				staticClass: "panel-body"
			}, [n("h4", [e._v("Agregar posición")]), e._v(" "), n("form", {
				attrs: {
					id: "add-form"
				},
				on: {
					submit: function (t) {
						return t.preventDefault(), e.add()
					}
				}
			}, [e._m(0), e._v(" "), n("div", {
				staticClass: "form-group"
			}, [n("button", {
				staticClass: "btn btn-success",
				attrs: {
					type: "submit"
				}
			}, [e._v("Enviar")]), e._v(" "), n("router-link", {
				staticClass: "btn btn-default",
				attrs: {
					to: {
						name: "Manage Position"
					}
				}
			}, [e._v("Atrás")])], 1)])])])
		},
		staticRenderFns: [function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return t("div", {
				staticClass: "form-group"
			}, [t("label", {
				attrs: {
					for: "name"
				}
			}, [this._v("Nombre")]), this._v(" "), t("input", {
				staticClass: "form-control",
				attrs: {
					type: "text",
					name: "name",
					required: ""
				}
			})])
		}]
	}
}, function (e, t, n) {
	var r = n(1)(n(258), n(259), !1, null, null, null);
	e.exports = r.exports
}, function (e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = {
		data: function () {
			return {
				loading: !1
			}
		},
		created: function () {
			this.data.position.id || this.$router.push({
				name: "Manage Position"
			})
		},
		methods: {
			edit: function () {
				if (!this.loading) {
					this.loading = !0;
					var e = this;
					this.util.notify("Actualizando posición", "loading"), axios.put(config.API + "position/" + this.data.position.id, $("#edit-form").serialize()).then(function (t) {
						e.loading = !1, $.notifyClose(), e.util.showResult(t, "success") && e.$router.push({
							name: "Manage Position",
							query: {
								refresh: !0
							}
						})
					}).catch(function (t) {
						$.notifyClose(), e.loading = !1, e.util.showResult(t)
					})
				}
			}
		}
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("div", {
				staticClass: "panel panel-default"
			}, [n("div", {
				staticClass: "panel-body"
			}, [n("h4", [e._v("Editar posición")]), e._v(" "), n("form", {
				attrs: {
					id: "edit-form"
				},
				on: {
					submit: function (t) {
						return t.preventDefault(), e.edit()
					}
				}
			}, [n("div", {
				staticClass: "form-group"
			}, [n("label", {
				attrs: {
					for: "name"
				}
			}, [e._v("Nombre")]), e._v(" "), n("input", {
				staticClass: "form-control",
				attrs: {
					type: "text",
					name: "name",
					required: ""
				},
				domProps: {
					value: e.data.position.name
				}
			})]), e._v(" "), n("div", {
				staticClass: "form-group"
			}, [n("input", {
				staticClass: "btn btn-success",
				attrs: {
					type: "submit",
					value: "Enviar"
				}
			}), e._v(" "), n("router-link", {
				staticClass: "btn btn-default",
				attrs: {
					to: {
						name: "Manage Position"
					}
				}
			}, [e._v("Atrás")])], 1)])])])
		},
		staticRenderFns: []
	}
}, function (e, t, n) {
	var r = n(1)(n(261), n(262), !1, null, null, null);
	e.exports = r.exports
}, function (e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = {
		created: function () {
			this.util.setTitle("Sistema de Votación - Administrar Listas")
		}
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return t("div", {
				staticClass: "container col-md-8 col-md-offset-2"
			}, [t("h4", [this._v("Administrar Listas")]), this._v(" "), t("router-view")], 1)
		},
		staticRenderFns: []
	}
}, function (e, t, n) {
	var r = n(1)(n(264), n(265), !1, null, null, null);
	e.exports = r.exports
}, function (e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = {
		data: function () {
			return {
				id: 0
			}
		},
		created: function () {
			this.$route.query.refresh && (this.refreshPartylist(), this.$router.replace({
				name: "Manage Partylist"
			}))
		},
		methods: {
			refreshPartylist: function () {
				var e = this;
				this.util.notify("Actualizando Lista", "loading"), axios.get(config.API + "partylist").then(function (t) {
					console.log(t), $.notifyClose(), e.data.partylists = t.data
				}).catch(function (t) {
					$.notifyClose(), e.util.showResult(t)
				})
			},
			edit: function (e) {
				this.data.partylist = this.data.partylists[e], this.$router.push({
					name: "Edit Partylist",
					params: {
						id: this.data.partylist.id
					}
				})
			},
			deletePartylist: function () {
				var e = this;
				this.util.notify("Eliminando Lista", "loading"), this.util.hideModal("#delete-partylist-modal"), axios.delete(config.API + "partylist/" + this.id).then(function (t) {
					$.notifyClose(), e.util.showResult(t, "success") && e.refreshPartylist()
				}).catch(function (t) {
					$.notifyClose(), e.util.showResult(t)
				})
			}
		}
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("div", [n("div", {
				staticClass: "panel panel-default"
			}, [n("div", {
				staticClass: "panel-body"
			}, [n("div", {
				staticClass: "form-group"
			}, [n("router-link", {
				staticClass: "btn btn-success",
				attrs: {
					to: {
						name: "Add Partylist"
					}
				}
			}, [n("i", {
				staticClass: "fa fa-plus"
			}), e._v(" Agregar Lista\r\n\t\t\t")]), e._v(" "), n("button", {
				staticClass: "btn btn-default",
				on: {
					click: function (t) {
						return e.refreshPartylist()
					}
				}
			}, [n("i", {
				staticClass: "fa fa-refresh"
			}), e._v(" Actualizar Lista\r\n\t\t\t")])], 1), e._v(" "), n("div", {
				staticClass: "table-responsive"
			}, [n("table", {
				staticClass: "table table-hover",
				attrs: {
					id: "partylist_table"
				}
			}, [e._m(0), e._v(" "), n("tbody", [e._l(e.data.partylists, function (t, r) {
				return n("tr", [n("td", [e._v(e._s(t.id))]), e._v(" "), n("td", [e._v(e._s(t.name))]), e._v(" "), n("td", [n("button", {
					staticClass: "btn btn-info",
					on: {
						click: function (t) {
							return e.edit(r)
						}
					}
				}, [n("i", {
					staticClass: "fa fa-edit"
				}), e._v(" Editar\r\n\t\t\t\t\t\t\t")]), e._v(" "), n("button", {
					staticClass: "btn btn-danger",
					on: {
						click: function (n) {
							e.util.showModal("#delete-partylist-modal"), e.id = t.id
						}
					}
				}, [n("i", {
					staticClass: "fa fa-trash"
				}), e._v(" Eliminar\r\n\t\t\t\t\t\t\t")])])])
			}), e._v(" "), e.data.partylists.length < 1 ? n("tr", [n("td", {
				attrs: {
					colspan: "3"
				}
			}, [e._v("No existen listas")])]) : e._e()], 2)])])])]), e._v(" "), n("modal", {
				attrs: {
					id: "delete-partylist-modal"
				}
			}, [n("modal-header", [e._v("Eliminar lista")]), e._v(" "), n("modal-body", [n("h2", [e._v("¿Estás seguro de eliminar la Lista?")])]), e._v(" "), n("modal-footer", [n("button", {
				staticClass: "btn btn-danger",
				on: {
					click: function (t) {
						return e.deletePartylist()
					}
				}
			}, [e._v("Eliminar")]), e._v(" "), n("button", {
				staticClass: "btn btn-default",
				on: {
					click: function (t) {
						return e.util.hideModal("#delete-partylist-modal")
					}
				}
			}, [e._v("Cancelar")])])], 1)], 1)
		},
		staticRenderFns: [function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return t("thead", [t("tr", [t("th", [this._v("ID")]), this._v(" "), t("th", [this._v("Nombre")]), this._v(" "), t("th", [this._v("Acción")])])])
		}]
	}
}, function (e, t, n) {
	var r = n(1)(n(267), n(268), !1, null, null, null);
	e.exports = r.exports
}, function (e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = {
		data: function () {
			return {
				loading: !1
			}
		},
		methods: {
			add: function () {
				if (!this.loading) {
					this.loading = !0;
					var e = this;
					this.util.notify("Añadiendo Lista", "loading"), axios.post(config.API + "partylist", $("#add-form").serialize()).then(function (t) {
						$.notifyClose(), e.loading = !1, e.util.showResult(t, "success") && e.$router.push({
							name: "Manage Partylist",
							query: {
								refresh: !0
							}
						})
					}).catch(function (t) {
						$.notifyClose(), e.loading = !1, e.util.showResult(t)
					})
				}
			}
		}
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("div", {
				staticClass: "panel panel-default"
			}, [n("div", {
				staticClass: "panel-body"
			}, [n("h4", [e._v("Agregar Lista")]), e._v(" "), n("form", {
				attrs: {
					id: "add-form"
				},
				on: {
					submit: function (t) {
						return t.preventDefault(), e.add()
					}
				}
			}, [e._m(0), e._v(" "), n("div", {
				staticClass: "form-group"
			}, [n("button", {
				staticClass: "btn btn-success",
				attrs: {
					type: "submit"
				}
			}, [e._v("Enviar")]), e._v(" "), n("router-link", {
				staticClass: "btn btn-default",
				attrs: {
					to: {
						name: "Manage Partylist"
					}
				}
			}, [e._v("Atrás")])], 1)])])])
		},
		staticRenderFns: [function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return t("div", {
				staticClass: "form-group"
			}, [t("label", {
				attrs: {
					for: "name"
				}
			}, [this._v("Nombre")]), this._v(" "), t("input", {
				staticClass: "form-control",
				attrs: {
					type: "text",
					name: "name",
					required: ""
				}
			})])
		}]
	}
}, function (e, t, n) {
	var r = n(1)(n(270), n(271), !1, null, null, null);
	e.exports = r.exports
}, function (e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = {
		data: function () {
			return {
				loading: !1
			}
		},
		created: function () {
			this.data.partylist.id || this.$router.push({
				name: "Manage Partylist"
			})
		},
		methods: {
			edit: function () {
				if (!this.loading) {
					this.loading = !0;
					var e = this;
					this.util.notify("Actualizando Lista", "loading"), axios.put(config.API + "partylist/" + this.data.partylist.id, $("#edit-form").serialize()).then(function (t) {
						e.loading = !1, $.notifyClose(), e.util.showResult(t, "success") && e.$router.push({
							name: "Manage Partylist",
							query: {
								refresh: !0
							}
						})
					}).catch(function (t) {
						$.notifyClose(), e.loading = !1, e.util.showResult(t)
					})
				}
			}
		}
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("div", {
				staticClass: "panel panel-default"
			}, [n("div", {
				staticClass: "panel-body"
			}, [n("h4", [e._v("Editar Lista")]), e._v(" "), n("form", {
				attrs: {
					id: "edit-form"
				},
				on: {
					submit: function (t) {
						return t.preventDefault(), e.edit()
					}
				}
			}, [n("div", {
				staticClass: "form-group"
			}, [n("label", {
				attrs: {
					for: "name"
				}
			}, [e._v("Nombre")]), e._v(" "), n("input", {
				staticClass: "form-control",
				attrs: {
					type: "text",
					name: "name",
					required: ""
				},
				domProps: {
					value: e.data.partylist.name
				}
			})]), e._v(" "), n("div", {
				staticClass: "form-group"
			}, [n("input", {
				staticClass: "btn btn-success",
				attrs: {
					type: "submit",
					value: "Enviar"
				}
			}), e._v(" "), n("router-link", {
				staticClass: "btn btn-default",
				attrs: {
					to: {
						name: "Manage Partylist"
					}
				}
			}, [e._v("Atrás")])], 1)])])])
		},
		staticRenderFns: []
	}
}, function (e, t, n) {
	var r = n(1)(n(273), n(274), !1, null, null, null);
	e.exports = r.exports
}, function (e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = {
		created: function () {
			this.util.setTitle("Sistema de votación - Administrar Votantes")
		}
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return t("div", {
				staticClass: "container col-md-8 col-md-offset-2"
			}, [t("h4", [this._v("Administrar Votantes")]), this._v(" "), t("router-view")], 1)
		},
		staticRenderFns: []
	}
}, function (e, t, n) {
	var r = n(1)(n(276), n(277), !1, null, null, null);
	e.exports = r.exports
}, function (e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = {
		data: function () {
			return {
				id: 0
			}
		},
		created: function () {
			this.refreshVoter()
		},
		methods: {
			search: function () {},
			refreshVoter: function () {
				var e = this;
				this.util.notify("Actualizando Votante", "loading"), axios.get(config.API + "voter?page=" + this.current_page).then(function (t) {
					console.log(t), $.notifyClose(), e.data.voters = t.data
				}).catch(function (t) {
					$.notifyClose(), e.util.showResult(t)
				})
			},
			edit: function (e) {
				this.data.voter = this.data.voters.data[e], this.$router.push({
					name: "Edit Voter",
					params: {
						id: this.data.voter.id
					}
				})
			},
			deleteVoter: function () {
				var e = this;
				this.util.notify("Eliminando Votante", "loading"), this.util.hideModal("#delete-voter-modal"), axios.delete(config.API + "voter/" + this.id).then(function (t) {
					$.notifyClose(), e.util.showResult(t, "success") && e.refreshVoter()
				}).catch(function (t) {
					$.notifyClose(), e.util.showResult(t)
				})
			}
		},
		watch: {
			"$route.query.page": function () {
				$.notifyClose(), this.refreshVoter()
			}
		},
		computed: {
			pages: function () {
				var e = [];
				if (this.data.voters.last_page)
					for (var t = 1; t <= this.data.voters.last_page; t++) {
						var n = {};
						n.page = t, e.push(n)
					}
				return e
			},
			current_page: function () {
				return this.$route.query.page ? this.$route.query.page : 1
			}
		}
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("div", [n("div", {
				staticClass: "panel panel-default"
			}, [n("div", {
				staticClass: "panel-body"
			}, [n("div", {
				staticClass: "form-group"
			}, [n("router-link", {
				staticClass: "btn btn-success",
				attrs: {
					to: {
						name: "Add Voter"
					}
				}
			}, [n("i", {
				staticClass: "fa fa-plus"
			}), e._v(" Agregar Votante\r\n\t\t\t")]), e._v(" "), n("button", {
				staticClass: "btn btn-default",
				on: {
					click: function (t) {
						return e.refreshVoter()
					}
				}
			}, [n("i", {
				staticClass: "fa fa-refresh"
			}), e._v(" Actualizar votante\r\n\t\t\t")])], 1), e._v(" "), n("div", {
				staticClass: "table-responsive"
			}, [n("table", {
				staticClass: "table table-hover",
				attrs: {
					id: "position_table"
				}
			}, [e._m(0), e._v(" "), n("tbody", [e._l(e.data.voters.data, function (t, r) {
				return n("tr", [n("td", [e._v(e._s(t.name))]), e._v(" "), n("td", [e._v(e._s(t.student_id))]), e._v(" "), n("td", [e._v(e._s(t.area_id))]), e._v(" "), n("td", [n("button", {
					staticClass: "btn btn-info",
					on: {
						click: function (t) {
							return e.edit(r)
						}
					}
				}, [n("i", {
					staticClass: "fa fa-edit"
				}), e._v("")]), e._v(" "), n("button", {
					staticClass: "btn btn-danger",
					on: {
						click: function (n) {
							e.util.showModal("#delete-voter-modal"), e.id = t.id
						}
					}
				}, [n("i", {
					staticClass: "fa fa-trash"
				}), e._v("")])])])
			}), e._v(" "), e.data.voters.data && e.data.voters.data.length < 1 ? n("tr", [n("td", {
				attrs: {
					colspan: "3"
				}
			}, [e._v("No hay votantes")])]) : e._e()], 2)])]), e._v(" "), e.pages.length > 1 ? n("ul", {
				staticClass: "pagination"
			}, e._l(e.pages, function (t) {
				return n("router-link", {
					key: t.pages,
					class: {
						active: e.current_page == t.page
					},
					attrs: {
						tag: "li",
						to: {
							query: {
								page: t.page
							}
						},
						exact: ""
					}
				}, [n("a", {
					attrs: {
						href: "#"
					}
				}, [e._v(e._s(t.page))])])
			}), 1) : e._e()])]), e._v(" "), n("modal", {
				attrs: {
					id: "delete-voter-modal"
				}
			}, [n("modal-header", [e._v("Eliminar votante")]), e._v(" "), n("modal-body", [n("h2", [e._v("¿Estás seguro de eliminar el votante?")])]), e._v(" "), n("modal-footer", [n("button", {
				staticClass: "btn btn-danger",
				on: {
					click: function (t) {
						return e.deleteVoter()
					}
				}
			}, [e._v("Eliminar")]), e._v(" "), n("button", {
				staticClass: "btn btn-default",
				on: {
					click: function (t) {
						return e.util.hideModal("#delete-voter-modal")
					}
				}
			}, [e._v("Cancelar")])])], 1)], 1)
		},
		staticRenderFns: [function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return t("thead", [t("tr", [t("th", [this._v("Nombre")]), this._v(" "), t("th", [this._v("Código")]), this._v(" "), t("th", [this._v("Área")]), this._v(" "), t("th", [this._v("Acción")])])])
		}]
	}
}, function (e, t, n) {
	var r = n(1)(n(279), n(280), !1, null, null, null);
	e.exports = r.exports
}, function (e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = {
		data: function () {
			return {
				loading: !1
			}
		},
		methods: {
			add: function () {
				if (!this.loading) {
					this.loading = !0;
					var e = this;
					this.util.notify("Agregar votante", "loading"), axios.post(config.API + "voter", $("#add-form").serialize()).then(function (t) {
						$.notifyClose(), e.loading = !1, e.util.showResult(t, "success") && e.$router.push({
							name: "Manage Voter"
						})
					}).catch(function (t) {
						$.notifyClose(), e.loading = !1, e.util.showResult(t)
					})
				}
			}
		}
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("div", {
				staticClass: "panel panel-default"
			}, [n("div", {
				staticClass: "panel-body"
			}, [n("h4", [e._v("Agregar votante")]), e._v(" "), n("form", {
				attrs: {
					id: "add-form"
				},
				on: {
					submit: function (t) {
						return t.preventDefault(), e.add()
					}
				}
			}, [e._m(0), e._v(" "), e._m(1), e._v(" "), n("div", {
				staticClass: "form-group"
			}, [n("button", {
				staticClass: "btn btn-success",
				attrs: {
					type: "submit"
				}
			}, [e._v("Enviar")]), e._v(" "), n("router-link", {
				staticClass: "btn btn-default",
				attrs: {
					to: {
						name: "Manage Voter"
					}
				}
			}, [e._v("Atrás")])], 1)])])])
		},
		staticRenderFns: [function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return t("div", {
				staticClass: "form-group"
			}, [t("label", {
				attrs: {
					for: "name"
				}
			}, [this._v("Nombre")]), this._v(" "), t("input", {
				staticClass: "form-control",
				attrs: {
					type: "text",
					name: "name",
					required: ""
				}
			})])
		}, function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return t("div", {
				staticClass: "form-group"
			}, [t("label", {
				attrs: {
					for: "student_id"
				}
			}, [this._v("Código")]), this._v(" "), t("input", {
				staticClass: "form-control",
				attrs: {
					type: "text",
					name: "student_id",
					required: ""
				}
			})])
		}]
	}
}, function (e, t, n) {
	var r = n(1)(n(282), n(283), !1, null, null, null);
	e.exports = r.exports
}, function (e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = {
		data: function () {
			return {
				loading: !1
			}
		},
		created: function () {
			this.data.voter.id || this.$router.push({
				name: "Manage Voter"
			})
		},
		methods: {
			edit: function () {
				if (!this.loading) {
					this.loading = !0;
					var e = this;
					this.util.notify("Actualizando votante", "loading"), axios.put(config.API + "voter/" + this.data.voter.id, $("#edit-form").serialize()).then(function (t) {
						e.loading = !1, $.notifyClose(), e.util.showResult(t, "success") && e.$router.push({
							name: "Manage Voter"
						})
					}).catch(function (t) {
						$.notifyClose(), e.loading = !1, e.util.showResult(t)
					})
				}
			}
		}
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("div", {
				staticClass: "panel panel-default"
			}, [n("div", {
				staticClass: "panel-body"
			}, [n("h4", [e._v("Editar votante")]), e._v(" "), n("form", {
				attrs: {
					id: "edit-form"
				},
				on: {
					submit: function (t) {
						return t.preventDefault(), e.edit()
					}
				}
			}, [n("div", {
				staticClass: "form-group"
			}, [n("label", {
				attrs: {
					for: "name"
				}
			}, [e._v("Nombre")]), e._v(" "), n("input", {
				staticClass: "form-control",
				attrs: {
					type: "text",
					name: "name",
					required: ""
				},
				domProps: {
					value: e.data.voter.name
				}
			})]), e._v(" "), n("div", {
				staticClass: "form-group"
			}, [n("label", {
				attrs: {
					for: "student_id"
				}
			}, [e._v("Código")]), e._v(" "), n("input", {
				staticClass: "form-control",
				attrs: {
					type: "text",
					name: "student_id",
					required: ""
				},
				domProps: {
					value: e.data.voter.student_id
				}
			})]), e._v(" "), n("div", {
				staticClass: "form-group"
			}, [n("input", {
				staticClass: "btn btn-success",
				attrs: {
					type: "submit",
					value: "Enviar"
				}
			}), e._v(" "), n("router-link", {
				staticClass: "btn btn-default",
				attrs: {
					to: {
						name: "Manage Voter"
					}
				}
			}, [e._v("Atrás")])], 1)])])])
		},
		staticRenderFns: []
	}
}, function (e, t, n) {
	var r = n(1)(n(285), n(286), !1, null, null, null);
	e.exports = r.exports
}, function (e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = {
		created: function () {
			this.util.setTitle("Sistema de Votación - Administrar Nominados")
		}
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return t("div", {
				staticClass: "container col-md-10 col-md-offset-1"
			}, [t("h4", [this._v("Administrar Nominados")]), this._v(" "), t("router-view")], 1)
		},
		staticRenderFns: []
	}
}, function (e, t, n) {
	var r = n(1)(n(288), n(289), !1, null, null, null);
	e.exports = r.exports
}, function (e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = {
		data: function () {
			return {
				id: 0
			}
		},
		created: function () {
			this.refreshNominee()
		},
		methods: {
			deleteNominee: function () {
				this.util.hideModal("#delete-nominee-modal");
				var e = this;
				this.util.notify("Eliminando nominado", "loading"), axios.delete(config.API + "nominee/" + this.id).then(function (t) {
					$.notifyClose(), e.util.showResult(t, "success") && e.refreshNominee()
				}).catch(function (t) {
					$.notifyClose(), e.util.showResult(t, "error")
				})
			},
			refreshNominee: function () {
				var e = this;
				this.util.notify("Actualizando Nominados", "loading"), axios.get(config.API + "nominee").then(function (t) {
					$.notifyClose(), console.log(t), e.data.nominees = t.data
				}).catch(function (t) {
					$.notifyClose(), e.showResult(t)
				})
			},
			getPosition: function (e) {
				var t = this.data.positions;
				for (var n in t)
					if (t[n].id == e) return t[n].name
			},
			getPartylist: function (e) {
				var t = this.data.partylists;
				for (var n in t)
					if (t[n].id == e) return t[n].name;
				return "No partylists"
			}
		},
		computed: {
			nominees: function () {
				var e = [],
					t = this.data.nominees;
				for (var n in this.data.nominees)
					if (t[n].position_id == this.position_id || 0 == this.position_id) {
						var r = t[n];
						r.position = this.getPosition(t[n].position_id), r.partylist = this.getPartylist(t[n].partylist_id), e.push(r)
					}
				return e
			},
			position_id: function () {
				return this.$route.query.position_id ? this.$route.query.position_id : 0
			}
		}
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("div", {
				staticClass: "row"
			}, [n("div", {
				staticClass: "col-md-3",
				staticStyle: {
					"max-width": "250px"
				}
			}, [n("ul", {
				staticClass: "list-group"
			}, [n("router-link", {
				staticClass: "list-group-item",
				class: {
					active: 0 == e.position_id
				},
				attrs: {
					tag: "li",
					to: {
						name: "Manage Nominee"
					},
					exact: "",
					replace: ""
				}
			}, [e._v("\r\n\t\t\t\tTodas las posiciones\r\n\t\t\t")]), e._v(" "), e._l(e.data.positions, function (t) {
				return n("router-link", {
					key: t.id,
					staticClass: "list-group-item",
					attrs: {
						tag: "li",
						to: {
							query: {
								position_id: t.id
							}
						},
						exact: "",
						replace: ""
					}
				}, [e._v("\r\n\t\t\t\t" + e._s(t.name) + "\r\n\t\t\t")])
			})], 2)]), e._v(" "), n("div", {
				staticClass: "col-md-9 panel panel-default"
			}, [n("div", {
				staticClass: "panel-body table-responsive"
			}, [n("div", {
				staticClass: "form-group"
			}, [n("router-link", {
				staticClass: "btn btn-success",
				attrs: {
					to: {
						name: "Add Nominee",
						query: {
							position_id: e.position_id
						}
					}
				}
			}, [n("i", {
				staticClass: "fa fa-plus"
			}), e._v(" Agregar nominado")])], 1), e._v(" "), n("table", {
				staticClass: "table table-hover"
			}, [e._m(0), e._v(" "), n("tbody", [e._l(e.nominees, function (t) {
				return n("tr", [n("td", [n("img", {
					staticClass: "thumbnail",
					staticStyle: {
						height: "60px",
						width: "60px"
					},
					attrs: {
						alt: t.name,
						src: e.data.storageURL + t.image
					}
				})]), e._v(" "), n("td", [e._v(e._s(t.name))]), e._v(" "), n("td", [e._v(e._s(t.student_id))]), e._v(" "), n("td", [e._v(e._s(t.position))]), e._v(" "), n("td", [e._v(e._s(t.partylist))]), e._v(" "), n("td", [n("router-link", {
					staticClass: "btn btn-info",
					attrs: {
						to: {
							name: "Edit Nominee",
							params: {
								id: t.id
							}
						}
					}
				}, [n("i", {
					staticClass: "fa fa-edit"
				}), e._v(" Editar\r\n\t\t\t\t\t\t\t")]), e._v(" "), n("button", {
					staticClass: "btn btn-danger",
					on: {
						click: function (n) {
							e.util.showModal("#delete-nominee-modal"), e.id = t.id
						}
					}
				}, [n("i", {
					staticClass: "fa fa-trash"
				}), e._v(" Eliminar\r\n\t\t\t\t\t\t\t")])], 1)])
			}), e._v(" "), e.nominees.length < 1 ? n("tr", [n("td", {
				attrs: {
					colspan: "7"
				}
			}, [e._v("Sin nominados")])]) : e._e()], 2)])])]), e._v(" "), n("modal", {
				attrs: {
					id: "delete-nominee-modal"
				}
			}, [n("modal-header", [e._v("Eliminar nominado")]), e._v(" "), n("modal-body", [n("h3", [e._v("¿Estás seguro de eliminar a este nominado?")])]), e._v(" "), n("modal-footer", [n("button", {
				staticClass: "btn btn-danger",
				on: {
					click: function (t) {
						return e.deleteNominee()
					}
				}
			}, [e._v("Eliminar")]), e._v(" "), n("button", {
				staticClass: "btn btn-default",
				on: {
					click: function (t) {
						return e.util.hideModal("#delete-nominee-modal")
					}
				}
			}, [e._v("\r\n\t\t\t\tAtrás\r\n\t\t\t")])])], 1)], 1)
		},
		staticRenderFns: [function () {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("thead", [n("tr", [n("th"), e._v(" "), n("th", [e._v("Nombre")]), e._v(" "), n("th", [e._v("Código")]), e._v(" "), n("th", [e._v("Posición")]), e._v(" "), n("th", [e._v("Lista")]), e._v(" "), n("th", [e._v("Acción")])])])
		}]
	}
}, function (e, t, n) {
	var r = n(1)(n(291), n(292), !1, null, null, null);
	e.exports = r.exports
}, function (e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = {
		data: function () {
			return {
				loading: !1
			}
		},
		methods: {
			add: function () {
				if (!this.loading) {
					var e = this;
					this.loading = !0, this.util.notify("Agregando nominado", "progress", 0), $("#add_form").ajaxSubmit({
						success: function (t) {
							$.notifyClose(), e.loading = !1, e.util.showResult(t, "success", "ajax") && e.$router.push({
								name: "Manage Nominee"
							})
						},
						error: function (t) {
							$.notifyClose(), e.loading = !1, e.util.showResult(t, "error", "ajax")
						},
						uploadProgress: function (t, n, r, a) {
							e.util.notify("Agregando nominado", "progress", a)
						}
					})
				}
			}
		},
		computed: {
			position_id: {
				get: function () {
					return this.$route.query.position_id
				},
				set: function (e) {
					this.$router.replace({
						query: {
							position_id: e
						}
					})
				}
			}
		}
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("div", {
				staticClass: "panel panel-default"
			}, [n("div", {
				staticClass: "panel-body"
			}, [n("form", {
				staticClass: "row",
				attrs: {
					method: "POST",
					id: "add_form",
					action: e.data.API + "nominee",
					enctype: "mutlipart/formdata"
				},
				on: {
					submit: function (t) {
						return t.preventDefault(), e.add()
					}
				}
			}, [n("div", {
				staticClass: "col-md-4"
			}, [n("uploader", {
				attrs: {
					"file-name": "image"
				}
			})], 1), e._v(" "), n("div", {
				staticClass: "col-md-8"
			}, [e._m(0), e._v(" "), e._m(1), e._v(" "), e._m(2), e._v(" "), e._m(3), e._v(" "), n("div", {
				staticClass: "form-group"
			}, [n("label", {
				attrs: {
					for: "position_id"
				}
			}, [e._v("Posición")]), e._v(" "), n("select", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.position_id,
					expression: "position_id"
				}],
				staticClass: "form-control",
				attrs: {
					name: "position_id",
					required: ""
				},
				on: {
					change: function (t) {
						var n = Array.prototype.filter.call(t.target.options, function (e) {
							return e.selected
						}).map(function (e) {
							return "_value" in e ? e._value : e.value
						});
						e.position_id = t.target.multiple ? n : n[0]
					}
				}
			}, [n("option", {
				attrs: {
					value: "0",
					disabled: ""
				}
			}, [e._v("--- Seleccionar posición ---")]), e._v(" "), e._l(e.data.positions, function (t) {
				return n("option", {
					domProps: {
						value: t.id
					}
				}, [e._v(e._s(t.name))])
			})], 2)]), e._v(" "), n("div", {
				staticClass: "form-group"
			}, [n("label", {
				attrs: {
					for: "partylist_id"
				}
			}, [e._v("Lista")]), e._v(" "), n("select", {
				staticClass: "form-control",
				attrs: {
					name: "partylist_id"
				}
			}, [n("option", {
				attrs: {
					value: ""
				}
			}, [e._v("--- Seleccionar Lista (Opcional) ---")]), e._v(" "), e._l(e.data.partylists, function (t) {
				return n("option", {
					domProps: {
						value: t.id
					}
				}, [e._v(e._s(t.name))])
			})], 2)]), e._v(" "), n("div", {
				staticClass: "form-group pull-right"
			}, [n("input", {
				staticClass: "btn btn-info",
				attrs: {
					type: "submit",
					value: "Enviar"
				}
			}), e._v(" "), n("router-link", {
				staticClass: "btn btn-default",
				attrs: {
					to: {
						name: "Manage Nominee",
						query: {
							position_id: e.position_id
						}
					}
				}
			}, [e._v("\r\n\t\t\t\t\t\tAtrás\r\n\t\t\t\t\t")])], 1)])])])])
		},
		staticRenderFns: [function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return t("div", {
				staticClass: "form-group"
			}, [t("label", {
				attrs: {
					for: "name"
				}
			}, [this._v("Nombre")]), this._v(" "), t("input", {
				staticClass: "form-control",
				attrs: {
					type: "text",
					name: "name",
					required: ""
				}
			})])
		}, function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return t("div", {
				staticClass: "form-group"
			}, [t("label", {
				attrs: {
					for: "student_id"
				}
			}, [this._v("Código")]), this._v(" "), t("input", {
				staticClass: "form-control",
				attrs: {
					type: "text",
					name: "student_id",
					required: ""
				}
			})])
		}, function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return t("div", {
				staticClass: "form-group"
			}, [t("label", {
				attrs: {
					for: "motto"
				}
			}, [this._v("Lema")]), this._v(" "), t("input", {
				staticClass: "form-control",
				attrs: {
					type: "text",
					name: "motto",
					placeholder: "(Opcional)"
				}
			})])
		}, function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return t("div", {
				staticClass: "form-group"
			}, [t("label", {
				attrs: {
					for: "description"
				}
			}, [this._v("Descripción")]), this._v(" "), t("textarea", {
				staticClass: "form-control",
				attrs: {
					name: "description",
					placeholder: "(Opcional)"
				}
			})])
		}]
	}
}, function (e, t, n) {
	var r = n(1)(n(294), n(295), !1, null, null, null);
	e.exports = r.exports
}, function (e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = {
		data: function () {
			return {
				loading: !1
			}
		},
		created: function () {
			this.nominee.id || this.$router.push({
				name: "Manage Nominee"
			})
		},
		methods: {
			edit: function () {
				if (!this.loading) {
					var e = this;
					this.loading = !0, this.util.notify("Actualizando nominado", "progress", 0), $("#edit_form").ajaxSubmit({
						success: function (t) {
							$.notifyClose(), e.loading = !1, e.util.showResult(t, "success", "ajax") && e.$router.push({
								name: "Manage Nominee"
							})
						},
						error: function (t) {
							$.notifyClose(), e.loading = !1, e.util.showResult(t, "error", "ajax")
						},
						uploadProgress: function (t, n, r, a) {
							e.util.notify("Updating Nominee", "progress", a)
						}
					})
				}
			}
		},
		computed: {
			id: function () {
				return this.$route.params.id
			},
			nominee: function () {
				for (var e in this.data.nominees)
					if (this.data.nominees[e].id == this.id) return this.data.nominees[e];
				return {}
			}
		}
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("div", {
				staticClass: "panel panel-default"
			}, [n("div", {
				staticClass: "panel-body"
			}, [n("form", {
				staticClass: "row",
				attrs: {
					method: "POST",
					id: "edit_form",
					action: e.data.API + "nominee/" + e.id,
					enctype: "multipart/form-data"
				},
				on: {
					submit: function (t) {
						return t.preventDefault(), e.edit()
					}
				}
			}, [n("input", {
				attrs: {
					type: "hidden",
					name: "_method",
					value: "PUT"
				}
			}), e._v(" "), n("div", {
				staticClass: "col-md-4"
			}, [n("uploader", {
				attrs: {
					"file-name": "image",
					"image-src": e.data.storageURL + e.nominee.image
				}
			})], 1), e._v(" "), n("div", {
				staticClass: "col-md-8"
			}, [n("div", {
				staticClass: "form-group"
			}, [n("label", {
				attrs: {
					for: "name"
				}
			}, [e._v("Nombre")]), e._v(" "), n("input", {
				staticClass: "form-control",
				attrs: {
					type: "text",
					name: "name",
					required: ""
				},
				domProps: {
					value: e.nominee.name
				}
			})]), e._v(" "), n("div", {
				staticClass: "form-group"
			}, [n("label", {
				attrs: {
					for: "student_id"
				}
			}, [e._v("Código")]), e._v(" "), n("input", {
				staticClass: "form-control",
				attrs: {
					type: "text",
					name: "student_id",
					required: ""
				},
				domProps: {
					value: e.nominee.student_id
				}
			})]), e._v(" "), n("div", {
				staticClass: "form-group"
			}, [n("label", {
				attrs: {
					for: "motto"
				}
			}, [e._v("Lema")]), e._v(" "), n("input", {
				staticClass: "form-control",
				attrs: {
					type: "text",
					name: "motto",
					placeholder: "(Opcional)"
				},
				domProps: {
					value: e.nominee.motto
				}
			})]), e._v(" "), n("div", {
				staticClass: "form-group"
			}, [n("label", {
				attrs: {
					for: "description"
				}
			}, [e._v("Descripción")]), e._v(" "), n("textarea", {
				staticClass: "form-control",
				attrs: {
					name: "description",
					placeholder: "(Opcional)"
				}
			}, [e._v(e._s(e.nominee.description))])]), e._v(" "), n("div", {
				staticClass: "form-group"
			}, [n("label", {
				attrs: {
					for: "position_id"
				}
			}, [e._v("Posición")]), e._v(" "), n("select", {
				staticClass: "form-control",
				attrs: {
					name: "position_id",
					required: ""
				},
				domProps: {
					value: e.nominee.position_id
				}
			}, [n("option", {
				attrs: {
					value: "0",
					disabled: ""
				}
			}, [e._v("--- Seleccionar posición ---")]), e._v(" "), e._l(e.data.positions, function (t) {
				return n("option", {
					domProps: {
						value: t.id
					}
				}, [e._v(e._s(t.name))])
			})], 2)]), e._v(" "), n("div", {
				staticClass: "form-group"
			}, [n("label", {
				attrs: {
					for: "partylist_id"
				}
			}, [e._v("Lista")]), e._v(" "), n("select", {
				staticClass: "form-control",
				attrs: {
					name: "partylist_id"
				},
				domProps: {
					value: e.nominee.partylist_id
				}
			}, [n("option", {
				attrs: {
					value: ""
				}
			}, [e._v("--- Seleccione Lista (Opcional) ---")]), e._v(" "), e._l(e.data.partylists, function (t) {
				return n("option", {
					domProps: {
						value: t.id
					}
				}, [e._v(e._s(t.name))])
			})], 2)]), e._v(" "), n("div", {
				staticClass: "form-group pull-right"
			}, [n("input", {
				staticClass: "btn btn-info",
				attrs: {
					type: "submit",
					value: "Enviar"
				}
			}), e._v(" "), n("router-link", {
				staticClass: "btn btn-default",
				attrs: {
					to: {
						name: "Manage Nominee"
					}
				}
			}, [e._v("\r\n\t\t\t\t\t\tAtrás\r\n\t\t\t\t\t")])], 1)])])])])
		},
		staticRenderFns: []
	}
}, function (e, t, n) {
	var r = n(1)(n(297), n(298), !1, null, null, null);
	e.exports = r.exports
}, function (e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = {
		created: function () {
			this.util.setTitle("Sistema de Votación - Administrar Cuenta")
		}
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return t("div", {
				staticClass: "container col-md-8 col-md-offset-2"
			}, [t("h4", [this._v("Administrar Cuenta")]), this._v(" "), t("router-view")], 1)
		},
		staticRenderFns: []
	}
}, function (e, t, n) {
	var r = n(1)(n(300), n(301), !1, null, null, null);
	e.exports = r.exports
}, function (e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = {
		data: function () {
			return {
				id: 0
			}
		},
		created: function () {
			this.refreshAdmin()
		},
		methods: {
			deleteAdmin: function () {
				this.util.hideModal("#delete-admin-modal"), this.util.notify("Eliminando administrador", "loading");
				var e = this;
				axios.delete(config.API + "admin/" + this.id).then(function (t) {
					$.notifyClose(), e.util.showResult(t, "success") && e.refreshAdmin()
				}).catch(function (t) {
					$.notifyClose(), e.util.showResult(t, "error")
				})
			},
			refreshAdmin: function () {
				this.util.notify("Actualizando administrador", "loading");
				var e = this;
				axios.get(config.API + "admin").then(function (t) {
					$.notifyClose(), "failed" == t.data.status ? e.util.showResult(t, "success") : e.data.admins = t.data
				}).catch(function (t) {
					$.notifyClose(), e.util.showResult(t, "error")
				})
			}
		}
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("div", {
				staticClass: "panel panel-default"
			}, [n("div", {
				staticClass: "panel-body table-responsive"
			}, [n("div", {
				staticClass: "form-group"
			}, [n("router-link", {
				staticClass: "btn btn-success",
				attrs: {
					to: {
						name: "Add Account"
					}
				}
			}, [n("i", {
				staticClass: "fa fa-plus"
			}), e._v(" Añadir cuenta")]), e._v(" "), n("button", {
				staticClass: "btn btn-default",
				on: {
					click: function (t) {
						return e.refreshAdmin()
					}
				}
			}, [n("i", {
				staticClass: "fa fa-refresh"
			}), e._v(" Actualizar")])], 1), e._v(" "), n("table", {
				staticClass: "table table-hover"
			}, [e._m(0), e._v(" "), n("tbody", e._l(e.data.admins, function (t) {
				return n("tr", [n("td", [e._v(e._s(t.id))]), e._v(" "), n("td", [e._v(e._s(t.name))]), e._v(" "), n("td", [e._v(e._s(t.email))]), e._v(" "), n("td", [n("button", {
					staticClass: "btn btn-danger",
					on: {
						click: function (n) {
							e.id = t.id, e.util.showModal("#delete-admin-modal")
						}
					}
				}, [n("i", {
					staticClass: "fa fa-trash"
				}), e._v(" Eliminar\r\n\t\t\t\t\t\t")])])])
			}), 0)])]), e._v(" "), n("modal", {
				attrs: {
					id: "delete-admin-modal"
				}
			}, [n("modal-header", [e._v("Eliminar administrador")]), e._v(" "), n("modal-body", [n("h3", [e._v("¿Está seguro de eliminar este administrador?")])]), e._v(" "), n("modal-footer", [n("button", {
				staticClass: "btn btn-danger",
				on: {
					click: function (t) {
						return e.deleteAdmin()
					}
				}
			}, [e._v("Eliminar")]), e._v(" "), n("button", {
				staticClass: "btn btn-default",
				on: {
					click: function (t) {
						return e.util.hideModal("#delete-admin-modal")
					}
				}
			}, [e._v("Cancelar")])])], 1)], 1)
		},
		staticRenderFns: [function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return t("thead", [t("tr", [t("th", [this._v("ID")]), this._v(" "), t("th", [this._v("Nombre")]), this._v(" "), t("th", [this._v("Email")]), this._v(" "), t("th", [this._v("Eliminar")])])])
		}]
	}
}, function (e, t, n) {
	var r = n(1)(n(303), n(304), !1, null, null, null);
	e.exports = r.exports
}, function (e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = {
		data: function () {
			return {
				loading: !1
			}
		},
		methods: {
			refreshUser: function () {
				var e = this;
				axios.get(config.API + "admin/" + this.data.user.id).then(function (t) {
					e.data.user = t.data
				})
			},
			edit: function () {
				if (!this.loading) {
					this.loading = !0;
					var e = this;
					this.util.notify("Actualizando cuenta", "loading"), axios.put(config.API + "admin/" + this.data.user.id, $("#edit_form").serialize()).then(function (t) {
						$.notifyClose(), e.loading = !1, e.util.showResult(t, "success") && (e.refreshUser(), e.$router.push({
							name: "Admin Home"
						}))
					}).catch(function (t) {
						$.notifyClose(), e.loading = !1, e.util.showResult(t, "error")
					})
				}
			}
		}
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("div", {
				staticClass: "panel panel-default"
			}, [n("div", {
				staticClass: "panel-body"
			}, [n("h4", [e._v("Actualizar cuenta")]), e._v(" "), n("form", {
				attrs: {
					id: "edit_form"
				},
				on: {
					submit: function (t) {
						return t.preventDefault(), e.edit()
					}
				}
			}, [n("div", {
				staticClass: "form-group"
			}, [n("label", {
				attrs: {
					for: "name"
				}
			}, [e._v("Nombre")]), e._v(" "), n("input", {
				staticClass: "form-control",
				attrs: {
					type: "text",
					name: "name",
					required: ""
				},
				domProps: {
					value: e.data.user.name
				}
			})]), e._v(" "), n("div", {
				staticClass: "form-group"
			}, [n("label", {
				attrs: {
					for: "email"
				}
			}, [e._v("E-mail")]), e._v(" "), n("input", {
				staticClass: "form-control",
				attrs: {
					type: "email",
					name: "email",
					required: ""
				},
				domProps: {
					value: e.data.user.email
				}
			})]), e._v(" "), n("div", {
				staticClass: "form-group"
			}, [n("input", {
				staticClass: "btn btn-info",
				attrs: {
					type: "submit",
					value: "Enviar"
				}
			}), e._v(" "), n("router-link", {
				staticClass: "btn btn-default",
				attrs: {
					to: {
						name: "Update Password"
					}
				}
			}, [e._v("Cambiar la contraseña")])], 1)])])])
		},
		staticRenderFns: []
	}
}, function (e, t, n) {
	var r = n(1)(n(306), n(307), !1, null, null, null);
	e.exports = r.exports
}, function (e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = {
		data: function () {
			return {
				loading: !1
			}
		},
		methods: {
			edit: function () {
				if (!this.loading && this.checkPassword()) {
					var e = this;
					e.loading = !0, e.util.notify("Actualizando contraseña", "loading"), axios.put(config.API + "admin/password/" + this.data.user.id, $("#edit_form").serialize()).then(function (t) {
						$.notifyClose(), e.loading = !1, e.util.showResult(t, "success"), e.$router.push({
							name: "Admin Home"
						})
					}).catch(function (t) {
						$.notifyClose(), e.loading = !1, e.util.showResult(t, "error")
					})
				}
			},
			checkPassword: function () {
				var e = $("[name=password]").val() == $("[name=confirm_password]").val();
				return e || this.util.notify("Password not match", "error"), e
			}
		}
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("div", {
				staticClass: "panel panel-default"
			}, [n("div", {
				staticClass: "panel-body"
			}, [n("h4", [e._v("Actualizar contraseña")]), e._v(" "), n("form", {
				attrs: {
					id: "edit_form"
				},
				on: {
					submit: function (t) {
						return t.preventDefault(), e.edit()
					}
				}
			}, [e._m(0), e._v(" "), e._m(1), e._v(" "), e._m(2), e._v(" "), n("div", {
				staticClass: "form-group"
			}, [n("input", {
				staticClass: "btn btn-info",
				attrs: {
					type: "submit",
					value: "Enviar"
				}
			}), e._v(" "), n("router-link", {
				staticClass: "btn btn-default",
				attrs: {
					to: {
						name: "Update Account"
					}
				}
			}, [e._v("Atrás")])], 1)])])])
		},
		staticRenderFns: [function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return t("div", {
				staticClass: "form-group"
			}, [t("label", {
				attrs: {
					for: "old_password"
				}
			}, [this._v("Contraseña antigua")]), this._v(" "), t("input", {
				staticClass: "form-control",
				attrs: {
					type: "password",
					name: "old_password",
					required: ""
				}
			})])
		}, function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return t("div", {
				staticClass: "form-group"
			}, [t("label", {
				attrs: {
					for: "password"
				}
			}, [this._v("Nueva contraseña")]), this._v(" "), t("input", {
				staticClass: "form-control",
				attrs: {
					type: "password",
					name: "password",
					required: ""
				}
			})])
		}, function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return t("div", {
				staticClass: "form-group"
			}, [t("label", {
				attrs: {
					for: "confirm_password"
				}
			}, [this._v("Confirmar contraseña")]), this._v(" "), t("input", {
				staticClass: "form-control",
				attrs: {
					type: "password",
					name: "confirm_password",
					required: ""
				}
			})])
		}]
	}
}, function (e, t, n) {
	var r = n(1)(n(309), n(310), !1, null, null, null);
	e.exports = r.exports
}, function (e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = {
		data: function () {
			return {
				loading: !1
			}
		},
		methods: {
			add: function () {
				if (!this.loading && this.isPasswordMatch()) {
					var e = this;
					this.loading = !0, this.util.notify("Agregando administrador", "loading"), axios.post(config.API + "admin", $("#add_form").serialize()).then(function (t) {
						e.loading = !1, $.notifyClose(), e.util.showResult(t, "success") && e.$router.push({
							name: "Manage Account"
						})
					}).catch(function (t) {
						e.loading = !1, $.notifyClose(), e.util.showResult(t, "error")
					})
				}
			},
			isPasswordMatch: function () {
				var e = $("[name=password]").val() == $("[name=confirm_password]").val();
				return e || this.util.notify("La contraseña no coincide", "error"), e
			}
		}
	}
}, function (e, t) {
	e.exports = {
		render: function () {
			var e = this,
				t = e.$createElement,
				n = e._self._c || t;
			return n("div", {
				staticClass: "panel panel-default"
			}, [n("div", {
				staticClass: "panel-body"
			}, [n("form", {
				attrs: {
					id: "add_form"
				},
				on: {
					submit: function (t) {
						return t.preventDefault(), e.add()
					}
				}
			}, [e._m(0), e._v(" "), e._m(1), e._v(" "), e._m(2), e._v(" "), e._m(3), e._v(" "), n("div", {
				staticClass: "form-group"
			}, [n("input", {
				staticClass: "btn btn-info",
				attrs: {
					type: "submit",
					value: "Enviar"
				}
			}), e._v(" "), n("router-link", {
				staticClass: "btn btn-default",
				attrs: {
					to: {
						name: "Manage Account"
					}
				}
			}, [e._v("Atrás")])], 1)])])])
		},
		staticRenderFns: [function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return t("div", {
				staticClass: "form-group"
			}, [t("label", {
				attrs: {
					for: "name"
				}
			}, [this._v("Nombre")]), this._v(" "), t("input", {
				staticClass: "form-control",
				attrs: {
					type: "text",
					name: "name",
					required: ""
				}
			})])
		}, function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return t("div", {
				staticClass: "form-group"
			}, [t("label", {
				attrs: {
					for: "email"
				}
			}, [this._v("Email")]), this._v(" "), t("input", {
				staticClass: "form-control",
				attrs: {
					type: "email",
					name: "email",
					required: ""
				}
			})])
		}, function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return t("div", {
				staticClass: "form-group"
			}, [t("label", {
				attrs: {
					for: "password"
				}
			}, [this._v("Contraseña")]), this._v(" "), t("input", {
				staticClass: "form-control",
				attrs: {
					type: "password",
					name: "password",
					required: ""
				}
			})])
		}, function () {
			var e = this.$createElement,
				t = this._self._c || e;
			return t("div", {
				staticClass: "form-group"
			}, [t("label", {
				attrs: {
					for: "confirm_password"
				}
			}, [this._v("Confirmar contraseña")]), this._v(" "), t("input", {
				staticClass: "form-control",
				attrs: {
					type: "password",
					name: "confirm_password",
					required: ""
				}
			})])
		}]
	}
}]);