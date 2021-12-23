(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{501:function(e,t,a){"use strict";a.r(t);var o=a(13),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[e._v("#")]),e._v(" Options")]),e._v(" "),a("h2",{attrs:{id:"basic-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-options"}},[e._v("#")]),e._v(" Basic Options")]),e._v(" "),a("h3",{attrs:{id:"iscasesensitive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iscasesensitive"}},[e._v("#")]),e._v(" "),a("code",[e._v("isCaseSensitive")])]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("boolean")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("false")])])]),e._v(" "),a("p",[e._v("Indicates whether comparisons should be case sensitive.")]),e._v(" "),a("h3",{attrs:{id:"includescore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#includescore"}},[e._v("#")]),e._v(" "),a("code",[e._v("includeScore")])]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("boolean")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("false")])])]),e._v(" "),a("p",[e._v("Whether the score should be included in the result set. A score of "),a("code",[e._v("0")]),e._v("indicates a perfect match, while a score of "),a("code",[e._v("1")]),e._v(" indicates a complete mismatch.")]),e._v(" "),a("h3",{attrs:{id:"includematches"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#includematches"}},[e._v("#")]),e._v(" "),a("code",[e._v("includeMatches")])]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("boolean")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("false")])])]),e._v(" "),a("p",[e._v("Whether the matches should be included in the result set. When "),a("code",[e._v("true")]),e._v(", each record in the result set will include the indices of the matched characters. These can consequently be used for highlighting purposes.")]),e._v(" "),a("h3",{attrs:{id:"minmatchcharlength"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#minmatchcharlength"}},[e._v("#")]),e._v(" "),a("code",[e._v("minMatchCharLength")])]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("number")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("1")])])]),e._v(" "),a("p",[e._v("Only the matches whose length exceeds this value will be returned. (For instance, if you want to ignore single character matches in the result, set it to "),a("code",[e._v("2")]),e._v(").")]),e._v(" "),a("h3",{attrs:{id:"shouldsort"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shouldsort"}},[e._v("#")]),e._v(" "),a("code",[e._v("shouldSort")])]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("boolean")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("true")])])]),e._v(" "),a("p",[e._v("Whether to sort the result list, by score.")]),e._v(" "),a("h3",{attrs:{id:"findallmatches"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#findallmatches"}},[e._v("#")]),e._v(" "),a("code",[e._v("findAllMatches")])]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("boolean")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("false")])])]),e._v(" "),a("p",[e._v("When true, the matching function will continue to the end of a search pattern even if a perfect match has already been located in the string.")]),e._v(" "),a("h3",{attrs:{id:"keys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keys"}},[e._v("#")]),e._v(" "),a("code",[e._v("keys")])]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("Array")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("[]")])])]),e._v(" "),a("p",[e._v("List of keys that will be searched. This supports nested paths, weighted search, searching in arrays of "),a("RouterLink",{attrs:{to:"/examples.html#search-string-array"}},[e._v("strings")]),e._v(" and "),a("RouterLink",{attrs:{to:"/examples.html#nested-search"}},[e._v("objects")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"fuzzy-matching-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fuzzy-matching-options"}},[e._v("#")]),e._v(" Fuzzy Matching Options")]),e._v(" "),a("h3",{attrs:{id:"location"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#location"}},[e._v("#")]),e._v(" "),a("code",[e._v("location")])]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("number")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("0")])])]),e._v(" "),a("p",[e._v("Determines approximately where in the text is the pattern expected to be found.")]),e._v(" "),a("h3",{attrs:{id:"threshold"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#threshold"}},[e._v("#")]),e._v(" "),a("code",[e._v("threshold")])]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("number")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("0.6")])])]),e._v(" "),a("p",[e._v("At what point does the match algorithm give up. A threshold of "),a("code",[e._v("0.0")]),e._v(" requires a perfect match (of both letters and location), a threshold of "),a("code",[e._v("1.0")]),e._v(" would match anything.")]),e._v(" "),a("h3",{attrs:{id:"distance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#distance"}},[e._v("#")]),e._v(" "),a("code",[e._v("distance")])]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("number")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("100")])])]),e._v(" "),a("p",[e._v("Determines how close the match must be to the fuzzy location (specified by "),a("code",[e._v("location")]),e._v("). An exact letter match which is "),a("code",[e._v("distance")]),e._v(" characters away from the fuzzy location would score as a complete mismatch. A "),a("code",[e._v("distance")]),e._v(" of "),a("code",[e._v("0")]),e._v(" requires the match be at the exact "),a("code",[e._v("location")]),e._v(" specified. A distance of "),a("code",[e._v("1000")]),e._v(" would require a perfect match to be within "),a("code",[e._v("800")]),e._v(" characters of the "),a("code",[e._v("location")]),e._v(" to be found using a "),a("code",[e._v("threshold")]),e._v(" of "),a("code",[e._v("0.8")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"ignorelocation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ignorelocation"}},[e._v("#")]),e._v(" "),a("code",[e._v("ignoreLocation")])]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("boolean")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("false")])])]),e._v(" "),a("p",[e._v("When "),a("code",[e._v("true")]),e._v(", search will ignore "),a("code",[e._v("location")]),e._v(" and "),a("code",[e._v("distance")]),e._v(", so it won't matter where in the string the pattern appears.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("The default options only search the first 60 characters. This should suffice if it is reasonably expected that the match is within this range. To modify this behavior, set the appropriate combination of "),a("code",[e._v("location")]),e._v(", "),a("code",[e._v("threshold")]),e._v(", "),a("code",[e._v("distance")]),e._v(" (or "),a("code",[e._v("ignoreLocation")]),e._v(").")]),e._v(" "),a("p",[e._v("To better understand how these options work together, read our "),a("RouterLink",{attrs:{to:"/concepts/scoring-theory.html#scoring-theory"}},[e._v("Scoring Theory")]),e._v(".")],1)]),e._v(" "),a("h2",{attrs:{id:"advanced-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#advanced-options"}},[e._v("#")]),e._v(" Advanced Options")]),e._v(" "),a("h3",{attrs:{id:"useextendedsearch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#useextendedsearch"}},[e._v("#")]),e._v(" "),a("code",[e._v("useExtendedSearch")])]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("boolean")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("false")])])]),e._v(" "),a("p",[e._v("When "),a("code",[e._v("true")]),e._v(", it enables the use of unix-like search commands. See "),a("RouterLink",{attrs:{to:"/examples.html#extended-search"}},[e._v("example")]),e._v(".")],1),e._v(" "),a("h3",{attrs:{id:"getfn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getfn"}},[e._v("#")]),e._v(" "),a("code",[e._v("getFn")])]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("Function")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("(obj: T, path: string | string[]) => string | string[]")])])]),e._v(" "),a("p",[e._v("The function to use to retrieve an object's value at the provided path. The default will also search nested paths.")]),e._v(" "),a("h3",{attrs:{id:"sortfn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sortfn"}},[e._v("#")]),e._v(" "),a("code",[e._v("sortFn")])]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("Function")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("(a, b) => number")])])]),e._v(" "),a("p",[e._v("The function to use to sort all the results. The default will sort by ascending relevance score, ascending index.")]),e._v(" "),a("h3",{attrs:{id:"ignorefieldnorm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ignorefieldnorm"}},[e._v("#")]),e._v(" "),a("code",[e._v("ignoreFieldNorm")])]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("boolean")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("false")])])]),e._v(" "),a("p",[e._v("When "),a("code",[e._v("true")]),e._v(", the calculation for the relevance score (used for sorting) will ignore the "),a("RouterLink",{attrs:{to:"/concepts/scoring-theory.html#fuzziness-score"}},[e._v("field-length norm")]),e._v(".")],1),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("The only time it makes sense to set "),a("code",[e._v("ignoreFieldNorm")]),e._v(" to "),a("code",[e._v("true")]),e._v(" is when it does not matter how many terms there are, but only that the query term exists.")])]),e._v(" "),a("h3",{attrs:{id:"fieldnormweight"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fieldnormweight"}},[e._v("#")]),e._v(" "),a("code",[e._v("fieldNormWeight")])]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("number")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("1")])])]),e._v(" "),a("p",[e._v("Determines how much the "),a("RouterLink",{attrs:{to:"/concepts/scoring-theory.html#field-length-norm"}},[e._v("field-length norm")]),e._v(" affects scoring. A value of "),a("code",[e._v("0")]),e._v(" is equivalent to ignoring the field-length norm. A value of "),a("code",[e._v("0.5")]),e._v(" will greatly reduce the effect of field-length norm, while a value of "),a("code",[e._v("2.0")]),e._v(" will greatly increase it.")],1),e._v(" "),a("Donate")],1)}),[],!1,null,null,null);t.default=s.exports}}]);