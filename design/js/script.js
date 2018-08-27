'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

///////////////////// Beginning of variablesBe

var TextWindows = {},
    elJs = void 0,
    elHtml = void 0,
    elWin = void 0,
    el = void 0,
    menuFirstLevel = void 0,
    jsText = void 0,
    htmlText = void 0,
    winText = void 0,
    elTask = void 0,
    winTask = void 0;

jsText = 'Тут будет js';
htmlText = 'Тут будет html';
winText = 'Тут будет Выводимая информация';
winTask = 'Задание';

el = document.querySelector('.menu__first-level').parentElement.children[1];
// elJs=document.querySelector('.conteinerWin__flex__js');
elJs = document.querySelector('.conteinerWin__flex__js > pre > code');
// elHtml=document.querySelector('.conteinerWin__flex__html');
elHtml = document.querySelector('body > section > main > div > section.conteinerWin__flex__html > pre > code');
elWin = document.querySelector('.conteinerWin__text');
elTask = document.querySelector('.conteinerWin__task');

menuFirstLevel = document.querySelector('.menu__first-level');
elJs.innerHTML = jsText;
elHtml.innerHTML = htmlText;
// elWin.innerHTML = winText;
elTask.innerHTML = winTask;
//
/////////////////////End of variables
/////////////////// Start objects

function Dz(html, js, win, fun) {
    this.js = js;
    this.fun = fun;
    this.html = html;
    this.htmlBr = function (html) {
        return '<pre><code class="language-markup">' + html + '</code></pre>';
    };
    this.win = win;
    // this.jsBr = (function (js) {
    //     return js.replace(/;/g, ';<Br>');
    //
    // })(this.js);
    this.jsBr = function (js) {
        return '<pre><code class="language-javascript">' + js + '</code></pre>';
    }(this.js);
}

/////////////////// End of objects


//


///////////////////// beginning of events

el.addEventListener('click', function (e) {

    if (e.target.getAttribute('class') == 'menu__third-level finish') {
        var numberEl = e.target.parentElement.parentElement.parentElement.firstElementChild.dataset.number;
        var numberEl2 = e.target.dataset.number;
        elJs.textContent = TextWindows[numberEl + numberEl2].js;
        elHtml.textContent = TextWindows[numberEl + numberEl2].html;
        elTask.innerHTML = TextWindows[numberEl + numberEl2].win;
        TextWindows[numberEl + numberEl2].fun();
    }
});

menuFirstLevel.addEventListener('mouseover', function () {
    elJs.textContent = jsText;
    elHtml.innerHTML = htmlText;
    elTask.textContent = winTask;
    elWin.innerHTML = winText;
    console.clear();
});

///////////////////// end of events
var log = function log(el) {
    return console.log(el);
};
/**
 * jscolor - JavaScript Color Picker
 *
 * @link    http://jscolor.com
 * @license For open source use: GPLv3
 *          For commercial use: JSColor Commercial License
 * @author  Jan Odvarko
 * @version 2.0.5
 *
 * See usage examples at http://jscolor.com/examples/
 */

var colorJS = document.querySelector('body > section > header > div > nav > ul > li > ul > li:nth-child(6) > ul > li > a');

