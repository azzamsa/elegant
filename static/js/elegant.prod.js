var tipuesearch_stop_words = [
    "a",
    "above",
    "after",
    "again",
    "against",
    "all",
    "am",
    "an",
    "and",
    "any",
    "are",
    "aren't",
    "as",
    "at",
    "be",
    "because",
    "been",
    "before",
    "being",
    "below",
    "between",
    "both",
    "but",
    "by",
    "can't",
    "cannot",
    "could",
    "couldn't",
    "did",
    "didn't",
    "do",
    "does",
    "doesn't",
    "doing",
    "don't",
    "down",
    "during",
    "each",
    "few",
    "for",
    "from",
    "further",
    "had",
    "hadn't",
    "has",
    "hasn't",
    "have",
    "haven't",
    "having",
    "he",
    "he'd",
    "he'll",
    "he's",
    "her",
    "here",
    "here's",
    "hers",
    "herself",
    "him",
    "himself",
    "his",
    "how",
    "how's",
    "i",
    "i'd",
    "i'll",
    "i'm",
    "i've",
    "if",
    "in",
    "into",
    "is",
    "isn't",
    "it",
    "it's",
    "its",
    "itself",
    "let's",
    "me",
    "more",
    "most",
    "mustn't",
    "my",
    "myself",
    "no",
    "nor",
    "not",
    "of",
    "off",
    "on",
    "once",
    "only",
    "or",
    "other",
    "ought",
    "our",
    "ours",
    "ourselves",
    "out",
    "over",
    "own",
    "same",
    "shan't",
    "she",
    "she'd",
    "she'll",
    "she's",
    "should",
    "shouldn't",
    "so",
    "some",
    "such",
    "than",
    "that",
    "that's",
    "the",
    "their",
    "theirs",
    "them",
    "themselves",
    "then",
    "there",
    "there's",
    "these",
    "they",
    "they'd",
    "they'll",
    "they're",
    "they've",
    "this",
    "those",
    "through",
    "to",
    "too",
    "under",
    "until",
    "up",
    "very",
    "was",
    "wasn't",
    "we",
    "we'd",
    "we'll",
    "we're",
    "we've",
    "were",
    "weren't",
    "what",
    "what's",
    "when",
    "when's",
    "where",
    "where's",
    "which",
    "while",
    "who",
    "who's",
    "whom",
    "why",
    "why's",
    "with",
    "won't",
    "would",
    "wouldn't",
    "you",
    "you'd",
    "you'll",
    "you're",
    "you've",
    "your",
    "yours",
    "yourself",
    "yourselves"
  ],
  tipuesearch_replace = {
    words: [
      { word: "tip", replace_with: "tipue" },
      { word: "javscript", replace_with: "javascript" },
      { word: "jqeury", replace_with: "jquery" }
    ]
  },
  tipuesearch_weight = {
    weight: [
      { url: "http://www.tipue.com", score: 60 },
      { url: "http://www.tipue.com/search", score: 60 },
      { url: "http://www.tipue.com/tipr", score: 30 },
      { url: "http://www.tipue.com/support", score: 20 }
    ]
  },
  tipuesearch_stem = {
    words: [
      { word: "e-mail", stem: "email" },
      { word: "javascript", stem: "jquery" },
      { word: "javascript", stem: "js" }
    ]
  },
  tipuesearch_related = {
    Related: [
      { search: "tipue", related: "Search", include: 1 },
      { search: "tipue", related: "jQuery" },
      { search: "tipue", related: "Blog" },
      { search: "tipue", related: "Support" },
      { search: "tipue search", related: "Demo", include: 1 },
      { search: "tipue search", related: "Support" }
    ]
  },
  tipuesearch_string_1 = "No title",
  tipuesearch_string_2 = "Showing results for",
  tipuesearch_string_3 = "Search instead for",
  tipuesearch_string_4 = "1 result",
  tipuesearch_string_5 = "results",
  tipuesearch_string_6 = "<",
  tipuesearch_string_7 = ">",
  tipuesearch_string_8 = "Nothing found.",
  tipuesearch_string_9 = "Common words are largely ignored.",
  tipuesearch_string_10 = "Related",
  tipuesearch_string_11 = "Search should be one character or more.",
  tipuesearch_string_12 = "Search should be",
  tipuesearch_string_13 = "characters or more.",
  tipuesearch_string_14 = "seconds",
  tipuesearch_string_15 = "Open Image",
  tipuesearch_string_16 = "Goto Page",
  startTimer = new Date().getTime();
