(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],{57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){"use strict";c.r(t);var s=c(27),n=c.n(s),r=c(5),a=c(1),i=c.n(a),o=c(0),j=Object(a.createContext)({}),l=(j.Consumer,function(e){var t=Object(a.useState)([]),c=Object(r.a)(t,2),s=c[0],n=c[1];return Object(o.jsx)(j.Provider,{value:{breeds:s,setBreeds:n},children:e.children})}),b=c(10),d=c(9),u=c(2),h=c(13),x=c.n(h);function O(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",c={timeout:25e3};return t?x.a.get("".concat("https://dog.ceo/api","/breed/").concat(e,"/").concat(t,"/images/random"),c).then((function(e){return e.data.message})):x.a.get("".concat("https://dog.ceo/api","/breed/").concat(e,"/images/random"),c).then((function(e){return e.data.message}))}function m(e){var t=e.variant,c=void 0===t?"":t,s=e.classes,n=void 0===s?"":s,r=e.size,a=void 0===r?50:r,i=e.style,j=void 0===i?{}:i,l=e.containerStyle,b=void 0===l?{}:l,u=e.containerClasses,h=void 0===u?"":u,x=e.useContainer,O=function(){return c&&n?"spinner-border text-".concat(c," ").concat(n):c&&!n?"spinner-border text-".concat(c):!c&&n?"spinner-border ".concat(n):"spinner-border"};return void 0!==x&&x||h||!function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}(b)?Object(o.jsx)("div",{className:h,style:b,children:Object(o.jsx)("div",{className:O(),style:Object(d.a)({width:a,height:a},j),role:"status",children:Object(o.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}):Object(o.jsx)("div",{className:O(),style:Object(d.a)({width:a,height:a},j),role:"status",children:Object(o.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}function v(e){var t=e.value,c=t.breeds,s=t.setBreeds,n=Object(a.useState)([]),j=Object(r.a)(n,2),l=j[0],b=j[1],d=Object(a.useState)({name:"",subBreeds:[]}),u=Object(r.a)(d,2),h=u[0],v=u[1],f=Object(a.useState)(""),p=Object(r.a)(f,2),g=p[0],y=p[1],N=Object(a.useState)(""),C=Object(r.a)(N,2),w=C[0],S=C[1],k=Object(a.useState)(!1),z=Object(r.a)(k,2),B=z[0],L=z[1];Object(a.useEffect)((function(){Array.isArray(c)&&0===c.length&&x.a.get("".concat("https://dog.ceo/api","/breeds/list/all"),{timeout:25e3}).then((function(e){var t=e.data.message;return Object.entries(t).map((function(e){var t=Object(r.a)(e,2);return{name:t[0],subBreeds:t[1]}}))})).then((function(e){s(e)})).catch((function(e){return console.log(e)}))}),[c,s]),Object(a.useEffect)((function(){if(""===h.name)return y(""),b([]),void S("");0===h.subBreeds.length?(y(""),b([]),L(!0),O(h.name).then((function(e){L(!1),S(e)})).catch((function(e){L(!1),S(""),b([]),console.log(e)}))):(b(h.subBreeds),y(""),S(""))}),[h]),Object(a.useEffect)((function(){""!==g&&(L(!0),O(h.name,g).then((function(e){L(!1),S(e)})).catch((function(e){L(!1),console.log(e)})))}),[h.name,g]);return Object(o.jsxs)(i.a.Fragment,{children:[Object(o.jsx)("h2",{className:"text-white-3d mb-5 text-center",children:"Select A Breed"}),Object(o.jsx)("div",{className:"mx-auto mb-3",style:{maxWidth:300},children:Object(o.jsxs)("select",{className:"form-select text-gray",onChange:function(e){var t=JSON.parse(e.target.value);v(t)},children:[Object(o.jsx)("option",{value:JSON.stringify({name:"",subBreeds:[]}),children:"Select A Breed"}),c.map((function(e){return Object(o.jsx)("option",{value:JSON.stringify(e),children:e.name},e.name)}))]})}),Array.isArray(l)&&l.length>0&&Object(o.jsx)("div",{className:"mx-auto mb-3",style:{maxWidth:300},children:Object(o.jsxs)("select",{className:"form-select text-gray",onChange:function(e){var t=e.target.value;y(t)},children:[Object(o.jsx)("option",{value:"",children:"Select A Sub-Breed"}),l.map((function(e){return Object(o.jsx)("option",{value:e,children:e},e)}))]})}),Object(o.jsxs)("div",{className:"horizontal-ruler",children:[Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{})]}),B?Object(o.jsx)(m,{size:75,variant:"pink",style:{filter:"drop-shadow(0px 1px 1px rgba(0,0,0,0.5))"},containerClasses:"d-inline-block",containerStyle:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%"},useContainer:!1}):w?Object(o.jsx)("img",{className:"d-block h-100 mx-auto mb-3 border border border-dark rounded-3 shadow",style:{maxHeight:300},src:w,alt:"".concat(h," dog")}):null]})}function f(e){return Object(o.jsxs)("article",{className:"mt-5 article",children:[Object(o.jsx)("h2",{className:"text-white-3d",children:"About:"}),Object(o.jsx)("p",{children:"This is just a placholder page..."}),Object(o.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at tortor eu dolor accumsan sollicitudin. Aliquam aliquet mauris non felis tristique, vitae posuere dolor sagittis. Nullam dictum vitae quam nec hendrerit. Cras non volutpat orci. Fusce blandit sodales nunc. Pellentesque lacinia aliquet vestibulum. Phasellus venenatis fermentum tincidunt. Donec ac tellus consectetur, tristique turpis eget, lobortis nisi. Sed vulputate condimentum finibus. Ut ultricies arcu maximus laoreet aliquam. Proin at sollicitudin orci. Etiam placerat euismod quam. Suspendisse at suscipit lorem. Quisque porta tincidunt erat, id interdum augue varius sed."}),Object(o.jsx)("p",{children:"Vivamus egestas velit vel lorem sodales porta. Nunc a pharetra elit. Donec vitae malesuada urna, ac viverra leo. Aenean molestie suscipit ante at pretium. Quisque nec ultrices erat, congue venenatis lacus. Ut vitae pulvinar nisl. Sed et odio at nisi sollicitudin faucibus. Proin vel sem leo. Etiam ac tortor a urna viverra laoreet. Morbi vel sagittis enim. Morbi condimentum venenatis lorem, non iaculis magna laoreet quis."})]})}x.a.defaults.validateStatus=function(e){return e>=200&&e<300};var p=function(){return Object(o.jsxs)(i.a.Fragment,{children:[Object(o.jsx)("h1",{className:"my-5 text-center",style:{color:"#FF355E",fontFamily:"Creepster",fontSize:64,textShadow:"0px 2px 4px rgba(0,0,0,0.5)"},children:"Not Found!!!"}),Object(o.jsxs)("div",{className:"horizontal-ruler red",children:[Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{})]}),Object(o.jsx)("div",{className:"mx-auto",style:{width:"40%"},children:Object(o.jsxs)("svg",{style:{margin:"0 auto",width:"100%",filter:"drop-shadow(0px 2px 4px rgba(0,0,0,0.5))"},viewBox:"0 0 512 512",fill:"#FF355E",children:[Object(o.jsx)("path",{d:"M296.606,364.393l-29.999-30c-5.857-5.858-15.355-5.858-21.213,0l-30,30C205.985,373.801,212.646,390,226,390H286 C299.304,390,306.05,373.836,296.606,364.393z"}),Object(o.jsx)("path",{d:"M165.999,179.997c-41.355,0-75.001,33.645-75.001,75.001c0,41.355,33.645,75.001,75.001,75.001S241,296.354,241,254.997 C241,213.642,207.354,179.997,165.999,179.997z M165.999,300.198c-24.813,0-45.2-20.387-45.2-45.2s20.387-45.2,45.2-45.2 s45.2,20.387,45.2,45.2S190.812,300.198,165.999,300.198z"}),Object(o.jsx)("path",{d:"M346.001,179.997c-41.355,0-75.001,33.645-75.001,75.001c0,41.355,33.645,75.001,75.001,75.001 c41.355,0,75.001-33.645,75.001-75.001S387.356,179.997,346.001,179.997z M346.001,300.198c-24.813,0-45.2-20.387-45.2-45.2 s20.387-45.2,45.2-45.2s45.201,20.387,45.201,45.2S370.814,300.198,346.001,300.198z"}),Object(o.jsx)("path",{d:"M476.108,270.988c15.607-74.732-7.02-151.096-61.007-205.086v-0.001C372.602,23.404,316.099,0,256,0 C195.901,0,139.398,23.404,96.898,65.902c-53.869,53.87-76.716,130.182-61.007,205.091c-6.143,17.917-6.485,37.065-0.951,55.682 c9.404,31.617,35.56,54.97,68.461,61.251c3.795,1.08,4.018,0.017,11.46,1.242c2.047,0.337,4.001,0.621,6.139,0.763L121,447.954 c0,18.193,10.705,34.432,27.272,41.369c24.699,10.343,63.434,22.671,107.706,22.675c0.008,0,0.015,0.001,0.023,0.001 c0.008,0,0.016-0.001,0.023-0.001c44.269-0.004,83.006-12.333,107.709-22.676c16.565-6.938,27.269-23.176,27.269-41.367v-58.095 c2.077-0.139,4.014-0.403,6.046-0.714c7.929-1.213,8.245-0.09,12.239-1.437c32.914-6.607,58.868-30.138,68.004-61.833 C482.584,307.52,482.162,288.646,476.108,270.988z M448.465,317.568c-6.117,21.222-23.856,36.907-46.311,40.962 c-12.258,0.374-10.552,2.829-23.167,0.267c-9.289-1.887-17.985,5.224-17.985,14.7v74.458c0,6.066-3.477,11.442-8.856,13.696 c-5.484,2.296-12.864,4.862-21.343,7.605v-32.457c0-8.284-6.516-14.8-14.8-14.8c-8.284,0-15,6.716-15,15v40.324 c-9.389,1.89-19.669,3.176-30.2,3.93V436.8c0-8.284-6.516-14.8-14.8-14.8c-8.284,0-15,6.716-15,15v44.453 c-10.531-0.753-20.811-2.44-30.2-4.329V436.8c0-8.284-6.516-14.8-14.8-14.8s-15,6.716-15,15v32.457 c-8.478-2.743-15.658-5.509-21.141-7.805c-5.382-2.254-9.059-7.83-9.059-13.897l0.002-74.45c0-9.462-8.482-16.39-17.784-14.501 c-13.377,2.716-10.435,0.035-23.659-0.285c-21.986-4.08-39.448-19.506-45.661-40.396c-4.049-13.621-3.459-27.605,1.707-40.441 c1.144-2.843,1.39-5.968,0.705-8.954c-15.458-67.379,5.15-134.755,52.005-181.612C154.945,50.284,203.914,29.8,256,29.8 s101.055,20.483,137.887,57.314c47.708,47.711,67.151,115.603,52.006,181.611c-0.685,2.987-0.439,6.112,0.705,8.954 C451.693,290.339,452.338,304.132,448.465,317.568z"})]})})]})},g=function(e){var t=e.value;return Object(o.jsxs)(u.d,{children:[Object(o.jsx)(u.b,{exact:!0,path:"/",children:Object(o.jsx)(u.a,{to:"/breeds"})}),Object(o.jsx)(u.b,{exact:!0,path:"/breeds",render:function(e){return Object(o.jsx)(v,Object(d.a)(Object(d.a)({},e),{},{value:t}))}}),Object(o.jsx)(u.b,{exact:!0,path:"/about",render:function(e){return Object(o.jsx)(f,Object(d.a)(Object(d.a)({},e),{},{value:t}))}}),Object(o.jsx)(u.b,{component:p})]})};var y=function e(t){var c=t.title,s=void 0===c?null:c,n=t.headerContent,j=void 0===n?null:n,l=t.bodyContent,b=void 0===l?Object(o.jsx)("div",{className:"p-5 bg-light text-center border rounded-3",children:"Body Content Goes Here..."}):l,d=t.position,u=void 0===d?"start":d,h=t.backdrop,x=void 0!==h&&h,O=t.closeButton,m=void 0===O||O,v=t.closeButtonTheme,f=void 0===v?"default":v,p=t.scrollable,g=void 0!==p&&p,y=t.classes,N=void 0===y?"":y,C=t.style,w=void 0===C?{}:C,S=document.getElementsByTagName("html")[0],k=document.getElementsByTagName("body")[0],z=Object(a.useRef)(),B=Object(a.useRef)(),L=Object(a.useRef)(),M=Object(a.useState)(!1),E=Object(r.a)(M,2),q=E[0],A=E[1],F=Object(a.useState)(!1),T=Object(r.a)(F,2),_=T[0],D=T[1];Object(a.useEffect)((function(){var e=function(e){e.target.contains(z.current)&&q&&e.target!==B.current&&e.target.parentElement!==B.current&&I()};return k.addEventListener("click",e),function(){k.removeEventListener("click",e)}}),[q,k]);var I=e.hideOffCanvas=function(){if(z.current){var e=z.current;e.classList.contains("show")&&(e.classList.remove("show"),A(!1),x&&L.current&&L.current.classList.remove("show"),setTimeout((function(){e.style.visibility="hidden",g||(S.style.overflow="",k.style.overflow="")}),300),setTimeout((function(){x&&D(!1)}),250))}};return Object(o.jsxs)(i.a.Fragment,{children:[Object(o.jsxs)("div",{ref:z,className:N?"offcanvas offcanvas-".concat(u," ").concat(N):"offcanvas offcanvas-".concat(u),style:w,tabIndex:"-1",children:[j&&Object(o.jsxs)("div",{className:"offcanvas-header",children:["function"!==typeof j?j:j(),m&&Object(o.jsx)("button",{className:"white"===f?"btn-close btn-close-white text-reset":"btn-close text-reset",type:"button",onClick:I})]}),!j&&s&&Object(o.jsxs)("div",{className:"offcanvas-header",children:[Object(o.jsx)("h5",{className:"offcanvas-title",children:s}),m&&Object(o.jsx)("button",{className:"btn-close text-reset",type:"button",onClick:I})]}),Object(o.jsx)("div",{className:"offcanvas-body",children:"function"!==typeof b?b:b()})]}),Object(o.jsx)("button",{ref:B,id:"custom-toggler",className:"navbar-toggler",type:"button",onClick:function(){if(z.current){var e=z.current;e.classList.contains("show")?e.classList.contains("show")&&I():function(){if(z.current){var e=z.current;e.classList.contains("show")||(x&&(document.querySelector(".modal-backdrop.show")||(D(!0),setTimeout((function(){L.current&&L.current.classList.add("show")}),100))),g||(S.style.overflow="hidden",k.style.overflow="hidden"),e.style.visibility="visible",e.classList.add("show"),A(!0))}}()}},style:"end"===u?{left:25,right:0}:{},children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),_&&Object(o.jsx)("div",{ref:L,className:"modal-backdrop fade",onClick:I})]})},N=function(e){return Object(o.jsx)(y,{title:"not used",headerContent:function(){return Object(o.jsx)(b.b,{className:"navbar-brand p-0 lh-1 link-light",style:{fontFamily:"Montserrat",fontSize:32},to:"/",children:Object(o.jsx)("span",{children:"Senor Wooly Test"})})},bodyContent:function(){return Object(o.jsxs)("nav",{id:"primary-navigation",children:[Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)(b.c,{className:"nav-link",activeClassName:"active-link",exact:!0,to:"/breeds",onClick:y.hideOffCanvas,children:"Breeds"}),Object(o.jsx)(b.c,{className:"nav-link",activeClassName:"active-link",exact:!0,to:"/About",onClick:y.hideOffCanvas,children:"About"})]}),Object(o.jsx)("div",{className:"w-100 mx-auto text-center",style:{marginTop:50},children:Object(o.jsxs)("svg",{viewBox:"0 0 511.73 511.73",fill:"#c8c8c8",style:{width:150},children:[Object(o.jsx)("path",{id:"XMLID_273_",d:"m202.538 509.203c-23.564 0-47.124-8.754-65.095-26.279-8.501-8.29-15.249-17.943-20.057-28.692-12.438-27.812-34.605-49.979-62.417-62.417-10.749-4.807-20.402-11.555-28.692-20.057-35.129-36.027-35.021-94.545.241-130.448 14.346-14.607 32.603-23.911 52.796-26.908 11.488-1.705 21.703-6.828 29.54-14.814l.608-.614c21.855-21.855 53.027-31.422 87.772-26.937 33.3 4.299 66.126 21.154 92.433 47.461s43.163 59.133 47.461 92.433c4.485 34.746-5.081 65.917-26.937 87.773l-.552.548c-8.009 7.873-13.136 18.099-14.833 29.58-2.987 20.207-12.289 38.476-26.898 52.833-17.997 17.687-41.686 26.538-65.37 26.538zm-21.528-308.327c-19.49 0-37.304 6.281-50.335 19.312l-.403.407c-12.456 12.693-28.552 20.811-46.555 23.483-13.684 2.031-26.062 8.343-35.797 18.254-23.919 24.353-23.993 64.046-.165 88.482 5.636 5.78 12.184 10.361 19.461 13.616 34.557 15.455 62.1 42.998 77.555 77.555 3.255 7.278 7.836 13.826 13.615 19.461 24.443 23.835 64.142 23.755 88.495-.177 9.914-9.742 16.224-22.129 18.248-35.822 2.66-17.994 10.776-34.101 23.472-46.58l.377-.374c15.131-15.131 21.664-37.405 18.396-62.719-3.455-26.76-17.277-53.417-38.921-75.061-26.051-26.053-58.58-39.837-87.443-39.837z"}),Object(o.jsx)("path",{id:"XMLID_270_",d:"m302.428 154.533c-17.302 0-32.797-6.104-44.302-17.609-13.428-13.427-19.498-32.292-17.093-53.12 2.255-19.531 11.839-38.629 26.987-53.777 15.147-15.147 34.245-24.731 53.776-26.987 20.829-2.402 39.692 3.667 53.12 17.093 13.428 13.428 19.498 32.293 17.094 53.121-2.255 19.531-11.839 38.629-26.987 53.776-15.147 15.148-34.246 24.732-53.777 26.987-2.983.345-5.926.516-8.818.516zm28.051-121.999c-1.709 0-3.458.102-5.242.308-12.836 1.482-25.623 8.016-36.004 18.397-10.382 10.382-16.916 23.169-18.398 36.005-1.333 11.54 1.688 21.649 8.504 28.466 6.817 6.817 16.929 9.836 28.466 8.505 12.836-1.482 25.623-8.016 36.005-18.398s16.916-23.168 18.397-36.004c1.333-11.54-1.688-21.649-8.505-28.466-5.762-5.763-13.879-8.813-23.223-8.813z"}),Object(o.jsx)("path",{id:"XMLID_267_",d:"m101.05 162.166c-17.303 0-32.797-6.104-44.302-17.608-13.428-13.428-19.499-32.292-17.094-53.12 2.255-19.531 11.839-38.629 26.987-53.777 15.147-15.147 34.246-24.731 53.776-26.987 20.831-2.404 39.693 3.667 53.12 17.093 13.428 13.428 19.499 32.293 17.094 53.121-2.255 19.531-11.839 38.629-26.987 53.776-15.147 15.148-34.246 24.732-53.777 26.987-2.981.345-5.925.515-8.817.515zm28.051-121.998c-1.709 0-3.458.102-5.242.308-12.836 1.482-25.623 8.016-36.004 18.397-10.383 10.383-16.916 23.17-18.399 36.006-1.332 11.54 1.688 21.649 8.505 28.466 6.816 6.816 16.923 9.839 28.466 8.504 12.836-1.482 25.623-8.016 36.005-18.398s16.916-23.169 18.397-36.004c1.333-11.54-1.688-21.649-8.504-28.466-5.763-5.763-13.88-8.813-23.224-8.813z"}),Object(o.jsx)("path",{id:"XMLID_242_",d:"m421.633 273.738c-17.302 0-32.797-6.104-44.302-17.608-13.428-13.428-19.499-32.292-17.094-53.12 2.255-19.531 11.839-38.629 26.987-53.777 15.147-15.147 34.246-24.731 53.777-26.986 20.826-2.409 39.692 3.666 53.12 17.093s19.499 32.292 17.094 53.12c-2.255 19.531-11.839 38.629-26.986 53.777-15.148 15.147-34.247 24.731-53.777 26.987-2.983.343-5.927.514-8.819.514zm28.051-121.998c-1.709 0-3.458.102-5.242.308-12.836 1.482-25.623 8.016-36.005 18.398-10.382 10.382-16.916 23.168-18.398 36.004-1.332 11.54 1.688 21.649 8.505 28.466s16.928 9.84 28.466 8.504c12.836-1.482 25.623-8.016 36.005-18.397 10.382-10.382 16.916-23.169 18.397-36.005 1.333-11.54-1.688-21.649-8.504-28.466-5.763-5.763-13.879-8.812-23.224-8.812z"}),Object(o.jsx)("path",{id:"XMLID_239_",d:"m411.549 472.665c-17.302 0-32.797-6.104-44.302-17.608-13.428-13.428-19.499-32.292-17.094-53.12 2.255-19.531 11.839-38.629 26.987-53.777 15.147-15.147 34.246-24.731 53.777-26.986 20.826-2.408 39.692 3.666 53.12 17.093s19.499 32.292 17.094 53.12c-2.255 19.531-11.839 38.629-26.986 53.777-15.148 15.147-34.247 24.731-53.777 26.987-2.983.344-5.927.514-8.819.514zm28.051-121.997c-1.709 0-3.458.102-5.242.308-12.836 1.482-25.623 8.016-36.005 18.398-10.382 10.382-16.916 23.168-18.398 36.004-1.332 11.54 1.688 21.649 8.505 28.466 6.816 6.817 16.929 9.838 28.466 8.504 12.836-1.482 25.623-8.016 36.005-18.397 10.382-10.382 16.916-23.169 18.397-36.005 1.333-11.54-1.688-21.649-8.504-28.466-5.763-5.763-13.879-8.812-23.224-8.812z"})]})})]})},backdrop:!0,position:"start",scrollable:!1,closeButton:!0,closeButtonTheme:"white",classes:"bg-deep-space",style:{borderRight:"2px solid #000"}})};c(57),c(58),c(59);var C=function(){var e=Object(a.useContext)(j);return Object(o.jsxs)(b.a,{children:[Object(o.jsx)("header",{id:"primary-header",children:Object(o.jsx)(N,{})}),Object(o.jsx)("main",{className:"pb-5",children:Object(o.jsx)("div",{className:"container-fluid pt-3 px-md-5",children:Object(o.jsx)(g,{value:e})})})]})};n.a.render(Object(o.jsx)(l,{children:Object(o.jsx)(C,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.4e5761a2.chunk.js.map