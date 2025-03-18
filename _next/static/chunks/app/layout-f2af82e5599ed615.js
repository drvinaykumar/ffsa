(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [177], {
        4006: (e, s, r) => {
            Promise.resolve().then(r.t.bind(r, 3587, 23)), Promise.resolve().then(r.t.bind(r, 7532, 23)), Promise.resolve().then(r.t.bind(r, 8381, 23)), Promise.resolve().then(r.bind(r, 1139)), Promise.resolve().then(r.bind(r, 3903))
        },
        1139: (e, s, r) => {
            "use strict";
            r.d(s, {
                default: () => i
            });
            var l = r(1133),
                n = r(3587),
                t = r.n(n),
                a = r(6116);

            function i() {
                let e = (0, a.usePathname)();
                if ("/" === e) return null;
                let s = e.split("/").filter(e => e),
                    r = [{
                        label: "Home",
                        href: "/"
                    }, ...s.map((e, r) => {
                        let l = "/".concat(s.slice(0, r + 1).join("/"));
                        return {
                            label: e.charAt(0).toUpperCase() + e.slice(1),
                            href: l
                        }
                    })];
                return (0, l.jsx)("nav", {
                    className: "py-3 px-4 text-sm text-gray-600",
                    children: (0, l.jsx)("ol", {
                        className: "flex flex-wrap items-center",
                        children: r.map((e, s) => (0, l.jsxs)("li", {
                            className: "flex items-center",
                            children: [s > 0 && (0, l.jsx)("span", {
                                className: "mx-2 text-gray-400",
                                children: "/"
                            }), s === r.length - 1 ? (0, l.jsx)("span", {
                                className: "font-medium text-gray-800",
                                children: e.label
                            }) : (0, l.jsx)(t(), {
                                href: e.href,
                                className: "text-blue-600 hover:underline",
                                children: e.label
                            })]
                        }, s))
                    })
                })
            }
        },
        3903: (e, s, r) => {
            "use strict";
            r.d(s, {
                default: () => i
            });
            var l = r(1133),
                n = r(3587),
                t = r.n(n),
                a = r(1321);

            function i() {
                let [e, s] = (0, a.useState)(!1);
                return (0, l.jsx)("nav", {
                    className: "bg-gray-800 text-white",
                    children: (0, l.jsxs)("div", {
                        className: "container mx-auto px-4",
                        children: [(0, l.jsxs)("div", {
                            className: "flex justify-between items-center py-4",
                            children: [(0, l.jsx)("div", {
                                children: (0, l.jsx)(t(), {
                                    href: "/",
                                    className: "text-2xl font-bold",
                                    children: "Freedom, Foolishness, Stupidity, and Arrogance"
                                })
                            }), (0, l.jsx)("div", {
                                className: "md:hidden",
                                children: (0, l.jsx)("button", {
                                    onClick: () => s(!e),
                                    className: "text-white focus:outline-none",
                                    children: e ? (0, l.jsx)("svg", {
                                        className: "h-6 w-6",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: (0, l.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M6 18L18 6M6 6l12 12"
                                        })
                                    }) : (0, l.jsx)("svg", {
                                        className: "h-6 w-6",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: (0, l.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M4 6h16M4 12h16M4 18h16"
                                        })
                                    })
                                })
                            }), (0, l.jsxs)("div", {
                                className: "hidden md:flex space-x-6",
                                children: [(0, l.jsx)(t(), {
                                    href: "/",
                                    className: "hover:text-blue-300 transition",
                                    children: "Home"
                                }), (0, l.jsx)(t(), {
                                    href: "/overview",
                                    className: "hover:text-blue-300 transition",
                                    children: "Course Overview"
                                }), (0, l.jsx)(t(), {
                                    href: "/weekly",
                                    className: "hover:text-blue-300 transition",
                                    children: "Weekly Schedule"
                                }), (0, l.jsx)(t(), {
                                    href: "/lectures",
                                    className: "hover:text-blue-300 transition",
                                    children: "Lectures"
                                }), (0, l.jsx)(t(), {
                                    href: "/readings",
                                    className: "hover:text-blue-300 transition",
                                    children: "Reading Lists"
                                }), (0, l.jsx)(t(), {
                                    href: "/multimedia",
                                    className: "hover:text-blue-300 transition",
                                    children: "Multimedia"
                                })]
                            })]
                        }), e && (0, l.jsxs)("div", {
                            className: "md:hidden py-4 space-y-2",
                            children: [(0, l.jsx)(t(), {
                                href: "/",
                                className: "block py-2 hover:bg-gray-700 px-2 rounded",
                                onClick: () => s(!1),
                                children: "Home"
                            }), (0, l.jsx)(t(), {
                                href: "/overview",
                                className: "block py-2 hover:bg-gray-700 px-2 rounded",
                                onClick: () => s(!1),
                                children: "Course Overview"
                            }), (0, l.jsx)(t(), {
                                href: "/weekly",
                                className: "block py-2 hover:bg-gray-700 px-2 rounded",
                                onClick: () => s(!1),
                                children: "Weekly Schedule"
                            }), (0, l.jsx)(t(), {
                                href: "/lectures",
                                className: "block py-2 hover:bg-gray-700 px-2 rounded",
                                onClick: () => s(!1),
                                children: "Lectures"
                            }), (0, l.jsx)(t(), {
                                href: "/readings",
                                className: "block py-2 hover:bg-gray-700 px-2 rounded",
                                onClick: () => s(!1),
                                children: "Reading Lists"
                            }), (0, l.jsx)(t(), {
                                href: "/multimedia",
                                className: "block py-2 hover:bg-gray-700 px-2 rounded",
                                onClick: () => s(!1),
                                children: "Multimedia"
                            })]
                        })]
                    })
                })
            }
        },
        8381: () => {},
        7532: e => {
            e.exports = {
                style: {
                    fontFamily: "'Inter', 'Inter Fallback'",
                    fontStyle: "normal"
                },
                className: "__className_d65c78"
            }
        }
    },
    e => {
        var s = s => e(e.s = s);
        e.O(0, [890, 587, 634, 775, 358], () => s(4006)), _N_E = e.O()
    }
]);