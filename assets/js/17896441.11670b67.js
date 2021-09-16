"use strict";(self.webpackChunknest_commander_monorepo=self.webpackChunknest_commander_monorepo||[]).push([[918],{2894:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Y});var n=a(7689),r=a(1626),l=a(7970),o=a(4921),s=a(8025);const i=function(e){var t=e.metadata;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t.previous&&n.createElement(o.Z,{className:"pagination-nav__link",to:t.previous.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(s.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&n.createElement(o.Z,{className:"pagination-nav__link",to:t.next.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(s.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),n.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))};var c=a(7822),d=a(7325),m=a(6308);var u={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=u[e.versionMetadata.banner];return n.createElement(t,e)}function h(e){var t=e.versionLabel,a=e.to,r=e.onClick;return n.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(o.Z,{to:a,onClick:r},n.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function p(e){var t,a=e.versionMetadata,l=(0,c.Z)().siteConfig.title,o=(0,d.gA)({failfast:!0}).pluginId,s=(0,m.J)(o).savePreferredVersionName,i=(0,d.Jo)(o),u=i.latestDocSuggestion,p=i.latestVersionSuggestion,E=null!=u?u:(t=p).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,r.Z)(m.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(v,{siteTitle:l,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(h,{versionLabel:p.label,to:E.path,onClick:function(){return s(p.name)}})))}const E=function(e){var t=e.versionMetadata;return t.banner?n.createElement(p,{versionMetadata:t}):n.createElement(n.Fragment,null)};var f=a(9278);function b(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(s.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function g(e){var t=e.lastUpdatedBy;return n.createElement(s.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function _(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return n.createElement("span",{className:m.kM.common.lastUpdated},n.createElement(s.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(b,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:r?n.createElement(g,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var N=a(98),k=a(6862);const Z="iconEdit_3jjE";var U=["className"];const L=function(e){var t=e.className,a=(0,k.Z)(e,U);return n.createElement("svg",(0,N.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,r.Z)(Z,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function T(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:m.kM.common.editThisPage},n.createElement(L,null),n.createElement(s.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var C=a(4100);const y="tags_2tBh",w="tag_Xmdz";function A(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(s.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,r.Z)(y,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:w},n.createElement(C.Z,{name:t,permalink:a}))}))))}const M="lastUpdated_175a";function B(e){return n.createElement("div",{className:(0,r.Z)(m.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(A,e)))}function O(e){var t=e.editUrl,a=e.lastUpdatedAt,l=e.lastUpdatedBy,o=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,r.Z)(m.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(T,{editUrl:t})),n.createElement("div",{className:(0,r.Z)("col",M)},(a||l)&&n.createElement(_,{lastUpdatedAt:a,formattedLastUpdatedAt:o,lastUpdatedBy:l})))}function S(e){var t=e.content.metadata,a=t.editUrl,l=t.lastUpdatedAt,o=t.formattedLastUpdatedAt,s=t.lastUpdatedBy,i=t.tags,c=i.length>0,d=!!(a||l||s);return c||d?n.createElement("footer",{className:(0,r.Z)(m.kM.docs.docFooter,"docusaurus-mt-lg")},c&&n.createElement(B,{tags:i}),d&&n.createElement(O,{editUrl:a,lastUpdatedAt:l,lastUpdatedBy:s,formattedLastUpdatedAt:o})):n.createElement(n.Fragment,null)}function x(e){var t=e.getBoundingClientRect();return t.top===t.bottom?x(e.parentNode):t}function D(e){var t,a=e.anchorTopOffset,n=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),r=n.find((function(e){return x(e).top>=a}));return r?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(x(r))?r:null!=(t=n[n.indexOf(r)-1])?t:null:n[n.length-1]}function I(){var e=(0,n.useRef)(0),t=(0,m.LU)().navbar.hideOnScroll;return(0,n.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}const V=function(e){var t=(0,n.useRef)(void 0),a=I();(0,n.useEffect)((function(){var n=e.linkClassName,r=e.linkActiveClassName;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(n),l=D({anchorTopOffset:a.current}),o=e.find((function(e){return l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,a){if(a){var n;if(t.current&&t.current!==e)null==(n=t.current)||n.classList.remove(r);e.classList.add(r),t.current=e}else e.classList.remove(r)}(e,e===o)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,a])},F="tableOfContents_26PA";var R={linkClassName:"table-of-contents__link",linkActiveClassName:"table-of-contents__link--active"};function z(e){var t=e.toc,a=e.isChild;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:"table-of-contents__link",dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(z,{isChild:!0,toc:e.children}))}))):null}const P=function(e){var t=e.toc;return V(R),n.createElement("div",{className:(0,r.Z)(F,"thin-scrollbar")},n.createElement(z,{toc:t}))},j="tocCollapsible_3ODh",q="tocCollapsibleButton_26iA",H="tocCollapsibleContent_3u23",J="tocCollapsibleExpanded_1JE9";function W(e){var t,a=e.toc,l=e.className,o=(0,m.uR)({initialState:!0}),i=o.collapsed,c=o.toggleCollapsed;return n.createElement("div",{className:(0,r.Z)(j,(t={},t[J]=!i,t),l)},n.createElement("button",{type:"button",className:(0,r.Z)("clean-btn",q),onClick:c},n.createElement(s.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(m.zF,{lazy:!0,className:H,collapsed:i},n.createElement(z,{toc:a})))}var X=a(7464);const G="docItemContainer_90Fb",K="docItemCol_1swX",Q="tocMobile_2w15";function Y(e){var t,a=e.content,o=e.versionMetadata,s=a.metadata,c=a.frontMatter,d=c.image,u=c.keywords,v=c.hide_title,h=c.hide_table_of_contents,p=s.description,b=s.title,g=!v&&void 0===a.contentTitle,_=(0,l.Z)(),N=!h&&a.toc&&a.toc.length>0,k=N&&("desktop"===_||"ssr"===_);return n.createElement(n.Fragment,null,n.createElement(f.Z,{title:b,description:p,keywords:u,image:d}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,r.Z)("col",(t={},t[K]=!h,t))},n.createElement(E,{versionMetadata:o}),n.createElement("div",{className:G},n.createElement("article",null,o.badge&&n.createElement("span",{className:(0,r.Z)(m.kM.docs.docVersionBadge,"badge badge--secondary")},"Version: ",o.label),N&&n.createElement(W,{toc:a.toc,className:(0,r.Z)(m.kM.docs.docTocMobile,Q)}),n.createElement("div",{className:(0,r.Z)(m.kM.docs.docMarkdown,"markdown")},g&&n.createElement(X.N,null,b),n.createElement(a,null)),n.createElement(S,e)),n.createElement(i,{metadata:s}))),k&&n.createElement("div",{className:"col col--3"},n.createElement(P,{toc:a.toc,className:m.kM.docs.docTocDesktop}))))}},7464:(e,t,a)=>{a.d(t,{N:()=>u,Z:()=>v});var n=a(6862),r=a(98),l=a(7689),o=a(1626),s=a(8025),i=a(6308);const c="anchorWithStickyNavbar_RCPU",d="anchorWithHideOnScrollNavbar_3aUS";var m=["id"],u=function(e){var t=Object.assign({},e);return l.createElement("header",null,l.createElement("h1",(0,r.Z)({},t,{id:void 0}),t.children))};const v=function(e){return"h1"===e?u:(t=e,function(e){var a,r=e.id,u=(0,n.Z)(e,m),v=(0,i.LU)().navbar.hideOnScroll;return r?l.createElement(t,u,l.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,o.Z)("anchor","anchor__"+t,(a={},a[d]=v,a[c]=!v,a)),id:r}),u.children,l.createElement("a",{className:"hash-link",href:"#"+r,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):l.createElement(t,u)});var t}},4100:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7689),r=a(1626),l=a(4921);const o="tag_U2DE",s="tagRegular_3wa4",i="tagWithCount_99Cj";const c=function(e){var t,a=e.permalink,c=e.name,d=e.count;return n.createElement(l.Z,{href:a,className:(0,r.Z)(o,(t={},t[s]=!d,t[i]=d,t))},c,d&&n.createElement("span",null,d))}}}]);