colorJS.addEventListener('click', function (e) {
    log(45);
    if (!window.jscolor) {
        window.jscolor = function () {
            //
            //

            var jsc = {

                register: function register() {
                    jsc.attachDOMReadyEvent(jsc.init);
                    jsc.attachEvent(document, 'mousedown', jsc.onDocumentMouseDown);
                    jsc.attachEvent(document, 'touchstart', jsc.onDocumentTouchStart);
                    jsc.attachEvent(window, 'resize', jsc.onWindowResize);
                },

                init: function init() {
                    if (jsc.jscolor.lookupClass) {
                        jsc.jscolor.installByClassName(jsc.jscolor.lookupClass);
                    }
                },

                tryInstallOnElements: function tryInstallOnElements(elms, className) {
                    var matchClass = new RegExp('(^|\\s)(' + className + ')(\\s*(\\{[^}]*\\})|\\s|$)', 'i');

                    for (var i = 0; i < elms.length; i += 1) {
                        if (elms[i].type !== undefined && elms[i].type.toLowerCase() == 'color') {
                            if (jsc.isColorAttrSupported) {
                                // skip inputs of type 'color' if supported by the browser
                                continue;
                            }
                        }
                        var m;
                        if (!elms[i].jscolor && elms[i].className && (m = elms[i].className.match(matchClass))) {
                            var targetElm = elms[i];
                            var optsStr = null;

                            var dataOptions = jsc.getDataAttr(targetElm, 'jscolor');
                            if (dataOptions !== null) {
                                optsStr = dataOptions;
                            } else if (m[4]) {
                                optsStr = m[4];
                            }

                            var opts = {};
                            if (optsStr) {
                                try {
                                    opts = new Function('return (' + optsStr + ')')();
                                } catch (eParseError) {
                                    jsc.warn('Error parsing jscolor options: ' + eParseError + ':\n' + optsStr);
                                }
                            }
                            targetElm.jscolor = new jsc.jscolor(targetElm, opts);
                        }
                    }
                },

                isColorAttrSupported: function () {
                    var elm = document.createElement('input');
                    if (elm.setAttribute) {
                        elm.setAttribute('type', 'color');
                        if (elm.type.toLowerCase() == 'color') {
                            return true;
                        }
                    }
                    return false;
                }(),

                isCanvasSupported: function () {
                    var elm = document.createElement('canvas');
                    return !!(elm.getContext && elm.getContext('2d'));
                }(),

                fetchElement: function fetchElement(mixed) {
                    return typeof mixed === 'string' ? document.getElementById(mixed) : mixed;
                },

                isElementType: function isElementType(elm, type) {
                    return elm.nodeName.toLowerCase() === type.toLowerCase();
                },

                getDataAttr: function getDataAttr(el, name) {
                    var attrName = 'data-' + name;
                    var attrValue = el.getAttribute(attrName);
                    if (attrValue !== null) {
                        return attrValue;
                    }
                    return null;
                },

                attachEvent: function attachEvent(el, evnt, func) {
                    if (el.addEventListener) {
                        el.addEventListener(evnt, func, false);
                    } else if (el.attachEvent) {
                        el.attachEvent('on' + evnt, func);
                    }
                },

                detachEvent: function detachEvent(el, evnt, func) {
                    if (el.removeEventListener) {
                        el.removeEventListener(evnt, func, false);
                    } else if (el.detachEvent) {
                        el.detachEvent('on' + evnt, func);
                    }
                },

                _attachedGroupEvents: {},

                attachGroupEvent: function attachGroupEvent(groupName, el, evnt, func) {
                    if (!jsc._attachedGroupEvents.hasOwnProperty(groupName)) {
                        jsc._attachedGroupEvents[groupName] = [];
                    }
                    jsc._attachedGroupEvents[groupName].push([el, evnt, func]);
                    jsc.attachEvent(el, evnt, func);
                },

                detachGroupEvents: function detachGroupEvents(groupName) {
                    if (jsc._attachedGroupEvents.hasOwnProperty(groupName)) {
                        for (var i = 0; i < jsc._attachedGroupEvents[groupName].length; i += 1) {
                            var evt = jsc._attachedGroupEvents[groupName][i];
                            jsc.detachEvent(evt[0], evt[1], evt[2]);
                        }
                        delete jsc._attachedGroupEvents[groupName];
                    }
                },

                attachDOMReadyEvent: function attachDOMReadyEvent(func) {
                    var fired = false;
                    var fireOnce = function fireOnce() {
                        if (!fired) {
                            fired = true;
                            func();
                        }
                    };

                    if (document.readyState === 'complete') {
                        setTimeout(fireOnce, 1); // async
                        return;
                    }

                    if (document.addEventListener) {
                        document.addEventListener('DOMContentLoaded', fireOnce, false);

                        // Fallback
                        window.addEventListener('load', fireOnce, false);
                    } else if (document.attachEvent) {
                        // IE
                        document.attachEvent('onreadystatechange', function () {
                            if (document.readyState === 'complete') {
                                document.detachEvent('onreadystatechange', arguments.callee);
                                fireOnce();
                            }
                        });

                        // Fallback
                        window.attachEvent('onload', fireOnce);

                        // IE7/8
                        if (document.documentElement.doScroll && window == window.top) {
                            var tryScroll = function tryScroll() {
                                if (!document.body) {
                                    return;
                                }
                                try {
                                    document.documentElement.doScroll('left');
                                    fireOnce();
                                } catch (e) {
                                    setTimeout(tryScroll, 1);
                                }
                            };
                            tryScroll();
                        }
                    }
                },

                warn: function warn(msg) {
                    if (window.console && window.console.warn) {
                        window.console.warn(msg);
                    }
                },

                preventDefault: function preventDefault(e) {
                    if (e.preventDefault) {
                        e.preventDefault();
                    }
                    e.returnValue = false;
                },

                captureTarget: function captureTarget(target) {
                    // IE
                    if (target.setCapture) {
                        jsc._capturedTarget = target;
                        jsc._capturedTarget.setCapture();
                    }
                },

                releaseTarget: function releaseTarget() {
                    // IE
                    if (jsc._capturedTarget) {
                        jsc._capturedTarget.releaseCapture();
                        jsc._capturedTarget = null;
                    }
                },

                fireEvent: function fireEvent(el, evnt) {
                    if (!el) {
                        return;
                    }
                    if (document.createEvent) {
                        var ev = document.createEvent('HTMLEvents');
                        ev.initEvent(evnt, true, true);
                        el.dispatchEvent(ev);
                    } else if (document.createEventObject) {
                        var ev = document.createEventObject();
                        el.fireEvent('on' + evnt, ev);
                    } else if (el['on' + evnt]) {
                        // alternatively use the traditional event model
                        el['on' + evnt]();
                    }
                },

                classNameToList: function classNameToList(className) {
                    return className.replace(/^\s+|\s+$/g, '').split(/\s+/);
                },

                // The className parameter (str) can only contain a single class name
                hasClass: function hasClass(elm, className) {
                    if (!className) {
                        return false;
                    }
                    return -1 != (' ' + elm.className.replace(/\s+/g, ' ') + ' ').indexOf(' ' + className + ' ');
                },

                // The className parameter (str) can contain multiple class names separated by whitespace
                setClass: function setClass(elm, className) {
                    var classList = jsc.classNameToList(className);
                    for (var i = 0; i < classList.length; i += 1) {
                        if (!jsc.hasClass(elm, classList[i])) {
                            elm.className += (elm.className ? ' ' : '') + classList[i];
                        }
                    }
                },

                // The className parameter (str) can contain multiple class names separated by whitespace
                unsetClass: function unsetClass(elm, className) {
                    var classList = jsc.classNameToList(className);
                    for (var i = 0; i < classList.length; i += 1) {
                        var repl = new RegExp('^\\s*' + classList[i] + '\\s*|' + '\\s*' + classList[i] + '\\s*$|' + '\\s+' + classList[i] + '(\\s+)', 'g');
                        elm.className = elm.className.replace(repl, '$1');
                    }
                },

                getStyle: function getStyle(elm) {
                    return window.getComputedStyle ? window.getComputedStyle(elm) : elm.currentStyle;
                },

                setStyle: function () {
                    var helper = document.createElement('div');
                    var getSupportedProp = function getSupportedProp(names) {
                        for (var i = 0; i < names.length; i += 1) {
                            if (names[i] in helper.style) {
                                return names[i];
                            }
                        }
                    };
                    var props = {
                        borderRadius: getSupportedProp(['borderRadius', 'MozBorderRadius', 'webkitBorderRadius']),
                        boxShadow: getSupportedProp(['boxShadow', 'MozBoxShadow', 'webkitBoxShadow'])
                    };
                    return function (elm, prop, value) {
                        switch (prop.toLowerCase()) {
                            case 'opacity':
                                var alphaOpacity = Math.round(parseFloat(value) * 100);
                                elm.style.opacity = value;
                                elm.style.filter = 'alpha(opacity=' + alphaOpacity + ')';
                                break;
                            default:
                                elm.style[props[prop]] = value;
                                break;
                        }
                    };
                }(),

                setBorderRadius: function setBorderRadius(elm, value) {
                    jsc.setStyle(elm, 'borderRadius', value || '0');
                },

                setBoxShadow: function setBoxShadow(elm, value) {
                    jsc.setStyle(elm, 'boxShadow', value || 'none');
                },

                getElementPos: function getElementPos(e, relativeToViewport) {
                    var x = 0,
                        y = 0;
                    var rect = e.getBoundingClientRect();
                    x = rect.left;
                    y = rect.top;
                    if (!relativeToViewport) {
                        var viewPos = jsc.getViewPos();
                        x += viewPos[0];
                        y += viewPos[1];
                    }
                    return [x, y];
                },

                getElementSize: function getElementSize(e) {
                    return [e.offsetWidth, e.offsetHeight];
                },

                // get pointer's X/Y coordinates relative to viewport
                getAbsPointerPos: function getAbsPointerPos(e) {
                    if (!e) {
                        e = window.event;
                    }
                    var x = 0,
                        y = 0;
                    if (typeof e.changedTouches !== 'undefined' && e.changedTouches.length) {
                        // touch devices
                        x = e.changedTouches[0].clientX;
                        y = e.changedTouches[0].clientY;
                    } else if (typeof e.clientX === 'number') {
                        x = e.clientX;
                        y = e.clientY;
                    }
                    return { x: x, y: y };
                },

                // get pointer's X/Y coordinates relative to target element
                getRelPointerPos: function getRelPointerPos(e) {
                    if (!e) {
                        e = window.event;
                    }
                    var target = e.target || e.srcElement;
                    var targetRect = target.getBoundingClientRect();

                    var x = 0,
                        y = 0;

                    var clientX = 0,
                        clientY = 0;
                    if (typeof e.changedTouches !== 'undefined' && e.changedTouches.length) {
                        // touch devices
                        clientX = e.changedTouches[0].clientX;
                        clientY = e.changedTouches[0].clientY;
                    } else if (typeof e.clientX === 'number') {
                        clientX = e.clientX;
                        clientY = e.clientY;
                    }

                    x = clientX - targetRect.left;
                    y = clientY - targetRect.top;
                    return { x: x, y: y };
                },

                getViewPos: function getViewPos() {
                    var doc = document.documentElement;
                    return [(window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0), (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)];
                },

                getViewSize: function getViewSize() {
                    var doc = document.documentElement;
                    return [window.innerWidth || doc.clientWidth, window.innerHeight || doc.clientHeight];
                },

                redrawPosition: function redrawPosition() {

                    if (jsc.picker && jsc.picker.owner) {
                        var thisObj = jsc.picker.owner;

                        var tp, vp;

                        if (thisObj.fixed) {
                            // Fixed elements are positioned relative to viewport,
                            // therefore we can ignore the scroll offset
                            tp = jsc.getElementPos(thisObj.targetElement, true); // target pos
                            vp = [0, 0]; // view pos
                        } else {
                            tp = jsc.getElementPos(thisObj.targetElement); // target pos
                            vp = jsc.getViewPos(); // view pos
                        }

                        var ts = jsc.getElementSize(thisObj.targetElement); // target size
                        var vs = jsc.getViewSize(); // view size
                        var ps = jsc.getPickerOuterDims(thisObj); // picker size
                        var a, b, c;
                        switch (thisObj.position.toLowerCase()) {
                            case 'left':
                                a = 1;
                                b = 0;
                                c = -1;
                                break;
                            case 'right':
                                a = 1;
                                b = 0;
                                c = 1;
                                break;
                            case 'top':
                                a = 0;
                                b = 1;
                                c = -1;
                                break;
                            default:
                                a = 0;
                                b = 1;
                                c = 1;
                                break;
                        }
                        var l = (ts[b] + ps[b]) / 2;

                        // compute picker position
                        if (!thisObj.smartPosition) {
                            var pp = [tp[a], tp[b] + ts[b] - l + l * c];
                        } else {
                            var pp = [-vp[a] + tp[a] + ps[a] > vs[a] ? -vp[a] + tp[a] + ts[a] / 2 > vs[a] / 2 && tp[a] + ts[a] - ps[a] >= 0 ? tp[a] + ts[a] - ps[a] : tp[a] : tp[a], -vp[b] + tp[b] + ts[b] + ps[b] - l + l * c > vs[b] ? -vp[b] + tp[b] + ts[b] / 2 > vs[b] / 2 && tp[b] + ts[b] - l - l * c >= 0 ? tp[b] + ts[b] - l - l * c : tp[b] + ts[b] - l + l * c : tp[b] + ts[b] - l + l * c >= 0 ? tp[b] + ts[b] - l + l * c : tp[b] + ts[b] - l - l * c];
                        }

                        var x = pp[a];
                        var y = pp[b];
                        var positionValue = thisObj.fixed ? 'fixed' : 'absolute';
                        var contractShadow = (pp[0] + ps[0] > tp[0] || pp[0] < tp[0] + ts[0]) && pp[1] + ps[1] < tp[1] + ts[1];

                        jsc._drawPosition(thisObj, x, y, positionValue, contractShadow);
                    }
                },

                _drawPosition: function _drawPosition(thisObj, x, y, positionValue, contractShadow) {
                    var vShadow = contractShadow ? 0 : thisObj.shadowBlur; // px

                    jsc.picker.wrap.style.position = positionValue;
                    jsc.picker.wrap.style.left = x + 'px';
                    jsc.picker.wrap.style.top = y + 'px';

                    jsc.setBoxShadow(jsc.picker.boxS, thisObj.shadow ? new jsc.BoxShadow(0, vShadow, thisObj.shadowBlur, 0, thisObj.shadowColor) : null);
                },

                getPickerDims: function getPickerDims(thisObj) {
                    var displaySlider = !!jsc.getSliderComponent(thisObj);
                    var dims = [2 * thisObj.insetWidth + 2 * thisObj.padding + thisObj.width + (displaySlider ? 2 * thisObj.insetWidth + jsc.getPadToSliderPadding(thisObj) + thisObj.sliderSize : 0), 2 * thisObj.insetWidth + 2 * thisObj.padding + thisObj.height + (thisObj.closable ? 2 * thisObj.insetWidth + thisObj.padding + thisObj.buttonHeight : 0)];
                    return dims;
                },

                getPickerOuterDims: function getPickerOuterDims(thisObj) {
                    var dims = jsc.getPickerDims(thisObj);
                    return [dims[0] + 2 * thisObj.borderWidth, dims[1] + 2 * thisObj.borderWidth];
                },

                getPadToSliderPadding: function getPadToSliderPadding(thisObj) {
                    return Math.max(thisObj.padding, 1.5 * (2 * thisObj.pointerBorderWidth + thisObj.pointerThickness));
                },

                getPadYComponent: function getPadYComponent(thisObj) {
                    switch (thisObj.mode.charAt(1).toLowerCase()) {
                        case 'v':
                            return 'v';
                            break;
                    }
                    return 's';
                },

                getSliderComponent: function getSliderComponent(thisObj) {
                    if (thisObj.mode.length > 2) {
                        switch (thisObj.mode.charAt(2).toLowerCase()) {
                            case 's':
                                return 's';
                                break;
                            case 'v':
                                return 'v';
                                break;
                        }
                    }
                    return null;
                },

                onDocumentMouseDown: function onDocumentMouseDown(e) {
                    if (!e) {
                        e = window.event;
                    }
                    var target = e.target || e.srcElement;

                    if (target._jscLinkedInstance) {
                        if (target._jscLinkedInstance.showOnClick) {
                            target._jscLinkedInstance.show();
                        }
                    } else if (target._jscControlName) {
                        jsc.onControlPointerStart(e, target, target._jscControlName, 'mouse');
                    } else {
                        // Mouse is outside the picker controls -> hide the color picker!
                        if (jsc.picker && jsc.picker.owner) {
                            jsc.picker.owner.hide();
                        }
                    }
                },

                onDocumentTouchStart: function onDocumentTouchStart(e) {
                    if (!e) {
                        e = window.event;
                    }
                    var target = e.target || e.srcElement;

                    if (target._jscLinkedInstance) {
                        if (target._jscLinkedInstance.showOnClick) {
                            target._jscLinkedInstance.show();
                        }
                    } else if (target._jscControlName) {
                        jsc.onControlPointerStart(e, target, target._jscControlName, 'touch');
                    } else {
                        if (jsc.picker && jsc.picker.owner) {
                            jsc.picker.owner.hide();
                        }
                    }
                },

                onWindowResize: function onWindowResize(e) {
                    jsc.redrawPosition();
                },

                onParentScroll: function onParentScroll(e) {
                    // hide the picker when one of the parent elements is scrolled
                    if (jsc.picker && jsc.picker.owner) {
                        jsc.picker.owner.hide();
                    }
                },

                _pointerMoveEvent: {
                    mouse: 'mousemove',
                    touch: 'touchmove'
                },
                _pointerEndEvent: {
                    mouse: 'mouseup',
                    touch: 'touchend'
                },

                _pointerOrigin: null,
                _capturedTarget: null,

                onControlPointerStart: function onControlPointerStart(e, target, controlName, pointerType) {
                    var thisObj = target._jscInstance;

                    jsc.preventDefault(e);
                    jsc.captureTarget(target);

                    var registerDragEvents = function registerDragEvents(doc, offset) {
                        jsc.attachGroupEvent('drag', doc, jsc._pointerMoveEvent[pointerType], jsc.onDocumentPointerMove(e, target, controlName, pointerType, offset));
                        jsc.attachGroupEvent('drag', doc, jsc._pointerEndEvent[pointerType], jsc.onDocumentPointerEnd(e, target, controlName, pointerType));
                    };

                    registerDragEvents(document, [0, 0]);

                    if (window.parent && window.frameElement) {
                        var rect = window.frameElement.getBoundingClientRect();
                        var ofs = [-rect.left, -rect.top];
                        registerDragEvents(window.parent.window.document, ofs);
                    }

                    var abs = jsc.getAbsPointerPos(e);
                    var rel = jsc.getRelPointerPos(e);
                    jsc._pointerOrigin = {
                        x: abs.x - rel.x,
                        y: abs.y - rel.y
                    };

                    switch (controlName) {
                        case 'pad':
                            // if the slider is at the bottom, move it up
                            switch (jsc.getSliderComponent(thisObj)) {
                                case 's':
                                    if (thisObj.hsv[1] === 0) {
                                        thisObj.fromHSV(null, 100, null);
                                    }
                                    ;
                                    break;
                                case 'v':
                                    if (thisObj.hsv[2] === 0) {
                                        thisObj.fromHSV(null, null, 100);
                                    }
                                    ;
                                    break;
                            }
                            jsc.setPad(thisObj, e, 0, 0);
                            break;

                        case 'sld':
                            jsc.setSld(thisObj, e, 0);
                            break;
                    }

                    jsc.dispatchFineChange(thisObj);
                },

                onDocumentPointerMove: function onDocumentPointerMove(e, target, controlName, pointerType, offset) {
                    return function (e) {
                        var thisObj = target._jscInstance;
                        switch (controlName) {
                            case 'pad':
                                if (!e) {
                                    e = window.event;
                                }
                                jsc.setPad(thisObj, e, offset[0], offset[1]);
                                jsc.dispatchFineChange(thisObj);
                                break;

                            case 'sld':
                                if (!e) {
                                    e = window.event;
                                }
                                jsc.setSld(thisObj, e, offset[1]);
                                jsc.dispatchFineChange(thisObj);
                                break;
                        }
                    };
                },

                onDocumentPointerEnd: function onDocumentPointerEnd(e, target, controlName, pointerType) {
                    return function (e) {
                        var thisObj = target._jscInstance;
                        jsc.detachGroupEvents('drag');
                        jsc.releaseTarget();
                        // Always dispatch changes after detaching outstanding mouse handlers,
                        // in case some user interaction will occur in user's onchange callback
                        // that would intrude with current mouse events
                        jsc.dispatchChange(thisObj);
                    };
                },

                dispatchChange: function dispatchChange(thisObj) {
                    if (thisObj.valueElement) {
                        if (jsc.isElementType(thisObj.valueElement, 'input')) {
                            jsc.fireEvent(thisObj.valueElement, 'change');
                        }
                    }
                },

                dispatchFineChange: function dispatchFineChange(thisObj) {
                    if (thisObj.onFineChange) {
                        var callback;
                        if (typeof thisObj.onFineChange === 'string') {
                            callback = new Function(thisObj.onFineChange);
                        } else {
                            callback = thisObj.onFineChange;
                        }
                        callback.call(thisObj);
                    }
                },

                setPad: function setPad(thisObj, e, ofsX, ofsY) {
                    var pointerAbs = jsc.getAbsPointerPos(e);
                    var x = ofsX + pointerAbs.x - jsc._pointerOrigin.x - thisObj.padding - thisObj.insetWidth;
                    var y = ofsY + pointerAbs.y - jsc._pointerOrigin.y - thisObj.padding - thisObj.insetWidth;

                    var xVal = x * (360 / (thisObj.width - 1));
                    var yVal = 100 - y * (100 / (thisObj.height - 1));

                    switch (jsc.getPadYComponent(thisObj)) {
                        case 's':
                            thisObj.fromHSV(xVal, yVal, null, jsc.leaveSld);
                            break;
                        case 'v':
                            thisObj.fromHSV(xVal, null, yVal, jsc.leaveSld);
                            break;
                    }
                },

                setSld: function setSld(thisObj, e, ofsY) {
                    var pointerAbs = jsc.getAbsPointerPos(e);
                    var y = ofsY + pointerAbs.y - jsc._pointerOrigin.y - thisObj.padding - thisObj.insetWidth;

                    var yVal = 100 - y * (100 / (thisObj.height - 1));

                    switch (jsc.getSliderComponent(thisObj)) {
                        case 's':
                            thisObj.fromHSV(null, yVal, null, jsc.leavePad);
                            break;
                        case 'v':
                            thisObj.fromHSV(null, null, yVal, jsc.leavePad);
                            break;
                    }
                },

                _vmlNS: 'jsc_vml_',
                _vmlCSS: 'jsc_vml_css_',
                _vmlReady: false,

                initVML: function initVML() {
                    if (!jsc._vmlReady) {
                        // init VML namespace
                        var doc = document;
                        if (!doc.namespaces[jsc._vmlNS]) {
                            doc.namespaces.add(jsc._vmlNS, 'urn:schemas-microsoft-com:vml');
                        }
                        if (!doc.styleSheets[jsc._vmlCSS]) {
                            var tags = ['shape', 'shapetype', 'group', 'background', 'path', 'formulas', 'handles', 'fill', 'stroke', 'shadow', 'textbox', 'textpath', 'imagedata', 'line', 'polyline', 'curve', 'rect', 'roundrect', 'oval', 'arc', 'image'];
                            var ss = doc.createStyleSheet();
                            ss.owningElement.id = jsc._vmlCSS;
                            for (var i = 0; i < tags.length; i += 1) {
                                ss.addRule(jsc._vmlNS + '\\:' + tags[i], 'behavior:url(#default#VML);');
                            }
                        }
                        jsc._vmlReady = true;
                    }
                },

                createPalette: function createPalette() {

                    var paletteObj = {
                        elm: null,
                        draw: null
                    };

                    if (jsc.isCanvasSupported) {
                        // Canvas implementation for modern browsers

                        var canvas = document.createElement('canvas');
                        var ctx = canvas.getContext('2d');

                        var drawFunc = function drawFunc(width, height, type) {
                            canvas.width = width;
                            canvas.height = height;

                            ctx.clearRect(0, 0, canvas.width, canvas.height);

                            var hGrad = ctx.createLinearGradient(0, 0, canvas.width, 0);
                            hGrad.addColorStop(0 / 6, '#F00');
                            hGrad.addColorStop(1 / 6, '#FF0');
                            hGrad.addColorStop(2 / 6, '#0F0');
                            hGrad.addColorStop(3 / 6, '#0FF');
                            hGrad.addColorStop(4 / 6, '#00F');
                            hGrad.addColorStop(5 / 6, '#F0F');
                            hGrad.addColorStop(6 / 6, '#F00');

                            ctx.fillStyle = hGrad;
                            ctx.fillRect(0, 0, canvas.width, canvas.height);

                            var vGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
                            switch (type.toLowerCase()) {
                                case 's':
                                    vGrad.addColorStop(0, 'rgba(255,255,255,0)');
                                    vGrad.addColorStop(1, 'rgba(255,255,255,1)');
                                    break;
                                case 'v':
                                    vGrad.addColorStop(0, 'rgba(0,0,0,0)');
                                    vGrad.addColorStop(1, 'rgba(0,0,0,1)');
                                    break;
                            }
                            ctx.fillStyle = vGrad;
                            ctx.fillRect(0, 0, canvas.width, canvas.height);
                        };

                        paletteObj.elm = canvas;
                        paletteObj.draw = drawFunc;
                    } else {
                        // VML fallback for IE 7 and 8

                        jsc.initVML();

                        var vmlContainer = document.createElement('div');
                        vmlContainer.style.position = 'relative';
                        vmlContainer.style.overflow = 'hidden';

                        var hGrad = document.createElement(jsc._vmlNS + ':fill');
                        hGrad.type = 'gradient';
                        hGrad.method = 'linear';
                        hGrad.angle = '90';
                        hGrad.colors = '16.67% #F0F, 33.33% #00F, 50% #0FF, 66.67% #0F0, 83.33% #FF0';

                        var hRect = document.createElement(jsc._vmlNS + ':rect');
                        hRect.style.position = 'absolute';
                        hRect.style.left = -1 + 'px';
                        hRect.style.top = -1 + 'px';
                        hRect.stroked = false;
                        hRect.appendChild(hGrad);
                        vmlContainer.appendChild(hRect);

                        var vGrad = document.createElement(jsc._vmlNS + ':fill');
                        vGrad.type = 'gradient';
                        vGrad.method = 'linear';
                        vGrad.angle = '180';
                        vGrad.opacity = '0';

                        var vRect = document.createElement(jsc._vmlNS + ':rect');
                        vRect.style.position = 'absolute';
                        vRect.style.left = -1 + 'px';
                        vRect.style.top = -1 + 'px';
                        vRect.stroked = false;
                        vRect.appendChild(vGrad);
                        vmlContainer.appendChild(vRect);

                        var drawFunc = function drawFunc(width, height, type) {
                            vmlContainer.style.width = width + 'px';
                            vmlContainer.style.height = height + 'px';

                            hRect.style.width = vRect.style.width = width + 1 + 'px';
                            hRect.style.height = vRect.style.height = height + 1 + 'px';

                            // Colors must be specified during every redraw, otherwise IE won't display
                            // a full gradient during a subsequential redraw
                            hGrad.color = '#F00';
                            hGrad.color2 = '#F00';

                            switch (type.toLowerCase()) {
                                case 's':
                                    vGrad.color = vGrad.color2 = '#FFF';
                                    break;
                                case 'v':
                                    vGrad.color = vGrad.color2 = '#000';
                                    break;
                            }
                        };

                        paletteObj.elm = vmlContainer;
                        paletteObj.draw = drawFunc;
                    }

                    return paletteObj;
                },

                createSliderGradient: function createSliderGradient() {

                    var sliderObj = {
                        elm: null,
                        draw: null
                    };

                    if (jsc.isCanvasSupported) {
                        // Canvas implementation for modern browsers

                        var canvas = document.createElement('canvas');
                        var ctx = canvas.getContext('2d');

                        var drawFunc = function drawFunc(width, height, color1, color2) {
                            canvas.width = width;
                            canvas.height = height;

                            ctx.clearRect(0, 0, canvas.width, canvas.height);

                            var grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
                            grad.addColorStop(0, color1);
                            grad.addColorStop(1, color2);

                            ctx.fillStyle = grad;
                            ctx.fillRect(0, 0, canvas.width, canvas.height);
                        };

                        sliderObj.elm = canvas;
                        sliderObj.draw = drawFunc;
                    } else {
                        // VML fallback for IE 7 and 8

                        jsc.initVML();

                        var vmlContainer = document.createElement('div');
                        vmlContainer.style.position = 'relative';
                        vmlContainer.style.overflow = 'hidden';

                        var grad = document.createElement(jsc._vmlNS + ':fill');
                        grad.type = 'gradient';
                        grad.method = 'linear';
                        grad.angle = '180';

                        var rect = document.createElement(jsc._vmlNS + ':rect');
                        rect.style.position = 'absolute';
                        rect.style.left = -1 + 'px';
                        rect.style.top = -1 + 'px';
                        rect.stroked = false;
                        rect.appendChild(grad);
                        vmlContainer.appendChild(rect);

                        var drawFunc = function drawFunc(width, height, color1, color2) {
                            vmlContainer.style.width = width + 'px';
                            vmlContainer.style.height = height + 'px';

                            rect.style.width = width + 1 + 'px';
                            rect.style.height = height + 1 + 'px';

                            grad.color = color1;
                            grad.color2 = color2;
                        };

                        sliderObj.elm = vmlContainer;
                        sliderObj.draw = drawFunc;
                    }

                    return sliderObj;
                },

                leaveValue: 1 << 0,
                leaveStyle: 1 << 1,
                leavePad: 1 << 2,
                leaveSld: 1 << 3,

                BoxShadow: function () {
                    var BoxShadow = function BoxShadow(hShadow, vShadow, blur, spread, color, inset) {
                        this.hShadow = hShadow;
                        this.vShadow = vShadow;
                        this.blur = blur;
                        this.spread = spread;
                        this.color = color;
                        this.inset = !!inset;
                    };

                    BoxShadow.prototype.toString = function () {
                        var vals = [Math.round(this.hShadow) + 'px', Math.round(this.vShadow) + 'px', Math.round(this.blur) + 'px', Math.round(this.spread) + 'px', this.color];
                        if (this.inset) {
                            vals.push('inset');
                        }
                        return vals.join(' ');
                    };

                    return BoxShadow;
                }(),

                //
                // Usage:
                // var myColor = new jscolor(<targetElement> [, <options>])
                //

                jscolor: function jscolor(targetElement, options) {

                    // General options
                    //
                    this.value = null; // initial HEX color. To change it later, use methods fromString(), fromHSV() and fromRGB()
                    this.valueElement = targetElement; // element that will be used to display and input the color code
                    this.styleElement = targetElement; // element that will preview the picked color using CSS backgroundColor
                    this.required = true; // whether the associated text <input> can be left empty
                    this.refine = true; // whether to refine the entered color code (e.g. uppercase it and remove whitespace)
                    this.hash = false; // whether to prefix the HEX color code with # symbol
                    this.uppercase = true; // whether to show the color code in upper case
                    this.onFineChange = null; // called instantly every time the color changes (value can be either a function or a string with javascript code)
                    this.activeClass = 'jscolor-active'; // class to be set to the target element when a picker window is open on it
                    this.overwriteImportant = false; // whether to overwrite colors of styleElement using !important
                    this.minS = 0; // min allowed saturation (0 - 100)
                    this.maxS = 100; // max allowed saturation (0 - 100)
                    this.minV = 0; // min allowed value (brightness) (0 - 100)
                    this.maxV = 100; // max allowed value (brightness) (0 - 100)

                    // Accessing the picked color
                    //
                    this.hsv = [0, 0, 100]; // read-only  [0-360, 0-100, 0-100]
                    this.rgb = [255, 255, 255]; // read-only  [0-255, 0-255, 0-255]

                    // Color Picker options
                    //
                    this.width = 181; // width of color palette (in px)
                    this.height = 101; // height of color palette (in px)
                    this.showOnClick = true; // whether to display the color picker when user clicks on its target element
                    this.mode = 'HSV'; // HSV | HVS | HS | HV - layout of the color picker controls
                    this.position = 'bottom'; // left | right | top | bottom - position relative to the target element
                    this.smartPosition = true; // automatically change picker position when there is not enough space for it
                    this.sliderSize = 16; // px
                    this.crossSize = 8; // px
                    this.closable = false; // whether to display the Close button
                    this.closeText = 'Close';
                    this.buttonColor = '#000000'; // CSS color
                    this.buttonHeight = 18; // px
                    this.padding = 12; // px
                    this.backgroundColor = '#FFFFFF'; // CSS color
                    this.borderWidth = 1; // px
                    this.borderColor = '#BBBBBB'; // CSS color
                    this.borderRadius = 8; // px
                    this.insetWidth = 1; // px
                    this.insetColor = '#BBBBBB'; // CSS color
                    this.shadow = true; // whether to display shadow
                    this.shadowBlur = 15; // px
                    this.shadowColor = 'rgba(0,0,0,0.2)'; // CSS color
                    this.pointerColor = '#4C4C4C'; // px
                    this.pointerBorderColor = '#FFFFFF'; // px
                    this.pointerBorderWidth = 1; // px
                    this.pointerThickness = 2; // px
                    this.zIndex = 1000;
                    this.container = null; // where to append the color picker (BODY element by default)


                    for (var opt in options) {
                        if (options.hasOwnProperty(opt)) {
                            this[opt] = options[opt];
                        }
                    }

                    this.hide = function () {
                        if (isPickerOwner()) {
                            detachPicker();
                        }
                    };

                    this.show = function () {
                        drawPicker();
                    };

                    this.redraw = function () {
                        if (isPickerOwner()) {
                            drawPicker();
                        }
                    };

                    this.importColor = function () {
                        if (!this.valueElement) {
                            this.exportColor();
                        } else {
                            if (jsc.isElementType(this.valueElement, 'input')) {
                                if (!this.refine) {
                                    if (!this.fromString(this.valueElement.value, jsc.leaveValue)) {
                                        if (this.styleElement) {
                                            this.styleElement.style.backgroundImage = this.styleElement._jscOrigStyle.backgroundImage;
                                            this.styleElement.style.backgroundColor = this.styleElement._jscOrigStyle.backgroundColor;
                                            this.styleElement.style.color = this.styleElement._jscOrigStyle.color;
                                        }
                                        this.exportColor(jsc.leaveValue | jsc.leaveStyle);
                                    }
                                } else if (!this.required && /^\s*$/.test(this.valueElement.value)) {
                                    this.valueElement.value = '';
                                    if (this.styleElement) {
                                        this.styleElement.style.backgroundImage = this.styleElement._jscOrigStyle.backgroundImage;
                                        this.styleElement.style.backgroundColor = this.styleElement._jscOrigStyle.backgroundColor;
                                        this.styleElement.style.color = this.styleElement._jscOrigStyle.color;
                                    }
                                    this.exportColor(jsc.leaveValue | jsc.leaveStyle);
                                } else if (this.fromString(this.valueElement.value)) {
                                    // managed to import color successfully from the value -> OK, don't do anything
                                } else {
                                    this.exportColor();
                                }
                            } else {
                                // not an input element -> doesn't have any value
                                this.exportColor();
                            }
                        }
                    };

                    this.exportColor = function (flags) {
                        if (!(flags & jsc.leaveValue) && this.valueElement) {
                            var value = this.toString();
                            if (this.uppercase) {
                                value = value.toUpperCase();
                            }
                            if (this.hash) {
                                value = '#' + value;
                            }

                            if (jsc.isElementType(this.valueElement, 'input')) {
                                this.valueElement.value = value;
                            } else {
                                this.valueElement.innerHTML = value;
                            }
                        }
                        if (!(flags & jsc.leaveStyle)) {
                            if (this.styleElement) {
                                var bgColor = '#' + this.toString();
                                var fgColor = this.isLight() ? '#000' : '#FFF';

                                this.styleElement.style.backgroundImage = 'none';
                                this.styleElement.style.backgroundColor = bgColor;
                                this.styleElement.style.color = fgColor;

                                if (this.overwriteImportant) {
                                    this.styleElement.setAttribute('style', 'background: ' + bgColor + ' !important; ' + 'color: ' + fgColor + ' !important;');
                                }
                            }
                        }
                        if (!(flags & jsc.leavePad) && isPickerOwner()) {
                            redrawPad();
                        }
                        if (!(flags & jsc.leaveSld) && isPickerOwner()) {
                            redrawSld();
                        }
                    };

                    // h: 0-360
                    // s: 0-100
                    // v: 0-100
                    //
                    this.fromHSV = function (h, s, v, flags) {
                        // null = don't change
                        if (h !== null) {
                            if (isNaN(h)) {
                                return false;
                            }
                            h = Math.max(0, Math.min(360, h));
                        }
                        if (s !== null) {
                            if (isNaN(s)) {
                                return false;
                            }
                            s = Math.max(0, Math.min(100, this.maxS, s), this.minS);
                        }
                        if (v !== null) {
                            if (isNaN(v)) {
                                return false;
                            }
                            v = Math.max(0, Math.min(100, this.maxV, v), this.minV);
                        }

                        this.rgb = HSV_RGB(h === null ? this.hsv[0] : this.hsv[0] = h, s === null ? this.hsv[1] : this.hsv[1] = s, v === null ? this.hsv[2] : this.hsv[2] = v);

                        this.exportColor(flags);
                    };

                    // r: 0-255
                    // g: 0-255
                    // b: 0-255
                    //
                    this.fromRGB = function (r, g, b, flags) {
                        // null = don't change
                        if (r !== null) {
                            if (isNaN(r)) {
                                return false;
                            }
                            r = Math.max(0, Math.min(255, r));
                        }
                        if (g !== null) {
                            if (isNaN(g)) {
                                return false;
                            }
                            g = Math.max(0, Math.min(255, g));
                        }
                        if (b !== null) {
                            if (isNaN(b)) {
                                return false;
                            }
                            b = Math.max(0, Math.min(255, b));
                        }

                        var hsv = RGB_HSV(r === null ? this.rgb[0] : r, g === null ? this.rgb[1] : g, b === null ? this.rgb[2] : b);
                        if (hsv[0] !== null) {
                            this.hsv[0] = Math.max(0, Math.min(360, hsv[0]));
                        }
                        if (hsv[2] !== 0) {
                            this.hsv[1] = hsv[1] === null ? null : Math.max(0, this.minS, Math.min(100, this.maxS, hsv[1]));
                        }
                        this.hsv[2] = hsv[2] === null ? null : Math.max(0, this.minV, Math.min(100, this.maxV, hsv[2]));

                        // update RGB according to final HSV, as some values might be trimmed
                        var rgb = HSV_RGB(this.hsv[0], this.hsv[1], this.hsv[2]);
                        this.rgb[0] = rgb[0];
                        this.rgb[1] = rgb[1];
                        this.rgb[2] = rgb[2];

                        this.exportColor(flags);
                    };

                    this.fromString = function (str, flags) {
                        var m;
                        if (m = str.match(/^\W*([0-9A-F]{3}([0-9A-F]{3})?)\W*$/i)) {
                            // HEX notation
                            //

                            if (m[1].length === 6) {
                                // 6-char notation
                                this.fromRGB(parseInt(m[1].substr(0, 2), 16), parseInt(m[1].substr(2, 2), 16), parseInt(m[1].substr(4, 2), 16), flags);
                            } else {
                                // 3-char notation
                                this.fromRGB(parseInt(m[1].charAt(0) + m[1].charAt(0), 16), parseInt(m[1].charAt(1) + m[1].charAt(1), 16), parseInt(m[1].charAt(2) + m[1].charAt(2), 16), flags);
                            }
                            return true;
                        } else if (m = str.match(/^\W*rgba?\(([^)]*)\)\W*$/i)) {
                            var params = m[1].split(',');
                            var re = /^\s*(\d*)(\.\d+)?\s*$/;
                            var mR, mG, mB;
                            if (params.length >= 3 && (mR = params[0].match(re)) && (mG = params[1].match(re)) && (mB = params[2].match(re))) {
                                var r = parseFloat((mR[1] || '0') + (mR[2] || ''));
                                var g = parseFloat((mG[1] || '0') + (mG[2] || ''));
                                var b = parseFloat((mB[1] || '0') + (mB[2] || ''));
                                this.fromRGB(r, g, b, flags);
                                return true;
                            }
                        }
                        return false;
                    };

                    this.toString = function () {
                        return (0x100 | Math.round(this.rgb[0])).toString(16).substr(1) + (0x100 | Math.round(this.rgb[1])).toString(16).substr(1) + (0x100 | Math.round(this.rgb[2])).toString(16).substr(1);
                    };

                    this.toHEXString = function () {
                        return '#' + this.toString().toUpperCase();
                    };

                    this.toRGBString = function () {
                        return 'rgb(' + Math.round(this.rgb[0]) + ',' + Math.round(this.rgb[1]) + ',' + Math.round(this.rgb[2]) + ')';
                    };

                    this.isLight = function () {
                        return 0.213 * this.rgb[0] + 0.715 * this.rgb[1] + 0.072 * this.rgb[2] > 255 / 2;
                    };

                    this._processParentElementsInDOM = function () {
                        if (this._linkedElementsProcessed) {
                            return;
                        }
                        this._linkedElementsProcessed = true;

                        var elm = this.targetElement;
                        do {
                            // If the target element or one of its parent nodes has fixed position,
                            // then use fixed positioning instead
                            //
                            // Note: In Firefox, getComputedStyle returns null in a hidden iframe,
                            // that's why we need to check if the returned style object is non-empty
                            var currStyle = jsc.getStyle(elm);
                            if (currStyle && currStyle.position.toLowerCase() === 'fixed') {
                                this.fixed = true;
                            }

                            if (elm !== this.targetElement) {
                                // Ensure to attach onParentScroll only once to each parent element
                                // (multiple targetElements can share the same parent nodes)
                                //
                                // Note: It's not just offsetParents that can be scrollable,
                                // that's why we loop through all parent nodes
                                if (!elm._jscEventsAttached) {
                                    jsc.attachEvent(elm, 'scroll', jsc.onParentScroll);
                                    elm._jscEventsAttached = true;
                                }
                            }
                        } while ((elm = elm.parentNode) && !jsc.isElementType(elm, 'body'));
                    };

                    // r: 0-255
                    // g: 0-255
                    // b: 0-255
                    //
                    // returns: [ 0-360, 0-100, 0-100 ]
                    //
                    function RGB_HSV(r, g, b) {
                        r /= 255;
                        g /= 255;
                        b /= 255;
                        var n = Math.min(Math.min(r, g), b);
                        var v = Math.max(Math.max(r, g), b);
                        var m = v - n;
                        if (m === 0) {
                            return [null, 0, 100 * v];
                        }
                        var h = r === n ? 3 + (b - g) / m : g === n ? 5 + (r - b) / m : 1 + (g - r) / m;
                        return [60 * (h === 6 ? 0 : h), 100 * (m / v), 100 * v];
                    }

                    // h: 0-360
                    // s: 0-100
                    // v: 0-100
                    //
                    // returns: [ 0-255, 0-255, 0-255 ]
                    //
                    function HSV_RGB(h, s, v) {
                        var u = 255 * (v / 100);

                        if (h === null) {
                            return [u, u, u];
                        }

                        h /= 60;
                        s /= 100;

                        var i = Math.floor(h);
                        var f = i % 2 ? h - i : 1 - (h - i);
                        var m = u * (1 - s);
                        var n = u * (1 - s * f);
                        switch (i) {
                            case 6:
                            case 0:
                                return [u, n, m];
                            case 1:
                                return [n, u, m];
                            case 2:
                                return [m, u, n];
                            case 3:
                                return [m, n, u];
                            case 4:
                                return [n, m, u];
                            case 5:
                                return [u, m, n];
                        }
                    }

                    function detachPicker() {
                        jsc.unsetClass(THIS.targetElement, THIS.activeClass);
                        jsc.picker.wrap.parentNode.removeChild(jsc.picker.wrap);
                        delete jsc.picker.owner;
                    }

                    function drawPicker() {

                        // At this point, when drawing the picker, we know what the parent elements are
                        // and we can do all related DOM operations, such as registering events on them
                        // or checking their positioning
                        THIS._processParentElementsInDOM();

                        if (!jsc.picker) {
                            jsc.picker = {
                                owner: null,
                                wrap: document.createElement('div'),
                                box: document.createElement('div'),
                                boxS: document.createElement('div'), // shadow area
                                boxB: document.createElement('div'), // border
                                pad: document.createElement('div'),
                                padB: document.createElement('div'), // border
                                padM: document.createElement('div'), // mouse/touch area
                                padPal: jsc.createPalette(),
                                cross: document.createElement('div'),
                                crossBY: document.createElement('div'), // border Y
                                crossBX: document.createElement('div'), // border X
                                crossLY: document.createElement('div'), // line Y
                                crossLX: document.createElement('div'), // line X
                                sld: document.createElement('div'),
                                sldB: document.createElement('div'), // border
                                sldM: document.createElement('div'), // mouse/touch area
                                sldGrad: jsc.createSliderGradient(),
                                sldPtrS: document.createElement('div'), // slider pointer spacer
                                sldPtrIB: document.createElement('div'), // slider pointer inner border
                                sldPtrMB: document.createElement('div'), // slider pointer middle border
                                sldPtrOB: document.createElement('div'), // slider pointer outer border
                                btn: document.createElement('div'),
                                btnT: document.createElement('span') // text
                            };

                            jsc.picker.pad.appendChild(jsc.picker.padPal.elm);
                            jsc.picker.padB.appendChild(jsc.picker.pad);
                            jsc.picker.cross.appendChild(jsc.picker.crossBY);
                            jsc.picker.cross.appendChild(jsc.picker.crossBX);
                            jsc.picker.cross.appendChild(jsc.picker.crossLY);
                            jsc.picker.cross.appendChild(jsc.picker.crossLX);
                            jsc.picker.padB.appendChild(jsc.picker.cross);
                            jsc.picker.box.appendChild(jsc.picker.padB);
                            jsc.picker.box.appendChild(jsc.picker.padM);

                            jsc.picker.sld.appendChild(jsc.picker.sldGrad.elm);
                            jsc.picker.sldB.appendChild(jsc.picker.sld);
                            jsc.picker.sldB.appendChild(jsc.picker.sldPtrOB);
                            jsc.picker.sldPtrOB.appendChild(jsc.picker.sldPtrMB);
                            jsc.picker.sldPtrMB.appendChild(jsc.picker.sldPtrIB);
                            jsc.picker.sldPtrIB.appendChild(jsc.picker.sldPtrS);
                            jsc.picker.box.appendChild(jsc.picker.sldB);
                            jsc.picker.box.appendChild(jsc.picker.sldM);

                            jsc.picker.btn.appendChild(jsc.picker.btnT);
                            jsc.picker.box.appendChild(jsc.picker.btn);

                            jsc.picker.boxB.appendChild(jsc.picker.box);
                            jsc.picker.wrap.appendChild(jsc.picker.boxS);
                            jsc.picker.wrap.appendChild(jsc.picker.boxB);
                        }

                        var p = jsc.picker;

                        var displaySlider = !!jsc.getSliderComponent(THIS);
                        var dims = jsc.getPickerDims(THIS);
                        var crossOuterSize = 2 * THIS.pointerBorderWidth + THIS.pointerThickness + 2 * THIS.crossSize;
                        var padToSliderPadding = jsc.getPadToSliderPadding(THIS);
                        var borderRadius = Math.min(THIS.borderRadius, Math.round(THIS.padding * Math.PI)); // px
                        var padCursor = 'crosshair';

                        // wrap
                        p.wrap.style.clear = 'both';
                        p.wrap.style.width = dims[0] + 2 * THIS.borderWidth + 'px';
                        p.wrap.style.height = dims[1] + 2 * THIS.borderWidth + 'px';
                        p.wrap.style.zIndex = THIS.zIndex;

                        // picker
                        p.box.style.width = dims[0] + 'px';
                        p.box.style.height = dims[1] + 'px';

                        p.boxS.style.position = 'absolute';
                        p.boxS.style.left = '0';
                        p.boxS.style.top = '0';
                        p.boxS.style.width = '100%';
                        p.boxS.style.height = '100%';
                        jsc.setBorderRadius(p.boxS, borderRadius + 'px');

                        // picker border
                        p.boxB.style.position = 'relative';
                        p.boxB.style.border = THIS.borderWidth + 'px solid';
                        p.boxB.style.borderColor = THIS.borderColor;
                        p.boxB.style.background = THIS.backgroundColor;
                        jsc.setBorderRadius(p.boxB, borderRadius + 'px');

                        // IE hack:
                        // If the element is transparent, IE will trigger the event on the elements under it,
                        // e.g. on Canvas or on elements with border
                        p.padM.style.background = p.sldM.style.background = '#FFF';
                        jsc.setStyle(p.padM, 'opacity', '0');
                        jsc.setStyle(p.sldM, 'opacity', '0');

                        // pad
                        p.pad.style.position = 'relative';
                        p.pad.style.width = THIS.width + 'px';
                        p.pad.style.height = THIS.height + 'px';

                        // pad palettes (HSV and HVS)
                        p.padPal.draw(THIS.width, THIS.height, jsc.getPadYComponent(THIS));

                        // pad border
                        p.padB.style.position = 'absolute';
                        p.padB.style.left = THIS.padding + 'px';
                        p.padB.style.top = THIS.padding + 'px';
                        p.padB.style.border = THIS.insetWidth + 'px solid';
                        p.padB.style.borderColor = THIS.insetColor;

                        // pad mouse area
                        p.padM._jscInstance = THIS;
                        p.padM._jscControlName = 'pad';
                        p.padM.style.position = 'absolute';
                        p.padM.style.left = '0';
                        p.padM.style.top = '0';
                        p.padM.style.width = THIS.padding + 2 * THIS.insetWidth + THIS.width + padToSliderPadding / 2 + 'px';
                        p.padM.style.height = dims[1] + 'px';
                        p.padM.style.cursor = padCursor;

                        // pad cross
                        p.cross.style.position = 'absolute';
                        p.cross.style.left = p.cross.style.top = '0';
                        p.cross.style.width = p.cross.style.height = crossOuterSize + 'px';

                        // pad cross border Y and X
                        p.crossBY.style.position = p.crossBX.style.position = 'absolute';
                        p.crossBY.style.background = p.crossBX.style.background = THIS.pointerBorderColor;
                        p.crossBY.style.width = p.crossBX.style.height = 2 * THIS.pointerBorderWidth + THIS.pointerThickness + 'px';
                        p.crossBY.style.height = p.crossBX.style.width = crossOuterSize + 'px';
                        p.crossBY.style.left = p.crossBX.style.top = Math.floor(crossOuterSize / 2) - Math.floor(THIS.pointerThickness / 2) - THIS.pointerBorderWidth + 'px';
                        p.crossBY.style.top = p.crossBX.style.left = '0';

                        // pad cross line Y and X
                        p.crossLY.style.position = p.crossLX.style.position = 'absolute';
                        p.crossLY.style.background = p.crossLX.style.background = THIS.pointerColor;
                        p.crossLY.style.height = p.crossLX.style.width = crossOuterSize - 2 * THIS.pointerBorderWidth + 'px';
                        p.crossLY.style.width = p.crossLX.style.height = THIS.pointerThickness + 'px';
                        p.crossLY.style.left = p.crossLX.style.top = Math.floor(crossOuterSize / 2) - Math.floor(THIS.pointerThickness / 2) + 'px';
                        p.crossLY.style.top = p.crossLX.style.left = THIS.pointerBorderWidth + 'px';

                        // slider
                        p.sld.style.overflow = 'hidden';
                        p.sld.style.width = THIS.sliderSize + 'px';
                        p.sld.style.height = THIS.height + 'px';

                        // slider gradient
                        p.sldGrad.draw(THIS.sliderSize, THIS.height, '#000', '#000');

                        // slider border
                        p.sldB.style.display = displaySlider ? 'block' : 'none';
                        p.sldB.style.position = 'absolute';
                        p.sldB.style.right = THIS.padding + 'px';
                        p.sldB.style.top = THIS.padding + 'px';
                        p.sldB.style.border = THIS.insetWidth + 'px solid';
                        p.sldB.style.borderColor = THIS.insetColor;

                        // slider mouse area
                        p.sldM._jscInstance = THIS;
                        p.sldM._jscControlName = 'sld';
                        p.sldM.style.display = displaySlider ? 'block' : 'none';
                        p.sldM.style.position = 'absolute';
                        p.sldM.style.right = '0';
                        p.sldM.style.top = '0';
                        p.sldM.style.width = THIS.sliderSize + padToSliderPadding / 2 + THIS.padding + 2 * THIS.insetWidth + 'px';
                        p.sldM.style.height = dims[1] + 'px';
                        p.sldM.style.cursor = 'default';

                        // slider pointer inner and outer border
                        p.sldPtrIB.style.border = p.sldPtrOB.style.border = THIS.pointerBorderWidth + 'px solid ' + THIS.pointerBorderColor;

                        // slider pointer outer border
                        p.sldPtrOB.style.position = 'absolute';
                        p.sldPtrOB.style.left = -(2 * THIS.pointerBorderWidth + THIS.pointerThickness) + 'px';
                        p.sldPtrOB.style.top = '0';

                        // slider pointer middle border
                        p.sldPtrMB.style.border = THIS.pointerThickness + 'px solid ' + THIS.pointerColor;

                        // slider pointer spacer
                        p.sldPtrS.style.width = THIS.sliderSize + 'px';
                        p.sldPtrS.style.height = sliderPtrSpace + 'px';

                        // the Close button
                        function setBtnBorder() {
                            var insetColors = THIS.insetColor.split(/\s+/);
                            var outsetColor = insetColors.length < 2 ? insetColors[0] : insetColors[1] + ' ' + insetColors[0] + ' ' + insetColors[0] + ' ' + insetColors[1];
                            p.btn.style.borderColor = outsetColor;
                        }

                        p.btn.style.display = THIS.closable ? 'block' : 'none';
                        p.btn.style.position = 'absolute';
                        p.btn.style.left = THIS.padding + 'px';
                        p.btn.style.bottom = THIS.padding + 'px';
                        p.btn.style.padding = '0 15px';
                        p.btn.style.height = THIS.buttonHeight + 'px';
                        p.btn.style.border = THIS.insetWidth + 'px solid';
                        setBtnBorder();
                        p.btn.style.color = THIS.buttonColor;
                        p.btn.style.font = '12px sans-serif';
                        p.btn.style.textAlign = 'center';
                        try {
                            p.btn.style.cursor = 'pointer';
                        } catch (eOldIE) {
                            p.btn.style.cursor = 'hand';
                        }
                        p.btn.onmousedown = function () {
                            THIS.hide();
                        };
                        p.btnT.style.lineHeight = THIS.buttonHeight + 'px';
                        p.btnT.innerHTML = '';
                        p.btnT.appendChild(document.createTextNode(THIS.closeText));

                        // place pointers
                        redrawPad();
                        redrawSld();

                        // If we are changing the owner without first closing the picker,
                        // make sure to first deal with the old owner
                        if (jsc.picker.owner && jsc.picker.owner !== THIS) {
                            jsc.unsetClass(jsc.picker.owner.targetElement, THIS.activeClass);
                        }

                        // Set the new picker owner
                        jsc.picker.owner = THIS;

                        // The redrawPosition() method needs picker.owner to be set, that's why we call it here,
                        // after setting the owner
                        if (jsc.isElementType(container, 'body')) {
                            jsc.redrawPosition();
                        } else {
                            jsc._drawPosition(THIS, 0, 0, 'relative', false);
                        }

                        if (p.wrap.parentNode != container) {
                            container.appendChild(p.wrap);
                        }

                        jsc.setClass(THIS.targetElement, THIS.activeClass);
                    }

                    function redrawPad() {
                        // redraw the pad pointer
                        switch (jsc.getPadYComponent(THIS)) {
                            case 's':
                                var yComponent = 1;
                                break;
                            case 'v':
                                var yComponent = 2;
                                break;
                        }
                        var x = Math.round(THIS.hsv[0] / 360 * (THIS.width - 1));
                        var y = Math.round((1 - THIS.hsv[yComponent] / 100) * (THIS.height - 1));
                        var crossOuterSize = 2 * THIS.pointerBorderWidth + THIS.pointerThickness + 2 * THIS.crossSize;
                        var ofs = -Math.floor(crossOuterSize / 2);
                        jsc.picker.cross.style.left = x + ofs + 'px';
                        jsc.picker.cross.style.top = y + ofs + 'px';

                        // redraw the slider
                        switch (jsc.getSliderComponent(THIS)) {
                            case 's':
                                var rgb1 = HSV_RGB(THIS.hsv[0], 100, THIS.hsv[2]);
                                var rgb2 = HSV_RGB(THIS.hsv[0], 0, THIS.hsv[2]);
                                var color1 = 'rgb(' + Math.round(rgb1[0]) + ',' + Math.round(rgb1[1]) + ',' + Math.round(rgb1[2]) + ')';
                                var color2 = 'rgb(' + Math.round(rgb2[0]) + ',' + Math.round(rgb2[1]) + ',' + Math.round(rgb2[2]) + ')';
                                jsc.picker.sldGrad.draw(THIS.sliderSize, THIS.height, color1, color2);
                                break;
                            case 'v':
                                var rgb = HSV_RGB(THIS.hsv[0], THIS.hsv[1], 100);
                                var color1 = 'rgb(' + Math.round(rgb[0]) + ',' + Math.round(rgb[1]) + ',' + Math.round(rgb[2]) + ')';
                                var color2 = '#000';
                                jsc.picker.sldGrad.draw(THIS.sliderSize, THIS.height, color1, color2);
                                break;
                        }
                    }

                    function redrawSld() {
                        var sldComponent = jsc.getSliderComponent(THIS);
                        if (sldComponent) {
                            // redraw the slider pointer
                            switch (sldComponent) {
                                case 's':
                                    var yComponent = 1;
                                    break;
                                case 'v':
                                    var yComponent = 2;
                                    break;
                            }
                            var y = Math.round((1 - THIS.hsv[yComponent] / 100) * (THIS.height - 1));
                            jsc.picker.sldPtrOB.style.top = y - (2 * THIS.pointerBorderWidth + THIS.pointerThickness) - Math.floor(sliderPtrSpace / 2) + 'px';
                        }
                    }

                    function isPickerOwner() {
                        return jsc.picker && jsc.picker.owner === THIS;
                    }

                    function blurValue() {
                        THIS.importColor();
                    }

                    // Find the target element
                    if (typeof targetElement === 'string') {
                        var id = targetElement;
                        var elm = document.getElementById(id);
                        if (elm) {
                            this.targetElement = elm;
                        } else {
                            jsc.warn('Could not find target element with ID \'' + id + '\'');
                        }
                    } else if (targetElement) {
                        this.targetElement = targetElement;
                    } else {
                        jsc.warn('Invalid target element: \'' + targetElement + '\'');
                    }

                    if (this.targetElement._jscLinkedInstance) {
                        jsc.warn('Cannot link jscolor twice to the same element. Skipping.');
                        return;
                    }
                    this.targetElement._jscLinkedInstance = this;

                    // Find the value element
                    this.valueElement = jsc.fetchElement(this.valueElement);
                    // Find the style element
                    this.styleElement = jsc.fetchElement(this.styleElement);

                    var THIS = this;
                    var container = this.container ? jsc.fetchElement(this.container) : document.getElementsByTagName('body')[0];
                    var sliderPtrSpace = 3; // px

                    // For BUTTON elements it's important to stop them from sending the form when clicked
                    // (e.g. in Safari)
                    if (jsc.isElementType(this.targetElement, 'button')) {
                        if (this.targetElement.onclick) {
                            var origCallback = this.targetElement.onclick;
                            this.targetElement.onclick = function (evt) {
                                origCallback.call(this, evt);
                                return false;
                            };
                        } else {
                            this.targetElement.onclick = function () {
                                return false;
                            };
                        }
                    }

                    /*
                    var elm = this.targetElement;
                    do {
                        // If the target element or one of its offsetParents has fixed position,
                        // then use fixed positioning instead
                        //
                        // Note: In Firefox, getComputedStyle returns null in a hidden iframe,
                        // that's why we need to check if the returned style object is non-empty
                        var currStyle = jsc.getStyle(elm);
                        if (currStyle && currStyle.position.toLowerCase() === 'fixed') {
                            this.fixed = true;
                        }
                          if (elm !== this.targetElement) {
                            // attach onParentScroll so that we can recompute the picker position
                            // when one of the offsetParents is scrolled
                            if (!elm._jscEventsAttached) {
                                jsc.attachEvent(elm, 'scroll', jsc.onParentScroll);
                                elm._jscEventsAttached = true;
                            }
                        }
                    } while ((elm = elm.offsetParent) && !jsc.isElementType(elm, 'body'));
                    */

                    // valueElement
                    if (this.valueElement) {
                        if (jsc.isElementType(this.valueElement, 'input')) {
                            var updateField = function updateField() {
                                THIS.fromString(THIS.valueElement.value, jsc.leaveValue);
                                jsc.dispatchFineChange(THIS);
                            };
                            jsc.attachEvent(this.valueElement, 'keyup', updateField);
                            jsc.attachEvent(this.valueElement, 'input', updateField);
                            jsc.attachEvent(this.valueElement, 'blur', blurValue);
                            this.valueElement.setAttribute('autocomplete', 'off');
                        }
                    }

                    // styleElement
                    if (this.styleElement) {
                        this.styleElement._jscOrigStyle = {
                            backgroundImage: this.styleElement.style.backgroundImage,
                            backgroundColor: this.styleElement.style.backgroundColor,
                            color: this.styleElement.style.color
                        };
                    }

                    if (this.value) {
                        // Try to set the color from the .value option and if unsuccessful,
                        // export the current color
                        this.fromString(this.value) || this.exportColor();
                    } else {
                        this.importColor();
                    }
                }

            };

            //================================
            // Public properties and methods
            //================================


            // By default, search for all elements with class="jscolor" and install a color picker on them.
            //
            // You can change what class name will be looked for by setting the property jscolor.lookupClass
            // anywhere in your HTML document. To completely disable the automatic lookup, set it to null.
            //
            jsc.jscolor.lookupClass = 'jscolor';

            jsc.jscolor.installByClassName = function (className) {
                var inputElms = document.getElementsByTagName('input');
                var buttonElms = document.getElementsByTagName('button');

                jsc.tryInstallOnElements(inputElms, className);
                jsc.tryInstallOnElements(buttonElms, className);
            };

            jsc.register();

            return jsc.jscolor;
        }();
    }
});

