/*
    MIT License
*/
!function(b){function d(a){this.init(a)}function e(a){return a.replace(k,"\\$&")}var m={"":",","+":",","#":",","?":"&"},k=/[.*+?^=!:${}()|\[\]\/\\]/g,n=new RegExp(/\{([+#.\/;?&]?)((?:[\w%.]+(\*|:\d)?,?)+)\}/g.source+"|.[^{]*?","g");d.prototype={init:function(a){var l=0,f="",d={},b="^"+a.replace(n,function(a,h,b){if(!b)return e(a);var g=m[h]||h,k=";"==g||"&"==g;a=b.split(",").map(function(a){var b="(.*?)",c=a==(a=a.split("*")[0])&&(c=a.split(":"),a=c[0],c[1]);l++;if(c)b="((?:%..|.){1,"+c+"})",d[a]=
{pos:l,len:c};else if(c=d[a])b="(\\"+c.pos+".*?)";f+="t=($["+l+"]||'').split('"+g+"').map(decodeURIComponent);";f+='o["'+a+'"]=t.length>1?t:t[0];';return k?"&"==g?e(a+"=")+b:e(a)+"(?:="+b+")?":b}).join(e(g));return("+"!=h?e(h):"")+a})+"$";this.template=a;this.re=new RegExp(b);this.fn=new Function("$","var t,o={};"+f+"return o")},match:function(a){return(a=this.re.exec(a))&&this.fn(a)}};b.Template=d}(this.URI||(this.URI={}));
