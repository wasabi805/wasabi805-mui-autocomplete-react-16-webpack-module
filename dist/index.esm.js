import t, { useState as r } from "react";
function n(t, r) {
  (null == r || r > t.length) && (r = t.length);
  for (var n = 0, e = Array(r); n < r; n++) e[n] = t[n];
  return e;
}
function e(t, r) {
  return (
    (function (t) {
      if (Array.isArray(t)) return t;
    })(t) ||
    (function (t, r) {
      var n =
        null == t
          ? null
          : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
            t["@@iterator"];
      if (null != n) {
        var e,
          o,
          l,
          u,
          a = [],
          i = !0,
          c = !1;
        try {
          if (((l = (n = n.call(t)).next), 0 === r)) {
            if (Object(n) !== n) return;
            i = !1;
          } else
            for (
              ;
              !(i = (e = l.call(n)).done) && (a.push(e.value), a.length !== r);
              i = !0
            );
        } catch (t) {
          (c = !0), (o = t);
        } finally {
          try {
            if (!i && null != n.return && ((u = n.return()), Object(u) !== u))
              return;
          } finally {
            if (c) throw o;
          }
        }
        return a;
      }
    })(t, r) ||
    (function (t, r) {
      if (t) {
        if ("string" == typeof t) return n(t, r);
        var e = {}.toString.call(t).slice(8, -1);
        return (
          "Object" === e && t.constructor && (e = t.constructor.name),
          "Map" === e || "Set" === e
            ? Array.from(t)
            : "Arguments" === e ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
              ? n(t, r)
              : void 0
        );
      }
    })(t, r) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
      );
    })()
  );
}
var o = function () {
  var n = e(r(0), 2),
    o = n[0],
    l = n[1];
  return t.createElement(
    "div",
    null,
    t.createElement("p", null, "Currently, the count is!!!! ", o),
    t.createElement(
      "button",
      {
        onClick: function () {
          return l(o - 1);
        },
      },
      "Subtract",
    ),
    t.createElement(
      "button",
      {
        onClick: function () {
          return l(o + 1);
        },
      },
      "Add",
    ),
  );
};
export { o as AutoCompleteSearchContainer };
