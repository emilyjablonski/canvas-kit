(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{3168:function(module,exports){module.exports=function(hljs){var KEYWORDS="exports register file shl array record property for mod while set ally label uses raise not stored class safecall var interface or private static exit index inherited to else stdcall override shr asm far resourcestring finalization packed virtual out and protected library do xorwrite goto near function end div overload object unit begin string on inline repeat until destructor write message program with read initialization except default nil if case cdecl in downto threadvar of try pascal const external constructor type public then implementation finally published procedure absolute reintroduce operator as is abstract alias assembler bitpacked break continue cppdecl cvar enumerator experimental platform deprecated unimplemented dynamic export far16 forward generic helper implements interrupt iochecks local name nodefault noreturn nostackframe oldfpccall otherwise saveregisters softfloat specialize strict unaligned varargs ",COMMENT_MODES=[hljs.C_LINE_COMMENT_MODE,hljs.COMMENT(/\{/,/\}/,{relevance:0}),hljs.COMMENT(/\(\*/,/\*\)/,{relevance:10})],DIRECTIVE={className:"meta",variants:[{begin:/\{\$/,end:/\}/},{begin:/\(\*\$/,end:/\*\)/}]},STRING={className:"string",begin:/'/,end:/'/,contains:[{begin:/''/}]},CHAR_STRING={className:"string",begin:/(#\d+)+/},CLASS={begin:hljs.IDENT_RE+"\\s*=\\s*class\\s*\\(",returnBegin:!0,contains:[hljs.TITLE_MODE]},FUNCTION={className:"function",beginKeywords:"function constructor destructor procedure",end:/[:;]/,keywords:"function constructor|10 destructor|10 procedure|10",contains:[hljs.TITLE_MODE,{className:"params",begin:/\(/,end:/\)/,keywords:KEYWORDS,contains:[STRING,CHAR_STRING,DIRECTIVE].concat(COMMENT_MODES)},DIRECTIVE].concat(COMMENT_MODES)};return{aliases:["dpr","dfm","pas","pascal","freepascal","lazarus","lpr","lfm"],case_insensitive:!0,keywords:KEYWORDS,illegal:/"|\$[G-Zg-z]|\/\*|<\/|\|/,contains:[STRING,CHAR_STRING,hljs.NUMBER_MODE,CLASS,FUNCTION,DIRECTIVE].concat(COMMENT_MODES)}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_delphi.9d3e0e933e71d02bbb57.bundle.js.map