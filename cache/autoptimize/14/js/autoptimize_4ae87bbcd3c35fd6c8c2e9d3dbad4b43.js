/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(a,b,c){function d(c){var d=b.console;f[c]||(f[c]=!0,a.migrateWarnings.push(c),d&&d.warn&&!a.migrateMute&&(d.warn("JQMIGRATE: "+c),a.migrateTrace&&d.trace&&d.trace()))}function e(b,c,e,f){if(Object.defineProperty)try{return void Object.defineProperty(b,c,{configurable:!0,enumerable:!0,get:function(){return d(f),e},set:function(a){d(f),e=a}})}catch(g){}a._definePropertyBroken=!0,b[c]=e}a.migrateVersion="1.4.1";var f={};a.migrateWarnings=[],b.console&&b.console.log&&b.console.log("JQMIGRATE: Migrate is installed"+(a.migrateMute?"":" with logging active")+", version "+a.migrateVersion),a.migrateTrace===c&&(a.migrateTrace=!0),a.migrateReset=function(){f={},a.migrateWarnings.length=0},"BackCompat"===document.compatMode&&d("jQuery is not compatible with Quirks Mode");var g=a("<input/>",{size:1}).attr("size")&&a.attrFn,h=a.attr,i=a.attrHooks.value&&a.attrHooks.value.get||function(){return null},j=a.attrHooks.value&&a.attrHooks.value.set||function(){return c},k=/^(?:input|button)$/i,l=/^[238]$/,m=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,n=/^(?:checked|selected)$/i;e(a,"attrFn",g||{},"jQuery.attrFn is deprecated"),a.attr=function(b,e,f,i){var j=e.toLowerCase(),o=b&&b.nodeType;return i&&(h.length<4&&d("jQuery.fn.attr( props, pass ) is deprecated"),b&&!l.test(o)&&(g?e in g:a.isFunction(a.fn[e])))?a(b)[e](f):("type"===e&&f!==c&&k.test(b.nodeName)&&b.parentNode&&d("Can't change the 'type' of an input or button in IE 6/7/8"),!a.attrHooks[j]&&m.test(j)&&(a.attrHooks[j]={get:function(b,d){var e,f=a.prop(b,d);return f===!0||"boolean"!=typeof f&&(e=b.getAttributeNode(d))&&e.nodeValue!==!1?d.toLowerCase():c},set:function(b,c,d){var e;return c===!1?a.removeAttr(b,d):(e=a.propFix[d]||d,e in b&&(b[e]=!0),b.setAttribute(d,d.toLowerCase())),d}},n.test(j)&&d("jQuery.fn.attr('"+j+"') might use property instead of attribute")),h.call(a,b,e,f))},a.attrHooks.value={get:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?i.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value') no longer gets properties"),b in a?a.value:null)},set:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?j.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value', val) no longer sets properties"),void(a.value=b))}};var o,p,q=a.fn.init,r=a.find,s=a.parseJSON,t=/^\s*</,u=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,v=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,w=/^([^<]*)(<[\w\W]+>)([^>]*)$/;a.fn.init=function(b,e,f){var g,h;return b&&"string"==typeof b&&!a.isPlainObject(e)&&(g=w.exec(a.trim(b)))&&g[0]&&(t.test(b)||d("$(html) HTML strings must start with '<' character"),g[3]&&d("$(html) HTML text after last tag is ignored"),"#"===g[0].charAt(0)&&(d("HTML string cannot start with a '#' character"),a.error("JQMIGRATE: Invalid selector string (XSS)")),e&&e.context&&e.context.nodeType&&(e=e.context),a.parseHTML)?q.call(this,a.parseHTML(g[2],e&&e.ownerDocument||e||document,!0),e,f):(h=q.apply(this,arguments),b&&b.selector!==c?(h.selector=b.selector,h.context=b.context):(h.selector="string"==typeof b?b:"",b&&(h.context=b.nodeType?b:e||document)),h)},a.fn.init.prototype=a.fn,a.find=function(a){var b=Array.prototype.slice.call(arguments);if("string"==typeof a&&u.test(a))try{document.querySelector(a)}catch(c){a=a.replace(v,function(a,b,c,d){return"["+b+c+'"'+d+'"]'});try{document.querySelector(a),d("Attribute selector with '#' must be quoted: "+b[0]),b[0]=a}catch(e){d("Attribute selector with '#' was not fixed: "+b[0])}}return r.apply(this,b)};var x;for(x in r)Object.prototype.hasOwnProperty.call(r,x)&&(a.find[x]=r[x]);a.parseJSON=function(a){return a?s.apply(this,arguments):(d("jQuery.parseJSON requires a valid JSON string"),null)},a.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a.browser||(o=a.uaMatch(navigator.userAgent),p={},o.browser&&(p[o.browser]=!0,p.version=o.version),p.chrome?p.webkit=!0:p.webkit&&(p.safari=!0),a.browser=p),e(a,"browser",a.browser,"jQuery.browser is deprecated"),a.boxModel=a.support.boxModel="CSS1Compat"===document.compatMode,e(a,"boxModel",a.boxModel,"jQuery.boxModel is deprecated"),e(a.support,"boxModel",a.support.boxModel,"jQuery.support.boxModel is deprecated"),a.sub=function(){function b(a,c){return new b.fn.init(a,c)}a.extend(!0,b,this),b.superclass=this,b.fn=b.prototype=this(),b.fn.constructor=b,b.sub=this.sub,b.fn.init=function(d,e){var f=a.fn.init.call(this,d,e,c);return f instanceof b?f:b(f)},b.fn.init.prototype=b.fn;var c=b(document);return d("jQuery.sub() is deprecated"),b},a.fn.size=function(){return d("jQuery.fn.size() is deprecated; use the .length property"),this.length};var y=!1;a.swap&&a.each(["height","width","reliableMarginRight"],function(b,c){var d=a.cssHooks[c]&&a.cssHooks[c].get;d&&(a.cssHooks[c].get=function(){var a;return y=!0,a=d.apply(this,arguments),y=!1,a})}),a.swap=function(a,b,c,e){var f,g,h={};y||d("jQuery.swap() is undocumented and deprecated");for(g in b)h[g]=a.style[g],a.style[g]=b[g];f=c.apply(a,e||[]);for(g in b)a.style[g]=h[g];return f},a.ajaxSetup({converters:{"text json":a.parseJSON}});var z=a.fn.data;a.fn.data=function(b){var e,f,g=this[0];return!g||"events"!==b||1!==arguments.length||(e=a.data(g,b),f=a._data(g,b),e!==c&&e!==f||f===c)?z.apply(this,arguments):(d("Use of jQuery.fn.data('events') is deprecated"),f)};var A=/\/(java|ecma)script/i;a.clean||(a.clean=function(b,c,e,f){c=c||document,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,d("jQuery.clean() is deprecated");var g,h,i,j,k=[];if(a.merge(k,a.buildFragment(b,c).childNodes),e)for(i=function(a){return!a.type||A.test(a.type)?f?f.push(a.parentNode?a.parentNode.removeChild(a):a):e.appendChild(a):void 0},g=0;null!=(h=k[g]);g++)a.nodeName(h,"script")&&i(h)||(e.appendChild(h),"undefined"!=typeof h.getElementsByTagName&&(j=a.grep(a.merge([],h.getElementsByTagName("script")),i),k.splice.apply(k,[g+1,0].concat(j)),g+=j.length));return k});var B=a.event.add,C=a.event.remove,D=a.event.trigger,E=a.fn.toggle,F=a.fn.live,G=a.fn.die,H=a.fn.load,I="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",J=new RegExp("\\b(?:"+I+")\\b"),K=/(?:^|\s)hover(\.\S+|)\b/,L=function(b){return"string"!=typeof b||a.event.special.hover?b:(K.test(b)&&d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),b&&b.replace(K,"mouseenter$1 mouseleave$1"))};a.event.props&&"attrChange"!==a.event.props[0]&&a.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),a.event.dispatch&&e(a.event,"handle",a.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),a.event.add=function(a,b,c,e,f){a!==document&&J.test(b)&&d("AJAX events should be attached to document: "+b),B.call(this,a,L(b||""),c,e,f)},a.event.remove=function(a,b,c,d,e){C.call(this,a,L(b)||"",c,d,e)},a.each(["load","unload","error"],function(b,c){a.fn[c]=function(){var a=Array.prototype.slice.call(arguments,0);return"load"===c&&"string"==typeof a[0]?H.apply(this,a):(d("jQuery.fn."+c+"() is deprecated"),a.splice(0,0,c),arguments.length?this.bind.apply(this,a):(this.triggerHandler.apply(this,a),this))}}),a.fn.toggle=function(b,c){if(!a.isFunction(b)||!a.isFunction(c))return E.apply(this,arguments);d("jQuery.fn.toggle(handler, handler...) is deprecated");var e=arguments,f=b.guid||a.guid++,g=0,h=function(c){var d=(a._data(this,"lastToggle"+b.guid)||0)%g;return a._data(this,"lastToggle"+b.guid,d+1),c.preventDefault(),e[d].apply(this,arguments)||!1};for(h.guid=f;g<e.length;)e[g++].guid=f;return this.click(h)},a.fn.live=function(b,c,e){return d("jQuery.fn.live() is deprecated"),F?F.apply(this,arguments):(a(this.context).on(b,this.selector,c,e),this)},a.fn.die=function(b,c){return d("jQuery.fn.die() is deprecated"),G?G.apply(this,arguments):(a(this.context).off(b,this.selector||"**",c),this)},a.event.trigger=function(a,b,c,e){return c||J.test(a)||d("Global events are undocumented and deprecated"),D.call(this,a,b,c||document,e)},a.each(I.split("|"),function(b,c){a.event.special[c]={setup:function(){var b=this;return b!==document&&(a.event.add(document,c+"."+a.guid,function(){a.event.trigger(c,Array.prototype.slice.call(arguments,1),b,!0)}),a._data(this,c,a.guid++)),!1},teardown:function(){return this!==document&&a.event.remove(document,c+"."+a._data(this,c)),!1}}}),a.event.special.ready={setup:function(){this===document&&d("'ready' event is deprecated")}};var M=a.fn.andSelf||a.fn.addBack,N=a.fn.find;if(a.fn.andSelf=function(){return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),M.apply(this,arguments)},a.fn.find=function(a){var b=N.apply(this,arguments);return b.context=this.context,b.selector=this.selector?this.selector+" "+a:a,b},a.Callbacks){var O=a.Deferred,P=[["resolve","done",a.Callbacks("once memory"),a.Callbacks("once memory"),"resolved"],["reject","fail",a.Callbacks("once memory"),a.Callbacks("once memory"),"rejected"],["notify","progress",a.Callbacks("memory"),a.Callbacks("memory")]];a.Deferred=function(b){var c=O(),e=c.promise();return c.pipe=e.pipe=function(){var b=arguments;return d("deferred.pipe() is deprecated"),a.Deferred(function(d){a.each(P,function(f,g){var h=a.isFunction(b[f])&&b[f];c[g[1]](function(){var b=h&&h.apply(this,arguments);b&&a.isFunction(b.promise)?b.promise().done(d.resolve).fail(d.reject).progress(d.notify):d[g[0]+"With"](this===e?d.promise():this,h?[b]:arguments)})}),b=null}).promise()},c.isResolved=function(){return d("deferred.isResolved is deprecated"),"resolved"===c.state()},c.isRejected=function(){return d("deferred.isRejected is deprecated"),"rejected"===c.state()},b&&b.call(c,c),c}}}(jQuery,window);
jQuery(document).ready(function(){let imagesArray=[SSP_LOCAL_PHP.siteUrl+'/wp-content/uploads/sites/14/2016/10/Grayson-Erhard-Colorado-Guitarist-and-Singer-Songwriter-Hair.jpg',SSP_LOCAL_PHP.siteUrl+'/wp-content/uploads/sites/14/2018/05/Grayson-Erhard-12.jpg',SSP_LOCAL_PHP.siteUrl+'/wp-content/uploads/sites/14/2018/05/Grayson-Erhard-15.jpg'];let $randomImage=imagesArray[Math.floor(Math.random()*imagesArray.length)];$('.ssp_lyrics').css('background-image','url('+$randomImage+')');$('.single-product  .ssp_container').flexslider({selector:".ssp_video_wrap",slideshow:false,touch:true});});
!function($){var e=!0;$.flexslider=function(t,a){var n=$(t);n.vars=$.extend({},$.flexslider.defaults,a);var i=n.vars.namespace,r=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,s=("ontouchstart"in window||r||window.DocumentTouch&&document instanceof DocumentTouch)&&n.vars.touch,o="click touchend MSPointerUp keyup",l="",c,d="vertical"===n.vars.direction,u=n.vars.reverse,v=n.vars.itemWidth>0,p="fade"===n.vars.animation,m=""!==n.vars.asNavFor,f={};$.data(t,"flexslider",n),f={init:function(){n.animating=!1,n.currentSlide=parseInt(n.vars.startAt?n.vars.startAt:0,10),isNaN(n.currentSlide)&&(n.currentSlide=0),n.animatingTo=n.currentSlide,n.atEnd=0===n.currentSlide||n.currentSlide===n.last,n.containerSelector=n.vars.selector.substr(0,n.vars.selector.search(" ")),n.slides=$(n.vars.selector,n),n.container=$(n.containerSelector,n),n.count=n.slides.length,n.syncExists=$(n.vars.sync).length>0,"slide"===n.vars.animation&&(n.vars.animation="swing"),n.prop=d?"top":"marginLeft",n.args={},n.manualPause=!1,n.stopped=!1,n.started=!1,n.startTimeout=null,n.transitions=!n.vars.video&&!p&&n.vars.useCSS&&function(){var e=document.createElement("div"),t=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var a in t)if(void 0!==e.style[t[a]])return n.pfx=t[a].replace("Perspective","").toLowerCase(),n.prop="-"+n.pfx+"-transform",!0;return!1}(),n.ensureAnimationEnd="",""!==n.vars.controlsContainer&&(n.controlsContainer=$(n.vars.controlsContainer).length>0&&$(n.vars.controlsContainer)),""!==n.vars.manualControls&&(n.manualControls=$(n.vars.manualControls).length>0&&$(n.vars.manualControls)),""!==n.vars.customDirectionNav&&(n.customDirectionNav=2===$(n.vars.customDirectionNav).length&&$(n.vars.customDirectionNav)),n.vars.randomize&&(n.slides.sort(function(){return Math.round(Math.random())-.5}),n.container.empty().append(n.slides)),n.doMath(),n.setup("init"),n.vars.controlNav&&f.controlNav.setup(),n.vars.directionNav&&f.directionNav.setup(),n.vars.keyboard&&(1===$(n.containerSelector).length||n.vars.multipleKeyboard)&&$(document).bind("keyup",function(e){var t=e.keyCode;if(!n.animating&&(39===t||37===t)){var a=39===t?n.getTarget("next"):37===t&&n.getTarget("prev");n.flexAnimate(a,n.vars.pauseOnAction)}}),n.vars.mousewheel&&n.bind("mousewheel",function(e,t,a,i){e.preventDefault();var r=t<0?n.getTarget("next"):n.getTarget("prev");n.flexAnimate(r,n.vars.pauseOnAction)}),n.vars.pausePlay&&f.pausePlay.setup(),n.vars.slideshow&&n.vars.pauseInvisible&&f.pauseInvisible.init(),n.vars.slideshow&&(n.vars.pauseOnHover&&n.hover(function(){n.manualPlay||n.manualPause||n.pause()},function(){n.manualPause||n.manualPlay||n.stopped||n.play()}),n.vars.pauseInvisible&&f.pauseInvisible.isHidden()||(n.vars.initDelay>0?n.startTimeout=setTimeout(n.play,n.vars.initDelay):n.play())),m&&f.asNav.setup(),s&&n.vars.touch&&f.touch(),(!p||p&&n.vars.smoothHeight)&&$(window).bind("resize orientationchange focus",f.resize()),n.find("img").attr("draggable","false"),setTimeout(function(){n.vars.start(n)},200)},asNav:{setup:function(){n.asNav=!0,n.animatingTo=Math.floor(n.currentSlide/n.move),n.currentItem=n.currentSlide,n.slides.removeClass(i+"active-slide").eq(n.currentItem).addClass(i+"active-slide"),r?(t._slider=n,n.slides.each(function(){var e=this;e._gesture=new MSGesture,e._gesture.target=e,e.addEventListener("MSPointerDown",function(e){e.preventDefault(),e.currentTarget._gesture&&e.currentTarget._gesture.addPointer(e.pointerId)},!1),e.addEventListener("MSGestureTap",function(e){e.preventDefault();var t=$(this),a=t.index();$(n.vars.asNavFor).data("flexslider").animating||t.hasClass("active")||(n.direction=n.currentItem<a?"next":"prev",n.flexAnimate(a,n.vars.pauseOnAction,!1,!0,!0))})})):n.slides.on(o,function(e){e.preventDefault();var t=$(this),a=t.index();t.offset().left-$(n).scrollLeft()<=0&&t.hasClass(i+"active-slide")?n.flexAnimate(n.getTarget("prev"),!0):$(n.vars.asNavFor).data("flexslider").animating||t.hasClass(i+"active-slide")||(n.direction=n.currentItem<a?"next":"prev",n.flexAnimate(a,n.vars.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){n.manualControls?f.controlNav.setupManual():f.controlNav.setupPaging()},setupPaging:function(){var e="thumbnails"===n.vars.controlNav?"control-thumbs":"control-paging",t=1,a,r;if(n.controlNavScaffold=$('<ol class="'+i+"control-nav "+i+e+'"></ol>'),n.pagingCount>1)for(var s=0;s<n.pagingCount;s++){r=n.slides.eq(s),void 0===r.attr("data-thumb-alt")&&r.attr("data-thumb-alt","");var c=""!==r.attr("data-thumb-alt")?c=' alt="'+r.attr("data-thumb-alt")+'"':"";if(a="thumbnails"===n.vars.controlNav?'<img src="'+r.attr("data-thumb")+'"'+c+"/>":'<a href="#">'+t+"</a>","thumbnails"===n.vars.controlNav&&!0===n.vars.thumbCaptions){var d=r.attr("data-thumbcaption");""!==d&&void 0!==d&&(a+='<span class="'+i+'caption">'+d+"</span>")}n.controlNavScaffold.append("<li>"+a+"</li>"),t++}n.controlsContainer?$(n.controlsContainer).append(n.controlNavScaffold):n.append(n.controlNavScaffold),f.controlNav.set(),f.controlNav.active(),n.controlNavScaffold.delegate("a, img",o,function(e){if(e.preventDefault(),""===l||l===e.type){var t=$(this),a=n.controlNav.index(t);t.hasClass(i+"active")||(n.direction=a>n.currentSlide?"next":"prev",n.flexAnimate(a,n.vars.pauseOnAction))}""===l&&(l=e.type),f.setToClearWatchedEvent()})},setupManual:function(){n.controlNav=n.manualControls,f.controlNav.active(),n.controlNav.bind(o,function(e){if(e.preventDefault(),""===l||l===e.type){var t=$(this),a=n.controlNav.index(t);t.hasClass(i+"active")||(a>n.currentSlide?n.direction="next":n.direction="prev",n.flexAnimate(a,n.vars.pauseOnAction))}""===l&&(l=e.type),f.setToClearWatchedEvent()})},set:function(){var e="thumbnails"===n.vars.controlNav?"img":"a";n.controlNav=$("."+i+"control-nav li "+e,n.controlsContainer?n.controlsContainer:n)},active:function(){n.controlNav.removeClass(i+"active").eq(n.animatingTo).addClass(i+"active")},update:function(e,t){n.pagingCount>1&&"add"===e?n.controlNavScaffold.append($('<li><a href="#">'+n.count+"</a></li>")):1===n.pagingCount?n.controlNavScaffold.find("li").remove():n.controlNav.eq(t).closest("li").remove(),f.controlNav.set(),n.pagingCount>1&&n.pagingCount!==n.controlNav.length?n.update(t,e):f.controlNav.active()}},directionNav:{setup:function(){var e=$('<ul class="'+i+'direction-nav"><li class="'+i+'nav-prev"><a class="'+i+'prev" href="#">'+n.vars.prevText+'</a></li><li class="'+i+'nav-next"><a class="'+i+'next" href="#">'+n.vars.nextText+"</a></li></ul>");n.customDirectionNav?n.directionNav=n.customDirectionNav:n.controlsContainer?($(n.controlsContainer).append(e),n.directionNav=$("."+i+"direction-nav li a",n.controlsContainer)):(n.append(e),n.directionNav=$("."+i+"direction-nav li a",n)),f.directionNav.update(),n.directionNav.bind(o,function(e){e.preventDefault();var t;""!==l&&l!==e.type||(t=$(this).hasClass(i+"next")?n.getTarget("next"):n.getTarget("prev"),n.flexAnimate(t,n.vars.pauseOnAction)),""===l&&(l=e.type),f.setToClearWatchedEvent()})},update:function(){var e=i+"disabled";1===n.pagingCount?n.directionNav.addClass(e).attr("tabindex","-1"):n.vars.animationLoop?n.directionNav.removeClass(e).removeAttr("tabindex"):0===n.animatingTo?n.directionNav.removeClass(e).filter("."+i+"prev").addClass(e).attr("tabindex","-1"):n.animatingTo===n.last?n.directionNav.removeClass(e).filter("."+i+"next").addClass(e).attr("tabindex","-1"):n.directionNav.removeClass(e).removeAttr("tabindex")}},pausePlay:{setup:function(){var e=$('<div class="'+i+'pauseplay"><a href="#"></a></div>');n.controlsContainer?(n.controlsContainer.append(e),n.pausePlay=$("."+i+"pauseplay a",n.controlsContainer)):(n.append(e),n.pausePlay=$("."+i+"pauseplay a",n)),f.pausePlay.update(n.vars.slideshow?i+"pause":i+"play"),n.pausePlay.bind(o,function(e){e.preventDefault(),""!==l&&l!==e.type||($(this).hasClass(i+"pause")?(n.manualPause=!0,n.manualPlay=!1,n.pause()):(n.manualPause=!1,n.manualPlay=!0,n.play())),""===l&&(l=e.type),f.setToClearWatchedEvent()})},update:function(e){"play"===e?n.pausePlay.removeClass(i+"pause").addClass(i+"play").html(n.vars.playText):n.pausePlay.removeClass(i+"play").addClass(i+"pause").html(n.vars.pauseText)}},touch:function(){function e(e){e.stopPropagation(),n.animating?e.preventDefault():(n.pause(),t._gesture.addPointer(e.pointerId),T=0,c=d?n.h:n.w,f=Number(new Date),l=v&&u&&n.animatingTo===n.last?0:v&&u?n.limit-(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo:v&&n.currentSlide===n.last?n.limit:v?(n.itemW+n.vars.itemMargin)*n.move*n.currentSlide:u?(n.last-n.currentSlide+n.cloneOffset)*c:(n.currentSlide+n.cloneOffset)*c)}function a(e){e.stopPropagation();var a=e.target._slider;if(a){var n=-e.translationX,i=-e.translationY;if(T+=d?i:n,m=T,y=d?Math.abs(T)<Math.abs(-n):Math.abs(T)<Math.abs(-i),e.detail===e.MSGESTURE_FLAG_INERTIA)return void setImmediate(function(){t._gesture.stop()});(!y||Number(new Date)-f>500)&&(e.preventDefault(),!p&&a.transitions&&(a.vars.animationLoop||(m=T/(0===a.currentSlide&&T<0||a.currentSlide===a.last&&T>0?Math.abs(T)/c+2:1)),a.setProps(l+m,"setTouch")))}}function i(e){e.stopPropagation();var t=e.target._slider;if(t){if(t.animatingTo===t.currentSlide&&!y&&null!==m){var a=u?-m:m,n=a>0?t.getTarget("next"):t.getTarget("prev");t.canAdvance(n)&&(Number(new Date)-f<550&&Math.abs(a)>50||Math.abs(a)>c/2)?t.flexAnimate(n,t.vars.pauseOnAction):p||t.flexAnimate(t.currentSlide,t.vars.pauseOnAction,!0)}s=null,o=null,m=null,l=null,T=0}}var s,o,l,c,m,f,g,h,S,y=!1,x=0,b=0,T=0;r?(t.style.msTouchAction="none",t._gesture=new MSGesture,t._gesture.target=t,t.addEventListener("MSPointerDown",e,!1),t._slider=n,t.addEventListener("MSGestureChange",a,!1),t.addEventListener("MSGestureEnd",i,!1)):(g=function(e){n.animating?e.preventDefault():(window.navigator.msPointerEnabled||1===e.touches.length)&&(n.pause(),c=d?n.h:n.w,f=Number(new Date),x=e.touches[0].pageX,b=e.touches[0].pageY,l=v&&u&&n.animatingTo===n.last?0:v&&u?n.limit-(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo:v&&n.currentSlide===n.last?n.limit:v?(n.itemW+n.vars.itemMargin)*n.move*n.currentSlide:u?(n.last-n.currentSlide+n.cloneOffset)*c:(n.currentSlide+n.cloneOffset)*c,s=d?b:x,o=d?x:b,t.addEventListener("touchmove",h,!1),t.addEventListener("touchend",S,!1))},h=function(e){x=e.touches[0].pageX,b=e.touches[0].pageY,m=d?s-b:s-x,y=d?Math.abs(m)<Math.abs(x-o):Math.abs(m)<Math.abs(b-o);var t=500;(!y||Number(new Date)-f>500)&&(e.preventDefault(),!p&&n.transitions&&(n.vars.animationLoop||(m/=0===n.currentSlide&&m<0||n.currentSlide===n.last&&m>0?Math.abs(m)/c+2:1),n.setProps(l+m,"setTouch")))},S=function(e){if(t.removeEventListener("touchmove",h,!1),n.animatingTo===n.currentSlide&&!y&&null!==m){var a=u?-m:m,i=a>0?n.getTarget("next"):n.getTarget("prev");n.canAdvance(i)&&(Number(new Date)-f<550&&Math.abs(a)>50||Math.abs(a)>c/2)?n.flexAnimate(i,n.vars.pauseOnAction):p||n.flexAnimate(n.currentSlide,n.vars.pauseOnAction,!0)}t.removeEventListener("touchend",S,!1),s=null,o=null,m=null,l=null},t.addEventListener("touchstart",g,!1))},resize:function(){!n.animating&&n.is(":visible")&&(v||n.doMath(),p?f.smoothHeight():v?(n.slides.width(n.computedW),n.update(n.pagingCount),n.setProps()):d?(n.viewport.height(n.h),n.setProps(n.h,"setTotal")):(n.vars.smoothHeight&&f.smoothHeight(),n.newSlides.width(n.computedW),n.setProps(n.computedW,"setTotal")))},smoothHeight:function(e){if(!d||p){var t=p?n:n.viewport;e?t.animate({height:n.slides.eq(n.animatingTo).innerHeight()},e):t.innerHeight(n.slides.eq(n.animatingTo).innerHeight())}},sync:function(e){var t=$(n.vars.sync).data("flexslider"),a=n.animatingTo;switch(e){case"animate":t.flexAnimate(a,n.vars.pauseOnAction,!1,!0);break;case"play":t.playing||t.asNav||t.play();break;case"pause":t.pause();break}},uniqueID:function(e){return e.filter("[id]").add(e.find("[id]")).each(function(){var e=$(this);e.attr("id",e.attr("id")+"_clone")}),e},pauseInvisible:{visProp:null,init:function(){var e=f.pauseInvisible.getHiddenProp();if(e){var t=e.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(t,function(){f.pauseInvisible.isHidden()?n.startTimeout?clearTimeout(n.startTimeout):n.pause():n.started?n.play():n.vars.initDelay>0?setTimeout(n.play,n.vars.initDelay):n.play()})}},isHidden:function(){var e=f.pauseInvisible.getHiddenProp();return!!e&&document[e]},getHiddenProp:function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null}},setToClearWatchedEvent:function(){clearTimeout(c),c=setTimeout(function(){l=""},3e3)}},n.flexAnimate=function(e,t,a,r,o){if(n.vars.animationLoop||e===n.currentSlide||(n.direction=e>n.currentSlide?"next":"prev"),m&&1===n.pagingCount&&(n.direction=n.currentItem<e?"next":"prev"),!n.animating&&(n.canAdvance(e,o)||a)&&n.is(":visible")){if(m&&r){var l=$(n.vars.asNavFor).data("flexslider");if(n.atEnd=0===e||e===n.count-1,l.flexAnimate(e,!0,!1,!0,o),n.direction=n.currentItem<e?"next":"prev",l.direction=n.direction,Math.ceil((e+1)/n.visible)-1===n.currentSlide||0===e)return n.currentItem=e,n.slides.removeClass(i+"active-slide").eq(e).addClass(i+"active-slide"),!1;n.currentItem=e,n.slides.removeClass(i+"active-slide").eq(e).addClass(i+"active-slide"),e=Math.floor(e/n.visible)}if(n.animating=!0,n.animatingTo=e,t&&n.pause(),n.vars.before(n),n.syncExists&&!o&&f.sync("animate"),n.vars.controlNav&&f.controlNav.active(),v||n.slides.removeClass(i+"active-slide").eq(e).addClass(i+"active-slide"),n.atEnd=0===e||e===n.last,n.vars.directionNav&&f.directionNav.update(),e===n.last&&(n.vars.end(n),n.vars.animationLoop||n.pause()),p)s?(n.slides.eq(n.currentSlide).css({opacity:0,zIndex:1}),n.slides.eq(e).css({opacity:1,zIndex:2}),n.wrapup(c)):(n.slides.eq(n.currentSlide).css({zIndex:1}).animate({opacity:0},n.vars.animationSpeed,n.vars.easing),n.slides.eq(e).css({zIndex:2}).animate({opacity:1},n.vars.animationSpeed,n.vars.easing,n.wrapup));else{var c=d?n.slides.filter(":first").height():n.computedW,g,h,S;v?(g=n.vars.itemMargin,S=(n.itemW+g)*n.move*n.animatingTo,h=S>n.limit&&1!==n.visible?n.limit:S):h=0===n.currentSlide&&e===n.count-1&&n.vars.animationLoop&&"next"!==n.direction?u?(n.count+n.cloneOffset)*c:0:n.currentSlide===n.last&&0===e&&n.vars.animationLoop&&"prev"!==n.direction?u?0:(n.count+1)*c:u?(n.count-1-e+n.cloneOffset)*c:(e+n.cloneOffset)*c,n.setProps(h,"",n.vars.animationSpeed),n.transitions?(n.vars.animationLoop&&n.atEnd||(n.animating=!1,n.currentSlide=n.animatingTo),n.container.unbind("webkitTransitionEnd transitionend"),n.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(n.ensureAnimationEnd),n.wrapup(c)}),clearTimeout(n.ensureAnimationEnd),n.ensureAnimationEnd=setTimeout(function(){n.wrapup(c)},n.vars.animationSpeed+100)):n.container.animate(n.args,n.vars.animationSpeed,n.vars.easing,function(){n.wrapup(c)})}n.vars.smoothHeight&&f.smoothHeight(n.vars.animationSpeed)}},n.wrapup=function(e){p||v||(0===n.currentSlide&&n.animatingTo===n.last&&n.vars.animationLoop?n.setProps(e,"jumpEnd"):n.currentSlide===n.last&&0===n.animatingTo&&n.vars.animationLoop&&n.setProps(e,"jumpStart")),n.animating=!1,n.currentSlide=n.animatingTo,n.vars.after(n)},n.animateSlides=function(){!n.animating&&e&&n.flexAnimate(n.getTarget("next"))},n.pause=function(){clearInterval(n.animatedSlides),n.animatedSlides=null,n.playing=!1,n.vars.pausePlay&&f.pausePlay.update("play"),n.syncExists&&f.sync("pause")},n.play=function(){n.playing&&clearInterval(n.animatedSlides),n.animatedSlides=n.animatedSlides||setInterval(n.animateSlides,n.vars.slideshowSpeed),n.started=n.playing=!0,n.vars.pausePlay&&f.pausePlay.update("pause"),n.syncExists&&f.sync("play")},n.stop=function(){n.pause(),n.stopped=!0},n.canAdvance=function(e,t){var a=m?n.pagingCount-1:n.last;return!!t||(!(!m||n.currentItem!==n.count-1||0!==e||"prev"!==n.direction)||(!m||0!==n.currentItem||e!==n.pagingCount-1||"next"===n.direction)&&(!(e===n.currentSlide&&!m)&&(!!n.vars.animationLoop||(!n.atEnd||0!==n.currentSlide||e!==a||"next"===n.direction)&&(!n.atEnd||n.currentSlide!==a||0!==e||"next"!==n.direction))))},n.getTarget=function(e){return n.direction=e,"next"===e?n.currentSlide===n.last?0:n.currentSlide+1:0===n.currentSlide?n.last:n.currentSlide-1},n.setProps=function(e,t,a){var i=function(){var a=e||(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo;return-1*function(){if(v)return"setTouch"===t?e:u&&n.animatingTo===n.last?0:u?n.limit-(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo:n.animatingTo===n.last?n.limit:a;switch(t){case"setTotal":return u?(n.count-1-n.currentSlide+n.cloneOffset)*e:(n.currentSlide+n.cloneOffset)*e;case"setTouch":return e;case"jumpEnd":return u?e:n.count*e;case"jumpStart":return u?n.count*e:e;default:return e}}()+"px"}();n.transitions&&(i=d?"translate3d(0,"+i+",0)":"translate3d("+i+",0,0)",a=void 0!==a?a/1e3+"s":"0s",n.container.css("-"+n.pfx+"-transition-duration",a),n.container.css("transition-duration",a)),n.args[n.prop]=i,(n.transitions||void 0===a)&&n.container.css(n.args),n.container.css("transform",i)},n.setup=function(e){if(p)n.slides.css({width:"100%",float:"left",marginRight:"-100%",position:"relative"}),"init"===e&&(s?n.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+n.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(n.currentSlide).css({opacity:1,zIndex:2}):0==n.vars.fadeFirstSlide?n.slides.css({opacity:0,display:"block",zIndex:1}).eq(n.currentSlide).css({zIndex:2}).css({opacity:1}):n.slides.css({opacity:0,display:"block",zIndex:1}).eq(n.currentSlide).css({zIndex:2}).animate({opacity:1},n.vars.animationSpeed,n.vars.easing)),n.vars.smoothHeight&&f.smoothHeight();else{var t,a;"init"===e&&(n.viewport=$('<div class="'+i+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(n).append(n.container),n.cloneCount=0,n.cloneOffset=0,u&&(a=$.makeArray(n.slides).reverse(),n.slides=$(a),n.container.empty().append(n.slides))),n.vars.animationLoop&&!v&&(n.cloneCount=2,n.cloneOffset=1,"init"!==e&&n.container.find(".clone").remove(),n.container.append(f.uniqueID(n.slides.first().clone().addClass("clone")).attr("aria-hidden","true")).prepend(f.uniqueID(n.slides.last().clone().addClass("clone")).attr("aria-hidden","true"))),n.newSlides=$(n.vars.selector,n),t=u?n.count-1-n.currentSlide+n.cloneOffset:n.currentSlide+n.cloneOffset,d&&!v?(n.container.height(200*(n.count+n.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){n.newSlides.css({display:"block"}),n.doMath(),n.viewport.height(n.h),n.setProps(t*n.h,"init")},"init"===e?100:0)):(n.container.width(200*(n.count+n.cloneCount)+"%"),n.setProps(t*n.computedW,"init"),setTimeout(function(){n.doMath(),n.newSlides.css({width:n.computedW,marginRight:n.computedM,float:"left",display:"block"}),n.vars.smoothHeight&&f.smoothHeight()},"init"===e?100:0))}v||n.slides.removeClass(i+"active-slide").eq(n.currentSlide).addClass(i+"active-slide"),n.vars.init(n)},n.doMath=function(){var e=n.slides.first(),t=n.vars.itemMargin,a=n.vars.minItems,i=n.vars.maxItems;n.w=void 0===n.viewport?n.width():n.viewport.width(),n.h=e.height(),n.boxPadding=e.outerWidth()-e.width(),v?(n.itemT=n.vars.itemWidth+t,n.itemM=t,n.minW=a?a*n.itemT:n.w,n.maxW=i?i*n.itemT-t:n.w,n.itemW=n.minW>n.w?(n.w-t*(a-1))/a:n.maxW<n.w?(n.w-t*(i-1))/i:n.vars.itemWidth>n.w?n.w:n.vars.itemWidth,n.visible=Math.floor(n.w/n.itemW),n.move=n.vars.move>0&&n.vars.move<n.visible?n.vars.move:n.visible,n.pagingCount=Math.ceil((n.count-n.visible)/n.move+1),n.last=n.pagingCount-1,n.limit=1===n.pagingCount?0:n.vars.itemWidth>n.w?n.itemW*(n.count-1)+t*(n.count-1):(n.itemW+t)*n.count-n.w-t):(n.itemW=n.w,n.itemM=t,n.pagingCount=n.count,n.last=n.count-1),n.computedW=n.itemW-n.boxPadding,n.computedM=n.itemM},n.update=function(e,t){n.doMath(),v||(e<n.currentSlide?n.currentSlide+=1:e<=n.currentSlide&&0!==e&&(n.currentSlide-=1),n.animatingTo=n.currentSlide),n.vars.controlNav&&!n.manualControls&&("add"===t&&!v||n.pagingCount>n.controlNav.length?f.controlNav.update("add"):("remove"===t&&!v||n.pagingCount<n.controlNav.length)&&(v&&n.currentSlide>n.last&&(n.currentSlide-=1,n.animatingTo-=1),f.controlNav.update("remove",n.last))),n.vars.directionNav&&f.directionNav.update()},n.addSlide=function(e,t){var a=$(e);n.count+=1,n.last=n.count-1,d&&u?void 0!==t?n.slides.eq(n.count-t).after(a):n.container.prepend(a):void 0!==t?n.slides.eq(t).before(a):n.container.append(a),n.update(t,"add"),n.slides=$(n.vars.selector+":not(.clone)",n),n.setup(),n.vars.added(n)},n.removeSlide=function(e){var t=isNaN(e)?n.slides.index($(e)):e;n.count-=1,n.last=n.count-1,isNaN(e)?$(e,n.slides).remove():d&&u?n.slides.eq(n.last).remove():n.slides.eq(e).remove(),n.doMath(),n.update(t,"remove"),n.slides=$(n.vars.selector+":not(.clone)",n),n.setup(),n.vars.removed(n)},f.init()},$(window).blur(function(t){e=!1}).focus(function(t){e=!0}),$.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,fadeFirstSlide:!0,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",customDirectionNav:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}},$.fn.flexslider=function(e){if(void 0===e&&(e={}),"object"==typeof e)return this.each(function(){var t=$(this),a=e.selector?e.selector:".slides > li",n=t.find(a);1===n.length&&!1===e.allowOneSlide||0===n.length?(n.fadeIn(400),e.start&&e.start(t)):void 0===t.data("flexslider")&&new $.flexslider(this,e)});var t=$(this).data("flexslider");switch(e){case"play":t.play();break;case"pause":t.pause();break;case"stop":t.stop();break;case"next":t.flexAnimate(t.getTarget("next"),!0);break;case"prev":case"previous":t.flexAnimate(t.getTarget("prev"),!0);break;default:"number"==typeof e&&t.flexAnimate(e,!0)}}}(jQuery);
$=jQuery;$(document).ready(function(){$('.flexslider').flexslider({slideshow:false,touch:true,start:function(slider){current='bg'+slider.currentSlide;$('#home-page-1').addClass(current);},before:function(slider){animate='bg'+slider.animatingTo;$('#home-page-1').addClass(animate,250);current='bg'+slider.currentSlide;$('#home-page-1').removeClass(current);}});$('.video-slider').flexslider({selector:".youtube_channel > .ytc_video_container",slideshow:false});$('.ssp_lyrics_wrap').flexslider({selector:".lyrics",slideshow:false,touch:true});$('.single-product  .ssp_container').flexslider({selector:".ssp_video_wrap",slideshow:false,touch:true});$('.ge-slider-add-to-cart a').addClass('cta');$('.button.add_to_cart_button').addClass('cta');});

(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);
/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */
(function(a){function d(b){var c=b||window.event,d=[].slice.call(arguments,1),e=0,f=!0,g=0,h=0;return b=a.event.fix(c),b.type="mousewheel",c.wheelDelta&&(e=c.wheelDelta/120),c.detail&&(e=-c.detail/3),h=e,c.axis!==undefined&&c.axis===c.HORIZONTAL_AXIS&&(h=0,g=-1*e),c.wheelDeltaY!==undefined&&(h=c.wheelDeltaY/120),c.wheelDeltaX!==undefined&&(g=-1*c.wheelDeltaX/120),d.unshift(b,e,g,h),(a.event.dispatch||a.event.handle).apply(this,d)}var b=["DOMMouseScroll","mousewheel"];if(a.event.fixHooks)for(var c=b.length;c;)a.event.fixHooks[b[--c]]=a.event.mouseHooks;a.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=b.length;a;)this.addEventListener(b[--a],d,!1);else this.onmousewheel=d},teardown:function(){if(this.removeEventListener)for(var a=b.length;a;)this.removeEventListener(b[--a],d,!1);else this.onmousewheel=null}},a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery);

(function(g){function P(c){if(c&&void 0===c.allowPageScroll&&(void 0!==c.swipe||void 0!==c.swipeStatus))c.allowPageScroll=G;c||(c={});c=g.extend({},g.fn.swipe.defaults,c);return this.each(function(){var b=g(this),f=b.data(w);f||(f=new W(this,c),b.data(w,f))})}function W(c,b){var f,p,r,s;function H(a){var a=a.originalEvent,c,Q=n?a.touches[0]:a;d=R;n?h=a.touches.length:a.preventDefault();i=0;j=null;k=0;!n||h===b.fingers||b.fingers===x?(r=f=Q.pageX,s=p=Q.pageY,y=(new Date).getTime(),b.swipeStatus&&(c= l(a,d))):t(a);if(!1===c)return d=m,l(a,d),c;e.bind(I,J);e.bind(K,L)}function J(a){a=a.originalEvent;if(!(d===q||d===m)){var c,e=n?a.touches[0]:a;f=e.pageX;p=e.pageY;u=(new Date).getTime();j=S();n&&(h=a.touches.length);d=z;var e=a,g=j;if(b.allowPageScroll===G)e.preventDefault();else{var o=b.allowPageScroll===T;switch(g){case v:(b.swipeLeft&&o||!o&&b.allowPageScroll!=M)&&e.preventDefault();break;case A:(b.swipeRight&&o||!o&&b.allowPageScroll!=M)&&e.preventDefault();break;case B:(b.swipeUp&&o||!o&&b.allowPageScroll!= N)&&e.preventDefault();break;case C:(b.swipeDown&&o||!o&&b.allowPageScroll!=N)&&e.preventDefault()}}h===b.fingers||b.fingers===x||!n?(i=U(),k=u-y,b.swipeStatus&&(c=l(a,d,j,i,k)),b.triggerOnTouchEnd||(e=!(b.maxTimeThreshold?!(k>=b.maxTimeThreshold):1),!0===D()?(d=q,c=l(a,d)):e&&(d=m,l(a,d)))):(d=m,l(a,d));!1===c&&(d=m,l(a,d))}}function L(a){a=a.originalEvent;a.preventDefault();u=(new Date).getTime();i=U();j=S();k=u-y;if(b.triggerOnTouchEnd||!1===b.triggerOnTouchEnd&&d===z)if(d=q,(h===b.fingers||b.fingers=== x||!n)&&0!==f){var c=!(b.maxTimeThreshold?!(k>=b.maxTimeThreshold):1);if((!0===D()||null===D())&&!c)l(a,d);else if(c||!1===D())d=m,l(a,d)}else d=m,l(a,d);else d===z&&(d=m,l(a,d));e.unbind(I,J,!1);e.unbind(K,L,!1)}function t(){y=u=p=f=s=r=h=0}function l(a,c){var d=void 0;b.swipeStatus&&(d=b.swipeStatus.call(e,a,c,j||null,i||0,k||0,h));if(c===m&&b.click&&(1===h||!n)&&(isNaN(i)||0===i))d=b.click.call(e,a,a.target);if(c==q)switch(b.swipe&&(d=b.swipe.call(e,a,j,i,k,h)),j){case v:b.swipeLeft&&(d=b.swipeLeft.call(e, a,j,i,k,h));break;case A:b.swipeRight&&(d=b.swipeRight.call(e,a,j,i,k,h));break;case B:b.swipeUp&&(d=b.swipeUp.call(e,a,j,i,k,h));break;case C:b.swipeDown&&(d=b.swipeDown.call(e,a,j,i,k,h))}(c===m||c===q)&&t(a);return d}function D(){return null!==b.threshold?i>=b.threshold:null}function U(){return Math.round(Math.sqrt(Math.pow(f-r,2)+Math.pow(p-s,2)))}function S(){var a;a=Math.atan2(p-s,r-f);a=Math.round(180*a/Math.PI);0>a&&(a=360-Math.abs(a));return 45>=a&&0<=a?v:360>=a&&315<=a?v:135<=a&&225>=a? A:45<a&&135>a?C:B}function V(){e.unbind(E,H);e.unbind(F,t);e.unbind(I,J);e.unbind(K,L)}var O=n||!b.fallbackToMouseEvents,E=O?"touchstart":"mousedown",I=O?"touchmove":"mousemove",K=O?"touchend":"mouseup",F="touchcancel",i=0,j=null,k=0,e=g(c),d="start",h=0,y=p=f=s=r=0,u=0;try{e.bind(E,H),e.bind(F,t)}catch(P){g.error("events not supported "+E+","+F+" on jQuery.swipe")}this.enable=function(){e.bind(E,H);e.bind(F,t);return e};this.disable=function(){V();return e};this.destroy=function(){V();e.data(w,null); return e}}var v="left",A="right",B="up",C="down",G="none",T="auto",M="horizontal",N="vertical",x="all",R="start",z="move",q="end",m="cancel",n="ontouchstart"in window,w="TouchSwipe";g.fn.swipe=function(c){var b=g(this),f=b.data(w);if(f&&"string"===typeof c){if(f[c])return f[c].apply(this,Array.prototype.slice.call(arguments,1));g.error("Method "+c+" does not exist on jQuery.swipe")}else if(!f&&("object"===typeof c||!c))return P.apply(this,arguments);return b};g.fn.swipe.defaults={fingers:1,threshold:75, maxTimeThreshold:null,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,click:null,triggerOnTouchEnd:!0,allowPageScroll:"auto",fallbackToMouseEvents:!0};g.fn.swipe.phases={PHASE_START:R,PHASE_MOVE:z,PHASE_END:q,PHASE_CANCEL:m};g.fn.swipe.directions={LEFT:v,RIGHT:A,UP:B,DOWN:C};g.fn.swipe.pageScroll={NONE:G,HORIZONTAL:M,VERTICAL:N,AUTO:T};g.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:x}})(jQuery);
/*!
 * jQuery Transit - CSS3 transitions and transformations
 * (c) 2011-2012 Rico Sta. Cruz <rico@ricostacruz.com>
 * MIT Licensed.
 *
 * http://ricostacruz.com/jquery.transit
 * http://github.com/rstacruz/jquery.transit
 */
(function(d){function m(a){if(a in j.style)return a;var b=["Moz","Webkit","O","ms"],c=a.charAt(0).toUpperCase()+a.substr(1);if(a in j.style)return a;for(a=0;a<b.length;++a){var d=b[a]+c;if(d in j.style)return d}}function l(a){"string"===typeof a&&this.parse(a);return this}function q(a,b,c,e){var h=[];d.each(a,function(a){a=d.camelCase(a);a=d.transit.propertyMap[a]||d.cssProps[a]||a;a=a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()});-1===d.inArray(a,h)&&h.push(a)});d.cssEase[c]&&(c=d.cssEase[c]);
var f=""+n(b)+" "+c;0<parseInt(e,10)&&(f+=" "+n(e));var g=[];d.each(h,function(a,b){g.push(b+" "+f)});return g.join(", ")}function f(a,b){b||(d.cssNumber[a]=!0);d.transit.propertyMap[a]=e.transform;d.cssHooks[a]={get:function(b){return d(b).css("transit:transform").get(a)},set:function(b,e){var h=d(b).css("transit:transform");h.setFromString(a,e);d(b).css({"transit:transform":h})}}}function g(a,b){return"string"===typeof a&&!a.match(/^[\-0-9\.]+$/)?a:""+a+b}function n(a){d.fx.speeds[a]&&(a=d.fx.speeds[a]);
return g(a,"ms")}d.transit={version:"0.9.9",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:!0,useTransitionEnd:!1};var j=document.createElement("div"),e={},r=-1<navigator.userAgent.toLowerCase().indexOf("chrome");e.transition=m("transition");e.transitionDelay=m("transitionDelay");e.transform=m("transform");e.transformOrigin=m("transformOrigin");j.style[e.transform]=
"";j.style[e.transform]="rotateY(90deg)";e.transform3d=""!==j.style[e.transform];var p=e.transitionEnd={transition:"transitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"}[e.transition]||null,k;for(k in e)e.hasOwnProperty(k)&&"undefined"===typeof d.support[k]&&(d.support[k]=e[k]);j=null;d.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",
easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",
easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};d.cssHooks["transit:transform"]={get:function(a){return d(a).data("transform")||
new l},set:function(a,b){var c=b;c instanceof l||(c=new l(c));a.style[e.transform]="WebkitTransform"===e.transform&&!r?c.toString(!0):c.toString();d(a).data("transform",c)}};d.cssHooks.transform={set:d.cssHooks["transit:transform"].set};"1.8">d.fn.jquery&&(d.cssHooks.transformOrigin={get:function(a){return a.style[e.transformOrigin]},set:function(a,b){a.style[e.transformOrigin]=b}},d.cssHooks.transition={get:function(a){return a.style[e.transition]},set:function(a,b){a.style[e.transition]=b}});f("scale");
f("translate");f("rotate");f("rotateX");f("rotateY");f("rotate3d");f("perspective");f("skewX");f("skewY");f("x",!0);f("y",!0);l.prototype={setFromString:function(a,b){var c="string"===typeof b?b.split(","):b.constructor===Array?b:[b];c.unshift(a);l.prototype.set.apply(this,c)},set:function(a){var b=Array.prototype.slice.apply(arguments,[1]);this.setter[a]?this.setter[a].apply(this,b):this[a]=b.join(",")},get:function(a){return this.getter[a]?this.getter[a].apply(this):this[a]||0},setter:{rotate:function(a){this.rotate=
g(a,"deg")},rotateX:function(a){this.rotateX=g(a,"deg")},rotateY:function(a){this.rotateY=g(a,"deg")},scale:function(a,b){void 0===b&&(b=a);this.scale=a+","+b},skewX:function(a){this.skewX=g(a,"deg")},skewY:function(a){this.skewY=g(a,"deg")},perspective:function(a){this.perspective=g(a,"px")},x:function(a){this.set("translate",a,null)},y:function(a){this.set("translate",null,a)},translate:function(a,b){void 0===this._translateX&&(this._translateX=0);void 0===this._translateY&&(this._translateY=0);
null!==a&&void 0!==a&&(this._translateX=g(a,"px"));null!==b&&void 0!==b&&(this._translateY=g(b,"px"));this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var a=(this.scale||"1,1").split(",");a[0]&&(a[0]=parseFloat(a[0]));a[1]&&(a[1]=parseFloat(a[1]));return a[0]===a[1]?a[0]:a},rotate3d:function(){for(var a=(this.rotate3d||"0,0,0,0deg").split(","),b=0;3>=b;++b)a[b]&&(a[b]=parseFloat(a[b]));
a[3]&&(a[3]=g(a[3],"deg"));return a}},parse:function(a){var b=this;a.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(a,d,e){b.setFromString(d,e)})},toString:function(a){var b=[],c;for(c in this)if(this.hasOwnProperty(c)&&(e.transform3d||!("rotateX"===c||"rotateY"===c||"perspective"===c||"transformOrigin"===c)))"_"!==c[0]&&(a&&"scale"===c?b.push(c+"3d("+this[c]+",1)"):a&&"translate"===c?b.push(c+"3d("+this[c]+",0)"):b.push(c+"("+this[c]+")"));return b.join(" ")}};d.fn.transition=d.fn.transit=function(a,
b,c,f){var h=this,g=0,j=!0;"function"===typeof b&&(f=b,b=void 0);"function"===typeof c&&(f=c,c=void 0);"undefined"!==typeof a.easing&&(c=a.easing,delete a.easing);"undefined"!==typeof a.duration&&(b=a.duration,delete a.duration);"undefined"!==typeof a.complete&&(f=a.complete,delete a.complete);"undefined"!==typeof a.queue&&(j=a.queue,delete a.queue);"undefined"!==typeof a.delay&&(g=a.delay,delete a.delay);"undefined"===typeof b&&(b=d.fx.speeds._default);"undefined"===typeof c&&(c=d.cssEase._default);
b=n(b);var l=q(a,b,c,g),k=d.transit.enabled&&e.transition?parseInt(b,10)+parseInt(g,10):0;if(0===k)return b=j,c=function(b){h.css(a);f&&f.apply(h);b&&b()},!0===b?h.queue(c):b?h.queue(b,c):c(),h;var m={};b=j;c=function(b){this.offsetWidth;var c=!1,g=function(){c&&h.unbind(p,g);0<k&&h.each(function(){this.style[e.transition]=m[this]||null});"function"===typeof f&&f.apply(h);"function"===typeof b&&b()};0<k&&p&&d.transit.useTransitionEnd?(c=!0,h.bind(p,g)):window.setTimeout(g,k);h.each(function(){0<k&&
(this.style[e.transition]=l);d(this).css(a)})};!0===b?h.queue(c):b?h.queue(b,c):c();return this};d.transit.getTransitionValue=q})(jQuery);
(function($){if($.fn.carouFredSel)
{return;}
$.fn.caroufredsel=$.fn.carouFredSel=function(options,configs)
{if(this.length==0)
{debug(true,'No element found for "'+this.selector+'".');return this;}
if(this.length>1)
{return this.each(function(){$(this).carouFredSel(options,configs);});}
var $cfs=this,$tt0=this[0],starting_position=false;if($cfs.data('_cfs_isCarousel'))
{starting_position=$cfs.triggerHandler('_cfs_triggerEvent','currentPosition');$cfs.trigger('_cfs_triggerEvent',['destroy',true]);}
var FN={};FN._init=function(o,setOrig,start)
{o=go_getObject($tt0,o);o.items=go_getItemsObject($tt0,o.items);o.scroll=go_getScrollObject($tt0,o.scroll);o.auto=go_getAutoObject($tt0,o.auto);o.prev=go_getPrevNextObject($tt0,o.prev);o.next=go_getPrevNextObject($tt0,o.next);o.pagination=go_getPaginationObject($tt0,o.pagination);o.swipe=go_getSwipeObject($tt0,o.swipe);o.mousewheel=go_getMousewheelObject($tt0,o.mousewheel);if(setOrig)
{opts_orig=$.extend(true,{},$.fn.carouFredSel.defaults,o);}
opts=$.extend(true,{},$.fn.carouFredSel.defaults,o);opts.d=cf_getDimensions(opts);crsl.direction=(opts.direction=='up'||opts.direction=='left')?'next':'prev';var a_itm=$cfs.children(),avail_primary=ms_getParentSize($wrp,opts,'width');if(is_true(opts.cookie))
{opts.cookie='caroufredsel_cookie_'+conf.serialNumber;}
opts.maxDimension=ms_getMaxDimension(opts,avail_primary);opts.items=in_complementItems(opts.items,opts,a_itm,start);opts[opts.d['width']]=in_complementPrimarySize(opts[opts.d['width']],opts,a_itm);opts[opts.d['height']]=in_complementSecondarySize(opts[opts.d['height']],opts,a_itm);if(opts.responsive)
{if(!is_percentage(opts[opts.d['width']]))
{opts[opts.d['width']]='100%';}}
if(is_percentage(opts[opts.d['width']]))
{crsl.upDateOnWindowResize=true;crsl.primarySizePercentage=opts[opts.d['width']];opts[opts.d['width']]=ms_getPercentage(avail_primary,crsl.primarySizePercentage);if(!opts.items.visible)
{opts.items.visibleConf.variable=true;}}
if(opts.responsive)
{opts.usePadding=false;opts.padding=[0,0,0,0];opts.align=false;opts.items.visibleConf.variable=false;}
else
{if(!opts.items.visible)
{opts=in_complementVisibleItems(opts,avail_primary);}
if(!opts[opts.d['width']])
{if(!opts.items.visibleConf.variable&&is_number(opts.items[opts.d['width']])&&opts.items.filter=='*')
{opts[opts.d['width']]=opts.items.visible*opts.items[opts.d['width']];opts.align=false;}
else
{opts[opts.d['width']]='variable';}}
if(is_undefined(opts.align))
{opts.align=(is_number(opts[opts.d['width']]))?'center':false;}
if(opts.items.visibleConf.variable)
{opts.items.visible=gn_getVisibleItemsNext(a_itm,opts,0);}}
if(opts.items.filter!='*'&&!opts.items.visibleConf.variable)
{opts.items.visibleConf.org=opts.items.visible;opts.items.visible=gn_getVisibleItemsNextFilter(a_itm,opts,0);}
opts.items.visible=cf_getItemsAdjust(opts.items.visible,opts,opts.items.visibleConf.adjust,$tt0);opts.items.visibleConf.old=opts.items.visible;if(opts.responsive)
{if(!opts.items.visibleConf.min)
{opts.items.visibleConf.min=opts.items.visible;}
if(!opts.items.visibleConf.max)
{opts.items.visibleConf.max=opts.items.visible;}
opts=in_getResponsiveValues(opts,a_itm,avail_primary);}
else
{opts.padding=cf_getPadding(opts.padding);if(opts.align=='top')
{opts.align='left';}
else if(opts.align=='bottom')
{opts.align='right';}
switch(opts.align)
{case'center':case'left':case'right':if(opts[opts.d['width']]!='variable')
{opts=in_getAlignPadding(opts,a_itm);opts.usePadding=true;}
break;default:opts.align=false;opts.usePadding=(opts.padding[0]==0&&opts.padding[1]==0&&opts.padding[2]==0&&opts.padding[3]==0)?false:true;break;}}
if(!is_number(opts.scroll.duration))
{opts.scroll.duration=500;}
if(is_undefined(opts.scroll.items))
{opts.scroll.items=(opts.responsive||opts.items.visibleConf.variable||opts.items.filter!='*')?'visible':opts.items.visible;}
opts.auto=$.extend(true,{},opts.scroll,opts.auto);opts.prev=$.extend(true,{},opts.scroll,opts.prev);opts.next=$.extend(true,{},opts.scroll,opts.next);opts.pagination=$.extend(true,{},opts.scroll,opts.pagination);opts.auto=go_complementAutoObject($tt0,opts.auto);opts.prev=go_complementPrevNextObject($tt0,opts.prev);opts.next=go_complementPrevNextObject($tt0,opts.next);opts.pagination=go_complementPaginationObject($tt0,opts.pagination);opts.swipe=go_complementSwipeObject($tt0,opts.swipe);opts.mousewheel=go_complementMousewheelObject($tt0,opts.mousewheel);if(opts.synchronise)
{opts.synchronise=cf_getSynchArr(opts.synchronise);}
if(opts.auto.onPauseStart)
{opts.auto.onTimeoutStart=opts.auto.onPauseStart;deprecated('auto.onPauseStart','auto.onTimeoutStart');}
if(opts.auto.onPausePause)
{opts.auto.onTimeoutPause=opts.auto.onPausePause;deprecated('auto.onPausePause','auto.onTimeoutPause');}
if(opts.auto.onPauseEnd)
{opts.auto.onTimeoutEnd=opts.auto.onPauseEnd;deprecated('auto.onPauseEnd','auto.onTimeoutEnd');}
if(opts.auto.pauseDuration)
{opts.auto.timeoutDuration=opts.auto.pauseDuration;deprecated('auto.pauseDuration','auto.timeoutDuration');}};FN._build=function(){$cfs.data('_cfs_isCarousel',true);var a_itm=$cfs.children(),orgCSS=in_mapCss($cfs,['textAlign','float','position','top','right','bottom','left','zIndex','width','height','marginTop','marginRight','marginBottom','marginLeft']),newPosition='relative';switch(orgCSS.position)
{case'absolute':case'fixed':newPosition=orgCSS.position;break;}
if(conf.wrapper=='parent')
{sz_storeOrigCss($wrp);}
else
{$wrp.css(orgCSS);}
$wrp.css({'overflow':'hidden','position':newPosition});sz_storeOrigCss($cfs);$cfs.data('_cfs_origCssZindex',orgCSS.zIndex);$cfs.css({'textAlign':'left','float':'none','position':'absolute','top':0,'right':'auto','bottom':'auto','left':0,'marginTop':0,'marginRight':0,'marginBottom':0,'marginLeft':0});sz_storeMargin(a_itm,opts);sz_storeOrigCss(a_itm);if(opts.responsive)
{sz_setResponsiveSizes(opts,a_itm);}};FN._bind_events=function(){FN._unbind_events();$cfs.bind(cf_e('stop',conf),function(e,imm){e.stopPropagation();if(!crsl.isStopped)
{if(opts.auto.button)
{opts.auto.button.addClass(cf_c('stopped',conf));}}
crsl.isStopped=true;if(opts.auto.play)
{opts.auto.play=false;$cfs.trigger(cf_e('pause',conf),imm);}
return true;});$cfs.bind(cf_e('finish',conf),function(e){e.stopPropagation();if(crsl.isScrolling)
{sc_stopScroll(scrl);}
return true;});$cfs.bind(cf_e('pause',conf),function(e,imm,res){e.stopPropagation();tmrs=sc_clearTimers(tmrs);if(imm&&crsl.isScrolling)
{scrl.isStopped=true;var nst=getTime()-scrl.startTime;scrl.duration-=nst;if(scrl.pre)
{scrl.pre.duration-=nst;}
if(scrl.post)
{scrl.post.duration-=nst;}
sc_stopScroll(scrl,false);}
if(!crsl.isPaused&&!crsl.isScrolling)
{if(res)
{tmrs.timePassed+=getTime()-tmrs.startTime;}}
if(!crsl.isPaused)
{if(opts.auto.button)
{opts.auto.button.addClass(cf_c('paused',conf));}}
crsl.isPaused=true;if(opts.auto.onTimeoutPause)
{var dur1=opts.auto.timeoutDuration-tmrs.timePassed,perc=100-Math.ceil(dur1*100/opts.auto.timeoutDuration);opts.auto.onTimeoutPause.call($tt0,perc,dur1);}
return true;});$cfs.bind(cf_e('play',conf),function(e,dir,del,res){e.stopPropagation();tmrs=sc_clearTimers(tmrs);var v=[dir,del,res],t=['string','number','boolean'],a=cf_sortParams(v,t);dir=a[0];del=a[1];res=a[2];if(dir!='prev'&&dir!='next')
{dir=crsl.direction;}
if(!is_number(del))
{del=0;}
if(!is_boolean(res))
{res=false;}
if(res)
{crsl.isStopped=false;opts.auto.play=true;}
if(!opts.auto.play)
{e.stopImmediatePropagation();return debug(conf,'Carousel stopped: Not scrolling.');}
if(crsl.isPaused)
{if(opts.auto.button)
{opts.auto.button.removeClass(cf_c('stopped',conf));opts.auto.button.removeClass(cf_c('paused',conf));}}
crsl.isPaused=false;tmrs.startTime=getTime();var dur1=opts.auto.timeoutDuration+del;dur2=dur1-tmrs.timePassed;perc=100-Math.ceil(dur2*100/dur1);if(opts.auto.progress)
{tmrs.progress=setInterval(function(){var pasd=getTime()-tmrs.startTime+tmrs.timePassed,perc=Math.ceil(pasd*100/dur1);opts.auto.progress.updater.call(opts.auto.progress.bar[0],perc);},opts.auto.progress.interval);}
tmrs.auto=setTimeout(function(){if(opts.auto.progress)
{opts.auto.progress.updater.call(opts.auto.progress.bar[0],100);}
if(opts.auto.onTimeoutEnd)
{opts.auto.onTimeoutEnd.call($tt0,perc,dur2);}
if(crsl.isScrolling)
{$cfs.trigger(cf_e('play',conf),dir);}
else
{$cfs.trigger(cf_e(dir,conf),opts.auto);}},dur2);if(opts.auto.onTimeoutStart)
{opts.auto.onTimeoutStart.call($tt0,perc,dur2);}
return true;});$cfs.bind(cf_e('resume',conf),function(e){e.stopPropagation();if(scrl.isStopped)
{scrl.isStopped=false;crsl.isPaused=false;crsl.isScrolling=true;scrl.startTime=getTime();sc_startScroll(scrl,conf);}
else
{$cfs.trigger(cf_e('play',conf));}
return true;});$cfs.bind(cf_e('prev',conf)+' '+cf_e('next',conf),function(e,obj,num,clb,que){e.stopPropagation();if(crsl.isStopped||$cfs.is(':hidden'))
{e.stopImmediatePropagation();return debug(conf,'Carousel stopped or hidden: Not scrolling.');}
var minimum=(is_number(opts.items.minimum))?opts.items.minimum:opts.items.visible+1;if(minimum>itms.total)
{e.stopImmediatePropagation();return debug(conf,'Not enough items ('+itms.total+' total, '+minimum+' needed): Not scrolling.');}
var v=[obj,num,clb,que],t=['object','number/string','function','boolean'],a=cf_sortParams(v,t);obj=a[0];num=a[1];clb=a[2];que=a[3];var eType=e.type.slice(conf.events.prefix.length);if(!is_object(obj))
{obj={};}
if(is_function(clb))
{obj.onAfter=clb;}
if(is_boolean(que))
{obj.queue=que;}
obj=$.extend(true,{},opts[eType],obj);if(obj.conditions&&!obj.conditions.call($tt0,eType))
{e.stopImmediatePropagation();return debug(conf,'Callback "conditions" returned false.');}
if(!is_number(num))
{if(opts.items.filter!='*')
{num='visible';}
else
{var arr=[num,obj.items,opts[eType].items];for(var a=0,l=arr.length;a<l;a++)
{if(is_number(arr[a])||arr[a]=='page'||arr[a]=='visible'){num=arr[a];break;}}}
switch(num){case'page':e.stopImmediatePropagation();return $cfs.triggerHandler(cf_e(eType+'Page',conf),[obj,clb]);break;case'visible':if(!opts.items.visibleConf.variable&&opts.items.filter=='*')
{num=opts.items.visible;}
break;}}
if(scrl.isStopped)
{$cfs.trigger(cf_e('resume',conf));$cfs.trigger(cf_e('queue',conf),[eType,[obj,num,clb]]);e.stopImmediatePropagation();return debug(conf,'Carousel resumed scrolling.');}
if(obj.duration>0)
{if(crsl.isScrolling)
{if(obj.queue)
{if(obj.queue=='last')
{queu=[];}
if(obj.queue!='first'||queu.length==0)
{$cfs.trigger(cf_e('queue',conf),[eType,[obj,num,clb]]);}}
e.stopImmediatePropagation();return debug(conf,'Carousel currently scrolling.');}}
tmrs.timePassed=0;$cfs.trigger(cf_e('slide_'+eType,conf),[obj,num]);if(opts.synchronise)
{var s=opts.synchronise,c=[obj,num];for(var j=0,l=s.length;j<l;j++){var d=eType;if(!s[j][2])
{d=(d=='prev')?'next':'prev';}
if(!s[j][1])
{c[0]=s[j][0].triggerHandler('_cfs_triggerEvent',['configuration',d]);}
c[1]=num+s[j][3];s[j][0].trigger('_cfs_triggerEvent',['slide_'+d,c]);}}
return true;});$cfs.bind(cf_e('slide_prev',conf),function(e,sO,nI){e.stopPropagation();var a_itm=$cfs.children();if(!opts.circular)
{if(itms.first==0)
{if(opts.infinite)
{$cfs.trigger(cf_e('next',conf),itms.total-1);}
return e.stopImmediatePropagation();}}
sz_resetMargin(a_itm,opts);if(!is_number(nI))
{if(opts.items.visibleConf.variable)
{nI=gn_getVisibleItemsPrev(a_itm,opts,itms.total-1);}
else if(opts.items.filter!='*')
{var xI=(is_number(sO.items))?sO.items:gn_getVisibleOrg($cfs,opts);nI=gn_getScrollItemsPrevFilter(a_itm,opts,itms.total-1,xI);}
else
{nI=opts.items.visible;}
nI=cf_getAdjust(nI,opts,sO.items,$tt0);}
if(!opts.circular)
{if(itms.total-nI<itms.first)
{nI=itms.total-itms.first;}}
opts.items.visibleConf.old=opts.items.visible;if(opts.items.visibleConf.variable)
{var vI=cf_getItemsAdjust(gn_getVisibleItemsNext(a_itm,opts,itms.total-nI),opts,opts.items.visibleConf.adjust,$tt0);if(opts.items.visible+nI<=vI&&nI<itms.total)
{nI++;vI=cf_getItemsAdjust(gn_getVisibleItemsNext(a_itm,opts,itms.total-nI),opts,opts.items.visibleConf.adjust,$tt0);}
opts.items.visible=vI;}
else if(opts.items.filter!='*')
{var vI=gn_getVisibleItemsNextFilter(a_itm,opts,itms.total-nI);opts.items.visible=cf_getItemsAdjust(vI,opts,opts.items.visibleConf.adjust,$tt0);}
sz_resetMargin(a_itm,opts,true);if(nI==0)
{e.stopImmediatePropagation();return debug(conf,'0 items to scroll: Not scrolling.');}
debug(conf,'Scrolling '+nI+' items backward.');itms.first+=nI;while(itms.first>=itms.total)
{itms.first-=itms.total;}
if(!opts.circular)
{if(itms.first==0&&sO.onEnd)
{sO.onEnd.call($tt0,'prev');}
if(!opts.infinite)
{nv_enableNavi(opts,itms.first,conf);}}
$cfs.children().slice(itms.total-nI,itms.total).prependTo($cfs);if(itms.total<opts.items.visible+nI)
{$cfs.children().slice(0,(opts.items.visible+nI)-itms.total).clone(true).appendTo($cfs);}
var a_itm=$cfs.children(),i_old=gi_getOldItemsPrev(a_itm,opts,nI),i_new=gi_getNewItemsPrev(a_itm,opts),i_cur_l=a_itm.eq(nI-1),i_old_l=i_old.last(),i_new_l=i_new.last();sz_resetMargin(a_itm,opts);var pL=0,pR=0;if(opts.align)
{var p=cf_getAlignPadding(i_new,opts);pL=p[0];pR=p[1];}
var oL=(pL<0)?opts.padding[opts.d[3]]:0;var hiddenitems=false,i_skp=$();if(opts.items.visible<nI)
{i_skp=a_itm.slice(opts.items.visibleConf.old,nI);if(sO.fx=='directscroll')
{var orgW=opts.items[opts.d['width']];hiddenitems=i_skp;i_cur_l=i_new_l;sc_hideHiddenItems(hiddenitems);opts.items[opts.d['width']]='variable';}}
var $cf2=false,i_siz=ms_getTotalSize(a_itm.slice(0,nI),opts,'width'),w_siz=cf_mapWrapperSizes(ms_getSizes(i_new,opts,true),opts,!opts.usePadding),i_siz_vis=0,a_cfs={},a_wsz={},a_cur={},a_old={},a_new={},a_lef={},a_lef_vis={},a_dur=sc_getDuration(sO,opts,nI,i_siz);switch(sO.fx)
{case'cover':case'cover-fade':i_siz_vis=ms_getTotalSize(a_itm.slice(0,opts.items.visible),opts,'width');break;}
if(hiddenitems)
{opts.items[opts.d['width']]=orgW;}
sz_resetMargin(a_itm,opts,true);if(pR>=0)
{sz_resetMargin(i_old_l,opts,opts.padding[opts.d[1]]);}
if(pL>=0)
{sz_resetMargin(i_cur_l,opts,opts.padding[opts.d[3]]);}
if(opts.align)
{opts.padding[opts.d[1]]=pR;opts.padding[opts.d[3]]=pL;}
a_lef[opts.d['left']]=-(i_siz-oL);a_lef_vis[opts.d['left']]=-(i_siz_vis-oL);a_wsz[opts.d['left']]=w_siz[opts.d['width']];var _s_wrapper=function(){},_a_wrapper=function(){},_s_paddingold=function(){},_a_paddingold=function(){},_s_paddingnew=function(){},_a_paddingnew=function(){},_s_paddingcur=function(){},_a_paddingcur=function(){},_onafter=function(){},_moveitems=function(){},_position=function(){};switch(sO.fx)
{case'crossfade':case'cover':case'cover-fade':case'uncover':case'uncover-fade':$cf2=$cfs.clone(true).appendTo($wrp);break;}
switch(sO.fx)
{case'crossfade':case'uncover':case'uncover-fade':$cf2.children().slice(0,nI).remove();$cf2.children().slice(opts.items.visibleConf.old).remove();break;case'cover':case'cover-fade':$cf2.children().slice(opts.items.visible).remove();$cf2.css(a_lef_vis);break;}
$cfs.css(a_lef);scrl=sc_setScroll(a_dur,sO.easing,conf);a_cfs[opts.d['left']]=(opts.usePadding)?opts.padding[opts.d[3]]:0;if(opts[opts.d['width']]=='variable'||opts[opts.d['height']]=='variable')
{_s_wrapper=function(){$wrp.css(w_siz);};_a_wrapper=function(){scrl.anims.push([$wrp,w_siz]);};}
if(opts.usePadding)
{if(i_new_l.not(i_cur_l).length)
{a_cur[opts.d['marginRight']]=i_cur_l.data('_cfs_origCssMargin');if(pL<0)
{i_cur_l.css(a_cur);}
else
{_s_paddingcur=function(){i_cur_l.css(a_cur);};_a_paddingcur=function(){scrl.anims.push([i_cur_l,a_cur]);};}}
switch(sO.fx)
{case'cover':case'cover-fade':$cf2.children().eq(nI-1).css(a_cur);break;}
if(i_new_l.not(i_old_l).length)
{a_old[opts.d['marginRight']]=i_old_l.data('_cfs_origCssMargin');_s_paddingold=function(){i_old_l.css(a_old);};_a_paddingold=function(){scrl.anims.push([i_old_l,a_old]);};}
if(pR>=0)
{a_new[opts.d['marginRight']]=i_new_l.data('_cfs_origCssMargin')+opts.padding[opts.d[1]];_s_paddingnew=function(){i_new_l.css(a_new);};_a_paddingnew=function(){scrl.anims.push([i_new_l,a_new]);};}}
_position=function(){$cfs.css(a_cfs);};var overFill=opts.items.visible+nI-itms.total;_moveitems=function(){if(overFill>0)
{$cfs.children().slice(itms.total).remove();i_old=$($cfs.children().slice(itms.total-(opts.items.visible-overFill)).get().concat($cfs.children().slice(0,overFill).get()));}
sc_showHiddenItems(hiddenitems);if(opts.usePadding)
{var l_itm=$cfs.children().eq(opts.items.visible+nI-1);l_itm.css(opts.d['marginRight'],l_itm.data('_cfs_origCssMargin'));}};var cb_arguments=sc_mapCallbackArguments(i_old,i_skp,i_new,nI,'prev',a_dur,w_siz);_onafter=function(){sc_afterScroll($cfs,$cf2,sO);crsl.isScrolling=false;clbk.onAfter=sc_fireCallbacks($tt0,sO,'onAfter',cb_arguments,clbk);queu=sc_fireQueue($cfs,queu,conf);if(!crsl.isPaused)
{$cfs.trigger(cf_e('play',conf));}};crsl.isScrolling=true;tmrs=sc_clearTimers(tmrs);clbk.onBefore=sc_fireCallbacks($tt0,sO,'onBefore',cb_arguments,clbk);switch(sO.fx)
{case'none':$cfs.css(a_cfs);_s_wrapper();_s_paddingold();_s_paddingnew();_s_paddingcur();_position();_moveitems();_onafter();break;case'fade':scrl.anims.push([$cfs,{'opacity':0},function(){_s_wrapper();_s_paddingold();_s_paddingnew();_s_paddingcur();_position();_moveitems();scrl=sc_setScroll(a_dur,sO.easing,conf);scrl.anims.push([$cfs,{'opacity':1},_onafter]);sc_startScroll(scrl,conf);}]);break;case'crossfade':$cfs.css({'opacity':0});scrl.anims.push([$cf2,{'opacity':0}]);scrl.anims.push([$cfs,{'opacity':1},_onafter]);_a_wrapper();_s_paddingold();_s_paddingnew();_s_paddingcur();_position();_moveitems();break;case'cover':scrl.anims.push([$cf2,a_cfs,function(){_s_paddingold();_s_paddingnew();_s_paddingcur();_position();_moveitems();_onafter();}]);_a_wrapper();break;case'cover-fade':scrl.anims.push([$cfs,{'opacity':0}]);scrl.anims.push([$cf2,a_cfs,function(){_s_paddingold();_s_paddingnew();_s_paddingcur();_position();_moveitems();_onafter();}]);_a_wrapper();break;case'uncover':scrl.anims.push([$cf2,a_wsz,_onafter]);_a_wrapper();_s_paddingold();_s_paddingnew();_s_paddingcur();_position();_moveitems();break;case'uncover-fade':$cfs.css({'opacity':0});scrl.anims.push([$cfs,{'opacity':1}]);scrl.anims.push([$cf2,a_wsz,_onafter]);_a_wrapper();_s_paddingold();_s_paddingnew();_s_paddingcur();_position();_moveitems();break;default:scrl.anims.push([$cfs,a_cfs,function(){_moveitems();_onafter();}]);_a_wrapper();_a_paddingold();_a_paddingnew();_a_paddingcur();break;}
sc_startScroll(scrl,conf);cf_setCookie(opts.cookie,$cfs,conf);$cfs.trigger(cf_e('updatePageStatus',conf),[false,w_siz]);return true;});$cfs.bind(cf_e('slide_next',conf),function(e,sO,nI){e.stopPropagation();var a_itm=$cfs.children();if(!opts.circular)
{if(itms.first==opts.items.visible)
{if(opts.infinite)
{$cfs.trigger(cf_e('prev',conf),itms.total-1);}
return e.stopImmediatePropagation();}}
sz_resetMargin(a_itm,opts);if(!is_number(nI))
{if(opts.items.filter!='*')
{var xI=(is_number(sO.items))?sO.items:gn_getVisibleOrg($cfs,opts);nI=gn_getScrollItemsNextFilter(a_itm,opts,0,xI);}
else
{nI=opts.items.visible;}
nI=cf_getAdjust(nI,opts,sO.items,$tt0);}
var lastItemNr=(itms.first==0)?itms.total:itms.first;if(!opts.circular)
{if(opts.items.visibleConf.variable)
{var vI=gn_getVisibleItemsNext(a_itm,opts,nI),xI=gn_getVisibleItemsPrev(a_itm,opts,lastItemNr-1);}
else
{var vI=opts.items.visible,xI=opts.items.visible;}
if(nI+vI>lastItemNr)
{nI=lastItemNr-xI;}}
opts.items.visibleConf.old=opts.items.visible;if(opts.items.visibleConf.variable)
{var vI=cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(a_itm,opts,nI,lastItemNr),opts,opts.items.visibleConf.adjust,$tt0);while(opts.items.visible-nI>=vI&&nI<itms.total)
{nI++;vI=cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(a_itm,opts,nI,lastItemNr),opts,opts.items.visibleConf.adjust,$tt0);}
opts.items.visible=vI;}
else if(opts.items.filter!='*')
{var vI=gn_getVisibleItemsNextFilter(a_itm,opts,nI);opts.items.visible=cf_getItemsAdjust(vI,opts,opts.items.visibleConf.adjust,$tt0);}
sz_resetMargin(a_itm,opts,true);if(nI==0)
{e.stopImmediatePropagation();return debug(conf,'0 items to scroll: Not scrolling.');}
debug(conf,'Scrolling '+nI+' items forward.');itms.first-=nI;while(itms.first<0)
{itms.first+=itms.total;}
if(!opts.circular)
{if(itms.first==opts.items.visible&&sO.onEnd)
{sO.onEnd.call($tt0,'next');}
if(!opts.infinite)
{nv_enableNavi(opts,itms.first,conf);}}
if(itms.total<opts.items.visible+nI)
{$cfs.children().slice(0,(opts.items.visible+nI)-itms.total).clone(true).appendTo($cfs);}
var a_itm=$cfs.children(),i_old=gi_getOldItemsNext(a_itm,opts),i_new=gi_getNewItemsNext(a_itm,opts,nI),i_cur_l=a_itm.eq(nI-1),i_old_l=i_old.last(),i_new_l=i_new.last();sz_resetMargin(a_itm,opts);var pL=0,pR=0;if(opts.align)
{var p=cf_getAlignPadding(i_new,opts);pL=p[0];pR=p[1];}
var hiddenitems=false,i_skp=$();if(opts.items.visibleConf.old<nI)
{i_skp=a_itm.slice(opts.items.visibleConf.old,nI);if(sO.fx=='directscroll')
{var orgW=opts.items[opts.d['width']];hiddenitems=i_skp;i_cur_l=i_old_l;sc_hideHiddenItems(hiddenitems);opts.items[opts.d['width']]='variable';}}
var $cf2=false,i_siz=ms_getTotalSize(a_itm.slice(0,nI),opts,'width'),w_siz=cf_mapWrapperSizes(ms_getSizes(i_new,opts,true),opts,!opts.usePadding),i_siz_vis=0,a_cfs={},a_cfs_vis={},a_cur={},a_old={},a_lef={},a_dur=sc_getDuration(sO,opts,nI,i_siz);switch(sO.fx)
{case'uncover':case'uncover-fade':i_siz_vis=ms_getTotalSize(a_itm.slice(0,opts.items.visibleConf.old),opts,'width');break;}
if(hiddenitems)
{opts.items[opts.d['width']]=orgW;}
if(opts.align)
{if(opts.padding[opts.d[1]]<0)
{opts.padding[opts.d[1]]=0;}}
sz_resetMargin(a_itm,opts,true);sz_resetMargin(i_old_l,opts,opts.padding[opts.d[1]]);if(opts.align)
{opts.padding[opts.d[1]]=pR;opts.padding[opts.d[3]]=pL;}
a_lef[opts.d['left']]=(opts.usePadding)?opts.padding[opts.d[3]]:0;var _s_wrapper=function(){},_a_wrapper=function(){},_s_paddingold=function(){},_a_paddingold=function(){},_s_paddingcur=function(){},_a_paddingcur=function(){},_onafter=function(){},_moveitems=function(){},_position=function(){};switch(sO.fx)
{case'crossfade':case'cover':case'cover-fade':case'uncover':case'uncover-fade':$cf2=$cfs.clone(true).appendTo($wrp);$cf2.children().slice(opts.items.visibleConf.old).remove();break;}
switch(sO.fx)
{case'crossfade':case'cover':case'cover-fade':$cfs.css('zIndex',1);$cf2.css('zIndex',0);break;}
scrl=sc_setScroll(a_dur,sO.easing,conf);a_cfs[opts.d['left']]=-i_siz;a_cfs_vis[opts.d['left']]=-i_siz_vis;if(pL<0)
{a_cfs[opts.d['left']]+=pL;}
if(opts[opts.d['width']]=='variable'||opts[opts.d['height']]=='variable')
{_s_wrapper=function(){$wrp.css(w_siz);};_a_wrapper=function(){scrl.anims.push([$wrp,w_siz]);};}
if(opts.usePadding)
{var i_new_l_m=i_new_l.data('_cfs_origCssMargin');if(pR>=0)
{i_new_l_m+=opts.padding[opts.d[1]];}
i_new_l.css(opts.d['marginRight'],i_new_l_m);if(i_cur_l.not(i_old_l).length)
{a_old[opts.d['marginRight']]=i_old_l.data('_cfs_origCssMargin');}
_s_paddingold=function(){i_old_l.css(a_old);};_a_paddingold=function(){scrl.anims.push([i_old_l,a_old]);};var i_cur_l_m=i_cur_l.data('_cfs_origCssMargin');if(pL>0)
{i_cur_l_m+=opts.padding[opts.d[3]];}
a_cur[opts.d['marginRight']]=i_cur_l_m;_s_paddingcur=function(){i_cur_l.css(a_cur);};_a_paddingcur=function(){scrl.anims.push([i_cur_l,a_cur]);};}
_position=function(){$cfs.css(a_lef);};var overFill=opts.items.visible+nI-itms.total;_moveitems=function(){if(overFill>0)
{$cfs.children().slice(itms.total).remove();}
var l_itm=$cfs.children().slice(0,nI).appendTo($cfs).last();if(overFill>0)
{i_new=gi_getCurrentItems(a_itm,opts);}
sc_showHiddenItems(hiddenitems);if(opts.usePadding)
{if(itms.total<opts.items.visible+nI){var i_cur_l=$cfs.children().eq(opts.items.visible-1);i_cur_l.css(opts.d['marginRight'],i_cur_l.data('_cfs_origCssMargin')+opts.padding[opts.d[1]]);}
l_itm.css(opts.d['marginRight'],l_itm.data('_cfs_origCssMargin'));}};var cb_arguments=sc_mapCallbackArguments(i_old,i_skp,i_new,nI,'next',a_dur,w_siz);_onafter=function(){$cfs.css('zIndex',$cfs.data('_cfs_origCssZindex'));sc_afterScroll($cfs,$cf2,sO);crsl.isScrolling=false;clbk.onAfter=sc_fireCallbacks($tt0,sO,'onAfter',cb_arguments,clbk);queu=sc_fireQueue($cfs,queu,conf);if(!crsl.isPaused)
{$cfs.trigger(cf_e('play',conf));}};crsl.isScrolling=true;tmrs=sc_clearTimers(tmrs);clbk.onBefore=sc_fireCallbacks($tt0,sO,'onBefore',cb_arguments,clbk);switch(sO.fx)
{case'none':$cfs.css(a_cfs);_s_wrapper();_s_paddingold();_s_paddingcur();_position();_moveitems();_onafter();break;case'fade':scrl.anims.push([$cfs,{'opacity':0},function(){_s_wrapper();_s_paddingold();_s_paddingcur();_position();_moveitems();scrl=sc_setScroll(a_dur,sO.easing,conf);scrl.anims.push([$cfs,{'opacity':1},_onafter]);sc_startScroll(scrl,conf);}]);break;case'crossfade':$cfs.css({'opacity':0});scrl.anims.push([$cf2,{'opacity':0}]);scrl.anims.push([$cfs,{'opacity':1},_onafter]);_a_wrapper();_s_paddingold();_s_paddingcur();_position();_moveitems();break;case'cover':$cfs.css(opts.d['left'],$wrp[opts.d['width']]());scrl.anims.push([$cfs,a_lef,_onafter]);_a_wrapper();_s_paddingold();_s_paddingcur();_moveitems();break;case'cover-fade':$cfs.css(opts.d['left'],$wrp[opts.d['width']]());scrl.anims.push([$cf2,{'opacity':0}]);scrl.anims.push([$cfs,a_lef,_onafter]);_a_wrapper();_s_paddingold();_s_paddingcur();_moveitems();break;case'uncover':scrl.anims.push([$cf2,a_cfs_vis,_onafter]);_a_wrapper();_s_paddingold();_s_paddingcur();_position();_moveitems();break;case'uncover-fade':$cfs.css({'opacity':0});scrl.anims.push([$cfs,{'opacity':1}]);scrl.anims.push([$cf2,a_cfs_vis,_onafter]);_a_wrapper();_s_paddingold();_s_paddingcur();_position();_moveitems();break;default:scrl.anims.push([$cfs,a_cfs,function(){_position();_moveitems();_onafter();}]);_a_wrapper();_a_paddingold();_a_paddingcur();break;}
sc_startScroll(scrl,conf);cf_setCookie(opts.cookie,$cfs,conf);$cfs.trigger(cf_e('updatePageStatus',conf),[false,w_siz]);return true;});$cfs.bind(cf_e('slideTo',conf),function(e,num,dev,org,obj,dir,clb){e.stopPropagation();var v=[num,dev,org,obj,dir,clb],t=['string/number/object','number','boolean','object','string','function'],a=cf_sortParams(v,t);obj=a[3];dir=a[4];clb=a[5];num=gn_getItemIndex(a[0],a[1],a[2],itms,$cfs);if(num==0)
{return false;}
if(!is_object(obj))
{obj=false;}
if(dir!='prev'&&dir!='next')
{if(opts.circular)
{dir=(num<=itms.total/2)?'next':'prev';}
else
{dir=(itms.first==0||itms.first>num)?'next':'prev';}}
if(dir=='prev')
{num=itms.total-num;}
$cfs.trigger(cf_e(dir,conf),[obj,num,clb]);return true;});$cfs.bind(cf_e('prevPage',conf),function(e,obj,clb){e.stopPropagation();var cur=$cfs.triggerHandler(cf_e('currentPage',conf));return $cfs.triggerHandler(cf_e('slideToPage',conf),[cur-1,obj,'prev',clb]);});$cfs.bind(cf_e('nextPage',conf),function(e,obj,clb){e.stopPropagation();var cur=$cfs.triggerHandler(cf_e('currentPage',conf));return $cfs.triggerHandler(cf_e('slideToPage',conf),[cur+1,obj,'next',clb]);});$cfs.bind(cf_e('slideToPage',conf),function(e,pag,obj,dir,clb){e.stopPropagation();if(!is_number(pag))
{pag=$cfs.triggerHandler(cf_e('currentPage',conf));}
var ipp=opts.pagination.items||opts.items.visible,max=Math.ceil(itms.total/ipp)-1;if(pag<0)
{pag=max;}
if(pag>max)
{pag=0;}
return $cfs.triggerHandler(cf_e('slideTo',conf),[pag*ipp,0,true,obj,dir,clb]);});$cfs.bind(cf_e('jumpToStart',conf),function(e,s){e.stopPropagation();if(s)
{s=gn_getItemIndex(s,0,true,itms,$cfs);}
else
{s=0;}
s+=itms.first;if(s!=0)
{if(itms.total>0)
{while(s>itms.total)
{s-=itms.total;}}
$cfs.prepend($cfs.children().slice(s,itms.total));}
return true;});$cfs.bind(cf_e('synchronise',conf),function(e,s){e.stopPropagation();if(s)
{s=cf_getSynchArr(s);}
else if(opts.synchronise)
{s=opts.synchronise;}
else
{return debug(conf,'No carousel to synchronise.');}
var n=$cfs.triggerHandler(cf_e('currentPosition',conf)),x=true;for(var j=0,l=s.length;j<l;j++)
{if(!s[j][0].triggerHandler(cf_e('slideTo',conf),[n,s[j][3],true]))
{x=false;}}
return x;});$cfs.bind(cf_e('queue',conf),function(e,dir,opt){e.stopPropagation();if(is_function(dir))
{dir.call($tt0,queu);}
else if(is_array(dir))
{queu=dir;}
else if(!is_undefined(dir))
{queu.push([dir,opt]);}
return queu;});$cfs.bind(cf_e('insertItem',conf),function(e,itm,num,org,dev){e.stopPropagation();var v=[itm,num,org,dev],t=['string/object','string/number/object','boolean','number'],a=cf_sortParams(v,t);itm=a[0];num=a[1];org=a[2];dev=a[3];if(is_object(itm)&&!is_jquery(itm))
{itm=$(itm);}
else if(is_string(itm))
{itm=$(itm);}
if(!is_jquery(itm)||itm.length==0)
{return debug(conf,'Not a valid object.');}
if(is_undefined(num))
{num='end';}
sz_storeMargin(itm,opts);sz_storeOrigCss(itm);var orgNum=num,before='before';if(num=='end')
{if(org)
{if(itms.first==0)
{num=itms.total-1;before='after';}
else
{num=itms.first;itms.first+=itm.length;}
if(num<0)
{num=0;}}
else
{num=itms.total-1;before='after';}}
else
{num=gn_getItemIndex(num,dev,org,itms,$cfs);}
var $cit=$cfs.children().eq(num);if($cit.length)
{$cit[before](itm);}
else
{debug(conf,'Correct insert-position not found! Appending item to the end.');$cfs.append(itm);}
if(orgNum!='end'&&!org)
{if(num<itms.first)
{itms.first+=itm.length;}}
itms.total=$cfs.children().length;if(itms.first>=itms.total)
{itms.first-=itms.total;}
$cfs.trigger(cf_e('updateSizes',conf));$cfs.trigger(cf_e('linkAnchors',conf));return true;});$cfs.bind(cf_e('removeItem',conf),function(e,num,org,dev){e.stopPropagation();var v=[num,org,dev],t=['string/number/object','boolean','number'],a=cf_sortParams(v,t);num=a[0];org=a[1];dev=a[2];var removed=false;if(num instanceof $&&num.length>1)
{$removed=$();num.each(function(i,el){var $rem=$cfs.trigger(cf_e('removeItem',conf),[$(this),org,dev]);if($rem)
{$removed=$removed.add($rem);}});return $removed;}
if(is_undefined(num)||num=='end')
{$removed=$cfs.children().last();}
else
{num=gn_getItemIndex(num,dev,org,itms,$cfs);var $removed=$cfs.children().eq(num);if($removed.length)
{if(num<itms.first)
{itms.first-=$removed.length;}}}
if($removed&&$removed.length)
{$removed.detach();itms.total=$cfs.children().length;$cfs.trigger(cf_e('updateSizes',conf));}
return $removed;});$cfs.bind(cf_e('onBefore',conf)+' '+cf_e('onAfter',conf),function(e,fn){e.stopPropagation();var eType=e.type.slice(conf.events.prefix.length);if(is_array(fn))
{clbk[eType]=fn;}
if(is_function(fn))
{clbk[eType].push(fn);}
return clbk[eType];});$cfs.bind(cf_e('currentPosition',conf),function(e,fn){e.stopPropagation();if(itms.first==0)
{var val=0;}
else
{var val=itms.total-itms.first;}
if(is_function(fn))
{fn.call($tt0,val);}
return val;});$cfs.bind(cf_e('currentPage',conf),function(e,fn){e.stopPropagation();var ipp=opts.pagination.items||opts.items.visible,max=Math.ceil(itms.total/ipp-1),nr;if(itms.first==0)
{nr=0;}
else if(itms.first<itms.total%ipp)
{nr=0;}
else if(itms.first==ipp&&!opts.circular)
{nr=max;}
else
{nr=Math.round((itms.total-itms.first)/ipp);}
if(nr<0)
{nr=0;}
if(nr>max)
{nr=max;}
if(is_function(fn))
{fn.call($tt0,nr);}
return nr;});$cfs.bind(cf_e('currentVisible',conf),function(e,fn){e.stopPropagation();var $i=gi_getCurrentItems($cfs.children(),opts);if(is_function(fn))
{fn.call($tt0,$i);}
return $i;});$cfs.bind(cf_e('slice',conf),function(e,f,l,fn){e.stopPropagation();if(itms.total==0)
{return false;}
var v=[f,l,fn],t=['number','number','function'],a=cf_sortParams(v,t);f=(is_number(a[0]))?a[0]:0;l=(is_number(a[1]))?a[1]:itms.total;fn=a[2];f+=itms.first;l+=itms.first;if(items.total>0)
{while(f>itms.total)
{f-=itms.total;}
while(l>itms.total)
{l-=itms.total;}
while(f<0)
{f+=itms.total;}
while(l<0)
{l+=itms.total;}}
var $iA=$cfs.children(),$i;if(l>f)
{$i=$iA.slice(f,l);}
else
{$i=$($iA.slice(f,itms.total).get().concat($iA.slice(0,l).get()));}
if(is_function(fn))
{fn.call($tt0,$i);}
return $i;});$cfs.bind(cf_e('isPaused',conf)+' '+cf_e('isStopped',conf)+' '+cf_e('isScrolling',conf),function(e,fn){e.stopPropagation();var eType=e.type.slice(conf.events.prefix.length),value=crsl[eType];if(is_function(fn))
{fn.call($tt0,value);}
return value;});$cfs.bind(cf_e('configuration',conf),function(e,a,b,c){e.stopPropagation();var reInit=false;if(is_function(a))
{a.call($tt0,opts);}
else if(is_object(a))
{opts_orig=$.extend(true,{},opts_orig,a);if(b!==false)reInit=true;else opts=$.extend(true,{},opts,a);}
else if(!is_undefined(a))
{if(is_function(b))
{var val=eval('opts.'+a);if(is_undefined(val))
{val='';}
b.call($tt0,val);}
else if(!is_undefined(b))
{if(typeof c!=='boolean')c=true;eval('opts_orig.'+a+' = b');if(c!==false)reInit=true;else eval('opts.'+a+' = b');}
else
{return eval('opts.'+a);}}
if(reInit)
{sz_resetMargin($cfs.children(),opts);FN._init(opts_orig);FN._bind_buttons();var sz=sz_setSizes($cfs,opts);$cfs.trigger(cf_e('updatePageStatus',conf),[true,sz]);}
return opts;});$cfs.bind(cf_e('linkAnchors',conf),function(e,$con,sel){e.stopPropagation();if(is_undefined($con))
{$con=$('body');}
else if(is_string($con))
{$con=$($con);}
if(!is_jquery($con)||$con.length==0)
{return debug(conf,'Not a valid object.');}
if(!is_string(sel))
{sel='a.caroufredsel';}
$con.find(sel).each(function(){var h=this.hash||'';if(h.length>0&&$cfs.children().index($(h))!=-1)
{$(this).unbind('click').click(function(e){e.preventDefault();$cfs.trigger(cf_e('slideTo',conf),h);});}});return true;});$cfs.bind(cf_e('updatePageStatus',conf),function(e,build,sizes){e.stopPropagation();if(!opts.pagination.container)
{return;}
var ipp=opts.pagination.items||opts.items.visible,pgs=Math.ceil(itms.total/ipp);if(build)
{if(opts.pagination.anchorBuilder)
{opts.pagination.container.children().remove();opts.pagination.container.each(function(){for(var a=0;a<pgs;a++)
{var i=$cfs.children().eq(gn_getItemIndex(a*ipp,0,true,itms,$cfs));$(this).append(opts.pagination.anchorBuilder.call(i[0],a+1));}});}
opts.pagination.container.each(function(){$(this).children().unbind(opts.pagination.event).each(function(a){$(this).bind(opts.pagination.event,function(e){e.preventDefault();$cfs.trigger(cf_e('slideTo',conf),[a*ipp,-opts.pagination.deviation,true,opts.pagination]);});});});}
var selected=$cfs.triggerHandler(cf_e('currentPage',conf))+opts.pagination.deviation;if(selected>=pgs)
{selected=0;}
if(selected<0)
{selected=pgs-1;}
opts.pagination.container.each(function(){$(this).children().removeClass(cf_c('selected',conf)).eq(selected).addClass(cf_c('selected',conf));});return true;});$cfs.bind(cf_e('updateSizes',conf),function(e){var vI=opts.items.visible,a_itm=$cfs.children(),avail_primary=ms_getParentSize($wrp,opts,'width');itms.total=a_itm.length;if(crsl.primarySizePercentage)
{opts.maxDimension=avail_primary;opts[opts.d['width']]=ms_getPercentage(avail_primary,crsl.primarySizePercentage);}
else
{opts.maxDimension=ms_getMaxDimension(opts,avail_primary);}
if(opts.responsive)
{opts.items.width=opts.items.sizesConf.width;opts.items.height=opts.items.sizesConf.height;opts=in_getResponsiveValues(opts,a_itm,avail_primary);vI=opts.items.visible;sz_setResponsiveSizes(opts,a_itm);}
else if(opts.items.visibleConf.variable)
{vI=gn_getVisibleItemsNext(a_itm,opts,0);}
else if(opts.items.filter!='*')
{vI=gn_getVisibleItemsNextFilter(a_itm,opts,0);}
if(!opts.circular&&itms.first!=0&&vI>itms.first){if(opts.items.visibleConf.variable)
{var nI=gn_getVisibleItemsPrev(a_itm,opts,itms.first)-itms.first;}
else if(opts.items.filter!='*')
{var nI=gn_getVisibleItemsPrevFilter(a_itm,opts,itms.first)-itms.first;}
else
{var nI=opts.items.visible-itms.first;}
debug(conf,'Preventing non-circular: sliding '+nI+' items backward.');$cfs.trigger(cf_e('prev',conf),nI);}
opts.items.visible=cf_getItemsAdjust(vI,opts,opts.items.visibleConf.adjust,$tt0);opts.items.visibleConf.old=opts.items.visible;opts=in_getAlignPadding(opts,a_itm);var sz=sz_setSizes($cfs,opts);$cfs.trigger(cf_e('updatePageStatus',conf),[true,sz]);nv_showNavi(opts,itms.total,conf);nv_enableNavi(opts,itms.first,conf);return sz;});$cfs.bind(cf_e('destroy',conf),function(e,orgOrder){e.stopPropagation();tmrs=sc_clearTimers(tmrs);$cfs.data('_cfs_isCarousel',false);$cfs.trigger(cf_e('finish',conf));if(orgOrder)
{$cfs.trigger(cf_e('jumpToStart',conf));}
sz_restoreOrigCss($cfs.children());sz_restoreOrigCss($cfs);FN._unbind_events();FN._unbind_buttons();if(conf.wrapper=='parent')
{sz_restoreOrigCss($wrp);}
else
{$wrp.replaceWith($cfs);}
return true;});$cfs.bind(cf_e('debug',conf),function(e){debug(conf,'Carousel width: '+opts.width);debug(conf,'Carousel height: '+opts.height);debug(conf,'Item widths: '+opts.items.width);debug(conf,'Item heights: '+opts.items.height);debug(conf,'Number of items visible: '+opts.items.visible);if(opts.auto.play)
{debug(conf,'Number of items scrolled automatically: '+opts.auto.items);}
if(opts.prev.button)
{debug(conf,'Number of items scrolled backward: '+opts.prev.items);}
if(opts.next.button)
{debug(conf,'Number of items scrolled forward: '+opts.next.items);}
return conf.debug;});$cfs.bind('_cfs_triggerEvent',function(e,n,o){e.stopPropagation();return $cfs.triggerHandler(cf_e(n,conf),o);});};FN._unbind_events=function(){$cfs.unbind(cf_e('',conf));$cfs.unbind(cf_e('',conf,false));$cfs.unbind('_cfs_triggerEvent');};FN._bind_buttons=function(){FN._unbind_buttons();nv_showNavi(opts,itms.total,conf);nv_enableNavi(opts,itms.first,conf);if(opts.auto.pauseOnHover)
{var pC=bt_pauseOnHoverConfig(opts.auto.pauseOnHover);$wrp.bind(cf_e('mouseenter',conf,false),function(){$cfs.trigger(cf_e('pause',conf),pC);}).bind(cf_e('mouseleave',conf,false),function(){$cfs.trigger(cf_e('resume',conf));});}
if(opts.auto.button)
{opts.auto.button.bind(cf_e(opts.auto.event,conf,false),function(e){e.preventDefault();var ev=false,pC=null;if(crsl.isPaused)
{ev='play';}
else if(opts.auto.pauseOnEvent)
{ev='pause';pC=bt_pauseOnHoverConfig(opts.auto.pauseOnEvent);}
if(ev)
{$cfs.trigger(cf_e(ev,conf),pC);}});}
if(opts.prev.button)
{opts.prev.button.bind(cf_e(opts.prev.event,conf,false),function(e){e.preventDefault();$cfs.trigger(cf_e('prev',conf));});if(opts.prev.pauseOnHover)
{var pC=bt_pauseOnHoverConfig(opts.prev.pauseOnHover);opts.prev.button.bind(cf_e('mouseenter',conf,false),function(){$cfs.trigger(cf_e('pause',conf),pC);}).bind(cf_e('mouseleave',conf,false),function(){$cfs.trigger(cf_e('resume',conf));});}}
if(opts.next.button)
{opts.next.button.bind(cf_e(opts.next.event,conf,false),function(e){e.preventDefault();$cfs.trigger(cf_e('next',conf));});if(opts.next.pauseOnHover)
{var pC=bt_pauseOnHoverConfig(opts.next.pauseOnHover);opts.next.button.bind(cf_e('mouseenter',conf,false),function(){$cfs.trigger(cf_e('pause',conf),pC);}).bind(cf_e('mouseleave',conf,false),function(){$cfs.trigger(cf_e('resume',conf));});}}
if(opts.pagination.container)
{if(opts.pagination.pauseOnHover)
{var pC=bt_pauseOnHoverConfig(opts.pagination.pauseOnHover);opts.pagination.container.bind(cf_e('mouseenter',conf,false),function(){$cfs.trigger(cf_e('pause',conf),pC);}).bind(cf_e('mouseleave',conf,false),function(){$cfs.trigger(cf_e('resume',conf));});}}
if(opts.prev.key||opts.next.key)
{$(document).bind(cf_e('keyup',conf,false,true,true),function(e){var k=e.keyCode;if(k==opts.next.key)
{e.preventDefault();$cfs.trigger(cf_e('next',conf));}
if(k==opts.prev.key)
{e.preventDefault();$cfs.trigger(cf_e('prev',conf));}});}
if(opts.pagination.keys)
{$(document).bind(cf_e('keyup',conf,false,true,true),function(e){var k=e.keyCode;if(k>=49&&k<58)
{k=(k-49)*opts.items.visible;if(k<=itms.total)
{e.preventDefault();$cfs.trigger(cf_e('slideTo',conf),[k,0,true,opts.pagination]);}}});}
if($.fn.swipe)
{var isTouch='ontouchstart'in window;if((isTouch&&opts.swipe.onTouch)||(!isTouch&&opts.swipe.onMouse))
{var scP=$.extend(true,{},opts.prev,opts.swipe),scN=$.extend(true,{},opts.next,opts.swipe),swP=function(){$cfs.trigger(cf_e('prev',conf),[scP])},swN=function(){$cfs.trigger(cf_e('next',conf),[scN])};switch(opts.direction)
{case'up':case'down':opts.swipe.options.swipeUp=swN;opts.swipe.options.swipeDown=swP;break;default:opts.swipe.options.swipeLeft=swN;opts.swipe.options.swipeRight=swP;}
if(crsl.swipe)
{$cfs.swipe('destroy');}
$wrp.swipe(opts.swipe.options);$wrp.css('cursor','move');crsl.swipe=true;}}
if($.fn.mousewheel)
{if(opts.mousewheel)
{var mcP=$.extend(true,{},opts.prev,opts.mousewheel),mcN=$.extend(true,{},opts.next,opts.mousewheel);if(crsl.mousewheel)
{$wrp.unbind(cf_e('mousewheel',conf,false));}
$wrp.bind(cf_e('mousewheel',conf,false),function(e,delta){e.preventDefault();if(delta>0)
{$cfs.trigger(cf_e('prev',conf),[mcP]);}
else
{$cfs.trigger(cf_e('next',conf),[mcN]);}});crsl.mousewheel=true;}}
if(opts.auto.play)
{$cfs.trigger(cf_e('play',conf),opts.auto.delay);}
if(crsl.upDateOnWindowResize)
{var resizeFn=function(e){$cfs.trigger(cf_e('finish',conf));if(opts.auto.pauseOnResize&&!crsl.isPaused)
{$cfs.trigger(cf_e('play',conf));}
sz_resetMargin($cfs.children(),opts);$cfs.trigger(cf_e('updateSizes',conf));};var $w=$(window),onResize=null;if($.debounce&&conf.onWindowResize=='debounce')
{onResize=$.debounce(200,resizeFn);}
else if($.throttle&&conf.onWindowResize=='throttle')
{onResize=$.throttle(300,resizeFn);}
else
{var _windowWidth=0,_windowHeight=0;onResize=function(){var nw=$w.width(),nh=$w.height();if(nw!=_windowWidth||nh!=_windowHeight)
{resizeFn();_windowWidth=nw;_windowHeight=nh;}};}
$w.bind(cf_e('resize',conf,false,true,true),onResize);}};FN._unbind_buttons=function(){var ns1=cf_e('',conf),ns2=cf_e('',conf,false);ns3=cf_e('',conf,false,true,true);$(document).unbind(ns3);$(window).unbind(ns3);$wrp.unbind(ns2);if(opts.auto.button)
{opts.auto.button.unbind(ns2);}
if(opts.prev.button)
{opts.prev.button.unbind(ns2);}
if(opts.next.button)
{opts.next.button.unbind(ns2);}
if(opts.pagination.container)
{opts.pagination.container.unbind(ns2);if(opts.pagination.anchorBuilder)
{opts.pagination.container.children().remove();}}
if(crsl.swipe)
{$cfs.swipe('destroy');$wrp.css('cursor','default');crsl.swipe=false;}
if(crsl.mousewheel)
{crsl.mousewheel=false;}
nv_showNavi(opts,'hide',conf);nv_enableNavi(opts,'removeClass',conf);};if(is_boolean(configs))
{configs={'debug':configs};}
var crsl={'direction':'next','isPaused':true,'isScrolling':false,'isStopped':false,'mousewheel':false,'swipe':false},itms={'total':$cfs.children().length,'first':0},tmrs={'auto':null,'progress':null,'startTime':getTime(),'timePassed':0},scrl={'isStopped':false,'duration':0,'startTime':0,'easing':'','anims':[]},clbk={'onBefore':[],'onAfter':[]},queu=[],conf=$.extend(true,{},$.fn.carouFredSel.configs,configs),opts={},opts_orig=$.extend(true,{},options),$wrp=(conf.wrapper=='parent')?$cfs.parent():$cfs.wrap('<'+conf.wrapper.element+' class="'+conf.wrapper.classname+'" />').parent();conf.selector=$cfs.selector;conf.serialNumber=$.fn.carouFredSel.serialNumber++;conf.transition=(conf.transition&&$.fn.transition)?'transition':'animate';FN._init(opts_orig,true,starting_position);FN._build();FN._bind_events();FN._bind_buttons();if(is_array(opts.items.start))
{var start_arr=opts.items.start;}
else
{var start_arr=[];if(opts.items.start!=0)
{start_arr.push(opts.items.start);}}
if(opts.cookie)
{start_arr.unshift(parseInt(cf_getCookie(opts.cookie),10));}
if(start_arr.length>0)
{for(var a=0,l=start_arr.length;a<l;a++)
{var s=start_arr[a];if(s==0)
{continue;}
if(s===true)
{s=window.location.hash;if(s.length<1)
{continue;}}
else if(s==='random')
{s=Math.floor(Math.random()*itms.total);}
if($cfs.triggerHandler(cf_e('slideTo',conf),[s,0,true,{fx:'none'}]))
{break;}}}
var siz=sz_setSizes($cfs,opts),itm=gi_getCurrentItems($cfs.children(),opts);if(opts.onCreate)
{opts.onCreate.call($tt0,{'width':siz.width,'height':siz.height,'items':itm});}
$cfs.trigger(cf_e('updatePageStatus',conf),[true,siz]);$cfs.trigger(cf_e('linkAnchors',conf));if(conf.debug)
{$cfs.trigger(cf_e('debug',conf));}
return $cfs;};$.fn.carouFredSel.serialNumber=1;$.fn.carouFredSel.defaults={'synchronise':false,'infinite':true,'circular':true,'responsive':false,'direction':'left','items':{'start':0},'scroll':{'easing':'swing','duration':500,'pauseOnHover':false,'event':'click','queue':false}};$.fn.carouFredSel.configs={'debug':false,'transition':false,'onWindowResize':'throttle','events':{'prefix':'','namespace':'cfs'},'wrapper':{'element':'div','classname':'caroufredsel_wrapper'},'classnames':{}};$.fn.carouFredSel.pageAnchorBuilder=function(nr){return'<a href="#"><span>'+nr+'</span></a>';};$.fn.carouFredSel.progressbarUpdater=function(perc){$(this).css('width',perc+'%');};$.fn.carouFredSel.cookie={get:function(n){n+='=';var ca=document.cookie.split(';');for(var a=0,l=ca.length;a<l;a++)
{var c=ca[a];while(c.charAt(0)==' ')
{c=c.slice(1);}
if(c.indexOf(n)==0)
{return c.slice(n.length);}}
return 0;},set:function(n,v,d){var e="";if(d)
{var date=new Date();date.setTime(date.getTime()+(d*24*60*60*1000));e="; expires="+date.toGMTString();}
document.cookie=n+'='+v+e+'; path=/';},remove:function(n){$.fn.carouFredSel.cookie.set(n,"",-1);}};function sc_setScroll(d,e,c){if(c.transition=='transition')
{if(e=='swing')
{e='ease';}}
return{anims:[],duration:d,orgDuration:d,easing:e,startTime:getTime()};}
function sc_startScroll(s,c){for(var a=0,l=s.anims.length;a<l;a++)
{var b=s.anims[a];if(!b)
{continue;}
b[0][c.transition](b[1],s.duration,s.easing,b[2]);}}
function sc_stopScroll(s,finish){if(!is_boolean(finish))
{finish=true;}
if(is_object(s.pre))
{sc_stopScroll(s.pre,finish);}
for(var a=0,l=s.anims.length;a<l;a++)
{var b=s.anims[a];b[0].stop(true);if(finish)
{b[0].css(b[1]);if(is_function(b[2]))
{b[2]();}}}
if(is_object(s.post))
{sc_stopScroll(s.post,finish);}}
function sc_afterScroll($c,$c2,o){if($c2)
{$c2.remove();}
switch(o.fx){case'fade':case'crossfade':case'cover-fade':case'uncover-fade':$c.css('opacity',1);$c.css('filter','');break;}}
function sc_fireCallbacks($t,o,b,a,c){if(o[b])
{o[b].call($t,a);}
if(c[b].length)
{for(var i=0,l=c[b].length;i<l;i++)
{c[b][i].call($t,a);}}
return[];}
function sc_fireQueue($c,q,c){if(q.length)
{$c.trigger(cf_e(q[0][0],c),q[0][1]);q.shift();}
return q;}
function sc_hideHiddenItems(hiddenitems){hiddenitems.each(function(){var hi=$(this);hi.data('_cfs_isHidden',hi.is(':hidden')).hide();});}
function sc_showHiddenItems(hiddenitems){if(hiddenitems)
{hiddenitems.each(function(){var hi=$(this);if(!hi.data('_cfs_isHidden'))
{hi.show();}});}}
function sc_clearTimers(t){if(t.auto)
{clearTimeout(t.auto);}
if(t.progress)
{clearInterval(t.progress);}
return t;}
function sc_mapCallbackArguments(i_old,i_skp,i_new,s_itm,s_dir,s_dur,w_siz){return{'width':w_siz.width,'height':w_siz.height,'items':{'old':i_old,'skipped':i_skp,'visible':i_new},'scroll':{'items':s_itm,'direction':s_dir,'duration':s_dur}};}
function sc_getDuration(sO,o,nI,siz){var dur=sO.duration;if(sO.fx=='none')
{return 0;}
if(dur=='auto')
{dur=o.scroll.duration/o.scroll.items*nI;}
else if(dur<10)
{dur=siz/dur;}
if(dur<1)
{return 0;}
if(sO.fx=='fade')
{dur=dur/2;}
return Math.round(dur);}
function nv_showNavi(o,t,c){var minimum=(is_number(o.items.minimum))?o.items.minimum:o.items.visible+1;if(t=='show'||t=='hide')
{var f=t;}
else if(minimum>t)
{debug(c,'Not enough items ('+t+' total, '+minimum+' needed): Hiding navigation.');var f='hide';}
else
{var f='show';}
var s=(f=='show')?'removeClass':'addClass',h=cf_c('hidden',c);if(o.auto.button)
{o.auto.button[f]()[s](h);}
if(o.prev.button)
{o.prev.button[f]()[s](h);}
if(o.next.button)
{o.next.button[f]()[s](h);}
if(o.pagination.container)
{o.pagination.container[f]()[s](h);}}
function nv_enableNavi(o,f,c){if(o.circular||o.infinite)return;var fx=(f=='removeClass'||f=='addClass')?f:false,di=cf_c('disabled',c);if(o.auto.button&&fx)
{o.auto.button[fx](di);}
if(o.prev.button)
{var fn=fx||(f==0)?'addClass':'removeClass';o.prev.button[fn](di);}
if(o.next.button)
{var fn=fx||(f==o.items.visible)?'addClass':'removeClass';o.next.button[fn](di);}}
function go_getObject($tt,obj){if(is_function(obj))
{obj=obj.call($tt);}
else if(is_undefined(obj))
{obj={};}
return obj;}
function go_getItemsObject($tt,obj){obj=go_getObject($tt,obj);if(is_number(obj))
{obj={'visible':obj};}
else if(obj=='variable')
{obj={'visible':obj,'width':obj,'height':obj};}
else if(!is_object(obj))
{obj={};}
return obj;}
function go_getScrollObject($tt,obj){obj=go_getObject($tt,obj);if(is_number(obj))
{if(obj<=50)
{obj={'items':obj};}
else
{obj={'duration':obj};}}
else if(is_string(obj))
{obj={'easing':obj};}
else if(!is_object(obj))
{obj={};}
return obj;}
function go_getNaviObject($tt,obj){obj=go_getObject($tt,obj);if(is_string(obj))
{var temp=cf_getKeyCode(obj);if(temp==-1)
{obj=$(obj);}
else
{obj=temp;}}
return obj;}
function go_getAutoObject($tt,obj){obj=go_getNaviObject($tt,obj);if(is_jquery(obj))
{obj={'button':obj};}
else if(is_boolean(obj))
{obj={'play':obj};}
else if(is_number(obj))
{obj={'timeoutDuration':obj};}
if(obj.progress)
{if(is_string(obj.progress)||is_jquery(obj.progress))
{obj.progress={'bar':obj.progress};}}
return obj;}
function go_complementAutoObject($tt,obj){if(is_function(obj.button))
{obj.button=obj.button.call($tt);}
if(is_string(obj.button))
{obj.button=$(obj.button);}
if(!is_boolean(obj.play))
{obj.play=true;}
if(!is_number(obj.delay))
{obj.delay=0;}
if(is_undefined(obj.pauseOnEvent))
{obj.pauseOnEvent=true;}
if(!is_boolean(obj.pauseOnResize))
{obj.pauseOnResize=true;}
if(!is_number(obj.timeoutDuration))
{obj.timeoutDuration=(obj.duration<10)?2500:obj.duration*5;}
if(obj.progress)
{if(is_function(obj.progress.bar))
{obj.progress.bar=obj.progress.bar.call($tt);}
if(is_string(obj.progress.bar))
{obj.progress.bar=$(obj.progress.bar);}
if(obj.progress.bar)
{if(!is_function(obj.progress.updater))
{obj.progress.updater=$.fn.carouFredSel.progressbarUpdater;}
if(!is_number(obj.progress.interval))
{obj.progress.interval=50;}}
else
{obj.progress=false;}}
return obj;}
function go_getPrevNextObject($tt,obj){obj=go_getNaviObject($tt,obj);if(is_jquery(obj))
{obj={'button':obj};}
else if(is_number(obj))
{obj={'key':obj};}
return obj;}
function go_complementPrevNextObject($tt,obj){if(is_function(obj.button))
{obj.button=obj.button.call($tt);}
if(is_string(obj.button))
{obj.button=$(obj.button);}
if(is_string(obj.key))
{obj.key=cf_getKeyCode(obj.key);}
return obj;}
function go_getPaginationObject($tt,obj){obj=go_getNaviObject($tt,obj);if(is_jquery(obj))
{obj={'container':obj};}
else if(is_boolean(obj))
{obj={'keys':obj};}
return obj;}
function go_complementPaginationObject($tt,obj){if(is_function(obj.container))
{obj.container=obj.container.call($tt);}
if(is_string(obj.container))
{obj.container=$(obj.container);}
if(!is_number(obj.items))
{obj.items=false;}
if(!is_boolean(obj.keys))
{obj.keys=false;}
if(!is_function(obj.anchorBuilder)&&!is_false(obj.anchorBuilder))
{obj.anchorBuilder=$.fn.carouFredSel.pageAnchorBuilder;}
if(!is_number(obj.deviation))
{obj.deviation=0;}
return obj;}
function go_getSwipeObject($tt,obj){if(is_function(obj))
{obj=obj.call($tt);}
if(is_undefined(obj))
{obj={'onTouch':false};}
if(is_true(obj))
{obj={'onTouch':obj};}
else if(is_number(obj))
{obj={'items':obj};}
return obj;}
function go_complementSwipeObject($tt,obj){if(!is_boolean(obj.onTouch))
{obj.onTouch=true;}
if(!is_boolean(obj.onMouse))
{obj.onMouse=false;}
if(!is_object(obj.options))
{obj.options={};}
if(!is_boolean(obj.options.triggerOnTouchEnd))
{obj.options.triggerOnTouchEnd=false;}
return obj;}
function go_getMousewheelObject($tt,obj){if(is_function(obj))
{obj=obj.call($tt);}
if(is_true(obj))
{obj={};}
else if(is_number(obj))
{obj={'items':obj};}
else if(is_undefined(obj))
{obj=false;}
return obj;}
function go_complementMousewheelObject($tt,obj){return obj;}
function gn_getItemIndex(num,dev,org,items,$cfs){if(is_string(num))
{num=$(num,$cfs);}
if(is_object(num))
{num=$(num,$cfs);}
if(is_jquery(num))
{num=$cfs.children().index(num);if(!is_boolean(org))
{org=false;}}
else
{if(!is_boolean(org))
{org=true;}}
if(!is_number(num))
{num=0;}
if(!is_number(dev))
{dev=0;}
if(org)
{num+=items.first;}
num+=dev;if(items.total>0)
{while(num>=items.total)
{num-=items.total;}
while(num<0)
{num+=items.total;}}
return num;}
function gn_getVisibleItemsPrev(i,o,s){var t=0,x=0;for(var a=s;a>=0;a--)
{var j=i.eq(a);t+=(j.is(':visible'))?j[o.d['outerWidth']](true):0;if(t>o.maxDimension)
{return x;}
if(a==0)
{a=i.length;}
x++;}}
function gn_getVisibleItemsPrevFilter(i,o,s){return gn_getItemsPrevFilter(i,o.items.filter,o.items.visibleConf.org,s);}
function gn_getScrollItemsPrevFilter(i,o,s,m){return gn_getItemsPrevFilter(i,o.items.filter,m,s);}
function gn_getItemsPrevFilter(i,f,m,s){var t=0,x=0;for(var a=s,l=i.length;a>=0;a--)
{x++;if(x==l)
{return x;}
var j=i.eq(a);if(j.is(f))
{t++;if(t==m)
{return x;}}
if(a==0)
{a=l;}}}
function gn_getVisibleOrg($c,o){return o.items.visibleConf.org||$c.children().slice(0,o.items.visible).filter(o.items.filter).length;}
function gn_getVisibleItemsNext(i,o,s){var t=0,x=0;for(var a=s,l=i.length-1;a<=l;a++)
{var j=i.eq(a);t+=(j.is(':visible'))?j[o.d['outerWidth']](true):0;if(t>o.maxDimension)
{return x;}
x++;if(x==l+1)
{return x;}
if(a==l)
{a=-1;}}}
function gn_getVisibleItemsNextTestCircular(i,o,s,l){var v=gn_getVisibleItemsNext(i,o,s);if(!o.circular)
{if(s+v>l)
{v=l-s;}}
return v;}
function gn_getVisibleItemsNextFilter(i,o,s){return gn_getItemsNextFilter(i,o.items.filter,o.items.visibleConf.org,s,o.circular);}
function gn_getScrollItemsNextFilter(i,o,s,m){return gn_getItemsNextFilter(i,o.items.filter,m+1,s,o.circular)-1;}
function gn_getItemsNextFilter(i,f,m,s,c){var t=0,x=0;for(var a=s,l=i.length-1;a<=l;a++)
{x++;if(x>=l)
{return x;}
var j=i.eq(a);if(j.is(f))
{t++;if(t==m)
{return x;}}
if(a==l)
{a=-1;}}}
function gi_getCurrentItems(i,o){return i.slice(0,o.items.visible);}
function gi_getOldItemsPrev(i,o,n){return i.slice(n,o.items.visibleConf.old+n);}
function gi_getNewItemsPrev(i,o){return i.slice(0,o.items.visible);}
function gi_getOldItemsNext(i,o){return i.slice(0,o.items.visibleConf.old);}
function gi_getNewItemsNext(i,o,n){return i.slice(n,o.items.visible+n);}
function sz_storeMargin(i,o,d){if(o.usePadding)
{if(!is_string(d))
{d='_cfs_origCssMargin';}
i.each(function(){var j=$(this),m=parseInt(j.css(o.d['marginRight']),10);if(!is_number(m))
{m=0;}
j.data(d,m);});}}
function sz_resetMargin(i,o,m){if(o.usePadding)
{var x=(is_boolean(m))?m:false;if(!is_number(m))
{m=0;}
sz_storeMargin(i,o,'_cfs_tempCssMargin');i.each(function(){var j=$(this);j.css(o.d['marginRight'],((x)?j.data('_cfs_tempCssMargin'):m+j.data('_cfs_origCssMargin')));});}}
function sz_storeOrigCss(i){i.each(function(){var j=$(this);j.data('_cfs_origCss',j.attr('style')||'');});}
function sz_restoreOrigCss(i){i.each(function(){var j=$(this);j.attr('style',j.data('_cfs_origCss')||'');});}
function sz_setResponsiveSizes(o,all){var visb=o.items.visible,newS=o.items[o.d['width']],seco=o[o.d['height']],secp=is_percentage(seco);all.each(function(){var $t=$(this),nw=newS-ms_getPaddingBorderMargin($t,o,'Width');$t[o.d['width']](nw);if(secp)
{$t[o.d['height']](ms_getPercentage(nw,seco));}});}
function sz_setSizes($c,o){var $w=$c.parent(),$i=$c.children(),$v=gi_getCurrentItems($i,o),sz=cf_mapWrapperSizes(ms_getSizes($v,o,true),o,false);$w.css(sz);if(o.usePadding)
{var p=o.padding,r=p[o.d[1]];if(o.align&&r<0)
{r=0;}
var $l=$v.last();$l.css(o.d['marginRight'],$l.data('_cfs_origCssMargin')+r);$c.css(o.d['top'],p[o.d[0]]);$c.css(o.d['left'],p[o.d[3]]);}
$c.css(o.d['width'],sz[o.d['width']]+(ms_getTotalSize($i,o,'width')*2));$c.css(o.d['height'],ms_getLargestSize($i,o,'height'));return sz;}
function ms_getSizes(i,o,wrapper){return[ms_getTotalSize(i,o,'width',wrapper),ms_getLargestSize(i,o,'height',wrapper)];}
function ms_getLargestSize(i,o,dim,wrapper){if(!is_boolean(wrapper))
{wrapper=false;}
if(is_number(o[o.d[dim]])&&wrapper)
{return o[o.d[dim]];}
if(is_number(o.items[o.d[dim]]))
{return o.items[o.d[dim]];}
dim=(dim.toLowerCase().indexOf('width')>-1)?'outerWidth':'outerHeight';return ms_getTrueLargestSize(i,o,dim);}
function ms_getTrueLargestSize(i,o,dim){var s=0;for(var a=0,l=i.length;a<l;a++)
{var j=i.eq(a);var m=(j.is(':visible'))?j[o.d[dim]](true):0;if(s<m)
{s=m;}}
return s;}
function ms_getTotalSize(i,o,dim,wrapper){if(!is_boolean(wrapper))
{wrapper=false;}
if(is_number(o[o.d[dim]])&&wrapper)
{return o[o.d[dim]];}
if(is_number(o.items[o.d[dim]]))
{return o.items[o.d[dim]]*i.length;}
var d=(dim.toLowerCase().indexOf('width')>-1)?'outerWidth':'outerHeight',s=0;for(var a=0,l=i.length;a<l;a++)
{var j=i.eq(a);s+=(j.is(':visible'))?j[o.d[d]](true):0;}
return s;}
function ms_getParentSize($w,o,d){var isVisible=$w.is(':visible');if(isVisible)
{$w.hide();}
var s=$w.parent()[o.d[d]]();if(isVisible)
{$w.show();}
return s;}
function ms_getMaxDimension(o,a){return(is_number(o[o.d['width']]))?o[o.d['width']]:a;}
function ms_hasVariableSizes(i,o,dim){var s=false,v=false;for(var a=0,l=i.length;a<l;a++)
{var j=i.eq(a);var c=(j.is(':visible'))?j[o.d[dim]](true):0;if(s===false)
{s=c;}
else if(s!=c)
{v=true;}
if(s==0)
{v=true;}}
return v;}
function ms_getPaddingBorderMargin(i,o,d){return i[o.d['outer'+d]](true)-i[o.d[d.toLowerCase()]]();}
function ms_getPercentage(s,o){if(is_percentage(o))
{o=parseInt(o.slice(0,-1),10);if(!is_number(o))
{return s;}
s*=o/100;}
return s;}
function cf_e(n,c,pf,ns,rd){if(!is_boolean(pf))
{pf=true;}
if(!is_boolean(ns))
{ns=true;}
if(!is_boolean(rd))
{rd=false;}
if(pf)
{n=c.events.prefix+n;}
if(ns)
{n=n+'.'+c.events.namespace;}
if(ns&&rd)
{n+=c.serialNumber;}
return n;}
function cf_c(n,c){return(is_string(c.classnames[n]))?c.classnames[n]:n;}
function cf_mapWrapperSizes(ws,o,p){if(!is_boolean(p))
{p=true;}
var pad=(o.usePadding&&p)?o.padding:[0,0,0,0];var wra={};wra[o.d['width']]=ws[0]+pad[1]+pad[3];wra[o.d['height']]=ws[1]+pad[0]+pad[2];return wra;}
function cf_sortParams(vals,typs){var arr=[];for(var a=0,l1=vals.length;a<l1;a++)
{for(var b=0,l2=typs.length;b<l2;b++)
{if(typs[b].indexOf(typeof vals[a])>-1&&is_undefined(arr[b]))
{arr[b]=vals[a];break;}}}
return arr;}
function cf_getPadding(p){if(is_undefined(p))
{return[0,0,0,0];}
if(is_number(p))
{return[p,p,p,p];}
if(is_string(p))
{p=p.split('px').join('').split('em').join('').split(' ');}
if(!is_array(p))
{return[0,0,0,0];}
for(var i=0;i<4;i++)
{p[i]=parseInt(p[i],10);}
switch(p.length)
{case 0:return[0,0,0,0];case 1:return[p[0],p[0],p[0],p[0]];case 2:return[p[0],p[1],p[0],p[1]];case 3:return[p[0],p[1],p[2],p[1]];default:return[p[0],p[1],p[2],p[3]];}}
function cf_getAlignPadding(itm,o){var x=(is_number(o[o.d['width']]))?Math.ceil(o[o.d['width']]-ms_getTotalSize(itm,o,'width')):0;switch(o.align)
{case'left':return[0,x];case'right':return[x,0];case'center':default:return[Math.ceil(x/2),Math.floor(x/2)];}}
function cf_getDimensions(o){var dm=[['width','innerWidth','outerWidth','height','innerHeight','outerHeight','left','top','marginRight',0,1,2,3],['height','innerHeight','outerHeight','width','innerWidth','outerWidth','top','left','marginBottom',3,2,1,0]];var dl=dm[0].length,dx=(o.direction=='right'||o.direction=='left')?0:1;var dimensions={};for(var d=0;d<dl;d++)
{dimensions[dm[0][d]]=dm[dx][d];}
return dimensions;}
function cf_getAdjust(x,o,a,$t){var v=x;if(is_function(a))
{v=a.call($t,v);}
else if(is_string(a))
{var p=a.split('+'),m=a.split('-');if(m.length>p.length)
{var neg=true,sta=m[0],adj=m[1];}
else
{var neg=false,sta=p[0],adj=p[1];}
switch(sta)
{case'even':v=(x%2==1)?x-1:x;break;case'odd':v=(x%2==0)?x-1:x;break;default:v=x;break;}
adj=parseInt(adj,10);if(is_number(adj))
{if(neg)
{adj=-adj;}
v+=adj;}}
if(!is_number(v)||v<1)
{v=1;}
return v;}
function cf_getItemsAdjust(x,o,a,$t){return cf_getItemAdjustMinMax(cf_getAdjust(x,o,a,$t),o.items.visibleConf);}
function cf_getItemAdjustMinMax(v,i){if(is_number(i.min)&&v<i.min)
{v=i.min;}
if(is_number(i.max)&&v>i.max)
{v=i.max;}
if(v<1)
{v=1;}
return v;}
function cf_getSynchArr(s){if(!is_array(s))
{s=[[s]];}
if(!is_array(s[0]))
{s=[s];}
for(var j=0,l=s.length;j<l;j++)
{if(is_string(s[j][0]))
{s[j][0]=$(s[j][0]);}
if(!is_boolean(s[j][1]))
{s[j][1]=true;}
if(!is_boolean(s[j][2]))
{s[j][2]=true;}
if(!is_number(s[j][3]))
{s[j][3]=0;}}
return s;}
function cf_getKeyCode(k){if(k=='right')
{return 39;}
if(k=='left')
{return 37;}
if(k=='up')
{return 38;}
if(k=='down')
{return 40;}
return-1;}
function cf_setCookie(n,$c,c){if(n)
{var v=$c.triggerHandler(cf_e('currentPosition',c));$.fn.carouFredSel.cookie.set(n,v);}}
function cf_getCookie(n){var c=$.fn.carouFredSel.cookie.get(n);return(c=='')?0:c;}
function in_mapCss($elem,props){var css={};for(var p=0,l=props.length;p<l;p++)
{css[props[p]]=$elem.css(props[p]);}
return css;}
function in_complementItems(obj,opt,itm,sta){if(!is_object(obj.visibleConf))
{obj.visibleConf={};}
if(!is_object(obj.sizesConf))
{obj.sizesConf={};}
if(obj.start==0&&is_number(sta))
{obj.start=sta;}
if(is_object(obj.visible))
{obj.visibleConf.min=obj.visible.min;obj.visibleConf.max=obj.visible.max;obj.visible=false;}
else if(is_string(obj.visible))
{if(obj.visible=='variable')
{obj.visibleConf.variable=true;}
else
{obj.visibleConf.adjust=obj.visible;}
obj.visible=false;}
else if(is_function(obj.visible))
{obj.visibleConf.adjust=obj.visible;obj.visible=false;}
if(!is_string(obj.filter))
{obj.filter=(itm.filter(':hidden').length>0)?':visible':'*';}
if(!obj[opt.d['width']])
{if(opt.responsive)
{debug(true,'Set a '+opt.d['width']+' for the items!');obj[opt.d['width']]=ms_getTrueLargestSize(itm,opt,'outerWidth');}
else
{obj[opt.d['width']]=(ms_hasVariableSizes(itm,opt,'outerWidth'))?'variable':itm[opt.d['outerWidth']](true);}}
if(!obj[opt.d['height']])
{obj[opt.d['height']]=(ms_hasVariableSizes(itm,opt,'outerHeight'))?'variable':itm[opt.d['outerHeight']](true);}
obj.sizesConf.width=obj.width;obj.sizesConf.height=obj.height;return obj;}
function in_complementVisibleItems(opt,avl){if(opt.items[opt.d['width']]=='variable')
{opt.items.visibleConf.variable=true;}
if(!opt.items.visibleConf.variable){if(is_number(opt[opt.d['width']]))
{opt.items.visible=Math.floor(opt[opt.d['width']]/opt.items[opt.d['width']]);}
else
{opt.items.visible=Math.floor(avl/opt.items[opt.d['width']]);opt[opt.d['width']]=opt.items.visible*opt.items[opt.d['width']];if(!opt.items.visibleConf.adjust)
{opt.align=false;}}
if(opt.items.visible=='Infinity'||opt.items.visible<1)
{debug(true,'Not a valid number of visible items: Set to "variable".');opt.items.visibleConf.variable=true;}}
return opt;}
function in_complementPrimarySize(obj,opt,all){if(obj=='auto')
{obj=ms_getTrueLargestSize(all,opt,'outerWidth');}
return obj;}
function in_complementSecondarySize(obj,opt,all){if(obj=='auto')
{obj=ms_getTrueLargestSize(all,opt,'outerHeight');}
if(!obj)
{obj=opt.items[opt.d['height']];}
return obj;}
function in_getAlignPadding(o,all){var p=cf_getAlignPadding(gi_getCurrentItems(all,o),o);o.padding[o.d[1]]=p[1];o.padding[o.d[3]]=p[0];return o;}
function in_getResponsiveValues(o,all,avl){var visb=cf_getItemAdjustMinMax(Math.ceil(o[o.d['width']]/o.items[o.d['width']]),o.items.visibleConf);if(visb>all.length)
{visb=all.length;}
var newS=Math.floor(o[o.d['width']]/visb);o.items.visible=visb;o.items[o.d['width']]=newS;o[o.d['width']]=visb*newS;return o;}
function bt_pauseOnHoverConfig(p){if(is_string(p))
{var i=(p.indexOf('immediate')>-1)?true:false,r=(p.indexOf('resume')>-1)?true:false;}
else
{var i=r=false;}
return[i,r];}
function bt_mousesheelNumber(mw){return(is_number(mw))?mw:null}
function is_null(a){return(a===null);}
function is_undefined(a){return(is_null(a)||typeof a=='undefined'||a===''||a==='undefined');}
function is_array(a){return(a instanceof Array);}
function is_jquery(a){return(a instanceof jQuery);}
function is_object(a){return((a instanceof Object||typeof a=='object')&&!is_null(a)&&!is_jquery(a)&&!is_array(a)&&!is_function(a));}
function is_number(a){return((a instanceof Number||typeof a=='number')&&!isNaN(a));}
function is_string(a){return((a instanceof String||typeof a=='string')&&!is_undefined(a)&&!is_true(a)&&!is_false(a));}
function is_function(a){return(a instanceof Function||typeof a=='function');}
function is_boolean(a){return(a instanceof Boolean||typeof a=='boolean'||is_true(a)||is_false(a));}
function is_true(a){return(a===true||a==='true');}
function is_false(a){return(a===false||a==='false');}
function is_percentage(x){return(is_string(x)&&x.slice(-1)=='%');}
function getTime(){return new Date().getTime();}
function deprecated(o,n){debug(true,o+' is DEPRECATED, support for it will be removed. Use '+n+' instead.');}
function debug(d,m){if(!is_undefined(window.console)&&!is_undefined(window.console.log))
{if(is_object(d))
{var s=' ('+d.selector+')';d=d.debug;}
else
{var s='';}
if(!d)
{return false;}
if(is_string(m))
{m='carouFredSel'+s+': '+m;}
else
{m=['carouFredSel'+s+':',m];}
window.console.log(m);}
return false;}
$.extend($.easing,{'quadratic':function(t){var t2=t*t;return t*(-t2*t+4*t2-6*t+4);},'cubic':function(t){return t*(4*t*t-9*t+6);},'elastic':function(t){var t2=t*t;return t*(33*t2*t2-106*t2*t+126*t2-67*t+15);}});})(jQuery);
(function($){$(window).ready(function(){tmls_sliders=$('.tmls_slider, .tmls_slider2');tmls_style3_names=$('.style3 .tmls_name');tmls_visible_slider_buttons=$('.tmls_next_prev.tmls_visible');if(tmls_sliders.length)
{tmls_sliders.each(function(){tmls_slider_play($(this));$(this).parent().parent().mouseenter(function(){$(this).children('.tmls_show_on_hover').slideToggle();});$(this).parent().parent().mouseleave(function(){$(this).children('.tmls_show_on_hover').slideToggle();});});tmls_visible_slider_buttons.fadeIn();$(window).resize(function(){tmls_sliders.each(function(){tmls_slider_play($(this));});if(tmls_style3_names.length){tmls_style3_names.each(function(){tmls_style3_infos_height_sum=($(this).height()+2.5+$(this).parent().children('.tmls_position').height()+$(this).parent().children('.tmls_rating').height()+5);tmls_style3_img_height=$(this).parent().children('.tmls_image').height();if(tmls_style3_infos_height_sum<tmls_style3_img_height&&$(this).parent().children('.tmls_image').css('display')!='none'){$(this).css('padding-top',(tmls_style3_img_height/2)-(tmls_style3_infos_height_sum/2));}
else{$(this).css('padding-top',0);}});}});}
if(tmls_style3_names.length){tmls_style3_names.each(function(){tmls_style3_infos_height_sum=($(this).height()+2.5+$(this).parent().children('.tmls_position').height()+$(this).parent().children('.tmls_rating').height()+5);tmls_style3_img_height=$(this).parent().children('.tmls_image').height();if(tmls_style3_infos_height_sum<tmls_style3_img_height&&$(this).parent().children('.tmls_image').css('display')!='none'){$(this).css('padding-top',(tmls_style3_img_height/2)-(tmls_style3_infos_height_sum/2));}
else{$(this).css('padding-top',0);}});}});$(window).load(function(){tmls_sliders.each(function(){tmls_slider_play($(this));});});function tmls_slider_play(tmls_slider){tmls_slider.carouFredSel({responsive:true,width:'variable',height:'variable',prev:{button:function(){return $(this).parents().children(".tmls_next_prev").children(".tmls_prev");}},next:{button:function(){return $(this).parents().children(".tmls_next_prev").children(".tmls_next");}},pagination:{container:function(){return $(this).parents().next().children('.tmls_paginationContainer');},anchorBuilder:function(nr){return"<div class='tmls_image_container "+$(this).attr('data-imageradius')+"'><div class='tmls_image' style='"+$(this).attr('data-bgimg')+"'></div><div class='tmls_image_overlay' style='background-color:"+$(this).parent().attr('data-slider2unselectedoverlaybgcolor')+"'></div></div>";}},scroll:{items:1,duration:tmls_slider.data('scrollduration'),fx:tmls_slider.data('transitioneffect')},auto:{play:tmls_slider.data('autoplay'),timeoutDuration:tmls_slider.data('pauseduration'),pauseOnHover:tmls_slider.data('pauseonhover')},items:{width:700},swipe:{onMouse:false,onTouch:true}});}})(jQuery);
jQuery(function(){jQuery(":input").on("focus",function(){var input=jQuery(this);var inputID=input.attr("id")||"(no input ID)";var inputName=input.attr("name")||"(no input name)";var inputClass=input.attr("class")||"(no input class)";var form=jQuery(this.form);var formID=form.attr("id")||"(no form ID)";var formName=form.attr("name")||"(no form name)";var formClass=form.attr("class")||"(no form class)";window[gtm4wp_datalayer_name].push({'event':'gtm4wp.formElementEnter','inputID':inputID,'inputName':inputName,'inputClass':inputClass,'formID':formID,'formName':formName,'formClass':formClass});}).on("blur",function(){var input=jQuery(this);var inputID=input.attr("id")||"(no input ID)";var inputName=input.attr("name")||"(no input name)";var inputClass=input.attr("class")||"(no input class)";var form=jQuery(this.form);var formID=form.attr("id")||"(no form ID)";var formName=form.attr("name")||"(no form name)";var formClass=form.attr("class")||"(no form class)";window[gtm4wp_datalayer_name].push({'event':'gtm4wp.formElementLeave','inputID':inputID,'inputName':inputName,'inputClass':inputClass,'formID':formID,'formName':formName,'formClass':formClass});});});
;jQuery(function(){jQuery(document).on('click','.single_add_to_cart_button',function(){var _product_form=jQuery(this).closest('form.cart');var _product_var_id=jQuery('[name=variation_id]',_product_form);var _product_id=jQuery('[name=gtm4wp_id]',_product_form).val();var _product_name=jQuery('[name=gtm4wp_name]',_product_form).val();var _product_sku=jQuery('[name=gtm4wp_sku]',_product_form).val();var _product_category=jQuery('[name=gtm4wp_category]',_product_form).val();var _product_price=jQuery('[name=gtm4wp_price]',_product_form).val();var _product_currency=jQuery('[name=gtm4wp_currency]',_product_form).val();if(_product_var_id.length>0){_product_var_id_val=_product_var_id.val();_product_form_variations=_product_form.data('product_variations');_product_form_variations.forEach(function(product_var){if(product_var.variation_id==_product_var_id_val){_product_var_sku=product_var.sku;if(!_product_var_sku){_product_var_sku=_product_var_id_val;}
var _tmp=[];for(var attrib_key in product_var.attributes){_tmp.push(product_var.attributes[attrib_key]);}
window[gtm4wp_datalayer_name].push({'event':'gtm4wp.addProductToCartEEC','ecommerce':{'currencyCode':_product_currency,'add':{'products':[{'id':gtm4wp_use_sku_instead?_product_var_sku:_product_var_id_val,'name':_product_name,'price':product_var.display_price,'category':_product_category,'variant':_tmp.join(','),'quantity':jQuery('form.cart:first input[name=quantity]').val()}]}}});}});}else{window[gtm4wp_datalayer_name].push({'event':'gtm4wp.addProductToCartEEC','ecommerce':{'currencyCode':_product_currency,'add':{'products':[{'id':gtm4wp_use_sku_instead?_product_sku:_product_id,'name':_product_name,'price':_product_price,'category':_product_category,'quantity':jQuery('form.cart:first input[name=quantity]').val()}]}}});}});jQuery(document).on('found_variation',function(event,product_variation){var _product_form=event.target;var _product_var_id=jQuery('[name=variation_id]',_product_form);var _product_id=jQuery('[name=gtm4wp_id]',_product_form).val();var _product_name=jQuery('[name=gtm4wp_name]',_product_form).val();var _product_sku=jQuery('[name=gtm4wp_sku]',_product_form).val();var _product_category=jQuery('[name=gtm4wp_category]',_product_form).val();var _product_price=jQuery('[name=gtm4wp_price]',_product_form).val();var _product_currency=jQuery('[name=gtm4wp_currency]',_product_form).val();var current_product_detail_data={name:_product_name,id:0,price:0,category:_product_category,variant:''};current_product_detail_data.id=product_variation.variation_id;if(gtm4wp_use_sku_instead&&product_variation.sku&&(''!=product_variation.sku)){current_product_detail_data.id=product_variation.sku;}
current_product_detail_data.price=product_variation.display_price;var _tmp=[];for(var attrib_key in product_variation.attributes){_tmp.push(product_variation.attributes[attrib_key]);}
current_product_detail_data.variant=_tmp.join(',');window[gtm4wp_datalayer_name].push({'event':'gtm4wp.changeDetailViewEEC','ecommerce':{'currencyCode':_product_currency,'detail':{'products':[current_product_detail_data]},},'ecomm_prodid':gtm4wp_id_prefix+current_product_detail_data.id,'ecomm_pagetype':'product','ecomm_totalvalue':current_product_detail_data.price});});jQuery('.variations select').trigger('change');jQuery(document).ajaxSuccess(function(event,xhr,settings){if(settings.url.indexOf('wc-api=WC_Quick_View')>-1){setTimeout(function(){jQuery(".woocommerce.quick-view").parent().find("script").each(function(i){eval(jQuery(this).text());});},500);}});});
var runPYS=function(){var $=window.jQuery;if(pys_fb_pixel_options.run===true){return;}else{pys_fb_pixel_options.run=true;}
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.agent='dvpixelyoursite';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');if(pys_fb_pixel_options.woo.addtocart_enabled){window.pys_woo_product_data=window.pys_woo_product_data||[];$('.add_to_cart_button:not(.product_type_variable)').click(function(e){var product_id=$(this).data('product_id');if(typeof product_id!=='undefined'){if(typeof pys_woo_product_data[product_id]!=='undefined'){fbq('track','AddToCart',pys_woo_product_data[product_id]);}}});$('.single_add_to_cart_button').click(function(e){var $button=$(this),$form=$button.closest('form'),is_variable=false,qty,product_id=pys_fb_pixel_options.woo.product_id;if($button.hasClass('disabled')){return;}
if($form.length===0){return;}
if($form.hasClass('variations_form')){is_variable=true;}
if(is_variable){qty=parseInt($form.find('input[name="quantity"]').val());if(pys_fb_pixel_options.woo.product_data!=='main'){product_id=parseInt($form.find('input[name="variation_id"]').val());}}else{qty=parseInt($form.find('input[name="quantity"]').val());}
if(typeof pys_woo_product_data[product_id]!=='undefined'){var params=pys_woo_product_data[product_id];if(pys_fb_pixel_options.woo.product_value_enabled&&pys_fb_pixel_options.woo.product_value_option!=='global'){params.value=params.value*qty;}
params.contents[0].quantity=qty;fbq('track','AddToCart',params);}});}
regularEvents();customCodeEvents();$('.edd-add-to-cart').click(function(){try{var classes=$.grep(this.className.split(" "),function(element,index){return element.indexOf('pys-event-id-')===0;});if(typeof classes=='undefined'||classes.length==0){return;}
var regexp=/pys-event-id-(.*)/;var event_id=regexp.exec(classes[0]);if(event_id==null){return;}
evaluateEventByID(event_id[1],pys_edd_ajax_events);}catch(e){console.log(e);}});function regularEvents(){if(typeof pys_events=='undefined'){return;}
for(var i=0;i<pys_events.length;i++){var eventData=pys_events[i];if(eventData.hasOwnProperty('delay')==false||eventData.delay==0){fbq(eventData.type,eventData.name,eventData.params);}else{setTimeout(function(type,name,params){fbq(type,name,params);},eventData.delay*1000,eventData.type,eventData.name,eventData.params);}}}
function customCodeEvents(){if(typeof pys_customEvents=='undefined'){return;}
$.each(pys_customEvents,function(index,code){eval(code);});}
function evaluateEventByID(eventID,events){if(typeof events=='undefined'||events.length==0){return;}
if(events.hasOwnProperty(eventID)==false){return;}
var eventData=events[eventID];if(eventData.hasOwnProperty('custom')){eval(eventData.custom);}else{fbq(eventData.type,eventData.name,eventData.params);}}};jQuery(document).ready(function($){if(typeof pys_fb_pixel_options!=='undefined'){if(!pys_fb_pixel_options.gdpr.disable){var getCookie=function(name){var value="; "+document.cookie;var parts=value.split("; "+name+"=");if(parts.length===2)return parts.pop().split(";").shift();};if(pys_fb_pixel_options.gdpr.ginger_enabled){var ginger_cookie=getCookie('ginger-cookie');if(pys_fb_pixel_options.gdpr.enable_before_consent){if(typeof ginger_cookie==='undefined'||ginger_cookie==='Y'){runPYS();}else{console.warn('PixelYourSite is disabled by Ginger - EU Cookie Law plugin.');}}else{if(ginger_cookie==='Y'){runPYS();}else{console.warn('PixelYourSite is disabled by Ginger - EU Cookie Law plugin.');}}}else if(pys_fb_pixel_options.gdpr.cookiebot_enabled&&typeof Cookiebot!=='undefined'){if(pys_fb_pixel_options.gdpr.enable_before_consent){if(Cookiebot.consented===false||Cookiebot.consent.marketing){runPYS();}else{console.warn('PixelYourSite is disabled by Cookiebot plugin.');}}else{if(Cookiebot.consent.marketing){runPYS();}else{console.warn('PixelYourSite is disabled by Cookiebot plugin.');}}
Cookiebot.onaccept=function(){if(Cookiebot.consent.marketing){runPYS();}}}else{runPYS();}}else{console.warn('PixelYourSite is disabled by GDPR.');}}});
// $=jQuery;
//
// $(document).ready(function() {
//   // $('#bwpp').load(function(){
//   //   $('#bwpp').contents().find('#buyordownload').hide();
//   // });
//
//
//     $("#bwpp").load(function() {
//       var doc = this.contentDocument || this.contentWindow.document;
//       var target = doc.getElementById("target");
//       target.innerHTML = "Found It!";
//     });
//
// });
$=jQuery;$(document).ready(function(){if(localized_sexy_config.sexy_woocheckout_show_form_labels=='no'){$('.woocommerce-billing-fields label').hide();$('.shipping_address .woocommerce-shipping-fields label').hide();}
if(localized_sexy_config.sexy_woocheckout_show_additional_information=='no'){$('.woocommerce-additional-fields').hide();}
if($('#createaccount').length>0){$('#createaccount').prop("checked",true);}});
$=jQuery;$(document).ready(function(){initialize();});function initialize(){let cartIconClass;if(typeof localized_sexy_config.sexy_woocheckout_cart_icon_class!=='undefined'){cartIconClass='.'+localized_sexy_config.sexy_woocheckout_cart_icon_class;}else{$('a').each(function(i){let baseURI=$('a')[i].baseURI;let href=$('a')[i].href;let pathname=$('a')[i].pathname;if(pathname==='/home/cart/'){cartIconClass=$('a')[i].attr('class');}});}
$('#slider .fa-times-circle').unbind().click(function(e){if($(window).width()===$('#slider').outerWidth()){var percentage='-100%';}else{var percentage='-40%';}
$('#slider').animate({right:percentage},500,function(){$('#slider').fadeOut();$('#slider section').fadeOut();$('#slider a.button.checkout.wc-forward').fadeIn();$('.woocommerce-mini-cart__total').fadeIn();$('#slider #sexy-woo-cart').css({'width':'100%'});});});$(cartIconClass).unbind().click(function(e){e.preventDefault();view_slider($(window).width(),'cart',$(this));});$(cartIconClass+' span').unbind().click(function(e){e.preventDefault();view_slider($(window).width(),'cart',$(this));});$('#read-more').unbind().click(function(e){e.preventDefault();view_slider($(window).width(),'Read More',$(this));});$('nav .menu-contact').unbind().click(function(e){e.preventDefault();view_slider($(window).width(),'Contact',$(this));});$('.sexy-contact').unbind().click(function(e){e.preventDefault();view_slider($(window).width(),'Contact',$(this));});$('.footer-contact').unbind().click(function(e){e.preventDefault();view_slider($(window).width(),'Contact',$(this));});}
function view_slider(widthOfScreen,text,element){$('#slider section').fadeOut();if($('.fa-shopping-cart').hasClass('shopping_cart_clicked_before')){$('#slider #sexy-woo-cart').fadeIn();}
var doNothing=false;if(widthOfScreen<768){var percentage='-100%';var widthOfSlider='100%';}else{var percentage='-40%';var widthOfSlider='40%';}
if(text=='checkout'){$('#slider .woocommerce-mini-cart__total').fadeOut();$('#slider a.button.checkout.wc-forward').fadeOut();$('#slider #sexy-woo-cart').fadeOut();$('#slider #sexy-woo-checkout').fadeIn();}
$('#slider').show();$('#slider section:first-of-type').fadeIn();$('#slider').animate({right:'0%',width:widthOfSlider},500,function(){if(text=='Read More'){$('#slider #text-30').fadeIn();}else if(text=='Contact'){$('#slider .gform_widget').fadeIn();}else if(text=='cart'){if(!$('.fa-shopping-cart').hasClass('shopping_cart_clicked_before')){$('#slider #sexy-woo-cart').fadeIn();}}});$("#slider").animate({scrollTop:0},"slow");};
$=jQuery;$(document).ready(function(){initialize_sexy_woo_checkout();});function initialize_sexy_woo_checkout(){if($('.woocommerce .cart-empty').length===1){$('.plus_btn').hide();}else{$('.plus_btn').fadeIn();}
if($('.shipping_address').length===0){$('.woocommerce-shipping-fields').fadeOut();}else{$('.woocommerce-shipping-fields').fadeIn();}
$('#slider .fa-shopping-cart').unbind().click(function(e){e.preventDefault();$(this).addClass('fa-times-circle shopping_cart_clicked_before');$(this).removeClass('fa-shopping-cart');initialize();view_slider($(window).width(),'cart',$(this));});$('#slider #close_slider').unbind().click(function(e){e.preventDefault();if($('#slider').hasClass("checkout-active")){$('#slider').removeClass("checkout-active");}});$('#slider .product-remove a').unbind().click(function(e){e.preventDefault();woo_remove_from_cart($(this).data('product_id'));$(this).parent().parent().fadeOut();});$('.single_add_to_cart_button').unbind().click(function(e){e.preventDefault();let productID=null;if($(this).val()){productID=$(this).val();}else{productID=$('input[name="product_id"]').val();}
woo_add_to_cart(productID);view_slider($(window).width(),'cart',$(this));});$('.add_to_cart_button').unbind().click(function(e){if($(this).text()!='Read more'){e.preventDefault();woo_add_to_cart($(this).data('product_id'));view_slider($(window).width(),'cart',$(this));return false;}});$('#slider input[name="woocommerce_checkout_place_order"]').unbind().click(function(e){e.preventDefault();if(($('input[name="ss_wc_mailchimp_opt_in"]:checked').length<1)&&(localized_sexy_config.total==0)){alert("Sorry, I need your email to give you my music for free. Please click on the checkbox to subscribe to my new music and show announcements!");}else{sexy_woo_ajax_checkout();}});$('#slider input[name="apply_coupon"]').unbind().click(function(e){e.preventDefault();apply_coupon($(this));});$('#slider .woocommerce-remove-coupon').unbind().click(function(e){e.preventDefault();remove_coupon($(this));});$('#slider .qty').change(function(){var qty=$(this).val();var currentVal=parseFloat(qty);var item_hash=$(this).attr('name').replace(/cart\[([\w]+)\]\[qty\]/g,"$1");woo_update_qty(qty,currentVal,item_hash);});if($('.shipping_address').length>0){$('.shipping_address').slideUp();if($('#ship-to-different-address-checkbox:checked').length===0){populate_shipping_fields();}
$('#slider #ship-to-different-address-checkbox').unbind().click(function(){if(this.checked){clear_shipping_fields();$('.shipping_address').slideDown();}else{populate_shipping_fields();$('.shipping_address').slideUp();}});}
$('#slider .cart_totals .shop_table tr:not(:last-child)').wrap('<div class="totals_wrap"></div>');$('#slider .cart_plus').unbind().click(function(){$('#slider .cart_totals .totals_wrap').slideToggle();$('.cart_plus').text($('.cart_plus').text()=='+'?'-':'+');$('#slider .order-total').toggleClass('border_top');});$('#slider .woocommerce-checkout-review-order-table tr:not(:last-child)').wrap('<div class="totals_wrap"></div>');$('#slider .checkout_plus').unbind().click(function(){$('#slider .woocommerce-checkout-review-order-table .totals_wrap').slideToggle();$('.checkout_plus').text($('.checkout_plus').text()=='+'?'-':'+');$('#slider .order-total').toggleClass('border_top');});$("#slider").keyup(function(e){var code=e.which;if(code==32||code==13||code==188||code==186){e.preventDefault();ajax_refresh_cart_and_checkout();}});$('#place_order').unbind().click(function(e){e.preventDefault();ajax_place_order();});}
function populate_shipping_fields(){$('#shipping_first_name').val($('#billing_first_name').val());$('#shipping_last_name').val($('#billing_last_name').val());$('#shipping_address_1').val($('#billing_address_1').val());$('#shipping_address_2').val($('#billing_address_2').val());$('#shipping_city').val($('#billing_city').val());$('#shipping_state').val($('#billing_state').val());$('#shipping_postcode').val($('#billing_postcode').val());$('#shipping_country').val($('#billing_country').val());$('#shipping_phone').val($('#billing_phone').val());}
function clear_shipping_fields(){$('#shipping_first_name').val('');$('#shipping_last_name').val('');$('#shipping_address_1').val('');$('#shipping_address_2').val('');$('#shipping_city').val('');$('#shipping_state').val('');$('#shipping_postcode').val('');$('#shipping_country').val('');$('#shipping_phone').val('');}
function apply_coupon(element){console.log('apply coupon');var coupon=$('.checkout_coupon input[name="coupon_code"]').val();if(coupon!=''){$.post('?wc-ajax=apply_coupon',{security:localized_sexy_config.apply_coupon_nonce,coupon_code:coupon}).done(function(data){ajax_refresh_cart_and_checkout(data);});}}
function remove_coupon(element){var coupon=$(element).data('coupon');$.post('?wc-ajax=remove_coupon',{security:localized_sexy_config.remove_coupon_nonce,coupon:coupon}).done(function(data){ajax_refresh_cart_and_checkout(data);});}
function woo_add_to_cart(productID){$.post('?wc-ajax=add_to_cart',{product_id:productID,quantity:1}).done(function(data){ajax_refresh_cart_and_checkout(data);after_woo_add_to_cart(productID);});}
function woo_update_qty(qty,currentVal,item_hash){var data={action:'sexy_update_total_price',security:localized_sexy_config.update_total_price_nonce,quantity:currentVal,hash:item_hash};$.post(woocommerce_params.ajax_url,data,function(response){ajax_refresh_cart_and_checkout();});}
function woo_remove_from_cart(productID){$.post(woocommerce_params.ajax_url,{'action':'sexy_product_remove','product_id':productID}).done(function(data){ajax_refresh_cart_and_checkout(data);});}
function sexy_woo_ajax_checkout(){$.post('?wc-ajax=checkout',{}).done(function(data){ajax_refresh_cart_and_checkout(data);});}
function ajax_refresh_cart_and_checkout(data){$('div.cart_totals').block({message:null,overlayCSS:{background:'#fff url('+woocommerce_params.ajax_url+') no-repeat center',backgroundSize:'16px 16px',opacity:0.6}});$('div.woocommerce-checkout-review-order-table').block({message:null,overlayCSS:{background:'#fff url('+woocommerce_params.ajax_url+') no-repeat center',backgroundSize:'16px 16px',opacity:0.6}});update_cart_totals(data);}
function display_json_output(previousData,checkoutData){if(typeof previousData!='undefined'){if(typeof previousData.messages=='undefined'){$('#sexy-woo-messages div').hide().html(previousData).fadeIn();}else{$('#sexy-woo-messages div').hide().html(previousData.messages).fadeIn();}}
if(typeof checkoutData!='undefined'){$('#sexy-woo-messages div').hide().html(checkoutData.messages).fadeIn();}
initialize_sexy_woo_checkout();}
function update_cart_totals(previousData){$.post(woocommerce_params.ajax_url,{'action':'sexy_ajax_refresh_cart'},function(result){$('#sexy-woo-cart-container').hide().html(result).fadeIn();update_checkout_totals(previousData)});}
function update_checkout_totals(previousData){$.post('?wc-ajax=update_order_review',{security:localized_sexy_config.update_order_review}).done(function(checkoutData){$('.woocommerce-checkout-review-order-table').html(checkoutData.fragments['.woocommerce-checkout-review-order-table']);if(checkoutData.messages!=''){display_json_output(previousData,checkoutData.messages);}else{display_json_output(previousData);}});}
function ajax_place_order(){$('#slider #loading').fadeIn();$.post('?wc-ajax=checkout',$('.checkout').serialize()).done(function(data){display_json_output(data);if(data.result=='failure'){var failureMessage='<ul class="woocommerce-error"><li>Error processing transaction.</li></ul>';display_json_output(failureMessage);}else{if(data.redirect!==''){console.log(data);}}
$('#slider #loading').fadeOut();});}
function after_woo_add_to_cart(data){};
function project_specific(data){$('#continue_1').data('product-id',data);$('#continue_1').attr('data-product-id',data);$('#continue_1').data('product-variation-id',$('input.variation_id').val());$('#continue_1').attr('data-product-variation-id',$('input.variation_id').val());}
$=jQuery;$(document).ready(function(){initializeSexyStyles();});function initializeSexyStyles(){if(localized_sexy_config.sexy_woocheckout_link_color){let linkColor=localized_sexy_config.sexy_woocheckout_link_color;if(linkColor.charAt(0)==='#'){$('#slider a').css('color',linkColor);}else{$('#slider a').css('color','#'+linkColor);}}
if(localized_sexy_config.sexy_woocheckout_text_color){let textColor=localized_sexy_config.sexy_woocheckout_text_color;if(textColor.charAt(0)==='#'){$('#slider h1, #slider h2, #slider h3, #slider h4, #slider p, #slider span, #slider th, #slider td, #slider tr, #slider .quantity::before').css('color',textColor);}else{$('#slider h1, #slider h2, #slider h3, #slider h4, #slider p, #slider span, #slider th, #slider td, #slider tr, #slider .quantity::before').css('color','#'+textColor);}}
if(localized_sexy_config.sexy_woocheckout_button_color){let buttonColor=localized_sexy_config.sexy_woocheckout_button_color;if(buttonColor.charAt(0)==='#'){$('#slider input[type=submit], #slider .checkout-button').css('background-color',buttonColor);}else{$('#slider input[type=submit], #slider .checkout-button').css('background-color','#'+buttonColor);}}};
/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.Context.refreshAll();for(var e in i)i[e].enabled=!0;return this},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,n.windowContext||(n.windowContext=!0,n.windowContext=new e(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),i=this.element==this.element.window;t&&e&&!i&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s];if(null!==a.triggerPoint){var l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=Math.floor(y+l-f),h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();
$=jQuery;$(document).ready(function(){$('.home .home-page-2 h3').addClass('wp-animation').addClass('wp-fadeInUp');$('.home .home-page-4 h3').addClass('wp-animation').addClass('wp-fadeInUp');$('.home .video-slider').addClass('wp-animation').addClass('wp-fadeIn');$('.footer-widgets-1 h4').addClass('wp-animation').addClass('wp-fadeIn');$('.footer-widgets-1 #text-36 p').addClass('wp-animation').addClass('wp-tada');$('.home .ge-slider-product-title').addClass('wp-animation').addClass('wp-fadeIn');$('.home .ge-slider-product-price').addClass('wp-animation').addClass('wp-fadeIn');$('.home .ge-slider-product-headline.desktop').addClass('wp-animation').addClass('wp-fadeIn');$('.home .ge-slider-product').addClass('wp-animation').addClass('wp-fadeInUp');$('.home .ge-slider-product-headline.mobile').addClass('wp-animation').addClass('wp-fadeInUp');$('.home .ge-slider-add-to-cart').addClass('wp-animation').addClass('wp-fadeInUp');$('.product-background.record').addClass('wp-animation').addClass('wp-rotateIn').addClass('wp-delay-1');$('.archive.woocommerce .product').addClass('wp-animation').addClass('wp-fadeInUp');$('.archive.woocommerce .woocommerce-ordering select').addClass('wp-animation').addClass('wp-fadeInUp');$('.archive .page-title').addClass('wp-animation').addClass('wp-fadeInUp');$('.single-product div.product .bwpp_iframe_wrap').addClass('wp-animation').addClass('wp-fadeIn').addClass('wp-delay-2');$('.single-product .product_title').addClass('wp-animation').addClass('wp-fadeIn');$('.single-product .summary .price').addClass('wp-animation').addClass('wp-fadeIn').addClass('wp-delay-1');$('.single-product .woocommerce-product-details__short-description').addClass('wp-animation').addClass('wp-fadeIn').addClass('wp-delay-1');$('.single-product .ssp_video').addClass('wp-animation').addClass('wp-fadeIn').addClass('wp-delay-1');$('.single-product .lyrics_title').addClass('wp-animation').addClass('wp-fadeIn');$('.single-product .upsells .products .product').addClass('wp-animation').addClass('wp-fadeInUp');$('.single-product .upsells h2').addClass('wp-animation').addClass('wp-fadeIn');});
$=jQuery;$(document).ready(function(){var animations=["bounce","flash","pulse","rubberBand","shake","swing","tada","wobble","jello","bounceIn","bounceInDown","bounceInLeft","bounceInRight","bounceInUp","bounceOut","bounceOutDown","bounceOutLeft","bounceOutRight","bounceOutUp","fadeIn","fadeInDown","fadeInDownBig","fadeInLeft","fadeInLeftBig","fadeInRight","fadeInRightBig","fadeInUp","fadeInUpBig","fadeOut","fadeOutDown","fadeOutDownBig","fadeOutLeft","fadeOutLeftBig","fadeOutRight","fadeOutRightBig","fadeOutUp","fadeOutUpBig","flip","flipInX","flipInY","flipOutX","flipOutY","lightSpeedIn","lightSpeedOut","rotateIn","rotateInDownLeft","rotateInDownRight","rotateInUpLeft","rotateInUpRight","rotateOut","rotateOutDownLeft","rotateOutDownRight","rotateOutUpLeft","rotateOutUpRight","slideInUp","slideInDown","slideInLeft","slideInRight","slideOutUp","slideOutDown","slideOutLeft","slideOutRight","zoomIn","zoomInDown","zoomInLeft","zoomInRight","zoomInUp","zoomOut","zoomOutDown","zoomOutLeft","zoomOutRight","zoomOutUp","hinge","jackInTheBox","rollIn","rollOut"];$.each(animations,function(index,animation){$('.wp-'+animation).attr('data-wp-animation',animation);});for(var x=1;x<=5;x++){if($('.wp-animation').hasClass('wp-delay-'+x)||$('.animated').hasClass('wp-delay-'+x)){$('.wp-delay-'+x).attr('data-wp-animation-delay',x+'s');}}});
$=jQuery;$(document).ready(function(){function onScrollInit(items,trigger){items.each(function(){var wpElement=$(this),wpAnimationClass=wpElement.attr('data-wp-animation');wpAnimationDelay=wpElement.attr('data-wp-animation-delay');wpElement.css({'-webkit-animation-delay':wpAnimationDelay,'-moz-animation-delay':wpAnimationDelay,'animation-delay':wpAnimationDelay});var wpTrigger=(trigger)?trigger:wpElement;wpTrigger.waypoint(function(){wpElement.addClass('animated').addClass(wpAnimationClass);},{triggerOnce:false,offset:'90%'});});}
onScrollInit($('.wp-animation'));onScrollInit($('.wp-staggered-animation'),$('.wp-staggered-animation-container'));});
function catapultSetCookie(cookieName,cookieValue,nDays){var today=new Date();var expire=new Date();if(nDays==null||nDays==0)nDays=1;expire.setTime(today.getTime()+3600000*24*nDays);document.cookie=cookieName+"="+escape(cookieValue)+";expires="+expire.toGMTString()+"; path=/";}
function catapultReadCookie(cookieName){var theCookie=" "+document.cookie;var ind=theCookie.indexOf(" "+cookieName+"=");if(ind==-1)ind=theCookie.indexOf(";"+cookieName+"=");if(ind==-1||cookieName=="")return"";var ind1=theCookie.indexOf(";",ind+1);if(ind1==-1)ind1=theCookie.length;return ctcc_vars.version==unescape(theCookie.substring(ind+cookieName.length+2,ind1));}
function catapultDeleteCookie(cookieName){document.cookie=cookieName+'=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/';}
function catapultAcceptCookies(){catapultSetCookie('catAccCookies',ctcc_vars.version,ctcc_vars.expiry);jQuery("html").removeClass('has-cookie-bar');jQuery("html").css("margin-top","0");jQuery("#catapult-cookie-bar").fadeOut();}
function ctccCloseNotification(){catapultAcceptCookies();}
function ctccFirstPage(){if(ctcc_vars.method){catapultSetCookie('catAccCookies',ctcc_vars.version,ctcc_vars.expiry);}}
jQuery(document).ready(function($){$('.x_close').on('click',function(){catapultAcceptCookies();});});
jQuery(function(e){if("undefined"==typeof wc_single_product_params)return!1;e("body").on("init",".wc-tabs-wrapper, .woocommerce-tabs",function(){e(".wc-tab, .woocommerce-tabs .panel:not(.panel .panel)").hide();var t=window.location.hash,i=window.location.href,o=e(this).find(".wc-tabs, ul.tabs").first();t.toLowerCase().indexOf("comment-")>=0||"#reviews"===t||"#tab-reviews"===t?o.find("li.reviews_tab a").click():i.indexOf("comment-page-")>0||i.indexOf("cpage=")>0?o.find("li.reviews_tab a").click():"#tab-additional_information"===t?o.find("li.additional_information_tab a").click():o.find("li:first a").click()}).on("click",".wc-tabs li a, ul.tabs li a",function(t){t.preventDefault();var i=e(this),o=i.closest(".wc-tabs-wrapper, .woocommerce-tabs");o.find(".wc-tabs, ul.tabs").find("li").removeClass("active"),o.find(".wc-tab, .panel:not(.panel .panel)").hide(),i.closest("li").addClass("active"),o.find(i.attr("href")).show()}).on("click","a.woocommerce-review-link",function(){return e(".reviews_tab a").click(),!0}).on("init","#rating",function(){e("#rating").hide().before('<p class="stars"><span><a class="star-1" href="#">1</a><a class="star-2" href="#">2</a><a class="star-3" href="#">3</a><a class="star-4" href="#">4</a><a class="star-5" href="#">5</a></span></p>')}).on("click","#respond p.stars a",function(){var t=e(this),i=e(this).closest("#respond").find("#rating"),o=e(this).closest(".stars");return i.val(t.text()),t.siblings("a").removeClass("active"),t.addClass("active"),o.addClass("selected"),!1}).on("click","#respond #submit",function(){var t=e(this).closest("#respond").find("#rating"),i=t.val();if(t.length>0&&!i&&"yes"===wc_single_product_params.review_rating_required)return window.alert(wc_single_product_params.i18n_required_rating_text),!1}),e(".wc-tabs-wrapper, .woocommerce-tabs, #rating").trigger("init");var t=function(t,i){this.$target=t,this.$images=e(".woocommerce-product-gallery__image",t),0!==this.$images.length?(t.data("product_gallery",this),this.flexslider_enabled=e.isFunction(e.fn.flexslider)&&wc_single_product_params.flexslider_enabled,this.zoom_enabled=e.isFunction(e.fn.zoom)&&wc_single_product_params.zoom_enabled,this.photoswipe_enabled="undefined"!=typeof PhotoSwipe&&wc_single_product_params.photoswipe_enabled,i&&(this.flexslider_enabled=!1!==i.flexslider_enabled&&this.flexslider_enabled,this.zoom_enabled=!1!==i.zoom_enabled&&this.zoom_enabled,this.photoswipe_enabled=!1!==i.photoswipe_enabled&&this.photoswipe_enabled),1===this.$images.length&&(this.flexslider_enabled=!1),this.initFlexslider=this.initFlexslider.bind(this),this.initZoom=this.initZoom.bind(this),this.initZoomForTarget=this.initZoomForTarget.bind(this),this.initPhotoswipe=this.initPhotoswipe.bind(this),this.onResetSlidePosition=this.onResetSlidePosition.bind(this),this.getGalleryItems=this.getGalleryItems.bind(this),this.openPhotoswipe=this.openPhotoswipe.bind(this),this.flexslider_enabled?(this.initFlexslider(),t.on("woocommerce_gallery_reset_slide_position",this.onResetSlidePosition)):this.$target.css("opacity",1),this.zoom_enabled&&(this.initZoom(),t.on("woocommerce_gallery_init_zoom",this.initZoom)),this.photoswipe_enabled&&this.initPhotoswipe()):this.$target.css("opacity",1)};t.prototype.initFlexslider=function(){var t=this.$target,i=this,o=e.extend({selector:".woocommerce-product-gallery__wrapper > .woocommerce-product-gallery__image",start:function(){t.css("opacity",1)},after:function(e){i.initZoomForTarget(i.$images.eq(e.currentSlide))}},wc_single_product_params.flexslider);t.flexslider(o),e(".woocommerce-product-gallery__wrapper .woocommerce-product-gallery__image:eq(0) .wp-post-image").one("load",function(){var t=e(this);t&&setTimeout(function(){var e=t.closest(".woocommerce-product-gallery__image").height(),i=t.closest(".flex-viewport");e&&i&&i.height(e)},100)}).each(function(){this.complete&&e(this).trigger("load")})},t.prototype.initZoom=function(){this.initZoomForTarget(this.$images.first())},t.prototype.initZoomForTarget=function(t){if(!this.zoom_enabled)return!1;var i=this.$target.width(),o=!1;if(e(t).each(function(t,a){if(e(a).find("img").data("large_image_width")>i)return o=!0,!1}),o){var a=e.extend({touch:!1},wc_single_product_params.zoom_options);"ontouchstart"in window&&(a.on="click"),t.trigger("zoom.destroy"),t.zoom(a)}},t.prototype.initPhotoswipe=function(){this.zoom_enabled&&this.$images.length>0&&(this.$target.prepend('<a href="#" class="woocommerce-product-gallery__trigger">🔍</a>'),this.$target.on("click",".woocommerce-product-gallery__trigger",this.openPhotoswipe)),this.$target.on("click",".woocommerce-product-gallery__image a",this.openPhotoswipe)},t.prototype.onResetSlidePosition=function(){this.$target.flexslider(0)},t.prototype.getGalleryItems=function(){var t=this.$images,i=[];return t.length>0&&t.each(function(t,o){var a=e(o).find("img"),s={src:a.attr("data-large_image"),w:a.attr("data-large_image_width"),h:a.attr("data-large_image_height"),title:a.attr("data-caption")?a.attr("data-caption"):a.attr("title")};i.push(s)}),i},t.prototype.openPhotoswipe=function(t){t.preventDefault();var i,o=e(".pswp")[0],a=this.getGalleryItems(),s=e(t.target);i=s.is(".woocommerce-product-gallery__trigger")||s.is(".woocommerce-product-gallery__trigger img")?this.$target.find(".flex-active-slide"):s.closest(".woocommerce-product-gallery__image");var r=e.extend({index:e(i).index()},wc_single_product_params.photoswipe_options);new PhotoSwipe(o,PhotoSwipeUI_Default,a,r).init()},e.fn.wc_product_gallery=function(e){return new t(this,e),this},e(".woocommerce-product-gallery").each(function(){e(this).wc_product_gallery()})});
/*!
 * jQuery blockUI plugin
 * Version 2.70.0-2014.11.23
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */
!function(){"use strict";function e(e){function t(t,n){var s,h,k=t==window,y=n&&n.message!==undefined?n.message:undefined;if(!(n=e.extend({},e.blockUI.defaults,n||{})).ignoreIfBlocked||!e(t).data("blockUI.isBlocked")){if(n.overlayCSS=e.extend({},e.blockUI.defaults.overlayCSS,n.overlayCSS||{}),s=e.extend({},e.blockUI.defaults.css,n.css||{}),n.onOverlayClick&&(n.overlayCSS.cursor="pointer"),h=e.extend({},e.blockUI.defaults.themedCSS,n.themedCSS||{}),y=y===undefined?n.message:y,k&&p&&o(window,{fadeOut:0}),y&&"string"!=typeof y&&(y.parentNode||y.jquery)){var m=y.jquery?y[0]:y,g={};e(t).data("blockUI.history",g),g.el=m,g.parent=m.parentNode,g.display=m.style.display,g.position=m.style.position,g.parent&&g.parent.removeChild(m)}e(t).data("blockUI.onUnblock",n.onUnblock);var v,I,w,U,x=n.baseZ;v=e(r||n.forceIframe?'<iframe class="blockUI" style="z-index:'+x+++';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+n.iframeSrc+'"></iframe>':'<div class="blockUI" style="display:none"></div>'),I=e(n.theme?'<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+x+++';display:none"></div>':'<div class="blockUI blockOverlay" style="z-index:'+x+++';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'),n.theme&&k?(U='<div class="blockUI '+n.blockMsgClass+' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(x+10)+';display:none;position:fixed">',n.title&&(U+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(n.title||"&nbsp;")+"</div>"),U+='<div class="ui-widget-content ui-dialog-content"></div>',U+="</div>"):n.theme?(U='<div class="blockUI '+n.blockMsgClass+' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(x+10)+';display:none;position:absolute">',n.title&&(U+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(n.title||"&nbsp;")+"</div>"),U+='<div class="ui-widget-content ui-dialog-content"></div>',U+="</div>"):U=k?'<div class="blockUI '+n.blockMsgClass+' blockPage" style="z-index:'+(x+10)+';display:none;position:fixed"></div>':'<div class="blockUI '+n.blockMsgClass+' blockElement" style="z-index:'+(x+10)+';display:none;position:absolute"></div>',w=e(U),y&&(n.theme?(w.css(h),w.addClass("ui-widget-content")):w.css(s)),n.theme||I.css(n.overlayCSS),I.css("position",k?"fixed":"absolute"),(r||n.forceIframe)&&v.css("opacity",0);var C=[v,I,w],S=e(k?"body":t);e.each(C,function(){this.appendTo(S)}),n.theme&&n.draggable&&e.fn.draggable&&w.draggable({handle:".ui-dialog-titlebar",cancel:"li"});var O=f&&(!e.support.boxModel||e("object,embed",k?null:t).length>0);if(u||O){if(k&&n.allowBodyStretch&&e.support.boxModel&&e("html,body").css("height","100%"),(u||!e.support.boxModel)&&!k)var E=a(t,"borderTopWidth"),T=a(t,"borderLeftWidth"),M=E?"(0 - "+E+")":0,B=T?"(0 - "+T+")":0;e.each(C,function(e,t){var o=t[0].style;if(o.position="absolute",e<2)k?o.setExpression("height","Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:"+n.quirksmodeOffsetHack+') + "px"'):o.setExpression("height",'this.parentNode.offsetHeight + "px"'),k?o.setExpression("width",'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"'):o.setExpression("width",'this.parentNode.offsetWidth + "px"'),B&&o.setExpression("left",B),M&&o.setExpression("top",M);else if(n.centerY)k&&o.setExpression("top",'(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'),o.marginTop=0;else if(!n.centerY&&k){var i="((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "+(n.css&&n.css.top?parseInt(n.css.top,10):0)+') + "px"';o.setExpression("top",i)}})}if(y&&(n.theme?w.find(".ui-widget-content").append(y):w.append(y),(y.jquery||y.nodeType)&&e(y).show()),(r||n.forceIframe)&&n.showOverlay&&v.show(),n.fadeIn){var j=n.onBlock?n.onBlock:c,H=n.showOverlay&&!y?j:c,z=y?j:c;n.showOverlay&&I._fadeIn(n.fadeIn,H),y&&w._fadeIn(n.fadeIn,z)}else n.showOverlay&&I.show(),y&&w.show(),n.onBlock&&n.onBlock.bind(w)();if(i(1,t,n),k?(p=w[0],b=e(n.focusableElements,p),n.focusInput&&setTimeout(l,20)):d(w[0],n.centerX,n.centerY),n.timeout){var W=setTimeout(function(){k?e.unblockUI(n):e(t).unblock(n)},n.timeout);e(t).data("blockUI.timeout",W)}}}function o(t,o){var s,l=t==window,d=e(t),a=d.data("blockUI.history"),c=d.data("blockUI.timeout");c&&(clearTimeout(c),d.removeData("blockUI.timeout")),o=e.extend({},e.blockUI.defaults,o||{}),i(0,t,o),null===o.onUnblock&&(o.onUnblock=d.data("blockUI.onUnblock"),d.removeData("blockUI.onUnblock"));var r;r=l?e(document.body).children().filter(".blockUI").add("body > .blockUI"):d.find(">.blockUI"),o.cursorReset&&(r.length>1&&(r[1].style.cursor=o.cursorReset),r.length>2&&(r[2].style.cursor=o.cursorReset)),l&&(p=b=null),o.fadeOut?(s=r.length,r.stop().fadeOut(o.fadeOut,function(){0==--s&&n(r,a,o,t)})):n(r,a,o,t)}function n(t,o,n,i){var s=e(i);if(!s.data("blockUI.isBlocked")){t.each(function(e,t){this.parentNode&&this.parentNode.removeChild(this)}),o&&o.el&&(o.el.style.display=o.display,o.el.style.position=o.position,o.el.style.cursor="default",o.parent&&o.parent.appendChild(o.el),s.removeData("blockUI.history")),s.data("blockUI.static")&&s.css("position","static"),"function"==typeof n.onUnblock&&n.onUnblock(i,n);var l=e(document.body),d=l.width(),a=l[0].style.width;l.width(d-1).width(d),l[0].style.width=a}}function i(t,o,n){var i=o==window,l=e(o);if((t||(!i||p)&&(i||l.data("blockUI.isBlocked")))&&(l.data("blockUI.isBlocked",t),i&&n.bindEvents&&(!t||n.showOverlay))){var d="mousedown mouseup keydown keypress keyup touchstart touchend touchmove";t?e(document).bind(d,n,s):e(document).unbind(d,s)}}function s(t){if("keydown"===t.type&&t.keyCode&&9==t.keyCode&&p&&t.data.constrainTabKey){var o=b,n=!t.shiftKey&&t.target===o[o.length-1],i=t.shiftKey&&t.target===o[0];if(n||i)return setTimeout(function(){l(i)},10),!1}var s=t.data,d=e(t.target);return d.hasClass("blockOverlay")&&s.onOverlayClick&&s.onOverlayClick(t),d.parents("div."+s.blockMsgClass).length>0||0===d.parents().children().filter("div.blockUI").length}function l(e){if(b){var t=b[!0===e?b.length-1:0];t&&t.focus()}}function d(e,t,o){var n=e.parentNode,i=e.style,s=(n.offsetWidth-e.offsetWidth)/2-a(n,"borderLeftWidth"),l=(n.offsetHeight-e.offsetHeight)/2-a(n,"borderTopWidth");t&&(i.left=s>0?s+"px":"0"),o&&(i.top=l>0?l+"px":"0")}function a(t,o){return parseInt(e.css(t,o),10)||0}e.fn._fadeIn=e.fn.fadeIn;var c=e.noop||function(){},r=/MSIE/.test(navigator.userAgent),u=/MSIE 6.0/.test(navigator.userAgent)&&!/MSIE 8.0/.test(navigator.userAgent),f=(document.documentMode,e.isFunction(document.createElement("div").style.setExpression));e.blockUI=function(e){t(window,e)},e.unblockUI=function(e){o(window,e)},e.growlUI=function(t,o,n,i){var s=e('<div class="growlUI"></div>');t&&s.append("<h1>"+t+"</h1>"),o&&s.append("<h2>"+o+"</h2>"),n===undefined&&(n=3e3);var l=function(t){t=t||{},e.blockUI({message:s,fadeIn:"undefined"!=typeof t.fadeIn?t.fadeIn:700,fadeOut:"undefined"!=typeof t.fadeOut?t.fadeOut:1e3,timeout:"undefined"!=typeof t.timeout?t.timeout:n,centerY:!1,showOverlay:!1,onUnblock:i,css:e.blockUI.defaults.growlCSS})};l();s.css("opacity");s.mouseover(function(){l({fadeIn:0,timeout:3e4});var t=e(".blockMsg");t.stop(),t.fadeTo(300,1)}).mouseout(function(){e(".blockMsg").fadeOut(1e3)})},e.fn.block=function(o){if(this[0]===window)return e.blockUI(o),this;var n=e.extend({},e.blockUI.defaults,o||{});return this.each(function(){var t=e(this);n.ignoreIfBlocked&&t.data("blockUI.isBlocked")||t.unblock({fadeOut:0})}),this.each(function(){"static"==e.css(this,"position")&&(this.style.position="relative",e(this).data("blockUI.static",!0)),this.style.zoom=1,t(this,o)})},e.fn.unblock=function(t){return this[0]===window?(e.unblockUI(t),this):this.each(function(){o(this,t)})},e.blockUI.version=2.7,e.blockUI.defaults={message:"<h1>Please wait...</h1>",title:null,draggable:!0,theme:!1,css:{padding:0,margin:0,width:"30%",top:"40%",left:"35%",textAlign:"center",color:"#000",border:"3px solid #aaa",backgroundColor:"#fff",cursor:"wait"},themedCSS:{width:"30%",top:"40%",left:"35%"},overlayCSS:{backgroundColor:"#000",opacity:.6,cursor:"wait"},cursorReset:"default",growlCSS:{width:"350px",top:"10px",left:"",right:"10px",border:"none",padding:"5px",opacity:.6,cursor:"default",color:"#fff",backgroundColor:"#000","-webkit-border-radius":"10px","-moz-border-radius":"10px","border-radius":"10px"},iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",forceIframe:!1,baseZ:1e3,centerX:!0,centerY:!0,allowBodyStretch:!0,bindEvents:!0,constrainTabKey:!0,fadeIn:200,fadeOut:400,timeout:0,showOverlay:!0,focusInput:!0,focusableElements:":input:enabled:visible",onBlock:null,onUnblock:null,onOverlayClick:null,quirksmodeOffsetHack:4,blockMsgClass:"blockMsg",ignoreIfBlocked:!1};var p=null,b=[]}"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],e):e(jQuery)}();
/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
!function(e){var n=!1;if("function"==typeof define&&define.amd&&(define(e),n=!0),"object"==typeof exports&&(module.exports=e(),n=!0),!n){var o=window.Cookies,t=window.Cookies=e();t.noConflict=function(){return window.Cookies=o,t}}}(function(){function e(){for(var e=0,n={};e<arguments.length;e++){var o=arguments[e];for(var t in o)n[t]=o[t]}return n}function n(o){function t(n,r,i){var c;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(i=e({path:"/"},t.defaults,i)).expires){var a=new Date;a.setMilliseconds(a.getMilliseconds()+864e5*i.expires),i.expires=a}i.expires=i.expires?i.expires.toUTCString():"";try{c=JSON.stringify(r),/^[\{\[]/.test(c)&&(r=c)}catch(m){}r=o.write?o.write(r,n):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=(n=(n=encodeURIComponent(String(n))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var f="";for(var s in i)i[s]&&(f+="; "+s,!0!==i[s]&&(f+="="+i[s]));return document.cookie=n+"="+r+f}n||(c={});for(var p=document.cookie?document.cookie.split("; "):[],d=/(%[0-9A-Z]{2})+/g,u=0;u<p.length;u++){var l=p[u].split("="),C=l.slice(1).join("=");'"'===C.charAt(0)&&(C=C.slice(1,-1));try{var g=l[0].replace(d,decodeURIComponent);if(C=o.read?o.read(C,g):o(C,g)||C.replace(d,decodeURIComponent),this.json)try{C=JSON.parse(C)}catch(m){}if(n===g){c=C;break}n||(c[g]=C)}catch(m){}}return c}}return t.set=t,t.get=function(e){return t.call(t,e)},t.getJSON=function(){return t.apply({json:!0},[].slice.call(arguments))},t.defaults={},t.remove=function(n,o){t(n,"",e(o,{expires:-1}))},t.withConverter=n,t}return n(function(){})});
jQuery(function(o){o(".woocommerce-ordering").on("change","select.orderby",function(){o(this).closest("form").submit()}),o("input.qty:not(.product-quantity input.qty)").each(function(){var e=parseFloat(o(this).attr("min"));e>=0&&parseFloat(o(this).val())<e&&o(this).val(e)}),jQuery(".woocommerce-store-notice__dismiss-link").click(function(){Cookies.set("store_notice","hidden",{path:"/"}),jQuery(".woocommerce-store-notice").hide()}),"hidden"===Cookies.get("store_notice")?jQuery(".woocommerce-store-notice").hide():jQuery(".woocommerce-store-notice").show()});
jQuery(function(e){function t(){o&&sessionStorage.setItem("wc_cart_created",(new Date).getTime())}function n(e){o&&(localStorage.setItem(a,e),sessionStorage.setItem(a,e))}function r(){e.ajax(s)}if("undefined"==typeof wc_cart_fragments_params)return!1;var o=!0,a=wc_cart_fragments_params.cart_hash_key;try{o="sessionStorage"in window&&null!==window.sessionStorage,window.sessionStorage.setItem("wc","test"),window.sessionStorage.removeItem("wc"),window.localStorage.setItem("wc","test"),window.localStorage.removeItem("wc")}catch(w){o=!1}var s={url:wc_cart_fragments_params.wc_ajax_url.toString().replace("%%endpoint%%","get_refreshed_fragments"),type:"POST",success:function(r){r&&r.fragments&&(e.each(r.fragments,function(t,n){e(t).replaceWith(n)}),o&&(sessionStorage.setItem(wc_cart_fragments_params.fragment_name,JSON.stringify(r.fragments)),n(r.cart_hash),r.cart_hash&&t()),e(document.body).trigger("wc_fragments_refreshed"))}};if(o){var i=null;e(document.body).on("wc_fragment_refresh updated_wc_div",function(){r()}),e(document.body).on("added_to_cart removed_from_cart",function(e,r,o){var s=sessionStorage.getItem(a);null!==s&&s!==undefined&&""!==s||t(),sessionStorage.setItem(wc_cart_fragments_params.fragment_name,JSON.stringify(r)),n(o)}),e(document.body).on("wc_fragments_refreshed",function(){clearTimeout(i),i=setTimeout(r,864e5)}),e(window).on("storage onstorage",function(e){a===e.originalEvent.key&&localStorage.getItem(a)!==sessionStorage.getItem(a)&&r()}),e(window).on("pageshow",function(t){t.originalEvent.persisted&&(e(".widget_shopping_cart_content").empty(),e(document.body).trigger("wc_fragment_refresh"))});try{var c=e.parseJSON(sessionStorage.getItem(wc_cart_fragments_params.fragment_name)),_=sessionStorage.getItem(a),g=Cookies.get("woocommerce_cart_hash"),m=sessionStorage.getItem("wc_cart_created");if(null!==_&&_!==undefined&&""!==_||(_=""),null!==g&&g!==undefined&&""!==g||(g=""),_&&(null===m||m===undefined||""===m))throw"No cart_created";if(m){var d=1*m+864e5,f=(new Date).getTime();if(d<f)throw"Fragment expired";i=setTimeout(r,d-f)}if(!c||!c["div.widget_shopping_cart_content"]||_!==g)throw"No fragment";e.each(c,function(t,n){e(t).replaceWith(n)}),e(document.body).trigger("wc_fragments_loaded")}catch(w){r()}}else r();Cookies.get("woocommerce_items_in_cart")>0?e(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show():e(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").hide(),e(document.body).on("adding_to_cart",function(){e(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show()})});
(function($){"use strict";var selector='.aws-container';var instance=0;var pluginPfx='aws_opts';var translate={sale:aws_vars.sale,noresults:aws_vars.noresults};$.fn.aws_search=function(options){var methods={init:function(){$('body').append('<div id="aws-search-result-'+instance+'" class="aws-search-result" style="display: none;"></div>');methods.mobileClasses();setTimeout(function(){methods.resultLayout();},500);},onKeyup:function(e){searchFor=$searchField.val();searchFor=searchFor.trim();searchFor=searchFor.replace(/<>\{\}\[\]\\\/]/gi,'');searchFor=searchFor.replace(/\s\s+/g,' ');for(var i=0;i<requests.length;i++){requests[i].abort();}
if(d.showPage=='ajax_off'){return;}
if(searchFor===''){$(d.resultBlock).html('').hide();methods.hideLoader();methods.resultsHide();return;}
if(typeof cachedResponse[searchFor]!='undefined'){methods.showResults(cachedResponse[searchFor]);return;}
if(searchFor.length<d.minChars){$(d.resultBlock).html('');methods.hideLoader();return;}
if(d.showLoader){methods.showLoader();}
var data={action:'aws_action',keyword:searchFor,page:0};requests.push($.ajax({type:'POST',url:ajaxUrl,data:data,success:function(response){var response=$.parseJSON(response);cachedResponse[searchFor]=response;methods.showResults(response);methods.showResultsBlock();methods.analytics(searchFor);},error:function(data,dummy){}}));},showResults:function(response){var html='<ul>';if((typeof response.cats!=='undefined')&&response.cats.length>0){$.each(response.cats,function(i,result){html+='<li class="aws_result_item aws_result_cat">';html+='<a class="aws_result_link" href="'+result.link+'" >';html+='<span class="aws_result_content">';html+='<span class="aws_result_title">';html+=result.name;html+='<span class="aws_result_count"> ('+result.count+')</span>';html+='</span>';html+='</span>';html+='</a>';html+='</li>';});}
if((typeof response.tags!=='undefined')&&response.tags.length>0){$.each(response.tags,function(i,result){html+='<li class="aws_result_item aws_result_tag">';html+='<a class="aws_result_link" href="'+result.link+'" >';html+='<span class="aws_result_content">';html+='<span class="aws_result_title">';html+=result.name;html+='<span class="aws_result_count"> ('+result.count+')</span>';html+='</span>';html+='</span>';html+='</a>';html+='</li>';});}
if((typeof response.products!=='undefined')&&response.products.length>0){$.each(response.products,function(i,result){html+='<li class="aws_result_item">';html+='<a class="aws_result_link" href="'+result.link+'" >';if(result.image){html+='<span class="aws_result_image">';html+='<img src="'+result.image+'">';html+='</span>';}
html+='<span class="aws_result_content">';html+='<span class="aws_result_title">'+result.title+'</span>';if(result.stock_status){var statusClass=result.stock_status.status?'in':'out';html+='<span class="aws_result_stock '+statusClass+'">';html+=result.stock_status.text;html+='</span>';}
if(result.sku){html+='<span class="aws_result_sku">SKU: '+result.sku+'</span>';}
if(result.excerpt){html+='<span class="aws_result_excerpt">'+result.excerpt+'</span>';}
if(result.price){html+='<span class="aws_result_price">'+result.price+'</span>';}
html+='</span>';if(result.on_sale){html+='<span class="aws_result_sale">';html+='<span class="aws_onsale">'+translate.sale+'</span>';html+='</span>';}
html+='</a>';html+='</li>';});}
if((typeof response.cats!=='undefined')&&response.cats.length<=0&&(typeof response.tags!=='undefined')&&response.tags.length<=0&&(typeof response.products!=='undefined')&&response.products.length<=0){html+='<li class="aws_result_item aws_no_result">'+translate.noresults+'</li>';}
html+='</ul>';methods.hideLoader();$(d.resultBlock).html(html);methods.showResultsBlock();},showResultsBlock:function(){methods.resultLayout();methods.resultsShow();},showLoader:function(){$searchForm.addClass('aws-processing');},hideLoader:function(){$searchForm.removeClass('aws-processing');},resultsShow:function(){$(d.resultBlock).show();$searchForm.addClass('aws-form-active');},resultsHide:function(){$(d.resultBlock).hide();$searchForm.removeClass('aws-form-active');},onFocus:function(event){if(searchFor!==''){methods.showResultsBlock();}},hideResults:function(event){if(!$(event.target).closest(".aws-container").length){methods.resultsHide();}},isResultsVisible:function(){return $(d.resultBlock).is(":visible");},removeHovered:function(){$(d.resultBlock).find('.aws_result_item').removeClass('hovered');},resultLayout:function(){var offset=self.offset();var bodyOffset=$('body').offset();var bodyPosition=$('body').css('position');if(offset&&bodyOffset){var width=self.outerWidth();var top=0;var left=0;if(bodyPosition==='relative'){top=offset.top+$(self).innerHeight()-bodyOffset.top;left=offset.left-bodyOffset.left;}else{top=offset.top+$(self).innerHeight();left=offset.left;}
$(d.resultBlock).css({width:width,top:top,left:left});}},analytics:function(label){if(d.useAnalytics){try{ga('send','event','AWS search','AWS Search Term',label);}
catch(error){}}},mobileClasses:function(){if(methods.isMobile()){$searchForm.addClass('aws-show-clear');}},isMobile:function(){var check=false;(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check=true;})(navigator.userAgent||navigator.vendor||window.opera);return check;}};var self=$(this),$searchForm=self.find('.aws-search-form'),$searchField=self.find('.aws-search-field'),haveResults=false,requests=Array(),searchFor='',cachedResponse=new Array();var ajaxUrl=(self.data('url')!==undefined)?self.data('url'):false;if(options==='relayout'){var d=self.data(pluginPfx);methods.resultLayout();return;}
instance++;self.data(pluginPfx,{minChars:(self.data('min-chars')!==undefined)?self.data('min-chars'):1,showLoader:(self.data('show-loader')!==undefined)?self.data('show-loader'):true,showPage:(self.data('show-page')!==undefined)?self.data('show-page'):true,useAnalytics:(self.data('use-analytics')!==undefined)?self.data('use-analytics'):false,instance:instance,resultBlock:'#aws-search-result-'+instance});var d=self.data(pluginPfx);if($searchForm.length>0){methods.init.call(this);}
$searchField.on('keyup',function(e){if(e.keyCode!=40&&e.keyCode!=38){methods.onKeyup(e);}});$searchField.on('focus',function(e){methods.onFocus(e);});$searchForm.on('keypress',function(e){if(e.keyCode==13&&!d.showPage){e.preventDefault();}});$searchForm.find('.aws-search-clear').on('click',function(e){$searchField.val('');$searchField.focus();methods.resultsHide();$(d.resultBlock).html('');searchFor='';});$(document).on('click',function(e){methods.hideResults(e);});$(window).on('resize',function(e){methods.resultLayout();});$(window).on('scroll',function(e){if($(d.resultBlock).css('display')=='block'){methods.resultLayout();}});$(d.resultBlock).on('mouseenter','.aws_result_item',function(){methods.removeHovered();$(this).addClass('hovered');$searchField.trigger('mouseenter');});$(d.resultBlock).on('mouseleave','.aws_result_item',function(){methods.removeHovered();});$(window).on('keydown',function(e){if(e.keyCode==40||e.keyCode==38){if(methods.isResultsVisible()){e.stopPropagation();e.preventDefault();var $item=$(d.resultBlock).find('.aws_result_item');var $hoveredItem=$(d.resultBlock).find('.aws_result_item.hovered');var $itemsList=$(d.resultBlock).find('ul');if(e.keyCode==40){if($hoveredItem.length>0){methods.removeHovered();$hoveredItem.next().addClass('hovered');}else{$item.first().addClass('hovered');}}
if(e.keyCode==38){if($hoveredItem.length>0){methods.removeHovered();$hoveredItem.prev().addClass('hovered');}else{$item.last().addClass('hovered');}}
var scrolledTop=$itemsList.scrollTop();var position=$(d.resultBlock).find('.aws_result_item.hovered').position();if(position){$itemsList.scrollTop(position.top+scrolledTop)}}}});};$(document).ready(function(){$(selector).each(function(){$(this).aws_search();});});})(jQuery);
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(e){var t,n,i,s,o,a,r="Close",c="BeforeClose",l="AfterClose",p="BeforeAppend",d="MarkupParse",f="Open",u="Change",m="ytc-mfp",h="."+m,y="ytc-mfp-ready",g="ytc-mfp-removing",v="ytc-mfp-prevent-close",b=function(){},C=!!window.jQuery,O=e(window),x=function(e,n){t.ev.on(m+e+h,n)},w=function(t,n,i,s){var o=document.createElement("div");return o.className="ytc-mfp-"+t,i&&(o.innerHTML=i),s?n&&n.appendChild(o):(o=e(o),n&&o.appendTo(n)),o},P=function(n,i){t.ev.triggerHandler(m+n,i),t.st.callbacks&&(n=n.charAt(0).toLowerCase()+n.slice(1),t.st.callbacks[n]&&t.st.callbacks[n].apply(t,e.isArray(i)?i:[i]))},k=function(n){return n===a&&t.currTemplate.closeBtn||(t.currTemplate.closeBtn=e(t.st.closeMarkup.replace("%title%",t.st.tClose)),a=n),t.currTemplate.closeBtn},I=function(){e.magnificPopupAU.instance||(t=new b,t.init(),e.magnificPopupAU.instance=t)},E=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1};b.prototype={constructor:b,init:function(){var n=navigator.appVersion;t.isIE7=-1!==n.indexOf("MSIE 7."),t.isIE8=-1!==n.indexOf("MSIE 8."),t.isLowIE=t.isIE7||t.isIE8,t.isAndroid=/android/gi.test(n),t.isIOS=/iphone|ipad|ipod/gi.test(n),t.supportsTransition=E(),t.probablyMobile=t.isAndroid||t.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),i=e(document),t.popupsCache={}},open:function(n){var s;if(n.isObj===!1){t.items=n.items.toArray(),t.index=0;var a,r=n.items;for(s=0;s<r.length;s++)if(a=r[s],a.parsed&&(a=a.el[0]),a===n.el[0]){t.index=s;break}}else t.items=e.isArray(n.items)?n.items:[n.items],t.index=n.index||0;if(t.isOpen)return void t.updateItemHTML();t.types=[],o="",t.ev=n.mainEl&&n.mainEl.length?n.mainEl.eq(0):i,n.key?(t.popupsCache[n.key]||(t.popupsCache[n.key]={}),t.currTemplate=t.popupsCache[n.key]):t.currTemplate={},t.st=e.extend(!0,{},e.magnificPopupAU.defaults,n),t.fixedContentPos="auto"===t.st.fixedContentPos?!t.probablyMobile:t.st.fixedContentPos,t.st.modal&&(t.st.closeOnContentClick=!1,t.st.closeOnBgClick=!1,t.st.showCloseBtn=!1,t.st.enableEscapeKey=!1),t.bgOverlay||(t.bgOverlay=w("bg").on("click"+h,function(){t.close()}),t.wrap=w("wrap").attr("tabindex",-1).on("click"+h,function(e){t._checkIfClose(e.target)&&t.close()}),t.container=w("container",t.wrap)),t.contentContainer=w("content"),t.st.preloader&&(t.preloader=w("preloader",t.container,t.st.tLoading));var c=e.magnificPopupAU.modules;for(s=0;s<c.length;s++){var l=c[s];l=l.charAt(0).toUpperCase()+l.slice(1),t["init"+l].call(t)}P("BeforeOpen"),t.st.showCloseBtn&&(t.st.closeBtnInside?(x(d,function(e,t,n,i){n.close_replaceWith=k(i.type)}),o+=" ytc-mfp-close-btn-in"):t.wrap.append(k())),t.st.alignTop&&(o+=" ytc-mfp-align-top"),t.wrap.css(t.fixedContentPos?{overflow:t.st.overflowY,overflowX:"hidden",overflowY:t.st.overflowY}:{top:O.scrollTop(),position:"absolute"}),(t.st.fixedBgPos===!1||"auto"===t.st.fixedBgPos&&!t.fixedContentPos)&&t.bgOverlay.css({height:i.height(),position:"absolute"}),t.st.enableEscapeKey&&i.on("keyup"+h,function(e){27===e.keyCode&&t.close()}),O.on("resize"+h,function(){t.updateSize()}),t.st.closeOnContentClick||(o+=" ytc-mfp-auto-cursor"),o&&t.wrap.addClass(o);var p=t.wH=O.height(),u={};if(t.fixedContentPos&&t._hasScrollBar(p)){var m=t._getScrollbarSize();m&&(u.marginRight=m)}t.fixedContentPos&&(t.isIE7?e("body, html").css("overflow","hidden"):u.overflow="hidden");var g=t.st.mainClass;return t.isIE7&&(g+=" ytc-mfp-ie7"),g&&t._addClassToMFP(g),t.updateItemHTML(),P("BuildControls"),e("html").css(u),t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo||e(document.body)),t._lastFocusedEl=document.activeElement,setTimeout(function(){t.content?(t._addClassToMFP(y),t._setFocus()):t.bgOverlay.addClass(y),i.on("focusin"+h,t._onFocusIn)},16),t.isOpen=!0,t.updateSize(p),P(f),n},close:function(){t.isOpen&&(P(c),t.isOpen=!1,t.st.removalDelay&&!t.isLowIE&&t.supportsTransition?(t._addClassToMFP(g),setTimeout(function(){t._close()},t.st.removalDelay)):t._close())},_close:function(){P(r);var n=g+" "+y+" ";if(t.bgOverlay.detach(),t.wrap.detach(),t.container.empty(),t.st.mainClass&&(n+=t.st.mainClass+" "),t._removeClassFromMFP(n),t.fixedContentPos){var s={marginRight:""};t.isIE7?e("body, html").css("overflow",""):s.overflow="",e("html").css(s)}i.off("keyup"+h+" focusin"+h),t.ev.off(h),t.wrap.attr("class","ytc-mfp-wrap").removeAttr("style"),t.bgOverlay.attr("class","ytc-mfp-bg"),t.container.attr("class","ytc-mfp-container"),!t.st.showCloseBtn||t.st.closeBtnInside&&t.currTemplate[t.currItem.type]!==!0||t.currTemplate.closeBtn&&t.currTemplate.closeBtn.detach(),t._lastFocusedEl&&e(t._lastFocusedEl).focus(),t.currItem=null,t.content=null,t.currTemplate=null,t.prevHeight=0,P(l)},updateSize:function(e){if(t.isIOS){var n=document.documentElement.clientWidth/window.innerWidth,i=window.innerHeight*n;t.wrap.css("height",i),t.wH=i}else t.wH=e||O.height();t.fixedContentPos||t.wrap.css("height",t.wH),P("Resize")},updateItemHTML:function(){var n=t.items[t.index];t.contentContainer.detach(),t.content&&t.content.detach(),n.parsed||(n=t.parseEl(t.index));var i=n.type;if(P("BeforeChange",[t.currItem?t.currItem.type:"",i]),t.currItem=n,!t.currTemplate[i]){var o=t.st[i]?t.st[i].markup:!1;P("FirstMarkupParse",o),t.currTemplate[i]=o?e(o):!0}s&&s!==n.type&&t.container.removeClass("ytc-mfp-"+s+"-holder");var a=t["get"+i.charAt(0).toUpperCase()+i.slice(1)](n,t.currTemplate[i]);t.appendContent(a,i),n.preloaded=!0,P(u,n),s=n.type,t.container.prepend(t.contentContainer),P("AfterChange")},appendContent:function(e,n){t.content=e,e?t.st.showCloseBtn&&t.st.closeBtnInside&&t.currTemplate[n]===!0?t.content.find(".ytc-mfp-close").length||t.content.append(k()):t.content=e:t.content="",P(p),t.container.addClass("ytc-mfp-"+n+"-holder"),t.contentContainer.append(t.content)},parseEl:function(n){var i,s=t.items[n];if(s.tagName?s={el:e(s)}:(i=s.type,s={data:s,src:s.src}),s.el){for(var o=t.types,a=0;a<o.length;a++)if(s.el.hasClass("ytc-mfp-"+o[a])){i=o[a];break}s.src=s.el.attr("data-ytc-mfp-src"),s.src||(s.src=s.el.attr("href"))}return s.type=i||t.st.type||"inline",s.index=n,s.parsed=!0,t.items[n]=s,P("ElementParse",s),t.items[n]},addGroup:function(e,n){var i=function(i){i.mfpEl=this,t._openClick(i,e,n)};n||(n={});var s="click.magnificPopupAU";n.mainEl=e,n.items?(n.isObj=!0,e.off(s).on(s,i)):(n.isObj=!1,n.delegate?e.off(s).on(s,n.delegate,i):(n.items=e,e.off(s).on(s,i)))},_openClick:function(n,i,s){var o=void 0!==s.midClick?s.midClick:e.magnificPopupAU.defaults.midClick;if(o||!(2===n.which||n.ctrlKey||n.metaKey||n.altKey||n.shiftKey)){var a=void 0!==s.disableOn?s.disableOn:e.magnificPopupAU.defaults.disableOn;if(a)if(e.isFunction(a)){if(!a.call(t))return!0}else if(O.width()<a)return!0;n.type&&(n.preventDefault(),t.isOpen&&n.stopPropagation()),s.el=e(n.mfpEl),s.delegate&&(s.items=i.find(s.delegate)),t.open(s)}},updateStatus:function(e,i){if(t.preloader){n!==e&&t.container.removeClass("ytc-mfp-s-"+n),i||"loading"!==e||(i=t.st.tLoading);var s={status:e,text:i};P("UpdateStatus",s),e=s.status,i=s.text,t.preloader.html(i),t.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),t.container.addClass("ytc-mfp-s-"+e),n=e}},_checkIfClose:function(n){if(!e(n).hasClass(v)){var i=t.st.closeOnContentClick,s=t.st.closeOnBgClick;if(i&&s)return!0;if(!t.content||e(n).hasClass("ytc-mfp-close")||t.preloader&&n===t.preloader[0])return!0;if(n===t.content[0]||e.contains(t.content[0],n)){if(i)return!0}else if(s&&e.contains(document,n))return!0;return!1}},_addClassToMFP:function(e){t.bgOverlay.addClass(e),t.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),t.wrap.removeClass(e)},_hasScrollBar:function(e){return(t.isIE7?i.height():document.body.scrollHeight)>(e||O.height())},_setFocus:function(){(t.st.focus?t.content.find(t.st.focus).eq(0):t.wrap).focus()},_onFocusIn:function(n){return n.target===t.wrap[0]||e.contains(t.wrap[0],n.target)?void 0:(t._setFocus(),!1)},_parseMarkup:function(t,n,i){var s;i.data&&(n=e.extend(i.data,n)),P(d,[t,n,i]),e.each(n,function(e,n){if(void 0===n||n===!1)return!0;if(s=e.split("_"),s.length>1){var i=t.find(h+"-"+s[0]);if(i.length>0){var o=s[1];"replaceWith"===o?i[0]!==n[0]&&i.replaceWith(n):"img"===o?i.is("img")?i.attr("src",n):i.replaceWith('<img src="'+n+'" class="'+i.attr("class")+'" />'):i.attr(s[1],n)}}else t.find(h+"-"+e).html(n)})},_getScrollbarSize:function(){if(void 0===t.scrollbarSize){var e=document.createElement("div");e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),t.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return t.scrollbarSize}},e.magnificPopupAU={instance:null,proto:b.prototype,modules:[],open:function(t,n){return I(),t=t?e.extend(!0,{},t):{},t.isObj=!0,t.index=n||0,this.instance.open(t)},close:function(){return e.magnificPopupAU.instance&&e.magnificPopupAU.instance.close()},registerModule:function(t,n){n.options&&(e.magnificPopupAU.defaults[t]=n.options),e.extend(this.proto,n.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="ytc-mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},e.fn.magnificPopupAU=function(n){I();var i=e(this);if("string"==typeof n)if("open"===n){var s,o=C?i.data("magnificPopupAU"):i[0].magnificPopupAU,a=parseInt(arguments[1],10)||0;o.items?s=o.items[a]:(s=i,o.delegate&&(s=s.find(o.delegate)),s=s.eq(a)),t._openClick({mfpEl:s},i,o)}else t.isOpen&&t[n].apply(t,Array.prototype.slice.call(arguments,1));else n=e.extend(!0,{},n),C?i.data("magnificPopupAU",n):i[0].magnificPopupAU=n,t.addGroup(i,n);return i};var T="iframe",A="//about:blank",_=function(e){if(t.currTemplate[T]){var n=t.currTemplate[T].find("iframe");n.length&&(e||(n[0].src=A),t.isIE8&&n.css("display",e?"block":"none"))}};e.magnificPopupAU.registerModule(T,{options:{markup:'<div class="ytc-mfp-iframe-scaler"><div class="ytc-mfp-close"></div><iframe class="ytc-mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",rel:"rel=",modestbranding:"modestbranding=",theme:"theme=",controls:"controls=",playsinline:"playsinline=",enhanceprivacy:"enhanceprivacy=",src:"//www.youtube.com/embed/%id%?autoplay=1&rel=%rel%&modestbranding=%modestbranding%&controls=%controls%&playsinline=%playsinline%"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){t.types.push(T),x("BeforeChange",function(e,t,n){t!==n&&(t===T?_():n===T&&_(!0))}),x(r+"."+T,function(){_()})},getIframe:function(n,i){var s=n.src,o=n.src,a=n.src,r=n.src,c=n.src,l=t.st.iframe;e.each(l.patterns,function(){return s.indexOf(this.index)>-1?(this.enhanceprivacy&&"string"==typeof this.enhanceprivacy&&s.indexOf(this.enhanceprivacy)>0&&(enhancePrivacy=s.substr(s.lastIndexOf(this.enhanceprivacy)+this.enhanceprivacy.length,s.length),enhancePrivacy.indexOf("&")>0&&(enhancePrivacy=enhancePrivacy.substr(0,enhancePrivacy.indexOf("&"))),1==enhancePrivacy&&this.src.indexOf("youtube.com")>0&&(this.src=this.src.replace("youtube.com","youtube-nocookie.com"))),this.id&&("string"==typeof this.id?(s=s.substr(s.lastIndexOf(this.id)+this.id.length,s.length),s.indexOf("&")>0&&(s=s.substr(0,s.indexOf("&")))):s=this.id.call(this,s)),this.rel&&("string"==typeof this.rel&&o.indexOf(this.rel)>0?(o=o.substr(o.lastIndexOf(this.rel)+this.rel.length,o.length),o.indexOf("&")>0&&(o=o.substr(0,o.indexOf("&")))):o="1"),this.modestbranding&&("string"==typeof this.modestbranding&&a.indexOf(this.modestbranding)>0?(a=a.substr(a.lastIndexOf(this.modestbranding)+this.modestbranding.length,a.length),a.indexOf("&")>0&&(a=a.substr(0,a.indexOf("&")))):a="0"),this.controls&&("string"==typeof this.controls&&r.indexOf(this.controls)>0?(r=r.substr(r.lastIndexOf(this.controls)+this.controls.length,r.length),r.indexOf("&")>0&&(r=r.substr(0,r.indexOf("&")))):r="1"),this.playsinline&&("string"==typeof this.playsinline&&c.indexOf(this.playsinline)>0?(c=c.substr(c.lastIndexOf(this.playsinline)+this.playsinline.length,c.length),c.indexOf("&")>0&&(c=c.substr(0,c.indexOf("&")))):c="0"),s=this.src.replace("%id%",s).replace("%rel%",o).replace("%modestbranding%",a).replace("%controls%",r).replace("%playsinline%",c),!1):void 0});var p={};return l.srcAction&&(p[l.srcAction]=s),t._parseMarkup(i,p,n),t.updateStatus("ready"),i}}}),I()});
WPGroHo=jQuery.extend({my_hash:'',data:{},renderers:{},syncProfileData:function(hash,id){if(!WPGroHo.data[hash]){WPGroHo.data[hash]={};jQuery('div.grofile-hash-map-'+hash+' span').each(function(){WPGroHo.data[hash][this.className]=jQuery(this).text();});}
WPGroHo.appendProfileData(WPGroHo.data[hash],hash,id);},appendProfileData:function(data,hash,id){for(var key in data){if(jQuery.isFunction(WPGroHo.renderers[key])){return WPGroHo.renderers[key](data[key],hash,id,key);}
jQuery('#'+id).find('h4').after(jQuery('<p class="grav-extra '+key+'" />').html(data[key]));}}},WPGroHo);jQuery(document).ready(function(){if('undefined'===typeof Gravatar){return;}
Gravatar.profile_cb=function(h,d){WPGroHo.syncProfileData(h,d);};Gravatar.my_hash=WPGroHo.my_hash;Gravatar.init('body','#wpadminbar');});
jQuery(document).ready(function($){var $filter=$('.nav-primary');var $filterSpacer=$('<div />',{"class":"filter-drop-spacer","height":$filter.outerHeight()});if($filter.size())
{$(window).scroll(function()
{if(!$filter.hasClass('fix')&&$(window).scrollTop()>$filter.offset().top&&window.innerWidth>500)
{$filter.before($filterSpacer);$filter.addClass("fix");}
else if($filter.hasClass('fix')&&$(window).scrollTop()<$filterSpacer.offset().top)
{$filter.removeClass("fix");$filterSpacer.remove();}});}
$('.filter-drop-spacer').remove();});
// ( function( window, $, undefined ) {
// 	'use strict';
//
// 	$( 'nav' ).before( '<button class="menu-toggle" role="button" aria-pressed="false"></button>' ); // Add toggles to menus
// 	$( 'nav .sub-menu' ).before( '<button class="sub-menu-toggle" role="button" aria-pressed="false"></button>' ); // Add toggles to sub menus
//
// 	// Show/hide the navigation
// 	$( '.menu-toggle, .sub-menu-toggle' ).on( 'click', function() {
// 		var $this = $( this );
// 		$this.attr( 'aria-pressed', function( index, value ) {
// 			return 'false' === value ? 'true' : 'false';
// 		});
//
// 		$this.toggleClass( 'activated' );
// 		$this.next( 'nav, .sub-menu' ).slideToggle( 'fast' );
//
// 	});
//
// })( this, jQuery );
!function(a,b){"use strict";function c(){if(!e){e=!0;var a,c,d,f,g=-1!==navigator.appVersion.indexOf("MSIE 10"),h=!!navigator.userAgent.match(/Trident.*rv:11\./),i=b.querySelectorAll("iframe.wp-embedded-content");for(c=0;c<i.length;c++){if(d=i[c],!d.getAttribute("data-secret"))f=Math.random().toString(36).substr(2,10),d.src+="#?secret="+f,d.setAttribute("data-secret",f);if(g||h)a=d.cloneNode(!0),a.removeAttribute("security"),d.parentNode.replaceChild(a,d)}}}var d=!1,e=!1;if(b.querySelector)if(a.addEventListener)d=!0;if(a.wp=a.wp||{},!a.wp.receiveEmbedMessage)if(a.wp.receiveEmbedMessage=function(c){var d=c.data;if(d.secret||d.message||d.value)if(!/[^a-zA-Z0-9]/.test(d.secret)){var e,f,g,h,i,j=b.querySelectorAll('iframe[data-secret="'+d.secret+'"]'),k=b.querySelectorAll('blockquote[data-secret="'+d.secret+'"]');for(e=0;e<k.length;e++)k[e].style.display="none";for(e=0;e<j.length;e++)if(f=j[e],c.source===f.contentWindow){if(f.removeAttribute("style"),"height"===d.message){if(g=parseInt(d.value,10),g>1e3)g=1e3;else if(~~g<200)g=200;f.height=g}if("link"===d.message)if(h=b.createElement("a"),i=b.createElement("a"),h.href=f.getAttribute("src"),i.href=d.value,i.host===h.host)if(b.activeElement===f)a.top.location.href=d.value}else;}},d)a.addEventListener("message",a.wp.receiveEmbedMessage,!1),b.addEventListener("DOMContentLoaded",c,!1),a.addEventListener("load",c,!1)}(window,document);
!function($){"use strict";var escape=/["\\\x00-\x1f\x7f-\x9f]/g,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},hasOwn=Object.prototype.hasOwnProperty;$.toJSON="object"==typeof JSON&&JSON.stringify?JSON.stringify:function(a){if(null===a)return"null";var b,c,d,e,f=$.type(a);if("undefined"!==f){if("number"===f||"boolean"===f)return String(a);if("string"===f)return $.quoteString(a);if("function"==typeof a.toJSON)return $.toJSON(a.toJSON());if("date"===f){var g=a.getUTCMonth()+1,h=a.getUTCDate(),i=a.getUTCFullYear(),j=a.getUTCHours(),k=a.getUTCMinutes(),l=a.getUTCSeconds(),m=a.getUTCMilliseconds();return g<10&&(g="0"+g),h<10&&(h="0"+h),j<10&&(j="0"+j),k<10&&(k="0"+k),l<10&&(l="0"+l),m<100&&(m="0"+m),m<10&&(m="0"+m),'"'+i+"-"+g+"-"+h+"T"+j+":"+k+":"+l+"."+m+'Z"'}if(b=[],$.isArray(a)){for(c=0;c<a.length;c++)b.push($.toJSON(a[c])||"null");return"["+b.join(",")+"]"}if("object"==typeof a){for(c in a)if(hasOwn.call(a,c)){if("number"===(f=typeof c))d='"'+c+'"';else{if("string"!==f)continue;d=$.quoteString(c)}f=typeof a[c],"function"!==f&&"undefined"!==f&&(e=$.toJSON(a[c]),b.push(d+":"+e))}return"{"+b.join(",")+"}"}}},$.evalJSON="object"==typeof JSON&&JSON.parse?JSON.parse:function(str){return eval("("+str+")")},$.secureEvalJSON="object"==typeof JSON&&JSON.parse?JSON.parse:function(str){var filtered=str.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"");if(/^[\],:{}\s]*$/.test(filtered))return eval("("+str+")");throw new SyntaxError("Error parsing JSON, source is not valid.")},$.quoteString=function(a){return a.match(escape)?'"'+a.replace(escape,function(a){var b=meta[a];return"string"==typeof b?b:(b=a.charCodeAt(),"\\u00"+Math.floor(b/16).toString(16)+(b%16).toString(16))})+'"':'"'+a+'"'}}(jQuery);
function gformBindFormatPricingFields(){jQuery(".ginput_amount, .ginput_donation_amount").bind("change",function(){gformFormatPricingField(this)}),jQuery(".ginput_amount, .ginput_donation_amount").each(function(){gformFormatPricingField(this)})}function Currency(a){this.currency=a,this.toNumber=function(a){return this.isNumeric(a)?parseFloat(a):gformCleanNumber(a,this.currency.symbol_right,this.currency.symbol_left,this.currency.decimal_separator)},this.toMoney=function(a,b){if(b=b||!1,b||(a=gformCleanNumber(a,this.currency.symbol_right,this.currency.symbol_left,this.currency.decimal_separator)),!1===a)return"";a+="",negative="","-"==a[0]&&(a=parseFloat(a.substr(1)),negative="-"),money=this.numberFormat(a,this.currency.decimals,this.currency.decimal_separator,this.currency.thousand_separator),"0.00"==money&&(negative="");var c=this.currency.symbol_left?this.currency.symbol_left+this.currency.symbol_padding:"",d=this.currency.symbol_right?this.currency.symbol_padding+this.currency.symbol_right:"";return money=negative+this.htmlDecode(c)+money+this.htmlDecode(d),money},this.numberFormat=function(a,b,c,d,e){var e=void 0===e;a=(a+"").replace(",","").replace(" ","");var f=isFinite(+a)?+a:0,g=isFinite(+b)?Math.abs(b):0,h=void 0===d?",":d,i=void 0===c?".":c,j="",k=function(a,b){var c=Math.pow(10,b);return""+Math.round(a*c)/c};return"0"==b?(f+=1e-10,j=(""+Math.round(f)).split(".")):-1==b?j=(""+f).split("."):(f+=1e-10,j=k(f,g).split(".")),j[0].length>3&&(j[0]=j[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,h)),e&&(j[1]||"").length<g&&(j[1]=j[1]||"",j[1]+=new Array(g-j[1].length+1).join("0")),j.join(i)},this.isNumeric=function(a){return gformIsNumber(a)},this.htmlDecode=function(a){var b,c,d=a,e=d.match(/&#[0-9]{1,5};/g);if(null!=e)for(var f=0;f<e.length;f++)c=e[f],b=c.substring(2,c.length-1),d=b>=-32768&&b<=65535?d.replace(c,String.fromCharCode(b)):d.replace(c,"");return d}}function gformCleanNumber(a,b,c,d){var e="",f="",g="",h=!1;a+=" ",a=a.replace(/&.*?;/g,""),a=a.replace(b,""),a=a.replace(c,"");for(var i=0;i<a.length;i++)g=a.substr(i,1),parseInt(g)>=0&&parseInt(g)<=9||g==d?e+=g:"-"==g&&(h=!0);for(var i=0;i<e.length;i++)g=e.substr(i,1),g>="0"&&g<="9"?f+=g:g==d&&(f+=".");return h&&(f="-"+f),!!gformIsNumber(f)&&parseFloat(f)}function gformGetDecimalSeparator(a){var b;switch(a){case"currency":b=new Currency(gf_global.gf_currency_config).currency.decimal_separator;break;case"decimal_comma":b=",";break;default:b="."}return b}function gformIsNumber(a){return!isNaN(parseFloat(a))&&isFinite(a)}function gformIsNumeric(a,b){switch(b){case"decimal_dot":var c=new RegExp("^(-?[0-9]{1,3}(?:,?[0-9]{3})*(?:.[0-9]+)?)$");return c.test(a);case"decimal_comma":var c=new RegExp("^(-?[0-9]{1,3}(?:.?[0-9]{3})*(?:,[0-9]+)?)$");return c.test(a)}return!1}function gformDeleteUploadedFile(a,b,c){var d=jQuery("#field_"+a+"_"+b),e=jQuery(c).parent().index();d.find(".ginput_preview").eq(e).remove(),d.find('input[type="file"],.validation_message,#extensions_message_'+a+"_"+b).removeClass("gform_hidden"),d.find(".ginput_post_image_file").show(),d.find('input[type="text"]').val("");var f=jQuery("#gform_uploaded_files_"+a).val();if(f){var g=jQuery.secureEvalJSON(f);if(g){var h="input_"+b,i=d.find("#gform_multifile_upload_"+a+"_"+b);if(i.length>0){g[h].splice(e,1);var j=i.data("settings"),k=j.gf_vars.max_files;jQuery("#"+j.gf_vars.message_id).html(""),g[h].length<k&&gfMultiFileUploader.toggleDisabled(j,!1)}else g[h]=null;jQuery("#gform_uploaded_files_"+a).val(jQuery.toJSON(g))}}}function gformIsHidden(a){return"none"==a.parents(".gfield").not(".gfield_hidden_product").css("display")}function gformCalculateTotalPrice(a){if(_gformPriceFields[a]){var b=0;_anyProductSelected=!1;for(var c=0;c<_gformPriceFields[a].length;c++)b+=gformCalculateProductPrice(a,_gformPriceFields[a][c]);if(_anyProductSelected){b+=gformGetShippingPrice(a)}window.gform_product_total&&(b=window.gform_product_total(a,b)),b=gform.applyFilters("gform_product_total",b,a);var d=jQuery(".ginput_total_"+a);if(d.length>0){var e=d.next().val(),f=gformFormatMoney(b,!0);e!=b&&d.next().val(b).change(),f!=d.first().text()&&d.html(f)}}}function gformGetShippingPrice(a){var b=jQuery(".gfield_shipping_"+a+' input[type="hidden"], .gfield_shipping_'+a+" select, .gfield_shipping_"+a+" input:checked"),c=0;return 1!=b.length||gformIsHidden(b)||(c=b.attr("type")&&"hidden"==b.attr("type").toLowerCase()?b.val():gformGetPrice(b.val())),gformToNumber(c)}function gformGetFieldId(a){var b=jQuery(a).attr("id"),c=b.split("_");return c.length<=0?0:c[c.length-1]}function gformCalculateProductPrice(a,b){var c="_"+a+"_"+b;jQuery(".gfield_option"+c+", .gfield_shipping_"+a).find("select").each(function(){var b=jQuery(this),c=gformGetPrice(b.val()),d=b.attr("id").split("_")[2];b.children("option").each(function(){var b=jQuery(this),e=gformGetOptionLabel(b,b.val(),c,a,d);b.html(e)}),b.trigger("chosen:updated")}),jQuery(".gfield_option"+c).find(".gfield_checkbox").find("input:checkbox").each(function(){var b=jQuery(this),c=b.attr("id"),d=c.split("_")[2],e=c.replace("choice_","#label_"),f=jQuery(e),g=gformGetOptionLabel(f,b.val(),0,a,d);f.html(g)}),jQuery(".gfield_option"+c+", .gfield_shipping_"+a).find(".gfield_radio").each(function(){var b=0,c=jQuery(this),d=c.attr("id"),e=d.split("_")[2],f=c.find("input:radio:checked").val();f&&(b=gformGetPrice(f)),c.find("input:radio").each(function(){var c=jQuery(this),d=c.attr("id").replace("choice_","#label_"),f=jQuery(d);if(f){var g=gformGetOptionLabel(f,c.val(),b,a,e);f.html(g)}})});var d=gformGetBasePrice(a,b),e=gformGetProductQuantity(a,b);return e>0&&(jQuery(".gfield_option"+c).find("input:checked, select").each(function(){gformIsHidden(jQuery(this))||(d+=gformGetPrice(jQuery(this).val()))}),_anyProductSelected=!0),d*=e,d=Math.round(100*d)/100}function gformGetProductQuantity(a,b){if(!gformIsProductSelected(a,b))return 0;var c,d,e=jQuery("#ginput_quantity_"+a+"_"+b);if(gformIsHidden(e))return 0;if(e.length>0)c=e.val();else if(e=jQuery(".gfield_quantity_"+a+"_"+b+" :input"),c=1,e.length>0){c=e.val();var f=e.attr("id"),g=gf_get_input_id_by_html_id(f);d=gf_get_field_number_format(g,a,"value")}return d||(d="currency"),c=gformCleanNumber(c,"","",gformGetDecimalSeparator(d)),c||(c=0),c}function gformIsProductSelected(a,b){var c="_"+a+"_"+b,d=jQuery("#ginput_base_price"+c+", .gfield_donation"+c+' input[type="text"], .gfield_product'+c+" .ginput_amount");return!(!d.val()||gformIsHidden(d))||(d=jQuery(".gfield_product"+c+" select, .gfield_product"+c+" input:checked, .gfield_donation"+c+" select, .gfield_donation"+c+" input:checked"),!(!d.val()||gformIsHidden(d)))}function gformGetBasePrice(a,b){var c="_"+a+"_"+b,d=0,e=jQuery("#ginput_base_price"+c+", .gfield_donation"+c+' input[type="text"], .gfield_product'+c+" .ginput_amount");if(e.length>0)d=e.val(),gformIsHidden(e)&&(d=0);else{e=jQuery(".gfield_product"+c+" select, .gfield_product"+c+" input:checked, .gfield_donation"+c+" select, .gfield_donation"+c+" input:checked");var f=e.val();f&&(f=f.split("|"),d=f.length>1?f[1]:0),gformIsHidden(e)&&(d=0)}return d=new Currency(gf_global.gf_currency_config).toNumber(d),!1===d?0:d}function gformFormatMoney(a,b){return gf_global.gf_currency_config?new Currency(gf_global.gf_currency_config).toMoney(a,b):a}function gformFormatPricingField(a){if(gf_global.gf_currency_config){var b=new Currency(gf_global.gf_currency_config),c=b.toMoney(jQuery(a).val());jQuery(a).val(c)}}function gformToNumber(a){return new Currency(gf_global.gf_currency_config).toNumber(a)}function gformGetPriceDifference(a,b){var c=parseFloat(b)-parseFloat(a);return price=gformFormatMoney(c,!0),c>0&&(price="+"+price),price}function gformGetOptionLabel(a,b,c,d,e){a=jQuery(a);var f=gformGetPrice(b),g=a.attr("price"),h=a.html().replace(/<span(.*)<\/span>/i,"").replace(g,""),i=gformGetPriceDifference(c,f);i=0==gformToNumber(i)?"":" "+i,a.attr("price",i);var j="option"==a[0].tagName.toLowerCase()?" "+i:"<span class='ginput_price'>"+i+"</span>",k=h+j;return window.gform_format_option_label&&(k=gform_format_option_label(k,h,j,c,f,d,e)),k}function gformGetProductIds(a,b){for(var c=jQuery(b).hasClass(a)?jQuery(b).attr("class").split(" "):jQuery(b).parents("."+a).attr("class").split(" "),d=0;d<c.length;d++)if(c[d].substr(0,a.length)==a&&c[d]!=a)return{formId:c[d].split("_")[2],productFieldId:c[d].split("_")[3]};return{formId:0,fieldId:0}}function gformGetPrice(a){var b=a.split("|"),c=new Currency(gf_global.gf_currency_config);return b.length>1&&!1!==c.toNumber(b[1])?c.toNumber(b[1]):0}function gformRegisterPriceField(a){_gformPriceFields[a.formId]||(_gformPriceFields[a.formId]=new Array);for(var b=0;b<_gformPriceFields[a.formId].length;b++)if(_gformPriceFields[a.formId][b]==a.productFieldId)return;_gformPriceFields[a.formId].push(a.productFieldId)}function gformInitPriceFields(){jQuery(".gfield_price").each(function(){gformRegisterPriceField(gformGetProductIds("gfield_price",this)),jQuery(this).on("change",'input[type="text"], input[type="number"], select',function(){var a=gformGetProductIds("gfield_price",this);0==a.formId&&(a=gformGetProductIds("gfield_shipping",this)),jQuery(document).trigger("gform_price_change",[a,this]),gformCalculateTotalPrice(a.formId)}),jQuery(this).on("click",'input[type="radio"], input[type="checkbox"]',function(){var a=gformGetProductIds("gfield_price",this);0==a.formId&&(a=gformGetProductIds("gfield_shipping",this)),jQuery(document).trigger("gform_price_change",[a,this]),gformCalculateTotalPrice(a.formId)})});for(formId in _gformPriceFields)_gformPriceFields.hasOwnProperty(formId)&&gformCalculateTotalPrice(formId)}function gformShowPasswordStrength(a){var b=jQuery("#"+a).val(),c=jQuery("#"+a+"_2").val(),d=gformPasswordStrength(b,c),e=window.gf_text["password_"+d];jQuery("#"+a+"_strength").val(d),jQuery("#"+a+"_strength_indicator").removeClass("blank mismatch short good bad strong").addClass(d).html(e)}function gformPasswordStrength(a,b){var c,d,e=0;return a.length<=0?"blank":a!=b&&b.length>0?"mismatch":a.length<4?"short":(a.match(/[0-9]/)&&(e+=10),a.match(/[a-z]/)&&(e+=26),a.match(/[A-Z]/)&&(e+=26),a.match(/[^a-zA-Z0-9]/)&&(e+=31),c=Math.log(Math.pow(e,a.length)),d=c/Math.LN2,d<40?"bad":d<56?"good":"strong")}function gformToggleCheckboxes(a){var b=jQuery(a).parent(),c=b.find("label");$checkboxes=b.parent().find("li:not( .gchoice_select_all )"),$checkboxes.each(function(){jQuery('input[type="checkbox"]',this).prop("checked",a.checked).trigger("change"),"function"==typeof jQuery('input[type="checkbox"]',this)[0].onclick&&jQuery('input[type="checkbox"]',this)[0].onclick()}),a.checked?c.html(c.data("label-deselect")):c.html(c.data("label-select"))}function gformAddListItem(a,b){var c=jQuery(a);if(!c.hasClass("gfield_icon_disabled")){var d=c.parents(".gfield_list_group"),e=d.clone(),f=d.parents(".gfield_list_container"),g=e.find(":input:last").attr("tabindex");e.find("input, select, textarea").attr("tabindex",g).not(":checkbox, :radio").val(""),e.find(":checkbox, :radio").prop("checked",!1),e=gform.applyFilters("gform_list_item_pre_add",e,d),d.after(e),gformToggleIcons(f,b),gformAdjustClasses(f),gform.doAction("gform_list_post_item_add",e,f)}}function gformDeleteListItem(a,b){var c=jQuery(a),d=c.parents(".gfield_list_group"),e=d.parents(".gfield_list_container");d.remove(),gformToggleIcons(e,b),gformAdjustClasses(e),gform.doAction("gform_list_post_item_delete",e)}function gformAdjustClasses(a){a.find(".gfield_list_group").each(function(a){var b=jQuery(this),c=(a+1)%2==0?"gfield_list_row_even":"gfield_list_row_odd";b.removeClass("gfield_list_row_odd gfield_list_row_even").addClass(c)})}function gformToggleIcons(a,b){var c=a.find(".gfield_list_group").length,d=a.find(".add_list_item");a.find(".delete_list_item").css("visibility",1==c?"hidden":"visible"),b>0&&c>=b?(d.data("title",a.find(".add_list_item").attr("title")),d.addClass("gfield_icon_disabled").attr("title","")):b>0&&(d.removeClass("gfield_icon_disabled"),d.data("title")&&d.attr("title",d.data("title")))}function gformMatchCard(a){var b=gformFindCardType(jQuery("#"+a).val()),c=jQuery("#"+a).parents(".gfield").find(".gform_card_icon_container");b?(jQuery(c).find(".gform_card_icon").removeClass("gform_card_icon_selected").addClass("gform_card_icon_inactive"),jQuery(c).find(".gform_card_icon_"+b).removeClass("gform_card_icon_inactive").addClass("gform_card_icon_selected")):jQuery(c).find(".gform_card_icon").removeClass("gform_card_icon_selected gform_card_icon_inactive")}function gformFindCardType(a){if(a.length<4)return!1;var b=window.gf_cc_rules,c=new Array;for(type in b)if(b.hasOwnProperty(type))for(i in b[type])if(b[type].hasOwnProperty(i)&&0===b[type][i].indexOf(a.substring(0,b[type][i].length))){c[c.length]=type;break}return 1==c.length&&c[0].toLowerCase()}function gformToggleCreditCard(){jQuery("#gform_payment_method_creditcard").is(":checked")?jQuery(".gform_card_fields_container").slideDown():jQuery(".gform_card_fields_container").slideUp()}function gformInitChosenFields(a,b){return jQuery(a).each(function(){var a=jQuery(this);if("rtl"==jQuery("html").attr("dir")&&a.addClass("chosen-rtl chzn-rtl"),a.is(":visible")&&0==a.siblings(".chosen-container").length){var c=gform.applyFilters("gform_chosen_options",{no_results_text:b},a);a.chosen(c)}})}function gformInitCurrencyFormatFields(a){jQuery(a).each(function(){jQuery(this).val(gformFormatMoney(jQuery(this).val()))}).change(function(a){jQuery(this).val(gformFormatMoney(jQuery(this).val()))})}function gformFormatNumber(a,b,c,d){if(void 0===c)if(window.gf_global){var e=new Currency(gf_global.gf_currency_config);c=e.currency.decimal_separator}else c=".";if(void 0===d)if(window.gf_global){var e=new Currency(gf_global.gf_currency_config);d=e.currency.thousand_separator}else d=",";var e=new Currency;return e.numberFormat(a,b,c,d,!1)}function gformToNumber(a){return new Currency(gf_global.gf_currency_config).toNumber(a)}function getMatchGroups(a,b){for(var c=new Array;b.test(a);){var d=c.length;c[d]=b.exec(a),a=a.replace(""+c[d][0],"")}return c}function gf_get_field_number_format(a,b,c){var d=rgars(window,"gf_global/number_formats/{0}/{1}".format(b,a)),e=!1;return""===d?e:e=void 0===c?!1!==d.price?d.price:d.value:d[c]}function renderRecaptcha(){jQuery(".ginput_recaptcha").each(function(){var a=jQuery(this),b={sitekey:a.data("sitekey"),theme:a.data("theme"),tabindex:a.data("tabindex")};if(a.is(":empty")){a.data("stoken")&&(b.stoken=a.data("stoken"));var c=gform.applyFilters("gform_recaptcha_callback",!1,a);c&&(b.callback=c),grecaptcha.render(this.id,b),b.tabindex&&a.find("iframe").attr("tabindex",b.tabindex),gform.doAction("gform_post_recaptcha_render",a)}})}function gformValidateFileSize(a,b){var c;if(c=jQuery(a).closest("div").siblings(".validation_message").length>0?jQuery(a).closest("div").siblings(".validation_message"):jQuery(a).siblings(".validation_message"),window.FileReader&&window.File&&window.FileList&&window.Blob){var d=a.files[0];if(d&&d.size>b){c.text(d.name+" - "+gform_gravityforms.strings.file_exceeds_limit);var e=jQuery(a);e.replaceWith(e.val("").clone(!0))}else c.text("")}}function gformInitSpinner(a,b){jQuery("#gform_"+a).submit(function(){gformAddSpinner(a,b)})}function gformAddSpinner(a,b){if(void 0!==b&&b||(b=gform.applyFilters("gform_spinner_url",gf_global.spinnerUrl,a)),0==jQuery("#gform_ajax_spinner_"+a).length){gform.applyFilters("gform_spinner_target_elem",jQuery("#gform_submit_button_"+a+", #gform_wrapper_"+a+" .gform_next_button, #gform_send_resume_link_button_"+a),a).after('<img id="gform_ajax_spinner_'+a+'"  class="gform_ajax_spinner" src="'+b+'" alt="" />')}}function gf_raw_input_change(a,b){clearTimeout(__gf_keyup_timeout);var c=jQuery(b),d=c.attr("id"),e=gf_get_input_id_by_html_id(d),f=gf_get_form_id_by_html_id(d);if(e){var g=c.is(":checkbox")||c.is(":radio")||c.is("select"),h=!g||c.is("textarea");("keyup"!=a.type||h)&&("change"!=a.type||g||h)&&("keyup"==a.type?__gf_keyup_timeout=setTimeout(function(){gf_input_change(this,f,e)},300):gf_input_change(this,f,e))}}function gf_get_input_id_by_html_id(a){var b=gf_get_ids_by_html_id(a),c=b[2];return b[3]&&(c+="."+b[3]),c}function gf_get_form_id_by_html_id(a){return gf_get_ids_by_html_id(a)[1]}function gf_get_ids_by_html_id(a){return!!a&&a.split("_")}function gf_input_change(a,b,c){gform.doAction("gform_input_change",a,b,c)}function gformExtractFieldId(a){var b=parseInt(a.toString().split(".")[0]);return b||a}function gformExtractInputIndex(a){var b=parseInt(a.toString().split(".")[1]);return b||!1}function rgars(a,b){for(var c=b.split("/"),d=a,e=0;e<c.length;e++)d=rgar(d,c[e]);return d}function rgar(a,b){return void 0!==a[b]?a[b]:""}void 0===jQuery.fn.prop&&(jQuery.fn.prop=jQuery.fn.attr),jQuery(document).ready(function(){jQuery(document).bind("gform_post_render",gformBindFormatPricingFields)});var _gformPriceFields=new Array,_anyProductSelected,GFCalc=function(formId,formulaFields){this.formId=formId,this.formulaFields=formulaFields,this.patt=/{[^{]*?:(\d+(\.\d+)?)(:(.*?))?}/i,this.exprPatt=/^[0-9 -/*\(\)]+$/i,this.isCalculating={},this.init=function(a,b){var c=this;jQuery(document).bind("gform_post_conditional_logic",function(){c.runCalcs(a,b)});for(var d=0;d<b.length;d++){var e=jQuery.extend({},b[d]);this.runCalc(e,a),this.bindCalcEvents(e,a)}},this.runCalc=function(formulaField,formId){var calcObj=this,field=jQuery("#field_"+formId+"_"+formulaField.field_id),formulaInput=field.hasClass("gfield_price")?jQuery("#ginput_base_price_"+formId+"_"+formulaField.field_id):jQuery("#input_"+formId+"_"+formulaField.field_id),previous_val=formulaInput.val(),formula=gform.applyFilters("gform_calculation_formula",formulaField.formula,formulaField,formId,calcObj),expr=calcObj.replaceFieldTags(formId,formula,formulaField).replace(/(\r\n|\n|\r)/gm,""),result="";if(calcObj.exprPatt.test(expr))try{result=eval(expr)}catch(a){}isFinite(result)||(result=0),window.gform_calculation_result&&(result=window.gform_calculation_result(result,formulaField,formId,calcObj),window.console&&console.log('"gform_calculation_result" function is deprecated since version 1.8! Use "gform_calculation_result" JS hook instead.')),result=gform.applyFilters("gform_calculation_result",result,formulaField,formId,calcObj);var formattedResult=gform.applyFilters("gform_calculation_format_result",!1,result,formulaField,formId,calcObj),numberFormat=gf_get_field_number_format(formulaField.field_id,formId);if(!1!==formattedResult)result=formattedResult;else if(field.hasClass("gfield_price")||"currency"==numberFormat)result=gformFormatMoney(result||0,!0);else{var decimalSeparator=".",thousandSeparator=",";"decimal_comma"==numberFormat&&(decimalSeparator=",",thousandSeparator="."),result=gformFormatNumber(result,gformIsNumber(formulaField.rounding)?formulaField.rounding:-1,decimalSeparator,thousandSeparator)}result!=previous_val&&(field.hasClass("gfield_price")?(jQuery("#input_"+formId+"_"+formulaField.field_id).text(result),formulaInput.val(result).trigger("change"),gformCalculateTotalPrice(formId)):formulaInput.val(result).trigger("change"))},this.runCalcs=function(a,b){for(var c=0;c<b.length;c++){var d=jQuery.extend({},b[c]);this.runCalc(d,a)}},this.bindCalcEvents=function(a,b){var c=this,d=a.field_id,e=getMatchGroups(a.formula,this.patt);c.isCalculating[d]=!1;for(var f in e)if(e.hasOwnProperty(f)){var g=e[f][1],h=parseInt(g),i=jQuery("#field_"+b+"_"+h).find('input[name="input_'+g+'"], select[name="input_'+g+'"]');"checkbox"==i.prop("type")||"radio"==i.prop("type")?jQuery(i).click(function(){c.bindCalcEvent(g,a,b,0)}):i.is("select")||"hidden"==i.prop("type")?jQuery(i).change(function(){c.bindCalcEvent(g,a,b,0)}):jQuery(i).keydown(function(){c.bindCalcEvent(g,a,b)}).change(function(){c.bindCalcEvent(g,a,b,0)}),gform.doAction("gform_post_calculation_events",e[f],a,b,c)}},this.bindCalcEvent=function(a,b,c,d){var e=this,f=b.field_id;d=void 0==d?345:d,e.isCalculating[f][a]&&clearTimeout(e.isCalculating[f][a]),e.isCalculating[f][a]=window.setTimeout(function(){e.runCalc(b,c)},d)},this.replaceFieldTags=function(a,b,c){var d=getMatchGroups(b,this.patt);for(i in d)if(d.hasOwnProperty(i)){var e=d[i][1],f=parseInt(e),g=(d[i][3],0),h=jQuery("#field_"+a+"_"+f).find('input[name="input_'+e+'"], select[name="input_'+e+'"]');(h.length>1||"checkbox"==h.prop("type"))&&(h=h.filter(":checked"));var j=!window.gf_check_field_rule||"show"==gf_check_field_rule(a,f,!0,"");if(h.length>0&&j){var k=h.val();k=k.split("|"),g=k.length>1?k[1]:h.val()}var l=gf_get_field_number_format(f,a);l||(l=gf_get_field_number_format(c.field_id,a));var m=gformGetDecimalSeparator(l);g=gform.applyFilters("gform_merge_tag_value_pre_calculation",g,d[i],j,c,a),g=gformCleanNumber(g,"","",m),g||(g=0),b=b.replace(d[i][0],g)}return b},this.init(formId,formulaFields)},gform={hooks:{action:{},filter:{}},addAction:function(a,b,c,d){gform.addHook("action",a,b,c,d)},addFilter:function(a,b,c,d){gform.addHook("filter",a,b,c,d)},doAction:function(a){gform.doHook("action",a,arguments)},applyFilters:function(a){return gform.doHook("filter",a,arguments)},removeAction:function(a,b){gform.removeHook("action",a,b)},removeFilter:function(a,b,c){gform.removeHook("filter",a,b,c)},addHook:function(a,b,c,d,e){void 0==gform.hooks[a][b]&&(gform.hooks[a][b]=[]);var f=gform.hooks[a][b];void 0==e&&(e=b+"_"+f.length),void 0==d&&(d=10),gform.hooks[a][b].push({tag:e,callable:c,priority:d})},doHook:function(a,b,c){if(c=Array.prototype.slice.call(c,1),void 0!=gform.hooks[a][b]){var d,e=gform.hooks[a][b];e.sort(function(a,b){return a.priority-b.priority});for(var f=0;f<e.length;f++)d=e[f].callable,"function"!=typeof d&&(d=window[d]),"action"==a?d.apply(null,c):c[0]=d.apply(null,c)}if("filter"==a)return c[0]},removeHook:function(a,b,c,d){if(void 0!=gform.hooks[a][b])for(var e=gform.hooks[a][b],f=e.length-1;f>=0;f--)void 0!=d&&d!=e[f].tag||void 0!=c&&c!=e[f].priority||e.splice(f,1)}};!function(a,b){function c(c){function h(a,c){b("#"+a).prepend("<li>"+e(c)+"</li>")}function i(){var a,c="#gform_uploaded_files_"+r,d=b(c);return a=d.val(),a=void 0===a||""===a?{}:b.parseJSON(a)}function j(a){var b=i(),c=n(a);return void 0===b[c]&&(b[c]=[]),b[c]}function k(a){return j(a).length}function l(a,b){var c=j(a);c.unshift(b),m(a,c)}function m(a,c){var d=i(),e=b("#gform_uploaded_files_"+r);d[n(a)]=c,e.val(b.toJSON(d))}function n(a){return"input_"+a}function o(a){a.preventDefault()}var p=b(c).data("settings"),q=new plupload.Uploader(p);r=q.settings.multipart_params.form_id,a.uploaders[p.container]=q;var r,s;q.bind("Init",function(c,d){c.features.dragdrop||b(".gform_drop_instructions").hide();var e=c.settings.multipart_params.field_id,f=parseInt(c.settings.gf_vars.max_files),g=k(e);f>0&&g>=f&&a.toggleDisabled(c.settings,!0)}),a.toggleDisabled=function(a,c){b("string"==typeof a.browse_button?"#"+a.browse_button:a.browse_button).prop("disabled",c)},q.init(),q.bind("BeforeUpload",function(a,b){a.settings.multipart_params.original_filename=b.name}),q.bind("FilesAdded",function(c,g){var i,j=parseInt(c.settings.gf_vars.max_files),l=c.settings.multipart_params.field_id,m=k(l),n=c.settings.gf_vars.disallowed_extensions;if(j>0&&m>=j)return void b.each(g,function(a,b){c.removeFile(b)});b.each(g,function(a,d){if(i=d.name.split(".").pop(),b.inArray(i,n)>-1)return h(c.settings.gf_vars.message_id,d.name+" - "+f.illegal_extension),void c.removeFile(d);if(d.status==plupload.FAILED||j>0&&m>=j)return void c.removeFile(d);var g=void 0!==d.size?plupload.formatSize(d.size):f.in_progress,k='<div id="'+d.id+'" class="ginput_preview">'+e(d.name)+" ("+g+') <b></b> <a href="javascript:void(0)" title="'+f.cancel_upload+"\" onclick='$this=jQuery(this); var uploader = gfMultiFileUploader.uploaders."+c.settings.container.id+';uploader.stop();uploader.removeFile(uploader.getFile("'+d.id+'"));$this.after("'+f.cancelled+"\"); uploader.start();$this.remove();' onkeypress='$this=jQuery(this); var uploader = gfMultiFileUploader.uploaders."+c.settings.container.id+';uploader.stop();uploader.removeFile(uploader.getFile("'+d.id+'"));$this.after("'+f.cancelled+"\"); uploader.start();$this.remove();'>"+f.cancel+"</a></div>";b("#"+c.settings.filelist).prepend(k),m++}),c.refresh();var o="form#gform_"+r,p="input:hidden[name='gform_unique_id']",q=o+" "+p,t=b(q);0==t.length&&(t=b(p)),s=t.val(),""===s&&(s=d(),t.val(s)),j>0&&m>=j&&(a.toggleDisabled(c.settings,!0),h(c.settings.gf_vars.message_id,f.max_reached)),c.settings.multipart_params.gform_unique_id=s,c.start()}),q.bind("UploadProgress",function(a,c){var d=c.percent+"%";b("#"+c.id+" b").html(d)}),q.bind("Error",function(a,c){if(c.code===plupload.FILE_EXTENSION_ERROR){var d=void 0!==a.settings.filters.mime_types?a.settings.filters.mime_types[0].extensions:a.settings.filters[0].extensions;h(a.settings.gf_vars.message_id,c.file.name+" - "+f.invalid_file_extension+" "+d)}else if(c.code===plupload.FILE_SIZE_ERROR)h(a.settings.gf_vars.message_id,c.file.name+" - "+f.file_exceeds_limit);else{var e="Error: "+c.code+", Message: "+c.message+(c.file?", File: "+c.file.name:"");h(a.settings.gf_vars.message_id,e)}b("#"+c.file.id).html(""),a.refresh()}),q.bind("ChunkUploaded",function(a,c,d){var e=b.secureEvalJSON(d.response);"error"==e.status&&(a.removeFile(c),h(a.settings.gf_vars.message_id,c.name+" - "+e.error.message),b("#"+c.id).html(""))}),q.bind("FileUploaded",function(a,c,d){if(a.getFile(c.id)){var i=b.secureEvalJSON(d.response);if("error"==i.status)return h(a.settings.gf_vars.message_id,c.name+" - "+i.error.message),void b("#"+c.id).html("");var j="<strong>"+e(c.name)+"</strong>",k=a.settings.multipart_params.form_id,m=a.settings.multipart_params.field_id;j="<img class='gform_delete' src='"+g+"/delete.png' onclick='gformDeleteUploadedFile("+k+","+m+", this);' onkeypress='gformDeleteUploadedFile("+k+","+m+", this);' alt='"+f.delete_file+"' title='"+f.delete_file+"' /> "+j,j=gform.applyFilters("gform_file_upload_markup",j,c,a,f,g),b("#"+c.id).html(j),100==c.percent&&(i.status&&"ok"==i.status?l(m,i.data):h(a.settings.gf_vars.message_id,f.unknown_error+": "+c.name))}}),b("#"+p.drop_element).on({dragenter:o,dragover:o})}function d(){return"xxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;return("x"==a?b:3&b|8).toString(16)})}function e(a){return b("<div/>").text(a).html()}a.uploaders={};var f="undefined"!=typeof gform_gravityforms?gform_gravityforms.strings:{},g="undefined"!=typeof gform_gravityforms?gform_gravityforms.vars.images_url:"";b(document).bind("gform_post_render",function(d,e){b("form#gform_"+e+" .gform_fileupload_multifile").each(function(){c(this)});var g=b("form#gform_"+e);g.length>0&&g.submit(function(){var c=!1;if(b.each(a.uploaders,function(a,b){if(b.total.queued>0)return c=!0,!1}),c)return alert(f.currently_uploading),window["gf_submitting_"+e]=!1,b("#gform_ajax_spinner_"+e).remove(),!1})}),b(document).bind("gform_post_conditional_logic",function(c,d,e,f){f||b.each(a.uploaders,function(a,b){b.refresh()})}),b(document).ready(function(){"undefined"!=typeof adminpage&&"toplevel_page_gf_edit_forms"===adminpage||"undefined"==typeof plupload?b(".gform_button_select_files").prop("disabled",!0):"undefined"!=typeof adminpage&&adminpage.indexOf("_page_gf_entries")>-1&&b(".gform_fileupload_multifile").each(function(){c(this)})}),a.setup=function(a){c(a)}}(window.gfMultiFileUploader=window.gfMultiFileUploader||{},jQuery);var __gf_keyup_timeout;jQuery(document).on("change keyup",".gfield_trigger_change input, .gfield_trigger_change select, .gfield_trigger_change textarea",function(a){gf_raw_input_change(a,this)}),jQuery(document).on("submit.gravityforms",".gform_wrapper form",function(a){var b=jQuery(this).closest(".gform_wrapper"),c=b.attr("id").split("_")[2],d=b.find(".gform_page").length>0,e=b.find('input[name^="gform_source_page_number_"]').val(),f=b.find('input[name^="gform_target_page_number_"]').val();if(d){var g=b.find(".gform_page:visible"),h=g.find(".gform_page_footer .gform_next_button");0===h.length&&(h=g.find(".gform_page_footer .gform_button")),!h.is(":visible")&&f>e&&(window["gf_submitting_"+c]=!1,a.preventDefault())}}),window.rgars,window.rgar,String.prototype.format=function(){var a=arguments;return this.replace(/{(\d+)}/g,function(b,c){return void 0!==a[c]?a[c]:b})};

(function(t){"use strict";function e(t,e,r){return t.addEventListener?t.addEventListener(e,r,!1):t.attachEvent?t.attachEvent("on"+e,r):void 0}function r(t,e){var r,n;for(r=0,n=t.length;n>r;r++)if(t[r]===e)return!0;return!1}function n(t,e){var r;t.createTextRange?(r=t.createTextRange(),r.move("character",e),r.select()):t.selectionStart&&(t.focus(),t.setSelectionRange(e,e))}function a(t,e){try{return t.type=e,!0}catch(r){return!1}}t.Placeholders={Utils:{addEventListener:e,inArray:r,moveCaret:n,changeType:a}}})(this),function(t){"use strict";function e(){}function r(){try{return document.activeElement}catch(t){}}function n(t,e){var r,n,a=!!e&&t.value!==e,u=t.value===t.getAttribute(V);return(a||u)&&"true"===t.getAttribute(P)?(t.removeAttribute(P),t.value=t.value.replace(t.getAttribute(V),""),t.className=t.className.replace(R,""),n=t.getAttribute(z),parseInt(n,10)>=0&&(t.setAttribute("maxLength",n),t.removeAttribute(z)),r=t.getAttribute(D),r&&(t.type=r),!0):!1}function a(t){var e,r,n=t.getAttribute(V);return""===t.value&&n?(t.setAttribute(P,"true"),t.value=n,t.className+=" "+I,r=t.getAttribute(z),r||(t.setAttribute(z,t.maxLength),t.removeAttribute("maxLength")),e=t.getAttribute(D),e?t.type="text":"password"===t.type&&K.changeType(t,"text")&&t.setAttribute(D,"password"),!0):!1}function u(t,e){var r,n,a,u,i,l,o;if(t&&t.getAttribute(V))e(t);else for(a=t?t.getElementsByTagName("input"):f,u=t?t.getElementsByTagName("textarea"):h,r=a?a.length:0,n=u?u.length:0,o=0,l=r+n;l>o;o++)i=r>o?a[o]:u[o-r],e(i)}function i(t){u(t,n)}function l(t){u(t,a)}function o(t){return function(){b&&t.value===t.getAttribute(V)&&"true"===t.getAttribute(P)?K.moveCaret(t,0):n(t)}}function c(t){return function(){a(t)}}function s(t){return function(e){return A=t.value,"true"===t.getAttribute(P)&&A===t.getAttribute(V)&&K.inArray(C,e.keyCode)?(e.preventDefault&&e.preventDefault(),!1):void 0}}function d(t){return function(){n(t,A),""===t.value&&(t.blur(),K.moveCaret(t,0))}}function v(t){return function(){t===r()&&t.value===t.getAttribute(V)&&"true"===t.getAttribute(P)&&K.moveCaret(t,0)}}function g(t){return function(){i(t)}}function p(t){t.form&&(T=t.form,"string"==typeof T&&(T=document.getElementById(T)),T.getAttribute(U)||(K.addEventListener(T,"submit",g(T)),T.setAttribute(U,"true"))),K.addEventListener(t,"focus",o(t)),K.addEventListener(t,"blur",c(t)),b&&(K.addEventListener(t,"keydown",s(t)),K.addEventListener(t,"keyup",d(t)),K.addEventListener(t,"click",v(t))),t.setAttribute(j,"true"),t.setAttribute(V,x),(b||t!==r())&&a(t)}var f,h,b,m,A,y,E,x,L,T,S,N,w,B=["text","search","url","tel","email","password","number","textarea"],C=[27,33,34,35,36,37,38,39,40,8,46],k="#ccc",I="placeholdersjs",R=RegExp("(?:^|\\s)"+I+"(?!\\S)"),V="data-placeholder-value",P="data-placeholder-active",D="data-placeholder-type",U="data-placeholder-submit",j="data-placeholder-bound",q="data-placeholder-focus",Q="data-placeholder-live",z="data-placeholder-maxlength",F=document.createElement("input"),G=document.getElementsByTagName("head")[0],H=document.documentElement,J=t.Placeholders,K=J.Utils;if(J.nativeSupport=void 0!==F.placeholder,!J.nativeSupport){for(f=document.getElementsByTagName("input"),h=document.getElementsByTagName("textarea"),b="false"===H.getAttribute(q),m="false"!==H.getAttribute(Q),y=document.createElement("style"),y.type="text/css",E=document.createTextNode("."+I+" { color:"+k+"; }"),y.styleSheet?y.styleSheet.cssText=E.nodeValue:y.appendChild(E),G.insertBefore(y,G.firstChild),w=0,N=f.length+h.length;N>w;w++)S=f.length>w?f[w]:h[w-f.length],x=S.attributes.placeholder,x&&(x=x.nodeValue,x&&K.inArray(B,S.type)&&p(S));L=setInterval(function(){for(w=0,N=f.length+h.length;N>w;w++)S=f.length>w?f[w]:h[w-f.length],x=S.attributes.placeholder,x?(x=x.nodeValue,x&&K.inArray(B,S.type)&&(S.getAttribute(j)||p(S),(x!==S.getAttribute(V)||"password"===S.type&&!S.getAttribute(D))&&("password"===S.type&&!S.getAttribute(D)&&K.changeType(S,"text")&&S.setAttribute(D,"password"),S.value===S.getAttribute(V)&&(S.value=x),S.setAttribute(V,x)))):S.getAttribute(P)&&(n(S),S.removeAttribute(V));m||clearInterval(L)},100)}K.addEventListener(t,"beforeunload",function(){J.disable()}),J.disable=J.nativeSupport?e:i,J.enable=J.nativeSupport?e:l}(this),function(t){"use strict";var e=t.fn.val,r=t.fn.prop;Placeholders.nativeSupport||(t.fn.val=function(t){var r=e.apply(this,arguments),n=this.eq(0).data("placeholder-value");return void 0===t&&this.eq(0).data("placeholder-active")&&r===n?"":r},t.fn.prop=function(t,e){return void 0===e&&this.eq(0).data("placeholder-active")&&"value"===t?"":r.apply(this,arguments)})}(jQuery);
!function(e,n,t,o,r,a){function i(e,n){var t=typeof e[n];return"function"==t||!("object"!=t||!e[n])||"unknown"==t}function s(e,n){return!("object"!=typeof e[n]||!e[n])}function c(e){return"[object Array]"===Object.prototype.toString.call(e)}function l(){var e="Shockwave Flash",n="application/x-shockwave-flash";if(!w(navigator.plugins)&&"object"==typeof navigator.plugins[e]){var t=navigator.plugins[e].description;t&&!w(navigator.mimeTypes)&&navigator.mimeTypes[n]&&navigator.mimeTypes[n].enabledPlugin&&(N=t.match(/\d+/g))}if(!N){var o;try{o=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),N=Array.prototype.slice.call(o.GetVariable("$version").match(/(\d+),(\d+),(\d+),(\d+)/),1),o=null}catch(r){}}if(!N)return!1;var a=parseInt(N[0],10),i=parseInt(N[1],10);return I=a>9&&i>0,!0}function u(){if(!z){z=!0;for(var e=0;e<X.length;e++)X[e]();X.length=0}}function d(e,n){return z?void e.call(n):void X.push(function(){e.call(n)})}function p(){var e=parent;if(""!==j)for(var n=0,t=j.split(".");n<t.length;n++)e=e[t[n]];return e.easyXDM}function f(n){return e.easyXDM=W,j=n,j&&(B="easyXDM_"+j.replace(".","_")+"_"),L}function h(e){return e.match(P)[3]}function g(e){return e.match(P)[4]||""}function m(e){var n=e.toLowerCase().match(P),t=n[2],o=n[3],r=n[4]||"";return("http:"==t&&":80"==r||"https:"==t&&":443"==r)&&(r=""),t+"//"+o+r}function v(e){if(e=e.replace(H,"$1/"),!e.match(/^(http||https):\/\//)){var n="/"===e.substring(0,1)?"":t.pathname;"/"!==n.substring(n.length-1)&&(n=n.substring(0,n.lastIndexOf("/")+1)),e=t.protocol+"//"+t.host+n+e}for(;F.test(e);)e=e.replace(F,"");return e}function y(e,n){var t="",o=e.indexOf("#");-1!==o&&(t=e.substring(o),e=e.substring(0,o));var r=[];for(var i in n)n.hasOwnProperty(i)&&r.push(i+"="+a(n[i]));return e+(U?"#":-1==e.indexOf("?")?"?":"&")+r.join("&")+t}function w(e){return void 0===e}function k(e,n,t){var o;for(var r in n)n.hasOwnProperty(r)&&(r in e?(o=n[r],"object"==typeof o?k(e[r],o,t):t||(e[r]=n[r])):e[r]=n[r]);return e}function _(){var e=n.body.appendChild(n.createElement("form")),t=e.appendChild(n.createElement("input"));t.name=B+"TEST"+E,T=t!==e.elements[t.name],n.body.removeChild(e)}function b(e){w(T)&&_();var t;T?t=n.createElement('<iframe name="'+e.props.name+'"/>'):(t=n.createElement("IFRAME"),t.name=e.props.name),t.id=t.name=e.props.name,delete e.props.name,"string"==typeof e.container&&(e.container=n.getElementById(e.container)),e.container||(k(t.style,{position:"absolute",top:"-2000px",left:"0px"}),e.container=n.body);var o=e.props.src;if(e.props.src="javascript:false",k(t,e.props),t.border=t.frameBorder=0,t.allowTransparency=!0,e.container.appendChild(t),e.onLoad&&C(t,"load",e.onLoad),e.usePost){var r,a=e.container.appendChild(n.createElement("form"));if(a.target=t.name,a.action=o,a.method="POST","object"==typeof e.usePost)for(var i in e.usePost)e.usePost.hasOwnProperty(i)&&(T?r=n.createElement('<input name="'+i+'"/>'):(r=n.createElement("INPUT"),r.name=i),r.value=e.usePost[i],a.appendChild(r));a.submit(),a.parentNode.removeChild(a)}else t.src=o;return e.props.src=o,t}function O(e,n){"string"==typeof e&&(e=[e]);for(var t,o=e.length;o--;)if(t=e[o],t=RegExp("^"==t.substr(0,1)?t:"^"+t.replace(/(\*)/g,".$1").replace(/\?/g,".")+"$"),t.test(n))return!0;return!1}function x(o){var r,a=o.protocol;if(o.isHost=o.isHost||w(q.xdm_p),U=o.hash||!1,o.props||(o.props={}),o.isHost)o.remote=v(o.remote),o.channel=o.channel||"default"+E++,o.secret=Math.random().toString(16).substring(2),w(a)&&(a=m(t.href)==m(o.remote)?"4":i(e,"postMessage")||i(n,"postMessage")?"1":o.swf&&i(e,"ActiveXObject")&&l()?"6":"Gecko"===navigator.product&&"frameElement"in e&&-1==navigator.userAgent.indexOf("WebKit")?"5":o.remoteHelper?"2":"0");else if(o.channel=q.xdm_c.replace(/["'<>\\]/g,""),o.secret=q.xdm_s,o.remote=q.xdm_e.replace(/["'<>\\]/g,""),a=q.xdm_p,o.acl&&!O(o.acl,o.remote))throw Error("Access denied for "+o.remote);switch(o.protocol=a,a){case"0":if(k(o,{interval:100,delay:2e3,useResize:!0,useParent:!1,usePolling:!1},!0),o.isHost){if(!o.local){for(var s,c=t.protocol+"//"+t.host,u=n.body.getElementsByTagName("img"),d=u.length;d--;)if(s=u[d],s.src.substring(0,c.length)===c){o.local=s.src;break}o.local||(o.local=e)}var p={xdm_c:o.channel,xdm_p:0};o.local===e?(o.usePolling=!0,o.useParent=!0,o.local=t.protocol+"//"+t.host+t.pathname+t.search,p.xdm_e=o.local,p.xdm_pa=1):p.xdm_e=v(o.local),o.container&&(o.useResize=!1,p.xdm_po=1),o.remote=y(o.remote,p)}else k(o,{channel:q.xdm_c,remote:q.xdm_e,useParent:!w(q.xdm_pa),usePolling:!w(q.xdm_po),useResize:o.useParent?!1:o.useResize});r=[new L.stack.HashTransport(o),new L.stack.ReliableBehavior({}),new L.stack.QueueBehavior({encode:!0,maxLength:4e3-o.remote.length}),new L.stack.VerifyBehavior({initiate:o.isHost})];break;case"1":r=[new L.stack.PostMessageTransport(o)];break;case"2":o.isHost&&(o.remoteHelper=v(o.remoteHelper)),r=[new L.stack.NameTransport(o),new L.stack.QueueBehavior,new L.stack.VerifyBehavior({initiate:o.isHost})];break;case"3":r=[new L.stack.NixTransport(o)];break;case"4":r=[new L.stack.SameOriginTransport(o)];break;case"5":r=[new L.stack.FrameElementTransport(o)];break;case"6":N||l(),r=[new L.stack.FlashTransport(o)]}return r.push(new L.stack.QueueBehavior({lazy:o.lazy,remove:!0})),r}function M(e){for(var n,t={incoming:function(e,n){this.up.incoming(e,n)},outgoing:function(e,n){this.down.outgoing(e,n)},callback:function(e){this.up.callback(e)},init:function(){this.down.init()},destroy:function(){this.down.destroy()}},o=0,r=e.length;r>o;o++)n=e[o],k(n,t,!0),0!==o&&(n.down=e[o-1]),o!==r-1&&(n.up=e[o+1]);return n}function S(e){e.up.down=e.down,e.down.up=e.up,e.up=e.down=null}var T,N,I,C,A,D=this,E=Math.floor(1e4*Math.random()),R=Function.prototype,P=/^((http.?:)\/\/([^:\/\s]+)(:\d+)*)/,F=/[\-\w]+\/\.\.\//,H=/([^:])\/\//g,j="",L={},W=e.easyXDM,B="easyXDM_",U=!1;if(i(e,"addEventListener"))C=function(e,n,t){e.addEventListener(n,t,!1)},A=function(e,n,t){e.removeEventListener(n,t,!1)};else{if(!i(e,"attachEvent"))throw Error("Browser not supported");C=function(e,n,t){e.attachEvent("on"+n,t)},A=function(e,n,t){e.detachEvent("on"+n,t)}}var J,z=!1,X=[];if("readyState"in n?(J=n.readyState,z="complete"==J||~navigator.userAgent.indexOf("AppleWebKit/")&&("loaded"==J||"interactive"==J)):z=!!n.body,!z){if(i(e,"addEventListener"))C(n,"DOMContentLoaded",u);else if(C(n,"readystatechange",function(){"complete"==n.readyState&&u()}),n.documentElement.doScroll&&e===top){var V=function(){if(!z){try{n.documentElement.doScroll("left")}catch(e){return void o(V,1)}u()}};V()}C(e,"load",u)}var q=function(e){e=e.substring(1).split("&");for(var n,t={},o=e.length;o--;)n=e[o].split("="),t[n[0]]=r(n[1]);return t}(/xdm_e=/.test(t.search)?t.search:t.hash),G=function(){var e={},n={a:[1,2,3]},t='{"a":[1,2,3]}';return"undefined"!=typeof JSON&&"function"==typeof JSON.stringify&&JSON.stringify(n).replace(/\s/g,"")===t?JSON:(Object.toJSON&&Object.toJSON(n).replace(/\s/g,"")===t&&(e.stringify=Object.toJSON),"function"==typeof String.prototype.evalJSON&&(n=t.evalJSON(),n.a&&3===n.a.length&&3===n.a[2]&&(e.parse=function(e){return e.evalJSON()})),e.stringify&&e.parse?(G=function(){return e},e):null)};k(L,{version:"2.4.19.3",query:q,stack:{},apply:k,getJSONObject:G,whenReady:d,noConflict:f}),L.DomHelper={on:C,un:A,requiresJSON:function(t){s(e,"JSON")||n.write('<script type="text/javascript" src="'+t+'"></script>')}},function(){var e={};L.Fn={set:function(n,t){e[n]=t},get:function(n,t){if(e.hasOwnProperty(n)){var o=e[n];return t&&delete e[n],o}}}}(),L.Socket=function(e){var n=M(x(e).concat([{incoming:function(n,t){e.onMessage(n,t)},callback:function(n){e.onReady&&e.onReady(n)}}])),t=m(e.remote);this.origin=m(e.remote),this.destroy=function(){n.destroy()},this.postMessage=function(e){n.outgoing(e,t)},n.init()},L.Rpc=function(e,n){if(n.local)for(var t in n.local)if(n.local.hasOwnProperty(t)){var o=n.local[t];"function"==typeof o&&(n.local[t]={method:o})}var r=M(x(e).concat([new L.stack.RpcBehavior(this,n),{callback:function(n){e.onReady&&e.onReady(n)}}]));this.origin=m(e.remote),this.destroy=function(){r.destroy()},r.init()},L.stack.SameOriginTransport=function(e){var n,r,a,i;return n={outgoing:function(e,n,t){a(e),t&&t()},destroy:function(){r&&(r.parentNode.removeChild(r),r=null)},onDOMReady:function(){i=m(e.remote),e.isHost?(k(e.props,{src:y(e.remote,{xdm_e:t.protocol+"//"+t.host+t.pathname,xdm_c:e.channel,xdm_p:4}),name:B+e.channel+"_provider"}),r=b(e),L.Fn.set(e.channel,function(e){return a=e,o(function(){n.up.callback(!0)},0),function(e){n.up.incoming(e,i)}})):(a=p().Fn.get(e.channel,!0)(function(e){n.up.incoming(e,i)}),o(function(){n.up.callback(!0)},0))},init:function(){d(n.onDOMReady,n)}}},L.stack.FlashTransport=function(e){function r(e){o(function(){s.up.incoming(e,l)},0)}function i(t){var o=e.swf+"?host="+e.isHost,r="easyXDM_swf_"+Math.floor(1e4*Math.random());L.Fn.set("flash_loaded"+t.replace(/[\-.]/g,"_"),function(){L.stack.FlashTransport[t].swf=u=p.firstChild;for(var e=L.stack.FlashTransport[t].queue,n=0;n<e.length;n++)e[n]();e.length=0}),e.swfContainer?p="string"==typeof e.swfContainer?n.getElementById(e.swfContainer):e.swfContainer:(p=n.createElement("div"),k(p.style,I&&e.swfNoThrottle?{height:"20px",width:"20px",position:"fixed",right:0,top:0}:{height:"1px",width:"1px",position:"absolute",overflow:"hidden",right:0,top:0}),n.body.appendChild(p));var i="callback=flash_loaded"+a(t.replace(/[\-.]/g,"_"))+"&proto="+D.location.protocol+"&domain="+a(h(D.location.href))+"&port="+a(g(D.location.href))+"&ns="+a(j);p.innerHTML="<object height='20' width='20' type='application/x-shockwave-flash' id='"+r+"' data='"+o+"'><param name='allowScriptAccess' value='always'></param><param name='wmode' value='transparent'><param name='movie' value='"+o+"'></param><param name='flashvars' value='"+i+"'></param><embed type='application/x-shockwave-flash' FlashVars='"+i+"' allowScriptAccess='always' wmode='transparent' src='"+o+"' height='1' width='1'></embed></object>"}var s,c,l,u,p;return s={outgoing:function(n,t,o){u.postMessage(e.channel,""+n),o&&o()},destroy:function(){try{u.destroyChannel(e.channel)}catch(n){}u=null,c&&(c.parentNode.removeChild(c),c=null)},onDOMReady:function(){l=e.remote,L.Fn.set("flash_"+e.channel+"_init",function(){o(function(){s.up.callback(!0)})}),L.Fn.set("flash_"+e.channel+"_onMessage",r),e.swf=v(e.swf);var n=h(e.swf),a=function(){L.stack.FlashTransport[n].init=!0,u=L.stack.FlashTransport[n].swf,u.createChannel(e.channel,e.secret,m(e.remote),e.isHost),e.isHost&&(I&&e.swfNoThrottle&&k(e.props,{position:"fixed",right:0,top:0,height:"20px",width:"20px"}),k(e.props,{src:y(e.remote,{xdm_e:m(t.href),xdm_c:e.channel,xdm_p:6,xdm_s:e.secret}),name:B+e.channel+"_provider"}),c=b(e))};L.stack.FlashTransport[n]&&L.stack.FlashTransport[n].init?a():L.stack.FlashTransport[n]?L.stack.FlashTransport[n].queue.push(a):(L.stack.FlashTransport[n]={queue:[a]},i(n))},init:function(){d(s.onDOMReady,s)}}},L.stack.PostMessageTransport=function(n){function r(e){if(e.origin)return m(e.origin);if(e.uri)return m(e.uri);if(e.domain)return t.protocol+"//"+e.domain;throw"Unable to retrieve the origin of the event"}function a(e){var t=r(e);t==l&&e.data.substring(0,n.channel.length+1)==n.channel+" "&&i.up.incoming(e.data.substring(n.channel.length+1),t)}var i,s,c,l;return i={outgoing:function(e,t,o){c.postMessage(n.channel+" "+e,t||l),o&&o()},destroy:function(){A(e,"message",a),s&&(c=null,s.parentNode.removeChild(s),s=null)},onDOMReady:function(){if(l=m(n.remote),n.isHost){var r=function(t){t.data==n.channel+"-ready"&&(c="postMessage"in s.contentWindow?s.contentWindow:s.contentWindow.document,A(e,"message",r),C(e,"message",a),o(function(){i.up.callback(!0)},0))};C(e,"message",r),k(n.props,{src:y(n.remote,{xdm_e:m(t.href),xdm_c:n.channel,xdm_p:1}),name:B+n.channel+"_provider"}),s=b(n)}else C(e,"message",a),c="postMessage"in e.parent?e.parent:e.parent.document,c.postMessage(n.channel+"-ready",l),o(function(){i.up.callback(!0)},0)},init:function(){d(i.onDOMReady,i)}}},L.stack.FrameElementTransport=function(r){var a,i,s,c;return a={outgoing:function(e,n,t){s.call(this,e),t&&t()},destroy:function(){i&&(i.parentNode.removeChild(i),i=null)},onDOMReady:function(){c=m(r.remote),r.isHost?(k(r.props,{src:y(r.remote,{xdm_e:m(t.href),xdm_c:r.channel,xdm_p:5}),name:B+r.channel+"_provider"}),i=b(r),i.fn=function(e){return delete i.fn,s=e,o(function(){a.up.callback(!0)},0),function(e){a.up.incoming(e,c)}}):(n.referrer&&m(n.referrer)!=q.xdm_e&&(e.top.location=q.xdm_e),s=e.frameElement.fn(function(e){a.up.incoming(e,c)}),a.up.callback(!0))},init:function(){d(a.onDOMReady,a)}}},L.stack.NameTransport=function(e){function n(n){var t=e.remoteHelper+(s?"#_3":"#_2")+e.channel;c.contentWindow.sendMessage(n,t)}function t(){s?2!==++u&&s||i.up.callback(!0):(n("ready"),i.up.callback(!0))}function r(e){i.up.incoming(e,f)}function a(){p&&o(function(){p(!0)},0)}var i,s,c,l,u,p,f,h;return i={outgoing:function(e,t,o){p=o,n(e)},destroy:function(){c.parentNode.removeChild(c),c=null,s&&(l.parentNode.removeChild(l),l=null)},onDOMReady:function(){s=e.isHost,u=0,f=m(e.remote),e.local=v(e.local),s?(L.Fn.set(e.channel,function(n){s&&"ready"===n&&(L.Fn.set(e.channel,r),t())}),h=y(e.remote,{xdm_e:e.local,xdm_c:e.channel,xdm_p:2}),k(e.props,{src:h+"#"+e.channel,name:B+e.channel+"_provider"}),l=b(e)):(e.remoteHelper=e.remote,L.Fn.set(e.channel,r));var n=function(){var r=c||this;A(r,"load",n),L.Fn.set(e.channel+"_load",a),function i(){"function"==typeof r.contentWindow.sendMessage?t():o(i,50)}()};c=b({props:{src:e.local+"#_4"+e.channel},onLoad:n})},init:function(){d(i.onDOMReady,i)}}},L.stack.HashTransport=function(n){function t(e){if(g){var t=n.remote+"#"+f++ +"_"+e;(c||!v?g.contentWindow:g).location=t}}function r(e){p=e,s.up.incoming(p.substring(p.indexOf("_")+1),y)}function a(){if(h){var e=h.location.href,n="",t=e.indexOf("#");-1!=t&&(n=e.substring(t)),n&&n!=p&&r(n)}}function i(){l=setInterval(a,u)}var s,c,l,u,p,f,h,g,v,y;return s={outgoing:function(e){t(e)},destroy:function(){e.clearInterval(l),(c||!v)&&g.parentNode.removeChild(g),g=null},onDOMReady:function(){if(c=n.isHost,u=n.interval,p="#"+n.channel,f=0,v=n.useParent,y=m(n.remote),c){if(k(n.props,{src:n.remote,name:B+n.channel+"_provider"}),v)n.onLoad=function(){h=e,i(),s.up.callback(!0)};else{var t=0,r=n.delay/50;!function a(){if(++t>r)throw Error("Unable to reference listenerwindow");try{h=g.contentWindow.frames[B+n.channel+"_consumer"]}catch(e){}h?(i(),s.up.callback(!0)):o(a,50)}()}g=b(n)}else h=e,i(),v?(g=parent,s.up.callback(!0)):(k(n,{props:{src:n.remote+"#"+n.channel+new Date,name:B+n.channel+"_consumer"},onLoad:function(){s.up.callback(!0)}}),g=b(n))},init:function(){d(s.onDOMReady,s)}}},L.stack.ReliableBehavior=function(){var e,n,t=0,o=0,r="";return e={incoming:function(a,i){var s=a.indexOf("_"),c=a.substring(0,s).split(",");a=a.substring(s+1),c[0]==t&&(r="",n&&n(!0)),a.length>0&&(e.down.outgoing(c[1]+","+t+"_"+r,i),o!=c[1]&&(o=c[1],e.up.incoming(a,i)))},outgoing:function(a,i,s){r=a,n=s,e.down.outgoing(o+","+ ++t+"_"+a,i)}}},L.stack.QueueBehavior=function(e){function n(){if(e.remove&&0===s.length)return void S(t);if(!c&&0!==s.length&&!i){c=!0;var r=s.shift();t.down.outgoing(r.data,r.origin,function(e){c=!1,r.callback&&o(function(){r.callback(e)},0),n()})}}var t,i,s=[],c=!0,l="",u=0,d=!1,p=!1;return t={init:function(){w(e)&&(e={}),e.maxLength&&(u=e.maxLength,p=!0),e.lazy?d=!0:t.down.init()},callback:function(e){c=!1;var o=t.up;n(),o.callback(e)},incoming:function(n,o){if(p){var a=n.indexOf("_"),i=parseInt(n.substring(0,a),10);l+=n.substring(a+1),0===i&&(e.encode&&(l=r(l)),t.up.incoming(l,o),l="")}else t.up.incoming(n,o)},outgoing:function(o,r,i){e.encode&&(o=a(o));var c,l=[];if(p){for(;0!==o.length;)c=o.substring(0,u),o=o.substring(c.length),l.push(c);for(;c=l.shift();)s.push({data:l.length+"_"+c,origin:r,callback:0===l.length?i:null})}else s.push({data:o,origin:r,callback:i});d?t.down.init():n()},destroy:function(){i=!0,t.down.destroy()}}},L.stack.VerifyBehavior=function(e){function n(){o=Math.random().toString(16).substring(2),t.down.outgoing(o)}var t,o,r;return t={incoming:function(a,i){var s=a.indexOf("_");-1===s?a===o?t.up.callback(!0):r||(r=a,e.initiate||n(),t.down.outgoing(a)):a.substring(0,s)===r&&t.up.incoming(a.substring(s+1),i)},outgoing:function(e,n,r){t.down.outgoing(o+"_"+e,n,r)},callback:function(){e.initiate&&n()}}},L.stack.RpcBehavior=function(e,n){function t(e){e.jsonrpc="2.0",a.down.outgoing(i.stringify(e))}function o(e,n){var o=Array.prototype.slice;return function(){var r,a=arguments.length,i={method:n};a>0&&"function"==typeof arguments[a-1]?(a>1&&"function"==typeof arguments[a-2]?(r={success:arguments[a-2],error:arguments[a-1]},i.params=o.call(arguments,0,a-2)):(r={success:arguments[a-1]},i.params=o.call(arguments,0,a-1)),l[""+ ++s]=r,i.id=s):i.params=o.call(arguments,0),e.namedParams&&1===i.params.length&&(i.params=i.params[0]),t(i)}}function r(e,n,o,r){if(!o)return void(n&&t({id:n,error:{code:-32601,message:"Procedure not found."}}));var a,i;n?(a=function(e){a=R,t({id:n,result:e})},i=function(e,o){i=R;var r={id:n,error:{code:-32099,message:e}};o&&(r.error.data=o),t(r)}):a=i=R,c(r)||(r=[r]);try{var s=o.method.apply(o.scope,r.concat([a,i]));w(s)||a(s)}catch(l){i(l.message)}}var a,i=n.serializer||G(),s=0,l={};return a={incoming:function(e){var o=i.parse(e);if(o.method)n.handle?n.handle(o,t):r(o.method,o.id,n.local[o.method],o.params);else{var a=l[o.id];o.error?a.error&&a.error(o.error):a.success&&a.success(o.result),delete l[o.id]}},init:function(){if(n.remote)for(var t in n.remote)n.remote.hasOwnProperty(t)&&(e[t]=o(n.remote[t],t));a.down.init()},destroy:function(){for(var t in n.remote)n.remote.hasOwnProperty(t)&&e.hasOwnProperty(t)&&delete e[t];a.down.destroy()}}},D.easyXDM=L}(window,document,location,window.setTimeout,decodeURIComponent,encodeURIComponent),"undefined"==typeof SongkickWidget&&(SongkickWidget={}),SongkickWidget.Injector=function(){this._widgetAnchor=document.querySelector("a.songkick-widget"),this._widgetAnchor&&(this._detectStyle="true"===this._widgetAnchor.getAttribute("data-detect-style"),this._detectStyle&&(this._parentStyle=window.getComputedStyle(this._widgetAnchor.parentNode)))},SongkickWidget.Injector.prototype={CUSTOM_OPTIONS_WHITELIST:["background-color","font-color","font-family","font-size","font-weight","other-artists","theme","text-shadow","text-transform","track-button"],getCustomOptions:function(){var e="";if(!this._widgetAnchor)return e;for(var n=0;n<this.CUSTOM_OPTIONS_WHITELIST.length;n++){var t=this.CUSTOM_OPTIONS_WHITELIST[n],o=this._widgetAnchor.getAttribute("data-"+t);!o&&this._detectStyle&&this._parentStyle&&(cssProperty="font-color"===t?"color":t,o=this._parentStyle.getPropertyValue(cssProperty)),o&&(e+="&"+t+"="+encodeURIComponent(o))}return e},PRODUCTION_DOMAIN:"www.songkick.com",STAGING_DOMAIN:"www.staging.songkick.net",DEV_DOMAIN:"dev.staging.songkick.net",getRequestInformation:function(e){var n=RegExp("^https?://("+[this.PRODUCTION_DOMAIN,this.STAGING_DOMAIN,this.DEV_DOMAIN].join("|")+")/(artists|users|venues)/([0-9a-zA-Z-+._]+|[0-9]+)$"),t=n.exec(e);if(t){var o="";switch(t[1]){case this.PRODUCTION_DOMAIN:o="widget.songkick.com";break;case this.STAGING_DOMAIN:o="widget.staging.songkick.net";break;case this.DEV_DOMAIN:o="widget-dev.staging.songkick.net"}var r=null,a=null;switch(t[2]){case"venues":r="venue",a=t[3].match(/^\d+/)[0];break;case"users":r="username",a=t[3];break;case"artists":r="artist",a=t[3].match(/^\d+/)[0]}var i={targetDomain:o,stagingEnv:!!o.match(/staging\.songkick\.net/),resourceType:r,resourceId:a};return i}return null},loadIFrame:function(){if(this._widgetAnchor){var e=this.getRequestInformation(this._widgetAnchor.href);if(e){var n=this._widgetAnchor.style.width;n||(n="100%");var t=this._widgetAnchor.textContent||this._widgetAnchor.innerText;t||(t="");var o=document.createElement("div");this._widgetAnchor.parentNode.replaceChild(o,this._widgetAnchor);var r=e.resourceType,a=e.resourceId,i="https:"==document.location.protocol?"https:":"http:",s=e.targetDomain,c=i+"//"+s+"/songkick-widget.html?"+r+"="+encodeURIComponent(a)+"&header="+encodeURIComponent(t)+this.getCustomOptions();e.stagingEnv&&(c+="&staging=true"),new easyXDM.Socket({remote:c,container:o,hash:!0,channel:a+"_"+Math.floor(1e4*Math.random()+1),swf:i+"//"+s+"/easyxdm.swf",props:{className:"songkick-widget",style:{width:n}},onMessage:function(e){var n=o.firstChild;n.style.height=e+"px"}})}}}},function(){var e=new SongkickWidget.Injector;e.loadIFrame()}();
/*!
	Autosize 4.0.0
	license: MIT
	http://www.jacklmoore.com/autosize
*/
!function(e,t){if("function"==typeof define&&define.amd)define(["exports","module"],t);else if("undefined"!=typeof exports&&"undefined"!=typeof module)t(exports,module);else{var n={exports:{}};t(n.exports,n),e.autosize=n.exports}}(this,function(e,t){"use strict";function n(e){function t(){var t=window.getComputedStyle(e,null);"vertical"===t.resize?e.style.resize="none":"both"===t.resize&&(e.style.resize="horizontal"),s="content-box"===t.boxSizing?-(parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)):parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),isNaN(s)&&(s=0),l()}function n(t){var n=e.style.width;e.style.width="0px",e.offsetWidth,e.style.width=n,e.style.overflowY=t}function o(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push({node:e.parentNode,scrollTop:e.parentNode.scrollTop}),e=e.parentNode;return t}function r(){var t=e.style.height,n=o(e),r=document.documentElement&&document.documentElement.scrollTop;e.style.height="";var i=e.scrollHeight+s;return 0===e.scrollHeight?void(e.style.height=t):(e.style.height=i+"px",u=e.clientWidth,n.forEach(function(e){e.node.scrollTop=e.scrollTop}),void(r&&(document.documentElement.scrollTop=r)))}function l(){r();var t=Math.round(parseFloat(e.style.height)),o=window.getComputedStyle(e,null),i="content-box"===o.boxSizing?Math.round(parseFloat(o.height)):e.offsetHeight;if(i!==t?"hidden"===o.overflowY&&(n("scroll"),r(),i="content-box"===o.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight):"hidden"!==o.overflowY&&(n("hidden"),r(),i="content-box"===o.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight),a!==i){a=i;var l=d("autosize:resized");try{e.dispatchEvent(l)}catch(e){}}}if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!i.has(e)){var s=null,u=e.clientWidth,a=null,c=function(){e.clientWidth!==u&&l()},p=function(t){window.removeEventListener("resize",c,!1),e.removeEventListener("input",l,!1),e.removeEventListener("keyup",l,!1),e.removeEventListener("autosize:destroy",p,!1),e.removeEventListener("autosize:update",l,!1),Object.keys(t).forEach(function(n){e.style[n]=t[n]}),i.delete(e)}.bind(e,{height:e.style.height,resize:e.style.resize,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",p,!1),"onpropertychange"in e&&"oninput"in e&&e.addEventListener("keyup",l,!1),window.addEventListener("resize",c,!1),e.addEventListener("input",l,!1),e.addEventListener("autosize:update",l,!1),e.style.overflowX="hidden",e.style.wordWrap="break-word",i.set(e,{destroy:p,update:l}),t()}}function o(e){var t=i.get(e);t&&t.destroy()}function r(e){var t=i.get(e);t&&t.update()}var i="function"==typeof Map?new Map:function(){var e=[],t=[];return{has:function(t){return e.indexOf(t)>-1},get:function(n){return t[e.indexOf(n)]},set:function(n,o){e.indexOf(n)===-1&&(e.push(n),t.push(o))},delete:function(n){var o=e.indexOf(n);o>-1&&(e.splice(o,1),t.splice(o,1))}}}(),d=function(e){return new Event(e,{bubbles:!0})};try{new Event("test")}catch(e){d=function(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!1),t}}var l=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?(l=function(e){return e},l.destroy=function(e){return e},l.update=function(e){return e}):(l=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],function(e){return n(e,t)}),e},l.destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],o),e},l.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],r),e}),t.exports=l});
jQuery(document).ready(function(){autosize($('.ginput_container_textarea .textarea'));$(".woocommerce-checkout .button").addClass("cta");var didScroll;var lastScrollTop=0;var delta=5;var navbarHeight=$('header').outerHeight();$(window).scroll(function(event){didScroll=true;});setInterval(function(){if(didScroll){hasScrolled();didScroll=false;}},250);function hasScrolled(){var st=$(this).scrollTop();if(Math.abs(lastScrollTop-st)<=delta)
return;if(st>lastScrollTop&&st>navbarHeight){$('.nav-primary').removeClass('nav-down').addClass('nav-up');}else{if(st+$(window).height()<$(document).height()){$('.nav-primary').removeClass('nav-up').addClass('nav-down');}}
lastScrollTop=st;}});
$=jQuery;$(document).ready(function(){$('nav input.aws-search-field').wrap("<span id='search' class='search_box'></span>");$('nav input.aws-search-field').click(function(){if($('nav input.aws-search-field').val()==''){$('.aws-search-result').hide();}
if($(window).width()>585){$('nav #menu-header-right li:not(:last-child)').css('display','none');}else{$('.menu-contact').css('display','none');}
$('nav .widget-area .image').fadeOut('fast');$('.search_box').addClass('hidden');});$(document).click(function(){if(!$(event.target).closest('nav input.aws-search-field').length){$('nav input.aws-search-field').val('');if($(window).width()>585){$('nav #menu-header-right li:not(:last-child)').fadeIn('fast');}else{$('.menu-contact').fadeIn('fast');}
$('nav .widget-area .image').css('display','inline-block');$('.search_box').removeClass('hidden');}});});
$=jQuery;$(document).ready(function(){$('#place_order').unbind().click(function(e){e.preventDefault();if(($('#billing_first_name').val()=='')||($('#billing_last_name').val()=='')||($('#billing_email').val()=='')){alert('Please make sure you have filled out first name, last name, and email to receive your order.');}else if(($('input[name="ss_wc_mailchimp_opt_in"]:checked').length<1)&&(localized_sexy_config.total==0)){let result=confirm("Please consider allowing me to email you my new new music and show announcements. It's the only way I can continue giving away free music! Please click OK to accept!");if(result){$('input[name="ss_wc_mailchimp_opt_in"]').prop('checked',true);$('form[name="checkout"]').submit();}else{$('form[name="checkout"]').submit();}}else{$('form[name="checkout"]').submit();}});$('#powered').css('display','none');$('.home-subscribe-widget').hide();if(!readCookie('disableLandingPagePopUpNew3')){$('.home-subscribe-widget').fadeIn('fast');}
$('.filter-drop-spacer').remove();$('.close').unbind().click(function(e){e.preventDefault();var today=new Date();var nextweek=new Date(today.getFullYear(),today.getMonth(),today.getDate()+7);document.cookie='disableLandingPagePopUpNew3=1; '+'expires='+nextweek+';'+'path=/';$('.home-subscribe-widget').fadeOut('fast');});if($(window).width()<768){}else{$('.menu-item a').unbind().click(function(e){if($(this).attr('href')=='#'){e.preventDefault();window.location=$(this).parent().find('ul li a').first().attr('href');}});}});if($('p').hasClass('confirmed')){$('.instructions').hide();}
function readCookie(name){var nameEQ=name+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(nameEQ)==0)return c.substring(nameEQ.length,c.length);}
return null;};