!(function(e) {
  e.fn.tipuesearch = function(t) {
    var n = e.extend(
      {
        contextBuffer: 60,
        contextLength: 60,
        contextStart: 90,
        debug: !1,
        descriptiveWords: 25,
        footerPages: 3,
        highlightTerms: !0,
        imageZoom: !0,
        minimumLength: 3,
        newWindow: !1,
        show: 10,
        showContext: !0,
        showRelated: !0,
        showTime: !0,
        showTitleCount: !0,
        showURL: !0,
        wholeWords: !0
      },
      t
    );
    return this.each(function() {
      var t = 0,
        i = "";
      function o(e) {
        var t = location.search,
          n = (new RegExp("[?|&]" + e + "=([^&;]+?)(&|#|;|$)").exec(t) || [
            ,
            ""
          ])[1].replace(/\+/g, "%20");
        try {
          n = decodeURIComponent(n);
        } catch (e) {
          n = unescape(n);
        }
        return n || null;
      }
      function r(o, a) {
        window.scrollTo(0, 0);
        var l = "",
          s = !1,
          u = !1,
          c = !0,
          p = 0,
          d = [],
          m = e("#tipue_search_input").val();
        m = m.replace(/\+/g, " ").replace(/\s\s+/g, " ");
        var h = (m = e.trim(m)).toLowerCase();
        ((h.match('^"') && h.match('"$')) ||
          (h.match("^'") && h.match("'$"))) &&
          (c = !1);
        var f = h.split(" ");
        if (c) {
          h = "";
          for (var g = 0; g < f.length; g++) {
            for (var v = !0, w = 0; w < tipuesearch_stop_words.length; w++)
              f[g] == tipuesearch_stop_words[w] && ((v = !1), (u = !0));
            v && (h = h + " " + f[g]);
          }
          f = (h = e.trim(h)).split(" ");
        } else h = h.substring(1, h.length - 1);
        if (h.length >= n.minimumLength) {
          if (c) {
            if (a) {
              var y = h;
              for (g = 0; g < f.length; g++)
                for (w = 0; w < tipuesearch_replace.words.length; w++)
                  f[g] == tipuesearch_replace.words[w].word &&
                    ((h = h.replace(
                      f[g],
                      tipuesearch_replace.words[w].replace_with
                    )),
                    (s = !0));
              f = h.split(" ");
            }
            var b = h;
            for (g = 0; g < f.length; g++)
              for (w = 0; w < tipuesearch_stem.words.length; w++)
                f[g] == tipuesearch_stem.words[w].word &&
                  (b = b + " " + tipuesearch_stem.words[w].stem);
            f = b.split(" ");
            for (g = 0; g < tipuesearch.pages.length; g++) {
              var _ = 0,
                x = tipuesearch.pages[g].text;
              for (w = 0; w < f.length; w++) {
                if (n.wholeWords)
                  var C = new RegExp("\\b" + f[w] + "\\b", "gi");
                else C = new RegExp(f[w], "gi");
                if (-1 != tipuesearch.pages[g].title.search(C))
                  _ += 20 * tipuesearch.pages[g].title.match(C).length;
                if (-1 != tipuesearch.pages[g].text.search(C))
                  _ += 20 * tipuesearch.pages[g].text.match(C).length;
                if (tipuesearch.pages[g].tags)
                  if (-1 != tipuesearch.pages[g].tags.search(C))
                    _ += 10 * tipuesearch.pages[g].tags.match(C).length;
                if (
                  (-1 != tipuesearch.pages[g].url.search(C) && (_ += 20),
                  0 != _)
                )
                  for (var T = 0; T < tipuesearch_weight.weight.length; T++)
                    tipuesearch.pages[g].url ==
                      tipuesearch_weight.weight[T].url &&
                      (_ += tipuesearch_weight.weight[T].score);
                f[w].match("^-") &&
                  ((C = new RegExp(f[w].substring(1), "i")),
                  (-1 == tipuesearch.pages[g].title.search(C) &&
                    -1 == tipuesearch.pages[g].text.search(C) &&
                    -1 == tipuesearch.pages[g].tags.search(C)) ||
                    (_ = 0));
              }
              0 != _ &&
                (d.push({
                  score: _,
                  title: tipuesearch.pages[g].title,
                  desc: x,
                  img: tipuesearch.pages[g].img,
                  url: tipuesearch.pages[g].url,
                  note: tipuesearch.pages[g].note
                }),
                p++);
            }
          } else
            for (g = 0; g < tipuesearch.pages.length; g++) {
              (_ = 0),
                (x = tipuesearch.pages[g].text),
                (C = new RegExp(h, "gi"));
              if (-1 != tipuesearch.pages[g].title.search(C))
                _ += 20 * tipuesearch.pages[g].title.match(C).length;
              if (-1 != tipuesearch.pages[g].text.search(C))
                _ += 20 * tipuesearch.pages[g].text.match(C).length;
              if (tipuesearch.pages[g].tags)
                if (-1 != tipuesearch.pages[g].tags.search(C))
                  _ += 10 * tipuesearch.pages[g].tags.match(C).length;
              if (
                (-1 != tipuesearch.pages[g].url.search(C) && (_ += 20), 0 != _)
              )
                for (T = 0; T < tipuesearch_weight.weight.length; T++)
                  tipuesearch.pages[g].url ==
                    tipuesearch_weight.weight[T].url &&
                    (_ += tipuesearch_weight.weight[T].score);
              0 != _ &&
                (d.push({
                  score: _,
                  title: tipuesearch.pages[g].title,
                  desc: x,
                  img: tipuesearch.pages[g].img,
                  url: tipuesearch.pages[g].url,
                  note: tipuesearch.pages[g].note
                }),
                p++);
            }
          if (0 != p) {
            if (n.showTitleCount && 0 == t) {
              var L = document.title;
              (document.title = "(" + p + ") " + L), t++;
            }
            if (1 == p)
              l +=
                '<div id="tipue_search_results_count">' + tipuesearch_string_4;
            else
              l +=
                '<div id="tipue_search_results_count">' +
                p.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
                " " +
                tipuesearch_string_5;
            if (n.showTime)
              (l +=
                " (" +
                ((new Date().getTime() - startTimer) / 1e3).toFixed(2) +
                " " +
                tipuesearch_string_14 +
                ")"),
                (n.showTime = !1);
            if (((l += "</div>"), n.showRelated && c)) {
              var E = "";
              w = 0;
              for (g = 0; g < tipuesearch_related.Related.length; g++)
                if (h == tipuesearch_related.Related[g].search) {
                  if (
                    (w ||
                      (l +=
                        '<div class="tipue_search_related">' +
                        tipuesearch_string_10 +
                        ": "),
                    s && (m = h),
                    tipuesearch_related.Related[g].include)
                  )
                    var M = m + " " + tipuesearch_related.Related[g].related;
                  else M = tipuesearch_related.Related[g].related;
                  (E +=
                    '<a class="tipue_search_related_btn" id="' +
                    M +
                    '">' +
                    tipuesearch_related.Related[g].related +
                    "</a>, "),
                    w++;
                }
              w && ((E = E.slice(0, -2)), (l += E += ".</div>"));
            }
            s &&
              (l +=
                '<div id="tipue_search_replace">' +
                tipuesearch_string_2 +
                " " +
                h +
                ". " +
                tipuesearch_string_3 +
                ' <a id="tipue_search_replaced">' +
                y +
                "</a></div>"),
              d.sort(function(e, t) {
                return t.score - e.score;
              });
            var I = 0;
            n.imageZoom &&
              (l +=
                '<div id="tipue_search_image_modal"><div class="tipue_search_image_close">&#10005;</div><div class="tipue_search_image_block"><a id="tipue_search_zoom_url"><img id="tipue_search_zoom_img"></a><div id="tipue_search_zoom_text"></div></div></div>');
            for (g = 0; g < d.length; g++) {
              if (I >= o && I < n.show + o) {
                if (
                  ((l += '<div class="tipue_search_result">'),
                  (l +=
                    '<div class="tipue_search_content_title"><a href="' +
                    d[g].url +
                    '"' +
                    i +
                    ">" +
                    d[g].title +
                    "</a></div>"),
                  n.debug &&
                    (l +=
                      '<div class="tipue_search_content_debug">Score: ' +
                      d[g].score +
                      "</div>"),
                  n.showURL)
                ) {
                  var A = d[g].url.toLowerCase();
                  0 == A.indexOf("http://") && (A = A.slice(7)),
                    (l +=
                      '<div class="tipue_search_content_url"><a href="' +
                      d[g].url +
                      '"' +
                      i +
                      ">" +
                      A +
                      "</a></div>");
                }
                if (
                  (d[g].img &&
                    (n.imageZoom
                      ? (l +=
                          '<div class="tipue_search_image"><img class="tipue_search_img tipue_search_image_zoom" src="' +
                          d[g].img +
                          '" alt="' +
                          d[g].title +
                          '" data-url="' +
                          d[g].url +
                          '"></div>')
                      : (l +=
                          '<div class="tipue_search_image"><a href="' +
                          d[g].url +
                          '"' +
                          i +
                          '><img class="tipue_search_img" src="' +
                          d[g].img +
                          '" alt="' +
                          d[g].title +
                          '"></a></div>')),
                  d[g].desc)
                ) {
                  var S = d[g].desc;
                  if (n.showContext) {
                    f = h.split(" ");
                    var O = d[g].desc.toLowerCase().indexOf(f[0]);
                    if (O > n.contextStart) {
                      var D = S.substr(O - n.contextBuffer),
                        k = D.indexOf(" ");
                      (D = S.substr(O - n.contextBuffer + k)),
                        (D = e.trim(D)).length > n.contextLength &&
                          (S = "... " + D);
                    }
                  }
                  if (c) {
                    f = h.split(" ");
                    for (w = 0; w < f.length; w++)
                      if (n.highlightTerms) {
                        var H = new RegExp("(" + f[w] + ")", "gi");
                        S = S.replace(H, "<h0011>$1<h0012>");
                      }
                  } else if (n.highlightTerms) {
                    H = new RegExp("(" + h + ")", "gi");
                    S = S.replace(
                      H,
                      '<span class="tipue_search_content_bold">$1</span>'
                    );
                  }
                  var R = "",
                    F = S.split(" ");
                  if (F.length < n.descriptiveWords) R = S;
                  else for (w = 0; w < n.descriptiveWords; w++) R += F[w] + " ";
                  "." != (R = e.trim(R)).charAt(R.length - 1) && (R += " ..."),
                    (l +=
                      '<div class="tipue_search_content_text">' +
                      (R = (R = R.replace(
                        /h0011/g,
                        'span class="tipue_search_content_bold"'
                      )).replace(/h0012/g, "/span")) +
                      "</div>");
                }
                d[g].note &&
                  (l +=
                    '<div class="tipue_search_note">' + d[g].note + "</div>"),
                  (l += "</div>");
              }
              I++;
            }
            if (p > n.show) {
              var P = Math.ceil(p / n.show),
                N = o / n.show;
              if (
                (n.footerPages < 3 && (n.footerPages = 3),
                (l +=
                  '<div id="tipue_search_foot"><ul id="tipue_search_foot_boxes">'),
                o > 0 &&
                  (l +=
                    '<li role="navigation"><a class="tipue_search_foot_box" accesskey="b" id="' +
                    (o - n.show) +
                    "_" +
                    a +
                    '">' +
                    tipuesearch_string_6 +
                    "</a></li>"),
                N <= 2)
              ) {
                var z = P;
                P > n.footerPages && (z = n.footerPages);
                for (w = 0; w < z; w++)
                  l +=
                    w == N
                      ? '<li class="current" role="navigation">' +
                        (w + 1) +
                        "</li>"
                      : '<li role="navigation"><a class="tipue_search_foot_box" id="' +
                        w * n.show +
                        "_" +
                        a +
                        '">' +
                        (w + 1) +
                        "</a></li>";
              } else {
                (z = N + n.footerPages - 1) > P && (z = P);
                for (w = N - 1; w < z; w++)
                  l +=
                    w == N
                      ? '<li class="current" role="navigation">' +
                        (w + 1) +
                        "</li>"
                      : '<li role="navigation"><a class="tipue_search_foot_box" id="' +
                        w * n.show +
                        "_" +
                        a +
                        '">' +
                        (w + 1) +
                        "</a></li>";
              }
              N + 1 != P &&
                (l +=
                  '<li role="navigation"><a class="tipue_search_foot_box" accesskey="m" id="' +
                  (o + n.show) +
                  "_" +
                  a +
                  '">' +
                  tipuesearch_string_7 +
                  "</a></li>"),
                (l += "</ul></div>");
            }
          } else
            l +=
              '<div id="tipue_search_error">' + tipuesearch_string_8 + "</div>";
        } else u ? (l += '<div id="tipue_search_error">' + tipuesearch_string_8 + " " + tipuesearch_string_9 + "</div>") : 1 == n.minimumLength ? (l += '<div id="tipue_search_error">' + tipuesearch_string_11 + "</div>") : (l += '<div id="tipue_search_error">' + tipuesearch_string_12 + " " + n.minimumLength + " " + tipuesearch_string_13 + "</div>");
        e("#tipue_search_content")
          .hide()
          .html(l)
          .slideDown(200),
          e("#tipue_search_replaced").click(function() {
            r(0, !1);
          }),
          e(".tipue_search_related_btn").click(function() {
            e("#tipue_search_input").val(e(this).attr("id")), r(0, !0);
          }),
          e(".tipue_search_image_zoom").click(function() {
            e("#tipue_search_image_modal").fadeIn(300),
              e("#tipue_search_zoom_img").attr("src", this.src);
            var t = e(this).attr("data-url");
            e("#tipue_search_zoom_url").attr("href", t);
            var n =
              this.alt +
              '<div class="tipue_search_zoom_options"><a href="' +
              this.src +
              '" target="_blank">' +
              tipuesearch_string_15 +
              '</a>&nbsp; <a href="' +
              t +
              '">' +
              tipuesearch_string_16 +
              "</a></div>";
            e("#tipue_search_zoom_text").html(n);
          }),
          e(".tipue_search_image_close").click(function() {
            e("#tipue_search_image_modal").fadeOut(300);
          }),
          e(".tipue_search_foot_box").click(function() {
            var t = e(this)
              .attr("id")
              .split("_");
            r(parseInt(t[0]), t[1]);
          });
      }
      n.newWindow && (i = ' target="_blank"'),
        o("q") && (e("#tipue_search_input").val(o("q")), r(0, !0)),
        e(this).keyup(function(e) {
          "13" == e.keyCode && r(0, !0);
        });
    });
  };
})(jQuery),
  (function(e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? t()
      : "function" == typeof define && define.amd
      ? define(t)
      : t();
  })(0, function() {
    "use strict";
    var e =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            },
      t = function(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      },
      n = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        return function(t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })(),
      i = function(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      },
      o = function(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      };
    !(function(t, n) {
      var i = t.document,
        o = t.Object,
        r = (function(e) {
          var t,
            n,
            i,
            r,
            a = /^[A-Z]+[a-z]/,
            l = function(e, t) {
              (t = t.toLowerCase()) in s ||
                ((s[e] = (s[e] || []).concat(t)),
                (s[t] = s[t.toUpperCase()] = e));
            },
            s = (o.create || o)(null),
            u = {};
          for (n in e)
            for (r in e[n])
              for (i = e[n][r], s[r] = i, t = 0; t < i.length; t++)
                s[i[t].toLowerCase()] = s[i[t].toUpperCase()] = r;
          return (
            (u.get = function(e) {
              return "string" == typeof e
                ? s[e] || (a.test(e) ? [] : "")
                : (function(e) {
                    var t,
                      n = [];
                    for (t in s) e.test(t) && n.push(t);
                    return n;
                  })(e);
            }),
            (u.set = function(e, t) {
              return a.test(e) ? l(e, t) : l(t, e), u;
            }),
            u
          );
        })({
          collections: {
            HTMLAllCollection: ["all"],
            HTMLCollection: ["forms"],
            HTMLFormControlsCollection: ["elements"],
            HTMLOptionsCollection: ["options"]
          },
          elements: {
            Element: ["element"],
            HTMLAnchorElement: ["a"],
            HTMLAppletElement: ["applet"],
            HTMLAreaElement: ["area"],
            HTMLAttachmentElement: ["attachment"],
            HTMLAudioElement: ["audio"],
            HTMLBRElement: ["br"],
            HTMLBaseElement: ["base"],
            HTMLBodyElement: ["body"],
            HTMLButtonElement: ["button"],
            HTMLCanvasElement: ["canvas"],
            HTMLContentElement: ["content"],
            HTMLDListElement: ["dl"],
            HTMLDataElement: ["data"],
            HTMLDataListElement: ["datalist"],
            HTMLDetailsElement: ["details"],
            HTMLDialogElement: ["dialog"],
            HTMLDirectoryElement: ["dir"],
            HTMLDivElement: ["div"],
            HTMLDocument: ["document"],
            HTMLElement: [
              "element",
              "abbr",
              "address",
              "article",
              "aside",
              "b",
              "bdi",
              "bdo",
              "cite",
              "code",
              "command",
              "dd",
              "dfn",
              "dt",
              "em",
              "figcaption",
              "figure",
              "footer",
              "header",
              "i",
              "kbd",
              "mark",
              "nav",
              "noscript",
              "rp",
              "rt",
              "ruby",
              "s",
              "samp",
              "section",
              "small",
              "strong",
              "sub",
              "summary",
              "sup",
              "u",
              "var",
              "wbr"
            ],
            HTMLEmbedElement: ["embed"],
            HTMLFieldSetElement: ["fieldset"],
            HTMLFontElement: ["font"],
            HTMLFormElement: ["form"],
            HTMLFrameElement: ["frame"],
            HTMLFrameSetElement: ["frameset"],
            HTMLHRElement: ["hr"],
            HTMLHeadElement: ["head"],
            HTMLHeadingElement: ["h1", "h2", "h3", "h4", "h5", "h6"],
            HTMLHtmlElement: ["html"],
            HTMLIFrameElement: ["iframe"],
            HTMLImageElement: ["img"],
            HTMLInputElement: ["input"],
            HTMLKeygenElement: ["keygen"],
            HTMLLIElement: ["li"],
            HTMLLabelElement: ["label"],
            HTMLLegendElement: ["legend"],
            HTMLLinkElement: ["link"],
            HTMLMapElement: ["map"],
            HTMLMarqueeElement: ["marquee"],
            HTMLMediaElement: ["media"],
            HTMLMenuElement: ["menu"],
            HTMLMenuItemElement: ["menuitem"],
            HTMLMetaElement: ["meta"],
            HTMLMeterElement: ["meter"],
            HTMLModElement: ["del", "ins"],
            HTMLOListElement: ["ol"],
            HTMLObjectElement: ["object"],
            HTMLOptGroupElement: ["optgroup"],
            HTMLOptionElement: ["option"],
            HTMLOutputElement: ["output"],
            HTMLParagraphElement: ["p"],
            HTMLParamElement: ["param"],
            HTMLPictureElement: ["picture"],
            HTMLPreElement: ["pre"],
            HTMLProgressElement: ["progress"],
            HTMLQuoteElement: ["blockquote", "q", "quote"],
            HTMLScriptElement: ["script"],
            HTMLSelectElement: ["select"],
            HTMLShadowElement: ["shadow"],
            HTMLSlotElement: ["slot"],
            HTMLSourceElement: ["source"],
            HTMLSpanElement: ["span"],
            HTMLStyleElement: ["style"],
            HTMLTableCaptionElement: ["caption"],
            HTMLTableCellElement: ["td", "th"],
            HTMLTableColElement: ["col", "colgroup"],
            HTMLTableElement: ["table"],
            HTMLTableRowElement: ["tr"],
            HTMLTableSectionElement: ["thead", "tbody", "tfoot"],
            HTMLTemplateElement: ["template"],
            HTMLTextAreaElement: ["textarea"],
            HTMLTimeElement: ["time"],
            HTMLTitleElement: ["title"],
            HTMLTrackElement: ["track"],
            HTMLUListElement: ["ul"],
            HTMLUnknownElement: ["unknown", "vhgroupv", "vkeygen"],
            HTMLVideoElement: ["video"]
          },
          nodes: {
            Attr: ["node"],
            Audio: ["audio"],
            CDATASection: ["node"],
            CharacterData: ["node"],
            Comment: ["#comment"],
            Document: ["#document"],
            DocumentFragment: ["#document-fragment"],
            DocumentType: ["node"],
            HTMLDocument: ["#document"],
            Image: ["img"],
            Option: ["option"],
            ProcessingInstruction: ["node"],
            ShadowRoot: ["#shadow-root"],
            Text: ["#text"],
            XMLDocument: ["xml"]
          }
        });
      "object" !== (void 0 === n ? "undefined" : e(n)) &&
        (n = { type: n || "auto" });
      var a,
        l,
        s,
        u,
        c,
        p,
        d,
        m,
        h,
        f = "registerElement",
        g = "__" + f + ((1e5 * t.Math.random()) >> 0),
        v = "addEventListener",
        w = "attached",
        y = "Callback",
        b = "detached",
        _ = "extends",
        x = "attributeChanged" + y,
        C = "connected" + y,
        T = "disconnected" + y,
        L = "created" + y,
        E = "ADDITION",
        M = "REMOVAL",
        I = "DOMAttrModified",
        A = "DOMContentLoaded",
        S = "<",
        O = "=",
        D = /^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,
        k = [
          "ANNOTATION-XML",
          "COLOR-PROFILE",
          "FONT-FACE",
          "FONT-FACE-SRC",
          "FONT-FACE-URI",
          "FONT-FACE-FORMAT",
          "FONT-FACE-NAME",
          "MISSING-GLYPH"
        ],
        H = [],
        R = [],
        F = "",
        P = i.documentElement,
        N =
          H.indexOf ||
          function(e) {
            for (var t = this.length; t-- && this[t] !== e; );
            return t;
          },
        z = o.prototype,
        Z = z.hasOwnProperty,
        U = z.isPrototypeOf,
        B = o.defineProperty,
        K = [],
        V = o.getOwnPropertyDescriptor,
        W = o.getOwnPropertyNames,
        q = o.getPrototypeOf,
        j = o.setPrototypeOf,
        G = !!o.__proto__,
        Y = "__dreCEv1",
        X = t.customElements,
        $ =
          !/^force/.test(n.type) && !!(X && X.define && X.get && X.whenDefined),
        Q = o.create || o,
        J =
          t.Map ||
          function() {
            var e,
              t = [],
              n = [];
            return {
              get: function(e) {
                return n[N.call(t, e)];
              },
              set: function(i, o) {
                (e = N.call(t, i)) < 0 ? (n[t.push(i) - 1] = o) : (n[e] = o);
              }
            };
          },
        ee =
          t.Promise ||
          function(e) {
            var t = [],
              n = !1,
              i = {
                catch: function() {
                  return i;
                },
                then: function(e) {
                  return t.push(e), n && setTimeout(o, 1), i;
                }
              };
            function o(e) {
              for (n = !0; t.length; ) t.shift()(e);
            }
            return e(o), i;
          },
        te = !1,
        ne = Q(null),
        ie = Q(null),
        oe = new J(),
        re = function(e) {
          return e.toLowerCase();
        },
        ae =
          o.create ||
          function e(t) {
            return t ? ((e.prototype = t), new e()) : this;
          },
        le =
          j ||
          (G
            ? function(e, t) {
                return (e.__proto__ = t), e;
              }
            : W && V
            ? (function() {
                function e(e, t) {
                  for (var n, i = W(t), o = 0, r = i.length; o < r; o++)
                    (n = i[o]), Z.call(e, n) || B(e, n, V(t, n));
                }
                return function(t, n) {
                  do {
                    e(t, n);
                  } while ((n = q(n)) && !U.call(n, t));
                  return t;
                };
              })()
            : function(e, t) {
                for (var n in t) e[n] = t[n];
                return e;
              }),
        se = t.MutationObserver || t.WebKitMutationObserver,
        ue = (t.HTMLElement || t.Element || t.Node).prototype,
        ce = !U.call(ue, P),
        pe = ce
          ? function(e, t, n) {
              return (e[t] = n.value), e;
            }
          : B,
        de = ce
          ? function(e) {
              return 1 === e.nodeType;
            }
          : function(e) {
              return U.call(ue, e);
            },
        me = ce && [],
        he = ue.attachShadow,
        fe = ue.cloneNode,
        ge = ue.dispatchEvent,
        ve = ue.getAttribute,
        we = ue.hasAttribute,
        ye = ue.removeAttribute,
        be = ue.setAttribute,
        _e = i.createElement,
        xe = _e,
        Ce = se && { attributes: !0, characterData: !0, attributeOldValue: !0 },
        Te =
          se ||
          function(e) {
            (Ae = !1), P.removeEventListener(I, Te);
          },
        Le = 0,
        Ee = f in i && !/^force-all/.test(n.type),
        Me = !0,
        Ie = !1,
        Ae = !0,
        Se = !0,
        Oe = !0;
      function De() {
        var e = a.splice(0, a.length);
        for (Le = 0; e.length; ) e.shift().call(null, e.shift());
      }
      function ke(e, t) {
        for (var n = 0, i = e.length; n < i; n++) Ke(e[n], t);
      }
      function He(e) {
        return function(t) {
          de(t) && (Ke(t, e), F.length && ke(t.querySelectorAll(F), e));
        };
      }
      function Re(e) {
        var t = ve.call(e, "is"),
          n = e.nodeName.toUpperCase(),
          i = N.call(H, t ? O + t.toUpperCase() : S + n);
        return t && -1 < i && !Fe(n, t) ? -1 : i;
      }
      function Fe(e, t) {
        return -1 < F.indexOf(e + '[is="' + t + '"]');
      }
      function Pe(e) {
        var t = e.currentTarget,
          n = e.attrChange,
          i = e.attrName,
          o = e.target,
          r = e[E] || 2,
          a = e[M] || 3;
        !Oe ||
          (o && o !== t) ||
          !t[x] ||
          "style" === i ||
          (e.prevValue === e.newValue &&
            ("" !== e.newValue || (n !== r && n !== a))) ||
          t[x](i, n === r ? null : e.prevValue, n === a ? null : e.newValue);
      }
      function Ne(e) {
        var t = He(e);
        return function(e) {
          a.push(t, e.target), Le && clearTimeout(Le), (Le = setTimeout(De, 1));
        };
      }
      function ze(e) {
        Se && ((Se = !1), e.currentTarget.removeEventListener(A, ze)),
          F.length &&
            ke((e.target || i).querySelectorAll(F), e.detail === b ? b : w),
          ce &&
            (function() {
              for (var e, t = 0, n = me.length; t < n; t++)
                (e = me[t]),
                  P.contains(e) || (n--, me.splice(t--, 1), Ke(e, b));
            })();
      }
      function Ze(e, t) {
        be.call(this, e, t), l.call(this, { target: this });
      }
      function Ue(e, t) {
        le(e, t),
          c
            ? c.observe(e, Ce)
            : (Ae &&
                ((e.setAttribute = Ze),
                (e[g] = u(e)),
                e[v]("DOMSubtreeModified", l)),
              e[v](I, Pe)),
          e[L] && Oe && ((e.created = !0), e[L](), (e.created = !1));
      }
      function Be(e) {
        throw new Error("A " + e + " type is already registered");
      }
      function Ke(e, t) {
        var n,
          i,
          o = Re(e);
        -1 < o &&
          (d(e, R[o]),
          (o = 0),
          t !== w || e[w]
            ? t !== b ||
              e[b] ||
              ((e[w] = !1), (e[b] = !0), (i = "disconnected"), (o = 1))
            : ((e[b] = !1),
              (e[w] = !0),
              (i = "connected"),
              (o = 1),
              ce && N.call(me, e) < 0 && me.push(e)),
          o && (n = e[t + y] || e[i + y]) && n.call(e));
      }
      function Ve() {}
      function We(e, t, n) {
        var o = (n && n[_]) || "",
          r = t.prototype,
          a = ae(r),
          l = t.observedAttributes || K,
          s = { prototype: a };
        pe(a, L, {
          value: function() {
            if (te) te = !1;
            else if (!this[Y]) {
              (this[Y] = !0), new t(this), r[L] && r[L].call(this);
              var e = ne[oe.get(t)];
              (!$ || e.create.length > 1) && Ge(this);
            }
          }
        }),
          pe(a, x, {
            value: function(e) {
              -1 < N.call(l, e) && r[x].apply(this, arguments);
            }
          }),
          r[C] && pe(a, "attachedCallback", { value: r[C] }),
          r[T] && pe(a, "detachedCallback", { value: r[T] }),
          o && (s[_] = o),
          (e = e.toUpperCase()),
          (ne[e] = { constructor: t, create: o ? [o, re(e)] : [e] }),
          oe.set(t, e),
          i[f](e.toLowerCase(), s),
          Ye(e),
          ie[e].r();
      }
      function qe(e) {
        var t = ne[e.toUpperCase()];
        return t && t.constructor;
      }
      function je(e) {
        return "string" == typeof e ? e : (e && e.is) || "";
      }
      function Ge(e) {
        for (var t, n = e[x], i = n ? e.attributes : K, o = i.length; o--; )
          (t = i[o]),
            n.call(e, t.name || t.nodeName, null, t.value || t.nodeValue);
      }
      function Ye(e) {
        return (
          (e = e.toUpperCase()) in ie ||
            ((ie[e] = {}),
            (ie[e].p = new ee(function(t) {
              ie[e].r = t;
            }))),
          ie[e].p
        );
      }
      function Xe() {
        X && delete t.customElements,
          B(t, "customElements", { configurable: !0, value: new Ve() }),
          B(t, "CustomElementRegistry", { configurable: !0, value: Ve });
        for (
          var e = function(e) {
              var n = t[e];
              if (n) {
                (t[e] = function(e) {
                  var t, o;
                  return (
                    e || (e = this),
                    e[Y] ||
                      ((te = !0),
                      (t = ne[oe.get(e.constructor)]),
                      ((e = (o = $ && 1 === t.create.length)
                        ? Reflect.construct(n, K, t.constructor)
                        : i.createElement.apply(i, t.create))[Y] = !0),
                      (te = !1),
                      o || Ge(e)),
                    e
                  );
                }),
                  (t[e].prototype = n.prototype);
                try {
                  n.prototype.constructor = t[e];
                } catch (i) {
                  B(n, Y, { value: t[e] });
                }
              }
            },
            n = r.get(/^HTML[A-Z]*[a-z]/),
            o = n.length;
          o--;
          e(n[o])
        );
        (i.createElement = function(e, t) {
          var n = je(t);
          return n ? xe.call(this, e, re(n)) : xe.call(this, e);
        }),
          Ee || ((Ie = !0), i[f](""));
      }
      if (
        (se &&
          (((h = i.createElement("div")).innerHTML = "<div><div></div></div>"),
          new se(function(e, t) {
            if (
              e[0] &&
              "childList" == e[0].type &&
              !e[0].removedNodes[0].childNodes.length
            ) {
              var n = (h = V(ue, "innerHTML")) && h.set;
              n &&
                B(ue, "innerHTML", {
                  set: function(e) {
                    for (; this.lastChild; ) this.removeChild(this.lastChild);
                    n.call(this, e);
                  }
                });
            }
            t.disconnect(), (h = null);
          }).observe(h, { childList: !0, subtree: !0 }),
          (h.innerHTML = "")),
        Ee ||
          (j || G
            ? ((d = function(e, t) {
                U.call(t, e) || Ue(e, t);
              }),
              (m = Ue))
            : (m = d = function(e, t) {
                e[g] || ((e[g] = o(!0)), Ue(e, t));
              }),
          ce
            ? ((Ae = !1),
              (function() {
                var e = V(ue, v),
                  t = e.value,
                  n = function(e) {
                    var t = new CustomEvent(I, { bubbles: !0 });
                    (t.attrName = e),
                      (t.prevValue = ve.call(this, e)),
                      (t.newValue = null),
                      (t[M] = t.attrChange = 2),
                      ye.call(this, e),
                      ge.call(this, t);
                  },
                  i = function(e, t) {
                    var n = we.call(this, e),
                      i = n && ve.call(this, e),
                      o = new CustomEvent(I, { bubbles: !0 });
                    be.call(this, e, t),
                      (o.attrName = e),
                      (o.prevValue = n ? i : null),
                      (o.newValue = t),
                      n
                        ? (o.MODIFICATION = o.attrChange = 1)
                        : (o[E] = o.attrChange = 0),
                      ge.call(this, o);
                  },
                  o = function(e) {
                    var t,
                      n = e.currentTarget,
                      i = n[g],
                      o = e.propertyName;
                    i.hasOwnProperty(o) &&
                      ((i = i[o]),
                      ((t = new CustomEvent(I, { bubbles: !0 })).attrName =
                        i.name),
                      (t.prevValue = i.value || null),
                      (t.newValue = i.value = n[o] || null),
                      null == t.prevValue
                        ? (t[E] = t.attrChange = 0)
                        : (t.MODIFICATION = t.attrChange = 1),
                      ge.call(n, t));
                  };
                (e.value = function(e, r, a) {
                  e === I &&
                    this[x] &&
                    this.setAttribute !== i &&
                    ((this[g] = {
                      className: { name: "class", value: this.className }
                    }),
                    (this.setAttribute = i),
                    (this.removeAttribute = n),
                    t.call(this, "propertychange", o)),
                    t.call(this, e, r, a);
                }),
                  B(ue, v, e);
              })())
            : se ||
              (P[v](I, Te),
              P.setAttribute(g, 1),
              P.removeAttribute(g),
              Ae &&
                ((l = function(e) {
                  var t, n, i;
                  if (this === e.target) {
                    for (i in ((t = this[g]), (this[g] = n = u(this)), n)) {
                      if (!(i in t)) return s(0, this, i, t[i], n[i], E);
                      if (n[i] !== t[i])
                        return s(1, this, i, t[i], n[i], "MODIFICATION");
                    }
                    for (i in t)
                      if (!(i in n)) return s(2, this, i, t[i], n[i], M);
                  }
                }),
                (s = function(e, t, n, i, o, r) {
                  var a = {
                    attrChange: e,
                    currentTarget: t,
                    attrName: n,
                    prevValue: i,
                    newValue: o
                  };
                  (a[r] = e), Pe(a);
                }),
                (u = function(e) {
                  for (
                    var t, n, i = {}, o = e.attributes, r = 0, a = o.length;
                    r < a;
                    r++
                  )
                    "setAttribute" !== (n = (t = o[r]).name) &&
                      (i[n] = t.value);
                  return i;
                }))),
          (i[f] = function(e, t) {
            if (
              ((n = e.toUpperCase()),
              Me &&
                ((Me = !1),
                se
                  ? ((c = (function(e, t) {
                      function n(e, t) {
                        for (var n = 0, i = e.length; n < i; t(e[n++]));
                      }
                      return new se(function(i) {
                        for (var o, r, a, l = 0, s = i.length; l < s; l++)
                          "childList" === (o = i[l]).type
                            ? (n(o.addedNodes, e), n(o.removedNodes, t))
                            : ((r = o.target),
                              Oe &&
                                r[x] &&
                                "style" !== o.attributeName &&
                                (a = ve.call(r, o.attributeName)) !==
                                  o.oldValue &&
                                r[x](o.attributeName, o.oldValue, a));
                      });
                    })(He(w), He(b))),
                    (p = function(e) {
                      return c.observe(e, { childList: !0, subtree: !0 }), e;
                    })(i),
                    he &&
                      (ue.attachShadow = function() {
                        return p(he.apply(this, arguments));
                      }))
                  : ((a = []),
                    i[v]("DOMNodeInserted", Ne(w)),
                    i[v]("DOMNodeRemoved", Ne(b))),
                i[v](A, ze),
                i[v]("readystatechange", ze),
                (ue.cloneNode = function(e) {
                  var t = fe.call(this, !!e),
                    n = Re(t);
                  return (
                    -1 < n && m(t, R[n]),
                    e &&
                      F.length &&
                      (function(e) {
                        for (var t, n = 0, i = e.length; n < i; n++)
                          (t = e[n]), m(t, R[Re(t)]);
                      })(t.querySelectorAll(F)),
                    t
                  );
                })),
              Ie)
            )
              return (Ie = !1);
            if (
              (-2 < N.call(H, O + n) + N.call(H, S + n) && Be(e),
              !D.test(n) || -1 < N.call(k, n))
            )
              throw new Error("The type " + e + " is invalid");
            var n,
              o,
              r = function() {
                return s ? i.createElement(u, n) : i.createElement(u);
              },
              l = t || z,
              s = Z.call(l, _),
              u = s ? t[_].toUpperCase() : n;
            return (
              s && -1 < N.call(H, S + u) && Be(u),
              (o = H.push((s ? O : S) + n) - 1),
              (F = F.concat(
                F.length ? "," : "",
                s ? u + '[is="' + e.toLowerCase() + '"]' : u
              )),
              (r.prototype = R[o] = Z.call(l, "prototype")
                ? l.prototype
                : ae(ue)),
              F.length && ke(i.querySelectorAll(F), w),
              r
            );
          }),
          (i.createElement = xe = function(e, t) {
            var n = je(t),
              o = n ? _e.call(i, e, re(n)) : _e.call(i, e),
              r = "" + e,
              a = N.call(H, (n ? O : S) + (n || r).toUpperCase()),
              l = -1 < a;
            return (
              n &&
                (o.setAttribute("is", (n = n.toLowerCase())),
                l && (l = Fe(r.toUpperCase(), n))),
              (Oe = !i.createElement.innerHTMLHelper),
              l && m(o, R[a]),
              o
            );
          })),
        (Ve.prototype = {
          constructor: Ve,
          define: $
            ? function(e, t, n) {
                if (n) We(e, t, n);
                else {
                  var i = e.toUpperCase();
                  (ne[i] = { constructor: t, create: [i] }),
                    oe.set(t, i),
                    X.define(e, t);
                }
              }
            : We,
          get: $
            ? function(e) {
                return X.get(e) || qe(e);
              }
            : qe,
          whenDefined: $
            ? function(e) {
                return ee.race([X.whenDefined(e), Ye(e)]);
              }
            : Ye
        }),
        !X || /^force/.test(n.type))
      )
        Xe();
      else if (!n.noBuiltIn)
        try {
          !(function(e, n, o) {
            if (
              ((n[_] = "a"),
              ((e.prototype = ae(HTMLAnchorElement.prototype)).constructor = e),
              t.customElements.define(o, e, n),
              ve.call(i.createElement("a", { is: o }), "is") !== o ||
                ($ && ve.call(new e(), "is") !== o))
            )
              throw n;
          })(
            function e() {
              return Reflect.construct(HTMLAnchorElement, [], e);
            },
            {},
            "document-register-element-a"
          );
        } catch (e) {
          Xe();
        }
      if (!n.noBuiltIn)
        try {
          _e.call(i, "a", "a");
        } catch (e) {
          re = function(e) {
            return { is: e.toLowerCase() };
          };
        }
    })(window);
    var r = function(e) {
        return e.toLocaleString("en");
      },
      a = (function(e) {
        function r(e) {
          var n;
          return (
            t(this, r),
            ((n = o(
              this,
              (r.__proto__ || Object.getPrototypeOf(r)).call(this, e)
            )),
            (e = n)).init(),
            o(n, e)
          );
        }
        return i(r, e), n(r, [{ key: "init", value: function() {} }]), r;
      })(HTMLElement),
      l = (function(e) {
        function l() {
          return (
            t(this, l),
            o(
              this,
              (l.__proto__ || Object.getPrototypeOf(l)).apply(this, arguments)
            )
          );
        }
        return (
          i(l, a),
          n(
            l,
            [
              {
                key: "connectedCallback",
                value: function() {
                  var e = this;
                  if (!this._connected) {
                    this.classList.add("loading"),
                      (this.style.display = "block"),
                      (this.innerHTML =
                        '\n      <div class="style-root">\n        <div class="shockwave"></div>\n        <div class="count-container">\n          <div class="count"></div>\n        </div>\n        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">\n          <g class="flat">\n            <path d="M57.0443547 6.86206897C57.6058817 6.46227795 57.7389459 5.67962382 57.3416215 5.11431557 56.9442971 4.54900731 56.1672933 4.41483804 55.6055588 4.81504702L52.4950525 7.030721C51.9335255 7.43051202 51.8004613 8.21316614 52.1977857 8.7784744 52.4404567 9.12371996 52.8251182 9.30825496 53.2153846 9.30825496 53.4640757 9.30825496 53.7152578 9.23343783 53.9338485 9.07753396L57.0443547 6.86206897zM48.8035059 6.1414838C48.94778 6.19623824 49.0959982 6.22215256 49.2415177 6.22215256 49.7455426 6.22215256 50.2198824 5.91201672 50.4075424 5.40898642L51.7485642 1.81818182C51.9906124 1.17011494 51.664906.447021944 51.0209664.203343783 50.3772345-.0405433647 49.6587706.287774295 49.4167224.93584117L48.0757006 4.52664577C47.83386 5.17471264 48.1595664 5.89780564 48.8035059 6.1414838zM58.5931726 11.6219436C58.5846615 11.6219436 58.5761504 11.6219436 58.5674317 11.6219436L54.7579749 11.6541275C54.0702341 11.6681296 53.5240687 12.1985371 53.5379772 12.8909091 53.551678 13.5745037 54.1065621 14.1297806 54.7828855 14.1297806 54.7913966 14.1297806 54.7999077 14.1297806 54.8086265 14.1297806L58.6180833 14.0643678C59.305824 14.0501567 59.8519894 13.4934169 59.838081 12.8010449 59.8243801 12.1174504 59.269496 11.6219436 58.5931726 11.6219436z"/>\n            <path d="M37.1910045 6.68944619C37.7313574 6.14566353 38.4431784 5.8737722 39.155207 5.8737722 39.967916 5.8737722 40.7808327 6.22800418 41.3380002 6.93667712 42.2214969 8.06039707 42.0666359 9.69111808 41.0600392 10.7042842L39.777765 11.9949843C39.5801407 12.1276907 39.3877061 12.2695925 39.2075193 12.430303 39.0619998 11.5985371 38.7167801 10.7954023 38.1668781 10.0961338 37.4907623 9.23636364 36.588375 8.62424242 35.5772114 8.31410658L37.1910045 6.68944619zM28.5289586 3.66394984C29.0691039 3.12016719 29.7811325 2.84827586 30.4931611 2.84827586 31.3060777 2.84848485 32.1187868 3.20271682 32.6759543 3.91138976 33.559451 5.03510972 33.40459 6.66562173 32.3979933 7.67878788L17.6760235 22.3467085 17.6276554 20.6499478C17.6149925 19.014629 16.8595779 17.554441 15.6854573 16.5945664L28.5289586 3.66394984zM.624996757 36.9889537C.491717597 36.554099.508245877 35.7327064.906400646 35.2666667L3.45579518 32.2829676C3.45662553 32.2819923 4.33763118 25.8376176 6.09881213 12.9498433 6.09881213 11.4271682 7.33624726 10.1814002 8.84873717 10.1814002 10.3612271 10.1814002 11.5988698 11.4271682 11.5988698 12.9498433L11.6704878 15.4649948C9.18191673 15.8089864 7.24428555 17.9170324 7.14921001 20.492581L4.62804751 38.9475444 3.8946373 39.8060606C3.04504924 39.4926018 2.3776139 39.1458968 1.89233128 38.7659456 1.16440735 38.1960189.758275917 37.4238085.624996757 36.9889537z"/>\n            <path d="M49.6070811,36.8942529 L42.4182909,44.1316614 C36.2784454,50.3128527 29.8604313,55.2743992 24.2225349,56.5113898 C24.0512744,56.5492163 23.8901857,56.6217346 23.7511014,56.7293626 L20.5013032,59.2417973 C20.2908084,59.4045977 20.1673015,59.6181154 19.5026647,59.6181154 C18.8380279,59.6181154 13.0160695,55.8303982 10.3595306,53.2846814 C7.96626306,50.9912532 3.77432047,43.9549368 4.44453927,43.0079415 L6.99372621,40.0244514 C6.99469496,40.0233368 7.87570061,33.578962 9.63674317,20.6913271 C9.63674317,19.168652 10.8743859,17.922675 12.3868758,17.922675 C13.8993657,17.922675 15.1368008,19.168652 15.1368008,20.6913271 L15.2667512,25.2522466 C15.2883404,26.0100313 15.907577,26.5034483 16.5519317,26.5034483 C16.8662207,26.5034483 17.1867374,26.3857889 17.4464306,26.1245559 L32.0670972,11.4054336 C32.6074501,10.861442 33.3190635,10.5897597 34.0312997,10.5897597 C34.8440088,10.5897597 35.6569254,10.9439916 36.214093,11.6526646 C37.0975897,12.7763845 36.942521,14.4071055 35.9359243,15.4202717 L25.8641449,25.5598746 C25.3412294,26.0865204 25.3412294,26.9398119 25.8641449,27.4660397 C26.1288202,27.7324974 26.4757006,27.8658307 26.822581,27.8658307 C27.1694614,27.8658307 27.5165494,27.7324974 27.7810172,27.4660397 L40.7291431,14.43093 C41.2692884,13.8869383 41.9811094,13.615256 42.6933456,13.615256 C43.5060547,13.615465 44.3189713,13.969697 44.8761389,14.6783699 C45.7596356,15.8018809 45.6045669,17.4326019 44.5979702,18.445768 L31.7106677,31.4198537 C31.1806943,31.953605 31.1806943,32.8183908 31.7106677,33.3521421 C31.9718141,33.615047 32.31392,33.7464995 32.656441,33.7464995 C32.9985469,33.7464995 33.3408603,33.615047 33.6020067,33.3521421 L43.7346096,23.1515152 C44.2749625,22.6075235 44.9867835,22.3358412 45.6988121,22.3358412 C46.5115212,22.3358412 47.3244378,22.6900731 47.8816054,23.3989551 C48.7651021,24.522466 48.6100334,26.153187 47.6034367,27.1663532 L37.5667397,37.2708464 C37.0245185,37.8165099 37.0245185,38.7017764 37.5667397,39.2474399 C37.8334909,39.5161964 38.161896,39.6422153 38.4900934,39.6422153 C38.8184984,39.6422153 39.1469035,39.5161964 39.3972552,39.2639498 L45.6195133,32.999791 C46.1802099,32.4353187 46.93085,32.1368861 47.678999,32.1368861 C48.2741552,32.1368861 48.8676508,32.3258098 49.361919,32.7197492 C50.682182,33.7717868 50.7639719,35.7297806 49.6070811,36.8942529 Z"/>\n          </g>\n          <g class="outline">\n            <path d="M57.1428763 6.63333333C57.6856856 6.24686869 57.8143144 5.49030303 57.4302341 4.94383838 57.0461538 4.39737374 56.2950502 4.26767677 55.7520401 4.65454545L52.7452174 6.79636364C52.202408 7.18282828 52.0737793 7.93939394 52.4578595 8.48585859 52.6924415 8.81959596 53.0642809 8.9979798 53.4415385 8.9979798 53.6819398 8.9979798 53.9247492 8.92565657 54.1360535 8.77494949L57.1428763 6.63333333zM49.1767224 5.93676768C49.3161873 5.98969697 49.4594649 6.01474747 49.6001338 6.01474747 50.0873579 6.01474747 50.5458863 5.71494949 50.727291 5.22868687L52.023612 1.75757576C52.257592 1.13111111 51.9427425.432121212 51.3202676.196565657 50.6979933-.0391919192 50.0034783.278181818 49.7694983.904646465L48.4731773 4.37575758C48.239398 5.00222222 48.5542475 5.70121212 49.1767224 5.93676768zM58.6400669 11.2345455C58.6318395 11.2345455 58.623612 11.2345455 58.6151839 11.2345455L54.932709 11.2656566C54.267893 11.2791919 53.7399331 11.7919192 53.7533779 12.4612121 53.7666221 13.1220202 54.30301 13.6587879 54.9567893 13.6587879 54.9650167 13.6587879 54.9732441 13.6587879 54.9816722 13.6587879L58.6641472 13.5955556C59.3289632 13.5818182 59.8569231 13.0436364 59.8434783 12.3743434 59.8302341 11.7135354 59.2938462 11.2345455 58.6400669 11.2345455zM51.2107023 29.7280808C50.5940468 29.2365657 49.8640134 28.9020202 49.0922408 28.7448485 49.1432107 28.6519192 49.1907692 28.5573737 49.2357191 28.4614141L49.7189298 27.9749495C51.5799331 26.1012121 51.7753846 23.1519192 50.1732441 21.1141414 49.4169231 20.1523232 48.3670234 19.5131313 47.2009365 19.2745455 47.284214 19.120202 47.3580602 18.9624242 47.4250836 18.8022222 48.6925084 16.9539394 48.6718395 14.469899 47.2681605 12.6844444 46.5116388 11.7220202 45.4613378 11.0808081 44.2946488 10.8426263 45.2578595 9.05959596 45.1348495 6.83737374 43.8481605 5.20121212 42.8753177 3.96383838 41.4182609 3.25393939 39.8502341 3.25393939 38.5946488 3.25393939 37.4101003 3.70565657 36.480602 4.53272727 36.3399331 3.72888889 36.0064214 2.95252525 35.4748495 2.27636364 34.501806 1.0389899 33.0447492.329292929 31.4767224.329090909 30.1141806.329090909 28.8351171.861414141 27.8753177 1.82767677L15.6666221 14.1185859 15.6200669 12.4781818C15.5985953 9.68424242 13.3340468 7.41777778 10.5537793 7.41777778 7.8238796 7.41777778 5.59143813 9.60262626 5.49110368 12.3264646L3.05377926 30.1660606 1.05050167 32.510303C-.150100334 33.9157576.751318148 36.4103164 1.05050167 37.002855 1.3496852 37.5953936 1.66593319 37.9666982 2.51271962 38.8651283 2.8050341 39.1752704 3.3712736 39.6680391 4.21143813 40.3434343 3.2935786 41.7335354 4.72327715 47.298456 9.51045561 52.4226263 15.4436869 58.7735254 20.1888963 59.9262626 21.1316388 59.9262626 21.9056187 59.9262626 22.6703679 59.6646465 23.2846154 59.189899L26.2031438 56.9337374C29.0107023 56.2660606 32.1060201 54.7492929 35.4086288 52.4226263 38.2924415 50.3907071 41.4210702 47.6832323 44.7070234 44.3749495L51.656388 37.3787879C52.681204 36.3470707 53.220602 34.9165657 53.1363211 33.4541414 53.0520401 31.9941414 52.350301 30.6361616 51.2107023 29.7280808zM37.9513043 6.46646465C38.4736455 5.94080808 39.1617391 5.6779798 39.8500334 5.6779798 40.6356522 5.6779798 41.4214716 6.02040404 41.9600669 6.70545455 42.8141137 7.79171717 42.6644147 9.36808081 41.6913712 10.3474747L40.4518395 11.5951515C40.2608027 11.7234343 40.0747826 11.8606061 39.900602 12.0159596 39.7599331 11.2119192 39.4262207 10.4355556 38.8946488 9.75959596 38.2410702 8.92848485 37.3687625 8.33676768 36.3913043 8.0369697L37.9513043 6.46646465zM29.5779933 3.54181818C30.1001338 3.01616162 30.7884281 2.75333333 31.4767224 2.75333333 32.2625418 2.75353535 33.0481605 3.0959596 33.5867559 3.7810101 34.4408027 4.86727273 34.2911037 6.44343434 33.3180602 7.42282828L19.0868227 21.6018182 19.0400669 19.9616162C19.0278261 18.3808081 18.297592 16.9692929 17.1626087 16.0414141L29.5779933 3.54181818zM2.60416353 35.7559886C2.47532701 35.335629 2.49130435 34.5416162 2.87618729 34.0911111L5.34060201 31.2068687C5.34140468 31.2059259 6.19304348 24.9763636 7.89551839 12.5181818 7.89551839 11.0462626 9.09170569 9.8420202 10.5537793 9.8420202 12.0158528 9.8420202 13.2122408 11.0462626 13.2122408 12.5181818L13.2814716 14.9494949C10.8758528 15.2820202 9.00280936 17.319798 8.91090301 19.8094949L6.47377926 37.6492929 5.76481605 38.4791919C4.9435476 38.1761817 4.2983601 37.8410335 3.82925357 37.4737474 3.12559377 36.9228183 2.73300005 36.1763482 2.60416353 35.7559886zM49.9535117 35.6644444L43.0043478 42.6606061C37.0691639 48.6357576 30.8650836 53.4319192 25.4151171 54.6276768 25.2495652 54.6642424 25.0938462 54.7343434 24.959398 54.8383838L21.8179264 57.2670707C21.6144482 57.4244444 21.4950582 57.6308449 20.8525759 57.6308449 20.2100936 57.6308449 14.5822005 53.9693849 12.0142129 51.5085254 9.70072096 49.2915447 5.64850979 42.4897722 6.29638796 41.5743434L8.76060201 38.690303C8.76153846 38.6892256 9.61317726 32.4596633 11.3155184 20.0016162 11.3155184 18.529697 12.5119064 17.3252525 13.9739799 17.3252525 15.4360535 17.3252525 16.6322408 18.529697 16.6322408 20.0016162L16.7578595 24.4105051C16.7787291 25.1430303 17.3773244 25.62 18.0002007 25.62 18.3040134 25.62 18.6138462 25.5062626 18.8648829 25.2537374L32.998194 11.0252525C33.5205351 10.4993939 34.2084281 10.2367677 34.8969231 10.2367677 35.6825418 10.2367677 36.4683612 10.5791919 37.0069565 11.2642424 37.8610033 12.3505051 37.7111037 13.9268687 36.7380602 14.9062626L27.0020067 24.7078788C26.4965217 25.2169697 26.4965217 26.0418182 27.0020067 26.5505051 27.2578595 26.8080808 27.5931773 26.9369697 27.928495 26.9369697 28.2638127 26.9369697 28.5993311 26.8080808 28.8549833 26.5505051L41.371505 13.949899C41.8936455 13.4240404 42.5817391 13.1614141 43.2702341 13.1614141 44.0558528 13.1616162 44.8416722 13.5040404 45.3802676 14.1890909 46.2343144 15.2751515 46.0844147 16.8515152 45.1113712 17.8309091L32.6536455 30.3725253C32.1413378 30.8884848 32.1413378 31.7244444 32.6536455 32.240404 32.906087 32.4945455 33.2367893 32.6216162 33.567893 32.6216162 33.8985953 32.6216162 34.2294983 32.4945455 34.4819398 32.240404L44.2767893 22.379798C44.7991304 21.8539394 45.4872241 21.5913131 46.1755184 21.5913131 46.9611371 21.5913131 47.7469565 21.9337374 48.2855518 22.6189899 49.1395987 23.7050505 48.989699 25.2814141 48.0166555 26.2608081L38.3145151 36.0284848C37.7903679 36.5559596 37.7903679 37.4117172 38.3145151 37.9391919 38.5723746 38.1989899 38.8898328 38.3208081 39.2070903 38.3208081 39.5245485 38.3208081 39.8420067 38.1989899 40.0840134 37.9551515L46.0988629 31.899798C46.6408696 31.3541414 47.3664883 31.0656566 48.089699 31.0656566 48.6650167 31.0656566 49.2387291 31.2482828 49.7165217 31.6290909 50.9927759 32.6460606 51.0718395 34.5387879 49.9535117 35.6644444z"/>\n          </g>\n        </svg>\n        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 -10 20 20">\n          <g class="sparkle">\n          ' +
                        (5, new Array(5).fill(void 0))
                          .map(function(e) {
                            return '<g><circle cx="0" cy="0" r="1"/></g>';
                          })
                          .join("") +
                        "\n          </g>\n        </svg>\n      </div>\n      "),
                      (this._styleRootElement = this.querySelector(
                        ".style-root"
                      )),
                      (this._countElement = this.querySelector(".count")),
                      this._updateRootColor(),
                      (this._totalClaps = 0);
                    var t,
                      n,
                      i,
                      o,
                      a = void 0;
                    (this._initialClapCount = new Promise(function(e) {
                      return (a = e);
                    })),
                      (this._bufferedClaps = 0),
                      (this._updateClaps =
                        ((t = function() {
                          if (e._totalClaps < 10) {
                            var t = Math.min(
                              e._bufferedClaps,
                              10 - e._totalClaps
                            );
                            (n = e.api),
                              (i = t),
                              (o = e.url),
                              fetch(
                                n + "/update-claps" + (o ? "?url=" + o : ""),
                                {
                                  method: "POST",
                                  headers: { "Content-Type": "text/plain" },
                                  body: JSON.stringify(i + ",3.3.0")
                                }
                              ).then(function(e) {
                                return e.text();
                              }),
                              (e._totalClaps += t),
                              (e._bufferedClaps = 0);
                          }
                          var n, i, o;
                        }),
                        2e3,
                        (n = null),
                        function() {
                          var e = this,
                            i = arguments;
                          clearTimeout(n),
                            (n = setTimeout(function() {
                              return t.apply(e, i);
                            }, 2e3));
                        })),
                      this.addEventListener("mousedown", function(t) {
                        if (
                          0 === t.button &&
                          (e.classList.add("clapped"),
                          !e.classList.contains("clap-limit-exceeded"))
                        ) {
                          var n,
                            i,
                            o =
                              Number(
                                e._countElement.innerHTML.replace(",", "")
                              ) + 1;
                          e.dispatchEvent(
                            new CustomEvent("clapped", {
                              bubbles: !0,
                              detail: { clapCount: o }
                            })
                          ),
                            (i = "clap"),
                            (n = e).classList.remove(i),
                            setTimeout(function() {
                              n.classList.add(i);
                            }, 100),
                            setTimeout(function() {
                              n.classList.remove(i);
                            }, 1e3),
                            e._bufferedClaps++,
                            e._updateClaps(),
                            setTimeout(function() {
                              e._countElement.innerHTML = r(o);
                            }, 250),
                            e.multiclap
                              ? e._bufferedClaps + e._totalClaps >= 10 &&
                                e.classList.add("clap-limit-exceeded")
                              : e.classList.add("clap-limit-exceeded");
                        }
                      }),
                      ((i = this.api),
                      (o = this.url),
                      fetch(i + "/get-claps" + (o ? "?url=" + o : ""), {
                        headers: { "Content-Type": "text/plain" }
                      }).then(function(e) {
                        return e.text();
                      })).then(function(t) {
                        e.classList.remove("loading");
                        var n = Number(t);
                        a(n), n > 0 && (e._countElement.innerHTML = r(n));
                      }),
                      (this._connected = !0);
                  }
                }
              },
              {
                key: "attributeChangedCallback",
                value: function(e, t, n) {
                  this._updateRootColor();
                }
              },
              {
                key: "_updateRootColor",
                value: function() {
                  if (this._styleRootElement) {
                    var e = this.getAttribute("color") || "green",
                      t = this._styleRootElement.style;
                    (t.fill = e), (t.stroke = e), (t.color = e);
                  }
                }
              },
              {
                key: "initialClapCount",
                get: function() {
                  return this._initialClapCount;
                }
              },
              {
                key: "color",
                get: function() {
                  return this.getAttribute("color");
                },
                set: function(e) {
                  e
                    ? this.setAttribute("color", e)
                    : this.removeAttribute("color"),
                    this._updateRootColor();
                }
              },
              {
                key: "api",
                set: function(e) {
                  e ? this.setAttribute("api", e) : this.removeAttribute("api");
                },
                get: function() {
                  return (
                    this.getAttribute("api") ||
                    "https://api.applause-button.com"
                  );
                }
              },
              {
                key: "url",
                set: function(e) {
                  e ? this.setAttribute("url", e) : this.removeAttribute("url"),
                    this._updateRootColor();
                },
                get: function() {
                  return this.getAttribute("url");
                }
              },
              {
                key: "multiclap",
                get: function() {
                  return "true" === this.getAttribute("multiclap");
                },
                set: function(e) {
                  e
                    ? this.setAttribute("multiclap", e ? "true" : "false")
                    : this.removeAttribute("multiclap");
                }
              }
            ],
            [
              {
                key: "observedAttributes",
                get: function() {
                  return ["color"];
                }
              }
            ]
          ),
          l
        );
      })();
    customElements.define("applause-button", l);
  }),
  /*! PhotoSwipe - v4.1.3 - 2019-01-08
   * http://photoswipe.com
   * Copyright (c) 2019 Dmitry Semenov; */
  (function(e, t) {
    "function" == typeof define && define.amd
      ? define(t)
      : "object" == typeof exports
      ? (module.exports = t())
      : (e.PhotoSwipe = t());
  })(this, function() {
    "use strict";
    return function(e, t, n, i) {
      var o = {
        features: null,
        bind: function(e, t, n, i) {
          var o = (i ? "remove" : "add") + "EventListener";
          t = t.split(" ");
          for (var r = 0; r < t.length; r++) t[r] && e[o](t[r], n, !1);
        },
        isArray: function(e) {
          return e instanceof Array;
        },
        createEl: function(e, t) {
          var n = document.createElement(t || "div");
          return e && (n.className = e), n;
        },
        getScrollY: function() {
          var e = window.pageYOffset;
          return void 0 !== e ? e : document.documentElement.scrollTop;
        },
        unbind: function(e, t, n) {
          o.bind(e, t, n, !0);
        },
        removeClass: function(e, t) {
          var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
          e.className = e.className
            .replace(n, " ")
            .replace(/^\s\s*/, "")
            .replace(/\s\s*$/, "");
        },
        addClass: function(e, t) {
          o.hasClass(e, t) || (e.className += (e.className ? " " : "") + t);
        },
        hasClass: function(e, t) {
          return (
            e.className &&
            new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
          );
        },
        getChildByClass: function(e, t) {
          for (var n = e.firstChild; n; ) {
            if (o.hasClass(n, t)) return n;
            n = n.nextSibling;
          }
        },
        arraySearch: function(e, t, n) {
          for (var i = e.length; i--; ) if (e[i][n] === t) return i;
          return -1;
        },
        extend: function(e, t, n) {
          for (var i in t)
            if (t.hasOwnProperty(i)) {
              if (n && e.hasOwnProperty(i)) continue;
              e[i] = t[i];
            }
        },
        easing: {
          sine: {
            out: function(e) {
              return Math.sin(e * (Math.PI / 2));
            },
            inOut: function(e) {
              return -(Math.cos(Math.PI * e) - 1) / 2;
            }
          },
          cubic: {
            out: function(e) {
              return --e * e * e + 1;
            }
          }
        },
        detectFeatures: function() {
          if (o.features) return o.features;
          var e = o.createEl().style,
            t = "",
            n = {};
          if (
            ((n.oldIE = document.all && !document.addEventListener),
            (n.touch = "ontouchstart" in window),
            window.requestAnimationFrame &&
              ((n.raf = window.requestAnimationFrame),
              (n.caf = window.cancelAnimationFrame)),
            (n.pointerEvent =
              !!window.PointerEvent || navigator.msPointerEnabled),
            !n.pointerEvent)
          ) {
            var i = navigator.userAgent;
            if (/iP(hone|od)/.test(navigator.platform)) {
              var r = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
              r &&
                r.length > 0 &&
                (r = parseInt(r[1], 10)) >= 1 &&
                r < 8 &&
                (n.isOldIOSPhone = !0);
            }
            var a = i.match(/Android\s([0-9\.]*)/),
              l = a ? a[1] : 0;
            (l = parseFloat(l)) >= 1 &&
              (l < 4.4 && (n.isOldAndroid = !0), (n.androidVersion = l)),
              (n.isMobileOpera = /opera mini|opera mobi/i.test(i));
          }
          for (
            var s,
              u,
              c = ["transform", "perspective", "animationName"],
              p = ["", "webkit", "Moz", "ms", "O"],
              d = 0;
            d < 4;
            d++
          ) {
            t = p[d];
            for (var m = 0; m < 3; m++)
              (s = c[m]),
                (u = t + (t ? s.charAt(0).toUpperCase() + s.slice(1) : s)),
                !n[s] && u in e && (n[s] = u);
            t &&
              !n.raf &&
              ((t = t.toLowerCase()),
              (n.raf = window[t + "RequestAnimationFrame"]),
              n.raf &&
                (n.caf =
                  window[t + "CancelAnimationFrame"] ||
                  window[t + "CancelRequestAnimationFrame"]));
          }
          if (!n.raf) {
            var h = 0;
            (n.raf = function(e) {
              var t = new Date().getTime(),
                n = Math.max(0, 16 - (t - h)),
                i = window.setTimeout(function() {
                  e(t + n);
                }, n);
              return (h = t + n), i;
            }),
              (n.caf = function(e) {
                clearTimeout(e);
              });
          }
          return (
            (n.svg =
              !!document.createElementNS &&
              !!document.createElementNS("http://www.w3.org/2000/svg", "svg")
                .createSVGRect),
            (o.features = n),
            n
          );
        }
      };
      o.detectFeatures(),
        o.features.oldIE &&
          (o.bind = function(e, t, n, i) {
            t = t.split(" ");
            for (
              var o,
                r = (i ? "detach" : "attach") + "Event",
                a = function() {
                  n.handleEvent.call(n);
                },
                l = 0;
              l < t.length;
              l++
            )
              if ((o = t[l]))
                if ("object" == typeof n && n.handleEvent) {
                  if (i) {
                    if (!n["oldIE" + o]) return !1;
                  } else n["oldIE" + o] = a;
                  e[r]("on" + o, n["oldIE" + o]);
                } else e[r]("on" + o, n);
          });
      var r = this,
        a = {
          allowPanToNext: !0,
          spacing: 0.12,
          bgOpacity: 1,
          mouseUsed: !1,
          loop: !0,
          pinchToClose: !0,
          closeOnScroll: !0,
          closeOnVerticalDrag: !0,
          verticalDragRange: 0.75,
          hideAnimationDuration: 333,
          showAnimationDuration: 333,
          showHideOpacity: !1,
          focus: !0,
          escKey: !0,
          arrowKeys: !0,
          mainScrollEndFriction: 0.35,
          panEndFriction: 0.35,
          isClickableElement: function(e) {
            return "A" === e.tagName;
          },
          getDoubleTapZoom: function(e, t) {
            return e ? 1 : t.initialZoomLevel < 0.7 ? 1 : 1.33;
          },
          maxSpreadZoom: 1.33,
          modal: !0,
          scaleMode: "fit"
        };
      o.extend(a, i);
      var l,
        s,
        u,
        c,
        p,
        d,
        m,
        h,
        f,
        g,
        v,
        w,
        y,
        b,
        _,
        x,
        C,
        T,
        L,
        E,
        M,
        I,
        A,
        S,
        O,
        D,
        k,
        H,
        R,
        F,
        P,
        N,
        z,
        Z,
        U,
        B,
        K,
        V,
        W,
        q,
        j,
        G,
        Y,
        X,
        $,
        Q,
        J,
        ee,
        te,
        ne,
        ie,
        oe,
        re,
        ae,
        le,
        se,
        ue = { x: 0, y: 0 },
        ce = { x: 0, y: 0 },
        pe = { x: 0, y: 0 },
        de = {},
        me = 0,
        he = {},
        fe = { x: 0, y: 0 },
        ge = 0,
        ve = !0,
        we = [],
        ye = {},
        be = !1,
        _e = function(e, t) {
          o.extend(r, t.publicMethods), we.push(e);
        },
        xe = function(e) {
          var t = Ut();
          return e > t - 1 ? e - t : e < 0 ? t + e : e;
        },
        Ce = {},
        Te = function(e, t) {
          return Ce[e] || (Ce[e] = []), Ce[e].push(t);
        },
        Le = function(e) {
          var t = Ce[e];
          if (t) {
            var n = Array.prototype.slice.call(arguments);
            n.shift();
            for (var i = 0; i < t.length; i++) t[i].apply(r, n);
          }
        },
        Ee = function() {
          return new Date().getTime();
        },
        Me = function(e) {
          (ae = e), (r.bg.style.opacity = e * a.bgOpacity);
        },
        Ie = function(e, t, n, i, o) {
          (!be || (o && o !== r.currItem)) &&
            (i /= o ? o.fitRatio : r.currItem.fitRatio),
            (e[I] = w + t + "px, " + n + "px" + y + " scale(" + i + ")");
        },
        Ae = function(e) {
          te &&
            (e &&
              (g > r.currItem.fitRatio
                ? be || (Xt(r.currItem, !1, !0), (be = !0))
                : be && (Xt(r.currItem), (be = !1))),
            Ie(te, pe.x, pe.y, g));
        },
        Se = function(e) {
          e.container &&
            Ie(
              e.container.style,
              e.initialPosition.x,
              e.initialPosition.y,
              e.initialZoomLevel,
              e
            );
        },
        Oe = function(e, t) {
          t[I] = w + e + "px, 0px" + y;
        },
        De = function(e, t) {
          if (!a.loop && t) {
            var n = c + (fe.x * me - e) / fe.x,
              i = Math.round(e - ct.x);
            ((n < 0 && i > 0) || (n >= Ut() - 1 && i < 0)) &&
              (e = ct.x + i * a.mainScrollEndFriction);
          }
          (ct.x = e), Oe(e, p);
        },
        ke = function(e, t) {
          var n = pt[e] - he[e];
          return ce[e] + ue[e] + n - n * (t / v);
        },
        He = function(e, t) {
          (e.x = t.x), (e.y = t.y), t.id && (e.id = t.id);
        },
        Re = function(e) {
          (e.x = Math.round(e.x)), (e.y = Math.round(e.y));
        },
        Fe = null,
        Pe = function() {
          Fe &&
            (o.unbind(document, "mousemove", Pe),
            o.addClass(e, "pswp--has_mouse"),
            (a.mouseUsed = !0),
            Le("mouseUsed")),
            (Fe = setTimeout(function() {
              Fe = null;
            }, 100));
        },
        Ne = function(e, t) {
          var n = qt(r.currItem, de, e);
          return t && (ee = n), n;
        },
        ze = function(e) {
          return e || (e = r.currItem), e.initialZoomLevel;
        },
        Ze = function(e) {
          return e || (e = r.currItem), e.w > 0 ? a.maxSpreadZoom : 1;
        },
        Ue = function(e, t, n, i) {
          return i === r.currItem.initialZoomLevel
            ? ((n[e] = r.currItem.initialPosition[e]), !0)
            : ((n[e] = ke(e, i)),
              n[e] > t.min[e]
                ? ((n[e] = t.min[e]), !0)
                : n[e] < t.max[e] && ((n[e] = t.max[e]), !0));
        },
        Be = function(e) {
          var t = "";
          a.escKey && 27 === e.keyCode
            ? (t = "close")
            : a.arrowKeys &&
              (37 === e.keyCode
                ? (t = "prev")
                : 39 === e.keyCode && (t = "next")),
            t &&
              (e.ctrlKey ||
                e.altKey ||
                e.shiftKey ||
                e.metaKey ||
                (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
                r[t]()));
        },
        Ke = function(e) {
          e && (G || j || ne || K) && (e.preventDefault(), e.stopPropagation());
        },
        Ve = function() {
          r.setScrollOffset(0, o.getScrollY());
        },
        We = {},
        qe = 0,
        je = function(e) {
          We[e] && (We[e].raf && D(We[e].raf), qe--, delete We[e]);
        },
        Ge = function(e) {
          We[e] && je(e), We[e] || (qe++, (We[e] = {}));
        },
        Ye = function() {
          for (var e in We) We.hasOwnProperty(e) && je(e);
        },
        Xe = function(e, t, n, i, o, r, a) {
          var l,
            s = Ee();
          Ge(e);
          var u = function() {
            if (We[e]) {
              if ((l = Ee() - s) >= i) return je(e), r(n), void (a && a());
              r((n - t) * o(l / i) + t), (We[e].raf = O(u));
            }
          };
          u();
        },
        $e = {
          shout: Le,
          listen: Te,
          viewportSize: de,
          options: a,
          isMainScrollAnimating: function() {
            return ne;
          },
          getZoomLevel: function() {
            return g;
          },
          getCurrentIndex: function() {
            return c;
          },
          isDragging: function() {
            return W;
          },
          isZooming: function() {
            return Q;
          },
          setScrollOffset: function(e, t) {
            (he.x = e), (F = he.y = t), Le("updateScrollOffset", he);
          },
          applyZoomPan: function(e, t, n, i) {
            (pe.x = t), (pe.y = n), (g = e), Ae(i);
          },
          init: function() {
            if (!l && !s) {
              var n;
              (r.framework = o),
                (r.template = e),
                (r.bg = o.getChildByClass(e, "pswp__bg")),
                (k = e.className),
                (l = !0),
                (P = o.detectFeatures()),
                (O = P.raf),
                (D = P.caf),
                (I = P.transform),
                (R = P.oldIE),
                (r.scrollWrap = o.getChildByClass(e, "pswp__scroll-wrap")),
                (r.container = o.getChildByClass(
                  r.scrollWrap,
                  "pswp__container"
                )),
                (p = r.container.style),
                (r.itemHolders = x = [
                  { el: r.container.children[0], wrap: 0, index: -1 },
                  { el: r.container.children[1], wrap: 0, index: -1 },
                  { el: r.container.children[2], wrap: 0, index: -1 }
                ]),
                (x[0].el.style.display = x[2].el.style.display = "none"),
                (function() {
                  if (I) {
                    var t = P.perspective && !S;
                    return (
                      (w = "translate" + (t ? "3d(" : "(")),
                      void (y = P.perspective ? ", 0px)" : ")")
                    );
                  }
                  (I = "left"),
                    o.addClass(e, "pswp--ie"),
                    (Oe = function(e, t) {
                      t.left = e + "px";
                    }),
                    (Se = function(e) {
                      var t = e.fitRatio > 1 ? 1 : e.fitRatio,
                        n = e.container.style,
                        i = t * e.w,
                        o = t * e.h;
                      (n.width = i + "px"),
                        (n.height = o + "px"),
                        (n.left = e.initialPosition.x + "px"),
                        (n.top = e.initialPosition.y + "px");
                    }),
                    (Ae = function() {
                      if (te) {
                        var e = te,
                          t = r.currItem,
                          n = t.fitRatio > 1 ? 1 : t.fitRatio,
                          i = n * t.w,
                          o = n * t.h;
                        (e.width = i + "px"),
                          (e.height = o + "px"),
                          (e.left = pe.x + "px"),
                          (e.top = pe.y + "px");
                      }
                    });
                })(),
                (f = {
                  resize: r.updateSize,
                  orientationchange: function() {
                    clearTimeout(N),
                      (N = setTimeout(function() {
                        de.x !== r.scrollWrap.clientWidth && r.updateSize();
                      }, 500));
                  },
                  scroll: Ve,
                  keydown: Be,
                  click: Ke
                });
              var i = P.isOldIOSPhone || P.isOldAndroid || P.isMobileOpera;
              for (
                (P.animationName && P.transform && !i) ||
                  (a.showAnimationDuration = a.hideAnimationDuration = 0),
                  n = 0;
                n < we.length;
                n++
              )
                r["init" + we[n]]();
              if (t) (r.ui = new t(r, o)).init();
              Le("firstUpdate"),
                (c = c || a.index || 0),
                (isNaN(c) || c < 0 || c >= Ut()) && (c = 0),
                (r.currItem = Zt(c)),
                (P.isOldIOSPhone || P.isOldAndroid) && (ve = !1),
                e.setAttribute("aria-hidden", "false"),
                a.modal &&
                  (ve
                    ? (e.style.position = "fixed")
                    : ((e.style.position = "absolute"),
                      (e.style.top = o.getScrollY() + "px"))),
                void 0 === F && (Le("initialLayout"), (F = H = o.getScrollY()));
              var u = "pswp--open ";
              for (
                a.mainClass && (u += a.mainClass + " "),
                  a.showHideOpacity && (u += "pswp--animate_opacity "),
                  u += S ? "pswp--touch" : "pswp--notouch",
                  u += P.animationName ? " pswp--css_animation" : "",
                  u += P.svg ? " pswp--svg" : "",
                  o.addClass(e, u),
                  r.updateSize(),
                  d = -1,
                  ge = null,
                  n = 0;
                n < 3;
                n++
              )
                Oe((n + d) * fe.x, x[n].el.style);
              R || o.bind(r.scrollWrap, h, r),
                Te("initialZoomInEnd", function() {
                  r.setContent(x[0], c - 1),
                    r.setContent(x[2], c + 1),
                    (x[0].el.style.display = x[2].el.style.display = "block"),
                    a.focus && e.focus(),
                    o.bind(document, "keydown", r),
                    P.transform && o.bind(r.scrollWrap, "click", r),
                    a.mouseUsed || o.bind(document, "mousemove", Pe),
                    o.bind(window, "resize scroll orientationchange", r),
                    Le("bindEvents");
                }),
                r.setContent(x[1], c),
                r.updateCurrItem(),
                Le("afterInit"),
                ve ||
                  (b = setInterval(function() {
                    qe ||
                      W ||
                      Q ||
                      g !== r.currItem.initialZoomLevel ||
                      r.updateSize();
                  }, 1e3)),
                o.addClass(e, "pswp--visible");
            }
          },
          close: function() {
            l &&
              ((l = !1),
              (s = !0),
              Le("close"),
              o.unbind(window, "resize scroll orientationchange", r),
              o.unbind(window, "scroll", f.scroll),
              o.unbind(document, "keydown", r),
              o.unbind(document, "mousemove", Pe),
              P.transform && o.unbind(r.scrollWrap, "click", r),
              W && o.unbind(window, m, r),
              clearTimeout(N),
              Le("unbindEvents"),
              Bt(r.currItem, null, !0, r.destroy));
          },
          destroy: function() {
            Le("destroy"),
              Ft && clearTimeout(Ft),
              e.setAttribute("aria-hidden", "true"),
              (e.className = k),
              b && clearInterval(b),
              o.unbind(r.scrollWrap, h, r),
              o.unbind(window, "scroll", r),
              ht(),
              Ye(),
              (Ce = null);
          },
          panTo: function(e, t, n) {
            n ||
              (e > ee.min.x ? (e = ee.min.x) : e < ee.max.x && (e = ee.max.x),
              t > ee.min.y ? (t = ee.min.y) : t < ee.max.y && (t = ee.max.y)),
              (pe.x = e),
              (pe.y = t),
              Ae();
          },
          handleEvent: function(e) {
            (e = e || window.event), f[e.type] && f[e.type](e);
          },
          goTo: function(e) {
            var t = (e = xe(e)) - c;
            (ge = t),
              (c = e),
              (r.currItem = Zt(c)),
              (me -= t),
              De(fe.x * me),
              Ye(),
              (ne = !1),
              r.updateCurrItem();
          },
          next: function() {
            r.goTo(c + 1);
          },
          prev: function() {
            r.goTo(c - 1);
          },
          updateCurrZoomItem: function(e) {
            if ((e && Le("beforeChange", 0), x[1].el.children.length)) {
              var t = x[1].el.children[0];
              te = o.hasClass(t, "pswp__zoom-wrap") ? t.style : null;
            } else te = null;
            (ee = r.currItem.bounds),
              (v = g = r.currItem.initialZoomLevel),
              (pe.x = ee.center.x),
              (pe.y = ee.center.y),
              e && Le("afterChange");
          },
          invalidateCurrItems: function() {
            _ = !0;
            for (var e = 0; e < 3; e++)
              x[e].item && (x[e].item.needsUpdate = !0);
          },
          updateCurrItem: function(e) {
            if (0 !== ge) {
              var t,
                n = Math.abs(ge);
              if (!(e && n < 2)) {
                (r.currItem = Zt(c)),
                  (be = !1),
                  Le("beforeChange", ge),
                  n >= 3 && ((d += ge + (ge > 0 ? -3 : 3)), (n = 3));
                for (var i = 0; i < n; i++)
                  ge > 0
                    ? ((t = x.shift()),
                      (x[2] = t),
                      d++,
                      Oe((d + 2) * fe.x, t.el.style),
                      r.setContent(t, c - n + i + 1 + 1))
                    : ((t = x.pop()),
                      x.unshift(t),
                      d--,
                      Oe(d * fe.x, t.el.style),
                      r.setContent(t, c + n - i - 1 - 1));
                if (te && 1 === Math.abs(ge)) {
                  var o = Zt(C);
                  o.initialZoomLevel !== g && (qt(o, de), Xt(o), Se(o));
                }
                (ge = 0), r.updateCurrZoomItem(), (C = c), Le("afterChange");
              }
            }
          },
          updateSize: function(t) {
            if (!ve && a.modal) {
              var n = o.getScrollY();
              if (
                (F !== n && ((e.style.top = n + "px"), (F = n)),
                !t && ye.x === window.innerWidth && ye.y === window.innerHeight)
              )
                return;
              (ye.x = window.innerWidth),
                (ye.y = window.innerHeight),
                (e.style.height = ye.y + "px");
            }
            if (
              ((de.x = r.scrollWrap.clientWidth),
              (de.y = r.scrollWrap.clientHeight),
              Ve(),
              (fe.x = de.x + Math.round(de.x * a.spacing)),
              (fe.y = de.y),
              De(fe.x * me),
              Le("beforeResize"),
              void 0 !== d)
            ) {
              for (var i, l, s, u = 0; u < 3; u++)
                (i = x[u]),
                  Oe((u + d) * fe.x, i.el.style),
                  (s = c + u - 1),
                  a.loop && Ut() > 2 && (s = xe(s)),
                  (l = Zt(s)) && (_ || l.needsUpdate || !l.bounds)
                    ? (r.cleanSlide(l),
                      r.setContent(i, s),
                      1 === u && ((r.currItem = l), r.updateCurrZoomItem(!0)),
                      (l.needsUpdate = !1))
                    : -1 === i.index && s >= 0 && r.setContent(i, s),
                  l && l.container && (qt(l, de), Xt(l), Se(l));
              _ = !1;
            }
            (v = g = r.currItem.initialZoomLevel),
              (ee = r.currItem.bounds) &&
                ((pe.x = ee.center.x), (pe.y = ee.center.y), Ae(!0)),
              Le("resize");
          },
          zoomTo: function(e, t, n, i, r) {
            t &&
              ((v = g),
              (pt.x = Math.abs(t.x) - pe.x),
              (pt.y = Math.abs(t.y) - pe.y),
              He(ce, pe));
            var a = Ne(e, !1),
              l = {};
            Ue("x", a, l, e), Ue("y", a, l, e);
            var s = g,
              u = pe.x,
              c = pe.y;
            Re(l);
            var p = function(t) {
              1 === t
                ? ((g = e), (pe.x = l.x), (pe.y = l.y))
                : ((g = (e - s) * t + s),
                  (pe.x = (l.x - u) * t + u),
                  (pe.y = (l.y - c) * t + c)),
                r && r(t),
                Ae(1 === t);
            };
            n ? Xe("customZoomTo", 0, 1, n, i || o.easing.sine.inOut, p) : p(1);
          }
        },
        Qe = {},
        Je = {},
        et = {},
        tt = {},
        nt = {},
        it = [],
        ot = {},
        rt = [],
        at = {},
        lt = 0,
        st = { x: 0, y: 0 },
        ut = 0,
        ct = { x: 0, y: 0 },
        pt = { x: 0, y: 0 },
        dt = { x: 0, y: 0 },
        mt = function(e, t) {
          return (
            (at.x = Math.abs(e.x - t.x)),
            (at.y = Math.abs(e.y - t.y)),
            Math.sqrt(at.x * at.x + at.y * at.y)
          );
        },
        ht = function() {
          Y && (D(Y), (Y = null));
        },
        ft = function() {
          W && ((Y = O(ft)), At());
        },
        gt = function(e, t) {
          return (
            !(!e || e === document) &&
            !(
              e.getAttribute("class") &&
              e.getAttribute("class").indexOf("pswp__scroll-wrap") > -1
            ) &&
            (t(e) ? e : gt(e.parentNode, t))
          );
        },
        vt = {},
        wt = function(e, t) {
          return (
            (vt.prevent = !gt(e.target, a.isClickableElement)),
            Le("preventDragEvent", e, t, vt),
            vt.prevent
          );
        },
        yt = function(e, t) {
          return (t.x = e.pageX), (t.y = e.pageY), (t.id = e.identifier), t;
        },
        bt = function(e, t, n) {
          (n.x = 0.5 * (e.x + t.x)), (n.y = 0.5 * (e.y + t.y));
        },
        _t = function() {
          var e = pe.y - r.currItem.initialPosition.y;
          return 1 - Math.abs(e / (de.y / 2));
        },
        xt = {},
        Ct = {},
        Tt = [],
        Lt = function(e) {
          for (; Tt.length > 0; ) Tt.pop();
          return (
            A
              ? ((se = 0),
                it.forEach(function(e) {
                  0 === se ? (Tt[0] = e) : 1 === se && (Tt[1] = e), se++;
                }))
              : e.type.indexOf("touch") > -1
              ? e.touches &&
                e.touches.length > 0 &&
                ((Tt[0] = yt(e.touches[0], xt)),
                e.touches.length > 1 && (Tt[1] = yt(e.touches[1], Ct)))
              : ((xt.x = e.pageX),
                (xt.y = e.pageY),
                (xt.id = ""),
                (Tt[0] = xt)),
            Tt
          );
        },
        Et = function(e, t) {
          var n,
            i,
            o,
            l,
            s = pe[e] + t[e],
            u = t[e] > 0,
            c = ct.x + t.x,
            p = ct.x - ot.x;
          if (
            ((n = s > ee.min[e] || s < ee.max[e] ? a.panEndFriction : 1),
            (s = pe[e] + t[e] * n),
            (a.allowPanToNext || g === r.currItem.initialZoomLevel) &&
              (te
                ? "h" !== ie ||
                  "x" !== e ||
                  j ||
                  (u
                    ? (s > ee.min[e] &&
                        ((n = a.panEndFriction),
                        ee.min[e] - s,
                        (i = ee.min[e] - ce[e])),
                      (i <= 0 || p < 0) && Ut() > 1
                        ? ((l = c), p < 0 && c > ot.x && (l = ot.x))
                        : ee.min.x !== ee.max.x && (o = s))
                    : (s < ee.max[e] &&
                        ((n = a.panEndFriction),
                        s - ee.max[e],
                        (i = ce[e] - ee.max[e])),
                      (i <= 0 || p > 0) && Ut() > 1
                        ? ((l = c), p > 0 && c < ot.x && (l = ot.x))
                        : ee.min.x !== ee.max.x && (o = s)))
                : (l = c),
              "x" === e))
          )
            return (
              void 0 !== l && (De(l, !0), (X = l !== ot.x)),
              ee.min.x !== ee.max.x &&
                (void 0 !== o ? (pe.x = o) : X || (pe.x += t.x * n)),
              void 0 !== l
            );
          ne || X || (g > r.currItem.fitRatio && (pe[e] += t[e] * n));
        },
        Mt = function(e) {
          if (!("mousedown" === e.type && e.button > 0))
            if (zt) e.preventDefault();
            else if (!V || "mousedown" !== e.type) {
              if ((wt(e, !0) && e.preventDefault(), Le("pointerDown"), A)) {
                var t = o.arraySearch(it, e.pointerId, "id");
                t < 0 && (t = it.length),
                  (it[t] = { x: e.pageX, y: e.pageY, id: e.pointerId });
              }
              var n = Lt(e),
                i = n.length;
              ($ = null),
                Ye(),
                (W && 1 !== i) ||
                  ((W = oe = !0),
                  o.bind(window, m, r),
                  (B = le = re = K = X = G = q = j = !1),
                  (ie = null),
                  Le("firstTouchStart", n),
                  He(ce, pe),
                  (ue.x = ue.y = 0),
                  He(tt, n[0]),
                  He(nt, tt),
                  (ot.x = fe.x * me),
                  (rt = [{ x: tt.x, y: tt.y }]),
                  (Z = z = Ee()),
                  Ne(g, !0),
                  ht(),
                  ft()),
                !Q &&
                  i > 1 &&
                  !ne &&
                  !X &&
                  ((v = g),
                  (j = !1),
                  (Q = q = !0),
                  (ue.y = ue.x = 0),
                  He(ce, pe),
                  He(Qe, n[0]),
                  He(Je, n[1]),
                  bt(Qe, Je, dt),
                  (pt.x = Math.abs(dt.x) - pe.x),
                  (pt.y = Math.abs(dt.y) - pe.y),
                  (J = mt(Qe, Je)));
            }
        },
        It = function(e) {
          if ((e.preventDefault(), A)) {
            var t = o.arraySearch(it, e.pointerId, "id");
            if (t > -1) {
              var n = it[t];
              (n.x = e.pageX), (n.y = e.pageY);
            }
          }
          if (W) {
            var i = Lt(e);
            if (ie || G || Q) $ = i;
            else if (ct.x !== fe.x * me) ie = "h";
            else {
              var r = Math.abs(i[0].x - tt.x) - Math.abs(i[0].y - tt.y);
              Math.abs(r) >= 10 && ((ie = r > 0 ? "h" : "v"), ($ = i));
            }
          }
        },
        At = function() {
          if ($) {
            var e = $.length;
            if (0 !== e)
              if (
                (He(Qe, $[0]),
                (et.x = Qe.x - tt.x),
                (et.y = Qe.y - tt.y),
                Q && e > 1)
              ) {
                if (
                  ((tt.x = Qe.x),
                  (tt.y = Qe.y),
                  !et.x &&
                    !et.y &&
                    (function(e, t) {
                      return e.x === t.x && e.y === t.y;
                    })($[1], Je))
                )
                  return;
                He(Je, $[1]), j || ((j = !0), Le("zoomGestureStarted"));
                var t = mt(Qe, Je),
                  n = Ht(t);
                n >
                  r.currItem.initialZoomLevel +
                    r.currItem.initialZoomLevel / 15 && (le = !0);
                var i = 1,
                  o = ze(),
                  l = Ze();
                if (n < o)
                  if (
                    a.pinchToClose &&
                    !le &&
                    v <= r.currItem.initialZoomLevel
                  ) {
                    var s = 1 - (o - n) / (o / 1.2);
                    Me(s), Le("onPinchClose", s), (re = !0);
                  } else
                    (i = (o - n) / o) > 1 && (i = 1), (n = o - i * (o / 3));
                else
                  n > l &&
                    ((i = (n - l) / (6 * o)) > 1 && (i = 1), (n = l + i * o));
                i < 0 && (i = 0),
                  t,
                  bt(Qe, Je, st),
                  (ue.x += st.x - dt.x),
                  (ue.y += st.y - dt.y),
                  He(dt, st),
                  (pe.x = ke("x", n)),
                  (pe.y = ke("y", n)),
                  (B = n > g),
                  (g = n),
                  Ae();
              } else {
                if (!ie) return;
                if (
                  (oe &&
                    ((oe = !1),
                    Math.abs(et.x) >= 10 && (et.x -= $[0].x - nt.x),
                    Math.abs(et.y) >= 10 && (et.y -= $[0].y - nt.y)),
                  (tt.x = Qe.x),
                  (tt.y = Qe.y),
                  0 === et.x && 0 === et.y)
                )
                  return;
                if (
                  "v" === ie &&
                  a.closeOnVerticalDrag &&
                  "fit" === a.scaleMode &&
                  g === r.currItem.initialZoomLevel
                ) {
                  (ue.y += et.y), (pe.y += et.y);
                  var u = _t();
                  return (K = !0), Le("onVerticalDrag", u), Me(u), void Ae();
                }
                !(function(e, t, n) {
                  if (e - Z > 50) {
                    var i = rt.length > 2 ? rt.shift() : {};
                    (i.x = t), (i.y = n), rt.push(i), (Z = e);
                  }
                })(Ee(), Qe.x, Qe.y),
                  (G = !0),
                  (ee = r.currItem.bounds),
                  Et("x", et) || (Et("y", et), Re(pe), Ae());
              }
          }
        },
        St = function(e) {
          if (P.isOldAndroid) {
            if (V && "mouseup" === e.type) return;
            e.type.indexOf("touch") > -1 &&
              (clearTimeout(V),
              (V = setTimeout(function() {
                V = 0;
              }, 600)));
          }
          var t;
          if ((Le("pointerUp"), wt(e, !1) && e.preventDefault(), A)) {
            var n = o.arraySearch(it, e.pointerId, "id");
            if (n > -1)
              if (((t = it.splice(n, 1)[0]), navigator.msPointerEnabled)) {
                (t.type = { 4: "mouse", 2: "touch", 3: "pen" }[e.pointerType]),
                  t.type || (t.type = e.pointerType || "mouse");
              } else t.type = e.pointerType || "mouse";
          }
          var i,
            l = Lt(e),
            s = l.length;
          if (("mouseup" === e.type && (s = 0), 2 === s)) return ($ = null), !0;
          1 === s && He(nt, l[0]),
            0 !== s ||
              ie ||
              ne ||
              (t ||
                ("mouseup" === e.type
                  ? (t = { x: e.pageX, y: e.pageY, type: "mouse" })
                  : e.changedTouches &&
                    e.changedTouches[0] &&
                    (t = {
                      x: e.changedTouches[0].pageX,
                      y: e.changedTouches[0].pageY,
                      type: "touch"
                    })),
              Le("touchRelease", e, t));
          var u = -1;
          if (
            (0 === s &&
              ((W = !1),
              o.unbind(window, m, r),
              ht(),
              Q ? (u = 0) : -1 !== ut && (u = Ee() - ut)),
            (ut = 1 === s ? Ee() : -1),
            (i = -1 !== u && u < 150 ? "zoom" : "swipe"),
            Q &&
              s < 2 &&
              ((Q = !1),
              1 === s && (i = "zoomPointerUp"),
              Le("zoomGestureEnded")),
            ($ = null),
            G || j || ne || K)
          )
            if ((Ye(), U || (U = Ot()), U.calculateSwipeSpeed("x"), K)) {
              if (_t() < a.verticalDragRange) r.close();
              else {
                var c = pe.y,
                  p = ae;
                Xe("verticalDrag", 0, 1, 300, o.easing.cubic.out, function(e) {
                  (pe.y = (r.currItem.initialPosition.y - c) * e + c),
                    Me((1 - p) * e + p),
                    Ae();
                }),
                  Le("onVerticalDrag", 1);
              }
            } else {
              if ((X || ne) && 0 === s) {
                if (kt(i, U)) return;
                i = "zoomPointerUp";
              }
              ne ||
                ("swipe" === i ? !X && g > r.currItem.fitRatio && Dt(U) : Rt());
            }
        },
        Ot = function() {
          var e,
            t,
            n = {
              lastFlickOffset: {},
              lastFlickDist: {},
              lastFlickSpeed: {},
              slowDownRatio: {},
              slowDownRatioReverse: {},
              speedDecelerationRatio: {},
              speedDecelerationRatioAbs: {},
              distanceOffset: {},
              backAnimDestination: {},
              backAnimStarted: {},
              calculateSwipeSpeed: function(i) {
                rt.length > 1
                  ? ((e = Ee() - Z + 50), (t = rt[rt.length - 2][i]))
                  : ((e = Ee() - z), (t = nt[i])),
                  (n.lastFlickOffset[i] = tt[i] - t),
                  (n.lastFlickDist[i] = Math.abs(n.lastFlickOffset[i])),
                  n.lastFlickDist[i] > 20
                    ? (n.lastFlickSpeed[i] = n.lastFlickOffset[i] / e)
                    : (n.lastFlickSpeed[i] = 0),
                  Math.abs(n.lastFlickSpeed[i]) < 0.1 &&
                    (n.lastFlickSpeed[i] = 0),
                  (n.slowDownRatio[i] = 0.95),
                  (n.slowDownRatioReverse[i] = 1 - n.slowDownRatio[i]),
                  (n.speedDecelerationRatio[i] = 1);
              },
              calculateOverBoundsAnimOffset: function(e, t) {
                n.backAnimStarted[e] ||
                  (pe[e] > ee.min[e]
                    ? (n.backAnimDestination[e] = ee.min[e])
                    : pe[e] < ee.max[e] &&
                      (n.backAnimDestination[e] = ee.max[e]),
                  void 0 !== n.backAnimDestination[e] &&
                    ((n.slowDownRatio[e] = 0.7),
                    (n.slowDownRatioReverse[e] = 1 - n.slowDownRatio[e]),
                    n.speedDecelerationRatioAbs[e] < 0.05 &&
                      ((n.lastFlickSpeed[e] = 0),
                      (n.backAnimStarted[e] = !0),
                      Xe(
                        "bounceZoomPan" + e,
                        pe[e],
                        n.backAnimDestination[e],
                        t || 300,
                        o.easing.sine.out,
                        function(t) {
                          (pe[e] = t), Ae();
                        }
                      ))));
              },
              calculateAnimOffset: function(e) {
                n.backAnimStarted[e] ||
                  ((n.speedDecelerationRatio[e] =
                    n.speedDecelerationRatio[e] *
                    (n.slowDownRatio[e] +
                      n.slowDownRatioReverse[e] -
                      (n.slowDownRatioReverse[e] * n.timeDiff) / 10)),
                  (n.speedDecelerationRatioAbs[e] = Math.abs(
                    n.lastFlickSpeed[e] * n.speedDecelerationRatio[e]
                  )),
                  (n.distanceOffset[e] =
                    n.lastFlickSpeed[e] *
                    n.speedDecelerationRatio[e] *
                    n.timeDiff),
                  (pe[e] += n.distanceOffset[e]));
              },
              panAnimLoop: function() {
                if (
                  We.zoomPan &&
                  ((We.zoomPan.raf = O(n.panAnimLoop)),
                  (n.now = Ee()),
                  (n.timeDiff = n.now - n.lastNow),
                  (n.lastNow = n.now),
                  n.calculateAnimOffset("x"),
                  n.calculateAnimOffset("y"),
                  Ae(),
                  n.calculateOverBoundsAnimOffset("x"),
                  n.calculateOverBoundsAnimOffset("y"),
                  n.speedDecelerationRatioAbs.x < 0.05 &&
                    n.speedDecelerationRatioAbs.y < 0.05)
                )
                  return (
                    (pe.x = Math.round(pe.x)),
                    (pe.y = Math.round(pe.y)),
                    Ae(),
                    void je("zoomPan")
                  );
              }
            };
          return n;
        },
        Dt = function(e) {
          if (
            (e.calculateSwipeSpeed("y"),
            (ee = r.currItem.bounds),
            (e.backAnimDestination = {}),
            (e.backAnimStarted = {}),
            Math.abs(e.lastFlickSpeed.x) <= 0.05 &&
              Math.abs(e.lastFlickSpeed.y) <= 0.05)
          )
            return (
              (e.speedDecelerationRatioAbs.x = e.speedDecelerationRatioAbs.y = 0),
              e.calculateOverBoundsAnimOffset("x"),
              e.calculateOverBoundsAnimOffset("y"),
              !0
            );
          Ge("zoomPan"), (e.lastNow = Ee()), e.panAnimLoop();
        },
        kt = function(e, t) {
          var n, i, l;
          if ((ne || (lt = c), "swipe" === e)) {
            var s = tt.x - nt.x,
              u = t.lastFlickDist.x < 10;
            s > 30 && (u || t.lastFlickOffset.x > 20)
              ? (i = -1)
              : s < -30 && (u || t.lastFlickOffset.x < -20) && (i = 1);
          }
          i &&
            ((c += i) < 0
              ? ((c = a.loop ? Ut() - 1 : 0), (l = !0))
              : c >= Ut() && ((c = a.loop ? 0 : Ut() - 1), (l = !0)),
            (l && !a.loop) || ((ge += i), (me -= i), (n = !0)));
          var p,
            d = fe.x * me,
            m = Math.abs(d - ct.x);
          return (
            n || d > ct.x == t.lastFlickSpeed.x > 0
              ? ((p =
                  Math.abs(t.lastFlickSpeed.x) > 0
                    ? m / Math.abs(t.lastFlickSpeed.x)
                    : 333),
                (p = Math.min(p, 400)),
                (p = Math.max(p, 250)))
              : (p = 333),
            lt === c && (n = !1),
            (ne = !0),
            Le("mainScrollAnimStart"),
            Xe("mainScroll", ct.x, d, p, o.easing.cubic.out, De, function() {
              Ye(),
                (ne = !1),
                (lt = -1),
                (n || lt !== c) && r.updateCurrItem(),
                Le("mainScrollAnimComplete");
            }),
            n && r.updateCurrItem(!0),
            n
          );
        },
        Ht = function(e) {
          return (1 / J) * e * v;
        },
        Rt = function() {
          var e = g,
            t = ze(),
            n = Ze();
          g < t ? (e = t) : g > n && (e = n);
          var i,
            a = ae;
          return re && !B && !le && g < t
            ? (r.close(), !0)
            : (re &&
                (i = function(e) {
                  Me((1 - a) * e + a);
                }),
              r.zoomTo(e, 0, 200, o.easing.cubic.out, i),
              !0);
        };
      _e("Gestures", {
        publicMethods: {
          initGestures: function() {
            var e = function(e, t, n, i, o) {
              (T = e + t), (L = e + n), (E = e + i), (M = o ? e + o : "");
            };
            (A = P.pointerEvent) && P.touch && (P.touch = !1),
              A
                ? navigator.msPointerEnabled
                  ? e("MSPointer", "Down", "Move", "Up", "Cancel")
                  : e("pointer", "down", "move", "up", "cancel")
                : P.touch
                ? (e("touch", "start", "move", "end", "cancel"), (S = !0))
                : e("mouse", "down", "move", "up"),
              (m = L + " " + E + " " + M),
              (h = T),
              A &&
                !S &&
                (S =
                  navigator.maxTouchPoints > 1 ||
                  navigator.msMaxTouchPoints > 1),
              (r.likelyTouchDevice = S),
              (f[T] = Mt),
              (f[L] = It),
              (f[E] = St),
              M && (f[M] = f[E]),
              P.touch &&
                ((h += " mousedown"),
                (m += " mousemove mouseup"),
                (f.mousedown = f[T]),
                (f.mousemove = f[L]),
                (f.mouseup = f[E])),
              S || (a.allowPanToNext = !1);
          }
        }
      });
      var Ft,
        Pt,
        Nt,
        zt,
        Zt,
        Ut,
        Bt = function(t, n, i, l) {
          var s;
          Ft && clearTimeout(Ft),
            (zt = !0),
            (Nt = !0),
            t.initialLayout
              ? ((s = t.initialLayout), (t.initialLayout = null))
              : (s = a.getThumbBoundsFn && a.getThumbBoundsFn(c));
          var p = i ? a.hideAnimationDuration : a.showAnimationDuration,
            d = function() {
              je("initialZoom"),
                i
                  ? (r.template.removeAttribute("style"),
                    r.bg.removeAttribute("style"))
                  : (Me(1),
                    n && (n.style.display = "block"),
                    o.addClass(e, "pswp--animated-in"),
                    Le("initialZoom" + (i ? "OutEnd" : "InEnd"))),
                l && l(),
                (zt = !1);
            };
          if (!p || !s || void 0 === s.x)
            return (
              Le("initialZoom" + (i ? "Out" : "In")),
              (g = t.initialZoomLevel),
              He(pe, t.initialPosition),
              Ae(),
              (e.style.opacity = i ? 0 : 1),
              Me(1),
              void (p
                ? setTimeout(function() {
                    d();
                  }, p)
                : d())
            );
          var m, h;
          (m = u),
            (h = !r.currItem.src || r.currItem.loadError || a.showHideOpacity),
            t.miniImg && (t.miniImg.style.webkitBackfaceVisibility = "hidden"),
            i ||
              ((g = s.w / t.w),
              (pe.x = s.x),
              (pe.y = s.y - H),
              (r[h ? "template" : "bg"].style.opacity = 0.001),
              Ae()),
            Ge("initialZoom"),
            i && !m && o.removeClass(e, "pswp--animated-in"),
            h &&
              (i
                ? o[(m ? "remove" : "add") + "Class"](
                    e,
                    "pswp--animate_opacity"
                  )
                : setTimeout(function() {
                    o.addClass(e, "pswp--animate_opacity");
                  }, 30)),
            (Ft = setTimeout(
              function() {
                if ((Le("initialZoom" + (i ? "Out" : "In")), i)) {
                  var n = s.w / t.w,
                    r = { x: pe.x, y: pe.y },
                    a = g,
                    l = ae,
                    u = function(t) {
                      1 === t
                        ? ((g = n), (pe.x = s.x), (pe.y = s.y - F))
                        : ((g = (n - a) * t + a),
                          (pe.x = (s.x - r.x) * t + r.x),
                          (pe.y = (s.y - F - r.y) * t + r.y)),
                        Ae(),
                        h ? (e.style.opacity = 1 - t) : Me(l - t * l);
                    };
                  m
                    ? Xe("initialZoom", 0, 1, p, o.easing.cubic.out, u, d)
                    : (u(1), (Ft = setTimeout(d, p + 20)));
                } else
                  (g = t.initialZoomLevel),
                    He(pe, t.initialPosition),
                    Ae(),
                    Me(1),
                    h ? (e.style.opacity = 1) : Me(1),
                    (Ft = setTimeout(d, p + 20));
              },
              i ? 25 : 90
            ));
        },
        Kt = {},
        Vt = [],
        Wt = {
          index: 0,
          errorMsg:
            '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
          forceProgressiveLoading: !1,
          preload: [1, 1],
          getNumItemsFn: function() {
            return Pt.length;
          }
        },
        qt = function(e, t, n) {
          if (e.src && !e.loadError) {
            var i = !n;
            if (
              (i &&
                (e.vGap || (e.vGap = { top: 0, bottom: 0 }),
                Le("parseVerticalMargin", e)),
              (Kt.x = t.x),
              (Kt.y = t.y - e.vGap.top - e.vGap.bottom),
              i)
            ) {
              var o = Kt.x / e.w,
                r = Kt.y / e.h;
              e.fitRatio = o < r ? o : r;
              var l = a.scaleMode;
              "orig" === l ? (n = 1) : "fit" === l && (n = e.fitRatio),
                n > 1 && (n = 1),
                (e.initialZoomLevel = n),
                e.bounds ||
                  (e.bounds = {
                    center: { x: 0, y: 0 },
                    max: { x: 0, y: 0 },
                    min: { x: 0, y: 0 }
                  });
            }
            if (!n) return;
            return (
              (function(e, t, n) {
                var i = e.bounds;
                (i.center.x = Math.round((Kt.x - t) / 2)),
                  (i.center.y = Math.round((Kt.y - n) / 2) + e.vGap.top),
                  (i.max.x = t > Kt.x ? Math.round(Kt.x - t) : i.center.x),
                  (i.max.y =
                    n > Kt.y ? Math.round(Kt.y - n) + e.vGap.top : i.center.y),
                  (i.min.x = t > Kt.x ? 0 : i.center.x),
                  (i.min.y = n > Kt.y ? e.vGap.top : i.center.y);
              })(e, e.w * n, e.h * n),
              i &&
                n === e.initialZoomLevel &&
                (e.initialPosition = e.bounds.center),
              e.bounds
            );
          }
          return (
            (e.w = e.h = 0),
            (e.initialZoomLevel = e.fitRatio = 1),
            (e.bounds = {
              center: { x: 0, y: 0 },
              max: { x: 0, y: 0 },
              min: { x: 0, y: 0 }
            }),
            (e.initialPosition = e.bounds.center),
            e.bounds
          );
        },
        jt = function(e, t, n, i, o, a) {
          t.loadError ||
            (i &&
              ((t.imageAppended = !0),
              Xt(t, i, t === r.currItem && be),
              n.appendChild(i),
              a &&
                setTimeout(function() {
                  t &&
                    t.loaded &&
                    t.placeholder &&
                    ((t.placeholder.style.display = "none"),
                    (t.placeholder = null));
                }, 500)));
        },
        Gt = function(e) {
          (e.loading = !0), (e.loaded = !1);
          var t = (e.img = o.createEl("pswp__img", "img")),
            n = function() {
              (e.loading = !1),
                (e.loaded = !0),
                e.loadComplete ? e.loadComplete(e) : (e.img = null),
                (t.onload = t.onerror = null),
                (t = null);
            };
          return (
            (t.onload = n),
            (t.onerror = function() {
              (e.loadError = !0), n();
            }),
            (t.src = e.src),
            t
          );
        },
        Yt = function(e, t) {
          if (e.src && e.loadError && e.container)
            return (
              t && (e.container.innerHTML = ""),
              (e.container.innerHTML = a.errorMsg.replace("%url%", e.src)),
              !0
            );
        },
        Xt = function(e, t, n) {
          if (e.src) {
            t || (t = e.container.lastChild);
            var i = n ? e.w : Math.round(e.w * e.fitRatio),
              o = n ? e.h : Math.round(e.h * e.fitRatio);
            e.placeholder &&
              !e.loaded &&
              ((e.placeholder.style.width = i + "px"),
              (e.placeholder.style.height = o + "px")),
              (t.style.width = i + "px"),
              (t.style.height = o + "px");
          }
        },
        $t = function() {
          if (Vt.length) {
            for (var e, t = 0; t < Vt.length; t++)
              (e = Vt[t]).holder.index === e.index &&
                jt(e.index, e.item, e.baseDiv, e.img, 0, e.clearPlaceholder);
            Vt = [];
          }
        };
      _e("Controller", {
        publicMethods: {
          lazyLoadItem: function(e) {
            e = xe(e);
            var t = Zt(e);
            t &&
              ((!t.loaded && !t.loading) || _) &&
              (Le("gettingData", e, t), t.src && Gt(t));
          },
          initController: function() {
            o.extend(a, Wt, !0),
              (r.items = Pt = n),
              (Zt = r.getItemAt),
              (Ut = a.getNumItemsFn),
              a.loop,
              Ut() < 3 && (a.loop = !1),
              Te("beforeChange", function(e) {
                var t,
                  n = a.preload,
                  i = null === e || e >= 0,
                  o = Math.min(n[0], Ut()),
                  l = Math.min(n[1], Ut());
                for (t = 1; t <= (i ? l : o); t++) r.lazyLoadItem(c + t);
                for (t = 1; t <= (i ? o : l); t++) r.lazyLoadItem(c - t);
              }),
              Te("initialLayout", function() {
                r.currItem.initialLayout =
                  a.getThumbBoundsFn && a.getThumbBoundsFn(c);
              }),
              Te("mainScrollAnimComplete", $t),
              Te("initialZoomInEnd", $t),
              Te("destroy", function() {
                for (var e, t = 0; t < Pt.length; t++)
                  (e = Pt[t]).container && (e.container = null),
                    e.placeholder && (e.placeholder = null),
                    e.img && (e.img = null),
                    e.preloader && (e.preloader = null),
                    e.loadError && (e.loaded = e.loadError = !1);
                Vt = null;
              });
          },
          getItemAt: function(e) {
            return e >= 0 && void 0 !== Pt[e] && Pt[e];
          },
          allowProgressiveImg: function() {
            return (
              a.forceProgressiveLoading ||
              !S ||
              a.mouseUsed ||
              screen.width > 1200
            );
          },
          setContent: function(e, t) {
            a.loop && (t = xe(t));
            var n = r.getItemAt(e.index);
            n && (n.container = null);
            var i,
              s = r.getItemAt(t);
            if (s) {
              Le("gettingData", t, s), (e.index = t), (e.item = s);
              var u = (s.container = o.createEl("pswp__zoom-wrap"));
              if (
                (!s.src &&
                  s.html &&
                  (s.html.tagName
                    ? u.appendChild(s.html)
                    : (u.innerHTML = s.html)),
                Yt(s),
                qt(s, de),
                !s.src || s.loadError || s.loaded)
              )
                s.src &&
                  !s.loadError &&
                  (((i = o.createEl("pswp__img", "img")).style.opacity = 1),
                  (i.src = s.src),
                  Xt(s, i),
                  jt(0, s, u, i));
              else {
                if (
                  ((s.loadComplete = function(n) {
                    if (l) {
                      if (e && e.index === t) {
                        if (Yt(n, !0))
                          return (
                            (n.loadComplete = n.img = null),
                            qt(n, de),
                            Se(n),
                            void (e.index === c && r.updateCurrZoomItem())
                          );
                        n.imageAppended
                          ? !zt &&
                            n.placeholder &&
                            ((n.placeholder.style.display = "none"),
                            (n.placeholder = null))
                          : P.transform && (ne || zt)
                          ? Vt.push({
                              item: n,
                              baseDiv: u,
                              img: n.img,
                              index: t,
                              holder: e,
                              clearPlaceholder: !0
                            })
                          : jt(0, n, u, n.img, 0, !0);
                      }
                      (n.loadComplete = null),
                        (n.img = null),
                        Le("imageLoadComplete", t, n);
                    }
                  }),
                  o.features.transform)
                ) {
                  var p = "pswp__img pswp__img--placeholder";
                  p += s.msrc ? "" : " pswp__img--placeholder--blank";
                  var d = o.createEl(p, s.msrc ? "img" : "");
                  s.msrc && (d.src = s.msrc),
                    Xt(s, d),
                    u.appendChild(d),
                    (s.placeholder = d);
                }
                s.loading || Gt(s),
                  r.allowProgressiveImg() &&
                    (!Nt && P.transform
                      ? Vt.push({
                          item: s,
                          baseDiv: u,
                          img: s.img,
                          index: t,
                          holder: e
                        })
                      : jt(0, s, u, s.img, 0, !0));
              }
              Nt || t !== c ? Se(s) : ((te = u.style), Bt(s, i || s.img)),
                (e.el.innerHTML = ""),
                e.el.appendChild(u);
            } else e.el.innerHTML = "";
          },
          cleanSlide: function(e) {
            e.img && (e.img.onload = e.img.onerror = null),
              (e.loaded = e.loading = e.img = e.imageAppended = !1);
          }
        }
      });
      var Qt,
        Jt,
        en = {},
        tn = function(e, t, n) {
          var i = document.createEvent("CustomEvent"),
            o = {
              origEvent: e,
              target: e.target,
              releasePoint: t,
              pointerType: n || "touch"
            };
          i.initCustomEvent("pswpTap", !0, !0, o), e.target.dispatchEvent(i);
        };
      _e("Tap", {
        publicMethods: {
          initTap: function() {
            Te("firstTouchStart", r.onTapStart),
              Te("touchRelease", r.onTapRelease),
              Te("destroy", function() {
                (en = {}), (Qt = null);
              });
          },
          onTapStart: function(e) {
            e.length > 1 && (clearTimeout(Qt), (Qt = null));
          },
          onTapRelease: function(e, t) {
            var n, i;
            if (t && !G && !q && !qe) {
              var r = t;
              if (
                Qt &&
                (clearTimeout(Qt),
                (Qt = null),
                (n = r),
                (i = en),
                Math.abs(n.x - i.x) < 25 && Math.abs(n.y - i.y) < 25)
              )
                return void Le("doubleTap", r);
              if ("mouse" === t.type) return void tn(e, t, "mouse");
              if (
                "BUTTON" === e.target.tagName.toUpperCase() ||
                o.hasClass(e.target, "pswp__single-tap")
              )
                return void tn(e, t);
              He(en, r),
                (Qt = setTimeout(function() {
                  tn(e, t), (Qt = null);
                }, 300));
            }
          }
        }
      }),
        _e("DesktopZoom", {
          publicMethods: {
            initDesktopZoom: function() {
              R ||
                (S
                  ? Te("mouseUsed", function() {
                      r.setupDesktopZoom();
                    })
                  : r.setupDesktopZoom(!0));
            },
            setupDesktopZoom: function(t) {
              Jt = {};
              var n = "wheel mousewheel DOMMouseScroll";
              Te("bindEvents", function() {
                o.bind(e, n, r.handleMouseWheel);
              }),
                Te("unbindEvents", function() {
                  Jt && o.unbind(e, n, r.handleMouseWheel);
                }),
                (r.mouseZoomedIn = !1);
              var i,
                a = function() {
                  r.mouseZoomedIn &&
                    (o.removeClass(e, "pswp--zoomed-in"),
                    (r.mouseZoomedIn = !1)),
                    g < 1
                      ? o.addClass(e, "pswp--zoom-allowed")
                      : o.removeClass(e, "pswp--zoom-allowed"),
                    l();
                },
                l = function() {
                  i && (o.removeClass(e, "pswp--dragging"), (i = !1));
                };
              Te("resize", a),
                Te("afterChange", a),
                Te("pointerDown", function() {
                  r.mouseZoomedIn &&
                    ((i = !0), o.addClass(e, "pswp--dragging"));
                }),
                Te("pointerUp", l),
                t || a();
            },
            handleMouseWheel: function(e) {
              if (g <= r.currItem.fitRatio)
                return (
                  a.modal &&
                    (!a.closeOnScroll || qe || W
                      ? e.preventDefault()
                      : I && Math.abs(e.deltaY) > 2 && ((u = !0), r.close())),
                  !0
                );
              if ((e.stopPropagation(), (Jt.x = 0), "deltaX" in e))
                1 === e.deltaMode
                  ? ((Jt.x = 18 * e.deltaX), (Jt.y = 18 * e.deltaY))
                  : ((Jt.x = e.deltaX), (Jt.y = e.deltaY));
              else if ("wheelDelta" in e)
                e.wheelDeltaX && (Jt.x = -0.16 * e.wheelDeltaX),
                  e.wheelDeltaY
                    ? (Jt.y = -0.16 * e.wheelDeltaY)
                    : (Jt.y = -0.16 * e.wheelDelta);
              else {
                if (!("detail" in e)) return;
                Jt.y = e.detail;
              }
              Ne(g, !0);
              var t = pe.x - Jt.x,
                n = pe.y - Jt.y;
              (a.modal ||
                (t <= ee.min.x &&
                  t >= ee.max.x &&
                  n <= ee.min.y &&
                  n >= ee.max.y)) &&
                e.preventDefault(),
                r.panTo(t, n);
            },
            toggleDesktopZoom: function(t) {
              t = t || { x: de.x / 2 + he.x, y: de.y / 2 + he.y };
              var n = a.getDoubleTapZoom(!0, r.currItem),
                i = g === n;
              (r.mouseZoomedIn = !i),
                r.zoomTo(i ? r.currItem.initialZoomLevel : n, t, 333),
                o[(i ? "remove" : "add") + "Class"](e, "pswp--zoomed-in");
            }
          }
        });
      var nn,
        on,
        rn,
        an,
        ln,
        sn,
        un,
        cn,
        pn,
        dn,
        mn,
        hn,
        fn = { history: !0, galleryUID: 1 },
        gn = function() {
          return mn.hash.substring(1);
        },
        vn = function() {
          nn && clearTimeout(nn), rn && clearTimeout(rn);
        },
        wn = function() {
          var e = gn(),
            t = {};
          if (e.length < 5) return t;
          var n,
            i = e.split("&");
          for (n = 0; n < i.length; n++)
            if (i[n]) {
              var o = i[n].split("=");
              o.length < 2 || (t[o[0]] = o[1]);
            }
          if (a.galleryPIDs) {
            var r = t.pid;
            for (t.pid = 0, n = 0; n < Pt.length; n++)
              if (Pt[n].pid === r) {
                t.pid = n;
                break;
              }
          } else t.pid = parseInt(t.pid, 10) - 1;
          return t.pid < 0 && (t.pid = 0), t;
        },
        yn = function() {
          if ((rn && clearTimeout(rn), qe || W)) rn = setTimeout(yn, 500);
          else {
            an ? clearTimeout(on) : (an = !0);
            var e = c + 1,
              t = Zt(c);
            t.hasOwnProperty("pid") && (e = t.pid);
            var n = un + "&gid=" + a.galleryUID + "&pid=" + e;
            cn || (-1 === mn.hash.indexOf(n) && (dn = !0));
            var i = mn.href.split("#")[0] + "#" + n;
            hn
              ? "#" + n !== window.location.hash &&
                history[cn ? "replaceState" : "pushState"](
                  "",
                  document.title,
                  i
                )
              : cn
              ? mn.replace(i)
              : (mn.hash = n),
              (cn = !0),
              (on = setTimeout(function() {
                an = !1;
              }, 60));
          }
        };
      _e("History", {
        publicMethods: {
          initHistory: function() {
            if ((o.extend(a, fn, !0), a.history)) {
              (mn = window.location),
                (dn = !1),
                (pn = !1),
                (cn = !1),
                (un = gn()),
                (hn = "pushState" in history),
                un.indexOf("gid=") > -1 &&
                  (un = (un = un.split("&gid=")[0]).split("?gid=")[0]),
                Te("afterChange", r.updateURL),
                Te("unbindEvents", function() {
                  o.unbind(window, "hashchange", r.onHashChange);
                });
              var e = function() {
                (sn = !0),
                  pn ||
                    (dn
                      ? history.back()
                      : un
                      ? (mn.hash = un)
                      : hn
                      ? history.pushState(
                          "",
                          document.title,
                          mn.pathname + mn.search
                        )
                      : (mn.hash = "")),
                  vn();
              };
              Te("unbindEvents", function() {
                u && e();
              }),
                Te("destroy", function() {
                  sn || e();
                }),
                Te("firstUpdate", function() {
                  c = wn().pid;
                });
              var t = un.indexOf("pid=");
              t > -1 &&
                "&" === (un = un.substring(0, t)).slice(-1) &&
                (un = un.slice(0, -1)),
                setTimeout(function() {
                  l && o.bind(window, "hashchange", r.onHashChange);
                }, 40);
            }
          },
          onHashChange: function() {
            if (gn() === un) return (pn = !0), void r.close();
            an || ((ln = !0), r.goTo(wn().pid), (ln = !1));
          },
          updateURL: function() {
            vn(), ln || (cn ? (nn = setTimeout(yn, 800)) : yn());
          }
        }
      }),
        o.extend(r, $e);
    };
  }),
  /*! PhotoSwipe Default UI - 4.1.3 - 2019-01-08
   * http://photoswipe.com
   * Copyright (c) 2019 Dmitry Semenov; */
  (function(e, t) {
    "function" == typeof define && define.amd
      ? define(t)
      : "object" == typeof exports
      ? (module.exports = t())
      : (e.PhotoSwipeUI_Default = t());
  })(this, function() {
    "use strict";
    return function(e, t) {
      var n,
        i,
        o,
        r,
        a,
        l,
        s,
        u,
        c,
        p,
        d,
        m,
        h,
        f,
        g,
        v,
        w,
        y,
        b = this,
        _ = !1,
        x = !0,
        C = !0,
        T = {
          barsSize: { top: 44, bottom: "auto" },
          closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
          timeToIdle: 4e3,
          timeToIdleOutside: 1e3,
          loadingIndicatorDelay: 1e3,
          addCaptionHTMLFn: function(e, t) {
            return e.title
              ? ((t.children[0].innerHTML = e.title), !0)
              : ((t.children[0].innerHTML = ""), !1);
          },
          closeEl: !0,
          captionEl: !0,
          fullscreenEl: !0,
          zoomEl: !0,
          shareEl: !0,
          counterEl: !0,
          arrowEl: !0,
          preloaderEl: !0,
          tapToClose: !1,
          tapToToggleControls: !0,
          clickToCloseNonZoomable: !0,
          shareButtons: [
            {
              id: "facebook",
              label: "Share on Facebook",
              url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
            },
            {
              id: "twitter",
              label: "Tweet",
              url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
            },
            {
              id: "pinterest",
              label: "Pin it",
              url:
                "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
            },
            {
              id: "download",
              label: "Download image",
              url: "{{raw_image_url}}",
              download: !0
            }
          ],
          getImageURLForShare: function() {
            return e.currItem.src || "";
          },
          getPageURLForShare: function() {
            return window.location.href;
          },
          getTextForShare: function() {
            return e.currItem.title || "";
          },
          indexIndicatorSep: " / ",
          fitControlsWidth: 1200
        },
        L = function(e) {
          if (v) return !0;
          (e = e || window.event), g.timeToIdle && g.mouseUsed && !c && H();
          for (
            var n,
              i,
              o = (e.target || e.srcElement).getAttribute("class") || "",
              r = 0;
            r < N.length;
            r++
          )
            (n = N[r]).onTap &&
              o.indexOf("pswp__" + n.name) > -1 &&
              (n.onTap(), (i = !0));
          if (i) {
            e.stopPropagation && e.stopPropagation(), (v = !0);
            var a = t.features.isOldAndroid ? 600 : 30;
            setTimeout(function() {
              v = !1;
            }, a);
          }
        },
        E = function(e, n, i) {
          t[(i ? "add" : "remove") + "Class"](e, "pswp__" + n);
        },
        M = function() {
          var e = 1 === g.getNumItemsFn();
          e !== f && (E(i, "ui--one-slide", e), (f = e));
        },
        I = function() {
          E(s, "share-modal--hidden", C);
        },
        A = function() {
          return (
            (C = !C)
              ? (t.removeClass(s, "pswp__share-modal--fade-in"),
                setTimeout(function() {
                  C && I();
                }, 300))
              : (I(),
                setTimeout(function() {
                  C || t.addClass(s, "pswp__share-modal--fade-in");
                }, 30)),
            C || O(),
            !1
          );
        },
        S = function(t) {
          var n = (t = t || window.event).target || t.srcElement;
          return (
            e.shout("shareLinkClick", t, n),
            !!n.href &&
              (!!n.hasAttribute("download") ||
                (window.open(
                  n.href,
                  "pswp_share",
                  "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" +
                    (window.screen ? Math.round(screen.width / 2 - 275) : 100)
                ),
                C || A(),
                !1))
          );
        },
        O = function() {
          for (var e, t, n, i, o = "", r = 0; r < g.shareButtons.length; r++)
            (e = g.shareButtons[r]),
              (t = g.getImageURLForShare(e)),
              (n = g.getPageURLForShare(e)),
              (i = g.getTextForShare(e)),
              (o +=
                '<a href="' +
                e.url
                  .replace("{{url}}", encodeURIComponent(n))
                  .replace("{{image_url}}", encodeURIComponent(t))
                  .replace("{{raw_image_url}}", t)
                  .replace("{{text}}", encodeURIComponent(i)) +
                '" target="_blank" class="pswp__share--' +
                e.id +
                '"' +
                (e.download ? "download" : "") +
                ">" +
                e.label +
                "</a>"),
              g.parseShareButtonOut && (o = g.parseShareButtonOut(e, o));
          (s.children[0].innerHTML = o), (s.children[0].onclick = S);
        },
        D = function(e) {
          for (var n = 0; n < g.closeElClasses.length; n++)
            if (t.hasClass(e, "pswp__" + g.closeElClasses[n])) return !0;
        },
        k = 0,
        H = function() {
          clearTimeout(y), (k = 0), c && b.setIdle(!1);
        },
        R = function(e) {
          var t = (e = e || window.event).relatedTarget || e.toElement;
          (t && "HTML" !== t.nodeName) ||
            (clearTimeout(y),
            (y = setTimeout(function() {
              b.setIdle(!0);
            }, g.timeToIdleOutside)));
        },
        F = function(e) {
          m !== e && (E(d, "preloader--active", !e), (m = e));
        },
        P = function(n) {
          var a = n.vGap;
          if (
            !e.likelyTouchDevice ||
            g.mouseUsed ||
            screen.width > g.fitControlsWidth
          ) {
            var l = g.barsSize;
            if (g.captionEl && "auto" === l.bottom)
              if (
                (r ||
                  ((r = t.createEl(
                    "pswp__caption pswp__caption--fake"
                  )).appendChild(t.createEl("pswp__caption__center")),
                  i.insertBefore(r, o),
                  t.addClass(i, "pswp__ui--fit")),
                g.addCaptionHTMLFn(n, r, !0))
              ) {
                var s = r.clientHeight;
                a.bottom = parseInt(s, 10) || 44;
              } else a.bottom = l.top;
            else a.bottom = "auto" === l.bottom ? 0 : l.bottom;
            a.top = l.top;
          } else a.top = a.bottom = 0;
        },
        N = [
          {
            name: "caption",
            option: "captionEl",
            onInit: function(e) {
              o = e;
            }
          },
          {
            name: "share-modal",
            option: "shareEl",
            onInit: function(e) {
              s = e;
            },
            onTap: function() {
              A();
            }
          },
          {
            name: "button--share",
            option: "shareEl",
            onInit: function(e) {
              l = e;
            },
            onTap: function() {
              A();
            }
          },
          {
            name: "button--zoom",
            option: "zoomEl",
            onTap: e.toggleDesktopZoom
          },
          {
            name: "counter",
            option: "counterEl",
            onInit: function(e) {
              a = e;
            }
          },
          { name: "button--close", option: "closeEl", onTap: e.close },
          { name: "button--arrow--left", option: "arrowEl", onTap: e.prev },
          { name: "button--arrow--right", option: "arrowEl", onTap: e.next },
          {
            name: "button--fs",
            option: "fullscreenEl",
            onTap: function() {
              n.isFullscreen() ? n.exit() : n.enter();
            }
          },
          {
            name: "preloader",
            option: "preloaderEl",
            onInit: function(e) {
              d = e;
            }
          }
        ];
      (b.init = function() {
        var a;
        t.extend(e.options, T, !0),
          (g = e.options),
          (i = t.getChildByClass(e.scrollWrap, "pswp__ui")),
          (p = e.listen)("onVerticalDrag", function(e) {
            x && e < 0.95
              ? b.hideControls()
              : !x && e >= 0.95 && b.showControls();
          }),
          p("onPinchClose", function(e) {
            x && e < 0.9
              ? (b.hideControls(), (a = !0))
              : a && !x && e > 0.9 && b.showControls();
          }),
          p("zoomGestureEnded", function() {
            (a = !1) && !x && b.showControls();
          }),
          p("beforeChange", b.update),
          p("doubleTap", function(t) {
            var n = e.currItem.initialZoomLevel;
            e.getZoomLevel() !== n
              ? e.zoomTo(n, t, 333)
              : e.zoomTo(g.getDoubleTapZoom(!1, e.currItem), t, 333);
          }),
          p("preventDragEvent", function(e, t, n) {
            var i = e.target || e.srcElement;
            i &&
              i.getAttribute("class") &&
              e.type.indexOf("mouse") > -1 &&
              (i.getAttribute("class").indexOf("__caption") > 0 ||
                /(SMALL|STRONG|EM)/i.test(i.tagName)) &&
              (n.prevent = !1);
          }),
          p("bindEvents", function() {
            t.bind(i, "pswpTap click", L),
              t.bind(e.scrollWrap, "pswpTap", b.onGlobalTap),
              e.likelyTouchDevice ||
                t.bind(e.scrollWrap, "mouseover", b.onMouseOver);
          }),
          p("unbindEvents", function() {
            C || A(),
              w && clearInterval(w),
              t.unbind(document, "mouseout", R),
              t.unbind(document, "mousemove", H),
              t.unbind(i, "pswpTap click", L),
              t.unbind(e.scrollWrap, "pswpTap", b.onGlobalTap),
              t.unbind(e.scrollWrap, "mouseover", b.onMouseOver),
              n &&
                (t.unbind(document, n.eventK, b.updateFullscreen),
                n.isFullscreen() && ((g.hideAnimationDuration = 0), n.exit()),
                (n = null));
          }),
          p("destroy", function() {
            g.captionEl &&
              (r && i.removeChild(r), t.removeClass(o, "pswp__caption--empty")),
              s && (s.children[0].onclick = null),
              t.removeClass(i, "pswp__ui--over-close"),
              t.addClass(i, "pswp__ui--hidden"),
              b.setIdle(!1);
          }),
          g.showAnimationDuration || t.removeClass(i, "pswp__ui--hidden"),
          p("initialZoomIn", function() {
            g.showAnimationDuration && t.removeClass(i, "pswp__ui--hidden");
          }),
          p("initialZoomOut", function() {
            t.addClass(i, "pswp__ui--hidden");
          }),
          p("parseVerticalMargin", P),
          (function() {
            var e,
              n,
              o,
              r = function(i) {
                if (i)
                  for (var r = i.length, a = 0; a < r; a++) {
                    (e = i[a]), (n = e.className);
                    for (var l = 0; l < N.length; l++)
                      (o = N[l]),
                        n.indexOf("pswp__" + o.name) > -1 &&
                          (g[o.option]
                            ? (t.removeClass(e, "pswp__element--disabled"),
                              o.onInit && o.onInit(e))
                            : t.addClass(e, "pswp__element--disabled"));
                  }
              };
            r(i.children);
            var a = t.getChildByClass(i, "pswp__top-bar");
            a && r(a.children);
          })(),
          g.shareEl && l && s && (C = !0),
          M(),
          g.timeToIdle &&
            p("mouseUsed", function() {
              t.bind(document, "mousemove", H),
                t.bind(document, "mouseout", R),
                (w = setInterval(function() {
                  2 == ++k && b.setIdle(!0);
                }, g.timeToIdle / 2));
            }),
          g.fullscreenEl &&
            !t.features.isOldAndroid &&
            (n || (n = b.getFullscreenAPI()),
            n
              ? (t.bind(document, n.eventK, b.updateFullscreen),
                b.updateFullscreen(),
                t.addClass(e.template, "pswp--supports-fs"))
              : t.removeClass(e.template, "pswp--supports-fs")),
          g.preloaderEl &&
            (F(!0),
            p("beforeChange", function() {
              clearTimeout(h),
                (h = setTimeout(function() {
                  e.currItem && e.currItem.loading
                    ? (!e.allowProgressiveImg() ||
                        (e.currItem.img && !e.currItem.img.naturalWidth)) &&
                      F(!1)
                    : F(!0);
                }, g.loadingIndicatorDelay));
            }),
            p("imageLoadComplete", function(t, n) {
              e.currItem === n && F(!0);
            }));
      }),
        (b.setIdle = function(e) {
          (c = e), E(i, "ui--idle", e);
        }),
        (b.update = function() {
          x && e.currItem
            ? (b.updateIndexIndicator(),
              g.captionEl &&
                (g.addCaptionHTMLFn(e.currItem, o),
                E(o, "caption--empty", !e.currItem.title)),
              (_ = !0))
            : (_ = !1),
            C || A(),
            M();
        }),
        (b.updateFullscreen = function(i) {
          i &&
            setTimeout(function() {
              e.setScrollOffset(0, t.getScrollY());
            }, 50),
            t[(n.isFullscreen() ? "add" : "remove") + "Class"](
              e.template,
              "pswp--fs"
            );
        }),
        (b.updateIndexIndicator = function() {
          g.counterEl &&
            (a.innerHTML =
              e.getCurrentIndex() +
              1 +
              g.indexIndicatorSep +
              g.getNumItemsFn());
        }),
        (b.onGlobalTap = function(n) {
          var i = (n = n || window.event).target || n.srcElement;
          if (!v)
            if (n.detail && "mouse" === n.detail.pointerType) {
              if (D(i)) return void e.close();
              t.hasClass(i, "pswp__img") &&
                (1 === e.getZoomLevel() &&
                e.getZoomLevel() <= e.currItem.fitRatio
                  ? g.clickToCloseNonZoomable && e.close()
                  : e.toggleDesktopZoom(n.detail.releasePoint));
            } else if (
              (g.tapToToggleControls &&
                (x ? b.hideControls() : b.showControls()),
              g.tapToClose && (t.hasClass(i, "pswp__img") || D(i)))
            )
              return void e.close();
        }),
        (b.onMouseOver = function(e) {
          var t = (e = e || window.event).target || e.srcElement;
          E(i, "ui--over-close", D(t));
        }),
        (b.hideControls = function() {
          t.addClass(i, "pswp__ui--hidden"), (x = !1);
        }),
        (b.showControls = function() {
          (x = !0), _ || b.update(), t.removeClass(i, "pswp__ui--hidden");
        }),
        (b.supportsFullscreen = function() {
          var e = document;
          return !!(
            e.exitFullscreen ||
            e.mozCancelFullScreen ||
            e.webkitExitFullscreen ||
            e.msExitFullscreen
          );
        }),
        (b.getFullscreenAPI = function() {
          var t,
            n = document.documentElement,
            i = "fullscreenchange";
          return (
            n.requestFullscreen
              ? (t = {
                  enterK: "requestFullscreen",
                  exitK: "exitFullscreen",
                  elementK: "fullscreenElement",
                  eventK: i
                })
              : n.mozRequestFullScreen
              ? (t = {
                  enterK: "mozRequestFullScreen",
                  exitK: "mozCancelFullScreen",
                  elementK: "mozFullScreenElement",
                  eventK: "moz" + i
                })
              : n.webkitRequestFullscreen
              ? (t = {
                  enterK: "webkitRequestFullscreen",
                  exitK: "webkitExitFullscreen",
                  elementK: "webkitFullscreenElement",
                  eventK: "webkit" + i
                })
              : n.msRequestFullscreen &&
                (t = {
                  enterK: "msRequestFullscreen",
                  exitK: "msExitFullscreen",
                  elementK: "msFullscreenElement",
                  eventK: "MSFullscreenChange"
                }),
            t &&
              ((t.enter = function() {
                if (
                  ((u = g.closeOnScroll),
                  (g.closeOnScroll = !1),
                  "webkitRequestFullscreen" !== this.enterK)
                )
                  return e.template[this.enterK]();
                e.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT);
              }),
              (t.exit = function() {
                return (g.closeOnScroll = u), document[this.exitK]();
              }),
              (t.isFullscreen = function() {
                return document[this.elementK];
              })),
            t
          );
        });
    };
  });
