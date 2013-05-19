// Magnific Popup v0.8.5 by Dmitry Semenov
// http://bit.ly/magnific-popup#build=inline+image+ajax+iframe+gallery+retina+fastclick
(function(e){var t="Close",n="BeforeAppend",r="MarkupParse",i="Open",s="Change",o="mfp",u="."+o,a="mfp-ready",f="mfp-removing",l="mfp-prevent-close",c,h=function(){},p=!!window.jQuery,d,v=e(window),m,g,y,b,w,E=function(e,t){c.ev.on(o+e+u,t)},S=function(t,n,r,i){var s=document.createElement("div");return s.className="mfp-"+t,r&&(s.innerHTML=r),i?n&&n.appendChild(s):(s=e(s),n&&s.appendTo(n)),s},x=function(t,n){c.ev.triggerHandler(o+t,n),c.st.callbacks&&(t=t.charAt(0).toLowerCase()+t.slice(1),c.st.callbacks[t]&&c.st.callbacks[t].apply(c,e.isArray(n)?n:[n]))},T=function(){(c.st.focus?c.content.find(c.st.focus).eq(0):c.wrap).focus()},N=function(t){if(t!==w||!c.currTemplate.closeBtn)c.currTemplate.closeBtn=e(c.st.closeMarkup.replace("%title%",c.st.tClose)),w=t;return c.currTemplate.closeBtn},C=function(){e.magnificPopup.instance||(c=new h,c.init(),e.magnificPopup.instance=c)},k=function(t){if(e(t).hasClass(l))return;var n=c.st.closeOnContentClick,r=c.st.closeOnBgClick;if(n&&r)return!0;if(!c.content||e(t).hasClass("mfp-close")||c.preloader&&t===c.preloader[0])return!0;if(t!==c.content[0]&&!e.contains(c.content[0],t)){if(r)return!0}else if(n)return!0;return!1};h.prototype={constructor:h,init:function(){var t=navigator.appVersion;c.isIE7=t.indexOf("MSIE 7.")!==-1,c.isIE8=t.indexOf("MSIE 8.")!==-1,c.isLowIE=c.isIE7||c.isIE8,c.isAndroid=/android/gi.test(t),c.isIOS=/iphone|ipad|ipod/gi.test(t),c.probablyMobile=c.isAndroid||c.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),m=e(document.body),g=e(document),c.popupsCache={}},open:function(t){c.items=t.items.length?t.items:[t.items];if(c.isOpen){c.updateItemHTML();return}var n;c.types=[],b="",c.ev=t.el||g;if(t.isObj)c.index=t.index||0;else{c.index=0;var s=t.items,o;for(n=0;n<s.length;n++){o=s[n],o.parsed&&(o=o.el[0]);if(o===t.el[0]){c.index=n;break}}}t.key?(c.popupsCache[t.key]||(c.popupsCache[t.key]={}),c.currTemplate=c.popupsCache[t.key]):c.currTemplate={},c.st=e.extend(!0,{},e.magnificPopup.defaults,t),c.fixedContentPos=c.st.fixedContentPos==="auto"?!c.probablyMobile:c.st.fixedContentPos,c.bgOverlay||(c.bgOverlay=S("bg").on("click"+u,function(){c.close()}),c.wrap=S("wrap").attr("tabindex",-1).on("click"+u,function(e){k(e.target)&&c.close()}),c.container=S("container",c.wrap)),c.contentContainer=S("content"),c.st.preloader&&(c.preloader=S("preloader",c.container,c.st.tLoading));var f=e.magnificPopup.modules;for(n=0;n<f.length;n++){var l=f[n];l=l.charAt(0).toUpperCase()+l.slice(1),c["init"+l].call(c)}x("BeforeOpen"),c.st.closeBtnInside?(E(r,function(e,t,n,r){n.close_replaceWith=N(r.type)}),b+=" mfp-close-btn-in"):c.wrap.append(N()),c.st.alignTop&&(b+=" mfp-align-top"),c.fixedContentPos?c.wrap.css({overflow:c.st.overflowY,overflowX:"hidden",overflowY:c.st.overflowY}):c.wrap.css({top:v.scrollTop(),position:"absolute"}),(c.st.fixedBgPos===!1||c.st.fixedBgPos==="auto"&&!c.fixedContentPos)&&c.bgOverlay.css({height:g.height(),position:"absolute"}),g.on("keyup"+u,function(e){e.keyCode===27&&c.close()}),v.on("resize"+u,function(){c.updateSize()}),c.st.closeOnContentClick||(b+=" mfp-auto-cursor"),b&&c.wrap.addClass(b);var h=c.wH=v.height(),p={};if(c.fixedContentPos){var d=c._getScrollbarSize();d&&(p.paddingRight=d)}c.fixedContentPos&&(c.isIE7?e("body, html").css("overflow","hidden"):p.overflow="hidden");var y=c.st.mainClass;c.isIE7&&(y+=" mfp-ie7"),y&&c._addClassToMFP(y),c.updateItemHTML(),x("BuildControls"),m.css(p),c.bgOverlay.add(c.wrap).prependTo(document.body),c._lastFocusedEl=document.activeElement,setTimeout(function(){c.content?(c._addClassToMFP(a),T()):c.bgOverlay.addClass(a),g.on("focusin"+u,function(t){if(t.target!==c.wrap[0]&&!e.contains(c.wrap[0],t.target))return T(),!1})},16),c.isOpen=!0,c.updateSize(h),x(i)},close:function(){if(!c.isOpen)return;c.isOpen=!1,c.st.removalDelay&&!c.isLowIE?(c._addClassToMFP(f),setTimeout(function(){c._close()},c.st.removalDelay)):c._close()},_close:function(){x(t);var n=f+" "+a+" ";c.bgOverlay.detach(),c.wrap.detach(),c.container.empty(),c.st.mainClass&&(n+=c.st.mainClass+" "),c._removeClassFromMFP(n);if(c.fixedContentPos){var r={paddingRight:0};c.isIE7?e("body, html").css("overflow","auto"):r.overflow="visible",m.css(r)}g.off("keyup"+u+" focusin"+u),c.ev.off(u),c.wrap.attr("class","mfp-wrap").removeAttr("style"),c.bgOverlay.attr("class","mfp-bg"),c.container.attr("class","mfp-container"),(!c.st.closeBtnInside||c.currTemplate[c.currItem.type]===!0)&&c.currTemplate.closeBtn&&c.currTemplate.closeBtn.detach(),c._lastFocusedEl&&e(c._lastFocusedEl).focus(),c.currItem=null,c.content=null,c.currTemplate=null,c.prevHeight=0},updateSize:function(e){if(c.isIOS){var t=document.documentElement.clientWidth/window.innerWidth,n=window.innerHeight*t;c.wrap.css("height",n),c.wH=n}else c.wH=e||v.height();x("Resize")},updateItemHTML:function(){var t=c.items[c.index];c.contentContainer.detach(),c.content&&c.content.detach(),t.parsed||(t=c.parseEl(c.index));var n=t.type;x("BeforeChange",[c.currItem?c.currItem.type:"",n]),c.currItem=t;if(!c.currTemplate[n]){var r=c.st[n]?c.st[n].markup:!1;x("FirstMarkupParse",r),r?c.currTemplate[n]=e(r):c.currTemplate[n]=!0}y&&y!==t.type&&c.container.removeClass("mfp-"+y+"-holder");var i=c["get"+n.charAt(0).toUpperCase()+n.slice(1)](t,c.currTemplate[n]);c.appendContent(i,n),t.preloaded=!0,x(s,t),y=t.type,c.container.prepend(c.contentContainer),x("AfterChange")},appendContent:function(e,t){c.content=e,e?c.st.closeBtnInside&&c.currTemplate[t]===!0?c.content.find(".mfp-close").length||c.content.append(N()):c.content=e:c.content="",x(n),c.container.addClass("mfp-"+t+"-holder"),c.contentContainer.append(c.content)},parseEl:function(t){var n=c.items[t],r=n.type;n.tagName?n={el:e(n)}:n={data:n,src:n.src};if(n.el){var i=c.types;for(var s=0;s<i.length;s++)if(n.el.hasClass("mfp-"+i[s])){r=i[s];break}n.src=n.el.attr("data-mfp-src"),n.src||(n.src=n.el.attr("href"))}return n.type=r||c.st.type||"inline",n.index=t,n.parsed=!0,c.items[t]=n,x("ElementParse",n),c.items[t]},addGroup:function(e,t){var n=function(n){n.mfpEl=this,c._openClick(n,e,t)};t||(t={});var r="click.magnificPopup";t.mainEl=e,t.items?(t.isObj=!0,e.off(r).on(r,n)):(t.isObj=!1,t.delegate?e.off(r).on(r,t.delegate,n):(t.items=e,e.off(r).on(r,n)))},_openClick:function(t,n,r){var i=r.midClick!==undefined?r.midClick:e.magnificPopup.defaults.midClick;if(i||t.which!==2){var s=r.disableOn!==undefined?r.disableOn:e.magnificPopup.defaults.disableOn;if(s)if(e.isFunction(s)){if(!s.call(c))return!0}else if(v.width()<s)return!0;t.type&&t.preventDefault(),r.el=e(t.mfpEl),r.delegate&&(r.items=n.find(r.delegate)),c.open(r)}},updateStatus:function(e,t){if(c.preloader){d!==e&&c.container.removeClass("mfp-s-"+d),!t&&e==="loading"&&(t=c.st.tLoading);var n={status:e,text:t};x("UpdateStatus",n),e=n.status,t=n.text,c.preloader.html(t),c.preloader.find("a").click(function(e){e.stopImmediatePropagation()}),c.container.addClass("mfp-s-"+e),d=e}},_addClassToMFP:function(e){c.bgOverlay.addClass(e),c.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),c.wrap.removeClass(e)},_hasScrollBar:function(e){return document.body.clientHeight>(e||v.height())?!0:!1},_parseMarkup:function(t,n,i){var s;i.data&&(n=e.extend(i.data,n)),x(r,[t,n,i]),e.each(n,function(e,n){if(n===undefined||n===!1)return!0;s=e.split("_");if(s.length>1){var r=t.find(u+"-"+s[0]);if(r.length>0){var i=s[1];i==="replaceWith"?r[0]!==n[0]&&r.replaceWith(n):i==="img"?r.is("img")?r.attr("src",n):r.replaceWith('<img src="'+n+'" class="'+r.attr("class")+'" />'):r.attr(s[1],n)}}else t.find(u+"-"+e).html(n)})},_getScrollbarSize:function(){if(c.scrollbarSize===undefined){var e=document.createElement("div");e.id="mfp-sbm",e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),c.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return c.scrollbarSize}},e.magnificPopup={instance:null,proto:h.prototype,modules:[],open:function(e,t){return C(),e||(e={}),e.isObj=!0,e.index=t||0,this.instance.open(e)},close:function(){return e.magnificPopup.instance.close()},registerModule:function(t,n){n.options&&(e.magnificPopup.defaults[t]=n.options),e.extend(this.proto,n.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,alignTop:!1,removalDelay:0,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},e.fn.magnificPopup=function(t){C();var n=e(this);if(typeof t=="string")if(t==="open"){var r,i=p?n.data("magnificPopup"):n[0].magnificPopup,s=parseInt(arguments[1],10)||0;i.items?r=i.items[s]:(r=n,i.delegate&&(r=r.find(i.delegate)),r=r.eq(s)),c._openClick({mfpEl:r},n,i)}else c.isOpen&&c[t].apply(c,Array.prototype.slice.call(arguments,1));else p?n.data("magnificPopup",t):n[0].magnificPopup=t,c.addGroup(n,t);return n};var L="inline",A,O,M,_=function(){M&&(O.after(M.addClass(A)).detach(),M=null)};e.magnificPopup.registerModule(L,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){c.types.push(L),E(t+"."+L,function(){_()})},getInline:function(t,n){_();if(t.src){var r=c.st.inline,i=e(t.src);return i.length?(i[0].parentNode!==null&&(O||(A=r.hiddenClass,O=S(A),A="mfp-"+A),M=i.after(O).detach().removeClass(A)),c.updateStatus("ready")):(c.updateStatus("error",r.tNotFound),i=e("<div>")),t.inlineElement=i,i}return c.updateStatus("ready"),c._parseMarkup(n,{},t),n}}});var D="ajax",P,H=function(){P&&m.removeClass(P)};e.magnificPopup.registerModule(D,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){c.types.push(D),P=c.st.ajax.cursor,E(t+"."+D,function(){H(),c.req&&c.req.abort()})},getAjax:function(t){P&&m.addClass(P),c.updateStatus("loading");var n=e.extend({url:t.src,success:function(n,r,i){x("ParseAjax",i),c.appendContent(e(i.responseText),D),t.finished=!0,H(),T(),setTimeout(function(){c.wrap.addClass(a)},16),c.updateStatus("ready")},error:function(){H(),t.finished=t.loadError=!0,c.updateStatus("error",c.st.ajax.tError.replace("%url%",t.src))}},c.st.ajax.settings);return c.req=e.ajax(n),""}}});var B,j=function(t){if(t.data&&t.data.title!==undefined)return t.data.title;var n=c.st.image.titleSrc;if(n){if(e.isFunction(n))return n.call(c,t);if(t.el)return t.el.attr(n)||""}return""};e.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><div class="mfp-img"></div><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var e=c.st.image,n=".image";c.types.push("image"),E(i+n,function(){c.currItem.type==="image"&&e.cursor&&m.addClass(e.cursor)}),E(t+n,function(){e.cursor&&m.removeClass(e.cursor),v.off("resize"+u)}),E("Resize"+n,c.resizeImage),c.isLowIE&&E("AfterChange",c.resizeImage)},resizeImage:function(){var e=c.currItem;if(!e.img)return;if(c.st.image.verticalFit){var t=0;c.isLowIE&&(t=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",c.wH-t)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,B&&clearInterval(B),e.isCheckingImgSize=!1,x("ImageHasSize",e),e.imgHidden&&(c.content&&c.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(e){var t=0,n=e.img[0],r=function(i){B&&clearInterval(B),B=setInterval(function(){if(n.naturalWidth>0){c._onImageHasSize(e);return}t>200&&clearInterval(B),t++,t===3?r(10):t===40?r(50):t===100&&r(500)},i)};r(1)},getImage:function(t,n){var r=0,i=function(){t&&(t.img[0].complete?(t.img.off(".mfploader"),t===c.currItem&&(c._onImageHasSize(t),c.updateStatus("ready")),t.hasSize=!0,t.loaded=!0):(r++,r<200?setTimeout(i,100):s()))},s=function(){t&&(t.img.off(".mfploader"),t===c.currItem&&(c._onImageHasSize(t),c.updateStatus("error",o.tError.replace("%url%",t.src))),t.hasSize=!0,t.loaded=!0,t.loadError=!0)},o=c.st.image,u=n.find(".mfp-img");if(u.length){var a=new Image;a.className="mfp-img",t.img=e(a).on("load.mfploader",i).on("error.mfploader",s),a.src=t.src,u.is("img")&&(t.img=t.img.clone())}return c._parseMarkup(n,{title:j(t),img_replaceWith:t.img},t),c.resizeImage(),t.hasSize?(B&&clearInterval(B),t.loadError?(n.addClass("mfp-loading"),c.updateStatus("error",o.tError.replace("%url%",t.src))):(n.removeClass("mfp-loading"),c.updateStatus("ready")),n):(c.updateStatus("loading"),t.loading=!0,t.hasSize||(t.imgHidden=!0,n.addClass("mfp-loading"),c.findImageSize(t)),n)}}});var F="iframe",I="//about:blank",q=function(e){if(c.currTemplate[F]){var t=c.currTemplate[F].find("iframe");t.length&&(e||(t[0].src=I),c.isIE8&&t.css("display",e?"block":"none"))}};e.magnificPopup.registerModule(F,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){c.types.push(F),E("BeforeChange",function(e,t,n){t!==n&&(t===F?q():n===F&&q(!0))}),E(t+"."+F,q)},getIframe:function(t,n){var r=t.src,i=c.st.iframe;e.each(i.patterns,function(){if(r.indexOf(this.index)>-1)return this.id&&(typeof this.id=="string"?r=r.substr(r.lastIndexOf(this.id)+this.id.length,r.length):r=this.id.call(this,r)),r=this.src.replace("%id%",r),!1});var s={};return i.srcAction&&(s[i.srcAction]=r),c._parseMarkup(n,s,t),c.updateStatus("ready"),n}}});var R=function(e){var t=c.items.length;return e>t-1?e-t:e<0?t+e:e},U=function(e,t,n){return e.replace("%curr%",t+1).replace("%total%",n)};e.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var n=c.st.gallery,o=".mfp-gallery",u=Boolean(e.fn.mfpFastClick);c.direction=!0;if(!n||!n.enabled)return!1;b+=" mfp-gallery",E(i+o,function(){n.navigateByImgClick&&c.wrap.on("click"+o,".mfp-img",function(){return c.next(),!1}),g.on("keydown"+o,function(e){e.keyCode===37?c.prev():e.keyCode===39&&c.next()})}),E("UpdateStatus"+o,function(e,t){t.text&&(t.text=U(t.text,c.currItem.index,c.items.length))}),E(r+o,function(e,t,r,i){var s=c.items.length;r.counter=s?U(n.tCounter,i.index,s):""}),E("BuildControls"+o,function(){if(n.arrows&&!c.arrowLeft){var t=n.arrowMarkup,r=c.arrowLeft=e(t.replace("%title%",n.tPrev).replace("%dir%","left")).addClass(l),i=c.arrowRight=e(t.replace("%title%",n.tNext).replace("%dir%","right")).addClass(l),s=u?"mfpFastClick":"click";r[s](function(){c.prev()}),i[s](function(){c.next()}),c.isIE7&&(S("b",r[0],!1,!0),S("a",r[0],!1,!0),S("b",i[0],!1,!0),S("a",i[0],!1,!0)),c.container.append(r.add(i))}}),E(s+o,function(){c._preloadTimeout&&clearTimeout(c._preloadTimeout),c._preloadTimeout=setTimeout(function(){c.preloadNearbyImages(),c._preloadTimeout=null},16)}),E(t+o,function(){g.off(o),c.wrap.off("click"+o),u&&c.arrowLeft.add(c.arrowRight).destroyMfpFastClick(),c.arrowRight=c.arrowLeft=null})},next:function(){c.direction=!0,c.index=R(c.index+1),c.updateItemHTML()},prev:function(){c.direction=!1,c.index=R(c.index-1),c.updateItemHTML()},goTo:function(e){c.direction=e>=c.index,c.index=e,c.updateItemHTML()},preloadNearbyImages:function(){var e=c.st.gallery.preload,t=Math.min(e[0],c.items.length),n=Math.min(e[1],c.items.length),r;for(r=1;r<=(c.direction?n:t);r++)c._preloadItem(c.index+r);for(r=1;r<=(c.direction?t:n);r++)c._preloadItem(c.index-r)},_preloadItem:function(t){t=R(t);if(c.items[t].preloaded)return;var n=c.items[t];n.parsed||(n=c.parseEl(t)),x("LazyLoad",n),n.type==="image"&&(n.img=e('<img class="mfp-img" />').on("load.mfploader",function(){n.hasSize=!0}).on("error.mfploader",function(){n.hasSize=!0,n.loadError=!0}).attr("src",n.src)),n.preloaded=!0}}});var z="retina";e.magnificPopup.registerModule(z,{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return"@2x"+e})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var e=c.st.retina,t=e.ratio;t=isNaN(t)?t():t,t>1&&(E("ImageHasSize."+z,function(e,n){n.img.css({"max-width":n.img[0].naturalWidth/t,width:"100%"})}),E("ElementParse."+z,function(n,r){r.src=e.replaceSrc(r,t)}))}}}}),function(){var t=1e3,n="ontouchstart"in window,r=function(){v.off("touchmove"+s+" touchend"+s)},i="mfpFastClick",s="."+i;e.fn.mfpFastClick=function(i){return e(this).each(function(){var o=e(this),u;if(n){var a,f,l,c,h,p;o.on("touchstart"+s,function(e){c=!1,p=1,h=e.originalEvent?e.originalEvent.touches[0]:e.touches[0],f=h.clientX,l=h.clientY,v.on("touchmove"+s,function(e){h=e.originalEvent?e.originalEvent.touches:e.touches,p=h.length,h=h[0];if(Math.abs(h.clientX-f)>10||Math.abs(h.clientY-l)>10)c=!0,r()}).on("touchend"+s,function(e){r();if(c||p>1)return;u=!0,e.preventDefault(),clearTimeout(a),a=setTimeout(function(){u=!1},t),i()})})}o.on("click"+s,function(){u||i()})})},e.fn.destroyMfpFastClick=function(){e(this).off("touchstart"+s+" click"+s),n&&v.off("touchmove"+s+" touchend"+s)}}()})(window.jQuery||window.Zepto);