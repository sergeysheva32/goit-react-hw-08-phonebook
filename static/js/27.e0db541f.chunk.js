(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[27],{888:function(e,a,s){"use strict";var r=s(9047);function i(){}function t(){}t.resetWarningCache=i,e.exports=function(){function e(e,a,s,i,t,o){if(o!==r){var n=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw n.name="Invariant Violation",n}}function a(){return e}e.isRequired=e;var s={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:t,resetWarningCache:i};return s.PropTypes=s,s}},2007:function(e,a,s){e.exports=s(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},3027:function(e,a,s){"use strict";s.d(a,{Z:function(){return oe}});var r=s(1413),i=s(4925),t=s(1694),o=s.n(t),n=s(2007),l=s.n(n),c=s(2791),d=s(184),f=["as","className","type","tooltip"],v={type:l().string,tooltip:l().bool,as:l().elementType},m=c.forwardRef((function(e,a){var s=e.as,t=void 0===s?"div":s,n=e.className,l=e.type,c=void 0===l?"valid":l,v=e.tooltip,m=void 0!==v&&v,p=(0,i.Z)(e,f);return(0,d.jsx)(t,(0,r.Z)((0,r.Z)({},p),{},{ref:a,className:o()(n,"".concat(c,"-").concat(m?"tooltip":"feedback"))}))}));m.displayName="Feedback",m.propTypes=v;var p=m,u=c.createContext({}),b=s(162),x=["id","bsPrefix","className","type","isValid","isInvalid","as"],h=c.forwardRef((function(e,a){var s=e.id,t=e.bsPrefix,n=e.className,l=e.type,f=void 0===l?"checkbox":l,v=e.isValid,m=void 0!==v&&v,p=e.isInvalid,h=void 0!==p&&p,y=e.as,N=void 0===y?"input":y,Z=(0,i.Z)(e,x),P=(0,c.useContext)(u).controlId;return t=(0,b.vE)(t,"form-check-input"),(0,d.jsx)(N,(0,r.Z)((0,r.Z)({},Z),{},{ref:a,type:f,id:s||P,className:o()(n,t,m&&"is-valid",h&&"is-invalid")}))}));h.displayName="FormCheckInput";var y=h,N=["bsPrefix","className","htmlFor"],Z=c.forwardRef((function(e,a){var s=e.bsPrefix,t=e.className,n=e.htmlFor,l=(0,i.Z)(e,N),f=(0,c.useContext)(u).controlId;return s=(0,b.vE)(s,"form-check-label"),(0,d.jsx)("label",(0,r.Z)((0,r.Z)({},l),{},{ref:a,htmlFor:n||f,className:o()(t,s)}))}));Z.displayName="FormCheckLabel";var P=Z;var I=["id","bsPrefix","bsSwitchPrefix","inline","reverse","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],j=c.forwardRef((function(e,a){var s=e.id,t=e.bsPrefix,n=e.bsSwitchPrefix,l=e.inline,f=void 0!==l&&l,v=e.reverse,m=void 0!==v&&v,x=e.disabled,h=void 0!==x&&x,N=e.isValid,Z=void 0!==N&&N,j=e.isInvalid,w=void 0!==j&&j,k=e.feedbackTooltip,F=void 0!==k&&k,g=e.feedback,C=e.feedbackType,R=e.className,T=e.style,E=e.title,_=void 0===E?"":E,O=e.type,S=void 0===O?"checkbox":O,z=e.label,V=e.children,L=e.as,G=void 0===L?"input":L,H=(0,i.Z)(e,I);t=(0,b.vE)(t,"form-check"),n=(0,b.vE)(n,"form-switch");var W=(0,c.useContext)(u).controlId,A=(0,c.useMemo)((function(){return{controlId:s||W}}),[W,s]),D=!V&&null!=z&&!1!==z||function(e,a){return c.Children.toArray(e).some((function(e){return c.isValidElement(e)&&e.type===a}))}(V,P),M=(0,d.jsx)(y,(0,r.Z)((0,r.Z)({},H),{},{type:"switch"===S?"checkbox":S,ref:a,isValid:Z,isInvalid:w,disabled:h,as:G}));return(0,d.jsx)(u.Provider,{value:A,children:(0,d.jsx)("div",{style:T,className:o()(R,D&&t,f&&"".concat(t,"-inline"),m&&"".concat(t,"-reverse"),"switch"===S&&n),children:V||(0,d.jsxs)(d.Fragment,{children:[M,D&&(0,d.jsx)(P,{title:_,children:z}),g&&(0,d.jsx)(p,{type:C,tooltip:F,children:g})]})})})}));j.displayName="FormCheck";var w=Object.assign(j,{Input:y,Label:P}),k=(s(2391),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),F=c.forwardRef((function(e,a){var s=e.bsPrefix,t=e.type,n=e.size,l=e.htmlSize,f=e.id,v=e.className,m=e.isValid,p=void 0!==m&&m,x=e.isInvalid,h=void 0!==x&&x,y=e.plaintext,N=e.readOnly,Z=e.as,P=void 0===Z?"input":Z,I=(0,i.Z)(e,k),j=(0,c.useContext)(u).controlId;return s=(0,b.vE)(s,"form-control"),(0,d.jsx)(P,(0,r.Z)((0,r.Z)({},I),{},{type:t,size:l,ref:a,readOnly:N,id:f||j,className:o()(v,y?"".concat(s,"-plaintext"):s,n&&"".concat(s,"-").concat(n),"color"===t&&"".concat(s,"-color"),p&&"is-valid",h&&"is-invalid")}))}));F.displayName="FormControl";var g=Object.assign(F,{Feedback:p}),C=["className","bsPrefix","as"],R=c.forwardRef((function(e,a){var s=e.className,t=e.bsPrefix,n=e.as,l=void 0===n?"div":n,c=(0,i.Z)(e,C);return t=(0,b.vE)(t,"form-floating"),(0,d.jsx)(l,(0,r.Z)({ref:a,className:o()(s,t)},c))}));R.displayName="FormFloating";var T=R,E=["controlId","as"],_=c.forwardRef((function(e,a){var s=e.controlId,t=e.as,o=void 0===t?"div":t,n=(0,i.Z)(e,E),l=(0,c.useMemo)((function(){return{controlId:s}}),[s]);return(0,d.jsx)(u.Provider,{value:l,children:(0,d.jsx)(o,(0,r.Z)((0,r.Z)({},n),{},{ref:a}))})}));_.displayName="FormGroup";var O=_,S=s(9439),z=["as","bsPrefix","className"],V=["className"];var L=c.forwardRef((function(e,a){var s=function(e){var a=e.as,s=e.bsPrefix,t=e.className,n=(0,i.Z)(e,z);s=(0,b.vE)(s,"col");var l=(0,b.pi)(),c=(0,b.zG)(),d=[],f=[];return l.forEach((function(e){var a,r,i,t=n[e];delete n[e],"object"===typeof t&&null!=t?(a=t.span,r=t.offset,i=t.order):a=t;var o=e!==c?"-".concat(e):"";a&&d.push(!0===a?"".concat(s).concat(o):"".concat(s).concat(o,"-").concat(a)),null!=i&&f.push("order".concat(o,"-").concat(i)),null!=r&&f.push("offset".concat(o,"-").concat(r))})),[(0,r.Z)((0,r.Z)({},n),{},{className:o().apply(void 0,[t].concat(d,f))}),{as:a,bsPrefix:s,spans:d}]}(e),t=(0,S.Z)(s,2),n=t[0],l=n.className,c=(0,i.Z)(n,V),f=t[1],v=f.as,m=void 0===v?"div":v,p=f.bsPrefix,u=f.spans;return(0,d.jsx)(m,(0,r.Z)((0,r.Z)({},c),{},{ref:a,className:o()(l,!u.length&&p)}))}));L.displayName="Col";var G=L,H=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],W=c.forwardRef((function(e,a){var s=e.as,t=void 0===s?"label":s,n=e.bsPrefix,l=e.column,f=void 0!==l&&l,v=e.visuallyHidden,m=void 0!==v&&v,p=e.className,x=e.htmlFor,h=(0,i.Z)(e,H),y=(0,c.useContext)(u).controlId;n=(0,b.vE)(n,"form-label");var N="col-form-label";"string"===typeof f&&(N="".concat(N," ").concat(N,"-").concat(f));var Z=o()(p,n,m&&"visually-hidden",f&&N);return x=x||y,f?(0,d.jsx)(G,(0,r.Z)({ref:a,as:"label",className:Z,htmlFor:x},h)):(0,d.jsx)(t,(0,r.Z)({ref:a,className:Z,htmlFor:x},h))}));W.displayName="FormLabel";var A=W,D=["bsPrefix","className","id"],M=c.forwardRef((function(e,a){var s=e.bsPrefix,t=e.className,n=e.id,l=(0,i.Z)(e,D),f=(0,c.useContext)(u).controlId;return s=(0,b.vE)(s,"form-range"),(0,d.jsx)("input",(0,r.Z)((0,r.Z)({},l),{},{type:"range",ref:a,className:o()(t,s),id:n||f}))}));M.displayName="FormRange";var U=M,q=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],B=c.forwardRef((function(e,a){var s=e.bsPrefix,t=e.size,n=e.htmlSize,l=e.className,f=e.isValid,v=void 0!==f&&f,m=e.isInvalid,p=void 0!==m&&m,x=e.id,h=(0,i.Z)(e,q),y=(0,c.useContext)(u).controlId;return s=(0,b.vE)(s,"form-select"),(0,d.jsx)("select",(0,r.Z)((0,r.Z)({},h),{},{size:n,ref:a,className:o()(l,s,t&&"".concat(s,"-").concat(t),v&&"is-valid",p&&"is-invalid"),id:x||y}))}));B.displayName="FormSelect";var Y=B,J=["bsPrefix","className","as","muted"],K=c.forwardRef((function(e,a){var s=e.bsPrefix,t=e.className,n=e.as,l=void 0===n?"small":n,c=e.muted,f=(0,i.Z)(e,J);return s=(0,b.vE)(s,"form-text"),(0,d.jsx)(l,(0,r.Z)((0,r.Z)({},f),{},{ref:a,className:o()(t,s,c&&"text-muted")}))}));K.displayName="FormText";var Q=K,X=c.forwardRef((function(e,a){return(0,d.jsx)(w,(0,r.Z)((0,r.Z)({},e),{},{ref:a,type:"switch"}))}));X.displayName="Switch";var $=Object.assign(X,{Input:w.Input,Label:w.Label}),ee=["bsPrefix","className","children","controlId","label"],ae=c.forwardRef((function(e,a){var s=e.bsPrefix,t=e.className,n=e.children,l=e.controlId,c=e.label,f=(0,i.Z)(e,ee);return s=(0,b.vE)(s,"form-floating"),(0,d.jsxs)(O,(0,r.Z)((0,r.Z)({ref:a,className:o()(t,s),controlId:l},f),{},{children:[n,(0,d.jsx)("label",{htmlFor:l,children:c})]}))}));ae.displayName="FloatingLabel";var se=ae,re=["className","validated","as"],ie={_ref:l().any,validated:l().bool,as:l().elementType},te=c.forwardRef((function(e,a){var s=e.className,t=e.validated,n=e.as,l=void 0===n?"form":n,c=(0,i.Z)(e,re);return(0,d.jsx)(l,(0,r.Z)((0,r.Z)({},c),{},{ref:a,className:o()(s,t&&"was-validated")}))}));te.displayName="Form",te.propTypes=ie;var oe=Object.assign(te,{Group:O,Control:g,Floating:T,Check:w,Switch:$,Label:A,Text:Q,Range:U,Select:Y,FloatingLabel:se})},2391:function(e){"use strict";var a=function(){};e.exports=a}}]);
//# sourceMappingURL=27.e0db541f.chunk.js.map