!function(h){function p(a){return encodeURIComponent(a).replace(q,escape)}function r(a,f,l){return a+(f||"&"==l?"=":"")+f}function m(a,f,l){a=a.map(f).filter(function(a){return"string"==typeof a});return a.length&&a.join(l)}function n(a,f){return a.replace(s,function(a,b,h){var d=t[b]||b,k=b&&","==d?encodeURI:p,g=(";"==d||"&"==d)&&r;return(a=m(h.split(","),function(a){var b=a!=(a=a.split("*")[0]),e=!b&&(e=a.split(":"),a=e[0],e[1]),c=f[a];if(null!=c){if("object"==typeof c){if(Array.isArray(c)?c=m(c,
k,b?g?d+a+"=":d:","):(e=b?"=":",",c=m(Object.keys(c),function(a){return k(a)+e+k(c[a])},b&&(g||"/"==d)?d:","),b&&(g=null)),!c)return}else c=k(e?c.slice(0,e):c);return g?g(a,c,d):c}},d))?"+"!=b?b+a:a:""!==a||"#"!=b&&"."!=b?"":b})}var q=/[\]\[:\/?#@!$&()*+,;=']/g,t={"":",","+":",","#":",","?":"&"},s=/\{([+#.\/;?&]?)((?:[\w%.]+(\*|:\d)?,?)+)\}/g;h.expand=n;h.Template=function(a){this.expand=n.bind(this,a)}}(this.URI||(this.URI={}));