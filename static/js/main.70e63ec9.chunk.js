(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{1026:function(e,t,n){var i={"./Binary_Property/ASCII.js":1027,"./Binary_Property/ASCII_Hex_Digit.js":1028,"./Binary_Property/Alphabetic.js":1029,"./Binary_Property/Any.js":1030,"./Binary_Property/Assigned.js":1031,"./Binary_Property/Bidi_Control.js":1032,"./Binary_Property/Bidi_Mirrored.js":1033,"./Binary_Property/Case_Ignorable.js":1034,"./Binary_Property/Cased.js":1035,"./Binary_Property/Changes_When_Casefolded.js":1036,"./Binary_Property/Changes_When_Casemapped.js":1037,"./Binary_Property/Changes_When_Lowercased.js":1038,"./Binary_Property/Changes_When_NFKC_Casefolded.js":1039,"./Binary_Property/Changes_When_Titlecased.js":1040,"./Binary_Property/Changes_When_Uppercased.js":1041,"./Binary_Property/Dash.js":1042,"./Binary_Property/Default_Ignorable_Code_Point.js":1043,"./Binary_Property/Deprecated.js":1044,"./Binary_Property/Diacritic.js":1045,"./Binary_Property/Emoji.js":1046,"./Binary_Property/Emoji_Component.js":1047,"./Binary_Property/Emoji_Modifier.js":1048,"./Binary_Property/Emoji_Modifier_Base.js":1049,"./Binary_Property/Emoji_Presentation.js":1050,"./Binary_Property/Extended_Pictographic.js":1051,"./Binary_Property/Extender.js":1052,"./Binary_Property/Grapheme_Base.js":1053,"./Binary_Property/Grapheme_Extend.js":1054,"./Binary_Property/Hex_Digit.js":1055,"./Binary_Property/IDS_Binary_Operator.js":1056,"./Binary_Property/IDS_Trinary_Operator.js":1057,"./Binary_Property/ID_Continue.js":1058,"./Binary_Property/ID_Start.js":1059,"./Binary_Property/Ideographic.js":1060,"./Binary_Property/Join_Control.js":1061,"./Binary_Property/Logical_Order_Exception.js":1062,"./Binary_Property/Lowercase.js":1063,"./Binary_Property/Math.js":1064,"./Binary_Property/Noncharacter_Code_Point.js":1065,"./Binary_Property/Pattern_Syntax.js":1066,"./Binary_Property/Pattern_White_Space.js":1067,"./Binary_Property/Quotation_Mark.js":1068,"./Binary_Property/Radical.js":1069,"./Binary_Property/Regional_Indicator.js":1070,"./Binary_Property/Sentence_Terminal.js":1071,"./Binary_Property/Soft_Dotted.js":1072,"./Binary_Property/Terminal_Punctuation.js":1073,"./Binary_Property/Unified_Ideograph.js":1074,"./Binary_Property/Uppercase.js":1075,"./Binary_Property/Variation_Selector.js":1076,"./Binary_Property/White_Space.js":1077,"./Binary_Property/XID_Continue.js":1078,"./Binary_Property/XID_Start.js":1079,"./General_Category/Cased_Letter.js":1080,"./General_Category/Close_Punctuation.js":1081,"./General_Category/Connector_Punctuation.js":1082,"./General_Category/Control.js":1083,"./General_Category/Currency_Symbol.js":1084,"./General_Category/Dash_Punctuation.js":1085,"./General_Category/Decimal_Number.js":1086,"./General_Category/Enclosing_Mark.js":1087,"./General_Category/Final_Punctuation.js":1088,"./General_Category/Format.js":1089,"./General_Category/Initial_Punctuation.js":1090,"./General_Category/Letter.js":1091,"./General_Category/Letter_Number.js":1092,"./General_Category/Line_Separator.js":1093,"./General_Category/Lowercase_Letter.js":1094,"./General_Category/Mark.js":1095,"./General_Category/Math_Symbol.js":1096,"./General_Category/Modifier_Letter.js":1097,"./General_Category/Modifier_Symbol.js":1098,"./General_Category/Nonspacing_Mark.js":1099,"./General_Category/Number.js":1100,"./General_Category/Open_Punctuation.js":1101,"./General_Category/Other.js":1102,"./General_Category/Other_Letter.js":1103,"./General_Category/Other_Number.js":1104,"./General_Category/Other_Punctuation.js":1105,"./General_Category/Other_Symbol.js":1106,"./General_Category/Paragraph_Separator.js":1107,"./General_Category/Private_Use.js":1108,"./General_Category/Punctuation.js":1109,"./General_Category/Separator.js":1110,"./General_Category/Space_Separator.js":1111,"./General_Category/Spacing_Mark.js":1112,"./General_Category/Surrogate.js":1113,"./General_Category/Symbol.js":1114,"./General_Category/Titlecase_Letter.js":1115,"./General_Category/Unassigned.js":1116,"./General_Category/Uppercase_Letter.js":1117,"./Script/Adlam.js":1118,"./Script/Ahom.js":1119,"./Script/Anatolian_Hieroglyphs.js":1120,"./Script/Arabic.js":1121,"./Script/Armenian.js":1122,"./Script/Avestan.js":1123,"./Script/Balinese.js":1124,"./Script/Bamum.js":1125,"./Script/Bassa_Vah.js":1126,"./Script/Batak.js":1127,"./Script/Bengali.js":1128,"./Script/Bhaiksuki.js":1129,"./Script/Bopomofo.js":1130,"./Script/Brahmi.js":1131,"./Script/Braille.js":1132,"./Script/Buginese.js":1133,"./Script/Buhid.js":1134,"./Script/Canadian_Aboriginal.js":1135,"./Script/Carian.js":1136,"./Script/Caucasian_Albanian.js":1137,"./Script/Chakma.js":1138,"./Script/Cham.js":1139,"./Script/Cherokee.js":1140,"./Script/Chorasmian.js":1141,"./Script/Common.js":1142,"./Script/Coptic.js":1143,"./Script/Cuneiform.js":1144,"./Script/Cypriot.js":1145,"./Script/Cyrillic.js":1146,"./Script/Deseret.js":1147,"./Script/Devanagari.js":1148,"./Script/Dives_Akuru.js":1149,"./Script/Dogra.js":1150,"./Script/Duployan.js":1151,"./Script/Egyptian_Hieroglyphs.js":1152,"./Script/Elbasan.js":1153,"./Script/Elymaic.js":1154,"./Script/Ethiopic.js":1155,"./Script/Georgian.js":1156,"./Script/Glagolitic.js":1157,"./Script/Gothic.js":1158,"./Script/Grantha.js":1159,"./Script/Greek.js":1160,"./Script/Gujarati.js":1161,"./Script/Gunjala_Gondi.js":1162,"./Script/Gurmukhi.js":1163,"./Script/Han.js":1164,"./Script/Hangul.js":1165,"./Script/Hanifi_Rohingya.js":1166,"./Script/Hanunoo.js":1167,"./Script/Hatran.js":1168,"./Script/Hebrew.js":1169,"./Script/Hiragana.js":1170,"./Script/Imperial_Aramaic.js":1171,"./Script/Inherited.js":1172,"./Script/Inscriptional_Pahlavi.js":1173,"./Script/Inscriptional_Parthian.js":1174,"./Script/Javanese.js":1175,"./Script/Kaithi.js":1176,"./Script/Kannada.js":1177,"./Script/Katakana.js":1178,"./Script/Kayah_Li.js":1179,"./Script/Kharoshthi.js":1180,"./Script/Khitan_Small_Script.js":1181,"./Script/Khmer.js":1182,"./Script/Khojki.js":1183,"./Script/Khudawadi.js":1184,"./Script/Lao.js":1185,"./Script/Latin.js":1186,"./Script/Lepcha.js":1187,"./Script/Limbu.js":1188,"./Script/Linear_A.js":1189,"./Script/Linear_B.js":1190,"./Script/Lisu.js":1191,"./Script/Lycian.js":1192,"./Script/Lydian.js":1193,"./Script/Mahajani.js":1194,"./Script/Makasar.js":1195,"./Script/Malayalam.js":1196,"./Script/Mandaic.js":1197,"./Script/Manichaean.js":1198,"./Script/Marchen.js":1199,"./Script/Masaram_Gondi.js":1200,"./Script/Medefaidrin.js":1201,"./Script/Meetei_Mayek.js":1202,"./Script/Mende_Kikakui.js":1203,"./Script/Meroitic_Cursive.js":1204,"./Script/Meroitic_Hieroglyphs.js":1205,"./Script/Miao.js":1206,"./Script/Modi.js":1207,"./Script/Mongolian.js":1208,"./Script/Mro.js":1209,"./Script/Multani.js":1210,"./Script/Myanmar.js":1211,"./Script/Nabataean.js":1212,"./Script/Nandinagari.js":1213,"./Script/New_Tai_Lue.js":1214,"./Script/Newa.js":1215,"./Script/Nko.js":1216,"./Script/Nushu.js":1217,"./Script/Nyiakeng_Puachue_Hmong.js":1218,"./Script/Ogham.js":1219,"./Script/Ol_Chiki.js":1220,"./Script/Old_Hungarian.js":1221,"./Script/Old_Italic.js":1222,"./Script/Old_North_Arabian.js":1223,"./Script/Old_Permic.js":1224,"./Script/Old_Persian.js":1225,"./Script/Old_Sogdian.js":1226,"./Script/Old_South_Arabian.js":1227,"./Script/Old_Turkic.js":1228,"./Script/Oriya.js":1229,"./Script/Osage.js":1230,"./Script/Osmanya.js":1231,"./Script/Pahawh_Hmong.js":1232,"./Script/Palmyrene.js":1233,"./Script/Pau_Cin_Hau.js":1234,"./Script/Phags_Pa.js":1235,"./Script/Phoenician.js":1236,"./Script/Psalter_Pahlavi.js":1237,"./Script/Rejang.js":1238,"./Script/Runic.js":1239,"./Script/Samaritan.js":1240,"./Script/Saurashtra.js":1241,"./Script/Sharada.js":1242,"./Script/Shavian.js":1243,"./Script/Siddham.js":1244,"./Script/SignWriting.js":1245,"./Script/Sinhala.js":1246,"./Script/Sogdian.js":1247,"./Script/Sora_Sompeng.js":1248,"./Script/Soyombo.js":1249,"./Script/Sundanese.js":1250,"./Script/Syloti_Nagri.js":1251,"./Script/Syriac.js":1252,"./Script/Tagalog.js":1253,"./Script/Tagbanwa.js":1254,"./Script/Tai_Le.js":1255,"./Script/Tai_Tham.js":1256,"./Script/Tai_Viet.js":1257,"./Script/Takri.js":1258,"./Script/Tamil.js":1259,"./Script/Tangut.js":1260,"./Script/Telugu.js":1261,"./Script/Thaana.js":1262,"./Script/Thai.js":1263,"./Script/Tibetan.js":1264,"./Script/Tifinagh.js":1265,"./Script/Tirhuta.js":1266,"./Script/Ugaritic.js":1267,"./Script/Vai.js":1268,"./Script/Wancho.js":1269,"./Script/Warang_Citi.js":1270,"./Script/Yezidi.js":1271,"./Script/Yi.js":1272,"./Script/Zanabazar_Square.js":1273,"./Script_Extensions/Adlam.js":1274,"./Script_Extensions/Ahom.js":1275,"./Script_Extensions/Anatolian_Hieroglyphs.js":1276,"./Script_Extensions/Arabic.js":1277,"./Script_Extensions/Armenian.js":1278,"./Script_Extensions/Avestan.js":1279,"./Script_Extensions/Balinese.js":1280,"./Script_Extensions/Bamum.js":1281,"./Script_Extensions/Bassa_Vah.js":1282,"./Script_Extensions/Batak.js":1283,"./Script_Extensions/Bengali.js":1284,"./Script_Extensions/Bhaiksuki.js":1285,"./Script_Extensions/Bopomofo.js":1286,"./Script_Extensions/Brahmi.js":1287,"./Script_Extensions/Braille.js":1288,"./Script_Extensions/Buginese.js":1289,"./Script_Extensions/Buhid.js":1290,"./Script_Extensions/Canadian_Aboriginal.js":1291,"./Script_Extensions/Carian.js":1292,"./Script_Extensions/Caucasian_Albanian.js":1293,"./Script_Extensions/Chakma.js":1294,"./Script_Extensions/Cham.js":1295,"./Script_Extensions/Cherokee.js":1296,"./Script_Extensions/Chorasmian.js":1297,"./Script_Extensions/Common.js":1298,"./Script_Extensions/Coptic.js":1299,"./Script_Extensions/Cuneiform.js":1300,"./Script_Extensions/Cypriot.js":1301,"./Script_Extensions/Cyrillic.js":1302,"./Script_Extensions/Deseret.js":1303,"./Script_Extensions/Devanagari.js":1304,"./Script_Extensions/Dives_Akuru.js":1305,"./Script_Extensions/Dogra.js":1306,"./Script_Extensions/Duployan.js":1307,"./Script_Extensions/Egyptian_Hieroglyphs.js":1308,"./Script_Extensions/Elbasan.js":1309,"./Script_Extensions/Elymaic.js":1310,"./Script_Extensions/Ethiopic.js":1311,"./Script_Extensions/Georgian.js":1312,"./Script_Extensions/Glagolitic.js":1313,"./Script_Extensions/Gothic.js":1314,"./Script_Extensions/Grantha.js":1315,"./Script_Extensions/Greek.js":1316,"./Script_Extensions/Gujarati.js":1317,"./Script_Extensions/Gunjala_Gondi.js":1318,"./Script_Extensions/Gurmukhi.js":1319,"./Script_Extensions/Han.js":1320,"./Script_Extensions/Hangul.js":1321,"./Script_Extensions/Hanifi_Rohingya.js":1322,"./Script_Extensions/Hanunoo.js":1323,"./Script_Extensions/Hatran.js":1324,"./Script_Extensions/Hebrew.js":1325,"./Script_Extensions/Hiragana.js":1326,"./Script_Extensions/Imperial_Aramaic.js":1327,"./Script_Extensions/Inherited.js":1328,"./Script_Extensions/Inscriptional_Pahlavi.js":1329,"./Script_Extensions/Inscriptional_Parthian.js":1330,"./Script_Extensions/Javanese.js":1331,"./Script_Extensions/Kaithi.js":1332,"./Script_Extensions/Kannada.js":1333,"./Script_Extensions/Katakana.js":1334,"./Script_Extensions/Kayah_Li.js":1335,"./Script_Extensions/Kharoshthi.js":1336,"./Script_Extensions/Khitan_Small_Script.js":1337,"./Script_Extensions/Khmer.js":1338,"./Script_Extensions/Khojki.js":1339,"./Script_Extensions/Khudawadi.js":1340,"./Script_Extensions/Lao.js":1341,"./Script_Extensions/Latin.js":1342,"./Script_Extensions/Lepcha.js":1343,"./Script_Extensions/Limbu.js":1344,"./Script_Extensions/Linear_A.js":1345,"./Script_Extensions/Linear_B.js":1346,"./Script_Extensions/Lisu.js":1347,"./Script_Extensions/Lycian.js":1348,"./Script_Extensions/Lydian.js":1349,"./Script_Extensions/Mahajani.js":1350,"./Script_Extensions/Makasar.js":1351,"./Script_Extensions/Malayalam.js":1352,"./Script_Extensions/Mandaic.js":1353,"./Script_Extensions/Manichaean.js":1354,"./Script_Extensions/Marchen.js":1355,"./Script_Extensions/Masaram_Gondi.js":1356,"./Script_Extensions/Medefaidrin.js":1357,"./Script_Extensions/Meetei_Mayek.js":1358,"./Script_Extensions/Mende_Kikakui.js":1359,"./Script_Extensions/Meroitic_Cursive.js":1360,"./Script_Extensions/Meroitic_Hieroglyphs.js":1361,"./Script_Extensions/Miao.js":1362,"./Script_Extensions/Modi.js":1363,"./Script_Extensions/Mongolian.js":1364,"./Script_Extensions/Mro.js":1365,"./Script_Extensions/Multani.js":1366,"./Script_Extensions/Myanmar.js":1367,"./Script_Extensions/Nabataean.js":1368,"./Script_Extensions/Nandinagari.js":1369,"./Script_Extensions/New_Tai_Lue.js":1370,"./Script_Extensions/Newa.js":1371,"./Script_Extensions/Nko.js":1372,"./Script_Extensions/Nushu.js":1373,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":1374,"./Script_Extensions/Ogham.js":1375,"./Script_Extensions/Ol_Chiki.js":1376,"./Script_Extensions/Old_Hungarian.js":1377,"./Script_Extensions/Old_Italic.js":1378,"./Script_Extensions/Old_North_Arabian.js":1379,"./Script_Extensions/Old_Permic.js":1380,"./Script_Extensions/Old_Persian.js":1381,"./Script_Extensions/Old_Sogdian.js":1382,"./Script_Extensions/Old_South_Arabian.js":1383,"./Script_Extensions/Old_Turkic.js":1384,"./Script_Extensions/Oriya.js":1385,"./Script_Extensions/Osage.js":1386,"./Script_Extensions/Osmanya.js":1387,"./Script_Extensions/Pahawh_Hmong.js":1388,"./Script_Extensions/Palmyrene.js":1389,"./Script_Extensions/Pau_Cin_Hau.js":1390,"./Script_Extensions/Phags_Pa.js":1391,"./Script_Extensions/Phoenician.js":1392,"./Script_Extensions/Psalter_Pahlavi.js":1393,"./Script_Extensions/Rejang.js":1394,"./Script_Extensions/Runic.js":1395,"./Script_Extensions/Samaritan.js":1396,"./Script_Extensions/Saurashtra.js":1397,"./Script_Extensions/Sharada.js":1398,"./Script_Extensions/Shavian.js":1399,"./Script_Extensions/Siddham.js":1400,"./Script_Extensions/SignWriting.js":1401,"./Script_Extensions/Sinhala.js":1402,"./Script_Extensions/Sogdian.js":1403,"./Script_Extensions/Sora_Sompeng.js":1404,"./Script_Extensions/Soyombo.js":1405,"./Script_Extensions/Sundanese.js":1406,"./Script_Extensions/Syloti_Nagri.js":1407,"./Script_Extensions/Syriac.js":1408,"./Script_Extensions/Tagalog.js":1409,"./Script_Extensions/Tagbanwa.js":1410,"./Script_Extensions/Tai_Le.js":1411,"./Script_Extensions/Tai_Tham.js":1412,"./Script_Extensions/Tai_Viet.js":1413,"./Script_Extensions/Takri.js":1414,"./Script_Extensions/Tamil.js":1415,"./Script_Extensions/Tangut.js":1416,"./Script_Extensions/Telugu.js":1417,"./Script_Extensions/Thaana.js":1418,"./Script_Extensions/Thai.js":1419,"./Script_Extensions/Tibetan.js":1420,"./Script_Extensions/Tifinagh.js":1421,"./Script_Extensions/Tirhuta.js":1422,"./Script_Extensions/Ugaritic.js":1423,"./Script_Extensions/Vai.js":1424,"./Script_Extensions/Wancho.js":1425,"./Script_Extensions/Warang_Citi.js":1426,"./Script_Extensions/Yezidi.js":1427,"./Script_Extensions/Yi.js":1428,"./Script_Extensions/Zanabazar_Square.js":1429,"./index.js":1430,"./unicode-version.js":1431};function s(e){var t=r(e);return n(t)}function r(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}s.keys=function(){return Object.keys(i)},s.resolve=r,e.exports=s,s.id=1026},1593:function(e,t,n){"use strict";n.r(t);var i=n(2),s=n.n(i),r=n(431),a=n.n(r),o=(n(442),n(28)),c=n(29),j=n(31),p=n(30),l=(n(443),n(3)),d=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(l.jsx)("div",{className:"about-container",children:Object(l.jsxs)("div",{className:"terminal grow",children:[Object(l.jsxs)("div",{className:"terminal-header",children:[Object(l.jsx)("div",{className:"header-button red"}),Object(l.jsx)("div",{className:"header-button yellow"}),Object(l.jsx)("div",{className:"header-button green"})]}),Object(l.jsx)("div",{className:"terminal-window",children:Object(l.jsx)(u,{statements:this.props.statements})})]})})}}]),n}(s.a.PureComponent),u=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{children:[this.props.statements.map((function(e,t){return Object(l.jsx)(h,{statement:e},t)})),Object(l.jsx)("div",{className:"statement",children:Object(l.jsx)("div",{className:"input-statement",children:Object(l.jsx)("span",{children:"\xa0"})})})]})}}]),n}(s.a.PureComponent),h=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{className:"statement",children:[Object(l.jsx)("div",{className:"input-statement",children:this.props.statement.input}),Object(l.jsx)("div",{className:"return-statement",dangerouslySetInnerHTML:{__html:this.props.statement.return}})]})}}]),n}(s.a.PureComponent),_=d,S=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).state={text:""},i}return Object(c.a)(n,[{key:"clicketyClack",value:function(e,t,n,i){var s=this,r="",a=0;e.split("").forEach((function(e){a+=Math.random()*(n-t)+t,setTimeout((function(){r+=e,s.setState({text:r})}),i+a)}))}},{key:"componentDidMount",value:function(){this.clicketyClack(this.props.text,this.props.minTypeSpeed,this.props.maxTypeSpeed,this.props.initDelay)}},{key:"render",value:function(){return Object(l.jsxs)("div",{className:this.props.className,children:[this.state.text,Object(l.jsx)("span",{children:"\xa0"})]})}}]),n}(s.a.Component);S.defaultProps={text:"Test Test Test!",minTypeSpeed:30,maxTypeSpeed:90,initDelay:1e3};var m,x,g,y,b,O,f=S,v=n(43),E=n.n(v),k=(n(453),function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(c.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{className:"intro",children:[Object(l.jsx)(f,{className:"intro-title b",text:"Hi, I'm Xin!"}),Object(l.jsxs)("div",{className:"intro-description tc",children:["\u25c6 4",Object(l.jsx)("sup",{children:"th"})," year computer science w/ business applications student @"," ",Object(l.jsx)("a",{href:"https://www.ucr.edu/",target:"_blank",rel:"noreferrer",children:"UCR"})," ",Object(l.jsx)("br",{}),"\u25c6 current: swe intern @"," ",Object(l.jsx)("a",{href:"https://vistendo.com/",target:"_blank",rel:"noreferrer",children:"Vistendo"}),", ","advanced tech interview prep @"," ",Object(l.jsx)("a",{href:"https://info.codepath.org/technical-interview-prep",target:"_blank",rel:"noreferrer",children:"CodePath"}),Object(l.jsx)("br",{}),"\u25c6"," ",Object(l.jsx)(E.a,{to:"#projects",children:"click to jump to featured works"})]})]})}}]),n}(i.Component)),C=(n(454),function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.links,t=e.view_source;e.in_progress;return Object(l.jsx)("div",{className:"project-links",children:Object(l.jsx)("a",{href:t,rel:"noopener noreferrer",target:"_blank",className:"project-link",children:Object(l.jsx)("a",{className:"button",children:"VIEW SOURCE"})})})}}]),n}(s.a.PureComponent)),P=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(l.jsx)("span",{className:"project-skill",children:this.props.skill})}}]),n}(s.a.PureComponent),w=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(l.jsx)("div",{className:"project-skills tc",children:this.props.skills.map((function(e,t){return Object(l.jsx)(P,{skill:e},t)}))})}}]),n}(s.a.PureComponent),B=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props,t=e.image,n=e.title,i=e.description,s=e.skills,r=e.links;return Object(l.jsxs)("div",{className:"projectcarddivs tc bg-light-red dib br4 pa4 ma4 bw2 shadow-3",children:[Object(l.jsx)("img",{className:"projectcarddivs-image",src:t}),Object(l.jsx)("div",{className:"projectcarddivs-background"}),Object(l.jsxs)("div",{className:"projectcarddivs-content",children:[Object(l.jsx)("h3",{children:n}),Object(l.jsx)("p",{dangerouslySetInnerHTML:{__html:i}}),Object(l.jsx)(w,{skills:s}),Object(l.jsx)(C,{links:r})]})]})}}]),n}(s.a.PureComponent),N=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.projectcard;return Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"projectcard-container ",children:e&&e.map((function(e){return Object(l.jsx)(B,{title:e.title,description:e.description,skills:e.skills,links:e.links,image:e.image},e.title)}))})})}}]),n}(s.a.PureComponent),T=n(18),M=n(19),G=n.p+"images/b85292b5c9586d9954fca7e97930fc23-logo.svg",A=M.a.div(m||(m=Object(T.a)(["\n  display: flex;\n  align-items: center;\n"]))),L=M.a.div(x||(x=Object(T.a)(["\n  width: 125px;\n  height: 45px;\n  img {\n    width: 100%;\n    height: 100px auto;\n  }\n"]))),D=M.a.h2(g||(g=Object(T.a)(["\n  font-size: 16px;\n  margin: 0;\n  margin-left: 4px;\n  color: #222;\n  font-weight: 500;\n"])));function I(e){return Object(l.jsxs)(A,{children:[Object(l.jsx)(E.a,{to:"intro",children:Object(l.jsx)(L,{children:Object(l.jsx)("img",{src:G,alt:"xin wang"})})}),Object(l.jsx)(D,{})]})}var H,U,R,K,F=M.a.div(y||(y=Object(T.a)(["\n    display: flex;\n    align-items: center;\n"]))),W=M.a.div(b||(b=Object(T.a)(["\n    width: 125px;\n    height: 45px;\n    img\n    {\n        width: 100%;\n        height: 100px auto;\n    }\n"]))),V=M.a.h2(O||(O=Object(T.a)(["\n    font-size: 16px;\n    margin: 0;\n    margin-left: 4px;\n    color: #222;\n    font-weight: 500;\n"])));function z(e){return Object(l.jsxs)(F,{children:[Object(l.jsx)(E.a,{to:"intro",children:Object(l.jsx)(W,{children:Object(l.jsx)("img",{src:G,alt:"xin wang"})})}),Object(l.jsx)(V,{})]})}var X=M.a.div(H||(H=Object(T.a)(["\n  height: 100%;\n  display: flex;\n  align-items: center;\n  style: sticky;\n  // padding-right: 230px;\n"]))),J=M.a.ul(U||(U=Object(T.a)(["\n  margin: 0;\n  padding: 0;\n  display: flex;\n  height: 100%;\n  list-style: none;\n"]))),Y=M.a.li(R||(R=Object(T.a)(["\n  height: 100%;\n  padding: 0 1.2em;\n  color: black;\n  font-weight: 1000;\n  font-size: 1.02em;\n  font-family: Circular;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  border-top: 2px solid transparent;\n  transition: all 250ms ease-in-out;\n\n  &:hover {\n    border-top: 2px solid;\n    }\n"])));M.a.a(K||(K=Object(T.a)(["\n  text-decoration: none;\n  color: black;\n  font-size: inherit;\n"])));function q(e){return Object(l.jsx)(X,{children:Object(l.jsxs)(J,{children:[Object(l.jsx)(Y,{children:Object(l.jsx)(E.a,{to:"#about",style:{color:"#000"},children:"about me"})}),Object(l.jsx)(Y,{children:Object(l.jsx)(E.a,{to:"#projects",style:{color:"#000"},children:"featured works"})}),Object(l.jsx)(Y,{children:Object(l.jsx)("a",{rel:"noopener",href:"https://github.com/xinwng",target:"_blank",style:{color:"#000"},children:"github"})}),Object(l.jsx)(Y,{children:Object(l.jsx)("a",{rel:"noopener",href:"https://docs.google.com/document/d/1HOYeD80rtpC4gh9snpv8D2WQO3I6cw504W4nwCqYXKI/",target:"_blank",style:{color:"#000"},children:"resume"})}),Object(l.jsx)(Y,{children:Object(l.jsx)(E.a,{to:"#contacts",style:{color:"#000"},children:"let's connect"})})]})})}var Q,Z,$,ee,te,ne,ie=n(436),se=n(437),re=n(1596),ae=M.a.div(Q||(Q=Object(T.a)(["\n  z-index: 99;\n  cursor: pointer;\n"]))),oe=function(e){return Object(l.jsx)(re.a.path,Object(se.a)({fill:"transparent",strokeLinecap:"round",strokeWidth:"3"},e))},ce={duration:.33};function je(e){var t=e.toggle,n=e.isOpen;return Object(l.jsx)(ae,{onClick:t,children:Object(l.jsxs)("svg",{width:"23",height:"23",viewBox:"0 0 23 23",children:[Object(l.jsx)(oe,{animate:n?"open":"closed",initial:!1,variants:{closed:{d:"M 2 2.5 L 20 2.5",stroke:"hsl(0, 0%, 18%)"},open:{d:"M 3 16.5 L 17 2.5",stroke:"hsl(0, 0%, 18%)"}},transition:ce}),Object(l.jsx)(oe,{d:"M 2 9.423 L 20 9.423",stroke:"hsl(0, 0%, 18%)",animate:n?"open":"closed",initial:!1,variants:{closed:{opacity:1},open:{opacity:0}},transition:ce}),Object(l.jsx)(oe,{animate:n?"open":"closed",initial:!1,variants:{closed:{d:"M 2 16.346 L 20 16.346",stroke:"hsl(0, 0%, 18%)"},open:{d:"M 3 2.5 L 17 16.346",stroke:"hsl(0, 0%, 18%)"}},transition:ce})]})})}var pe=M.a.div(Z||(Z=Object(T.a)(["\n  height: 100%;\n  display: flex;\n  align-items: center;\n  \n"]))),le=M.a.ul($||($=Object(T.a)(["\n  margin: 0;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  list-style: none;\n  background: #fff;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n  // background-color: #fff;\n  width: 100%;\n  flex-direction: column;\n  position: fixed;\n  top: 50px;\n  left: 0px;\n"]))),de=M.a.li(ee||(ee=Object(T.a)(["\n  width: 100%;\n  padding: 0 1.1em;\n  color: #000;\n  font-weight: 1000;\n  font-size: 1.3rem;\n  text-align: center;\n  font-family: Circular, Lotion;\n  display: flex;\n  position: center;\n  align-items: center;\n  color: #EFFFFA;\n  margin-left: 1.5rem;\n  margin-bottom: 1.5rem;\n  \n  // border-bottom: 2px solid black;\n  transition: all 250ms ease-in-out;\n  // &:hover {\n  //   border-bottom: 2px solid black;\n  //   }\n"])));M.a.div(te||(te=Object(T.a)(["\n  height: 2em;\n"]))),M.a.a(ne||(ne=Object(T.a)(["\n  text-decoration: none;\n  color: inherit;\n  font-size: inherit;\n"])));function ue(e){var t=Object(i.useState)(!1),n=Object(ie.a)(t,2),s=n[0],r=n[1];return Object(l.jsxs)(pe,{children:[Object(l.jsx)(je,{isOpen:s,toggle:function(){return r(!s)}}),s&&Object(l.jsxs)(le,{children:[Object(l.jsx)(de,{children:Object(l.jsx)("a",{href:"mailto:xin@xinwang.me",target:"_blank",style:{color:"#000"},children:"xin@xinwang.me"})}),Object(l.jsx)(de,{children:Object(l.jsx)("a",{rel:"noopener",href:"https://github.com/xinwng",target:"_blank",style:{color:"#000"},children:"github"})}),Object(l.jsx)(de,{children:Object(l.jsx)("a",{rel:"noopener",href:"https://www.linkedin.com/in/xinwng",target:"_blank",style:{color:"#000"},children:"linkedin"})}),Object(l.jsx)(de,{children:Object(l.jsx)("a",{rel:"noopener",href:"https://docs.google.com/document/d/1HOYeD80rtpC4gh9snpv8D2WQO3I6cw504W4nwCqYXKI/",target:"_blank",style:{color:"#000"},children:"resume"})})]})]})}var he,_e,Se,me,xe=n(435),ge=768,ye=M.a.div(he||(he=Object(T.a)(["\n    width: 100%;\n    height: 60px;\n    box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);\n    display: flex;\n    align-items: center;\n    padding: 0 1.5em;\n    position: sticky;\n    top: 0;\n    background-color: #fff;\n    z-index: 9999;\n"]))),be=M.a.div(_e||(_e=Object(T.a)(["\n    // margin-left: 250px;    \n    display: flex;\n"]))),Oe=M.a.div(Se||(Se=Object(T.a)(["\n    display: flex;\n    flex: 2;\n    height: 100%;\n    justify-content: center;\n"]))),fe=M.a.div(me||(me=Object(T.a)(["\n    display: flex;\n    height: 100%;\n"])));function ve(e){var t=Object(xe.useMediaQuery)({maxWidth:ge});return Object(l.jsxs)(ye,{children:[Object(l.jsxs)(be,{children:[!t&&Object(l.jsx)(I,{}),t&&Object(l.jsx)(z,{})]}),Object(l.jsx)(Oe,{}),Object(l.jsxs)(fe,{children:[!t&&Object(l.jsx)(q,{}),t&&Object(l.jsx)(ue,{})]})]})}n(458);var Ee=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{className:"contact-links",children:[Object(l.jsx)("span",{children:Object(l.jsx)("a",{rel:"noopener",target:"_blank",href:"mailto:xin@xinwang.me",children:Object(l.jsx)("u",{children:"xin@xinwang.me"})})}),Object(l.jsx)("span",{children:Object(l.jsx)("a",{rel:"noopener",target:"_blank",href:"https://www.linkedin.com/in/xinwng",children:Object(l.jsx)("u",{children:"linkedin"})})})]})}}]),n}(i.Component),ke=n.p+"images/39f28990e922b559106f57e4c2965180-splice.svg",Ce=n.p+"images/ed89c5e0972c5e478686979a0d40cddb-apple_marketing_plan.svg",Pe=n.p+"images/d0c9360d7eba893a3ce51de3ab14a366-portfolio.svg",we=[{title:"$PLICE",description:"$PLICE is a way of simplifying everyday experiences. This project was founded based on the desire for efficency and convenience. The premise of this application entails the idea to easily split the check when dining out with friends or family. Users can select the restaurant they choose and the menu for the respective restaurant will display. Each user will select the food they ordered and pass it along to the next person, and the total for each user will output.",skills:["C++","CMake","Google Test Suite","Vim"],image:ke,links:{view_source:"https://github.com/xinwng/splice"}},{title:"NASA PDR",description:"I participated in a 12-week long program: NASA Lucy Space Mission Concept Academy - designed to engage students in rigorous, project-based workforce development. I received mission development skill training from NASA scientists and engineers, and I utilized such trainings to develop a preliminary design review (PDR) strategizing and desigining a payload system that intends to survive the harsh Venusian climate. This was a collaborative group effort with 7 other students. I was the co-leader of the Science team and also partook in the Business team as well. Check out the source link below to see our final deliverable!",skills:["Strategy","Design"],image:n.p+"images/4715ac4b40e0642cbd47c6259dec9057-nasa.svg",links:{view_source:"https://docs.google.com/document/d/1LZLYNr6iaqxR50lXMJkE3FXMP4v0yt8N5IifEt1bURI/edit?usp=sharing"}},{title:"PERSONAL PORTFOLIO",description:"This project is the one that you are looking at right now! During my off time, I try not to focus academic work (to give my brain a little break) and pursue my other hobbies. But, the quarantine offered me so much free time! I learned ReactJS, HTML, CSS, and Sass during Spring Break 2021 and created this personal website.",skills:["ReactJS","HTML","Javascript","CSS","Saas"],image:Pe,links:{view_source:"https://github.com/xinwng/xinwng.github.io/tree/master"}},{title:"MARKETING PLAN FOR APPLE'S IPHONE (2021)",description:"A 30+ page marketing plan designed to evaluate Apple's current marketing situation and construct strategies that propel future growth. It comprises of the company's profile, financial overview, current marketing situation, SWOT analysis, and much more. Take a look!",skills:["Product","Strategy"],image:Ce,links:{view_source:"https://docs.google.com/document/d/1bje5qloIirFweqM9K3y4k089FZEEbXnVR-Bm93dlMeQ/edit?usp=sharing"}}],Be=[{input:"name pronounciation:",return:'"Shin!"'},{input:"location:",return:'"Riverside, CA"'},{input:"education:",return:'["B.S. in Computer Science with Business Applications @ University of California, Riverside", "Expected Graduation: June 2022"]'},{input:"programming skills:",return:'["Python", "C++", "C", "C#", "HTML5", "CSS3", "Javascript", "React.js"]'},{input:"contacts:",return:'["<a href="mailto:xin@xinwang.me" target="_blank">xin@xinwang.me</a>", "<a rel="noopener" href="https://github.com/xinwng" target="_blank">Github</a>", "<a rel="noopener" href="https://www.linkedin.com/in/xinwng" target="_blank">LinkedIn</a>"]'},{input:"resume:",return:'"<a rel="noopener" href="https://docs.google.com/document/d/1HOYeD80rtpC4gh9snpv8D2WQO3I6cw504W4nwCqYXKI/" target="_blank">Resume Link</a>"'},{input:"languages:",return:'["English - Native", "Mandarin - Bilingual Fluency"]'},{input:"fun facts:",return:'["Born in Fujian, China", "Super scared of snakes", "Originally a Biology major"]'},{input:"hobbies:",return:'["Discovering music", "City-exploring", "Watching movies & shows"]'}],Ne=n.p+"images/6ae5b80a4735de620daaf86051caeec5-hand_point_down.svg",Te=(n(459),function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{className:"home",children:[Object(l.jsxs)("a",{id:"intro",children:[Object(l.jsx)(ve,{}),Object(l.jsx)(k,{})]}),Object(l.jsx)("a",{id:"about",children:Object(l.jsx)(_,{statements:Be})}),Object(l.jsx)("h1",{id:"projects",className:"project-section tc",children:"featured works"}),Object(l.jsx)("a",{className:"projectcard_tac tc shadow-5",children:Object(l.jsx)("div",{children:Object(l.jsx)(N,{projectcard:we})})}),Object(l.jsxs)("h3",{id:"contacts",className:"contacts-section tc",children:["connect with me",Object(l.jsx)("div",{class:"hand_point_down bounce",children:Object(l.jsx)("img",{width:"40",height:"40",src:Ne,alt:"hand point down"})})]}),Object(l.jsx)("p",{className:"contacts-sub",children:Object(l.jsx)(Ee,{})})]})}}]),n}(s.a.PureComponent)),Me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,1597)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),i(e),s(e),r(e),a(e)}))};n(460),n(461),n(462),n(464),n(1527);a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(Te,{})}),document.getElementById("root")),Me()},442:function(e,t,n){},443:function(e,t,n){},453:function(e,t,n){},454:function(e,t,n){},458:function(e,t,n){},459:function(e,t,n){},479:function(e,t){},481:function(e,t){},490:function(e,t){},492:function(e,t){},517:function(e,t){},519:function(e,t){},520:function(e,t){},525:function(e,t){},527:function(e,t){},546:function(e,t){},558:function(e,t){},561:function(e,t){},719:function(e,t){},733:function(e,t){},749:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=749},779:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=779},804:function(e,t,n){var i={"./_collections":24,"./_collections.js":24,"./_path":46,"./_path.js":46,"./_transforms":52,"./_transforms.js":52,"./addAttributesToSVGElement":319,"./addAttributesToSVGElement.js":319,"./addClassesToSVGElement":320,"./addClassesToSVGElement.js":320,"./cleanupAttrs":321,"./cleanupAttrs.js":321,"./cleanupEnableBackground":322,"./cleanupEnableBackground.js":322,"./cleanupIDs":323,"./cleanupIDs.js":323,"./cleanupListOfValues":324,"./cleanupListOfValues.js":324,"./cleanupNumericValues":325,"./cleanupNumericValues.js":325,"./collapseGroups":326,"./collapseGroups.js":326,"./convertColors":327,"./convertColors.js":327,"./convertEllipseToCircle":328,"./convertEllipseToCircle.js":328,"./convertPathData":329,"./convertPathData.js":329,"./convertShapeToPath":330,"./convertShapeToPath.js":330,"./convertStyleToAttrs":331,"./convertStyleToAttrs.js":331,"./convertTransform":332,"./convertTransform.js":332,"./inlineStyles":333,"./inlineStyles.js":333,"./mergePaths":348,"./mergePaths.js":348,"./minifyStyles":349,"./minifyStyles.js":349,"./moveElemsAttrsToGroup":351,"./moveElemsAttrsToGroup.js":351,"./moveGroupAttrsToElems":352,"./moveGroupAttrsToElems.js":352,"./prefixIds":353,"./prefixIds.js":353,"./removeAttributesBySelector":354,"./removeAttributesBySelector.js":354,"./removeAttrs":355,"./removeAttrs.js":355,"./removeComments":356,"./removeComments.js":356,"./removeDesc":357,"./removeDesc.js":357,"./removeDimensions":358,"./removeDimensions.js":358,"./removeDoctype":359,"./removeDoctype.js":359,"./removeEditorsNSData":360,"./removeEditorsNSData.js":360,"./removeElementsByAttr":361,"./removeElementsByAttr.js":361,"./removeEmptyAttrs":362,"./removeEmptyAttrs.js":362,"./removeEmptyContainers":363,"./removeEmptyContainers.js":363,"./removeEmptyText":364,"./removeEmptyText.js":364,"./removeHiddenElems":365,"./removeHiddenElems.js":365,"./removeMetadata":366,"./removeMetadata.js":366,"./removeNonInheritableGroupAttrs":367,"./removeNonInheritableGroupAttrs.js":367,"./removeOffCanvasPaths":368,"./removeOffCanvasPaths.js":368,"./removeRasterImages":369,"./removeRasterImages.js":369,"./removeScriptElement":370,"./removeScriptElement.js":370,"./removeStyleElement":371,"./removeStyleElement.js":371,"./removeTitle":372,"./removeTitle.js":372,"./removeUnknownsAndDefaults":373,"./removeUnknownsAndDefaults.js":373,"./removeUnusedNS":374,"./removeUnusedNS.js":374,"./removeUselessDefs":375,"./removeUselessDefs.js":375,"./removeUselessStrokeAndFill":376,"./removeUselessStrokeAndFill.js":376,"./removeViewBox":377,"./removeViewBox.js":377,"./removeXMLNS":378,"./removeXMLNS.js":378,"./removeXMLProcInst":379,"./removeXMLProcInst.js":379,"./reusePaths":380,"./reusePaths.js":380,"./sortAttrs":389,"./sortAttrs.js":389,"./sortDefsChildren":390,"./sortDefsChildren.js":390};function s(e){var t=r(e);return n(t)}function r(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}s.keys=function(){return Object.keys(i)},s.resolve=r,e.exports=s,s.id=804},960:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=960}},[[1593,1,2]]]);
//# sourceMappingURL=main.70e63ec9.chunk.js.map