if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let f={};const s=e=>d(e,c),l={module:{uri:c},exports:f,require:s};i[c]=Promise.all(a.map((e=>l[e]||s(e)))).then((e=>(r(...e),f)))}}define(["./workbox-6da860f9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"18abc70735a277ca2ccf80ade97c3ace"},{url:"about/index.html",revision:"d4533e0e621bae7df1d5f147d12364b2"},{url:"archives/2022/02/index.html",revision:"d688045555dc896f6cf5c18fdd9c897f"},{url:"archives/2022/03/index.html",revision:"2f47c6b0611d42391770e02ba6aba891"},{url:"archives/2022/04/index.html",revision:"90e6712e8faff67052c8428def027f34"},{url:"archives/2022/05/index.html",revision:"1cfca91eaaab14e670d035b9453daf3c"},{url:"archives/2022/06/index.html",revision:"665220eb3256c9dbb7d251284de28686"},{url:"archives/2022/07/index.html",revision:"5bbd05f689294673bcf90b00ced2c698"},{url:"archives/2022/index.html",revision:"d569854eae9a6cf63b666a310d570471"},{url:"archives/2022/page/2/index.html",revision:"297772b9e48112e49de009a9196d199c"},{url:"archives/index.html",revision:"a52743f239df575607ca4d0677d4689d"},{url:"archives/page/2/index.html",revision:"522c0f52aeda9ad243a198d0935adc1f"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"baidu_verify_code-otzUa1ZtqP.html",revision:"7c372ad86856bcbe32219244e9adfb1c"},{url:"books/index.html",revision:"b2d9dc0646cd59feede82deb1c969925"},{url:"categories/index.html",revision:"c9c21bffa104437c7cffd92c079e3dca"},{url:"cc/index.html",revision:"111fa174a8b97c64f45ff591c72b2215"},{url:"css/index.css",revision:"42875c61a933c2091eed5bbcb77146a1"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/2019/index.html",revision:"414917ff2f084cad8eb3eff5005446ab"},{url:"gallery/2021/index.html",revision:"d735788ddbc68919cec07f9a2bc40828"},{url:"gallery/bing/index.html",revision:"f5e766bb0dd6e0223dc83dff40cc08a3"},{url:"gallery/index.html",revision:"5f53ae0b283f17be811b2a7b6a364edd"},{url:"gallery/snap/index.html",revision:"99acaafe9a553dfc17f277f21682456a"},{url:"games/index.html",revision:"0b8127dff3dbf6f9c79d4eb7bb3cee41"},{url:"googled0825e7ee19f4e3c.html",revision:"6d835625b8b09a921b6606f72de8fc09"},{url:"img/0.jpg",revision:"898e8d40308026856bde86bb1e3f17d0"},{url:"img/404.gif",revision:"c9b1978501090d951cb50a8a16f72acb"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/bg.jpg",revision:"b6fcd7a5e4d4ab42308c3a5f071df020"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"0a22de1ad4055a745a4a03d42e8be198"},{url:"img/wx.png",revision:"c09a7b333859cf29f044986323bc126c"},{url:"img/zfb.png",revision:"4361886090722d2c7826dd09faf1e1e2"},{url:"index.html",revision:"3054008f7146c2ae616ac5c4ce419576"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/rightmenu.js",revision:"9cefd9d45a340cda5a751d117c51dcd5"},{url:"js/search/algolia.js",revision:"af567f93a5504310fe16fe368a4ee89e"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"movies/index.html",revision:"4e4646179c8460ce4269a98c638432f0"},{url:"musics/index.html",revision:"1ac1ea5fa0df009848827cb82ba9e097"},{url:"news/index.html",revision:"38fb907292269d0a9bbf3090635317fe"},{url:"news/index.js",revision:"cb70b1fc3e21406ffe95f378101f713d"},{url:"news/news.css",revision:"603573b9cdffdb0e4720a0ff2b9d0452"},{url:"news/README.html",revision:"424a3aff361571b6596cdcab5ef3c669"},{url:"p/13bd.html",revision:"7eb7dfacfdcf6785d25d17ed0dee686f"},{url:"p/15af.html",revision:"3f61c061832daf4eadf714bbe9f492d0"},{url:"p/1849.html",revision:"2fd00b7c47dd777e5563de4f0fe1a7d4"},{url:"p/3412.html",revision:"207d21555da2842d74877fd4cf974113"},{url:"p/34c.html",revision:"fdd6e9852218c834414fd9e054278e95"},{url:"p/439d.html",revision:"f0a3b7d8654dd123230a792c97c036eb"},{url:"p/799e.html",revision:"bdd1a86a1e9a77ed3161107d22568a22"},{url:"p/7e53.html",revision:"09ce1d77ad4cb217a05610675509331d"},{url:"p/98.html",revision:"640c9b1ead881200628b942aa1c41e52"},{url:"p/a4f.html",revision:"628856f119c50ddc152ac4364d134280"},{url:"p/a5af.html",revision:"4eedc65fdc67d7700d8a1c08568daf56"},{url:"p/a7fa.html",revision:"c3449caeba8dc8e17e1541df6ee9e5d3"},{url:"p/a8f2.html",revision:"d846f06879af556facd9825ce257129b"},{url:"p/a95e.html",revision:"34a7e78e6361d2cea94a98b15fc8fd3a"},{url:"p/aa4a.html",revision:"ce681448a4dfad128da0b6075b9bb989"},{url:"p/b147.html",revision:"dd0a62538df611bbe4a66990f09138dd"},{url:"p/c99d.html",revision:"6d8b1c965540a1c8238368ad33afbf14"},{url:"p/cb20.html",revision:"823c997e7efa952e3824ab9fea680e0a"},{url:"p/dc3a.html",revision:"4efeeb035f83d44e9135a761b5a2508b"},{url:"p/f0c0.html",revision:"874f3220a03f89e97839375b16fc132f"},{url:"page/2/index.html",revision:"07016549dc2b3d39066647385bcb1276"},{url:"random.html",revision:"f494674d04d355f6273953d9e4641cbe"},{url:"tags/Alist/index.html",revision:"a814777aff8c3dd779f994a4f72f547c"},{url:"tags/Azure/index.html",revision:"0c4358030f8d4cade6936d1ff7fd04e5"},{url:"tags/Docker/index.html",revision:"c8a6d04ead0eceb67e6cc0751a3375ce"},{url:"tags/Github/index.html",revision:"e37cb7460fc214a2d331f7878e894a76"},{url:"tags/GithubAction/index.html",revision:"95b11cfd4d0f222109575a68d8fd627c"},{url:"tags/index.html",revision:"fb8b33b0956e9eccfaa9a32feae77103"},{url:"tags/OneDrive/index.html",revision:"47ba87ca2aab672f5afd80d83f5ce47e"},{url:"tags/Replit/index.html",revision:"6cc5d564d5080599c903d74d8d5a03f7"},{url:"tags/SSH/index.html",revision:"c6f84338f4676da28011f8eda84a6b8e"},{url:"tags/ZeroTier/index.html",revision:"d61a33d965befdcc2a096a42dac71b98"},{url:"tags/作业/index.html",revision:"8a9eb30cc6be5223b6c4b4cd74b82874"},{url:"tags/图床/index.html",revision:"714c75e0491c8f3cecc90d4e4dd2b8ab"},{url:"tags/教程/index.html",revision:"456b738309e7d84c799b4b9a23d7f36b"},{url:"tags/教程/page/2/index.html",revision:"d6fddff3045aba0da69bbc45feb0bb35"},{url:"tags/日常/index.html",revision:"7771240505b76328951ba069a5f3474a"},{url:"tags/毕设/index.html",revision:"3daa493a3abafecd6068420fcbde1f2b"},{url:"tags/流水账/index.html",revision:"1f2f925d7f28ae6a773d6037fdf9eb50"},{url:"tags/白嫖/index.html",revision:"3f2a97eb6906e3639f58e3f051d310a7"},{url:"tags/白嫖/page/2/index.html",revision:"6dc114c30f18c908f1905792c4b0b210"},{url:"tags/知乎/index.html",revision:"a750bf29781f52b0a38195cdb00f6577"},{url:"tags/网盘/index.html",revision:"c7eb8ca9fc6ac8f6ca4aaf81fd481356"},{url:"tags/自动部署/index.html",revision:"bb1782bff6d262dd38ac250660b55cb8"},{url:"tags/记录/index.html",revision:"7a4840e2376bbfc525fa7f3c1129720e"},{url:"tags/设计/index.html",revision:"e757d2896de528842766c0bb5f0a581a"},{url:"tags/转载/index.html",revision:"aebc4d5fb548b46dbe992e3446793b06"},{url:"todo/index.html",revision:"95806aa84da0175a39298d350c0b8883"}],{})}));
//# sourceMappingURL=service-worker.js.map
