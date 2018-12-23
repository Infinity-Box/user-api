module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var u=t[n]={i:n,l:!1,exports:{}};return e[n].call(u.exports,u,u.exports,r),u.l=!0,u.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)r.d(n,u,function(t){return e[t]}.bind(null,u));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=7)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n={MONGO_URL:"mongodb://localhost/infinityapi-dev"},u={MONGO_URL:"mongodb://localhost/infinityapi-dev"},o={MONGO_URL:"mongodb://jazz2900:awe123@ds135844.mlab.com:35844/user-api"};t.default=Object.assign({},function(e){switch(e){case"development":return n;case"test":return u;default:return o}}("production"))},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("mongoose")},function(e,t){e.exports=require("passport")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.authJwt=t.authLocal=void 0;var n=s(r(3)),u=s(r(20)),o=r(21),i=s(r(5));s(r(0));function s(e){return e&&e.__esModule?e:{default:e}}const a=new u.default({usernameField:"email"},async(e,t,r)=>{try{const n=await i.default.findOne({email:e});return n&&n.authenticateUser(t)?r(null,n):r(null,!1)}catch(e){return r(e,!1)}}),l={jwtFromRequest:o.ExtractJwt.fromAuthHeaderWithScheme("jwt"),secretOrKey:"thisisasecret"},c=new o.Strategy(l,async(e,t)=>{try{const r=await i.default.findbyId(e._id);return t(null,r?r:!1)}catch(e){return t(e,!1)}});n.default.use(a),n.default.use(c);t.authLocal=n.default.authenticate("local",{session:!1}),t.authJwt=n.default.authenticate("jwt",{session:!1})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2),u=c(n),o=c(r(22)),i=r(23),s=c(r(24)),a=(c(r(25)),r(6)),l=c(r(0));function c(e){return e&&e.__esModule?e:{default:e}}const f=new n.Schema({email:{type:String,unique:!0,required:[!0,"Email is required"],trim:!0,validate:{validator:e=>o.default.isEmail(e),message:"{VALUE} is not a valid email"}},firstName:{type:String,required:[!0,"FirstName is required"],trim:!0},lastName:{type:String,required:[!0,"LastName is required!"],trim:!0},userName:{type:String,required:[!0,"UserName is required"],trim:!0,unique:!0},password:{type:String,required:[!0,"Password is required!"],minlength:[6,"Password need to be longer!"],maxlength:[18,"Password needs to be less than 18 characters"],validate:{validator:e=>a.passwordReg.test(e),message:"{VALUE} is not a valid password!"}}},{timestamps:!0});f.pre("save",function(e){return this.isModified("password")&&(this.password=this._hashPassword(this.password)),e()}),f.methods={_hashPassword:e=>(0,i.hashSync)(e),authenticateUser(e){return compare(e,this.password)},createToken(){return s.default.sign({_id:this._id},l.default.JWT_SECRET)},toJSON(){return{_id:this._id,userName:this.userName,token:`JWT ${this.createToken()}`}}},t.default=u.default.model("User",f)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.passwordReg=void 0;var n,u=r(26),o=(n=u)&&n.__esModule?n:{default:n};const i=t.passwordReg=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}/;t.default={signup:{email:o.default.string().email().required(),password:o.default.string().regex(i).required(),firstName:o.default.string().required(),lastName:o.default.string().required(),userName:o.default.string().required()}}},function(e,t,r){"use strict";var n=i(r(1));i(r(8)),i(r(0));r(10);var u=i(r(12)),o=i(r(17));function i(e){return e&&e.__esModule?e:{default:e}}const s=(0,n.default)();(0,u.default)(s),s.get("/",(e,t)=>{t.send("Hello World!")}),(0,o.default)(s)},function(e,t,r){(function(e){function r(e,t){for(var r=0,n=e.length-1;n>=0;n--){var u=e[n];"."===u?e.splice(n,1):".."===u?(e.splice(n,1),r++):r&&(e.splice(n,1),r--)}if(t)for(;r--;r)e.unshift("..");return e}var n=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,u=function(e){return n.exec(e).slice(1)};function o(e,t){if(e.filter)return e.filter(t);for(var r=[],n=0;n<e.length;n++)t(e[n],n,e)&&r.push(e[n]);return r}t.resolve=function(){for(var t="",n=!1,u=arguments.length-1;u>=-1&&!n;u--){var i=u>=0?arguments[u]:e.cwd();if("string"!=typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(t=i+"/"+t,n="/"===i.charAt(0))}return(n?"/":"")+(t=r(o(t.split("/"),function(e){return!!e}),!n).join("/"))||"."},t.normalize=function(e){var n=t.isAbsolute(e),u="/"===i(e,-1);return(e=r(o(e.split("/"),function(e){return!!e}),!n).join("/"))||n||(e="."),e&&u&&(e+="/"),(n?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(o(e,function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},t.relative=function(e,r){function n(e){for(var t=0;t<e.length&&""===e[t];t++);for(var r=e.length-1;r>=0&&""===e[r];r--);return t>r?[]:e.slice(t,r-t+1)}e=t.resolve(e).substr(1),r=t.resolve(r).substr(1);for(var u=n(e.split("/")),o=n(r.split("/")),i=Math.min(u.length,o.length),s=i,a=0;a<i;a++)if(u[a]!==o[a]){s=a;break}var l=[];for(a=s;a<u.length;a++)l.push("..");return(l=l.concat(o.slice(s))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){var t=u(e),r=t[0],n=t[1];return r||n?(n&&(n=n.substr(0,n.length-1)),r+n):"."},t.basename=function(e,t){var r=u(e)[2];return t&&r.substr(-1*t.length)===t&&(r=r.substr(0,r.length-t.length)),r},t.extname=function(e){return u(e)[3]};var i="b"==="ab".substr(-1)?function(e,t,r){return e.substr(t,r)}:function(e,t,r){return t<0&&(t=e.length+t),e.substr(t,r)}}).call(this,r(9))},function(e,t){var r,n,u=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(e){if(r===setTimeout)return setTimeout(e,0);if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:o}catch(e){r=o}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var a,l=[],c=!1,f=-1;function d(){c&&a&&(c=!1,a.length?l=a.concat(l):f=-1,l.length&&p())}function p(){if(!c){var e=s(d);c=!0;for(var t=l.length;t;){for(a=l,l=[];++f<t;)a&&a[f].run();f=-1,t=l.length}a=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}u.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new h(e,t)),1!==l.length||c||s(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},u.title="browser",u.browser=!0,u.env={},u.argv=[],u.version="",u.versions={},u.on=m,u.addListener=m,u.once=m,u.off=m,u.removeListener=m,u.removeAllListeners=m,u.emit=m,u.prependListener=m,u.prependOnceListener=m,u.listeners=function(e){return[]},u.binding=function(e){throw new Error("process.binding is not supported")},u.cwd=function(){return"/"},u.chdir=function(e){throw new Error("process.chdir is not supported")},u.umask=function(){return 0}},function(e,t,r){"use strict";(function(e){var t=u(r(2)),n=u(r(0));function u(e){return e&&e.__esModule?e:{default:e}}t.default.Promise=e.Promise;try{t.default.connect(n.default.MONGO_URL,{useNewUrlParser:!0}),t.default.set("useCreateIndex",!0)}catch(e){t.default.createConnection(n.default.MONGO_URL)}t.default.connection.once("open",()=>console.log("MongoDB Running")).on("error",e=>{throw e})}).call(this,r(11))},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});s(r(13));var n=s(r(14)),u=s(r(15)),o=s(r(16)),i=s(r(3));function s(e){return e&&e.__esModule?e:{default:e}}t.default=(e=>{e.use((0,u.default)()),e.use((0,o.default)()),e.use(n.default.json()),e.use(n.default.urlencoded({extended:!0})),e.use(i.default.initialize())})},function(e,t){e.exports=require("morgan")},function(e,t){e.exports=require("body-parser")},function(e,t){e.exports=require("compression")},function(e,t){e.exports=require("helmet")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,u=r(18),o=(n=u)&&n.__esModule?n:{default:n},i=r(4);t.default=(e=>{e.use("/api/v1/users",o.default),e.get("/hello",i.authJwt,(e,t)=>{t.send("This is a private route!!!")})})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),u=a(r(19)),o=r(4),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(27)),s=a(r(6));function a(e){return e&&e.__esModule?e:{default:e}}const l=new n.Router;l.post("/signup",(0,u.default)(s.default.signup),i.signUp),l.post("/login",o.authLocal,i.login),t.default=l},function(e,t){e.exports=require("express-validation")},function(e,t){e.exports=require("passport-local")},function(e,t){e.exports=require("passport-jwt")},function(e,t){e.exports=require("validator")},function(e,t){e.exports=require("bcrypt-nodejs")},function(e,t){e.exports=require("jsonwebtoken")},function(e,t){e.exports=require("mongoose-unique-validator")},function(e,t){e.exports=require("joi")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.signUp=async function(e,t){try{const r=await o.default.create(e.body);return t.status(201).json(r)}catch(e){return t.status(500).json(e)}},t.login=function(e,t,r){return t.status(200).json(e.user),r()};var n,u=r(5),o=(n=u)&&n.__esModule?n:{default:n}}]);