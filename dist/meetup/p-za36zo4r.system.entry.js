System.register(["./p-838bbf96.system.js"],function(t,e){"use strict";var n,r;return{setters:[function(t){n=t.d;r=t.e}],execute:function(){function e(t,e,n){return(t||"")+(e?" "+e:"")+(n?" "+n:"")}var u=function(){function t(t){n(this,t)}t.prototype.getText=function(){return e(this.first,this.middle,this.last)};t.prototype.render=function(){return r("div",null,"Hello, World! I'm ",this.getText())};Object.defineProperty(t,"style",{get:function(){return""},enumerable:true,configurable:true});return t}();t("my_component",u)}}});