var initPhotoSwipeFromDOM = function(e) {
  for (
    var t = function(e) {
        (e = e || window.event).preventDefault
          ? e.preventDefault()
          : (e.returnValue = !1);
        var t = (function e(t, n) {
          return t && (n(t) ? t : e(t.parentNode, n));
        })(e.target || e.srcElement, function(e) {
          return e.tagName && "FIGURE" === e.tagName.toUpperCase();
        });
        if (t) {
          for (
            var i,
              o = t.parentNode,
              r = t.parentNode.childNodes,
              a = r.length,
              l = 0,
              s = 0;
            s < a;
            s++
          )
            if (1 === r[s].nodeType) {
              if (r[s] === t) {
                i = l;
                break;
              }
              l++;
            }
          return i >= 0 && n(i, o), !1;
        }
      },
      n = function(e, t, n, i) {
        var o,
          r,
          a = document.querySelectorAll(".pswp")[0];
        if (
          ((r = (function(e) {
            for (
              var t, n, i, o, r = e.childNodes, a = r.length, l = [], s = 0;
              s < a;
              s++
            )
              1 === (t = r[s]).nodeType &&
                ((i = (n = t.children[0]).getAttribute("data-size").split("x")),
                (o = {
                  src: n.getAttribute("href"),
                  w: parseInt(i[0], 10),
                  h: parseInt(i[1], 10)
                }),
                t.children.length > 1 && (o.title = t.children[1].innerHTML),
                n.children.length > 0 &&
                  (o.msrc = n.children[0].getAttribute("src")),
                (o.el = t),
                l.push(o));
            return l;
          })(t)),
          (o = {
            galleryUID: t.getAttribute("data-pswp-uid"),
            getThumbBoundsFn: function(e) {
              var t = r[e].el.getElementsByTagName("img")[0],
                n = window.pageYOffset || document.documentElement.scrollTop,
                i = t.getBoundingClientRect();
              return { x: i.left, y: i.top + n, w: i.width };
            }
          }),
          i)
        )
          if (o.galleryPIDs) {
            for (var l = 0; l < r.length; l++)
              if (r[l].pid == e) {
                o.index = l;
                break;
              }
          } else o.index = parseInt(e, 10) - 1;
        else o.index = parseInt(e, 10);
        isNaN(o.index) ||
          (n && (o.showAnimationDuration = 0),
          new PhotoSwipe(a, PhotoSwipeUI_Default, r, o).init());
      },
      i = document.querySelectorAll(e),
      o = 0,
      r = i.length;
    o < r;
    o++
  )
    i[o].setAttribute("data-pswp-uid", o + 1), (i[o].onclick = t);
  var a = (function() {
    var e = window.location.hash.substring(1),
      t = {};
    if (e.length < 5) return t;
    for (var n = e.split("&"), i = 0; i < n.length; i++)
      if (n[i]) {
        var o = n[i].split("=");
        o.length < 2 || (t[o[0]] = o[1]);
      }
    return t.gid && (t.gid = parseInt(t.gid, 10)), t;
  })();
  a.pid && a.gid && n(a.pid, i[a.gid - 1], !0, !0);
};
initPhotoSwipeFromDOM(".photoswipe-gallery");