/* PrismJS 1.15.0
https://prismjs.com/download.html#themes=prism-twilight&languages=markup+css+clike+javascript */
var _self = typeof window !== 'undefined' ? window // if in browser
: typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope ? self // if in worker
: {} // if in node js
;

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */

var Prism = function () {

    // Private helper vars
    var lang = /\blang(?:uage)?-([\w-]+)\b/i;
    var uniqueId = 0;

    var _ = _self.Prism = {
        manual: _self.Prism && _self.Prism.manual,
        disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
        util: {
            encode: function encode(tokens) {
                if (tokens instanceof Token) {
                    return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
                } else if (_.util.type(tokens) === 'Array') {
                    return tokens.map(_.util.encode);
                } else {
                    return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
                }
            },

            type: function type(o) {
                return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1];
            },

            objId: function objId(obj) {
                if (!obj['__id']) {
                    Object.defineProperty(obj, '__id', { value: ++uniqueId });
                }
                return obj['__id'];
            },

            // Deep clone a language definition (e.g. to extend it)
            clone: function clone(o, visited) {
                var type = _.util.type(o);
                visited = visited || {};

                switch (type) {
                    case 'Object':
                        if (visited[_.util.objId(o)]) {
                            return visited[_.util.objId(o)];
                        }
                        var clone = {};
                        visited[_.util.objId(o)] = clone;

                        for (var key in o) {
                            if (o.hasOwnProperty(key)) {
                                clone[key] = _.util.clone(o[key], visited);
                            }
                        }

                        return clone;

                    case 'Array':
                        if (visited[_.util.objId(o)]) {
                            return visited[_.util.objId(o)];
                        }
                        var clone = [];
                        visited[_.util.objId(o)] = clone;

                        o.forEach(function (v, i) {
                            clone[i] = _.util.clone(v, visited);
                        });

                        return clone;
                }

                return o;
            }
        },

        languages: {
            extend: function extend(id, redef) {
                var lang = _.util.clone(_.languages[id]);

                for (var key in redef) {
                    lang[key] = redef[key];
                }

                return lang;
            },

            /**
             * Insert a token before another token in a language literal
             * As this needs to recreate the object (we cannot actually insert before keys in object literals),
             * we cannot just provide an object, we need anobject and a key.
             * @param inside The key (or language id) of the parent
             * @param before The key to insert before. If not provided, the function appends instead.
             * @param insert Object with the key/value pairs to insert
             * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
             */
            insertBefore: function insertBefore(inside, before, insert, root) {
                root = root || _.languages;
                var grammar = root[inside];

                if (arguments.length == 2) {
                    insert = arguments[1];

                    for (var newToken in insert) {
                        if (insert.hasOwnProperty(newToken)) {
                            grammar[newToken] = insert[newToken];
                        }
                    }

                    return grammar;
                }

                var ret = {};

                for (var token in grammar) {

                    if (grammar.hasOwnProperty(token)) {

                        if (token == before) {

                            for (var newToken in insert) {

                                if (insert.hasOwnProperty(newToken)) {
                                    ret[newToken] = insert[newToken];
                                }
                            }
                        }

                        ret[token] = grammar[token];
                    }
                }

                // Update references in other language definitions
                _.languages.DFS(_.languages, function (key, value) {
                    if (value === root[inside] && key != inside) {
                        this[key] = ret;
                    }
                });

                return root[inside] = ret;
            },

            // Traverse a language definition with Depth First Search
            DFS: function DFS(o, callback, type, visited) {
                visited = visited || {};
                for (var i in o) {
                    if (o.hasOwnProperty(i)) {
                        callback.call(o, i, o[i], type || i);

                        if (_.util.type(o[i]) === 'Object' && !visited[_.util.objId(o[i])]) {
                            visited[_.util.objId(o[i])] = true;
                            _.languages.DFS(o[i], callback, null, visited);
                        } else if (_.util.type(o[i]) === 'Array' && !visited[_.util.objId(o[i])]) {
                            visited[_.util.objId(o[i])] = true;
                            _.languages.DFS(o[i], callback, i, visited);
                        }
                    }
                }
            }
        },
        plugins: {},

        highlightAll: function highlightAll(async, callback) {
            _.highlightAllUnder(document, async, callback);
        },

        highlightAllUnder: function highlightAllUnder(container, async, callback) {
            var env = {
                callback: callback,
                selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
            };

            _.hooks.run("before-highlightall", env);

            var elements = env.elements || container.querySelectorAll(env.selector);

            for (var i = 0, element; element = elements[i++];) {
                _.highlightElement(element, async === true, env.callback);
            }
        },

        highlightElement: function highlightElement(element, async, callback) {
            // Find language
            var language,
                grammar,
                parent = element;

            while (parent && !lang.test(parent.className)) {
                parent = parent.parentNode;
            }

            if (parent) {
                language = (parent.className.match(lang) || [, ''])[1].toLowerCase();
                grammar = _.languages[language];
            }

            // Set language on the element, if not present
            element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

            if (element.parentNode) {
                // Set language on the parent, for styling
                parent = element.parentNode;

                if (/pre/i.test(parent.nodeName)) {
                    parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
                }
            }

            var code = element.textContent;

            var env = {
                element: element,
                language: language,
                grammar: grammar,
                code: code
            };

            _.hooks.run('before-sanity-check', env);

            if (!env.code || !env.grammar) {
                if (env.code) {
                    _.hooks.run('before-highlight', env);
                    env.element.textContent = env.code;
                    _.hooks.run('after-highlight', env);
                }
                _.hooks.run('complete', env);
                return;
            }

            _.hooks.run('before-highlight', env);

            if (async && _self.Worker) {
                var worker = new Worker(_.filename);

                worker.onmessage = function (evt) {
                    env.highlightedCode = evt.data;

                    _.hooks.run('before-insert', env);

                    env.element.innerHTML = env.highlightedCode;

                    callback && callback.call(env.element);
                    _.hooks.run('after-highlight', env);
                    _.hooks.run('complete', env);
                };

                worker.postMessage(JSON.stringify({
                    language: env.language,
                    code: env.code,
                    immediateClose: true
                }));
            } else {
                env.highlightedCode = _.highlight(env.code, env.grammar, env.language);

                _.hooks.run('before-insert', env);

                env.element.innerHTML = env.highlightedCode;

                callback && callback.call(element);

                _.hooks.run('after-highlight', env);
                _.hooks.run('complete', env);
            }
        },

        highlight: function highlight(text, grammar, language) {
            var env = {
                code: text,
                grammar: grammar,
                language: language
            };
            _.hooks.run('before-tokenize', env);
            env.tokens = _.tokenize(env.code, env.grammar);
            _.hooks.run('after-tokenize', env);
            return Token.stringify(_.util.encode(env.tokens), env.language);
        },

        matchGrammar: function matchGrammar(text, strarr, grammar, index, startPos, oneshot, target) {
            var Token = _.Token;

            for (var token in grammar) {
                if (!grammar.hasOwnProperty(token) || !grammar[token]) {
                    continue;
                }

                if (token == target) {
                    return;
                }

                var patterns = grammar[token];
                patterns = _.util.type(patterns) === "Array" ? patterns : [patterns];

                for (var j = 0; j < patterns.length; ++j) {
                    var pattern = patterns[j],
                        inside = pattern.inside,
                        lookbehind = !!pattern.lookbehind,
                        greedy = !!pattern.greedy,
                        lookbehindLength = 0,
                        alias = pattern.alias;

                    if (greedy && !pattern.pattern.global) {
                        // Without the global flag, lastIndex won't work
                        var flags = pattern.pattern.toString().match(/[imuy]*$/)[0];
                        pattern.pattern = RegExp(pattern.pattern.source, flags + "g");
                    }

                    pattern = pattern.pattern || pattern;

                    // Don’t cache length as it changes during the loop
                    for (var i = index, pos = startPos; i < strarr.length; pos += strarr[i].length, ++i) {

                        var str = strarr[i];

                        if (strarr.length > text.length) {
                            // Something went terribly wrong, ABORT, ABORT!
                            return;
                        }

                        if (str instanceof Token) {
                            continue;
                        }

                        if (greedy && i != strarr.length - 1) {
                            pattern.lastIndex = pos;
                            var match = pattern.exec(text);
                            if (!match) {
                                break;
                            }

                            var from = match.index + (lookbehind ? match[1].length : 0),
                                to = match.index + match[0].length,
                                k = i,
                                p = pos;

                            for (var len = strarr.length; k < len && (p < to || !strarr[k].type && !strarr[k - 1].greedy); ++k) {
                                p += strarr[k].length;
                                // Move the index i to the element in strarr that is closest to from
                                if (from >= p) {
                                    ++i;
                                    pos = p;
                                }
                            }

                            // If strarr[i] is a Token, then the match starts inside another Token, which is invalid
                            if (strarr[i] instanceof Token) {
                                continue;
                            }

                            // Number of tokens to delete and replace with the new match
                            delNum = k - i;
                            str = text.slice(pos, p);
                            match.index -= pos;
                        } else {
                            pattern.lastIndex = 0;

                            var match = pattern.exec(str),
                                delNum = 1;
                        }

                        if (!match) {
                            if (oneshot) {
                                break;
                            }

                            continue;
                        }

                        if (lookbehind) {
                            lookbehindLength = match[1] ? match[1].length : 0;
                        }

                        var from = match.index + lookbehindLength,
                            match = match[0].slice(lookbehindLength),
                            to = from + match.length,
                            before = str.slice(0, from),
                            after = str.slice(to);

                        var args = [i, delNum];

                        if (before) {
                            ++i;
                            pos += before.length;
                            args.push(before);
                        }

                        var wrapped = new Token(token, inside ? _.tokenize(match, inside) : match, alias, match, greedy);

                        args.push(wrapped);

                        if (after) {
                            args.push(after);
                        }

                        Array.prototype.splice.apply(strarr, args);

                        if (delNum != 1) _.matchGrammar(text, strarr, grammar, i, pos, true, token);

                        if (oneshot) break;
                    }
                }
            }
        },

        tokenize: function tokenize(text, grammar, language) {
            var strarr = [text];

            var rest = grammar.rest;

            if (rest) {
                for (var token in rest) {
                    grammar[token] = rest[token];
                }

                delete grammar.rest;
            }

            _.matchGrammar(text, strarr, grammar, 0, 0, false);

            return strarr;
        },

        hooks: {
            all: {},

            add: function add(name, callback) {
                var hooks = _.hooks.all;

                hooks[name] = hooks[name] || [];

                hooks[name].push(callback);
            },

            run: function run(name, env) {
                var callbacks = _.hooks.all[name];

                if (!callbacks || !callbacks.length) {
                    return;
                }

                for (var i = 0, callback; callback = callbacks[i++];) {
                    callback(env);
                }
            }
        }
    };

    var Token = _.Token = function (type, content, alias, matchedStr, greedy) {
        this.type = type;
        this.content = content;
        this.alias = alias;
        // Copy of the full string this token was created from
        this.length = (matchedStr || "").length | 0;
        this.greedy = !!greedy;
    };

    Token.stringify = function (o, language, parent) {
        if (typeof o == 'string') {
            return o;
        }

        if (_.util.type(o) === 'Array') {
            return o.map(function (element) {
                return Token.stringify(element, language, o);
            }).join('');
        }

        var env = {
            type: o.type,
            content: Token.stringify(o.content, language, parent),
            tag: 'span',
            classes: ['token', o.type],
            attributes: {},
            language: language,
            parent: parent
        };

        if (o.alias) {
            var aliases = _.util.type(o.alias) === 'Array' ? o.alias : [o.alias];
            Array.prototype.push.apply(env.classes, aliases);
        }

        _.hooks.run('wrap', env);

        var attributes = Object.keys(env.attributes).map(function (name) {
            return name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
        }).join(' ');

        return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + (attributes ? ' ' + attributes : '') + '>' + env.content + '</' + env.tag + '>';
    };

    if (!_self.document) {
        if (!_self.addEventListener) {
            // in Node.js
            return _self.Prism;
        }

        if (!_.disableWorkerMessageHandler) {
            // In worker
            _self.addEventListener('message', function (evt) {
                var message = JSON.parse(evt.data),
                    lang = message.language,
                    code = message.code,
                    immediateClose = message.immediateClose;

                _self.postMessage(_.highlight(code, _.languages[lang], lang));
                if (immediateClose) {
                    _self.close();
                }
            }, false);
        }

        return _self.Prism;
    }

    //Get current script and highlight
    var script = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();

    if (script) {
        _.filename = script.src;

        if (!_.manual && !script.hasAttribute('data-manual')) {
            if (document.readyState !== "loading") {
                if (window.requestAnimationFrame) {
                    window.requestAnimationFrame(_.highlightAll);
                } else {
                    window.setTimeout(_.highlightAll, 16);
                }
            } else {
                document.addEventListener('DOMContentLoaded', _.highlightAll);
            }
        }
    }

    return _self.Prism;
}();

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof global !== 'undefined') {
    global.Prism = Prism;
}
;
Prism.languages.markup = {
    'comment': /<!--[\s\S]*?-->/,
    'prolog': /<\?[\s\S]+?\?>/,
    'doctype': /<!DOCTYPE[\s\S]+?>/i,
    'cdata': /<!\[CDATA\[[\s\S]*?]]>/i,
    'tag': {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,
        greedy: true,
        inside: {
            'tag': {
                pattern: /^<\/?[^\s>\/]+/i,
                inside: {
                    'punctuation': /^<\/?/,
                    'namespace': /^[^\s>\/:]+:/
                }
            },
            'attr-value': {
                pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,
                inside: {
                    'punctuation': [/^=/, {
                        pattern: /(^|[^\\])["']/,
                        lookbehind: true
                    }]
                }
            },
            'punctuation': /\/?>/,
            'attr-name': {
                pattern: /[^\s>\/]+/,
                inside: {
                    'namespace': /^[^\s>\/:]+:/
                }
            }

        }
    },
    'entity': /&#?[\da-z]{1,8};/i
};

Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] = Prism.languages.markup['entity'];

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', function (env) {

    if (env.type === 'entity') {
        env.attributes['title'] = env.content.replace(/&amp;/, '&');
    }
});

