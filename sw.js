/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Crypto/2023年春秋杯网络安全联赛冬季赛/index.html","a2c002a7ef22c577b3e4d6be25c4d07f"],["/Crypto/2023第六届安洵杯/index.html","6cf4ee82430736bd4e54fe8331fae9cc"],["/Crypto/2024第一届VCTF纳新赛/index.html","f23e92186c25757207a26cb0d4f5f38b"],["/Crypto/CBC-Padding-Oracle-Attack/index.html","ea59d4f91368619d0df53067982ded85"],["/Crypto/LitCTF2024/index.html","b491eb9c0f84444e2badae74d0cfde64"],["/Crypto/MT19937实战/index.html","ecd6f24e6f5d5d82dc33dca462cea1b2"],["/Crypto/NKCTF2023/index.html","ac4343f27d14f330bf13d68883663fd9"],["/Crypto/NSSCTF-Round16/index.html","f13dbbaebf4d261926252b243260a42d"],["/Crypto/NSSCTF-Round17/index.html","3a7a3069db94e0ed15ed670394e55ca6"],["/Crypto/NSSCTF-Round18/index.html","a15634fbae101ee70930dfbbacb68bb8"],["/Crypto/RSA之共模攻击/index.html","e48f9d8ce1a7c1853c7bbdeeb5ef3699"],["/Crypto/SICTF-Round-3/index.html","0d4adf6f6ab68901e026430acb749ad0"],["/Crypto/Shamir门限方案/index.html","9a65553d0b6ed1e36d8964b32184bd7a"],["/Crypto/ctfshow元旦水友节/index.html","738bd69c6fa3154893e84fcde01b8b7f"],["/Crypto/再见CBC/index.html","40b587b6cf9bfe2e62c84c363fd84be9"],["/Crypto/古典杂记/index.html","30cdb7856853e2852227c8804fbc8f7d"],["/Crypto/湖南省网络攻防邀请赛初赛复现/index.html","cd3542b54249906aa3a4256cce35342a"],["/Crypto/第一届帕鲁杯-CTF挑战赛/index.html","b086c0f9e63c96b6ee92de298dc705c9"],["/Crypto/第十七届ciscn初赛/index.html","28e086a32c09d1627bcd199ff30ed0be"],["/Crypto/背包密码/index.html","4d1f5848f2ce9f5b6bd32316c2e7f1fe"],["/Crypto/青少年CTF擂台挑战赛-2024-Round-1/index.html","192e3c1a7f1f83e03f0bdd3ff98dde96"],["/about/index.html","039ae610d511944a56b114ecf98a62e4"],["/archives/2023/12/index.html","5893404f44ce0addfac75082d4b06e23"],["/archives/2023/index.html","42e161ee2a09ed5138b3cac7973f92cb"],["/archives/2024/01/index.html","bc29be3553eec7ce55a84c97ae898802"],["/archives/2024/02/index.html","d928cdbaa583934d0bb8b7b8fc79eaba"],["/archives/2024/03/index.html","62e41c5a58bc528344c56da107b86f67"],["/archives/2024/03/page/2/index.html","d2aab1d61b6dfa0a2e67b6d00d841d29"],["/archives/2024/04/index.html","30a981b0d0763460962b22d6164f538f"],["/archives/2024/05/index.html","0734811247cb9d746350c213de22e7ab"],["/archives/2024/06/index.html","9a5a646f774a46b88ba25827f6015e6d"],["/archives/2024/index.html","5bd8f09c2435f7dcf4f6c5375adeefe8"],["/archives/2024/page/2/index.html","3564d13f0787d090fc196f2adb4d43cb"],["/archives/2024/page/3/index.html","51df2ae0ca3678af02293431b8063c50"],["/archives/index.html","05d5d4c1e2fc339db63583e51c1b2995"],["/archives/page/2/index.html","c60cbef792769823ab5f596b75071a65"],["/archives/page/3/index.html","2e5071bba1e49bee2b1e4ebbd9a4cbe0"],["/categories/Crypto/index.html","8ae6ed02a7f30319bda648a59b2d12a5"],["/categories/Crypto/page/2/index.html","649084c3287968ddb956ecd62ee1f6b7"],["/categories/Crypto/page/3/index.html","bc6898d6f0a7419a3450050f018eddba"],["/categories/index.html","8c0457c198ea9b80784a1bb2b2e41907"],["/categories/杂记/index.html","ce2086040d40362d35dc509c34a3a7b8"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","a9beceffb7425293a8479e940c4ee0a3"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","07aa663bd4714b72e00e724a940463ee"],["/images/background1.jpg","9b89afec2fdf743f48ec3bf6b4db8b92"],["/images/background2.jpg","cb42889f8e8aa4f3c8a174a28089addf"],["/images/background3.jpg","a8976cf4a296f45880b29cc1c1ce293f"],["/images/background4.jpg","039b83cad6f0107728d482c24077716d"],["/images/background5.jpg","95b0bfb6832ff25e3498e135f5806d91"],["/images/background6.jpg","74e5f9a9a7b25dfda016f7c73fc90054"],["/images/background7.jpg","5767f7e0cf91fe219ba920ef5938a8ce"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/index.html","4c5deef6d732e2fc55e68f6893670c40"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/explosion.min.js","a65a14adaf402e0f5236adb2c7c3cb5d"],["/js/fireworks.js","61fc5a184f80b566f06f1a0fd7acb1ae"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","7dc7796a280ab49d353c112275f52d81"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.en.html","adc7d9bacfbef2bc60afd113947b2119"],["/live2d-widget/README.html","63a1ce5163917efeaec1c2cdfc13ced5"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","a1cce74b48eea6cdd15a9567f04065be"],["/live2d-widget/demo/demo.html","87b9f57b8a8f905f167991c7a33184d7"],["/live2d-widget/demo/login.html","0f10afabe0311239c281a7e9a91f1b0b"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/rollup.config.js","171b7912f3e5340c9fc61251ef193bd1"],["/live2d-widget/src/index.js","327f309d88198834dd4bd2fe6a606dc5"],["/live2d-widget/src/message.js","5f980402bfc065345253e6ce024dc1de"],["/live2d-widget/src/model.js","b5562a236eeda01308e5a4107e6ec80f"],["/live2d-widget/src/tools.js","fda693610457903a19c3861298fb416a"],["/live2d-widget/src/utils.js","2578501ad87a8d99ceec05d79fe2c64b"],["/live2d-widget/src/waifu-tips.js","e49236cc73dbcfda841588bba50dbfd3"],["/live2d-widget/waifu-tips.js","7ef813587dba0e4bc55c7ccafcaea531"],["/live2d-widget/waifu.css","d3c1302c311cd2e20841904a016a6427"],["/page/2/index.html","4fa33a80ddd704e6e789420c23fc0d3a"],["/page/3/index.html","71f5d032481d9243ca686b371ca70c3e"],["/sw-register.js","5c0e6c2b1a5340074ca6b85d5aa47b48"],["/tags/AES/index.html","fbbcf02d5f92861bb4ad51a4d0be75cc"],["/tags/Lattice/index.html","139676299511ad4139c6d42c49fa923e"],["/tags/MT19937/index.html","82957fb2b9ae03a13ef8ac35fde713c3"],["/tags/RSA/index.html","cb3b5fcb3446106527f8c62a8a252b0f"],["/tags/Wp/index.html","55fc8efe28995d5f2761bb0ec8703c8d"],["/tags/Wp/page/2/index.html","a91e5966ac70cdc6d7845d82977e1037"],["/tags/index.html","24c191c635f99360890af0335deeb6aa"],["/tags/sage/index.html","3cf8b2f942f50af035d88c07be787560"],["/tags/古典密码/index.html","9ef49594b8d125db69adbf46c1b3bb6d"],["/tags/密码知识/index.html","2dc608cdd3ca74e351de0ba0ed1b85d8"],["/杂记/Linux-里遇到的sage问题/index.html","e73fd921207304520eb4cc1e706eff08"]];
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
