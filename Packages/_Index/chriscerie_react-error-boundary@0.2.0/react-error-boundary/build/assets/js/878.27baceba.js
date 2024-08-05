/*! For license information please see 878.27baceba.js.LICENSE.txt */
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [878],
  {
    71639: (e, t, n) => {
      'use strict';
      e.exports = n(29281);
    },
    47114: (e, t, n) => {
      'use strict';
      var i = n(85670),
        r = {
          wrapper: { position: 'relative', display: 'inline-block' },
          hint: {
            position: 'absolute',
            top: '0',
            left: '0',
            borderColor: 'transparent',
            boxShadow: 'none',
            opacity: '1',
          },
          input: { position: 'relative', verticalAlign: 'top', backgroundColor: 'transparent' },
          inputWithNoHint: { position: 'relative', verticalAlign: 'top' },
          dropdown: { position: 'absolute', top: '100%', left: '0', zIndex: '100', display: 'none' },
          suggestions: { display: 'block' },
          suggestion: { whiteSpace: 'nowrap', cursor: 'pointer' },
          suggestionChild: { whiteSpace: 'normal' },
          ltr: { left: '0', right: 'auto' },
          rtl: { left: 'auto', right: '0' },
          defaultClasses: {
            root: 'algolia-autocomplete',
            prefix: 'aa',
            noPrefix: !1,
            dropdownMenu: 'dropdown-menu',
            input: 'input',
            hint: 'hint',
            suggestions: 'suggestions',
            suggestion: 'suggestion',
            cursor: 'cursor',
            dataset: 'dataset',
            empty: 'empty',
          },
          appendTo: {
            wrapper: { position: 'absolute', zIndex: '100', display: 'none' },
            input: {},
            inputWithNoHint: {},
            dropdown: { display: 'block' },
          },
        };
      i.isMsie() &&
        i.mixin(r.input, {
          backgroundImage: 'url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)',
        }),
        i.isMsie() && i.isMsie() <= 7 && i.mixin(r.input, { marginTop: '-1px' }),
        (e.exports = r);
    },
    13312: (e, t, n) => {
      'use strict';
      var i = 'aaDataset',
        r = 'aaValue',
        s = 'aaDatum',
        o = n(85670),
        a = n(33855),
        u = n(26619),
        c = n(47114),
        l = n(6823);
      function h(e) {
        var t;
        ((e = e || {}).templates = e.templates || {}),
          e.source || o.error('missing source'),
          e.name && ((t = e.name), !/^[_a-zA-Z0-9-]+$/.test(t)) && o.error('invalid dataset name: ' + e.name),
          (this.query = null),
          (this._isEmpty = !0),
          (this.highlight = !!e.highlight),
          (this.name = void 0 === e.name || null === e.name ? o.getUniqueId() : e.name),
          (this.source = e.source),
          (this.displayFn = (function (e) {
            return (e = e || 'value'), o.isFunction(e) ? e : t;
            function t(t) {
              return t[e];
            }
          })(e.display || e.displayKey)),
          (this.debounce = e.debounce),
          (this.cache = !1 !== e.cache),
          (this.templates = (function (e, t) {
            return {
              empty: e.empty && o.templatify(e.empty),
              header: e.header && o.templatify(e.header),
              footer: e.footer && o.templatify(e.footer),
              suggestion: e.suggestion || n,
            };
            function n(e) {
              return '<p>' + t(e) + '</p>';
            }
          })(e.templates, this.displayFn)),
          (this.css = o.mixin({}, c, e.appendTo ? c.appendTo : {})),
          (this.cssClasses = e.cssClasses = o.mixin({}, c.defaultClasses, e.cssClasses || {})),
          (this.cssClasses.prefix =
            e.cssClasses.formattedPrefix || o.formatPrefix(this.cssClasses.prefix, this.cssClasses.noPrefix));
        var n = o.className(this.cssClasses.prefix, this.cssClasses.dataset);
        (this.$el =
          e.$menu && e.$menu.find(n + '-' + this.name).length > 0
            ? a.element(e.$menu.find(n + '-' + this.name)[0])
            : a.element(
                u.dataset
                  .replace('%CLASS%', this.name)
                  .replace('%PREFIX%', this.cssClasses.prefix)
                  .replace('%DATASET%', this.cssClasses.dataset)
              )),
          (this.$menu = e.$menu),
          this.clearCachedSuggestions();
      }
      (h.extractDatasetName = function (e) {
        return a.element(e).data(i);
      }),
        (h.extractValue = function (e) {
          return a.element(e).data(r);
        }),
        (h.extractDatum = function (e) {
          var t = a.element(e).data(s);
          return 'string' == typeof t && (t = JSON.parse(t)), t;
        }),
        o.mixin(h.prototype, l, {
          _render: function (e, t) {
            if (this.$el) {
              var n,
                c = this,
                l = [].slice.call(arguments, 2);
              if ((this.$el.empty(), (n = t && t.length), (this._isEmpty = !n), !n && this.templates.empty))
                this.$el
                  .html(
                    function () {
                      var t = [].slice.call(arguments, 0);
                      return (t = [{ query: e, isEmpty: !0 }].concat(t)), c.templates.empty.apply(this, t);
                    }.apply(this, l)
                  )
                  .prepend(c.templates.header ? h.apply(this, l) : null)
                  .append(c.templates.footer ? p.apply(this, l) : null);
              else if (n)
                this.$el
                  .html(
                    function () {
                      var e,
                        n,
                        l = [].slice.call(arguments, 0),
                        h = this,
                        p = u.suggestions
                          .replace('%PREFIX%', this.cssClasses.prefix)
                          .replace('%SUGGESTIONS%', this.cssClasses.suggestions);
                      return (e = a.element(p).css(this.css.suggestions)), (n = o.map(t, f)), e.append.apply(e, n), e;
                      function f(e) {
                        var t,
                          n = u.suggestion
                            .replace('%PREFIX%', h.cssClasses.prefix)
                            .replace('%SUGGESTION%', h.cssClasses.suggestion);
                        return (
                          (t = a
                            .element(n)
                            .attr({ role: 'option', id: ['option', Math.floor(1e8 * Math.random())].join('-') })
                            .append(c.templates.suggestion.apply(this, [e].concat(l)))).data(i, c.name),
                          t.data(r, c.displayFn(e) || void 0),
                          t.data(s, JSON.stringify(e)),
                          t.children().each(function () {
                            a.element(this).css(h.css.suggestionChild);
                          }),
                          t
                        );
                      }
                    }.apply(this, l)
                  )
                  .prepend(c.templates.header ? h.apply(this, l) : null)
                  .append(c.templates.footer ? p.apply(this, l) : null);
              else if (t && !Array.isArray(t)) throw new TypeError('suggestions must be an array');
              this.$menu &&
                this.$menu
                  .addClass(this.cssClasses.prefix + (n ? 'with' : 'without') + '-' + this.name)
                  .removeClass(this.cssClasses.prefix + (n ? 'without' : 'with') + '-' + this.name),
                this.trigger('rendered', e);
            }
            function h() {
              var t = [].slice.call(arguments, 0);
              return (t = [{ query: e, isEmpty: !n }].concat(t)), c.templates.header.apply(this, t);
            }
            function p() {
              var t = [].slice.call(arguments, 0);
              return (t = [{ query: e, isEmpty: !n }].concat(t)), c.templates.footer.apply(this, t);
            }
          },
          getRoot: function () {
            return this.$el;
          },
          update: function (e) {
            function t(t) {
              if (!this.canceled && e === this.query) {
                var n = [].slice.call(arguments, 1);
                this.cacheSuggestions(e, t, n), this._render.apply(this, [e, t].concat(n));
              }
            }
            if (((this.query = e), (this.canceled = !1), this.shouldFetchFromCache(e)))
              t.apply(this, [this.cachedSuggestions].concat(this.cachedRenderExtraArgs));
            else {
              var n = this,
                i = function () {
                  n.canceled || n.source(e, t.bind(n));
                };
              if (this.debounce) {
                clearTimeout(this.debounceTimeout),
                  (this.debounceTimeout = setTimeout(function () {
                    (n.debounceTimeout = null), i();
                  }, this.debounce));
              } else i();
            }
          },
          cacheSuggestions: function (e, t, n) {
            (this.cachedQuery = e), (this.cachedSuggestions = t), (this.cachedRenderExtraArgs = n);
          },
          shouldFetchFromCache: function (e) {
            return this.cache && this.cachedQuery === e && this.cachedSuggestions && this.cachedSuggestions.length;
          },
          clearCachedSuggestions: function () {
            delete this.cachedQuery, delete this.cachedSuggestions, delete this.cachedRenderExtraArgs;
          },
          cancel: function () {
            this.canceled = !0;
          },
          clear: function () {
            this.$el && (this.cancel(), this.$el.empty(), this.trigger('rendered', ''));
          },
          isEmpty: function () {
            return this._isEmpty;
          },
          destroy: function () {
            this.clearCachedSuggestions(), (this.$el = null);
          },
        }),
        (e.exports = h);
    },
    35445: (e, t, n) => {
      'use strict';
      var i = n(85670),
        r = n(33855),
        s = n(6823),
        o = n(13312),
        a = n(47114);
      function u(e) {
        var t,
          n,
          s,
          o = this;
        (e = e || {}).menu || i.error('menu is required'),
          i.isArray(e.datasets) || i.isObject(e.datasets) || i.error('1 or more datasets required'),
          e.datasets || i.error('datasets is required'),
          (this.isOpen = !1),
          (this.isEmpty = !0),
          (this.minLength = e.minLength || 0),
          (this.templates = {}),
          (this.appendTo = e.appendTo || !1),
          (this.css = i.mixin({}, a, e.appendTo ? a.appendTo : {})),
          (this.cssClasses = e.cssClasses = i.mixin({}, a.defaultClasses, e.cssClasses || {})),
          (this.cssClasses.prefix =
            e.cssClasses.formattedPrefix || i.formatPrefix(this.cssClasses.prefix, this.cssClasses.noPrefix)),
          (t = i.bind(this._onSuggestionClick, this)),
          (n = i.bind(this._onSuggestionMouseEnter, this)),
          (s = i.bind(this._onSuggestionMouseLeave, this));
        var c = i.className(this.cssClasses.prefix, this.cssClasses.suggestion);
        (this.$menu = r.element(e.menu).on('mouseenter.aa', c, n).on('mouseleave.aa', c, s).on('click.aa', c, t)),
          (this.$container = e.appendTo ? e.wrapper : this.$menu),
          e.templates &&
            e.templates.header &&
            ((this.templates.header = i.templatify(e.templates.header)), this.$menu.prepend(this.templates.header())),
          e.templates &&
            e.templates.empty &&
            ((this.templates.empty = i.templatify(e.templates.empty)),
            (this.$empty = r.element(
              '<div class="' + i.className(this.cssClasses.prefix, this.cssClasses.empty, !0) + '"></div>'
            )),
            this.$menu.append(this.$empty),
            this.$empty.hide()),
          (this.datasets = i.map(e.datasets, function (t) {
            return (function (e, t, n) {
              return new u.Dataset(i.mixin({ $menu: e, cssClasses: n }, t));
            })(o.$menu, t, e.cssClasses);
          })),
          i.each(this.datasets, function (e) {
            var t = e.getRoot();
            t && 0 === t.parent().length && o.$menu.append(t), e.onSync('rendered', o._onRendered, o);
          }),
          e.templates &&
            e.templates.footer &&
            ((this.templates.footer = i.templatify(e.templates.footer)), this.$menu.append(this.templates.footer()));
        var l = this;
        r.element(window).resize(function () {
          l._redraw();
        });
      }
      i.mixin(u.prototype, s, {
        _onSuggestionClick: function (e) {
          this.trigger('suggestionClicked', r.element(e.currentTarget));
        },
        _onSuggestionMouseEnter: function (e) {
          var t = r.element(e.currentTarget);
          if (!t.hasClass(i.className(this.cssClasses.prefix, this.cssClasses.cursor, !0))) {
            this._removeCursor();
            var n = this;
            setTimeout(function () {
              n._setCursor(t, !1);
            }, 0);
          }
        },
        _onSuggestionMouseLeave: function (e) {
          if (
            e.relatedTarget &&
            r.element(e.relatedTarget).closest('.' + i.className(this.cssClasses.prefix, this.cssClasses.cursor, !0))
              .length > 0
          )
            return;
          this._removeCursor(), this.trigger('cursorRemoved');
        },
        _onRendered: function (e, t) {
          if (
            ((this.isEmpty = i.every(this.datasets, function (e) {
              return e.isEmpty();
            })),
            this.isEmpty)
          )
            if ((t.length >= this.minLength && this.trigger('empty'), this.$empty))
              if (t.length < this.minLength) this._hide();
              else {
                var n = this.templates.empty({ query: this.datasets[0] && this.datasets[0].query });
                this.$empty.html(n), this.$empty.show(), this._show();
              }
            else
              i.any(this.datasets, function (e) {
                return e.templates && e.templates.empty;
              })
                ? t.length < this.minLength
                  ? this._hide()
                  : this._show()
                : this._hide();
          else
            this.isOpen &&
              (this.$empty && (this.$empty.empty(), this.$empty.hide()),
              t.length >= this.minLength ? this._show() : this._hide());
          this.trigger('datasetRendered');
        },
        _hide: function () {
          this.$container.hide();
        },
        _show: function () {
          this.$container.css('display', 'block'), this._redraw(), this.trigger('shown');
        },
        _redraw: function () {
          this.isOpen && this.appendTo && this.trigger('redrawn');
        },
        _getSuggestions: function () {
          return this.$menu.find(i.className(this.cssClasses.prefix, this.cssClasses.suggestion));
        },
        _getCursor: function () {
          return this.$menu.find(i.className(this.cssClasses.prefix, this.cssClasses.cursor)).first();
        },
        _setCursor: function (e, t) {
          e
            .first()
            .addClass(i.className(this.cssClasses.prefix, this.cssClasses.cursor, !0))
            .attr('aria-selected', 'true'),
            this.trigger('cursorMoved', t);
        },
        _removeCursor: function () {
          this._getCursor()
            .removeClass(i.className(this.cssClasses.prefix, this.cssClasses.cursor, !0))
            .removeAttr('aria-selected');
        },
        _moveCursor: function (e) {
          var t, n, i, r;
          this.isOpen &&
            ((n = this._getCursor()),
            (t = this._getSuggestions()),
            this._removeCursor(),
            -1 !== (i = (((i = t.index(n) + e) + 1) % (t.length + 1)) - 1)
              ? (i < -1 && (i = t.length - 1), this._setCursor((r = t.eq(i)), !0), this._ensureVisible(r))
              : this.trigger('cursorRemoved'));
        },
        _ensureVisible: function (e) {
          var t, n, i, r;
          (n =
            (t = e.position().top) +
            e.height() +
            parseInt(e.css('margin-top'), 10) +
            parseInt(e.css('margin-bottom'), 10)),
            (i = this.$menu.scrollTop()),
            (r =
              this.$menu.height() +
              parseInt(this.$menu.css('padding-top'), 10) +
              parseInt(this.$menu.css('padding-bottom'), 10)),
            t < 0 ? this.$menu.scrollTop(i + t) : r < n && this.$menu.scrollTop(i + (n - r));
        },
        close: function () {
          this.isOpen && ((this.isOpen = !1), this._removeCursor(), this._hide(), this.trigger('closed'));
        },
        open: function () {
          this.isOpen || ((this.isOpen = !0), this.isEmpty || this._show(), this.trigger('opened'));
        },
        setLanguageDirection: function (e) {
          this.$menu.css('ltr' === e ? this.css.ltr : this.css.rtl);
        },
        moveCursorUp: function () {
          this._moveCursor(-1);
        },
        moveCursorDown: function () {
          this._moveCursor(1);
        },
        getDatumForSuggestion: function (e) {
          var t = null;
          return (
            e.length &&
              (t = { raw: o.extractDatum(e), value: o.extractValue(e), datasetName: o.extractDatasetName(e) }),
            t
          );
        },
        getCurrentCursor: function () {
          return this._getCursor().first();
        },
        getDatumForCursor: function () {
          return this.getDatumForSuggestion(this._getCursor().first());
        },
        getDatumForTopSuggestion: function () {
          return this.getDatumForSuggestion(this._getSuggestions().first());
        },
        cursorTopSuggestion: function () {
          this._setCursor(this._getSuggestions().first(), !1);
        },
        update: function (e) {
          i.each(this.datasets, function (t) {
            t.update(e);
          });
        },
        empty: function () {
          i.each(this.datasets, function (e) {
            e.clear();
          }),
            (this.isEmpty = !0);
        },
        isVisible: function () {
          return this.isOpen && !this.isEmpty;
        },
        destroy: function () {
          this.$menu.off('.aa'),
            (this.$menu = null),
            i.each(this.datasets, function (e) {
              e.destroy();
            });
        },
      }),
        (u.Dataset = o),
        (e.exports = u);
    },
    47368: (e, t, n) => {
      'use strict';
      var i = n(85670),
        r = n(33855);
      function s(e) {
        (e && e.el) || i.error('EventBus initialized without el'), (this.$el = r.element(e.el));
      }
      i.mixin(s.prototype, {
        trigger: function (e, t, n, r) {
          var s = i.Event('autocomplete:' + e);
          return this.$el.trigger(s, [t, n, r]), s;
        },
      }),
        (e.exports = s);
    },
    6823: (e, t, n) => {
      'use strict';
      var i = n(70624),
        r = /\s+/;
      function s(e, t, n, i) {
        var s;
        if (!n) return this;
        for (
          t = t.split(r),
            n = i
              ? (function (e, t) {
                  return e.bind
                    ? e.bind(t)
                    : function () {
                        e.apply(t, [].slice.call(arguments, 0));
                      };
                })(n, i)
              : n,
            this._callbacks = this._callbacks || {};
          (s = t.shift());

        )
          (this._callbacks[s] = this._callbacks[s] || { sync: [], async: [] }), this._callbacks[s][e].push(n);
        return this;
      }
      function o(e, t, n) {
        return function () {
          for (var i, r = 0, s = e.length; !i && r < s; r += 1) i = !1 === e[r].apply(t, n);
          return !i;
        };
      }
      e.exports = {
        onSync: function (e, t, n) {
          return s.call(this, 'sync', e, t, n);
        },
        onAsync: function (e, t, n) {
          return s.call(this, 'async', e, t, n);
        },
        off: function (e) {
          var t;
          if (!this._callbacks) return this;
          e = e.split(r);
          for (; (t = e.shift()); ) delete this._callbacks[t];
          return this;
        },
        trigger: function (e) {
          var t, n, s, a, u;
          if (!this._callbacks) return this;
          (e = e.split(r)), (s = [].slice.call(arguments, 1));
          for (; (t = e.shift()) && (n = this._callbacks[t]); )
            (a = o(n.sync, this, [t].concat(s))), (u = o(n.async, this, [t].concat(s))), a() && i(u);
          return this;
        },
      };
    },
    26619: (e) => {
      'use strict';
      e.exports = {
        wrapper: '<span class="%ROOT%"></span>',
        dropdown: '<span class="%PREFIX%%DROPDOWN_MENU%"></span>',
        dataset: '<div class="%PREFIX%%DATASET%-%CLASS%"></div>',
        suggestions: '<span class="%PREFIX%%SUGGESTIONS%"></span>',
        suggestion: '<div class="%PREFIX%%SUGGESTION%"></div>',
      };
    },
    21286: (e, t, n) => {
      'use strict';
      var i;
      i = { 9: 'tab', 27: 'esc', 37: 'left', 39: 'right', 13: 'enter', 38: 'up', 40: 'down' };
      var r = n(85670),
        s = n(33855),
        o = n(6823);
      function a(e) {
        var t,
          n,
          o,
          a,
          u,
          c = this;
        (e = e || {}).input || r.error('input is missing'),
          (t = r.bind(this._onBlur, this)),
          (n = r.bind(this._onFocus, this)),
          (o = r.bind(this._onKeydown, this)),
          (a = r.bind(this._onInput, this)),
          (this.$hint = s.element(e.hint)),
          (this.$input = s.element(e.input).on('blur.aa', t).on('focus.aa', n).on('keydown.aa', o)),
          0 === this.$hint.length && (this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = r.noop),
          r.isMsie()
            ? this.$input.on('keydown.aa keypress.aa cut.aa paste.aa', function (e) {
                i[e.which || e.keyCode] || r.defer(r.bind(c._onInput, c, e));
              })
            : this.$input.on('input.aa', a),
          (this.query = this.$input.val()),
          (this.$overflowHelper =
            ((u = this.$input),
            s
              .element('<pre aria-hidden="true"></pre>')
              .css({
                position: 'absolute',
                visibility: 'hidden',
                whiteSpace: 'pre',
                fontFamily: u.css('font-family'),
                fontSize: u.css('font-size'),
                fontStyle: u.css('font-style'),
                fontVariant: u.css('font-variant'),
                fontWeight: u.css('font-weight'),
                wordSpacing: u.css('word-spacing'),
                letterSpacing: u.css('letter-spacing'),
                textIndent: u.css('text-indent'),
                textRendering: u.css('text-rendering'),
                textTransform: u.css('text-transform'),
              })
              .insertAfter(u)));
      }
      function u(e) {
        return e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
      }
      (a.normalizeQuery = function (e) {
        return (e || '').replace(/^\s*/g, '').replace(/\s{2,}/g, ' ');
      }),
        r.mixin(a.prototype, o, {
          _onBlur: function () {
            this.resetInputValue(), this.$input.removeAttr('aria-activedescendant'), this.trigger('blurred');
          },
          _onFocus: function () {
            this.trigger('focused');
          },
          _onKeydown: function (e) {
            var t = i[e.which || e.keyCode];
            this._managePreventDefault(t, e), t && this._shouldTrigger(t, e) && this.trigger(t + 'Keyed', e);
          },
          _onInput: function () {
            this._checkInputValue();
          },
          _managePreventDefault: function (e, t) {
            var n, i, r;
            switch (e) {
              case 'tab':
                (i = this.getHint()), (r = this.getInputValue()), (n = i && i !== r && !u(t));
                break;
              case 'up':
              case 'down':
                n = !u(t);
                break;
              default:
                n = !1;
            }
            n && t.preventDefault();
          },
          _shouldTrigger: function (e, t) {
            var n;
            if ('tab' === e) n = !u(t);
            else n = !0;
            return n;
          },
          _checkInputValue: function () {
            var e, t, n, i, r;
            (e = this.getInputValue()),
              (i = e),
              (r = this.query),
              (n =
                !(!(t = a.normalizeQuery(i) === a.normalizeQuery(r)) || !this.query) && this.query.length !== e.length),
              (this.query = e),
              t ? n && this.trigger('whitespaceChanged', this.query) : this.trigger('queryChanged', this.query);
          },
          focus: function () {
            this.$input.focus();
          },
          blur: function () {
            this.$input.blur();
          },
          getQuery: function () {
            return this.query;
          },
          setQuery: function (e) {
            this.query = e;
          },
          getInputValue: function () {
            return this.$input.val();
          },
          setInputValue: function (e, t) {
            void 0 === e && (e = this.query), this.$input.val(e), t ? this.clearHint() : this._checkInputValue();
          },
          expand: function () {
            this.$input.attr('aria-expanded', 'true');
          },
          collapse: function () {
            this.$input.attr('aria-expanded', 'false');
          },
          setActiveDescendant: function (e) {
            this.$input.attr('aria-activedescendant', e);
          },
          removeActiveDescendant: function () {
            this.$input.removeAttr('aria-activedescendant');
          },
          resetInputValue: function () {
            this.setInputValue(this.query, !0);
          },
          getHint: function () {
            return this.$hint.val();
          },
          setHint: function (e) {
            this.$hint.val(e);
          },
          clearHint: function () {
            this.setHint('');
          },
          clearHintIfInvalid: function () {
            var e, t, n;
            (n = (e = this.getInputValue()) !== (t = this.getHint()) && 0 === t.indexOf(e)),
              ('' !== e && n && !this.hasOverflow()) || this.clearHint();
          },
          getLanguageDirection: function () {
            return (this.$input.css('direction') || 'ltr').toLowerCase();
          },
          hasOverflow: function () {
            var e = this.$input.width() - 2;
            return this.$overflowHelper.text(this.getInputValue()), this.$overflowHelper.width() >= e;
          },
          isCursorAtEnd: function () {
            var e, t, n;
            return (
              (e = this.$input.val().length),
              (t = this.$input[0].selectionStart),
              r.isNumber(t)
                ? t === e
                : !document.selection ||
                  ((n = document.selection.createRange()).moveStart('character', -e), e === n.text.length)
            );
          },
          destroy: function () {
            this.$hint.off('.aa'), this.$input.off('.aa'), (this.$hint = this.$input = this.$overflowHelper = null);
          },
        }),
        (e.exports = a);
    },
    4520: (e, t, n) => {
      'use strict';
      var i = 'aaAttrs',
        r = n(85670),
        s = n(33855),
        o = n(47368),
        a = n(21286),
        u = n(35445),
        c = n(26619),
        l = n(47114);
      function h(e) {
        var t, n;
        if (
          ((e = e || {}).input || r.error('missing input'),
          (this.isActivated = !1),
          (this.debug = !!e.debug),
          (this.autoselect = !!e.autoselect),
          (this.autoselectOnBlur = !!e.autoselectOnBlur),
          (this.openOnFocus = !!e.openOnFocus),
          (this.minLength = r.isNumber(e.minLength) ? e.minLength : 1),
          (this.autoWidth = void 0 === e.autoWidth || !!e.autoWidth),
          (this.clearOnSelected = !!e.clearOnSelected),
          (this.tabAutocomplete = void 0 === e.tabAutocomplete || !!e.tabAutocomplete),
          (e.hint = !!e.hint),
          e.hint && e.appendTo)
        )
          throw new Error("[autocomplete.js] hint and appendTo options can't be used at the same time");
        (this.css = e.css = r.mixin({}, l, e.appendTo ? l.appendTo : {})),
          (this.cssClasses = e.cssClasses = r.mixin({}, l.defaultClasses, e.cssClasses || {})),
          (this.cssClasses.prefix = e.cssClasses.formattedPrefix =
            r.formatPrefix(this.cssClasses.prefix, this.cssClasses.noPrefix)),
          (this.listboxId = e.listboxId = [this.cssClasses.root, 'listbox', r.getUniqueId()].join('-'));
        var a = (function (e) {
          var t, n, o, a;
          (t = s.element(e.input)),
            (n = s.element(c.wrapper.replace('%ROOT%', e.cssClasses.root)).css(e.css.wrapper)),
            e.appendTo ||
              'block' !== t.css('display') ||
              'table' !== t.parent().css('display') ||
              n.css('display', 'table-cell');
          var u = c.dropdown
            .replace('%PREFIX%', e.cssClasses.prefix)
            .replace('%DROPDOWN_MENU%', e.cssClasses.dropdownMenu);
          (o = s.element(u).css(e.css.dropdown).attr({ role: 'listbox', id: e.listboxId })),
            e.templates && e.templates.dropdownMenu && o.html(r.templatify(e.templates.dropdownMenu)());
          (a = t
            .clone()
            .css(e.css.hint)
            .css(
              (function (e) {
                return {
                  backgroundAttachment: e.css('background-attachment'),
                  backgroundClip: e.css('background-clip'),
                  backgroundColor: e.css('background-color'),
                  backgroundImage: e.css('background-image'),
                  backgroundOrigin: e.css('background-origin'),
                  backgroundPosition: e.css('background-position'),
                  backgroundRepeat: e.css('background-repeat'),
                  backgroundSize: e.css('background-size'),
                };
              })(t)
            )),
            a
              .val('')
              .addClass(r.className(e.cssClasses.prefix, e.cssClasses.hint, !0))
              .removeAttr('id name placeholder required')
              .prop('readonly', !0)
              .attr({ 'aria-hidden': 'true', autocomplete: 'off', spellcheck: 'false', tabindex: -1 }),
            a.removeData && a.removeData();
          t.data(i, {
            'aria-autocomplete': t.attr('aria-autocomplete'),
            'aria-expanded': t.attr('aria-expanded'),
            'aria-owns': t.attr('aria-owns'),
            autocomplete: t.attr('autocomplete'),
            dir: t.attr('dir'),
            role: t.attr('role'),
            spellcheck: t.attr('spellcheck'),
            style: t.attr('style'),
            type: t.attr('type'),
          }),
            t
              .addClass(r.className(e.cssClasses.prefix, e.cssClasses.input, !0))
              .attr({
                autocomplete: 'off',
                spellcheck: !1,
                role: 'combobox',
                'aria-autocomplete': e.datasets && e.datasets[0] && e.datasets[0].displayKey ? 'both' : 'list',
                'aria-expanded': 'false',
                'aria-label': e.ariaLabel,
                'aria-owns': e.listboxId,
              })
              .css(e.hint ? e.css.input : e.css.inputWithNoHint);
          try {
            t.attr('dir') || t.attr('dir', 'auto');
          } catch (l) {}
          return (
            (n = e.appendTo ? n.appendTo(s.element(e.appendTo).eq(0)).eq(0) : t.wrap(n).parent()),
            n.prepend(e.hint ? a : null).append(o),
            { wrapper: n, input: t, hint: a, menu: o }
          );
        })(e);
        this.$node = a.wrapper;
        var u = (this.$input = a.input);
        (t = a.menu),
          (n = a.hint),
          e.dropdownMenuContainer &&
            s.element(e.dropdownMenuContainer).css('position', 'relative').append(t.css('top', '0')),
          u.on('blur.aa', function (e) {
            var n = document.activeElement;
            r.isMsie() &&
              (t[0] === n || t[0].contains(n)) &&
              (e.preventDefault(),
              e.stopImmediatePropagation(),
              r.defer(function () {
                u.focus();
              }));
          }),
          t.on('mousedown.aa', function (e) {
            e.preventDefault();
          }),
          (this.eventBus = e.eventBus || new o({ el: u })),
          (this.dropdown = new h.Dropdown({
            appendTo: e.appendTo,
            wrapper: this.$node,
            menu: t,
            datasets: e.datasets,
            templates: e.templates,
            cssClasses: e.cssClasses,
            minLength: this.minLength,
          })
            .onSync('suggestionClicked', this._onSuggestionClicked, this)
            .onSync('cursorMoved', this._onCursorMoved, this)
            .onSync('cursorRemoved', this._onCursorRemoved, this)
            .onSync('opened', this._onOpened, this)
            .onSync('closed', this._onClosed, this)
            .onSync('shown', this._onShown, this)
            .onSync('empty', this._onEmpty, this)
            .onSync('redrawn', this._onRedrawn, this)
            .onAsync('datasetRendered', this._onDatasetRendered, this)),
          (this.input = new h.Input({ input: u, hint: n })
            .onSync('focused', this._onFocused, this)
            .onSync('blurred', this._onBlurred, this)
            .onSync('enterKeyed', this._onEnterKeyed, this)
            .onSync('tabKeyed', this._onTabKeyed, this)
            .onSync('escKeyed', this._onEscKeyed, this)
            .onSync('upKeyed', this._onUpKeyed, this)
            .onSync('downKeyed', this._onDownKeyed, this)
            .onSync('leftKeyed', this._onLeftKeyed, this)
            .onSync('rightKeyed', this._onRightKeyed, this)
            .onSync('queryChanged', this._onQueryChanged, this)
            .onSync('whitespaceChanged', this._onWhitespaceChanged, this)),
          this._bindKeyboardShortcuts(e),
          this._setLanguageDirection();
      }
      r.mixin(h.prototype, {
        _bindKeyboardShortcuts: function (e) {
          if (e.keyboardShortcuts) {
            var t = this.$input,
              n = [];
            r.each(e.keyboardShortcuts, function (e) {
              'string' == typeof e && (e = e.toUpperCase().charCodeAt(0)), n.push(e);
            }),
              s.element(document).keydown(function (e) {
                var i = e.target || e.srcElement,
                  r = i.tagName;
                if (!i.isContentEditable && 'INPUT' !== r && 'SELECT' !== r && 'TEXTAREA' !== r) {
                  var s = e.which || e.keyCode;
                  -1 !== n.indexOf(s) && (t.focus(), e.stopPropagation(), e.preventDefault());
                }
              });
          }
        },
        _onSuggestionClicked: function (e, t) {
          var n;
          (n = this.dropdown.getDatumForSuggestion(t)) && this._select(n, { selectionMethod: 'click' });
        },
        _onCursorMoved: function (e, t) {
          var n = this.dropdown.getDatumForCursor(),
            i = this.dropdown.getCurrentCursor().attr('id');
          this.input.setActiveDescendant(i),
            n &&
              (t && this.input.setInputValue(n.value, !0),
              this.eventBus.trigger('cursorchanged', n.raw, n.datasetName));
        },
        _onCursorRemoved: function () {
          this.input.resetInputValue(), this._updateHint(), this.eventBus.trigger('cursorremoved');
        },
        _onDatasetRendered: function () {
          this._updateHint(), this.eventBus.trigger('updated');
        },
        _onOpened: function () {
          this._updateHint(), this.input.expand(), this.eventBus.trigger('opened');
        },
        _onEmpty: function () {
          this.eventBus.trigger('empty');
        },
        _onRedrawn: function () {
          this.$node.css('top', '0px'), this.$node.css('left', '0px');
          var e = this.$input[0].getBoundingClientRect();
          this.autoWidth && this.$node.css('width', e.width + 'px');
          var t = this.$node[0].getBoundingClientRect(),
            n = e.bottom - t.top;
          this.$node.css('top', n + 'px');
          var i = e.left - t.left;
          this.$node.css('left', i + 'px'), this.eventBus.trigger('redrawn');
        },
        _onShown: function () {
          this.eventBus.trigger('shown'), this.autoselect && this.dropdown.cursorTopSuggestion();
        },
        _onClosed: function () {
          this.input.clearHint(),
            this.input.removeActiveDescendant(),
            this.input.collapse(),
            this.eventBus.trigger('closed');
        },
        _onFocused: function () {
          if (((this.isActivated = !0), this.openOnFocus)) {
            var e = this.input.getQuery();
            e.length >= this.minLength ? this.dropdown.update(e) : this.dropdown.empty(), this.dropdown.open();
          }
        },
        _onBlurred: function () {
          var e, t;
          (e = this.dropdown.getDatumForCursor()), (t = this.dropdown.getDatumForTopSuggestion());
          var n = { selectionMethod: 'blur' };
          this.debug ||
            (this.autoselectOnBlur && e
              ? this._select(e, n)
              : this.autoselectOnBlur && t
              ? this._select(t, n)
              : ((this.isActivated = !1), this.dropdown.empty(), this.dropdown.close()));
        },
        _onEnterKeyed: function (e, t) {
          var n, i;
          (n = this.dropdown.getDatumForCursor()), (i = this.dropdown.getDatumForTopSuggestion());
          var r = { selectionMethod: 'enterKey' };
          n
            ? (this._select(n, r), t.preventDefault())
            : this.autoselect && i && (this._select(i, r), t.preventDefault());
        },
        _onTabKeyed: function (e, t) {
          if (this.tabAutocomplete) {
            var n;
            (n = this.dropdown.getDatumForCursor())
              ? (this._select(n, { selectionMethod: 'tabKey' }), t.preventDefault())
              : this._autocomplete(!0);
          } else this.dropdown.close();
        },
        _onEscKeyed: function () {
          this.dropdown.close(), this.input.resetInputValue();
        },
        _onUpKeyed: function () {
          var e = this.input.getQuery();
          this.dropdown.isEmpty && e.length >= this.minLength ? this.dropdown.update(e) : this.dropdown.moveCursorUp(),
            this.dropdown.open();
        },
        _onDownKeyed: function () {
          var e = this.input.getQuery();
          this.dropdown.isEmpty && e.length >= this.minLength
            ? this.dropdown.update(e)
            : this.dropdown.moveCursorDown(),
            this.dropdown.open();
        },
        _onLeftKeyed: function () {
          'rtl' === this.dir && this._autocomplete();
        },
        _onRightKeyed: function () {
          'ltr' === this.dir && this._autocomplete();
        },
        _onQueryChanged: function (e, t) {
          this.input.clearHintIfInvalid(),
            t.length >= this.minLength ? this.dropdown.update(t) : this.dropdown.empty(),
            this.dropdown.open(),
            this._setLanguageDirection();
        },
        _onWhitespaceChanged: function () {
          this._updateHint(), this.dropdown.open();
        },
        _setLanguageDirection: function () {
          var e = this.input.getLanguageDirection();
          this.dir !== e && ((this.dir = e), this.$node.css('direction', e), this.dropdown.setLanguageDirection(e));
        },
        _updateHint: function () {
          var e, t, n, i, s;
          (e = this.dropdown.getDatumForTopSuggestion()) && this.dropdown.isVisible() && !this.input.hasOverflow()
            ? ((t = this.input.getInputValue()),
              (n = a.normalizeQuery(t)),
              (i = r.escapeRegExChars(n)),
              (s = new RegExp('^(?:' + i + ')(.+$)', 'i').exec(e.value))
                ? this.input.setHint(t + s[1])
                : this.input.clearHint())
            : this.input.clearHint();
        },
        _autocomplete: function (e) {
          var t, n, i, r;
          (t = this.input.getHint()),
            (n = this.input.getQuery()),
            (i = e || this.input.isCursorAtEnd()),
            t &&
              n !== t &&
              i &&
              ((r = this.dropdown.getDatumForTopSuggestion()) && this.input.setInputValue(r.value),
              this.eventBus.trigger('autocompleted', r.raw, r.datasetName));
        },
        _select: function (e, t) {
          void 0 !== e.value && this.input.setQuery(e.value),
            this.clearOnSelected ? this.setVal('') : this.input.setInputValue(e.value, !0),
            this._setLanguageDirection(),
            !1 === this.eventBus.trigger('selected', e.raw, e.datasetName, t).isDefaultPrevented() &&
              (this.dropdown.close(), r.defer(r.bind(this.dropdown.empty, this.dropdown)));
        },
        open: function () {
          if (!this.isActivated) {
            var e = this.input.getInputValue();
            e.length >= this.minLength ? this.dropdown.update(e) : this.dropdown.empty();
          }
          this.dropdown.open();
        },
        close: function () {
          this.dropdown.close();
        },
        setVal: function (e) {
          (e = r.toStr(e)),
            this.isActivated ? this.input.setInputValue(e) : (this.input.setQuery(e), this.input.setInputValue(e, !0)),
            this._setLanguageDirection();
        },
        getVal: function () {
          return this.input.getQuery();
        },
        destroy: function () {
          this.input.destroy(),
            this.dropdown.destroy(),
            (function (e, t) {
              var n = e.find(r.className(t.prefix, t.input));
              r.each(n.data(i), function (e, t) {
                void 0 === e ? n.removeAttr(t) : n.attr(t, e);
              }),
                n.detach().removeClass(r.className(t.prefix, t.input, !0)).insertAfter(e),
                n.removeData && n.removeData(i);
              e.remove();
            })(this.$node, this.cssClasses),
            (this.$node = null);
        },
        getWrapper: function () {
          return this.dropdown.$container[0];
        },
      }),
        (h.Dropdown = u),
        (h.Input = a),
        (h.sources = n(86331)),
        (e.exports = h);
    },
    33855: (e) => {
      'use strict';
      e.exports = { element: null };
    },
    22926: (e) => {
      'use strict';
      e.exports = function (e) {
        var t =
          e.match(/Algolia for JavaScript \((\d+\.)(\d+\.)(\d+)\)/) ||
          e.match(/Algolia for vanilla JavaScript (\d+\.)(\d+\.)(\d+)/);
        if (t) return [t[1], t[2], t[3]];
      };
    },
    85670: (e, t, n) => {
      'use strict';
      var i,
        r = n(33855);
      function s(e) {
        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
      }
      e.exports = {
        isArray: null,
        isFunction: null,
        isObject: null,
        bind: null,
        each: null,
        map: null,
        mixin: null,
        isMsie: function (e) {
          if ((void 0 === e && (e = navigator.userAgent), /(msie|trident)/i.test(e))) {
            var t = e.match(/(msie |rv:)(\d+(.\d+)?)/i);
            if (t) return t[2];
          }
          return !1;
        },
        escapeRegExChars: function (e) {
          return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
        },
        isNumber: function (e) {
          return 'number' == typeof e;
        },
        toStr: function (e) {
          return null == e ? '' : e + '';
        },
        cloneDeep: function (e) {
          var t = this.mixin({}, e),
            n = this;
          return (
            this.each(t, function (e, i) {
              e && (n.isArray(e) ? (t[i] = [].concat(e)) : n.isObject(e) && (t[i] = n.cloneDeep(e)));
            }),
            t
          );
        },
        error: function (e) {
          throw new Error(e);
        },
        every: function (e, t) {
          var n = !0;
          return e
            ? (this.each(e, function (i, r) {
                n && (n = t.call(null, i, r, e) && n);
              }),
              !!n)
            : n;
        },
        any: function (e, t) {
          var n = !1;
          return e
            ? (this.each(e, function (i, r) {
                if (t.call(null, i, r, e)) return (n = !0), !1;
              }),
              n)
            : n;
        },
        getUniqueId:
          ((i = 0),
          function () {
            return i++;
          }),
        templatify: function (e) {
          if (this.isFunction(e)) return e;
          var t = r.element(e);
          return 'SCRIPT' === t.prop('tagName')
            ? function () {
                return t.text();
              }
            : function () {
                return String(e);
              };
        },
        defer: function (e) {
          setTimeout(e, 0);
        },
        noop: function () {},
        formatPrefix: function (e, t) {
          return t ? '' : e + '-';
        },
        className: function (e, t, n) {
          return (n ? '' : '.') + e + t;
        },
        escapeHighlightedString: function (e, t, n) {
          t = t || '<em>';
          var i = document.createElement('div');
          i.appendChild(document.createTextNode(t)), (n = n || '</em>');
          var r = document.createElement('div');
          r.appendChild(document.createTextNode(n));
          var o = document.createElement('div');
          return (
            o.appendChild(document.createTextNode(e)),
            o.innerHTML.replace(RegExp(s(i.innerHTML), 'g'), t).replace(RegExp(s(r.innerHTML), 'g'), n)
          );
        },
      };
    },
    42683: (e, t, n) => {
      'use strict';
      var i = n(85670),
        r = n(93489),
        s = n(22926);
      e.exports = function (e, t) {
        var n = s(e.as._ua);
        return (
          n && n[0] >= 3 && n[1] > 20 && ((t = t || {}).additionalUA = 'autocomplete.js ' + r),
          function (n, r) {
            e.search(n, t, function (e, t) {
              e ? i.error(e.message) : r(t.hits, t);
            });
          }
        );
      };
    },
    86331: (e, t, n) => {
      'use strict';
      e.exports = { hits: n(42683), popularIn: n(82226) };
    },
    82226: (e, t, n) => {
      'use strict';
      var i = n(85670),
        r = n(93489),
        s = n(22926);
      e.exports = function (e, t, n, o) {
        var a = s(e.as._ua);
        if ((a && a[0] >= 3 && a[1] > 20 && ((t = t || {}).additionalUA = 'autocomplete.js ' + r), !n.source))
          return i.error("Missing 'source' key");
        var u = i.isFunction(n.source)
          ? n.source
          : function (e) {
              return e[n.source];
            };
        if (!n.index) return i.error("Missing 'index' key");
        var c = n.index;
        return (
          (o = o || {}),
          function (a, l) {
            e.search(a, t, function (e, a) {
              if (e) i.error(e.message);
              else {
                if (a.hits.length > 0) {
                  var h = a.hits[0],
                    p = i.mixin({ hitsPerPage: 0 }, n);
                  delete p.source, delete p.index;
                  var f = s(c.as._ua);
                  return (
                    f && f[0] >= 3 && f[1] > 20 && (t.additionalUA = 'autocomplete.js ' + r),
                    void c.search(u(h), p, function (e, t) {
                      if (e) i.error(e.message);
                      else {
                        var n = [];
                        if (o.includeAll) {
                          var r = o.allTitle || 'All departments';
                          n.push(i.mixin({ facet: { value: r, count: t.nbHits } }, i.cloneDeep(h)));
                        }
                        i.each(t.facets, function (e, t) {
                          i.each(e, function (e, r) {
                            n.push(i.mixin({ facet: { facet: t, value: r, count: e } }, i.cloneDeep(h)));
                          });
                        });
                        for (var s = 1; s < a.hits.length; ++s) n.push(a.hits[s]);
                        l(n, a);
                      }
                    })
                  );
                }
                l([]);
              }
            });
          }
        );
      };
    },
    29281: (e, t, n) => {
      'use strict';
      var i = n(7939);
      n(33855).element = i;
      var r = n(85670);
      (r.isArray = i.isArray),
        (r.isFunction = i.isFunction),
        (r.isObject = i.isPlainObject),
        (r.bind = i.proxy),
        (r.each = function (e, t) {
          i.each(e, function (e, n) {
            return t(n, e);
          });
        }),
        (r.map = i.map),
        (r.mixin = i.extend),
        (r.Event = i.Event);
      var s = 'aaAutocomplete',
        o = n(4520),
        a = n(47368);
      function u(e, t, n, u) {
        n = r.isArray(n) ? n : [].slice.call(arguments, 2);
        var c = i(e).each(function (e, r) {
          var c = i(r),
            l = new a({ el: c }),
            h =
              u ||
              new o({
                input: c,
                eventBus: l,
                dropdownMenuContainer: t.dropdownMenuContainer,
                hint: void 0 === t.hint || !!t.hint,
                minLength: t.minLength,
                autoselect: t.autoselect,
                autoselectOnBlur: t.autoselectOnBlur,
                tabAutocomplete: t.tabAutocomplete,
                openOnFocus: t.openOnFocus,
                templates: t.templates,
                debug: t.debug,
                clearOnSelected: t.clearOnSelected,
                cssClasses: t.cssClasses,
                datasets: n,
                keyboardShortcuts: t.keyboardShortcuts,
                appendTo: t.appendTo,
                autoWidth: t.autoWidth,
                ariaLabel: t.ariaLabel || r.getAttribute('aria-label'),
              });
          c.data(s, h);
        });
        return (
          (c.autocomplete = {}),
          r.each(['open', 'close', 'getVal', 'setVal', 'destroy', 'getWrapper'], function (e) {
            c.autocomplete[e] = function () {
              var t,
                n = arguments;
              return (
                c.each(function (r, o) {
                  var a = i(o).data(s);
                  t = a[e].apply(a, n);
                }),
                t
              );
            };
          }),
          c
        );
      }
      (u.sources = o.sources), (u.escapeHighlightedString = r.escapeHighlightedString);
      var c = 'autocomplete' in window,
        l = window.autocomplete;
      (u.noConflict = function () {
        return c ? (window.autocomplete = l) : delete window.autocomplete, u;
      }),
        (e.exports = u);
    },
    93489: (e) => {
      e.exports = '0.37.1';
    },
    7939: (e) => {
      var t;
      (t = window),
        (e.exports = (function (e) {
          var t,
            n,
            i = (function () {
              var t,
                n,
                i,
                r,
                s,
                o,
                a = [],
                u = a.concat,
                c = a.filter,
                l = a.slice,
                h = e.document,
                p = {},
                f = {},
                d = {
                  'column-count': 1,
                  columns: 1,
                  'font-weight': 1,
                  'line-height': 1,
                  opacity: 1,
                  'z-index': 1,
                  zoom: 1,
                },
                g = /^\s*<(\w+|!)[^>]*>/,
                m = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
                y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
                v = /^(?:body|html)$/i,
                x = /([A-Z])/g,
                w = ['val', 'css', 'html', 'text', 'data', 'width', 'height', 'offset'],
                b = ['after', 'prepend', 'before', 'append'],
                S = h.createElement('table'),
                C = h.createElement('tr'),
                E = {
                  tr: h.createElement('tbody'),
                  tbody: S,
                  thead: S,
                  tfoot: S,
                  td: C,
                  th: C,
                  '*': h.createElement('div'),
                },
                k = /complete|loaded|interactive/,
                T = /^[\w-]*$/,
                _ = {},
                O = _.toString,
                A = {},
                P = h.createElement('div'),
                L = {
                  tabindex: 'tabIndex',
                  readonly: 'readOnly',
                  for: 'htmlFor',
                  class: 'className',
                  maxlength: 'maxLength',
                  cellspacing: 'cellSpacing',
                  cellpadding: 'cellPadding',
                  rowspan: 'rowSpan',
                  colspan: 'colSpan',
                  usemap: 'useMap',
                  frameborder: 'frameBorder',
                  contenteditable: 'contentEditable',
                },
                Q =
                  Array.isArray ||
                  function (e) {
                    return e instanceof Array;
                  };
              function I(e) {
                return null == e ? String(e) : _[O.call(e)] || 'object';
              }
              function N(e) {
                return 'function' == I(e);
              }
              function $(e) {
                return null != e && e == e.window;
              }
              function D(e) {
                return null != e && e.nodeType == e.DOCUMENT_NODE;
              }
              function R(e) {
                return 'object' == I(e);
              }
              function F(e) {
                return R(e) && !$(e) && Object.getPrototypeOf(e) == Object.prototype;
              }
              function j(e) {
                var t = !!e && 'length' in e && e.length,
                  n = i.type(e);
                return (
                  'function' != n && !$(e) && ('array' == n || 0 === t || ('number' == typeof t && t > 0 && t - 1 in e))
                );
              }
              function M(e) {
                return c.call(e, function (e) {
                  return null != e;
                });
              }
              function V(e) {
                return e.length > 0 ? i.fn.concat.apply([], e) : e;
              }
              function B(e) {
                return e
                  .replace(/::/g, '/')
                  .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
                  .replace(/([a-z\d])([A-Z])/g, '$1_$2')
                  .replace(/_/g, '-')
                  .toLowerCase();
              }
              function q(e) {
                return e in f ? f[e] : (f[e] = new RegExp('(^|\\s)' + e + '(\\s|$)'));
              }
              function z(e, t) {
                return 'number' != typeof t || d[B(e)] ? t : t + 'px';
              }
              function H(e) {
                var t, n;
                return (
                  p[e] ||
                    ((t = h.createElement(e)),
                    h.body.appendChild(t),
                    (n = getComputedStyle(t, '').getPropertyValue('display')),
                    t.parentNode.removeChild(t),
                    'none' == n && (n = 'block'),
                    (p[e] = n)),
                  p[e]
                );
              }
              function K(e) {
                return 'children' in e
                  ? l.call(e.children)
                  : i.map(e.childNodes, function (e) {
                      if (1 == e.nodeType) return e;
                    });
              }
              function W(e, t) {
                var n,
                  i = e ? e.length : 0;
                for (n = 0; n < i; n++) this[n] = e[n];
                (this.length = i), (this.selector = t || '');
              }
              function U(e, i, r) {
                for (n in i)
                  r && (F(i[n]) || Q(i[n]))
                    ? (F(i[n]) && !F(e[n]) && (e[n] = {}), Q(i[n]) && !Q(e[n]) && (e[n] = []), U(e[n], i[n], r))
                    : i[n] !== t && (e[n] = i[n]);
              }
              function G(e, t) {
                return null == t ? i(e) : i(e).filter(t);
              }
              function Z(e, t, n, i) {
                return N(t) ? t.call(e, n, i) : t;
              }
              function X(e, t, n) {
                null == n ? e.removeAttribute(t) : e.setAttribute(t, n);
              }
              function J(e, n) {
                var i = e.className || '',
                  r = i && i.baseVal !== t;
                if (n === t) return r ? i.baseVal : i;
                r ? (i.baseVal = n) : (e.className = n);
              }
              function Y(e) {
                try {
                  return e
                    ? 'true' == e ||
                        ('false' != e &&
                          ('null' == e ? null : +e + '' == e ? +e : /^[\[\{]/.test(e) ? i.parseJSON(e) : e))
                    : e;
                } catch (t) {
                  return e;
                }
              }
              function ee(e, t) {
                t(e);
                for (var n = 0, i = e.childNodes.length; n < i; n++) ee(e.childNodes[n], t);
              }
              return (
                (A.matches = function (e, t) {
                  if (!t || !e || 1 !== e.nodeType) return !1;
                  var n =
                    e.matches ||
                    e.webkitMatchesSelector ||
                    e.mozMatchesSelector ||
                    e.oMatchesSelector ||
                    e.matchesSelector;
                  if (n) return n.call(e, t);
                  var i,
                    r = e.parentNode,
                    s = !r;
                  return s && (r = P).appendChild(e), (i = ~A.qsa(r, t).indexOf(e)), s && P.removeChild(e), i;
                }),
                (s = function (e) {
                  return e.replace(/-+(.)?/g, function (e, t) {
                    return t ? t.toUpperCase() : '';
                  });
                }),
                (o = function (e) {
                  return c.call(e, function (t, n) {
                    return e.indexOf(t) == n;
                  });
                }),
                (A.fragment = function (e, n, r) {
                  var s, o, a;
                  return (
                    m.test(e) && (s = i(h.createElement(RegExp.$1))),
                    s ||
                      (e.replace && (e = e.replace(y, '<$1></$2>')),
                      n === t && (n = g.test(e) && RegExp.$1),
                      n in E || (n = '*'),
                      ((a = E[n]).innerHTML = '' + e),
                      (s = i.each(l.call(a.childNodes), function () {
                        a.removeChild(this);
                      }))),
                    F(r) &&
                      ((o = i(s)),
                      i.each(r, function (e, t) {
                        w.indexOf(e) > -1 ? o[e](t) : o.attr(e, t);
                      })),
                    s
                  );
                }),
                (A.Z = function (e, t) {
                  return new W(e, t);
                }),
                (A.isZ = function (e) {
                  return e instanceof A.Z;
                }),
                (A.init = function (e, n) {
                  var r;
                  if (!e) return A.Z();
                  if ('string' == typeof e)
                    if ('<' == (e = e.trim())[0] && g.test(e)) (r = A.fragment(e, RegExp.$1, n)), (e = null);
                    else {
                      if (n !== t) return i(n).find(e);
                      r = A.qsa(h, e);
                    }
                  else {
                    if (N(e)) return i(h).ready(e);
                    if (A.isZ(e)) return e;
                    if (Q(e)) r = M(e);
                    else if (R(e)) (r = [e]), (e = null);
                    else if (g.test(e)) (r = A.fragment(e.trim(), RegExp.$1, n)), (e = null);
                    else {
                      if (n !== t) return i(n).find(e);
                      r = A.qsa(h, e);
                    }
                  }
                  return A.Z(r, e);
                }),
                ((i = function (e, t) {
                  return A.init(e, t);
                }).extend = function (e) {
                  var t,
                    n = l.call(arguments, 1);
                  return (
                    'boolean' == typeof e && ((t = e), (e = n.shift())),
                    n.forEach(function (n) {
                      U(e, n, t);
                    }),
                    e
                  );
                }),
                (A.qsa = function (e, t) {
                  var n,
                    i = '#' == t[0],
                    r = !i && '.' == t[0],
                    s = i || r ? t.slice(1) : t,
                    o = T.test(s);
                  return e.getElementById && o && i
                    ? (n = e.getElementById(s))
                      ? [n]
                      : []
                    : 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType
                    ? []
                    : l.call(
                        o && !i && e.getElementsByClassName
                          ? r
                            ? e.getElementsByClassName(s)
                            : e.getElementsByTagName(t)
                          : e.querySelectorAll(t)
                      );
                }),
                (i.contains = h.documentElement.contains
                  ? function (e, t) {
                      return e !== t && e.contains(t);
                    }
                  : function (e, t) {
                      for (; t && (t = t.parentNode); ) if (t === e) return !0;
                      return !1;
                    }),
                (i.type = I),
                (i.isFunction = N),
                (i.isWindow = $),
                (i.isArray = Q),
                (i.isPlainObject = F),
                (i.isEmptyObject = function (e) {
                  var t;
                  for (t in e) return !1;
                  return !0;
                }),
                (i.isNumeric = function (e) {
                  var t = Number(e),
                    n = typeof e;
                  return (null != e && 'boolean' != n && ('string' != n || e.length) && !isNaN(t) && isFinite(t)) || !1;
                }),
                (i.inArray = function (e, t, n) {
                  return a.indexOf.call(t, e, n);
                }),
                (i.camelCase = s),
                (i.trim = function (e) {
                  return null == e ? '' : String.prototype.trim.call(e);
                }),
                (i.uuid = 0),
                (i.support = {}),
                (i.expr = {}),
                (i.noop = function () {}),
                (i.map = function (e, t) {
                  var n,
                    i,
                    r,
                    s = [];
                  if (j(e)) for (i = 0; i < e.length; i++) null != (n = t(e[i], i)) && s.push(n);
                  else for (r in e) null != (n = t(e[r], r)) && s.push(n);
                  return V(s);
                }),
                (i.each = function (e, t) {
                  var n, i;
                  if (j(e)) {
                    for (n = 0; n < e.length; n++) if (!1 === t.call(e[n], n, e[n])) return e;
                  } else for (i in e) if (!1 === t.call(e[i], i, e[i])) return e;
                  return e;
                }),
                (i.grep = function (e, t) {
                  return c.call(e, t);
                }),
                e.JSON && (i.parseJSON = JSON.parse),
                i.each('Boolean Number String Function Array Date RegExp Object Error'.split(' '), function (e, t) {
                  _['[object ' + t + ']'] = t.toLowerCase();
                }),
                (i.fn = {
                  constructor: A.Z,
                  length: 0,
                  forEach: a.forEach,
                  reduce: a.reduce,
                  push: a.push,
                  sort: a.sort,
                  splice: a.splice,
                  indexOf: a.indexOf,
                  concat: function () {
                    var e,
                      t,
                      n = [];
                    for (e = 0; e < arguments.length; e++) (t = arguments[e]), (n[e] = A.isZ(t) ? t.toArray() : t);
                    return u.apply(A.isZ(this) ? this.toArray() : this, n);
                  },
                  map: function (e) {
                    return i(
                      i.map(this, function (t, n) {
                        return e.call(t, n, t);
                      })
                    );
                  },
                  slice: function () {
                    return i(l.apply(this, arguments));
                  },
                  ready: function (e) {
                    return (
                      k.test(h.readyState) && h.body
                        ? e(i)
                        : h.addEventListener(
                            'DOMContentLoaded',
                            function () {
                              e(i);
                            },
                            !1
                          ),
                      this
                    );
                  },
                  get: function (e) {
                    return e === t ? l.call(this) : this[e >= 0 ? e : e + this.length];
                  },
                  toArray: function () {
                    return this.get();
                  },
                  size: function () {
                    return this.length;
                  },
                  remove: function () {
                    return this.each(function () {
                      null != this.parentNode && this.parentNode.removeChild(this);
                    });
                  },
                  each: function (e) {
                    return (
                      a.every.call(this, function (t, n) {
                        return !1 !== e.call(t, n, t);
                      }),
                      this
                    );
                  },
                  filter: function (e) {
                    return N(e)
                      ? this.not(this.not(e))
                      : i(
                          c.call(this, function (t) {
                            return A.matches(t, e);
                          })
                        );
                  },
                  add: function (e, t) {
                    return i(o(this.concat(i(e, t))));
                  },
                  is: function (e) {
                    return this.length > 0 && A.matches(this[0], e);
                  },
                  not: function (e) {
                    var n = [];
                    if (N(e) && e.call !== t)
                      this.each(function (t) {
                        e.call(this, t) || n.push(this);
                      });
                    else {
                      var r = 'string' == typeof e ? this.filter(e) : j(e) && N(e.item) ? l.call(e) : i(e);
                      this.forEach(function (e) {
                        r.indexOf(e) < 0 && n.push(e);
                      });
                    }
                    return i(n);
                  },
                  has: function (e) {
                    return this.filter(function () {
                      return R(e) ? i.contains(this, e) : i(this).find(e).size();
                    });
                  },
                  eq: function (e) {
                    return -1 === e ? this.slice(e) : this.slice(e, +e + 1);
                  },
                  first: function () {
                    var e = this[0];
                    return e && !R(e) ? e : i(e);
                  },
                  last: function () {
                    var e = this[this.length - 1];
                    return e && !R(e) ? e : i(e);
                  },
                  find: function (e) {
                    var t = this;
                    return e
                      ? 'object' == typeof e
                        ? i(e).filter(function () {
                            var e = this;
                            return a.some.call(t, function (t) {
                              return i.contains(t, e);
                            });
                          })
                        : 1 == this.length
                        ? i(A.qsa(this[0], e))
                        : this.map(function () {
                            return A.qsa(this, e);
                          })
                      : i();
                  },
                  closest: function (e, t) {
                    var n = [],
                      r = 'object' == typeof e && i(e);
                    return (
                      this.each(function (i, s) {
                        for (; s && !(r ? r.indexOf(s) >= 0 : A.matches(s, e)); ) s = s !== t && !D(s) && s.parentNode;
                        s && n.indexOf(s) < 0 && n.push(s);
                      }),
                      i(n)
                    );
                  },
                  parents: function (e) {
                    for (var t = [], n = this; n.length > 0; )
                      n = i.map(n, function (e) {
                        if ((e = e.parentNode) && !D(e) && t.indexOf(e) < 0) return t.push(e), e;
                      });
                    return G(t, e);
                  },
                  parent: function (e) {
                    return G(o(this.pluck('parentNode')), e);
                  },
                  children: function (e) {
                    return G(
                      this.map(function () {
                        return K(this);
                      }),
                      e
                    );
                  },
                  contents: function () {
                    return this.map(function () {
                      return this.contentDocument || l.call(this.childNodes);
                    });
                  },
                  siblings: function (e) {
                    return G(
                      this.map(function (e, t) {
                        return c.call(K(t.parentNode), function (e) {
                          return e !== t;
                        });
                      }),
                      e
                    );
                  },
                  empty: function () {
                    return this.each(function () {
                      this.innerHTML = '';
                    });
                  },
                  pluck: function (e) {
                    return i.map(this, function (t) {
                      return t[e];
                    });
                  },
                  show: function () {
                    return this.each(function () {
                      'none' == this.style.display && (this.style.display = ''),
                        'none' == getComputedStyle(this, '').getPropertyValue('display') &&
                          (this.style.display = H(this.nodeName));
                    });
                  },
                  replaceWith: function (e) {
                    return this.before(e).remove();
                  },
                  wrap: function (e) {
                    var t = N(e);
                    if (this[0] && !t)
                      var n = i(e).get(0),
                        r = n.parentNode || this.length > 1;
                    return this.each(function (s) {
                      i(this).wrapAll(t ? e.call(this, s) : r ? n.cloneNode(!0) : n);
                    });
                  },
                  wrapAll: function (e) {
                    if (this[0]) {
                      var t;
                      for (i(this[0]).before((e = i(e))); (t = e.children()).length; ) e = t.first();
                      i(e).append(this);
                    }
                    return this;
                  },
                  wrapInner: function (e) {
                    var t = N(e);
                    return this.each(function (n) {
                      var r = i(this),
                        s = r.contents(),
                        o = t ? e.call(this, n) : e;
                      s.length ? s.wrapAll(o) : r.append(o);
                    });
                  },
                  unwrap: function () {
                    return (
                      this.parent().each(function () {
                        i(this).replaceWith(i(this).children());
                      }),
                      this
                    );
                  },
                  clone: function () {
                    return this.map(function () {
                      return this.cloneNode(!0);
                    });
                  },
                  hide: function () {
                    return this.css('display', 'none');
                  },
                  toggle: function (e) {
                    return this.each(function () {
                      var n = i(this);
                      (e === t ? 'none' == n.css('display') : e) ? n.show() : n.hide();
                    });
                  },
                  prev: function (e) {
                    return i(this.pluck('previousElementSibling')).filter(e || '*');
                  },
                  next: function (e) {
                    return i(this.pluck('nextElementSibling')).filter(e || '*');
                  },
                  html: function (e) {
                    return 0 in arguments
                      ? this.each(function (t) {
                          var n = this.innerHTML;
                          i(this).empty().append(Z(this, e, t, n));
                        })
                      : 0 in this
                      ? this[0].innerHTML
                      : null;
                  },
                  text: function (e) {
                    return 0 in arguments
                      ? this.each(function (t) {
                          var n = Z(this, e, t, this.textContent);
                          this.textContent = null == n ? '' : '' + n;
                        })
                      : 0 in this
                      ? this.pluck('textContent').join('')
                      : null;
                  },
                  attr: function (e, i) {
                    var r;
                    return 'string' != typeof e || 1 in arguments
                      ? this.each(function (t) {
                          if (1 === this.nodeType)
                            if (R(e)) for (n in e) X(this, n, e[n]);
                            else X(this, e, Z(this, i, t, this.getAttribute(e)));
                        })
                      : 0 in this && 1 == this[0].nodeType && null != (r = this[0].getAttribute(e))
                      ? r
                      : t;
                  },
                  removeAttr: function (e) {
                    return this.each(function () {
                      1 === this.nodeType &&
                        e.split(' ').forEach(function (e) {
                          X(this, e);
                        }, this);
                    });
                  },
                  prop: function (e, t) {
                    return (
                      (e = L[e] || e),
                      1 in arguments
                        ? this.each(function (n) {
                            this[e] = Z(this, t, n, this[e]);
                          })
                        : this[0] && this[0][e]
                    );
                  },
                  removeProp: function (e) {
                    return (
                      (e = L[e] || e),
                      this.each(function () {
                        delete this[e];
                      })
                    );
                  },
                  data: function (e, n) {
                    var i = 'data-' + e.replace(x, '-$1').toLowerCase(),
                      r = 1 in arguments ? this.attr(i, n) : this.attr(i);
                    return null !== r ? Y(r) : t;
                  },
                  val: function (e) {
                    return 0 in arguments
                      ? (null == e && (e = ''),
                        this.each(function (t) {
                          this.value = Z(this, e, t, this.value);
                        }))
                      : this[0] &&
                          (this[0].multiple
                            ? i(this[0])
                                .find('option')
                                .filter(function () {
                                  return this.selected;
                                })
                                .pluck('value')
                            : this[0].value);
                  },
                  offset: function (t) {
                    if (t)
                      return this.each(function (e) {
                        var n = i(this),
                          r = Z(this, t, e, n.offset()),
                          s = n.offsetParent().offset(),
                          o = { top: r.top - s.top, left: r.left - s.left };
                        'static' == n.css('position') && (o.position = 'relative'), n.css(o);
                      });
                    if (!this.length) return null;
                    if (h.documentElement !== this[0] && !i.contains(h.documentElement, this[0]))
                      return { top: 0, left: 0 };
                    var n = this[0].getBoundingClientRect();
                    return {
                      left: n.left + e.pageXOffset,
                      top: n.top + e.pageYOffset,
                      width: Math.round(n.width),
                      height: Math.round(n.height),
                    };
                  },
                  css: function (e, t) {
                    if (arguments.length < 2) {
                      var r = this[0];
                      if ('string' == typeof e) {
                        if (!r) return;
                        return r.style[s(e)] || getComputedStyle(r, '').getPropertyValue(e);
                      }
                      if (Q(e)) {
                        if (!r) return;
                        var o = {},
                          a = getComputedStyle(r, '');
                        return (
                          i.each(e, function (e, t) {
                            o[t] = r.style[s(t)] || a.getPropertyValue(t);
                          }),
                          o
                        );
                      }
                    }
                    var u = '';
                    if ('string' == I(e))
                      t || 0 === t
                        ? (u = B(e) + ':' + z(e, t))
                        : this.each(function () {
                            this.style.removeProperty(B(e));
                          });
                    else
                      for (n in e)
                        e[n] || 0 === e[n]
                          ? (u += B(n) + ':' + z(n, e[n]) + ';')
                          : this.each(function () {
                              this.style.removeProperty(B(n));
                            });
                    return this.each(function () {
                      this.style.cssText += ';' + u;
                    });
                  },
                  index: function (e) {
                    return e ? this.indexOf(i(e)[0]) : this.parent().children().indexOf(this[0]);
                  },
                  hasClass: function (e) {
                    return (
                      !!e &&
                      a.some.call(
                        this,
                        function (e) {
                          return this.test(J(e));
                        },
                        q(e)
                      )
                    );
                  },
                  addClass: function (e) {
                    return e
                      ? this.each(function (t) {
                          if ('className' in this) {
                            r = [];
                            var n = J(this);
                            Z(this, e, t, n)
                              .split(/\s+/g)
                              .forEach(function (e) {
                                i(this).hasClass(e) || r.push(e);
                              }, this),
                              r.length && J(this, n + (n ? ' ' : '') + r.join(' '));
                          }
                        })
                      : this;
                  },
                  removeClass: function (e) {
                    return this.each(function (n) {
                      if ('className' in this) {
                        if (e === t) return J(this, '');
                        (r = J(this)),
                          Z(this, e, n, r)
                            .split(/\s+/g)
                            .forEach(function (e) {
                              r = r.replace(q(e), ' ');
                            }),
                          J(this, r.trim());
                      }
                    });
                  },
                  toggleClass: function (e, n) {
                    return e
                      ? this.each(function (r) {
                          var s = i(this);
                          Z(this, e, r, J(this))
                            .split(/\s+/g)
                            .forEach(function (e) {
                              (n === t ? !s.hasClass(e) : n) ? s.addClass(e) : s.removeClass(e);
                            });
                        })
                      : this;
                  },
                  scrollTop: function (e) {
                    if (this.length) {
                      var n = 'scrollTop' in this[0];
                      return e === t
                        ? n
                          ? this[0].scrollTop
                          : this[0].pageYOffset
                        : this.each(
                            n
                              ? function () {
                                  this.scrollTop = e;
                                }
                              : function () {
                                  this.scrollTo(this.scrollX, e);
                                }
                          );
                    }
                  },
                  scrollLeft: function (e) {
                    if (this.length) {
                      var n = 'scrollLeft' in this[0];
                      return e === t
                        ? n
                          ? this[0].scrollLeft
                          : this[0].pageXOffset
                        : this.each(
                            n
                              ? function () {
                                  this.scrollLeft = e;
                                }
                              : function () {
                                  this.scrollTo(e, this.scrollY);
                                }
                          );
                    }
                  },
                  position: function () {
                    if (this.length) {
                      var e = this[0],
                        t = this.offsetParent(),
                        n = this.offset(),
                        r = v.test(t[0].nodeName) ? { top: 0, left: 0 } : t.offset();
                      return (
                        (n.top -= parseFloat(i(e).css('margin-top')) || 0),
                        (n.left -= parseFloat(i(e).css('margin-left')) || 0),
                        (r.top += parseFloat(i(t[0]).css('border-top-width')) || 0),
                        (r.left += parseFloat(i(t[0]).css('border-left-width')) || 0),
                        { top: n.top - r.top, left: n.left - r.left }
                      );
                    }
                  },
                  offsetParent: function () {
                    return this.map(function () {
                      for (
                        var e = this.offsetParent || h.body;
                        e && !v.test(e.nodeName) && 'static' == i(e).css('position');

                      )
                        e = e.offsetParent;
                      return e;
                    });
                  },
                }),
                (i.fn.detach = i.fn.remove),
                ['width', 'height'].forEach(function (e) {
                  var n = e.replace(/./, function (e) {
                    return e[0].toUpperCase();
                  });
                  i.fn[e] = function (r) {
                    var s,
                      o = this[0];
                    return r === t
                      ? $(o)
                        ? o['inner' + n]
                        : D(o)
                        ? o.documentElement['scroll' + n]
                        : (s = this.offset()) && s[e]
                      : this.each(function (t) {
                          (o = i(this)).css(e, Z(this, r, t, o[e]()));
                        });
                  };
                }),
                b.forEach(function (n, r) {
                  var s = r % 2;
                  (i.fn[n] = function () {
                    var n,
                      o,
                      a = i.map(arguments, function (e) {
                        var r = [];
                        return 'array' == (n = I(e))
                          ? (e.forEach(function (e) {
                              return e.nodeType !== t
                                ? r.push(e)
                                : i.zepto.isZ(e)
                                ? (r = r.concat(e.get()))
                                : void (r = r.concat(A.fragment(e)));
                            }),
                            r)
                          : 'object' == n || null == e
                          ? e
                          : A.fragment(e);
                      }),
                      u = this.length > 1;
                    return a.length < 1
                      ? this
                      : this.each(function (t, n) {
                          (o = s ? n : n.parentNode),
                            (n = 0 == r ? n.nextSibling : 1 == r ? n.firstChild : 2 == r ? n : null);
                          var c = i.contains(h.documentElement, o);
                          a.forEach(function (t) {
                            if (u) t = t.cloneNode(!0);
                            else if (!o) return i(t).remove();
                            o.insertBefore(t, n),
                              c &&
                                ee(t, function (t) {
                                  if (
                                    !(
                                      null == t.nodeName ||
                                      'SCRIPT' !== t.nodeName.toUpperCase() ||
                                      (t.type && 'text/javascript' !== t.type) ||
                                      t.src
                                    )
                                  ) {
                                    var n = t.ownerDocument ? t.ownerDocument.defaultView : e;
                                    n.eval.call(n, t.innerHTML);
                                  }
                                });
                          });
                        });
                  }),
                    (i.fn[s ? n + 'To' : 'insert' + (r ? 'Before' : 'After')] = function (e) {
                      return i(e)[n](this), this;
                    });
                }),
                (A.Z.prototype = W.prototype = i.fn),
                (A.uniq = o),
                (A.deserializeValue = Y),
                (i.zepto = A),
                i
              );
            })();
          return (
            (function (t) {
              var n,
                i = 1,
                r = Array.prototype.slice,
                s = t.isFunction,
                o = function (e) {
                  return 'string' == typeof e;
                },
                a = {},
                u = {},
                c = 'onfocusin' in e,
                l = { focus: 'focusin', blur: 'focusout' },
                h = { mouseenter: 'mouseover', mouseleave: 'mouseout' };
              function p(e) {
                return e._zid || (e._zid = i++);
              }
              function f(e, t, n, i) {
                if ((t = d(t)).ns) var r = g(t.ns);
                return (a[p(e)] || []).filter(function (e) {
                  return (
                    e &&
                    (!t.e || e.e == t.e) &&
                    (!t.ns || r.test(e.ns)) &&
                    (!n || p(e.fn) === p(n)) &&
                    (!i || e.sel == i)
                  );
                });
              }
              function d(e) {
                var t = ('' + e).split('.');
                return { e: t[0], ns: t.slice(1).sort().join(' ') };
              }
              function g(e) {
                return new RegExp('(?:^| )' + e.replace(' ', ' .* ?') + '(?: |$)');
              }
              function m(e, t) {
                return (e.del && !c && e.e in l) || !!t;
              }
              function y(e) {
                return h[e] || (c && l[e]) || e;
              }
              function v(e, i, r, s, o, u, c) {
                var l = p(e),
                  f = a[l] || (a[l] = []);
                i.split(/\s/).forEach(function (i) {
                  if ('ready' == i) return t(document).ready(r);
                  var a = d(i);
                  (a.fn = r),
                    (a.sel = o),
                    a.e in h &&
                      (r = function (e) {
                        var n = e.relatedTarget;
                        if (!n || (n !== this && !t.contains(this, n))) return a.fn.apply(this, arguments);
                      }),
                    (a.del = u);
                  var l = u || r;
                  (a.proxy = function (t) {
                    if (!(t = E(t)).isImmediatePropagationStopped()) {
                      try {
                        var i = Object.getOwnPropertyDescriptor(t, 'data');
                        (i && !i.writable) || (t.data = s);
                      } catch (t) {}
                      var r = l.apply(e, t._args == n ? [t] : [t].concat(t._args));
                      return !1 === r && (t.preventDefault(), t.stopPropagation()), r;
                    }
                  }),
                    (a.i = f.length),
                    f.push(a),
                    'addEventListener' in e && e.addEventListener(y(a.e), a.proxy, m(a, c));
                });
              }
              function x(e, t, n, i, r) {
                var s = p(e);
                (t || '').split(/\s/).forEach(function (t) {
                  f(e, t, n, i).forEach(function (t) {
                    delete a[s][t.i], 'removeEventListener' in e && e.removeEventListener(y(t.e), t.proxy, m(t, r));
                  });
                });
              }
              (u.click = u.mousedown = u.mouseup = u.mousemove = 'MouseEvents'),
                (t.event = { add: v, remove: x }),
                (t.proxy = function (e, n) {
                  var i = 2 in arguments && r.call(arguments, 2);
                  if (s(e)) {
                    var a = function () {
                      return e.apply(n, i ? i.concat(r.call(arguments)) : arguments);
                    };
                    return (a._zid = p(e)), a;
                  }
                  if (o(n)) return i ? (i.unshift(e[n], e), t.proxy.apply(null, i)) : t.proxy(e[n], e);
                  throw new TypeError('expected function');
                }),
                (t.fn.bind = function (e, t, n) {
                  return this.on(e, t, n);
                }),
                (t.fn.unbind = function (e, t) {
                  return this.off(e, t);
                }),
                (t.fn.one = function (e, t, n, i) {
                  return this.on(e, t, n, i, 1);
                });
              var w = function () {
                  return !0;
                },
                b = function () {
                  return !1;
                },
                S = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,
                C = {
                  preventDefault: 'isDefaultPrevented',
                  stopImmediatePropagation: 'isImmediatePropagationStopped',
                  stopPropagation: 'isPropagationStopped',
                };
              function E(e, i) {
                if (i || !e.isDefaultPrevented) {
                  i || (i = e),
                    t.each(C, function (t, n) {
                      var r = i[t];
                      (e[t] = function () {
                        return (this[n] = w), r && r.apply(i, arguments);
                      }),
                        (e[n] = b);
                    });
                  try {
                    e.timeStamp || (e.timeStamp = Date.now());
                  } catch (r) {}
                  (i.defaultPrevented !== n
                    ? i.defaultPrevented
                    : 'returnValue' in i
                    ? !1 === i.returnValue
                    : i.getPreventDefault && i.getPreventDefault()) && (e.isDefaultPrevented = w);
                }
                return e;
              }
              function k(e) {
                var t,
                  i = { originalEvent: e };
                for (t in e) S.test(t) || e[t] === n || (i[t] = e[t]);
                return E(i, e);
              }
              (t.fn.delegate = function (e, t, n) {
                return this.on(t, e, n);
              }),
                (t.fn.undelegate = function (e, t, n) {
                  return this.off(t, e, n);
                }),
                (t.fn.live = function (e, n) {
                  return t(document.body).delegate(this.selector, e, n), this;
                }),
                (t.fn.die = function (e, n) {
                  return t(document.body).undelegate(this.selector, e, n), this;
                }),
                (t.fn.on = function (e, i, a, u, c) {
                  var l,
                    h,
                    p = this;
                  return e && !o(e)
                    ? (t.each(e, function (e, t) {
                        p.on(e, i, a, t, c);
                      }),
                      p)
                    : (o(i) || s(u) || !1 === u || ((u = a), (a = i), (i = n)),
                      (u !== n && !1 !== a) || ((u = a), (a = n)),
                      !1 === u && (u = b),
                      p.each(function (n, s) {
                        c &&
                          (l = function (e) {
                            return x(s, e.type, u), u.apply(this, arguments);
                          }),
                          i &&
                            (h = function (e) {
                              var n,
                                o = t(e.target).closest(i, s).get(0);
                              if (o && o !== s)
                                return (
                                  (n = t.extend(k(e), { currentTarget: o, liveFired: s })),
                                  (l || u).apply(o, [n].concat(r.call(arguments, 1)))
                                );
                            }),
                          v(s, e, u, a, i, h || l);
                      }));
                }),
                (t.fn.off = function (e, i, r) {
                  var a = this;
                  return e && !o(e)
                    ? (t.each(e, function (e, t) {
                        a.off(e, i, t);
                      }),
                      a)
                    : (o(i) || s(r) || !1 === r || ((r = i), (i = n)),
                      !1 === r && (r = b),
                      a.each(function () {
                        x(this, e, r, i);
                      }));
                }),
                (t.fn.trigger = function (e, n) {
                  return (
                    ((e = o(e) || t.isPlainObject(e) ? t.Event(e) : E(e))._args = n),
                    this.each(function () {
                      e.type in l && 'function' == typeof this[e.type]
                        ? this[e.type]()
                        : 'dispatchEvent' in this
                        ? this.dispatchEvent(e)
                        : t(this).triggerHandler(e, n);
                    })
                  );
                }),
                (t.fn.triggerHandler = function (e, n) {
                  var i, r;
                  return (
                    this.each(function (s, a) {
                      ((i = k(o(e) ? t.Event(e) : e))._args = n),
                        (i.target = a),
                        t.each(f(a, e.type || e), function (e, t) {
                          if (((r = t.proxy(i)), i.isImmediatePropagationStopped())) return !1;
                        });
                    }),
                    r
                  );
                }),
                'focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error'
                  .split(' ')
                  .forEach(function (e) {
                    t.fn[e] = function (t) {
                      return 0 in arguments ? this.bind(e, t) : this.trigger(e);
                    };
                  }),
                (t.Event = function (e, t) {
                  o(e) || (e = (t = e).type);
                  var n = document.createEvent(u[e] || 'Events'),
                    i = !0;
                  if (t) for (var r in t) 'bubbles' == r ? (i = !!t[r]) : (n[r] = t[r]);
                  return n.initEvent(e, i, !0), E(n);
                });
            })(i),
            (n = []),
            (i.fn.remove = function () {
              return this.each(function () {
                this.parentNode &&
                  ('IMG' === this.tagName &&
                    (n.push(this),
                    (this.src = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='),
                    t && clearTimeout(t),
                    (t = setTimeout(function () {
                      n = [];
                    }, 6e4))),
                  this.parentNode.removeChild(this));
              });
            }),
            (function (e) {
              var t = {},
                n = e.fn.data,
                i = e.camelCase,
                r = (e.expando = 'Zepto' + +new Date()),
                s = [];
              function o(s, o) {
                var u = s[r],
                  c = u && t[u];
                if (void 0 === o) return c || a(s);
                if (c) {
                  if (o in c) return c[o];
                  var l = i(o);
                  if (l in c) return c[l];
                }
                return n.call(e(s), o);
              }
              function a(n, s, o) {
                var a = n[r] || (n[r] = ++e.uuid),
                  c = t[a] || (t[a] = u(n));
                return void 0 !== s && (c[i(s)] = o), c;
              }
              function u(t) {
                var n = {};
                return (
                  e.each(t.attributes || s, function (t, r) {
                    0 == r.name.indexOf('data-') &&
                      (n[i(r.name.replace('data-', ''))] = e.zepto.deserializeValue(r.value));
                  }),
                  n
                );
              }
              (e.fn.data = function (t, n) {
                return void 0 === n
                  ? e.isPlainObject(t)
                    ? this.each(function (n, i) {
                        e.each(t, function (e, t) {
                          a(i, e, t);
                        });
                      })
                    : 0 in this
                    ? o(this[0], t)
                    : void 0
                  : this.each(function () {
                      a(this, t, n);
                    });
              }),
                (e.data = function (t, n, i) {
                  return e(t).data(n, i);
                }),
                (e.hasData = function (n) {
                  var i = n[r],
                    s = i && t[i];
                  return !!s && !e.isEmptyObject(s);
                }),
                (e.fn.removeData = function (n) {
                  return (
                    'string' == typeof n && (n = n.split(/\s+/)),
                    this.each(function () {
                      var s = this[r],
                        o = s && t[s];
                      o &&
                        e.each(n || o, function (e) {
                          delete o[n ? i(this) : e];
                        });
                    })
                  );
                }),
                ['remove', 'empty'].forEach(function (t) {
                  var n = e.fn[t];
                  e.fn[t] = function () {
                    var e = this.find('*');
                    return 'remove' === t && (e = e.add(this)), e.removeData(), n.call(this);
                  };
                });
            })(i),
            i
          );
        })(t));
    },
    49397: (e, t) => {
      !(function (e) {
        var t = /\S/,
          n = /\"/g,
          i = /\n/g,
          r = /\r/g,
          s = /\\/g,
          o = /\u2028/,
          a = /\u2029/;
        function u(e) {
          '}' === e.n.substr(e.n.length - 1) && (e.n = e.n.substring(0, e.n.length - 1));
        }
        function c(e) {
          return e.trim ? e.trim() : e.replace(/^\s*|\s*$/g, '');
        }
        function l(e, t, n) {
          if (t.charAt(n) != e.charAt(0)) return !1;
          for (var i = 1, r = e.length; i < r; i++) if (t.charAt(n + i) != e.charAt(i)) return !1;
          return !0;
        }
        (e.tags = { '#': 1, '^': 2, '<': 3, $: 4, '/': 5, '!': 6, '>': 7, '=': 8, _v: 9, '{': 10, '&': 11, _t: 12 }),
          (e.scan = function (n, i) {
            var r = n.length,
              s = 0,
              o = null,
              a = null,
              h = '',
              p = [],
              f = !1,
              d = 0,
              g = 0,
              m = '{{',
              y = '}}';
            function v() {
              h.length > 0 && (p.push({ tag: '_t', text: new String(h) }), (h = ''));
            }
            function x(n, i) {
              if (
                (v(),
                n &&
                  (function () {
                    for (var n = !0, i = g; i < p.length; i++)
                      if (!(n = e.tags[p[i].tag] < e.tags._v || ('_t' == p[i].tag && null === p[i].text.match(t))))
                        return !1;
                    return n;
                  })())
              )
                for (var r, s = g; s < p.length; s++)
                  p[s].text && ((r = p[s + 1]) && '>' == r.tag && (r.indent = p[s].text.toString()), p.splice(s, 1));
              else i || p.push({ tag: '\n' });
              (f = !1), (g = p.length);
            }
            function w(e, t) {
              var n = '=' + y,
                i = e.indexOf(n, t),
                r = c(e.substring(e.indexOf('=', t) + 1, i)).split(' ');
              return (m = r[0]), (y = r[r.length - 1]), i + n.length - 1;
            }
            for (i && ((i = i.split(' ')), (m = i[0]), (y = i[1])), d = 0; d < r; d++)
              0 == s
                ? l(m, n, d)
                  ? (--d, v(), (s = 1))
                  : '\n' == n.charAt(d)
                  ? x(f)
                  : (h += n.charAt(d))
                : 1 == s
                ? ((d += m.length - 1),
                  '=' == (o = (a = e.tags[n.charAt(d + 1)]) ? n.charAt(d + 1) : '_v')
                    ? ((d = w(n, d)), (s = 0))
                    : (a && d++, (s = 2)),
                  (f = d))
                : l(y, n, d)
                ? (p.push({ tag: o, n: c(h), otag: m, ctag: y, i: '/' == o ? f - m.length : d + y.length }),
                  (h = ''),
                  (d += y.length - 1),
                  (s = 0),
                  '{' == o && ('}}' == y ? d++ : u(p[p.length - 1])))
                : (h += n.charAt(d));
            return x(f, !0), p;
          });
        var h = { _t: !0, '\n': !0, $: !0, '/': !0 };
        function p(t, n, i, r) {
          var s,
            o = [],
            a = null,
            u = null;
          for (s = i[i.length - 1]; t.length > 0; ) {
            if (((u = t.shift()), s && '<' == s.tag && !(u.tag in h)))
              throw new Error('Illegal content in < super tag.');
            if (e.tags[u.tag] <= e.tags.$ || f(u, r)) i.push(u), (u.nodes = p(t, u.tag, i, r));
            else {
              if ('/' == u.tag) {
                if (0 === i.length) throw new Error('Closing tag without opener: /' + u.n);
                if (((a = i.pop()), u.n != a.n && !d(u.n, a.n, r)))
                  throw new Error('Nesting error: ' + a.n + ' vs. ' + u.n);
                return (a.end = u.i), o;
              }
              '\n' == u.tag && (u.last = 0 == t.length || '\n' == t[0].tag);
            }
            o.push(u);
          }
          if (i.length > 0) throw new Error('missing closing tag: ' + i.pop().n);
          return o;
        }
        function f(e, t) {
          for (var n = 0, i = t.length; n < i; n++) if (t[n].o == e.n) return (e.tag = '#'), !0;
        }
        function d(e, t, n) {
          for (var i = 0, r = n.length; i < r; i++) if (n[i].c == e && n[i].o == t) return !0;
        }
        function g(e) {
          var t = [];
          for (var n in e.partials)
            t.push('"' + y(n) + '":{name:"' + y(e.partials[n].name) + '", ' + g(e.partials[n]) + '}');
          return (
            'partials: {' +
            t.join(',') +
            '}, subs: ' +
            (function (e) {
              var t = [];
              for (var n in e) t.push('"' + y(n) + '": function(c,p,t,i) {' + e[n] + '}');
              return '{ ' + t.join(',') + ' }';
            })(e.subs)
          );
        }
        e.stringify = function (t, n, i) {
          return '{code: function (c,p,i) { ' + e.wrapMain(t.code) + ' },' + g(t) + '}';
        };
        var m = 0;
        function y(e) {
          return e
            .replace(s, '\\\\')
            .replace(n, '\\"')
            .replace(i, '\\n')
            .replace(r, '\\r')
            .replace(o, '\\u2028')
            .replace(a, '\\u2029');
        }
        function v(e) {
          return ~e.indexOf('.') ? 'd' : 'f';
        }
        function x(e, t) {
          var n = '<' + (t.prefix || '') + e.n + m++;
          return (
            (t.partials[n] = { name: e.n, partials: {} }),
            (t.code += 't.b(t.rp("' + y(n) + '",c,p,"' + (e.indent || '') + '"));'),
            n
          );
        }
        function w(e, t) {
          t.code += 't.b(t.t(t.' + v(e.n) + '("' + y(e.n) + '",c,p,0)));';
        }
        function b(e) {
          return 't.b(' + e + ');';
        }
        (e.generate = function (t, n, i) {
          m = 0;
          var r = { code: '', subs: {}, partials: {} };
          return e.walk(t, r), i.asString ? this.stringify(r, n, i) : this.makeTemplate(r, n, i);
        }),
          (e.wrapMain = function (e) {
            return 'var t=this;t.b(i=i||"");' + e + 'return t.fl();';
          }),
          (e.template = e.Template),
          (e.makeTemplate = function (e, t, n) {
            var i = this.makePartials(e);
            return (i.code = new Function('c', 'p', 'i', this.wrapMain(e.code))), new this.template(i, t, this, n);
          }),
          (e.makePartials = function (e) {
            var t,
              n = { subs: {}, partials: e.partials, name: e.name };
            for (t in n.partials) n.partials[t] = this.makePartials(n.partials[t]);
            for (t in e.subs) n.subs[t] = new Function('c', 'p', 't', 'i', e.subs[t]);
            return n;
          }),
          (e.codegen = {
            '#': function (t, n) {
              (n.code +=
                'if(t.s(t.' +
                v(t.n) +
                '("' +
                y(t.n) +
                '",c,p,1),c,p,0,' +
                t.i +
                ',' +
                t.end +
                ',"' +
                t.otag +
                ' ' +
                t.ctag +
                '")){t.rs(c,p,function(c,p,t){'),
                e.walk(t.nodes, n),
                (n.code += '});c.pop();}');
            },
            '^': function (t, n) {
              (n.code += 'if(!t.s(t.' + v(t.n) + '("' + y(t.n) + '",c,p,1),c,p,1,0,0,"")){'),
                e.walk(t.nodes, n),
                (n.code += '};');
            },
            '>': x,
            '<': function (t, n) {
              var i = { partials: {}, code: '', subs: {}, inPartial: !0 };
              e.walk(t.nodes, i);
              var r = n.partials[x(t, n)];
              (r.subs = i.subs), (r.partials = i.partials);
            },
            $: function (t, n) {
              var i = { subs: {}, code: '', partials: n.partials, prefix: t.n };
              e.walk(t.nodes, i), (n.subs[t.n] = i.code), n.inPartial || (n.code += 't.sub("' + y(t.n) + '",c,p,i);');
            },
            '\n': function (e, t) {
              t.code += b('"\\n"' + (e.last ? '' : ' + i'));
            },
            _v: function (e, t) {
              t.code += 't.b(t.v(t.' + v(e.n) + '("' + y(e.n) + '",c,p,0)));';
            },
            _t: function (e, t) {
              t.code += b('"' + y(e.text) + '"');
            },
            '{': w,
            '&': w,
          }),
          (e.walk = function (t, n) {
            for (var i, r = 0, s = t.length; r < s; r++) (i = e.codegen[t[r].tag]) && i(t[r], n);
            return n;
          }),
          (e.parse = function (e, t, n) {
            return p(e, 0, [], (n = n || {}).sectionTags || []);
          }),
          (e.cache = {}),
          (e.cacheKey = function (e, t) {
            return [e, !!t.asString, !!t.disableLambda, t.delimiters, !!t.modelGet].join('||');
          }),
          (e.compile = function (t, n) {
            n = n || {};
            var i = e.cacheKey(t, n),
              r = this.cache[i];
            if (r) {
              var s = r.partials;
              for (var o in s) delete s[o].instance;
              return r;
            }
            return (r = this.generate(this.parse(this.scan(t, n.delimiters), t, n), t, n)), (this.cache[i] = r);
          });
      })(t);
    },
    5485: (e, t, n) => {
      var i = n(49397);
      (i.Template = n(22882).Template), (i.template = i.Template), (e.exports = i);
    },
    22882: (e, t) => {
      !(function (e) {
        function t(e, t, n) {
          var i;
          return (
            t &&
              'object' == typeof t &&
              (void 0 !== t[e] ? (i = t[e]) : n && t.get && 'function' == typeof t.get && (i = t.get(e))),
            i
          );
        }
        (e.Template = function (e, t, n, i) {
          (e = e || {}),
            (this.r = e.code || this.r),
            (this.c = n),
            (this.options = i || {}),
            (this.text = t || ''),
            (this.partials = e.partials || {}),
            (this.subs = e.subs || {}),
            (this.buf = '');
        }),
          (e.Template.prototype = {
            r: function (e, t, n) {
              return '';
            },
            v: function (e) {
              return (
                (e = u(e)),
                a.test(e)
                  ? e.replace(n, '&amp;').replace(i, '&lt;').replace(r, '&gt;').replace(s, '&#39;').replace(o, '&quot;')
                  : e
              );
            },
            t: u,
            render: function (e, t, n) {
              return this.ri([e], t || {}, n);
            },
            ri: function (e, t, n) {
              return this.r(e, t, n);
            },
            ep: function (e, t) {
              var n = this.partials[e],
                i = t[n.name];
              if (n.instance && n.base == i) return n.instance;
              if ('string' == typeof i) {
                if (!this.c) throw new Error('No compiler available.');
                i = this.c.compile(i, this.options);
              }
              if (!i) return null;
              if (((this.partials[e].base = i), n.subs)) {
                for (key in (t.stackText || (t.stackText = {}), n.subs))
                  t.stackText[key] ||
                    (t.stackText[key] =
                      void 0 !== this.activeSub && t.stackText[this.activeSub]
                        ? t.stackText[this.activeSub]
                        : this.text);
                i = (function (e, t, n, i, r, s) {
                  function o() {}
                  function a() {}
                  var u;
                  (o.prototype = e), (a.prototype = e.subs);
                  var c = new o();
                  for (u in ((c.subs = new a()),
                  (c.subsText = {}),
                  (c.buf = ''),
                  (i = i || {}),
                  (c.stackSubs = i),
                  (c.subsText = s),
                  t))
                    i[u] || (i[u] = t[u]);
                  for (u in i) c.subs[u] = i[u];
                  for (u in ((r = r || {}), (c.stackPartials = r), n)) r[u] || (r[u] = n[u]);
                  for (u in r) c.partials[u] = r[u];
                  return c;
                })(i, n.subs, n.partials, this.stackSubs, this.stackPartials, t.stackText);
              }
              return (this.partials[e].instance = i), i;
            },
            rp: function (e, t, n, i) {
              var r = this.ep(e, n);
              return r ? r.ri(t, n, i) : '';
            },
            rs: function (e, t, n) {
              var i = e[e.length - 1];
              if (c(i)) for (var r = 0; r < i.length; r++) e.push(i[r]), n(e, t, this), e.pop();
              else n(e, t, this);
            },
            s: function (e, t, n, i, r, s, o) {
              var a;
              return (
                (!c(e) || 0 !== e.length) &&
                ('function' == typeof e && (e = this.ms(e, t, n, i, r, s, o)),
                (a = !!e),
                !i && a && t && t.push('object' == typeof e ? e : t[t.length - 1]),
                a)
              );
            },
            d: function (e, n, i, r) {
              var s,
                o = e.split('.'),
                a = this.f(o[0], n, i, r),
                u = this.options.modelGet,
                l = null;
              if ('.' === e && c(n[n.length - 2])) a = n[n.length - 1];
              else for (var h = 1; h < o.length; h++) void 0 !== (s = t(o[h], a, u)) ? ((l = a), (a = s)) : (a = '');
              return !(r && !a) && (r || 'function' != typeof a || (n.push(l), (a = this.mv(a, n, i)), n.pop()), a);
            },
            f: function (e, n, i, r) {
              for (var s = !1, o = !1, a = this.options.modelGet, u = n.length - 1; u >= 0; u--)
                if (void 0 !== (s = t(e, n[u], a))) {
                  o = !0;
                  break;
                }
              return o ? (r || 'function' != typeof s || (s = this.mv(s, n, i)), s) : !r && '';
            },
            ls: function (e, t, n, i, r) {
              var s = this.options.delimiters;
              return (
                (this.options.delimiters = r), this.b(this.ct(u(e.call(t, i)), t, n)), (this.options.delimiters = s), !1
              );
            },
            ct: function (e, t, n) {
              if (this.options.disableLambda) throw new Error('Lambda features disabled.');
              return this.c.compile(e, this.options).render(t, n);
            },
            b: function (e) {
              this.buf += e;
            },
            fl: function () {
              var e = this.buf;
              return (this.buf = ''), e;
            },
            ms: function (e, t, n, i, r, s, o) {
              var a,
                u = t[t.length - 1],
                c = e.call(u);
              return 'function' == typeof c
                ? !!i ||
                    ((a =
                      this.activeSub && this.subsText && this.subsText[this.activeSub]
                        ? this.subsText[this.activeSub]
                        : this.text),
                    this.ls(c, u, n, a.substring(r, s), o))
                : c;
            },
            mv: function (e, t, n) {
              var i = t[t.length - 1],
                r = e.call(i);
              return 'function' == typeof r ? this.ct(u(r.call(i)), i, n) : r;
            },
            sub: function (e, t, n, i) {
              var r = this.subs[e];
              r && ((this.activeSub = e), r(t, n, this, i), (this.activeSub = !1));
            },
          });
        var n = /&/g,
          i = /</g,
          r = />/g,
          s = /\'/g,
          o = /\"/g,
          a = /[&<>\"\']/;
        function u(e) {
          return String(null == e ? '' : e);
        }
        var c =
          Array.isArray ||
          function (e) {
            return '[object Array]' === Object.prototype.toString.call(e);
          };
      })(t);
    },
    70624: (e, t, n) => {
      'use strict';
      var i,
        r,
        s,
        o = [n(15525), n(64785), n(28291), n(2709), n(42506), n(79176)],
        a = -1,
        u = [],
        c = !1;
      function l() {
        i && r && ((i = !1), r.length ? (u = r.concat(u)) : (a = -1), u.length && h());
      }
      function h() {
        if (!i) {
          (c = !1), (i = !0);
          for (var e = u.length, t = setTimeout(l); e; ) {
            for (r = u, u = []; r && ++a < e; ) r[a].run();
            (a = -1), (e = u.length);
          }
          (r = null), (a = -1), (i = !1), clearTimeout(t);
        }
      }
      for (var p = -1, f = o.length; ++p < f; )
        if (o[p] && o[p].test && o[p].test()) {
          s = o[p].install(h);
          break;
        }
      function d(e, t) {
        (this.fun = e), (this.array = t);
      }
      (d.prototype.run = function () {
        var e = this.fun,
          t = this.array;
        switch (t.length) {
          case 0:
            return e();
          case 1:
            return e(t[0]);
          case 2:
            return e(t[0], t[1]);
          case 3:
            return e(t[0], t[1], t[2]);
          default:
            return e.apply(null, t);
        }
      }),
        (e.exports = function (e) {
          var t = new Array(arguments.length - 1);
          if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          u.push(new d(e, t)), c || i || ((c = !0), s());
        });
    },
    2709: (e, t, n) => {
      'use strict';
      (t.test = function () {
        return !n.g.setImmediate && void 0 !== n.g.MessageChannel;
      }),
        (t.install = function (e) {
          var t = new n.g.MessageChannel();
          return (
            (t.port1.onmessage = e),
            function () {
              t.port2.postMessage(0);
            }
          );
        });
    },
    28291: (e, t, n) => {
      'use strict';
      var i = n.g.MutationObserver || n.g.WebKitMutationObserver;
      (t.test = function () {
        return i;
      }),
        (t.install = function (e) {
          var t = 0,
            r = new i(e),
            s = n.g.document.createTextNode('');
          return (
            r.observe(s, { characterData: !0 }),
            function () {
              s.data = t = ++t % 2;
            }
          );
        });
    },
    64785: (e, t, n) => {
      'use strict';
      (t.test = function () {
        return 'function' == typeof n.g.queueMicrotask;
      }),
        (t.install = function (e) {
          return function () {
            n.g.queueMicrotask(e);
          };
        });
    },
    42506: (e, t, n) => {
      'use strict';
      (t.test = function () {
        return 'document' in n.g && 'onreadystatechange' in n.g.document.createElement('script');
      }),
        (t.install = function (e) {
          return function () {
            var t = n.g.document.createElement('script');
            return (
              (t.onreadystatechange = function () {
                e(), (t.onreadystatechange = null), t.parentNode.removeChild(t), (t = null);
              }),
              n.g.document.documentElement.appendChild(t),
              e
            );
          };
        });
    },
    79176: (e, t) => {
      'use strict';
      (t.test = function () {
        return !0;
      }),
        (t.install = function (e) {
          return function () {
            setTimeout(e, 0);
          };
        });
    },
    31336: (e, t, n) => {
      var i, r;
      !(function () {
        var s,
          o,
          a,
          u,
          c,
          l,
          h,
          p,
          f,
          d,
          g,
          m,
          y,
          v,
          x,
          w,
          b,
          S,
          C,
          E,
          k,
          T,
          _,
          O,
          A,
          P,
          L,
          Q,
          I,
          N,
          $ = function (e) {
            var t = new $.Builder();
            return (
              t.pipeline.add($.trimmer, $.stopWordFilter, $.stemmer),
              t.searchPipeline.add($.stemmer),
              e.call(t, t),
              t.build()
            );
          };
        ($.version = '2.3.9'),
          ($.utils = {}),
          ($.utils.warn =
            ((s = this),
            function (e) {
              s.console && console.warn && console.warn(e);
            })),
          ($.utils.asString = function (e) {
            return null == e ? '' : e.toString();
          }),
          ($.utils.clone = function (e) {
            if (null == e) return e;
            for (var t = Object.create(null), n = Object.keys(e), i = 0; i < n.length; i++) {
              var r = n[i],
                s = e[r];
              if (Array.isArray(s)) t[r] = s.slice();
              else {
                if ('string' != typeof s && 'number' != typeof s && 'boolean' != typeof s)
                  throw new TypeError('clone is not deep and does not support nested objects');
                t[r] = s;
              }
            }
            return t;
          }),
          ($.FieldRef = function (e, t, n) {
            (this.docRef = e), (this.fieldName = t), (this._stringValue = n);
          }),
          ($.FieldRef.joiner = '/'),
          ($.FieldRef.fromString = function (e) {
            var t = e.indexOf($.FieldRef.joiner);
            if (-1 === t) throw 'malformed field ref string';
            var n = e.slice(0, t),
              i = e.slice(t + 1);
            return new $.FieldRef(i, n, e);
          }),
          ($.FieldRef.prototype.toString = function () {
            return (
              null == this._stringValue && (this._stringValue = this.fieldName + $.FieldRef.joiner + this.docRef),
              this._stringValue
            );
          }),
          ($.Set = function (e) {
            if (((this.elements = Object.create(null)), e)) {
              this.length = e.length;
              for (var t = 0; t < this.length; t++) this.elements[e[t]] = !0;
            } else this.length = 0;
          }),
          ($.Set.complete = {
            intersect: function (e) {
              return e;
            },
            union: function () {
              return this;
            },
            contains: function () {
              return !0;
            },
          }),
          ($.Set.empty = {
            intersect: function () {
              return this;
            },
            union: function (e) {
              return e;
            },
            contains: function () {
              return !1;
            },
          }),
          ($.Set.prototype.contains = function (e) {
            return !!this.elements[e];
          }),
          ($.Set.prototype.intersect = function (e) {
            var t,
              n,
              i,
              r = [];
            if (e === $.Set.complete) return this;
            if (e === $.Set.empty) return e;
            this.length < e.length ? ((t = this), (n = e)) : ((t = e), (n = this)), (i = Object.keys(t.elements));
            for (var s = 0; s < i.length; s++) {
              var o = i[s];
              o in n.elements && r.push(o);
            }
            return new $.Set(r);
          }),
          ($.Set.prototype.union = function (e) {
            return e === $.Set.complete
              ? $.Set.complete
              : e === $.Set.empty
              ? this
              : new $.Set(Object.keys(this.elements).concat(Object.keys(e.elements)));
          }),
          ($.idf = function (e, t) {
            var n = 0;
            for (var i in e) '_index' != i && (n += Object.keys(e[i]).length);
            var r = (t - n + 0.5) / (n + 0.5);
            return Math.log(1 + Math.abs(r));
          }),
          ($.Token = function (e, t) {
            (this.str = e || ''), (this.metadata = t || {});
          }),
          ($.Token.prototype.toString = function () {
            return this.str;
          }),
          ($.Token.prototype.update = function (e) {
            return (this.str = e(this.str, this.metadata)), this;
          }),
          ($.Token.prototype.clone = function (e) {
            return (
              (e =
                e ||
                function (e) {
                  return e;
                }),
              new $.Token(e(this.str, this.metadata), this.metadata)
            );
          }),
          ($.tokenizer = function (e, t) {
            if (null == e || null == e) return [];
            if (Array.isArray(e))
              return e.map(function (e) {
                return new $.Token($.utils.asString(e).toLowerCase(), $.utils.clone(t));
              });
            for (var n = e.toString().toLowerCase(), i = n.length, r = [], s = 0, o = 0; s <= i; s++) {
              var a = s - o;
              if (n.charAt(s).match($.tokenizer.separator) || s == i) {
                if (a > 0) {
                  var u = $.utils.clone(t) || {};
                  (u.position = [o, a]), (u.index = r.length), r.push(new $.Token(n.slice(o, s), u));
                }
                o = s + 1;
              }
            }
            return r;
          }),
          ($.tokenizer.separator = /[\s\-]+/),
          ($.Pipeline = function () {
            this._stack = [];
          }),
          ($.Pipeline.registeredFunctions = Object.create(null)),
          ($.Pipeline.registerFunction = function (e, t) {
            t in this.registeredFunctions && $.utils.warn('Overwriting existing registered function: ' + t),
              (e.label = t),
              ($.Pipeline.registeredFunctions[e.label] = e);
          }),
          ($.Pipeline.warnIfFunctionNotRegistered = function (e) {
            (e.label && e.label in this.registeredFunctions) ||
              $.utils.warn(
                'Function is not registered with pipeline. This may cause problems when serialising the index.\n',
                e
              );
          }),
          ($.Pipeline.load = function (e) {
            var t = new $.Pipeline();
            return (
              e.forEach(function (e) {
                var n = $.Pipeline.registeredFunctions[e];
                if (!n) throw new Error('Cannot load unregistered function: ' + e);
                t.add(n);
              }),
              t
            );
          }),
          ($.Pipeline.prototype.add = function () {
            Array.prototype.slice.call(arguments).forEach(function (e) {
              $.Pipeline.warnIfFunctionNotRegistered(e), this._stack.push(e);
            }, this);
          }),
          ($.Pipeline.prototype.after = function (e, t) {
            $.Pipeline.warnIfFunctionNotRegistered(t);
            var n = this._stack.indexOf(e);
            if (-1 == n) throw new Error('Cannot find existingFn');
            (n += 1), this._stack.splice(n, 0, t);
          }),
          ($.Pipeline.prototype.before = function (e, t) {
            $.Pipeline.warnIfFunctionNotRegistered(t);
            var n = this._stack.indexOf(e);
            if (-1 == n) throw new Error('Cannot find existingFn');
            this._stack.splice(n, 0, t);
          }),
          ($.Pipeline.prototype.remove = function (e) {
            var t = this._stack.indexOf(e);
            -1 != t && this._stack.splice(t, 1);
          }),
          ($.Pipeline.prototype.run = function (e) {
            for (var t = this._stack.length, n = 0; n < t; n++) {
              for (var i = this._stack[n], r = [], s = 0; s < e.length; s++) {
                var o = i(e[s], s, e);
                if (null != o && '' !== o)
                  if (Array.isArray(o)) for (var a = 0; a < o.length; a++) r.push(o[a]);
                  else r.push(o);
              }
              e = r;
            }
            return e;
          }),
          ($.Pipeline.prototype.runString = function (e, t) {
            var n = new $.Token(e, t);
            return this.run([n]).map(function (e) {
              return e.toString();
            });
          }),
          ($.Pipeline.prototype.reset = function () {
            this._stack = [];
          }),
          ($.Pipeline.prototype.toJSON = function () {
            return this._stack.map(function (e) {
              return $.Pipeline.warnIfFunctionNotRegistered(e), e.label;
            });
          }),
          ($.Vector = function (e) {
            (this._magnitude = 0), (this.elements = e || []);
          }),
          ($.Vector.prototype.positionForIndex = function (e) {
            if (0 == this.elements.length) return 0;
            for (
              var t = 0, n = this.elements.length / 2, i = n - t, r = Math.floor(i / 2), s = this.elements[2 * r];
              i > 1 && (s < e && (t = r), s > e && (n = r), s != e);

            )
              (i = n - t), (r = t + Math.floor(i / 2)), (s = this.elements[2 * r]);
            return s == e || s > e ? 2 * r : s < e ? 2 * (r + 1) : void 0;
          }),
          ($.Vector.prototype.insert = function (e, t) {
            this.upsert(e, t, function () {
              throw 'duplicate index';
            });
          }),
          ($.Vector.prototype.upsert = function (e, t, n) {
            this._magnitude = 0;
            var i = this.positionForIndex(e);
            this.elements[i] == e
              ? (this.elements[i + 1] = n(this.elements[i + 1], t))
              : this.elements.splice(i, 0, e, t);
          }),
          ($.Vector.prototype.magnitude = function () {
            if (this._magnitude) return this._magnitude;
            for (var e = 0, t = this.elements.length, n = 1; n < t; n += 2) {
              var i = this.elements[n];
              e += i * i;
            }
            return (this._magnitude = Math.sqrt(e));
          }),
          ($.Vector.prototype.dot = function (e) {
            for (
              var t = 0, n = this.elements, i = e.elements, r = n.length, s = i.length, o = 0, a = 0, u = 0, c = 0;
              u < r && c < s;

            )
              (o = n[u]) < (a = i[c])
                ? (u += 2)
                : o > a
                ? (c += 2)
                : o == a && ((t += n[u + 1] * i[c + 1]), (u += 2), (c += 2));
            return t;
          }),
          ($.Vector.prototype.similarity = function (e) {
            return this.dot(e) / this.magnitude() || 0;
          }),
          ($.Vector.prototype.toArray = function () {
            for (var e = new Array(this.elements.length / 2), t = 1, n = 0; t < this.elements.length; t += 2, n++)
              e[n] = this.elements[t];
            return e;
          }),
          ($.Vector.prototype.toJSON = function () {
            return this.elements;
          }),
          ($.stemmer =
            ((o = {
              ational: 'ate',
              tional: 'tion',
              enci: 'ence',
              anci: 'ance',
              izer: 'ize',
              bli: 'ble',
              alli: 'al',
              entli: 'ent',
              eli: 'e',
              ousli: 'ous',
              ization: 'ize',
              ation: 'ate',
              ator: 'ate',
              alism: 'al',
              iveness: 'ive',
              fulness: 'ful',
              ousness: 'ous',
              aliti: 'al',
              iviti: 'ive',
              biliti: 'ble',
              logi: 'log',
            }),
            (a = { icate: 'ic', ative: '', alize: 'al', iciti: 'ic', ical: 'ic', ful: '', ness: '' }),
            (h = '^(' + (c = '[^aeiou][^aeiouy]*') + ')?' + (l = (u = '[aeiouy]') + '[aeiou]*') + c + '(' + l + ')?$'),
            (p = '^(' + c + ')?' + l + c + l + c),
            (f = '^(' + c + ')?' + u),
            (d = new RegExp('^(' + c + ')?' + l + c)),
            (g = new RegExp(p)),
            (m = new RegExp(h)),
            (y = new RegExp(f)),
            (v = /^(.+?)(ss|i)es$/),
            (x = /^(.+?)([^s])s$/),
            (w = /^(.+?)eed$/),
            (b = /^(.+?)(ed|ing)$/),
            (S = /.$/),
            (C = /(at|bl|iz)$/),
            (E = new RegExp('([^aeiouylsz])\\1$')),
            (k = new RegExp('^' + c + u + '[^aeiouwxy]$')),
            (T = /^(.+?[^aeiou])y$/),
            (_ =
              /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/),
            (O = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/),
            (A = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/),
            (P = /^(.+?)(s|t)(ion)$/),
            (L = /^(.+?)e$/),
            (Q = /ll$/),
            (I = new RegExp('^' + c + u + '[^aeiouwxy]$')),
            (N = function (e) {
              var t, n, i, r, s, u, c;
              if (e.length < 3) return e;
              if (
                ('y' == (i = e.substr(0, 1)) && (e = i.toUpperCase() + e.substr(1)),
                (s = x),
                (r = v).test(e) ? (e = e.replace(r, '$1$2')) : s.test(e) && (e = e.replace(s, '$1$2')),
                (s = b),
                (r = w).test(e))
              ) {
                var l = r.exec(e);
                (r = d).test(l[1]) && ((r = S), (e = e.replace(r, '')));
              } else
                s.test(e) &&
                  ((t = (l = s.exec(e))[1]),
                  (s = y).test(t) &&
                    ((u = E),
                    (c = k),
                    (s = C).test((e = t))
                      ? (e += 'e')
                      : u.test(e)
                      ? ((r = S), (e = e.replace(r, '')))
                      : c.test(e) && (e += 'e')));
              return (
                (r = T).test(e) && (e = (t = (l = r.exec(e))[1]) + 'i'),
                (r = _).test(e) && ((t = (l = r.exec(e))[1]), (n = l[2]), (r = d).test(t) && (e = t + o[n])),
                (r = O).test(e) && ((t = (l = r.exec(e))[1]), (n = l[2]), (r = d).test(t) && (e = t + a[n])),
                (s = P),
                (r = A).test(e)
                  ? ((t = (l = r.exec(e))[1]), (r = g).test(t) && (e = t))
                  : s.test(e) && ((t = (l = s.exec(e))[1] + l[2]), (s = g).test(t) && (e = t)),
                (r = L).test(e) &&
                  ((t = (l = r.exec(e))[1]),
                  (s = m),
                  (u = I),
                  ((r = g).test(t) || (s.test(t) && !u.test(t))) && (e = t)),
                (s = g),
                (r = Q).test(e) && s.test(e) && ((r = S), (e = e.replace(r, ''))),
                'y' == i && (e = i.toLowerCase() + e.substr(1)),
                e
              );
            }),
            function (e) {
              return e.update(N);
            })),
          $.Pipeline.registerFunction($.stemmer, 'stemmer'),
          ($.generateStopWordFilter = function (e) {
            var t = e.reduce(function (e, t) {
              return (e[t] = t), e;
            }, {});
            return function (e) {
              if (e && t[e.toString()] !== e.toString()) return e;
            };
          }),
          ($.stopWordFilter = $.generateStopWordFilter([
            'a',
            'able',
            'about',
            'across',
            'after',
            'all',
            'almost',
            'also',
            'am',
            'among',
            'an',
            'and',
            'any',
            'are',
            'as',
            'at',
            'be',
            'because',
            'been',
            'but',
            'by',
            'can',
            'cannot',
            'could',
            'dear',
            'did',
            'do',
            'does',
            'either',
            'else',
            'ever',
            'every',
            'for',
            'from',
            'get',
            'got',
            'had',
            'has',
            'have',
            'he',
            'her',
            'hers',
            'him',
            'his',
            'how',
            'however',
            'i',
            'if',
            'in',
            'into',
            'is',
            'it',
            'its',
            'just',
            'least',
            'let',
            'like',
            'likely',
            'may',
            'me',
            'might',
            'most',
            'must',
            'my',
            'neither',
            'no',
            'nor',
            'not',
            'of',
            'off',
            'often',
            'on',
            'only',
            'or',
            'other',
            'our',
            'own',
            'rather',
            'said',
            'say',
            'says',
            'she',
            'should',
            'since',
            'so',
            'some',
            'than',
            'that',
            'the',
            'their',
            'them',
            'then',
            'there',
            'these',
            'they',
            'this',
            'tis',
            'to',
            'too',
            'twas',
            'us',
            'wants',
            'was',
            'we',
            'were',
            'what',
            'when',
            'where',
            'which',
            'while',
            'who',
            'whom',
            'why',
            'will',
            'with',
            'would',
            'yet',
            'you',
            'your',
          ])),
          $.Pipeline.registerFunction($.stopWordFilter, 'stopWordFilter'),
          ($.trimmer = function (e) {
            return e.update(function (e) {
              return e.replace(/^\W+/, '').replace(/\W+$/, '');
            });
          }),
          $.Pipeline.registerFunction($.trimmer, 'trimmer'),
          ($.TokenSet = function () {
            (this.final = !1), (this.edges = {}), (this.id = $.TokenSet._nextId), ($.TokenSet._nextId += 1);
          }),
          ($.TokenSet._nextId = 1),
          ($.TokenSet.fromArray = function (e) {
            for (var t = new $.TokenSet.Builder(), n = 0, i = e.length; n < i; n++) t.insert(e[n]);
            return t.finish(), t.root;
          }),
          ($.TokenSet.fromClause = function (e) {
            return 'editDistance' in e
              ? $.TokenSet.fromFuzzyString(e.term, e.editDistance)
              : $.TokenSet.fromString(e.term);
          }),
          ($.TokenSet.fromFuzzyString = function (e, t) {
            for (var n = new $.TokenSet(), i = [{ node: n, editsRemaining: t, str: e }]; i.length; ) {
              var r = i.pop();
              if (r.str.length > 0) {
                var s,
                  o = r.str.charAt(0);
                o in r.node.edges ? (s = r.node.edges[o]) : ((s = new $.TokenSet()), (r.node.edges[o] = s)),
                  1 == r.str.length && (s.final = !0),
                  i.push({ node: s, editsRemaining: r.editsRemaining, str: r.str.slice(1) });
              }
              if (0 != r.editsRemaining) {
                if ('*' in r.node.edges) var a = r.node.edges['*'];
                else {
                  a = new $.TokenSet();
                  r.node.edges['*'] = a;
                }
                if (
                  (0 == r.str.length && (a.final = !0),
                  i.push({ node: a, editsRemaining: r.editsRemaining - 1, str: r.str }),
                  r.str.length > 1 &&
                    i.push({ node: r.node, editsRemaining: r.editsRemaining - 1, str: r.str.slice(1) }),
                  1 == r.str.length && (r.node.final = !0),
                  r.str.length >= 1)
                ) {
                  if ('*' in r.node.edges) var u = r.node.edges['*'];
                  else {
                    u = new $.TokenSet();
                    r.node.edges['*'] = u;
                  }
                  1 == r.str.length && (u.final = !0),
                    i.push({ node: u, editsRemaining: r.editsRemaining - 1, str: r.str.slice(1) });
                }
                if (r.str.length > 1) {
                  var c,
                    l = r.str.charAt(0),
                    h = r.str.charAt(1);
                  h in r.node.edges ? (c = r.node.edges[h]) : ((c = new $.TokenSet()), (r.node.edges[h] = c)),
                    1 == r.str.length && (c.final = !0),
                    i.push({ node: c, editsRemaining: r.editsRemaining - 1, str: l + r.str.slice(2) });
                }
              }
            }
            return n;
          }),
          ($.TokenSet.fromString = function (e) {
            for (var t = new $.TokenSet(), n = t, i = 0, r = e.length; i < r; i++) {
              var s = e[i],
                o = i == r - 1;
              if ('*' == s) (t.edges[s] = t), (t.final = o);
              else {
                var a = new $.TokenSet();
                (a.final = o), (t.edges[s] = a), (t = a);
              }
            }
            return n;
          }),
          ($.TokenSet.prototype.toArray = function () {
            for (var e = [], t = [{ prefix: '', node: this }]; t.length; ) {
              var n = t.pop(),
                i = Object.keys(n.node.edges),
                r = i.length;
              n.node.final && (n.prefix.charAt(0), e.push(n.prefix));
              for (var s = 0; s < r; s++) {
                var o = i[s];
                t.push({ prefix: n.prefix.concat(o), node: n.node.edges[o] });
              }
            }
            return e;
          }),
          ($.TokenSet.prototype.toString = function () {
            if (this._str) return this._str;
            for (var e = this.final ? '1' : '0', t = Object.keys(this.edges).sort(), n = t.length, i = 0; i < n; i++) {
              var r = t[i];
              e = e + r + this.edges[r].id;
            }
            return e;
          }),
          ($.TokenSet.prototype.intersect = function (e) {
            for (var t = new $.TokenSet(), n = void 0, i = [{ qNode: e, output: t, node: this }]; i.length; ) {
              n = i.pop();
              for (
                var r = Object.keys(n.qNode.edges), s = r.length, o = Object.keys(n.node.edges), a = o.length, u = 0;
                u < s;
                u++
              )
                for (var c = r[u], l = 0; l < a; l++) {
                  var h = o[l];
                  if (h == c || '*' == c) {
                    var p = n.node.edges[h],
                      f = n.qNode.edges[c],
                      d = p.final && f.final,
                      g = void 0;
                    h in n.output.edges
                      ? ((g = n.output.edges[h]).final = g.final || d)
                      : (((g = new $.TokenSet()).final = d), (n.output.edges[h] = g)),
                      i.push({ qNode: f, output: g, node: p });
                  }
                }
            }
            return t;
          }),
          ($.TokenSet.Builder = function () {
            (this.previousWord = ''),
              (this.root = new $.TokenSet()),
              (this.uncheckedNodes = []),
              (this.minimizedNodes = {});
          }),
          ($.TokenSet.Builder.prototype.insert = function (e) {
            var t,
              n = 0;
            if (e < this.previousWord) throw new Error('Out of order word insertion');
            for (var i = 0; i < e.length && i < this.previousWord.length && e[i] == this.previousWord[i]; i++) n++;
            this.minimize(n),
              (t =
                0 == this.uncheckedNodes.length
                  ? this.root
                  : this.uncheckedNodes[this.uncheckedNodes.length - 1].child);
            for (i = n; i < e.length; i++) {
              var r = new $.TokenSet(),
                s = e[i];
              (t.edges[s] = r), this.uncheckedNodes.push({ parent: t, char: s, child: r }), (t = r);
            }
            (t.final = !0), (this.previousWord = e);
          }),
          ($.TokenSet.Builder.prototype.finish = function () {
            this.minimize(0);
          }),
          ($.TokenSet.Builder.prototype.minimize = function (e) {
            for (var t = this.uncheckedNodes.length - 1; t >= e; t--) {
              var n = this.uncheckedNodes[t],
                i = n.child.toString();
              i in this.minimizedNodes
                ? (n.parent.edges[n.char] = this.minimizedNodes[i])
                : ((n.child._str = i), (this.minimizedNodes[i] = n.child)),
                this.uncheckedNodes.pop();
            }
          }),
          ($.Index = function (e) {
            (this.invertedIndex = e.invertedIndex),
              (this.fieldVectors = e.fieldVectors),
              (this.tokenSet = e.tokenSet),
              (this.fields = e.fields),
              (this.pipeline = e.pipeline);
          }),
          ($.Index.prototype.search = function (e) {
            return this.query(function (t) {
              new $.QueryParser(e, t).parse();
            });
          }),
          ($.Index.prototype.query = function (e) {
            for (
              var t = new $.Query(this.fields),
                n = Object.create(null),
                i = Object.create(null),
                r = Object.create(null),
                s = Object.create(null),
                o = Object.create(null),
                a = 0;
              a < this.fields.length;
              a++
            )
              i[this.fields[a]] = new $.Vector();
            e.call(t, t);
            for (a = 0; a < t.clauses.length; a++) {
              var u = t.clauses[a],
                c = null,
                l = $.Set.empty;
              c = u.usePipeline ? this.pipeline.runString(u.term, { fields: u.fields }) : [u.term];
              for (var h = 0; h < c.length; h++) {
                var p = c[h];
                u.term = p;
                var f = $.TokenSet.fromClause(u),
                  d = this.tokenSet.intersect(f).toArray();
                if (0 === d.length && u.presence === $.Query.presence.REQUIRED) {
                  for (var g = 0; g < u.fields.length; g++) {
                    s[(L = u.fields[g])] = $.Set.empty;
                  }
                  break;
                }
                for (var m = 0; m < d.length; m++) {
                  var y = d[m],
                    v = this.invertedIndex[y],
                    x = v._index;
                  for (g = 0; g < u.fields.length; g++) {
                    var w = v[(L = u.fields[g])],
                      b = Object.keys(w),
                      S = y + '/' + L,
                      C = new $.Set(b);
                    if (
                      (u.presence == $.Query.presence.REQUIRED &&
                        ((l = l.union(C)), void 0 === s[L] && (s[L] = $.Set.complete)),
                      u.presence != $.Query.presence.PROHIBITED)
                    ) {
                      if (
                        (i[L].upsert(x, u.boost, function (e, t) {
                          return e + t;
                        }),
                        !r[S])
                      ) {
                        for (var E = 0; E < b.length; E++) {
                          var k,
                            T = b[E],
                            _ = new $.FieldRef(T, L),
                            O = w[T];
                          void 0 === (k = n[_]) ? (n[_] = new $.MatchData(y, L, O)) : k.add(y, L, O);
                        }
                        r[S] = !0;
                      }
                    } else void 0 === o[L] && (o[L] = $.Set.empty), (o[L] = o[L].union(C));
                  }
                }
              }
              if (u.presence === $.Query.presence.REQUIRED)
                for (g = 0; g < u.fields.length; g++) {
                  s[(L = u.fields[g])] = s[L].intersect(l);
                }
            }
            var A = $.Set.complete,
              P = $.Set.empty;
            for (a = 0; a < this.fields.length; a++) {
              var L;
              s[(L = this.fields[a])] && (A = A.intersect(s[L])), o[L] && (P = P.union(o[L]));
            }
            var Q = Object.keys(n),
              I = [],
              N = Object.create(null);
            if (t.isNegated()) {
              Q = Object.keys(this.fieldVectors);
              for (a = 0; a < Q.length; a++) {
                _ = Q[a];
                var D = $.FieldRef.fromString(_);
                n[_] = new $.MatchData();
              }
            }
            for (a = 0; a < Q.length; a++) {
              var R = (D = $.FieldRef.fromString(Q[a])).docRef;
              if (A.contains(R) && !P.contains(R)) {
                var F,
                  j = this.fieldVectors[D],
                  M = i[D.fieldName].similarity(j);
                if (void 0 !== (F = N[R])) (F.score += M), F.matchData.combine(n[D]);
                else {
                  var V = { ref: R, score: M, matchData: n[D] };
                  (N[R] = V), I.push(V);
                }
              }
            }
            return I.sort(function (e, t) {
              return t.score - e.score;
            });
          }),
          ($.Index.prototype.toJSON = function () {
            var e = Object.keys(this.invertedIndex)
                .sort()
                .map(function (e) {
                  return [e, this.invertedIndex[e]];
                }, this),
              t = Object.keys(this.fieldVectors).map(function (e) {
                return [e, this.fieldVectors[e].toJSON()];
              }, this);
            return {
              version: $.version,
              fields: this.fields,
              fieldVectors: t,
              invertedIndex: e,
              pipeline: this.pipeline.toJSON(),
            };
          }),
          ($.Index.load = function (e) {
            var t = {},
              n = {},
              i = e.fieldVectors,
              r = Object.create(null),
              s = e.invertedIndex,
              o = new $.TokenSet.Builder(),
              a = $.Pipeline.load(e.pipeline);
            e.version != $.version &&
              $.utils.warn(
                "Version mismatch when loading serialised index. Current version of lunr '" +
                  $.version +
                  "' does not match serialized index '" +
                  e.version +
                  "'"
              );
            for (var u = 0; u < i.length; u++) {
              var c = (h = i[u])[0],
                l = h[1];
              n[c] = new $.Vector(l);
            }
            for (u = 0; u < s.length; u++) {
              var h,
                p = (h = s[u])[0],
                f = h[1];
              o.insert(p), (r[p] = f);
            }
            return (
              o.finish(),
              (t.fields = e.fields),
              (t.fieldVectors = n),
              (t.invertedIndex = r),
              (t.tokenSet = o.root),
              (t.pipeline = a),
              new $.Index(t)
            );
          }),
          ($.Builder = function () {
            (this._ref = 'id'),
              (this._fields = Object.create(null)),
              (this._documents = Object.create(null)),
              (this.invertedIndex = Object.create(null)),
              (this.fieldTermFrequencies = {}),
              (this.fieldLengths = {}),
              (this.tokenizer = $.tokenizer),
              (this.pipeline = new $.Pipeline()),
              (this.searchPipeline = new $.Pipeline()),
              (this.documentCount = 0),
              (this._b = 0.75),
              (this._k1 = 1.2),
              (this.termIndex = 0),
              (this.metadataWhitelist = []);
          }),
          ($.Builder.prototype.ref = function (e) {
            this._ref = e;
          }),
          ($.Builder.prototype.field = function (e, t) {
            if (/\//.test(e)) throw new RangeError("Field '" + e + "' contains illegal character '/'");
            this._fields[e] = t || {};
          }),
          ($.Builder.prototype.b = function (e) {
            this._b = e < 0 ? 0 : e > 1 ? 1 : e;
          }),
          ($.Builder.prototype.k1 = function (e) {
            this._k1 = e;
          }),
          ($.Builder.prototype.add = function (e, t) {
            var n = e[this._ref],
              i = Object.keys(this._fields);
            (this._documents[n] = t || {}), (this.documentCount += 1);
            for (var r = 0; r < i.length; r++) {
              var s = i[r],
                o = this._fields[s].extractor,
                a = o ? o(e) : e[s],
                u = this.tokenizer(a, { fields: [s] }),
                c = this.pipeline.run(u),
                l = new $.FieldRef(n, s),
                h = Object.create(null);
              (this.fieldTermFrequencies[l] = h), (this.fieldLengths[l] = 0), (this.fieldLengths[l] += c.length);
              for (var p = 0; p < c.length; p++) {
                var f = c[p];
                if ((null == h[f] && (h[f] = 0), (h[f] += 1), null == this.invertedIndex[f])) {
                  var d = Object.create(null);
                  (d._index = this.termIndex), (this.termIndex += 1);
                  for (var g = 0; g < i.length; g++) d[i[g]] = Object.create(null);
                  this.invertedIndex[f] = d;
                }
                null == this.invertedIndex[f][s][n] && (this.invertedIndex[f][s][n] = Object.create(null));
                for (var m = 0; m < this.metadataWhitelist.length; m++) {
                  var y = this.metadataWhitelist[m],
                    v = f.metadata[y];
                  null == this.invertedIndex[f][s][n][y] && (this.invertedIndex[f][s][n][y] = []),
                    this.invertedIndex[f][s][n][y].push(v);
                }
              }
            }
          }),
          ($.Builder.prototype.calculateAverageFieldLengths = function () {
            for (var e = Object.keys(this.fieldLengths), t = e.length, n = {}, i = {}, r = 0; r < t; r++) {
              var s = $.FieldRef.fromString(e[r]),
                o = s.fieldName;
              i[o] || (i[o] = 0), (i[o] += 1), n[o] || (n[o] = 0), (n[o] += this.fieldLengths[s]);
            }
            var a = Object.keys(this._fields);
            for (r = 0; r < a.length; r++) {
              var u = a[r];
              n[u] = n[u] / i[u];
            }
            this.averageFieldLength = n;
          }),
          ($.Builder.prototype.createFieldVectors = function () {
            for (
              var e = {}, t = Object.keys(this.fieldTermFrequencies), n = t.length, i = Object.create(null), r = 0;
              r < n;
              r++
            ) {
              for (
                var s = $.FieldRef.fromString(t[r]),
                  o = s.fieldName,
                  a = this.fieldLengths[s],
                  u = new $.Vector(),
                  c = this.fieldTermFrequencies[s],
                  l = Object.keys(c),
                  h = l.length,
                  p = this._fields[o].boost || 1,
                  f = this._documents[s.docRef].boost || 1,
                  d = 0;
                d < h;
                d++
              ) {
                var g,
                  m,
                  y,
                  v = l[d],
                  x = c[v],
                  w = this.invertedIndex[v]._index;
                void 0 === i[v] ? ((g = $.idf(this.invertedIndex[v], this.documentCount)), (i[v] = g)) : (g = i[v]),
                  (m =
                    (g * ((this._k1 + 1) * x)) /
                    (this._k1 * (1 - this._b + this._b * (a / this.averageFieldLength[o])) + x)),
                  (m *= p),
                  (m *= f),
                  (y = Math.round(1e3 * m) / 1e3),
                  u.insert(w, y);
              }
              e[s] = u;
            }
            this.fieldVectors = e;
          }),
          ($.Builder.prototype.createTokenSet = function () {
            this.tokenSet = $.TokenSet.fromArray(Object.keys(this.invertedIndex).sort());
          }),
          ($.Builder.prototype.build = function () {
            return (
              this.calculateAverageFieldLengths(),
              this.createFieldVectors(),
              this.createTokenSet(),
              new $.Index({
                invertedIndex: this.invertedIndex,
                fieldVectors: this.fieldVectors,
                tokenSet: this.tokenSet,
                fields: Object.keys(this._fields),
                pipeline: this.searchPipeline,
              })
            );
          }),
          ($.Builder.prototype.use = function (e) {
            var t = Array.prototype.slice.call(arguments, 1);
            t.unshift(this), e.apply(this, t);
          }),
          ($.MatchData = function (e, t, n) {
            for (var i = Object.create(null), r = Object.keys(n || {}), s = 0; s < r.length; s++) {
              var o = r[s];
              i[o] = n[o].slice();
            }
            (this.metadata = Object.create(null)),
              void 0 !== e && ((this.metadata[e] = Object.create(null)), (this.metadata[e][t] = i));
          }),
          ($.MatchData.prototype.combine = function (e) {
            for (var t = Object.keys(e.metadata), n = 0; n < t.length; n++) {
              var i = t[n],
                r = Object.keys(e.metadata[i]);
              null == this.metadata[i] && (this.metadata[i] = Object.create(null));
              for (var s = 0; s < r.length; s++) {
                var o = r[s],
                  a = Object.keys(e.metadata[i][o]);
                null == this.metadata[i][o] && (this.metadata[i][o] = Object.create(null));
                for (var u = 0; u < a.length; u++) {
                  var c = a[u];
                  null == this.metadata[i][o][c]
                    ? (this.metadata[i][o][c] = e.metadata[i][o][c])
                    : (this.metadata[i][o][c] = this.metadata[i][o][c].concat(e.metadata[i][o][c]));
                }
              }
            }
          }),
          ($.MatchData.prototype.add = function (e, t, n) {
            if (!(e in this.metadata)) return (this.metadata[e] = Object.create(null)), void (this.metadata[e][t] = n);
            if (t in this.metadata[e])
              for (var i = Object.keys(n), r = 0; r < i.length; r++) {
                var s = i[r];
                s in this.metadata[e][t]
                  ? (this.metadata[e][t][s] = this.metadata[e][t][s].concat(n[s]))
                  : (this.metadata[e][t][s] = n[s]);
              }
            else this.metadata[e][t] = n;
          }),
          ($.Query = function (e) {
            (this.clauses = []), (this.allFields = e);
          }),
          ($.Query.wildcard = new String('*')),
          ($.Query.wildcard.NONE = 0),
          ($.Query.wildcard.LEADING = 1),
          ($.Query.wildcard.TRAILING = 2),
          ($.Query.presence = { OPTIONAL: 1, REQUIRED: 2, PROHIBITED: 3 }),
          ($.Query.prototype.clause = function (e) {
            return (
              'fields' in e || (e.fields = this.allFields),
              'boost' in e || (e.boost = 1),
              'usePipeline' in e || (e.usePipeline = !0),
              'wildcard' in e || (e.wildcard = $.Query.wildcard.NONE),
              e.wildcard & $.Query.wildcard.LEADING && e.term.charAt(0) != $.Query.wildcard && (e.term = '*' + e.term),
              e.wildcard & $.Query.wildcard.TRAILING && e.term.slice(-1) != $.Query.wildcard && (e.term = e.term + '*'),
              'presence' in e || (e.presence = $.Query.presence.OPTIONAL),
              this.clauses.push(e),
              this
            );
          }),
          ($.Query.prototype.isNegated = function () {
            for (var e = 0; e < this.clauses.length; e++)
              if (this.clauses[e].presence != $.Query.presence.PROHIBITED) return !1;
            return !0;
          }),
          ($.Query.prototype.term = function (e, t) {
            if (Array.isArray(e))
              return (
                e.forEach(function (e) {
                  this.term(e, $.utils.clone(t));
                }, this),
                this
              );
            var n = t || {};
            return (n.term = e.toString()), this.clause(n), this;
          }),
          ($.QueryParseError = function (e, t, n) {
            (this.name = 'QueryParseError'), (this.message = e), (this.start = t), (this.end = n);
          }),
          ($.QueryParseError.prototype = new Error()),
          ($.QueryLexer = function (e) {
            (this.lexemes = []),
              (this.str = e),
              (this.length = e.length),
              (this.pos = 0),
              (this.start = 0),
              (this.escapeCharPositions = []);
          }),
          ($.QueryLexer.prototype.run = function () {
            for (var e = $.QueryLexer.lexText; e; ) e = e(this);
          }),
          ($.QueryLexer.prototype.sliceString = function () {
            for (var e = [], t = this.start, n = this.pos, i = 0; i < this.escapeCharPositions.length; i++)
              (n = this.escapeCharPositions[i]), e.push(this.str.slice(t, n)), (t = n + 1);
            return e.push(this.str.slice(t, this.pos)), (this.escapeCharPositions.length = 0), e.join('');
          }),
          ($.QueryLexer.prototype.emit = function (e) {
            this.lexemes.push({ type: e, str: this.sliceString(), start: this.start, end: this.pos }),
              (this.start = this.pos);
          }),
          ($.QueryLexer.prototype.escapeCharacter = function () {
            this.escapeCharPositions.push(this.pos - 1), (this.pos += 1);
          }),
          ($.QueryLexer.prototype.next = function () {
            if (this.pos >= this.length) return $.QueryLexer.EOS;
            var e = this.str.charAt(this.pos);
            return (this.pos += 1), e;
          }),
          ($.QueryLexer.prototype.width = function () {
            return this.pos - this.start;
          }),
          ($.QueryLexer.prototype.ignore = function () {
            this.start == this.pos && (this.pos += 1), (this.start = this.pos);
          }),
          ($.QueryLexer.prototype.backup = function () {
            this.pos -= 1;
          }),
          ($.QueryLexer.prototype.acceptDigitRun = function () {
            var e, t;
            do {
              t = (e = this.next()).charCodeAt(0);
            } while (t > 47 && t < 58);
            e != $.QueryLexer.EOS && this.backup();
          }),
          ($.QueryLexer.prototype.more = function () {
            return this.pos < this.length;
          }),
          ($.QueryLexer.EOS = 'EOS'),
          ($.QueryLexer.FIELD = 'FIELD'),
          ($.QueryLexer.TERM = 'TERM'),
          ($.QueryLexer.EDIT_DISTANCE = 'EDIT_DISTANCE'),
          ($.QueryLexer.BOOST = 'BOOST'),
          ($.QueryLexer.PRESENCE = 'PRESENCE'),
          ($.QueryLexer.lexField = function (e) {
            return e.backup(), e.emit($.QueryLexer.FIELD), e.ignore(), $.QueryLexer.lexText;
          }),
          ($.QueryLexer.lexTerm = function (e) {
            if ((e.width() > 1 && (e.backup(), e.emit($.QueryLexer.TERM)), e.ignore(), e.more()))
              return $.QueryLexer.lexText;
          }),
          ($.QueryLexer.lexEditDistance = function (e) {
            return e.ignore(), e.acceptDigitRun(), e.emit($.QueryLexer.EDIT_DISTANCE), $.QueryLexer.lexText;
          }),
          ($.QueryLexer.lexBoost = function (e) {
            return e.ignore(), e.acceptDigitRun(), e.emit($.QueryLexer.BOOST), $.QueryLexer.lexText;
          }),
          ($.QueryLexer.lexEOS = function (e) {
            e.width() > 0 && e.emit($.QueryLexer.TERM);
          }),
          ($.QueryLexer.termSeparator = $.tokenizer.separator),
          ($.QueryLexer.lexText = function (e) {
            for (;;) {
              var t = e.next();
              if (t == $.QueryLexer.EOS) return $.QueryLexer.lexEOS;
              if (92 != t.charCodeAt(0)) {
                if (':' == t) return $.QueryLexer.lexField;
                if ('~' == t)
                  return e.backup(), e.width() > 0 && e.emit($.QueryLexer.TERM), $.QueryLexer.lexEditDistance;
                if ('^' == t) return e.backup(), e.width() > 0 && e.emit($.QueryLexer.TERM), $.QueryLexer.lexBoost;
                if ('+' == t && 1 === e.width()) return e.emit($.QueryLexer.PRESENCE), $.QueryLexer.lexText;
                if ('-' == t && 1 === e.width()) return e.emit($.QueryLexer.PRESENCE), $.QueryLexer.lexText;
                if (t.match($.QueryLexer.termSeparator)) return $.QueryLexer.lexTerm;
              } else e.escapeCharacter();
            }
          }),
          ($.QueryParser = function (e, t) {
            (this.lexer = new $.QueryLexer(e)), (this.query = t), (this.currentClause = {}), (this.lexemeIdx = 0);
          }),
          ($.QueryParser.prototype.parse = function () {
            this.lexer.run(), (this.lexemes = this.lexer.lexemes);
            for (var e = $.QueryParser.parseClause; e; ) e = e(this);
            return this.query;
          }),
          ($.QueryParser.prototype.peekLexeme = function () {
            return this.lexemes[this.lexemeIdx];
          }),
          ($.QueryParser.prototype.consumeLexeme = function () {
            var e = this.peekLexeme();
            return (this.lexemeIdx += 1), e;
          }),
          ($.QueryParser.prototype.nextClause = function () {
            var e = this.currentClause;
            this.query.clause(e), (this.currentClause = {});
          }),
          ($.QueryParser.parseClause = function (e) {
            var t = e.peekLexeme();
            if (null != t)
              switch (t.type) {
                case $.QueryLexer.PRESENCE:
                  return $.QueryParser.parsePresence;
                case $.QueryLexer.FIELD:
                  return $.QueryParser.parseField;
                case $.QueryLexer.TERM:
                  return $.QueryParser.parseTerm;
                default:
                  var n = 'expected either a field or a term, found ' + t.type;
                  throw (
                    (t.str.length >= 1 && (n += " with value '" + t.str + "'"),
                    new $.QueryParseError(n, t.start, t.end))
                  );
              }
          }),
          ($.QueryParser.parsePresence = function (e) {
            var t = e.consumeLexeme();
            if (null != t) {
              switch (t.str) {
                case '-':
                  e.currentClause.presence = $.Query.presence.PROHIBITED;
                  break;
                case '+':
                  e.currentClause.presence = $.Query.presence.REQUIRED;
                  break;
                default:
                  var n = "unrecognised presence operator'" + t.str + "'";
                  throw new $.QueryParseError(n, t.start, t.end);
              }
              var i = e.peekLexeme();
              if (null == i) {
                n = 'expecting term or field, found nothing';
                throw new $.QueryParseError(n, t.start, t.end);
              }
              switch (i.type) {
                case $.QueryLexer.FIELD:
                  return $.QueryParser.parseField;
                case $.QueryLexer.TERM:
                  return $.QueryParser.parseTerm;
                default:
                  n = "expecting term or field, found '" + i.type + "'";
                  throw new $.QueryParseError(n, i.start, i.end);
              }
            }
          }),
          ($.QueryParser.parseField = function (e) {
            var t = e.consumeLexeme();
            if (null != t) {
              if (-1 == e.query.allFields.indexOf(t.str)) {
                var n = e.query.allFields
                    .map(function (e) {
                      return "'" + e + "'";
                    })
                    .join(', '),
                  i = "unrecognised field '" + t.str + "', possible fields: " + n;
                throw new $.QueryParseError(i, t.start, t.end);
              }
              e.currentClause.fields = [t.str];
              var r = e.peekLexeme();
              if (null == r) {
                i = 'expecting term, found nothing';
                throw new $.QueryParseError(i, t.start, t.end);
              }
              if (r.type === $.QueryLexer.TERM) return $.QueryParser.parseTerm;
              i = "expecting term, found '" + r.type + "'";
              throw new $.QueryParseError(i, r.start, r.end);
            }
          }),
          ($.QueryParser.parseTerm = function (e) {
            var t = e.consumeLexeme();
            if (null != t) {
              (e.currentClause.term = t.str.toLowerCase()),
                -1 != t.str.indexOf('*') && (e.currentClause.usePipeline = !1);
              var n = e.peekLexeme();
              if (null != n)
                switch (n.type) {
                  case $.QueryLexer.TERM:
                    return e.nextClause(), $.QueryParser.parseTerm;
                  case $.QueryLexer.FIELD:
                    return e.nextClause(), $.QueryParser.parseField;
                  case $.QueryLexer.EDIT_DISTANCE:
                    return $.QueryParser.parseEditDistance;
                  case $.QueryLexer.BOOST:
                    return $.QueryParser.parseBoost;
                  case $.QueryLexer.PRESENCE:
                    return e.nextClause(), $.QueryParser.parsePresence;
                  default:
                    var i = "Unexpected lexeme type '" + n.type + "'";
                    throw new $.QueryParseError(i, n.start, n.end);
                }
              else e.nextClause();
            }
          }),
          ($.QueryParser.parseEditDistance = function (e) {
            var t = e.consumeLexeme();
            if (null != t) {
              var n = parseInt(t.str, 10);
              if (isNaN(n)) {
                var i = 'edit distance must be numeric';
                throw new $.QueryParseError(i, t.start, t.end);
              }
              e.currentClause.editDistance = n;
              var r = e.peekLexeme();
              if (null != r)
                switch (r.type) {
                  case $.QueryLexer.TERM:
                    return e.nextClause(), $.QueryParser.parseTerm;
                  case $.QueryLexer.FIELD:
                    return e.nextClause(), $.QueryParser.parseField;
                  case $.QueryLexer.EDIT_DISTANCE:
                    return $.QueryParser.parseEditDistance;
                  case $.QueryLexer.BOOST:
                    return $.QueryParser.parseBoost;
                  case $.QueryLexer.PRESENCE:
                    return e.nextClause(), $.QueryParser.parsePresence;
                  default:
                    i = "Unexpected lexeme type '" + r.type + "'";
                    throw new $.QueryParseError(i, r.start, r.end);
                }
              else e.nextClause();
            }
          }),
          ($.QueryParser.parseBoost = function (e) {
            var t = e.consumeLexeme();
            if (null != t) {
              var n = parseInt(t.str, 10);
              if (isNaN(n)) {
                var i = 'boost must be numeric';
                throw new $.QueryParseError(i, t.start, t.end);
              }
              e.currentClause.boost = n;
              var r = e.peekLexeme();
              if (null != r)
                switch (r.type) {
                  case $.QueryLexer.TERM:
                    return e.nextClause(), $.QueryParser.parseTerm;
                  case $.QueryLexer.FIELD:
                    return e.nextClause(), $.QueryParser.parseField;
                  case $.QueryLexer.EDIT_DISTANCE:
                    return $.QueryParser.parseEditDistance;
                  case $.QueryLexer.BOOST:
                    return $.QueryParser.parseBoost;
                  case $.QueryLexer.PRESENCE:
                    return e.nextClause(), $.QueryParser.parsePresence;
                  default:
                    i = "Unexpected lexeme type '" + r.type + "'";
                    throw new $.QueryParseError(i, r.start, r.end);
                }
              else e.nextClause();
            }
          }),
          void 0 ===
            (r =
              'function' ==
              typeof (i = function () {
                return $;
              })
                ? i.call(t, n, t, e)
                : i) || (e.exports = r);
      })();
    },
  },
]);
