/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Crypto/2023年春秋杯网络安全联赛冬季赛/index.html","788e037b922bd05407f9abe7f6c75adb"],["/Crypto/2023第六届安洵杯/index.html","fb1c0129810726a827707bb98f1ef9d8"],["/Crypto/2024第一届VCTF纳新赛/index.html","6185566a2d04a93ff8267724685c33db"],["/Crypto/2024羊城杯/index.html","a6c9148097c2fc853bb6c255938a47bf"],["/Crypto/CBC-Padding-Oracle-Attack/index.html","23a6cec94e179a0660d6fdd0e3a03fc1"],["/Crypto/DASCTF-2024暑期挑战赛/index.html","bb795bd5af31f689bd8dd3b630ffdd01"],["/Crypto/DSA/index.html","17aea6175c3b077d703c3bf454ee335b"],["/Crypto/LFSR初探/index.html","868e933472a9ad32fbbc147033ced269"],["/Crypto/LitCTF2024/index.html","bceb2c2d22a7073cbf8605ad9a167079"],["/Crypto/MT19937实战/index.html","9def10312be2a97f8d365d95fb47858e"],["/Crypto/NKCTF2023/index.html","9d9cbffae73889dd040fd6cf1d408aff"],["/Crypto/NSSCTF-Round16/index.html","29bdd1833676bf9c2cfc4521a1dda631"],["/Crypto/NSSCTF-Round17/index.html","bfe56c9e35420b94f9437baa97218297"],["/Crypto/NSSCTF-Round18/index.html","26012e58c438c18acc51c36d165ff0f8"],["/Crypto/RSA之共模攻击/index.html","b3c885e7b7fa0f5636a83ccca12be9ac"],["/Crypto/SCTF2024/index.html","66de61cfe8e5da60b6b03059b87a9915"],["/Crypto/SICTF-Round-3/index.html","1a1836633d1a74e6aa502fec6c9acbd5"],["/Crypto/Shamir门限方案/index.html","c6aa486ab52e7f3a8f283b54c24a5a62"],["/Crypto/WKCTF-2024/index.html","2f5543682c4d1dc088a5ff1816346631"],["/Crypto/ctfshow元旦水友节/index.html","7a29a5ba5f5371631d04c6664d6da07c"],["/Crypto/“近期的一些比赛”/index.html","c10f335dd0a1405cfada252576870570"],["/Crypto/再见CBC/index.html","689daaeb7a0597335a2d0aa25d45d968"],["/Crypto/古典杂记/index.html","ccd3c653bfa4f0076f4a3df329bf8c1a"],["/Crypto/湖南省网络攻防邀请赛初赛复现/index.html","53137ba69b7a47da26c8c43a2768c617"],["/Crypto/第一届帕鲁杯-CTF挑战赛/index.html","61b91a2f473c097c74043cb6d79314d8"],["/Crypto/第十七届ciscn初赛/index.html","ead052436068ced0d0328800db9ed2eb"],["/Crypto/背包密码/index.html","137c82d9ca8cee34b6075f38e9f1fec8"],["/Crypto/青少年CTF擂台挑战赛-2024-Round-1/index.html","d29f2f974bc2b23b05b57b817a30feb1"],["/about/index.html","347ff549eafed37fcbf844ad9c4696a8"],["/archives/2023/12/index.html","e66ce9dc8d23c26ee9b7be242c0aea3f"],["/archives/2023/index.html","4909b47a858d8800d29357437d5d09ea"],["/archives/2024/01/index.html","0eaff505ca2965664e6f7745fc7f97a3"],["/archives/2024/02/index.html","26b72d929e35749992ce93f26811026f"],["/archives/2024/03/index.html","c722c36f0b50ce72ee632675eb8f76c5"],["/archives/2024/04/index.html","fb6258386890ca2fd6d40e290d09641e"],["/archives/2024/05/index.html","ac6cb392be45b05bc711f26ccc47d713"],["/archives/2024/06/index.html","6130c9825567a482d03dbb121a36eb3d"],["/archives/2024/07/index.html","eac1f40136f446484afbbd05ede3f0a8"],["/archives/2024/08/index.html","82be986cca503a60fed5d58b8497f03a"],["/archives/2024/09/index.html","bdb9dd9199a9cb95308f12bf61f9cb88"],["/archives/2024/11/index.html","bfa08e5905be8999e0a03b2bfa4c8058"],["/archives/2024/index.html","14b9d1cce491d094de1f18a46cf0ee3a"],["/archives/2024/page/2/index.html","8cbc4e5ab45879dd2732042d7ed32b4d"],["/archives/2024/page/3/index.html","a63c28e0eeedfbcd9279e926add65a18"],["/archives/index.html","e1590aa884ea5cc90ecb5c25dd906d41"],["/archives/page/2/index.html","458ee6f5f2211ad7b67829a85d980707"],["/archives/page/3/index.html","5c8d839d6bf3d5eacdb8cd4f395464d1"],["/categories/Crypto/index.html","5c961e4db33c3ac3203bf4bc408f09f2"],["/categories/Crypto/page/2/index.html","27c53a7d14d82d5702fcb3ab89415c06"],["/categories/Crypto/page/3/index.html","e5131c6a7f865e26e2ec0c7d640aa8b3"],["/categories/index.html","5411c2772dcdfcd124931b30f1bc4c7c"],["/categories/杂记/index.html","9f8feb563490e587bd5f623fca62e98a"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","fd7e05a9e36be4cb446aa2bdf95dd147"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","07aa663bd4714b72e00e724a940463ee"],["/images/background1.jpg","9b89afec2fdf743f48ec3bf6b4db8b92"],["/images/background2.jpg","cb42889f8e8aa4f3c8a174a28089addf"],["/images/background3.jpg","a8976cf4a296f45880b29cc1c1ce293f"],["/images/background4.jpg","039b83cad6f0107728d482c24077716d"],["/images/background5.jpg","95b0bfb6832ff25e3498e135f5806d91"],["/images/background6.jpg","74e5f9a9a7b25dfda016f7c73fc90054"],["/images/background7.jpg","5767f7e0cf91fe219ba920ef5938a8ce"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/index.html","10054ab08a1c861b87c8ef03cfd569d9"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/explosion.min.js","a65a14adaf402e0f5236adb2c7c3cb5d"],["/js/fireworks.js","61fc5a184f80b566f06f1a0fd7acb1ae"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","a0598c969bf3b8407952612e67bd5e3b"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","23aceb9216c6cf5be2e6e84313754b23"],["/live2d-widget/README.en.html","adc7d9bacfbef2bc60afd113947b2119"],["/live2d-widget/README.html","63a1ce5163917efeaec1c2cdfc13ced5"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","a1cce74b48eea6cdd15a9567f04065be"],["/live2d-widget/demo/demo.html","87b9f57b8a8f905f167991c7a33184d7"],["/live2d-widget/demo/login.html","0f10afabe0311239c281a7e9a91f1b0b"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/rollup.config.js","171b7912f3e5340c9fc61251ef193bd1"],["/live2d-widget/src/index.js","327f309d88198834dd4bd2fe6a606dc5"],["/live2d-widget/src/message.js","5f980402bfc065345253e6ce024dc1de"],["/live2d-widget/src/model.js","b5562a236eeda01308e5a4107e6ec80f"],["/live2d-widget/src/tools.js","fda693610457903a19c3861298fb416a"],["/live2d-widget/src/utils.js","2578501ad87a8d99ceec05d79fe2c64b"],["/live2d-widget/src/waifu-tips.js","e49236cc73dbcfda841588bba50dbfd3"],["/live2d-widget/waifu-tips.js","7ef813587dba0e4bc55c7ccafcaea531"],["/live2d-widget/waifu.css","d3c1302c311cd2e20841904a016a6427"],["/page/2/index.html","72c022289394ef979b85647606c65a69"],["/page/3/index.html","ecbf1b6e424983e3400f10b24fdeae5e"],["/sw-register.js","3db93a909263f1cada0bb361466c164c"],["/tags/AES/index.html","4571edadbc27cd3557ae004c0c9b241d"],["/tags/DSA/index.html","c60f030e310fce71ee609c75c88d0163"],["/tags/Dual-RSA/index.html","711b63b5fc8c5522b880f0f0ec482c74"],["/tags/HNP/index.html","a4e003090f54f3e0d47f8c096c5234d1"],["/tags/LFSR/index.html","50dee50ef32b3432f6a3cd97651f10f9"],["/tags/LWE/index.html","fd2ad644108d953abea93c9225b04c45"],["/tags/Lattice/index.html","1d2c6c9b8ae486da3b645f52970fb55f"],["/tags/MITM/index.html","807a75ff2512fc0717509edc8e235f80"],["/tags/MT19937/index.html","1d21a81593c9bbf65737d9176af0d978"],["/tags/RSA/index.html","cd0a576e2edff1a96719c7f671da0d8b"],["/tags/Shamir/index.html","59a4941ad3204cf82593fed71389b85b"],["/tags/Sylvester/index.html","224f7fc3cf1e46a5e80cb35f1da271b0"],["/tags/Wp/index.html","e038db83bc9c7e18ea0b805824ce934d"],["/tags/Wp/page/2/index.html","18b79369191d5b640abc68dc1e434579"],["/tags/index.html","3f6a5a09287e146ff7af7a64ffcd6ccb"],["/tags/sage/index.html","c9c02339dac4c1621ddc33ae1d232027"],["/tags/二元copper/index.html","95b87b3e52ae57014be070fe0a4ba0c7"],["/tags/古典密码/index.html","2814e98423bcc8e26662a7dace9aabf8"],["/tags/密码知识/index.html","88aa4a3f2deee4330cdaabdcc524a7c3"],["/tags/曲线/index.html","02b085c66fb2a5b713401b5fcd5efc6b"],["/tags/杂记/index.html","664fb3fe80d9e0ddcf1fe76f860f7126"],["/tags/素数/index.html","c1ad516ed37f237a8535daedde34769a"],["/tags/背包密码/index.html","428290faa23ac78943d25b9ea61a4029"],["/杂记/Linux-里遇到的sage问题/index.html","d359d42316666ae2714dd000cb4d9a12"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
