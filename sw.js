/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Crypto/2023年春秋杯网络安全联赛冬季赛/index.html","a85205d9ead3f3ad2c23aab555f15000"],["/Crypto/2023第六届安洵杯/index.html","068959f68342f9dd0195d30c5cd66f6f"],["/Crypto/2024第一届VCTF纳新赛/index.html","7e8cd3d6465445a58958c258c73a0abb"],["/Crypto/2024羊城杯/index.html","c0b64ed4167b1bb15a0274178fed5e62"],["/Crypto/CBC-Padding-Oracle-Attack/index.html","24fc0b9b23ab93c2895d43890dea0d88"],["/Crypto/DASCTF-2024暑期挑战赛/index.html","07473fb0de4b8edf5306ed9ae3b461b2"],["/Crypto/DSA/index.html","7cf6fe349799403dfa2e6e59685ae778"],["/Crypto/LFSR初探/index.html","9e105f76b44e7526a50780fb53edecfd"],["/Crypto/LitCTF2024/index.html","50952f3d4c6712e214de3f22045b4773"],["/Crypto/MT19937实战/index.html","717355723b9430df89630d1071977fa8"],["/Crypto/NKCTF2023/index.html","8fac0ab01999290ff9092b0712ba1125"],["/Crypto/NSSCTF-Round16/index.html","a90ba0c05ac916dfd0c8e648704d5596"],["/Crypto/NSSCTF-Round17/index.html","fed02f159ac3247f1744d096f9fe7d06"],["/Crypto/NSSCTF-Round18/index.html","3a0241f48d0603f69955cf10dc791769"],["/Crypto/RSA之共模攻击/index.html","1cd9ed1f5b5db0731c6c43c40572fa5d"],["/Crypto/SICTF-Round-3/index.html","699b5f5aad37838fc3ae33c56b37b185"],["/Crypto/Shamir门限方案/index.html","d8dc7c8c71d7124d7dcf8989cbc392b3"],["/Crypto/WKCTF-2024/index.html","eb7221cdaf784522abadab656d8585b9"],["/Crypto/ctfshow元旦水友节/index.html","855870e334ad1f256f73aba710506a23"],["/Crypto/“近期的一些比赛”/index.html","24702c31e08386d073ea4cf29b4ae5f9"],["/Crypto/再见CBC/index.html","ae4d3a068b9d8ef843019296e9b5a260"],["/Crypto/古典杂记/index.html","5f0d6640393c0ee5dfb7287aa417ef4d"],["/Crypto/湖南省网络攻防邀请赛初赛复现/index.html","333745d791157da09cb66fafb1c68c98"],["/Crypto/第一届帕鲁杯-CTF挑战赛/index.html","cb25ed51e93e4ed26b9a0ac0e9ca8171"],["/Crypto/第十七届ciscn初赛/index.html","bb7d61d2fab98686a356d4b66de2959a"],["/Crypto/背包密码/index.html","0c8c8d36e2c57367fdc1b6c020c8a3dd"],["/Crypto/青少年CTF擂台挑战赛-2024-Round-1/index.html","a0f0113864a47af7b16a0e5bc81d99fa"],["/about/index.html","3646a46fbaf1609961facad3ca8473c6"],["/archives/2023/12/index.html","b8ef8884dc417256fec3c4a63cbff50c"],["/archives/2023/index.html","6afbb8337c553daf3527425f8b7b1bcc"],["/archives/2024/01/index.html","c2a37ae58dc999b48e574cd9c9389bf6"],["/archives/2024/02/index.html","33a70600a3c957df77376965e3e16a5a"],["/archives/2024/03/index.html","a8ebdfb178075a81f4bd5417e6832dba"],["/archives/2024/04/index.html","7205026225a9630b9a685e83278244f9"],["/archives/2024/05/index.html","e7d6cb239daf77c3013afa1399b807ab"],["/archives/2024/06/index.html","a36085fc8603ce6232c90916a48d1e0d"],["/archives/2024/07/index.html","4f810b0bc4b2a05587db476bc7a9da8e"],["/archives/2024/08/index.html","d5a9d57be16f18ddac7a62733ef9d434"],["/archives/2024/09/index.html","c0e1674a4f841dee8330f9a938aa2583"],["/archives/2024/index.html","c892a14ecc1e86fb8300b570ad5b552d"],["/archives/2024/page/2/index.html","371a6cb82b634004a6006136f409d8fc"],["/archives/2024/page/3/index.html","a366fd899d2c8897df0510bd61ff8564"],["/archives/index.html","547b0908f4350fdb37c04bd4b9a80b0b"],["/archives/page/2/index.html","e31dec40ac7e839e92164064ce15111b"],["/archives/page/3/index.html","b9915ad14a4330000c2d4c8fa0730ad9"],["/categories/Crypto/index.html","8a24d3ba4cc56420e54804bb5ee0a491"],["/categories/Crypto/page/2/index.html","7bdb5d49d86420e848cb4c04e4d49f05"],["/categories/Crypto/page/3/index.html","97586e770a780bb9fce5910e915df681"],["/categories/index.html","96b1336031948eb6e59584c9cb89477a"],["/categories/杂记/index.html","72eec5913a2a02a34f1471d80479ddb0"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","c20ee4bd6deffbcaf3a200d8b38aa53b"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","07aa663bd4714b72e00e724a940463ee"],["/images/background1.jpg","9b89afec2fdf743f48ec3bf6b4db8b92"],["/images/background2.jpg","cb42889f8e8aa4f3c8a174a28089addf"],["/images/background3.jpg","a8976cf4a296f45880b29cc1c1ce293f"],["/images/background4.jpg","039b83cad6f0107728d482c24077716d"],["/images/background5.jpg","95b0bfb6832ff25e3498e135f5806d91"],["/images/background6.jpg","74e5f9a9a7b25dfda016f7c73fc90054"],["/images/background7.jpg","5767f7e0cf91fe219ba920ef5938a8ce"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/index.html","722df62d73b8387852dba9312770358a"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/explosion.min.js","a65a14adaf402e0f5236adb2c7c3cb5d"],["/js/fireworks.js","61fc5a184f80b566f06f1a0fd7acb1ae"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","aa119b685cd221bf44121e2b8959a279"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","55973170413a5876b888497bca9c5754"],["/live2d-widget/README.en.html","adc7d9bacfbef2bc60afd113947b2119"],["/live2d-widget/README.html","63a1ce5163917efeaec1c2cdfc13ced5"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","a1cce74b48eea6cdd15a9567f04065be"],["/live2d-widget/demo/demo.html","87b9f57b8a8f905f167991c7a33184d7"],["/live2d-widget/demo/login.html","0f10afabe0311239c281a7e9a91f1b0b"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/rollup.config.js","171b7912f3e5340c9fc61251ef193bd1"],["/live2d-widget/src/index.js","327f309d88198834dd4bd2fe6a606dc5"],["/live2d-widget/src/message.js","5f980402bfc065345253e6ce024dc1de"],["/live2d-widget/src/model.js","b5562a236eeda01308e5a4107e6ec80f"],["/live2d-widget/src/tools.js","fda693610457903a19c3861298fb416a"],["/live2d-widget/src/utils.js","2578501ad87a8d99ceec05d79fe2c64b"],["/live2d-widget/src/waifu-tips.js","e49236cc73dbcfda841588bba50dbfd3"],["/live2d-widget/waifu-tips.js","7ef813587dba0e4bc55c7ccafcaea531"],["/live2d-widget/waifu.css","d3c1302c311cd2e20841904a016a6427"],["/page/2/index.html","1503b3190cd93ec12d4d741b3e6e20f7"],["/page/3/index.html","9fc76a6b2ffe214904de2d5d9c20be47"],["/sw-register.js","08e09e7650cae41b0f678dee86821230"],["/tags/AES/index.html","6cb4705876accec1565feb500864ee7c"],["/tags/DSA/index.html","4b381d66efbf6c7b590b4a828cd2fd27"],["/tags/HNP/index.html","e76c0820a71382fe5e19ceaa13d5c148"],["/tags/LFSR/index.html","b8d5d37a3bcd8eb493a9d3828c5e6b26"],["/tags/LWE/index.html","dc6d41cdc671e764e3d66ca54684e194"],["/tags/Lattice/index.html","d649f615f76971787645a5888340ed17"],["/tags/MITM/index.html","70e3c2ee1cc7a76def56bd8373640ba0"],["/tags/MT19937/index.html","0869d1508a63008a98a7f1c7033944dc"],["/tags/RSA/index.html","4327d8445c6506eeb77ab28f851b7238"],["/tags/Shamir/index.html","f7f337d78b38fbe09c64dc9c6cce6221"],["/tags/Sylvester/index.html","41db9f44f7bc307756c95e165aebd9f0"],["/tags/Wp/index.html","d48a9f38a562953ad756c4199650b23f"],["/tags/Wp/page/2/index.html","23c2c6038d7a741dd4793b824ad81f99"],["/tags/index.html","a2dec6f24f83a8d7d426d59d965fa807"],["/tags/sage/index.html","7e89be866ded3e944acf4f535f8e5680"],["/tags/二元copper/index.html","046fd5e8d37d8be9ba96137084baff40"],["/tags/古典密码/index.html","05c203e4750974319d082a9d05c90070"],["/tags/密码知识/index.html","2757335954d752185fa72e6cf9dc6acc"],["/tags/曲线/index.html","4564a3ad7c88ccfd146f3339e949b724"],["/tags/杂记/index.html","e2efb8d7450187bb2f0c831cdc9c0013"],["/tags/素数/index.html","b6ca2d580a36aacc3d92138fbdbd1530"],["/tags/背包密码/index.html","0f68f8fc5731d59ab427dfad30ed15a9"],["/杂记/Linux-里遇到的sage问题/index.html","30662f3aa964cffb81a92a8f3d1385e5"]];
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
