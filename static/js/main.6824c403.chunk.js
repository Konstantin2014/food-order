(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__33oCQ",total:"Cart_total__1qU8T",actions:"Cart_actions__5VTlg","button--alt":"Cart_button--alt__e460j",button:"Cart_button__1f3sB"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__2xYyL",summary:"CartItem_summary__2-5Lz",price:"CartItem_price__vIxtI",amount:"CartItem_amount__3i8nb",actions:"CartItem_actions__DfOxM"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__2iEhB",icon:"HeaderCartButton_icon__3dVUy",badge:"HeaderCartButton_badge__EbX79",bump:"HeaderCartButton_bump__2Sa97"}},,function(e,t,n){e.exports={meal:"MealItem_meal__3sV25",description:"MealItem_description__1YAll",price:"MealItem_price__24_K7"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__psfJ5",modal:"Modal_modal__3o0Z8","slide-down":"Modal_slide-down__3CCci"}},,function(e,t,n){e.exports={header:"Header_header__2RsPc","main-image":"Header_main-image__27oxh"}},,function(e,t,n){e.exports={"promo-text":"PromoText_promo-text__2a8e_"}},function(e,t,n){e.exports={meals:"MealList_meals__3jy7D","meals-appear":"MealList_meals-appear__3w_MV"}},function(e,t,n){e.exports={card:"Card_card__3MrJi"}},function(e,t,n){e.exports={form:"MealItemForm_form__2JXCu"}},function(e,t,n){e.exports={input:"Input_input__342Vv"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(6),a=n.n(c),i=(n(24),n(3)),r=n(1),s=n.n(r),o=n.p+"static/media/sushi.a2b4b921.jpg",d=n(13),m=n.n(d),l=n(8),u=n.n(l),j=n(0),b=function(){return Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(j.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},x=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),O=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),c=n[0],a=n[1],s=Object(r.useContext)(x),o=s.items.reduce((function(e,t){return e+t.amount}),0),d="".concat(u.a.button," ").concat(c?u.a.bump:"");return Object(r.useEffect)((function(){if(0!==s.items.length){a(!0);var e=setTimeout((function(){a(!1)}),300);return function(){clearTimeout(e)}}}),[s.items]),Object(j.jsxs)("button",{className:d,onClick:e.onClick,children:[Object(j.jsx)("span",{className:u.a.icon,children:Object(j.jsx)(b,{})}),Object(j.jsx)("span",{children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),Object(j.jsx)("span",{className:u.a.badge,children:o})]})},p=function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("header",{className:m.a.header,children:[Object(j.jsx)("h1",{children:"\u042f\u043f\u043e\u043d\u0441\u044c\u043a\u0430 \u043a\u0443\u0445\u043d\u044f"}),Object(j.jsx)(O,{onClick:e.onShowCart})]}),Object(j.jsx)("div",{className:m.a["main-image"],children:Object(j.jsx)("img",{src:o,alt:"\u0421\u0443\u0448\u0456"})})]})},_=n(15),h=n.n(_),f=function(){return Object(j.jsxs)("section",{className:h.a["promo-text"],children:[Object(j.jsx)("h2",{children:"\u041e\u043d\u043b\u0430\u0439\u043d \u0421\u0443\u0448\u0456 \u0420\u0435\u0441\u0442\u043e\u0440\u0430\u043d \u042f\u043f\u043e\u043d\u0441\u044c\u043a\u0430 \u041a\u0443\u0445\u043d\u044f"}),Object(j.jsx)("p",{children:"\u042f\u043f\u043e\u043d\u0441\u044c\u043a\u0430 \u041a\u0443\u0445\u043d\u044f - \u0446\u0435 \u043e\u043d\u043b\u0430\u0439\u043d \u0441\u0443\u0448\u0456-\u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d, \u0432 \u044f\u043a\u043e\u043c\u0443 \u0443\u043b\u044e\u0431\u043b\u0435\u043d\u0456 \u0441\u0443\u0448\u0456 \u0442\u0430 \u0441\u0430\u0448\u0438\u043c\u0456, \u0440\u043e\u043b\u0438 \u0442\u0430 \u0456\u043d\u0448\u0456 \u0441\u0442\u0440\u0430\u0432\u0438 \u043d\u0430\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0457 \u044f\u043f\u043e\u043d\u0441\u044c\u043a\u043e\u0457 \u043a\u0443\u0445\u043d\u0456 \u0440\u043e\u0431\u0438\u0442\u044c \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u043f\u0440\u043e\u0444\u0435\u0441\u0456\u0439\u043d\u0438\u0445 \u043a\u0443\u0445\u0430\u0440\u0456\u0432."}),Object(j.jsx)("p",{children:"\u0428\u0432\u0438\u0434\u043a\u0430 \u0440\u043e\u0431\u043e\u0442\u0430 \u0442\u0430 \u044f\u043a\u0456\u0441\u043d\u0430 \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0456\u044f, \u0430 \u0442\u0430\u043a\u043e\u0436 \u0441\u043f\u0440\u0430\u0432\u0436\u043d\u0456 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0438 \u043d\u0430\u0434\u0430\u044e\u0442\u044c \u0433\u0430\u0440\u043d\u043e\u0433\u043e \u0441\u043c\u0430\u043a\u0443 \u0441\u0442\u0440\u0430\u0432\u0430\u043c, \u0434\u0430\u0440\u0443\u044e\u0442\u044c \u043d\u0430\u0441\u043e\u043b\u043e\u0434\u0443 \u0432\u0456\u0434 \u0442\u0440\u0430\u043f\u0435\u0437\u0438."})]})},v=n(16),C=n.n(v),I=n(17),N=n.n(I),g=function(e){return Object(j.jsx)("div",{className:N.a.card,children:e.children})},M=n(10),A=n.n(M),H=n(18),y=n.n(H),w=n(2),E=n(19),k=n.n(E),T=s.a.forwardRef((function(e,t){return Object(j.jsxs)("div",{className:k.a.input,children:[Object(j.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(j.jsx)("input",Object(w.a)({ref:t},e.input))]})})),B=function(e){var t=Object(r.useState)(!0),n=Object(i.a)(t,2),c=n[0],a=n[1],s=Object(r.useRef)();return Object(j.jsxs)("form",{className:y.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value;0===n.trim().length||+n<1||+n>10?a(!1):e.onAddToCart(+n)},children:[Object(j.jsx)(T,{ref:s,label:"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c",input:{id:e.id,type:"number",min:"1",step:"1",defaultValue:"1"}}),Object(j.jsx)("button",{children:"\u0414\u043e\u0434\u0430\u0442\u0438"}),!c&&Object(j.jsx)("p",{children:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430 \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0432\u0456\u0434 1 \u0434\u043e 10"})]})},R=function(e){var t=Object(r.useContext)(x),n="$".concat(e.price);return Object(j.jsxs)("li",{className:A.a.meal,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:e.name}),Object(j.jsx)("div",{className:A.a.description,children:e.description}),Object(j.jsx)("div",{className:A.a.price,children:n})]}),Object(j.jsx)("div",{children:Object(j.jsx)(B,{id:e.id,onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},V=[{id:"m1",name:'\u0420\u043e\u043b\u043b "\u041d\u0430\u043e\u043c\u0456"',description:"\u0421\u0438\u0440 \u0424\u0456\u043b\u0430\u0434\u0435\u043b\u044c\u0444\u0456\u044f, \u043a\u0443\u0440\u044f\u0447\u0435 \u0444\u0456\u043b\u0435, \u043c\u0430\u0441\u0430\u0433\u043e, \u0442\u043e\u043c\u0430\u0442, \u043e\u0433\u0456\u0440\u043e\u043a, \u043a\u0443\u043d\u0436\u0443\u0442",price:11.99},{id:"m2",name:"\u0421\u043f\u0430\u0439\u0441 \u0443 \u043b\u043e\u0441\u043e\u0441\u0456",description:"\u0420\u0438\u0441, \u043b\u043e\u0441\u043e\u0441\u044c, \u0441\u043e\u0443\u0441 \u0441\u043f\u0430\u0439\u0441",price:3.99},{id:"m3",name:"\u0421\u0443\u0448\u0456 \u0437 \u0432\u0443\u0433\u0440\u0435\u043c",description:"\u0412\u0443\u0433\u043e\u0440\u044c \u043a\u043e\u043f\u0447\u0435\u043d\u0438\u0439, \u0441\u043e\u0443\u0441 \u0443\u043d\u0430\u0433\u0456, \u043a\u0443\u043d\u0436\u0443\u0442",price:4.99},{id:"m4",name:'\u0421\u0430\u043b\u0430\u0442 "\u041f\u043e\u043a\u0454 \u0441 \u043b\u043e\u0441\u043e\u0441\u0435\u043c"',description:"\u0420\u0438\u0441, \u043b\u043e\u0441\u043e\u0441\u044c, \u043e\u0433\u0456\u0440\u043e\u043a, \u0447\u0443\u043a\u0430, \u043d\u043e\u0440\u0456, \u0441\u0442\u0440\u0443\u0436\u043a\u0430 \u0442\u0443\u043d\u0446\u0430, \u0441\u043e\u0443\u0441 \u0433\u043e\u0440\u0456\u0445\u043e\u0432\u0438\u0439",price:7.99}],D=function(){var e=V.map((function(e){return Object(j.jsx)(R,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(j.jsx)("section",{className:C.a.meals,children:Object(j.jsx)(g,{children:Object(j.jsx)("ul",{children:e})})})},F=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(f,{}),Object(j.jsx)(D,{})]})},S=n(4),J=n.n(S),P=n(11),z=n.n(P),L=function(e){return Object(j.jsx)("div",{className:z.a.backdrop,onClick:e.onHideCart})},$=function(e){return Object(j.jsx)("div",{className:z.a.modal,children:Object(j.jsx)("div",{className:z.a.content,children:e.children})})},U=document.getElementById("overlays"),X=function(e){return Object(j.jsxs)(j.Fragment,{children:[a.a.createPortal(Object(j.jsx)(L,{onHideCart:e.onHideCart}),U),a.a.createPortal(Object(j.jsx)($,{children:e.children}),U)]})},Y=n(5),q=n.n(Y),K=function(e){var t="$".concat(e.price.toFixed(2));return Object(j.jsxs)("li",{className:q.a["cart-item"],children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:e.name}),Object(j.jsxs)("div",{className:q.a.summary,children:[Object(j.jsx)("span",{className:q.a.price,children:t}),Object(j.jsxs)("span",{className:q.a.amount,children:["x ",e.amount]})]})]}),Object(j.jsxs)("div",{className:q.a.actions,children:[Object(j.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(j.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},Q=function(e){var t=Object(r.useContext)(x),n="$".concat(Math.abs(t.totalAmount).toFixed(2)),c=t.items.length>0,a=function(e){t.removeItem(e)},i=function(e){t.addItem(Object(w.a)(Object(w.a)({},e),{},{amount:1}))},s=Object(j.jsx)("ul",{className:J.a["cart-items"],children:t.items.map((function(e){return Object(j.jsx)(K,{name:e.name,amount:e.amount,price:e.price,onAdd:i.bind(null,e),onRemove:a.bind(null,e.id)},e.id)}))});return Object(j.jsxs)(X,{onHideCart:e.onHideCart,children:[s,Object(j.jsxs)("div",{className:J.a.total,children:[Object(j.jsx)("span",{children:"\u0420\u0430\u0437\u043e\u043c"}),Object(j.jsx)("span",{children:n})]}),Object(j.jsxs)("div",{className:J.a.actions,children:[Object(j.jsx)("button",{className:J.a["button--alt"],onClick:e.onHideCart,children:"\u0417\u0430\u043a\u0440\u0438\u0442\u0438"}),c&&Object(j.jsx)("button",{className:J.a.button,children:"\u0417\u0430\u043c\u043e\u0432\u0438\u0442\u0438"})]})]})},Z=n(14),G={items:[],totalAmount:0},W=function(e,t){if("ADD_ITEM"===t.type){var n,c,a=e.totalAmount+t.item.price*t.item.amount,i=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[i];return r?(n=Object(w.a)(Object(w.a)({},r),{},{amount:r.amount+t.item.amount}),(c=Object(Z.a)(e.items))[i]=n):(n=Object(w.a)({},t.item),c=e.items.concat(n)),{items:c,totalAmount:a}}if("REMOVE_ITEM"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),d=e.items[o],m=e.totalAmount-d.price;if(1===d.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var l=Object(w.a)(Object(w.a)({},d),{},{amount:d.amount-1});(s=Object(Z.a)(e.items))[o]=l}return{items:s,totalAmount:m}}return G},ee=function(e){var t=Object(r.useReducer)(W,G),n=Object(i.a)(t,2),c=n[0],a=n[1],s={items:c.items,totalAmount:c.totalAmount,addItem:function(e){a({type:"ADD_ITEM",item:e})},removeItem:function(e){a({type:"REMOVE_ITEM",id:e})}};return Object(j.jsx)(x.Provider,{value:s,children:e.children})};var te=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(j.jsxs)(ee,{children:[n&&Object(j.jsx)(Q,{onHideCart:function(){c(!1)}}),Object(j.jsx)(p,{onShowCart:function(){c(!0)}}),Object(j.jsx)("main",{children:Object(j.jsx)(F,{})})]})};a.a.render(Object(j.jsx)(te,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.6824c403.chunk.js.map