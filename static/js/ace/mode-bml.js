define("ace/mode/bml_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t,n){"use strict";var r=e("../lib/oop"),i=e("./text_highlight_rules").TextHighlightRules,s=function(){this.$rules={start:[{include:"#body"}],"#arrow":[{token:"keyword.control.bml",regex:/->/}],"#blockComment":[{token:"comment.block.bml",regex:/\/\*/,push:[{token:"comment.block.bml",regex:/\*\//,next:"pop"},{defaultToken:"comment.block.bml"}]}],"#body":[{include:"#escape"},{include:"#literalBlock"},{include:"#fork"},{include:"#lineComment"},{include:"#blockComment"}],"#choiceId":[{token:"string.bml",regex:/[@#]?\w+:?/}],"#comma":[{token:"keyword.control.bml",regex:/,/}],"#escape":[{token:"keyword.bml",regex:/\\/}],"#eval":[{token:"keyword.control.bml",regex:/(?<!\\)\[/,push:[{token:"keyword.control.bml",regex:/\]/,next:"pop"},{include:"source.js"},{defaultToken:"keyword.bml"}]}],"#fork":[{token:"keyword.control.bml",regex:/(?<!\\)\{/,push:[{token:"keyword.control.bml",regex:/\}/,next:"pop"},{include:"#textBranch"},{include:"#eval"},{include:"#fork"},{include:"#number"},{include:"#comma"},{include:"#arrow"},{include:"#choiceId"},{include:"#lineComment"},{include:"#blockComment"}]}],"#lineComment":[{token:"comment.line.bml",regex:/(?:(?<=\s)\/\/|\/\/(?=\s)).*/}],"#literalBlock":[{token:"string.bml",regex:/(?<!\\)\[\[/,push:[{token:"string.bml",regex:/(?<!\\)\]\]/,next:"pop"},{defaultToken:"text.markup.bml"}]}],"#number":[{token:"constant.numeric.bml",regex:/\d+(?:\.\d+)?|\.\d+/}],"#textBranch":[{token:"entity.name.function.bml",regex:/\(/,push:[{token:"entity.name.function.bml",regex:/\)/,next:"pop"},{include:"#body"},{defaultToken:"punctuation.bml"}],comment:"Since it's really important to make parens differ from braces, use some arbitrary other common scope name"}]},this.normalizeRules()};s.metaData={$schema:"https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json",name:"BML",scopeName:"source.bml"},r.inherits(s,i),t.BMLHighlightRules=s}),define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(e,t,n){"use strict";var r=e("../range").Range,i=function(){};(function(){this.checkOutdent=function(e,t){return/^\s+$/.test(e)?/^\s*\}/.test(t):!1},this.autoOutdent=function(e,t){var n=e.getLine(t),i=n.match(/^(\s*\})/);if(!i)return 0;var s=i[1].length,o=e.findMatchingBracket({row:t,column:s});if(!o||o.row==t)return 0;var u=this.$getIndent(e.getLine(o.row));e.replace(new r(t,0,t,s-1),u)},this.$getIndent=function(e){return e.match(/^\s*/)[0]}}).call(i.prototype),t.MatchingBraceOutdent=i}),define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(e,t,n){"use strict";var r=e("../../lib/oop"),i=e("../../range").Range,s=e("./fold_mode").FoldMode,o=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};r.inherits(o,s),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var r=e.getLine(n);if(this.singleLineBlockCommentRe.test(r)&&!this.startRegionRe.test(r)&&!this.tripleStarBlockCommentRe.test(r))return"";var i=this._getFoldWidgetBase(e,t,n);return!i&&this.startRegionRe.test(r)?"start":i},this.getFoldWidgetRange=function(e,t,n,r){var i=e.getLine(n);if(this.startRegionRe.test(i))return this.getCommentRegionBlock(e,i,n);var s=i.match(this.foldingStartMarker);if(s){var o=s.index;if(s[1])return this.openingBracketBlock(e,s[1],n,o);var u=e.getCommentFoldRange(n,o+s[0].length,1);return u&&!u.isMultiLine()&&(r?u=this.getSectionRange(e,n):t!="all"&&(u=null)),u}if(t==="markbegin")return;var s=i.match(this.foldingStopMarker);if(s){var o=s.index+s[0].length;return s[1]?this.closingBracketBlock(e,s[1],n,o):e.getCommentFoldRange(n,o,-1)}},this.getSectionRange=function(e,t){var n=e.getLine(t),r=n.search(/\S/),s=t,o=n.length;t+=1;var u=t,a=e.getLength();while(++t<a){n=e.getLine(t);var f=n.search(/\S/);if(f===-1)continue;if(r>f)break;var l=this.getFoldWidgetRange(e,"all",t);if(l){if(l.start.row<=s)break;if(l.isMultiLine())t=l.end.row;else if(r==f)break}u=t}return new i(s,o,u,e.getLine(u).length)},this.getCommentRegionBlock=function(e,t,n){var r=t.search(/\s*$/),s=e.getLength(),o=n,u=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,a=1;while(++n<s){t=e.getLine(n);var f=u.exec(t);if(!f)continue;f[1]?a--:a++;if(!a)break}var l=n;if(l>o)return new i(o,r,l,t.length)}}.call(o.prototype)}),define("ace/mode/bml",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/bml_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle"],function(e,t,n){"use strict";var r=e("../lib/oop"),i=e("./text").Mode,s=e("./bml_highlight_rules").BMLHighlightRules,o=e("./matching_brace_outdent").MatchingBraceOutdent,u=e("./behaviour/cstyle").CstyleBehaviour,a=e("./folding/cstyle").FoldMode,f=function(){this.HighlightRules=s,this.$outdent=new o,this.$behaviour=new u({braces:!0}),this.foldingRules=new a};r.inherits(f,i),function(){this.lineCommentStart="//.*",this.blockComment={start:"/*",end:"*/"},this.$id="ace/mode/bml"}.call(f.prototype),t.Mode=f});                (function() {
                    window.require(["ace/mode/bml"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            