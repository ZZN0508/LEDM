/* Polyfill service v4.4.0
 * Disable minification (remove `.min` from URL path) for more info */

(function(self, undefined) {function Call(t,l){var n=arguments.length>2?arguments[2]:[];if(!1===IsCallable(t))throw new TypeError(Object.prototype.toString.call(t)+"is not a function.");return t.apply(l,n)}function CreateMethodProperty(e,r,t){var a={value:t,writable:!0,enumerable:!1,configurable:!0};Object.defineProperty(e,r,a)}function Get(n,t){return n[t]}function HasOwnProperty(r,t){return Object.prototype.hasOwnProperty.call(r,t)}function IsCallable(n){return"function"==typeof n}function RequireObjectCoercible(e){if(null===e||void 0===e)throw TypeError(Object.prototype.toString.call(e)+" is not coercible to Object.");return e}function ToNumber(r){return Number(r)}function ToIntegerOrInfinity(r){var n=ToNumber(r);if(isNaN(n)||0===n||1/n==-1/0)return 0;if(n===1/0)return 1/0;if(n===-1/0)return-1/0;var t=Math.floor(Math.abs(n));return n<0&&(t=-t),t}function ToObject(r){if(null===r||void 0===r)throw TypeError();return Object(r)}function GetV(t,e){return ToObject(t)[e]}function GetMethod(e,l){var t=GetV(e,l);if(null!==t&&void 0!==t){if(!1===IsCallable(t))throw new TypeError("Method not callable: "+l);return t}}function Type(e){switch(typeof e){case"undefined":return"undefined";case"boolean":return"boolean";case"number":return"number";case"string":return"string";case"symbol":return"symbol";default:return null===e?"null":"Symbol"in self&&(e instanceof self.Symbol||e.constructor===self.Symbol)?"symbol":"object"}}function OrdinaryToPrimitive(r,t){if("string"===t)var e=["toString","valueOf"];else e=["valueOf","toString"];for(var i=0;i<e.length;++i){var n=e[i],a=Get(r,n);if(IsCallable(a)){var o=Call(a,r);if("object"!==Type(o))return o}}throw new TypeError("Cannot convert to primitive.")}function ToInteger(r){if("symbol"===Type(r))throw new TypeError("Cannot convert a Symbol value to a number");var o=Number(r);return isNaN(o)?0:1/o==1/0||1/o==-1/0||o===1/0||o===-1/0?o:(o<0?-1:1)*Math.floor(Math.abs(o))}function ToLength(n){var t=ToInteger(n);return t<=0?0:Math.min(t,Math.pow(2,53)-1)}function LengthOfArrayLike(e){return ToLength(Get(e,"length"))}function ToPrimitive(e){var t=arguments.length>1?arguments[1]:void 0;if("object"===Type(e)){if(arguments.length<2)var i="default";else t===String?i="string":t===Number&&(i="number");var r="function"==typeof self.Symbol&&"symbol"==typeof self.Symbol.toPrimitive?GetMethod(e,self.Symbol.toPrimitive):void 0;if(void 0!==r){var o=Call(r,e,[i]);if("object"!==Type(o))return o;throw new TypeError("Cannot convert exotic object to primitive.")}return"default"===i&&(i="number"),OrdinaryToPrimitive(e,i)}return e}function ToString(t){switch(Type(t)){case"symbol":throw new TypeError("Cannot convert a Symbol value to a string");case"object":return ToString(ToPrimitive(t,String));default:return String(t)}}function ToPropertyKey(r){var i=ToPrimitive(r,String);return"symbol"===Type(i)?i:ToString(i)}if (!("at"in Array.prototype
)) {CreateMethodProperty(Array.prototype,"at",function t(r){var e=ToObject(this),n=LengthOfArrayLike(e),o=ToIntegerOrInfinity(r),i=o>=0?o:n+o;if(!(i<0||i>=n))return Get(e,ToString(i))});}if (!("hasOwn"in Object
)) {CreateMethodProperty(Object,"hasOwn",function e(r,t){var o=ToObject(r),n=ToPropertyKey(t);return HasOwnProperty(o,n)});}if (!("at"in String.prototype
)) {CreateMethodProperty(String.prototype,"at",function t(e){var r=RequireObjectCoercible(this),i=ToString(r),n=i.length,o=ToIntegerOrInfinity(e),g=o>=0?o:n+o;if(!(g<0||g>=n))return i.substring(g,g+1)});}if (!("Int8Array"in self&&"at"in self.Int8Array.prototype
)) {!function(){function t(t){var r=this,e=r.length,o=ToIntegerOrInfinity(t),p=o>=0?o:e+o;if(!(p<0||p>=e))return Get(r,ToString(p))}"__proto__"in self.Int8Array.prototype&&self.Int8Array.prototype.__proto__!==Object.prototype?CreateMethodProperty(self.Int8Array.prototype.__proto__,"at",t):(CreateMethodProperty(self.Int8Array.prototype,"at",t),CreateMethodProperty(self.Uint8Array.prototype,"at",t),CreateMethodProperty(self.Uint8ClampedArray.prototype,"at",t),CreateMethodProperty(self.Int16Array.prototype,"at",t),CreateMethodProperty(self.Uint16Array.prototype,"at",t),CreateMethodProperty(self.Int32Array.prototype,"at",t),CreateMethodProperty(self.Uint32Array.prototype,"at",t),CreateMethodProperty(self.Float32Array.prototype,"at",t),CreateMethodProperty(self.Float64Array.prototype,"at",t))}();}})('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});