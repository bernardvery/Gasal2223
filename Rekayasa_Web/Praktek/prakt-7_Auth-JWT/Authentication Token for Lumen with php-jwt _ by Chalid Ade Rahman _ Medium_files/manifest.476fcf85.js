(()=>{"use strict";var e,t,n,a,o={},i={};function c(e){if(i[e])return i[e].exports;var t=i[e]={id:e,loaded:!1,exports:{}};return o[e].call(t.exports,t,t.exports,c),t.loaded=!0,t.exports}c.m=o,c.x=e=>{},c.amdO={},c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(n,a){if(1&a&&(n=this(n)),8&a)return n;if("object"==typeof n&&n){if(4&a&&n.__esModule)return n;if(16&a&&"function"==typeof n.then)return n}var o=Object.create(null);c.r(o);var i={};e=e||[null,t({}),t([]),t(t)];for(var r=2&a&&n;"object"==typeof r&&!~e.indexOf(r);r=t(r))Object.getOwnPropertyNames(r).forEach((e=>i[e]=()=>n[e]));return i.default=()=>n,c.d(o,i),o},c.d=(e,t)=>{for(var n in t)c.o(t,n)&&!c.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((t,n)=>(c.f[n](e,t),t)),[])),c.u=e=>"static/js/"+({118:"instrumentation",192:"PublicationFollowersPage.MainContent",214:"NotificationsPage.RightColumnContent",240:"TopicPage.MainContent",261:"SeriesPage.MainContent",445:"MastodonForMembersPage.MainContent",608:"CustomizeFollowingPage.MainContent",679:"CustomizeReadingHistoryPage.MainContent",716:"UserFollowingPage.MainContent",838:"TopicPage.RightColumnContent",899:"UserCatalogPage.MainContent",903:"PartnerProgramUnenrollPage.MainContent",1050:"GroupGiftMembershipPage.MainContent",1165:"PublicationDigestStatsPage.MainContent",1186:"ThreadedCatalogResponsesSidebar",1234:"TheTrump45Page.MainContent",1245:"CommunityPublicationFeaturePage.MainContent",1252:"UpdatePaymentPage.MainContent",1388:"dev",1572:"YourReadingHistoryPage.RightColumnContent",1727:"YourCatalogsPage.RightColumnContent",1826:"LOHomeAnimation",1834:"PublicationFollowersPage.RightColumnContent",1865:"GlobalUnsubscribeNewslettersPage.RightColumnContent",1888:"PostPage.RightColumnContent",1916:"PaypalButton",2080:"HomePage.RightColumnContent",2129:"YourFollowedCatalogsPage.RightColumnContent",2213:"SearchPage.RightColumnContent",2237:"CreateSubdomainPage.MainContent",2255:"CustomizeSuggestionsPage.RightColumnContent",2267:"HomeLoPage.MainContent",2270:"CommunityPublicationAboutPage.MainContent",2272:"AwardedPostsPage.RightColumnContent",2280:"SettingsPage.RightColumnContent",2337:"SignInPage.MainContent",2373:"YourStoriesPage.RightColumnContent",2387:"UserAwardsPage.MainContent",2614:"PublicationProfilePage.MainContent",2672:"NotificationSettings",2678:"BillingHistoryPage.MainContent",2791:"UserProfilePage.MainContent",2831:"CustomizeMutedPage.MainContent",2855:"PublishingSettings",3050:"UserFollowingPage.RightColumnContent",3158:"PostGiveStaffPickAward",3193:"PostNextFiveStories",3195:"YourFollowedCatalogsPage.MainContent",3295:"CustomizeFollowingPage.RightColumnContent",3413:"PublicationTaggedPage.RightColumnContent",3419:"MobileWebEditorRedirectPage.MainContent",3692:"YourStoriesPage.MainContent",3769:"PlansPage.MainContent",3774:"UnrecognizedAccountPage.MainContent",3802:"CustomizeMutedPage.RightColumnContent",4124:"CrupdatePasswordPage.MainContent",4198:"TrendingPostsPage.MainContent",4212:"SettingsCustomDomainPage.MainContent",4561:"YourNewslettersPage.MainContent",4593:"PublicationDesignEditorPage.MainContent",4657:"SettingsPage.MainContent",4729:"InternalStatusPage.MainContent",4790:"PublicationProfilePage.RightColumnContent",4863:"WriterSubscriptionPromotionPage.MainContent",4907:"UserDrivenMembershipPromotionPage.MainContent",5085:"UserCatalogPage.RightColumnContent",5160:"YourCatalogPage.MainContent",5232:"LegacyTopicRedirectPage.MainContent",5284:"UserCatalogsPage.RightColumnContent",5313:"PostGiveTipOnExternalPlatform",5317:"TicksPage.MainContent",5344:"react-select",5464:"EmbedCatalogPage.MainContent",5486:"SettingsPromoteSubscriptionPage.MainContent",5509:"YourCatalogsPage.MainContent",5531:"PostPage.MainContent",5587:"TopicsOnboardingPage.MainContent",5620:"CustomizeReadingHistoryPage.RightColumnContent",5709:"TippingSettingsPage.MainContent",5736:"PublicationAboutPage.MainContent",5849:"YourCatalogPage.RightColumnContent",5881:"ImportMailingListPage.MainContent",5974:"UserCatalogsPage.MainContent",6029:"UserFollowersPage.MainContent",6035:"PublicationAboutPage.RightColumnContent",6205:"UserBooksPage.MainContent",6329:"SecuritySettings",6333:"AccountSettings",6391:"SpeechifyWidget",6635:"responses.editor",6648:"PublicationTaggedPage.MainContent",6662:"PublicationNewsletterPromotionPage.MainContent",6853:"SettingsPromoteMembershipsPage.MainContent",6908:"ShareSuccessPage.MainContent",6991:"YourReadingHistoryPage.MainContent",7039:"CommunityPublicationTrendingPage.MainContent",7181:"PublicationNewsletterSettingsPage.MainContent",7210:"GlobalUnsubscribeNewslettersPage.MainContent",7252:"SearchPage.MainContent",7253:"CommunityPublicationProfilePage.MainContent",7256:"TwoFactorAuthPage.MainContent",7480:"AwardedPostsPage.MainContent",7642:"UserBooksPage.RightColumnContent",7660:"CustomizeSuggestionsPage.MainContent",7757:"StatsPostPage.MainContent",8014:"SubscriptionStatsPage.MainContent",8328:"LandingVerifiedAuthorsPage.MainContent",8490:"UserDesignEditorPage.MainContent",8636:"RedeemGiftMembershipPage.MainContent",8698:"UserAwardsPage.RightColumnContent",8763:"Devtool",8837:"GiftMembershipPage.MainContent",8857:"BillingReceiptPage.MainContent",8913:"ThreadedResponsesSidebarContent",8916:"UserProfilePage.RightColumnContent",8934:"PostStaffPickAwardHeader",8972:"RegistrationFormPage.MainContent",8986:"CommunityPublicationTaggedPage.MainContent",9076:"GiveTipButton",9128:"RedeemGiftMembershipModal",9143:"CommunityPublicationArchivePage.MainContent",9152:"reporting",9251:"PostZenPage.MainContent",9267:"NotificationsPage.MainContent",9293:"WelcomeMemberPage.MainContent",9383:"hatch",9449:"LandingB2BPage.MainContent",9453:"PostSettingsPage.MainContent",9456:"CollectionsLibraryPage.MainContent",9501:"CommunityPublicationLatestPage.MainContent",9534:"UserAboutPage.RightColumnContent",9558:"ExploreTopicsPage.MainContent",9627:"MembershipSettings",9655:"NotAvailablePage.MainContent",9686:"DiscountPlansPage.MainContent",9690:"HomePage.MainContent",9789:"UserAboutPage.MainContent",9862:"PublicationCustomDomainSettingsPage.MainContent",9868:"UserFollowersPage.RightColumnContent",9985:"TributePage.MainContent"}[e]||e)+"."+{8:"5980bcd4",118:"c71f0248",192:"84909fbe",209:"6b046446",214:"6eb390bf",240:"6059c398",261:"5790798b",319:"a1f55686",408:"a2a99186",445:"8f43bdbe",455:"1a1c5010",466:"c3deb54d",490:"9b4efbd6",608:"c10aca09",640:"e9b0c1ab",679:"63248859",716:"fe19d869",799:"361fd2fb",803:"b1baa49a",838:"72d6ed92",899:"6077cccd",903:"e9380f19",925:"2f232a58",957:"f19be19c",1050:"b7ff7e2b",1069:"ec72bd6d",1165:"9415e12e",1186:"77f2c2c9",1234:"2ba7ba32",1245:"e868c8dc",1248:"18b8ed10",1252:"df121d61",1315:"7366361e",1388:"89f275c4",1488:"553173cf",1503:"0cfd10ee",1572:"1d6ae2f3",1627:"e1ae92a6",1689:"447a4970",1727:"2a201d2a",1730:"f33b8a30",1743:"42985c62",1802:"1dde9f90",1826:"7e41bacd",1834:"47ed72cc",1860:"abea291f",1865:"487c7ea9",1878:"73a360f3",1888:"17084ba2",1911:"071e9f80",1916:"302d5d15",2080:"6f7ab8d2",2129:"6f009643",2148:"cdad945f",2213:"fc93fdac",2223:"8e707c7a",2230:"571ed6c4",2237:"652e3262",2255:"a32f071d",2267:"95cef7e3",2270:"ce5981f3",2272:"9c3694a2",2280:"4a26ee1f",2287:"a89f9d21",2337:"7ce05fb2",2373:"3210571b",2387:"5cd7e746",2455:"10b7a1c8",2477:"3455a4b5",2614:"33178284",2629:"e288575a",2672:"27de3d81",2678:"d26d7c52",2791:"99871f82",2831:"8676119f",2851:"cf02744b",2855:"706f5fe2",2905:"c789e347",2920:"12aec699",3050:"d11844e5",3115:"0915c66c",3158:"bf03d0bd",3190:"392188de",3193:"717a022a",3195:"4aa1ee47",3281:"e69c278e",3283:"a6b85089",3295:"7c80476c",3371:"eecfeb4d",3413:"79a7670f",3419:"d52f7f66",3490:"44a05de9",3657:"c62673a4",3692:"91af17c7",3720:"a32d41c5",3769:"471d928a",3774:"32a01afa",3802:"b6cb29d1",3838:"7ae103cd",3952:"5e1b2ced",4042:"91470544",4078:"182beff5",4124:"d2c1022a",4129:"9a8d63eb",4198:"e9af2dca",4212:"f42f70cc",4251:"d1f5c550",4332:"49763622",4375:"74282e94",4447:"522494b1",4561:"46904aba",4583:"d57db413",4589:"264e71bb",4593:"0cf36070",4657:"502128a3",4729:"5606ddca",4790:"3104ab09",4863:"5d8cebc2",4907:"f07402c4",4911:"25e77248",5085:"0d283157",5160:"4bacd79b",5181:"8da8aec5",5203:"23a22ad8",5232:"8bd9d07a",5249:"c757fed8",5279:"9f856496",5284:"ec92c59f",5313:"9d2f1bb0",5317:"46824eed",5344:"4c6b2f60",5384:"00b6e90d",5464:"09b8b08c",5472:"a7dd22a2",5486:"7099499e",5509:"0e43353c",5531:"78621cce",5572:"8add0420",5587:"053f5812",5620:"1b48d537",5627:"182c65f9",5631:"3ff4ebf1",5642:"36172d8f",5705:"e331f98a",5709:"16b5bf16",5736:"a15459f0",5829:"26919318",5849:"702240f5",5850:"25708f67",5881:"5b8b0b60",5940:"51688322",5957:"c8fba4ac",5974:"6cb4ebba",6029:"68c25cc4",6035:"644c1727",6091:"fb725ff4",6100:"d4324a89",6159:"2896e66f",6160:"3eb97167",6205:"465f791e",6213:"278828f6",6255:"1018cd9a",6318:"9640079e",6329:"45491a1a",6333:"e03a0993",6391:"981aadd5",6635:"287761eb",6636:"bb9c6757",6648:"76359d97",6662:"bb13d749",6714:"db481b20",6846:"890f5a03",6853:"8e09fcff",6908:"b99e1e94",6917:"db917a5e",6974:"b94d2340",6991:"c0642451",7039:"a0b6c4b7",7084:"029bd067",7136:"50c74aec",7170:"644d02fb",7181:"0c0aca84",7210:"49c2ddc9",7252:"8339dfcf",7253:"20f4d452",7256:"c96f99cf",7288:"29e1de80",7360:"f6f7081e",7413:"4ed92b9a",7480:"1a62afb9",7642:"d943f23d",7660:"ee21953c",7667:"24cb3a6d",7749:"84f2f188",7757:"cda27785",7794:"9590314e",7904:"adc0b525",7906:"47ff48f1",7915:"98cb424d",7945:"5bc15c98",7974:"c6239004",8007:"e7e42be3",8014:"bd62515e",8051:"1e236389",8069:"ba53a61f",8081:"812eb0c3",8097:"afb6fd3b",8121:"0f27063e",8239:"c5456e5e",8266:"e3fa1de8",8328:"86513e41",8447:"49ac73d8",8490:"f590ff5f",8501:"e569a7f8",8546:"dfbf5f32",8547:"76b306bc",8580:"e792aa8d",8636:"8078e854",8695:"ac0f83b3",8698:"9a6958ee",8720:"bce1a7a2",8763:"9c8ae769",8837:"f2ca87a1",8857:"50e07b97",8880:"2f261ff4",8913:"7bf58d20",8916:"0961cb16",8922:"c345ffb0",8934:"4bcae0be",8972:"840d2088",8981:"1de7218a",8986:"526f37b6",9012:"314f1cf2",9076:"572c61fe",9128:"9486e165",9143:"e4acd36e",9152:"bbdcaa9d",9174:"61ecc422",9196:"1e10e390",9251:"a3a9a170",9267:"b02968e2",9278:"6c86df9c",9287:"c28d8e7a",9293:"98dc099c",9337:"2b2986d9",9383:"e0bd2cb2",9410:"207f1d22",9449:"c4e9f8e8",9453:"4eeb2b78",9456:"1f4f7797",9501:"2058f1fa",9505:"2c6c0e15",9534:"2d2a62c0",9558:"6c9619ab",9583:"f55afc9c",9627:"120dc1f4",9635:"d9909ed2",9655:"90cd3eca",9658:"17030d28",9683:"eb71cf3a",9684:"942d7bd8",9686:"e3f8e02e",9690:"e80ce387",9789:"c61a44b3",9862:"9b4dc2a8",9868:"490b8a3d",9985:"e09b96b0"}[e]+".chunk.js",c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n={},a="lite:",c.l=(e,t,o,i)=>{if(n[e])n[e].push(t);else{var r,b;if(void 0!==o)for(var g=document.getElementsByTagName("script"),d=0;d<g.length;d++){var f=g[d];if(f.getAttribute("src")==e||f.getAttribute("data-webpack")==a+o){r=f;break}}r||(b=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,c.nc&&r.setAttribute("nonce",c.nc),r.setAttribute("data-webpack",a+o),r.src=e),n[e]=[t];var s=(t,a)=>{r.onerror=r.onload=null,clearTimeout(l);var o=n[e];if(delete n[e],r.parentNode&&r.parentNode.removeChild(r),o&&o.forEach((e=>e(a))),t)return t(a)},l=setTimeout(s.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=s.bind(null,r.onerror),r.onload=s.bind(null,r.onload),b&&document.head.appendChild(r)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),c.p="https://cdn-client.medium.com/lite/",(()=>{var e={6700:0},t=[];c.f.j=(t,n)=>{var a=c.o(e,t)?e[t]:void 0;if(0!==a)if(a)n.push(a[2]);else{var o=new Promise(((n,o)=>{a=e[t]=[n,o]}));n.push(a[2]=o);var i=c.p+c.u(t),r=new Error;c.l(i,(n=>{if(c.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;r.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",r.name="ChunkLoadError",r.type=o,r.request=i,a[1](r)}}),"chunk-"+t,t)}};var n=e=>{},a=(a,o)=>{for(var i,r,[b,g,d,f]=o,s=0,l=[];s<b.length;s++)r=b[s],c.o(e,r)&&e[r]&&l.push(e[r][0]),e[r]=0;for(i in g)c.o(g,i)&&(c.m[i]=g[i]);for(d&&d(c),a&&a(o);l.length;)l.shift()();return f&&t.push.apply(t,f),n()},o=self.webpackChunklite=self.webpackChunklite||[];function i(){for(var n,a=0;a<t.length;a++){for(var o=t[a],i=!0,r=1;r<o.length;r++){var b=o[r];0!==e[b]&&(i=!1)}i&&(t.splice(a--,1),n=c(c.s=o[0]))}return 0===t.length&&(c.x(),c.x=e=>{}),n}o.forEach(a.bind(null,0)),o.push=a.bind(null,o.push.bind(o));var r=c.x;c.x=()=>(c.x=r||(e=>{}),(n=i)())})(),c.x()})();
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/manifest.476fcf85.js.map