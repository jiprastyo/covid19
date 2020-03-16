(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{381:function(t,e,r){var content=r(385);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("d879f088",content,!1,{sourceMap:!1})},384:function(t,e,r){"use strict";var n=r(381);r.n(n).a},385:function(t,e,r){(e=r(11)(!1)).push([t.i,".TextCard{background-color:#fff;box-shadow:0px 0px 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9 !important;border-radius:4px;padding:20px;margin-bottom:20px}.TextCard-Heading{font-size:24px;font-size:1.5rem;color:#4d4d4d;font-weight:bold;margin-bottom:12px}.TextCard-Heading a{font-size:24px;font-size:1.5rem;color:#4d4d4d;font-weight:bold;color:#006ca8 !important;text-decoration:none}.TextCard-Heading a:hover{text-decoration:underline}.TextCard-ExternalLinkIcon{margin-left:2px;color:#707070 !important}.TextCard-Body *{font-size:16px;font-size:1rem;color:#333;line-height:160%;font-weight:normal}.TextCard-Body a{word-break:break-all;color:#006ca8;text-decoration:none}.TextCard-Body a:hover{text-decoration:underline}",""]),t.exports=e},387:function(t,e,r){"use strict";var n=r(55),o=r(59),l=r(57),_=r(56),c=r(58),d=r(9),v=r(25),f=function(t,e,r,desc){var n,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(l=(o<3?n(l):o>3?n(e,r,l):n(e,r))||l);return o>3&&l&&Object.defineProperty(e,r,l),l},x=function(t){function e(){return Object(n.a)(this,e),Object(l.a)(this,Object(_.a)(e).apply(this,arguments))}return Object(c.a)(e,t),Object(o.a)(e,[{key:"isInternalLink",value:function(path){return!/^https?:\/\//.test(path)}}]),e}(v.c);f([Object(v.b)({default:"",required:!1})],x.prototype,"title",void 0),f([Object(v.b)({default:"",required:!1})],x.prototype,"link",void 0),f([Object(v.b)({default:"",required:!1})],x.prototype,"body",void 0);var $=x=f([v.a],x),h=(r(384),r(5)),component=Object(h.a)($,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"TextCard"},[t.title?r("h3",{staticClass:"TextCard-Heading"},[t.link?r("div",[r("a",{attrs:{href:t.link,target:"_blank",rel:"noopener"}},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),t.isInternalLink(t.link)?t._e():r("v-icon",{staticClass:"TextCard-ExternalLinkIcon",attrs:{size:"20"}},[t._v("\n        mdi-open-in-new\n      ")])],1):[t._v("\n      "+t._s(t.title)+"\n    ")]],2):t._e(),t._v(" "),t.body?r("div",{staticClass:"TextCard-Body",domProps:{innerHTML:t._s(t.body)}}):t._e(),t._v(" "),t.$slots.default?r("div",{staticClass:"TextCard-Body"},[t._t("default")],2):t._e()])}),[],!1,null,null,null);e.a=component.exports},388:function(t,e,r){var content=r(441);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("3ff323c4",content,!1,{sourceMap:!1})},440:function(t,e,r){"use strict";var n=r(388);r.n(n).a},441:function(t,e,r){(e=r(11)(!1)).push([t.i,".About-Heading{font-size:30px;font-size:1.875rem;font-weight:normal;color:#4d4d4d;margin-bottom:12px}.About .About-Browser-List{list-style:none;padding:12px 0}",""]),t.exports=e},524:function(t,e,r){"use strict";r.r(e);var n={components:{TextCard:r(387).a},head:function(){return{title:"当サイトについて"}}},o=(r(440),r(5)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"About"},[r("h2",{staticClass:"About-Heading"},[t._v("\n    "+t._s(t.$t("当サイトについて"))+"\n  ")]),t._v(" "),r("TextCard",[t._v("\n    "+t._s(t.$t("当サイトは新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、東京都が開設したものです。"))),r("br"),t._v(" "),r("br"),t._v("\n    "+t._s(t.$t("東京都による公式情報と客観的な数値をわかりやすく伝えることで、東京都にお住まいの方や、東京都内に拠点を持つ企業の方、東京都を訪れる方が、現状を把握して適切な対策を取れるようにすることを目的としています。"))+"\n  ")]),t._v(" "),r("TextCard",{attrs:{title:t.$t("ブラウザ環境について")}},[t._v("\n    "+t._s(t.$t("当サイトは以下の環境でご覧いただくことを推奨いたします。"))),r("br"),t._v(" "),r("br"),t._v(" "),r("ul",{staticClass:"About-Browser-List"},[r("li",[t._v(t._s(t.$t("Microsoft Edge 最新版")))]),t._v(" "),r("li",[t._v(t._s(t.$t("Mozilla Firefox 最新版")))]),t._v(" "),r("li",[t._v(t._s(t.$t("Google Chrome 最新版（Windows 10以上）")))]),t._v(" "),r("li",[t._v(t._s(t.$t("Apple Safari (macOS) 最新版")))]),t._v(" "),r("li",[t._v(t._s(t.$t("Opera Software ASA Opera 最新版")))])]),t._v("\n    "+t._s(t.$t("※ 推奨環境以外で利用された場合や、推奨環境下でもご利用のブラウザの設定等によっては、正しく表示されない場合がありますのでご了承ください。"))+"\n  ")]),t._v(" "),r("TextCard",{attrs:{title:t.$t("当サイトへのリンクについて")}},[t._v("\n    "+t._s(t.$t("当サイトへのリンクは自由です。"))+"\n  ")]),t._v(" "),r("TextCard",{attrs:{title:t.$t("JavaScriptについて")}},[t._v("\n    "+t._s(t.$t("当サイトではJavaScriptを使用しております。"))),r("br"),t._v("\n    "+t._s(t.$t("JavaScriptを無効にして使用された場合、各ページが正常に動作しない、または、表示されない場合がございます。"))),r("br"),t._v("\n    "+t._s(t.$t("当サイトをご利用の際には、JavaScriptを有効にして頂きますようお願いいたします。"))+"\n  ")]),t._v(" "),r("TextCard",{attrs:{title:t.$t("クッキー (Cookie) について")}},[t._v("\n    "+t._s(t.$t("当サイトの一部ではクッキーを使用しています。"))),r("br"),t._v("\n    "+t._s(t.$t("クッキーとは、Webコンテンツからの要求で利用者の手元の端末に一時的に保存されるデータのことで、当サイトでは利用状況の把握のためにクッキーを使用する場合があります。"))),r("br"),t._v(" "),r("br"),t._v("\n    "+t._s(t.$t("ブラウザに関する情報の収集を希望しない場合は、インターネット閲覧ソフト（ブラウザ）をご自身で設定することにより、クッキーの機能が働かないようにすることも可能です。"))),r("br"),t._v(" "),r("br"),t._v("\n    "+t._s(t.$t("ただし、クッキーを受け入れない設定をされている場合は、当サイトの機能が正常に動作しない場合がございます。"))+"\n  ")]),t._v(" "),r("TextCard",{attrs:{title:t.$t("Google Analyticsの利用について")}},[t._v("\n    "+t._s(t.$t("当サイトでは、サービス向上やサイトの改善のためにGoogle LLCの提供するアクセス分析のツールであるGoogle Analyticsを利用した計測を行っております。"))),r("br"),t._v("\n    "+t._s(t.$t("Google Analyticsは、当サイトが発行するクッキー (Cookie) を利用して、個人を特定する情報を含まずにWebサイトの利用データ（アクセス状況、トラフィック、閲覧環境など）を収集しております。クッキー (Cookie) の利用に関してはGoogleのプライバシーポリシーと規約に基づいております。"))),r("br"),t._v("\n    "+t._s(t.$t("取得したデータは Webサイト利用状況の分析、サイト運営者へのレポートの作成、その他のサービスの提供に関わる目的に限り、これを使用します。"))),r("br"),t._v("\n    "+t._s(t.$t("Google Analyticsの利用規約及びプライバシーポリシーに関する説明については、Google Analyticsのサイトをご覧ください。"))),r("br"),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://marketingplatform.google.com/about/analytics/terms/jp",target:"_blank",rel:"noopener"}},[t._v("\n          "+t._s(t.$t("Google Analytics利用規約"))+"\n        ")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://policies.google.com/privacy?hl=ja",target:"_blank",rel:"noopener"}},[t._v("\n          "+t._s(t.$t("Googleのプライバシーポリシー"))+"\n        ")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://support.google.com/analytics/answer/6004245",target:"_blank",rel:"noopener"}},[t._v("\n          "+t._s(t.$t("Google Analyticsに関する詳細情報"))+"\n        ")])])])]),t._v(" "),r("TextCard",{attrs:{title:t.$t("免責事項")}},[t._v("\n    "+t._s(t.$t("当サイトに掲載されている情報の正確性については万全を期していますが、東京都は利用者が当サイトの情報を用いて行う一切の行為について責任を負うものではありません。"))),r("br"),t._v(" "),r("br"),t._v("\n    "+t._s(t.$t("また、利用者が当サイトを利用したことにより発生した利用者の損害及び利用者が第三者に与えた損害に対して、責任を負うものではありません。"))),r("br"),t._v(" "),r("br"),t._v("\n    "+t._s(t.$t("当サイトに掲載されている情報は、予告なしに変更又は削除することがあります。"))+"\n  ")]),t._v(" "),r("TextCard",{attrs:{title:t.$t("データについて")}},[r("i18n",{attrs:{tag:"p",path:"本サイトで公表しているデータは、{catalogWebsite}より誰でも自由にダウンロードが可能です。（データは順次追加予定です）"}},[r("a",{attrs:{href:"https://portal.data.metro.tokyo.lg.jp/",target:"_blank",rel:"noopener",place:"catalogWebsite"}},[t._v("\n        "+t._s(t.$t("東京都オープンデータカタログサイト"))+"\n      ")])])],1),t._v(" "),r("TextCard",{attrs:{title:t.$t("ソースコードについて")}},[t._v("\n    "+t._s(t.$t("当サイトのソースコードはMITライセンスで公開されており、誰でも自由に利用することができます。"))+"\n    "),r("i18n",{attrs:{path:"詳しくは、{githubRepo}をご確認ください。"}},[r("a",{attrs:{href:"https://github.com/tokyo-metropolitan-gov/covid19",target:"_blank",rel:"noopener",place:"githubRepo"}},[t._v("\n        "+t._s(t.$t("GitHub リポジトリ"))+"\n      ")])])],1),t._v(" "),r("TextCard",{attrs:{title:t.$t("お問い合わせ先（都のHPサイトポリシーについて）")}},[t._v("\n    "+t._s(t.$t("東京都生活文化局広報広聴部広報課"))),r("br"),t._v("\n    "+t._s(t.$t("電話"))+":\n    "),r("a",{attrs:{href:"tel:03-5388-3085"}},[t._v("03-5388-3085")])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);