Prism.languages.xml = Prism.languages.markup;
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;

Prism.languages.css = {
    'comment': /\/\*[\s\S]*?\*\//,
    'atrule': {
        pattern: /@[\w-]+?.*?(?:;|(?=\s*\{))/i,
        inside: {
            'rule': /@[\w-]+/
            // See rest below
        }
    },
    'url': /url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
    'selector': /[^{}\s][^{};]*?(?=\s*\{)/,
    'string': {
        pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: true
    },
    'property': /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
    'important': /\B!important\b/i,
    'function': /[-a-z0-9]+(?=\()/i,
    'punctuation': /[(){};:]/
};

Prism.languages.css['atrule'].inside.rest = Prism.languages.css;

if (Prism.languages.markup) {
    Prism.languages.insertBefore('markup', 'tag', {
        'style': {
            pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,
            lookbehind: true,
            inside: Prism.languages.css,
            alias: 'language-css',
            greedy: true
        }
    });

    Prism.languages.insertBefore('inside', 'attr-value', {
        'style-attr': {
            pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
            inside: {
                'attr-name': {
                    pattern: /^\s*style/i,
                    inside: Prism.languages.markup.tag.inside
                },
                'punctuation': /^\s*=\s*['"]|['"]\s*$/,
                'attr-value': {
                    pattern: /.+/i,
                    inside: Prism.languages.css
                }
            },
            alias: 'language-css'
        }
    }, Prism.languages.markup.tag);
};
Prism.languages.clike = {
    'comment': [{
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: true
    }, {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: true,
        greedy: true
    }],
    'string': {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: true
    },
    'class-name': {
        pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
        lookbehind: true,
        inside: {
            punctuation: /[.\\]/
        }
    },
    'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    'boolean': /\b(?:true|false)\b/,
    'function': /[a-z0-9_]+(?=\()/i,
    'number': /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
    'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
    'punctuation': /[{}[\];(),.:]/
};

Prism.languages.javascript = Prism.languages.extend('clike', {
    'keyword': /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
    'number': /\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
    // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
    'function': /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,
    'operator': /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
});

Prism.languages.insertBefore('javascript', 'keyword', {
    'regex': {
        pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,
        lookbehind: true,
        greedy: true
    },
    // This must be declared before keyword because we use "function" inside the look-forward
    'function-variable': {
        pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,
        alias: 'function'
    },
    'constant': /\b[A-Z][A-Z\d_]*\b/
});

Prism.languages.insertBefore('javascript', 'string', {
    'template-string': {
        pattern: /`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,
        greedy: true,
        inside: {
            'interpolation': {
                pattern: /\${[^}]+}/,
                inside: {
                    'interpolation-punctuation': {
                        pattern: /^\${|}$/,
                        alias: 'punctuation'
                    },
                    rest: null // See below
                }
            },
            'string': /[\s\S]+/
        }
    }
});
Prism.languages.javascript['template-string'].inside['interpolation'].inside.rest = Prism.languages.javascript;

if (Prism.languages.markup) {
    Prism.languages.insertBefore('markup', 'tag', {
        'script': {
            pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
            lookbehind: true,
            inside: Prism.languages.javascript,
            alias: 'language-javascript',
            greedy: true
        }
    });
}

Prism.languages.js = Prism.languages.javascript;

///// Begin 4-01
var win401 = '1. (\u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435)<br>\n- \u041E\u0431\u044A\u044F\u0432\u0438\u0442\u0435 \u0434\u0432\u0435 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435: admin \u0438 name.<br>\n- \u0417\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0432 name \u0441\u0442\u0440\u043E\u043A\u0443 "Harry".<br>\n- \u0421\u043A\u043E\u043F\u0438\u0440\u0443\u0439\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0438\u0437 name \u0432 admin.<br>\n- \u0412\u044B\u0432\u0435\u0434\u0438\u0442\u0435 admin (\u0434\u043E\u043B\u0436\u043D\u043E \u0432\u044B\u0432\u0435\u0441\u0442\u0438 "Harry").<br>';

var js401 = 'var admin, name;\nname="Harry";\nadmin=name;\nconsole.log(admin);';

var html401 = '';

var fun401 = function fun401() {
    elWin.innerHTML = '';
    var admin, name;
    name = "Harry";
    admin = name;
    console.log(admin);
};

TextWindows[401] = new Dz(html401, js401, win401, fun401);
////// End 4-01


// 2. (переменные)
// - Выберите какую-то формулу (например, математическую)
// - Объявите необходимые переменные
// - Выведите в консоль результат работы формулы
// Пример:
//     Я возьму формулу длины окружности (2 * Пи * радиус)
// Переменные и вывод у меня получатся такие:
//     var pi = 3.1415;
// var R = 10;
// console.log(2 * pi * R);


// var triangleSide_01=prompt("Введите значение стороны 1");
// var triangleSide_02=prompt("Введите значение стороны 2");
// var triangleSide_03=prompt("Введите значение стороны 3");
// triangleSide_01=parseInt(triangleSide_01);//перевожу значение в числа
// triangleSide_02=parseInt(triangleSide_02);//перевожу значение в числа
// triangleSide_03=parseInt(triangleSide_03);//перевожу значение в числа
// //проверяю существует ли треугольник с данными сторонами
// if (triangleSide_01+triangleSide_02>triangleSide_03 && triangleSide_01+triangleSide_03>triangleSide_02&&triangleSide_02+triangleSide_03>triangleSide_01) {
//
// //проверяю является ли треугольник прямоугольным
//     if (triangleSide_01 == Math.max(triangleSide_01, triangleSide_02, triangleSide_03) && Math.pow(triangleSide_01, 2) == Math.pow(triangleSide_02, 2) + Math.pow(triangleSide_03, 2)) {
//         Squre = (triangleSide_02 * triangleSide_03) / 2
//         radiusDescribed = (triangleSide_03 + triangleSide_02 - triangleSide_01) / 2;
//         console.log("Площадь прямоугольного треугольника=", Squre);
//         console.log("Радиус вписаной окружности в прямоугольный треугольник=", radiusDescribed);
//     }
//     else if (triangleSide_02 == Math.max(triangleSide_01, triangleSide_02, triangleSide_03) && Math.pow(triangleSide_02, 2) == Math.pow(triangleSide_01, 2) + Math.pow(triangleSide_03, 2)) {
//         Squre = (triangleSide_01 * triangleSide_03) / 2
//         radiusDescribed = (triangleSide_03 + triangleSide_01 - triangleSide_02) / 2;
//         console.log("Площадь прямоугольного треугольника=", Squre);
//         console.log("Радиус вписаной окружности в прямоугольный треугольник=", radiusDescribed);
//     }
//     else if (triangleSide_03 == Math.max(triangleSide_01, triangleSide_02, triangleSide_03) && Math.pow(triangleSide_03, 2) == Math.pow(triangleSide_01, 2) + Math.pow(triangleSide_02, 2)) {
//         Squre = (triangleSide_01 * triangleSide_02) / 2
//         radiusDescribed = (triangleSide_02 + triangleSide_01 - triangleSide_03) / 2;
//         console.log("Площадь прямоугольного треугольника=", Squre);
//         console.log("Радиус прямоугольного треугольника=", radiusDescribed);
//     }
//     //прверяю правельный ли треугольник, если да вычисляю по другой формуле
//     else if (triangleSide_03 == triangleSide_02 &&triangleSide_02 == triangleSide_01) {
//         Squre = (Math.sqrt(3) * Math.pow(triangleSide_01, 2)) / 4
//         radiusDescribed = (triangleSide_01) / (2 * Math.sqrt(3));
//         console.log("Площадь правильного треугольника=", Squre);
//         console.log("Радиус правильного треугольника=", radiusDescribed);
//     }
//     //если треугольник не прямоугольный, считаем по общим формулам
//     else {
//         perimetr = (triangleSide_01 + triangleSide_02 + triangleSide_03);// нахожу периметр
//         semipPerimeter = (perimetr / 2);// нахожу полупериметр
//         Squre = Math.sqrt(semipPerimeter * (semipPerimeter - triangleSide_01) * (semipPerimeter - triangleSide_02) * (semipPerimeter - triangleSide_03)).toFixed(8);// нахожу площадь через формулу Герона
//         radiusDescribed = (Squre / semipPerimeter).toFixed(8);//нахожу радиус вписаного круга
//         console.log("Радиус треугольника=", radiusDescribed);
//         console.log("Площадь треугольника=", Squre);
//     }
//     perimetr = (triangleSide_01 + triangleSide_02 + triangleSide_03);// нахожу периметр
//     console.log("Периметр треугольника", perimetr);
// }
// else {
//     alert("Вы ввели данные при которых треугольник не существует! Помните, что сумма любых двоих сторон должна быть больше третей!!!")
// }
///// Begin 4-03
var win403 = ' - \u041E\u0431\u044A\u044F\u0432\u0438\u0442\u0435 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u0443\u044E \u0441 \u043A\u0430\u043A\u0438\u043C-\u0442\u043E \u0447\u0438\u0441\u043B\u043E\u043C.<br>\n - \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044E if..else, \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043A\u043E\u0434,<br>\n    \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432\u044B\u0432\u043E\u0434\u0438\u0442 \u0432 \u043A\u043E\u043D\u0441\u043E\u043B\u044C:<br>\n    \u2022 1, \u0435\u0441\u043B\u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0443\u043B\u044F,<br>\n   \u2022 -1, \u0435\u0441\u043B\u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043C\u0435\u043D\u044C\u0448\u0435 \u043D\u0443\u043B\u044F,<br>\n   \u2022 0, \u0435\u0441\u043B\u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0440\u0430\u0432\u043D\u043E \u043D\u0443\u043B\u044E.';

var js403 = 'var textNumber=document.getElementById(\'textNumber\');\nvar textNumberPrevious= textNumber.previousElementSibling;\ntextNumberPrevious.textContent=\'\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043B\u043E \u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 Enter\';\nvar elDiv=document.createElement(\'b\');\n\n\n\ndocument.body.insertBefore(elDiv, textNumber );\nconsole.log(textNumberPrevious);\n\n\n\n\n\ntextNumber.addEventListener(\'keypress\', function(e){\n    var text = this.previousElementSibling;\n\n\n    if(isNaN(this.value)&&e.keyCode==\'13\'){\n        text.textContent=\'\u0412\u044B \u0432\u0432\u0435\u043B\u0438 \u043D\u0435 \u0447\u0438\u0441\u043B\u043E! \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043B\u043E!\';\n    }\n    else if(this.value && e.keyCode==\'13\'){\n\n        switch(true) {\n            case(this.value > 0)  :   text.textContent = "\u041F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435"; break;\n            case(this.value < 0)  :   text.textContent = "\u041E\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435"; break;\n            case(this.value == 0) :   text.textContent= "\u0420\u0430\u0432\u043D\u043E \u043D\u0443\u043B\u044E";\n        }\n    }\n\n});';

var html403 = '<label for="textNumber">Введите число от 0 до 99</label>\n' + '<input type="text" id="textNumber">';

var fun403 = function fun403() {
    elWin.innerHTML = html403;
    var textNumber = document.getElementById('textNumber');
    var textNumberPrevious = textNumber.previousElementSibling;
    textNumberPrevious.textContent = 'Введите число и нажмите Enter';
    var elDiv = document.createElement('b');

    elWin.insertBefore(elDiv, elWin.lastElementChild);

    textNumber.addEventListener('keypress', function (e) {
        var text = this.previousElementSibling;

        if (isNaN(this.value) && e.keyCode == '13') {
            text.textContent = 'Вы ввели не число! Введите число!';
        } else if (this.value && e.keyCode == '13') {

            switch (true) {
                case this.value > 0:
                    text.textContent = "Число положительное";break;
                case this.value < 0:
                    text.textContent = "Число отрицательное";break;
                case this.value == 0:
                    text.textContent = "Число равно нулю";
            }
        }
    });
};

TextWindows[403] = new Dz(html403, js403, win403, fun403);
///// End 4-03


///// Begin 4-05
var win405 = '5. (\u0446\u0438\u043A\u043B\u044B)<br>\n- \u041F\u0440\u0438 \u043F\u043E\u043C\u043E\u0449\u0438 \u0446\u0438\u043A\u043B\u0430 for \u0432\u044B\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0451\u0442\u043D\u044B\u0435 \u0447\u0438\u0441\u043B\u0430 \u043E\u0442 2 \u0434\u043E 10.<br>';

var js405 = 'for(var i=2; i<=10; i++){\n    var elCreate =document.createElement(\'p\');\n    elCreate.textContent=i;\n    elWin.appendChild(elCreate);\n}';

var html405 = '';

var fun405 = function fun405() {
    elWin.innerHTML = '';
    for (var i = 2; i <= 10; i++) {
        var elCreate = document.createElement('p');
        elCreate.textContent = i;
        elWin.appendChild(elCreate);
    }
};

TextWindows[405] = new Dz(html405, js405, win405, fun405);
///// End 4-05

// 6. (циклы)


///// Begin 4-06
var win406 = '\u041D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E \u043D\u0430\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u043E\u0441\u0442\u044B\u043C, \u0435\u0441\u043B\u0438 \u043E\u043D\u043E \u043D\u0438 \u043D\u0430 \u0447\u0442\u043E \u043D\u0435 \u0434\u0435\u043B\u0438\u0442\u0441\u044F, \u043A\u0440\u043E\u043C\u0435 \u0441\u0435\u0431\u044F \u0438 1.<br>\n\u0414\u0440\u0443\u0433\u0438\u043C\u0438 \u0441\u043B\u043E\u0432\u0430\u043C\u0438, \u0447\u0438\u0441\u043B\u043E n \u043F\u0440\u043E\u0441\u0442\u043E\u0435, \u0435\u0441\u043B\u0438 \u043F\u0440\u0438 \u0434\u0435\u043B\u0435\u043D\u0438\u0438 \u043D\u0430 \u043B\u044E\u0431\u043E\u0435 \u0447\u0438\u0441\u043B\u043E \u043E\u0442 2 \u0434\u043E n-1 \u0435\u0441\u0442\u044C \u043E\u0441\u0442\u0430\u0442\u043E\u043A.<br>\n    \u0421\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u043A\u043E\u0434, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432\u044B\u0432\u043E\u0434\u0438\u0442 \u0432\u0441\u0435 \u043F\u0440\u043E\u0441\u0442\u044B\u0435 \u0447\u0438\u0441\u043B\u0430 \u0438\u0437 \u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B\u0430 \u043E\u0442 2 \u0434\u043E 10. \u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C: 2,3,5,7.<br>\nP.S. \u041A\u043E\u0434 \u0442\u0430\u043A\u0436\u0435 \u0434\u043E\u043B\u0436\u0435\u043D \u043B\u0435\u0433\u043A\u043E \u043C\u043E\u0434\u0438\u0444\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0434\u043B\u044F \u043B\u044E\u0431\u044B\u0445 \u0434\u0440\u0443\u0433\u0438\u0445 \u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B\u043E\u0432.<br>';

var js406 = 'function simple(min,max) {\n\n    var sim=[];\n    out: for ( min; min <= max; min++) {\n\n            for (devision = 2; devision < min; devision++) {\n                if (min % devision == 0)\n                {\n                    continue out;\n                }\n            }\n            sim.push(min);\n            // alert( i ); // \u043F\u0440\u043E\u0441\u0442\u043E\u0435\n        }\n\n    return sim;\n}\nconsole.log(simple(2,10));';

var html406 = '';

var fun406 = function fun406() {
    elWin.innerHTML = '';
    function simple(min, max) {

        var sim = [];
        out: for (min; min <= max; min++) {

            for (devision = 2; devision < min; devision++) {
                if (min % devision == 0) {
                    continue out;
                }
            }
            sim.push(min);
            // alert( i ); // простое
        }

        return sim;
    }
    console.log(simple(2, 10));
};

TextWindows[406] = new Dz(html406, js406, win406, fun406);
////// End 4-06

// elWin.innerHTML=`<p><label for="min">Введите минимальное число </label><input type="text" id="min"></p><p><label for="min">Введите максимальное число </label><input type="text" id="max"></p>`;
//
// var ell= document.getElementsByTagName("input");
// log( ell.getAttribute('id'));
// ell.addEventListener('input', (e)=>{
//     var max,min;
//     log(e.target);
//     if(e.target.getAttribute('id')=='min'){
//         min=e.target.value;
//     }
//     else{
//         max=e.target.value;
//     }
//
//     min&&max?simple(min,max):log('что то не так');
//     // log(e.target.value);
//     // // if()
// })
//
// function simple(min,max) {
//
//     var sim=[];
//     out: for ( min; min <= max; min++) {
//
//         for (var devision = 2; devision < min; devision++) {
//             if (min % devision == 0)
//             {
//                 continue out;
//             }
//         }
//         sim.push(min);
//         // alert( i ); // простое
//     }
//
//     return sim;
// }
// console.log(simple(2,10));


///// Begin 4-19
var win419 = '19. (events)\n\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u043A\u0430\u043A\u043E\u0439-\u0442\u043E header \u0441 \u043A\u043D\u043E\u043F\u043A\u043E\u0439 "\u041E\u0431\u0440\u0430\u0442\u043D\u044B\u0439 \u0437\u0432\u043E\u043D\u043E\u043A".\n   \u041F\u043E \u043D\u0430\u0436\u0430\u0442\u0438\u044E \u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0443 \u0434\u043E\u043B\u0436\u0435\u043D \u043F\u043E\u044F\u0432\u043B\u044F\u0442\u044C\u0441\u044F \u0432\u044B\u043F\u0430\u0434\u0430\u044E\u0449\u0438\u0439 \u0431\u043B\u043E\u043A,\n    \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u0431\u0443\u0434\u0435\u0442 \u043F\u043E\u043B\u0435 \u0434\u043B\u044F \u0432\u0432\u043E\u0434\u0430 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u0438 \u043A\u043D\u043E\u043F\u043A\u0430 "\u0414\u0430!".\n   \u041F\u043E \u043D\u0430\u0436\u0430\u0442\u0438\u044E \u043D\u043E \u043A\u043D\u043E\u043F\u043A\u0443 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044F (el.value)\n \u0415\u0441\u043B\u0438 \u043E\u043D\u043E \u043F\u0443\u0441\u0442\u043E\u0435, \u0442\u043E \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0434\u0435\u043B\u0430\u0435\u043C.\n   \u0415\u0441\u043B\u0438 \u043E\u043D\u043E \u043D\u0435 \u043F\u0443\u0441\u0442\u043E\u0435, \u0442\u043E \u0432\u044B\u0432\u043E\u0434\u0438\u043C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0432 \u043A\u043E\u043D\u0441\u043E\u043B\u044C \u0438 \u043F\u0440\u044F\u0447\u0435\u043C \u0431\u043B\u043E\u043A.\n   \u041A\u043B\u0438\u043A \u0437\u0430 \u043F\u0440\u0435\u0434\u0435\u043B\u0430\u043C\u0438 \u0431\u043B\u043E\u043A\u0430 \u0434\u043E\u043B\u0436\u0435\u043D \u043F\u0440\u044F\u0442\u0430\u0442\u044C \u0431\u043B\u043E\u043A.';

var js419 = 'var button, educationOnOff, phone;\nbutton=document.querySelector(\'#buttonConteiner__button\');\neducationOnOff=document.querySelector(\'.formOnOff\');\nphone=document.querySelector(\'#phone\');\nbutton.addEventListener(\'click\', function (e){\n\n    educationOnOff.style.display=\'inline\';\n\n} );\neducationOnOff.addEventListener(\'submit\', function (e){\n\n    e.preventDefault();\n\n        if(phone.value==0){\n        alert(\'\u0412\u044B \u043D\u0435 \u0432\u0432\u0435\u043B\u0438 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440!\');\n    }\n    else {\n        alert(phone.value);\n        phone.value = \'\';\n        educationOnOff.style.display = \'none\';\n\n    }\n\n} );\neducationOnOff.firstElementChild.addEventListener(\'click\', function (e){\n;\n    if(e.target.tagName==\'ARTICLE\'){\n        educationOnOff.style.display=\'none\';\n    }\n\n} );';

var html419 = '<article class="buttonConteiner" id="buttonConteiner">\n        <a href="#" class="button_src"><button class="buttonConteiner__button" id="buttonConteiner__button">\u041E\u0431\u0440\u0430\u0442\u043D\u044B\u0439 \u0437\u0432\u043E\u043D\u043E\u043A</button></a>\n    </article>\n    <section class="formOnOff">\n    <article class="conteiner_form" id="conteiner_form">\n\n        <form action="index1.html" class="conteiner_form__form"><label for="phone" class="conteiner_form__input">\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u041E\u041A</label><input type="text" id="phone" class="conteiner_form__input">\n            <input type="submit" value="OK!">\n        </form>\n    </article>\n    </section>';

var fun419 = function fun419() {
    elWin.innerHTML = '<article class="buttonConteiner" id="buttonConteiner">\n        <a href="#" class="button_src"><button class="buttonConteiner__button" id="buttonConteiner__button">\u041E\u0431\u0440\u0430\u0442\u043D\u044B\u0439 \u0437\u0432\u043E\u043D\u043E\u043A</button></a>\n    </article>\n    <section class="formOnOff">\n    <article class="conteiner_form" id="conteiner_form">\n\n        <form action="index1.html" class="conteiner_form__form"><label for="phone" class="conteiner_form__input">\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u041E\u041A</label><input type="text" id="phone" class="conteiner_form__input">\n            <input type="submit" value="OK!">\n        </form>\n    </article>\n    </section>';

    var button, educationOnOff, phone;
    button = document.querySelector('#buttonConteiner__button');
    educationOnOff = document.querySelector('.formOnOff');
    phone = document.querySelector('#phone');
    button.addEventListener('click', function (e) {

        educationOnOff.style.display = 'inline';
    });
    educationOnOff.addEventListener('submit', function (e) {

        e.preventDefault();

        if (phone.value == 0) {
            alert('Вы не ввели телефонный номер!');
        } else {
            alert(phone.value);
            phone.value = '';
            educationOnOff.style.display = 'none';
        }
    });
    educationOnOff.firstElementChild.addEventListener('click', function (e) {
        ;
        if (e.target.tagName == 'ARTICLE') {
            educationOnOff.style.display = 'none';
        }
    });
};

TextWindows[419] = new Dz(html419, js419, win419, fun419);

////// End 4-19


///// Begin 6-01
var win601 = '\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u043F\u043E\u043B\u0435 \u0432\u0432\u043E\u0434\u0430 \u0438 \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C \u043D\u0430 \u0441\u043E\u0431\u044B\u0442\u0438\u0435 keydown, \u043F\u043E \u043A\u043E\u0442\u043E\u0440\u043E\u043C\u0443 \u043D\u0443\u0436\u043D\u043E \u0431\u0440\u0430\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044F (\u043D\u0430\u043F\u0435\u0447\u0430\u0442\u0430\u043D\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442) \u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u0435\u0433\u043E \u0432 API Wiki.<br>\n\n    \u0418\u0437 \u043E\u0442\u0432\u0435\u0442\u0430 API \u043D\u0443\u0436\u043D\u043E \u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A autocomplete \u0438 \u0432\u0441\u0442\u0430\u0432\u043B\u044F\u0442\u044C \u0435\u0433\u043E \u043A\u0430\u043A \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0443 \u043F\u043E\u0434 \u043F\u043E\u043B\u0435\u043C \u0432\u0432\u043E\u0434\u0430.<br>\n\n    \u0412\u044B\u0433\u043B\u044F\u0434\u0435\u0442\u044C \u0434\u043E\u043B\u0436\u043D\u043E \u0442\u0430\u043A: http://take.ms/m08P9<br>\n\n     \u041A\u043B\u0438\u043A \u043D\u0430 \u043B\u044E\u0431\u043E\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u0434\u043E\u043B\u0436\u0435\u043D \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0432 \u043D\u043E\u0432\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435.<br>\n\n    \u041D\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u044E, \u0447\u0442\u043E:<br>\n\n- \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u043C\u043E\u0436\u043D\u043E \u043A\u043E\u043C\u0430\u043D\u0434\u043E\u0439 var a = document.createElement(\'a\')<br>\n\n   - \u0441\u0441\u044B\u043B\u043A\u0443 \u043A \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0443 \u043C\u043E\u0436\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043C\u0430\u043D\u0434\u043E\u0439 a.href = "http://site.com"<br>\n\n    - \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0443 \u043C\u043E\u0436\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043C\u0430\u043D\u0434\u043E\u0439 a.innerHTML = "Some text"<br>\n\n  - \u0447\u0442\u043E\u0431 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u043B\u043E \u0432 \u043D\u043E\u0432\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435, \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u043C \u0430\u0442\u0440\u0438\u0431\u0443\u0442 a.target = "_blank"<br>\n\n    - \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0432 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u043C\u043E\u0436\u043D\u043E \u043A\u043E\u043C\u0430\u043D\u0434\u043E\u0439<br>\n\ndocument.querySelector(\'.results\').appendChild(a)';

var js601 = 'let conteinerAjax = document.createElement(\'div\');\nlet textPressAjax = document.createElement(\'input\');\nconteinerAjax.classList.add(\'ajax\');\ntextPressAjax.setAttribute(\'id\', \'textPressAjax\');\ntextPressAjax.classList.add(\'ajax__search\');\ntextPressAjax.setAttribute(\'value\', \'\u041F\u043E\u0438\u0441\u043A...\');\ntextPressAjax.maxLength=\'20\';\nelWin.appendChild(conteinerAjax);\nconsole.log(textPressAjax);\nconteinerAjax.appendChild(textPressAjax);\ntextPressAjax.addEventListener(\'focus\', function (e) {\n    if (e.target.value == \'\u041F\u043E\u0438\u0441\u043A...\') {\n        e.target.value = \'\';\n    }\n})\ntextPressAjax.addEventListener(\'blur\', function (e) {\n    setTimeout(remuveDom, 500);\n})\ntextPressAjax.addEventListener(\'input\', axajSearch);\nfunction search() {\n    var seachText, spanPressAjax;\n    if (conteinerAjax.childElementCount != 1) {\n        remuveDom()\n    }\n    var params = {\n        action: \'opensearch\',\n        origin: \'*\',\n        format: \'json\',\n        search: \'\'\n    };\n    params.search = textPressAjax.value;\n    var body = Object.keys(params)\n        .map(function (prop) {\n            return prop + \'=\' + params[prop];\n        })\n        .join(\'&\');\n    var apiUrl = \'https://ru.wikipedia.org/w/api.php\';\n    var http = new XMLHttpRequest();\n    http.open(\'POST\', apiUrl);\n    http.addEventListener(\'readystatechange\', function () {\n        if (this.readyState == 4) {\n            if (this.status == 200) {\n                seachText = JSON.parse(this.responseText);\n                console.log(seachText.length);\n                for (var i = 0; i < seachText[1].length && i < 10; i++) {\n                    spanPressAjax = document.createElement(\'span\');\n                    spanPressAjax.classList.add(\'ajax__text\');\n                    spanPressAjax.innerHTML = `<a href="${seachText[3][i]}" target="_blank">${seachText[1][i]}</a>`;\n                    conteinerAjax.appendChild(spanPressAjax);\n                }\n            }\n        }\n    })\n    http.send(body);\n}\nvar time;\nfunction axajSearch() {\n    time && clearTimeout(time);\n    time=setTimeout(search,500);\n}\nfunction remuveDom() {\n    while (conteinerAjax.childElementCount != 1) {\n        conteinerAjax.lastElementChild.remove()\n    }\n}';

var html601 = '';

var fun601 = function fun601() {
    elWin.innerHTML = '';
    var conteinerAjax = document.createElement('div');
    var textPressAjax = document.createElement('input');

    conteinerAjax.classList.add('ajax');

    textPressAjax.setAttribute('id', 'textPressAjax');
    textPressAjax.classList.add('ajax__search');
    textPressAjax.setAttribute('value', 'Поиск...');
    textPressAjax.maxLength = '20';
    elWin.appendChild(conteinerAjax);

    conteinerAjax.appendChild(textPressAjax);

    textPressAjax.addEventListener('focus', function (e) {

        if (e.target.value == 'Поиск...') {
            e.target.value = '';
        }
    });

    textPressAjax.addEventListener('blur', function (e) {

        setTimeout(remuveDom, 500);
    });

    textPressAjax.addEventListener('input', axajSearch);

    function search() {
        var seachText, spanPressAjax;

        if (conteinerAjax.childElementCount != 1) {
            remuveDom();
        }
        var params = {
            action: 'opensearch',
            origin: '*',
            format: 'json',
            search: ''
        };
        params.search = textPressAjax.value;
        var body = Object.keys(params).map(function (prop) {
            return prop + '=' + params[prop];
        }).join('&');
        var apiUrl = 'https://ru.wikipedia.org/w/api.php';
        var http = new XMLHttpRequest();
        http.open('POST', apiUrl);
        http.addEventListener('readystatechange', function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    // success callback
                    seachText = JSON.parse(this.responseText);
                    console.log(seachText.length);

                    for (var i = 0; i < seachText[1].length && i < 10; i++) {

                        spanPressAjax = document.createElement('span');
                        spanPressAjax.classList.add('ajax__text');
                        spanPressAjax.innerHTML = '<a href="' + seachText[3][i] + '" target="_blank">' + seachText[1][i] + '</a>';
                        conteinerAjax.appendChild(spanPressAjax);
                    }
                }
            }
        });

        http.send(body);
    }

    var time;

    function axajSearch() {
        time && clearTimeout(time);
        time = setTimeout(search, 500);
    }

    function remuveDom() {
        while (conteinerAjax.childElementCount != 1) {
            conteinerAjax.lastElementChild.remove();
        }
    }
};

TextWindows[601] = new Dz(html601, js601, win601, fun601);
////// End 6-01


///// Begin 5-01
var win501 = '- \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0430\u043F\u043A\u0443 css \u0441 \u043F\u0430\u0440\u043E\u0439 \u0444\u0430\u0439\u043B\u043E\u0432 \u0441\u0442\u0438\u043B\u0435\u0439<br>\n- \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u044B\u0439 \u0444\u0430\u0439\u043B \u0441 \u0438\u043C\u0435\u043D\u0430\u043C\u0438 \u044D\u0442\u0438\u0445 \u0444\u0430\u0439\u043B\u043E\u0432, \u0437\u0430\u043F\u0438\u0441\u0430\u043D\u043D\u044B\u043C\u0438 \u0447\u0435\u0440\u0435\u0437 \u043F\u0440\u043E\u0431\u0435\u043B<br>\n- \u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0441\u043A\u0440\u0438\u043F\u0442 \u0434\u043B\u044F node, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0431\u0443\u0434\u0435\u0442:<br>\n  \u0447\u0438\u0442\u0430\u0442\u044C \u0444\u0430\u0439\u043B \u0441 \u0438\u043C\u0435\u043D\u0430\u043C\u0438,<br>\n  \u0440\u0430\u0437\u0431\u0438\u0432\u0430\u0442\u044C \u0441\u0442\u0440\u043E\u043A\u0443 \u0438\u043C\u0435\u043D \u043F\u043E \u043F\u0440\u043E\u0431\u0435\u043B\u0443 \u043D\u0430 \u043C\u0430\u0441\u0441\u0438\u0432 \u0438\u043C\u0435\u043D,<br>\n  \u0447\u0438\u0442\u0430\u0442\u044C \u0441\u0430\u043C\u0438 \u0444\u0430\u0439\u043B\u044B,<br>\n  \u0441\u043A\u043B\u0435\u0438\u0432\u0430\u0442\u044C \u0432 \u043E\u0434\u043D\u0443 \u0441\u0442\u0440\u043E\u043A\u0443,<br>\n  \u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u0442\u044C \u0432 \u043D\u043E\u0432\u044B\u0439 \u0444\u0430\u0439\u043B.<br>\n- \u0412\u044B\u043B\u043E\u0436\u0438\u0442\u044C \u0442\u0435\u043A\u0441\u0442 \u0441\u043A\u0440\u0438\u043F\u0442\u0430 \u043D\u0430 codepen \u0438 \u043F\u0440\u0438\u0441\u043B\u0430\u0442\u044C \u043A\u0430\u043A \u0414\u0417.<br>';

var js501 = 'var fs = require(\'fs\');\n    const jsList=fs.readFileSync(\'./src/js/HomeWorkJs/05/jsList.txt\', \'utf8\');\n    var list = jsList.split(\' \').reduce(function (list, currentValue) {\n        return list + fs.readFileSync(`./src/js/HomeWorkJs/04/${currentValue}`, `utf8`)\n\n    },0);\n    fs.writeFile(\'./src/js/HomeWorkJs/05/script.txt\', list);';

var html501 = '';

var fun501 = function fun501() {
    elWin.innerHTML = 'var fs = require(\'fs\');\n' + '    const jsList=fs.readFileSync(\'./src/js/HomeWorkJs/05/jsList.txt\', \'utf8\');\n' + '    var list = jsList.split(\' \').reduce(function (list, currentValue) {\n' + '        return list + fs.readFileSync(`./src/js/HomeWorkJs/04/\${currentValue}`, `utf8`)\n' + '\n' + '    },0);\n' + '    fs.writeFile(\'./src/js/HomeWorkJs/05/script.txt\', list);';
};

TextWindows[501] = new Dz(html501, js501, win501, fun501);
////// End 5-01


///// Begin 7-01

// var elSelect=document.querySelectorAll('.conteinerSelect'); //первый вариант
// // var elSelect=document.querySelectorAll('.upDown');
// // log(elSelect);
// var submit=document.querySelector('#formFruits');
// // console.log(submit);
// var i=0;
// while(elSelect[i]){
//     // log(elSelect[i]);
//     elSelect[i].addEventListener('click',function (e) {
//
//
//         if(e.target.classList.contains('up')||e.target.classList.contains('down'))
//         {
//             var first, last, next;
//
//
//             first = e.target.parentNode.previousElementSibling.firstElementChild;
//             // log(e.target.parentNode.previousElementSibling);
//             last = e.target.parentNode.previousElementSibling.lastElementChild;
//             // log(last);
//             next = first.nextElementSibling;
//
//
//
//             if (e.target.classList.contains('up')) {
//                 first.removeAttribute('selected', '');
//                 e.target.parentNode.previousElementSibling.insertBefore(last, first);
//
//                 last.setAttribute('selected', '');
//
//             }
//             if (e.target.classList.contains('down')) {
//                 first.removeAttribute('selected', '');
//                 e.target.parentNode.previousElementSibling.appendChild(first);
//                 next.setAttribute('selected', '');
//
//             }
//
//         }
//     });
// i++;
// }
//
// submit.addEventListener('submit',function (e) {
//     var form=document.querySelectorAll('select');
//     var i=0;
//     while(form[i]){
//         // console.log(form[i].value);
//         // console.log(form[i].getAttribute('name'));
//         localStorage.setItem(`${form[i].getAttribute('name')}`, `${form[i].value}`);
//         i++;
//     }
//     // console.log(form[1].form[i].value);
//     // var formData = new FormData(document.getElementById('formFruits'));
//     // console.log(e.target);
//     e.preventDefault();
//     alert('Ваш выбор сохранен!')
//     // console.log(formData);
//
// })
// ;(function (element){
//     var i=0,j=0,name, value, select;
//     var el=document.querySelectorAll(element);
//     // NodeList.prototype.filter=Array.prototype.filter;
//     HTMLCollection.prototype.filter=Array.prototype.filter;
//     // NodeList.prototype.filter=Array.prototype.filter;
//     // var er=el.filter(function (el){return el.getAttribute('name')=='harry'});
//     // log(er);
//     // console.log(el);
//     // log(el);
//     for(;i<el.length;i++){
//         name=el[i].getAttribute('name');
//         // log(name);
//         value=localStorage.getItem(name);
//         // log(value);
//         select=el[i].children.filter(function (el){return el.getAttribute('value')==value})
//         select[0].setAttribute('selected','');
//     }
//
//     // console.log(el[0].getAttribute('id'));
//     // while(localStorage.getItem(`${el[i].getAttribute('name')}`)){
//     //     el.firstElementChild.setAttribute('selected','');
//     // }
// })('.selectFormFruits');


var win701 = '\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u0444\u043E\u0440\u043C\u0443 \u0441 \u0441\u0435\u043B\u0435\u043A\u0442\u0430\u043C\u0438 (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0442\u0430\u043A\u0443\u044E http://take.ms/OLk4v).<br>\n \u041F\u0440\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0438 \u0444\u043E\u0440\u043C\u044B \u0434\u0430\u043D\u043D\u044B\u0435 \u0434\u043E\u043B\u0436\u043D\u044B \u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u0442\u044C\u0441\u044F \u0432 localStorage.<br>\n  \u0424\u043E\u0440\u043C\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C\u0441\u044F \u043D\u0435 \u0434\u043E\u043B\u0436\u043D\u0430.<br>\n \u041F\u043E\u0441\u043B\u0435 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u044B \u0442\u0435, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u043B\u0438\u0441\u044C.<br>';

var js701 = 'var elSelect=document.querySelectorAll(\'.conteinerSelect\'); //первый вариант\n' + '    var submit=document.querySelector(\'#formFruits\');\n' + '    var i=0;\n' + '    while(elSelect[i]){\n' + '        elSelect[i].addEventListener(\'click\',function (e) {\n' + '            if(e.target.classList.contains(\'up\')||e.target.classList.contains(\'down\'))\n' + '            {\n' + '                var first, last, next;\n' + '                first = e.target.parentNode.previousElementSibling.firstElementChild;\n' + '                last = e.target.parentNode.previousElementSibling.lastElementChild;\n' + '                next = first.nextElementSibling;\n' + '                if (e.target.classList.contains(\'up\')) {\n' + '                    first.removeAttribute(\'selected\', \'\');\n' + '                    e.target.parentNode.previousElementSibling.insertBefore(last, first);\n' + '                    last.setAttribute(\'selected\', \'\');\n' + '                }\n' + '                if (e.target.classList.contains(\'down\')) {\n' + '                    first.removeAttribute(\'selected\', \'\');\n' + '                    e.target.parentNode.previousElementSibling.appendChild(first);\n' + '                    next.setAttribute(\'selected\', \'\');\n' + '                }\n' + '            }\n' + '        });\n' + '        i++;\n' + '    }\n' + '    submit.addEventListener(\'submit\',function (e) {\n' + '        var form=document.querySelectorAll(\'select\');\n' + '        var i=0;\n' + '        while(form[i]){\n' + '            localStorage.setItem(`${form[i].getAttribute(\'name\')}`, `${form[i].value}`);\n' + '            i++;\n' + '        }\n' + '        e.preventDefault();\n' + '        alert(\'Ваш выбор сохранен!\')\n' + '    })\n' + '    ;(function (element){\n' + '        var i=0,j=0,name, value, select;\n' + '        var el=document.querySelectorAll(element);\n' + '        HTMLCollection.prototype.filter=Array.prototype.filter;\n' + '        for(;i<el.length;i++){\n' + '            name=el[i].getAttribute(\'name\');\n' + '            value=localStorage.getItem(name);\n' + '            select=el[i].children.filter(function (el){return el.getAttribute(\'value\')==value})\n' + '            select[0].setAttribute(\'selected\',\'\');\n' + '        }\n' + '    })(\'.selectFormFruits\');';

var html701 = '<div class="selectEvent">\n' + '        <article class="conteinerSelect">\n' + '            <label for="andy">Andy</label>\n' + '            <select name="andy" id="andy" form="formFruits" class="selectFormFruits">\n' + '                <option value="apple">Apple</option>\n' + '                <option value="orange">Orange</option>\n' + '                <option value="carrot">Carrot</option>\n' + '                <option value="cherry">Cherry</option>\n' + '            </select>\n' + '            <div class="upDown"><figure class="up" ></figure><figure class="down"></figure></div>\n' + '        </article>\n' + '        <article class="conteinerSelect">\n' + '            <label for="harry">Harry</label>\n' + '            <select name="harry" id="harry" form="formFruits" class="selectFormFruits" >\n' + '                <option value="apple">Apple</option>\n' + '                <option value="orange">Orange</option>\n' + '                <option value="carrot">Carrot</option>\n' + '                <option value="cherry">Cherry</option>\n' + '            </select>\n' + '            <div class="upDown"><figure class="up" ></figure><figure class="down"></figure></div>\n' + '        </article>\n' + '        </div>\n' + '        <form id="formFruits" >\n' + '            <input type="submit" value="Save">\n' + '        </form>';

var fun701 = function fun701() {
    elWin.innerHTML = html701;
    var elSelect = document.querySelectorAll('.conteinerSelect'); //первый вариант
    var submit = document.querySelector('#formFruits');
    var i = 0;
    while (elSelect[i]) {
        elSelect[i].addEventListener('click', function (e) {
            if (e.target.classList.contains('up') || e.target.classList.contains('down')) {
                var first, last, next;
                first = e.target.parentNode.previousElementSibling.firstElementChild;
                last = e.target.parentNode.previousElementSibling.lastElementChild;
                next = first.nextElementSibling;
                if (e.target.classList.contains('up')) {
                    first.removeAttribute('selected', '');
                    e.target.parentNode.previousElementSibling.insertBefore(last, first);
                    last.setAttribute('selected', '');
                }
                if (e.target.classList.contains('down')) {
                    first.removeAttribute('selected', '');
                    e.target.parentNode.previousElementSibling.appendChild(first);
                    next.setAttribute('selected', '');
                }
            }
        });
        i++;
    }
    submit.addEventListener('submit', function (e) {
        var form = document.querySelectorAll('select');
        var i = 0;
        while (form[i]) {
            localStorage.setItem('' + form[i].getAttribute('name'), '' + form[i].value);
            i++;
        }
        e.preventDefault();
        alert('Ваш выбор сохранен!');
    });(function (element) {
        var i = 0,
            j = 0,
            name,
            value,
            select;
        var el = document.querySelectorAll(element);
        HTMLCollection.prototype.filter = Array.prototype.filter;
        for (; i < el.length; i++) {
            name = el[i].getAttribute('name');
            value = localStorage.getItem(name);
            select = el[i].children.filter(function (el) {
                return el.getAttribute('value') == value;
            });
            select[0].setAttribute('selected', '');
        }
    })('.selectFormFruits');
};

TextWindows[701] = new Dz(html701, js701, win701, fun701);
////// End 7-01


///// Begin 7-02
var win702 = '\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u0444\u0443\u043D\u043A\u0446\u0438\u044E (\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F Promise), \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043E\u0442\u043A\u043B\u0430\u0434\u044B\u0432\u0430\u0435\u0442 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435.<br>\nfunction delay(ms){ /* \u0432\u0430\u0448 \u043A\u043E\u0434 \u0442\u0443\u0442 */ }<br>\nfunction doStuff() { console.log(\'\u0410 \u0432\u043E\u0442 \u0438 \u044F!\'); }<br>\ndelay(2000).then(doStuff);<br>\n \u0415\u0441\u043B\u0438 \u0432 delay \u043D\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u043B\u043E\u0441\u044C \u0447\u0438\u0441\u043B\u043E, \u0442\u043E \u0434\u0435\u043B\u0430\u0435\u043C \u0441\u0432\u043E\u044E \u043E\u0448\u0438\u0431\u043A\u0443, \u043D\u0430\u043Fs\u0440\u0438\u043C\u0435\u0440 "Please specify duration".<br>\n \u0415\u0441\u043B\u0438 \u0432 delay \u043F\u0435\u0440\u0435\u0434\u0430\u043B\u043E\u0441\u044C \u043D\u0435 \u0447\u0438\u0441\u043B\u043E, \u0442\u043E \u0434\u0435\u043B\u0430\u0435\u043C \u0441\u0432\u043E\u044E \u043E\u0448\u0438\u0431\u043A\u0443, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 "Duration is required to be a number".<br>';

var js702 = 'var log;\nelWin.innerHTML=\'html702\';\nlog(document.querySelectorAll(\'.promis\')[0]);\nfunction doStuff() { document.querySelectorAll(\'.promis\')[1].textContent=\'<\'img \'src=\'https://i.gifer.com/4dlj.gif\'>\' }\nvar delay=function (ms) {\n    ms&&( document.querySelectorAll(\'.promis\')[0].textContent=\'\u042F \u043F\u043E\u044F\u0432\u043B\u044E\u0441\u044C \u0447\u0435\u0440\u0435\u0437 \'+(ms/1000)+\' \u0441\u0435\u043A\u0443\u043D\u0434\u044B\');\n    if(typeof ms==\'number\'){\n    }\n    var tr= new Promise(function (resolve, reject) {\n        if(typeof ms==\'number\'){\n            setTimeout( resolve, ms) ;\n        }\n        else{\n            reject(ms)\n        }\n    });\n    return tr;\n};\n\ndelay(2000).then(doStuff).catch((r)=>log(\'Please enter a valid delay. You entered: \'+r));';

var html702 = '<div class="promis"></div><div class="promis"></div>';

var fun702 = function fun702() {
    var log;
    elWin.innerHTML = html702;

    function doStuff() {
        document.querySelectorAll('.promis')[1].innerHTML = '<img src="https://i.gifer.com/4dlj.gif">';
    }
    var delay = function delay(ms) {
        ms && (document.querySelectorAll('.promis')[0].textContent = 'Я появлюсь через ' + ms / 1000 + ' секунды');
        if (typeof ms == 'number') {}
        var tr = new Promise(function (resolve, reject) {
            if (typeof ms == 'number') {
                setTimeout(resolve, ms);
            } else {
                reject(ms);
            }
        });
        return tr;
    };

    delay(4000).then(doStuff).catch(function (r) {
        return log('Please enter a valid delay. You entered: ' + r);
    });
};

TextWindows[702] = new Dz(html702, js702, win702, fun702);
////// End 7-02


///// Begin 7-03
var win703 = '\u041F\u0435\u0440\u0435\u043F\u0438\u0441\u0430\u0442\u044C \u043F\u043E\u0438\u0441\u043A \u043F\u043E wiki, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F Promise.';

var js703 = 'let conteinerAjax = document.createElement(\'div\');\n    let textPressAjax = document.createElement(\'input\');\n    conteinerAjax.classList.add(\'ajax\');\n    textPressAjax.setAttribute(\'id\', \'textPressAjax\');\n    textPressAjax.classList.add(\'ajax__search\');\n    textPressAjax.setAttribute(\'value\', \'\u041F\u043E\u0438\u0441\u043A...\');\n    textPressAjax.maxLength = \'20\';\n    elWin.appendChild(conteinerAjax);\n    conteinerAjax.appendChild(textPressAjax);\ntextPressAjax.addEventListener(\'focus\', function (e) {\n        if (e.target.value == \'\u041F\u043E\u0438\u0441\u043A...\') {\n            e.target.value = \'\';\n        }\n    })\n    textPressAjax.addEventListener(\'blur\', function (e) {\n        setTimeout(remuveDom, 500);\n    })\n\n\n    function search() {\n        var seachText, spanPressAjax;\n        if (conteinerAjax.childElementCount != 1) {\n            remuveDom()\n        }\n\n        var params = {\n            action: \'opensearch\',\n            origin: \'*\',\n            format: \'json\',\n            search: \'\'\n        };\n        params.search = textPressAjax.value;\n        var body = Object.keys(params)\n            .map(function (prop) {\n                return prop + \'=\' + params[prop];\n            })\n            .join(\'&\');\n\n        return new Promise(function (resolve, reject) {\n\n            if (body.search != \'\') {\n                time && clearTimeout(time);\n                time = setTimeout(resolve, 500,body)\n            }\n            else {\n                reject(\'Something went wrong!\')\n            }\n        });\n\n    }\n\n    var time;\n    textPressAjax.addEventListener(\'input\', () => {\n\n        search().then((body) => {\n            // log(body);\n            var apiUrl = \'https://ru.wikipedia.org/w/api.php\';\n            var http = new XMLHttpRequest();\n            http.open(\'POST\', apiUrl);\n            http.addEventListener(\'readystatechange\', function () {\n\n                if (this.readyState == 4) {\n                    var seachText = JSON.parse(this.responseText);\n                    if (this.status == 200) {\n                        for (var i = 0; i < seachText[1].length && i < 10; i++) {\n\n                            var spanPressAjax = document.createElement(\'span\');\n                            spanPressAjax.classList.add(\'ajax__text\');\n                            spanPressAjax.innerHTML = `<a href="${seachText[3][i]}" target="_blank">${seachText[1][i]}</a>`;\n                            conteinerAjax.appendChild(spanPressAjax);\n                        }\n                    }\n                }\n            });\n            http.send(body);\n        });\n\n    });\n\n\n    function remuveDom() {\n        while (conteinerAjax.childElementCount != 1) {\n            conteinerAjax.lastElementChild.remove()\n        }\n    }\n';

var html703 = '';

var fun703 = function fun703() {
    elWin.innerHTML = html703;
    var conteinerAjax = document.createElement('div');
    var textPressAjax = document.createElement('input');
    conteinerAjax.classList.add('ajax');
    textPressAjax.setAttribute('id', 'textPressAjax');
    textPressAjax.classList.add('ajax__search');
    textPressAjax.setAttribute('value', 'Поиск...');
    textPressAjax.maxLength = '20';
    elWin.appendChild(conteinerAjax);
    conteinerAjax.appendChild(textPressAjax);

    textPressAjax.addEventListener('focus', function (e) {
        if (e.target.value == 'Поиск...') {
            e.target.value = '';
        }
    });
    textPressAjax.addEventListener('blur', function (e) {
        setTimeout(remuveDom, 500);
    });

    function search() {
        var seachText, spanPressAjax;
        if (conteinerAjax.childElementCount != 1) {
            remuveDom();
        }

        var params = {
            action: 'opensearch',
            origin: '*',
            format: 'json',
            search: ''
        };
        params.search = textPressAjax.value;
        var body = Object.keys(params).map(function (prop) {
            return prop + '=' + params[prop];
        }).join('&');

        return new Promise(function (resolve, reject) {

            if (body.search != '') {
                time && clearTimeout(time);
                time = setTimeout(resolve, 500, body);
            } else {
                reject('Something went wrong!');
            }
        });
    }

    var time;
    textPressAjax.addEventListener('input', function () {

        search().then(function (body) {
            // log(body);
            var apiUrl = 'https://ru.wikipedia.org/w/api.php';
            var http = new XMLHttpRequest();
            http.open('POST', apiUrl);
            http.addEventListener('readystatechange', function () {

                if (this.readyState == 4) {
                    var seachText = JSON.parse(this.responseText);
                    if (this.status == 200) {
                        for (var i = 0; i < seachText[1].length && i < 10; i++) {

                            var spanPressAjax = document.createElement('span');
                            spanPressAjax.classList.add('ajax__text');
                            spanPressAjax.innerHTML = '<a href="' + seachText[3][i] + '" target="_blank">' + seachText[1][i] + '</a>';
                            conteinerAjax.appendChild(spanPressAjax);
                        }
                    }
                }
            });
            http.send(body);
        });
    });

    function remuveDom() {
        while (conteinerAjax.childElementCount != 1) {
            conteinerAjax.lastElementChild.remove();
        }
    }
};

TextWindows[703] = new Dz(html703, js703, win703, fun703);
////// End 7-03


///// Begin 8-01


var win801 = '\u0415\u0441\u0442\u044C \u0441\u0430\u0439\u0442, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u0447\u0435\u043B\u043E\u0432\u0435\u043A \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u0438 \u043C\u043E\u0436\u0435\u0442 \u0443\u043A\u0430\u0437\u0430\u0442\u044C, \u0447\u0442\u043E \u0443 \u043D\u0435\u0433\u043E \u0435\u0441\u0442\u044C \u0441\u043E\u0431\u0430\u043A\u0430.<br>\n    \u0412 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438 \u043E\u0442 \u044D\u0442\u043E\u0433\u043E \u043F\u043E\u043B\u0443\u0447\u0438\u043C \u0442\u0430\u043A\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B:<br>\n    var user1 = { name: "Harry", dog: null };<br>\nvar user2 = { name: "David", dog: { name: "Lucky" } };<br>\n\u041F\u043E\u0441\u043B\u0435 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0430\u043C \u0441\u043E\u0431\u0430\u043A\u0438 \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u0442\u0441\u044F \u0441\u043A\u0438\u0434\u043A\u0430,<br>\n    \u0437\u0430 \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u043E\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0432\u043E\u0442 \u0442\u0430\u043A\u043E\u0439 \u043A\u043E\u0434:<br>\n    function notify() {<br>\n        console.log("You have a dog! Use this code for 50% off: UG4H6QE");<br>\n    }\nfunction checkDogOwner(user, callback) {<br>\n    if (user && user.dog) {<br>\n        callback();<br>\n    }\n}\n// on registration success<br>\ncheckDogOwner(user, notify);<br>\n\n\u0412\u0430\u043C \u043D\u0443\u0436\u043D\u043E \u043F\u043E\u043A\u0440\u044B\u0442\u044C \u0442\u0435\u0441\u0442\u0430\u043C\u0438 \u0440\u0430\u0431\u043E\u0442\u0443 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 checkDogOwner.<br>';

var js801 = 'describe("function checkDogOwner() test", function () {\n    var user,\n        spy,\n        callBack;\n\n    beforeEach(function() {\n        user = { name: "David", dog: { name: "Lucky" } };\n        spy = {\n            foo: function() {}\n        };\n        spyOn(spy, "foo");\n        callBack = function() {\n            spy.foo();\n        };\n    });\n\n    it("function exist", function () {\n        expect(checkDogOwner).toBeDefined();\n    });\n\n    it("type of checkDogOwner is function", function () {\n        expect(typeof checkDogOwner).toBe("function");\n    });\n\n    it("function have 2 expected arguments", function () {\n        expect(checkDogOwner.length).toBe(2);\n    });\n\n    it("function returns undefined", function () {\n        expect(checkDogOwner()).toBe(void(0));\n        expect(checkDogOwner(user, callBack)).toBe(void(0));\n    });\n\n    it("function call with one any argument throw exeption", function () {\n        expect(() => checkDogOwner(user)).toThrow();\n    });\n\n    it("function call with second non-function callback argument throw exeption", function () {\n        callBack = 6;\n        expect(() => checkDogOwner(user, callBack)).toThrow();\n    });\n\n    it("function call callback function if first argument has not-null dog propertie", function () {\n        checkDogOwner(user, callBack);\n        expect(spy.foo).toHaveBeenCalled();\n    });\n\n    it("function don\'t call callback function if first argument has null or undefined dog propertie", function () {\n        user = 5;\n        checkDogOwner(user, callBack);\n        expect(spy.foo).not.toHaveBeenCalled();\n    });\n});\n';

var html801 = 'Спасибо за подсказки Ивану!';

var fun801 = function fun801() {
    elWin.innerHTML = html401;
};

TextWindows[801] = new Dz(html801, js801, win801, fun801);
////// End 8-01


///// Begin 8-02
var win802 = '\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0442\u0435\u0441\u0442\u044B \u0434\u043B\u044F \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u0440\u0430\u0431\u043E\u0442\u044B \u043C\u0435\u0442\u043E\u0434\u0430 splice, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0435\u0441\u0442\u044C \u0443 \u043C\u0430\u0441\u0441\u0438\u0432\u043E\u0432.<br>\n\u0422\u043E \u0435\u0441\u0442\u044C, \u0432 \u0434\u0430\u043D\u043D\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435 \u043C\u044B \u043F\u0438\u0448\u0435\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u0442\u0435\u0441\u0442\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0431\u0443\u0434\u0443\u0442 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0441 \u043C\u0430\u0441\u0441\u0438\u0432\u0430\u043C\u0438 \u0438 \u0430\u043A\u0442\u0438\u0432\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043C\u0435\u0442\u043E\u0434 splice.<br>\n\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u043D\u0443\u0436\u043D\u043E \u043A\u0430\u0436\u0434\u0443\u044E \u043C\u0435\u043B\u043E\u0447\u044C \u0440\u0430\u0431\u043E\u0442\u044B \u044D\u0442\u043E\u0433\u043E \u043C\u0435\u0442\u043E\u0434\u0430:<br>\n\u0435\u0441\u0442\u044C \u043B\u0438 \u043C\u0435\u0442\u043E\u0434 \u0432\u043E\u043E\u0431\u0449\u0435, \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0435 \u043B\u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u044B \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B<br>\n(\u043D\u0430\u043F\u043E\u043C\u043D\u044E, \u0447\u0442\u043E \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u043D\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435),<br>\n\u043A\u0430\u043A\u043E\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043C\u0435\u0442\u043E\u0434, \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u043B\u0438 \u043E\u043D \u043E\u0442\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u0442 \u0432 \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u0435.<br>';

var js802 = 'describe(\'splice\', function () {\n    var arr,ar,arrayFun, funArray;\n\n    beforeEach(function () {\n        arr = ["\u042F", "\u043D\u0435\u043D\u0430\u0432\u0438\u0436\u0443", "Jasmine", "!"];\n        ar;\n\n    });\n    it(\'does the function exist\', function () {\n        expect((function(){\n\t\treturn Array.prototype.hasOwnProperty(\'splice\')\n\t\t})()).toBe(true);\n        \n\n    })\n\n    it(\'Will issue a function with two parameters\', function () {\n        expect((function () {\n            ar = arr.splice(0, 1);\n            return ar;\n\n        })()).toEqual(["\u042F"]);\n        expect((function () {\n            ar = arr.splice(1, 2);\n            return ar;\n\n        })()).toEqual(["Jasmine", "!"]);\n\n    })\n    it(\'how an array with two parameters changes\', function () {\n        expect((function () {\n            arr.splice(0, 1);\n            return arr;\n\n        })()).toEqual(["\u043D\u0435\u043D\u0430\u0432\u0438\u0436\u0443", "Jasmine", "!"]);\n\n        expect((function () {\n            arr.splice(1, 2);\n            return arr;\n\n        })()).toEqual(["\u043D\u0435\u043D\u0430\u0432\u0438\u0436\u0443"]);\n\n\n    })\n    it(\'Will issue a function with 1 parameter\', function () {\n        expect((function () {\n            ar = arr.splice(3);\n            return ar;\n\n        })()).toEqual(["!"]);\n\n        expect((function () {\n            ar = arr.splice(1);\n            return ar;\n\n        })()).toEqual(["\u043D\u0435\u043D\u0430\u0432\u0438\u0436\u0443", "Jasmine"]);\n    })\n\n    it(\'how the array changes with a function with 1 parameter\', function () {\n        expect((function () {\n            arr.splice(3);\n            return arr;\n\n        })()).toEqual(["\u042F", "\u043D\u0435\u043D\u0430\u0432\u0438\u0436\u0443", "Jasmine"]);\n\n        expect((function () {\n            arr.splice(1);\n            return arr;\n\n        })()).toEqual(["\u042F"]);\n    })\n\n    it(\'how the array changes with the function of replacement and insertion\', function () {\n        expect((function () {\n            arr.splice(1, 0, "\u0440\u0435\u0430\u043B\u044C\u043D\u043E");\n            return arr;\n\n        })()).toEqual(["\u042F", "\u0440\u0435\u0430\u043B\u044C\u043D\u043E", "\u043D\u0435\u043D\u0430\u0432\u0438\u0436\u0443", "Jasmine", "!"]);\n\n        expect((function () {\n            arr.splice(0, 5, "\u041F\u0440\u0430\u0432\u0434\u0430!");\n            return arr;\n\n        })()).toEqual(["\u041F\u0440\u0430\u0432\u0434\u0430!"]);\n    })\n    it(\'that returns a function with a replacement or an insertion\', function () {\n        expect((function () {\n            ar =arr.splice(1, 0, "\u0440\u0435\u0430\u043B\u044C\u043D\u043E");\n            return ar;\n\n        })()).toEqual([]);\n\n        expect((function () {\n            ar=arr.splice(0, 5, "\u041F\u0440\u0430\u0432\u0434\u0430!");\n            return ar;\n\n        })()).toEqual(["\u042F", "\u0440\u0435\u0430\u043B\u044C\u043D\u043E", "\u043D\u0435\u043D\u0430\u0432\u0438\u0436\u0443", "Jasmine", "!"]);\n    })\n    it(\'If nothing is passed to the function or an empty string is passed\', function () {\n        expect((function () {\n            ar =arr.splice();\n            return ar;\n\n        })()).toEqual([]);\n\n        expect((function () {\n            ar=arr.splice(\'\');\n            return ar;\n\n        })()).toEqual(["\u042F", "\u043D\u0435\u043D\u0430\u0432\u0438\u0436\u0443", "Jasmine", "!"]);\n\n        expect((function () {\n            arr.splice(\'\');\n            return arr;\n\n        })()).toEqual([]);\n\n        expect((function () {\n            arr.splice();\n            return arr;\n\n        })()).toEqual([]);\n    })\n\n})\n';

var html802 = '';

var fun802 = function fun802() {
    elWin.innerHTML = '';
};

TextWindows[802] = new Dz(html802, js802, win802, fun802);
////// End 4-01

// .

//
// })
// })


///// Begin 10-01
var win1001 = '\u0421\u0434\u0435\u043B\u0430\u0442\u044C 2 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B: index.html \u0438 offline.html<br>\n\u041F\u0435\u0440\u0432\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0434\u043E\u043B\u0436\u043D\u0430 \u0438\u043C\u0435\u0442\u044C textarea.<br>\n    \u0415\u0441\u043B\u0438 \u043C\u044B \u043D\u0430\u043F\u0438\u0441\u0430\u043B\u0438 \u0442\u0430\u043C \u0447\u0442\u043E-\u0442\u043E, \u0442\u043E \u044D\u0442\u043E\u0442 \u0442\u0435\u043A\u0441\u0442 \u0434\u043E\u043B\u0436\u0435\u043D \u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u0442\u044C\u0441\u044F \u0432 localStorage.<br>\n    \u0415\u0441\u043B\u0438 \u043C\u044B \u043E\u0431\u043D\u043E\u0432\u0438\u043B\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443, \u0442\u043E \u043C\u044B \u0434\u043E\u043B\u0436\u043D\u044B \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u043D\u0430\u0448 \u0442\u0435\u043A\u0441\u0442 \u0438 \u043C\u043E\u0447\u044C \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u043F\u0438\u0441\u0430\u0442\u044C \u0434\u0430\u043B\u044C\u0448\u0435.<br>\n    \u0415\u0441\u043B\u0438 \u043C\u044B \u043E\u0442\u043A\u043B\u044E\u0447\u0438\u043B\u0438 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442, \u0442\u043E \u0434\u043E\u043B\u0436\u043D\u0430 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C\u0441\u044F \u0432\u0442\u043E\u0440\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043F\u0440\u043E\u0441\u0442\u043E \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u0442 \u0442\u0435\u043A\u0441\u0442 (\u0431\u0435\u0437 textarea).<br>\ndocument.querySelector(\'#task10\').addEventListener(\'input\',e=> {<br>\n    // localStorage.setItem(\'textArea\', \'\')<br>\n    log(document.querySelector(\'#task10\').value)<br>';

var js1001 = 'var textArea10=document.querySelector(\'#task10\');\n    var imgElement=document.querySelector(\'body > section > main > section.conteinerWin__text > img\');\n    var textArea10duscribe =document.querySelector(\'body > section > main > section.conteinerWin__text > section > section:nth-child(2) > textarea\');\n    var setButtonTextArea=document.querySelector(\'body > section > main > section.conteinerWin__text > button\');\n\n//\u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043B\u0430\u0441\u044C \u043B\u0438 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430\n    if(imgElement.complete && imgElement.naturalHeight !== 0){\n        textArea10.value=!!localStorage.getItem(\'textArea\')?localStorage.getItem(\'textArea\'):\'\';\n        setButtonTextArea.onclick=setTextAreaValue;\n        window.onunload = setTextAreaValue;\n    }\n\n    else{\n        textArea10duscribe.value=localStorage.getItem(\'textArea\');\n    }\n\n//\u0412\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C \u0434\u0430\u043D\u043D\u044B\u0435 \u0438\u0437 localSorage\n    function setTextAreaValue() {\n        localStorage.setItem(\'textArea\',  document.querySelector(\'#task10\').value)\n    }';

var html1001 = '<section class="blok10">\n' + '                <section class="twoBlock10">\n' + '                    <textarea name="task10" id="task10" cols="30" rows="10" autofocus></textarea>\n' + '\n' + '                </section>\n' + '                <section class="twoBlock10">\n' + '                    <textarea name="task10"  cols="30" rows="10" data-textarea10="area" disabled></textarea>\n' + '                </section>\n' + '\n' + '            </section>\n' + '            <button>Сохранить</button>\n' + '            <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" class="noDisplay" alt="">';

var fun1001 = function fun1001() {
    elWin.innerHTML = html1001;
    var textArea10 = document.querySelector('#task10');
    var imgElement = document.querySelector('body > section > main > section.conteinerWin__text > img');
    var textArea10duscribe = document.querySelector('body > section > main > section.conteinerWin__text > section > section:nth-child(2) > textarea');
    var setButtonTextArea = document.querySelector('body > section > main > section.conteinerWin__text > button');

    //проверяем загрузилась ли картинка
    if (imgElement.complete && imgElement.naturalHeight !== 0) {
        textArea10.value = !!localStorage.getItem('textArea') ? localStorage.getItem('textArea') : '';
        setButtonTextArea.onclick = setTextAreaValue;
        window.onunload = setTextAreaValue;
    } else {
        textArea10duscribe.value = localStorage.getItem('textArea');
    }

    //Вставляем данные из localSorage
    function setTextAreaValue() {
        localStorage.setItem('textArea', document.querySelector('#task10').value);
    }
};

TextWindows[1001] = new Dz(html1001, js1001, win1001, fun1001);
////// End 10-01


// console.log('loading: ' + document.readyState);
//
//
//
// document.addEventListener('DOMContentLoaded', function() {
//
//     console.log('document@DOMContentLoaded: ' + document.readyState);
//
// });
//
// window.onload = function() {
//
//     console.log('window@load: ' + document.readyState);
//
// };
//
//
// function imgLoaded(imgElement) {
//     log( );
// }
//

///// Begin 10-03
var win1003 = '\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 (\u0432\u043E\u0442 \u0442\u0430\u043A\u0443\u044E: http://take.ms/saNQe), \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0431\u0443\u0434\u0435\u0442 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0442\u044C \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0435\u0439.<br>\n\u041F\u0435\u0440\u0432\u0430\u044F \u0438 \u0432\u0442\u043E\u0440\u0430\u044F \u0433\u0430\u043B\u043E\u0447\u043A\u0430 \u0432\u043A\u043B\u044E\u0447\u0430\u044E\u0442 \u043F\u043E\u043B\u044F \u0432\u0432\u043E\u0434\u0430 \u0434\u043B\u044F \u0443\u043A\u0430\u0437\u0430\u043D\u0438\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0445 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A.<br>\n\u0422\u0440\u0435\u0442\u044C\u044F \u0433\u0430\u043B\u043E\u0447\u043A\u0430 \u043D\u0435 \u0438\u043C\u0435\u0435\u0442 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u043E\u043B\u044F.<br>\n\u041B\u0435\u0432\u044B\u0439 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436 - \u044D\u0442\u043E \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043F\u043E-\u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E (\u0432 \u043A\u043E\u0434\u0435 \u043E\u043D\u043E \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043F\u0440\u043E\u0442\u043E\u0442\u0438\u043F\u043E\u043C \u0438\u043B\u0438 \u0444\u0430\u0431\u0440\u0438\u043A\u043E\u0439).<br>\n\u0422\u043E \u0435\u0441\u0442\u044C \u043B\u0435\u0432\u044B\u0439 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436 \u0431\u044B\u043B \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u0441 \u0432\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044B\u043C\u0438 \u0433\u0430\u043B\u043E\u0447\u043A\u0430\u043C\u0438, \u043F\u0440\u0430\u0432\u044B\u0439 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436 \u0431\u044B\u043B \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u0441 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u043C\u0438 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u043C\u0438.<br>\n<br>\nPS: \u043F\u043E\u0441\u0442\u0430\u0440\u0430\u0439\u0442\u0435\u0441\u044C \u043D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0441\u0432\u043E\u0439 \u043A\u043E\u0434 \u0442\u0430\u043A, \u0447\u0442\u043E\u0431 \u0440\u0430\u0437\u0431\u0438\u0442\u044C \u0432\u0441\u044E \u043B\u043E\u0433\u0438\u043A\u0443 \u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0438: \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0435\u0442\u0441\u044F \u043E\u0434\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u044F,<br>\n\u043F\u043E\u0442\u043E\u043C \u0432 \u043A\u043E\u043D\u0446\u0435 \u0441\u0432\u043E\u0435\u0439 \u0440\u0430\u0431\u043E\u0442\u044B \u0432\u044B\u0437\u044B\u0432\u0430\u0435\u0442 \u0434\u0440\u0443\u0433\u0443\u044E \u0444\u0443\u043D\u043A\u0446\u0438\u044E, \u0432 \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u043F\u0435\u0440\u0435\u0434\u0430\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B, \u0438 \u0442.\u0434.<br>\n\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440:<br>\nfunction handleAdd() {<br>\n  /* \u0432\u0435\u0448\u0430\u0435\u0442\u0441\u044F \u043D\u0430 \u043A\u043B\u0438\u043A */<br>\n  /* \u0441\u043E\u0431\u0440\u0430\u043B\u0438 \u0434\u0430\u043D\u043D\u044B\u0435 \u0441 \u043F\u043E\u043B\u0435\u0439 \u0432 \u043E\u0434\u0438\u043D \u043E\u0431\u044A\u0435\u043A\u0442 options */<br>\n  createCharacter(options);<br>\n}<br>\nfunction createCharacter(options) {<br>\n  /* \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u0442 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C document.createElement */<br>\n  addToPage(character);<br>\n}\nfunction addToPage(character) {<br>\n  /* \u0432\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0432 \u043D\u0443\u0436\u043D\u044B\u0439 \u0431\u043B\u043E\u043A */<br>\n}<br>';

var js1003 = '// \u0440\u0438\u0441\u0443\u0435\u043C \u0447\u0435\u043B\u043E\u0432\u0435\u0447\u043A\u0430 CharInfoArray-\u043E\u0431\u044D\u043A\u0442 \u0441 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435\u043C, elDom -\u0433\u0434\u0435 \u0440\u0438\u0441\u043E\u0432\u0430\u0442\u044C\n    function canvasChar(CharInfoArray, elDom) {\n        var properties = CharInfoArray;\n        if (elDom != undefined) {\n            var el = document.querySelector(elDom)\n            var ctx = el.getContext(\'2d\');\n            el.width = document.querySelector(\'.character\').clientWidth;\n            el.height = document.querySelector(\'.character\').clientHeight;\n        }\n        else {\n            var section, convas, elDivCanvas, Convas, ctx;\n            section = document.createElement(\'section\');\n            section.classList.add(\'character\');\n            convas = document.createElement(\'canvas\');\n            convas.classList.add(\'canvasChar\');\n            convas.setAttribute(\'data-char\', properties.charCount);\n            elDivCanvas = document.querySelector(\'.showingCharacters\');\n            elDivCanvas.appendChild(section);\n            section.appendChild(convas);\n            convas = Array.prototype.slice.call(document.querySelectorAll(\'canvas\'));\n            Convas = convas.filter(value => value.dataset.char == properties.charCount);\n            ctx = Convas[0].getContext(\'2d\');\n            Convas[0].width = document.querySelector(\'.character\').clientWidth;\n            Convas[0].height = document.querySelector(\'.character\').clientHeight;\n        }\n\n        ctx.lineWidth = .2;\n        ctx.strokeStyle = properties.colorPants;\n        ctx.fillStyle = properties.colorPants;\n\n// \u0440\u0438\u0441\u0443\u0435\u043C \u0448\u0442\u0430\u043D\u044B\n        ctx.beginPath();\n        ctx.moveTo(20, 110);\n        ctx.lineTo(70, 110);\n        ctx.lineTo(70, 170);\n        ctx.lineTo(50, 170);\n        ctx.lineTo(50, 130);\n        ctx.lineTo(40, 130);\n        ctx.lineTo(40, 170);\n        ctx.lineTo(20, 170);\n        ctx.closePath();\n        ctx.stroke();\n        ctx.fill();\n\n        // \u0420\u0438\u0441\u0443\u0435\u043C \u0440\u0443\u043A\u0438\n        ctx.beginPath();\n        ctx.strokeStyle = \'#0f0105\';\n        ctx.fillStyle = \'#0f0105\'\n        ctx.fillRect(0, 66, 90, 13);\n        ctx.closePath();\n        ctx.stroke();\n        ctx.fill();\n\n//\u0440\u0438\u0441\u0443\u0435\u043C \u0442\u0443\u043B\u043E\u0432\u0438\u0449\u0435\n        ctx.strokeStyle = properties.colorTShirt;\n        ctx.fillStyle = properties.colorTShirt;\n        ctx.beginPath();\n        ctx.moveTo(70, 110);\n        ctx.lineTo(20, 110);\n        ctx.lineTo(20, 78);\n        ctx.arc(45, 78, 25.9, getRadians(180), getRadians(360));\n        ctx.stroke(); // *22\n        ctx.fill();\n        ctx.stroke();\n\n//\u0420\u0438\u0441\u0443\u0435\u043C \u0433\u043E\u043B\u043E\u0432\u0443\n        ctx.beginPath();\n        ctx.strokeStyle = \'#d2b48c\';\n        ctx.fillStyle = \'#d2b48c\';\n        ctx.moveTo(39, 52);\n        ctx.lineTo(39, 49);\n        ctx.lineTo(50, 49);\n        ctx.lineTo(50, 52);\n        ctx.stroke();\n        ctx.fill();\n        ctx.stroke();\n\n        ctx.beginPath();\n        ctx.strokeStyle = \'#d2b48c\';\n        ctx.fillStyle = \'#d2b48c\';\n        ctx.arc(45, 28, 23, getRadians(180), getRadians(360), true)\n        ctx.lineTo(70, 20);\n        ctx.lineTo(21, 20);\n        ctx.lineTo(21, 25);\n        ctx.stroke();\n        ctx.fill();\n        ctx.stroke();\n\n        //\u0440\u0438\u0441\u0443\u0435\u043C \u0440\u043E\u0442\n        ctx.beginPath();\n        ctx.strokeStyle = \'#fffacd\';\n        ctx.fillStyle = \'#0f0f0f\';\n        ctx.lineWidth = 1;\n        ctx.arc(45, 35, 10, getRadians(0), getRadians(180));\n        ctx.stroke();\n        ctx.fill();\n        ctx.stroke();\n\n        // \u0420\u0438\u0441\u0443\u043C \u0433\u043B\u0430\u0437\u0430\n        // \u041B\u0435\u0432\u044B\u0439 \u0433\u043B\u0430\u0437\n        ctx.beginPath();\n        ctx.moveTo(38, 23);\n        ctx.lineWidth = 3;\n        ctx.strokeStyle = \'#ffffff\';//\u0446\u0432\u0435\u0442 \u0433\u043B\u0430\u0437\u043D\u043E\u0433\u043E \u044F\u0431\u043B\u043E\u043A\u0430 \u043B\u0435\u0432\u043E\u0433\u043E\n        ctx.fillStyle = \'#0a0407\';//\u0446\u0432\u0435\u0442 \u0437\u0440\u0430\u0447\u043A\u0430 \u043B\u0435\u0432\u043E\u0433\u043E\n        ctx.arc(35, 23, 4, getRadians(0), getRadians(360));\n\n        //\u041F\u0440\u0430\u0432\u044B\u0439 \u0433\u043B\u0430\u0437\n        ctx.strokeStyle = \'#ffffff\';//\u0446\u0432\u0435\u0442 \u0433\u043B\u0430\u0437\u043D\u043E\u0433\u043E \u044F\u0431\u043B\u043E\u043A\u0430 \u043F\u0440\u0430\u0432\u043E\u0433\u043E\n        ctx.fillStyle = \'#0a0407\';//\u0446\u0432\u0435\u0442 \u0437\u0440\u0430\u0447\u043A\u0430 \u043F\u0440\u0430\u0432\u043E\u0433\u043E\n        ctx.moveTo(57, 23);\n        ctx.arc(55, 23, 4, getRadians(0), getRadians(360));\n        ctx.stroke();\n        ctx.fill();\n        ctx.stroke();\n\n        //\u0420\u0438\u0441\u0443\u0435\u043C \u0432\u043E\u043B\u043E\u0441\u044B\n        ctx.beginPath();\n        ctx.lineWidth = 1;\n        ctx.moveTo(20, 20);\n        ctx.strokeStyle = properties.colorHair;\n        ctx.fillStyle = properties.colorHair;\n        ctx.lineTo(20, 9);\n        ctx.quadraticCurveTo(45, -8, 70, 9);\n        ctx.lineTo(70, 20);\n        ctx.stroke();\n        ctx.fill();\n        ctx.stroke();\n\n        ctx.beginPath();\n        ctx.strokeStyle = \'#100550\';\n        ctx.fillStyle = \'#100550\';\n        ctx.font = "14px Georgia";\n        ctx.textAlign = \'center\';\n        ctx.fillText(properties.nameChar, 45, 190);\n        ctx.closePath();\n\n        //\u0440\u0438\u0441\u0443\u0435\u043C \u0420\u0438\u0441\u0443\u043D\u043E\u043A\n        if (properties.pictureChar == \'true\') {\n            ctx.beginPath();\n            ctx.strokeStyle = \'#70a000\';\n            ctx.fillStyle = \'#70a000\'\n            ctx.fillRect(31, 70, 30, 30);\n            ctx.strokeStyle = \'#fff\';\n            ctx.fillStyle = \'#fff\';\n            ctx.font = "24px Georgia";\n            ctx.textAlign = \'center\';\n\n            ctx.fillText(\'H\', 45, 93);\n            ctx.closePath();\n            ctx.stroke(); // *22\n            ctx.fill();\n        }\n    }\n\n//\u0424\u0443\u043D\u043A\u0446\u0438\u044F \u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0433\u0440\u0430\u0434\u0443\u0441\u043E\u0432 \u0432 \u0440\u0430\u0434\u0438\u0430\u043D\u044B\n    function getRadians(degrees) {\n        return (Math.PI / 180) * degrees;\n    }\n\n//\u0424\u0443\u043D\u043A\u0443\u0438\u044F \u0441\u043A\u0440\u044B\u0442\u0438\u044F \u0438\u043D\u043F\u0443\u0442\u043E\u0432\n    let noDisply = function (el, elNoDisply, displyValue, elInput) {\n        // var textInput = \'\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F\';\n        var elForm = document.querySelector(elNoDisply);\n        document.querySelector(el).addEventListener(\'change\', (e) => {\n            elForm.classList.toggle(\'noDisplay\');\n            if (elForm.dataset.input==\'inputName\') return elForm.value=\'\';\n        })\n        // var textInput = \'\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F\';\n        // var elFormChar = document.querySelector(el);\n        // elFormChar.addEventListener(\'change\', (e) => {\n        //     var colorHareArray = Array.prototype.slice.call(document.querySelectorAll(elNoDisply));\n        //     if (e.target.checked) {\n        //         return colorHareArray.map((i) => {\n        //             i.style.display = displyValue;\n        //         })\n        //     }\n        //     colorHareArray.map((i) => {\n        //         i.style.display = \'none\'\n        //     })\n        //     if (elInput) {\n        //         document.querySelector(elInput).value = textInput;\n        //     }\n        // })\n    }\n\n    noDisply(\'#checkColorPants\', \'#inputColorPants\');\n    noDisply(\'#checkColorHair\', \'#inputColorHair\');\n    noDisply(\'#checkColorT-shirt\', \'#inputColorT-shirt\');\n    noDisply(\'#checkName\', \'#inputName\');\n\n//\u0444\u0443\u043D\u043A\u0446\u0438\u044F \u0441\u043A\u0440\u044B\u0442\u0438\u044F \u043F\u0435\u0440\u0432\u043E\u043D\u0430\u0447\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0442\u0435\u043A\u0441\u0442\u0430 \u0432 input\n//     let inputFocusBlur = function (el) {\n//         var elInput = document.querySelector(el);\n//         // elInput.addEventListener(\'focus\', (e) => {\n//         //     if (e.target.value = \'\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F\') {\n//         //         return e.target.value = \'\';\n//         //     }\n//         // })\n//         // elInput.addEventListener(\'blur\', (e) => {\n//         //     if (e.target.value == \'\') {\n//         //         return e.target.value = \'\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F\';\n//         //     }\n//         // })\n//         // elInput.addEventListener(\'input\', (e) => {\n//         //\n//         //     if (e.target.classList.contains(\'noDisplay\')) return log(\'ty\');\n//         // })\n//     }\n//     inputFocusBlur(\'.inputName\');\n\n    const Default = {\n\n        constructor: function (nameChar, colorHair, pictureChar, colorPants, colorTShirt) {\n\n            this.nameChar = nameChar,\n                this.colorHair = colorHair,\n                this.pictureChar = pictureChar,\n                this.colorPants = colorPants,\n                this.colorTShirt = colorTShirt\n            return this;\n        },\n        _nameChar: \'Nameless\',\n        _colorHair: \'A3FF58\',\n        _colorPants: \'3028FF\',\n        _colorTShirt: \'FF5F18\',\n        _picture: \'false\',\n        get charDrawing() {\n            canvasChar(this.charInfo)\n        },\n        get charInfo() {\n            var nameChar = this.nameChar != \'\' && this.nameChar != undefined && this.nameChar != \'\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F\' ? this.nameChar : this._nameChar;\n            var colorHair = this.colorHair != \'\' && this.colorHair != undefined ? (\'#\' + this.colorHair) : (\'#\' + this._colorHair);\n            var colorPants = this.colorPants != \'\' && this.colorPants != undefined ? (\'#\' + this.colorPants) : (\'#\' + this._colorPants);\n            var colorTShirt = this.colorTShirt != \'\' && this.colorTShirt != undefined ? (\'#\' + this.colorTShirt) : (\'#\' + this._colorTShirt);\n            if (this.pictureChar == (\'true\' || \'false\')) {\n                var pictureChar = this.pictureChar;\n            }\n            else {\n                var pictureChar = this._picture;\n            }\n            var charCount = this.count;\n            return {nameChar, colorHair, pictureChar, colorPants, colorTShirt, charCount}\n        },\n        count: 0,\n        id: 0,\n        get iDChar() {\n            ++this.id;\n            return this.id;\n        },\n        get countChar() {\n            ++this.count;\n            return this.count;\n        }\n    }\n    const CharDefault = Object.create(Default);\n    CharDefault.constructor = function (nameChar, colorHair, pictureChar, colorPants, colorTShirt, count) {\n        Default.constructor.apply(this, arguments);\n        this.count = count;\n        return this;\n    };\n\n    const User = {};\n    function addUser(nameChar, colorHair, pictureChar, colorPants, colorTShirt) {\n        var cg = Object.create(CharDefault);\n        User[Default.iDChar] = cg.constructor(nameChar, colorHair, pictureChar, colorPants, colorTShirt, Default.countChar);\n        return User;\n    }\n\n    function showChars() {\n        document.getElementsByName(\'formCharacter\')[0].addEventListener(\'submit\', (e) => {\n            let {nameChar, colorHair, pictureChar, colorPants, colorTShirt} = getValue();\n            e.preventDefault();\n            addUser(nameChar, colorHair, pictureChar, colorPants, colorTShirt);\n            document.querySelector(\'.showingCharacters\').innerHTML = \'\';\n            for (var i = 1; i <= Default.count; i++) {\n                User[i].charDrawing;\n            }\n\n        })\n    }\n\n    showChars();\n\n//\u0421\u043E\u0431\u0438\u0440\u0430\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0435 \u0441 \u0444\u043E\u0440\u043C\u044B\n    let getValue = function () {\n        var elInput = Array.prototype.slice.call(document.querySelectorAll(\'input\'));\n        var {nameChar, colorHair, pictureChar, colorPants, colorTShirt} = Default;\n\n//\u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C \u043E\u0442\u043C\u0435\u0447\u0435\u043D\u043D\u044B \u043B\u0438 \u0447\u0435\u043A\u0431\u043E\u043A\u0441\u044B\n        elInput[0].checked == true ? nameChar = elInput[1].value : nameChar;\n        elInput[2].checked == true ? colorHair = elInput[3].value : colorHair;\n        elInput[4].checked == true ? colorPants = elInput[5].value : colorPants;\n        elInput[6].checked == true ? colorTShirt = elInput[7].value : colorTShirt;\n        elInput[8].checked == true ? pictureChar = \'true\' : pictureChar;\n        var charOnline = Object.create(CharDefault).constructor(nameChar, colorHair, pictureChar, colorPants, colorTShirt);\n        return charOnline;\n    }\n\n\n    canvasChar(Default.charInfo, \'#canvasChar\');\n\n    function showCharOnline() {\n        document.querySelector(\'checkIn\');\n        var el = document.querySelector(\'.checkIn\');\n        el.addEventListener(\'change\', (e) => {\n            let charOnline = getValue();\n            canvasChar(charOnline.charInfo, \'#canvasChar\');\n        })\n    }\n\n    showCharOnline();';

var html1003 = '\n<article class="blockC">\n            <div class="characterCheckIn">\n            <section id="character" class="character">\n            <canvas id="canvasChar" class="canvasChar"></canvas>\n            </section>\n\n            <section id="checkIn" class="checkIn">\n            <div class="checkIn__check">\n\n\n            <label for="checkName" class="newCheckbox "><input type="checkbox" name="checkName"\n            class="checkCharacter" id="checkName"\n            form="formCharacter"> <span></span>\n            \u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0438\u043C\u044F </label>\n            <input type="text" class="inputName noDisplay" placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F"  data-input="inputName" id="inputName"  maxlength="11"\n            form="formCharacter">\n            </div>\n            <div class="checkIn__check">\n\n\n            <label for="checkColorHair" class="newCheckbox"><input type="checkbox" name="checkHair"\n            class="checkCharacter"\n            id="checkColorHair"\n            form="formCharacter"> <span></span>\n            \u0423\u043A\u0430\u0437\u0430\u0442\u044C \u0446\u0432\u0435\u0442 \u0432\u043E\u043B\u043E\u0441 </label>\n\n            <input class="jscolor noDisplay" id="inputColorHair" value="">\n            <!--form="formCharacter" value="blond"-->\n            <!--id="colorHairBlond" name="colorHair"><span></span></label><label for="colorHairBlond" class="radio">\u0411\u043B\u043E\u043D\u0434\u0438\u043D <input type="radio" class="colorHair"-->\n            <!--form="formCharacter" value="blond"-->\n            <!--id="colorHairBlond" name="colorHair"><span></span></label>\n            <input class="jscolor" value="">\n            <!--<label for="colorHairBlond" class="radio">\u0411\u043B\u043E\u043D\u0434\u0438\u043D <input type="radio" class="colorHair"-->\n            <!--form="formCharacter" value="blond"-->\n            <!--id="colorHairBlond" name="colorHair"><span></span></label>-->\n            <!--<label for="colorHair\u0410ire" class="radio">\u041E\u0433\u043D\u0435\u043D\u044B\u0439 <input type="radio" class="colorHair"-->\n            <!--form="formCharacter" value="fire"-->\n            <!--id="colorHair\u0410ire" name="colorHair"><span></span></label>-->\n            <!--<label for="colorHairBlanks" class="radio">\u0411\u0440\u044E\u043D\u0435\u0442 <input type="radio" class="colorHair"-->\n            <!--form="formCharacter" value="blanks"-->\n            <!--id="colorHairBlanks" name="colorHair"><span></span></label>-->\n\n\n            </div>\n            <div class="checkIn__check">\n            <label for="checkColorPants" class="newCheckbox"><input type="checkbox" name="checkHair"\n            class="checkCharacter"\n            id="checkColorPants"\n            form="formCharacter"> <span></span>\n            \u0423\u043A\u0430\u0437\u0430\u0442\u044C \u0446\u0432\u0435\u0442 \u0448\u0442\u0430\u043D\u043E\u0432 </label>\n\n            <input class="jscolor noDisplay" id="inputColorPants">\n            </div>\n            <div class="checkIn__check">\n            <label for="checkColorT-shirt" class="newCheckbox"><input type="checkbox" name="checkHair"\n            class="checkCharacter"\n            id="checkColorT-shirt"\n            form="formCharacter">\n            <span></span>\n            \u0423\u043A\u0430\u0437\u0430\u0442\u044C \u0446\u0432\u0435\u0442 \u0444\u0443\u0442\u0431\u043E\u043B\u043A\u0438 </label>\n\n            <input class="jscolor noDisplay" id="inputColorT-shirt">\n            </div>\n            <div class="checkIn__check">\n\n\n            <label for="checkPicture" class="newCheckbox"><input type="checkbox" name="checkPicture"\n            class="checkCharacter"\n            id="checkPicture"\n            form="formCharacter"> <span></span>\n            \u0421 \u0440\u0438\u0441\u0443\u043D\u043A\u043E\u043C </label>\n\n            </div>\n\n\n            <form action="#" name="formCharacter" id="formCharacter">\n            <input type="submit" value="\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u041F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0430">\n            </form>\n\n            </section>\n\n            </div>\n            <section id="showingCharacters" class="showingCharacters">\n\n            </section>\n\n            </article>\n            ';

var fun1003 = function fun1003() {
    elWin.innerHTML = html1003;
    // рисуем человечка CharInfoArray-обэкт с описанием, elDom -где рисовать
    function canvasChar(CharInfoArray, elDom) {
        var properties = CharInfoArray;
        if (elDom != undefined) {
            var el = document.querySelector(elDom);
            var ctx = el.getContext('2d');
            el.width = document.querySelector('.character').clientWidth;
            el.height = document.querySelector('.character').clientHeight;
        } else {
            var section, convas, elDivCanvas, Convas, ctx;
            section = document.createElement('section');
            section.classList.add('character');
            convas = document.createElement('canvas');
            convas.classList.add('canvasChar');
            convas.setAttribute('data-char', properties.charCount);
            elDivCanvas = document.querySelector('.showingCharacters');
            elDivCanvas.appendChild(section);
            section.appendChild(convas);
            convas = Array.prototype.slice.call(document.querySelectorAll('canvas'));
            Convas = convas.filter(function (value) {
                return value.dataset.char == properties.charCount;
            });
            ctx = Convas[0].getContext('2d');
            Convas[0].width = document.querySelector('.character').clientWidth;
            Convas[0].height = document.querySelector('.character').clientHeight;
        }

        ctx.lineWidth = .2;
        ctx.strokeStyle = properties.colorPants;
        ctx.fillStyle = properties.colorPants;

        // рисуем штаны
        ctx.beginPath();
        ctx.moveTo(20, 110);
        ctx.lineTo(70, 110);
        ctx.lineTo(70, 170);
        ctx.lineTo(50, 170);
        ctx.lineTo(50, 130);
        ctx.lineTo(40, 130);
        ctx.lineTo(40, 170);
        ctx.lineTo(20, 170);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        // Рисуем руки
        ctx.beginPath();
        ctx.strokeStyle = '#0f0105';
        ctx.fillStyle = '#0f0105';
        ctx.fillRect(0, 66, 90, 13);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        //рисуем туловище
        ctx.strokeStyle = properties.colorTShirt;
        ctx.fillStyle = properties.colorTShirt;
        ctx.beginPath();
        ctx.moveTo(70, 110);
        ctx.lineTo(20, 110);
        ctx.lineTo(20, 78);
        ctx.arc(45, 78, 25.9, getRadians(180), getRadians(360));
        ctx.stroke(); // *22
        ctx.fill();
        ctx.stroke();

        //Рисуем голову
        ctx.beginPath();
        ctx.strokeStyle = '#d2b48c';
        ctx.fillStyle = '#d2b48c';
        ctx.moveTo(39, 52);
        ctx.lineTo(39, 49);
        ctx.lineTo(50, 49);
        ctx.lineTo(50, 52);
        ctx.stroke();
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = '#d2b48c';
        ctx.fillStyle = '#d2b48c';
        ctx.arc(45, 28, 23, getRadians(180), getRadians(360), true);
        ctx.lineTo(70, 20);
        ctx.lineTo(21, 20);
        ctx.lineTo(21, 25);
        ctx.stroke();
        ctx.fill();
        ctx.stroke();

        //рисуем рот
        ctx.beginPath();
        ctx.strokeStyle = '#fffacd';
        ctx.fillStyle = '#0f0f0f';
        ctx.lineWidth = 1;
        ctx.arc(45, 35, 10, getRadians(0), getRadians(180));
        ctx.stroke();
        ctx.fill();
        ctx.stroke();

        // Рисум глаза
        // Левый глаз
        ctx.beginPath();
        ctx.moveTo(38, 23);
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#ffffff'; //цвет глазного яблока левого
        ctx.fillStyle = '#0a0407'; //цвет зрачка левого
        ctx.arc(35, 23, 4, getRadians(0), getRadians(360));

        //Правый глаз
        ctx.strokeStyle = '#ffffff'; //цвет глазного яблока правого
        ctx.fillStyle = '#0a0407'; //цвет зрачка правого
        ctx.moveTo(57, 23);
        ctx.arc(55, 23, 4, getRadians(0), getRadians(360));
        ctx.stroke();
        ctx.fill();
        ctx.stroke();

        //Рисуем волосы
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.moveTo(20, 20);
        ctx.strokeStyle = properties.colorHair;
        ctx.fillStyle = properties.colorHair;
        ctx.lineTo(20, 9);
        ctx.quadraticCurveTo(45, -8, 70, 9);
        ctx.lineTo(70, 20);
        ctx.stroke();
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = '#100550';
        ctx.fillStyle = '#100550';
        ctx.font = "14px Georgia";
        ctx.textAlign = 'center';
        ctx.fillText(properties.nameChar, 45, 190);
        ctx.closePath();

        //рисуем Рисунок
        if (properties.pictureChar == 'true') {
            ctx.beginPath();
            ctx.strokeStyle = '#70a000';
            ctx.fillStyle = '#70a000';
            ctx.fillRect(31, 70, 30, 30);
            ctx.strokeStyle = '#fff';
            ctx.fillStyle = '#fff';
            ctx.font = "24px Georgia";
            ctx.textAlign = 'center';

            ctx.fillText('H', 45, 93);
            ctx.closePath();
            ctx.stroke(); // *22
            ctx.fill();
        }
    }

    //Функция преобразования градусов в радианы
    function getRadians(degrees) {
        return Math.PI / 180 * degrees;
    }

    //Функуия скрытия инпутов
    var noDisply = function noDisply(el, elNoDisply, displyValue, elInput) {
        // var textInput = 'Введите имя';
        var elForm = document.querySelector(elNoDisply);
        document.querySelector(el).addEventListener('change', function (e) {
            elForm.classList.toggle('noDisplay');
            if (elForm.dataset.input == 'inputName') return elForm.value = '';
        });
        // var textInput = 'Введите имя';
        // var elFormChar = document.querySelector(el);
        // elFormChar.addEventListener('change', (e) => {
        //     var colorHareArray = Array.prototype.slice.call(document.querySelectorAll(elNoDisply));
        //     if (e.target.checked) {
        //         return colorHareArray.map((i) => {
        //             i.style.display = displyValue;
        //         })
        //     }
        //     colorHareArray.map((i) => {
        //         i.style.display = 'none'
        //     })
        //     if (elInput) {
        //         document.querySelector(elInput).value = textInput;
        //     }
        // })
    };

    noDisply('#checkColorPants', '#inputColorPants');
    noDisply('#checkColorHair', '#inputColorHair');
    noDisply('#checkColorT-shirt', '#inputColorT-shirt');
    noDisply('#checkName', '#inputName');

    //функция скрытия первоначального текста в input
    //     let inputFocusBlur = function (el) {
    //         var elInput = document.querySelector(el);
    //         // elInput.addEventListener('focus', (e) => {
    //         //     if (e.target.value = 'Введите имя') {
    //         //         return e.target.value = '';
    //         //     }
    //         // })
    //         // elInput.addEventListener('blur', (e) => {
    //         //     if (e.target.value == '') {
    //         //         return e.target.value = 'Введите имя';
    //         //     }
    //         // })
    //         // elInput.addEventListener('input', (e) => {
    //         //
    //         //     if (e.target.classList.contains('noDisplay')) return log('ty');
    //         // })
    //     }
    //     inputFocusBlur('.inputName');

    var Default = {

        constructor: function constructor(nameChar, colorHair, pictureChar, colorPants, colorTShirt) {

            this.nameChar = nameChar, this.colorHair = colorHair, this.pictureChar = pictureChar, this.colorPants = colorPants, this.colorTShirt = colorTShirt;
            return this;
        },
        _nameChar: 'Nameless',
        _colorHair: 'A3FF58',
        _colorPants: '3028FF',
        _colorTShirt: 'FF5F18',
        _picture: 'false',
        get charDrawing() {
            canvasChar(this.charInfo);
        },
        get charInfo() {
            var nameChar = this.nameChar != '' && this.nameChar != undefined && this.nameChar != 'Введите имя' ? this.nameChar : this._nameChar;
            var colorHair = this.colorHair != '' && this.colorHair != undefined ? '#' + this.colorHair : '#' + this._colorHair;
            var colorPants = this.colorPants != '' && this.colorPants != undefined ? '#' + this.colorPants : '#' + this._colorPants;
            var colorTShirt = this.colorTShirt != '' && this.colorTShirt != undefined ? '#' + this.colorTShirt : '#' + this._colorTShirt;
            if (this.pictureChar == ('true' || 'false')) {
                var pictureChar = this.pictureChar;
            } else {
                var pictureChar = this._picture;
            }
            var charCount = this.count;
            return { nameChar: nameChar, colorHair: colorHair, pictureChar: pictureChar, colorPants: colorPants, colorTShirt: colorTShirt, charCount: charCount };
        },
        count: 0,
        id: 0,
        get iDChar() {
            ++this.id;
            return this.id;
        },
        get countChar() {
            ++this.count;
            return this.count;
        }
    };
    var CharDefault = Object.create(Default);
    CharDefault.constructor = function (nameChar, colorHair, pictureChar, colorPants, colorTShirt, count) {
        Default.constructor.apply(this, arguments);
        this.count = count;
        return this;
    };

    var User = {};
    function addUser(nameChar, colorHair, pictureChar, colorPants, colorTShirt) {
        var cg = Object.create(CharDefault);
        User[Default.iDChar] = cg.constructor(nameChar, colorHair, pictureChar, colorPants, colorTShirt, Default.countChar);
        return User;
    }

    function showChars() {
        document.getElementsByName('formCharacter')[0].addEventListener('submit', function (e) {
            var _getValue = getValue(),
                nameChar = _getValue.nameChar,
                colorHair = _getValue.colorHair,
                pictureChar = _getValue.pictureChar,
                colorPants = _getValue.colorPants,
                colorTShirt = _getValue.colorTShirt;

            e.preventDefault();
            addUser(nameChar, colorHair, pictureChar, colorPants, colorTShirt);
            document.querySelector('.showingCharacters').innerHTML = '';
            for (var i = 1; i <= Default.count; i++) {
                User[i].charDrawing;
            }
        });
    }

    showChars();

    //Собирает данные с формы
    var getValue = function getValue() {
        var elInput = Array.prototype.slice.call(document.querySelectorAll('input'));
        var nameChar = Default.nameChar,
            colorHair = Default.colorHair,
            pictureChar = Default.pictureChar,
            colorPants = Default.colorPants,
            colorTShirt = Default.colorTShirt;

        //проверяем отмеченны ли чекбоксы

        elInput[0].checked == true ? nameChar = elInput[1].value : nameChar;
        elInput[2].checked == true ? colorHair = elInput[3].value : colorHair;
        elInput[4].checked == true ? colorPants = elInput[5].value : colorPants;
        elInput[6].checked == true ? colorTShirt = elInput[7].value : colorTShirt;
        elInput[8].checked == true ? pictureChar = 'true' : pictureChar;
        var charOnline = Object.create(CharDefault).constructor(nameChar, colorHair, pictureChar, colorPants, colorTShirt);
        return charOnline;
    };

    canvasChar(Default.charInfo, '#canvasChar');

    function showCharOnline() {
        document.querySelector('checkIn');
        var el = document.querySelector('.checkIn');
        el.addEventListener('change', function (e) {
            var charOnline = getValue();
            canvasChar(charOnline.charInfo, '#canvasChar');
        });
    }

    showCharOnline();
};

TextWindows[1003] = new Dz(html1003, js1003, win1003, fun1003);
////// End 10-03


// // рисуем человечка CharInfoArray-обэкт с описанием, elDom -где рисовать
// function canvasChar(CharInfoArray, elDom) {
//     var properties = CharInfoArray;
//     if (elDom != undefined) {
//         var el = document.querySelector(elDom)
//         var ctx = el.getContext('2d');
//         el.width = document.querySelector('.character').clientWidth;
//         el.height = document.querySelector('.character').clientHeight;
//     }
//     else {
//         var section, convas, elDivCanvas, Convas, ctx;
//         section = document.createElement('section');
//         section.classList.add('character');
//         convas = document.createElement('canvas');
//         convas.classList.add('canvasChar');
//         convas.setAttribute('data-char', properties.charCount);
//         elDivCanvas = document.querySelector('.showingCharacters');
//         elDivCanvas.appendChild(section);
//         section.appendChild(convas);
//         convas = Array.prototype.slice.call(document.querySelectorAll('canvas'));
//         Convas = convas.filter(value => value.dataset.char == properties.charCount);
//         ctx = Convas[0].getContext('2d');
//         Convas[0].width = document.querySelector('.character').clientWidth;
//         Convas[0].height = document.querySelector('.character').clientHeight;
//     }
//
//     ctx.lineWidth = .2;
//     ctx.strokeStyle = properties.colorPants;
//     ctx.fillStyle = properties.colorPants;
//
// // рисуем штаны
//     ctx.beginPath();
//     ctx.moveTo(20, 110);
//     ctx.lineTo(70, 110);
//     ctx.lineTo(70, 170);
//     ctx.lineTo(50, 170);
//     ctx.lineTo(50, 130);
//     ctx.lineTo(40, 130);
//     ctx.lineTo(40, 170);
//     ctx.lineTo(20, 170);
//     ctx.closePath();
//     ctx.stroke();
//     ctx.fill();
//
//     // Рисуем руки
//     ctx.beginPath();
//     ctx.strokeStyle = '#0f0105';
//     ctx.fillStyle = '#0f0105'
//     ctx.fillRect(0, 66, 90, 13);
//     ctx.closePath();
//     ctx.stroke();
//     ctx.fill();
//
// //рисуем туловище
//     ctx.strokeStyle = properties.colorTShirt;
//     ctx.fillStyle = properties.colorTShirt;
//     ctx.beginPath();
//     ctx.moveTo(70, 110);
//     ctx.lineTo(20, 110);
//     ctx.lineTo(20, 78);
//     ctx.arc(45, 78, 25.9, getRadians(180), getRadians(360));
//     ctx.stroke(); // *22
//     ctx.fill();
//     ctx.stroke();
//
// //Рисуем голову
//     ctx.beginPath();
//     ctx.strokeStyle = '#d2b48c';
//     ctx.fillStyle = '#d2b48c';
//     ctx.moveTo(39, 52);
//     ctx.lineTo(39, 49);
//     ctx.lineTo(50, 49);
//     ctx.lineTo(50, 52);
//     ctx.stroke();
//     ctx.fill();
//     ctx.stroke();
//
//     ctx.beginPath();
//     ctx.strokeStyle = '#d2b48c';
//     ctx.fillStyle = '#d2b48c';
//     ctx.arc(45, 28, 23, getRadians(180), getRadians(360), true)
//     ctx.lineTo(70, 20);
//     ctx.lineTo(21, 20);
//     ctx.lineTo(21, 25);
//     ctx.stroke();
//     ctx.fill();
//     ctx.stroke();
//
//     //рисуем рот
//     ctx.beginPath();
//     ctx.strokeStyle = '#fffacd';
//     ctx.fillStyle = '#0f0f0f';
//     ctx.lineWidth = 1;
//     ctx.arc(45, 35, 10, getRadians(0), getRadians(180));
//     ctx.stroke();
//     ctx.fill();
//     ctx.stroke();
//
//     // Рисум глаза
//     // Левый глаз
//     ctx.beginPath();
//     ctx.moveTo(38, 23);
//     ctx.lineWidth = 3;
//     ctx.strokeStyle = '#ffffff';//цвет глазного яблока левого
//     ctx.fillStyle = '#0a0407';//цвет зрачка левого
//     ctx.arc(35, 23, 4, getRadians(0), getRadians(360));
//
//     //Правый глаз
//     ctx.strokeStyle = '#ffffff';//цвет глазного яблока правого
//     ctx.fillStyle = '#0a0407';//цвет зрачка правого
//     ctx.moveTo(57, 23);
//     ctx.arc(55, 23, 4, getRadians(0), getRadians(360));
//     ctx.stroke();
//     ctx.fill();
//     ctx.stroke();
//
//     //Рисуем волосы
//     ctx.beginPath();
//     ctx.lineWidth = 1;
//     ctx.moveTo(20, 20);
//     ctx.strokeStyle = properties.colorHair;
//     ctx.fillStyle = properties.colorHair;
//     ctx.lineTo(20, 9);
//     ctx.quadraticCurveTo(45, -8, 70, 9);
//     ctx.lineTo(70, 20);
//     ctx.stroke();
//     ctx.fill();
//     ctx.stroke();
//
//     ctx.beginPath();
//     ctx.strokeStyle = '#100550';
//     ctx.fillStyle = '#100550';
//     ctx.font = "14px Georgia";
//     ctx.textAlign = 'center';
//     ctx.fillText(properties.nameChar, 45, 190);
//     ctx.closePath();
//
//     //рисуем Рисунок
//     if (properties.pictureChar == 'true') {
//         ctx.beginPath();
//         ctx.strokeStyle = '#70a000';
//         ctx.fillStyle = '#70a000'
//         ctx.fillRect(31, 70, 30, 30);
//         ctx.strokeStyle = '#fff';
//         ctx.fillStyle = '#fff';
//         ctx.font = "24px Georgia";
//         ctx.textAlign = 'center';
//
//         ctx.fillText('H', 45, 93);
//         ctx.closePath();
//         ctx.stroke(); // *22
//         ctx.fill();
//     }
// }
//
// //Функция преобразования градусов в радианы
// function getRadians(degrees) {
//     return (Math.PI / 180) * degrees;
// }
//
// //Функуия скрытия инпутов
// let noDisply = function (el, elNoDisply, displyValue, elInput) {
//     var textInput = 'Введите имя';
//     var elFormChar = document.querySelector(el);
//     elFormChar.addEventListener('change', (e) => {
//         var colorHareArray = Array.prototype.slice.call(document.querySelectorAll(elNoDisply));
//         if (e.target.checked) {
//             return colorHareArray.map((i) => {
//                 i.style.display = displyValue;
//             })
//         }
//         colorHareArray.map((i) => {
//             i.style.display = 'none'
//         })
//         if (elInput) {
//             document.querySelector(elInput).value = textInput;
//         }
//     })
// }
//
// noDisply('#checkColorPants', '#inputColorPants', 'flex');
// noDisply('#checkColorHair', '#inputColorHair', 'flex');
// noDisply('#checkColorT-shirt', '#inputColorT-shirt', 'flex');
// noDisply('#checkName', '#inputName', 'flex', '.inputName');
//
// //функция скрытия первоначального текста в input
// let inputFocusBlur = function (el) {
//     var elInput = document.querySelector(el);
//     elInput.addEventListener('focus', (e) => {
//         if (e.target.value = 'Введите имя') {
//             return e.target.value = '';
//         }
//     })
//     elInput.addEventListener('blur', (e) => {
//         if (e.target.value == '') {
//             return e.target.value = 'Введите имя';
//         }
//     })
//     elInput.addEventListener('input', (e) => {
//         if (e.target.style.display == 'none') return e.target.value = 'Введите имя';
//     })
// }
// inputFocusBlur('.inputName');
//
// const Default = {
//
//     constructor: function (nameChar, colorHair, pictureChar, colorPants, colorTShirt) {
//
//         this.nameChar = nameChar,
//             this.colorHair = colorHair,
//             this.pictureChar = pictureChar,
//             this.colorPants = colorPants,
//             this.colorTShirt = colorTShirt
//         return this;
//     },
//     _nameChar: 'Nameless',
//     _colorHair: 'A3FF58',
//     _colorPants: '3028FF',
//     _colorTShirt: 'FF5F18',
//     _picture: 'false',
//     get charDrawing() {
//         canvasChar(this.charInfo)
//     },
//     get charInfo() {
//         var nameChar = this.nameChar != '' && this.nameChar != undefined && this.nameChar != 'Введите имя' ? this.nameChar : this._nameChar;
//         var colorHair = this.colorHair != '' && this.colorHair != undefined ? ('#' + this.colorHair) : ('#' + this._colorHair);
//         var colorPants = this.colorPants != '' && this.colorPants != undefined ? ('#' + this.colorPants) : ('#' + this._colorPants);
//         var colorTShirt = this.colorTShirt != '' && this.colorTShirt != undefined ? ('#' + this.colorTShirt) : ('#' + this._colorTShirt);
//         if (this.pictureChar == ('true' || 'false')) {
//             var pictureChar = this.pictureChar;
//         }
//         else {
//             var pictureChar = this._picture;
//         }
//         var charCount = this.count;
//         return {nameChar, colorHair, pictureChar, colorPants, colorTShirt, charCount}
//     },
//     count: 0,
//     id: 0,
//     get iDChar() {
//         ++this.id;
//         return this.id;
//     },
//     get countChar() {
//         ++this.count;
//         return this.count;
//     }
// }
// const CharDefault = Object.create(Default);
// CharDefault.constructor = function (nameChar, colorHair, pictureChar, colorPants, colorTShirt, count) {
//     Default.constructor.apply(this, arguments);
//     this.count = count;
//     return this;
// };
//
// const User = {};
// function addUser(nameChar, colorHair, pictureChar, colorPants, colorTShirt) {
//     var cg = Object.create(CharDefault);
//     User[Default.iDChar] = cg.constructor(nameChar, colorHair, pictureChar, colorPants, colorTShirt, Default.countChar);
//     return User;
// }
//
// function showChars() {
//     document.getElementsByName('formCharacter')[0].addEventListener('submit', (e) => {
//         let {nameChar, colorHair, pictureChar, colorPants, colorTShirt} = getValue();
//         e.preventDefault();
//         addUser(nameChar, colorHair, pictureChar, colorPants, colorTShirt);
//         document.querySelector('.showingCharacters').innerHTML = '';
//         for (var i = 1; i <= Default.count; i++) {
//             User[i].charDrawing;
//                     }
//
//     })
// }
//
// showChars();
//
// //Собирает данные с формы
// let getValue = function () {
//     var elInput = Array.prototype.slice.call(document.querySelectorAll('input'));
//     var {nameChar, colorHair, pictureChar, colorPants, colorTShirt} = Default;
//
// //проверяем отмеченны ли чекбоксы
//     elInput[0].checked == true ? nameChar = elInput[1].value : nameChar;
//     elInput[2].checked == true ? colorHair = elInput[3].value : colorHair;
//     elInput[4].checked == true ? colorPants = elInput[5].value : colorPants;
//     elInput[6].checked == true ? colorTShirt = elInput[7].value : colorTShirt;
//     elInput[8].checked == true ? pictureChar = 'true' : pictureChar;
//     var charOnline = Object.create(CharDefault).constructor(nameChar, colorHair, pictureChar, colorPants, colorTShirt);
//     return charOnline;
// }
//
//
// canvasChar(Default.charInfo, '#canvasChar');
//
// function showCharOnline() {
//     document.querySelector('checkIn');
//     var el = document.querySelector('.checkIn');
//     el.addEventListener('change', (e) => {
//         let charOnline = getValue();
//         canvasChar(charOnline.charInfo, '#canvasChar');
//     })
// }
//
// showCharOnline();


///// Begin 11-02
var win1102 = '\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0444\u0443\u043D\u043A\u0446\u0438\u0438 (\u0436\u0435\u043B\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u043A\u0430\u043A \u043C\u043E\u0436\u043D\u043E \u043A\u043E\u0440\u043E\u0447\u0435):<br>\nconst getInitials = ...;<br>\nconsole.log(getInitials({ firstName: "Andy", lastName: "Davidson" })); // A.D.<br>\nconsole.log(getInitials({ firstName: "Andy" })); // A.<br>\nconsole.log(getInitials({ lastName: "Davidson" })); // D.<br>\n\n// ---<br>\nconst doubleArray = ...;<br>\n\nconsole.log(doubleArray([1, 2, 3])); // [1, 2, 3, 1, 2, 3]<br>\nconsole.log(doubleArray([{ one: 1, two: 2 }])); // [{ one: 1, two: 2 }, { one: 1, two: 2 }]<br>\n\n// ---<br>\nconst merge = ...<br>\n\nconsole.log(merge({ one: 1, two: 2 }, { two: 22, three: 3 })); // { one: 1, two: 22, three: 3 }<br>';

var js1102 = 'const doubleArray=function (a) {\n    return  [...a,...a]\n}\nconst merge = function (a) {\n\n    var result=new Object(),i=0;\n    while(arguments[i]){\n        Object.assign(result,arguments[i])\n        i++;\n    }\n    return result\n}\nconst getInitials=function ({firstName, lastName}={}) {\n    return ${firstName ? (firstName[0].toUpperCase() + \'.\') : \'\'}${lastName ? (lastName[0].toUpperCase() + \'.\') : \'\'};\n}';

var html1102 = '';

var fun1102 = function fun1102() {
    elWin.innerHTML = '';
    var doubleArray = function doubleArray(a) {
        return [].concat(_toConsumableArray(a), _toConsumableArray(a));
    };
    var merge = function merge(a) {

        var result = new Object(),
            i = 0;
        while (arguments[i]) {
            Object.assign(result, arguments[i]);
            i++;
        }
        return result;
    };
    var getInitials = function getInitials() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            firstName = _ref.firstName,
            lastName = _ref.lastName;

        return '' + (firstName ? firstName[0].toUpperCase() + '.' : '') + (lastName ? lastName[0].toUpperCase() + '.' : '');
    };
};

TextWindows[1102] = new Dz(html1102, js1102, win1102, fun1102);
////// End 11-02


///// Begin 12-01
var win1201 = '\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u043A\u043D\u043E\u043F\u043A\u0443 \u0432 \u0432\u0438\u0434\u0435 \u043F\u043B\u044E\u0441\u0430, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u043C\u043E\u0436\u043D\u043E \u043D\u0430\u0436\u0430\u0442\u044C \u0438 \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0444\u0430\u0439\u043B (\u0438\u043B\u0438 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E).<br>\n\n\u041F\u043E\u0434 \u043A\u043D\u043E\u043F\u043A\u043E\u0439 \u0434\u043E\u043B\u0436\u043D\u044B \u043D\u0430\u043F\u043E\u043B\u043D\u044F\u0442\u044C\u0441\u044F \u0434\u0432\u0430 \u0441\u043F\u0438\u0441\u043A\u0430:<br>\n- \u0432 \u043B\u0435\u0432\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A \u043D\u0443\u0436\u043D\u043E \u043F\u0438\u0441\u0430\u0442\u044C \u0444\u0430\u0439\u043B\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0438<br>\n- \u0432 \u043F\u0440\u0430\u0432\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A \u043D\u0443\u0436\u043D\u043E \u043F\u0438\u0441\u0430\u0442\u044C \u0444\u0430\u0439\u043B\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0435 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0438<br>\n- \u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u0442\u044C \u043D\u0443\u0436\u043D\u043E \u0438\u043C\u0435\u043D\u0430 \u0444\u0430\u0439\u043B\u043E\u0432 \u0438 \u0438\u0445 \u0440\u0430\u0437\u043C\u0435\u0440<br>\n- \u0440\u0430\u0437\u043C\u0435\u0440 \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0432 \u0447\u0435\u043B\u043E\u0432\u0435\u0447\u0435\u0441\u043A\u043E\u043C \u0432\u0438\u0434\u0435 (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, 5.2 \u041C\u0431 \u0432\u043C\u0435\u0441\u0442\u043E 5292344 \u0431\u0430\u0439\u0442)<br>\n\n\u041A\u0442\u043E \u043F\u043B\u0430\u043D\u0438\u0440\u0443\u0435\u0442 \u0441\u0442\u0430\u0442\u044C \u043A\u043B\u0430\u0441\u0441\u043D\u044B\u043C \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0441\u0442\u043E\u043C - \u043C\u043E\u0436\u0435\u0442 \u0442\u0430\u043A\u0436\u0435 \u0441\u0434\u0435\u043B\u0430\u0442\u044C:<br>\n- \u043A\u0440\u043E\u043C\u0435 \u0438\u043C\u0435\u043D\u0438 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0438 \u0432\u044B\u0432\u043E\u0434\u0438\u0442\u044C \u043F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0440\u0430\u0437\u043C\u0435\u0440\u043E\u043C auto x 30px<br>\n- \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0445 \u0441\u0442\u0440\u043E\u043A \u0438\u0437 \u0441\u043F\u0438\u0441\u043A\u0430<br>\n- \u0432\u044B\u0432\u043E\u0434 \u043E\u0448\u0438\u0431\u043A\u0438, \u0435\u0441\u043B\u0438 \u0431\u044B\u043B \u0432\u044B\u0431\u0440\u0430\u043D \u0444\u0430\u0439\u043B \u0440\u0430\u0437\u043C\u0435\u0440\u043E\u043C \u0431\u043E\u043B\u0435\u0435 5 \u041C\u0431 (\u043F\u0440\u044F\u0442\u0430\u0442\u044C \u043E\u0448\u0438\u0431\u043A\u0443 - \u043F\u0440\u0438 \u043A\u043B\u0438\u043A\u0435 \u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0443 \u043F\u043B\u044E\u0441\u0430)<br>';

var js1201 = 'document.querySelector(\'.inputImageMultiple\').addEventListener(\'change\',function(e){\n    loadImg(e);\n    })\ndocument.querySelector(\'.inputImageMultiple\').addEventListener(\'drop\',function(e){\n    loadImg(e);\n})\n//Type checking func- tions for type\nfunction testTypeImage(fileType, type) {\n    let arrTypeImage=type.filter(i=>{\n        return i==fileType.type.split(\'/\')[1];//\u0431\u0435\u0440\u0435\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u0432\u0442\u043E\u0440\u0443\u044E \u0447\u0430\u0441\u0442\u044C \u0442\u0438\u043F\u0430\n    })\n    return arrTypeImage.length;\n}\n//Size Checking Funcures\nfunction testSize(testFile, maxSize) {\n    return testFile.size<maxSize?true:false}\n\n    function exchangeByteForMb(byte) {\n        return (byte/(Math.pow(1024,2))).toFixed(2)\n    }\n\n\n// The function of deleting a parent block by its element\nfunction deleteImg(block, blockDeleteClass) {\n    document.querySelector(block).addEventListener(\'click\', (e) => {\nif(e.target.classList.contains(blockDeleteClass)){\n    e.preventDefault();\n    e.target.parentElement.remove();\n}\n        })\n\n}\ndeleteImg(\'.startFlex\',\'deleteImg\');\ndeleteImg(\'.startFlex__column\',\'infoNoImage__info__delete\');\n\n//function for processing the downloaded image\nfunction loadImg(e) {\n    var files=e.target.files;\n    if(files.length){\n        [].forEach.call(files, function (file) {\n            const reader = new FileReader();\n            //\u043F\u0440\u043E\u0432\u0435\u0442\u043A\u0430 \u043D\u0430 \u0442\u0438\u043F \u0437\u0430\u0448\u0440\u0443\u0436\u0435\u043D\u043D\u043E\u0433\u043E \u0444\u0430\u0439\u043B\u0430 \u0438 \u0440\u0430\u0437\u043C\u0435\u0440\n            exchangeByteForMb(file.size)>5&&console.log(\'55\');\n            if(testTypeImage(file,[\'gif\',\'jpeg\',\'pjpeg\',\'png\'])&&exchangeByteForMb(file.size)<5){\n                reader.onload = function(e) {\n                    var fileData = e.target.result;//base64\n                    var error = e.target.error;\n                    error&&log(\'\u0424\u0430\u0439\u043B \u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043B\u0441\u044F!\');\n                    var block = \'<div class="blockFlexImgInfo">\n                               <img src="${fileData}" alt="">\n                             <a href="#" class="deleteImg "></a>\n                        <div class="blockFlexImgInfo__name">${file.name.split(\'.\')[0]}</div>\n                        <div class="blockFlexImgInfo__size">${exchangeByteForMb(file.size)} Mb</div>\n                    </div>\';\n                    document.querySelector(\'.blockFlexImg__square\').insertAdjacentHTML(\'afterEnd\', block);\n                };\n                reader.readAsDataURL(file);\n            }\n            else if(testTypeImage(file,[\'gif\',\'jpeg\',\'pjpeg\',\'png\'])){\n                var errorSize=document.createElement(\'div\');\n                errorSize.classList.add(\'errorSizeImg\');\n                errorSize.innerHTML=`Error: ${file.name.split(\'.\')[0]} \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0435\u0442  \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440 5 Mb!`;\n                document.querySelector(\'.errorSizeImgConteiner\').appendChild(errorSize);\n\n                setTimeout( ()=> document.querySelector(\'.errorSizeImg\').remove(),7000);\n\n                log (66666);\n            }\n            else {\n                var blockNoImage=\'<article class="infoNoImage">\n                        <div class="flex">\n                            <pre class="infoNoImage__info-maxSize">${file.name.split(\'.\')[0]}</pre>\n                            <pre class="infoNoImage__info">${file.type.split(\'/\')[1]}</pre>\n                            <pre class="infoNoImage__info">${exchangeByteForMb(file.size)} Mb</pre>\n                        </div>\n                        <pre class="infoNoImage__info__delete ">Delete </pre>\n                    </article>\';\n                document.querySelector(\'.startFlex__column\').insertAdjacentHTML(\'beforeEnd\', blockNoImage);\n            }\n        });\n        \n        e.target.value=\'\';\n    }\n}';

var html1201 = '<section class="block10 positionReletive">\n' + '                <article class="errorSizeImgConteiner">\n' + '                </article>\n' + '\n' + '                <section class="twoBlock10 startFlex">\n' + '                    <div class="blockFlexImg__square">\n' + '                        <input type="file" class="inputImageMultiple" multiple>\n' + '                    </div>\n' + '                </section>\n' + '                <section class="twoBlock10 startFlex__column">\n' + '                </section>\n' + '            </section>';

var fun1201 = function fun1201() {
    elWin.innerHTML = html1201;
    document.querySelector('.inputImageMultiple').addEventListener('change', function (e) {
        loadImg(e);
    });
    document.querySelector('.inputImageMultiple').addEventListener('drop', function (e) {
        loadImg(e);
    });
    //Type checking func- tions for type
    function testTypeImage(fileType, type) {
        var arrTypeImage = type.filter(function (i) {
            return i == fileType.type.split('/')[1]; //берем только вторую часть типа
        });
        return arrTypeImage.length;
    }
    //Size Checking Funcures
    function testSize(testFile, maxSize) {
        return testFile.size < maxSize ? true : false;
    }

    function exchangeByteForMb(byte) {
        return (byte / Math.pow(1024, 2)).toFixed(2);
    }

    // The function of deleting a parent block by its element
    function deleteImg(block, blockDeleteClass) {
        document.querySelector(block).addEventListener('click', function (e) {
            if (e.target.classList.contains(blockDeleteClass)) {
                e.preventDefault();
                e.target.parentElement.remove();
            }
        });
    }
    deleteImg('.startFlex', 'deleteImg');
    deleteImg('.startFlex__column', 'infoNoImage__info__delete');

    //function for processing the downloaded image
    function loadImg(e) {
        var files = e.target.files;
        if (files.length) {
            [].forEach.call(files, function (file) {
                var reader = new FileReader();
                //проветка на тип зашруженного файла и размер
                exchangeByteForMb(file.size) > 5 && console.log('55');
                if (testTypeImage(file, ['gif', 'jpeg', 'pjpeg', 'png']) && exchangeByteForMb(file.size) < 5) {
                    reader.onload = function (e) {
                        var fileData = e.target.result; //base64
                        var error = e.target.error;
                        error && log('Файл не загрузился!');
                        var block = '<div class="blockFlexImgInfo">\n                               <img src="' + fileData + '" alt="">\n                             <a href="#" class="deleteImg "></a>\n                        <div class="blockFlexImgInfo__name">' + file.name.split('.')[0] + '</div>\n                        <div class="blockFlexImgInfo__size">' + exchangeByteForMb(file.size) + ' Mb</div>\n                    </div>';
                        document.querySelector('.blockFlexImg__square').insertAdjacentHTML('afterEnd', block);
                    };
                    reader.readAsDataURL(file);
                } else if (testTypeImage(file, ['gif', 'jpeg', 'pjpeg', 'png'])) {
                    var errorSize = document.createElement('div');
                    errorSize.classList.add('errorSizeImg');
                    errorSize.innerHTML = 'Error: ' + file.name.split('.')[0] + ' \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0435\u0442  \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440 5 Mb!';
                    document.querySelector('.errorSizeImgConteiner').appendChild(errorSize);

                    setTimeout(function () {
                        return document.querySelector('.errorSizeImg').remove();
                    }, 7000);

                    log(66666);
                } else {
                    var blockNoImage = '<article class="infoNoImage">\n                        <div class="flex">\n                            <pre class="infoNoImage__info-maxSize">1. ' + file.name.split('.')[0] + '</pre>\n                            <pre class="infoNoImage__info">' + file.type.split('/')[1] + '</pre>\n                            <pre class="infoNoImage__info">' + exchangeByteForMb(file.size) + ' Mb</pre>\n                        </div>\n                        <pre class="infoNoImage__info__delete ">Delete </pre>\n                    </article>';
                    document.querySelector('.startFlex__column').insertAdjacentHTML('beforeEnd', blockNoImage);
                }
            });

            e.target.value = '';
        }
    }
};

TextWindows[1201] = new Dz(html1201, js1201, win1201, fun1201);
////// End 12-01