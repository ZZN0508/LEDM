(window.webpackJsonpwebpackLogReporter=window.webpackJsonpwebpackLogReporter||[]).push([[2],{175:function(e,t,r){"use strict";r.r(t);var o=r(9),n=r.n(o),o=r(10),i=r.n(o),a=r(22),s=r(0),c=r(28);t.default=function(){function e(){n()(this,e),this.browser=s.a.myBrowser(),this.reportUrls=["//api.bilibili.com/x/web-interface/cdn/report?from=report","//i0.hdslb.com/bfs/test/ce1cf20203c303963e78c811b01100667c960bba.png"],this.headers={},this.reqFinished=0,this.collectUrlInfo()}return i()(e,[{key:"getHeader",value:function(e,t){var r=e.getAllResponseHeaders();if(-1<r.indexOf(t.toLowerCase())){t=new RegExp(t,"i"),t=r.match(t)[0];return e.getResponseHeader(t)}return""}},{key:"collectUrlInfo",value:function(){var i=this;this.reportUrls.forEach(function(e,n){c.a.ajax({url:e,noCredentials:!0,success:function(e,t,r){var o=i.getHeader(r,"x-cache-webcdn"),r=i.getHeader(r,"x-service-module");i.headers[n]={cdn:o,protocol:r},i.reqFinished++,i.reqFinished===i.reportUrls.length&&i.reportCdn(200)},fail:function(e){i.headers[n]={},i.reqFinished++,i.reqFinished===i.reportUrls.length&&i.reportCdn(e)}})})}},{key:"getResourceList",value:function(){return window.performance&&"function"==typeof performance.getEntriesByType?performance.getEntriesByType("resource"):[]}},{key:"matchUrl",value:function(e){for(var t=0;t<this.reportUrls.length;t++)if(-1<e.indexOf(this.reportUrls[t]))return t;return-1}},{key:"reportCdn",value:function(r){var o=this;this.getResourceList().forEach(function(e){var t=o.matchUrl(e.name);-1<t&&o.todo({x_cache_webcdn:o.headers[t].cdn,protocol:o.headers[t].protocol||e.nextHopProtocol,uri:document.baseURI||window.location.href,request_uri:s.a.splitUrlArgs(e.name).path,referrer:document.referrer||"",dns_time:e.domainLookupEnd-e.domainLookupStart,connect_time:e.connectEnd-e.connectStart,request_time:e.responseStart-e.requestStart,response_time:e.responseEnd-e.responseStart,consumer_time:e.duration,request_args:s.a.splitUrlArgs(e.name).args,initiator_type:e.initiatorType,error:"",http_code:r},!0)})}},{key:"todo",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=1<arguments.length?arguments[1]:void 0,r={eventId:0<=e.request_uri.indexOf("i0")?"web.main.webimage":"web.main.net",appInfo:{appId:21,buvid:s.a.getCookie("buvid3")||""},mid:s.a.getCookie("DedeUserID")||"",eventCategory:5,ctime:Date.now(),runtimeInfo:{network:navigator.connection&&"wifi"===navigator.connection.effectiveType?"1":"2"},extendedFields:{business:"main",app_key:"web_main",real_request_url:e.uri,referer:e.referrer,ua:navigator.userAgent,browser:this.browser,x_cache_webcdn:e.x_cache_webcdn,command:e.request_uri||"",start_request_ts:(Math.floor(e.start_request_ts)||Date.parse(new Date)/1e3).toString(),dns_time:(Math.floor(e.dns_time)||"0").toString(),hit_cache:e.hit_cache||"",server_ip:e.cdn_hostname||"",idc:e.idc||"",connect_time:(Math.floor(e.connect_time)||"0").toString(),request_time:("0"|Math.floor(e.request_time)).toString(),response_time:(Math.floor(e.response_time)||"0").toString(),total_time:(Math.floor(e.consumer_time)||"0").toString(),request_args:encodeURI(e.request_args||""),initiator_type:String.prototype.toLocaleLowerCase.call(e.initiator_type||""),exception_msg:null==e.error?"error":e.error,http_code:Number(e.http_code)||-1,href:window.location.href}};t&&(r.extendedFields.negotiated_protocol=e.protocol),c.a.post("//".concat(a.a.apiHost,"/x/web-frontend/data/collector"),JSON.stringify([r]))}}]),e}()}}]);