if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let f={};const s=e=>d(e,c),l={module:{uri:c},exports:f,require:s};i[c]=Promise.all(a.map((e=>l[e]||s(e)))).then((e=>(r(...e),f)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"d89bcca76779d0a20babcc6f425dbd6f"},{url:"about/index.html",revision:"583d112390adedb0f68be50848ee4252"},{url:"archives/2022/02/index.html",revision:"823083b7584417215e85ffb14d41d11a"},{url:"archives/2022/03/index.html",revision:"d30c8da0f2e175f01bb4850a4a5ea487"},{url:"archives/2022/04/index.html",revision:"648830ab35c92057fb2a3cb9c18820ad"},{url:"archives/2022/05/index.html",revision:"f8c67bb7abed3c334a69679063d78593"},{url:"archives/2022/06/index.html",revision:"368bc533ddb52a1cdff6ba4437f964ea"},{url:"archives/2022/07/index.html",revision:"ebeaaec660f6e1266e4168e3bf2cbea2"},{url:"archives/2022/08/index.html",revision:"7d254ffd6b93849a6a8bb0a1cf0d6bf9"},{url:"archives/2022/index.html",revision:"c5ee7fff2d01470ed66b3b302343aa4e"},{url:"archives/2022/page/2/index.html",revision:"487e4b5a9fa5eacf51cbdc3a4034aec2"},{url:"archives/2022/page/3/index.html",revision:"5de7de9537f439620b1c3da6cf34820b"},{url:"archives/index.html",revision:"1d7fb2f98b2daa7258e3867fe25f53d8"},{url:"archives/page/2/index.html",revision:"37bb8216274c725407c1f06442ec2ec1"},{url:"archives/page/3/index.html",revision:"ea91b9714291ed40712193805360afe7"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"baidu_verify_code-otzUa1ZtqP.html",revision:"7c372ad86856bcbe32219244e9adfb1c"},{url:"books/index.html",revision:"790b6df5583495b9d8fe79ac8f19c5b9"},{url:"categories/index.html",revision:"d97004ffa1e36ed81006e7280a6adaa4"},{url:"cc/index.html",revision:"04bcbdbc5079dbee2402051e40ea02cd"},{url:"css/index.css",revision:"c58862bfa2c9f90ddbd8ff1655a8a71d"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/2019/index.html",revision:"6dac7597ed64af9136e0bed9798f442e"},{url:"gallery/2021/index.html",revision:"3cab8604566869e601c656e564c5756c"},{url:"gallery/bing/index.html",revision:"ac52ef7e4a4dd31355c721c2c2fa6d82"},{url:"gallery/index.html",revision:"435ef13921577b5f73a07f83e2ec7c02"},{url:"gallery/snap/index.html",revision:"da5366605351154c7afa40442b120ae4"},{url:"games/index.html",revision:"e4dd6d0715fba874002dc0114c4ef3dd"},{url:"googled0825e7ee19f4e3c.html",revision:"6d835625b8b09a921b6606f72de8fc09"},{url:"img/0.jpg",revision:"898e8d40308026856bde86bb1e3f17d0"},{url:"img/404.gif",revision:"c9b1978501090d951cb50a8a16f72acb"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/bg.jpg",revision:"b6fcd7a5e4d4ab42308c3a5f071df020"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"0a22de1ad4055a745a4a03d42e8be198"},{url:"img/wx.png",revision:"c09a7b333859cf29f044986323bc126c"},{url:"img/zfb.png",revision:"4361886090722d2c7826dd09faf1e1e2"},{url:"index.html",revision:"ef5493facd084a23be2cd3d37654ecbc"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/rightmenu.js",revision:"9cefd9d45a340cda5a751d117c51dcd5"},{url:"js/search/algolia.js",revision:"af567f93a5504310fe16fe368a4ee89e"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"movies/index.html",revision:"7a436c07c7211ee1f2903c16799a73a5"},{url:"musics/index.html",revision:"752713d1d1d646128f6ea1b697111503"},{url:"news/index.html",revision:"a6eb92b9dfb143e5c4e456e3dda21b06"},{url:"news/index.js",revision:"cb70b1fc3e21406ffe95f378101f713d"},{url:"news/news.css",revision:"603573b9cdffdb0e4720a0ff2b9d0452"},{url:"news/README.html",revision:"ebc77027d1c07704ffed78da52e72c02"},{url:"p/13bd.html",revision:"9a359b4fea313d918880f142edad1180"},{url:"p/13d3.html",revision:"42b71698af04cd0fec8c9f4f2c49666c"},{url:"p/15af.html",revision:"6ac132d1d7c3b9e8f791a1213ab8ec04"},{url:"p/1849.html",revision:"c8b947b24df30f3659259a4aa96e36f1"},{url:"p/3412.html",revision:"133add97fa6e946705babf7640cdd3f1"},{url:"p/34c.html",revision:"952e375492dae2e20ef45fbf3484d870"},{url:"p/439d.html",revision:"1fecd80f52ddaf4a43c4dac12dea974c"},{url:"p/799e.html",revision:"41059ef19901373788d190168a1a29f3"},{url:"p/7e53.html",revision:"26b23dbeae9e25f91e3aaa8f7149b325"},{url:"p/98.html",revision:"873150f0359d25f1f4d43f5c7ad41b55"},{url:"p/a4f.html",revision:"fd40bfda08afb362a9fc7c38994f2c06"},{url:"p/a5af.html",revision:"ed77202e5902b8a37073ce374fb32d35"},{url:"p/a7fa.html",revision:"4a5ffa129d0e1b59363e8c975582ebc5"},{url:"p/a8f2.html",revision:"6e505beb7a948494443b433629405d25"},{url:"p/a95e.html",revision:"3073b664af3fc5d6d99cc7663f642a8d"},{url:"p/aa4a.html",revision:"07f119b0f72df760e4fa0d61acb44183"},{url:"p/b147.html",revision:"994453d8e4670e1608c2364db99f61fd"},{url:"p/c99d.html",revision:"20e9e57d23a0f34b4a3e06a38a88e016"},{url:"p/cb20.html",revision:"d291cb93da203a8d0b43122fbeff86cf"},{url:"p/dc3a.html",revision:"8b314b612ac5debc76ef6b6b0d691b90"},{url:"p/f0c0.html",revision:"ae1086d47843e430e516ca6c387fb797"},{url:"page/2/index.html",revision:"e92762085ef5187f82f34910bc95106f"},{url:"page/3/index.html",revision:"9ab53dbe158c450781b444866047e8a2"},{url:"random.html",revision:"f494674d04d355f6273953d9e4641cbe"},{url:"tags/Alist/index.html",revision:"f9d6edcc03631a30c2eafd9953cef2c8"},{url:"tags/Azure/index.html",revision:"760cb315d0dc59568ce7229dfda2bba2"},{url:"tags/Docker/index.html",revision:"e8daae9a8f072034d152ba20b3a6ee19"},{url:"tags/Github/index.html",revision:"0811e273c2bf0a23406f5c4a6af2ee18"},{url:"tags/GithubAction/index.html",revision:"2976390e3906065c3b80e9fe3ba8eadc"},{url:"tags/index.html",revision:"99ad4cdb8a6b2070111117a83ce33d34"},{url:"tags/OneDrive/index.html",revision:"09313cb5766a474a9667928e1b513342"},{url:"tags/Replit/index.html",revision:"7c2fc26e9259f7cb50c0fabbcfc72d89"},{url:"tags/SSH/index.html",revision:"bff23cc433efb7c3289fc83057598b68"},{url:"tags/ZeroTier/index.html",revision:"1985c7308d888451ad255c43e0e1cdd4"},{url:"tags/作业/index.html",revision:"a2156c1fd806be1c20ee1e1d5045c068"},{url:"tags/图床/index.html",revision:"661a5381a8193daf73842aa77442bd58"},{url:"tags/教程/index.html",revision:"19737184406351b8abb153c6bc328e6c"},{url:"tags/教程/page/2/index.html",revision:"85928637a8e86bf32de5d9f9e51733aa"},{url:"tags/日常/index.html",revision:"de747622bf563423ec9b3bfda862c179"},{url:"tags/毕设/index.html",revision:"fb2f8b9f50ff2f76c699b722c9e5e2e1"},{url:"tags/流水账/index.html",revision:"20ca9410b5432770f9975f58e5c357bc"},{url:"tags/白嫖/index.html",revision:"798457a38e2996fdfba74e2f670cee9f"},{url:"tags/白嫖/page/2/index.html",revision:"ccffbaf6ffe94a1605fdab654dd96644"},{url:"tags/知乎/index.html",revision:"43dd1b5fa29b6d5d1c83451b4b11d5bd"},{url:"tags/网盘/index.html",revision:"8afe68cb183f55299a276d6653048c8c"},{url:"tags/自动部署/index.html",revision:"af15d8ed4d6eb14f22e0f73a169f0ff7"},{url:"tags/记录/index.html",revision:"2557e8537503b17eb9637de6ce6026ea"},{url:"tags/设计/index.html",revision:"be28d5d5eed2c75bd5b3cbed8c93be3c"},{url:"tags/转载/index.html",revision:"1f5c98d5a14c513333ba8a0bce1d7204"},{url:"todo/index.html",revision:"9325f5174a1020aab2da753c961b6c0f"}],{})}));
//# sourceMappingURL=service-worker.js.map
