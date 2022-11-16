(()=>{"use strict";var r={338:(r,A,n)=>{n.d(A,{Z:()=>g});var e=n(537),t=n.n(e),a=n(645),i=n.n(a),o=n(667),s=n.n(o),c=new URL(n(425),n.b),d=new URL(n(820),n.b),p=i()(t()),C=s()(c),l=s()(d);p.push([r.id,".message--in,.message--out{display:flex;align-items:flex-start;column-gap:22px}.message--out{flex-direction:row-reverse}.message__avatar{clip-path:polygon(50% 0, 100% 30%, 82% 100%, 18% 100%, 0% 30%);background:#fff url("+C+') no-repeat 55% 15%;background-size:auto 150%;flex-shrink:0;width:48px;height:48px}.message__text{border-radius:5px;background:#fff;padding:14px 16px 12px;position:relative}.message__text::before{content:"";border:5px solid rgba(0,0,0,0);border-top-color:#fff;position:absolute;top:5px}.message--in>.message__text::before{border-right-color:#fff;left:-10px}.message--out>.message__text::before{border-left-color:#fff;right:-10px}.form{display:flex;flex-direction:column;padding:20px 0;row-gap:20px}.form__textarea{resize:none;border-radius:4px;background:#fff;padding:12px 15px}.form__submit-btn{border-radius:20px;background:#0f54b9;color:#fff;font-size:16px;align-self:flex-start;width:140px;height:40px}.form__textarea:focus,.form__submit-btn:focus{outline:2px solid #ff4500}.chat{--border-color: #DBDBDB;background:url('+l+') no-repeat center;background-attachment:fixed;background-size:cover;display:flex;flex-direction:column}.chat__list{display:flex;flex-direction:column;align-items:center;row-gap:20px;flex-grow:1;min-height:275px;max-height:calc(100vh - 275px);overflow-y:auto;padding:50px 0}.chat__item{width:90%;max-width:480px}.chat__separator{align-self:stretch;display:flex;align-items:center;column-gap:10px}.chat__separator::before,.chat__separator::after{content:"";flex-grow:1;border-top:2px solid var(--border-color)}.chat__hr{border:none;border-top:2px solid var(--border-color)}.chat__form{width:90%;max-width:480px;min-height:273px;align-self:center}',"",{version:3,sources:["webpack://./src/blocks/message.scss","webpack://./src/blocks/form.scss","webpack://./src/blocks/chat.scss"],names:[],mappings:"AAAA,2BAEE,YAAA,CACA,sBAAA,CACA,eAAA,CAGF,cACE,0BAAA,CAGF,iBACE,8DAAA,CACA,yEAAA,CACA,yBAAA,CACA,aAAA,CACA,UAAA,CACA,WAAA,CAGF,eACE,iBAAA,CACA,eAAA,CACA,sBAAA,CACA,iBAAA,CAEA,uBACE,UAAA,CACA,8BAAA,CACA,qBAAA,CACA,iBAAA,CACA,OAAA,CAIJ,oCACE,uBAAA,CACA,UAAA,CAGF,qCACE,sBAAA,CACA,WAAA,CC1CF,MACE,YAAA,CACA,qBAAA,CACA,cAAA,CACA,YAAA,CAGF,gBACE,WAAA,CACA,iBAAA,CACA,eAAA,CACA,iBAAA,CAGF,kBACE,kBAAA,CACA,kBAAA,CACA,UAAA,CACA,cAAA,CACA,qBAAA,CACA,WAAA,CACA,WAAA,CAGF,8CAEE,yBAAA,CCvBF,MACE,uBAAA,CACA,mEAAA,CACA,2BAAA,CACA,qBAAA,CACA,YAAA,CACA,qBAAA,CAGF,YACE,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,YAAA,CACA,WAAA,CACA,gBAAA,CACA,8BAAA,CACA,eAAA,CACA,cAAA,CAGF,YACE,SAAA,CACA,eAAA,CAGF,iBACE,kBAAA,CACA,YAAA,CACA,kBAAA,CACA,eAAA,CAEA,iDAEE,UAAA,CACA,WAAA,CACA,wCAAA,CAIJ,UACE,WAAA,CACA,wCAAA,CAGF,YACE,SAAA,CACA,eAAA,CACA,gBAAA,CACA,iBAAA",sourcesContent:[".message--in,\r\n.message--out {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  column-gap: 22px;\r\n}\r\n\r\n.message--out {\r\n  flex-direction: row-reverse;\r\n}\r\n\r\n.message__avatar {\r\n  clip-path: polygon(50% 0, 100% 30%, 82% 100%, 18% 100%, 0% 30%);\r\n  background: white url('Images/avatar.png') no-repeat 55% 15%;\r\n  background-size: auto 150%;\r\n  flex-shrink: 0;\r\n  width: 48px;\r\n  height: 48px;\r\n}\r\n\r\n.message__text {\r\n  border-radius: 5px;\r\n  background: white;\r\n  padding: 14px 16px 12px;\r\n  position: relative;\r\n\r\n  &::before {\r\n    content: \"\";\r\n    border: 5px solid transparent;\r\n    border-top-color: white;\r\n    position: absolute;\r\n    top: 5px;\r\n  }\r\n}\r\n\r\n.message--in > .message__text::before {\r\n  border-right-color: white;\r\n  left: -10px;\r\n}\r\n\r\n.message--out > .message__text::before {\r\n  border-left-color: white;\r\n  right: -10px;\r\n}",".form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 20px 0;\r\n  row-gap: 20px;\r\n}\r\n\r\n.form__textarea {\r\n  resize: none;\r\n  border-radius: 4px;\r\n  background: white;\r\n  padding: 12px 15px;\r\n}\r\n\r\n.form__submit-btn {\r\n  border-radius: 20px;\r\n  background: #0F54B9;\r\n  color: white;\r\n  font-size: 16px;\r\n  align-self: flex-start;\r\n  width: 140px;\r\n  height: 40px;\r\n}\r\n\r\n.form__textarea:focus,\r\n.form__submit-btn:focus {\r\n  outline: 2px solid orangered;\r\n}","@import './message.scss';\r\n@import './form.scss';\r\n\r\n.chat {\r\n  --border-color: #DBDBDB;\r\n  background: url('Images/bg.jpg') no-repeat center;\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.chat__list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  row-gap: 20px;\r\n  flex-grow: 1;\r\n  min-height: 275px;\r\n  max-height: calc(100vh - 275px);\r\n  overflow-y: auto;\r\n  padding: 50px 0;\r\n}\r\n\r\n.chat__item {\r\n  width: 90%;\r\n  max-width: 480px;\r\n}\r\n\r\n.chat__separator {\r\n  align-self: stretch;\r\n  display: flex;\r\n  align-items: center;\r\n  column-gap: 10px;\r\n\r\n  &::before,\r\n  &::after {\r\n    content: \"\";\r\n    flex-grow: 1;\r\n    border-top: 2px solid var(--border-color);\r\n  }\r\n}\r\n\r\n.chat__hr {\r\n  border: none;\r\n  border-top: 2px solid var(--border-color);\r\n}\r\n\r\n.chat__form {\r\n  width: 90%;\r\n  max-width: 480px;\r\n  min-height: 273px;\r\n  align-self: center;\r\n}"],sourceRoot:""}]);const g=p},686:(r,A,n)=>{n.d(A,{Z:()=>C});var e=n(537),t=n.n(e),a=n(645),i=n.n(a),o=n(667),s=n.n(o),c=new URL(n(707),n.b),d=i()(t()),p=s()(c);d.push([r.id,'.item,.item-image__body{display:flex;flex-direction:column;justify-content:flex-end;padding:12px 15px 10px;word-break:break-word}.item-center{font-size:18px;line-height:1.5em;text-align:center;padding:15px 18px 12px;overflow:auto}.first{display:grid;grid-template:"a b" 155px "c c" 155px "d e" 155px/var(--col-width) var(--col-width);gap:var(--items-gap)}.first__item{background:#e8ebed}.first__item--a{grid-area:a}.first__item--b{grid-area:b}.first__item--c{grid-area:c}.first__item--d{background:#90bce8;grid-area:d}.first__item--e{background:#febf26;grid-area:e}@media(min-width: 480px){.first{grid-template:"a b d" 155px "c c e" 155px/var(--col-width) var(--col-width) var(--col-width)}}.second{display:grid;grid-template:"a b" auto "a c" auto/var(--col-1-3-width) 1fr;gap:var(--items-gap)}.second__item{aspect-ratio:1/1;background:#a2a9b7;color:#fff}.second__item--a{grid-area:a}.second__item--b{grid-area:b}.second__item--c{grid-area:c}.item,.item-image__body{display:flex;flex-direction:column;justify-content:flex-end;padding:12px 15px 10px;word-break:break-word}.item-center{font-size:18px;line-height:1.5em;text-align:center;padding:15px 18px 12px;overflow:auto}.item-image{position:relative;cursor:pointer;color:#fff}.item-image:hover>.item-image__body{filter:blur(3px)}.item-image:hover::after{border-radius:50%;background:#fff;color:#f55e62;font:bold 36px/60px sans-serif;text-align:center;content:"!";position:absolute;z-index:10;left:calc(50% - 30px);top:calc(50% - 30px);width:60px;height:60px}.item-image__body{background:url('+p+') no-repeat center;background-size:cover;height:100%}.dashed{display:flex;flex-flow:row wrap;align-items:baseline;column-gap:10px}.dashed__left-wrap{flex-basis:100%}.dashed__right-wrap{flex-basis:100%;text-align:right}.dashed__line{flex-grow:1;border-top:1px dashed #000}.third{display:grid;grid-template:"a c" auto "b c" auto/1fr var(--col-1-3-width);gap:var(--items-gap)}.third__item{aspect-ratio:1/1;background:#e3ebd3}.third__item--a{grid-area:a}.third__item--b{grid-area:b}.third__item--c{grid-area:c;font-family:"Noto Sans",sans-serif;justify-content:flex-start;row-gap:var(--items-gap)}.fourth{display:grid;grid-template:"a a" 155px "b c" 155px "d e" 155px/var(--col-width) var(--col-width);gap:var(--items-gap)}.fourth__item{background:#ffaa87}.fourth__item--a{grid-area:a}.fourth__item--b{grid-area:b}.fourth__item--c{background:#c7abd4;grid-area:c}.fourth__item--d{grid-area:d}.fourth__item--e{background:#f55e62;grid-area:e}@media(min-width: 480px){.fourth{grid-template:"d a a" 155px "e b c" 155px/var(--col-width) var(--col-width) var(--col-width)}}.index{padding-bottom:80px;position:relative}.index__header,.index__footer{background:#c4c4c4;height:80px;display:flex;justify-content:center;align-items:center}.index__header{position:sticky;z-index:10;top:0}.index__footer{position:absolute;z-index:10;left:0;bottom:0;width:100%}.index__main{--col-width: calc(50% - 5px);--items-gap: 10px;--col-1-3-width: calc((100% - var(--items-gap) / 2) / 1.5);display:flex;flex-direction:column;padding:var(--items-gap) 0;row-gap:var(--items-gap)}@media(max-width: 479px){.index__third{display:none}}@media(min-width: 480px){.index__main{--col-width: calc((50% - var(--items-gap)) / 1.5);max-width:768px;margin:0 auto;padding:var(--items-gap)}.index__second{order:-1}}',"",{version:3,sources:["webpack://./src/blocks/item.scss","webpack://./src/blocks/first.scss","webpack://./src/blocks/second.scss","webpack://./src/blocks/item-image.scss","webpack://./src/blocks/dashed.scss","webpack://./src/blocks/third.scss","webpack://./src/blocks/fourth.scss","webpack://./src/blocks/index.scss"],names:[],mappings:"AAAA,wBACE,YAAA,CACA,qBAAA,CACA,wBAAA,CACA,sBAAA,CACA,qBAAA,CAGF,aACE,cAAA,CACA,iBAAA,CACA,iBAAA,CACA,sBAAA,CACA,aAAA,CCbF,OACE,YAAA,CACA,mFACE,CAIF,oBAAA,CAGF,aACE,kBAAA,CAEA,gBAAA,WAAA,CAEA,gBAAA,WAAA,CAEA,gBAAA,WAAA,CAEA,gBACE,kBAAA,CACA,WAAA,CAGF,gBACE,kBAAA,CACA,WAAA,CAIJ,yBACE,OACE,4FACE,CAAA,CCjCN,QACE,YAAA,CACA,4DACE,CAGF,oBAAA,CAGF,cACE,gBAAA,CACA,kBAAA,CACA,UAAA,CAEA,iBAAA,WAAA,CAEA,iBAAA,WAAA,CAEA,iBAAA,WAAA,CFlBF,wBACE,YAAA,CACA,qBAAA,CACA,wBAAA,CACA,sBAAA,CACA,qBAAA,CAGF,aACE,cAAA,CACA,iBAAA,CACA,iBAAA,CACA,sBAAA,CACA,aAAA,CGXF,YACE,iBAAA,CACA,cAAA,CACA,UAAA,CAEA,oCACE,gBAAA,CAGF,yBACE,iBAAA,CACA,eAAA,CACA,aAAA,CACA,8BAAA,CACA,iBAAA,CACA,WAAA,CACA,iBAAA,CACA,UAAA,CACA,qBAAA,CACA,oBAAA,CACA,UAAA,CACA,WAAA,CAIJ,kBACE,mEAAA,CACA,qBAAA,CAEA,WAAA,CC/BF,QACE,YAAA,CACA,kBAAA,CACA,oBAAA,CACA,eAAA,CAGF,mBACE,eAAA,CAGF,oBACE,eAAA,CACA,gBAAA,CAGF,cACE,WAAA,CACA,0BAAA,CCfF,OACE,YAAA,CACA,4DACE,CAGF,oBAAA,CAGF,aACE,gBAAA,CACA,kBAAA,CAEA,gBAAA,WAAA,CAEA,gBAAA,WAAA,CAEA,gBACE,WAAA,CACA,kCAAA,CACA,0BAAA,CACA,wBAAA,CCxBJ,QACE,YAAA,CACA,mFACE,CAIF,oBAAA,CAGF,cACE,kBAAA,CAEA,iBAAA,WAAA,CAEA,iBAAA,WAAA,CAEA,iBACE,kBAAA,CACA,WAAA,CAGF,iBAAA,WAAA,CAEA,iBACE,kBAAA,CACA,WAAA,CAIJ,yBACE,QACE,4FACE,CAAA,CC3BN,OACE,mBAAA,CACA,iBAAA,CAGF,8BAEE,kBAAA,CACA,WAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CAGF,eACE,eAAA,CACA,UAAA,CACA,KAAA,CAGF,eACE,iBAAA,CACA,UAAA,CACA,MAAA,CACA,QAAA,CACA,UAAA,CAGF,aACE,4BAAA,CACA,iBAAA,CACA,0DAAA,CACA,YAAA,CACA,qBAAA,CACA,0BAAA,CACA,wBAAA,CAKF,yBACE,cACE,YAAA,CAAA,CAMJ,yBACE,aACE,iDAAA,CACA,eAAA,CACA,aAAA,CACA,wBAAA,CAGF,eACE,QAAA,CAAA",sourcesContent:[".item {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-end;\r\n  padding: 12px 15px 10px;\r\n  word-break: break-word;\r\n}\r\n\r\n.item-center {\r\n  font-size: 18px;\r\n  line-height: 1.5em;\r\n  text-align: center;\r\n  padding: 15px 18px 12px;\r\n  overflow: auto;\r\n}",'.first {\r\n  display: grid;\r\n  grid-template:\r\n    "a b" 155px\r\n    "c c" 155px\r\n    "d e" 155px\r\n    / var(--col-width) var(--col-width);\r\n  gap: var(--items-gap);\r\n}\r\n\r\n.first__item {\r\n  background: #E8EBED;\r\n\r\n  &--a { grid-area: a; }\r\n\r\n  &--b { grid-area: b; }\r\n\r\n  &--c { grid-area: c; }\r\n\r\n  &--d {\r\n    background: #90BCE8;\r\n    grid-area: d;\r\n  }\r\n\r\n  &--e {\r\n    background: #FEBF26;\r\n    grid-area: e;\r\n  }\r\n}\r\n\r\n@media (min-width: 480px) {\r\n  .first {\r\n    grid-template:\r\n      "a b d" 155px\r\n      "c c e" 155px\r\n      / var(--col-width) var(--col-width) var(--col-width);\r\n  }\r\n}','.second {\r\n  display: grid;\r\n  grid-template:\r\n    "a b" auto\r\n    "a c" auto\r\n    / var(--col-1-3-width) 1fr;\r\n  gap: var(--items-gap);\r\n}\r\n\r\n.second__item {\r\n  aspect-ratio: 1 / 1;\r\n  background: #A2A9B7;\r\n  color: white;\r\n\r\n  &--a { grid-area: a; }\r\n\r\n  &--b { grid-area: b; }\r\n\r\n  &--c { grid-area: c; }\r\n}',"@import './item.scss';\r\n\r\n.item-image {\r\n  position: relative;\r\n  cursor: pointer;\r\n  color: white;\r\n\r\n  &:hover > .item-image__body {\r\n    filter: blur(3px);\r\n  }\r\n\r\n  &:hover::after {\r\n    border-radius: 50%;\r\n    background: white;\r\n    color: #F55E62;\r\n    font: bold 36px/60px sans-serif;\r\n    text-align: center;\r\n    content: \"!\";\r\n    position: absolute;\r\n    z-index: 10;\r\n    left: calc(50% - 30px);\r\n    top: calc(50% - 30px);\r\n    width: 60px;\r\n    height: 60px;\r\n  }\r\n}\r\n\r\n.item-image__body {\r\n  background: url('Images/ship.jpg') no-repeat center;\r\n  background-size: cover;\r\n  @extend .item;\r\n  height: 100%;\r\n}",".dashed {\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  align-items: baseline;\r\n  column-gap: 10px;\r\n}\r\n\r\n.dashed__left-wrap {\r\n  flex-basis: 100%;\r\n}\r\n\r\n.dashed__right-wrap {\r\n  flex-basis: 100%;\r\n  text-align: right;\r\n}\r\n\r\n.dashed__line {\r\n  flex-grow: 1;\r\n  border-top: 1px dashed black;\r\n}","@import './item-image.scss';\r\n@import './dashed.scss';\r\n\r\n.third {\r\n  display: grid;\r\n  grid-template:\r\n    \"a c\" auto\r\n    \"b c\" auto\r\n    / 1fr var(--col-1-3-width);\r\n  gap: var(--items-gap);\r\n}\r\n\r\n.third__item {\r\n  aspect-ratio: 1 / 1;\r\n  background: #E3EBD3;\r\n\r\n  &--a { grid-area: a; }\r\n\r\n  &--b { grid-area: b; }\r\n\r\n  &--c {\r\n    grid-area: c;\r\n    font-family: 'Noto Sans', sans-serif;\r\n    justify-content: flex-start;\r\n    row-gap: var(--items-gap);\r\n  }\r\n}",'.fourth {\r\n  display: grid;\r\n  grid-template:\r\n    "a a" 155px\r\n    "b c" 155px\r\n    "d e" 155px\r\n    / var(--col-width) var(--col-width);\r\n  gap: var(--items-gap);\r\n}\r\n\r\n.fourth__item {\r\n  background: #FFAA87;\r\n\r\n  &--a { grid-area: a; }\r\n\r\n  &--b { grid-area: b; }\r\n\r\n  &--c {\r\n    background: #C7ABD4;\r\n    grid-area: c;\r\n  }\r\n\r\n  &--d { grid-area: d; }\r\n\r\n  &--e {\r\n    background: #F55E62;\r\n    grid-area: e;\r\n  }\r\n}\r\n\r\n@media (min-width: 480px) {\r\n  .fourth {\r\n    grid-template:\r\n      "d a a" 155px\r\n      "e b c" 155px\r\n      / var(--col-width) var(--col-width) var(--col-width);\r\n  }\r\n}',"@import './item.scss';\r\n@import './first.scss';\r\n@import './second.scss';\r\n@import './third.scss';\r\n@import './fourth.scss';\r\n\r\n.index {\r\n  padding-bottom: 80px;\r\n  position: relative;\r\n}\r\n\r\n.index__header,\r\n.index__footer {\r\n  background: #C4C4C4;\r\n  height: 80px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.index__header {\r\n  position: sticky;\r\n  z-index: 10;\r\n  top: 0;\r\n}\r\n\r\n.index__footer {\r\n  position: absolute;\r\n  z-index: 10;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n}\r\n\r\n.index__main {\r\n  --col-width: calc(50% - 5px);\r\n  --items-gap: 10px;\r\n  --col-1-3-width: calc((100% - var(--items-gap) / 2) / 1.5);\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: var(--items-gap) 0;\r\n  row-gap: var(--items-gap);\r\n}\r\n\r\n\r\n\r\n@media (max-width: 479px) {\r\n  .index__third {\r\n    display: none;\r\n  }\r\n}\r\n\r\n\r\n\r\n@media (min-width: 480px) {\r\n  .index__main {\r\n    --col-width: calc((50% - var(--items-gap)) / 1.5);\r\n    max-width: 768px;\r\n    margin: 0 auto;\r\n    padding: var(--items-gap);\r\n  }\r\n\r\n  .index__second {\r\n    order: -1;\r\n  }\r\n}"],sourceRoot:""}]);const C=d},514:(r,A,n)=>{n.d(A,{Z:()=>o});var e=n(537),t=n.n(e),a=n(645),i=n.n(a)()(t());i.push([r.id,'body{font:400 14px/1.5em "Roboto",sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}h1{font:400 24px/1.4em "Roboto",sans-serif}',"",{version:3,sources:["webpack://./src/style/fonts.scss"],names:[],mappings:"AAAA,KACE,uCAAA,CACA,kCAAA,CACA,iCAAA,CAGF,GACE,uCAAA",sourcesContent:["body {\r\n  font: 400 14px/1.5em 'Roboto', sans-serif;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\nh1 {\r\n  font: 400 24px/1.4em 'Roboto', sans-serif;\r\n}"],sourceRoot:""}]);const o=i},60:(r,A,n)=>{n.d(A,{Z:()=>o});var e=n(537),t=n.n(e),a=n(645),i=n.n(a)()(t());i.push([r.id,"*{box-sizing:border-box;padding:0;margin:0}html{scroll-behavior:smooth}body{min-width:320px;min-height:100vh}a{text-decoration:none;cursor:pointer;color:inherit;outline:none}img,svg{display:block;max-width:100%;max-height:100%}ul,ol{list-style:none}table{border-collapse:collapse;border-spacing:0;display:block}input,textarea,button,select{background:rgba(0,0,0,0);color:inherit;font:inherit;outline:none;border:none}input[type=radio],input[type=checkbox]{display:none}label,button,input[type=submit]{cursor:pointer}","",{version:3,sources:["webpack://./src/style/tags.scss"],names:[],mappings:"AAAA,EACE,qBAAA,CACA,SAAA,CACA,QAAA,CAGF,KACE,sBAAA,CAGF,KACE,eAAA,CACA,gBAAA,CAGF,EACE,oBAAA,CACA,cAAA,CACA,aAAA,CACA,YAAA,CAGF,QAEE,aAAA,CACA,cAAA,CACA,eAAA,CAGF,MAEE,eAAA,CAGF,MACE,wBAAA,CACA,gBAAA,CACA,aAAA,CAGF,6BAIE,wBAAA,CACA,aAAA,CACA,YAAA,CACA,YAAA,CACA,WAAA,CAGF,uCAEE,YAAA,CAGF,gCAGE,cAAA",sourcesContent:['* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  min-width: 320px;\r\n  min-height: 100vh;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n  color: inherit;\r\n  outline: none;\r\n}\r\n\r\nimg,\r\nsvg {\r\n  display: block;\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n}\r\n\r\nul,\r\nol {\r\n  list-style: none;\r\n}\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n  display: block;\r\n}\r\n\r\ninput,\r\ntextarea,\r\nbutton,\r\nselect {\r\n  background: transparent;\r\n  color: inherit;\r\n  font: inherit;\r\n  outline: none;\r\n  border: none;\r\n}\r\n\r\ninput[type="radio"],\r\ninput[type="checkbox"] {\r\n  display: none;\r\n}\r\n\r\nlabel,\r\nbutton,\r\ninput[type="submit"] {\r\n  cursor: pointer;\r\n}'],sourceRoot:""}]);const o=i},645:r=>{r.exports=function(r){var A=[];return A.toString=function(){return this.map((function(A){var n="",e=void 0!==A[5];return A[4]&&(n+="@supports (".concat(A[4],") {")),A[2]&&(n+="@media ".concat(A[2]," {")),e&&(n+="@layer".concat(A[5].length>0?" ".concat(A[5]):""," {")),n+=r(A),e&&(n+="}"),A[2]&&(n+="}"),A[4]&&(n+="}"),n})).join("")},A.i=function(r,n,e,t,a){"string"==typeof r&&(r=[[null,r,void 0]]);var i={};if(e)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(i[s]=!0)}for(var c=0;c<r.length;c++){var d=[].concat(r[c]);e&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),t&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=t):d[4]="".concat(t)),A.push(d))}},A}},667:r=>{r.exports=function(r,A){return A||(A={}),r?(r=String(r.__esModule?r.default:r),/^['"].*['"]$/.test(r)&&(r=r.slice(1,-1)),A.hash&&(r+=A.hash),/["'() \t\n]|(%20)/.test(r)||A.needQuotes?'"'.concat(r.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):r):r}},537:r=>{r.exports=function(r){var A=r[1],n=r[3];if(!n)return A;if("function"==typeof btoa){var e=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),t="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e),a="/*# ".concat(t," */"),i=n.sources.map((function(r){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(r," */")}));return[A].concat(i).concat([a]).join("\n")}return[A].join("\n")}},379:r=>{var A=[];function n(r){for(var n=-1,e=0;e<A.length;e++)if(A[e].identifier===r){n=e;break}return n}function e(r,e){for(var a={},i=[],o=0;o<r.length;o++){var s=r[o],c=e.base?s[0]+e.base:s[0],d=a[c]||0,p="".concat(c," ").concat(d);a[c]=d+1;var C=n(p),l={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==C)A[C].references++,A[C].updater(l);else{var g=t(l,e);e.byIndex=o,A.splice(o,0,{identifier:p,updater:g,references:1})}i.push(p)}return i}function t(r,A){var n=A.domAPI(A);return n.update(r),function(A){if(A){if(A.css===r.css&&A.media===r.media&&A.sourceMap===r.sourceMap&&A.supports===r.supports&&A.layer===r.layer)return;n.update(r=A)}else n.remove()}}r.exports=function(r,t){var a=e(r=r||[],t=t||{});return function(r){r=r||[];for(var i=0;i<a.length;i++){var o=n(a[i]);A[o].references--}for(var s=e(r,t),c=0;c<a.length;c++){var d=n(a[c]);0===A[d].references&&(A[d].updater(),A.splice(d,1))}a=s}}},569:r=>{var A={};r.exports=function(r,n){var e=function(r){if(void 0===A[r]){var n=document.querySelector(r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(r){n=null}A[r]=n}return A[r]}(r);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(n)}},216:r=>{r.exports=function(r){var A=document.createElement("style");return r.setAttributes(A,r.attributes),r.insert(A,r.options),A}},565:(r,A,n)=>{r.exports=function(r){var A=n.nc;A&&r.setAttribute("nonce",A)}},795:r=>{r.exports=function(r){var A=r.insertStyleElement(r);return{update:function(n){!function(r,A,n){var e="";n.supports&&(e+="@supports (".concat(n.supports,") {")),n.media&&(e+="@media ".concat(n.media," {"));var t=void 0!==n.layer;t&&(e+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),e+=n.css,t&&(e+="}"),n.media&&(e+="}"),n.supports&&(e+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),A.styleTagTransform(e,r,A.options)}(A,r,n)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(A)}}}},589:r=>{r.exports=function(r,A){if(A.styleSheet)A.styleSheet.cssText=r;else{for(;A.firstChild;)A.removeChild(A.firstChild);A.appendChild(document.createTextNode(r))}}},425:(r,A,n)=>{r.exports=n.p+"images/avatar.png"},820:(r,A,n)=>{r.exports=n.p+"images/bg.jpg"},707:(r,A,n)=>{r.exports=n.p+"images/ship.jpg"}},A={};function n(e){var t=A[e];if(void 0!==t)return t.exports;var a=A[e]={id:e,exports:{}};return r[e](a,a.exports,n),a.exports}n.m=r,n.n=r=>{var A=r&&r.__esModule?()=>r.default:()=>r;return n.d(A,{a:A}),A},n.d=(r,A)=>{for(var e in A)n.o(A,e)&&!n.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:A[e]})},n.o=(r,A)=>Object.prototype.hasOwnProperty.call(r,A),n.p="/idem/",n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var r=n(379),A=n.n(r),e=n(795),t=n.n(e),a=n(569),i=n.n(a),o=n(565),s=n.n(o),c=n(216),d=n.n(c),p=n(589),C=n.n(p),l=n(60),g={};g.styleTagTransform=C(),g.setAttributes=s(),g.insert=i().bind(null,"head"),g.domAPI=t(),g.insertStyleElement=d(),A()(l.Z,g),l.Z&&l.Z.locals&&l.Z.locals;var m=n(514),f={};f.styleTagTransform=C(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=t(),f.insertStyleElement=d(),A()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;var x=n(686),u={};u.styleTagTransform=C(),u.setAttributes=s(),u.insert=i().bind(null,"head"),u.domAPI=t(),u.insertStyleElement=d(),A()(x.Z,u),x.Z&&x.Z.locals&&x.Z.locals;var h=n(338),b={};b.styleTagTransform=C(),b.setAttributes=s(),b.insert=i().bind(null,"head"),b.domAPI=t(),b.insertStyleElement=d(),A()(h.Z,b),h.Z&&h.Z.locals&&h.Z.locals})()})();
//# sourceMappingURL=bundledb65f3cf2972a82b1d05.js.map