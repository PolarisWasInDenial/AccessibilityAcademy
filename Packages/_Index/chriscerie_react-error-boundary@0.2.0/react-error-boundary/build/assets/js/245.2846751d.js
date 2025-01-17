(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [245],
  {
    24130: (e, t, s) => {
      'use strict';
      s.r(t), s.d(t, { default: () => v });
      var i = s(5485),
        l = s.n(i);
      const n = s(31336);
      n.tokenizer.separator = /[\s\-/]+/;
      const a = class {
        constructor(e, t) {
          (this.searchDocs = e), (this.lunrIndex = n.Index.load(t));
        }
        getLunrResult(e) {
          return this.lunrIndex.query(function (t) {
            const s = n.tokenizer(e);
            t.term(s, { boost: 10 }), t.term(s, { wildcard: n.Query.wildcard.TRAILING });
          });
        }
        getHit(e, t, s) {
          return {
            hierarchy: { lvl0: e.pageTitle || e.title, lvl1: 0 === e.type ? null : e.title },
            url: e.url,
            _snippetResult: s ? { content: { value: s, matchLevel: 'full' } } : null,
            _highlightResult: {
              hierarchy: {
                lvl0: { value: 0 === e.type ? t || e.title : e.pageTitle },
                lvl1: 0 === e.type ? null : { value: t || e.title },
              },
            },
          };
        }
        getTitleHit(e, t, s) {
          const i = t[0],
            l = t[0] + s;
          let n =
            e.title.substring(0, i) +
            '<span class="algolia-docsearch-suggestion--highlight">' +
            e.title.substring(i, l) +
            '</span>' +
            e.title.substring(l, e.title.length);
          return this.getHit(e, n);
        }
        getKeywordHit(e, t, s) {
          const i = t[0],
            l = t[0] + s;
          let n =
            e.title +
            '<br /><i>Keywords: ' +
            e.keywords.substring(0, i) +
            '<span class="algolia-docsearch-suggestion--highlight">' +
            e.keywords.substring(i, l) +
            '</span>' +
            e.keywords.substring(l, e.keywords.length) +
            '</i>';
          return this.getHit(e, n);
        }
        getContentHit(e, t) {
          const s = t[0],
            i = t[0] + t[1];
          let l = s,
            n = i,
            a = !0,
            r = !0;
          for (let c = 0; c < 3; c++) {
            const t = e.content.lastIndexOf(' ', l - 2),
              s = e.content.lastIndexOf('.', l - 2);
            if (s > 0 && s > t) {
              (l = s + 1), (a = !1);
              break;
            }
            if (t < 0) {
              (l = 0), (a = !1);
              break;
            }
            l = t + 1;
          }
          for (let c = 0; c < 10; c++) {
            const t = e.content.indexOf(' ', n + 1),
              s = e.content.indexOf('.', n + 1);
            if (s > 0 && s < t) {
              (n = s), (r = !1);
              break;
            }
            if (t < 0) {
              (n = e.content.length), (r = !1);
              break;
            }
            n = t;
          }
          let o = e.content.substring(l, s);
          return (
            a && (o = '... ' + o),
            (o += '<span class="algolia-docsearch-suggestion--highlight">' + e.content.substring(s, i) + '</span>'),
            (o += e.content.substring(i, n)),
            r && (o += ' ...'),
            this.getHit(e, null, o)
          );
        }
        search(e) {
          return new Promise((t, s) => {
            const i = this.getLunrResult(e),
              l = [];
            i.length > 5 && (i.length = 5),
              (this.titleHitsRes = []),
              (this.contentHitsRes = []),
              i.forEach((t) => {
                const s = this.searchDocs[t.ref],
                  { metadata: i } = t.matchData;
                for (let n in i)
                  if (i[n].title) {
                    if (!this.titleHitsRes.includes(t.ref)) {
                      const a = i[n].title.position[0];
                      l.push(this.getTitleHit(s, a, e.length)), this.titleHitsRes.push(t.ref);
                    }
                  } else if (i[n].content) {
                    const e = i[n].content.position[0];
                    l.push(this.getContentHit(s, e));
                  } else if (i[n].keywords) {
                    const a = i[n].keywords.position[0];
                    l.push(this.getKeywordHit(s, a, e.length)), this.titleHitsRes.push(t.ref);
                  }
              }),
              l.length > 5 && (l.length = 5),
              t(l);
          });
        }
      };
      var r = s(71639),
        o = s.n(r);
      const c = 'algolia-docsearch',
        h = `${c}-suggestion`,
        u = {
          suggestion: `\n  <a class="${h}\n    {{#isCategoryHeader}}${h}__main{{/isCategoryHeader}}\n    {{#isSubCategoryHeader}}${h}__secondary{{/isSubCategoryHeader}}\n    "\n    aria-label="Link to the result"\n    href="{{{url}}}"\n    >\n    <div class="${h}--category-header">\n        <span class="${h}--category-header-lvl0">{{{category}}}</span>\n    </div>\n    <div class="${h}--wrapper">\n      <div class="${h}--subcategory-column">\n        <span class="${h}--subcategory-column-text">{{{subcategory}}}</span>\n      </div>\n      {{#isTextOrSubcategoryNonEmpty}}\n      <div class="${h}--content">\n        <div class="${h}--subcategory-inline">{{{subcategory}}}</div>\n        <div class="${h}--title">{{{title}}}</div>\n        {{#text}}<div class="${h}--text">{{{text}}}</div>{{/text}}\n      </div>\n      {{/isTextOrSubcategoryNonEmpty}}\n    </div>\n  </a>\n  `,
          suggestionSimple: `\n  <div class="${h}\n    {{#isCategoryHeader}}${h}__main{{/isCategoryHeader}}\n    {{#isSubCategoryHeader}}${h}__secondary{{/isSubCategoryHeader}}\n    suggestion-layout-simple\n  ">\n    <div class="${h}--category-header">\n        {{^isLvl0}}\n        <span class="${h}--category-header-lvl0 ${h}--category-header-item">{{{category}}}</span>\n          {{^isLvl1}}\n          {{^isLvl1EmptyOrDuplicate}}\n          <span class="${h}--category-header-lvl1 ${h}--category-header-item">\n              {{{subcategory}}}\n          </span>\n          {{/isLvl1EmptyOrDuplicate}}\n          {{/isLvl1}}\n        {{/isLvl0}}\n        <div class="${h}--title ${h}--category-header-item">\n            {{#isLvl2}}\n                {{{title}}}\n            {{/isLvl2}}\n            {{#isLvl1}}\n                {{{subcategory}}}\n            {{/isLvl1}}\n            {{#isLvl0}}\n                {{{category}}}\n            {{/isLvl0}}\n        </div>\n    </div>\n    <div class="${h}--wrapper">\n      {{#text}}\n      <div class="${h}--content">\n        <div class="${h}--text">{{{text}}}</div>\n      </div>\n      {{/text}}\n    </div>\n  </div>\n  `,
          footer: `\n    <div class="${`${c}-footer`}">\n    </div>\n  `,
          empty: `\n  <div class="${h}">\n    <div class="${h}--wrapper">\n        <div class="${h}--content ${h}--no-results">\n            <div class="${h}--title">\n                <div class="${h}--text">\n                    No results found for query <b>"{{query}}"</b>\n                </div>\n            </div>\n        </div>\n    </div>\n  </div>\n  `,
          searchBox:
            '\n  <form novalidate="novalidate" onsubmit="return false;" class="searchbox">\n    <div role="search" class="searchbox__wrapper">\n      <input id="docsearch" type="search" name="search" placeholder="Search the docs" autocomplete="off" required="required" class="searchbox__input"/>\n      <button type="submit" title="Submit your search query." class="searchbox__submit" >\n        <svg width=12 height=12 role="img" aria-label="Search">\n          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sbx-icon-search-13"></use>\n        </svg>\n      </button>\n      <button type="reset" title="Clear the search query." class="searchbox__reset hide">\n        <svg width=12 height=12 role="img" aria-label="Reset">\n          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sbx-icon-clear-3"></use>\n        </svg>\n      </button>\n    </div>\n</form>\n\n<div class="svg-icons" style="height: 0; width: 0; position: absolute; visibility: hidden">\n  <svg xmlns="http://www.w3.org/2000/svg">\n    <symbol id="sbx-icon-clear-3" viewBox="0 0 40 40"><path d="M16.228 20L1.886 5.657 0 3.772 3.772 0l1.885 1.886L20 16.228 34.343 1.886 36.228 0 40 3.772l-1.886 1.885L23.772 20l14.342 14.343L40 36.228 36.228 40l-1.885-1.886L20 23.772 5.657 38.114 3.772 40 0 36.228l1.886-1.885L16.228 20z" fill-rule="evenodd"></symbol>\n    <symbol id="sbx-icon-search-13" viewBox="0 0 40 40"><path d="M26.806 29.012a16.312 16.312 0 0 1-10.427 3.746C7.332 32.758 0 25.425 0 16.378 0 7.334 7.333 0 16.38 0c9.045 0 16.378 7.333 16.378 16.38 0 3.96-1.406 7.593-3.746 10.426L39.547 37.34c.607.608.61 1.59-.004 2.203a1.56 1.56 0 0 1-2.202.004L26.807 29.012zm-10.427.627c7.322 0 13.26-5.938 13.26-13.26 0-7.324-5.938-13.26-13.26-13.26-7.324 0-13.26 5.936-13.26 13.26 0 7.322 5.936 13.26 13.26 13.26z" fill-rule="evenodd"></symbol>\n  </svg>\n</div>\n  ',
        };
      var g = s(7939),
        d = s.n(g);
      const p = {
        mergeKeyWithParent(e, t) {
          if (void 0 === e[t]) return e;
          if ('object' != typeof e[t]) return e;
          const s = d().extend({}, e, e[t]);
          return delete s[t], s;
        },
        groupBy(e, t) {
          const s = {};
          return (
            d().each(e, (e, i) => {
              if (void 0 === i[t]) throw new Error(`[groupBy]: Object has no key ${t}`);
              let l = i[t];
              'string' == typeof l && (l = l.toLowerCase()),
                Object.prototype.hasOwnProperty.call(s, l) || (s[l] = []),
                s[l].push(i);
            }),
            s
          );
        },
        values: (e) => Object.keys(e).map((t) => e[t]),
        flatten(e) {
          const t = [];
          return (
            e.forEach((e) => {
              Array.isArray(e)
                ? e.forEach((e) => {
                    t.push(e);
                  })
                : t.push(e);
            }),
            t
          );
        },
        flattenAndFlagFirst(e, t) {
          const s = this.values(e).map((e) => e.map((e, s) => ((e[t] = 0 === s), e)));
          return this.flatten(s);
        },
        compact(e) {
          const t = [];
          return (
            e.forEach((e) => {
              e && t.push(e);
            }),
            t
          );
        },
        getHighlightedValue: (e, t) =>
          e._highlightResult &&
          e._highlightResult.hierarchy_camel &&
          e._highlightResult.hierarchy_camel[t] &&
          e._highlightResult.hierarchy_camel[t].matchLevel &&
          'none' !== e._highlightResult.hierarchy_camel[t].matchLevel &&
          e._highlightResult.hierarchy_camel[t].value
            ? e._highlightResult.hierarchy_camel[t].value
            : e._highlightResult && e._highlightResult && e._highlightResult[t] && e._highlightResult[t].value
            ? e._highlightResult[t].value
            : e[t],
        getSnippetedValue(e, t) {
          if (!e._snippetResult || !e._snippetResult[t] || !e._snippetResult[t].value) return e[t];
          let s = e._snippetResult[t].value;
          return (
            s[0] !== s[0].toUpperCase() && (s = `\u2026${s}`),
            -1 === ['.', '!', '?'].indexOf(s[s.length - 1]) && (s = `${s}\u2026`),
            s
          );
        },
        deepClone: (e) => JSON.parse(JSON.stringify(e)),
      };
      class y {
        constructor(e) {
          let {
            searchDocs: t,
            searchIndex: s,
            inputSelector: i,
            debug: l = !1,
            queryDataCallback: n = null,
            autocompleteOptions: r = { debug: !1, hint: !1, autoselect: !0 },
            transformData: c = !1,
            queryHook: h = !1,
            handleSelected: g = !1,
            enhancedSearchInput: p = !1,
            layout: v = 'collumns',
          } = e;
          (this.input = y.getInputFromSelector(i)), (this.queryDataCallback = n || null);
          const m = !(!r || !r.debug) && r.debug;
          (r.debug = l || m),
            (this.autocompleteOptions = r),
            (this.autocompleteOptions.cssClasses = this.autocompleteOptions.cssClasses || {}),
            (this.autocompleteOptions.cssClasses.prefix = this.autocompleteOptions.cssClasses.prefix || 'ds');
          const b = this.input && 'function' == typeof this.input.attr && this.input.attr('aria-label');
          (this.autocompleteOptions.ariaLabel = this.autocompleteOptions.ariaLabel || b || 'search input'),
            (this.isSimpleLayout = 'simple' === v),
            (this.client = new a(t, s)),
            p && (this.input = y.injectSearchBox(this.input)),
            (this.autocomplete = o()(this.input, r, [
              {
                source: this.getAutocompleteSource(c, h),
                templates: {
                  suggestion: y.getSuggestionTemplate(this.isSimpleLayout),
                  footer: u.footer,
                  empty: y.getEmptyTemplate(),
                },
              },
            ]));
          const f = g;
          (this.handleSelected = f || this.handleSelected),
            f &&
              d()('.algolia-autocomplete').on('click', '.ds-suggestions a', (e) => {
                e.preventDefault();
              }),
            this.autocomplete.on(
              'autocomplete:selected',
              this.handleSelected.bind(null, this.autocomplete.autocomplete)
            ),
            this.autocomplete.on('autocomplete:shown', this.handleShown.bind(null, this.input)),
            p && y.bindSearchBoxEvent();
        }
        static injectSearchBox(e) {
          e.before(u.searchBox);
          const t = e.prev().prev().find('input');
          return e.remove(), t;
        }
        static bindSearchBoxEvent() {
          d()('.searchbox [type="reset"]').on('click', function () {
            d()('input#docsearch').focus(), d()(this).addClass('hide'), o().autocomplete.setVal('');
          }),
            d()('input#docsearch').on('keyup', () => {
              const e = document.querySelector('input#docsearch'),
                t = document.querySelector('.searchbox [type="reset"]');
              (t.className = 'searchbox__reset'), 0 === e.value.length && (t.className += ' hide');
            });
        }
        static getInputFromSelector(e) {
          const t = d()(e).filter('input');
          return t.length ? d()(t[0]) : null;
        }
        getAutocompleteSource(e, t) {
          return (s, i) => {
            t && (s = t(s) || s),
              this.client.search(s).then((t) => {
                this.queryDataCallback && 'function' == typeof this.queryDataCallback && this.queryDataCallback(t),
                  e && (t = e(t) || t),
                  i(y.formatHits(t));
              });
          };
        }
        static formatHits(e) {
          const t = p
            .deepClone(e)
            .map(
              (e) => (
                e._highlightResult && (e._highlightResult = p.mergeKeyWithParent(e._highlightResult, 'hierarchy')),
                p.mergeKeyWithParent(e, 'hierarchy')
              )
            );
          let s = p.groupBy(t, 'lvl0');
          return (
            d().each(s, (e, t) => {
              const i = p.groupBy(t, 'lvl1'),
                l = p.flattenAndFlagFirst(i, 'isSubCategoryHeader');
              s[e] = l;
            }),
            (s = p.flattenAndFlagFirst(s, 'isCategoryHeader')),
            s.map((e) => {
              const t = y.formatURL(e),
                s = p.getHighlightedValue(e, 'lvl0'),
                i = p.getHighlightedValue(e, 'lvl1') || s,
                l = p
                  .compact([
                    p.getHighlightedValue(e, 'lvl2') || i,
                    p.getHighlightedValue(e, 'lvl3'),
                    p.getHighlightedValue(e, 'lvl4'),
                    p.getHighlightedValue(e, 'lvl5'),
                    p.getHighlightedValue(e, 'lvl6'),
                  ])
                  .join('<span class="aa-suggestion-title-separator" aria-hidden="true"> \u203a </span>'),
                n = p.getSnippetedValue(e, 'content'),
                a = (i && '' !== i) || (l && '' !== l),
                r = l && '' !== l && l !== i,
                o = !r && i && '' !== i && i !== s;
              return {
                isLvl0: !o && !r,
                isLvl1: o,
                isLvl2: r,
                isLvl1EmptyOrDuplicate: !i || '' === i || i === s,
                isCategoryHeader: e.isCategoryHeader,
                isSubCategoryHeader: e.isSubCategoryHeader,
                isTextOrSubcategoryNonEmpty: a,
                category: s,
                subcategory: i,
                title: l,
                text: n,
                url: t,
              };
            })
          );
        }
        static formatURL(e) {
          const { url: t, anchor: s } = e;
          if (t) {
            return -1 !== t.indexOf('#') ? t : s ? `${e.url}#${e.anchor}` : t;
          }
          return s ? `#${e.anchor}` : (console.warn('no anchor nor url for : ', JSON.stringify(e)), null);
        }
        static getEmptyTemplate() {
          return (e) => l().compile(u.empty).render(e);
        }
        static getSuggestionTemplate(e) {
          const t = e ? u.suggestionSimple : u.suggestion,
            s = l().compile(t);
          return (e) => s.render(e);
        }
        handleSelected(e, t, s, i, l) {
          void 0 === l && (l = {}), 'click' !== l.selectionMethod && (e.setVal(''), window.location.assign(s.url));
        }
        handleShown(e) {
          const t = e.offset().left + e.width() / 2;
          let s = d()(document).width() / 2;
          isNaN(s) && (s = 900);
          const i = t - s >= 0 ? 'algolia-autocomplete-right' : 'algolia-autocomplete-left',
            l = t - s < 0 ? 'algolia-autocomplete-right' : 'algolia-autocomplete-left',
            n = d()('.algolia-autocomplete');
          n.hasClass(i) || n.addClass(i), n.hasClass(l) && n.removeClass(l);
        }
      }
      const v = y;
    },
    15525: () => {},
  },
]);
