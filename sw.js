/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Crypto/2023年春秋杯网络安全联赛冬季赛/index.html","cff14e559d65714e265354d4e9992ad5"],["/Crypto/2023第六届安洵杯/index.html","69437d2a1d9d728cc332805e9a129e1f"],["/Crypto/2024第一届VCTF纳新赛/index.html","ceb895139fdf7e7afec779ae9568f1ba"],["/Crypto/2024羊城杯/index.html","2532b1337b2ee5c6a951245898c5e5f3"],["/Crypto/CBC-Padding-Oracle-Attack/index.html","ed328f854bf04e62a43f8fae8103620e"],["/Crypto/DASCTF-2024暑期挑战赛/index.html","ab67d21c1b9b470898b524bfeb8e0449"],["/Crypto/DSA/index.html","cf4c2af3e2aee857047d0f614ade3714"],["/Crypto/LFSR初探/index.html","5c75074313adf1df83aa71de6c3b6733"],["/Crypto/LitCTF2024/index.html","5c2c0880fda6c9ca2f2d05a781775942"],["/Crypto/MT19937实战/index.html","8c339e04c6d42b08e4b247f919acf9ca"],["/Crypto/NKCTF2023/index.html","3c1debabfaae1490c0adcf5bddeefaac"],["/Crypto/NSSCTF-Round16/index.html","9881f0ac83a8dfd1fabe10bff1908f6e"],["/Crypto/NSSCTF-Round17/index.html","4042c384b263f6702f9ab656fc1c14d5"],["/Crypto/NSSCTF-Round18/index.html","202823130b66de65853fc3a71a232b5e"],["/Crypto/RSA之共模攻击/index.html","3e8205bf0f526193101b95195b8d637c"],["/Crypto/SICTF-Round-3/index.html","4e1604827e9d24f550089cd3777f79ed"],["/Crypto/Shamir门限方案/index.html","cea03939244d809e8f3a6859c9bc99d4"],["/Crypto/WKCTF-2024/index.html","fe319be7450ceee863382c2aacabfa10"],["/Crypto/ctfshow元旦水友节/index.html","b9f195cccbf1e3cde98fcffb8eed0574"],["/Crypto/“近期的一些比赛”/index.html","cdfa391f47e109470a6abd29762d49b5"],["/Crypto/再见CBC/index.html","202b5aabb1cc5298a2b8bb8c620e6271"],["/Crypto/古典杂记/index.html","6891a401f2e50513b59b3cd25087bae0"],["/Crypto/湖南省网络攻防邀请赛初赛复现/index.html","e725797b49a3f3388fb76906a18eeee4"],["/Crypto/第一届帕鲁杯-CTF挑战赛/index.html","54857b3a0de448b992ab11284420bebb"],["/Crypto/第十七届ciscn初赛/index.html","57388fc500485065df62ecd4220cb497"],["/Crypto/背包密码/index.html","4d4616eeca4adf3d71549ac79a56abad"],["/Crypto/青少年CTF擂台挑战赛-2024-Round-1/index.html","1ce9860ede782835df1ca566b2479387"],["/about/index.html","0b77e17a9cf75c3fcce546f288aeef5f"],["/archives/2023/12/index.html","4ccf992ccd60d419eafa2d5afdf3186a"],["/archives/2023/index.html","ee43f471296920e0d32a6d3a020ea9ec"],["/archives/2024/01/index.html","af51b556de4eff88b631c3265262255f"],["/archives/2024/02/index.html","cf8b579f61cc4e454449d00343622aec"],["/archives/2024/03/index.html","a545edcc01ff85d54d7663f0f392545b"],["/archives/2024/04/index.html","03841d8e6ab1c79bf4c403157c3c1773"],["/archives/2024/05/index.html","0458d6a147d6e6962c3c2b7125a5d46c"],["/archives/2024/06/index.html","5fca24bc7e7f343ba5daf3f7877fd7ff"],["/archives/2024/07/index.html","b98d7f8260e62257c543d2d53ac81228"],["/archives/2024/08/index.html","97a19bf992dc9373d86d11a2ce07ae1c"],["/archives/2024/09/index.html","97eb2674244c5fefa626191be552171f"],["/archives/2024/index.html","24a48782d8a0e60032475c985c09f295"],["/archives/2024/page/2/index.html","7175590b20e6f70ec9a13e0e666df58f"],["/archives/2024/page/3/index.html","b9626fd4db5af20b809270c5a88eb6e0"],["/archives/index.html","558948c3e1f9e2c3787e3c844f98444b"],["/archives/page/2/index.html","08974828765a7c9ef46b8f6a2478025f"],["/archives/page/3/index.html","3803706469f134ff1c506c20ebf3a73d"],["/categories/Crypto/index.html","e3af541ff7812c4b284154cc87af7ac1"],["/categories/Crypto/page/2/index.html","0775a036eaf0cd9cb4f463d487fab25f"],["/categories/Crypto/page/3/index.html","0b43632fa1bf9df0009b14ff0bea4446"],["/categories/index.html","3ecffa1106c2ec6194f68a7bacebacf4"],["/categories/杂记/index.html","18fd4deb97865b44baa90ca8dff4f570"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","c20ee4bd6deffbcaf3a200d8b38aa53b"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","07aa663bd4714b72e00e724a940463ee"],["/images/background1.jpg","9b89afec2fdf743f48ec3bf6b4db8b92"],["/images/background2.jpg","cb42889f8e8aa4f3c8a174a28089addf"],["/images/background3.jpg","a8976cf4a296f45880b29cc1c1ce293f"],["/images/background4.jpg","039b83cad6f0107728d482c24077716d"],["/images/background5.jpg","95b0bfb6832ff25e3498e135f5806d91"],["/images/background6.jpg","74e5f9a9a7b25dfda016f7c73fc90054"],["/images/background7.jpg","5767f7e0cf91fe219ba920ef5938a8ce"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/index.html","7d11fe483be0dabfdfbfebad4ac8dee8"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/explosion.min.js","a65a14adaf402e0f5236adb2c7c3cb5d"],["/js/fireworks.js","61fc5a184f80b566f06f1a0fd7acb1ae"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","aa119b685cd221bf44121e2b8959a279"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","6b571b03d51087309cbbe38f8e1d3804"],["/live2d-widget/README.en.html","adc7d9bacfbef2bc60afd113947b2119"],["/live2d-widget/README.html","63a1ce5163917efeaec1c2cdfc13ced5"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","a1cce74b48eea6cdd15a9567f04065be"],["/live2d-widget/demo/demo.html","87b9f57b8a8f905f167991c7a33184d7"],["/live2d-widget/demo/login.html","0f10afabe0311239c281a7e9a91f1b0b"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/rollup.config.js","171b7912f3e5340c9fc61251ef193bd1"],["/live2d-widget/src/index.js","327f309d88198834dd4bd2fe6a606dc5"],["/live2d-widget/src/message.js","5f980402bfc065345253e6ce024dc1de"],["/live2d-widget/src/model.js","b5562a236eeda01308e5a4107e6ec80f"],["/live2d-widget/src/tools.js","fda693610457903a19c3861298fb416a"],["/live2d-widget/src/utils.js","2578501ad87a8d99ceec05d79fe2c64b"],["/live2d-widget/src/waifu-tips.js","e49236cc73dbcfda841588bba50dbfd3"],["/live2d-widget/waifu-tips.js","7ef813587dba0e4bc55c7ccafcaea531"],["/live2d-widget/waifu.css","d3c1302c311cd2e20841904a016a6427"],["/page/2/index.html","5c8efca0a2f83a7cc0688a52f1cb1caf"],["/page/3/index.html","a8914ca00b4be23bdbb34b7d7f60a69c"],["/sw-register.js","13ae34ea234a53e636fc38e177c3f025"],["/tags/AES/index.html","6747f40c41edd6788bacbc1f963604f1"],["/tags/DSA/index.html","1a63a76d92ec8e06f0b1610d31b46fa5"],["/tags/HNP/index.html","3811bf4c26522a7dc0c1fbbdef07636a"],["/tags/LFSR/index.html","35682f3b6c76f50d1cea533579eb7b80"],["/tags/LWE/index.html","0c8147f6f82f589c48d116f3f4e2f33d"],["/tags/Lattice/index.html","66d2d78ca44cf6cdf78216b98a308c3d"],["/tags/MITM/index.html","d1350212527a5ece4e50822adeea4bfd"],["/tags/MT19937/index.html","aa25c99320d8df3fea8c504432e0a344"],["/tags/RSA/index.html","bd653f0d2889925a5f1565cdfb203eb2"],["/tags/Shamir/index.html","5f6181e9912c09fe0d8cafc749bd89e5"],["/tags/Sylvester/index.html","c7663a19fa96a4f6debd71b264f1dec2"],["/tags/Wp/index.html","6bc3ce96d23b76b3964447799cbca756"],["/tags/Wp/page/2/index.html","de39750341e0c386a0490a85f4a1a21d"],["/tags/index.html","6987cc8cc5188562cd081dfe7f8b5982"],["/tags/sage/index.html","023a24946370d497d4507cf4a30b82ff"],["/tags/二元copper/index.html","83e8c46e6504c1e9a740c490062e2578"],["/tags/古典密码/index.html","5ae07e7ee8bb7964b3bfbcb501026389"],["/tags/密码知识/index.html","15c706d94798cc2b70b21a782079d93c"],["/tags/曲线/index.html","1860368d6830e2b42cc059ae1030dd33"],["/tags/杂记/index.html","95255161174c0926bc078c6f07f68afa"],["/tags/素数/index.html","d1a40a4eb08f2ac1df56296703e739c4"],["/tags/背包密码/index.html","b6cdaea43c40f7ece2ea15b9a1f73ed9"],["/杂记/Linux-里遇到的sage问题/index.html","741e8b84618223a762658027fd9d1f12"]];
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
