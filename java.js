var Ld = e => {
    throw TypeError(e)
}
;
var Ml = (e, t, n) => t.has(e) || Ld("Cannot " + n);
var E = (e, t, n) => (Ml(e, t, "read from private field"),
n ? n.call(e) : t.get(e))
  , z = (e, t, n) => t.has(e) ? Ld("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n)
  , _ = (e, t, n, r) => (Ml(e, t, "write to private field"),
r ? r.call(e, n) : t.set(e, n),
n)
  , B = (e, t, n) => (Ml(e, t, "access private method"),
n);
var Ds = (e, t, n, r) => ({
    set _(o) {
        _(e, t, o, n)
    },
    get _() {
        return E(e, t, r)
    }
});
function bx(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const s = Object.getOwnPropertyDescriptor(r, o);
                    s && Object.defineProperty(e, o, s.get ? s : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver(o => {
        for (const s of o)
            if (s.type === "childList")
                for (const i of s.addedNodes)
                    i.tagName === "LINK" && i.rel === "modulepreload" && r(i)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(o) {
        const s = {};
        return o.integrity && (s.integrity = o.integrity),
        o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? s.credentials = "include" : o.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin",
        s
    }
    function r(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const s = n(o);
        fetch(o.href, s)
    }
}
)();
function Kp(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Gp = {
    exports: {}
}
  , il = {}
  , qp = {
    exports: {}
}
  , W = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cs = Symbol.for("react.element")
  , Ex = Symbol.for("react.portal")
  , Cx = Symbol.for("react.fragment")
  , Nx = Symbol.for("react.strict_mode")
  , kx = Symbol.for("react.profiler")
  , jx = Symbol.for("react.provider")
  , Px = Symbol.for("react.context")
  , Tx = Symbol.for("react.forward_ref")
  , Rx = Symbol.for("react.suspense")
  , Ox = Symbol.for("react.memo")
  , Ax = Symbol.for("react.lazy")
  , Id = Symbol.iterator;
function _x(e) {
    return e === null || typeof e != "object" ? null : (e = Id && e[Id] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Yp = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Xp = Object.assign
  , Zp = {};
function vo(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Zp,
    this.updater = n || Yp
}
vo.prototype.isReactComponent = {};
vo.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
vo.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Jp() {}
Jp.prototype = vo.prototype;
function Vu(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Zp,
    this.updater = n || Yp
}
var Hu = Vu.prototype = new Jp;
Hu.constructor = Vu;
Xp(Hu, vo.prototype);
Hu.isPureReactComponent = !0;
var Fd = Array.isArray
  , eh = Object.prototype.hasOwnProperty
  , Wu = {
    current: null
}
  , th = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function nh(e, t, n) {
    var r, o = {}, s = null, i = null;
    if (t != null)
        for (r in t.ref !== void 0 && (i = t.ref),
        t.key !== void 0 && (s = "" + t.key),
        t)
            eh.call(t, r) && !th.hasOwnProperty(r) && (o[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1)
        o.children = n;
    else if (1 < l) {
        for (var u = Array(l), c = 0; c < l; c++)
            u[c] = arguments[c + 2];
        o.children = u
    }
    if (e && e.defaultProps)
        for (r in l = e.defaultProps,
        l)
            o[r] === void 0 && (o[r] = l[r]);
    return {
        $$typeof: Cs,
        type: e,
        key: s,
        ref: i,
        props: o,
        _owner: Wu.current
    }
}
function Dx(e, t) {
    return {
        $$typeof: Cs,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Qu(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Cs
}
function Mx(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var zd = /\/+/g;
function Ll(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Mx("" + e.key) : t.toString(36)
}
function ii(e, t, n, r, o) {
    var s = typeof e;
    (s === "undefined" || s === "boolean") && (e = null);
    var i = !1;
    if (e === null)
        i = !0;
    else
        switch (s) {
        case "string":
        case "number":
            i = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case Cs:
            case Ex:
                i = !0
            }
        }
    if (i)
        return i = e,
        o = o(i),
        e = r === "" ? "." + Ll(i, 0) : r,
        Fd(o) ? (n = "",
        e != null && (n = e.replace(zd, "$&/") + "/"),
        ii(o, t, n, "", function(c) {
            return c
        })) : o != null && (Qu(o) && (o = Dx(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(zd, "$&/") + "/") + e)),
        t.push(o)),
        1;
    if (i = 0,
    r = r === "" ? "." : r + ":",
    Fd(e))
        for (var l = 0; l < e.length; l++) {
            s = e[l];
            var u = r + Ll(s, l);
            i += ii(s, t, n, u, o)
        }
    else if (u = _x(e),
    typeof u == "function")
        for (e = u.call(e),
        l = 0; !(s = e.next()).done; )
            s = s.value,
            u = r + Ll(s, l++),
            i += ii(s, t, n, u, o);
    else if (s === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return i
}
function Ms(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , o = 0;
    return ii(e, r, "", "", function(s) {
        return t.call(n, s, o++)
    }),
    r
}
function Lx(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Me = {
    current: null
}
  , li = {
    transition: null
}
  , Ix = {
    ReactCurrentDispatcher: Me,
    ReactCurrentBatchConfig: li,
    ReactCurrentOwner: Wu
};
function rh() {
    throw Error("act(...) is not supported in production builds of React.")
}
W.Children = {
    map: Ms,
    forEach: function(e, t, n) {
        Ms(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Ms(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return Ms(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Qu(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
W.Component = vo;
W.Fragment = Cx;
W.Profiler = kx;
W.PureComponent = Vu;
W.StrictMode = Nx;
W.Suspense = Rx;
W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ix;
W.act = rh;
W.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Xp({}, e.props)
      , o = e.key
      , s = e.ref
      , i = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (s = t.ref,
        i = Wu.current),
        t.key !== void 0 && (o = "" + t.key),
        e.type && e.type.defaultProps)
            var l = e.type.defaultProps;
        for (u in t)
            eh.call(t, u) && !th.hasOwnProperty(u) && (r[u] = t[u] === void 0 && l !== void 0 ? l[u] : t[u])
    }
    var u = arguments.length - 2;
    if (u === 1)
        r.children = n;
    else if (1 < u) {
        l = Array(u);
        for (var c = 0; c < u; c++)
            l[c] = arguments[c + 2];
        r.children = l
    }
    return {
        $$typeof: Cs,
        type: e.type,
        key: o,
        ref: s,
        props: r,
        _owner: i
    }
}
;
W.createContext = function(e) {
    return e = {
        $$typeof: Px,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: jx,
        _context: e
    },
    e.Consumer = e
}
;
W.createElement = nh;
W.createFactory = function(e) {
    var t = nh.bind(null, e);
    return t.type = e,
    t
}
;
W.createRef = function() {
    return {
        current: null
    }
}
;
W.forwardRef = function(e) {
    return {
        $$typeof: Tx,
        render: e
    }
}
;
W.isValidElement = Qu;
W.lazy = function(e) {
    return {
        $$typeof: Ax,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Lx
    }
}
;
W.memo = function(e, t) {
    return {
        $$typeof: Ox,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
W.startTransition = function(e) {
    var t = li.transition;
    li.transition = {};
    try {
        e()
    } finally {
        li.transition = t
    }
}
;
W.unstable_act = rh;
W.useCallback = function(e, t) {
    return Me.current.useCallback(e, t)
}
;
W.useContext = function(e) {
    return Me.current.useContext(e)
}
;
W.useDebugValue = function() {}
;
W.useDeferredValue = function(e) {
    return Me.current.useDeferredValue(e)
}
;
W.useEffect = function(e, t) {
    return Me.current.useEffect(e, t)
}
;
W.useId = function() {
    return Me.current.useId()
}
;
W.useImperativeHandle = function(e, t, n) {
    return Me.current.useImperativeHandle(e, t, n)
}
;
W.useInsertionEffect = function(e, t) {
    return Me.current.useInsertionEffect(e, t)
}
;
W.useLayoutEffect = function(e, t) {
    return Me.current.useLayoutEffect(e, t)
}
;
W.useMemo = function(e, t) {
    return Me.current.useMemo(e, t)
}
;
W.useReducer = function(e, t, n) {
    return Me.current.useReducer(e, t, n)
}
;
W.useRef = function(e) {
    return Me.current.useRef(e)
}
;
W.useState = function(e) {
    return Me.current.useState(e)
}
;
W.useSyncExternalStore = function(e, t, n) {
    return Me.current.useSyncExternalStore(e, t, n)
}
;
W.useTransition = function() {
    return Me.current.useTransition()
}
;
W.version = "18.3.1";
qp.exports = W;
var p = qp.exports;
const nn = Kp(p)
  , oh = bx({
    __proto__: null,
    default: nn
}, [p]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fx = p
  , zx = Symbol.for("react.element")
  , $x = Symbol.for("react.fragment")
  , Ux = Object.prototype.hasOwnProperty
  , Bx = Fx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , Vx = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function sh(e, t, n) {
    var r, o = {}, s = null, i = null;
    n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
    for (r in t)
        Ux.call(t, r) && !Vx.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: zx,
        type: e,
        key: s,
        ref: i,
        props: o,
        _owner: Bx.current
    }
}
il.Fragment = $x;
il.jsx = sh;
il.jsxs = sh;
Gp.exports = il;
var a = Gp.exports
  , ih = {
    exports: {}
}
  , Xe = {}
  , lh = {
    exports: {}
}
  , ah = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(P, A) {
        var I = P.length;
        P.push(A);
        e: for (; 0 < I; ) {
            var V = I - 1 >>> 1
              , se = P[V];
            if (0 < o(se, A))
                P[V] = A,
                P[I] = se,
                I = V;
            else
                break e
        }
    }
    function n(P) {
        return P.length === 0 ? null : P[0]
    }
    function r(P) {
        if (P.length === 0)
            return null;
        var A = P[0]
          , I = P.pop();
        if (I !== A) {
            P[0] = I;
            e: for (var V = 0, se = P.length, ut = se >>> 1; V < ut; ) {
                var Je = 2 * (V + 1) - 1
                  , No = P[Je]
                  , Mt = Je + 1
                  , Un = P[Mt];
                if (0 > o(No, I))
                    Mt < se && 0 > o(Un, No) ? (P[V] = Un,
                    P[Mt] = I,
                    V = Mt) : (P[V] = No,
                    P[Je] = I,
                    V = Je);
                else if (Mt < se && 0 > o(Un, I))
                    P[V] = Un,
                    P[Mt] = I,
                    V = Mt;
                else
                    break e
            }
        }
        return A
    }
    function o(P, A) {
        var I = P.sortIndex - A.sortIndex;
        return I !== 0 ? I : P.id - A.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var s = performance;
        e.unstable_now = function() {
            return s.now()
        }
    } else {
        var i = Date
          , l = i.now();
        e.unstable_now = function() {
            return i.now() - l
        }
    }
    var u = []
      , c = []
      , d = 1
      , f = null
      , g = 3
      , x = !1
      , S = !1
      , v = !1
      , w = typeof setTimeout == "function" ? setTimeout : null
      , m = typeof clearTimeout == "function" ? clearTimeout : null
      , h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function y(P) {
        for (var A = n(c); A !== null; ) {
            if (A.callback === null)
                r(c);
            else if (A.startTime <= P)
                r(c),
                A.sortIndex = A.expirationTime,
                t(u, A);
            else
                break;
            A = n(c)
        }
    }
    function b(P) {
        if (v = !1,
        y(P),
        !S)
            if (n(u) !== null)
                S = !0,
                H(C);
            else {
                var A = n(c);
                A !== null && q(b, A.startTime - P)
            }
    }
    function C(P, A) {
        S = !1,
        v && (v = !1,
        m(j),
        j = -1),
        x = !0;
        var I = g;
        try {
            for (y(A),
            f = n(u); f !== null && (!(f.expirationTime > A) || P && !$()); ) {
                var V = f.callback;
                if (typeof V == "function") {
                    f.callback = null,
                    g = f.priorityLevel;
                    var se = V(f.expirationTime <= A);
                    A = e.unstable_now(),
                    typeof se == "function" ? f.callback = se : f === n(u) && r(u),
                    y(A)
                } else
                    r(u);
                f = n(u)
            }
            if (f !== null)
                var ut = !0;
            else {
                var Je = n(c);
                Je !== null && q(b, Je.startTime - A),
                ut = !1
            }
            return ut
        } finally {
            f = null,
            g = I,
            x = !1
        }
    }
    var k = !1
      , N = null
      , j = -1
      , R = 5
      , O = -1;
    function $() {
        return !(e.unstable_now() - O < R)
    }
    function L() {
        if (N !== null) {
            var P = e.unstable_now();
            O = P;
            var A = !0;
            try {
                A = N(!0, P)
            } finally {
                A ? K() : (k = !1,
                N = null)
            }
        } else
            k = !1
    }
    var K;
    if (typeof h == "function")
        K = function() {
            h(L)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var M = new MessageChannel
          , Y = M.port2;
        M.port1.onmessage = L,
        K = function() {
            Y.postMessage(null)
        }
    } else
        K = function() {
            w(L, 0)
        }
        ;
    function H(P) {
        N = P,
        k || (k = !0,
        K())
    }
    function q(P, A) {
        j = w(function() {
            P(e.unstable_now())
        }, A)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(P) {
        P.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        S || x || (S = !0,
        H(C))
    }
    ,
    e.unstable_forceFrameRate = function(P) {
        0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : R = 0 < P ? Math.floor(1e3 / P) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return g
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(u)
    }
    ,
    e.unstable_next = function(P) {
        switch (g) {
        case 1:
        case 2:
        case 3:
            var A = 3;
            break;
        default:
            A = g
        }
        var I = g;
        g = A;
        try {
            return P()
        } finally {
            g = I
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(P, A) {
        switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            P = 3
        }
        var I = g;
        g = P;
        try {
            return A()
        } finally {
            g = I
        }
    }
    ,
    e.unstable_scheduleCallback = function(P, A, I) {
        var V = e.unstable_now();
        switch (typeof I == "object" && I !== null ? (I = I.delay,
        I = typeof I == "number" && 0 < I ? V + I : V) : I = V,
        P) {
        case 1:
            var se = -1;
            break;
        case 2:
            se = 250;
            break;
        case 5:
            se = 1073741823;
            break;
        case 4:
            se = 1e4;
            break;
        default:
            se = 5e3
        }
        return se = I + se,
        P = {
            id: d++,
            callback: A,
            priorityLevel: P,
            startTime: I,
            expirationTime: se,
            sortIndex: -1
        },
        I > V ? (P.sortIndex = I,
        t(c, P),
        n(u) === null && P === n(c) && (v ? (m(j),
        j = -1) : v = !0,
        q(b, I - V))) : (P.sortIndex = se,
        t(u, P),
        S || x || (S = !0,
        H(C))),
        P
    }
    ,
    e.unstable_shouldYield = $,
    e.unstable_wrapCallback = function(P) {
        var A = g;
        return function() {
            var I = g;
            g = A;
            try {
                return P.apply(this, arguments)
            } finally {
                g = I
            }
        }
    }
}
)(ah);
lh.exports = ah;
var Hx = lh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wx = p
  , Ye = Hx;
function T(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var uh = new Set
  , Zo = {};
function hr(e, t) {
    so(e, t),
    so(e + "Capture", t)
}
function so(e, t) {
    for (Zo[e] = t,
    e = 0; e < t.length; e++)
        uh.add(t[e])
}
var Wt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Ca = Object.prototype.hasOwnProperty
  , Qx = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , $d = {}
  , Ud = {};
function Kx(e) {
    return Ca.call(Ud, e) ? !0 : Ca.call($d, e) ? !1 : Qx.test(e) ? Ud[e] = !0 : ($d[e] = !0,
    !1)
}
function Gx(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function qx(e, t, n, r) {
    if (t === null || typeof t > "u" || Gx(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function Le(e, t, n, r, o, s, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = o,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = s,
    this.removeEmptyString = i
}
var Ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Ee[e] = new Le(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    Ee[t] = new Le(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Ee[e] = new Le(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Ee[e] = new Le(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Ee[e] = new Le(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Ee[e] = new Le(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    Ee[e] = new Le(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    Ee[e] = new Le(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    Ee[e] = new Le(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Ku = /[\-:]([a-z])/g;
function Gu(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Ku, Gu);
    Ee[t] = new Le(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Ku, Gu);
    Ee[t] = new Le(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Ku, Gu);
    Ee[t] = new Le(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    Ee[e] = new Le(e,1,!1,e.toLowerCase(),null,!1,!1)
});
Ee.xlinkHref = new Le("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    Ee[e] = new Le(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function qu(e, t, n, r) {
    var o = Ee.hasOwnProperty(t) ? Ee[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (qx(t, n, o, r) && (n = null),
    r || o === null ? Kx(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName,
    r = o.attributeNamespace,
    n === null ? e.removeAttribute(t) : (o = o.type,
    n = o === 3 || o === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Xt = Wx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Ls = Symbol.for("react.element")
  , br = Symbol.for("react.portal")
  , Er = Symbol.for("react.fragment")
  , Yu = Symbol.for("react.strict_mode")
  , Na = Symbol.for("react.profiler")
  , ch = Symbol.for("react.provider")
  , dh = Symbol.for("react.context")
  , Xu = Symbol.for("react.forward_ref")
  , ka = Symbol.for("react.suspense")
  , ja = Symbol.for("react.suspense_list")
  , Zu = Symbol.for("react.memo")
  , sn = Symbol.for("react.lazy")
  , fh = Symbol.for("react.offscreen")
  , Bd = Symbol.iterator;
function jo(e) {
    return e === null || typeof e != "object" ? null : (e = Bd && e[Bd] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var ue = Object.assign, Il;
function Io(e) {
    if (Il === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Il = t && t[1] || ""
        }
    return `
` + Il + e
}
var Fl = !1;
function zl(e, t) {
    if (!e || Fl)
        return "";
    Fl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (c) {
                    var r = c
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (c) {
                    r = c
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (c) {
                r = c
            }
            e()
        }
    } catch (c) {
        if (c && r && typeof c.stack == "string") {
            for (var o = c.stack.split(`
`), s = r.stack.split(`
`), i = o.length - 1, l = s.length - 1; 1 <= i && 0 <= l && o[i] !== s[l]; )
                l--;
            for (; 1 <= i && 0 <= l; i--,
            l--)
                if (o[i] !== s[l]) {
                    if (i !== 1 || l !== 1)
                        do
                            if (i--,
                            l--,
                            0 > l || o[i] !== s[l]) {
                                var u = `
` + o[i].replace(" at new ", " at ");
                                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)),
                                u
                            }
                        while (1 <= i && 0 <= l);
                    break
                }
        }
    } finally {
        Fl = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Io(e) : ""
}
function Yx(e) {
    switch (e.tag) {
    case 5:
        return Io(e.type);
    case 16:
        return Io("Lazy");
    case 13:
        return Io("Suspense");
    case 19:
        return Io("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = zl(e.type, !1),
        e;
    case 11:
        return e = zl(e.type.render, !1),
        e;
    case 1:
        return e = zl(e.type, !0),
        e;
    default:
        return ""
    }
}
function Pa(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case Er:
        return "Fragment";
    case br:
        return "Portal";
    case Na:
        return "Profiler";
    case Yu:
        return "StrictMode";
    case ka:
        return "Suspense";
    case ja:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case dh:
            return (e.displayName || "Context") + ".Consumer";
        case ch:
            return (e._context.displayName || "Context") + ".Provider";
        case Xu:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case Zu:
            return t = e.displayName || null,
            t !== null ? t : Pa(e.type) || "Memo";
        case sn:
            t = e._payload,
            e = e._init;
            try {
                return Pa(e(t))
            } catch {}
        }
    return null
}
function Xx(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return Pa(t);
    case 8:
        return t === Yu ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function An(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function ph(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function Zx(e) {
    var t = ph(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get
          , s = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(i) {
                r = "" + i,
                s.call(this, i)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(i) {
                r = "" + i
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function Is(e) {
    e._valueTracker || (e._valueTracker = Zx(e))
}
function hh(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = ph(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Ni(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Ta(e, t) {
    var n = t.checked;
    return ue({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Vd(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = An(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function mh(e, t) {
    t = t.checked,
    t != null && qu(e, "checked", t, !1)
}
function Ra(e, t) {
    mh(e, t);
    var n = An(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Oa(e, t.type, n) : t.hasOwnProperty("defaultValue") && Oa(e, t.type, An(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Hd(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function Oa(e, t, n) {
    (t !== "number" || Ni(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Fo = Array.isArray;
function Dr(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var o = 0; o < n.length; o++)
            t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            o = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== o && (e[n].selected = o),
            o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + An(n),
        t = null,
        o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0,
                r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}
function Aa(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(T(91));
    return ue({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Wd(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(T(92));
            if (Fo(n)) {
                if (1 < n.length)
                    throw Error(T(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: An(n)
    }
}
function gh(e, t) {
    var n = An(t.value)
      , r = An(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function Qd(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function vh(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function _a(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? vh(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Fs, yh = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (Fs = Fs || document.createElement("div"),
        Fs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = Fs.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Jo(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Bo = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , Jx = ["Webkit", "ms", "Moz", "O"];
Object.keys(Bo).forEach(function(e) {
    Jx.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Bo[t] = Bo[e]
    })
});
function xh(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Bo.hasOwnProperty(e) && Bo[e] ? ("" + t).trim() : t + "px"
}
function wh(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , o = xh(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, o) : e[n] = o
        }
}
var e0 = ue({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function Da(e, t) {
    if (t) {
        if (e0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(T(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(T(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(T(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(T(62))
    }
}
function Ma(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var La = null;
function Ju(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Ia = null
  , Mr = null
  , Lr = null;
function Kd(e) {
    if (e = js(e)) {
        if (typeof Ia != "function")
            throw Error(T(280));
        var t = e.stateNode;
        t && (t = dl(t),
        Ia(e.stateNode, e.type, t))
    }
}
function Sh(e) {
    Mr ? Lr ? Lr.push(e) : Lr = [e] : Mr = e
}
function bh() {
    if (Mr) {
        var e = Mr
          , t = Lr;
        if (Lr = Mr = null,
        Kd(e),
        t)
            for (e = 0; e < t.length; e++)
                Kd(t[e])
    }
}
function Eh(e, t) {
    return e(t)
}
function Ch() {}
var $l = !1;
function Nh(e, t, n) {
    if ($l)
        return e(t, n);
    $l = !0;
    try {
        return Eh(e, t, n)
    } finally {
        $l = !1,
        (Mr !== null || Lr !== null) && (Ch(),
        bh())
    }
}
function es(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = dl(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(T(231, t, typeof n));
    return n
}
var Fa = !1;
if (Wt)
    try {
        var Po = {};
        Object.defineProperty(Po, "passive", {
            get: function() {
                Fa = !0
            }
        }),
        window.addEventListener("test", Po, Po),
        window.removeEventListener("test", Po, Po)
    } catch {
        Fa = !1
    }
function t0(e, t, n, r, o, s, i, l, u) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, c)
    } catch (d) {
        this.onError(d)
    }
}
var Vo = !1
  , ki = null
  , ji = !1
  , za = null
  , n0 = {
    onError: function(e) {
        Vo = !0,
        ki = e
    }
};
function r0(e, t, n, r, o, s, i, l, u) {
    Vo = !1,
    ki = null,
    t0.apply(n0, arguments)
}
function o0(e, t, n, r, o, s, i, l, u) {
    if (r0.apply(this, arguments),
    Vo) {
        if (Vo) {
            var c = ki;
            Vo = !1,
            ki = null
        } else
            throw Error(T(198));
        ji || (ji = !0,
        za = c)
    }
}
function mr(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function kh(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function Gd(e) {
    if (mr(e) !== e)
        throw Error(T(188))
}
function s0(e) {
    var t = e.alternate;
    if (!t) {
        if (t = mr(e),
        t === null)
            throw Error(T(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var o = n.return;
        if (o === null)
            break;
        var s = o.alternate;
        if (s === null) {
            if (r = o.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === s.child) {
            for (s = o.child; s; ) {
                if (s === n)
                    return Gd(o),
                    e;
                if (s === r)
                    return Gd(o),
                    t;
                s = s.sibling
            }
            throw Error(T(188))
        }
        if (n.return !== r.return)
            n = o,
            r = s;
        else {
            for (var i = !1, l = o.child; l; ) {
                if (l === n) {
                    i = !0,
                    n = o,
                    r = s;
                    break
                }
                if (l === r) {
                    i = !0,
                    r = o,
                    n = s;
                    break
                }
                l = l.sibling
            }
            if (!i) {
                for (l = s.child; l; ) {
                    if (l === n) {
                        i = !0,
                        n = s,
                        r = o;
                        break
                    }
                    if (l === r) {
                        i = !0,
                        r = s,
                        n = o;
                        break
                    }
                    l = l.sibling
                }
                if (!i)
                    throw Error(T(189))
            }
        }
        if (n.alternate !== r)
            throw Error(T(190))
    }
    if (n.tag !== 3)
        throw Error(T(188));
    return n.stateNode.current === n ? e : t
}
function jh(e) {
    return e = s0(e),
    e !== null ? Ph(e) : null
}
function Ph(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = Ph(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Th = Ye.unstable_scheduleCallback
  , qd = Ye.unstable_cancelCallback
  , i0 = Ye.unstable_shouldYield
  , l0 = Ye.unstable_requestPaint
  , pe = Ye.unstable_now
  , a0 = Ye.unstable_getCurrentPriorityLevel
  , ec = Ye.unstable_ImmediatePriority
  , Rh = Ye.unstable_UserBlockingPriority
  , Pi = Ye.unstable_NormalPriority
  , u0 = Ye.unstable_LowPriority
  , Oh = Ye.unstable_IdlePriority
  , ll = null
  , Rt = null;
function c0(e) {
    if (Rt && typeof Rt.onCommitFiberRoot == "function")
        try {
            Rt.onCommitFiberRoot(ll, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var gt = Math.clz32 ? Math.clz32 : p0
  , d0 = Math.log
  , f0 = Math.LN2;
function p0(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (d0(e) / f0 | 0) | 0
}
var zs = 64
  , $s = 4194304;
function zo(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function Ti(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , o = e.suspendedLanes
      , s = e.pingedLanes
      , i = n & 268435455;
    if (i !== 0) {
        var l = i & ~o;
        l !== 0 ? r = zo(l) : (s &= i,
        s !== 0 && (r = zo(s)))
    } else
        i = n & ~o,
        i !== 0 ? r = zo(i) : s !== 0 && (r = zo(s));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r,
    s = t & -t,
    o >= s || o === 16 && (s & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - gt(t),
            o = 1 << n,
            r |= e[n],
            t &= ~o;
    return r
}
function h0(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function m0(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
        var i = 31 - gt(s)
          , l = 1 << i
          , u = o[i];
        u === -1 ? (!(l & n) || l & r) && (o[i] = h0(l, t)) : u <= t && (e.expiredLanes |= l),
        s &= ~l
    }
}
function $a(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Ah() {
    var e = zs;
    return zs <<= 1,
    !(zs & 4194240) && (zs = 64),
    e
}
function Ul(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function Ns(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - gt(t),
    e[t] = n
}
function g0(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var o = 31 - gt(n)
          , s = 1 << o;
        t[o] = 0,
        r[o] = -1,
        e[o] = -1,
        n &= ~s
    }
}
function tc(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - gt(n)
          , o = 1 << r;
        o & t | e[r] & t && (e[r] |= t),
        n &= ~o
    }
}
var Z = 0;
function _h(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Dh, nc, Mh, Lh, Ih, Ua = !1, Us = [], bn = null, En = null, Cn = null, ts = new Map, ns = new Map, an = [], v0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Yd(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        bn = null;
        break;
    case "dragenter":
    case "dragleave":
        En = null;
        break;
    case "mouseover":
    case "mouseout":
        Cn = null;
        break;
    case "pointerover":
    case "pointerout":
        ts.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        ns.delete(t.pointerId)
    }
}
function To(e, t, n, r, o, s) {
    return e === null || e.nativeEvent !== s ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [o]
    },
    t !== null && (t = js(t),
    t !== null && nc(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    o !== null && t.indexOf(o) === -1 && t.push(o),
    e)
}
function y0(e, t, n, r, o) {
    switch (t) {
    case "focusin":
        return bn = To(bn, e, t, n, r, o),
        !0;
    case "dragenter":
        return En = To(En, e, t, n, r, o),
        !0;
    case "mouseover":
        return Cn = To(Cn, e, t, n, r, o),
        !0;
    case "pointerover":
        var s = o.pointerId;
        return ts.set(s, To(ts.get(s) || null, e, t, n, r, o)),
        !0;
    case "gotpointercapture":
        return s = o.pointerId,
        ns.set(s, To(ns.get(s) || null, e, t, n, r, o)),
        !0
    }
    return !1
}
function Fh(e) {
    var t = Hn(e.target);
    if (t !== null) {
        var n = mr(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = kh(n),
                t !== null) {
                    e.blockedOn = t,
                    Ih(e.priority, function() {
                        Mh(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function ai(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Ba(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            La = r,
            n.target.dispatchEvent(r),
            La = null
        } else
            return t = js(n),
            t !== null && nc(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Xd(e, t, n) {
    ai(e) && n.delete(t)
}
function x0() {
    Ua = !1,
    bn !== null && ai(bn) && (bn = null),
    En !== null && ai(En) && (En = null),
    Cn !== null && ai(Cn) && (Cn = null),
    ts.forEach(Xd),
    ns.forEach(Xd)
}
function Ro(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    Ua || (Ua = !0,
    Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority, x0)))
}
function rs(e) {
    function t(o) {
        return Ro(o, e)
    }
    if (0 < Us.length) {
        Ro(Us[0], e);
        for (var n = 1; n < Us.length; n++) {
            var r = Us[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (bn !== null && Ro(bn, e),
    En !== null && Ro(En, e),
    Cn !== null && Ro(Cn, e),
    ts.forEach(t),
    ns.forEach(t),
    n = 0; n < an.length; n++)
        r = an[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < an.length && (n = an[0],
    n.blockedOn === null); )
        Fh(n),
        n.blockedOn === null && an.shift()
}
var Ir = Xt.ReactCurrentBatchConfig
  , Ri = !0;
function w0(e, t, n, r) {
    var o = Z
      , s = Ir.transition;
    Ir.transition = null;
    try {
        Z = 1,
        rc(e, t, n, r)
    } finally {
        Z = o,
        Ir.transition = s
    }
}
function S0(e, t, n, r) {
    var o = Z
      , s = Ir.transition;
    Ir.transition = null;
    try {
        Z = 4,
        rc(e, t, n, r)
    } finally {
        Z = o,
        Ir.transition = s
    }
}
function rc(e, t, n, r) {
    if (Ri) {
        var o = Ba(e, t, n, r);
        if (o === null)
            Xl(e, t, r, Oi, n),
            Yd(e, r);
        else if (y0(o, e, t, n, r))
            r.stopPropagation();
        else if (Yd(e, r),
        t & 4 && -1 < v0.indexOf(e)) {
            for (; o !== null; ) {
                var s = js(o);
                if (s !== null && Dh(s),
                s = Ba(e, t, n, r),
                s === null && Xl(e, t, r, Oi, n),
                s === o)
                    break;
                o = s
            }
            o !== null && r.stopPropagation()
        } else
            Xl(e, t, r, null, n)
    }
}
var Oi = null;
function Ba(e, t, n, r) {
    if (Oi = null,
    e = Ju(r),
    e = Hn(e),
    e !== null)
        if (t = mr(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = kh(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Oi = e,
    null
}
function zh(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (a0()) {
        case ec:
            return 1;
        case Rh:
            return 4;
        case Pi:
        case u0:
            return 16;
        case Oh:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var xn = null
  , oc = null
  , ui = null;
function $h() {
    if (ui)
        return ui;
    var e, t = oc, n = t.length, r, o = "value"in xn ? xn.value : xn.textContent, s = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++)
        ;
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === o[s - r]; r++)
        ;
    return ui = o.slice(e, 1 < r ? 1 - r : void 0)
}
function ci(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Bs() {
    return !0
}
function Zd() {
    return !1
}
function Ze(e) {
    function t(n, r, o, s, i) {
        this._reactName = n,
        this._targetInst = o,
        this.type = r,
        this.nativeEvent = s,
        this.target = i,
        this.currentTarget = null;
        for (var l in e)
            e.hasOwnProperty(l) && (n = e[l],
            this[l] = n ? n(s) : s[l]);
        return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Bs : Zd,
        this.isPropagationStopped = Zd,
        this
    }
    return ue(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = Bs)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = Bs)
        },
        persist: function() {},
        isPersistent: Bs
    }),
    t
}
var yo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, sc = Ze(yo), ks = ue({}, yo, {
    view: 0,
    detail: 0
}), b0 = Ze(ks), Bl, Vl, Oo, al = ue({}, ks, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ic,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== Oo && (Oo && e.type === "mousemove" ? (Bl = e.screenX - Oo.screenX,
        Vl = e.screenY - Oo.screenY) : Vl = Bl = 0,
        Oo = e),
        Bl)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : Vl
    }
}), Jd = Ze(al), E0 = ue({}, al, {
    dataTransfer: 0
}), C0 = Ze(E0), N0 = ue({}, ks, {
    relatedTarget: 0
}), Hl = Ze(N0), k0 = ue({}, yo, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), j0 = Ze(k0), P0 = ue({}, yo, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), T0 = Ze(P0), R0 = ue({}, yo, {
    data: 0
}), ef = Ze(R0), O0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, A0 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, _0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function D0(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = _0[e]) ? !!t[e] : !1
}
function ic() {
    return D0
}
var M0 = ue({}, ks, {
    key: function(e) {
        if (e.key) {
            var t = O0[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = ci(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? A0[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ic,
    charCode: function(e) {
        return e.type === "keypress" ? ci(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? ci(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , L0 = Ze(M0)
  , I0 = ue({}, al, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , tf = Ze(I0)
  , F0 = ue({}, ks, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ic
})
  , z0 = Ze(F0)
  , $0 = ue({}, yo, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , U0 = Ze($0)
  , B0 = ue({}, al, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , V0 = Ze(B0)
  , H0 = [9, 13, 27, 32]
  , lc = Wt && "CompositionEvent"in window
  , Ho = null;
Wt && "documentMode"in document && (Ho = document.documentMode);
var W0 = Wt && "TextEvent"in window && !Ho
  , Uh = Wt && (!lc || Ho && 8 < Ho && 11 >= Ho)
  , nf = " "
  , rf = !1;
function Bh(e, t) {
    switch (e) {
    case "keyup":
        return H0.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Vh(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var Cr = !1;
function Q0(e, t) {
    switch (e) {
    case "compositionend":
        return Vh(t);
    case "keypress":
        return t.which !== 32 ? null : (rf = !0,
        nf);
    case "textInput":
        return e = t.data,
        e === nf && rf ? null : e;
    default:
        return null
    }
}
function K0(e, t) {
    if (Cr)
        return e === "compositionend" || !lc && Bh(e, t) ? (e = $h(),
        ui = oc = xn = null,
        Cr = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return Uh && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var G0 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function of(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!G0[e.type] : t === "textarea"
}
function Hh(e, t, n, r) {
    Sh(r),
    t = Ai(t, "onChange"),
    0 < t.length && (n = new sc("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var Wo = null
  , os = null;
function q0(e) {
    tm(e, 0)
}
function ul(e) {
    var t = jr(e);
    if (hh(t))
        return e
}
function Y0(e, t) {
    if (e === "change")
        return t
}
var Wh = !1;
if (Wt) {
    var Wl;
    if (Wt) {
        var Ql = "oninput"in document;
        if (!Ql) {
            var sf = document.createElement("div");
            sf.setAttribute("oninput", "return;"),
            Ql = typeof sf.oninput == "function"
        }
        Wl = Ql
    } else
        Wl = !1;
    Wh = Wl && (!document.documentMode || 9 < document.documentMode)
}
function lf() {
    Wo && (Wo.detachEvent("onpropertychange", Qh),
    os = Wo = null)
}
function Qh(e) {
    if (e.propertyName === "value" && ul(os)) {
        var t = [];
        Hh(t, os, e, Ju(e)),
        Nh(q0, t)
    }
}
function X0(e, t, n) {
    e === "focusin" ? (lf(),
    Wo = t,
    os = n,
    Wo.attachEvent("onpropertychange", Qh)) : e === "focusout" && lf()
}
function Z0(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return ul(os)
}
function J0(e, t) {
    if (e === "click")
        return ul(t)
}
function ew(e, t) {
    if (e === "input" || e === "change")
        return ul(t)
}
function tw(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var yt = typeof Object.is == "function" ? Object.is : tw;
function ss(e, t) {
    if (yt(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!Ca.call(t, o) || !yt(e[o], t[o]))
            return !1
    }
    return !0
}
function af(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function uf(e, t) {
    var n = af(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = af(n)
    }
}
function Kh(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Kh(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Gh() {
    for (var e = window, t = Ni(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Ni(e.document)
    }
    return t
}
function ac(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function nw(e) {
    var t = Gh()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Kh(n.ownerDocument.documentElement, n)) {
        if (r !== null && ac(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length
                  , s = Math.min(r.start, o);
                r = r.end === void 0 ? s : Math.min(r.end, o),
                !e.extend && s > r && (o = r,
                r = s,
                s = o),
                o = uf(n, s);
                var i = uf(n, r);
                o && i && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(),
                t.setStart(o.node, o.offset),
                e.removeAllRanges(),
                s > r ? (e.addRange(t),
                e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var rw = Wt && "documentMode"in document && 11 >= document.documentMode
  , Nr = null
  , Va = null
  , Qo = null
  , Ha = !1;
function cf(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ha || Nr == null || Nr !== Ni(r) || (r = Nr,
    "selectionStart"in r && ac(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Qo && ss(Qo, r) || (Qo = r,
    r = Ai(Va, "onSelect"),
    0 < r.length && (t = new sc("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = Nr)))
}
function Vs(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var kr = {
    animationend: Vs("Animation", "AnimationEnd"),
    animationiteration: Vs("Animation", "AnimationIteration"),
    animationstart: Vs("Animation", "AnimationStart"),
    transitionend: Vs("Transition", "TransitionEnd")
}
  , Kl = {}
  , qh = {};
Wt && (qh = document.createElement("div").style,
"AnimationEvent"in window || (delete kr.animationend.animation,
delete kr.animationiteration.animation,
delete kr.animationstart.animation),
"TransitionEvent"in window || delete kr.transitionend.transition);
function cl(e) {
    if (Kl[e])
        return Kl[e];
    if (!kr[e])
        return e;
    var t = kr[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in qh)
            return Kl[e] = t[n];
    return e
}
var Yh = cl("animationend")
  , Xh = cl("animationiteration")
  , Zh = cl("animationstart")
  , Jh = cl("transitionend")
  , em = new Map
  , df = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Fn(e, t) {
    em.set(e, t),
    hr(t, [e])
}
for (var Gl = 0; Gl < df.length; Gl++) {
    var ql = df[Gl]
      , ow = ql.toLowerCase()
      , sw = ql[0].toUpperCase() + ql.slice(1);
    Fn(ow, "on" + sw)
}
Fn(Yh, "onAnimationEnd");
Fn(Xh, "onAnimationIteration");
Fn(Zh, "onAnimationStart");
Fn("dblclick", "onDoubleClick");
Fn("focusin", "onFocus");
Fn("focusout", "onBlur");
Fn(Jh, "onTransitionEnd");
so("onMouseEnter", ["mouseout", "mouseover"]);
so("onMouseLeave", ["mouseout", "mouseover"]);
so("onPointerEnter", ["pointerout", "pointerover"]);
so("onPointerLeave", ["pointerout", "pointerover"]);
hr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
hr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
hr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
hr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
hr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
hr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var $o = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , iw = new Set("cancel close invalid load scroll toggle".split(" ").concat($o));
function ff(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    o0(r, t, void 0, e),
    e.currentTarget = null
}
function tm(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , o = r.event;
        r = r.listeners;
        e: {
            var s = void 0;
            if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                    var l = r[i]
                      , u = l.instance
                      , c = l.currentTarget;
                    if (l = l.listener,
                    u !== s && o.isPropagationStopped())
                        break e;
                    ff(o, l, c),
                    s = u
                }
            else
                for (i = 0; i < r.length; i++) {
                    if (l = r[i],
                    u = l.instance,
                    c = l.currentTarget,
                    l = l.listener,
                    u !== s && o.isPropagationStopped())
                        break e;
                    ff(o, l, c),
                    s = u
                }
        }
    }
    if (ji)
        throw e = za,
        ji = !1,
        za = null,
        e
}
function ne(e, t) {
    var n = t[qa];
    n === void 0 && (n = t[qa] = new Set);
    var r = e + "__bubble";
    n.has(r) || (nm(t, e, 2, !1),
    n.add(r))
}
function Yl(e, t, n) {
    var r = 0;
    t && (r |= 4),
    nm(n, e, r, t)
}
var Hs = "_reactListening" + Math.random().toString(36).slice(2);
function is(e) {
    if (!e[Hs]) {
        e[Hs] = !0,
        uh.forEach(function(n) {
            n !== "selectionchange" && (iw.has(n) || Yl(n, !1, e),
            Yl(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Hs] || (t[Hs] = !0,
        Yl("selectionchange", !1, t))
    }
}
function nm(e, t, n, r) {
    switch (zh(t)) {
    case 1:
        var o = w0;
        break;
    case 4:
        o = S0;
        break;
    default:
        o = rc
    }
    n = o.bind(null, t, n, e),
    o = void 0,
    !Fa || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
    r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}
function Xl(e, t, n, r, o) {
    var s = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var i = r.tag;
            if (i === 3 || i === 4) {
                var l = r.stateNode.containerInfo;
                if (l === o || l.nodeType === 8 && l.parentNode === o)
                    break;
                if (i === 4)
                    for (i = r.return; i !== null; ) {
                        var u = i.tag;
                        if ((u === 3 || u === 4) && (u = i.stateNode.containerInfo,
                        u === o || u.nodeType === 8 && u.parentNode === o))
                            return;
                        i = i.return
                    }
                for (; l !== null; ) {
                    if (i = Hn(l),
                    i === null)
                        return;
                    if (u = i.tag,
                    u === 5 || u === 6) {
                        r = s = i;
                        continue e
                    }
                    l = l.parentNode
                }
            }
            r = r.return
        }
    Nh(function() {
        var c = s
          , d = Ju(n)
          , f = [];
        e: {
            var g = em.get(e);
            if (g !== void 0) {
                var x = sc
                  , S = e;
                switch (e) {
                case "keypress":
                    if (ci(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    x = L0;
                    break;
                case "focusin":
                    S = "focus",
                    x = Hl;
                    break;
                case "focusout":
                    S = "blur",
                    x = Hl;
                    break;
                case "beforeblur":
                case "afterblur":
                    x = Hl;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    x = Jd;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    x = C0;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    x = z0;
                    break;
                case Yh:
                case Xh:
                case Zh:
                    x = j0;
                    break;
                case Jh:
                    x = U0;
                    break;
                case "scroll":
                    x = b0;
                    break;
                case "wheel":
                    x = V0;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    x = T0;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    x = tf
                }
                var v = (t & 4) !== 0
                  , w = !v && e === "scroll"
                  , m = v ? g !== null ? g + "Capture" : null : g;
                v = [];
                for (var h = c, y; h !== null; ) {
                    y = h;
                    var b = y.stateNode;
                    if (y.tag === 5 && b !== null && (y = b,
                    m !== null && (b = es(h, m),
                    b != null && v.push(ls(h, b, y)))),
                    w)
                        break;
                    h = h.return
                }
                0 < v.length && (g = new x(g,S,null,n,d),
                f.push({
                    event: g,
                    listeners: v
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (g = e === "mouseover" || e === "pointerover",
                x = e === "mouseout" || e === "pointerout",
                g && n !== La && (S = n.relatedTarget || n.fromElement) && (Hn(S) || S[Qt]))
                    break e;
                if ((x || g) && (g = d.window === d ? d : (g = d.ownerDocument) ? g.defaultView || g.parentWindow : window,
                x ? (S = n.relatedTarget || n.toElement,
                x = c,
                S = S ? Hn(S) : null,
                S !== null && (w = mr(S),
                S !== w || S.tag !== 5 && S.tag !== 6) && (S = null)) : (x = null,
                S = c),
                x !== S)) {
                    if (v = Jd,
                    b = "onMouseLeave",
                    m = "onMouseEnter",
                    h = "mouse",
                    (e === "pointerout" || e === "pointerover") && (v = tf,
                    b = "onPointerLeave",
                    m = "onPointerEnter",
                    h = "pointer"),
                    w = x == null ? g : jr(x),
                    y = S == null ? g : jr(S),
                    g = new v(b,h + "leave",x,n,d),
                    g.target = w,
                    g.relatedTarget = y,
                    b = null,
                    Hn(d) === c && (v = new v(m,h + "enter",S,n,d),
                    v.target = y,
                    v.relatedTarget = w,
                    b = v),
                    w = b,
                    x && S)
                        t: {
                            for (v = x,
                            m = S,
                            h = 0,
                            y = v; y; y = vr(y))
                                h++;
                            for (y = 0,
                            b = m; b; b = vr(b))
                                y++;
                            for (; 0 < h - y; )
                                v = vr(v),
                                h--;
                            for (; 0 < y - h; )
                                m = vr(m),
                                y--;
                            for (; h--; ) {
                                if (v === m || m !== null && v === m.alternate)
                                    break t;
                                v = vr(v),
                                m = vr(m)
                            }
                            v = null
                        }
                    else
                        v = null;
                    x !== null && pf(f, g, x, v, !1),
                    S !== null && w !== null && pf(f, w, S, v, !0)
                }
            }
            e: {
                if (g = c ? jr(c) : window,
                x = g.nodeName && g.nodeName.toLowerCase(),
                x === "select" || x === "input" && g.type === "file")
                    var C = Y0;
                else if (of(g))
                    if (Wh)
                        C = ew;
                    else {
                        C = Z0;
                        var k = X0
                    }
                else
                    (x = g.nodeName) && x.toLowerCase() === "input" && (g.type === "checkbox" || g.type === "radio") && (C = J0);
                if (C && (C = C(e, c))) {
                    Hh(f, C, n, d);
                    break e
                }
                k && k(e, g, c),
                e === "focusout" && (k = g._wrapperState) && k.controlled && g.type === "number" && Oa(g, "number", g.value)
            }
            switch (k = c ? jr(c) : window,
            e) {
            case "focusin":
                (of(k) || k.contentEditable === "true") && (Nr = k,
                Va = c,
                Qo = null);
                break;
            case "focusout":
                Qo = Va = Nr = null;
                break;
            case "mousedown":
                Ha = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Ha = !1,
                cf(f, n, d);
                break;
            case "selectionchange":
                if (rw)
                    break;
            case "keydown":
            case "keyup":
                cf(f, n, d)
            }
            var N;
            if (lc)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var j = "onCompositionStart";
                        break e;
                    case "compositionend":
                        j = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        j = "onCompositionUpdate";
                        break e
                    }
                    j = void 0
                }
            else
                Cr ? Bh(e, n) && (j = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
            j && (Uh && n.locale !== "ko" && (Cr || j !== "onCompositionStart" ? j === "onCompositionEnd" && Cr && (N = $h()) : (xn = d,
            oc = "value"in xn ? xn.value : xn.textContent,
            Cr = !0)),
            k = Ai(c, j),
            0 < k.length && (j = new ef(j,e,null,n,d),
            f.push({
                event: j,
                listeners: k
            }),
            N ? j.data = N : (N = Vh(n),
            N !== null && (j.data = N)))),
            (N = W0 ? Q0(e, n) : K0(e, n)) && (c = Ai(c, "onBeforeInput"),
            0 < c.length && (d = new ef("onBeforeInput","beforeinput",null,n,d),
            f.push({
                event: d,
                listeners: c
            }),
            d.data = N))
        }
        tm(f, t)
    })
}
function ls(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Ai(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var o = e
          , s = o.stateNode;
        o.tag === 5 && s !== null && (o = s,
        s = es(e, n),
        s != null && r.unshift(ls(e, s, o)),
        s = es(e, t),
        s != null && r.push(ls(e, s, o))),
        e = e.return
    }
    return r
}
function vr(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function pf(e, t, n, r, o) {
    for (var s = t._reactName, i = []; n !== null && n !== r; ) {
        var l = n
          , u = l.alternate
          , c = l.stateNode;
        if (u !== null && u === r)
            break;
        l.tag === 5 && c !== null && (l = c,
        o ? (u = es(n, s),
        u != null && i.unshift(ls(n, u, l))) : o || (u = es(n, s),
        u != null && i.push(ls(n, u, l)))),
        n = n.return
    }
    i.length !== 0 && e.push({
        event: t,
        listeners: i
    })
}
var lw = /\r\n?/g
  , aw = /\u0000|\uFFFD/g;
function hf(e) {
    return (typeof e == "string" ? e : "" + e).replace(lw, `
`).replace(aw, "")
}
function Ws(e, t, n) {
    if (t = hf(t),
    hf(e) !== t && n)
        throw Error(T(425))
}
function _i() {}
var Wa = null
  , Qa = null;
function Ka(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Ga = typeof setTimeout == "function" ? setTimeout : void 0
  , uw = typeof clearTimeout == "function" ? clearTimeout : void 0
  , mf = typeof Promise == "function" ? Promise : void 0
  , cw = typeof queueMicrotask == "function" ? queueMicrotask : typeof mf < "u" ? function(e) {
    return mf.resolve(null).then(e).catch(dw)
}
: Ga;
function dw(e) {
    setTimeout(function() {
        throw e
    })
}
function Zl(e, t) {
    var n = t
      , r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n),
        o && o.nodeType === 8)
            if (n = o.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(o),
                    rs(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    rs(t)
}
function Nn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function gf(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var xo = Math.random().toString(36).slice(2)
  , Pt = "__reactFiber$" + xo
  , as = "__reactProps$" + xo
  , Qt = "__reactContainer$" + xo
  , qa = "__reactEvents$" + xo
  , fw = "__reactListeners$" + xo
  , pw = "__reactHandles$" + xo;
function Hn(e) {
    var t = e[Pt];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[Qt] || n[Pt]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = gf(e); e !== null; ) {
                    if (n = e[Pt])
                        return n;
                    e = gf(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function js(e) {
    return e = e[Pt] || e[Qt],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function jr(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(T(33))
}
function dl(e) {
    return e[as] || null
}
var Ya = []
  , Pr = -1;
function zn(e) {
    return {
        current: e
    }
}
function oe(e) {
    0 > Pr || (e.current = Ya[Pr],
    Ya[Pr] = null,
    Pr--)
}
function ee(e, t) {
    Pr++,
    Ya[Pr] = e.current,
    e.current = t
}
var _n = {}
  , Te = zn(_n)
  , Ue = zn(!1)
  , or = _n;
function io(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return _n;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, s;
    for (s in n)
        o[s] = t[s];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = o),
    o
}
function Be(e) {
    return e = e.childContextTypes,
    e != null
}
function Di() {
    oe(Ue),
    oe(Te)
}
function vf(e, t, n) {
    if (Te.current !== _n)
        throw Error(T(168));
    ee(Te, t),
    ee(Ue, n)
}
function rm(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t))
            throw Error(T(108, Xx(e) || "Unknown", o));
    return ue({}, n, r)
}
function Mi(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || _n,
    or = Te.current,
    ee(Te, e),
    ee(Ue, Ue.current),
    !0
}
function yf(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(T(169));
    n ? (e = rm(e, t, or),
    r.__reactInternalMemoizedMergedChildContext = e,
    oe(Ue),
    oe(Te),
    ee(Te, e)) : oe(Ue),
    ee(Ue, n)
}
var zt = null
  , fl = !1
  , Jl = !1;
function om(e) {
    zt === null ? zt = [e] : zt.push(e)
}
function hw(e) {
    fl = !0,
    om(e)
}
function $n() {
    if (!Jl && zt !== null) {
        Jl = !0;
        var e = 0
          , t = Z;
        try {
            var n = zt;
            for (Z = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            zt = null,
            fl = !1
        } catch (o) {
            throw zt !== null && (zt = zt.slice(e + 1)),
            Th(ec, $n),
            o
        } finally {
            Z = t,
            Jl = !1
        }
    }
    return null
}
var Tr = []
  , Rr = 0
  , Li = null
  , Ii = 0
  , nt = []
  , rt = 0
  , sr = null
  , Ut = 1
  , Bt = "";
function Bn(e, t) {
    Tr[Rr++] = Ii,
    Tr[Rr++] = Li,
    Li = e,
    Ii = t
}
function sm(e, t, n) {
    nt[rt++] = Ut,
    nt[rt++] = Bt,
    nt[rt++] = sr,
    sr = e;
    var r = Ut;
    e = Bt;
    var o = 32 - gt(r) - 1;
    r &= ~(1 << o),
    n += 1;
    var s = 32 - gt(t) + o;
    if (30 < s) {
        var i = o - o % 5;
        s = (r & (1 << i) - 1).toString(32),
        r >>= i,
        o -= i,
        Ut = 1 << 32 - gt(t) + o | n << o | r,
        Bt = s + e
    } else
        Ut = 1 << s | n << o | r,
        Bt = e
}
function uc(e) {
    e.return !== null && (Bn(e, 1),
    sm(e, 1, 0))
}
function cc(e) {
    for (; e === Li; )
        Li = Tr[--Rr],
        Tr[Rr] = null,
        Ii = Tr[--Rr],
        Tr[Rr] = null;
    for (; e === sr; )
        sr = nt[--rt],
        nt[rt] = null,
        Bt = nt[--rt],
        nt[rt] = null,
        Ut = nt[--rt],
        nt[rt] = null
}
var Ge = null
  , Ke = null
  , ie = !1
  , ht = null;
function im(e, t) {
    var n = ot(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function xf(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Ge = e,
        Ke = Nn(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Ge = e,
        Ke = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = sr !== null ? {
            id: Ut,
            overflow: Bt
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = ot(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        Ge = e,
        Ke = null,
        !0) : !1;
    default:
        return !1
    }
}
function Xa(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Za(e) {
    if (ie) {
        var t = Ke;
        if (t) {
            var n = t;
            if (!xf(e, t)) {
                if (Xa(e))
                    throw Error(T(418));
                t = Nn(n.nextSibling);
                var r = Ge;
                t && xf(e, t) ? im(r, n) : (e.flags = e.flags & -4097 | 2,
                ie = !1,
                Ge = e)
            }
        } else {
            if (Xa(e))
                throw Error(T(418));
            e.flags = e.flags & -4097 | 2,
            ie = !1,
            Ge = e
        }
    }
}
function wf(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Ge = e
}
function Qs(e) {
    if (e !== Ge)
        return !1;
    if (!ie)
        return wf(e),
        ie = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !Ka(e.type, e.memoizedProps)),
    t && (t = Ke)) {
        if (Xa(e))
            throw lm(),
            Error(T(418));
        for (; t; )
            im(e, t),
            t = Nn(t.nextSibling)
    }
    if (wf(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(T(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Ke = Nn(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Ke = null
        }
    } else
        Ke = Ge ? Nn(e.stateNode.nextSibling) : null;
    return !0
}
function lm() {
    for (var e = Ke; e; )
        e = Nn(e.nextSibling)
}
function lo() {
    Ke = Ge = null,
    ie = !1
}
function dc(e) {
    ht === null ? ht = [e] : ht.push(e)
}
var mw = Xt.ReactCurrentBatchConfig;
function Ao(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(T(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(T(147, e));
            var o = r
              , s = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(i) {
                var l = o.refs;
                i === null ? delete l[s] : l[s] = i
            }
            ,
            t._stringRef = s,
            t)
        }
        if (typeof e != "string")
            throw Error(T(284));
        if (!n._owner)
            throw Error(T(290, e))
    }
    return e
}
function Ks(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(T(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Sf(e) {
    var t = e._init;
    return t(e._payload)
}
function am(e) {
    function t(m, h) {
        if (e) {
            var y = m.deletions;
            y === null ? (m.deletions = [h],
            m.flags |= 16) : y.push(h)
        }
    }
    function n(m, h) {
        if (!e)
            return null;
        for (; h !== null; )
            t(m, h),
            h = h.sibling;
        return null
    }
    function r(m, h) {
        for (m = new Map; h !== null; )
            h.key !== null ? m.set(h.key, h) : m.set(h.index, h),
            h = h.sibling;
        return m
    }
    function o(m, h) {
        return m = Tn(m, h),
        m.index = 0,
        m.sibling = null,
        m
    }
    function s(m, h, y) {
        return m.index = y,
        e ? (y = m.alternate,
        y !== null ? (y = y.index,
        y < h ? (m.flags |= 2,
        h) : y) : (m.flags |= 2,
        h)) : (m.flags |= 1048576,
        h)
    }
    function i(m) {
        return e && m.alternate === null && (m.flags |= 2),
        m
    }
    function l(m, h, y, b) {
        return h === null || h.tag !== 6 ? (h = ia(y, m.mode, b),
        h.return = m,
        h) : (h = o(h, y),
        h.return = m,
        h)
    }
    function u(m, h, y, b) {
        var C = y.type;
        return C === Er ? d(m, h, y.props.children, b, y.key) : h !== null && (h.elementType === C || typeof C == "object" && C !== null && C.$$typeof === sn && Sf(C) === h.type) ? (b = o(h, y.props),
        b.ref = Ao(m, h, y),
        b.return = m,
        b) : (b = vi(y.type, y.key, y.props, null, m.mode, b),
        b.ref = Ao(m, h, y),
        b.return = m,
        b)
    }
    function c(m, h, y, b) {
        return h === null || h.tag !== 4 || h.stateNode.containerInfo !== y.containerInfo || h.stateNode.implementation !== y.implementation ? (h = la(y, m.mode, b),
        h.return = m,
        h) : (h = o(h, y.children || []),
        h.return = m,
        h)
    }
    function d(m, h, y, b, C) {
        return h === null || h.tag !== 7 ? (h = nr(y, m.mode, b, C),
        h.return = m,
        h) : (h = o(h, y),
        h.return = m,
        h)
    }
    function f(m, h, y) {
        if (typeof h == "string" && h !== "" || typeof h == "number")
            return h = ia("" + h, m.mode, y),
            h.return = m,
            h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
            case Ls:
                return y = vi(h.type, h.key, h.props, null, m.mode, y),
                y.ref = Ao(m, null, h),
                y.return = m,
                y;
            case br:
                return h = la(h, m.mode, y),
                h.return = m,
                h;
            case sn:
                var b = h._init;
                return f(m, b(h._payload), y)
            }
            if (Fo(h) || jo(h))
                return h = nr(h, m.mode, y, null),
                h.return = m,
                h;
            Ks(m, h)
        }
        return null
    }
    function g(m, h, y, b) {
        var C = h !== null ? h.key : null;
        if (typeof y == "string" && y !== "" || typeof y == "number")
            return C !== null ? null : l(m, h, "" + y, b);
        if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
            case Ls:
                return y.key === C ? u(m, h, y, b) : null;
            case br:
                return y.key === C ? c(m, h, y, b) : null;
            case sn:
                return C = y._init,
                g(m, h, C(y._payload), b)
            }
            if (Fo(y) || jo(y))
                return C !== null ? null : d(m, h, y, b, null);
            Ks(m, y)
        }
        return null
    }
    function x(m, h, y, b, C) {
        if (typeof b == "string" && b !== "" || typeof b == "number")
            return m = m.get(y) || null,
            l(h, m, "" + b, C);
        if (typeof b == "object" && b !== null) {
            switch (b.$$typeof) {
            case Ls:
                return m = m.get(b.key === null ? y : b.key) || null,
                u(h, m, b, C);
            case br:
                return m = m.get(b.key === null ? y : b.key) || null,
                c(h, m, b, C);
            case sn:
                var k = b._init;
                return x(m, h, y, k(b._payload), C)
            }
            if (Fo(b) || jo(b))
                return m = m.get(y) || null,
                d(h, m, b, C, null);
            Ks(h, b)
        }
        return null
    }
    function S(m, h, y, b) {
        for (var C = null, k = null, N = h, j = h = 0, R = null; N !== null && j < y.length; j++) {
            N.index > j ? (R = N,
            N = null) : R = N.sibling;
            var O = g(m, N, y[j], b);
            if (O === null) {
                N === null && (N = R);
                break
            }
            e && N && O.alternate === null && t(m, N),
            h = s(O, h, j),
            k === null ? C = O : k.sibling = O,
            k = O,
            N = R
        }
        if (j === y.length)
            return n(m, N),
            ie && Bn(m, j),
            C;
        if (N === null) {
            for (; j < y.length; j++)
                N = f(m, y[j], b),
                N !== null && (h = s(N, h, j),
                k === null ? C = N : k.sibling = N,
                k = N);
            return ie && Bn(m, j),
            C
        }
        for (N = r(m, N); j < y.length; j++)
            R = x(N, m, j, y[j], b),
            R !== null && (e && R.alternate !== null && N.delete(R.key === null ? j : R.key),
            h = s(R, h, j),
            k === null ? C = R : k.sibling = R,
            k = R);
        return e && N.forEach(function($) {
            return t(m, $)
        }),
        ie && Bn(m, j),
        C
    }
    function v(m, h, y, b) {
        var C = jo(y);
        if (typeof C != "function")
            throw Error(T(150));
        if (y = C.call(y),
        y == null)
            throw Error(T(151));
        for (var k = C = null, N = h, j = h = 0, R = null, O = y.next(); N !== null && !O.done; j++,
        O = y.next()) {
            N.index > j ? (R = N,
            N = null) : R = N.sibling;
            var $ = g(m, N, O.value, b);
            if ($ === null) {
                N === null && (N = R);
                break
            }
            e && N && $.alternate === null && t(m, N),
            h = s($, h, j),
            k === null ? C = $ : k.sibling = $,
            k = $,
            N = R
        }
        if (O.done)
            return n(m, N),
            ie && Bn(m, j),
            C;
        if (N === null) {
            for (; !O.done; j++,
            O = y.next())
                O = f(m, O.value, b),
                O !== null && (h = s(O, h, j),
                k === null ? C = O : k.sibling = O,
                k = O);
            return ie && Bn(m, j),
            C
        }
        for (N = r(m, N); !O.done; j++,
        O = y.next())
            O = x(N, m, j, O.value, b),
            O !== null && (e && O.alternate !== null && N.delete(O.key === null ? j : O.key),
            h = s(O, h, j),
            k === null ? C = O : k.sibling = O,
            k = O);
        return e && N.forEach(function(L) {
            return t(m, L)
        }),
        ie && Bn(m, j),
        C
    }
    function w(m, h, y, b) {
        if (typeof y == "object" && y !== null && y.type === Er && y.key === null && (y = y.props.children),
        typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
            case Ls:
                e: {
                    for (var C = y.key, k = h; k !== null; ) {
                        if (k.key === C) {
                            if (C = y.type,
                            C === Er) {
                                if (k.tag === 7) {
                                    n(m, k.sibling),
                                    h = o(k, y.props.children),
                                    h.return = m,
                                    m = h;
                                    break e
                                }
                            } else if (k.elementType === C || typeof C == "object" && C !== null && C.$$typeof === sn && Sf(C) === k.type) {
                                n(m, k.sibling),
                                h = o(k, y.props),
                                h.ref = Ao(m, k, y),
                                h.return = m,
                                m = h;
                                break e
                            }
                            n(m, k);
                            break
                        } else
                            t(m, k);
                        k = k.sibling
                    }
                    y.type === Er ? (h = nr(y.props.children, m.mode, b, y.key),
                    h.return = m,
                    m = h) : (b = vi(y.type, y.key, y.props, null, m.mode, b),
                    b.ref = Ao(m, h, y),
                    b.return = m,
                    m = b)
                }
                return i(m);
            case br:
                e: {
                    for (k = y.key; h !== null; ) {
                        if (h.key === k)
                            if (h.tag === 4 && h.stateNode.containerInfo === y.containerInfo && h.stateNode.implementation === y.implementation) {
                                n(m, h.sibling),
                                h = o(h, y.children || []),
                                h.return = m,
                                m = h;
                                break e
                            } else {
                                n(m, h);
                                break
                            }
                        else
                            t(m, h);
                        h = h.sibling
                    }
                    h = la(y, m.mode, b),
                    h.return = m,
                    m = h
                }
                return i(m);
            case sn:
                return k = y._init,
                w(m, h, k(y._payload), b)
            }
            if (Fo(y))
                return S(m, h, y, b);
            if (jo(y))
                return v(m, h, y, b);
            Ks(m, y)
        }
        return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y,
        h !== null && h.tag === 6 ? (n(m, h.sibling),
        h = o(h, y),
        h.return = m,
        m = h) : (n(m, h),
        h = ia(y, m.mode, b),
        h.return = m,
        m = h),
        i(m)) : n(m, h)
    }
    return w
}
var ao = am(!0)
  , um = am(!1)
  , Fi = zn(null)
  , zi = null
  , Or = null
  , fc = null;
function pc() {
    fc = Or = zi = null
}
function hc(e) {
    var t = Fi.current;
    oe(Fi),
    e._currentValue = t
}
function Ja(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Fr(e, t) {
    zi = e,
    fc = Or = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && ($e = !0),
    e.firstContext = null)
}
function it(e) {
    var t = e._currentValue;
    if (fc !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Or === null) {
            if (zi === null)
                throw Error(T(308));
            Or = e,
            zi.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Or = Or.next = e;
    return t
}
var Wn = null;
function mc(e) {
    Wn === null ? Wn = [e] : Wn.push(e)
}
function cm(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n,
    mc(t)) : (n.next = o.next,
    o.next = n),
    t.interleaved = n,
    Kt(e, r)
}
function Kt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var ln = !1;
function gc(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function dm(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function Vt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function kn(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    G & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next,
        o.next = t),
        r.pending = t,
        Kt(e, n)
    }
    return o = r.interleaved,
    o === null ? (t.next = t,
    mc(r)) : (t.next = o.next,
    o.next = t),
    r.interleaved = t,
    Kt(e, n)
}
function di(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        tc(e, n)
    }
}
function bf(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var o = null
          , s = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var i = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                s === null ? o = s = i : s = s.next = i,
                n = n.next
            } while (n !== null);
            s === null ? o = s = t : s = s.next = t
        } else
            o = s = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: s,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function $i(e, t, n, r) {
    var o = e.updateQueue;
    ln = !1;
    var s = o.firstBaseUpdate
      , i = o.lastBaseUpdate
      , l = o.shared.pending;
    if (l !== null) {
        o.shared.pending = null;
        var u = l
          , c = u.next;
        u.next = null,
        i === null ? s = c : i.next = c,
        i = u;
        var d = e.alternate;
        d !== null && (d = d.updateQueue,
        l = d.lastBaseUpdate,
        l !== i && (l === null ? d.firstBaseUpdate = c : l.next = c,
        d.lastBaseUpdate = u))
    }
    if (s !== null) {
        var f = o.baseState;
        i = 0,
        d = c = u = null,
        l = s;
        do {
            var g = l.lane
              , x = l.eventTime;
            if ((r & g) === g) {
                d !== null && (d = d.next = {
                    eventTime: x,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var S = e
                      , v = l;
                    switch (g = t,
                    x = n,
                    v.tag) {
                    case 1:
                        if (S = v.payload,
                        typeof S == "function") {
                            f = S.call(x, f, g);
                            break e
                        }
                        f = S;
                        break e;
                    case 3:
                        S.flags = S.flags & -65537 | 128;
                    case 0:
                        if (S = v.payload,
                        g = typeof S == "function" ? S.call(x, f, g) : S,
                        g == null)
                            break e;
                        f = ue({}, f, g);
                        break e;
                    case 2:
                        ln = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64,
                g = o.effects,
                g === null ? o.effects = [l] : g.push(l))
            } else
                x = {
                    eventTime: x,
                    lane: g,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                },
                d === null ? (c = d = x,
                u = f) : d = d.next = x,
                i |= g;
            if (l = l.next,
            l === null) {
                if (l = o.shared.pending,
                l === null)
                    break;
                g = l,
                l = g.next,
                g.next = null,
                o.lastBaseUpdate = g,
                o.shared.pending = null
            }
        } while (!0);
        if (d === null && (u = f),
        o.baseState = u,
        o.firstBaseUpdate = c,
        o.lastBaseUpdate = d,
        t = o.shared.interleaved,
        t !== null) {
            o = t;
            do
                i |= o.lane,
                o = o.next;
            while (o !== t)
        } else
            s === null && (o.shared.lanes = 0);
        lr |= i,
        e.lanes = i,
        e.memoizedState = f
    }
}
function Ef(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , o = r.callback;
            if (o !== null) {
                if (r.callback = null,
                r = n,
                typeof o != "function")
                    throw Error(T(191, o));
                o.call(r)
            }
        }
}
var Ps = {}
  , Ot = zn(Ps)
  , us = zn(Ps)
  , cs = zn(Ps);
function Qn(e) {
    if (e === Ps)
        throw Error(T(174));
    return e
}
function vc(e, t) {
    switch (ee(cs, t),
    ee(us, e),
    ee(Ot, Ps),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : _a(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = _a(t, e)
    }
    oe(Ot),
    ee(Ot, t)
}
function uo() {
    oe(Ot),
    oe(us),
    oe(cs)
}
function fm(e) {
    Qn(cs.current);
    var t = Qn(Ot.current)
      , n = _a(t, e.type);
    t !== n && (ee(us, e),
    ee(Ot, n))
}
function yc(e) {
    us.current === e && (oe(Ot),
    oe(us))
}
var le = zn(0);
function Ui(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var ea = [];
function xc() {
    for (var e = 0; e < ea.length; e++)
        ea[e]._workInProgressVersionPrimary = null;
    ea.length = 0
}
var fi = Xt.ReactCurrentDispatcher
  , ta = Xt.ReactCurrentBatchConfig
  , ir = 0
  , ae = null
  , me = null
  , ye = null
  , Bi = !1
  , Ko = !1
  , ds = 0
  , gw = 0;
function Ne() {
    throw Error(T(321))
}
function wc(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!yt(e[n], t[n]))
            return !1;
    return !0
}
function Sc(e, t, n, r, o, s) {
    if (ir = s,
    ae = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    fi.current = e === null || e.memoizedState === null ? ww : Sw,
    e = n(r, o),
    Ko) {
        s = 0;
        do {
            if (Ko = !1,
            ds = 0,
            25 <= s)
                throw Error(T(301));
            s += 1,
            ye = me = null,
            t.updateQueue = null,
            fi.current = bw,
            e = n(r, o)
        } while (Ko)
    }
    if (fi.current = Vi,
    t = me !== null && me.next !== null,
    ir = 0,
    ye = me = ae = null,
    Bi = !1,
    t)
        throw Error(T(300));
    return e
}
function bc() {
    var e = ds !== 0;
    return ds = 0,
    e
}
function Et() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return ye === null ? ae.memoizedState = ye = e : ye = ye.next = e,
    ye
}
function lt() {
    if (me === null) {
        var e = ae.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = me.next;
    var t = ye === null ? ae.memoizedState : ye.next;
    if (t !== null)
        ye = t,
        me = e;
    else {
        if (e === null)
            throw Error(T(310));
        me = e,
        e = {
            memoizedState: me.memoizedState,
            baseState: me.baseState,
            baseQueue: me.baseQueue,
            queue: me.queue,
            next: null
        },
        ye === null ? ae.memoizedState = ye = e : ye = ye.next = e
    }
    return ye
}
function fs(e, t) {
    return typeof t == "function" ? t(e) : t
}
function na(e) {
    var t = lt()
      , n = t.queue;
    if (n === null)
        throw Error(T(311));
    n.lastRenderedReducer = e;
    var r = me
      , o = r.baseQueue
      , s = n.pending;
    if (s !== null) {
        if (o !== null) {
            var i = o.next;
            o.next = s.next,
            s.next = i
        }
        r.baseQueue = o = s,
        n.pending = null
    }
    if (o !== null) {
        s = o.next,
        r = r.baseState;
        var l = i = null
          , u = null
          , c = s;
        do {
            var d = c.lane;
            if ((ir & d) === d)
                u !== null && (u = u.next = {
                    lane: 0,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                }),
                r = c.hasEagerState ? c.eagerState : e(r, c.action);
            else {
                var f = {
                    lane: d,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                };
                u === null ? (l = u = f,
                i = r) : u = u.next = f,
                ae.lanes |= d,
                lr |= d
            }
            c = c.next
        } while (c !== null && c !== s);
        u === null ? i = r : u.next = l,
        yt(r, t.memoizedState) || ($e = !0),
        t.memoizedState = r,
        t.baseState = i,
        t.baseQueue = u,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        o = e;
        do
            s = o.lane,
            ae.lanes |= s,
            lr |= s,
            o = o.next;
        while (o !== e)
    } else
        o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function ra(e) {
    var t = lt()
      , n = t.queue;
    if (n === null)
        throw Error(T(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , o = n.pending
      , s = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var i = o = o.next;
        do
            s = e(s, i.action),
            i = i.next;
        while (i !== o);
        yt(s, t.memoizedState) || ($e = !0),
        t.memoizedState = s,
        t.baseQueue === null && (t.baseState = s),
        n.lastRenderedState = s
    }
    return [s, r]
}
function pm() {}
function hm(e, t) {
    var n = ae
      , r = lt()
      , o = t()
      , s = !yt(r.memoizedState, o);
    if (s && (r.memoizedState = o,
    $e = !0),
    r = r.queue,
    Ec(vm.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || ye !== null && ye.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        ps(9, gm.bind(null, n, r, o, t), void 0, null),
        xe === null)
            throw Error(T(349));
        ir & 30 || mm(n, t, o)
    }
    return o
}
function mm(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = ae.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ae.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function gm(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    ym(t) && xm(e)
}
function vm(e, t, n) {
    return n(function() {
        ym(t) && xm(e)
    })
}
function ym(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !yt(e, n)
    } catch {
        return !0
    }
}
function xm(e) {
    var t = Kt(e, 1);
    t !== null && vt(t, e, 1, -1)
}
function Cf(e) {
    var t = Et();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fs,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = xw.bind(null, ae, e),
    [t.memoizedState, e]
}
function ps(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = ae.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ae.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function wm() {
    return lt().memoizedState
}
function pi(e, t, n, r) {
    var o = Et();
    ae.flags |= e,
    o.memoizedState = ps(1 | t, n, void 0, r === void 0 ? null : r)
}
function pl(e, t, n, r) {
    var o = lt();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (me !== null) {
        var i = me.memoizedState;
        if (s = i.destroy,
        r !== null && wc(r, i.deps)) {
            o.memoizedState = ps(t, n, s, r);
            return
        }
    }
    ae.flags |= e,
    o.memoizedState = ps(1 | t, n, s, r)
}
function Nf(e, t) {
    return pi(8390656, 8, e, t)
}
function Ec(e, t) {
    return pl(2048, 8, e, t)
}
function Sm(e, t) {
    return pl(4, 2, e, t)
}
function bm(e, t) {
    return pl(4, 4, e, t)
}
function Em(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function Cm(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    pl(4, 4, Em.bind(null, t, e), n)
}
function Cc() {}
function Nm(e, t) {
    var n = lt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && wc(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function km(e, t) {
    var n = lt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && wc(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function jm(e, t, n) {
    return ir & 21 ? (yt(n, t) || (n = Ah(),
    ae.lanes |= n,
    lr |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    $e = !0),
    e.memoizedState = n)
}
function vw(e, t) {
    var n = Z;
    Z = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = ta.transition;
    ta.transition = {};
    try {
        e(!1),
        t()
    } finally {
        Z = n,
        ta.transition = r
    }
}
function Pm() {
    return lt().memoizedState
}
function yw(e, t, n) {
    var r = Pn(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Tm(e))
        Rm(t, n);
    else if (n = cm(e, t, n, r),
    n !== null) {
        var o = _e();
        vt(n, e, r, o),
        Om(n, t, r)
    }
}
function xw(e, t, n) {
    var r = Pn(e)
      , o = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Tm(e))
        Rm(t, o);
    else {
        var s = e.alternate;
        if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer,
        s !== null))
            try {
                var i = t.lastRenderedState
                  , l = s(i, n);
                if (o.hasEagerState = !0,
                o.eagerState = l,
                yt(l, i)) {
                    var u = t.interleaved;
                    u === null ? (o.next = o,
                    mc(t)) : (o.next = u.next,
                    u.next = o),
                    t.interleaved = o;
                    return
                }
            } catch {} finally {}
        n = cm(e, t, o, r),
        n !== null && (o = _e(),
        vt(n, e, r, o),
        Om(n, t, r))
    }
}
function Tm(e) {
    var t = e.alternate;
    return e === ae || t !== null && t === ae
}
function Rm(e, t) {
    Ko = Bi = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function Om(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        tc(e, n)
    }
}
var Vi = {
    readContext: it,
    useCallback: Ne,
    useContext: Ne,
    useEffect: Ne,
    useImperativeHandle: Ne,
    useInsertionEffect: Ne,
    useLayoutEffect: Ne,
    useMemo: Ne,
    useReducer: Ne,
    useRef: Ne,
    useState: Ne,
    useDebugValue: Ne,
    useDeferredValue: Ne,
    useTransition: Ne,
    useMutableSource: Ne,
    useSyncExternalStore: Ne,
    useId: Ne,
    unstable_isNewReconciler: !1
}
  , ww = {
    readContext: it,
    useCallback: function(e, t) {
        return Et().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: it,
    useEffect: Nf,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        pi(4194308, 4, Em.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return pi(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return pi(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = Et();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = Et();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = yw.bind(null, ae, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = Et();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: Cf,
    useDebugValue: Cc,
    useDeferredValue: function(e) {
        return Et().memoizedState = e
    },
    useTransition: function() {
        var e = Cf(!1)
          , t = e[0];
        return e = vw.bind(null, e[1]),
        Et().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = ae
          , o = Et();
        if (ie) {
            if (n === void 0)
                throw Error(T(407));
            n = n()
        } else {
            if (n = t(),
            xe === null)
                throw Error(T(349));
            ir & 30 || mm(r, t, n)
        }
        o.memoizedState = n;
        var s = {
            value: n,
            getSnapshot: t
        };
        return o.queue = s,
        Nf(vm.bind(null, r, s, e), [e]),
        r.flags |= 2048,
        ps(9, gm.bind(null, r, s, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = Et()
          , t = xe.identifierPrefix;
        if (ie) {
            var n = Bt
              , r = Ut;
            n = (r & ~(1 << 32 - gt(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = ds++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = gw++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , Sw = {
    readContext: it,
    useCallback: Nm,
    useContext: it,
    useEffect: Ec,
    useImperativeHandle: Cm,
    useInsertionEffect: Sm,
    useLayoutEffect: bm,
    useMemo: km,
    useReducer: na,
    useRef: wm,
    useState: function() {
        return na(fs)
    },
    useDebugValue: Cc,
    useDeferredValue: function(e) {
        var t = lt();
        return jm(t, me.memoizedState, e)
    },
    useTransition: function() {
        var e = na(fs)[0]
          , t = lt().memoizedState;
        return [e, t]
    },
    useMutableSource: pm,
    useSyncExternalStore: hm,
    useId: Pm,
    unstable_isNewReconciler: !1
}
  , bw = {
    readContext: it,
    useCallback: Nm,
    useContext: it,
    useEffect: Ec,
    useImperativeHandle: Cm,
    useInsertionEffect: Sm,
    useLayoutEffect: bm,
    useMemo: km,
    useReducer: ra,
    useRef: wm,
    useState: function() {
        return ra(fs)
    },
    useDebugValue: Cc,
    useDeferredValue: function(e) {
        var t = lt();
        return me === null ? t.memoizedState = e : jm(t, me.memoizedState, e)
    },
    useTransition: function() {
        var e = ra(fs)[0]
          , t = lt().memoizedState;
        return [e, t]
    },
    useMutableSource: pm,
    useSyncExternalStore: hm,
    useId: Pm,
    unstable_isNewReconciler: !1
};
function dt(e, t) {
    if (e && e.defaultProps) {
        t = ue({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function eu(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : ue({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var hl = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? mr(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = _e()
          , o = Pn(e)
          , s = Vt(r, o);
        s.payload = t,
        n != null && (s.callback = n),
        t = kn(e, s, o),
        t !== null && (vt(t, e, o, r),
        di(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = _e()
          , o = Pn(e)
          , s = Vt(r, o);
        s.tag = 1,
        s.payload = t,
        n != null && (s.callback = n),
        t = kn(e, s, o),
        t !== null && (vt(t, e, o, r),
        di(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = _e()
          , r = Pn(e)
          , o = Vt(n, r);
        o.tag = 2,
        t != null && (o.callback = t),
        t = kn(e, o, r),
        t !== null && (vt(t, e, r, n),
        di(t, e, r))
    }
};
function kf(e, t, n, r, o, s, i) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, i) : t.prototype && t.prototype.isPureReactComponent ? !ss(n, r) || !ss(o, s) : !0
}
function Am(e, t, n) {
    var r = !1
      , o = _n
      , s = t.contextType;
    return typeof s == "object" && s !== null ? s = it(s) : (o = Be(t) ? or : Te.current,
    r = t.contextTypes,
    s = (r = r != null) ? io(e, o) : _n),
    t = new t(n,s),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = hl,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = o,
    e.__reactInternalMemoizedMaskedChildContext = s),
    t
}
function jf(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && hl.enqueueReplaceState(t, t.state, null)
}
function tu(e, t, n, r) {
    var o = e.stateNode;
    o.props = n,
    o.state = e.memoizedState,
    o.refs = {},
    gc(e);
    var s = t.contextType;
    typeof s == "object" && s !== null ? o.context = it(s) : (s = Be(t) ? or : Te.current,
    o.context = io(e, s)),
    o.state = e.memoizedState,
    s = t.getDerivedStateFromProps,
    typeof s == "function" && (eu(e, t, s, n),
    o.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state,
    typeof o.componentWillMount == "function" && o.componentWillMount(),
    typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
    t !== o.state && hl.enqueueReplaceState(o, o.state, null),
    $i(e, n, o, r),
    o.state = e.memoizedState),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}
function co(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += Yx(r),
            r = r.return;
        while (r);
        var o = n
    } catch (s) {
        o = `
Error generating stack: ` + s.message + `
` + s.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}
function oa(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function nu(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Ew = typeof WeakMap == "function" ? WeakMap : Map;
function _m(e, t, n) {
    n = Vt(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Wi || (Wi = !0,
        fu = r),
        nu(e, t)
    }
    ,
    n
}
function Dm(e, t, n) {
    n = Vt(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }
        ,
        n.callback = function() {
            nu(e, t)
        }
    }
    var s = e.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
        nu(e, t),
        typeof r != "function" && (jn === null ? jn = new Set([this]) : jn.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: i !== null ? i : ""
        })
    }
    ),
    n
}
function Pf(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Ew;
        var o = new Set;
        r.set(t, o)
    } else
        o = r.get(t),
        o === void 0 && (o = new Set,
        r.set(t, o));
    o.has(n) || (o.add(n),
    e = Iw.bind(null, e, t, n),
    t.then(e, e))
}
function Tf(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Rf(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = o,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Vt(-1, 1),
    t.tag = 2,
    kn(n, t, 1))),
    n.lanes |= 1),
    e)
}
var Cw = Xt.ReactCurrentOwner
  , $e = !1;
function Ae(e, t, n, r) {
    t.child = e === null ? um(t, null, n, r) : ao(t, e.child, n, r)
}
function Of(e, t, n, r, o) {
    n = n.render;
    var s = t.ref;
    return Fr(t, o),
    r = Sc(e, t, n, r, s, o),
    n = bc(),
    e !== null && !$e ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    Gt(e, t, o)) : (ie && n && uc(t),
    t.flags |= 1,
    Ae(e, t, r, o),
    t.child)
}
function Af(e, t, n, r, o) {
    if (e === null) {
        var s = n.type;
        return typeof s == "function" && !Ac(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = s,
        Mm(e, t, s, r, o)) : (e = vi(n.type, null, r, t, t.mode, o),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (s = e.child,
    !(e.lanes & o)) {
        var i = s.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : ss,
        n(i, r) && e.ref === t.ref)
            return Gt(e, t, o)
    }
    return t.flags |= 1,
    e = Tn(s, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function Mm(e, t, n, r, o) {
    if (e !== null) {
        var s = e.memoizedProps;
        if (ss(s, r) && e.ref === t.ref)
            if ($e = !1,
            t.pendingProps = r = s,
            (e.lanes & o) !== 0)
                e.flags & 131072 && ($e = !0);
            else
                return t.lanes = e.lanes,
                Gt(e, t, o)
    }
    return ru(e, t, n, r, o)
}
function Lm(e, t, n) {
    var r = t.pendingProps
      , o = r.children
      , s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            ee(_r, We),
            We |= n;
        else {
            if (!(n & 1073741824))
                return e = s !== null ? s.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                ee(_r, We),
                We |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = s !== null ? s.baseLanes : n,
            ee(_r, We),
            We |= r
        }
    else
        s !== null ? (r = s.baseLanes | n,
        t.memoizedState = null) : r = n,
        ee(_r, We),
        We |= r;
    return Ae(e, t, o, n),
    t.child
}
function Im(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function ru(e, t, n, r, o) {
    var s = Be(n) ? or : Te.current;
    return s = io(t, s),
    Fr(t, o),
    n = Sc(e, t, n, r, s, o),
    r = bc(),
    e !== null && !$e ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    Gt(e, t, o)) : (ie && r && uc(t),
    t.flags |= 1,
    Ae(e, t, n, o),
    t.child)
}
function _f(e, t, n, r, o) {
    if (Be(n)) {
        var s = !0;
        Mi(t)
    } else
        s = !1;
    if (Fr(t, o),
    t.stateNode === null)
        hi(e, t),
        Am(t, n, r),
        tu(t, n, r, o),
        r = !0;
    else if (e === null) {
        var i = t.stateNode
          , l = t.memoizedProps;
        i.props = l;
        var u = i.context
          , c = n.contextType;
        typeof c == "object" && c !== null ? c = it(c) : (c = Be(n) ? or : Te.current,
        c = io(t, c));
        var d = n.getDerivedStateFromProps
          , f = typeof d == "function" || typeof i.getSnapshotBeforeUpdate == "function";
        f || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (l !== r || u !== c) && jf(t, i, r, c),
        ln = !1;
        var g = t.memoizedState;
        i.state = g,
        $i(t, r, i, o),
        u = t.memoizedState,
        l !== r || g !== u || Ue.current || ln ? (typeof d == "function" && (eu(t, n, d, r),
        u = t.memoizedState),
        (l = ln || kf(t, n, l, r, g, u, c)) ? (f || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(),
        typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()),
        typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = u),
        i.props = r,
        i.state = u,
        i.context = c,
        r = l) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        i = t.stateNode,
        dm(e, t),
        l = t.memoizedProps,
        c = t.type === t.elementType ? l : dt(t.type, l),
        i.props = c,
        f = t.pendingProps,
        g = i.context,
        u = n.contextType,
        typeof u == "object" && u !== null ? u = it(u) : (u = Be(n) ? or : Te.current,
        u = io(t, u));
        var x = n.getDerivedStateFromProps;
        (d = typeof x == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (l !== f || g !== u) && jf(t, i, r, u),
        ln = !1,
        g = t.memoizedState,
        i.state = g,
        $i(t, r, i, o);
        var S = t.memoizedState;
        l !== f || g !== S || Ue.current || ln ? (typeof x == "function" && (eu(t, n, x, r),
        S = t.memoizedState),
        (c = ln || kf(t, n, c, r, g, S, u) || !1) ? (d || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, S, u),
        typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, S, u)),
        typeof i.componentDidUpdate == "function" && (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || l === e.memoizedProps && g === e.memoizedState || (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = S),
        i.props = r,
        i.state = S,
        i.context = u,
        r = c) : (typeof i.componentDidUpdate != "function" || l === e.memoizedProps && g === e.memoizedState || (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return ou(e, t, n, r, s, o)
}
function ou(e, t, n, r, o, s) {
    Im(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i)
        return o && yf(t, n, !1),
        Gt(e, t, s);
    r = t.stateNode,
    Cw.current = t;
    var l = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && i ? (t.child = ao(t, e.child, null, s),
    t.child = ao(t, null, l, s)) : Ae(e, t, l, s),
    t.memoizedState = r.state,
    o && yf(t, n, !0),
    t.child
}
function Fm(e) {
    var t = e.stateNode;
    t.pendingContext ? vf(e, t.pendingContext, t.pendingContext !== t.context) : t.context && vf(e, t.context, !1),
    vc(e, t.containerInfo)
}
function Df(e, t, n, r, o) {
    return lo(),
    dc(o),
    t.flags |= 256,
    Ae(e, t, n, r),
    t.child
}
var su = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function iu(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function zm(e, t, n) {
    var r = t.pendingProps, o = le.current, s = !1, i = (t.flags & 128) !== 0, l;
    if ((l = i) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l ? (s = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1),
    ee(le, o & 1),
    e === null)
        return Za(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (i = r.children,
        e = r.fallback,
        s ? (r = t.mode,
        s = t.child,
        i = {
            mode: "hidden",
            children: i
        },
        !(r & 1) && s !== null ? (s.childLanes = 0,
        s.pendingProps = i) : s = vl(i, r, 0, null),
        e = nr(e, r, n, null),
        s.return = t,
        e.return = t,
        s.sibling = e,
        t.child = s,
        t.child.memoizedState = iu(n),
        t.memoizedState = su,
        e) : Nc(t, i));
    if (o = e.memoizedState,
    o !== null && (l = o.dehydrated,
    l !== null))
        return Nw(e, t, i, r, l, o, n);
    if (s) {
        s = r.fallback,
        i = t.mode,
        o = e.child,
        l = o.sibling;
        var u = {
            mode: "hidden",
            children: r.children
        };
        return !(i & 1) && t.child !== o ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = u,
        t.deletions = null) : (r = Tn(o, u),
        r.subtreeFlags = o.subtreeFlags & 14680064),
        l !== null ? s = Tn(l, s) : (s = nr(s, i, n, null),
        s.flags |= 2),
        s.return = t,
        r.return = t,
        r.sibling = s,
        t.child = r,
        r = s,
        s = t.child,
        i = e.child.memoizedState,
        i = i === null ? iu(n) : {
            baseLanes: i.baseLanes | n,
            cachePool: null,
            transitions: i.transitions
        },
        s.memoizedState = i,
        s.childLanes = e.childLanes & ~n,
        t.memoizedState = su,
        r
    }
    return s = e.child,
    e = s.sibling,
    r = Tn(s, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Nc(e, t) {
    return t = vl({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Gs(e, t, n, r) {
    return r !== null && dc(r),
    ao(t, e.child, null, n),
    e = Nc(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function Nw(e, t, n, r, o, s, i) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = oa(Error(T(422))),
        Gs(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (s = r.fallback,
        o = t.mode,
        r = vl({
            mode: "visible",
            children: r.children
        }, o, 0, null),
        s = nr(s, o, i, null),
        s.flags |= 2,
        r.return = t,
        s.return = t,
        r.sibling = s,
        t.child = r,
        t.mode & 1 && ao(t, e.child, null, i),
        t.child.memoizedState = iu(i),
        t.memoizedState = su,
        s);
    if (!(t.mode & 1))
        return Gs(e, t, i, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset,
        r)
            var l = r.dgst;
        return r = l,
        s = Error(T(419)),
        r = oa(s, r, void 0),
        Gs(e, t, i, r)
    }
    if (l = (i & e.childLanes) !== 0,
    $e || l) {
        if (r = xe,
        r !== null) {
            switch (i & -i) {
            case 4:
                o = 2;
                break;
            case 16:
                o = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                o = 32;
                break;
            case 536870912:
                o = 268435456;
                break;
            default:
                o = 0
            }
            o = o & (r.suspendedLanes | i) ? 0 : o,
            o !== 0 && o !== s.retryLane && (s.retryLane = o,
            Kt(e, o),
            vt(r, e, o, -1))
        }
        return Oc(),
        r = oa(Error(T(421))),
        Gs(e, t, i, r)
    }
    return o.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = Fw.bind(null, e),
    o._reactRetry = t,
    null) : (e = s.treeContext,
    Ke = Nn(o.nextSibling),
    Ge = t,
    ie = !0,
    ht = null,
    e !== null && (nt[rt++] = Ut,
    nt[rt++] = Bt,
    nt[rt++] = sr,
    Ut = e.id,
    Bt = e.overflow,
    sr = t),
    t = Nc(t, r.children),
    t.flags |= 4096,
    t)
}
function Mf(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    Ja(e.return, t, n)
}
function sa(e, t, n, r, o) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (s.isBackwards = t,
    s.rendering = null,
    s.renderingStartTime = 0,
    s.last = r,
    s.tail = n,
    s.tailMode = o)
}
function $m(e, t, n) {
    var r = t.pendingProps
      , o = r.revealOrder
      , s = r.tail;
    if (Ae(e, t, r.children, n),
    r = le.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Mf(e, n, t);
                else if (e.tag === 19)
                    Mf(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (ee(le, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (o) {
        case "forwards":
            for (n = t.child,
            o = null; n !== null; )
                e = n.alternate,
                e !== null && Ui(e) === null && (o = n),
                n = n.sibling;
            n = o,
            n === null ? (o = t.child,
            t.child = null) : (o = n.sibling,
            n.sibling = null),
            sa(t, !1, o, n, s);
            break;
        case "backwards":
            for (n = null,
            o = t.child,
            t.child = null; o !== null; ) {
                if (e = o.alternate,
                e !== null && Ui(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling,
                o.sibling = n,
                n = o,
                o = e
            }
            sa(t, !0, n, null, s);
            break;
        case "together":
            sa(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function hi(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function Gt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    lr |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(T(153));
    if (t.child !== null) {
        for (e = t.child,
        n = Tn(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = Tn(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function kw(e, t, n) {
    switch (t.tag) {
    case 3:
        Fm(t),
        lo();
        break;
    case 5:
        fm(t);
        break;
    case 1:
        Be(t.type) && Mi(t);
        break;
    case 4:
        vc(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , o = t.memoizedProps.value;
        ee(Fi, r._currentValue),
        r._currentValue = o;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (ee(le, le.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? zm(e, t, n) : (ee(le, le.current & 1),
            e = Gt(e, t, n),
            e !== null ? e.sibling : null);
        ee(le, le.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return $m(e, t, n);
            t.flags |= 128
        }
        if (o = t.memoizedState,
        o !== null && (o.rendering = null,
        o.tail = null,
        o.lastEffect = null),
        ee(le, le.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        Lm(e, t, n)
    }
    return Gt(e, t, n)
}
var Um, lu, Bm, Vm;
Um = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
lu = function() {}
;
Bm = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode,
        Qn(Ot.current);
        var s = null;
        switch (n) {
        case "input":
            o = Ta(e, o),
            r = Ta(e, r),
            s = [];
            break;
        case "select":
            o = ue({}, o, {
                value: void 0
            }),
            r = ue({}, r, {
                value: void 0
            }),
            s = [];
            break;
        case "textarea":
            o = Aa(e, o),
            r = Aa(e, r),
            s = [];
            break;
        default:
            typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = _i)
        }
        Da(n, r);
        var i;
        n = null;
        for (c in o)
            if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null)
                if (c === "style") {
                    var l = o[c];
                    for (i in l)
                        l.hasOwnProperty(i) && (n || (n = {}),
                        n[i] = "")
                } else
                    c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Zo.hasOwnProperty(c) ? s || (s = []) : (s = s || []).push(c, null));
        for (c in r) {
            var u = r[c];
            if (l = o != null ? o[c] : void 0,
            r.hasOwnProperty(c) && u !== l && (u != null || l != null))
                if (c === "style")
                    if (l) {
                        for (i in l)
                            !l.hasOwnProperty(i) || u && u.hasOwnProperty(i) || (n || (n = {}),
                            n[i] = "");
                        for (i in u)
                            u.hasOwnProperty(i) && l[i] !== u[i] && (n || (n = {}),
                            n[i] = u[i])
                    } else
                        n || (s || (s = []),
                        s.push(c, n)),
                        n = u;
                else
                    c === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0,
                    l = l ? l.__html : void 0,
                    u != null && l !== u && (s = s || []).push(c, u)) : c === "children" ? typeof u != "string" && typeof u != "number" || (s = s || []).push(c, "" + u) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Zo.hasOwnProperty(c) ? (u != null && c === "onScroll" && ne("scroll", e),
                    s || l === u || (s = [])) : (s = s || []).push(c, u))
        }
        n && (s = s || []).push("style", n);
        var c = s;
        (t.updateQueue = c) && (t.flags |= 4)
    }
}
;
Vm = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function _o(e, t) {
    if (!ie)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function ke(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags & 14680064,
            r |= o.flags & 14680064,
            o.return = e,
            o = o.sibling;
    else
        for (o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags,
            r |= o.flags,
            o.return = e,
            o = o.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function jw(e, t, n) {
    var r = t.pendingProps;
    switch (cc(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return ke(t),
        null;
    case 1:
        return Be(t.type) && Di(),
        ke(t),
        null;
    case 3:
        return r = t.stateNode,
        uo(),
        oe(Ue),
        oe(Te),
        xc(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (Qs(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        ht !== null && (mu(ht),
        ht = null))),
        lu(e, t),
        ke(t),
        null;
    case 5:
        yc(t);
        var o = Qn(cs.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            Bm(e, t, n, r, o),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(T(166));
                return ke(t),
                null
            }
            if (e = Qn(Ot.current),
            Qs(t)) {
                r = t.stateNode,
                n = t.type;
                var s = t.memoizedProps;
                switch (r[Pt] = t,
                r[as] = s,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    ne("cancel", r),
                    ne("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    ne("load", r);
                    break;
                case "video":
                case "audio":
                    for (o = 0; o < $o.length; o++)
                        ne($o[o], r);
                    break;
                case "source":
                    ne("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    ne("error", r),
                    ne("load", r);
                    break;
                case "details":
                    ne("toggle", r);
                    break;
                case "input":
                    Vd(r, s),
                    ne("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!s.multiple
                    },
                    ne("invalid", r);
                    break;
                case "textarea":
                    Wd(r, s),
                    ne("invalid", r)
                }
                Da(n, s),
                o = null;
                for (var i in s)
                    if (s.hasOwnProperty(i)) {
                        var l = s[i];
                        i === "children" ? typeof l == "string" ? r.textContent !== l && (s.suppressHydrationWarning !== !0 && Ws(r.textContent, l, e),
                        o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (s.suppressHydrationWarning !== !0 && Ws(r.textContent, l, e),
                        o = ["children", "" + l]) : Zo.hasOwnProperty(i) && l != null && i === "onScroll" && ne("scroll", r)
                    }
                switch (n) {
                case "input":
                    Is(r),
                    Hd(r, s, !0);
                    break;
                case "textarea":
                    Is(r),
                    Qd(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof s.onClick == "function" && (r.onclick = _i)
                }
                r = o,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                i = o.nodeType === 9 ? o : o.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = vh(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                    is: r.is
                }) : (e = i.createElement(n),
                n === "select" && (i = e,
                r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n),
                e[Pt] = t,
                e[as] = r,
                Um(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (i = Ma(n, r),
                    n) {
                    case "dialog":
                        ne("cancel", e),
                        ne("close", e),
                        o = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        ne("load", e),
                        o = r;
                        break;
                    case "video":
                    case "audio":
                        for (o = 0; o < $o.length; o++)
                            ne($o[o], e);
                        o = r;
                        break;
                    case "source":
                        ne("error", e),
                        o = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        ne("error", e),
                        ne("load", e),
                        o = r;
                        break;
                    case "details":
                        ne("toggle", e),
                        o = r;
                        break;
                    case "input":
                        Vd(e, r),
                        o = Ta(e, r),
                        ne("invalid", e);
                        break;
                    case "option":
                        o = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        o = ue({}, r, {
                            value: void 0
                        }),
                        ne("invalid", e);
                        break;
                    case "textarea":
                        Wd(e, r),
                        o = Aa(e, r),
                        ne("invalid", e);
                        break;
                    default:
                        o = r
                    }
                    Da(n, o),
                    l = o;
                    for (s in l)
                        if (l.hasOwnProperty(s)) {
                            var u = l[s];
                            s === "style" ? wh(e, u) : s === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0,
                            u != null && yh(e, u)) : s === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Jo(e, u) : typeof u == "number" && Jo(e, "" + u) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Zo.hasOwnProperty(s) ? u != null && s === "onScroll" && ne("scroll", e) : u != null && qu(e, s, u, i))
                        }
                    switch (n) {
                    case "input":
                        Is(e),
                        Hd(e, r, !1);
                        break;
                    case "textarea":
                        Is(e),
                        Qd(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + An(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        s = r.value,
                        s != null ? Dr(e, !!r.multiple, s, !1) : r.defaultValue != null && Dr(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof o.onClick == "function" && (e.onclick = _i)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return ke(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            Vm(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(T(166));
            if (n = Qn(cs.current),
            Qn(Ot.current),
            Qs(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[Pt] = t,
                (s = r.nodeValue !== n) && (e = Ge,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        Ws(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && Ws(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                s && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[Pt] = t,
                t.stateNode = r
        }
        return ke(t),
        null;
    case 13:
        if (oe(le),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (ie && Ke !== null && t.mode & 1 && !(t.flags & 128))
                lm(),
                lo(),
                t.flags |= 98560,
                s = !1;
            else if (s = Qs(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!s)
                        throw Error(T(318));
                    if (s = t.memoizedState,
                    s = s !== null ? s.dehydrated : null,
                    !s)
                        throw Error(T(317));
                    s[Pt] = t
                } else
                    lo(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                ke(t),
                s = !1
            } else
                ht !== null && (mu(ht),
                ht = null),
                s = !0;
            if (!s)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || le.current & 1 ? ve === 0 && (ve = 3) : Oc())),
        t.updateQueue !== null && (t.flags |= 4),
        ke(t),
        null);
    case 4:
        return uo(),
        lu(e, t),
        e === null && is(t.stateNode.containerInfo),
        ke(t),
        null;
    case 10:
        return hc(t.type._context),
        ke(t),
        null;
    case 17:
        return Be(t.type) && Di(),
        ke(t),
        null;
    case 19:
        if (oe(le),
        s = t.memoizedState,
        s === null)
            return ke(t),
            null;
        if (r = (t.flags & 128) !== 0,
        i = s.rendering,
        i === null)
            if (r)
                _o(s, !1);
            else {
                if (ve !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (i = Ui(e),
                        i !== null) {
                            for (t.flags |= 128,
                            _o(s, !1),
                            r = i.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                s = n,
                                e = r,
                                s.flags &= 14680066,
                                i = s.alternate,
                                i === null ? (s.childLanes = 0,
                                s.lanes = e,
                                s.child = null,
                                s.subtreeFlags = 0,
                                s.memoizedProps = null,
                                s.memoizedState = null,
                                s.updateQueue = null,
                                s.dependencies = null,
                                s.stateNode = null) : (s.childLanes = i.childLanes,
                                s.lanes = i.lanes,
                                s.child = i.child,
                                s.subtreeFlags = 0,
                                s.deletions = null,
                                s.memoizedProps = i.memoizedProps,
                                s.memoizedState = i.memoizedState,
                                s.updateQueue = i.updateQueue,
                                s.type = i.type,
                                e = i.dependencies,
                                s.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return ee(le, le.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                s.tail !== null && pe() > fo && (t.flags |= 128,
                r = !0,
                _o(s, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = Ui(i),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    _o(s, !0),
                    s.tail === null && s.tailMode === "hidden" && !i.alternate && !ie)
                        return ke(t),
                        null
                } else
                    2 * pe() - s.renderingStartTime > fo && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    _o(s, !1),
                    t.lanes = 4194304);
            s.isBackwards ? (i.sibling = t.child,
            t.child = i) : (n = s.last,
            n !== null ? n.sibling = i : t.child = i,
            s.last = i)
        }
        return s.tail !== null ? (t = s.tail,
        s.rendering = t,
        s.tail = t.sibling,
        s.renderingStartTime = pe(),
        t.sibling = null,
        n = le.current,
        ee(le, r ? n & 1 | 2 : n & 1),
        t) : (ke(t),
        null);
    case 22:
    case 23:
        return Rc(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? We & 1073741824 && (ke(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : ke(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(T(156, t.tag))
}
function Pw(e, t) {
    switch (cc(t),
    t.tag) {
    case 1:
        return Be(t.type) && Di(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return uo(),
        oe(Ue),
        oe(Te),
        xc(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return yc(t),
        null;
    case 13:
        if (oe(le),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(T(340));
            lo()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return oe(le),
        null;
    case 4:
        return uo(),
        null;
    case 10:
        return hc(t.type._context),
        null;
    case 22:
    case 23:
        return Rc(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var qs = !1
  , Pe = !1
  , Tw = typeof WeakSet == "function" ? WeakSet : Set
  , D = null;
function Ar(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                fe(e, t, r)
            }
        else
            n.current = null
}
function au(e, t, n) {
    try {
        n()
    } catch (r) {
        fe(e, t, r)
    }
}
var Lf = !1;
function Rw(e, t) {
    if (Wa = Ri,
    e = Gh(),
    ac(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset
                      , s = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        s.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var i = 0
                      , l = -1
                      , u = -1
                      , c = 0
                      , d = 0
                      , f = e
                      , g = null;
                    t: for (; ; ) {
                        for (var x; f !== n || o !== 0 && f.nodeType !== 3 || (l = i + o),
                        f !== s || r !== 0 && f.nodeType !== 3 || (u = i + r),
                        f.nodeType === 3 && (i += f.nodeValue.length),
                        (x = f.firstChild) !== null; )
                            g = f,
                            f = x;
                        for (; ; ) {
                            if (f === e)
                                break t;
                            if (g === n && ++c === o && (l = i),
                            g === s && ++d === r && (u = i),
                            (x = f.nextSibling) !== null)
                                break;
                            f = g,
                            g = f.parentNode
                        }
                        f = x
                    }
                    n = l === -1 || u === -1 ? null : {
                        start: l,
                        end: u
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Qa = {
        focusedElem: e,
        selectionRange: n
    },
    Ri = !1,
    D = t; D !== null; )
        if (t = D,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            D = e;
        else
            for (; D !== null; ) {
                t = D;
                try {
                    var S = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (S !== null) {
                                var v = S.memoizedProps
                                  , w = S.memoizedState
                                  , m = t.stateNode
                                  , h = m.getSnapshotBeforeUpdate(t.elementType === t.type ? v : dt(t.type, v), w);
                                m.__reactInternalSnapshotBeforeUpdate = h
                            }
                            break;
                        case 3:
                            var y = t.stateNode.containerInfo;
                            y.nodeType === 1 ? y.textContent = "" : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(T(163))
                        }
                } catch (b) {
                    fe(t, t.return, b)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    D = e;
                    break
                }
                D = t.return
            }
    return S = Lf,
    Lf = !1,
    S
}
function Go(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var s = o.destroy;
                o.destroy = void 0,
                s !== void 0 && au(t, n, s)
            }
            o = o.next
        } while (o !== r)
    }
}
function ml(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function uu(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function Hm(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    Hm(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[Pt],
    delete t[as],
    delete t[qa],
    delete t[fw],
    delete t[pw])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function Wm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function If(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || Wm(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function cu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = _i));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (cu(e, t, n),
        e = e.sibling; e !== null; )
            cu(e, t, n),
            e = e.sibling
}
function du(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (du(e, t, n),
        e = e.sibling; e !== null; )
            du(e, t, n),
            e = e.sibling
}
var we = null
  , pt = !1;
function Jt(e, t, n) {
    for (n = n.child; n !== null; )
        Qm(e, t, n),
        n = n.sibling
}
function Qm(e, t, n) {
    if (Rt && typeof Rt.onCommitFiberUnmount == "function")
        try {
            Rt.onCommitFiberUnmount(ll, n)
        } catch {}
    switch (n.tag) {
    case 5:
        Pe || Ar(n, t);
    case 6:
        var r = we
          , o = pt;
        we = null,
        Jt(e, t, n),
        we = r,
        pt = o,
        we !== null && (pt ? (e = we,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : we.removeChild(n.stateNode));
        break;
    case 18:
        we !== null && (pt ? (e = we,
        n = n.stateNode,
        e.nodeType === 8 ? Zl(e.parentNode, n) : e.nodeType === 1 && Zl(e, n),
        rs(e)) : Zl(we, n.stateNode));
        break;
    case 4:
        r = we,
        o = pt,
        we = n.stateNode.containerInfo,
        pt = !0,
        Jt(e, t, n),
        we = r,
        pt = o;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Pe && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            o = r = r.next;
            do {
                var s = o
                  , i = s.destroy;
                s = s.tag,
                i !== void 0 && (s & 2 || s & 4) && au(n, t, i),
                o = o.next
            } while (o !== r)
        }
        Jt(e, t, n);
        break;
    case 1:
        if (!Pe && (Ar(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (l) {
                fe(n, t, l)
            }
        Jt(e, t, n);
        break;
    case 21:
        Jt(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (Pe = (r = Pe) || n.memoizedState !== null,
        Jt(e, t, n),
        Pe = r) : Jt(e, t, n);
        break;
    default:
        Jt(e, t, n)
    }
}
function Ff(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Tw),
        t.forEach(function(r) {
            var o = zw.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(o, o))
        })
    }
}
function ct(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var s = e
                  , i = t
                  , l = i;
                e: for (; l !== null; ) {
                    switch (l.tag) {
                    case 5:
                        we = l.stateNode,
                        pt = !1;
                        break e;
                    case 3:
                        we = l.stateNode.containerInfo,
                        pt = !0;
                        break e;
                    case 4:
                        we = l.stateNode.containerInfo,
                        pt = !0;
                        break e
                    }
                    l = l.return
                }
                if (we === null)
                    throw Error(T(160));
                Qm(s, i, o),
                we = null,
                pt = !1;
                var u = o.alternate;
                u !== null && (u.return = null),
                o.return = null
            } catch (c) {
                fe(o, t, c)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            Km(t, e),
            t = t.sibling
}
function Km(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (ct(t, e),
        bt(e),
        r & 4) {
            try {
                Go(3, e, e.return),
                ml(3, e)
            } catch (v) {
                fe(e, e.return, v)
            }
            try {
                Go(5, e, e.return)
            } catch (v) {
                fe(e, e.return, v)
            }
        }
        break;
    case 1:
        ct(t, e),
        bt(e),
        r & 512 && n !== null && Ar(n, n.return);
        break;
    case 5:
        if (ct(t, e),
        bt(e),
        r & 512 && n !== null && Ar(n, n.return),
        e.flags & 32) {
            var o = e.stateNode;
            try {
                Jo(o, "")
            } catch (v) {
                fe(e, e.return, v)
            }
        }
        if (r & 4 && (o = e.stateNode,
        o != null)) {
            var s = e.memoizedProps
              , i = n !== null ? n.memoizedProps : s
              , l = e.type
              , u = e.updateQueue;
            if (e.updateQueue = null,
            u !== null)
                try {
                    l === "input" && s.type === "radio" && s.name != null && mh(o, s),
                    Ma(l, i);
                    var c = Ma(l, s);
                    for (i = 0; i < u.length; i += 2) {
                        var d = u[i]
                          , f = u[i + 1];
                        d === "style" ? wh(o, f) : d === "dangerouslySetInnerHTML" ? yh(o, f) : d === "children" ? Jo(o, f) : qu(o, d, f, c)
                    }
                    switch (l) {
                    case "input":
                        Ra(o, s);
                        break;
                    case "textarea":
                        gh(o, s);
                        break;
                    case "select":
                        var g = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!s.multiple;
                        var x = s.value;
                        x != null ? Dr(o, !!s.multiple, x, !1) : g !== !!s.multiple && (s.defaultValue != null ? Dr(o, !!s.multiple, s.defaultValue, !0) : Dr(o, !!s.multiple, s.multiple ? [] : "", !1))
                    }
                    o[as] = s
                } catch (v) {
                    fe(e, e.return, v)
                }
        }
        break;
    case 6:
        if (ct(t, e),
        bt(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(T(162));
            o = e.stateNode,
            s = e.memoizedProps;
            try {
                o.nodeValue = s
            } catch (v) {
                fe(e, e.return, v)
            }
        }
        break;
    case 3:
        if (ct(t, e),
        bt(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                rs(t.containerInfo)
            } catch (v) {
                fe(e, e.return, v)
            }
        break;
    case 4:
        ct(t, e),
        bt(e);
        break;
    case 13:
        ct(t, e),
        bt(e),
        o = e.child,
        o.flags & 8192 && (s = o.memoizedState !== null,
        o.stateNode.isHidden = s,
        !s || o.alternate !== null && o.alternate.memoizedState !== null || (Pc = pe())),
        r & 4 && Ff(e);
        break;
    case 22:
        if (d = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (Pe = (c = Pe) || d,
        ct(t, e),
        Pe = c) : ct(t, e),
        bt(e),
        r & 8192) {
            if (c = e.memoizedState !== null,
            (e.stateNode.isHidden = c) && !d && e.mode & 1)
                for (D = e,
                d = e.child; d !== null; ) {
                    for (f = D = d; D !== null; ) {
                        switch (g = D,
                        x = g.child,
                        g.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Go(4, g, g.return);
                            break;
                        case 1:
                            Ar(g, g.return);
                            var S = g.stateNode;
                            if (typeof S.componentWillUnmount == "function") {
                                r = g,
                                n = g.return;
                                try {
                                    t = r,
                                    S.props = t.memoizedProps,
                                    S.state = t.memoizedState,
                                    S.componentWillUnmount()
                                } catch (v) {
                                    fe(r, n, v)
                                }
                            }
                            break;
                        case 5:
                            Ar(g, g.return);
                            break;
                        case 22:
                            if (g.memoizedState !== null) {
                                $f(f);
                                continue
                            }
                        }
                        x !== null ? (x.return = g,
                        D = x) : $f(f)
                    }
                    d = d.sibling
                }
            e: for (d = null,
            f = e; ; ) {
                if (f.tag === 5) {
                    if (d === null) {
                        d = f;
                        try {
                            o = f.stateNode,
                            c ? (s = o.style,
                            typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (l = f.stateNode,
                            u = f.memoizedProps.style,
                            i = u != null && u.hasOwnProperty("display") ? u.display : null,
                            l.style.display = xh("display", i))
                        } catch (v) {
                            fe(e, e.return, v)
                        }
                    }
                } else if (f.tag === 6) {
                    if (d === null)
                        try {
                            f.stateNode.nodeValue = c ? "" : f.memoizedProps
                        } catch (v) {
                            fe(e, e.return, v)
                        }
                } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                    f.child.return = f,
                    f = f.child;
                    continue
                }
                if (f === e)
                    break e;
                for (; f.sibling === null; ) {
                    if (f.return === null || f.return === e)
                        break e;
                    d === f && (d = null),
                    f = f.return
                }
                d === f && (d = null),
                f.sibling.return = f.return,
                f = f.sibling
            }
        }
        break;
    case 19:
        ct(t, e),
        bt(e),
        r & 4 && Ff(e);
        break;
    case 21:
        break;
    default:
        ct(t, e),
        bt(e)
    }
}
function bt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Wm(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(T(160))
            }
            switch (r.tag) {
            case 5:
                var o = r.stateNode;
                r.flags & 32 && (Jo(o, ""),
                r.flags &= -33);
                var s = If(e);
                du(e, s, o);
                break;
            case 3:
            case 4:
                var i = r.stateNode.containerInfo
                  , l = If(e);
                cu(e, l, i);
                break;
            default:
                throw Error(T(161))
            }
        } catch (u) {
            fe(e, e.return, u)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function Ow(e, t, n) {
    D = e,
    Gm(e)
}
function Gm(e, t, n) {
    for (var r = (e.mode & 1) !== 0; D !== null; ) {
        var o = D
          , s = o.child;
        if (o.tag === 22 && r) {
            var i = o.memoizedState !== null || qs;
            if (!i) {
                var l = o.alternate
                  , u = l !== null && l.memoizedState !== null || Pe;
                l = qs;
                var c = Pe;
                if (qs = i,
                (Pe = u) && !c)
                    for (D = o; D !== null; )
                        i = D,
                        u = i.child,
                        i.tag === 22 && i.memoizedState !== null ? Uf(o) : u !== null ? (u.return = i,
                        D = u) : Uf(o);
                for (; s !== null; )
                    D = s,
                    Gm(s),
                    s = s.sibling;
                D = o,
                qs = l,
                Pe = c
            }
            zf(e)
        } else
            o.subtreeFlags & 8772 && s !== null ? (s.return = o,
            D = s) : zf(e)
    }
}
function zf(e) {
    for (; D !== null; ) {
        var t = D;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Pe || ml(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Pe)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : dt(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var s = t.updateQueue;
                        s !== null && Ef(t, s, r);
                        break;
                    case 3:
                        var i = t.updateQueue;
                        if (i !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            Ef(t, i, n)
                        }
                        break;
                    case 5:
                        var l = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = l;
                            var u = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                u.autoFocus && n.focus();
                                break;
                            case "img":
                                u.src && (n.src = u.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var c = t.alternate;
                            if (c !== null) {
                                var d = c.memoizedState;
                                if (d !== null) {
                                    var f = d.dehydrated;
                                    f !== null && rs(f)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(T(163))
                    }
                Pe || t.flags & 512 && uu(t)
            } catch (g) {
                fe(t, t.return, g)
            }
        }
        if (t === e) {
            D = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            D = n;
            break
        }
        D = t.return
    }
}
function $f(e) {
    for (; D !== null; ) {
        var t = D;
        if (t === e) {
            D = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            D = n;
            break
        }
        D = t.return
    }
}
function Uf(e) {
    for (; D !== null; ) {
        var t = D;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    ml(4, t)
                } catch (u) {
                    fe(t, n, u)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var o = t.return;
                    try {
                        r.componentDidMount()
                    } catch (u) {
                        fe(t, o, u)
                    }
                }
                var s = t.return;
                try {
                    uu(t)
                } catch (u) {
                    fe(t, s, u)
                }
                break;
            case 5:
                var i = t.return;
                try {
                    uu(t)
                } catch (u) {
                    fe(t, i, u)
                }
            }
        } catch (u) {
            fe(t, t.return, u)
        }
        if (t === e) {
            D = null;
            break
        }
        var l = t.sibling;
        if (l !== null) {
            l.return = t.return,
            D = l;
            break
        }
        D = t.return
    }
}
var Aw = Math.ceil
  , Hi = Xt.ReactCurrentDispatcher
  , kc = Xt.ReactCurrentOwner
  , st = Xt.ReactCurrentBatchConfig
  , G = 0
  , xe = null
  , he = null
  , be = 0
  , We = 0
  , _r = zn(0)
  , ve = 0
  , hs = null
  , lr = 0
  , gl = 0
  , jc = 0
  , qo = null
  , ze = null
  , Pc = 0
  , fo = 1 / 0
  , Ft = null
  , Wi = !1
  , fu = null
  , jn = null
  , Ys = !1
  , wn = null
  , Qi = 0
  , Yo = 0
  , pu = null
  , mi = -1
  , gi = 0;
function _e() {
    return G & 6 ? pe() : mi !== -1 ? mi : mi = pe()
}
function Pn(e) {
    return e.mode & 1 ? G & 2 && be !== 0 ? be & -be : mw.transition !== null ? (gi === 0 && (gi = Ah()),
    gi) : (e = Z,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : zh(e.type)),
    e) : 1
}
function vt(e, t, n, r) {
    if (50 < Yo)
        throw Yo = 0,
        pu = null,
        Error(T(185));
    Ns(e, n, r),
    (!(G & 2) || e !== xe) && (e === xe && (!(G & 2) && (gl |= n),
    ve === 4 && un(e, be)),
    Ve(e, r),
    n === 1 && G === 0 && !(t.mode & 1) && (fo = pe() + 500,
    fl && $n()))
}
function Ve(e, t) {
    var n = e.callbackNode;
    m0(e, t);
    var r = Ti(e, e === xe ? be : 0);
    if (r === 0)
        n !== null && qd(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && qd(n),
        t === 1)
            e.tag === 0 ? hw(Bf.bind(null, e)) : om(Bf.bind(null, e)),
            cw(function() {
                !(G & 6) && $n()
            }),
            n = null;
        else {
            switch (_h(r)) {
            case 1:
                n = ec;
                break;
            case 4:
                n = Rh;
                break;
            case 16:
                n = Pi;
                break;
            case 536870912:
                n = Oh;
                break;
            default:
                n = Pi
            }
            n = ng(n, qm.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function qm(e, t) {
    if (mi = -1,
    gi = 0,
    G & 6)
        throw Error(T(327));
    var n = e.callbackNode;
    if (zr() && e.callbackNode !== n)
        return null;
    var r = Ti(e, e === xe ? be : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = Ki(e, r);
    else {
        t = r;
        var o = G;
        G |= 2;
        var s = Xm();
        (xe !== e || be !== t) && (Ft = null,
        fo = pe() + 500,
        tr(e, t));
        do
            try {
                Mw();
                break
            } catch (l) {
                Ym(e, l)
            }
        while (!0);
        pc(),
        Hi.current = s,
        G = o,
        he !== null ? t = 0 : (xe = null,
        be = 0,
        t = ve)
    }
    if (t !== 0) {
        if (t === 2 && (o = $a(e),
        o !== 0 && (r = o,
        t = hu(e, o))),
        t === 1)
            throw n = hs,
            tr(e, 0),
            un(e, r),
            Ve(e, pe()),
            n;
        if (t === 6)
            un(e, r);
        else {
            if (o = e.current.alternate,
            !(r & 30) && !_w(o) && (t = Ki(e, r),
            t === 2 && (s = $a(e),
            s !== 0 && (r = s,
            t = hu(e, s))),
            t === 1))
                throw n = hs,
                tr(e, 0),
                un(e, r),
                Ve(e, pe()),
                n;
            switch (e.finishedWork = o,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(T(345));
            case 2:
                Vn(e, ze, Ft);
                break;
            case 3:
                if (un(e, r),
                (r & 130023424) === r && (t = Pc + 500 - pe(),
                10 < t)) {
                    if (Ti(e, 0) !== 0)
                        break;
                    if (o = e.suspendedLanes,
                    (o & r) !== r) {
                        _e(),
                        e.pingedLanes |= e.suspendedLanes & o;
                        break
                    }
                    e.timeoutHandle = Ga(Vn.bind(null, e, ze, Ft), t);
                    break
                }
                Vn(e, ze, Ft);
                break;
            case 4:
                if (un(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                o = -1; 0 < r; ) {
                    var i = 31 - gt(r);
                    s = 1 << i,
                    i = t[i],
                    i > o && (o = i),
                    r &= ~s
                }
                if (r = o,
                r = pe() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Aw(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = Ga(Vn.bind(null, e, ze, Ft), r);
                    break
                }
                Vn(e, ze, Ft);
                break;
            case 5:
                Vn(e, ze, Ft);
                break;
            default:
                throw Error(T(329))
            }
        }
    }
    return Ve(e, pe()),
    e.callbackNode === n ? qm.bind(null, e) : null
}
function hu(e, t) {
    var n = qo;
    return e.current.memoizedState.isDehydrated && (tr(e, t).flags |= 256),
    e = Ki(e, t),
    e !== 2 && (t = ze,
    ze = n,
    t !== null && mu(t)),
    e
}
function mu(e) {
    ze === null ? ze = e : ze.push.apply(ze, e)
}
function _w(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r]
                      , s = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!yt(s(), o))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function un(e, t) {
    for (t &= ~jc,
    t &= ~gl,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - gt(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function Bf(e) {
    if (G & 6)
        throw Error(T(327));
    zr();
    var t = Ti(e, 0);
    if (!(t & 1))
        return Ve(e, pe()),
        null;
    var n = Ki(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = $a(e);
        r !== 0 && (t = r,
        n = hu(e, r))
    }
    if (n === 1)
        throw n = hs,
        tr(e, 0),
        un(e, t),
        Ve(e, pe()),
        n;
    if (n === 6)
        throw Error(T(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Vn(e, ze, Ft),
    Ve(e, pe()),
    null
}
function Tc(e, t) {
    var n = G;
    G |= 1;
    try {
        return e(t)
    } finally {
        G = n,
        G === 0 && (fo = pe() + 500,
        fl && $n())
    }
}
function ar(e) {
    wn !== null && wn.tag === 0 && !(G & 6) && zr();
    var t = G;
    G |= 1;
    var n = st.transition
      , r = Z;
    try {
        if (st.transition = null,
        Z = 1,
        e)
            return e()
    } finally {
        Z = r,
        st.transition = n,
        G = t,
        !(G & 6) && $n()
    }
}
function Rc() {
    We = _r.current,
    oe(_r)
}
function tr(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    uw(n)),
    he !== null)
        for (n = he.return; n !== null; ) {
            var r = n;
            switch (cc(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Di();
                break;
            case 3:
                uo(),
                oe(Ue),
                oe(Te),
                xc();
                break;
            case 5:
                yc(r);
                break;
            case 4:
                uo();
                break;
            case 13:
                oe(le);
                break;
            case 19:
                oe(le);
                break;
            case 10:
                hc(r.type._context);
                break;
            case 22:
            case 23:
                Rc()
            }
            n = n.return
        }
    if (xe = e,
    he = e = Tn(e.current, null),
    be = We = t,
    ve = 0,
    hs = null,
    jc = gl = lr = 0,
    ze = qo = null,
    Wn !== null) {
        for (t = 0; t < Wn.length; t++)
            if (n = Wn[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var o = r.next
                  , s = n.pending;
                if (s !== null) {
                    var i = s.next;
                    s.next = o,
                    r.next = i
                }
                n.pending = r
            }
        Wn = null
    }
    return e
}
function Ym(e, t) {
    do {
        var n = he;
        try {
            if (pc(),
            fi.current = Vi,
            Bi) {
                for (var r = ae.memoizedState; r !== null; ) {
                    var o = r.queue;
                    o !== null && (o.pending = null),
                    r = r.next
                }
                Bi = !1
            }
            if (ir = 0,
            ye = me = ae = null,
            Ko = !1,
            ds = 0,
            kc.current = null,
            n === null || n.return === null) {
                ve = 1,
                hs = t,
                he = null;
                break
            }
            e: {
                var s = e
                  , i = n.return
                  , l = n
                  , u = t;
                if (t = be,
                l.flags |= 32768,
                u !== null && typeof u == "object" && typeof u.then == "function") {
                    var c = u
                      , d = l
                      , f = d.tag;
                    if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var g = d.alternate;
                        g ? (d.updateQueue = g.updateQueue,
                        d.memoizedState = g.memoizedState,
                        d.lanes = g.lanes) : (d.updateQueue = null,
                        d.memoizedState = null)
                    }
                    var x = Tf(i);
                    if (x !== null) {
                        x.flags &= -257,
                        Rf(x, i, l, s, t),
                        x.mode & 1 && Pf(s, c, t),
                        t = x,
                        u = c;
                        var S = t.updateQueue;
                        if (S === null) {
                            var v = new Set;
                            v.add(u),
                            t.updateQueue = v
                        } else
                            S.add(u);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Pf(s, c, t),
                            Oc();
                            break e
                        }
                        u = Error(T(426))
                    }
                } else if (ie && l.mode & 1) {
                    var w = Tf(i);
                    if (w !== null) {
                        !(w.flags & 65536) && (w.flags |= 256),
                        Rf(w, i, l, s, t),
                        dc(co(u, l));
                        break e
                    }
                }
                s = u = co(u, l),
                ve !== 4 && (ve = 2),
                qo === null ? qo = [s] : qo.push(s),
                s = i;
                do {
                    switch (s.tag) {
                    case 3:
                        s.flags |= 65536,
                        t &= -t,
                        s.lanes |= t;
                        var m = _m(s, u, t);
                        bf(s, m);
                        break e;
                    case 1:
                        l = u;
                        var h = s.type
                          , y = s.stateNode;
                        if (!(s.flags & 128) && (typeof h.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (jn === null || !jn.has(y)))) {
                            s.flags |= 65536,
                            t &= -t,
                            s.lanes |= t;
                            var b = Dm(s, l, t);
                            bf(s, b);
                            break e
                        }
                    }
                    s = s.return
                } while (s !== null)
            }
            Jm(n)
        } catch (C) {
            t = C,
            he === n && n !== null && (he = n = n.return);
            continue
        }
        break
    } while (!0)
}
function Xm() {
    var e = Hi.current;
    return Hi.current = Vi,
    e === null ? Vi : e
}
function Oc() {
    (ve === 0 || ve === 3 || ve === 2) && (ve = 4),
    xe === null || !(lr & 268435455) && !(gl & 268435455) || un(xe, be)
}
function Ki(e, t) {
    var n = G;
    G |= 2;
    var r = Xm();
    (xe !== e || be !== t) && (Ft = null,
    tr(e, t));
    do
        try {
            Dw();
            break
        } catch (o) {
            Ym(e, o)
        }
    while (!0);
    if (pc(),
    G = n,
    Hi.current = r,
    he !== null)
        throw Error(T(261));
    return xe = null,
    be = 0,
    ve
}
function Dw() {
    for (; he !== null; )
        Zm(he)
}
function Mw() {
    for (; he !== null && !i0(); )
        Zm(he)
}
function Zm(e) {
    var t = tg(e.alternate, e, We);
    e.memoizedProps = e.pendingProps,
    t === null ? Jm(e) : he = t,
    kc.current = null
}
function Jm(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = Pw(n, t),
            n !== null) {
                n.flags &= 32767,
                he = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                ve = 6,
                he = null;
                return
            }
        } else if (n = jw(n, t, We),
        n !== null) {
            he = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            he = t;
            return
        }
        he = t = e
    } while (t !== null);
    ve === 0 && (ve = 5)
}
function Vn(e, t, n) {
    var r = Z
      , o = st.transition;
    try {
        st.transition = null,
        Z = 1,
        Lw(e, t, n, r)
    } finally {
        st.transition = o,
        Z = r
    }
    return null
}
function Lw(e, t, n, r) {
    do
        zr();
    while (wn !== null);
    if (G & 6)
        throw Error(T(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(T(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var s = n.lanes | n.childLanes;
    if (g0(e, s),
    e === xe && (he = xe = null,
    be = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ys || (Ys = !0,
    ng(Pi, function() {
        return zr(),
        null
    })),
    s = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || s) {
        s = st.transition,
        st.transition = null;
        var i = Z;
        Z = 1;
        var l = G;
        G |= 4,
        kc.current = null,
        Rw(e, n),
        Km(n, e),
        nw(Qa),
        Ri = !!Wa,
        Qa = Wa = null,
        e.current = n,
        Ow(n),
        l0(),
        G = l,
        Z = i,
        st.transition = s
    } else
        e.current = n;
    if (Ys && (Ys = !1,
    wn = e,
    Qi = o),
    s = e.pendingLanes,
    s === 0 && (jn = null),
    c0(n.stateNode),
    Ve(e, pe()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            o = t[n],
            r(o.value, {
                componentStack: o.stack,
                digest: o.digest
            });
    if (Wi)
        throw Wi = !1,
        e = fu,
        fu = null,
        e;
    return Qi & 1 && e.tag !== 0 && zr(),
    s = e.pendingLanes,
    s & 1 ? e === pu ? Yo++ : (Yo = 0,
    pu = e) : Yo = 0,
    $n(),
    null
}
function zr() {
    if (wn !== null) {
        var e = _h(Qi)
          , t = st.transition
          , n = Z;
        try {
            if (st.transition = null,
            Z = 16 > e ? 16 : e,
            wn === null)
                var r = !1;
            else {
                if (e = wn,
                wn = null,
                Qi = 0,
                G & 6)
                    throw Error(T(331));
                var o = G;
                for (G |= 4,
                D = e.current; D !== null; ) {
                    var s = D
                      , i = s.child;
                    if (D.flags & 16) {
                        var l = s.deletions;
                        if (l !== null) {
                            for (var u = 0; u < l.length; u++) {
                                var c = l[u];
                                for (D = c; D !== null; ) {
                                    var d = D;
                                    switch (d.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Go(8, d, s)
                                    }
                                    var f = d.child;
                                    if (f !== null)
                                        f.return = d,
                                        D = f;
                                    else
                                        for (; D !== null; ) {
                                            d = D;
                                            var g = d.sibling
                                              , x = d.return;
                                            if (Hm(d),
                                            d === c) {
                                                D = null;
                                                break
                                            }
                                            if (g !== null) {
                                                g.return = x,
                                                D = g;
                                                break
                                            }
                                            D = x
                                        }
                                }
                            }
                            var S = s.alternate;
                            if (S !== null) {
                                var v = S.child;
                                if (v !== null) {
                                    S.child = null;
                                    do {
                                        var w = v.sibling;
                                        v.sibling = null,
                                        v = w
                                    } while (v !== null)
                                }
                            }
                            D = s
                        }
                    }
                    if (s.subtreeFlags & 2064 && i !== null)
                        i.return = s,
                        D = i;
                    else
                        e: for (; D !== null; ) {
                            if (s = D,
                            s.flags & 2048)
                                switch (s.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Go(9, s, s.return)
                                }
                            var m = s.sibling;
                            if (m !== null) {
                                m.return = s.return,
                                D = m;
                                break e
                            }
                            D = s.return
                        }
                }
                var h = e.current;
                for (D = h; D !== null; ) {
                    i = D;
                    var y = i.child;
                    if (i.subtreeFlags & 2064 && y !== null)
                        y.return = i,
                        D = y;
                    else
                        e: for (i = h; D !== null; ) {
                            if (l = D,
                            l.flags & 2048)
                                try {
                                    switch (l.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        ml(9, l)
                                    }
                                } catch (C) {
                                    fe(l, l.return, C)
                                }
                            if (l === i) {
                                D = null;
                                break e
                            }
                            var b = l.sibling;
                            if (b !== null) {
                                b.return = l.return,
                                D = b;
                                break e
                            }
                            D = l.return
                        }
                }
                if (G = o,
                $n(),
                Rt && typeof Rt.onPostCommitFiberRoot == "function")
                    try {
                        Rt.onPostCommitFiberRoot(ll, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            Z = n,
            st.transition = t
        }
    }
    return !1
}
function Vf(e, t, n) {
    t = co(n, t),
    t = _m(e, t, 1),
    e = kn(e, t, 1),
    t = _e(),
    e !== null && (Ns(e, 1, t),
    Ve(e, t))
}
function fe(e, t, n) {
    if (e.tag === 3)
        Vf(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Vf(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (jn === null || !jn.has(r))) {
                    e = co(n, e),
                    e = Dm(t, e, 1),
                    t = kn(t, e, 1),
                    e = _e(),
                    t !== null && (Ns(t, 1, e),
                    Ve(t, e));
                    break
                }
            }
            t = t.return
        }
}
function Iw(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = _e(),
    e.pingedLanes |= e.suspendedLanes & n,
    xe === e && (be & n) === n && (ve === 4 || ve === 3 && (be & 130023424) === be && 500 > pe() - Pc ? tr(e, 0) : jc |= n),
    Ve(e, t)
}
function eg(e, t) {
    t === 0 && (e.mode & 1 ? (t = $s,
    $s <<= 1,
    !($s & 130023424) && ($s = 4194304)) : t = 1);
    var n = _e();
    e = Kt(e, t),
    e !== null && (Ns(e, t, n),
    Ve(e, n))
}
function Fw(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    eg(e, n)
}
function zw(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(T(314))
    }
    r !== null && r.delete(t),
    eg(e, n)
}
var tg;
tg = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ue.current)
            $e = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return $e = !1,
                kw(e, t, n);
            $e = !!(e.flags & 131072)
        }
    else
        $e = !1,
        ie && t.flags & 1048576 && sm(t, Ii, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        hi(e, t),
        e = t.pendingProps;
        var o = io(t, Te.current);
        Fr(t, n),
        o = Sc(null, t, r, e, o, n);
        var s = bc();
        return t.flags |= 1,
        typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        Be(r) ? (s = !0,
        Mi(t)) : s = !1,
        t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null,
        gc(t),
        o.updater = hl,
        t.stateNode = o,
        o._reactInternals = t,
        tu(t, r, e, n),
        t = ou(null, t, r, !0, s, n)) : (t.tag = 0,
        ie && s && uc(t),
        Ae(null, t, o, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (hi(e, t),
            e = t.pendingProps,
            o = r._init,
            r = o(r._payload),
            t.type = r,
            o = t.tag = Uw(r),
            e = dt(r, e),
            o) {
            case 0:
                t = ru(null, t, r, e, n);
                break e;
            case 1:
                t = _f(null, t, r, e, n);
                break e;
            case 11:
                t = Of(null, t, r, e, n);
                break e;
            case 14:
                t = Af(null, t, r, dt(r.type, e), n);
                break e
            }
            throw Error(T(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : dt(r, o),
        ru(e, t, r, o, n);
    case 1:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : dt(r, o),
        _f(e, t, r, o, n);
    case 3:
        e: {
            if (Fm(t),
            e === null)
                throw Error(T(387));
            r = t.pendingProps,
            s = t.memoizedState,
            o = s.element,
            dm(e, t),
            $i(t, r, null, n);
            var i = t.memoizedState;
            if (r = i.element,
            s.isDehydrated)
                if (s = {
                    element: r,
                    isDehydrated: !1,
                    cache: i.cache,
                    pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                    transitions: i.transitions
                },
                t.updateQueue.baseState = s,
                t.memoizedState = s,
                t.flags & 256) {
                    o = co(Error(T(423)), t),
                    t = Df(e, t, r, n, o);
                    break e
                } else if (r !== o) {
                    o = co(Error(T(424)), t),
                    t = Df(e, t, r, n, o);
                    break e
                } else
                    for (Ke = Nn(t.stateNode.containerInfo.firstChild),
                    Ge = t,
                    ie = !0,
                    ht = null,
                    n = um(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (lo(),
                r === o) {
                    t = Gt(e, t, n);
                    break e
                }
                Ae(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return fm(t),
        e === null && Za(t),
        r = t.type,
        o = t.pendingProps,
        s = e !== null ? e.memoizedProps : null,
        i = o.children,
        Ka(r, o) ? i = null : s !== null && Ka(r, s) && (t.flags |= 32),
        Im(e, t),
        Ae(e, t, i, n),
        t.child;
    case 6:
        return e === null && Za(t),
        null;
    case 13:
        return zm(e, t, n);
    case 4:
        return vc(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = ao(t, null, r, n) : Ae(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : dt(r, o),
        Of(e, t, r, o, n);
    case 7:
        return Ae(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return Ae(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return Ae(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            o = t.pendingProps,
            s = t.memoizedProps,
            i = o.value,
            ee(Fi, r._currentValue),
            r._currentValue = i,
            s !== null)
                if (yt(s.value, i)) {
                    if (s.children === o.children && !Ue.current) {
                        t = Gt(e, t, n);
                        break e
                    }
                } else
                    for (s = t.child,
                    s !== null && (s.return = t); s !== null; ) {
                        var l = s.dependencies;
                        if (l !== null) {
                            i = s.child;
                            for (var u = l.firstContext; u !== null; ) {
                                if (u.context === r) {
                                    if (s.tag === 1) {
                                        u = Vt(-1, n & -n),
                                        u.tag = 2;
                                        var c = s.updateQueue;
                                        if (c !== null) {
                                            c = c.shared;
                                            var d = c.pending;
                                            d === null ? u.next = u : (u.next = d.next,
                                            d.next = u),
                                            c.pending = u
                                        }
                                    }
                                    s.lanes |= n,
                                    u = s.alternate,
                                    u !== null && (u.lanes |= n),
                                    Ja(s.return, n, t),
                                    l.lanes |= n;
                                    break
                                }
                                u = u.next
                            }
                        } else if (s.tag === 10)
                            i = s.type === t.type ? null : s.child;
                        else if (s.tag === 18) {
                            if (i = s.return,
                            i === null)
                                throw Error(T(341));
                            i.lanes |= n,
                            l = i.alternate,
                            l !== null && (l.lanes |= n),
                            Ja(i, n, t),
                            i = s.sibling
                        } else
                            i = s.child;
                        if (i !== null)
                            i.return = s;
                        else
                            for (i = s; i !== null; ) {
                                if (i === t) {
                                    i = null;
                                    break
                                }
                                if (s = i.sibling,
                                s !== null) {
                                    s.return = i.return,
                                    i = s;
                                    break
                                }
                                i = i.return
                            }
                        s = i
                    }
            Ae(e, t, o.children, n),
            t = t.child
        }
        return t;
    case 9:
        return o = t.type,
        r = t.pendingProps.children,
        Fr(t, n),
        o = it(o),
        r = r(o),
        t.flags |= 1,
        Ae(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        o = dt(r, t.pendingProps),
        o = dt(r.type, o),
        Af(e, t, r, o, n);
    case 15:
        return Mm(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : dt(r, o),
        hi(e, t),
        t.tag = 1,
        Be(r) ? (e = !0,
        Mi(t)) : e = !1,
        Fr(t, n),
        Am(t, r, o),
        tu(t, r, o, n),
        ou(null, t, r, !0, e, n);
    case 19:
        return $m(e, t, n);
    case 22:
        return Lm(e, t, n)
    }
    throw Error(T(156, t.tag))
}
;
function ng(e, t) {
    return Th(e, t)
}
function $w(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function ot(e, t, n, r) {
    return new $w(e,t,n,r)
}
function Ac(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function Uw(e) {
    if (typeof e == "function")
        return Ac(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === Xu)
            return 11;
        if (e === Zu)
            return 14
    }
    return 2
}
function Tn(e, t) {
    var n = e.alternate;
    return n === null ? (n = ot(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function vi(e, t, n, r, o, s) {
    var i = 2;
    if (r = e,
    typeof e == "function")
        Ac(e) && (i = 1);
    else if (typeof e == "string")
        i = 5;
    else
        e: switch (e) {
        case Er:
            return nr(n.children, o, s, t);
        case Yu:
            i = 8,
            o |= 8;
            break;
        case Na:
            return e = ot(12, n, t, o | 2),
            e.elementType = Na,
            e.lanes = s,
            e;
        case ka:
            return e = ot(13, n, t, o),
            e.elementType = ka,
            e.lanes = s,
            e;
        case ja:
            return e = ot(19, n, t, o),
            e.elementType = ja,
            e.lanes = s,
            e;
        case fh:
            return vl(n, o, s, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case ch:
                    i = 10;
                    break e;
                case dh:
                    i = 9;
                    break e;
                case Xu:
                    i = 11;
                    break e;
                case Zu:
                    i = 14;
                    break e;
                case sn:
                    i = 16,
                    r = null;
                    break e
                }
            throw Error(T(130, e == null ? e : typeof e, ""))
        }
    return t = ot(i, n, t, o),
    t.elementType = e,
    t.type = r,
    t.lanes = s,
    t
}
function nr(e, t, n, r) {
    return e = ot(7, e, r, t),
    e.lanes = n,
    e
}
function vl(e, t, n, r) {
    return e = ot(22, e, r, t),
    e.elementType = fh,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function ia(e, t, n) {
    return e = ot(6, e, null, t),
    e.lanes = n,
    e
}
function la(e, t, n) {
    return t = ot(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function Bw(e, t, n, r, o) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Ul(0),
    this.expirationTimes = Ul(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Ul(0),
    this.identifierPrefix = r,
    this.onRecoverableError = o,
    this.mutableSourceEagerHydrationData = null
}
function _c(e, t, n, r, o, s, i, l, u) {
    return e = new Bw(e,t,n,l,u),
    t === 1 ? (t = 1,
    s === !0 && (t |= 8)) : t = 0,
    s = ot(3, null, null, t),
    e.current = s,
    s.stateNode = e,
    s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    gc(s),
    e
}
function Vw(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: br,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function rg(e) {
    if (!e)
        return _n;
    e = e._reactInternals;
    e: {
        if (mr(e) !== e || e.tag !== 1)
            throw Error(T(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (Be(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(T(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Be(n))
            return rm(e, n, t)
    }
    return t
}
function og(e, t, n, r, o, s, i, l, u) {
    return e = _c(n, r, !0, e, o, s, i, l, u),
    e.context = rg(null),
    n = e.current,
    r = _e(),
    o = Pn(n),
    s = Vt(r, o),
    s.callback = t ?? null,
    kn(n, s, o),
    e.current.lanes = o,
    Ns(e, o, r),
    Ve(e, r),
    e
}
function yl(e, t, n, r) {
    var o = t.current
      , s = _e()
      , i = Pn(o);
    return n = rg(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = Vt(s, i),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = kn(o, t, i),
    e !== null && (vt(e, o, i, s),
    di(e, o, i)),
    i
}
function Gi(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Hf(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Dc(e, t) {
    Hf(e, t),
    (e = e.alternate) && Hf(e, t)
}
function Hw() {
    return null
}
var sg = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Mc(e) {
    this._internalRoot = e
}
xl.prototype.render = Mc.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(T(409));
    yl(e, t, null, null)
}
;
xl.prototype.unmount = Mc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        ar(function() {
            yl(null, e, null, null)
        }),
        t[Qt] = null
    }
}
;
function xl(e) {
    this._internalRoot = e
}
xl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Lh();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < an.length && t !== 0 && t < an[n].priority; n++)
            ;
        an.splice(n, 0, e),
        n === 0 && Fh(e)
    }
}
;
function Lc(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function wl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Wf() {}
function Ww(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var c = Gi(i);
                s.call(c)
            }
        }
        var i = og(t, r, e, 0, null, !1, !1, "", Wf);
        return e._reactRootContainer = i,
        e[Qt] = i.current,
        is(e.nodeType === 8 ? e.parentNode : e),
        ar(),
        i
    }
    for (; o = e.lastChild; )
        e.removeChild(o);
    if (typeof r == "function") {
        var l = r;
        r = function() {
            var c = Gi(u);
            l.call(c)
        }
    }
    var u = _c(e, 0, !1, null, null, !1, !1, "", Wf);
    return e._reactRootContainer = u,
    e[Qt] = u.current,
    is(e.nodeType === 8 ? e.parentNode : e),
    ar(function() {
        yl(t, u, n, r)
    }),
    u
}
function Sl(e, t, n, r, o) {
    var s = n._reactRootContainer;
    if (s) {
        var i = s;
        if (typeof o == "function") {
            var l = o;
            o = function() {
                var u = Gi(i);
                l.call(u)
            }
        }
        yl(t, i, e, o)
    } else
        i = Ww(n, t, e, o, r);
    return Gi(i)
}
Dh = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = zo(t.pendingLanes);
            n !== 0 && (tc(t, n | 1),
            Ve(t, pe()),
            !(G & 6) && (fo = pe() + 500,
            $n()))
        }
        break;
    case 13:
        ar(function() {
            var r = Kt(e, 1);
            if (r !== null) {
                var o = _e();
                vt(r, e, 1, o)
            }
        }),
        Dc(e, 1)
    }
}
;
nc = function(e) {
    if (e.tag === 13) {
        var t = Kt(e, 134217728);
        if (t !== null) {
            var n = _e();
            vt(t, e, 134217728, n)
        }
        Dc(e, 134217728)
    }
}
;
Mh = function(e) {
    if (e.tag === 13) {
        var t = Pn(e)
          , n = Kt(e, t);
        if (n !== null) {
            var r = _e();
            vt(n, e, t, r)
        }
        Dc(e, t)
    }
}
;
Lh = function() {
    return Z
}
;
Ih = function(e, t) {
    var n = Z;
    try {
        return Z = e,
        t()
    } finally {
        Z = n
    }
}
;
Ia = function(e, t, n) {
    switch (t) {
    case "input":
        if (Ra(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var o = dl(r);
                    if (!o)
                        throw Error(T(90));
                    hh(r),
                    Ra(r, o)
                }
            }
        }
        break;
    case "textarea":
        gh(e, n);
        break;
    case "select":
        t = n.value,
        t != null && Dr(e, !!n.multiple, t, !1)
    }
}
;
Eh = Tc;
Ch = ar;
var Qw = {
    usingClientEntryPoint: !1,
    Events: [js, jr, dl, Sh, bh, Tc]
}
  , Do = {
    findFiberByHostInstance: Hn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , Kw = {
    bundleType: Do.bundleType,
    version: Do.version,
    rendererPackageName: Do.rendererPackageName,
    rendererConfig: Do.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Xt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = jh(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Do.findFiberByHostInstance || Hw,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Xs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Xs.isDisabled && Xs.supportsFiber)
        try {
            ll = Xs.inject(Kw),
            Rt = Xs
        } catch {}
}
Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qw;
Xe.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Lc(t))
        throw Error(T(200));
    return Vw(e, t, null, n)
}
;
Xe.createRoot = function(e, t) {
    if (!Lc(e))
        throw Error(T(299));
    var n = !1
      , r = ""
      , o = sg;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    t = _c(e, 1, !1, null, null, n, !1, r, o),
    e[Qt] = t.current,
    is(e.nodeType === 8 ? e.parentNode : e),
    new Mc(t)
}
;
Xe.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(T(188)) : (e = Object.keys(e).join(","),
        Error(T(268, e)));
    return e = jh(t),
    e = e === null ? null : e.stateNode,
    e
}
;
Xe.flushSync = function(e) {
    return ar(e)
}
;
Xe.hydrate = function(e, t, n) {
    if (!wl(t))
        throw Error(T(200));
    return Sl(null, e, t, !0, n)
}
;
Xe.hydrateRoot = function(e, t, n) {
    if (!Lc(e))
        throw Error(T(405));
    var r = n != null && n.hydratedSources || null
      , o = !1
      , s = ""
      , i = sg;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0),
    n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    t = og(t, null, e, 1, n ?? null, o, !1, s, i),
    e[Qt] = t.current,
    is(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            o = n._getVersion,
            o = o(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new xl(t)
}
;
Xe.render = function(e, t, n) {
    if (!wl(t))
        throw Error(T(200));
    return Sl(null, e, t, !1, n)
}
;
Xe.unmountComponentAtNode = function(e) {
    if (!wl(e))
        throw Error(T(40));
    return e._reactRootContainer ? (ar(function() {
        Sl(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[Qt] = null
        })
    }),
    !0) : !1
}
;
Xe.unstable_batchedUpdates = Tc;
Xe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!wl(n))
        throw Error(T(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(T(38));
    return Sl(e, t, n, !1, r)
}
;
Xe.version = "18.3.1-next-f1338f8080-20240426";
function ig() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ig)
        } catch (e) {
            console.error(e)
        }
}
ig(),
ih.exports = Xe;
var Ts = ih.exports;
const Gw = Kp(Ts);
var lg, Qf = Ts;
lg = Qf.createRoot,
Qf.hydrateRoot;
function qw(e, t) {
    if (e instanceof RegExp)
        return {
            keys: !1,
            pattern: e
        };
    var n, r, o, s, i = [], l = "", u = e.split("/");
    for (u[0] || u.shift(); o = u.shift(); )
        n = o[0],
        n === "*" ? (i.push(n),
        l += o[1] === "?" ? "(?:/(.*))?" : "/(.*)") : n === ":" ? (r = o.indexOf("?", 1),
        s = o.indexOf(".", 1),
        i.push(o.substring(1, ~r ? r : ~s ? s : o.length)),
        l += ~r && !~s ? "(?:/([^/]+?))?" : "/([^/]+?)",
        ~s && (l += (~r ? "?" : "") + "\\" + o.substring(s))) : l += "/" + o;
    return {
        keys: i,
        pattern: new RegExp("^" + l + (t ? "(?=$|/)" : "/?$"),"i")
    }
}
var ag = {
    exports: {}
}
  , ug = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var po = p;
function Yw(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Xw = typeof Object.is == "function" ? Object.is : Yw
  , Zw = po.useState
  , Jw = po.useEffect
  , e1 = po.useLayoutEffect
  , t1 = po.useDebugValue;
function n1(e, t) {
    var n = t()
      , r = Zw({
        inst: {
            value: n,
            getSnapshot: t
        }
    })
      , o = r[0].inst
      , s = r[1];
    return e1(function() {
        o.value = n,
        o.getSnapshot = t,
        aa(o) && s({
            inst: o
        })
    }, [e, n, t]),
    Jw(function() {
        return aa(o) && s({
            inst: o
        }),
        e(function() {
            aa(o) && s({
                inst: o
            })
        })
    }, [e]),
    t1(n),
    n
}
function aa(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Xw(e, n)
    } catch {
        return !0
    }
}
function r1(e, t) {
    return t()
}
var o1 = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? r1 : n1;
ug.useSyncExternalStore = po.useSyncExternalStore !== void 0 ? po.useSyncExternalStore : o1;
ag.exports = ug;
var s1 = ag.exports;
const i1 = oh.useInsertionEffect
  , l1 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , a1 = l1 ? p.useLayoutEffect : p.useEffect
  , u1 = i1 || a1
  , cg = e => {
    const t = p.useRef([e, (...n) => t[0](...n)]).current;
    return u1( () => {
        t[0] = e
    }
    ),
    t[1]
}
  , c1 = "popstate"
  , Ic = "pushState"
  , Fc = "replaceState"
  , d1 = "hashchange"
  , Kf = [c1, Ic, Fc, d1]
  , f1 = e => {
    for (const t of Kf)
        addEventListener(t, e);
    return () => {
        for (const t of Kf)
            removeEventListener(t, e)
    }
}
  , dg = (e, t) => s1.useSyncExternalStore(f1, e, t)
  , p1 = () => location.search
  , h1 = ({ssrSearch: e=""}={}) => dg(p1, () => e)
  , Gf = () => location.pathname
  , m1 = ({ssrPath: e}={}) => dg(Gf, e ? () => e : Gf)
  , g1 = (e, {replace: t=!1, state: n=null}={}) => history[t ? Fc : Ic](n, "", e)
  , v1 = (e={}) => [m1(e), g1]
  , qf = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[qf] > "u") {
    for (const e of [Ic, Fc]) {
        const t = history[e];
        history[e] = function() {
            const n = t.apply(this, arguments)
              , r = new Event(e);
            return r.arguments = arguments,
            dispatchEvent(r),
            n
        }
    }
    Object.defineProperty(window, qf, {
        value: !0
    })
}
const y1 = (e, t) => t.toLowerCase().indexOf(e.toLowerCase()) ? "~" + t : t.slice(e.length) || "/"
  , fg = (e="") => e === "/" ? "" : e
  , x1 = (e, t) => e[0] === "~" ? e.slice(1) : fg(t) + e
  , w1 = (e="", t) => y1(Yf(fg(e)), Yf(t))
  , Yf = e => {
    try {
        return decodeURI(e)
    } catch {
        return e
    }
}
  , pg = {
    hook: v1,
    searchHook: h1,
    parser: qw,
    base: "",
    ssrPath: void 0,
    ssrSearch: void 0,
    hrefs: e => e
}
  , hg = p.createContext(pg)
  , Rs = () => p.useContext(hg)
  , mg = {}
  , gg = p.createContext(mg)
  , S1 = () => p.useContext(gg)
  , bl = e => {
    const [t,n] = e.hook(e);
    return [w1(e.base, t), cg( (r, o) => n(x1(r, e.base), o))]
}
  , b1 = () => bl(Rs())
  , vg = (e, t, n, r) => {
    const {pattern: o, keys: s} = t instanceof RegExp ? {
        keys: !1,
        pattern: t
    } : e(t || "*", r)
      , i = o.exec(n) || []
      , [l,...u] = i;
    return l !== void 0 ? [!0, ( () => {
        const c = s !== !1 ? Object.fromEntries(s.map( (f, g) => [f, u[g]])) : i.groups;
        let d = {
            ...u
        };
        return c && Object.assign(d, c),
        d
    }
    )(), ...r ? [l] : []] : [!1, null]
}
  , E1 = ({children: e, ...t}) => {
    var d, f;
    const n = Rs()
      , r = t.hook ? pg : n;
    let o = r;
    const [s,i] = ((d = t.ssrPath) == null ? void 0 : d.split("?")) ?? [];
    i && (t.ssrSearch = i,
    t.ssrPath = s),
    t.hrefs = t.hrefs ?? ((f = t.hook) == null ? void 0 : f.hrefs);
    let l = p.useRef({})
      , u = l.current
      , c = u;
    for (let g in r) {
        const x = g === "base" ? r[g] + (t[g] || "") : t[g] || r[g];
        u === c && x !== c[g] && (l.current = c = {
            ...c
        }),
        c[g] = x,
        x !== r[g] && (o = c)
    }
    return p.createElement(hg.Provider, {
        value: o,
        children: e
    })
}
  , Xf = ({children: e, component: t}, n) => t ? p.createElement(t, {
    params: n
}) : typeof e == "function" ? e(n) : e
  , C1 = e => {
    let t = p.useRef(mg)
      , n = t.current;
    for (const r in e)
        e[r] !== n[r] && (n = e);
    return Object.keys(e).length === 0 && (n = e),
    t.current = n
}
  , yr = ({path: e, nest: t, match: n, ...r}) => {
    const o = Rs()
      , [s] = bl(o)
      , [i,l,u] = n ?? vg(o.parser, e, s, t)
      , c = C1({
        ...S1(),
        ...l
    });
    if (!i)
        return null;
    const d = u ? p.createElement(E1, {
        base: u
    }, Xf(r, c)) : Xf(r, c);
    return p.createElement(gg.Provider, {
        value: c,
        children: d
    })
}
  , N1 = p.forwardRef( (e, t) => {
    const n = Rs()
      , [r,o] = bl(n)
      , {to: s="", href: i=s, onClick: l, asChild: u, children: c, className: d, replace: f, state: g, ...x} = e
      , S = cg(w => {
        w.ctrlKey || w.metaKey || w.altKey || w.shiftKey || w.button !== 0 || (l == null || l(w),
        w.defaultPrevented || (w.preventDefault(),
        o(i, e)))
    }
    )
      , v = n.hrefs(i[0] === "~" ? i.slice(1) : n.base + i, n);
    return u && p.isValidElement(c) ? p.cloneElement(c, {
        onClick: S,
        href: v
    }) : p.createElement("a", {
        ...x,
        onClick: S,
        href: v,
        className: d != null && d.call ? d(r === i) : d,
        children: c,
        ref: t
    })
}
)
  , yg = e => Array.isArray(e) ? e.flatMap(t => yg(t && t.type === p.Fragment ? t.props.children : t)) : [e]
  , k1 = ({children: e, location: t}) => {
    const n = Rs()
      , [r] = bl(n);
    for (const o of yg(e)) {
        let s = 0;
        if (p.isValidElement(o) && (s = vg(n.parser, o.props.path, t || r, o.props.nest))[0])
            return p.cloneElement(o, {
                match: s
            })
    }
    return null
}
;
var wo = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
        return this.listeners.add(e),
        this.onSubscribe(),
        () => {
            this.listeners.delete(e),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , ur = typeof window > "u" || "Deno"in globalThis;
function tt() {}
function j1(e, t) {
    return typeof e == "function" ? e(t) : e
}
function gu(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}
function xg(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}
function $r(e, t) {
    return typeof e == "function" ? e(t) : e
}
function mt(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Zf(e, t) {
    const {type: n="all", exact: r, fetchStatus: o, predicate: s, queryKey: i, stale: l} = e;
    if (i) {
        if (r) {
            if (t.queryHash !== zc(i, t.options))
                return !1
        } else if (!ms(t.queryKey, i))
            return !1
    }
    if (n !== "all") {
        const u = t.isActive();
        if (n === "active" && !u || n === "inactive" && u)
            return !1
    }
    return !(typeof l == "boolean" && t.isStale() !== l || o && o !== t.state.fetchStatus || s && !s(t))
}
function Jf(e, t) {
    const {exact: n, status: r, predicate: o, mutationKey: s} = e;
    if (s) {
        if (!t.options.mutationKey)
            return !1;
        if (n) {
            if (cr(t.options.mutationKey) !== cr(s))
                return !1
        } else if (!ms(t.options.mutationKey, s))
            return !1
    }
    return !(r && t.state.status !== r || o && !o(t))
}
function zc(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || cr)(e)
}
function cr(e) {
    return JSON.stringify(e, (t, n) => vu(n) ? Object.keys(n).sort().reduce( (r, o) => (r[o] = n[o],
    r), {}) : n)
}
function ms(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some(n => !ms(e[n], t[n])) : !1
}
function wg(e, t) {
    if (e === t)
        return e;
    const n = ep(e) && ep(t);
    if (n || vu(e) && vu(t)) {
        const r = n ? e : Object.keys(e)
          , o = r.length
          , s = n ? t : Object.keys(t)
          , i = s.length
          , l = n ? [] : {};
        let u = 0;
        for (let c = 0; c < i; c++) {
            const d = n ? c : s[c];
            (!n && r.includes(d) || n) && e[d] === void 0 && t[d] === void 0 ? (l[d] = void 0,
            u++) : (l[d] = wg(e[d], t[d]),
            l[d] === e[d] && e[d] !== void 0 && u++)
        }
        return o === i && u === o ? e : l
    }
    return t
}
function qi(e, t) {
    if (!t || Object.keys(e).length !== Object.keys(t).length)
        return !1;
    for (const n in e)
        if (e[n] !== t[n])
            return !1;
    return !0
}
function ep(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
function vu(e) {
    if (!tp(e))
        return !1;
    const t = e.constructor;
    if (t === void 0)
        return !0;
    const n = t.prototype;
    return !(!tp(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}
function tp(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function P1(e) {
    return new Promise(t => {
        setTimeout(t, e)
    }
    )
}
function yu(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? wg(e, t) : t
}
function T1(e, t, n=0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}
function R1(e, t, n=0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var $c = Symbol();
function Sg(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === $c ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var Gn, cn, Qr, Ip, O1 = (Ip = class extends wo {
    constructor() {
        super();
        z(this, Gn);
        z(this, cn);
        z(this, Qr);
        _(this, Qr, t => {
            if (!ur && window.addEventListener) {
                const n = () => t();
                return window.addEventListener("visibilitychange", n, !1),
                () => {
                    window.removeEventListener("visibilitychange", n)
                }
            }
        }
        )
    }
    onSubscribe() {
        E(this, cn) || this.setEventListener(E(this, Qr))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = E(this, cn)) == null || t.call(this),
        _(this, cn, void 0))
    }
    setEventListener(t) {
        var n;
        _(this, Qr, t),
        (n = E(this, cn)) == null || n.call(this),
        _(this, cn, t(r => {
            typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
        }
        ))
    }
    setFocused(t) {
        E(this, Gn) !== t && (_(this, Gn, t),
        this.onFocus())
    }
    onFocus() {
        const t = this.isFocused();
        this.listeners.forEach(n => {
            n(t)
        }
        )
    }
    isFocused() {
        var t;
        return typeof E(this, Gn) == "boolean" ? E(this, Gn) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
    }
}
,
Gn = new WeakMap,
cn = new WeakMap,
Qr = new WeakMap,
Ip), Uc = new O1, Kr, dn, Gr, Fp, A1 = (Fp = class extends wo {
    constructor() {
        super();
        z(this, Kr, !0);
        z(this, dn);
        z(this, Gr);
        _(this, Gr, t => {
            if (!ur && window.addEventListener) {
                const n = () => t(!0)
                  , r = () => t(!1);
                return window.addEventListener("online", n, !1),
                window.addEventListener("offline", r, !1),
                () => {
                    window.removeEventListener("online", n),
                    window.removeEventListener("offline", r)
                }
            }
        }
        )
    }
    onSubscribe() {
        E(this, dn) || this.setEventListener(E(this, Gr))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = E(this, dn)) == null || t.call(this),
        _(this, dn, void 0))
    }
    setEventListener(t) {
        var n;
        _(this, Gr, t),
        (n = E(this, dn)) == null || n.call(this),
        _(this, dn, t(this.setOnline.bind(this)))
    }
    setOnline(t) {
        E(this, Kr) !== t && (_(this, Kr, t),
        this.listeners.forEach(r => {
            r(t)
        }
        ))
    }
    isOnline() {
        return E(this, Kr)
    }
}
,
Kr = new WeakMap,
dn = new WeakMap,
Gr = new WeakMap,
Fp), Yi = new A1;
function xu() {
    let e, t;
    const n = new Promise( (o, s) => {
        e = o,
        t = s
    }
    );
    n.status = "pending",
    n.catch( () => {}
    );
    function r(o) {
        Object.assign(n, o),
        delete n.resolve,
        delete n.reject
    }
    return n.resolve = o => {
        r({
            status: "fulfilled",
            value: o
        }),
        e(o)
    }
    ,
    n.reject = o => {
        r({
            status: "rejected",
            reason: o
        }),
        t(o)
    }
    ,
    n
}
function _1(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
function bg(e) {
    return (e ?? "online") === "online" ? Yi.isOnline() : !0
}
var Eg = class extends Error {
    constructor(e) {
        super("CancelledError"),
        this.revert = e == null ? void 0 : e.revert,
        this.silent = e == null ? void 0 : e.silent
    }
}
;
function ua(e) {
    return e instanceof Eg
}
function Cg(e) {
    let t = !1, n = 0, r = !1, o;
    const s = xu()
      , i = v => {
        var w;
        r || (g(new Eg(v)),
        (w = e.abort) == null || w.call(e))
    }
      , l = () => {
        t = !0
    }
      , u = () => {
        t = !1
    }
      , c = () => Uc.isFocused() && (e.networkMode === "always" || Yi.isOnline()) && e.canRun()
      , d = () => bg(e.networkMode) && e.canRun()
      , f = v => {
        var w;
        r || (r = !0,
        (w = e.onSuccess) == null || w.call(e, v),
        o == null || o(),
        s.resolve(v))
    }
      , g = v => {
        var w;
        r || (r = !0,
        (w = e.onError) == null || w.call(e, v),
        o == null || o(),
        s.reject(v))
    }
      , x = () => new Promise(v => {
        var w;
        o = m => {
            (r || c()) && v(m)
        }
        ,
        (w = e.onPause) == null || w.call(e)
    }
    ).then( () => {
        var v;
        o = void 0,
        r || (v = e.onContinue) == null || v.call(e)
    }
    )
      , S = () => {
        if (r)
            return;
        let v;
        const w = n === 0 ? e.initialPromise : void 0;
        try {
            v = w ?? e.fn()
        } catch (m) {
            v = Promise.reject(m)
        }
        Promise.resolve(v).then(f).catch(m => {
            var k;
            if (r)
                return;
            const h = e.retry ?? (ur ? 0 : 3)
              , y = e.retryDelay ?? _1
              , b = typeof y == "function" ? y(n, m) : y
              , C = h === !0 || typeof h == "number" && n < h || typeof h == "function" && h(n, m);
            if (t || !C) {
                g(m);
                return
            }
            n++,
            (k = e.onFail) == null || k.call(e, n, m),
            P1(b).then( () => c() ? void 0 : x()).then( () => {
                t ? g(m) : S()
            }
            )
        }
        )
    }
    ;
    return {
        promise: s,
        cancel: i,
        continue: () => (o == null || o(),
        s),
        cancelRetry: l,
        continueRetry: u,
        canStart: d,
        start: () => (d() ? S() : x().then(S),
        s)
    }
}
function D1() {
    let e = []
      , t = 0
      , n = l => {
        l()
    }
      , r = l => {
        l()
    }
      , o = l => setTimeout(l, 0);
    const s = l => {
        t ? e.push(l) : o( () => {
            n(l)
        }
        )
    }
      , i = () => {
        const l = e;
        e = [],
        l.length && o( () => {
            r( () => {
                l.forEach(u => {
                    n(u)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: l => {
            let u;
            t++;
            try {
                u = l()
            } finally {
                t--,
                t || i()
            }
            return u
        }
        ,
        batchCalls: l => (...u) => {
            s( () => {
                l(...u)
            }
            )
        }
        ,
        schedule: s,
        setNotifyFunction: l => {
            n = l
        }
        ,
        setBatchNotifyFunction: l => {
            r = l
        }
        ,
        setScheduler: l => {
            o = l
        }
    }
}
var ge = D1(), qn, zp, Ng = (zp = class {
    constructor() {
        z(this, qn)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        gu(this.gcTime) && _(this, qn, setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (ur ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
        E(this, qn) && (clearTimeout(E(this, qn)),
        _(this, qn, void 0))
    }
}
,
qn = new WeakMap,
zp), qr, Yr, et, je, ws, Yn, ft, It, $p, M1 = ($p = class extends Ng {
    constructor(t) {
        super();
        z(this, ft);
        z(this, qr);
        z(this, Yr);
        z(this, et);
        z(this, je);
        z(this, ws);
        z(this, Yn);
        _(this, Yn, !1),
        _(this, ws, t.defaultOptions),
        this.setOptions(t.options),
        this.observers = [],
        _(this, et, t.cache),
        this.queryKey = t.queryKey,
        this.queryHash = t.queryHash,
        _(this, qr, L1(this.options)),
        this.state = t.state ?? E(this, qr),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var t;
        return (t = E(this, je)) == null ? void 0 : t.promise
    }
    setOptions(t) {
        this.options = {
            ...E(this, ws),
            ...t
        },
        this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && E(this, et).remove(this)
    }
    setData(t, n) {
        const r = yu(this.state.data, t, this.options);
        return B(this, ft, It).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual
        }),
        r
    }
    setState(t, n) {
        B(this, ft, It).call(this, {
            type: "setState",
            state: t,
            setStateOptions: n
        })
    }
    cancel(t) {
        var r, o;
        const n = (r = E(this, je)) == null ? void 0 : r.promise;
        return (o = E(this, je)) == null || o.cancel(t),
        n ? n.then(tt).catch(tt) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(E(this, qr))
    }
    isActive() {
        return this.observers.some(t => mt(t.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === $c || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStale() {
        return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0
    }
    isStaleByTime(t=0) {
        return this.state.isInvalidated || this.state.data === void 0 || !xg(this.state.dataUpdatedAt, t)
    }
    onFocus() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = E(this, je)) == null || n.continue()
    }
    onOnline() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnReconnect());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = E(this, je)) == null || n.continue()
    }
    addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t),
        this.clearGcTimeout(),
        E(this, et).notify({
            type: "observerAdded",
            query: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t),
        this.observers.length || (E(this, je) && (E(this, Yn) ? E(this, je).cancel({
            revert: !0
        }) : E(this, je).cancelRetry()),
        this.scheduleGc()),
        E(this, et).notify({
            type: "observerRemoved",
            query: this,
            observer: t
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || B(this, ft, It).call(this, {
            type: "invalidate"
        })
    }
    fetch(t, n) {
        var u, c, d;
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (E(this, je))
                return E(this, je).continueRetry(),
                E(this, je).promise
        }
        if (t && this.setOptions(t),
        !this.options.queryFn) {
            const f = this.observers.find(g => g.options.queryFn);
            f && this.setOptions(f.options)
        }
        const r = new AbortController
          , o = f => {
            Object.defineProperty(f, "signal", {
                enumerable: !0,
                get: () => (_(this, Yn, !0),
                r.signal)
            })
        }
          , s = () => {
            const f = Sg(this.options, n)
              , g = {
                queryKey: this.queryKey,
                meta: this.meta
            };
            return o(g),
            _(this, Yn, !1),
            this.options.persister ? this.options.persister(f, g, this) : f(g)
        }
          , i = {
            fetchOptions: n,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: s
        };
        o(i),
        (u = this.options.behavior) == null || u.onFetch(i, this),
        _(this, Yr, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((c = i.fetchOptions) == null ? void 0 : c.meta)) && B(this, ft, It).call(this, {
            type: "fetch",
            meta: (d = i.fetchOptions) == null ? void 0 : d.meta
        });
        const l = f => {
            var g, x, S, v;
            ua(f) && f.silent || B(this, ft, It).call(this, {
                type: "error",
                error: f
            }),
            ua(f) || ((x = (g = E(this, et).config).onError) == null || x.call(g, f, this),
            (v = (S = E(this, et).config).onSettled) == null || v.call(S, this.state.data, f, this)),
            this.scheduleGc()
        }
        ;
        return _(this, je, Cg({
            initialPromise: n == null ? void 0 : n.initialPromise,
            fn: i.fetchFn,
            abort: r.abort.bind(r),
            onSuccess: f => {
                var g, x, S, v;
                if (f === void 0) {
                    l(new Error(`${this.queryHash} data is undefined`));
                    return
                }
                try {
                    this.setData(f)
                } catch (w) {
                    l(w);
                    return
                }
                (x = (g = E(this, et).config).onSuccess) == null || x.call(g, f, this),
                (v = (S = E(this, et).config).onSettled) == null || v.call(S, f, this.state.error, this),
                this.scheduleGc()
            }
            ,
            onError: l,
            onFail: (f, g) => {
                B(this, ft, It).call(this, {
                    type: "failed",
                    failureCount: f,
                    error: g
                })
            }
            ,
            onPause: () => {
                B(this, ft, It).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                B(this, ft, It).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: i.options.retry,
            retryDelay: i.options.retryDelay,
            networkMode: i.options.networkMode,
            canRun: () => !0
        })),
        E(this, je).start()
    }
}
,
qr = new WeakMap,
Yr = new WeakMap,
et = new WeakMap,
je = new WeakMap,
ws = new WeakMap,
Yn = new WeakMap,
ft = new WeakSet,
It = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                fetchFailureCount: t.failureCount,
                fetchFailureReason: t.error
            };
        case "pause":
            return {
                ...r,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...r,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...r,
                ...kg(r.data, this.options),
                fetchMeta: t.meta ?? null
            };
        case "success":
            return {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...!t.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
        case "error":
            const o = t.error;
            return ua(o) && o.revert && E(this, Yr) ? {
                ...E(this, Yr),
                fetchStatus: "idle"
            } : {
                ...r,
                error: o,
                errorUpdateCount: r.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: r.fetchFailureCount + 1,
                fetchFailureReason: o,
                fetchStatus: "idle",
                status: "error"
            };
        case "invalidate":
            return {
                ...r,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...r,
                ...t.state
            }
        }
    }
    ;
    this.state = n(this.state),
    ge.batch( () => {
        this.observers.forEach(r => {
            r.onQueryUpdate()
        }
        ),
        E(this, et).notify({
            query: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
$p);
function kg(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: bg(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function L1(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData
      , n = t !== void 0
      , r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var Ct, Up, I1 = (Up = class extends wo {
    constructor(t={}) {
        super();
        z(this, Ct);
        this.config = t,
        _(this, Ct, new Map)
    }
    build(t, n, r) {
        const o = n.queryKey
          , s = n.queryHash ?? zc(o, n);
        let i = this.get(s);
        return i || (i = new M1({
            cache: this,
            queryKey: o,
            queryHash: s,
            options: t.defaultQueryOptions(n),
            state: r,
            defaultOptions: t.getQueryDefaults(o)
        }),
        this.add(i)),
        i
    }
    add(t) {
        E(this, Ct).has(t.queryHash) || (E(this, Ct).set(t.queryHash, t),
        this.notify({
            type: "added",
            query: t
        }))
    }
    remove(t) {
        const n = E(this, Ct).get(t.queryHash);
        n && (t.destroy(),
        n === t && E(this, Ct).delete(t.queryHash),
        this.notify({
            type: "removed",
            query: t
        }))
    }
    clear() {
        ge.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    get(t) {
        return E(this, Ct).get(t)
    }
    getAll() {
        return [...E(this, Ct).values()]
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => Zf(n, r))
    }
    findAll(t={}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter(r => Zf(t, r)) : n
    }
    notify(t) {
        ge.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    onFocus() {
        ge.batch( () => {
            this.getAll().forEach(t => {
                t.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        ge.batch( () => {
            this.getAll().forEach(t => {
                t.onOnline()
            }
            )
        }
        )
    }
}
,
Ct = new WeakMap,
Up), Nt, Re, Xn, kt, rn, Bp, F1 = (Bp = class extends Ng {
    constructor(t) {
        super();
        z(this, kt);
        z(this, Nt);
        z(this, Re);
        z(this, Xn);
        this.mutationId = t.mutationId,
        _(this, Re, t.mutationCache),
        _(this, Nt, []),
        this.state = t.state || jg(),
        this.setOptions(t.options),
        this.scheduleGc()
    }
    setOptions(t) {
        this.options = t,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(t) {
        E(this, Nt).includes(t) || (E(this, Nt).push(t),
        this.clearGcTimeout(),
        E(this, Re).notify({
            type: "observerAdded",
            mutation: this,
            observer: t
        }))
    }
    removeObserver(t) {
        _(this, Nt, E(this, Nt).filter(n => n !== t)),
        this.scheduleGc(),
        E(this, Re).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t
        })
    }
    optionalRemove() {
        E(this, Nt).length || (this.state.status === "pending" ? this.scheduleGc() : E(this, Re).remove(this))
    }
    continue() {
        var t;
        return ((t = E(this, Xn)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
    }
    async execute(t) {
        var o, s, i, l, u, c, d, f, g, x, S, v, w, m, h, y, b, C, k, N;
        _(this, Xn, Cg({
            fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
            onFail: (j, R) => {
                B(this, kt, rn).call(this, {
                    type: "failed",
                    failureCount: j,
                    error: R
                })
            }
            ,
            onPause: () => {
                B(this, kt, rn).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                B(this, kt, rn).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => E(this, Re).canRun(this)
        }));
        const n = this.state.status === "pending"
          , r = !E(this, Xn).canStart();
        try {
            if (!n) {
                B(this, kt, rn).call(this, {
                    type: "pending",
                    variables: t,
                    isPaused: r
                }),
                await ((s = (o = E(this, Re).config).onMutate) == null ? void 0 : s.call(o, t, this));
                const R = await ((l = (i = this.options).onMutate) == null ? void 0 : l.call(i, t));
                R !== this.state.context && B(this, kt, rn).call(this, {
                    type: "pending",
                    context: R,
                    variables: t,
                    isPaused: r
                })
            }
            const j = await E(this, Xn).start();
            return await ((c = (u = E(this, Re).config).onSuccess) == null ? void 0 : c.call(u, j, t, this.state.context, this)),
            await ((f = (d = this.options).onSuccess) == null ? void 0 : f.call(d, j, t, this.state.context)),
            await ((x = (g = E(this, Re).config).onSettled) == null ? void 0 : x.call(g, j, null, this.state.variables, this.state.context, this)),
            await ((v = (S = this.options).onSettled) == null ? void 0 : v.call(S, j, null, t, this.state.context)),
            B(this, kt, rn).call(this, {
                type: "success",
                data: j
            }),
            j
        } catch (j) {
            try {
                throw await ((m = (w = E(this, Re).config).onError) == null ? void 0 : m.call(w, j, t, this.state.context, this)),
                await ((y = (h = this.options).onError) == null ? void 0 : y.call(h, j, t, this.state.context)),
                await ((C = (b = E(this, Re).config).onSettled) == null ? void 0 : C.call(b, void 0, j, this.state.variables, this.state.context, this)),
                await ((N = (k = this.options).onSettled) == null ? void 0 : N.call(k, void 0, j, t, this.state.context)),
                j
            } finally {
                B(this, kt, rn).call(this, {
                    type: "error",
                    error: j
                })
            }
        } finally {
            E(this, Re).runNext(this)
        }
    }
}
,
Nt = new WeakMap,
Re = new WeakMap,
Xn = new WeakMap,
kt = new WeakSet,
rn = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                failureCount: t.failureCount,
                failureReason: t.error
            };
        case "pause":
            return {
                ...r,
                isPaused: !0
            };
        case "continue":
            return {
                ...r,
                isPaused: !1
            };
        case "pending":
            return {
                ...r,
                context: t.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: t.isPaused,
                status: "pending",
                variables: t.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...r,
                data: t.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...r,
                data: void 0,
                error: t.error,
                failureCount: r.failureCount + 1,
                failureReason: t.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = n(this.state),
    ge.batch( () => {
        E(this, Nt).forEach(r => {
            r.onMutationUpdate(t)
        }
        ),
        E(this, Re).notify({
            mutation: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
Bp);
function jg() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var He, Ss, Vp, z1 = (Vp = class extends wo {
    constructor(t={}) {
        super();
        z(this, He);
        z(this, Ss);
        this.config = t,
        _(this, He, new Map),
        _(this, Ss, Date.now())
    }
    build(t, n, r) {
        const o = new F1({
            mutationCache: this,
            mutationId: ++Ds(this, Ss)._,
            options: t.defaultMutationOptions(n),
            state: r
        });
        return this.add(o),
        o
    }
    add(t) {
        const n = Zs(t)
          , r = E(this, He).get(n) ?? [];
        r.push(t),
        E(this, He).set(n, r),
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        var r;
        const n = Zs(t);
        if (E(this, He).has(n)) {
            const o = (r = E(this, He).get(n)) == null ? void 0 : r.filter(s => s !== t);
            o && (o.length === 0 ? E(this, He).delete(n) : E(this, He).set(n, o))
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        var r;
        const n = (r = E(this, He).get(Zs(t))) == null ? void 0 : r.find(o => o.state.status === "pending");
        return !n || n === t
    }
    runNext(t) {
        var r;
        const n = (r = E(this, He).get(Zs(t))) == null ? void 0 : r.find(o => o !== t && o.state.isPaused);
        return (n == null ? void 0 : n.continue()) ?? Promise.resolve()
    }
    clear() {
        ge.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    getAll() {
        return [...E(this, He).values()].flat()
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => Jf(n, r))
    }
    findAll(t={}) {
        return this.getAll().filter(n => Jf(t, n))
    }
    notify(t) {
        ge.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return ge.batch( () => Promise.all(t.map(n => n.continue().catch(tt))))
    }
}
,
He = new WeakMap,
Ss = new WeakMap,
Vp);
function Zs(e) {
    var t;
    return ((t = e.options.scope) == null ? void 0 : t.id) ?? String(e.mutationId)
}
function np(e) {
    return {
        onFetch: (t, n) => {
            var d, f, g, x, S;
            const r = t.options
              , o = (g = (f = (d = t.fetchOptions) == null ? void 0 : d.meta) == null ? void 0 : f.fetchMore) == null ? void 0 : g.direction
              , s = ((x = t.state.data) == null ? void 0 : x.pages) || []
              , i = ((S = t.state.data) == null ? void 0 : S.pageParams) || [];
            let l = {
                pages: [],
                pageParams: []
            }
              , u = 0;
            const c = async () => {
                let v = !1;
                const w = y => {
                    Object.defineProperty(y, "signal", {
                        enumerable: !0,
                        get: () => (t.signal.aborted ? v = !0 : t.signal.addEventListener("abort", () => {
                            v = !0
                        }
                        ),
                        t.signal)
                    })
                }
                  , m = Sg(t.options, t.fetchOptions)
                  , h = async (y, b, C) => {
                    if (v)
                        return Promise.reject();
                    if (b == null && y.pages.length)
                        return Promise.resolve(y);
                    const k = {
                        queryKey: t.queryKey,
                        pageParam: b,
                        direction: C ? "backward" : "forward",
                        meta: t.options.meta
                    };
                    w(k);
                    const N = await m(k)
                      , {maxPages: j} = t.options
                      , R = C ? R1 : T1;
                    return {
                        pages: R(y.pages, N, j),
                        pageParams: R(y.pageParams, b, j)
                    }
                }
                ;
                if (o && s.length) {
                    const y = o === "backward"
                      , b = y ? $1 : rp
                      , C = {
                        pages: s,
                        pageParams: i
                    }
                      , k = b(r, C);
                    l = await h(C, k, y)
                } else {
                    const y = e ?? s.length;
                    do {
                        const b = u === 0 ? i[0] ?? r.initialPageParam : rp(r, l);
                        if (u > 0 && b == null)
                            break;
                        l = await h(l, b),
                        u++
                    } while (u < y)
                }
                return l
            }
            ;
            t.options.persister ? t.fetchFn = () => {
                var v, w;
                return (w = (v = t.options).persister) == null ? void 0 : w.call(v, c, {
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            }
            : t.fetchFn = c
        }
    }
}
function rp(e, {pages: t, pageParams: n}) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}
function $1(e, {pages: t, pageParams: n}) {
    var r;
    return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}
var de, fn, pn, Xr, Zr, hn, Jr, eo, Hp, U1 = (Hp = class {
    constructor(e={}) {
        z(this, de);
        z(this, fn);
        z(this, pn);
        z(this, Xr);
        z(this, Zr);
        z(this, hn);
        z(this, Jr);
        z(this, eo);
        _(this, de, e.queryCache || new I1),
        _(this, fn, e.mutationCache || new z1),
        _(this, pn, e.defaultOptions || {}),
        _(this, Xr, new Map),
        _(this, Zr, new Map),
        _(this, hn, 0)
    }
    mount() {
        Ds(this, hn)._++,
        E(this, hn) === 1 && (_(this, Jr, Uc.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            E(this, de).onFocus())
        }
        )),
        _(this, eo, Yi.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            E(this, de).onOnline())
        }
        )))
    }
    unmount() {
        var e, t;
        Ds(this, hn)._--,
        E(this, hn) === 0 && ((e = E(this, Jr)) == null || e.call(this),
        _(this, Jr, void 0),
        (t = E(this, eo)) == null || t.call(this),
        _(this, eo, void 0))
    }
    isFetching(e) {
        return E(this, de).findAll({
            ...e,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(e) {
        return E(this, fn).findAll({
            ...e,
            status: "pending"
        }).length
    }
    getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = E(this, de).get(t.queryHash)) == null ? void 0 : n.state.data
    }
    ensureQueryData(e) {
        const t = this.getQueryData(e.queryKey);
        if (t === void 0)
            return this.fetchQuery(e);
        {
            const n = this.defaultQueryOptions(e)
              , r = E(this, de).build(this, n);
            return e.revalidateIfStale && r.isStaleByTime($r(n.staleTime, r)) && this.prefetchQuery(n),
            Promise.resolve(t)
        }
    }
    getQueriesData(e) {
        return E(this, de).findAll(e).map( ({queryKey: t, state: n}) => {
            const r = n.data;
            return [t, r]
        }
        )
    }
    setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({
            queryKey: e
        })
          , o = E(this, de).get(r.queryHash)
          , s = o == null ? void 0 : o.state.data
          , i = j1(t, s);
        if (i !== void 0)
            return E(this, de).build(this, r).setData(i, {
                ...n,
                manual: !0
            })
    }
    setQueriesData(e, t, n) {
        return ge.batch( () => E(this, de).findAll(e).map( ({queryKey: r}) => [r, this.setQueryData(r, t, n)]))
    }
    getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = E(this, de).get(t.queryHash)) == null ? void 0 : n.state
    }
    removeQueries(e) {
        const t = E(this, de);
        ge.batch( () => {
            t.findAll(e).forEach(n => {
                t.remove(n)
            }
            )
        }
        )
    }
    resetQueries(e, t) {
        const n = E(this, de)
          , r = {
            type: "active",
            ...e
        };
        return ge.batch( () => (n.findAll(e).forEach(o => {
            o.reset()
        }
        ),
        this.refetchQueries(r, t)))
    }
    cancelQueries(e={}, t={}) {
        const n = {
            revert: !0,
            ...t
        }
          , r = ge.batch( () => E(this, de).findAll(e).map(o => o.cancel(n)));
        return Promise.all(r).then(tt).catch(tt)
    }
    invalidateQueries(e={}, t={}) {
        return ge.batch( () => {
            if (E(this, de).findAll(e).forEach(r => {
                r.invalidate()
            }
            ),
            e.refetchType === "none")
                return Promise.resolve();
            const n = {
                ...e,
                type: e.refetchType ?? e.type ?? "active"
            };
            return this.refetchQueries(n, t)
        }
        )
    }
    refetchQueries(e={}, t) {
        const n = {
            ...t,
            cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ?? !0
        }
          , r = ge.batch( () => E(this, de).findAll(e).filter(o => !o.isDisabled()).map(o => {
            let s = o.fetch(void 0, n);
            return n.throwOnError || (s = s.catch(tt)),
            o.state.fetchStatus === "paused" ? Promise.resolve() : s
        }
        ));
        return Promise.all(r).then(tt)
    }
    fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = E(this, de).build(this, t);
        return n.isStaleByTime($r(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
    }
    prefetchQuery(e) {
        return this.fetchQuery(e).then(tt).catch(tt)
    }
    fetchInfiniteQuery(e) {
        return e.behavior = np(e.pages),
        this.fetchQuery(e)
    }
    prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(tt).catch(tt)
    }
    ensureInfiniteQueryData(e) {
        return e.behavior = np(e.pages),
        this.ensureQueryData(e)
    }
    resumePausedMutations() {
        return Yi.isOnline() ? E(this, fn).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return E(this, de)
    }
    getMutationCache() {
        return E(this, fn)
    }
    getDefaultOptions() {
        return E(this, pn)
    }
    setDefaultOptions(e) {
        _(this, pn, e)
    }
    setQueryDefaults(e, t) {
        E(this, Xr).set(cr(e), {
            queryKey: e,
            defaultOptions: t
        })
    }
    getQueryDefaults(e) {
        const t = [...E(this, Xr).values()];
        let n = {};
        return t.forEach(r => {
            ms(e, r.queryKey) && (n = {
                ...n,
                ...r.defaultOptions
            })
        }
        ),
        n
    }
    setMutationDefaults(e, t) {
        E(this, Zr).set(cr(e), {
            mutationKey: e,
            defaultOptions: t
        })
    }
    getMutationDefaults(e) {
        const t = [...E(this, Zr).values()];
        let n = {};
        return t.forEach(r => {
            ms(e, r.mutationKey) && (n = {
                ...n,
                ...r.defaultOptions
            })
        }
        ),
        n
    }
    defaultQueryOptions(e) {
        if (e._defaulted)
            return e;
        const t = {
            ...E(this, pn).queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0
        };
        return t.queryHash || (t.queryHash = zc(t.queryKey, t)),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
        t.enabled !== !0 && t.queryFn === $c && (t.enabled = !1),
        t
    }
    defaultMutationOptions(e) {
        return e != null && e._defaulted ? e : {
            ...E(this, pn).mutations,
            ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
            ...e,
            _defaulted: !0
        }
    }
    clear() {
        E(this, de).clear(),
        E(this, fn).clear()
    }
}
,
de = new WeakMap,
fn = new WeakMap,
pn = new WeakMap,
Xr = new WeakMap,
Zr = new WeakMap,
hn = new WeakMap,
Jr = new WeakMap,
eo = new WeakMap,
Hp), Ie, Q, bs, Oe, Zn, to, mn, jt, Es, no, ro, Jn, er, gn, oo, X, Uo, wu, Su, bu, Eu, Cu, Nu, ku, Pg, Wp, B1 = (Wp = class extends wo {
    constructor(t, n) {
        super();
        z(this, X);
        z(this, Ie);
        z(this, Q);
        z(this, bs);
        z(this, Oe);
        z(this, Zn);
        z(this, to);
        z(this, mn);
        z(this, jt);
        z(this, Es);
        z(this, no);
        z(this, ro);
        z(this, Jn);
        z(this, er);
        z(this, gn);
        z(this, oo, new Set);
        this.options = n,
        _(this, Ie, t),
        _(this, jt, null),
        _(this, mn, xu()),
        this.options.experimental_prefetchInRender || E(this, mn).reject(new Error("experimental_prefetchInRender feature flag is not enabled")),
        this.bindMethods(),
        this.setOptions(n)
    }
    bindMethods() {
        this.refetch = this.refetch.bind(this)
    }
    onSubscribe() {
        this.listeners.size === 1 && (E(this, Q).addObserver(this),
        op(E(this, Q), this.options) ? B(this, X, Uo).call(this) : this.updateResult(),
        B(this, X, Eu).call(this))
    }
    onUnsubscribe() {
        this.hasListeners() || this.destroy()
    }
    shouldFetchOnReconnect() {
        return ju(E(this, Q), this.options, this.options.refetchOnReconnect)
    }
    shouldFetchOnWindowFocus() {
        return ju(E(this, Q), this.options, this.options.refetchOnWindowFocus)
    }
    destroy() {
        this.listeners = new Set,
        B(this, X, Cu).call(this),
        B(this, X, Nu).call(this),
        E(this, Q).removeObserver(this)
    }
    setOptions(t, n) {
        const r = this.options
          , o = E(this, Q);
        if (this.options = E(this, Ie).defaultQueryOptions(t),
        this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof mt(this.options.enabled, E(this, Q)) != "boolean")
            throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
        B(this, X, ku).call(this),
        E(this, Q).setOptions(this.options),
        r._defaulted && !qi(this.options, r) && E(this, Ie).getQueryCache().notify({
            type: "observerOptionsUpdated",
            query: E(this, Q),
            observer: this
        });
        const s = this.hasListeners();
        s && sp(E(this, Q), o, this.options, r) && B(this, X, Uo).call(this),
        this.updateResult(n),
        s && (E(this, Q) !== o || mt(this.options.enabled, E(this, Q)) !== mt(r.enabled, E(this, Q)) || $r(this.options.staleTime, E(this, Q)) !== $r(r.staleTime, E(this, Q))) && B(this, X, wu).call(this);
        const i = B(this, X, Su).call(this);
        s && (E(this, Q) !== o || mt(this.options.enabled, E(this, Q)) !== mt(r.enabled, E(this, Q)) || i !== E(this, gn)) && B(this, X, bu).call(this, i)
    }
    getOptimisticResult(t) {
        const n = E(this, Ie).getQueryCache().build(E(this, Ie), t)
          , r = this.createResult(n, t);
        return H1(this, r) && (_(this, Oe, r),
        _(this, to, this.options),
        _(this, Zn, E(this, Q).state)),
        r
    }
    getCurrentResult() {
        return E(this, Oe)
    }
    trackResult(t, n) {
        const r = {};
        return Object.keys(t).forEach(o => {
            Object.defineProperty(r, o, {
                configurable: !1,
                enumerable: !0,
                get: () => (this.trackProp(o),
                n == null || n(o),
                t[o])
            })
        }
        ),
        r
    }
    trackProp(t) {
        E(this, oo).add(t)
    }
    getCurrentQuery() {
        return E(this, Q)
    }
    refetch({...t}={}) {
        return this.fetch({
            ...t
        })
    }
    fetchOptimistic(t) {
        const n = E(this, Ie).defaultQueryOptions(t)
          , r = E(this, Ie).getQueryCache().build(E(this, Ie), n);
        return r.fetch().then( () => this.createResult(r, n))
    }
    fetch(t) {
        return B(this, X, Uo).call(this, {
            ...t,
            cancelRefetch: t.cancelRefetch ?? !0
        }).then( () => (this.updateResult(),
        E(this, Oe)))
    }
    createResult(t, n) {
        var j;
        const r = E(this, Q)
          , o = this.options
          , s = E(this, Oe)
          , i = E(this, Zn)
          , l = E(this, to)
          , c = t !== r ? t.state : E(this, bs)
          , {state: d} = t;
        let f = {
            ...d
        }, g = !1, x;
        if (n._optimisticResults) {
            const R = this.hasListeners()
              , O = !R && op(t, n)
              , $ = R && sp(t, r, n, o);
            (O || $) && (f = {
                ...f,
                ...kg(d.data, t.options)
            }),
            n._optimisticResults === "isRestoring" && (f.fetchStatus = "idle")
        }
        let {error: S, errorUpdatedAt: v, status: w} = f;
        if (n.select && f.data !== void 0)
            if (s && f.data === (i == null ? void 0 : i.data) && n.select === E(this, Es))
                x = E(this, no);
            else
                try {
                    _(this, Es, n.select),
                    x = n.select(f.data),
                    x = yu(s == null ? void 0 : s.data, x, n),
                    _(this, no, x),
                    _(this, jt, null)
                } catch (R) {
                    _(this, jt, R)
                }
        else
            x = f.data;
        if (n.placeholderData !== void 0 && x === void 0 && w === "pending") {
            let R;
            if (s != null && s.isPlaceholderData && n.placeholderData === (l == null ? void 0 : l.placeholderData))
                R = s.data;
            else if (R = typeof n.placeholderData == "function" ? n.placeholderData((j = E(this, ro)) == null ? void 0 : j.state.data, E(this, ro)) : n.placeholderData,
            n.select && R !== void 0)
                try {
                    R = n.select(R),
                    _(this, jt, null)
                } catch (O) {
                    _(this, jt, O)
                }
            R !== void 0 && (w = "success",
            x = yu(s == null ? void 0 : s.data, R, n),
            g = !0)
        }
        E(this, jt) && (S = E(this, jt),
        x = E(this, no),
        v = Date.now(),
        w = "error");
        const m = f.fetchStatus === "fetching"
          , h = w === "pending"
          , y = w === "error"
          , b = h && m
          , C = x !== void 0
          , N = {
            status: w,
            fetchStatus: f.fetchStatus,
            isPending: h,
            isSuccess: w === "success",
            isError: y,
            isInitialLoading: b,
            isLoading: b,
            data: x,
            dataUpdatedAt: f.dataUpdatedAt,
            error: S,
            errorUpdatedAt: v,
            failureCount: f.fetchFailureCount,
            failureReason: f.fetchFailureReason,
            errorUpdateCount: f.errorUpdateCount,
            isFetched: f.dataUpdateCount > 0 || f.errorUpdateCount > 0,
            isFetchedAfterMount: f.dataUpdateCount > c.dataUpdateCount || f.errorUpdateCount > c.errorUpdateCount,
            isFetching: m,
            isRefetching: m && !h,
            isLoadingError: y && !C,
            isPaused: f.fetchStatus === "paused",
            isPlaceholderData: g,
            isRefetchError: y && C,
            isStale: Bc(t, n),
            refetch: this.refetch,
            promise: E(this, mn)
        };
        if (this.options.experimental_prefetchInRender) {
            const R = L => {
                N.status === "error" ? L.reject(N.error) : N.data !== void 0 && L.resolve(N.data)
            }
              , O = () => {
                const L = _(this, mn, N.promise = xu());
                R(L)
            }
              , $ = E(this, mn);
            switch ($.status) {
            case "pending":
                t.queryHash === r.queryHash && R($);
                break;
            case "fulfilled":
                (N.status === "error" || N.data !== $.value) && O();
                break;
            case "rejected":
                (N.status !== "error" || N.error !== $.reason) && O();
                break
            }
        }
        return N
    }
    updateResult(t) {
        const n = E(this, Oe)
          , r = this.createResult(E(this, Q), this.options);
        if (_(this, Zn, E(this, Q).state),
        _(this, to, this.options),
        E(this, Zn).data !== void 0 && _(this, ro, E(this, Q)),
        qi(r, n))
            return;
        _(this, Oe, r);
        const o = {}
          , s = () => {
            if (!n)
                return !0;
            const {notifyOnChangeProps: i} = this.options
              , l = typeof i == "function" ? i() : i;
            if (l === "all" || !l && !E(this, oo).size)
                return !0;
            const u = new Set(l ?? E(this, oo));
            return this.options.throwOnError && u.add("error"),
            Object.keys(E(this, Oe)).some(c => {
                const d = c;
                return E(this, Oe)[d] !== n[d] && u.has(d)
            }
            )
        }
        ;
        (t == null ? void 0 : t.listeners) !== !1 && s() && (o.listeners = !0),
        B(this, X, Pg).call(this, {
            ...o,
            ...t
        })
    }
    onQueryUpdate() {
        this.updateResult(),
        this.hasListeners() && B(this, X, Eu).call(this)
    }
}
,
Ie = new WeakMap,
Q = new WeakMap,
bs = new WeakMap,
Oe = new WeakMap,
Zn = new WeakMap,
to = new WeakMap,
mn = new WeakMap,
jt = new WeakMap,
Es = new WeakMap,
no = new WeakMap,
ro = new WeakMap,
Jn = new WeakMap,
er = new WeakMap,
gn = new WeakMap,
oo = new WeakMap,
X = new WeakSet,
Uo = function(t) {
    B(this, X, ku).call(this);
    let n = E(this, Q).fetch(this.options, t);
    return t != null && t.throwOnError || (n = n.catch(tt)),
    n
}
,
wu = function() {
    B(this, X, Cu).call(this);
    const t = $r(this.options.staleTime, E(this, Q));
    if (ur || E(this, Oe).isStale || !gu(t))
        return;
    const r = xg(E(this, Oe).dataUpdatedAt, t) + 1;
    _(this, Jn, setTimeout( () => {
        E(this, Oe).isStale || this.updateResult()
    }
    , r))
}
,
Su = function() {
    return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(E(this, Q)) : this.options.refetchInterval) ?? !1
}
,
bu = function(t) {
    B(this, X, Nu).call(this),
    _(this, gn, t),
    !(ur || mt(this.options.enabled, E(this, Q)) === !1 || !gu(E(this, gn)) || E(this, gn) === 0) && _(this, er, setInterval( () => {
        (this.options.refetchIntervalInBackground || Uc.isFocused()) && B(this, X, Uo).call(this)
    }
    , E(this, gn)))
}
,
Eu = function() {
    B(this, X, wu).call(this),
    B(this, X, bu).call(this, B(this, X, Su).call(this))
}
,
Cu = function() {
    E(this, Jn) && (clearTimeout(E(this, Jn)),
    _(this, Jn, void 0))
}
,
Nu = function() {
    E(this, er) && (clearInterval(E(this, er)),
    _(this, er, void 0))
}
,
ku = function() {
    const t = E(this, Ie).getQueryCache().build(E(this, Ie), this.options);
    if (t === E(this, Q))
        return;
    const n = E(this, Q);
    _(this, Q, t),
    _(this, bs, t.state),
    this.hasListeners() && (n == null || n.removeObserver(this),
    t.addObserver(this))
}
,
Pg = function(t) {
    ge.batch( () => {
        t.listeners && this.listeners.forEach(n => {
            n(E(this, Oe))
        }
        ),
        E(this, Ie).getQueryCache().notify({
            query: E(this, Q),
            type: "observerResultsUpdated"
        })
    }
    )
}
,
Wp);
function V1(e, t) {
    return mt(t.enabled, e) !== !1 && e.state.data === void 0 && !(e.state.status === "error" && t.retryOnMount === !1)
}
function op(e, t) {
    return V1(e, t) || e.state.data !== void 0 && ju(e, t, t.refetchOnMount)
}
function ju(e, t, n) {
    if (mt(t.enabled, e) !== !1) {
        const r = typeof n == "function" ? n(e) : n;
        return r === "always" || r !== !1 && Bc(e, t)
    }
    return !1
}
function sp(e, t, n, r) {
    return (e !== t || mt(r.enabled, e) === !1) && (!n.suspense || e.state.status !== "error") && Bc(e, n)
}
function Bc(e, t) {
    return mt(t.enabled, e) !== !1 && e.isStaleByTime($r(t.staleTime, e))
}
function H1(e, t) {
    return !qi(e.getCurrentResult(), t)
}
var vn, yn, Fe, $t, Ht, yi, Pu, Qp, W1 = (Qp = class extends wo {
    constructor(n, r) {
        super();
        z(this, Ht);
        z(this, vn);
        z(this, yn);
        z(this, Fe);
        z(this, $t);
        _(this, vn, n),
        this.setOptions(r),
        this.bindMethods(),
        B(this, Ht, yi).call(this)
    }
    bindMethods() {
        this.mutate = this.mutate.bind(this),
        this.reset = this.reset.bind(this)
    }
    setOptions(n) {
        var o;
        const r = this.options;
        this.options = E(this, vn).defaultMutationOptions(n),
        qi(this.options, r) || E(this, vn).getMutationCache().notify({
            type: "observerOptionsUpdated",
            mutation: E(this, Fe),
            observer: this
        }),
        r != null && r.mutationKey && this.options.mutationKey && cr(r.mutationKey) !== cr(this.options.mutationKey) ? this.reset() : ((o = E(this, Fe)) == null ? void 0 : o.state.status) === "pending" && E(this, Fe).setOptions(this.options)
    }
    onUnsubscribe() {
        var n;
        this.hasListeners() || (n = E(this, Fe)) == null || n.removeObserver(this)
    }
    onMutationUpdate(n) {
        B(this, Ht, yi).call(this),
        B(this, Ht, Pu).call(this, n)
    }
    getCurrentResult() {
        return E(this, yn)
    }
    reset() {
        var n;
        (n = E(this, Fe)) == null || n.removeObserver(this),
        _(this, Fe, void 0),
        B(this, Ht, yi).call(this),
        B(this, Ht, Pu).call(this)
    }
    mutate(n, r) {
        var o;
        return _(this, $t, r),
        (o = E(this, Fe)) == null || o.removeObserver(this),
        _(this, Fe, E(this, vn).getMutationCache().build(E(this, vn), this.options)),
        E(this, Fe).addObserver(this),
        E(this, Fe).execute(n)
    }
}
,
vn = new WeakMap,
yn = new WeakMap,
Fe = new WeakMap,
$t = new WeakMap,
Ht = new WeakSet,
yi = function() {
    var r;
    const n = ((r = E(this, Fe)) == null ? void 0 : r.state) ?? jg();
    _(this, yn, {
        ...n,
        isPending: n.status === "pending",
        isSuccess: n.status === "success",
        isError: n.status === "error",
        isIdle: n.status === "idle",
        mutate: this.mutate,
        reset: this.reset
    })
}
,
Pu = function(n) {
    ge.batch( () => {
        var r, o, s, i, l, u, c, d;
        if (E(this, $t) && this.hasListeners()) {
            const f = E(this, yn).variables
              , g = E(this, yn).context;
            (n == null ? void 0 : n.type) === "success" ? ((o = (r = E(this, $t)).onSuccess) == null || o.call(r, n.data, f, g),
            (i = (s = E(this, $t)).onSettled) == null || i.call(s, n.data, null, f, g)) : (n == null ? void 0 : n.type) === "error" && ((u = (l = E(this, $t)).onError) == null || u.call(l, n.error, f, g),
            (d = (c = E(this, $t)).onSettled) == null || d.call(c, void 0, n.error, f, g))
        }
        this.listeners.forEach(f => {
            f(E(this, yn))
        }
        )
    }
    )
}
,
Qp), Tg = p.createContext(void 0), Rg = e => {
    const t = p.useContext(Tg);
    if (!t)
        throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return t
}
, Q1 = ({client: e, children: t}) => (p.useEffect( () => (e.mount(),
() => {
    e.unmount()
}
), [e]),
a.jsx(Tg.Provider, {
    value: e,
    children: t
})), Og = p.createContext(!1), K1 = () => p.useContext(Og);
Og.Provider;
function G1() {
    let e = !1;
    return {
        clearReset: () => {
            e = !1
        }
        ,
        reset: () => {
            e = !0
        }
        ,
        isReset: () => e
    }
}
var q1 = p.createContext(G1())
  , Y1 = () => p.useContext(q1);
function Ag(e, t) {
    return typeof e == "function" ? e(...t) : !!e
}
function Tu() {}
var X1 = (e, t) => {
    (e.suspense || e.throwOnError || e.experimental_prefetchInRender) && (t.isReset() || (e.retryOnMount = !1))
}
  , Z1 = e => {
    p.useEffect( () => {
        e.clearReset()
    }
    , [e])
}
  , J1 = ({result: e, errorResetBoundary: t, throwOnError: n, query: r}) => e.isError && !t.isReset() && !e.isFetching && r && Ag(n, [e.error, r])
  , eS = e => {
    e.suspense && (e.staleTime === void 0 && (e.staleTime = 1e3),
    typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, 1e3)))
}
  , tS = (e, t) => e.isLoading && e.isFetching && !t
  , nS = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending
  , ip = (e, t, n) => t.fetchOptimistic(e).catch( () => {
    n.clearReset()
}
);
function rS(e, t, n) {
    var d, f, g, x, S;
    const r = Rg()
      , o = K1()
      , s = Y1()
      , i = r.defaultQueryOptions(e);
    (f = (d = r.getDefaultOptions().queries) == null ? void 0 : d._experimental_beforeQuery) == null || f.call(d, i),
    i._optimisticResults = o ? "isRestoring" : "optimistic",
    eS(i),
    X1(i, s),
    Z1(s);
    const l = !r.getQueryCache().get(i.queryHash)
      , [u] = p.useState( () => new t(r,i))
      , c = u.getOptimisticResult(i);
    if (p.useSyncExternalStore(p.useCallback(v => {
        const w = o ? Tu : u.subscribe(ge.batchCalls(v));
        return u.updateResult(),
        w
    }
    , [u, o]), () => u.getCurrentResult(), () => u.getCurrentResult()),
    p.useEffect( () => {
        u.setOptions(i, {
            listeners: !1
        })
    }
    , [i, u]),
    nS(i, c))
        throw ip(i, u, s);
    if (J1({
        result: c,
        errorResetBoundary: s,
        throwOnError: i.throwOnError,
        query: r.getQueryCache().get(i.queryHash)
    }))
        throw c.error;
    if ((x = (g = r.getDefaultOptions().queries) == null ? void 0 : g._experimental_afterQuery) == null || x.call(g, i, c),
    i.experimental_prefetchInRender && !ur && tS(c, o)) {
        const v = l ? ip(i, u, s) : (S = r.getQueryCache().get(i.queryHash)) == null ? void 0 : S.promise;
        v == null || v.catch(Tu).finally( () => {
            u.updateResult()
        }
        )
    }
    return i.notifyOnChangeProps ? c : u.trackResult(c)
}
function Rn(e, t) {
    return rS(e, B1)
}
function _g(e, t) {
    const n = Rg()
      , [r] = p.useState( () => new W1(n,e));
    p.useEffect( () => {
        r.setOptions(e)
    }
    , [r, e]);
    const o = p.useSyncExternalStore(p.useCallback(i => r.subscribe(ge.batchCalls(i)), [r]), () => r.getCurrentResult(), () => r.getCurrentResult())
      , s = p.useCallback( (i, l) => {
        r.mutate(i, l).catch(Tu)
    }
    , [r]);
    if (o.error && Ag(r.options.throwOnError, [o.error]))
        throw o.error;
    return {
        ...o,
        mutate: s,
        mutateAsync: o.mutate
    }
}
async function Dg(e) {
    if (!e.ok) {
        const t = await e.text() || e.statusText;
        throw new Error(`${e.status}: ${t}`)
    }
}
async function Mg(e, t, n) {
    const r = await fetch(t, {
        method: e,
        headers: n ? {
            "Content-Type": "application/json"
        } : {},
        body: n ? JSON.stringify(n) : void 0,
        credentials: "include"
    });
    return await Dg(r),
    r
}
const oS = ({on401: e}) => async ({queryKey: t}) => {
    const n = await fetch(t.join("/"), {
        credentials: "include"
    });
    return e === "returnNull" && n.status === 401 ? null : (await Dg(n),
    await n.json())
}
  , Ur = new U1({
    defaultOptions: {
        queries: {
            queryFn: oS({
                on401: "throw"
            }),
            refetchInterval: !1,
            refetchOnWindowFocus: !1,
            staleTime: 1 / 0,
            retry: !1
        },
        mutations: {
            retry: !1
        }
    }
})
  , sS = 1
  , iS = 1e6;
let ca = 0;
function lS() {
    return ca = (ca + 1) % Number.MAX_SAFE_INTEGER,
    ca.toString()
}
const da = new Map
  , lp = e => {
    if (da.has(e))
        return;
    const t = setTimeout( () => {
        da.delete(e),
        Xo({
            type: "REMOVE_TOAST",
            toastId: e
        })
    }
    , iS);
    da.set(e, t)
}
  , aS = (e, t) => {
    switch (t.type) {
    case "ADD_TOAST":
        return {
            ...e,
            toasts: [t.toast, ...e.toasts].slice(0, sS)
        };
    case "UPDATE_TOAST":
        return {
            ...e,
            toasts: e.toasts.map(n => n.id === t.toast.id ? {
                ...n,
                ...t.toast
            } : n)
        };
    case "DISMISS_TOAST":
        {
            const {toastId: n} = t;
            return n ? lp(n) : e.toasts.forEach(r => {
                lp(r.id)
            }
            ),
            {
                ...e,
                toasts: e.toasts.map(r => r.id === n || n === void 0 ? {
                    ...r,
                    open: !1
                } : r)
            }
        }
    case "REMOVE_TOAST":
        return t.toastId === void 0 ? {
            ...e,
            toasts: []
        } : {
            ...e,
            toasts: e.toasts.filter(n => n.id !== t.toastId)
        }
    }
}
  , xi = [];
let wi = {
    toasts: []
};
function Xo(e) {
    wi = aS(wi, e),
    xi.forEach(t => {
        t(wi)
    }
    )
}
function uS({...e}) {
    const t = lS()
      , n = o => Xo({
        type: "UPDATE_TOAST",
        toast: {
            ...o,
            id: t
        }
    })
      , r = () => Xo({
        type: "DISMISS_TOAST",
        toastId: t
    });
    return Xo({
        type: "ADD_TOAST",
        toast: {
            ...e,
            id: t,
            open: !0,
            onOpenChange: o => {
                o || r()
            }
        }
    }),
    {
        id: t,
        dismiss: r,
        update: n
    }
}
function Vc() {
    const [e,t] = p.useState(wi);
    return p.useEffect( () => (xi.push(t),
    () => {
        const n = xi.indexOf(t);
        n > -1 && xi.splice(n, 1)
    }
    ), [e]),
    {
        ...e,
        toast: uS,
        dismiss: n => Xo({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}
function re(e, t, {checkForDefaultPrevented: n=!0}={}) {
    return function(o) {
        if (e == null || e(o),
        n === !1 || !o.defaultPrevented)
            return t == null ? void 0 : t(o)
    }
}
function ap(e, t) {
    if (typeof e == "function")
        return e(t);
    e != null && (e.current = t)
}
function Lg(...e) {
    return t => {
        let n = !1;
        const r = e.map(o => {
            const s = ap(o, t);
            return !n && typeof s == "function" && (n = !0),
            s
        }
        );
        if (n)
            return () => {
                for (let o = 0; o < r.length; o++) {
                    const s = r[o];
                    typeof s == "function" ? s() : ap(e[o], null)
                }
            }
    }
}
function Ce(...e) {
    return p.useCallback(Lg(...e), e)
}
function cS(e, t) {
    const n = p.createContext(t)
      , r = s => {
        const {children: i, ...l} = s
          , u = p.useMemo( () => l, Object.values(l));
        return a.jsx(n.Provider, {
            value: u,
            children: i
        })
    }
    ;
    r.displayName = e + "Provider";
    function o(s) {
        const i = p.useContext(n);
        if (i)
            return i;
        if (t !== void 0)
            return t;
        throw new Error(`\`${s}\` must be used within \`${e}\``)
    }
    return [r, o]
}
function gr(e, t=[]) {
    let n = [];
    function r(s, i) {
        const l = p.createContext(i)
          , u = n.length;
        n = [...n, i];
        const c = f => {
            var m;
            const {scope: g, children: x, ...S} = f
              , v = ((m = g == null ? void 0 : g[e]) == null ? void 0 : m[u]) || l
              , w = p.useMemo( () => S, Object.values(S));
            return a.jsx(v.Provider, {
                value: w,
                children: x
            })
        }
        ;
        c.displayName = s + "Provider";
        function d(f, g) {
            var v;
            const x = ((v = g == null ? void 0 : g[e]) == null ? void 0 : v[u]) || l
              , S = p.useContext(x);
            if (S)
                return S;
            if (i !== void 0)
                return i;
            throw new Error(`\`${f}\` must be used within \`${s}\``)
        }
        return [c, d]
    }
    const o = () => {
        const s = n.map(i => p.createContext(i));
        return function(l) {
            const u = (l == null ? void 0 : l[e]) || s;
            return p.useMemo( () => ({
                [`__scope${e}`]: {
                    ...l,
                    [e]: u
                }
            }), [l, u])
        }
    }
    ;
    return o.scopeName = e,
    [r, dS(o, ...t)]
}
function dS(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(s) {
            const i = r.reduce( (l, {useScope: u, scopeName: c}) => {
                const f = u(s)[`__scope${c}`];
                return {
                    ...l,
                    ...f
                }
            }
            , {});
            return p.useMemo( () => ({
                [`__scope${t.scopeName}`]: i
            }), [i])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
function gs(e) {
    const t = fS(e)
      , n = p.forwardRef( (r, o) => {
        const {children: s, ...i} = r
          , l = p.Children.toArray(s)
          , u = l.find(pS);
        if (u) {
            const c = u.props.children
              , d = l.map(f => f === u ? p.Children.count(c) > 1 ? p.Children.only(null) : p.isValidElement(c) ? c.props.children : null : f);
            return a.jsx(t, {
                ...i,
                ref: o,
                children: p.isValidElement(c) ? p.cloneElement(c, void 0, d) : null
            })
        }
        return a.jsx(t, {
            ...i,
            ref: o,
            children: s
        })
    }
    );
    return n.displayName = `${e}.Slot`,
    n
}
var Hc = gs("Slot");
function fS(e) {
    const t = p.forwardRef( (n, r) => {
        const {children: o, ...s} = n;
        if (p.isValidElement(o)) {
            const i = mS(o)
              , l = hS(s, o.props);
            return o.type !== p.Fragment && (l.ref = r ? Lg(r, i) : i),
            p.cloneElement(o, l)
        }
        return p.Children.count(o) > 1 ? p.Children.only(null) : null
    }
    );
    return t.displayName = `${e}.SlotClone`,
    t
}
var Ig = Symbol("radix.slottable");
function Fg(e) {
    const t = ({children: n}) => a.jsx(a.Fragment, {
        children: n
    });
    return t.displayName = `${e}.Slottable`,
    t.__radixId = Ig,
    t
}
function pS(e) {
    return p.isValidElement(e) && typeof e.type == "function" && "__radixId"in e.type && e.type.__radixId === Ig
}
function hS(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const o = e[r]
          , s = t[r];
        /^on[A-Z]/.test(r) ? o && s ? n[r] = (...l) => {
            s(...l),
            o(...l)
        }
        : o && (n[r] = o) : r === "style" ? n[r] = {
            ...o,
            ...s
        } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}
function mS(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function gS(e) {
    const t = e + "CollectionProvider"
      , [n,r] = gr(t)
      , [o,s] = n(t, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , i = v => {
        const {scope: w, children: m} = v
          , h = nn.useRef(null)
          , y = nn.useRef(new Map).current;
        return a.jsx(o, {
            scope: w,
            itemMap: y,
            collectionRef: h,
            children: m
        })
    }
    ;
    i.displayName = t;
    const l = e + "CollectionSlot"
      , u = gs(l)
      , c = nn.forwardRef( (v, w) => {
        const {scope: m, children: h} = v
          , y = s(l, m)
          , b = Ce(w, y.collectionRef);
        return a.jsx(u, {
            ref: b,
            children: h
        })
    }
    );
    c.displayName = l;
    const d = e + "CollectionItemSlot"
      , f = "data-radix-collection-item"
      , g = gs(d)
      , x = nn.forwardRef( (v, w) => {
        const {scope: m, children: h, ...y} = v
          , b = nn.useRef(null)
          , C = Ce(w, b)
          , k = s(d, m);
        return nn.useEffect( () => (k.itemMap.set(b, {
            ref: b,
            ...y
        }),
        () => void k.itemMap.delete(b))),
        a.jsx(g, {
            [f]: "",
            ref: C,
            children: h
        })
    }
    );
    x.displayName = d;
    function S(v) {
        const w = s(e + "CollectionConsumer", v);
        return nn.useCallback( () => {
            const h = w.collectionRef.current;
            if (!h)
                return [];
            const y = Array.from(h.querySelectorAll(`[${f}]`));
            return Array.from(w.itemMap.values()).sort( (k, N) => y.indexOf(k.ref.current) - y.indexOf(N.ref.current))
        }
        , [w.collectionRef, w.itemMap])
    }
    return [{
        Provider: i,
        Slot: c,
        ItemSlot: x
    }, S, r]
}
var vS = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"]
  , ce = vS.reduce( (e, t) => {
    const n = gs(`Primitive.${t}`)
      , r = p.forwardRef( (o, s) => {
        const {asChild: i, ...l} = o
          , u = i ? n : t;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        a.jsx(u, {
            ...l,
            ref: s
        })
    }
    );
    return r.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: r
    }
}
, {});
function zg(e, t) {
    e && Ts.flushSync( () => e.dispatchEvent(t))
}
function at(e) {
    const t = p.useRef(e);
    return p.useEffect( () => {
        t.current = e
    }
    ),
    p.useMemo( () => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }
    , [])
}
function yS(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = at(e);
    p.useEffect( () => {
        const r = o => {
            o.key === "Escape" && n(o)
        }
        ;
        return t.addEventListener("keydown", r, {
            capture: !0
        }),
        () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }
    , [n, t])
}
var xS = "DismissableLayer", Ru = "dismissableLayer.update", wS = "dismissableLayer.pointerDownOutside", SS = "dismissableLayer.focusOutside", up, $g = p.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), El = p.forwardRef( (e, t) => {
    const {disableOutsidePointerEvents: n=!1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: s, onInteractOutside: i, onDismiss: l, ...u} = e
      , c = p.useContext($g)
      , [d,f] = p.useState(null)
      , g = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , [,x] = p.useState({})
      , S = Ce(t, N => f(N))
      , v = Array.from(c.layers)
      , [w] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1)
      , m = v.indexOf(w)
      , h = d ? v.indexOf(d) : -1
      , y = c.layersWithOutsidePointerEventsDisabled.size > 0
      , b = h >= m
      , C = ES(N => {
        const j = N.target
          , R = [...c.branches].some(O => O.contains(j));
        !b || R || (o == null || o(N),
        i == null || i(N),
        N.defaultPrevented || l == null || l())
    }
    , g)
      , k = CS(N => {
        const j = N.target;
        [...c.branches].some(O => O.contains(j)) || (s == null || s(N),
        i == null || i(N),
        N.defaultPrevented || l == null || l())
    }
    , g);
    return yS(N => {
        h === c.layers.size - 1 && (r == null || r(N),
        !N.defaultPrevented && l && (N.preventDefault(),
        l()))
    }
    , g),
    p.useEffect( () => {
        if (d)
            return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (up = g.body.style.pointerEvents,
            g.body.style.pointerEvents = "none"),
            c.layersWithOutsidePointerEventsDisabled.add(d)),
            c.layers.add(d),
            cp(),
            () => {
                n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (g.body.style.pointerEvents = up)
            }
    }
    , [d, g, n, c]),
    p.useEffect( () => () => {
        d && (c.layers.delete(d),
        c.layersWithOutsidePointerEventsDisabled.delete(d),
        cp())
    }
    , [d, c]),
    p.useEffect( () => {
        const N = () => x({});
        return document.addEventListener(Ru, N),
        () => document.removeEventListener(Ru, N)
    }
    , []),
    a.jsx(ce.div, {
        ...u,
        ref: S,
        style: {
            pointerEvents: y ? b ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: re(e.onFocusCapture, k.onFocusCapture),
        onBlurCapture: re(e.onBlurCapture, k.onBlurCapture),
        onPointerDownCapture: re(e.onPointerDownCapture, C.onPointerDownCapture)
    })
}
);
El.displayName = xS;
var bS = "DismissableLayerBranch"
  , Ug = p.forwardRef( (e, t) => {
    const n = p.useContext($g)
      , r = p.useRef(null)
      , o = Ce(t, r);
    return p.useEffect( () => {
        const s = r.current;
        if (s)
            return n.branches.add(s),
            () => {
                n.branches.delete(s)
            }
    }
    , [n.branches]),
    a.jsx(ce.div, {
        ...e,
        ref: o
    })
}
);
Ug.displayName = bS;
function ES(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = at(e)
      , r = p.useRef(!1)
      , o = p.useRef( () => {}
    );
    return p.useEffect( () => {
        const s = l => {
            if (l.target && !r.current) {
                let u = function() {
                    Bg(wS, n, c, {
                        discrete: !0
                    })
                };
                const c = {
                    originalEvent: l
                };
                l.pointerType === "touch" ? (t.removeEventListener("click", o.current),
                o.current = u,
                t.addEventListener("click", o.current, {
                    once: !0
                })) : u()
            } else
                t.removeEventListener("click", o.current);
            r.current = !1
        }
          , i = window.setTimeout( () => {
            t.addEventListener("pointerdown", s)
        }
        , 0);
        return () => {
            window.clearTimeout(i),
            t.removeEventListener("pointerdown", s),
            t.removeEventListener("click", o.current)
        }
    }
    , [t, n]),
    {
        onPointerDownCapture: () => r.current = !0
    }
}
function CS(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = at(e)
      , r = p.useRef(!1);
    return p.useEffect( () => {
        const o = s => {
            s.target && !r.current && Bg(SS, n, {
                originalEvent: s
            }, {
                discrete: !1
            })
        }
        ;
        return t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
    }
    , [t, n]),
    {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}
function cp() {
    const e = new CustomEvent(Ru);
    document.dispatchEvent(e)
}
function Bg(e, t, n, {discrete: r}) {
    const o = n.originalEvent.target
      , s = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? zg(o, s) : o.dispatchEvent(s)
}
var NS = El
  , kS = Ug
  , Dn = globalThis != null && globalThis.document ? p.useLayoutEffect : () => {}
  , jS = "Portal"
  , Wc = p.forwardRef( (e, t) => {
    var l;
    const {container: n, ...r} = e
      , [o,s] = p.useState(!1);
    Dn( () => s(!0), []);
    const i = n || o && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body);
    return i ? Gw.createPortal(a.jsx(ce.div, {
        ...r,
        ref: t
    }), i) : null
}
);
Wc.displayName = jS;
function PS(e, t) {
    return p.useReducer( (n, r) => t[n][r] ?? n, e)
}
var So = e => {
    const {present: t, children: n} = e
      , r = TS(t)
      , o = typeof n == "function" ? n({
        present: r.isPresent
    }) : p.Children.only(n)
      , s = Ce(r.ref, RS(o));
    return typeof n == "function" || r.isPresent ? p.cloneElement(o, {
        ref: s
    }) : null
}
;
So.displayName = "Presence";
function TS(e) {
    const [t,n] = p.useState()
      , r = p.useRef({})
      , o = p.useRef(e)
      , s = p.useRef("none")
      , i = e ? "mounted" : "unmounted"
      , [l,u] = PS(i, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return p.useEffect( () => {
        const c = Js(r.current);
        s.current = l === "mounted" ? c : "none"
    }
    , [l]),
    Dn( () => {
        const c = r.current
          , d = o.current;
        if (d !== e) {
            const g = s.current
              , x = Js(c);
            e ? u("MOUNT") : x === "none" || (c == null ? void 0 : c.display) === "none" ? u("UNMOUNT") : u(d && g !== x ? "ANIMATION_OUT" : "UNMOUNT"),
            o.current = e
        }
    }
    , [e, u]),
    Dn( () => {
        if (t) {
            let c;
            const d = t.ownerDocument.defaultView ?? window
              , f = x => {
                const v = Js(r.current).includes(x.animationName);
                if (x.target === t && v && (u("ANIMATION_END"),
                !o.current)) {
                    const w = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards",
                    c = d.setTimeout( () => {
                        t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w)
                    }
                    )
                }
            }
              , g = x => {
                x.target === t && (s.current = Js(r.current))
            }
            ;
            return t.addEventListener("animationstart", g),
            t.addEventListener("animationcancel", f),
            t.addEventListener("animationend", f),
            () => {
                d.clearTimeout(c),
                t.removeEventListener("animationstart", g),
                t.removeEventListener("animationcancel", f),
                t.removeEventListener("animationend", f)
            }
        } else
            u("ANIMATION_END")
    }
    , [t, u]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(l),
        ref: p.useCallback(c => {
            c && (r.current = getComputedStyle(c)),
            n(c)
        }
        , [])
    }
}
function Js(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function RS(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function Qc({prop: e, defaultProp: t, onChange: n= () => {}
}) {
    const [r,o] = OS({
        defaultProp: t,
        onChange: n
    })
      , s = e !== void 0
      , i = s ? e : r
      , l = at(n)
      , u = p.useCallback(c => {
        if (s) {
            const f = typeof c == "function" ? c(e) : c;
            f !== e && l(f)
        } else
            o(c)
    }
    , [s, e, o, l]);
    return [i, u]
}
function OS({defaultProp: e, onChange: t}) {
    const n = p.useState(e)
      , [r] = n
      , o = p.useRef(r)
      , s = at(t);
    return p.useEffect( () => {
        o.current !== r && (s(r),
        o.current = r)
    }
    , [r, o, s]),
    n
}
var AS = "VisuallyHidden"
  , Cl = p.forwardRef( (e, t) => a.jsx(ce.span, {
    ...e,
    ref: t,
    style: {
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style
    }
}));
Cl.displayName = AS;
var _S = Cl
  , Kc = "ToastProvider"
  , [Gc,DS,MS] = gS("Toast")
  , [Vg,J2] = gr("Toast", [MS])
  , [LS,Nl] = Vg(Kc)
  , Hg = e => {
    const {__scopeToast: t, label: n="Notification", duration: r=5e3, swipeDirection: o="right", swipeThreshold: s=50, children: i} = e
      , [l,u] = p.useState(null)
      , [c,d] = p.useState(0)
      , f = p.useRef(!1)
      , g = p.useRef(!1);
    return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${Kc}\`. Expected non-empty \`string\`.`),
    a.jsx(Gc.Provider, {
        scope: t,
        children: a.jsx(LS, {
            scope: t,
            label: n,
            duration: r,
            swipeDirection: o,
            swipeThreshold: s,
            toastCount: c,
            viewport: l,
            onViewportChange: u,
            onToastAdd: p.useCallback( () => d(x => x + 1), []),
            onToastRemove: p.useCallback( () => d(x => x - 1), []),
            isFocusedToastEscapeKeyDownRef: f,
            isClosePausedRef: g,
            children: i
        })
    })
}
;
Hg.displayName = Kc;
var Wg = "ToastViewport"
  , IS = ["F8"]
  , Ou = "toast.viewportPause"
  , Au = "toast.viewportResume"
  , Qg = p.forwardRef( (e, t) => {
    const {__scopeToast: n, hotkey: r=IS, label: o="Notifications ({hotkey})", ...s} = e
      , i = Nl(Wg, n)
      , l = DS(n)
      , u = p.useRef(null)
      , c = p.useRef(null)
      , d = p.useRef(null)
      , f = p.useRef(null)
      , g = Ce(t, f, i.onViewportChange)
      , x = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , S = i.toastCount > 0;
    p.useEffect( () => {
        const w = m => {
            var y;
            r.length !== 0 && r.every(b => m[b] || m.code === b) && ((y = f.current) == null || y.focus())
        }
        ;
        return document.addEventListener("keydown", w),
        () => document.removeEventListener("keydown", w)
    }
    , [r]),
    p.useEffect( () => {
        const w = u.current
          , m = f.current;
        if (S && w && m) {
            const h = () => {
                if (!i.isClosePausedRef.current) {
                    const k = new CustomEvent(Ou);
                    m.dispatchEvent(k),
                    i.isClosePausedRef.current = !0
                }
            }
              , y = () => {
                if (i.isClosePausedRef.current) {
                    const k = new CustomEvent(Au);
                    m.dispatchEvent(k),
                    i.isClosePausedRef.current = !1
                }
            }
              , b = k => {
                !w.contains(k.relatedTarget) && y()
            }
              , C = () => {
                w.contains(document.activeElement) || y()
            }
            ;
            return w.addEventListener("focusin", h),
            w.addEventListener("focusout", b),
            w.addEventListener("pointermove", h),
            w.addEventListener("pointerleave", C),
            window.addEventListener("blur", h),
            window.addEventListener("focus", y),
            () => {
                w.removeEventListener("focusin", h),
                w.removeEventListener("focusout", b),
                w.removeEventListener("pointermove", h),
                w.removeEventListener("pointerleave", C),
                window.removeEventListener("blur", h),
                window.removeEventListener("focus", y)
            }
        }
    }
    , [S, i.isClosePausedRef]);
    const v = p.useCallback( ({tabbingDirection: w}) => {
        const h = l().map(y => {
            const b = y.ref.current
              , C = [b, ...YS(b)];
            return w === "forwards" ? C : C.reverse()
        }
        );
        return (w === "forwards" ? h.reverse() : h).flat()
    }
    , [l]);
    return p.useEffect( () => {
        const w = f.current;
        if (w) {
            const m = h => {
                var C, k, N;
                const y = h.altKey || h.ctrlKey || h.metaKey;
                if (h.key === "Tab" && !y) {
                    const j = document.activeElement
                      , R = h.shiftKey;
                    if (h.target === w && R) {
                        (C = c.current) == null || C.focus();
                        return
                    }
                    const L = v({
                        tabbingDirection: R ? "backwards" : "forwards"
                    })
                      , K = L.findIndex(M => M === j);
                    fa(L.slice(K + 1)) ? h.preventDefault() : R ? (k = c.current) == null || k.focus() : (N = d.current) == null || N.focus()
                }
            }
            ;
            return w.addEventListener("keydown", m),
            () => w.removeEventListener("keydown", m)
        }
    }
    , [l, v]),
    a.jsxs(kS, {
        ref: u,
        role: "region",
        "aria-label": o.replace("{hotkey}", x),
        tabIndex: -1,
        style: {
            pointerEvents: S ? void 0 : "none"
        },
        children: [S && a.jsx(_u, {
            ref: c,
            onFocusFromOutsideViewport: () => {
                const w = v({
                    tabbingDirection: "forwards"
                });
                fa(w)
            }
        }), a.jsx(Gc.Slot, {
            scope: n,
            children: a.jsx(ce.ol, {
                tabIndex: -1,
                ...s,
                ref: g
            })
        }), S && a.jsx(_u, {
            ref: d,
            onFocusFromOutsideViewport: () => {
                const w = v({
                    tabbingDirection: "backwards"
                });
                fa(w)
            }
        })]
    })
}
);
Qg.displayName = Wg;
var Kg = "ToastFocusProxy"
  , _u = p.forwardRef( (e, t) => {
    const {__scopeToast: n, onFocusFromOutsideViewport: r, ...o} = e
      , s = Nl(Kg, n);
    return a.jsx(Cl, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...o,
        ref: t,
        style: {
            position: "fixed"
        },
        onFocus: i => {
            var c;
            const l = i.relatedTarget;
            !((c = s.viewport) != null && c.contains(l)) && r()
        }
    })
}
);
_u.displayName = Kg;
var kl = "Toast"
  , FS = "toast.swipeStart"
  , zS = "toast.swipeMove"
  , $S = "toast.swipeCancel"
  , US = "toast.swipeEnd"
  , Gg = p.forwardRef( (e, t) => {
    const {forceMount: n, open: r, defaultOpen: o, onOpenChange: s, ...i} = e
      , [l=!0,u] = Qc({
        prop: r,
        defaultProp: o,
        onChange: s
    });
    return a.jsx(So, {
        present: n || l,
        children: a.jsx(HS, {
            open: l,
            ...i,
            ref: t,
            onClose: () => u(!1),
            onPause: at(e.onPause),
            onResume: at(e.onResume),
            onSwipeStart: re(e.onSwipeStart, c => {
                c.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: re(e.onSwipeMove, c => {
                const {x: d, y: f} = c.detail.delta;
                c.currentTarget.setAttribute("data-swipe", "move"),
                c.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${d}px`),
                c.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${f}px`)
            }
            ),
            onSwipeCancel: re(e.onSwipeCancel, c => {
                c.currentTarget.setAttribute("data-swipe", "cancel"),
                c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                c.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                c.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: re(e.onSwipeEnd, c => {
                const {x: d, y: f} = c.detail.delta;
                c.currentTarget.setAttribute("data-swipe", "end"),
                c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                c.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${d}px`),
                c.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${f}px`),
                u(!1)
            }
            )
        })
    })
}
);
Gg.displayName = kl;
var [BS,VS] = Vg(kl, {
    onClose() {}
})
  , HS = p.forwardRef( (e, t) => {
    const {__scopeToast: n, type: r="foreground", duration: o, open: s, onClose: i, onEscapeKeyDown: l, onPause: u, onResume: c, onSwipeStart: d, onSwipeMove: f, onSwipeCancel: g, onSwipeEnd: x, ...S} = e
      , v = Nl(kl, n)
      , [w,m] = p.useState(null)
      , h = Ce(t, M => m(M))
      , y = p.useRef(null)
      , b = p.useRef(null)
      , C = o || v.duration
      , k = p.useRef(0)
      , N = p.useRef(C)
      , j = p.useRef(0)
      , {onToastAdd: R, onToastRemove: O} = v
      , $ = at( () => {
        var Y;
        (w == null ? void 0 : w.contains(document.activeElement)) && ((Y = v.viewport) == null || Y.focus()),
        i()
    }
    )
      , L = p.useCallback(M => {
        !M || M === 1 / 0 || (window.clearTimeout(j.current),
        k.current = new Date().getTime(),
        j.current = window.setTimeout($, M))
    }
    , [$]);
    p.useEffect( () => {
        const M = v.viewport;
        if (M) {
            const Y = () => {
                L(N.current),
                c == null || c()
            }
              , H = () => {
                const q = new Date().getTime() - k.current;
                N.current = N.current - q,
                window.clearTimeout(j.current),
                u == null || u()
            }
            ;
            return M.addEventListener(Ou, H),
            M.addEventListener(Au, Y),
            () => {
                M.removeEventListener(Ou, H),
                M.removeEventListener(Au, Y)
            }
        }
    }
    , [v.viewport, C, u, c, L]),
    p.useEffect( () => {
        s && !v.isClosePausedRef.current && L(C)
    }
    , [s, C, v.isClosePausedRef, L]),
    p.useEffect( () => (R(),
    () => O()), [R, O]);
    const K = p.useMemo( () => w ? tv(w) : null, [w]);
    return v.viewport ? a.jsxs(a.Fragment, {
        children: [K && a.jsx(WS, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: K
        }), a.jsx(BS, {
            scope: n,
            onClose: $,
            children: Ts.createPortal(a.jsx(Gc.ItemSlot, {
                scope: n,
                children: a.jsx(NS, {
                    asChild: !0,
                    onEscapeKeyDown: re(l, () => {
                        v.isFocusedToastEscapeKeyDownRef.current || $(),
                        v.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: a.jsx(ce.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": s ? "open" : "closed",
                        "data-swipe-direction": v.swipeDirection,
                        ...S,
                        ref: h,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: re(e.onKeyDown, M => {
                            M.key === "Escape" && (l == null || l(M.nativeEvent),
                            M.nativeEvent.defaultPrevented || (v.isFocusedToastEscapeKeyDownRef.current = !0,
                            $()))
                        }
                        ),
                        onPointerDown: re(e.onPointerDown, M => {
                            M.button === 0 && (y.current = {
                                x: M.clientX,
                                y: M.clientY
                            })
                        }
                        ),
                        onPointerMove: re(e.onPointerMove, M => {
                            if (!y.current)
                                return;
                            const Y = M.clientX - y.current.x
                              , H = M.clientY - y.current.y
                              , q = !!b.current
                              , P = ["left", "right"].includes(v.swipeDirection)
                              , A = ["left", "up"].includes(v.swipeDirection) ? Math.min : Math.max
                              , I = P ? A(0, Y) : 0
                              , V = P ? 0 : A(0, H)
                              , se = M.pointerType === "touch" ? 10 : 2
                              , ut = {
                                x: I,
                                y: V
                            }
                              , Je = {
                                originalEvent: M,
                                delta: ut
                            };
                            q ? (b.current = ut,
                            ei(zS, f, Je, {
                                discrete: !1
                            })) : dp(ut, v.swipeDirection, se) ? (b.current = ut,
                            ei(FS, d, Je, {
                                discrete: !1
                            }),
                            M.target.setPointerCapture(M.pointerId)) : (Math.abs(Y) > se || Math.abs(H) > se) && (y.current = null)
                        }
                        ),
                        onPointerUp: re(e.onPointerUp, M => {
                            const Y = b.current
                              , H = M.target;
                            if (H.hasPointerCapture(M.pointerId) && H.releasePointerCapture(M.pointerId),
                            b.current = null,
                            y.current = null,
                            Y) {
                                const q = M.currentTarget
                                  , P = {
                                    originalEvent: M,
                                    delta: Y
                                };
                                dp(Y, v.swipeDirection, v.swipeThreshold) ? ei(US, x, P, {
                                    discrete: !0
                                }) : ei($S, g, P, {
                                    discrete: !0
                                }),
                                q.addEventListener("click", A => A.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), v.viewport)
        })]
    }) : null
}
)
  , WS = e => {
    const {__scopeToast: t, children: n, ...r} = e
      , o = Nl(kl, t)
      , [s,i] = p.useState(!1)
      , [l,u] = p.useState(!1);
    return GS( () => i(!0)),
    p.useEffect( () => {
        const c = window.setTimeout( () => u(!0), 1e3);
        return () => window.clearTimeout(c)
    }
    , []),
    l ? null : a.jsx(Wc, {
        asChild: !0,
        children: a.jsx(Cl, {
            ...r,
            children: s && a.jsxs(a.Fragment, {
                children: [o.label, " ", n]
            })
        })
    })
}
  , QS = "ToastTitle"
  , qg = p.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return a.jsx(ce.div, {
        ...r,
        ref: t
    })
}
);
qg.displayName = QS;
var KS = "ToastDescription"
  , Yg = p.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return a.jsx(ce.div, {
        ...r,
        ref: t
    })
}
);
Yg.displayName = KS;
var Xg = "ToastAction"
  , Zg = p.forwardRef( (e, t) => {
    const {altText: n, ...r} = e;
    return n.trim() ? a.jsx(ev, {
        altText: n,
        asChild: !0,
        children: a.jsx(qc, {
            ...r,
            ref: t
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${Xg}\`. Expected non-empty \`string\`.`),
    null)
}
);
Zg.displayName = Xg;
var Jg = "ToastClose"
  , qc = p.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e
      , o = VS(Jg, n);
    return a.jsx(ev, {
        asChild: !0,
        children: a.jsx(ce.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: re(e.onClick, o.onClose)
        })
    })
}
);
qc.displayName = Jg;
var ev = p.forwardRef( (e, t) => {
    const {__scopeToast: n, altText: r, ...o} = e;
    return a.jsx(ce.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...o,
        ref: t
    })
}
);
function tv(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        qS(r)) {
            const o = r.ariaHidden || r.hidden || r.style.display === "none"
              , s = r.dataset.radixToastAnnounceExclude === "";
            if (!o)
                if (s) {
                    const i = r.dataset.radixToastAnnounceAlt;
                    i && t.push(i)
                } else
                    t.push(...tv(r))
        }
    }
    ),
    t
}
function ei(e, t, n, {discrete: r}) {
    const o = n.originalEvent.currentTarget
      , s = new CustomEvent(e,{
        bubbles: !0,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? zg(o, s) : o.dispatchEvent(s)
}
var dp = (e, t, n=0) => {
    const r = Math.abs(e.x)
      , o = Math.abs(e.y)
      , s = r > o;
    return t === "left" || t === "right" ? s && r > n : !s && o > n
}
;
function GS(e= () => {}
) {
    const t = at(e);
    Dn( () => {
        let n = 0
          , r = 0;
        return n = window.requestAnimationFrame( () => r = window.requestAnimationFrame(t)),
        () => {
            window.cancelAnimationFrame(n),
            window.cancelAnimationFrame(r)
        }
    }
    , [t])
}
function qS(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function YS(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const o = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function fa(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(),
    document.activeElement !== t))
}
var XS = Hg
  , nv = Qg
  , rv = Gg
  , ov = qg
  , sv = Yg
  , iv = Zg
  , lv = qc;
function av(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++)
                e[t] && (n = av(e[t])) && (r && (r += " "),
                r += n)
        } else
            for (n in e)
                e[n] && (r && (r += " "),
                r += n);
    return r
}
function uv() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
        (e = arguments[n]) && (t = av(e)) && (r && (r += " "),
        r += t);
    return r
}
const fp = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
  , pp = uv
  , Os = (e, t) => n => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
        return pp(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const {variants: o, defaultVariants: s} = t
      , i = Object.keys(o).map(c => {
        const d = n == null ? void 0 : n[c]
          , f = s == null ? void 0 : s[c];
        if (d === null)
            return null;
        const g = fp(d) || fp(f);
        return o[c][g]
    }
    )
      , l = n && Object.entries(n).reduce( (c, d) => {
        let[f,g] = d;
        return g === void 0 || (c[f] = g),
        c
    }
    , {})
      , u = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce( (c, d) => {
        let {class: f, className: g, ...x} = d;
        return Object.entries(x).every(S => {
            let[v,w] = S;
            return Array.isArray(w) ? w.includes({
                ...s,
                ...l
            }[v]) : {
                ...s,
                ...l
            }[v] === w
        }
        ) ? [...c, f, g] : c
    }
    , []);
    return pp(e, i, u, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
}
;
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ZS = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , cv = (...e) => e.filter( (t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var JS = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eb = p.forwardRef( ({color: e="currentColor", size: t=24, strokeWidth: n=2, absoluteStrokeWidth: r, className: o="", children: s, iconNode: i, ...l}, u) => p.createElement("svg", {
    ref: u,
    ...JS,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: cv("lucide", o),
    ...l
}, [...i.map( ([c,d]) => p.createElement(c, d)), ...Array.isArray(s) ? s : [s]]));
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J = (e, t) => {
    const n = p.forwardRef( ({className: r, ...o}, s) => p.createElement(eb, {
        ref: s,
        iconNode: t,
        className: cv(`lucide-${ZS(e)}`, r),
        ...o
    }));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vs = J("Activity", [["path", {
    d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
    key: "169zse"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tb = J("ArrowLeftRight", [["path", {
    d: "M8 3 4 7l4 4",
    key: "9rb6wj"
}], ["path", {
    d: "M4 7h16",
    key: "6tx8e3"
}], ["path", {
    d: "m16 21 4-4-4-4",
    key: "siv7j2"
}], ["path", {
    d: "M20 17H4",
    key: "h6l3hr"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yc = J("Calendar", [["path", {
    d: "M8 2v4",
    key: "1cmpym"
}], ["path", {
    d: "M16 2v4",
    key: "4m81vk"
}], ["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "4",
    rx: "2",
    key: "1hopcy"
}], ["path", {
    d: "M3 10h18",
    key: "8toen8"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nb = J("CircleAlert", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "8",
    y2: "12",
    key: "1pkeuh"
}], ["line", {
    x1: "12",
    x2: "12.01",
    y1: "16",
    y2: "16",
    key: "4dfq90"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Du = J("CircleCheck", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "m9 12 2 2 4-4",
    key: "dzmm74"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mu = J("CircleX", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "m15 9-6 6",
    key: "1uzhvr"
}], ["path", {
    d: "m9 9 6 6",
    key: "z0biqf"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xc = J("Clock", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["polyline", {
    points: "12 6 12 12 16 14",
    key: "68esgv"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rb = J("Code", [["polyline", {
    points: "16 18 22 12 16 6",
    key: "z7tu5w"
}], ["polyline", {
    points: "8 6 2 12 8 18",
    key: "1eg1df"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ob = J("Cpu", [["rect", {
    width: "16",
    height: "16",
    x: "4",
    y: "4",
    rx: "2",
    key: "14l7u7"
}], ["rect", {
    width: "6",
    height: "6",
    x: "9",
    y: "9",
    rx: "1",
    key: "5aljv4"
}], ["path", {
    d: "M15 2v2",
    key: "13l42r"
}], ["path", {
    d: "M15 20v2",
    key: "15mkzm"
}], ["path", {
    d: "M2 15h2",
    key: "1gxd5l"
}], ["path", {
    d: "M2 9h2",
    key: "1bbxkp"
}], ["path", {
    d: "M20 15h2",
    key: "19e6y8"
}], ["path", {
    d: "M20 9h2",
    key: "19tzq7"
}], ["path", {
    d: "M9 2v2",
    key: "165o2o"
}], ["path", {
    d: "M9 20v2",
    key: "i2bqo8"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sb = J("ExternalLink", [["path", {
    d: "M15 3h6v6",
    key: "1q9fwt"
}], ["path", {
    d: "M10 14 21 3",
    key: "gplh6r"
}], ["path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
    key: "a6xqqp"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dr = J("GitBranch", [["line", {
    x1: "6",
    x2: "6",
    y1: "3",
    y2: "15",
    key: "17qcm7"
}], ["circle", {
    cx: "18",
    cy: "6",
    r: "3",
    key: "1h7g24"
}], ["circle", {
    cx: "6",
    cy: "18",
    r: "3",
    key: "fqmcym"
}], ["path", {
    d: "M18 9a9 9 0 0 1-9 9",
    key: "n2h4wq"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ib = J("HardDrive", [["line", {
    x1: "22",
    x2: "2",
    y1: "12",
    y2: "12",
    key: "1y58io"
}], ["path", {
    d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
    key: "oot6mr"
}], ["line", {
    x1: "6",
    x2: "6.01",
    y1: "16",
    y2: "16",
    key: "sgf278"
}], ["line", {
    x1: "10",
    x2: "10.01",
    y1: "16",
    y2: "16",
    key: "1l4acy"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lb = J("LayoutDashboard", [["rect", {
    width: "7",
    height: "9",
    x: "3",
    y: "3",
    rx: "1",
    key: "10lvy0"
}], ["rect", {
    width: "7",
    height: "5",
    x: "14",
    y: "3",
    rx: "1",
    key: "16une8"
}], ["rect", {
    width: "7",
    height: "9",
    x: "14",
    y: "12",
    rx: "1",
    key: "1hutg5"
}], ["rect", {
    width: "7",
    height: "5",
    x: "3",
    y: "16",
    rx: "1",
    key: "ldoo1y"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ab = J("LoaderCircle", [["path", {
    d: "M21 12a9 9 0 1 1-6.219-8.56",
    key: "13zald"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ub = J("Minus", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cb = J("Moon", [["path", {
    d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",
    key: "a7tn18"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const db = J("Package", [["path", {
    d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
    key: "1a0edw"
}], ["path", {
    d: "M12 22V12",
    key: "d0xqtd"
}], ["path", {
    d: "m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",
    key: "yx3hmr"
}], ["path", {
    d: "m7.5 4.27 9 5.15",
    key: "1c824w"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fb = J("PanelLeft", [["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "3",
    rx: "2",
    key: "afitv7"
}], ["path", {
    d: "M9 3v18",
    key: "fh3hqa"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pb = J("Rocket", [["path", {
    d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
    key: "m3kijz"
}], ["path", {
    d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
    key: "1fmvmk"
}], ["path", {
    d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",
    key: "1f8sc4"
}], ["path", {
    d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
    key: "qeys4"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dv = J("RotateCcw", [["path", {
    d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
    key: "1357e3"
}], ["path", {
    d: "M3 3v5h5",
    key: "1xhq8a"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rr = J("Server", [["rect", {
    width: "20",
    height: "8",
    x: "2",
    y: "2",
    rx: "2",
    ry: "2",
    key: "ngkwjq"
}], ["rect", {
    width: "20",
    height: "8",
    x: "2",
    y: "14",
    rx: "2",
    ry: "2",
    key: "iecqi9"
}], ["line", {
    x1: "6",
    x2: "6.01",
    y1: "6",
    y2: "6",
    key: "16zg32"
}], ["line", {
    x1: "6",
    x2: "6.01",
    y1: "18",
    y2: "18",
    key: "nzw8ys"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hb = J("Settings", [["path", {
    d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
    key: "1qme2f"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "3",
    key: "1v7zrd"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mb = J("Sun", [["circle", {
    cx: "12",
    cy: "12",
    r: "4",
    key: "4exip2"
}], ["path", {
    d: "M12 2v2",
    key: "tus03m"
}], ["path", {
    d: "M12 20v2",
    key: "1lh1kg"
}], ["path", {
    d: "m4.93 4.93 1.41 1.41",
    key: "149t6j"
}], ["path", {
    d: "m17.66 17.66 1.41 1.41",
    key: "ptbguv"
}], ["path", {
    d: "M2 12h2",
    key: "1t8f8n"
}], ["path", {
    d: "M20 12h2",
    key: "1q8mjw"
}], ["path", {
    d: "m6.34 17.66-1.41 1.41",
    key: "1m8zz5"
}], ["path", {
    d: "m19.07 4.93-1.41 1.41",
    key: "1shlcs"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gb = J("TrendingDown", [["polyline", {
    points: "22 17 13.5 8.5 8.5 13.5 2 7",
    key: "1r2t7k"
}], ["polyline", {
    points: "16 17 22 17 22 11",
    key: "11uiuu"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fv = J("TrendingUp", [["polyline", {
    points: "22 7 13.5 15.5 8.5 10.5 2 17",
    key: "126l90"
}], ["polyline", {
    points: "16 7 22 7 22 13",
    key: "kwv8wd"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pv = J("TriangleAlert", [["path", {
    d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
    key: "wmoenq"
}], ["path", {
    d: "M12 9v4",
    key: "juzpu7"
}], ["path", {
    d: "M12 17h.01",
    key: "p32p05"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hv = J("User", [["path", {
    d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
    key: "975kel"
}], ["circle", {
    cx: "12",
    cy: "7",
    r: "4",
    key: "17ys0d"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mv = J("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gv = J("Zap", [["path", {
    d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
    key: "1xq2db"
}]])
  , Zc = "-"
  , vb = e => {
    const t = xb(e)
      , {conflictingClassGroups: n, conflictingClassGroupModifiers: r} = e;
    return {
        getClassGroupId: i => {
            const l = i.split(Zc);
            return l[0] === "" && l.length !== 1 && l.shift(),
            vv(l, t) || yb(i)
        }
        ,
        getConflictingClassGroupIds: (i, l) => {
            const u = n[i] || [];
            return l && r[i] ? [...u, ...r[i]] : u
        }
    }
}
  , vv = (e, t) => {
    var i;
    if (e.length === 0)
        return t.classGroupId;
    const n = e[0]
      , r = t.nextPart.get(n)
      , o = r ? vv(e.slice(1), r) : void 0;
    if (o)
        return o;
    if (t.validators.length === 0)
        return;
    const s = e.join(Zc);
    return (i = t.validators.find( ({validator: l}) => l(s))) == null ? void 0 : i.classGroupId
}
  , hp = /^\[(.+)\]$/
  , yb = e => {
    if (hp.test(e)) {
        const t = hp.exec(e)[1]
          , n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n)
            return "arbitrary.." + n
    }
}
  , xb = e => {
    const {theme: t, prefix: n} = e
      , r = {
        nextPart: new Map,
        validators: []
    };
    return Sb(Object.entries(e.classGroups), n).forEach( ([s,i]) => {
        Lu(i, r, s, t)
    }
    ),
    r
}
  , Lu = (e, t, n, r) => {
    e.forEach(o => {
        if (typeof o == "string") {
            const s = o === "" ? t : mp(t, o);
            s.classGroupId = n;
            return
        }
        if (typeof o == "function") {
            if (wb(o)) {
                Lu(o(r), t, n, r);
                return
            }
            t.validators.push({
                validator: o,
                classGroupId: n
            });
            return
        }
        Object.entries(o).forEach( ([s,i]) => {
            Lu(i, mp(t, s), n, r)
        }
        )
    }
    )
}
  , mp = (e, t) => {
    let n = e;
    return t.split(Zc).forEach(r => {
        n.nextPart.has(r) || n.nextPart.set(r, {
            nextPart: new Map,
            validators: []
        }),
        n = n.nextPart.get(r)
    }
    ),
    n
}
  , wb = e => e.isThemeGetter
  , Sb = (e, t) => t ? e.map( ([n,r]) => {
    const o = r.map(s => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map( ([i,l]) => [t + i, l])) : s);
    return [n, o]
}
) : e
  , bb = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let t = 0
      , n = new Map
      , r = new Map;
    const o = (s, i) => {
        n.set(s, i),
        t++,
        t > e && (t = 0,
        r = n,
        n = new Map)
    }
    ;
    return {
        get(s) {
            let i = n.get(s);
            if (i !== void 0)
                return i;
            if ((i = r.get(s)) !== void 0)
                return o(s, i),
                i
        },
        set(s, i) {
            n.has(s) ? n.set(s, i) : o(s, i)
        }
    }
}
  , yv = "!"
  , Eb = e => {
    const {separator: t, experimentalParseClassName: n} = e
      , r = t.length === 1
      , o = t[0]
      , s = t.length
      , i = l => {
        const u = [];
        let c = 0, d = 0, f;
        for (let w = 0; w < l.length; w++) {
            let m = l[w];
            if (c === 0) {
                if (m === o && (r || l.slice(w, w + s) === t)) {
                    u.push(l.slice(d, w)),
                    d = w + s;
                    continue
                }
                if (m === "/") {
                    f = w;
                    continue
                }
            }
            m === "[" ? c++ : m === "]" && c--
        }
        const g = u.length === 0 ? l : l.substring(d)
          , x = g.startsWith(yv)
          , S = x ? g.substring(1) : g
          , v = f && f > d ? f - d : void 0;
        return {
            modifiers: u,
            hasImportantModifier: x,
            baseClassName: S,
            maybePostfixModifierPosition: v
        }
    }
    ;
    return n ? l => n({
        className: l,
        parseClassName: i
    }) : i
}
  , Cb = e => {
    if (e.length <= 1)
        return e;
    const t = [];
    let n = [];
    return e.forEach(r => {
        r[0] === "[" ? (t.push(...n.sort(), r),
        n = []) : n.push(r)
    }
    ),
    t.push(...n.sort()),
    t
}
  , Nb = e => ({
    cache: bb(e.cacheSize),
    parseClassName: Eb(e),
    ...vb(e)
})
  , kb = /\s+/
  , jb = (e, t) => {
    const {parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o} = t
      , s = []
      , i = e.trim().split(kb);
    let l = "";
    for (let u = i.length - 1; u >= 0; u -= 1) {
        const c = i[u]
          , {modifiers: d, hasImportantModifier: f, baseClassName: g, maybePostfixModifierPosition: x} = n(c);
        let S = !!x
          , v = r(S ? g.substring(0, x) : g);
        if (!v) {
            if (!S) {
                l = c + (l.length > 0 ? " " + l : l);
                continue
            }
            if (v = r(g),
            !v) {
                l = c + (l.length > 0 ? " " + l : l);
                continue
            }
            S = !1
        }
        const w = Cb(d).join(":")
          , m = f ? w + yv : w
          , h = m + v;
        if (s.includes(h))
            continue;
        s.push(h);
        const y = o(v, S);
        for (let b = 0; b < y.length; ++b) {
            const C = y[b];
            s.push(m + C)
        }
        l = c + (l.length > 0 ? " " + l : l)
    }
    return l
}
;
function Pb() {
    let e = 0, t, n, r = "";
    for (; e < arguments.length; )
        (t = arguments[e++]) && (n = xv(t)) && (r && (r += " "),
        r += n);
    return r
}
const xv = e => {
    if (typeof e == "string")
        return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++)
        e[r] && (t = xv(e[r])) && (n && (n += " "),
        n += t);
    return n
}
;
function Tb(e, ...t) {
    let n, r, o, s = i;
    function i(u) {
        const c = t.reduce( (d, f) => f(d), e());
        return n = Nb(c),
        r = n.cache.get,
        o = n.cache.set,
        s = l,
        l(u)
    }
    function l(u) {
        const c = r(u);
        if (c)
            return c;
        const d = jb(u, n);
        return o(u, d),
        d
    }
    return function() {
        return s(Pb.apply(null, arguments))
    }
}
const te = e => {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0,
    t
}
  , wv = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , Rb = /^\d+\/\d+$/
  , Ob = new Set(["px", "full", "screen"])
  , Ab = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , _b = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , Db = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , Mb = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , Lb = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , Lt = e => Br(e) || Ob.has(e) || Rb.test(e)
  , en = e => bo(e, "length", Hb)
  , Br = e => !!e && !Number.isNaN(Number(e))
  , pa = e => bo(e, "number", Br)
  , Mo = e => !!e && Number.isInteger(Number(e))
  , Ib = e => e.endsWith("%") && Br(e.slice(0, -1))
  , U = e => wv.test(e)
  , tn = e => Ab.test(e)
  , Fb = new Set(["length", "size", "percentage"])
  , zb = e => bo(e, Fb, Sv)
  , $b = e => bo(e, "position", Sv)
  , Ub = new Set(["image", "url"])
  , Bb = e => bo(e, Ub, Qb)
  , Vb = e => bo(e, "", Wb)
  , Lo = () => !0
  , bo = (e, t, n) => {
    const r = wv.exec(e);
    return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
}
  , Hb = e => _b.test(e) && !Db.test(e)
  , Sv = () => !1
  , Wb = e => Mb.test(e)
  , Qb = e => Lb.test(e)
  , Kb = () => {
    const e = te("colors")
      , t = te("spacing")
      , n = te("blur")
      , r = te("brightness")
      , o = te("borderColor")
      , s = te("borderRadius")
      , i = te("borderSpacing")
      , l = te("borderWidth")
      , u = te("contrast")
      , c = te("grayscale")
      , d = te("hueRotate")
      , f = te("invert")
      , g = te("gap")
      , x = te("gradientColorStops")
      , S = te("gradientColorStopPositions")
      , v = te("inset")
      , w = te("margin")
      , m = te("opacity")
      , h = te("padding")
      , y = te("saturate")
      , b = te("scale")
      , C = te("sepia")
      , k = te("skew")
      , N = te("space")
      , j = te("translate")
      , R = () => ["auto", "contain", "none"]
      , O = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , $ = () => ["auto", U, t]
      , L = () => [U, t]
      , K = () => ["", Lt, en]
      , M = () => ["auto", Br, U]
      , Y = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , H = () => ["solid", "dashed", "dotted", "double", "none"]
      , q = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , P = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , A = () => ["", "0", U]
      , I = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , V = () => [Br, U];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [Lo],
            spacing: [Lt, en],
            blur: ["none", "", tn, U],
            brightness: V(),
            borderColor: [e],
            borderRadius: ["none", "", "full", tn, U],
            borderSpacing: L(),
            borderWidth: K(),
            contrast: V(),
            grayscale: A(),
            hueRotate: V(),
            invert: A(),
            gap: L(),
            gradientColorStops: [e],
            gradientColorStopPositions: [Ib, en],
            inset: $(),
            margin: $(),
            opacity: V(),
            padding: L(),
            saturate: V(),
            scale: V(),
            sepia: A(),
            skew: V(),
            space: L(),
            translate: L()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", U]
            }],
            container: ["container"],
            columns: [{
                columns: [tn]
            }],
            "break-after": [{
                "break-after": I()
            }],
            "break-before": [{
                "break-before": I()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...Y(), U]
            }],
            overflow: [{
                overflow: O()
            }],
            "overflow-x": [{
                "overflow-x": O()
            }],
            "overflow-y": [{
                "overflow-y": O()
            }],
            overscroll: [{
                overscroll: R()
            }],
            "overscroll-x": [{
                "overscroll-x": R()
            }],
            "overscroll-y": [{
                "overscroll-y": R()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [v]
            }],
            "inset-x": [{
                "inset-x": [v]
            }],
            "inset-y": [{
                "inset-y": [v]
            }],
            start: [{
                start: [v]
            }],
            end: [{
                end: [v]
            }],
            top: [{
                top: [v]
            }],
            right: [{
                right: [v]
            }],
            bottom: [{
                bottom: [v]
            }],
            left: [{
                left: [v]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", Mo, U]
            }],
            basis: [{
                basis: $()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", U]
            }],
            grow: [{
                grow: A()
            }],
            shrink: [{
                shrink: A()
            }],
            order: [{
                order: ["first", "last", "none", Mo, U]
            }],
            "grid-cols": [{
                "grid-cols": [Lo]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", Mo, U]
                }, U]
            }],
            "col-start": [{
                "col-start": M()
            }],
            "col-end": [{
                "col-end": M()
            }],
            "grid-rows": [{
                "grid-rows": [Lo]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [Mo, U]
                }, U]
            }],
            "row-start": [{
                "row-start": M()
            }],
            "row-end": [{
                "row-end": M()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", U]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", U]
            }],
            gap: [{
                gap: [g]
            }],
            "gap-x": [{
                "gap-x": [g]
            }],
            "gap-y": [{
                "gap-y": [g]
            }],
            "justify-content": [{
                justify: ["normal", ...P()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...P(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...P(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [h]
            }],
            px: [{
                px: [h]
            }],
            py: [{
                py: [h]
            }],
            ps: [{
                ps: [h]
            }],
            pe: [{
                pe: [h]
            }],
            pt: [{
                pt: [h]
            }],
            pr: [{
                pr: [h]
            }],
            pb: [{
                pb: [h]
            }],
            pl: [{
                pl: [h]
            }],
            m: [{
                m: [w]
            }],
            mx: [{
                mx: [w]
            }],
            my: [{
                my: [w]
            }],
            ms: [{
                ms: [w]
            }],
            me: [{
                me: [w]
            }],
            mt: [{
                mt: [w]
            }],
            mr: [{
                mr: [w]
            }],
            mb: [{
                mb: [w]
            }],
            ml: [{
                ml: [w]
            }],
            "space-x": [{
                "space-x": [N]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [N]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", U, t]
            }],
            "min-w": [{
                "min-w": [U, t, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [U, t, "none", "full", "min", "max", "fit", "prose", {
                    screen: [tn]
                }, tn]
            }],
            h: [{
                h: [U, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [U, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [U, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [U, t, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", tn, en]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", pa]
            }],
            "font-family": [{
                font: [Lo]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", U]
            }],
            "line-clamp": [{
                "line-clamp": ["none", Br, pa]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Lt, U]
            }],
            "list-image": [{
                "list-image": ["none", U]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", U]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [m]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [m]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...H(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", Lt, en]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", Lt, U]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: L()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", U]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", U]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [m]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...Y(), $b]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", zb]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, Bb]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [S]
            }],
            "gradient-via-pos": [{
                via: [S]
            }],
            "gradient-to-pos": [{
                to: [S]
            }],
            "gradient-from": [{
                from: [x]
            }],
            "gradient-via": [{
                via: [x]
            }],
            "gradient-to": [{
                to: [x]
            }],
            rounded: [{
                rounded: [s]
            }],
            "rounded-s": [{
                "rounded-s": [s]
            }],
            "rounded-e": [{
                "rounded-e": [s]
            }],
            "rounded-t": [{
                "rounded-t": [s]
            }],
            "rounded-r": [{
                "rounded-r": [s]
            }],
            "rounded-b": [{
                "rounded-b": [s]
            }],
            "rounded-l": [{
                "rounded-l": [s]
            }],
            "rounded-ss": [{
                "rounded-ss": [s]
            }],
            "rounded-se": [{
                "rounded-se": [s]
            }],
            "rounded-ee": [{
                "rounded-ee": [s]
            }],
            "rounded-es": [{
                "rounded-es": [s]
            }],
            "rounded-tl": [{
                "rounded-tl": [s]
            }],
            "rounded-tr": [{
                "rounded-tr": [s]
            }],
            "rounded-br": [{
                "rounded-br": [s]
            }],
            "rounded-bl": [{
                "rounded-bl": [s]
            }],
            "border-w": [{
                border: [l]
            }],
            "border-w-x": [{
                "border-x": [l]
            }],
            "border-w-y": [{
                "border-y": [l]
            }],
            "border-w-s": [{
                "border-s": [l]
            }],
            "border-w-e": [{
                "border-e": [l]
            }],
            "border-w-t": [{
                "border-t": [l]
            }],
            "border-w-r": [{
                "border-r": [l]
            }],
            "border-w-b": [{
                "border-b": [l]
            }],
            "border-w-l": [{
                "border-l": [l]
            }],
            "border-opacity": [{
                "border-opacity": [m]
            }],
            "border-style": [{
                border: [...H(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [l]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [l]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [m]
            }],
            "divide-style": [{
                divide: H()
            }],
            "border-color": [{
                border: [o]
            }],
            "border-color-x": [{
                "border-x": [o]
            }],
            "border-color-y": [{
                "border-y": [o]
            }],
            "border-color-s": [{
                "border-s": [o]
            }],
            "border-color-e": [{
                "border-e": [o]
            }],
            "border-color-t": [{
                "border-t": [o]
            }],
            "border-color-r": [{
                "border-r": [o]
            }],
            "border-color-b": [{
                "border-b": [o]
            }],
            "border-color-l": [{
                "border-l": [o]
            }],
            "divide-color": [{
                divide: [o]
            }],
            "outline-style": [{
                outline: ["", ...H()]
            }],
            "outline-offset": [{
                "outline-offset": [Lt, U]
            }],
            "outline-w": [{
                outline: [Lt, en]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: K()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [m]
            }],
            "ring-offset-w": [{
                "ring-offset": [Lt, en]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", tn, Vb]
            }],
            "shadow-color": [{
                shadow: [Lo]
            }],
            opacity: [{
                opacity: [m]
            }],
            "mix-blend": [{
                "mix-blend": [...q(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": q()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [r]
            }],
            contrast: [{
                contrast: [u]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", tn, U]
            }],
            grayscale: [{
                grayscale: [c]
            }],
            "hue-rotate": [{
                "hue-rotate": [d]
            }],
            invert: [{
                invert: [f]
            }],
            saturate: [{
                saturate: [y]
            }],
            sepia: [{
                sepia: [C]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [r]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [u]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [c]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [d]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [f]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [m]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [y]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [C]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [i]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [i]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [i]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", U]
            }],
            duration: [{
                duration: V()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", U]
            }],
            delay: [{
                delay: V()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", U]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [b]
            }],
            "scale-x": [{
                "scale-x": [b]
            }],
            "scale-y": [{
                "scale-y": [b]
            }],
            rotate: [{
                rotate: [Mo, U]
            }],
            "translate-x": [{
                "translate-x": [j]
            }],
            "translate-y": [{
                "translate-y": [j]
            }],
            "skew-x": [{
                "skew-x": [k]
            }],
            "skew-y": [{
                "skew-y": [k]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", U]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", U]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": L()
            }],
            "scroll-mx": [{
                "scroll-mx": L()
            }],
            "scroll-my": [{
                "scroll-my": L()
            }],
            "scroll-ms": [{
                "scroll-ms": L()
            }],
            "scroll-me": [{
                "scroll-me": L()
            }],
            "scroll-mt": [{
                "scroll-mt": L()
            }],
            "scroll-mr": [{
                "scroll-mr": L()
            }],
            "scroll-mb": [{
                "scroll-mb": L()
            }],
            "scroll-ml": [{
                "scroll-ml": L()
            }],
            "scroll-p": [{
                "scroll-p": L()
            }],
            "scroll-px": [{
                "scroll-px": L()
            }],
            "scroll-py": [{
                "scroll-py": L()
            }],
            "scroll-ps": [{
                "scroll-ps": L()
            }],
            "scroll-pe": [{
                "scroll-pe": L()
            }],
            "scroll-pt": [{
                "scroll-pt": L()
            }],
            "scroll-pr": [{
                "scroll-pr": L()
            }],
            "scroll-pb": [{
                "scroll-pb": L()
            }],
            "scroll-pl": [{
                "scroll-pl": L()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", U]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [Lt, en, pa]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
  , Gb = Tb(Kb);
function F(...e) {
    return Gb(uv(e))
}
function Xi(e) {
    if (e === 0)
        return "0 B";
    const t = 1024
      , n = ["B", "KB", "MB", "GB", "TB"]
      , r = Math.floor(Math.log(e) / Math.log(t));
    return `${(e / Math.pow(t, r)).toFixed(2)} ${n[r]}`
}
function qb(e) {
    const t = Math.floor(e / 86400)
      , n = Math.floor(e % 86400 / 3600)
      , r = Math.floor(e % 3600 / 60);
    return t > 0 ? `${t}d ${n}h ${r}m` : n > 0 ? `${n}h ${r}m` : `${r}m`
}
function ho(e) {
    const t = new Date(e)
      , r = Math.floor((new Date().getTime() - t.getTime()) / 1e3);
    return r < 60 ? `${r}s ago` : r < 3600 ? `${Math.floor(r / 60)}m ago` : r < 86400 ? `${Math.floor(r / 3600)}h ago` : `${Math.floor(r / 86400)}d ago`
}
function Yb(e) {
    return e < 1e3 ? `${e}ms` : `${(e / 1e3).toFixed(2)}s`
}
const Xb = XS
  , bv = p.forwardRef( ({className: e, ...t}, n) => a.jsx(nv, {
    ref: n,
    className: F("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...t
}));
bv.displayName = nv.displayName;
const Zb = Os("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , Ev = p.forwardRef( ({className: e, variant: t, ...n}, r) => a.jsx(rv, {
    ref: r,
    className: F(Zb({
        variant: t
    }), e),
    ...n
}));
Ev.displayName = rv.displayName;
const Jb = p.forwardRef( ({className: e, ...t}, n) => a.jsx(iv, {
    ref: n,
    className: F("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", e),
    ...t
}));
Jb.displayName = iv.displayName;
const Cv = p.forwardRef( ({className: e, ...t}, n) => a.jsx(lv, {
    ref: n,
    className: F("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: a.jsx(mv, {
        className: "h-4 w-4"
    })
}));
Cv.displayName = lv.displayName;
const Nv = p.forwardRef( ({className: e, ...t}, n) => a.jsx(ov, {
    ref: n,
    className: F("text-sm font-semibold", e),
    ...t
}));
Nv.displayName = ov.displayName;
const kv = p.forwardRef( ({className: e, ...t}, n) => a.jsx(sv, {
    ref: n,
    className: F("text-sm opacity-90", e),
    ...t
}));
kv.displayName = sv.displayName;
function eE() {
    const {toasts: e} = Vc();
    return a.jsxs(Xb, {
        children: [e.map(function({id: t, title: n, description: r, action: o, ...s}) {
            return a.jsxs(Ev, {
                ...s,
                children: [a.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && a.jsx(Nv, {
                        children: n
                    }), r && a.jsx(kv, {
                        children: r
                    })]
                }), o, a.jsx(Cv, {})]
            }, t)
        }), a.jsx(bv, {})]
    })
}
var tE = oh[" useId ".trim().toString()] || ( () => {}
)
  , nE = 0;
function Si(e) {
    const [t,n] = p.useState(tE());
    return Dn( () => {
        n(r => r ?? String(nE++))
    }
    , [e]),
    t ? `radix-${t}` : ""
}
const rE = ["top", "right", "bottom", "left"]
  , Mn = Math.min
  , Qe = Math.max
  , Zi = Math.round
  , ti = Math.floor
  , At = e => ({
    x: e,
    y: e
})
  , oE = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , sE = {
    start: "end",
    end: "start"
};
function Iu(e, t, n) {
    return Qe(e, Mn(t, n))
}
function qt(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Yt(e) {
    return e.split("-")[0]
}
function Eo(e) {
    return e.split("-")[1]
}
function Jc(e) {
    return e === "x" ? "y" : "x"
}
function ed(e) {
    return e === "y" ? "height" : "width"
}
function Ln(e) {
    return ["top", "bottom"].includes(Yt(e)) ? "y" : "x"
}
function td(e) {
    return Jc(Ln(e))
}
function iE(e, t, n) {
    n === void 0 && (n = !1);
    const r = Eo(e)
      , o = td(e)
      , s = ed(o);
    let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[s] > t.floating[s] && (i = Ji(i)),
    [i, Ji(i)]
}
function lE(e) {
    const t = Ji(e);
    return [Fu(e), t, Fu(t)]
}
function Fu(e) {
    return e.replace(/start|end/g, t => sE[t])
}
function aE(e, t, n) {
    const r = ["left", "right"]
      , o = ["right", "left"]
      , s = ["top", "bottom"]
      , i = ["bottom", "top"];
    switch (e) {
    case "top":
    case "bottom":
        return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
        return t ? s : i;
    default:
        return []
    }
}
function uE(e, t, n, r) {
    const o = Eo(e);
    let s = aE(Yt(e), n === "start", r);
    return o && (s = s.map(i => i + "-" + o),
    t && (s = s.concat(s.map(Fu)))),
    s
}
function Ji(e) {
    return e.replace(/left|right|bottom|top/g, t => oE[t])
}
function cE(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function jv(e) {
    return typeof e != "number" ? cE(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function el(e) {
    const {x: t, y: n, width: r, height: o} = e;
    return {
        width: r,
        height: o,
        top: n,
        left: t,
        right: t + r,
        bottom: n + o,
        x: t,
        y: n
    }
}
function gp(e, t, n) {
    let {reference: r, floating: o} = e;
    const s = Ln(t)
      , i = td(t)
      , l = ed(i)
      , u = Yt(t)
      , c = s === "y"
      , d = r.x + r.width / 2 - o.width / 2
      , f = r.y + r.height / 2 - o.height / 2
      , g = r[l] / 2 - o[l] / 2;
    let x;
    switch (u) {
    case "top":
        x = {
            x: d,
            y: r.y - o.height
        };
        break;
    case "bottom":
        x = {
            x: d,
            y: r.y + r.height
        };
        break;
    case "right":
        x = {
            x: r.x + r.width,
            y: f
        };
        break;
    case "left":
        x = {
            x: r.x - o.width,
            y: f
        };
        break;
    default:
        x = {
            x: r.x,
            y: r.y
        }
    }
    switch (Eo(t)) {
    case "start":
        x[i] -= g * (n && c ? -1 : 1);
        break;
    case "end":
        x[i] += g * (n && c ? -1 : 1);
        break
    }
    return x
}
const dE = async (e, t, n) => {
    const {placement: r="bottom", strategy: o="absolute", middleware: s=[], platform: i} = n
      , l = s.filter(Boolean)
      , u = await (i.isRTL == null ? void 0 : i.isRTL(t));
    let c = await i.getElementRects({
        reference: e,
        floating: t,
        strategy: o
    })
      , {x: d, y: f} = gp(c, r, u)
      , g = r
      , x = {}
      , S = 0;
    for (let v = 0; v < l.length; v++) {
        const {name: w, fn: m} = l[v]
          , {x: h, y, data: b, reset: C} = await m({
            x: d,
            y: f,
            initialPlacement: r,
            placement: g,
            strategy: o,
            middlewareData: x,
            rects: c,
            platform: i,
            elements: {
                reference: e,
                floating: t
            }
        });
        d = h ?? d,
        f = y ?? f,
        x = {
            ...x,
            [w]: {
                ...x[w],
                ...b
            }
        },
        C && S <= 50 && (S++,
        typeof C == "object" && (C.placement && (g = C.placement),
        C.rects && (c = C.rects === !0 ? await i.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }) : C.rects),
        {x: d, y: f} = gp(c, g, u)),
        v = -1)
    }
    return {
        x: d,
        y: f,
        placement: g,
        strategy: o,
        middlewareData: x
    }
}
;
async function ys(e, t) {
    var n;
    t === void 0 && (t = {});
    const {x: r, y: o, platform: s, rects: i, elements: l, strategy: u} = e
      , {boundary: c="clippingAncestors", rootBoundary: d="viewport", elementContext: f="floating", altBoundary: g=!1, padding: x=0} = qt(t, e)
      , S = jv(x)
      , w = l[g ? f === "floating" ? "reference" : "floating" : f]
      , m = el(await s.getClippingRect({
        element: (n = await (s.isElement == null ? void 0 : s.isElement(w))) == null || n ? w : w.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(l.floating)),
        boundary: c,
        rootBoundary: d,
        strategy: u
    }))
      , h = f === "floating" ? {
        x: r,
        y: o,
        width: i.floating.width,
        height: i.floating.height
    } : i.reference
      , y = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l.floating))
      , b = await (s.isElement == null ? void 0 : s.isElement(y)) ? await (s.getScale == null ? void 0 : s.getScale(y)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , C = el(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: l,
        rect: h,
        offsetParent: y,
        strategy: u
    }) : h);
    return {
        top: (m.top - C.top + S.top) / b.y,
        bottom: (C.bottom - m.bottom + S.bottom) / b.y,
        left: (m.left - C.left + S.left) / b.x,
        right: (C.right - m.right + S.right) / b.x
    }
}
const fE = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: n, y: r, placement: o, rects: s, platform: i, elements: l, middlewareData: u} = t
          , {element: c, padding: d=0} = qt(e, t) || {};
        if (c == null)
            return {};
        const f = jv(d)
          , g = {
            x: n,
            y: r
        }
          , x = td(o)
          , S = ed(x)
          , v = await i.getDimensions(c)
          , w = x === "y"
          , m = w ? "top" : "left"
          , h = w ? "bottom" : "right"
          , y = w ? "clientHeight" : "clientWidth"
          , b = s.reference[S] + s.reference[x] - g[x] - s.floating[S]
          , C = g[x] - s.reference[x]
          , k = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c));
        let N = k ? k[y] : 0;
        (!N || !await (i.isElement == null ? void 0 : i.isElement(k))) && (N = l.floating[y] || s.floating[S]);
        const j = b / 2 - C / 2
          , R = N / 2 - v[S] / 2 - 1
          , O = Mn(f[m], R)
          , $ = Mn(f[h], R)
          , L = O
          , K = N - v[S] - $
          , M = N / 2 - v[S] / 2 + j
          , Y = Iu(L, M, K)
          , H = !u.arrow && Eo(o) != null && M !== Y && s.reference[S] / 2 - (M < L ? O : $) - v[S] / 2 < 0
          , q = H ? M < L ? M - L : M - K : 0;
        return {
            [x]: g[x] + q,
            data: {
                [x]: Y,
                centerOffset: M - Y - q,
                ...H && {
                    alignmentOffset: q
                }
            },
            reset: H
        }
    }
})
  , pE = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, middlewareData: s, rects: i, initialPlacement: l, platform: u, elements: c} = t
              , {mainAxis: d=!0, crossAxis: f=!0, fallbackPlacements: g, fallbackStrategy: x="bestFit", fallbackAxisSideDirection: S="none", flipAlignment: v=!0, ...w} = qt(e, t);
            if ((n = s.arrow) != null && n.alignmentOffset)
                return {};
            const m = Yt(o)
              , h = Ln(l)
              , y = Yt(l) === l
              , b = await (u.isRTL == null ? void 0 : u.isRTL(c.floating))
              , C = g || (y || !v ? [Ji(l)] : lE(l))
              , k = S !== "none";
            !g && k && C.push(...uE(l, v, S, b));
            const N = [l, ...C]
              , j = await ys(t, w)
              , R = [];
            let O = ((r = s.flip) == null ? void 0 : r.overflows) || [];
            if (d && R.push(j[m]),
            f) {
                const M = iE(o, i, b);
                R.push(j[M[0]], j[M[1]])
            }
            if (O = [...O, {
                placement: o,
                overflows: R
            }],
            !R.every(M => M <= 0)) {
                var $, L;
                const M = ((($ = s.flip) == null ? void 0 : $.index) || 0) + 1
                  , Y = N[M];
                if (Y)
                    return {
                        data: {
                            index: M,
                            overflows: O
                        },
                        reset: {
                            placement: Y
                        }
                    };
                let H = (L = O.filter(q => q.overflows[0] <= 0).sort( (q, P) => q.overflows[1] - P.overflows[1])[0]) == null ? void 0 : L.placement;
                if (!H)
                    switch (x) {
                    case "bestFit":
                        {
                            var K;
                            const q = (K = O.filter(P => {
                                if (k) {
                                    const A = Ln(P.placement);
                                    return A === h || A === "y"
                                }
                                return !0
                            }
                            ).map(P => [P.placement, P.overflows.filter(A => A > 0).reduce( (A, I) => A + I, 0)]).sort( (P, A) => P[1] - A[1])[0]) == null ? void 0 : K[0];
                            q && (H = q);
                            break
                        }
                    case "initialPlacement":
                        H = l;
                        break
                    }
                if (o !== H)
                    return {
                        reset: {
                            placement: H
                        }
                    }
            }
            return {}
        }
    }
};
function vp(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function yp(e) {
    return rE.some(t => e[t] >= 0)
}
const hE = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(t) {
            const {rects: n} = t
              , {strategy: r="referenceHidden", ...o} = qt(e, t);
            switch (r) {
            case "referenceHidden":
                {
                    const s = await ys(t, {
                        ...o,
                        elementContext: "reference"
                    })
                      , i = vp(s, n.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: i,
                            referenceHidden: yp(i)
                        }
                    }
                }
            case "escaped":
                {
                    const s = await ys(t, {
                        ...o,
                        altBoundary: !0
                    })
                      , i = vp(s, n.floating);
                    return {
                        data: {
                            escapedOffsets: i,
                            escaped: yp(i)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
};
async function mE(e, t) {
    const {placement: n, platform: r, elements: o} = e
      , s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating))
      , i = Yt(n)
      , l = Eo(n)
      , u = Ln(n) === "y"
      , c = ["left", "top"].includes(i) ? -1 : 1
      , d = s && u ? -1 : 1
      , f = qt(t, e);
    let {mainAxis: g, crossAxis: x, alignmentAxis: S} = typeof f == "number" ? {
        mainAxis: f,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: f.mainAxis || 0,
        crossAxis: f.crossAxis || 0,
        alignmentAxis: f.alignmentAxis
    };
    return l && typeof S == "number" && (x = l === "end" ? S * -1 : S),
    u ? {
        x: x * d,
        y: g * c
    } : {
        x: g * c,
        y: x * d
    }
}
const gE = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var n, r;
            const {x: o, y: s, placement: i, middlewareData: l} = t
              , u = await mE(t, e);
            return i === ((n = l.offset) == null ? void 0 : n.placement) && (r = l.arrow) != null && r.alignmentOffset ? {} : {
                x: o + u.x,
                y: s + u.y,
                data: {
                    ...u,
                    placement: i
                }
            }
        }
    }
}
  , vE = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: n, y: r, placement: o} = t
              , {mainAxis: s=!0, crossAxis: i=!1, limiter: l={
                fn: w => {
                    let {x: m, y: h} = w;
                    return {
                        x: m,
                        y: h
                    }
                }
            }, ...u} = qt(e, t)
              , c = {
                x: n,
                y: r
            }
              , d = await ys(t, u)
              , f = Ln(Yt(o))
              , g = Jc(f);
            let x = c[g]
              , S = c[f];
            if (s) {
                const w = g === "y" ? "top" : "left"
                  , m = g === "y" ? "bottom" : "right"
                  , h = x + d[w]
                  , y = x - d[m];
                x = Iu(h, x, y)
            }
            if (i) {
                const w = f === "y" ? "top" : "left"
                  , m = f === "y" ? "bottom" : "right"
                  , h = S + d[w]
                  , y = S - d[m];
                S = Iu(h, S, y)
            }
            const v = l.fn({
                ...t,
                [g]: x,
                [f]: S
            });
            return {
                ...v,
                data: {
                    x: v.x - n,
                    y: v.y - r,
                    enabled: {
                        [g]: s,
                        [f]: i
                    }
                }
            }
        }
    }
}
  , yE = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(t) {
            const {x: n, y: r, placement: o, rects: s, middlewareData: i} = t
              , {offset: l=0, mainAxis: u=!0, crossAxis: c=!0} = qt(e, t)
              , d = {
                x: n,
                y: r
            }
              , f = Ln(o)
              , g = Jc(f);
            let x = d[g]
              , S = d[f];
            const v = qt(l, t)
              , w = typeof v == "number" ? {
                mainAxis: v,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...v
            };
            if (u) {
                const y = g === "y" ? "height" : "width"
                  , b = s.reference[g] - s.floating[y] + w.mainAxis
                  , C = s.reference[g] + s.reference[y] - w.mainAxis;
                x < b ? x = b : x > C && (x = C)
            }
            if (c) {
                var m, h;
                const y = g === "y" ? "width" : "height"
                  , b = ["top", "left"].includes(Yt(o))
                  , C = s.reference[f] - s.floating[y] + (b && ((m = i.offset) == null ? void 0 : m[f]) || 0) + (b ? 0 : w.crossAxis)
                  , k = s.reference[f] + s.reference[y] + (b ? 0 : ((h = i.offset) == null ? void 0 : h[f]) || 0) - (b ? w.crossAxis : 0);
                S < C ? S = C : S > k && (S = k)
            }
            return {
                [g]: x,
                [f]: S
            }
        }
    }
}
  , xE = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, rects: s, platform: i, elements: l} = t
              , {apply: u= () => {}
            , ...c} = qt(e, t)
              , d = await ys(t, c)
              , f = Yt(o)
              , g = Eo(o)
              , x = Ln(o) === "y"
              , {width: S, height: v} = s.floating;
            let w, m;
            f === "top" || f === "bottom" ? (w = f,
            m = g === (await (i.isRTL == null ? void 0 : i.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (m = f,
            w = g === "end" ? "top" : "bottom");
            const h = v - d.top - d.bottom
              , y = S - d.left - d.right
              , b = Mn(v - d[w], h)
              , C = Mn(S - d[m], y)
              , k = !t.middlewareData.shift;
            let N = b
              , j = C;
            if ((n = t.middlewareData.shift) != null && n.enabled.x && (j = y),
            (r = t.middlewareData.shift) != null && r.enabled.y && (N = h),
            k && !g) {
                const O = Qe(d.left, 0)
                  , $ = Qe(d.right, 0)
                  , L = Qe(d.top, 0)
                  , K = Qe(d.bottom, 0);
                x ? j = S - 2 * (O !== 0 || $ !== 0 ? O + $ : Qe(d.left, d.right)) : N = v - 2 * (L !== 0 || K !== 0 ? L + K : Qe(d.top, d.bottom))
            }
            await u({
                ...t,
                availableWidth: j,
                availableHeight: N
            });
            const R = await i.getDimensions(l.floating);
            return S !== R.width || v !== R.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function jl() {
    return typeof window < "u"
}
function Co(e) {
    return Pv(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function qe(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function Dt(e) {
    var t;
    return (t = (Pv(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function Pv(e) {
    return jl() ? e instanceof Node || e instanceof qe(e).Node : !1
}
function xt(e) {
    return jl() ? e instanceof Element || e instanceof qe(e).Element : !1
}
function _t(e) {
    return jl() ? e instanceof HTMLElement || e instanceof qe(e).HTMLElement : !1
}
function xp(e) {
    return !jl() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof qe(e).ShadowRoot
}
function As(e) {
    const {overflow: t, overflowX: n, overflowY: r, display: o} = wt(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
}
function wE(e) {
    return ["table", "td", "th"].includes(Co(e))
}
function Pl(e) {
    return [":popover-open", ":modal"].some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    }
    )
}
function nd(e) {
    const t = rd()
      , n = xt(e) ? wt(e) : e;
    return ["transform", "translate", "scale", "rotate", "perspective"].some(r => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some(r => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some(r => (n.contain || "").includes(r))
}
function SE(e) {
    let t = In(e);
    for (; _t(t) && !mo(t); ) {
        if (nd(t))
            return t;
        if (Pl(t))
            return null;
        t = In(t)
    }
    return null
}
function rd() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
function mo(e) {
    return ["html", "body", "#document"].includes(Co(e))
}
function wt(e) {
    return qe(e).getComputedStyle(e)
}
function Tl(e) {
    return xt(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function In(e) {
    if (Co(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || xp(e) && e.host || Dt(e);
    return xp(t) ? t.host : t
}
function Tv(e) {
    const t = In(e);
    return mo(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : _t(t) && As(t) ? t : Tv(t)
}
function xs(e, t, n) {
    var r;
    t === void 0 && (t = []),
    n === void 0 && (n = !0);
    const o = Tv(e)
      , s = o === ((r = e.ownerDocument) == null ? void 0 : r.body)
      , i = qe(o);
    if (s) {
        const l = zu(i);
        return t.concat(i, i.visualViewport || [], As(o) ? o : [], l && n ? xs(l) : [])
    }
    return t.concat(o, xs(o, [], n))
}
function zu(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function Rv(e) {
    const t = wt(e);
    let n = parseFloat(t.width) || 0
      , r = parseFloat(t.height) || 0;
    const o = _t(e)
      , s = o ? e.offsetWidth : n
      , i = o ? e.offsetHeight : r
      , l = Zi(n) !== s || Zi(r) !== i;
    return l && (n = s,
    r = i),
    {
        width: n,
        height: r,
        $: l
    }
}
function od(e) {
    return xt(e) ? e : e.contextElement
}
function Vr(e) {
    const t = od(e);
    if (!_t(t))
        return At(1);
    const n = t.getBoundingClientRect()
      , {width: r, height: o, $: s} = Rv(t);
    let i = (s ? Zi(n.width) : n.width) / r
      , l = (s ? Zi(n.height) : n.height) / o;
    return (!i || !Number.isFinite(i)) && (i = 1),
    (!l || !Number.isFinite(l)) && (l = 1),
    {
        x: i,
        y: l
    }
}
const bE = At(0);
function Ov(e) {
    const t = qe(e);
    return !rd() || !t.visualViewport ? bE : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function EE(e, t, n) {
    return t === void 0 && (t = !1),
    !n || t && n !== qe(e) ? !1 : t
}
function fr(e, t, n, r) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    const o = e.getBoundingClientRect()
      , s = od(e);
    let i = At(1);
    t && (r ? xt(r) && (i = Vr(r)) : i = Vr(e));
    const l = EE(s, n, r) ? Ov(s) : At(0);
    let u = (o.left + l.x) / i.x
      , c = (o.top + l.y) / i.y
      , d = o.width / i.x
      , f = o.height / i.y;
    if (s) {
        const g = qe(s)
          , x = r && xt(r) ? qe(r) : r;
        let S = g
          , v = zu(S);
        for (; v && r && x !== S; ) {
            const w = Vr(v)
              , m = v.getBoundingClientRect()
              , h = wt(v)
              , y = m.left + (v.clientLeft + parseFloat(h.paddingLeft)) * w.x
              , b = m.top + (v.clientTop + parseFloat(h.paddingTop)) * w.y;
            u *= w.x,
            c *= w.y,
            d *= w.x,
            f *= w.y,
            u += y,
            c += b,
            S = qe(v),
            v = zu(S)
        }
    }
    return el({
        width: d,
        height: f,
        x: u,
        y: c
    })
}
function sd(e, t) {
    const n = Tl(e).scrollLeft;
    return t ? t.left + n : fr(Dt(e)).left + n
}
function Av(e, t, n) {
    n === void 0 && (n = !1);
    const r = e.getBoundingClientRect()
      , o = r.left + t.scrollLeft - (n ? 0 : sd(e, r))
      , s = r.top + t.scrollTop;
    return {
        x: o,
        y: s
    }
}
function CE(e) {
    let {elements: t, rect: n, offsetParent: r, strategy: o} = e;
    const s = o === "fixed"
      , i = Dt(r)
      , l = t ? Pl(t.floating) : !1;
    if (r === i || l && s)
        return n;
    let u = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , c = At(1);
    const d = At(0)
      , f = _t(r);
    if ((f || !f && !s) && ((Co(r) !== "body" || As(i)) && (u = Tl(r)),
    _t(r))) {
        const x = fr(r);
        c = Vr(r),
        d.x = x.x + r.clientLeft,
        d.y = x.y + r.clientTop
    }
    const g = i && !f && !s ? Av(i, u, !0) : At(0);
    return {
        width: n.width * c.x,
        height: n.height * c.y,
        x: n.x * c.x - u.scrollLeft * c.x + d.x + g.x,
        y: n.y * c.y - u.scrollTop * c.y + d.y + g.y
    }
}
function NE(e) {
    return Array.from(e.getClientRects())
}
function kE(e) {
    const t = Dt(e)
      , n = Tl(e)
      , r = e.ownerDocument.body
      , o = Qe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth)
      , s = Qe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let i = -n.scrollLeft + sd(e);
    const l = -n.scrollTop;
    return wt(r).direction === "rtl" && (i += Qe(t.clientWidth, r.clientWidth) - o),
    {
        width: o,
        height: s,
        x: i,
        y: l
    }
}
function jE(e, t) {
    const n = qe(e)
      , r = Dt(e)
      , o = n.visualViewport;
    let s = r.clientWidth
      , i = r.clientHeight
      , l = 0
      , u = 0;
    if (o) {
        s = o.width,
        i = o.height;
        const c = rd();
        (!c || c && t === "fixed") && (l = o.offsetLeft,
        u = o.offsetTop)
    }
    return {
        width: s,
        height: i,
        x: l,
        y: u
    }
}
function PE(e, t) {
    const n = fr(e, !0, t === "fixed")
      , r = n.top + e.clientTop
      , o = n.left + e.clientLeft
      , s = _t(e) ? Vr(e) : At(1)
      , i = e.clientWidth * s.x
      , l = e.clientHeight * s.y
      , u = o * s.x
      , c = r * s.y;
    return {
        width: i,
        height: l,
        x: u,
        y: c
    }
}
function wp(e, t, n) {
    let r;
    if (t === "viewport")
        r = jE(e, n);
    else if (t === "document")
        r = kE(Dt(e));
    else if (xt(t))
        r = PE(t, n);
    else {
        const o = Ov(e);
        r = {
            x: t.x - o.x,
            y: t.y - o.y,
            width: t.width,
            height: t.height
        }
    }
    return el(r)
}
function _v(e, t) {
    const n = In(e);
    return n === t || !xt(n) || mo(n) ? !1 : wt(n).position === "fixed" || _v(n, t)
}
function TE(e, t) {
    const n = t.get(e);
    if (n)
        return n;
    let r = xs(e, [], !1).filter(l => xt(l) && Co(l) !== "body")
      , o = null;
    const s = wt(e).position === "fixed";
    let i = s ? In(e) : e;
    for (; xt(i) && !mo(i); ) {
        const l = wt(i)
          , u = nd(i);
        !u && l.position === "fixed" && (o = null),
        (s ? !u && !o : !u && l.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || As(i) && !u && _v(e, i)) ? r = r.filter(d => d !== i) : o = l,
        i = In(i)
    }
    return t.set(e, r),
    r
}
function RE(e) {
    let {element: t, boundary: n, rootBoundary: r, strategy: o} = e;
    const i = [...n === "clippingAncestors" ? Pl(t) ? [] : TE(t, this._c) : [].concat(n), r]
      , l = i[0]
      , u = i.reduce( (c, d) => {
        const f = wp(t, d, o);
        return c.top = Qe(f.top, c.top),
        c.right = Mn(f.right, c.right),
        c.bottom = Mn(f.bottom, c.bottom),
        c.left = Qe(f.left, c.left),
        c
    }
    , wp(t, l, o));
    return {
        width: u.right - u.left,
        height: u.bottom - u.top,
        x: u.left,
        y: u.top
    }
}
function OE(e) {
    const {width: t, height: n} = Rv(e);
    return {
        width: t,
        height: n
    }
}
function AE(e, t, n) {
    const r = _t(t)
      , o = Dt(t)
      , s = n === "fixed"
      , i = fr(e, !0, s, t);
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const u = At(0);
    if (r || !r && !s)
        if ((Co(t) !== "body" || As(o)) && (l = Tl(t)),
        r) {
            const g = fr(t, !0, s, t);
            u.x = g.x + t.clientLeft,
            u.y = g.y + t.clientTop
        } else
            o && (u.x = sd(o));
    const c = o && !r && !s ? Av(o, l) : At(0)
      , d = i.left + l.scrollLeft - u.x - c.x
      , f = i.top + l.scrollTop - u.y - c.y;
    return {
        x: d,
        y: f,
        width: i.width,
        height: i.height
    }
}
function ha(e) {
    return wt(e).position === "static"
}
function Sp(e, t) {
    if (!_t(e) || wt(e).position === "fixed")
        return null;
    if (t)
        return t(e);
    let n = e.offsetParent;
    return Dt(e) === n && (n = n.ownerDocument.body),
    n
}
function Dv(e, t) {
    const n = qe(e);
    if (Pl(e))
        return n;
    if (!_t(e)) {
        let o = In(e);
        for (; o && !mo(o); ) {
            if (xt(o) && !ha(o))
                return o;
            o = In(o)
        }
        return n
    }
    let r = Sp(e, t);
    for (; r && wE(r) && ha(r); )
        r = Sp(r, t);
    return r && mo(r) && ha(r) && !nd(r) ? n : r || SE(e) || n
}
const _E = async function(e) {
    const t = this.getOffsetParent || Dv
      , n = this.getDimensions
      , r = await n(e.floating);
    return {
        reference: AE(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};
function DE(e) {
    return wt(e).direction === "rtl"
}
const ME = {
    convertOffsetParentRelativeRectToViewportRelativeRect: CE,
    getDocumentElement: Dt,
    getClippingRect: RE,
    getOffsetParent: Dv,
    getElementRects: _E,
    getClientRects: NE,
    getDimensions: OE,
    getScale: Vr,
    isElement: xt,
    isRTL: DE
};
function Mv(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}
function LE(e, t) {
    let n = null, r;
    const o = Dt(e);
    function s() {
        var l;
        clearTimeout(r),
        (l = n) == null || l.disconnect(),
        n = null
    }
    function i(l, u) {
        l === void 0 && (l = !1),
        u === void 0 && (u = 1),
        s();
        const c = e.getBoundingClientRect()
          , {left: d, top: f, width: g, height: x} = c;
        if (l || t(),
        !g || !x)
            return;
        const S = ti(f)
          , v = ti(o.clientWidth - (d + g))
          , w = ti(o.clientHeight - (f + x))
          , m = ti(d)
          , y = {
            rootMargin: -S + "px " + -v + "px " + -w + "px " + -m + "px",
            threshold: Qe(0, Mn(1, u)) || 1
        };
        let b = !0;
        function C(k) {
            const N = k[0].intersectionRatio;
            if (N !== u) {
                if (!b)
                    return i();
                N ? i(!1, N) : r = setTimeout( () => {
                    i(!1, 1e-7)
                }
                , 1e3)
            }
            N === 1 && !Mv(c, e.getBoundingClientRect()) && i(),
            b = !1
        }
        try {
            n = new IntersectionObserver(C,{
                ...y,
                root: o.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(C,y)
        }
        n.observe(e)
    }
    return i(!0),
    s
}
function IE(e, t, n, r) {
    r === void 0 && (r = {});
    const {ancestorScroll: o=!0, ancestorResize: s=!0, elementResize: i=typeof ResizeObserver == "function", layoutShift: l=typeof IntersectionObserver == "function", animationFrame: u=!1} = r
      , c = od(e)
      , d = o || s ? [...c ? xs(c) : [], ...xs(t)] : [];
    d.forEach(m => {
        o && m.addEventListener("scroll", n, {
            passive: !0
        }),
        s && m.addEventListener("resize", n)
    }
    );
    const f = c && l ? LE(c, n) : null;
    let g = -1
      , x = null;
    i && (x = new ResizeObserver(m => {
        let[h] = m;
        h && h.target === c && x && (x.unobserve(t),
        cancelAnimationFrame(g),
        g = requestAnimationFrame( () => {
            var y;
            (y = x) == null || y.observe(t)
        }
        )),
        n()
    }
    ),
    c && !u && x.observe(c),
    x.observe(t));
    let S, v = u ? fr(e) : null;
    u && w();
    function w() {
        const m = fr(e);
        v && !Mv(v, m) && n(),
        v = m,
        S = requestAnimationFrame(w)
    }
    return n(),
    () => {
        var m;
        d.forEach(h => {
            o && h.removeEventListener("scroll", n),
            s && h.removeEventListener("resize", n)
        }
        ),
        f == null || f(),
        (m = x) == null || m.disconnect(),
        x = null,
        u && cancelAnimationFrame(S)
    }
}
const FE = gE
  , zE = vE
  , $E = pE
  , UE = xE
  , BE = hE
  , bp = fE
  , VE = yE
  , HE = (e, t, n) => {
    const r = new Map
      , o = {
        platform: ME,
        ...n
    }
      , s = {
        ...o.platform,
        _c: r
    };
    return dE(e, t, {
        ...o,
        platform: s
    })
}
;
var bi = typeof document < "u" ? p.useLayoutEffect : p.useEffect;
function tl(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (typeof e == "function" && e.toString() === t.toString())
        return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length,
            n !== t.length)
                return !1;
            for (r = n; r-- !== 0; )
                if (!tl(e[r], t[r]))
                    return !1;
            return !0
        }
        if (o = Object.keys(e),
        n = o.length,
        n !== Object.keys(t).length)
            return !1;
        for (r = n; r-- !== 0; )
            if (!{}.hasOwnProperty.call(t, o[r]))
                return !1;
        for (r = n; r-- !== 0; ) {
            const s = o[r];
            if (!(s === "_owner" && e.$$typeof) && !tl(e[s], t[s]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function Lv(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function Ep(e, t) {
    const n = Lv(e);
    return Math.round(t * n) / n
}
function ma(e) {
    const t = p.useRef(e);
    return bi( () => {
        t.current = e
    }
    ),
    t
}
function WE(e) {
    e === void 0 && (e = {});
    const {placement: t="bottom", strategy: n="absolute", middleware: r=[], platform: o, elements: {reference: s, floating: i}={}, transform: l=!0, whileElementsMounted: u, open: c} = e
      , [d,f] = p.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    })
      , [g,x] = p.useState(r);
    tl(g, r) || x(r);
    const [S,v] = p.useState(null)
      , [w,m] = p.useState(null)
      , h = p.useCallback(P => {
        P !== k.current && (k.current = P,
        v(P))
    }
    , [])
      , y = p.useCallback(P => {
        P !== N.current && (N.current = P,
        m(P))
    }
    , [])
      , b = s || S
      , C = i || w
      , k = p.useRef(null)
      , N = p.useRef(null)
      , j = p.useRef(d)
      , R = u != null
      , O = ma(u)
      , $ = ma(o)
      , L = ma(c)
      , K = p.useCallback( () => {
        if (!k.current || !N.current)
            return;
        const P = {
            placement: t,
            strategy: n,
            middleware: g
        };
        $.current && (P.platform = $.current),
        HE(k.current, N.current, P).then(A => {
            const I = {
                ...A,
                isPositioned: L.current !== !1
            };
            M.current && !tl(j.current, I) && (j.current = I,
            Ts.flushSync( () => {
                f(I)
            }
            ))
        }
        )
    }
    , [g, t, n, $, L]);
    bi( () => {
        c === !1 && j.current.isPositioned && (j.current.isPositioned = !1,
        f(P => ({
            ...P,
            isPositioned: !1
        })))
    }
    , [c]);
    const M = p.useRef(!1);
    bi( () => (M.current = !0,
    () => {
        M.current = !1
    }
    ), []),
    bi( () => {
        if (b && (k.current = b),
        C && (N.current = C),
        b && C) {
            if (O.current)
                return O.current(b, C, K);
            K()
        }
    }
    , [b, C, K, O, R]);
    const Y = p.useMemo( () => ({
        reference: k,
        floating: N,
        setReference: h,
        setFloating: y
    }), [h, y])
      , H = p.useMemo( () => ({
        reference: b,
        floating: C
    }), [b, C])
      , q = p.useMemo( () => {
        const P = {
            position: n,
            left: 0,
            top: 0
        };
        if (!H.floating)
            return P;
        const A = Ep(H.floating, d.x)
          , I = Ep(H.floating, d.y);
        return l ? {
            ...P,
            transform: "translate(" + A + "px, " + I + "px)",
            ...Lv(H.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: n,
            left: A,
            top: I
        }
    }
    , [n, l, H.floating, d.x, d.y]);
    return p.useMemo( () => ({
        ...d,
        update: K,
        refs: Y,
        elements: H,
        floatingStyles: q
    }), [d, K, Y, H, q])
}
const QE = e => {
    function t(n) {
        return {}.hasOwnProperty.call(n, "current")
    }
    return {
        name: "arrow",
        options: e,
        fn(n) {
            const {element: r, padding: o} = typeof e == "function" ? e(n) : e;
            return r && t(r) ? r.current != null ? bp({
                element: r.current,
                padding: o
            }).fn(n) : {} : r ? bp({
                element: r,
                padding: o
            }).fn(n) : {}
        }
    }
}
  , KE = (e, t) => ({
    ...FE(e),
    options: [e, t]
})
  , GE = (e, t) => ({
    ...zE(e),
    options: [e, t]
})
  , qE = (e, t) => ({
    ...VE(e),
    options: [e, t]
})
  , YE = (e, t) => ({
    ...$E(e),
    options: [e, t]
})
  , XE = (e, t) => ({
    ...UE(e),
    options: [e, t]
})
  , ZE = (e, t) => ({
    ...BE(e),
    options: [e, t]
})
  , JE = (e, t) => ({
    ...QE(e),
    options: [e, t]
});
var eC = "Arrow"
  , Iv = p.forwardRef( (e, t) => {
    const {children: n, width: r=10, height: o=5, ...s} = e;
    return a.jsx(ce.svg, {
        ...s,
        ref: t,
        width: r,
        height: o,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? n : a.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
Iv.displayName = eC;
var tC = Iv;
function nC(e) {
    const [t,n] = p.useState(void 0);
    return Dn( () => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(o => {
                if (!Array.isArray(o) || !o.length)
                    return;
                const s = o[0];
                let i, l;
                if ("borderBoxSize"in s) {
                    const u = s.borderBoxSize
                      , c = Array.isArray(u) ? u[0] : u;
                    i = c.inlineSize,
                    l = c.blockSize
                } else
                    i = e.offsetWidth,
                    l = e.offsetHeight;
                n({
                    width: i,
                    height: l
                })
            }
            );
            return r.observe(e, {
                box: "border-box"
            }),
            () => r.unobserve(e)
        } else
            n(void 0)
    }
    , [e]),
    t
}
var id = "Popper"
  , [Fv,zv] = gr(id)
  , [rC,$v] = Fv(id)
  , Uv = e => {
    const {__scopePopper: t, children: n} = e
      , [r,o] = p.useState(null);
    return a.jsx(rC, {
        scope: t,
        anchor: r,
        onAnchorChange: o,
        children: n
    })
}
;
Uv.displayName = id;
var Bv = "PopperAnchor"
  , Vv = p.forwardRef( (e, t) => {
    const {__scopePopper: n, virtualRef: r, ...o} = e
      , s = $v(Bv, n)
      , i = p.useRef(null)
      , l = Ce(t, i);
    return p.useEffect( () => {
        s.onAnchorChange((r == null ? void 0 : r.current) || i.current)
    }
    ),
    r ? null : a.jsx(ce.div, {
        ...o,
        ref: l
    })
}
);
Vv.displayName = Bv;
var ld = "PopperContent"
  , [oC,sC] = Fv(ld)
  , Hv = p.forwardRef( (e, t) => {
    var Un, Rd, Od, Ad, _d, Dd;
    const {__scopePopper: n, side: r="bottom", sideOffset: o=0, align: s="center", alignOffset: i=0, arrowPadding: l=0, avoidCollisions: u=!0, collisionBoundary: c=[], collisionPadding: d=0, sticky: f="partial", hideWhenDetached: g=!1, updatePositionStrategy: x="optimized", onPlaced: S, ...v} = e
      , w = $v(ld, n)
      , [m,h] = p.useState(null)
      , y = Ce(t, ko => h(ko))
      , [b,C] = p.useState(null)
      , k = nC(b)
      , N = (k == null ? void 0 : k.width) ?? 0
      , j = (k == null ? void 0 : k.height) ?? 0
      , R = r + (s !== "center" ? "-" + s : "")
      , O = typeof d == "number" ? d : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...d
    }
      , $ = Array.isArray(c) ? c : [c]
      , L = $.length > 0
      , K = {
        padding: O,
        boundary: $.filter(lC),
        altBoundary: L
    }
      , {refs: M, floatingStyles: Y, placement: H, isPositioned: q, middlewareData: P} = WE({
        strategy: "fixed",
        placement: R,
        whileElementsMounted: (...ko) => IE(...ko, {
            animationFrame: x === "always"
        }),
        elements: {
            reference: w.anchor
        },
        middleware: [KE({
            mainAxis: o + j,
            alignmentAxis: i
        }), u && GE({
            mainAxis: !0,
            crossAxis: !1,
            limiter: f === "partial" ? qE() : void 0,
            ...K
        }), u && YE({
            ...K
        }), XE({
            ...K,
            apply: ({elements: ko, rects: Md, availableWidth: yx, availableHeight: xx}) => {
                const {width: wx, height: Sx} = Md.reference
                  , _s = ko.floating.style;
                _s.setProperty("--radix-popper-available-width", `${yx}px`),
                _s.setProperty("--radix-popper-available-height", `${xx}px`),
                _s.setProperty("--radix-popper-anchor-width", `${wx}px`),
                _s.setProperty("--radix-popper-anchor-height", `${Sx}px`)
            }
        }), b && JE({
            element: b,
            padding: l
        }), aC({
            arrowWidth: N,
            arrowHeight: j
        }), g && ZE({
            strategy: "referenceHidden",
            ...K
        })]
    })
      , [A,I] = Kv(H)
      , V = at(S);
    Dn( () => {
        q && (V == null || V())
    }
    , [q, V]);
    const se = (Un = P.arrow) == null ? void 0 : Un.x
      , ut = (Rd = P.arrow) == null ? void 0 : Rd.y
      , Je = ((Od = P.arrow) == null ? void 0 : Od.centerOffset) !== 0
      , [No,Mt] = p.useState();
    return Dn( () => {
        m && Mt(window.getComputedStyle(m).zIndex)
    }
    , [m]),
    a.jsx("div", {
        ref: M.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...Y,
            transform: q ? Y.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: No,
            "--radix-popper-transform-origin": [(Ad = P.transformOrigin) == null ? void 0 : Ad.x, (_d = P.transformOrigin) == null ? void 0 : _d.y].join(" "),
            ...((Dd = P.hide) == null ? void 0 : Dd.referenceHidden) && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: e.dir,
        children: a.jsx(oC, {
            scope: n,
            placedSide: A,
            onArrowChange: C,
            arrowX: se,
            arrowY: ut,
            shouldHideArrow: Je,
            children: a.jsx(ce.div, {
                "data-side": A,
                "data-align": I,
                ...v,
                ref: y,
                style: {
                    ...v.style,
                    animation: q ? void 0 : "none"
                }
            })
        })
    })
}
);
Hv.displayName = ld;
var Wv = "PopperArrow"
  , iC = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , Qv = p.forwardRef(function(t, n) {
    const {__scopePopper: r, ...o} = t
      , s = sC(Wv, r)
      , i = iC[s.placedSide];
    return a.jsx("span", {
        ref: s.onArrowChange,
        style: {
            position: "absolute",
            left: s.arrowX,
            top: s.arrowY,
            [i]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[s.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[s.placedSide],
            visibility: s.shouldHideArrow ? "hidden" : void 0
        },
        children: a.jsx(tC, {
            ...o,
            ref: n,
            style: {
                ...o.style,
                display: "block"
            }
        })
    })
});
Qv.displayName = Wv;
function lC(e) {
    return e !== null
}
var aC = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var w, m, h;
        const {placement: n, rects: r, middlewareData: o} = t
          , i = ((w = o.arrow) == null ? void 0 : w.centerOffset) !== 0
          , l = i ? 0 : e.arrowWidth
          , u = i ? 0 : e.arrowHeight
          , [c,d] = Kv(n)
          , f = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[d]
          , g = (((m = o.arrow) == null ? void 0 : m.x) ?? 0) + l / 2
          , x = (((h = o.arrow) == null ? void 0 : h.y) ?? 0) + u / 2;
        let S = ""
          , v = "";
        return c === "bottom" ? (S = i ? f : `${g}px`,
        v = `${-u}px`) : c === "top" ? (S = i ? f : `${g}px`,
        v = `${r.floating.height + u}px`) : c === "right" ? (S = `${-u}px`,
        v = i ? f : `${x}px`) : c === "left" && (S = `${r.floating.width + u}px`,
        v = i ? f : `${x}px`),
        {
            data: {
                x: S,
                y: v
            }
        }
    }
});
function Kv(e) {
    const [t,n="center"] = e.split("-");
    return [t, n]
}
var uC = Uv
  , cC = Vv
  , dC = Hv
  , fC = Qv
  , [Rl,ek] = gr("Tooltip", [zv])
  , Ol = zv()
  , Gv = "TooltipProvider"
  , pC = 700
  , $u = "tooltip.open"
  , [hC,ad] = Rl(Gv)
  , qv = e => {
    const {__scopeTooltip: t, delayDuration: n=pC, skipDelayDuration: r=300, disableHoverableContent: o=!1, children: s} = e
      , i = p.useRef(!0)
      , l = p.useRef(!1)
      , u = p.useRef(0);
    return p.useEffect( () => {
        const c = u.current;
        return () => window.clearTimeout(c)
    }
    , []),
    a.jsx(hC, {
        scope: t,
        isOpenDelayedRef: i,
        delayDuration: n,
        onOpen: p.useCallback( () => {
            window.clearTimeout(u.current),
            i.current = !1
        }
        , []),
        onClose: p.useCallback( () => {
            window.clearTimeout(u.current),
            u.current = window.setTimeout( () => i.current = !0, r)
        }
        , [r]),
        isPointerInTransitRef: l,
        onPointerInTransitChange: p.useCallback(c => {
            l.current = c
        }
        , []),
        disableHoverableContent: o,
        children: s
    })
}
;
qv.displayName = Gv;
var Al = "Tooltip"
  , [mC,_l] = Rl(Al)
  , Yv = e => {
    const {__scopeTooltip: t, children: n, open: r, defaultOpen: o=!1, onOpenChange: s, disableHoverableContent: i, delayDuration: l} = e
      , u = ad(Al, e.__scopeTooltip)
      , c = Ol(t)
      , [d,f] = p.useState(null)
      , g = Si()
      , x = p.useRef(0)
      , S = i ?? u.disableHoverableContent
      , v = l ?? u.delayDuration
      , w = p.useRef(!1)
      , [m=!1,h] = Qc({
        prop: r,
        defaultProp: o,
        onChange: N => {
            N ? (u.onOpen(),
            document.dispatchEvent(new CustomEvent($u))) : u.onClose(),
            s == null || s(N)
        }
    })
      , y = p.useMemo( () => m ? w.current ? "delayed-open" : "instant-open" : "closed", [m])
      , b = p.useCallback( () => {
        window.clearTimeout(x.current),
        x.current = 0,
        w.current = !1,
        h(!0)
    }
    , [h])
      , C = p.useCallback( () => {
        window.clearTimeout(x.current),
        x.current = 0,
        h(!1)
    }
    , [h])
      , k = p.useCallback( () => {
        window.clearTimeout(x.current),
        x.current = window.setTimeout( () => {
            w.current = !0,
            h(!0),
            x.current = 0
        }
        , v)
    }
    , [v, h]);
    return p.useEffect( () => () => {
        x.current && (window.clearTimeout(x.current),
        x.current = 0)
    }
    , []),
    a.jsx(uC, {
        ...c,
        children: a.jsx(mC, {
            scope: t,
            contentId: g,
            open: m,
            stateAttribute: y,
            trigger: d,
            onTriggerChange: f,
            onTriggerEnter: p.useCallback( () => {
                u.isOpenDelayedRef.current ? k() : b()
            }
            , [u.isOpenDelayedRef, k, b]),
            onTriggerLeave: p.useCallback( () => {
                S ? C() : (window.clearTimeout(x.current),
                x.current = 0)
            }
            , [C, S]),
            onOpen: b,
            onClose: C,
            disableHoverableContent: S,
            children: n
        })
    })
}
;
Yv.displayName = Al;
var Uu = "TooltipTrigger"
  , Xv = p.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , o = _l(Uu, n)
      , s = ad(Uu, n)
      , i = Ol(n)
      , l = p.useRef(null)
      , u = Ce(t, l, o.onTriggerChange)
      , c = p.useRef(!1)
      , d = p.useRef(!1)
      , f = p.useCallback( () => c.current = !1, []);
    return p.useEffect( () => () => document.removeEventListener("pointerup", f), [f]),
    a.jsx(cC, {
        asChild: !0,
        ...i,
        children: a.jsx(ce.button, {
            "aria-describedby": o.open ? o.contentId : void 0,
            "data-state": o.stateAttribute,
            ...r,
            ref: u,
            onPointerMove: re(e.onPointerMove, g => {
                g.pointerType !== "touch" && !d.current && !s.isPointerInTransitRef.current && (o.onTriggerEnter(),
                d.current = !0)
            }
            ),
            onPointerLeave: re(e.onPointerLeave, () => {
                o.onTriggerLeave(),
                d.current = !1
            }
            ),
            onPointerDown: re(e.onPointerDown, () => {
                o.open && o.onClose(),
                c.current = !0,
                document.addEventListener("pointerup", f, {
                    once: !0
                })
            }
            ),
            onFocus: re(e.onFocus, () => {
                c.current || o.onOpen()
            }
            ),
            onBlur: re(e.onBlur, o.onClose),
            onClick: re(e.onClick, o.onClose)
        })
    })
}
);
Xv.displayName = Uu;
var gC = "TooltipPortal"
  , [tk,vC] = Rl(gC, {
    forceMount: void 0
})
  , go = "TooltipContent"
  , Zv = p.forwardRef( (e, t) => {
    const n = vC(go, e.__scopeTooltip)
      , {forceMount: r=n.forceMount, side: o="top", ...s} = e
      , i = _l(go, e.__scopeTooltip);
    return a.jsx(So, {
        present: r || i.open,
        children: i.disableHoverableContent ? a.jsx(Jv, {
            side: o,
            ...s,
            ref: t
        }) : a.jsx(yC, {
            side: o,
            ...s,
            ref: t
        })
    })
}
)
  , yC = p.forwardRef( (e, t) => {
    const n = _l(go, e.__scopeTooltip)
      , r = ad(go, e.__scopeTooltip)
      , o = p.useRef(null)
      , s = Ce(t, o)
      , [i,l] = p.useState(null)
      , {trigger: u, onClose: c} = n
      , d = o.current
      , {onPointerInTransitChange: f} = r
      , g = p.useCallback( () => {
        l(null),
        f(!1)
    }
    , [f])
      , x = p.useCallback( (S, v) => {
        const w = S.currentTarget
          , m = {
            x: S.clientX,
            y: S.clientY
        }
          , h = EC(m, w.getBoundingClientRect())
          , y = CC(m, h)
          , b = NC(v.getBoundingClientRect())
          , C = jC([...y, ...b]);
        l(C),
        f(!0)
    }
    , [f]);
    return p.useEffect( () => () => g(), [g]),
    p.useEffect( () => {
        if (u && d) {
            const S = w => x(w, d)
              , v = w => x(w, u);
            return u.addEventListener("pointerleave", S),
            d.addEventListener("pointerleave", v),
            () => {
                u.removeEventListener("pointerleave", S),
                d.removeEventListener("pointerleave", v)
            }
        }
    }
    , [u, d, x, g]),
    p.useEffect( () => {
        if (i) {
            const S = v => {
                const w = v.target
                  , m = {
                    x: v.clientX,
                    y: v.clientY
                }
                  , h = (u == null ? void 0 : u.contains(w)) || (d == null ? void 0 : d.contains(w))
                  , y = !kC(m, i);
                h ? g() : y && (g(),
                c())
            }
            ;
            return document.addEventListener("pointermove", S),
            () => document.removeEventListener("pointermove", S)
        }
    }
    , [u, d, i, c, g]),
    a.jsx(Jv, {
        ...e,
        ref: s
    })
}
)
  , [xC,wC] = Rl(Al, {
    isInside: !1
})
  , SC = Fg("TooltipContent")
  , Jv = p.forwardRef( (e, t) => {
    const {__scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: s, onPointerDownOutside: i, ...l} = e
      , u = _l(go, n)
      , c = Ol(n)
      , {onClose: d} = u;
    return p.useEffect( () => (document.addEventListener($u, d),
    () => document.removeEventListener($u, d)), [d]),
    p.useEffect( () => {
        if (u.trigger) {
            const f = g => {
                const x = g.target;
                x != null && x.contains(u.trigger) && d()
            }
            ;
            return window.addEventListener("scroll", f, {
                capture: !0
            }),
            () => window.removeEventListener("scroll", f, {
                capture: !0
            })
        }
    }
    , [u.trigger, d]),
    a.jsx(El, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: i,
        onFocusOutside: f => f.preventDefault(),
        onDismiss: d,
        children: a.jsxs(dC, {
            "data-state": u.stateAttribute,
            ...c,
            ...l,
            ref: t,
            style: {
                ...l.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [a.jsx(SC, {
                children: r
            }), a.jsx(xC, {
                scope: n,
                isInside: !0,
                children: a.jsx(_S, {
                    id: u.contentId,
                    role: "tooltip",
                    children: o || r
                })
            })]
        })
    })
}
);
Zv.displayName = go;
var ey = "TooltipArrow"
  , bC = p.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , o = Ol(n);
    return wC(ey, n).isInside ? null : a.jsx(fC, {
        ...o,
        ...r,
        ref: t
    })
}
);
bC.displayName = ey;
function EC(e, t) {
    const n = Math.abs(t.top - e.y)
      , r = Math.abs(t.bottom - e.y)
      , o = Math.abs(t.right - e.x)
      , s = Math.abs(t.left - e.x);
    switch (Math.min(n, r, o, s)) {
    case s:
        return "left";
    case o:
        return "right";
    case n:
        return "top";
    case r:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function CC(e, t, n=5) {
    const r = [];
    switch (t) {
    case "top":
        r.push({
            x: e.x - n,
            y: e.y + n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "bottom":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y - n
        });
        break;
    case "left":
        r.push({
            x: e.x + n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "right":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x - n,
            y: e.y + n
        });
        break
    }
    return r
}
function NC(e) {
    const {top: t, right: n, bottom: r, left: o} = e;
    return [{
        x: o,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: o,
        y: r
    }]
}
function kC(e, t) {
    const {x: n, y: r} = e;
    let o = !1;
    for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
        const l = t[s].x
          , u = t[s].y
          , c = t[i].x
          , d = t[i].y;
        u > r != d > r && n < (c - l) * (r - u) / (d - u) + l && (o = !o)
    }
    return o
}
function jC(e) {
    const t = e.slice();
    return t.sort( (n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0),
    PC(t)
}
function PC(e) {
    if (e.length <= 1)
        return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        for (; t.length >= 2; ) {
            const s = t[t.length - 1]
              , i = t[t.length - 2];
            if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x))
                t.pop();
            else
                break
        }
        t.push(o)
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const o = e[r];
        for (; n.length >= 2; ) {
            const s = n[n.length - 1]
              , i = n[n.length - 2];
            if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x))
                n.pop();
            else
                break
        }
        n.push(o)
    }
    return n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var TC = qv
  , RC = Yv
  , OC = Xv
  , ty = Zv;
const ny = TC
  , AC = RC
  , _C = OC
  , ry = p.forwardRef( ({className: e, sideOffset: t=4, ...n}, r) => a.jsx(ty, {
    ref: r,
    sideOffset: t,
    className: F("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]", e),
    ...n
}));
ry.displayName = ty.displayName;
const ga = 768;
function DC() {
    const [e,t] = p.useState(void 0);
    return p.useEffect( () => {
        const n = window.matchMedia(`(max-width: ${ga - 1}px)`)
          , r = () => {
            t(window.innerWidth < ga)
        }
        ;
        return n.addEventListener("change", r),
        t(window.innerWidth < ga),
        () => n.removeEventListener("change", r)
    }
    , []),
    !!e
}
const ud = Os("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover-elevate active-elevate-2", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground border border-primary-border",
            destructive: "bg-destructive text-destructive-foreground border border-destructive-border",
            outline: " border [border-color:var(--button-outline)]  shadow-xs active:shadow-none ",
            secondary: "border bg-secondary text-secondary-foreground border border-secondary-border ",
            ghost: "border border-transparent"
        },
        size: {
            default: "min-h-9 px-4 py-2",
            sm: "min-h-8 rounded-md px-3 text-xs",
            lg: "min-h-10 rounded-md px-8",
            icon: "h-9 w-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
  , On = p.forwardRef( ({className: e, variant: t, size: n, asChild: r=!1, ...o}, s) => {
    const i = r ? Hc : "button";
    return a.jsx(i, {
        className: F(ud({
            variant: t,
            size: n,
            className: e
        })),
        ref: s,
        ...o
    })
}
);
On.displayName = "Button";
const MC = p.forwardRef( ({className: e, type: t, ...n}, r) => a.jsx("input", {
    type: t,
    className: F("flex h-9 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e),
    ref: r,
    ...n
}));
MC.displayName = "Input";
var LC = "Separator"
  , Cp = "horizontal"
  , IC = ["horizontal", "vertical"]
  , oy = p.forwardRef( (e, t) => {
    const {decorative: n, orientation: r=Cp, ...o} = e
      , s = FC(r) ? r : Cp
      , l = n ? {
        role: "none"
    } : {
        "aria-orientation": s === "vertical" ? s : void 0,
        role: "separator"
    };
    return a.jsx(ce.div, {
        "data-orientation": s,
        ...l,
        ...o,
        ref: t
    })
}
);
oy.displayName = LC;
function FC(e) {
    return IC.includes(e)
}
var sy = oy;
const zC = p.forwardRef( ({className: e, orientation: t="horizontal", decorative: n=!0, ...r}, o) => a.jsx(sy, {
    ref: o,
    decorative: n,
    orientation: t,
    className: F("shrink-0 bg-border", t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", e),
    ...r
}));
zC.displayName = sy.displayName;
var va = "focusScope.autoFocusOnMount"
  , ya = "focusScope.autoFocusOnUnmount"
  , Np = {
    bubbles: !1,
    cancelable: !0
}
  , $C = "FocusScope"
  , iy = p.forwardRef( (e, t) => {
    const {loop: n=!1, trapped: r=!1, onMountAutoFocus: o, onUnmountAutoFocus: s, ...i} = e
      , [l,u] = p.useState(null)
      , c = at(o)
      , d = at(s)
      , f = p.useRef(null)
      , g = Ce(t, v => u(v))
      , x = p.useRef({
        paused: !1,
        pause() {
            this.paused = !0
        },
        resume() {
            this.paused = !1
        }
    }).current;
    p.useEffect( () => {
        if (r) {
            let v = function(y) {
                if (x.paused || !l)
                    return;
                const b = y.target;
                l.contains(b) ? f.current = b : on(f.current, {
                    select: !0
                })
            }
              , w = function(y) {
                if (x.paused || !l)
                    return;
                const b = y.relatedTarget;
                b !== null && (l.contains(b) || on(f.current, {
                    select: !0
                }))
            }
              , m = function(y) {
                if (document.activeElement === document.body)
                    for (const C of y)
                        C.removedNodes.length > 0 && on(l)
            };
            document.addEventListener("focusin", v),
            document.addEventListener("focusout", w);
            const h = new MutationObserver(m);
            return l && h.observe(l, {
                childList: !0,
                subtree: !0
            }),
            () => {
                document.removeEventListener("focusin", v),
                document.removeEventListener("focusout", w),
                h.disconnect()
            }
        }
    }
    , [r, l, x.paused]),
    p.useEffect( () => {
        if (l) {
            jp.add(x);
            const v = document.activeElement;
            if (!l.contains(v)) {
                const m = new CustomEvent(va,Np);
                l.addEventListener(va, c),
                l.dispatchEvent(m),
                m.defaultPrevented || (UC(QC(ly(l)), {
                    select: !0
                }),
                document.activeElement === v && on(l))
            }
            return () => {
                l.removeEventListener(va, c),
                setTimeout( () => {
                    const m = new CustomEvent(ya,Np);
                    l.addEventListener(ya, d),
                    l.dispatchEvent(m),
                    m.defaultPrevented || on(v ?? document.body, {
                        select: !0
                    }),
                    l.removeEventListener(ya, d),
                    jp.remove(x)
                }
                , 0)
            }
        }
    }
    , [l, c, d, x]);
    const S = p.useCallback(v => {
        if (!n && !r || x.paused)
            return;
        const w = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey
          , m = document.activeElement;
        if (w && m) {
            const h = v.currentTarget
              , [y,b] = BC(h);
            y && b ? !v.shiftKey && m === b ? (v.preventDefault(),
            n && on(y, {
                select: !0
            })) : v.shiftKey && m === y && (v.preventDefault(),
            n && on(b, {
                select: !0
            })) : m === h && v.preventDefault()
        }
    }
    , [n, r, x.paused]);
    return a.jsx(ce.div, {
        tabIndex: -1,
        ...i,
        ref: g,
        onKeyDown: S
    })
}
);
iy.displayName = $C;
function UC(e, {select: t=!1}={}) {
    const n = document.activeElement;
    for (const r of e)
        if (on(r, {
            select: t
        }),
        document.activeElement !== n)
            return
}
function BC(e) {
    const t = ly(e)
      , n = kp(t, e)
      , r = kp(t.reverse(), e);
    return [n, r]
}
function ly(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const o = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function kp(e, t) {
    for (const n of e)
        if (!VC(n, {
            upTo: t
        }))
            return n
}
function VC(e, {upTo: t}) {
    if (getComputedStyle(e).visibility === "hidden")
        return !0;
    for (; e; ) {
        if (t !== void 0 && e === t)
            return !1;
        if (getComputedStyle(e).display === "none")
            return !0;
        e = e.parentElement
    }
    return !1
}
function HC(e) {
    return e instanceof HTMLInputElement && "select"in e
}
function on(e, {select: t=!1}={}) {
    if (e && e.focus) {
        const n = document.activeElement;
        e.focus({
            preventScroll: !0
        }),
        e !== n && HC(e) && t && e.select()
    }
}
var jp = WC();
function WC() {
    let e = [];
    return {
        add(t) {
            const n = e[0];
            t !== n && (n == null || n.pause()),
            e = Pp(e, t),
            e.unshift(t)
        },
        remove(t) {
            var n;
            e = Pp(e, t),
            (n = e[0]) == null || n.resume()
        }
    }
}
function Pp(e, t) {
    const n = [...e]
      , r = n.indexOf(t);
    return r !== -1 && n.splice(r, 1),
    n
}
function QC(e) {
    return e.filter(t => t.tagName !== "A")
}
var xa = 0;
function KC() {
    p.useEffect( () => {
        const e = document.querySelectorAll("[data-radix-focus-guard]");
        return document.body.insertAdjacentElement("afterbegin", e[0] ?? Tp()),
        document.body.insertAdjacentElement("beforeend", e[1] ?? Tp()),
        xa++,
        () => {
            xa === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(t => t.remove()),
            xa--
        }
    }
    , [])
}
function Tp() {
    const e = document.createElement("span");
    return e.setAttribute("data-radix-focus-guard", ""),
    e.tabIndex = 0,
    e.style.outline = "none",
    e.style.opacity = "0",
    e.style.position = "fixed",
    e.style.pointerEvents = "none",
    e
}
var Tt = function() {
    return Tt = Object.assign || function(t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var s in n)
                Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s])
        }
        return t
    }
    ,
    Tt.apply(this, arguments)
};
function ay(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n
}
function GC(e, t, n) {
    if (n || arguments.length === 2)
        for (var r = 0, o = t.length, s; r < o; r++)
            (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)),
            s[r] = t[r]);
    return e.concat(s || Array.prototype.slice.call(t))
}
var Ei = "right-scroll-bar-position"
  , Ci = "width-before-scroll-bar"
  , qC = "with-scroll-bars-hidden"
  , YC = "--removed-body-scroll-bar-size";
function wa(e, t) {
    return typeof e == "function" ? e(t) : e && (e.current = t),
    e
}
function XC(e, t) {
    var n = p.useState(function() {
        return {
            value: e,
            callback: t,
            facade: {
                get current() {
                    return n.value
                },
                set current(r) {
                    var o = n.value;
                    o !== r && (n.value = r,
                    n.callback(r, o))
                }
            }
        }
    })[0];
    return n.callback = t,
    n.facade
}
var ZC = typeof window < "u" ? p.useLayoutEffect : p.useEffect
  , Rp = new WeakMap;
function JC(e, t) {
    var n = XC(null, function(r) {
        return e.forEach(function(o) {
            return wa(o, r)
        })
    });
    return ZC(function() {
        var r = Rp.get(n);
        if (r) {
            var o = new Set(r)
              , s = new Set(e)
              , i = n.current;
            o.forEach(function(l) {
                s.has(l) || wa(l, null)
            }),
            s.forEach(function(l) {
                o.has(l) || wa(l, i)
            })
        }
        Rp.set(n, e)
    }, [e]),
    n
}
function eN(e) {
    return e
}
function tN(e, t) {
    t === void 0 && (t = eN);
    var n = []
      , r = !1
      , o = {
        read: function() {
            if (r)
                throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return n.length ? n[n.length - 1] : e
        },
        useMedium: function(s) {
            var i = t(s, r);
            return n.push(i),
            function() {
                n = n.filter(function(l) {
                    return l !== i
                })
            }
        },
        assignSyncMedium: function(s) {
            for (r = !0; n.length; ) {
                var i = n;
                n = [],
                i.forEach(s)
            }
            n = {
                push: function(l) {
                    return s(l)
                },
                filter: function() {
                    return n
                }
            }
        },
        assignMedium: function(s) {
            r = !0;
            var i = [];
            if (n.length) {
                var l = n;
                n = [],
                l.forEach(s),
                i = n
            }
            var u = function() {
                var d = i;
                i = [],
                d.forEach(s)
            }
              , c = function() {
                return Promise.resolve().then(u)
            };
            c(),
            n = {
                push: function(d) {
                    i.push(d),
                    c()
                },
                filter: function(d) {
                    return i = i.filter(d),
                    n
                }
            }
        }
    };
    return o
}
function nN(e) {
    e === void 0 && (e = {});
    var t = tN(null);
    return t.options = Tt({
        async: !0,
        ssr: !1
    }, e),
    t
}
var uy = function(e) {
    var t = e.sideCar
      , n = ay(e, ["sideCar"]);
    if (!t)
        throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var r = t.read();
    if (!r)
        throw new Error("Sidecar medium not found");
    return p.createElement(r, Tt({}, n))
};
uy.isSideCarExport = !0;
function rN(e, t) {
    return e.useMedium(t),
    uy
}
var cy = nN()
  , Sa = function() {}
  , Dl = p.forwardRef(function(e, t) {
    var n = p.useRef(null)
      , r = p.useState({
        onScrollCapture: Sa,
        onWheelCapture: Sa,
        onTouchMoveCapture: Sa
    })
      , o = r[0]
      , s = r[1]
      , i = e.forwardProps
      , l = e.children
      , u = e.className
      , c = e.removeScrollBar
      , d = e.enabled
      , f = e.shards
      , g = e.sideCar
      , x = e.noIsolation
      , S = e.inert
      , v = e.allowPinchZoom
      , w = e.as
      , m = w === void 0 ? "div" : w
      , h = e.gapMode
      , y = ay(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"])
      , b = g
      , C = JC([n, t])
      , k = Tt(Tt({}, y), o);
    return p.createElement(p.Fragment, null, d && p.createElement(b, {
        sideCar: cy,
        removeScrollBar: c,
        shards: f,
        noIsolation: x,
        inert: S,
        setCallbacks: s,
        allowPinchZoom: !!v,
        lockRef: n,
        gapMode: h
    }), i ? p.cloneElement(p.Children.only(l), Tt(Tt({}, k), {
        ref: C
    })) : p.createElement(m, Tt({}, k, {
        className: u,
        ref: C
    }), l))
});
Dl.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
};
Dl.classNames = {
    fullWidth: Ci,
    zeroRight: Ei
};
var oN = function() {
    if (typeof __webpack_nonce__ < "u")
        return __webpack_nonce__
};
function sN() {
    if (!document)
        return null;
    var e = document.createElement("style");
    e.type = "text/css";
    var t = oN();
    return t && e.setAttribute("nonce", t),
    e
}
function iN(e, t) {
    e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t))
}
function lN(e) {
    var t = document.head || document.getElementsByTagName("head")[0];
    t.appendChild(e)
}
var aN = function() {
    var e = 0
      , t = null;
    return {
        add: function(n) {
            e == 0 && (t = sN()) && (iN(t, n),
            lN(t)),
            e++
        },
        remove: function() {
            e--,
            !e && t && (t.parentNode && t.parentNode.removeChild(t),
            t = null)
        }
    }
}
  , uN = function() {
    var e = aN();
    return function(t, n) {
        p.useEffect(function() {
            return e.add(t),
            function() {
                e.remove()
            }
        }, [t && n])
    }
}
  , dy = function() {
    var e = uN()
      , t = function(n) {
        var r = n.styles
          , o = n.dynamic;
        return e(r, o),
        null
    };
    return t
}
  , cN = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
}
  , ba = function(e) {
    return parseInt(e || "", 10) || 0
}
  , dN = function(e) {
    var t = window.getComputedStyle(document.body)
      , n = t[e === "padding" ? "paddingLeft" : "marginLeft"]
      , r = t[e === "padding" ? "paddingTop" : "marginTop"]
      , o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [ba(n), ba(r), ba(o)]
}
  , fN = function(e) {
    if (e === void 0 && (e = "margin"),
    typeof window > "u")
        return cN;
    var t = dN(e)
      , n = document.documentElement.clientWidth
      , r = window.innerWidth;
    return {
        left: t[0],
        top: t[1],
        right: t[2],
        gap: Math.max(0, r - n + t[2] - t[0])
    }
}
  , pN = dy()
  , Hr = "data-scroll-locked"
  , hN = function(e, t, n, r) {
    var o = e.left
      , s = e.top
      , i = e.right
      , l = e.gap;
    return n === void 0 && (n = "margin"),
    `
  .`.concat(qC, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(l, "px ").concat(r, `;
  }
  body[`).concat(Hr, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([t && "position: relative ".concat(r, ";"), n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(l, "px ").concat(r, `;
    `), n === "padding" && "padding-right: ".concat(l, "px ").concat(r, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(Ei, ` {
    right: `).concat(l, "px ").concat(r, `;
  }
  
  .`).concat(Ci, ` {
    margin-right: `).concat(l, "px ").concat(r, `;
  }
  
  .`).concat(Ei, " .").concat(Ei, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Ci, " .").concat(Ci, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Hr, `] {
    `).concat(YC, ": ").concat(l, `px;
  }
`)
}
  , Op = function() {
    var e = parseInt(document.body.getAttribute(Hr) || "0", 10);
    return isFinite(e) ? e : 0
}
  , mN = function() {
    p.useEffect(function() {
        return document.body.setAttribute(Hr, (Op() + 1).toString()),
        function() {
            var e = Op() - 1;
            e <= 0 ? document.body.removeAttribute(Hr) : document.body.setAttribute(Hr, e.toString())
        }
    }, [])
}
  , gN = function(e) {
    var t = e.noRelative
      , n = e.noImportant
      , r = e.gapMode
      , o = r === void 0 ? "margin" : r;
    mN();
    var s = p.useMemo(function() {
        return fN(o)
    }, [o]);
    return p.createElement(pN, {
        styles: hN(s, !t, o, n ? "" : "!important")
    })
}
  , Bu = !1;
if (typeof window < "u")
    try {
        var ni = Object.defineProperty({}, "passive", {
            get: function() {
                return Bu = !0,
                !0
            }
        });
        window.addEventListener("test", ni, ni),
        window.removeEventListener("test", ni, ni)
    } catch {
        Bu = !1
    }
var xr = Bu ? {
    passive: !1
} : !1
  , vN = function(e) {
    return e.tagName === "TEXTAREA"
}
  , fy = function(e, t) {
    if (!(e instanceof Element))
        return !1;
    var n = window.getComputedStyle(e);
    return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !vN(e) && n[t] === "visible")
}
  , yN = function(e) {
    return fy(e, "overflowY")
}
  , xN = function(e) {
    return fy(e, "overflowX")
}
  , Ap = function(e, t) {
    var n = t.ownerDocument
      , r = t;
    do {
        typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
        var o = py(e, r);
        if (o) {
            var s = hy(e, r)
              , i = s[1]
              , l = s[2];
            if (i > l)
                return !0
        }
        r = r.parentNode
    } while (r && r !== n.body);
    return !1
}
  , wN = function(e) {
    var t = e.scrollTop
      , n = e.scrollHeight
      , r = e.clientHeight;
    return [t, n, r]
}
  , SN = function(e) {
    var t = e.scrollLeft
      , n = e.scrollWidth
      , r = e.clientWidth;
    return [t, n, r]
}
  , py = function(e, t) {
    return e === "v" ? yN(t) : xN(t)
}
  , hy = function(e, t) {
    return e === "v" ? wN(t) : SN(t)
}
  , bN = function(e, t) {
    return e === "h" && t === "rtl" ? -1 : 1
}
  , EN = function(e, t, n, r, o) {
    var s = bN(e, window.getComputedStyle(t).direction)
      , i = s * r
      , l = n.target
      , u = t.contains(l)
      , c = !1
      , d = i > 0
      , f = 0
      , g = 0;
    do {
        var x = hy(e, l)
          , S = x[0]
          , v = x[1]
          , w = x[2]
          , m = v - w - s * S;
        (S || m) && py(e, l) && (f += m,
        g += S),
        l instanceof ShadowRoot ? l = l.host : l = l.parentNode
    } while (!u && l !== document.body || u && (t.contains(l) || t === l));
    return (d && (Math.abs(f) < 1 || !o) || !d && (Math.abs(g) < 1 || !o)) && (c = !0),
    c
}
  , ri = function(e) {
    return "changedTouches"in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
}
  , _p = function(e) {
    return [e.deltaX, e.deltaY]
}
  , Dp = function(e) {
    return e && "current"in e ? e.current : e
}
  , CN = function(e, t) {
    return e[0] === t[0] && e[1] === t[1]
}
  , NN = function(e) {
    return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`)
}
  , kN = 0
  , wr = [];
function jN(e) {
    var t = p.useRef([])
      , n = p.useRef([0, 0])
      , r = p.useRef()
      , o = p.useState(kN++)[0]
      , s = p.useState(dy)[0]
      , i = p.useRef(e);
    p.useEffect(function() {
        i.current = e
    }, [e]),
    p.useEffect(function() {
        if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(o));
            var v = GC([e.lockRef.current], (e.shards || []).map(Dp), !0).filter(Boolean);
            return v.forEach(function(w) {
                return w.classList.add("allow-interactivity-".concat(o))
            }),
            function() {
                document.body.classList.remove("block-interactivity-".concat(o)),
                v.forEach(function(w) {
                    return w.classList.remove("allow-interactivity-".concat(o))
                })
            }
        }
    }, [e.inert, e.lockRef.current, e.shards]);
    var l = p.useCallback(function(v, w) {
        if ("touches"in v && v.touches.length === 2 || v.type === "wheel" && v.ctrlKey)
            return !i.current.allowPinchZoom;
        var m = ri(v), h = n.current, y = "deltaX"in v ? v.deltaX : h[0] - m[0], b = "deltaY"in v ? v.deltaY : h[1] - m[1], C, k = v.target, N = Math.abs(y) > Math.abs(b) ? "h" : "v";
        if ("touches"in v && N === "h" && k.type === "range")
            return !1;
        var j = Ap(N, k);
        if (!j)
            return !0;
        if (j ? C = N : (C = N === "v" ? "h" : "v",
        j = Ap(N, k)),
        !j)
            return !1;
        if (!r.current && "changedTouches"in v && (y || b) && (r.current = C),
        !C)
            return !0;
        var R = r.current || C;
        return EN(R, w, v, R === "h" ? y : b, !0)
    }, [])
      , u = p.useCallback(function(v) {
        var w = v;
        if (!(!wr.length || wr[wr.length - 1] !== s)) {
            var m = "deltaY"in w ? _p(w) : ri(w)
              , h = t.current.filter(function(C) {
                return C.name === w.type && (C.target === w.target || w.target === C.shadowParent) && CN(C.delta, m)
            })[0];
            if (h && h.should) {
                w.cancelable && w.preventDefault();
                return
            }
            if (!h) {
                var y = (i.current.shards || []).map(Dp).filter(Boolean).filter(function(C) {
                    return C.contains(w.target)
                })
                  , b = y.length > 0 ? l(w, y[0]) : !i.current.noIsolation;
                b && w.cancelable && w.preventDefault()
            }
        }
    }, [])
      , c = p.useCallback(function(v, w, m, h) {
        var y = {
            name: v,
            delta: w,
            target: m,
            should: h,
            shadowParent: PN(m)
        };
        t.current.push(y),
        setTimeout(function() {
            t.current = t.current.filter(function(b) {
                return b !== y
            })
        }, 1)
    }, [])
      , d = p.useCallback(function(v) {
        n.current = ri(v),
        r.current = void 0
    }, [])
      , f = p.useCallback(function(v) {
        c(v.type, _p(v), v.target, l(v, e.lockRef.current))
    }, [])
      , g = p.useCallback(function(v) {
        c(v.type, ri(v), v.target, l(v, e.lockRef.current))
    }, []);
    p.useEffect(function() {
        return wr.push(s),
        e.setCallbacks({
            onScrollCapture: f,
            onWheelCapture: f,
            onTouchMoveCapture: g
        }),
        document.addEventListener("wheel", u, xr),
        document.addEventListener("touchmove", u, xr),
        document.addEventListener("touchstart", d, xr),
        function() {
            wr = wr.filter(function(v) {
                return v !== s
            }),
            document.removeEventListener("wheel", u, xr),
            document.removeEventListener("touchmove", u, xr),
            document.removeEventListener("touchstart", d, xr)
        }
    }, []);
    var x = e.removeScrollBar
      , S = e.inert;
    return p.createElement(p.Fragment, null, S ? p.createElement(s, {
        styles: NN(o)
    }) : null, x ? p.createElement(gN, {
        gapMode: e.gapMode
    }) : null)
}
function PN(e) {
    for (var t = null; e !== null; )
        e instanceof ShadowRoot && (t = e.host,
        e = e.host),
        e = e.parentNode;
    return t
}
const TN = rN(cy, jN);
var my = p.forwardRef(function(e, t) {
    return p.createElement(Dl, Tt({}, e, {
        ref: t,
        sideCar: TN
    }))
});
my.classNames = Dl.classNames;
var RN = function(e) {
    if (typeof document > "u")
        return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body
}
  , Sr = new WeakMap
  , oi = new WeakMap
  , si = {}
  , Ea = 0
  , gy = function(e) {
    return e && (e.host || gy(e.parentNode))
}
  , ON = function(e, t) {
    return t.map(function(n) {
        if (e.contains(n))
            return n;
        var r = gy(n);
        return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"),
        null)
    }).filter(function(n) {
        return !!n
    })
}
  , AN = function(e, t, n, r) {
    var o = ON(t, Array.isArray(e) ? e : [e]);
    si[n] || (si[n] = new WeakMap);
    var s = si[n]
      , i = []
      , l = new Set
      , u = new Set(o)
      , c = function(f) {
        !f || l.has(f) || (l.add(f),
        c(f.parentNode))
    };
    o.forEach(c);
    var d = function(f) {
        !f || u.has(f) || Array.prototype.forEach.call(f.children, function(g) {
            if (l.has(g))
                d(g);
            else
                try {
                    var x = g.getAttribute(r)
                      , S = x !== null && x !== "false"
                      , v = (Sr.get(g) || 0) + 1
                      , w = (s.get(g) || 0) + 1;
                    Sr.set(g, v),
                    s.set(g, w),
                    i.push(g),
                    v === 1 && S && oi.set(g, !0),
                    w === 1 && g.setAttribute(n, "true"),
                    S || g.setAttribute(r, "true")
                } catch (m) {
                    console.error("aria-hidden: cannot operate on ", g, m)
                }
        })
    };
    return d(t),
    l.clear(),
    Ea++,
    function() {
        i.forEach(function(f) {
            var g = Sr.get(f) - 1
              , x = s.get(f) - 1;
            Sr.set(f, g),
            s.set(f, x),
            g || (oi.has(f) || f.removeAttribute(r),
            oi.delete(f)),
            x || f.removeAttribute(n)
        }),
        Ea--,
        Ea || (Sr = new WeakMap,
        Sr = new WeakMap,
        oi = new WeakMap,
        si = {})
    }
}
  , _N = function(e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e])
      , o = RN(e);
    return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
    AN(r, o, n, "aria-hidden")) : function() {
        return null
    }
}
  , cd = "Dialog"
  , [vy,yy] = gr(cd)
  , [DN,St] = vy(cd)
  , xy = e => {
    const {__scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: s, modal: i=!0} = e
      , l = p.useRef(null)
      , u = p.useRef(null)
      , [c=!1,d] = Qc({
        prop: r,
        defaultProp: o,
        onChange: s
    });
    return a.jsx(DN, {
        scope: t,
        triggerRef: l,
        contentRef: u,
        contentId: Si(),
        titleId: Si(),
        descriptionId: Si(),
        open: c,
        onOpenChange: d,
        onOpenToggle: p.useCallback( () => d(f => !f), [d]),
        modal: i,
        children: n
    })
}
;
xy.displayName = cd;
var wy = "DialogTrigger"
  , Sy = p.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = St(wy, n)
      , s = Ce(t, o.triggerRef);
    return a.jsx(ce.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": pd(o.open),
        ...r,
        ref: s,
        onClick: re(e.onClick, o.onOpenToggle)
    })
}
);
Sy.displayName = wy;
var dd = "DialogPortal"
  , [MN,by] = vy(dd, {
    forceMount: void 0
})
  , Ey = e => {
    const {__scopeDialog: t, forceMount: n, children: r, container: o} = e
      , s = St(dd, t);
    return a.jsx(MN, {
        scope: t,
        forceMount: n,
        children: p.Children.map(r, i => a.jsx(So, {
            present: n || s.open,
            children: a.jsx(Wc, {
                asChild: !0,
                container: o,
                children: i
            })
        }))
    })
}
;
Ey.displayName = dd;
var nl = "DialogOverlay"
  , Cy = p.forwardRef( (e, t) => {
    const n = by(nl, e.__scopeDialog)
      , {forceMount: r=n.forceMount, ...o} = e
      , s = St(nl, e.__scopeDialog);
    return s.modal ? a.jsx(So, {
        present: r || s.open,
        children: a.jsx(IN, {
            ...o,
            ref: t
        })
    }) : null
}
);
Cy.displayName = nl;
var LN = gs("DialogOverlay.RemoveScroll")
  , IN = p.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = St(nl, n);
    return a.jsx(my, {
        as: LN,
        allowPinchZoom: !0,
        shards: [o.contentRef],
        children: a.jsx(ce.div, {
            "data-state": pd(o.open),
            ...r,
            ref: t,
            style: {
                pointerEvents: "auto",
                ...r.style
            }
        })
    })
}
)
  , pr = "DialogContent"
  , Ny = p.forwardRef( (e, t) => {
    const n = by(pr, e.__scopeDialog)
      , {forceMount: r=n.forceMount, ...o} = e
      , s = St(pr, e.__scopeDialog);
    return a.jsx(So, {
        present: r || s.open,
        children: s.modal ? a.jsx(FN, {
            ...o,
            ref: t
        }) : a.jsx(zN, {
            ...o,
            ref: t
        })
    })
}
);
Ny.displayName = pr;
var FN = p.forwardRef( (e, t) => {
    const n = St(pr, e.__scopeDialog)
      , r = p.useRef(null)
      , o = Ce(t, n.contentRef, r);
    return p.useEffect( () => {
        const s = r.current;
        if (s)
            return _N(s)
    }
    , []),
    a.jsx(ky, {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: re(e.onCloseAutoFocus, s => {
            var i;
            s.preventDefault(),
            (i = n.triggerRef.current) == null || i.focus()
        }
        ),
        onPointerDownOutside: re(e.onPointerDownOutside, s => {
            const i = s.detail.originalEvent
              , l = i.button === 0 && i.ctrlKey === !0;
            (i.button === 2 || l) && s.preventDefault()
        }
        ),
        onFocusOutside: re(e.onFocusOutside, s => s.preventDefault())
    })
}
)
  , zN = p.forwardRef( (e, t) => {
    const n = St(pr, e.__scopeDialog)
      , r = p.useRef(!1)
      , o = p.useRef(!1);
    return a.jsx(ky, {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: s => {
            var i, l;
            (i = e.onCloseAutoFocus) == null || i.call(e, s),
            s.defaultPrevented || (r.current || (l = n.triggerRef.current) == null || l.focus(),
            s.preventDefault()),
            r.current = !1,
            o.current = !1
        }
        ,
        onInteractOutside: s => {
            var u, c;
            (u = e.onInteractOutside) == null || u.call(e, s),
            s.defaultPrevented || (r.current = !0,
            s.detail.originalEvent.type === "pointerdown" && (o.current = !0));
            const i = s.target;
            ((c = n.triggerRef.current) == null ? void 0 : c.contains(i)) && s.preventDefault(),
            s.detail.originalEvent.type === "focusin" && o.current && s.preventDefault()
        }
    })
}
)
  , ky = p.forwardRef( (e, t) => {
    const {__scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: s, ...i} = e
      , l = St(pr, n)
      , u = p.useRef(null)
      , c = Ce(t, u);
    return KC(),
    a.jsxs(a.Fragment, {
        children: [a.jsx(iy, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: o,
            onUnmountAutoFocus: s,
            children: a.jsx(El, {
                role: "dialog",
                id: l.contentId,
                "aria-describedby": l.descriptionId,
                "aria-labelledby": l.titleId,
                "data-state": pd(l.open),
                ...i,
                ref: c,
                onDismiss: () => l.onOpenChange(!1)
            })
        }), a.jsxs(a.Fragment, {
            children: [a.jsx(UN, {
                titleId: l.titleId
            }), a.jsx(VN, {
                contentRef: u,
                descriptionId: l.descriptionId
            })]
        })]
    })
}
)
  , fd = "DialogTitle"
  , jy = p.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = St(fd, n);
    return a.jsx(ce.h2, {
        id: o.titleId,
        ...r,
        ref: t
    })
}
);
jy.displayName = fd;
var Py = "DialogDescription"
  , Ty = p.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = St(Py, n);
    return a.jsx(ce.p, {
        id: o.descriptionId,
        ...r,
        ref: t
    })
}
);
Ty.displayName = Py;
var Ry = "DialogClose"
  , Oy = p.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = St(Ry, n);
    return a.jsx(ce.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: re(e.onClick, () => o.onOpenChange(!1))
    })
}
);
Oy.displayName = Ry;
function pd(e) {
    return e ? "open" : "closed"
}
var Ay = "DialogTitleWarning"
  , [$N,_y] = cS(Ay, {
    contentName: pr,
    titleName: fd,
    docsSlug: "dialog"
})
  , UN = ({titleId: e}) => {
    const t = _y(Ay)
      , n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return p.useEffect( () => {
        e && (document.getElementById(e) || console.error(n))
    }
    , [n, e]),
    null
}
  , BN = "DialogDescriptionWarning"
  , VN = ({contentRef: e, descriptionId: t}) => {
    const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${_y(BN).contentName}}.`;
    return p.useEffect( () => {
        var s;
        const o = (s = e.current) == null ? void 0 : s.getAttribute("aria-describedby");
        t && o && (document.getElementById(t) || console.warn(r))
    }
    , [r, e, t]),
    null
}
  , Dy = xy
  , HN = Sy
  , My = Ey
  , hd = Cy
  , md = Ny
  , gd = jy
  , vd = Ty
  , yd = Oy;
const WN = Dy
  , QN = My
  , Ly = p.forwardRef( ({className: e, ...t}, n) => a.jsx(hd, {
    className: F("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
    ...t,
    ref: n
}));
Ly.displayName = hd.displayName;
const KN = Os("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500", {
    variants: {
        side: {
            top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
            bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
            left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
            right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
        }
    },
    defaultVariants: {
        side: "right"
    }
})
  , Iy = p.forwardRef( ({side: e="right", className: t, children: n, ...r}, o) => a.jsxs(QN, {
    children: [a.jsx(Ly, {}), a.jsxs(md, {
        ref: o,
        className: F(KN({
            side: e
        }), t),
        ...r,
        children: [n, a.jsxs(yd, {
            className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
            children: [a.jsx(mv, {
                className: "h-4 w-4"
            }), a.jsx("span", {
                className: "sr-only",
                children: "Close"
            })]
        })]
    })]
}));
Iy.displayName = md.displayName;
const Fy = ({className: e, ...t}) => a.jsx("div", {
    className: F("flex flex-col space-y-2 text-center sm:text-left", e),
    ...t
});
Fy.displayName = "SheetHeader";
const zy = p.forwardRef( ({className: e, ...t}, n) => a.jsx(gd, {
    ref: n,
    className: F("text-lg font-semibold text-foreground", e),
    ...t
}));
zy.displayName = gd.displayName;
const $y = p.forwardRef( ({className: e, ...t}, n) => a.jsx(vd, {
    ref: n,
    className: F("text-sm text-muted-foreground", e),
    ...t
}));
$y.displayName = vd.displayName;
function Se({className: e, ...t}) {
    return a.jsx("div", {
        className: F("animate-pulse rounded-md bg-muted", e),
        ...t
    })
}
const GN = "sidebar_state"
  , qN = 60 * 60 * 24 * 7
  , YN = "16rem"
  , XN = "18rem"
  , ZN = "3rem"
  , JN = "b"
  , Uy = p.createContext(null);
function xd() {
    const e = p.useContext(Uy);
    if (!e)
        throw new Error("useSidebar must be used within a SidebarProvider.");
    return e
}
function e2({defaultOpen: e=!0, open: t, onOpenChange: n, className: r, style: o, children: s, ...i}) {
    const l = DC()
      , [u,c] = p.useState(!1)
      , [d,f] = p.useState(e)
      , g = t ?? d
      , x = p.useCallback(m => {
        const h = typeof m == "function" ? m(g) : m;
        n ? n(h) : f(h),
        document.cookie = `${GN}=${h}; path=/; max-age=${qN}`
    }
    , [n, g])
      , S = p.useCallback( () => l ? c(m => !m) : x(m => !m), [l, x, c]);
    p.useEffect( () => {
        const m = h => {
            h.key === JN && (h.metaKey || h.ctrlKey) && (h.preventDefault(),
            S())
        }
        ;
        return window.addEventListener("keydown", m),
        () => window.removeEventListener("keydown", m)
    }
    , [S]);
    const v = g ? "expanded" : "collapsed"
      , w = p.useMemo( () => ({
        state: v,
        open: g,
        setOpen: x,
        isMobile: l,
        openMobile: u,
        setOpenMobile: c,
        toggleSidebar: S
    }), [v, g, x, l, u, c, S]);
    return a.jsx(Uy.Provider, {
        value: w,
        children: a.jsx(ny, {
            delayDuration: 0,
            children: a.jsx("div", {
                "data-slot": "sidebar-wrapper",
                style: {
                    "--sidebar-width": YN,
                    "--sidebar-width-icon": ZN,
                    ...o
                },
                className: F("group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full", r),
                ...i,
                children: s
            })
        })
    })
}
function t2({side: e="left", variant: t="sidebar", collapsible: n="offcanvas", className: r, children: o, ...s}) {
    const {isMobile: i, state: l, openMobile: u, setOpenMobile: c} = xd();
    return n === "none" ? a.jsx("div", {
        "data-slot": "sidebar",
        className: F("bg-sidebar text-sidebar-foreground flex h-full w-[var(--sidebar-width)] flex-col", r),
        ...s,
        children: o
    }) : i ? a.jsx(WN, {
        open: u,
        onOpenChange: c,
        ...s,
        children: a.jsxs(Iy, {
            "data-sidebar": "sidebar",
            "data-slot": "sidebar",
            "data-mobile": "true",
            className: "bg-sidebar text-sidebar-foreground w-[var(--sidebar-width)] p-0 [&>button]:hidden",
            style: {
                "--sidebar-width": XN
            },
            side: e,
            children: [a.jsxs(Fy, {
                className: "sr-only",
                children: [a.jsx(zy, {
                    children: "Sidebar"
                }), a.jsx($y, {
                    children: "Displays the mobile sidebar."
                })]
            }), a.jsx("div", {
                className: "flex h-full w-full flex-col",
                children: o
            })]
        })
    }) : a.jsxs("div", {
        className: "group peer text-sidebar-foreground hidden md:block",
        "data-state": l,
        "data-collapsible": l === "collapsed" ? n : "",
        "data-variant": t,
        "data-side": e,
        "data-slot": "sidebar",
        children: [a.jsx("div", {
            "data-slot": "sidebar-gap",
            className: F("relative w-[var(--sidebar-width)] bg-transparent transition-[width] duration-200 ease-linear", "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", t === "floating" || t === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+var(--spacing-4))]" : "group-data-[collapsible=icon]:w-[var(--sidebar-width-icon)]")
        }), a.jsx("div", {
            "data-slot": "sidebar-container",
            className: F("fixed inset-y-0 z-10 hidden h-svh w-[var(--sidebar-width)] transition-[left,right,width] duration-200 ease-linear md:flex", e === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]", t === "floating" || t === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+var(--spacing-4)+2px)]" : "group-data-[collapsible=icon]:w-[var(--sidebar-width-icon)] group-data-[side=left]:border-r group-data-[side=right]:border-l", r),
            ...s,
            children: a.jsx("div", {
                "data-sidebar": "sidebar",
                "data-slot": "sidebar-inner",
                className: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm",
                children: o
            })
        })]
    })
}
function n2({className: e, onClick: t, ...n}) {
    const {toggleSidebar: r} = xd();
    return a.jsxs(On, {
        "data-sidebar": "trigger",
        "data-slot": "sidebar-trigger",
        variant: "ghost",
        size: "icon",
        className: F("h-7 w-7", e),
        onClick: o => {
            t == null || t(o),
            r()
        }
        ,
        ...n,
        children: [a.jsx(fb, {}), a.jsx("span", {
            className: "sr-only",
            children: "Toggle Sidebar"
        })]
    })
}
function r2({className: e, ...t}) {
    return a.jsx("div", {
        "data-slot": "sidebar-header",
        "data-sidebar": "header",
        className: F("flex flex-col gap-2 p-2", e),
        ...t
    })
}
function o2({className: e, ...t}) {
    return a.jsx("div", {
        "data-slot": "sidebar-footer",
        "data-sidebar": "footer",
        className: F("flex flex-col gap-2 p-2", e),
        ...t
    })
}
function s2({className: e, ...t}) {
    return a.jsx("div", {
        "data-slot": "sidebar-content",
        "data-sidebar": "content",
        className: F("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", e),
        ...t
    })
}
function i2({className: e, ...t}) {
    return a.jsx("div", {
        "data-slot": "sidebar-group",
        "data-sidebar": "group",
        className: F("relative flex w-full min-w-0 flex-col p-2", e),
        ...t
    })
}
function l2({className: e, asChild: t=!1, ...n}) {
    const r = t ? Hc : "div";
    return a.jsx(r, {
        "data-slot": "sidebar-group-label",
        "data-sidebar": "group-label",
        className: F("text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:shrink-0", "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0", e),
        ...n
    })
}
function a2({className: e, ...t}) {
    return a.jsx("div", {
        "data-slot": "sidebar-group-content",
        "data-sidebar": "group-content",
        className: F("w-full text-sm", e),
        ...t
    })
}
function u2({className: e, ...t}) {
    return a.jsx("ul", {
        "data-slot": "sidebar-menu",
        "data-sidebar": "menu",
        className: F("flex w-full min-w-0 flex-col gap-1", e),
        ...t
    })
}
function c2({className: e, ...t}) {
    return a.jsx("li", {
        "data-slot": "sidebar-menu-item",
        "data-sidebar": "menu-item",
        className: F("group/menu-item relative", e),
        ...t
    })
}
const d2 = Os("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:w-8! group-data-[collapsible=icon]:h-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", {
    variants: {
        variant: {
            default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
            outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
        },
        size: {
            default: "h-8 text-sm",
            sm: "h-7 text-xs",
            lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function f2({asChild: e=!1, isActive: t=!1, variant: n="default", size: r="default", tooltip: o, className: s, ...i}) {
    const l = e ? Hc : "button"
      , {isMobile: u, state: c} = xd()
      , d = a.jsx(l, {
        "data-slot": "sidebar-menu-button",
        "data-sidebar": "menu-button",
        "data-size": r,
        "data-active": t,
        className: F(d2({
            variant: n,
            size: r
        }), s),
        ...i
    });
    return o ? (typeof o == "string" && (o = {
        children: o
    }),
    a.jsxs(AC, {
        children: [a.jsx(_C, {
            asChild: !0,
            children: d
        }), a.jsx(ry, {
            side: "right",
            align: "center",
            hidden: c !== "collapsed" || u,
            ...o
        })]
    })) : d
}
const p2 = [{
    title: "Overview",
    url: "/",
    icon: lb,
    testId: "nav-overview"
}, {
    title: "Health Checks",
    url: "/health",
    icon: vs,
    testId: "nav-health"
}, {
    title: "Deployments",
    url: "/deployments",
    icon: dr,
    testId: "nav-deployments"
}, {
    title: "Environments",
    url: "/environments",
    icon: rr,
    testId: "nav-environments"
}, {
    title: "Settings",
    url: "/settings",
    icon: hb,
    testId: "nav-settings"
}];
function h2() {
    const [e] = b1();
    return a.jsxs(t2, {
        children: [a.jsx(r2, {
            className: "p-6 border-b",
            children: a.jsxs("div", {
                className: "flex items-center gap-3",
                children: [a.jsx("div", {
                    className: "w-8 h-8 rounded-lg bg-primary flex items-center justify-center",
                    children: a.jsx(rr, {
                        size: 18,
                        className: "text-primary-foreground"
                    })
                }), a.jsxs("div", {
                    children: [a.jsx("h2", {
                        className: "text-base font-semibold text-foreground",
                        children: "Nimbus Deploy"
                    }), a.jsx("p", {
                        className: "text-xs text-muted-foreground",
                        children: "Blue/Green CI/CD"
                    })]
                })]
            })
        }), a.jsx(s2, {
            children: a.jsxs(i2, {
                children: [a.jsx(l2, {
                    children: "Navigation"
                }), a.jsx(a2, {
                    children: a.jsx(u2, {
                        children: p2.map(t => {
                            const n = e === t.url;
                            return a.jsx(c2, {
                                children: a.jsx(f2, {
                                    asChild: !0,
                                    className: F(n && "bg-sidebar-accent text-sidebar-accent-foreground font-medium"),
                                    "data-testid": t.testId,
                                    children: a.jsxs(N1, {
                                        href: t.url,
                                        children: [a.jsx(t.icon, {
                                            size: 18
                                        }), a.jsx("span", {
                                            children: t.title
                                        })]
                                    })
                                })
                            }, t.title)
                        }
                        )
                    })
                })]
            })
        }), a.jsx(o2, {
            className: "p-4 border-t",
            children: a.jsxs("div", {
                className: "text-xs text-muted-foreground space-y-1",
                children: [a.jsx("p", {
                    className: "font-medium",
                    children: "System Status"
                }), a.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [a.jsx("div", {
                        className: "w-2 h-2 rounded-full bg-green-500 animate-pulse"
                    }), a.jsx("span", {
                        children: "All systems operational"
                    })]
                })]
            })
        })]
    })
}
const By = p.createContext(void 0);
function m2({children: e, defaultTheme: t="light"}) {
    const [n,r] = p.useState( () => localStorage.getItem("theme") || t);
    p.useEffect( () => {
        const s = document.documentElement;
        s.classList.remove("light", "dark"),
        s.classList.add(n),
        localStorage.setItem("theme", n)
    }
    , [n]);
    const o = () => {
        r(s => s === "light" ? "dark" : "light")
    }
    ;
    return a.jsx(By.Provider, {
        value: {
            theme: n,
            setTheme: r,
            toggleTheme: o
        },
        children: e
    })
}
function g2() {
    const e = p.useContext(By);
    if (e === void 0)
        throw new Error("useTheme must be used within a ThemeProvider");
    return e
}
function Vy() {
    const {theme: e, toggleTheme: t} = g2();
    return a.jsxs(On, {
        variant: "ghost",
        size: "icon",
        onClick: t,
        "data-testid": "button-theme-toggle",
        children: [e === "light" ? a.jsx(cb, {
            size: 18
        }) : a.jsx(mb, {
            size: 18
        }), a.jsx("span", {
            className: "sr-only",
            children: "Toggle theme"
        })]
    })
}
const De = p.forwardRef( ({className: e, ...t}, n) => a.jsx("div", {
    ref: n,
    className: F("shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm", e),
    ...t
}));
De.displayName = "Card";
const v2 = p.forwardRef( ({className: e, ...t}, n) => a.jsx("div", {
    ref: n,
    className: F("flex flex-col space-y-1.5 p-6", e),
    ...t
}));
v2.displayName = "CardHeader";
const y2 = p.forwardRef( ({className: e, ...t}, n) => a.jsx("div", {
    ref: n,
    className: F("text-2xl font-semibold leading-none tracking-tight", e),
    ...t
}));
y2.displayName = "CardTitle";
const x2 = p.forwardRef( ({className: e, ...t}, n) => a.jsx("div", {
    ref: n,
    className: F("text-sm text-muted-foreground", e),
    ...t
}));
x2.displayName = "CardDescription";
const Hy = p.forwardRef( ({className: e, ...t}, n) => a.jsx("div", {
    ref: n,
    className: F("p-6 pt-0", e),
    ...t
}));
Hy.displayName = "CardContent";
const w2 = p.forwardRef( ({className: e, ...t}, n) => a.jsx("div", {
    ref: n,
    className: F("flex items-center p-6 pt-0", e),
    ...t
}));
w2.displayName = "CardFooter";
const S2 = Os("whitespace-nowrap inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover-elevate ", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground shadow-xs",
            secondary: "border-transparent bg-secondary text-secondary-foreground",
            destructive: "border-transparent bg-destructive text-destructive-foreground shadow-xs",
            outline: " border [border-color:var(--badge-outline)] shadow-xs"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Wy({className: e, variant: t, ...n}) {
    return a.jsx("div", {
        className: F(S2({
            variant: t
        }), e),
        ...n
    })
}
function wd({environment: e, status: t, size: n="base", showIcon: r=!0, className: o}) {
    const s = t === "production"
      , i = {
        blue: "bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800",
        green: "bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800"
    }
      , l = {
        sm: "text-xs px-2 py-0.5",
        base: "text-sm px-3 py-1",
        lg: "text-base px-4 py-1.5 font-semibold"
    }
      , u = {
        sm: 12,
        base: 14,
        lg: 18
    }
      , c = `${e.charAt(0).toUpperCase() + e.slice(1)} ${s ? "(Production)" : `(${t.charAt(0).toUpperCase() + t.slice(1)})`}`;
    return a.jsxs(Wy, {
        variant: "default",
        className: F("rounded-full font-medium border whitespace-nowrap", i[e], l[n], o),
        "data-testid": `badge-environment-${e}-${t}`,
        children: [r && a.jsx(rr, {
            className: "mr-1.5",
            size: u[n]
        }), c]
    })
}
function b2({productionEnv: e, trafficRouting: t, onSwapEnvironments: n, onRollback: r, onDeploy: o, className: s}) {
    return a.jsxs(De, {
        className: "p-8 rounded-xl border bg-gradient-to-br from-background to-muted/20 h-48 flex flex-col justify-between",
        "data-testid": "card-hero-status",
        children: [a.jsxs("div", {
            className: "flex items-start justify-between gap-4 flex-wrap",
            children: [a.jsxs("div", {
                className: "space-y-3",
                children: [a.jsx(wd, {
                    environment: e.name,
                    status: e.status,
                    size: "lg"
                }), a.jsx("div", {
                    className: "flex items-center gap-4 flex-wrap",
                    children: a.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [a.jsx(dr, {
                            size: 18,
                            className: "text-muted-foreground"
                        }), a.jsx("span", {
                            className: "font-mono text-lg font-semibold text-foreground",
                            "data-testid": "text-commit-hash",
                            children: e.commitHash.substring(0, 7)
                        }), a.jsx("span", {
                            className: "text-muted-foreground",
                            children: "•"
                        }), a.jsxs("span", {
                            className: "text-muted-foreground font-medium",
                            "data-testid": "text-version",
                            children: ["v", e.version]
                        })]
                    })
                }), a.jsxs("div", {
                    className: "flex items-center gap-2 text-sm text-muted-foreground",
                    children: [a.jsx(Yc, {
                        size: 16
                    }), a.jsxs("span", {
                        children: ["Deployed ", ho(e.deployedAt)]
                    }), a.jsxs("span", {
                        children: ["by ", e.deployedBy]
                    })]
                })]
            }), a.jsxs("div", {
                className: "flex items-center gap-3 flex-wrap",
                children: [a.jsxs(On, {
                    variant: "default",
                    size: "default",
                    onClick: o,
                    disabled: !0,
                    "data-testid": "button-deploy-green",
                    children: [a.jsx(pb, {
                        size: 18,
                        className: "mr-2"
                    }), "Deploy to Green"]
                }), a.jsxs(On, {
                    variant: "outline",
                    size: "default",
                    onClick: n,
                    disabled: !n,
                    "data-testid": "button-swap-environments",
                    children: [a.jsx(tb, {
                        size: 18,
                        className: "mr-2"
                    }), "Swap Environments"]
                }), a.jsxs(On, {
                    variant: "outline",
                    size: "default",
                    onClick: r,
                    disabled: !0,
                    "data-testid": "button-rollback",
                    children: [a.jsx(dv, {
                        size: 18,
                        className: "mr-2"
                    }), "Rollback"]
                })]
            })]
        }), a.jsx("div", {
            className: "flex items-center gap-2 text-sm",
            children: a.jsxs("div", {
                className: "flex items-center gap-2",
                children: [a.jsxs("div", {
                    className: "flex items-center gap-1.5",
                    children: [a.jsx("div", {
                        className: "w-2 h-2 rounded-full bg-blue-500"
                    }), a.jsx("span", {
                        className: "text-muted-foreground font-medium",
                        children: "Blue:"
                    }), a.jsxs("span", {
                        className: "font-mono font-semibold text-foreground",
                        children: [t.blueTraffic, "%"]
                    })]
                }), a.jsx("span", {
                    className: "text-muted-foreground",
                    children: "•"
                }), a.jsxs("div", {
                    className: "flex items-center gap-1.5",
                    children: [a.jsx("div", {
                        className: "w-2 h-2 rounded-full bg-emerald-500"
                    }), a.jsx("span", {
                        className: "text-muted-foreground font-medium",
                        children: "Green:"
                    }), a.jsxs("span", {
                        className: "font-mono font-semibold text-foreground",
                        children: [t.greenTraffic, "%"]
                    })]
                })]
            })
        })]
    })
}
function Kn({status: e, size: t="base", showIcon: n=!0, className: r}) {
    const o = {
        healthy: {
            label: "Healthy",
            icon: Du,
            variant: "default",
            className: "bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800"
        },
        degraded: {
            label: "Degraded",
            icon: pv,
            variant: "default",
            className: "bg-yellow-100 dark:bg-yellow-950 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800"
        },
        down: {
            label: "Down",
            icon: Mu,
            variant: "default",
            className: "bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800"
        },
        success: {
            label: "Success",
            icon: Du,
            variant: "default",
            className: "bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800"
        },
        failed: {
            label: "Failed",
            icon: Mu,
            variant: "default",
            className: "bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800"
        },
        in_progress: {
            label: "In Progress",
            icon: ab,
            variant: "default",
            className: "bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800"
        },
        pending: {
            label: "Pending",
            icon: Xc,
            variant: "default",
            className: "bg-yellow-100 dark:bg-yellow-950 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800"
        }
    }
      , {label: s, icon: i, variant: l, className: u} = o[e]
      , c = {
        sm: "text-xs px-2 py-0.5",
        base: "text-sm px-3 py-1",
        lg: "text-base px-4 py-1.5"
    }
      , d = {
        sm: 12,
        base: 14,
        lg: 16
    };
    return a.jsxs(Wy, {
        variant: l,
        className: F("rounded-full font-medium border whitespace-nowrap", u, c[t], r),
        "data-testid": `badge-status-${e}`,
        children: [n && a.jsx(i, {
            className: F("mr-1.5", e === "in_progress" && "animate-spin"),
            size: d[t]
        }), s]
    })
}
var Sd = "Progress"
  , bd = 100
  , [E2,nk] = gr(Sd)
  , [C2,N2] = E2(Sd)
  , Qy = p.forwardRef( (e, t) => {
    const {__scopeProgress: n, value: r=null, max: o, getValueLabel: s=k2, ...i} = e;
    (o || o === 0) && !Mp(o) && console.error(j2(`${o}`, "Progress"));
    const l = Mp(o) ? o : bd;
    r !== null && !Lp(r, l) && console.error(P2(`${r}`, "Progress"));
    const u = Lp(r, l) ? r : null
      , c = rl(u) ? s(u, l) : void 0;
    return a.jsx(C2, {
        scope: n,
        value: u,
        max: l,
        children: a.jsx(ce.div, {
            "aria-valuemax": l,
            "aria-valuemin": 0,
            "aria-valuenow": rl(u) ? u : void 0,
            "aria-valuetext": c,
            role: "progressbar",
            "data-state": qy(u, l),
            "data-value": u ?? void 0,
            "data-max": l,
            ...i,
            ref: t
        })
    })
}
);
Qy.displayName = Sd;
var Ky = "ProgressIndicator"
  , Gy = p.forwardRef( (e, t) => {
    const {__scopeProgress: n, ...r} = e
      , o = N2(Ky, n);
    return a.jsx(ce.div, {
        "data-state": qy(o.value, o.max),
        "data-value": o.value ?? void 0,
        "data-max": o.max,
        ...r,
        ref: t
    })
}
);
Gy.displayName = Ky;
function k2(e, t) {
    return `${Math.round(e / t * 100)}%`
}
function qy(e, t) {
    return e == null ? "indeterminate" : e === t ? "complete" : "loading"
}
function rl(e) {
    return typeof e == "number"
}
function Mp(e) {
    return rl(e) && !isNaN(e) && e > 0
}
function Lp(e, t) {
    return rl(e) && !isNaN(e) && e <= t && e >= 0
}
function j2(e, t) {
    return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${bd}\`.`
}
function P2(e, t) {
    return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${bd} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`
}
var Yy = Qy
  , T2 = Gy;
const ol = p.forwardRef( ({className: e, value: t, ...n}, r) => a.jsx(Yy, {
    ref: r,
    className: F("relative h-4 w-full overflow-hidden rounded-full bg-secondary", e),
    ...n,
    children: a.jsx(T2, {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: {
            transform: `translateX(-${100 - (t || 0)}%)`
        }
    })
}));
ol.displayName = Yy.displayName;
function sl({health: e, title: t, className: n}) {
    return a.jsxs(De, {
        className: "p-6 rounded-xl border min-h-80",
        "data-testid": `card-health-${t.toLowerCase()}`,
        children: [a.jsxs("div", {
            className: "flex items-start justify-between mb-6",
            children: [a.jsx("h3", {
                className: "text-xl font-semibold text-foreground",
                children: t
            }), a.jsx(Kn, {
                status: e.status
            })]
        }), a.jsxs("div", {
            className: "space-y-4",
            children: [a.jsxs("div", {
                className: "flex items-center justify-between",
                children: [a.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [a.jsx(Xc, {
                        size: 16,
                        className: "text-muted-foreground"
                    }), a.jsx("span", {
                        className: "text-sm font-medium text-muted-foreground",
                        children: "Uptime"
                    })]
                }), a.jsx("span", {
                    className: "text-sm font-mono font-semibold text-foreground",
                    "data-testid": `text-uptime-${t.toLowerCase()}`,
                    children: qb(e.uptime)
                })]
            }), a.jsxs("div", {
                children: [a.jsxs("div", {
                    className: "flex items-center justify-between mb-2",
                    children: [a.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [a.jsx(ib, {
                            size: 16,
                            className: "text-muted-foreground"
                        }), a.jsx("span", {
                            className: "text-sm font-medium text-muted-foreground",
                            children: "Memory"
                        })]
                    }), a.jsxs("span", {
                        className: "text-sm font-mono font-semibold text-foreground",
                        children: [e.memory.percentage.toFixed(1), "%"]
                    })]
                }), a.jsx(ol, {
                    value: e.memory.percentage,
                    className: "h-2"
                }), a.jsxs("p", {
                    className: "text-xs text-muted-foreground mt-1 font-mono",
                    children: [Xi(e.memory.used), " / ", Xi(e.memory.total)]
                })]
            }), a.jsxs("div", {
                children: [a.jsxs("div", {
                    className: "flex items-center justify-between mb-2",
                    children: [a.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [a.jsx(ob, {
                            size: 16,
                            className: "text-muted-foreground"
                        }), a.jsx("span", {
                            className: "text-sm font-medium text-muted-foreground",
                            children: "CPU"
                        })]
                    }), a.jsxs("span", {
                        className: "text-sm font-mono font-semibold text-foreground",
                        children: [e.cpu.usage.toFixed(1), "%"]
                    })]
                }), a.jsx(ol, {
                    value: e.cpu.usage,
                    className: "h-2"
                })]
            }), a.jsxs("div", {
                className: "flex items-center justify-between",
                children: [a.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [a.jsx(gv, {
                        size: 16,
                        className: "text-muted-foreground"
                    }), a.jsx("span", {
                        className: "text-sm font-medium text-muted-foreground",
                        children: "Avg Response"
                    })]
                }), a.jsxs("span", {
                    className: "text-sm font-mono font-semibold text-foreground",
                    "data-testid": `text-response-time-${t.toLowerCase()}`,
                    children: [e.responseTime, "ms"]
                })]
            }), a.jsxs("div", {
                className: "flex items-center justify-between",
                children: [a.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [a.jsx(vs, {
                        size: 16,
                        className: "text-muted-foreground"
                    }), a.jsx("span", {
                        className: "text-sm font-medium text-muted-foreground",
                        children: "Requests"
                    })]
                }), a.jsx("span", {
                    className: "text-sm font-mono font-semibold text-foreground",
                    children: e.requestCount.toLocaleString()
                })]
            }), a.jsxs("div", {
                className: "flex items-center justify-between",
                children: [a.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [a.jsx(vs, {
                        size: 16,
                        className: "text-muted-foreground"
                    }), a.jsx("span", {
                        className: "text-sm font-medium text-muted-foreground",
                        children: "Error Rate"
                    })]
                }), a.jsxs("span", {
                    className: "text-sm font-mono font-semibold text-foreground",
                    children: [e.errorRate.toFixed(2), "%"]
                })]
            }), a.jsx("div", {
                className: "pt-4 border-t",
                children: a.jsxs("p", {
                    className: "text-xs text-muted-foreground",
                    children: ["Last checked ", ho(e.lastChecked)]
                })
            })]
        })]
    })
}
function Xy({deployments: e, className: t, onRollback: n, isRollingBack: r}) {
    return e.length === 0 ? a.jsxs(De, {
        className: "p-6 rounded-xl border min-h-80 flex flex-col items-center justify-center",
        "data-testid": "card-deployment-timeline-empty",
        children: [a.jsx(dr, {
            size: 48,
            className: "text-muted-foreground mb-4"
        }), a.jsx("h3", {
            className: "text-lg font-semibold text-foreground mb-2",
            children: "No Deployments Yet"
        }), a.jsx("p", {
            className: "text-sm text-muted-foreground text-center max-w-sm",
            children: "Deploy your application to see deployment history and track changes."
        })]
    }) : a.jsxs(De, {
        className: "p-6 rounded-xl border min-h-80",
        "data-testid": "card-deployment-timeline",
        children: [a.jsx("h3", {
            className: "text-xl font-semibold text-foreground mb-6",
            children: "Recent Deployments"
        }), a.jsx("div", {
            className: "space-y-6",
            children: e.map( (o, s) => a.jsxs("div", {
                className: "relative",
                "data-testid": `deployment-event-${o.id}`,
                children: [s < e.length - 1 && a.jsx("div", {
                    className: "absolute left-1.5 top-8 bottom-0 w-0.5 bg-border"
                }), a.jsxs("div", {
                    className: "flex gap-4",
                    children: [a.jsx("div", {
                        className: F("w-3 h-3 rounded-full mt-1.5 ring-4 ring-background flex-shrink-0", o.status === "success" && "bg-green-500", o.status === "failed" && "bg-red-500", o.status === "in_progress" && "bg-blue-500 animate-pulse", o.status === "pending" && "bg-yellow-500")
                    }), a.jsxs("div", {
                        className: "flex-1 pb-6",
                        children: [a.jsxs("div", {
                            className: "flex items-start justify-between mb-2 gap-4 flex-wrap",
                            children: [a.jsxs("div", {
                                className: "flex items-center gap-2 flex-wrap",
                                children: [a.jsx(Kn, {
                                    status: o.status,
                                    size: "sm"
                                }), a.jsx(wd, {
                                    environment: o.environment,
                                    status: "staging",
                                    size: "sm",
                                    showIcon: !1
                                })]
                            }), a.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [a.jsx("span", {
                                    className: "text-xs text-muted-foreground whitespace-nowrap",
                                    children: ho(o.deployedAt)
                                }), n && o.status === "success" && s > 0 && a.jsxs(On, {
                                    variant: "outline",
                                    size: "sm",
                                    onClick: () => n(o.id),
                                    disabled: r,
                                    "data-testid": `button-rollback-${o.id}`,
                                    children: [a.jsx(dv, {
                                        size: 14,
                                        className: "mr-1"
                                    }), "Rollback"]
                                })]
                            })]
                        }), a.jsxs("div", {
                            className: "space-y-1",
                            children: [a.jsxs("div", {
                                className: "flex items-center gap-2 text-sm",
                                children: [a.jsx(dr, {
                                    size: 14,
                                    className: "text-muted-foreground"
                                }), a.jsx("span", {
                                    className: "font-mono text-foreground font-medium",
                                    children: o.commitHash.substring(0, 7)
                                }), a.jsx("span", {
                                    className: "text-muted-foreground",
                                    children: "•"
                                }), a.jsxs("span", {
                                    className: "text-muted-foreground",
                                    children: ["v", o.version]
                                })]
                            }), a.jsxs("div", {
                                className: "flex items-center gap-2 text-sm text-muted-foreground",
                                children: [a.jsx(hv, {
                                    size: 14
                                }), a.jsx("span", {
                                    children: o.deployedBy
                                })]
                            }), o.duration && a.jsxs("div", {
                                className: "flex items-center gap-2 text-sm text-muted-foreground",
                                children: [a.jsx(Xc, {
                                    size: 14
                                }), a.jsx("span", {
                                    children: Yb(o.duration)
                                })]
                            }), o.message && a.jsx("p", {
                                className: "text-sm text-muted-foreground mt-2",
                                children: o.message
                            })]
                        })]
                    })]
                })]
            }, o.id))
        })]
    })
}
var Zy = "AlertDialog"
  , [R2,rk] = gr(Zy, [yy])
  , Zt = yy()
  , Jy = e => {
    const {__scopeAlertDialog: t, ...n} = e
      , r = Zt(t);
    return a.jsx(Dy, {
        ...r,
        ...n,
        modal: !0
    })
}
;
Jy.displayName = Zy;
var O2 = "AlertDialogTrigger"
  , A2 = p.forwardRef( (e, t) => {
    const {__scopeAlertDialog: n, ...r} = e
      , o = Zt(n);
    return a.jsx(HN, {
        ...o,
        ...r,
        ref: t
    })
}
);
A2.displayName = O2;
var _2 = "AlertDialogPortal"
  , ex = e => {
    const {__scopeAlertDialog: t, ...n} = e
      , r = Zt(t);
    return a.jsx(My, {
        ...r,
        ...n
    })
}
;
ex.displayName = _2;
var D2 = "AlertDialogOverlay"
  , tx = p.forwardRef( (e, t) => {
    const {__scopeAlertDialog: n, ...r} = e
      , o = Zt(n);
    return a.jsx(hd, {
        ...o,
        ...r,
        ref: t
    })
}
);
tx.displayName = D2;
var Wr = "AlertDialogContent"
  , [M2,L2] = R2(Wr)
  , I2 = Fg("AlertDialogContent")
  , nx = p.forwardRef( (e, t) => {
    const {__scopeAlertDialog: n, children: r, ...o} = e
      , s = Zt(n)
      , i = p.useRef(null)
      , l = Ce(t, i)
      , u = p.useRef(null);
    return a.jsx($N, {
        contentName: Wr,
        titleName: rx,
        docsSlug: "alert-dialog",
        children: a.jsx(M2, {
            scope: n,
            cancelRef: u,
            children: a.jsxs(md, {
                role: "alertdialog",
                ...s,
                ...o,
                ref: l,
                onOpenAutoFocus: re(o.onOpenAutoFocus, c => {
                    var d;
                    c.preventDefault(),
                    (d = u.current) == null || d.focus({
                        preventScroll: !0
                    })
                }
                ),
                onPointerDownOutside: c => c.preventDefault(),
                onInteractOutside: c => c.preventDefault(),
                children: [a.jsx(I2, {
                    children: r
                }), a.jsx(z2, {
                    contentRef: i
                })]
            })
        })
    })
}
);
nx.displayName = Wr;
var rx = "AlertDialogTitle"
  , ox = p.forwardRef( (e, t) => {
    const {__scopeAlertDialog: n, ...r} = e
      , o = Zt(n);
    return a.jsx(gd, {
        ...o,
        ...r,
        ref: t
    })
}
);
ox.displayName = rx;
var sx = "AlertDialogDescription"
  , ix = p.forwardRef( (e, t) => {
    const {__scopeAlertDialog: n, ...r} = e
      , o = Zt(n);
    return a.jsx(vd, {
        ...o,
        ...r,
        ref: t
    })
}
);
ix.displayName = sx;
var F2 = "AlertDialogAction"
  , lx = p.forwardRef( (e, t) => {
    const {__scopeAlertDialog: n, ...r} = e
      , o = Zt(n);
    return a.jsx(yd, {
        ...o,
        ...r,
        ref: t
    })
}
);
lx.displayName = F2;
var ax = "AlertDialogCancel"
  , ux = p.forwardRef( (e, t) => {
    const {__scopeAlertDialog: n, ...r} = e
      , {cancelRef: o} = L2(ax, n)
      , s = Zt(n)
      , i = Ce(t, o);
    return a.jsx(yd, {
        ...s,
        ...r,
        ref: i
    })
}
);
ux.displayName = ax;
var z2 = ({contentRef: e}) => {
    const t = `\`${Wr}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${Wr}\` by passing a \`${sx}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${Wr}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
    return p.useEffect( () => {
        var r;
        document.getElementById((r = e.current) == null ? void 0 : r.getAttribute("aria-describedby")) || console.warn(t)
    }
    , [t, e]),
    null
}
  , $2 = Jy
  , U2 = ex
  , cx = tx
  , dx = nx
  , fx = lx
  , px = ux
  , hx = ox
  , mx = ix;
const gx = $2
  , B2 = U2
  , vx = p.forwardRef( ({className: e, ...t}, n) => a.jsx(cx, {
    className: F("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
    ...t,
    ref: n
}));
vx.displayName = cx.displayName;
const Ed = p.forwardRef( ({className: e, ...t}, n) => a.jsxs(B2, {
    children: [a.jsx(vx, {}), a.jsx(dx, {
        ref: n,
        className: F("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", e),
        ...t
    })]
}));
Ed.displayName = dx.displayName;
const Cd = ({className: e, ...t}) => a.jsx("div", {
    className: F("flex flex-col space-y-2 text-center sm:text-left", e),
    ...t
});
Cd.displayName = "AlertDialogHeader";
const Nd = ({className: e, ...t}) => a.jsx("div", {
    className: F("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e),
    ...t
});
Nd.displayName = "AlertDialogFooter";
const kd = p.forwardRef( ({className: e, ...t}, n) => a.jsx(hx, {
    ref: n,
    className: F("text-lg font-semibold", e),
    ...t
}));
kd.displayName = hx.displayName;
const jd = p.forwardRef( ({className: e, ...t}, n) => a.jsx(mx, {
    ref: n,
    className: F("text-sm text-muted-foreground", e),
    ...t
}));
jd.displayName = mx.displayName;
const Pd = p.forwardRef( ({className: e, ...t}, n) => a.jsx(fx, {
    ref: n,
    className: F(ud(), e),
    ...t
}));
Pd.displayName = fx.displayName;
const Td = p.forwardRef( ({className: e, ...t}, n) => a.jsx(px, {
    ref: n,
    className: F(ud({
        variant: "outline"
    }), "mt-2 sm:mt-0", e),
    ...t
}));
Td.displayName = px.displayName;
function V2() {
    const [e,t] = p.useState(!1)
      , {toast: n} = Vc()
      , {data: r, isLoading: o, isError: s} = Rn({
        queryKey: ["/api/environments"]
    })
      , {data: i, isLoading: l, isError: u} = Rn({
        queryKey: ["/api/deployments"]
    })
      , {data: c, isLoading: d, isError: f} = Rn({
        queryKey: ["/api/traffic-routing"]
    })
      , g = _g({
        mutationFn: async () => await Mg("POST", "/api/environments/swap", {
            deployedBy: "dashboard-user"
        }),
        onSuccess: () => {
            Ur.invalidateQueries({
                queryKey: ["/api/environments"]
            }),
            Ur.invalidateQueries({
                queryKey: ["/api/traffic-routing"]
            }),
            Ur.invalidateQueries({
                queryKey: ["/api/deployments"]
            }),
            n({
                title: "Environment Swapped",
                description: "Successfully swapped production environments"
            }),
            t(!1)
        }
        ,
        onError: m => {
            n({
                title: "Swap Failed",
                description: m instanceof Error ? m.message : "Failed to swap environments",
                variant: "destructive"
            })
        }
    });
    if (o || l || d)
        return a.jsxs("div", {
            className: "space-y-6",
            children: [a.jsx(Se, {
                className: "h-48 rounded-xl"
            }), a.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                children: [a.jsx(Se, {
                    className: "h-80 rounded-xl"
                }), a.jsx(Se, {
                    className: "h-80 rounded-xl"
                }), a.jsx(Se, {
                    className: "h-80 rounded-xl"
                })]
            })]
        });
    if (s || u || f)
        return a.jsxs("div", {
            className: "flex flex-col items-center justify-center h-96 space-y-4",
            "data-testid": "error-state",
            children: [a.jsx("h2", {
                className: "text-2xl font-semibold text-foreground",
                children: "Failed to Load Dashboard"
            }), a.jsx("p", {
                className: "text-muted-foreground text-center max-w-md",
                children: "Unable to fetch data from the server. Please check your connection and try again."
            })]
        });
    const x = r == null ? void 0 : r.find(m => m.name === "blue")
      , S = r == null ? void 0 : r.find(m => m.name === "green")
      , v = r == null ? void 0 : r.find(m => m.status === "production");
    if (!x || !S || !v || !c)
        return a.jsx("div", {
            className: "flex items-center justify-center h-96",
            children: a.jsx("p", {
                className: "text-muted-foreground",
                children: "No environment data available"
            })
        });
    const w = c.production === "blue" ? S : x;
    return a.jsxs("div", {
        className: "space-y-6",
        "data-testid": "page-dashboard",
        children: [a.jsxs("div", {
            children: [a.jsx("h1", {
                className: "text-4xl font-bold text-foreground mb-2",
                children: "Dashboard"
            }), a.jsx("p", {
                className: "text-muted-foreground",
                children: "Monitor your blue/green deployment environments"
            })]
        }), a.jsx(b2, {
            productionEnv: v,
            trafficRouting: c,
            onSwapEnvironments: () => t(!0)
        }), a.jsxs("div", {
            className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
            children: [a.jsx(sl, {
                health: x.health,
                title: "Blue Environment"
            }), a.jsx(sl, {
                health: S.health,
                title: "Green Environment"
            }), a.jsx(Xy, {
                deployments: (i == null ? void 0 : i.slice(0, 5)) || []
            })]
        }), a.jsx(gx, {
            open: e,
            onOpenChange: t,
            children: a.jsxs(Ed, {
                "data-testid": "dialog-swap-confirmation",
                children: [a.jsxs(Cd, {
                    children: [a.jsx(kd, {
                        children: "Swap Production Environment?"
                    }), a.jsxs(jd, {
                        children: ["This will promote the ", a.jsx("strong", {
                            children: w.name
                        }), " environment to production and demote ", a.jsx("strong", {
                            children: v.name
                        }), " to staging. Traffic will be immediately routed to ", w.name, ".", a.jsxs("div", {
                            className: "mt-4 space-y-2 text-sm",
                            children: [a.jsxs("p", {
                                children: [a.jsx("strong", {
                                    children: "Current Production:"
                                }), " ", v.name, " (v", v.version, ")"]
                            }), a.jsxs("p", {
                                children: [a.jsx("strong", {
                                    children: "New Production:"
                                }), " ", w.name, " (v", w.version, ")"]
                            })]
                        })]
                    })]
                }), a.jsxs(Nd, {
                    children: [a.jsx(Td, {
                        "data-testid": "button-cancel-swap",
                        children: "Cancel"
                    }), a.jsx(Pd, {
                        onClick: () => g.mutate(),
                        disabled: g.isPending,
                        "data-testid": "button-confirm-swap",
                        children: g.isPending ? "Swapping..." : "Swap Environments"
                    })]
                })]
            })
        })]
    })
}
function Sn({title: e, value: t, unit: n, icon: r, trend: o, status: s="healthy", subtitle: i, className: l}) {
    const u = {
        healthy: "text-green-600 dark:text-green-400",
        warning: "text-yellow-600 dark:text-yellow-400",
        critical: "text-red-600 dark:text-red-400"
    }
      , c = (o == null ? void 0 : o.direction) === "up" ? fv : (o == null ? void 0 : o.direction) === "down" ? gb : ub
      , d = (o == null ? void 0 : o.direction) === "up" ? "text-green-600 dark:text-green-400" : (o == null ? void 0 : o.direction) === "down" ? "text-red-600 dark:text-red-400" : "text-muted-foreground";
    return a.jsxs(De, {
        className: "p-6 rounded-xl border hover-elevate",
        "data-testid": `card-metric-${e.toLowerCase().replace(/\s+/g, "-")}`,
        children: [a.jsx("div", {
            className: "flex items-start justify-between mb-4",
            children: a.jsxs("div", {
                className: "flex items-center gap-3",
                children: [r && a.jsx("div", {
                    className: F("p-2 rounded-lg bg-muted", u[s]),
                    children: a.jsx(r, {
                        size: 20
                    })
                }), a.jsxs("div", {
                    children: [a.jsx("h3", {
                        className: "text-sm font-medium text-muted-foreground",
                        children: e
                    }), i && a.jsx("p", {
                        className: "text-xs text-muted-foreground mt-0.5",
                        children: i
                    })]
                })]
            })
        }), a.jsxs("div", {
            className: "flex items-baseline justify-between",
            children: [a.jsxs("div", {
                className: "flex items-baseline gap-2",
                children: [a.jsx("span", {
                    className: "text-3xl font-semibold text-foreground",
                    "data-testid": `text-metric-value-${e.toLowerCase().replace(/\s+/g, "-")}`,
                    children: t
                }), n && a.jsx("span", {
                    className: "text-lg text-muted-foreground",
                    children: n
                })]
            }), o && a.jsxs("div", {
                className: F("flex items-center gap-1 text-sm font-medium", d),
                children: [a.jsx(c, {
                    size: 16
                }), a.jsxs("span", {
                    children: [Math.abs(o.value), "%"]
                })]
            })]
        })]
    })
}
function H2() {
    const {data: e, isLoading: t, isError: n} = Rn({
        queryKey: ["/api/environments"]
    });
    if (t)
        return a.jsxs("div", {
            className: "space-y-6",
            children: [a.jsx(Se, {
                className: "h-12 w-64"
            }), a.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                children: [1, 2, 3, 4].map(d => a.jsx(Se, {
                    className: "h-40 rounded-xl"
                }, d))
            }), a.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: [a.jsx(Se, {
                    className: "h-96 rounded-xl"
                }), a.jsx(Se, {
                    className: "h-96 rounded-xl"
                })]
            })]
        });
    if (n)
        return a.jsxs("div", {
            className: "flex flex-col items-center justify-center h-96 space-y-4",
            "data-testid": "error-state",
            children: [a.jsx("h2", {
                className: "text-2xl font-semibold text-foreground",
                children: "Failed to Load Health Data"
            }), a.jsx("p", {
                className: "text-muted-foreground text-center max-w-md",
                children: "Unable to fetch health metrics from the server. Please check your connection and try again."
            })]
        });
    const r = e == null ? void 0 : e.find(d => d.name === "blue")
      , o = e == null ? void 0 : e.find(d => d.name === "green");
    if (!r || !o)
        return a.jsx("div", {
            className: "flex items-center justify-center h-96",
            children: a.jsx("p", {
                className: "text-muted-foreground",
                children: "No environment data available"
            })
        });
    const s = r.health.status === "healthy" && o.health.status === "healthy" ? "healthy" : r.health.status === "down" || o.health.status === "down" ? "down" : "degraded"
      , i = s === "healthy" ? "healthy" : s === "down" ? "critical" : "warning"
      , l = (r.health.responseTime + o.health.responseTime) / 2
      , u = r.health.requestCount + o.health.requestCount
      , c = (r.health.errorRate + o.health.errorRate) / 2;
    return a.jsxs("div", {
        className: "space-y-6",
        "data-testid": "page-health",
        children: [a.jsxs("div", {
            className: "flex items-center justify-between flex-wrap gap-4",
            children: [a.jsxs("div", {
                children: [a.jsx("h1", {
                    className: "text-4xl font-bold text-foreground mb-2",
                    children: "Health Checks"
                }), a.jsx("p", {
                    className: "text-muted-foreground",
                    children: "Real-time system health and performance metrics"
                })]
            }), a.jsx(Kn, {
                status: s,
                size: "lg"
            })]
        }), a.jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
            children: [a.jsx(Sn, {
                title: "Overall Status",
                value: s.charAt(0).toUpperCase() + s.slice(1),
                icon: rr,
                status: i
            }), a.jsx(Sn, {
                title: "Avg Response Time",
                value: l.toFixed(0),
                unit: "ms",
                icon: gv,
                status: l < 100 ? "healthy" : l < 300 ? "warning" : "critical"
            }), a.jsx(Sn, {
                title: "Total Requests",
                value: u.toLocaleString(),
                icon: vs
            }), a.jsx(Sn, {
                title: "Avg Error Rate",
                value: c.toFixed(2),
                unit: "%",
                icon: pv,
                status: c < 1 ? "healthy" : c < 5 ? "warning" : "critical"
            })]
        }), a.jsxs("div", {
            className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
            children: [a.jsx(sl, {
                health: r.health,
                title: "Blue Environment"
            }), a.jsx(sl, {
                health: o.health,
                title: "Green Environment"
            })]
        }), a.jsxs(De, {
            className: "p-6 rounded-xl border",
            children: [a.jsx("h3", {
                className: "text-xl font-semibold text-foreground mb-4",
                children: "Health Check Endpoints"
            }), a.jsxs("div", {
                className: "space-y-3",
                children: [a.jsxs("div", {
                    className: "flex items-center justify-between p-3 rounded-lg bg-muted/50",
                    children: [a.jsxs("div", {
                        children: [a.jsx("p", {
                            className: "font-mono text-sm font-semibold text-foreground",
                            children: "/health"
                        }), a.jsx("p", {
                            className: "text-xs text-muted-foreground",
                            children: "Basic health status"
                        })]
                    }), a.jsx(Kn, {
                        status: "healthy",
                        size: "sm"
                    })]
                }), a.jsxs("div", {
                    className: "flex items-center justify-between p-3 rounded-lg bg-muted/50",
                    children: [a.jsxs("div", {
                        children: [a.jsx("p", {
                            className: "font-mono text-sm font-semibold text-foreground",
                            children: "/health/detailed"
                        }), a.jsx("p", {
                            className: "text-xs text-muted-foreground",
                            children: "Detailed system metrics"
                        })]
                    }), a.jsx(Kn, {
                        status: "healthy",
                        size: "sm"
                    })]
                }), a.jsxs("div", {
                    className: "flex items-center justify-between p-3 rounded-lg bg-muted/50",
                    children: [a.jsxs("div", {
                        children: [a.jsx("p", {
                            className: "font-mono text-sm font-semibold text-foreground",
                            children: "/api/smoke-tests"
                        }), a.jsx("p", {
                            className: "text-xs text-muted-foreground",
                            children: "Run smoke tests"
                        })]
                    }), a.jsx(Kn, {
                        status: "healthy",
                        size: "sm"
                    })]
                })]
            })]
        })]
    })
}
function W2() {
    const [e,t] = p.useState(!1)
      , [n,r] = p.useState(null)
      , {toast: o} = Vc()
      , {data: s, isLoading: i, isError: l} = Rn({
        queryKey: ["/api/deployments"]
    })
      , u = _g({
        mutationFn: async S => await Mg("POST", `/api/deployments/${S}/rollback`, {
            deployedBy: "dashboard-user"
        }),
        onSuccess: () => {
            Ur.invalidateQueries({
                queryKey: ["/api/environments"]
            }),
            Ur.invalidateQueries({
                queryKey: ["/api/deployments"]
            }),
            o({
                title: "Rollback Successful",
                description: `Successfully rolled back to version ${n == null ? void 0 : n.version}`
            }),
            t(!1),
            r(null)
        }
        ,
        onError: S => {
            o({
                title: "Rollback Failed",
                description: S instanceof Error ? S.message : "Failed to rollback deployment",
                variant: "destructive"
            })
        }
    })
      , c = S => {
        const v = s == null ? void 0 : s.find(w => w.id === S);
        v && (r(v),
        t(!0))
    }
    ;
    if (i)
        return a.jsxs("div", {
            className: "space-y-6",
            children: [a.jsx(Se, {
                className: "h-12 w-64"
            }), a.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                children: [1, 2, 3, 4].map(S => a.jsx(Se, {
                    className: "h-40 rounded-xl"
                }, S))
            }), a.jsx(Se, {
                className: "h-96 rounded-xl"
            })]
        });
    if (l)
        return a.jsxs("div", {
            className: "flex flex-col items-center justify-center h-96 space-y-4",
            "data-testid": "error-state",
            children: [a.jsx("h2", {
                className: "text-2xl font-semibold text-foreground",
                children: "Failed to Load Deployments"
            }), a.jsx("p", {
                className: "text-muted-foreground text-center max-w-md",
                children: "Unable to fetch deployment history. Please check your connection and try again."
            })]
        });
    if (!s || s.length === 0)
        return a.jsxs("div", {
            className: "space-y-6",
            "data-testid": "page-deployments-empty",
            children: [a.jsxs("div", {
                children: [a.jsx("h1", {
                    className: "text-4xl font-bold text-foreground mb-2",
                    children: "Deployments"
                }), a.jsx("p", {
                    className: "text-muted-foreground",
                    children: "Track deployment history and status"
                })]
            }), a.jsxs(De, {
                className: "p-12 rounded-xl border flex flex-col items-center justify-center",
                children: [a.jsx(dr, {
                    size: 64,
                    className: "text-muted-foreground mb-4"
                }), a.jsx("h3", {
                    className: "text-2xl font-semibold text-foreground mb-2",
                    children: "No Deployments Yet"
                }), a.jsx("p", {
                    className: "text-muted-foreground text-center max-w-md",
                    children: "Start deploying your application to track deployment history and monitor changes across environments."
                })]
            })]
        });
    const d = s.filter(S => S.status === "success").length
      , f = s.filter(S => S.status === "failed").length
      , g = d / s.length * 100
      , x = s.filter(S => S.duration).reduce( (S, v) => S + (v.duration || 0), 0) / s.filter(S => S.duration).length;
    return a.jsxs("div", {
        className: "space-y-6",
        "data-testid": "page-deployments",
        children: [a.jsxs("div", {
            children: [a.jsx("h1", {
                className: "text-4xl font-bold text-foreground mb-2",
                children: "Deployments"
            }), a.jsx("p", {
                className: "text-muted-foreground",
                children: "Track deployment history and status"
            })]
        }), a.jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
            children: [a.jsx(Sn, {
                title: "Total Deployments",
                value: s.length,
                icon: dr
            }), a.jsx(Sn, {
                title: "Success Rate",
                value: g.toFixed(1),
                unit: "%",
                icon: fv,
                status: g >= 90 ? "healthy" : g >= 70 ? "warning" : "critical"
            }), a.jsx(Sn, {
                title: "Successful",
                value: d,
                icon: Du,
                status: "healthy"
            }), a.jsx(Sn, {
                title: "Failed",
                value: f,
                icon: Mu,
                status: f === 0 ? "healthy" : "warning"
            })]
        }), a.jsx(Xy, {
            deployments: s,
            onRollback: c,
            isRollingBack: u.isPending
        }), a.jsx(gx, {
            open: e,
            onOpenChange: t,
            children: a.jsxs(Ed, {
                "data-testid": "dialog-rollback-confirmation",
                children: [a.jsxs(Cd, {
                    children: [a.jsx(kd, {
                        children: "Rollback to Previous Deployment?"
                    }), a.jsxs(jd, {
                        children: ["This will rollback the ", a.jsx("strong", {
                            children: n == null ? void 0 : n.environment
                        }), " environment to a previous version. This action cannot be undone.", n && a.jsxs("div", {
                            className: "mt-4 space-y-2 text-sm",
                            children: [a.jsxs("p", {
                                children: [a.jsx("strong", {
                                    children: "Version:"
                                }), " ", n.version]
                            }), a.jsxs("p", {
                                children: [a.jsx("strong", {
                                    children: "Commit:"
                                }), " ", n.commitHash.substring(0, 7)]
                            }), a.jsxs("p", {
                                children: [a.jsx("strong", {
                                    children: "Originally Deployed By:"
                                }), " ", n.deployedBy]
                            })]
                        })]
                    })]
                }), a.jsxs(Nd, {
                    children: [a.jsx(Td, {
                        "data-testid": "button-cancel-rollback",
                        children: "Cancel"
                    }), a.jsx(Pd, {
                        onClick: () => n && u.mutate(n.id),
                        disabled: u.isPending,
                        "data-testid": "button-confirm-rollback",
                        children: u.isPending ? "Rolling back..." : "Rollback"
                    })]
                })]
            })
        }), x && a.jsxs(De, {
            className: "p-6 rounded-xl border",
            children: [a.jsx("h3", {
                className: "text-lg font-semibold text-foreground mb-2",
                children: "Deployment Metrics"
            }), a.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-4 mt-4",
                children: [a.jsxs("div", {
                    children: [a.jsx("p", {
                        className: "text-sm text-muted-foreground mb-1",
                        children: "Average Duration"
                    }), a.jsxs("p", {
                        className: "text-2xl font-semibold font-mono text-foreground",
                        children: [(x / 1e3).toFixed(2), "s"]
                    })]
                }), a.jsxs("div", {
                    children: [a.jsx("p", {
                        className: "text-sm text-muted-foreground mb-1",
                        children: "Last Deployment"
                    }), a.jsx("p", {
                        className: "text-2xl font-semibold text-foreground",
                        children: s[0].status === "success" ? "✓" : "✗"
                    })]
                }), a.jsxs("div", {
                    children: [a.jsx("p", {
                        className: "text-sm text-muted-foreground mb-1",
                        children: "Most Recent"
                    }), a.jsx("p", {
                        className: "text-base font-mono font-semibold text-foreground",
                        children: s[0].commitHash.substring(0, 7)
                    })]
                })]
            })]
        })]
    })
}
function Q2() {
    const {data: e, isLoading: t, isError: n} = Rn({
        queryKey: ["/api/environments"]
    })
      , {data: r, isLoading: o, isError: s} = Rn({
        queryKey: ["/api/traffic-routing"]
    });
    if (t || o)
        return a.jsxs("div", {
            className: "space-y-6",
            children: [a.jsx(Se, {
                className: "h-12 w-64"
            }), a.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: [a.jsx(Se, {
                    className: "h-96 rounded-xl"
                }), a.jsx(Se, {
                    className: "h-96 rounded-xl"
                })]
            })]
        });
    if (n || s)
        return a.jsxs("div", {
            className: "flex flex-col items-center justify-center h-96 space-y-4",
            "data-testid": "error-state",
            children: [a.jsx("h2", {
                className: "text-2xl font-semibold text-foreground",
                children: "Failed to Load Environments"
            }), a.jsx("p", {
                className: "text-muted-foreground text-center max-w-md",
                children: "Unable to fetch environment data. Please check your connection and try again."
            })]
        });
    const i = e == null ? void 0 : e.find(c => c.name === "blue")
      , l = e == null ? void 0 : e.find(c => c.name === "green");
    if (!i || !l || !r)
        return a.jsx("div", {
            className: "flex items-center justify-center h-96",
            children: a.jsx("p", {
                className: "text-muted-foreground",
                children: "No environment data available"
            })
        });
    const u = (c, d) => a.jsx(De, {
        className: "p-6 rounded-xl border",
        "data-testid": `card-environment-${c.name}`,
        children: a.jsxs("div", {
            className: "space-y-6",
            children: [a.jsxs("div", {
                className: "flex items-start justify-between",
                children: [a.jsxs("div", {
                    className: "space-y-2",
                    children: [a.jsx(wd, {
                        environment: c.name,
                        status: c.status,
                        size: "lg"
                    }), a.jsx("div", {
                        className: "flex items-center gap-2",
                        children: a.jsx(Kn, {
                            status: c.health.status,
                            size: "sm"
                        })
                    })]
                }), a.jsx(On, {
                    variant: "outline",
                    size: "sm",
                    asChild: !0,
                    "data-testid": `button-visit-${c.name}`,
                    children: a.jsxs("a", {
                        href: c.url,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: [a.jsx(sb, {
                            size: 16,
                            className: "mr-2"
                        }), "Visit"]
                    })
                })]
            }), a.jsxs("div", {
                className: "space-y-3",
                children: [a.jsxs("div", {
                    children: [a.jsx("p", {
                        className: "text-sm text-muted-foreground mb-1",
                        children: "Version & Commit"
                    }), a.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [a.jsx(dr, {
                            size: 16,
                            className: "text-muted-foreground"
                        }), a.jsx("span", {
                            className: "font-mono text-sm font-semibold text-foreground",
                            children: c.commitHash.substring(0, 7)
                        }), a.jsx("span", {
                            className: "text-muted-foreground",
                            children: "•"
                        }), a.jsxs("span", {
                            className: "text-sm text-muted-foreground",
                            children: ["v", c.version]
                        })]
                    })]
                }), a.jsxs("div", {
                    children: [a.jsx("p", {
                        className: "text-sm text-muted-foreground mb-1",
                        children: "Deployed"
                    }), a.jsxs("div", {
                        className: "flex items-center gap-2 text-sm",
                        children: [a.jsx(Yc, {
                            size: 16,
                            className: "text-muted-foreground"
                        }), a.jsx("span", {
                            className: "text-foreground",
                            children: ho(c.deployedAt)
                        })]
                    })]
                }), a.jsxs("div", {
                    children: [a.jsx("p", {
                        className: "text-sm text-muted-foreground mb-1",
                        children: "Deployed By"
                    }), a.jsxs("div", {
                        className: "flex items-center gap-2 text-sm",
                        children: [a.jsx(hv, {
                            size: 16,
                            className: "text-muted-foreground"
                        }), a.jsx("span", {
                            className: "text-foreground",
                            children: c.deployedBy
                        })]
                    })]
                })]
            }), a.jsxs("div", {
                className: "pt-4 border-t space-y-3",
                children: [a.jsxs("div", {
                    children: [a.jsx("p", {
                        className: "text-sm text-muted-foreground mb-2",
                        children: "Traffic Distribution"
                    }), a.jsxs("div", {
                        className: "space-y-2",
                        children: [a.jsxs("div", {
                            className: "flex items-center justify-between text-sm",
                            children: [a.jsx("span", {
                                className: "text-foreground",
                                children: "Current Traffic"
                            }), a.jsxs("span", {
                                className: "font-mono font-semibold text-foreground",
                                children: [d, "%"]
                            })]
                        }), a.jsx(ol, {
                            value: d,
                            className: "h-2"
                        })]
                    })]
                }), a.jsxs("div", {
                    children: [a.jsx("p", {
                        className: "text-sm text-muted-foreground mb-2",
                        children: "Resource Usage"
                    }), a.jsxs("div", {
                        className: "space-y-2",
                        children: [a.jsxs("div", {
                            className: "flex items-center justify-between text-sm",
                            children: [a.jsx("span", {
                                className: "text-muted-foreground",
                                children: "Memory"
                            }), a.jsxs("span", {
                                className: "font-mono text-foreground",
                                children: [Xi(c.health.memory.used), " / ", Xi(c.health.memory.total)]
                            })]
                        }), a.jsxs("div", {
                            className: "flex items-center justify-between text-sm",
                            children: [a.jsx("span", {
                                className: "text-muted-foreground",
                                children: "CPU"
                            }), a.jsxs("span", {
                                className: "font-mono text-foreground",
                                children: [c.health.cpu.usage.toFixed(1), "%"]
                            })]
                        }), a.jsxs("div", {
                            className: "flex items-center justify-between text-sm",
                            children: [a.jsx("span", {
                                className: "text-muted-foreground",
                                children: "Requests"
                            }), a.jsx("span", {
                                className: "font-mono text-foreground",
                                children: c.health.requestCount.toLocaleString()
                            })]
                        })]
                    })]
                })]
            }), a.jsx("div", {
                className: "pt-4 border-t",
                children: a.jsx("a", {
                    href: c.url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-xs font-mono text-muted-foreground hover:text-foreground transition-colors break-all",
                    children: c.url
                })
            })]
        })
    });
    return a.jsxs("div", {
        className: "space-y-6",
        "data-testid": "page-environments",
        children: [a.jsxs("div", {
            children: [a.jsx("h1", {
                className: "text-4xl font-bold text-foreground mb-2",
                children: "Environments"
            }), a.jsx("p", {
                className: "text-muted-foreground",
                children: "Compare and manage blue/green deployment environments"
            })]
        }), a.jsxs(De, {
            className: "p-6 rounded-xl border bg-gradient-to-br from-background to-muted/20",
            children: [a.jsxs("div", {
                className: "flex items-center justify-between",
                children: [a.jsxs("div", {
                    children: [a.jsx("h3", {
                        className: "text-lg font-semibold text-foreground mb-1",
                        children: "Traffic Routing"
                    }), a.jsxs("p", {
                        className: "text-sm text-muted-foreground",
                        children: ["Production traffic is routed to ", a.jsx("span", {
                            className: "font-semibold text-foreground",
                            children: r.production
                        }), " environment"]
                    })]
                }), a.jsxs("div", {
                    className: "flex items-center gap-4",
                    children: [a.jsxs("div", {
                        className: "text-center",
                        children: [a.jsxs("div", {
                            className: "flex items-center gap-2 mb-1",
                            children: [a.jsx("div", {
                                className: "w-3 h-3 rounded-full bg-blue-500"
                            }), a.jsx("span", {
                                className: "text-sm font-medium text-muted-foreground",
                                children: "Blue"
                            })]
                        }), a.jsxs("p", {
                            className: "text-2xl font-mono font-bold text-foreground",
                            children: [r.blueTraffic, "%"]
                        })]
                    }), a.jsx(vs, {
                        size: 24,
                        className: "text-muted-foreground"
                    }), a.jsxs("div", {
                        className: "text-center",
                        children: [a.jsxs("div", {
                            className: "flex items-center gap-2 mb-1",
                            children: [a.jsx("div", {
                                className: "w-3 h-3 rounded-full bg-emerald-500"
                            }), a.jsx("span", {
                                className: "text-sm font-medium text-muted-foreground",
                                children: "Green"
                            })]
                        }), a.jsxs("p", {
                            className: "text-2xl font-mono font-bold text-foreground",
                            children: [r.greenTraffic, "%"]
                        })]
                    })]
                })]
            }), r.lastSwap && a.jsxs("p", {
                className: "text-xs text-muted-foreground mt-4",
                children: ["Last swap: ", ho(r.lastSwap)]
            })]
        }), a.jsxs("div", {
            className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
            children: [u(i, r.blueTraffic), u(l, r.greenTraffic)]
        })]
    })
}
function K2() {
    const {data: e, isLoading: t, isError: n} = Rn({
        queryKey: ["/api/system-info"]
    });
    return t ? a.jsxs("div", {
        className: "space-y-6",
        children: [a.jsx(Se, {
            className: "h-12 w-64"
        }), a.jsx(Se, {
            className: "h-64 rounded-xl"
        }), a.jsx(Se, {
            className: "h-48 rounded-xl"
        })]
    }) : n ? a.jsxs("div", {
        className: "flex flex-col items-center justify-center h-96 space-y-4",
        "data-testid": "error-state",
        children: [a.jsx("h2", {
            className: "text-2xl font-semibold text-foreground",
            children: "Failed to Load System Info"
        }), a.jsx("p", {
            className: "text-muted-foreground text-center max-w-md",
            children: "Unable to fetch system information. Please check your connection and try again."
        })]
    }) : a.jsxs("div", {
        className: "space-y-6",
        "data-testid": "page-settings",
        children: [a.jsxs("div", {
            children: [a.jsx("h1", {
                className: "text-4xl font-bold text-foreground mb-2",
                children: "Settings"
            }), a.jsx("p", {
                className: "text-muted-foreground",
                children: "System information and configuration"
            })]
        }), a.jsxs(De, {
            className: "p-6 rounded-xl border",
            children: [a.jsx("h3", {
                className: "text-xl font-semibold text-foreground mb-6",
                children: "Appearance"
            }), a.jsxs("div", {
                className: "flex items-center justify-between",
                children: [a.jsxs("div", {
                    children: [a.jsx("p", {
                        className: "font-medium text-foreground mb-1",
                        children: "Theme"
                    }), a.jsx("p", {
                        className: "text-sm text-muted-foreground",
                        children: "Toggle between light and dark mode"
                    })]
                }), a.jsx(Vy, {})]
            })]
        }), e && a.jsxs(De, {
            className: "p-6 rounded-xl border",
            children: [a.jsx("h3", {
                className: "text-xl font-semibold text-foreground mb-6",
                children: "System Information"
            }), a.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: [a.jsxs("div", {
                    className: "space-y-4",
                    children: [a.jsxs("div", {
                        children: [a.jsxs("div", {
                            className: "flex items-center gap-2 mb-2",
                            children: [a.jsx(db, {
                                size: 18,
                                className: "text-muted-foreground"
                            }), a.jsx("p", {
                                className: "text-sm font-medium text-muted-foreground",
                                children: "Application Version"
                            })]
                        }), a.jsxs("p", {
                            className: "text-lg font-mono font-semibold text-foreground",
                            "data-testid": "text-app-version",
                            children: ["v", e.version]
                        })]
                    }), a.jsxs("div", {
                        children: [a.jsxs("div", {
                            className: "flex items-center gap-2 mb-2",
                            children: [a.jsx(rb, {
                                size: 18,
                                className: "text-muted-foreground"
                            }), a.jsx("p", {
                                className: "text-sm font-medium text-muted-foreground",
                                children: "Commit Hash"
                            })]
                        }), a.jsx("p", {
                            className: "text-lg font-mono font-semibold text-foreground",
                            "data-testid": "text-commit",
                            children: e.commitHash.substring(0, 7)
                        })]
                    }), a.jsxs("div", {
                        children: [a.jsxs("div", {
                            className: "flex items-center gap-2 mb-2",
                            children: [a.jsx(rr, {
                                size: 18,
                                className: "text-muted-foreground"
                            }), a.jsx("p", {
                                className: "text-sm font-medium text-muted-foreground",
                                children: "Environment"
                            })]
                        }), a.jsx("p", {
                            className: "text-lg font-semibold text-foreground",
                            children: e.environment
                        })]
                    })]
                }), a.jsxs("div", {
                    className: "space-y-4",
                    children: [a.jsxs("div", {
                        children: [a.jsxs("div", {
                            className: "flex items-center gap-2 mb-2",
                            children: [a.jsx(rr, {
                                size: 18,
                                className: "text-muted-foreground"
                            }), a.jsx("p", {
                                className: "text-sm font-medium text-muted-foreground",
                                children: "Node.js Version"
                            })]
                        }), a.jsx("p", {
                            className: "text-lg font-mono font-semibold text-foreground",
                            children: e.nodeVersion
                        })]
                    }), a.jsxs("div", {
                        children: [a.jsxs("div", {
                            className: "flex items-center gap-2 mb-2",
                            children: [a.jsx(rr, {
                                size: 18,
                                className: "text-muted-foreground"
                            }), a.jsx("p", {
                                className: "text-sm font-medium text-muted-foreground",
                                children: "Platform"
                            })]
                        }), a.jsx("p", {
                            className: "text-lg font-semibold text-foreground",
                            children: e.platform
                        })]
                    }), a.jsxs("div", {
                        children: [a.jsxs("div", {
                            className: "flex items-center gap-2 mb-2",
                            children: [a.jsx(Yc, {
                                size: 18,
                                className: "text-muted-foreground"
                            }), a.jsx("p", {
                                className: "text-sm font-medium text-muted-foreground",
                                children: "Started"
                            })]
                        }), a.jsx("p", {
                            className: "text-lg font-semibold text-foreground",
                            children: ho(e.startedAt)
                        })]
                    })]
                })]
            })]
        }), a.jsxs(De, {
            className: "p-6 rounded-xl border",
            children: [a.jsx("h3", {
                className: "text-xl font-semibold text-foreground mb-4",
                children: "API Endpoints"
            }), a.jsxs("div", {
                className: "space-y-2",
                children: [a.jsx("div", {
                    className: "p-3 rounded-lg bg-muted/50 font-mono text-sm text-foreground",
                    children: "GET /health"
                }), a.jsx("div", {
                    className: "p-3 rounded-lg bg-muted/50 font-mono text-sm text-foreground",
                    children: "GET /health/detailed"
                }), a.jsx("div", {
                    className: "p-3 rounded-lg bg-muted/50 font-mono text-sm text-foreground",
                    children: "GET /api/environments"
                }), a.jsx("div", {
                    className: "p-3 rounded-lg bg-muted/50 font-mono text-sm text-foreground",
                    children: "GET /api/deployments"
                }), a.jsx("div", {
                    className: "p-3 rounded-lg bg-muted/50 font-mono text-sm text-foreground",
                    children: "GET /api/traffic-routing"
                }), a.jsx("div", {
                    className: "p-3 rounded-lg bg-muted/50 font-mono text-sm text-foreground",
                    children: "GET /api/system-info"
                }), a.jsx("div", {
                    className: "p-3 rounded-lg bg-muted/50 font-mono text-sm text-foreground",
                    children: "POST /api/smoke-tests"
                })]
            })]
        })]
    })
}
function G2() {
    return a.jsx("div", {
        className: "min-h-screen w-full flex items-center justify-center bg-gray-50",
        children: a.jsx(De, {
            className: "w-full max-w-md mx-4",
            children: a.jsxs(Hy, {
                className: "pt-6",
                children: [a.jsxs("div", {
                    className: "flex mb-4 gap-2",
                    children: [a.jsx(nb, {
                        className: "h-8 w-8 text-red-500"
                    }), a.jsx("h1", {
                        className: "text-2xl font-bold text-gray-900",
                        children: "404 Page Not Found"
                    })]
                }), a.jsx("p", {
                    className: "mt-4 text-sm text-gray-600",
                    children: "Did you forget to add the page to the router?"
                })]
            })
        })
    })
}
function q2() {
    return a.jsxs(k1, {
        children: [a.jsx(yr, {
            path: "/",
            component: V2
        }), a.jsx(yr, {
            path: "/health",
            component: H2
        }), a.jsx(yr, {
            path: "/deployments",
            component: W2
        }), a.jsx(yr, {
            path: "/environments",
            component: Q2
        }), a.jsx(yr, {
            path: "/settings",
            component: K2
        }), a.jsx(yr, {
            component: G2
        })]
    })
}
function Y2() {
    const e = {
        "--sidebar-width": "16rem",
        "--sidebar-width-icon": "3rem"
    };
    return a.jsx(Q1, {
        client: Ur,
        children: a.jsx(m2, {
            defaultTheme: "light",
            children: a.jsxs(ny, {
                children: [a.jsx(e2, {
                    style: e,
                    children: a.jsxs("div", {
                        className: "flex h-screen w-full",
                        children: [a.jsx(h2, {}), a.jsxs("div", {
                            className: "flex flex-col flex-1 overflow-hidden",
                            children: [a.jsxs("header", {
                                className: "flex items-center justify-between gap-4 p-4 border-b bg-background",
                                children: [a.jsx(n2, {
                                    "data-testid": "button-sidebar-toggle"
                                }), a.jsx(Vy, {})]
                            }), a.jsx("main", {
                                className: "flex-1 overflow-auto p-8 bg-background",
                                children: a.jsx("div", {
                                    className: "max-w-7xl mx-auto",
                                    children: a.jsx(q2, {})
                                })
                            })]
                        })]
                    })
                }), a.jsx(eE, {})]
            })
        })
    })
}
lg(document.getElementById("root")).render(a.jsx(Y2, {}));
