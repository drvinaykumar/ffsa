(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [414], {
        9905: (e, t, s) => {
            Promise.resolve().then(s.bind(s, 249))
        },
        249: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                default: () => l
            });
            var i = s(1133),
                a = s(1321),
                n = s(3587),
                o = s.n(n);

            function r(e) {
                let {
                    onSearch: t
                } = e, [s, n] = (0, a.useState)("");
                return (0, i.jsx)("div", {
                    className: "w-full max-w-md mx-auto",
                    children: (0, i.jsxs)("form", {
                        onSubmit: e => {
                            e.preventDefault(), s.trim() && t(s)
                        },
                        className: "flex",
                        children: [(0, i.jsx)("input", {
                            type: "text",
                            placeholder: "Search course content...",
                            className: "w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                            value: s,
                            onChange: e => n(e.target.value)
                        }), (0, i.jsx)("button", {
                            type: "submit",
                            className: "bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                            children: (0, i.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: (0, i.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                })
                            })
                        })]
                    })
                })
            }

            function l(e) {
                let {
                    params: t
                } = e, [s, n] = (0, a.useState)("content"), l = (null == t ? void 0 : t.id) || 1, c = {
                    id: l,
                    title: "Lecture ".concat(l, ": ").concat(["Introduction to the Course: Defining Our Terms", "Philosophical Conceptions of Freedom", "The Psychology of Foolishness", "Stupidity: Cognitive Limitations and Biases", "Arrogance: Pride, Power, and Self-Deception", "Freedom and Liberty in Ancient Thought", "Medieval and Renaissance Conceptions of Folly", "The Enlightenment: Reason, Freedom, and Human Limitations", "Historical Case Studies of Collective Stupidity", "Arrogance and the Fall of Empires", "Freedom Movements and Their Paradoxes", "The Foolishness of Crowds: Historical Mass Phenomena", "Freedom in the Modern World: Positive and Negative Liberty", "Institutional Stupidity and Organizational Foolishness", "Digital Age Arrogance: Expertise and Anti-intellectualism", "Freedom of Speech and Its Abuses", "Political Foolishness and Democratic Processes", "Consumer Culture: Freedom, Folly, and Status Anxiety", "Media, Misinformation, and Collective Stupidity", "The Ethics of Freedom and Responsibility", "Overcoming Cognitive Biases and Stupidity", "Humility as an Antidote to Arrogance", "Education, Critical Thinking, and the Prevention of Foolishness", "Freedom and Wisdom: Toward a Balanced Approach", "Course Synthesis and Contemporary Applications"][l - 1] || "Lecture Title"),
                    week: "Week ".concat(l <= 3 ? 1 : l <= 5 ? 2 : l <= 7 ? 3 : l <= 10 ? 4 : l <= 12 ? 5 : l <= 14 ? 6 : l <= 17 ? 7 : l <= 19 ? 8 : l <= 22 ? 9 : 10),
                    objectives: ["Understand key concepts related to the lecture topic", "Analyze theoretical frameworks and their applications", "Evaluate historical and contemporary examples", "Develop critical thinking skills about the subject matter"],
                    content: [{
                        title: "Introduction to Key Concepts",
                        text: "This section introduces the fundamental concepts and terminology that will be used throughout the lecture..."
                    }, {
                        title: "Theoretical Frameworks",
                        text: "Here we explore the major theoretical approaches to understanding the topic, including their strengths and limitations..."
                    }, {
                        title: "Historical Context",
                        text: "This section examines the historical development of ideas related to the lecture topic..."
                    }, {
                        title: "Contemporary Applications",
                        text: "In this section, we look at how these concepts manifest in contemporary society and their implications..."
                    }, {
                        title: "Critical Analysis",
                        text: "This final section encourages critical thinking about the topic through various perspectives..."
                    }],
                    discussion: ["How do the concepts in this lecture relate to your personal experiences?", "What are the ethical implications of the ideas presented?", "How might different cultural contexts affect our understanding of these concepts?", "What contemporary examples illustrate the theories discussed?"],
                    activities: ["Small group discussion analyzing case studies", "Debate on contrasting viewpoints", "Reflective writing exercise", "Collaborative concept mapping"],
                    readings: {
                        core: [{
                            author: "Smith, J.",
                            title: "Understanding the Fundamentals",
                            year: 2018
                        }, {
                            author: "Johnson, A.",
                            title: "Theoretical Perspectives",
                            year: 2015
                        }, {
                            author: "Williams, R.",
                            title: "Historical Developments",
                            year: 2010
                        }],
                        supplementary: [{
                            author: "Brown, T.",
                            title: "Advanced Concepts",
                            year: 2020
                        }, {
                            author: "Davis, M.",
                            title: "Critical Approaches",
                            year: 2017
                        }, {
                            author: "Miller, S.",
                            title: "Contemporary Applications",
                            year: 2019
                        }]
                    },
                    multimedia: {
                        videos: [{
                            title: "Introduction to Key Concepts",
                            source: "Educational Video Series",
                            duration: "15:20"
                        }, {
                            title: "Expert Interview",
                            source: "Academic Channel",
                            duration: "28:45"
                        }],
                        audio: [{
                            title: "Podcast Discussion",
                            source: "Academic Podcast Network",
                            duration: "42:10"
                        }, {
                            title: "Lecture Recording",
                            source: "University Archives",
                            duration: "55:30"
                        }]
                    }
                };
                return (0, i.jsxs)("div", {
                    className: "max-w-4xl mx-auto",
                    children: [(0, i.jsxs)("div", {
                        className: "mb-6",
                        children: [(0, i.jsx)("h1", {
                            className: "text-3xl font-bold mb-2",
                            children: c.title
                        }), (0, i.jsx)("p", {
                            className: "text-gray-600",
                            children: c.week
                        })]
                    }), (0, i.jsx)("div", {
                        className: "mb-6",
                        children: (0, i.jsx)(r, {
                            onSearch: e => {
                                console.log("Searching for: ".concat(e))
                            }
                        })
                    }), (0, i.jsx)("div", {
                        className: "mb-6",
                        children: (0, i.jsxs)("div", {
                            className: "flex border-b border-gray-200",
                            children: [(0, i.jsx)("button", {
                                className: "py-2 px-4 font-medium text-sm focus:outline-none ".concat("content" === s ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-500 hover:text-gray-700"),
                                onClick: () => n("content"),
                                children: "Lecture Content"
                            }), (0, i.jsx)("button", {
                                className: "py-2 px-4 font-medium text-sm focus:outline-none ".concat("readings" === s ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-500 hover:text-gray-700"),
                                onClick: () => n("readings"),
                                children: "Readings"
                            }), (0, i.jsx)("button", {
                                className: "py-2 px-4 font-medium text-sm focus:outline-none ".concat("multimedia" === s ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-500 hover:text-gray-700"),
                                onClick: () => n("multimedia"),
                                children: "Multimedia"
                            }), (0, i.jsx)("button", {
                                className: "py-2 px-4 font-medium text-sm focus:outline-none ".concat("activities" === s ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-500 hover:text-gray-700"),
                                onClick: () => n("activities"),
                                children: "Activities"
                            })]
                        })
                    }), (0, i.jsxs)("div", {
                        className: "bg-white p-6 rounded-lg shadow-sm",
                        children: ["content" === s && (0, i.jsxs)("div", {
                            children: [(0, i.jsx)("h2", {
                                className: "text-xl font-semibold mb-4",
                                children: "Learning Objectives"
                            }), (0, i.jsx)("ul", {
                                className: "list-disc pl-6 mb-6 space-y-1",
                                children: c.objectives.map((e, t) => (0, i.jsx)("li", {
                                    children: e
                                }, t))
                            }), (0, i.jsx)("h2", {
                                className: "text-xl font-semibold mb-4",
                                children: "Lecture Content"
                            }), (0, i.jsx)("div", {
                                className: "space-y-4",
                                children: c.content.map((e, t) => (0, i.jsxs)("div", {
                                    className: "border-b border-gray-100 pb-4",
                                    children: [(0, i.jsx)("h3", {
                                        className: "font-medium mb-2",
                                        children: e.title
                                    }), (0, i.jsx)("p", {
                                        className: "text-gray-700",
                                        children: e.text
                                    })]
                                }, t))
                            }), (0, i.jsx)("h2", {
                                className: "text-xl font-semibold mt-6 mb-4",
                                children: "Discussion Questions"
                            }), (0, i.jsx)("ul", {
                                className: "list-disc pl-6 space-y-1",
                                children: c.discussion.map((e, t) => (0, i.jsx)("li", {
                                    children: e
                                }, t))
                            })]
                        }), "readings" === s && (0, i.jsxs)("div", {
                            children: [(0, i.jsx)("h2", {
                                className: "text-xl font-semibold mb-4",
                                children: "Core Readings"
                            }), (0, i.jsx)("ul", {
                                className: "list-disc pl-6 mb-6 space-y-1",
                                children: c.readings.core.map((e, t) => (0, i.jsxs)("li", {
                                    children: [e.author, " (", e.year, "). ", (0, i.jsx)("em", {
                                        children: e.title
                                    }), "."]
                                }, t))
                            }), (0, i.jsx)("h2", {
                                className: "text-xl font-semibold mb-4",
                                children: "Supplementary Readings"
                            }), (0, i.jsx)("ul", {
                                className: "list-disc pl-6 space-y-1",
                                children: c.readings.supplementary.map((e, t) => (0, i.jsxs)("li", {
                                    children: [e.author, " (", e.year, "). ", (0, i.jsx)("em", {
                                        children: e.title
                                    }), "."]
                                }, t))
                            })]
                        }), "multimedia" === s && (0, i.jsxs)("div", {
                            children: [(0, i.jsx)("h2", {
                                className: "text-xl font-semibold mb-4",
                                children: "Video Resources"
                            }), (0, i.jsx)("div", {
                                className: "space-y-3 mb-6",
                                children: c.multimedia.videos.map((e, t) => (0, i.jsxs)("div", {
                                    className: "flex items-start",
                                    children: [(0, i.jsx)("span", {
                                        className: "text-red-500 mr-2",
                                        children: "▶"
                                    }), (0, i.jsxs)("div", {
                                        children: [(0, i.jsx)("p", {
                                            className: "font-medium",
                                            children: e.title
                                        }), (0, i.jsxs)("p", {
                                            className: "text-sm text-gray-600",
                                            children: [e.source, " • ", e.duration]
                                        })]
                                    })]
                                }, t))
                            }), (0, i.jsx)("h2", {
                                className: "text-xl font-semibold mb-4",
                                children: "Audio Resources"
                            }), (0, i.jsx)("div", {
                                className: "space-y-3",
                                children: c.multimedia.audio.map((e, t) => (0, i.jsxs)("div", {
                                    className: "flex items-start",
                                    children: [(0, i.jsx)("span", {
                                        className: "text-blue-500 mr-2",
                                        children: "\uD83C\uDFA7"
                                    }), (0, i.jsxs)("div", {
                                        children: [(0, i.jsx)("p", {
                                            className: "font-medium",
                                            children: e.title
                                        }), (0, i.jsxs)("p", {
                                            className: "text-sm text-gray-600",
                                            children: [e.source, " • ", e.duration]
                                        })]
                                    })]
                                }, t))
                            })]
                        }), "activities" === s && (0, i.jsxs)("div", {
                            children: [(0, i.jsx)("h2", {
                                className: "text-xl font-semibold mb-4",
                                children: "In-Class Activities"
                            }), (0, i.jsx)("ul", {
                                className: "list-disc pl-6 space-y-1",
                                children: c.activities.map((e, t) => (0, i.jsx)("li", {
                                    children: e
                                }, t))
                            })]
                        })]
                    }), (0, i.jsxs)("div", {
                        className: "flex justify-between mt-8",
                        children: [parseInt(l) > 1 && (0, i.jsx)(o(), {
                            href: "/lectures/".concat(parseInt(l) - 1),
                            className: "bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md transition",
                            children: "← Previous Lecture"
                        }), (0, i.jsx)(o(), {
                            href: "/lectures",
                            className: "bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md transition",
                            children: "All Lectures"
                        }), 25 > parseInt(l) && (0, i.jsx)(o(), {
                            href: "/lectures/".concat(parseInt(l) + 1),
                            className: "bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md transition",
                            children: "Next Lecture →"
                        })]
                    })]
                })
            }
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [587, 634, 775, 358], () => t(9905)), _N_E = e.O()
    }
]);