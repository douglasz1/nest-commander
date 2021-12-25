"use strict";(self.webpackChunknest_commander_monorepo=self.webpackChunknest_commander_monorepo||[]).push([[918],{5131:(e,t,a)=>{a.r(t),a.d(t,{default:()=>te});var n=a(9496),l=a(1626),s=a(8550),i=a(8880),r=a(2292);const o=function(e){var t=e.navLink,a=e.next;return n.createElement(r.Z,{className:(0,l.Z)("pagination-nav__link"),to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},a?n.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"):n.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},t.title))};const c=function(e){var t=e.previous,a=e.next;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t&&n.createElement(o,{navLink:t})),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&n.createElement(o,{navLink:a,next:!0})))};var d=a(4987),m=a(7261),u=a(6640);var v={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function g(e){var t=v[e.versionMetadata.banner];return n.createElement(t,e)}function h(e){var t=e.versionLabel,a=e.to,l=e.onClick;return n.createElement(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(r.Z,{to:a,onClick:l},n.createElement(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function p(e){var t,a=e.className,s=e.versionMetadata,i=(0,d.Z)().siteConfig.title,r=(0,m.gA)({failfast:!0}).pluginId,o=(0,u.J)(r).savePreferredVersionName,c=(0,m.Jo)(r),v=c.latestDocSuggestion,p=c.latestVersionSuggestion,E=null!=v?v:(t=p).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,l.Z)(a,u.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(g,{siteTitle:i,versionMetadata:s})),n.createElement("div",{className:"margin-top--md"},n.createElement(h,{versionLabel:p.label,to:E.path,onClick:function(){return o(p.name)}})))}function E(e){var t=e.className,a=(0,u.E6)();return a.banner?n.createElement(p,{className:t,versionMetadata:a}):null}function b(e){var t=e.className,a=(0,u.E6)();return a.badge?n.createElement("span",{className:(0,l.Z)(t,u.kM.docs.docVersionBadge,"badge badge--secondary")},"Version: ",a.label):null}var f=a(6879);function N(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(i.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function k(e){var t=e.lastUpdatedBy;return n.createElement(i.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function _(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return n.createElement("span",{className:u.kM.common.lastUpdated},n.createElement(i.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(N,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(k,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var L=a(5900),Z=a(4750);const U="iconEdit_Ya9i";var C=["className"];const T=function(e){var t=e.className,a=(0,Z.Z)(e,C);return n.createElement("svg",(0,L.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(U,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function y(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},n.createElement(T,null),n.createElement(i.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}const w="tag_a35t",x="tagRegular_12Uo",A="tagWithCount_3WTu";const M=function(e){var t,a=e.permalink,s=e.name,i=e.count;return n.createElement(r.Z,{href:a,className:(0,l.Z)(w,(t={},t[x]=!i,t[A]=i,t))},s,i&&n.createElement("span",null,i))},H="tags_1-xh",B="tag_2Sxz";function S(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(H,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:B},n.createElement(M,{name:t,permalink:a}))}))))}const V="lastUpdated_21G_";function D(e){return n.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(S,e)))}function O(e){var t=e.editUrl,a=e.lastUpdatedAt,s=e.lastUpdatedBy,i=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(y,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",V)},(a||s)&&n.createElement(_,{lastUpdatedAt:a,formattedLastUpdatedAt:i,lastUpdatedBy:s})))}function I(e){var t=e.content.metadata,a=t.editUrl,s=t.lastUpdatedAt,i=t.formattedLastUpdatedAt,r=t.lastUpdatedBy,o=t.tags,c=o.length>0,d=!!(a||s||r);return c||d?n.createElement("footer",{className:(0,l.Z)(u.kM.docs.docFooter,"docusaurus-mt-lg")},c&&n.createElement(D,{tags:o}),d&&n.createElement(O,{editUrl:a,lastUpdatedAt:s,lastUpdatedBy:r,formattedLastUpdatedAt:i})):null}var F=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function P(e){var t=e.toc,a=e.className,l=e.linkClassName,s=e.isChild;return t.length?n.createElement("ul",{className:s?void 0:a},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:null!=l?l:void 0,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(P,{isChild:!0,toc:e.children,className:a,linkClassName:l}))}))):null}function z(e){var t=e.toc,a=e.className,l=void 0===a?"table-of-contents table-of-contents__left-border":a,s=e.linkClassName,i=void 0===s?"table-of-contents__link":s,r=e.linkActiveClassName,o=void 0===r?void 0:r,c=e.minHeadingLevel,d=e.maxHeadingLevel,m=(0,Z.Z)(e,F),v=(0,u.LU)(),g=null!=c?c:v.tableOfContents.minHeadingLevel,h=null!=d?d:v.tableOfContents.maxHeadingLevel,p=(0,u.DA)({toc:t,minHeadingLevel:g,maxHeadingLevel:h}),E=(0,n.useMemo)((function(){if(i&&o)return{linkClassName:i,linkActiveClassName:o,minHeadingLevel:g,maxHeadingLevel:h}}),[i,o,g,h]);return(0,u.Si)(E),n.createElement(P,(0,L.Z)({toc:p,className:l,linkClassName:i},m))}const R="tableOfContents_3-rv";var W=["className"];const j=function(e){var t=e.className,a=(0,Z.Z)(e,W);return n.createElement("div",{className:(0,l.Z)(R,"thin-scrollbar",t)},n.createElement(z,(0,L.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))},q="tocCollapsible_1Psl",J="tocCollapsibleButton_291M",Y="tocCollapsibleContent_6uxZ",G="tocCollapsibleExpanded_2wvk";function K(e){var t,a=e.toc,s=e.className,r=e.minHeadingLevel,o=e.maxHeadingLevel,c=(0,u.uR)({initialState:!0}),d=c.collapsed,m=c.toggleCollapsed;return n.createElement("div",{className:(0,l.Z)(q,(t={},t[G]=!d,t),s)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",J),onClick:m},n.createElement(i.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(u.zF,{lazy:!0,className:Y,collapsed:d},n.createElement(z,{toc:a,minHeadingLevel:r,maxHeadingLevel:o})))}var Q=a(356);const X="docItemContainer_1axP",$="docItemCol_159E",ee="tocMobile_1lj9";function te(e){var t,a=e.content,i=a.metadata,r=a.frontMatter,o=r.image,d=r.keywords,m=r.hide_title,v=r.hide_table_of_contents,g=r.toc_min_heading_level,h=r.toc_max_heading_level,p=i.description,N=i.title,k=!m&&void 0===a.contentTitle,_=(0,s.Z)(),L=!v&&a.toc&&a.toc.length>0,Z=L&&("desktop"===_||"ssr"===_);return n.createElement(n.Fragment,null,n.createElement(f.Z,{title:N,description:p,keywords:d,image:o}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",(t={},t[$]=!v,t))},n.createElement(E,null),n.createElement("div",{className:X},n.createElement("article",null,n.createElement(b,null),L&&n.createElement(K,{toc:a.toc,minHeadingLevel:g,maxHeadingLevel:h,className:(0,l.Z)(u.kM.docs.docTocMobile,ee)}),n.createElement("div",{className:(0,l.Z)(u.kM.docs.docMarkdown,"markdown")},k&&n.createElement(Q.N,null,N),n.createElement(a,null)),n.createElement(I,e)),n.createElement(c,{previous:i.previous,next:i.next}))),Z&&n.createElement("div",{className:"col col--3"},n.createElement(j,{toc:a.toc,minHeadingLevel:g,maxHeadingLevel:h,className:u.kM.docs.docTocDesktop}))))}},356:(e,t,a)=>{a.d(t,{N:()=>u,Z:()=>v});var n=a(4750),l=a(5900),s=a(9496),i=a(1626),r=a(8880),o=a(6640);const c="anchorWithStickyNavbar_3VBj",d="anchorWithHideOnScrollNavbar_ScYl";var m=["id"],u=function(e){var t=Object.assign({},e);return s.createElement("header",null,s.createElement("h1",(0,l.Z)({},t,{id:void 0}),t.children))};const v=function(e){return"h1"===e?u:(t=e,function(e){var a,u=e.id,v=(0,n.Z)(e,m),g=(0,o.LU)().navbar.hideOnScroll;return u?s.createElement(t,(0,l.Z)({},v,{className:(0,i.Z)("anchor",(a={},a[d]=g,a[c]=!g,a)),id:u}),v.children,s.createElement("a",{className:"hash-link",href:"#"+u,title:(0,r.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):s.createElement(t,v)});var t}}}]);