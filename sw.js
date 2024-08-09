/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Crypto/2023年春秋杯网络安全联赛冬季赛/index.html","6e4fec359c38f396cf9bae9c897e2135"],["/Crypto/2023第六届安洵杯/index.html","975af63d5f00d4fbbba0fd3fe1b5df70"],["/Crypto/2024第一届VCTF纳新赛/index.html","5a6b722dd7c7798b4d5737786897805d"],["/Crypto/CBC-Padding-Oracle-Attack/index.html","17a1e842b5ad95378942ca2b9a9a8b73"],["/Crypto/DASCTF-2024暑期挑战赛/index.html","4bb50f911a391ec9430337b793dd5248"],["/Crypto/DSA/index.html","8dd09321f7b2b172ea36d6c45b779828"],["/Crypto/LitCTF2024/index.html","a1dec58365ac83977048c25287dae017"],["/Crypto/MT19937实战/index.html","bb810d9d74fdeacd1782f8a8a81a8609"],["/Crypto/NKCTF2023/index.html","a55c4daa0ab66433c7ec8ddc35f820af"],["/Crypto/NSSCTF-Round16/index.html","460be6973242adfab93458857f497785"],["/Crypto/NSSCTF-Round17/index.html","0abf475353a0f8d21fb1b0257a222cdc"],["/Crypto/NSSCTF-Round18/index.html","069f6bbd13c06cd98cf3501570b97e98"],["/Crypto/RSA之共模攻击/index.html","a357d7a0f68288847afb458c8d7fbac5"],["/Crypto/SICTF-Round-3/index.html","3719e15dd63d63f4f388874f0136ac14"],["/Crypto/Shamir门限方案/index.html","2a1be4da20228be2f6f0848177bd1b57"],["/Crypto/WKCTF-2024/index.html","874b2180c0cde613179d36607e021feb"],["/Crypto/ctfshow元旦水友节/index.html","33748836d7bcfa78ce6b2f34d057818a"],["/Crypto/再见CBC/index.html","0e3c87485c67305bcb49bb6c976a20cd"],["/Crypto/古典杂记/index.html","1984b904357c48afb4727a557d24c812"],["/Crypto/湖南省网络攻防邀请赛初赛复现/index.html","0abd7e0c6bdaa755fdb2f33a9f4f5c6d"],["/Crypto/第一届帕鲁杯-CTF挑战赛/index.html","7dc1cf82b297bb5e615a914579fb2e8d"],["/Crypto/第十七届ciscn初赛/index.html","41956211a76fe5d60ddc3642e7808549"],["/Crypto/背包密码/index.html","656f64992abf833b414aa281bf59d593"],["/Crypto/青少年CTF擂台挑战赛-2024-Round-1/index.html","362ee66d50b0d262cb0c58a5d59e67bf"],["/about/index.html","869bb8cd8920d4439c0e49fd6a26de24"],["/archives/2023/12/index.html","73c46b872dc2907a0da35c3c9b7a7dbe"],["/archives/2023/index.html","c42884e942a0b1e2efcd4bb325c3b900"],["/archives/2024/01/index.html","4fd95d1ae79ddbb3d4121db1d090e91e"],["/archives/2024/02/index.html","47378918c84a6d80d803f485cedf3dcf"],["/archives/2024/03/index.html","cdaa72d8bae6e132c063f3e04322cd19"],["/archives/2024/03/page/2/index.html","4d58f0052697b6e79413f572a0df619f"],["/archives/2024/04/index.html","7597bffa17a01231f2f5a8e664b0cbc7"],["/archives/2024/05/index.html","a1b65b30100351fb9f75f91a7054d293"],["/archives/2024/06/index.html","6be8e5cdc6a2a9d62fdbe3edd8a3c6b5"],["/archives/2024/07/index.html","036040729823a9680c6dc529958f6e1a"],["/archives/2024/index.html","573be2fff66b0d87dc52bf806c0a1f07"],["/archives/2024/page/2/index.html","6740139e54941dc6c02ab457a731a120"],["/archives/2024/page/3/index.html","7c91a06fd29d8358be63853ac41eb78e"],["/archives/index.html","eb72f02565e88a1555047d397cb9e34d"],["/archives/page/2/index.html","823a41542c5e9b955991949a2e39b134"],["/archives/page/3/index.html","65cc1259c675d5ec7f517c9130bed71f"],["/categories/Crypto/index.html","88830e8af10c19f78155e81488b456be"],["/categories/Crypto/page/2/index.html","01b2733e2799eb91a1332b92cd5b6c19"],["/categories/Crypto/page/3/index.html","84b200bb44b20c73adc54ad7beab0922"],["/categories/index.html","c85ba9491eac771a49e2af3603f0a83f"],["/categories/杂记/index.html","81240c1a53f2070ac41429ef8953887f"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","a9beceffb7425293a8479e940c4ee0a3"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","07aa663bd4714b72e00e724a940463ee"],["/images/background1.jpg","9b89afec2fdf743f48ec3bf6b4db8b92"],["/images/background2.jpg","cb42889f8e8aa4f3c8a174a28089addf"],["/images/background3.jpg","a8976cf4a296f45880b29cc1c1ce293f"],["/images/background4.jpg","039b83cad6f0107728d482c24077716d"],["/images/background5.jpg","95b0bfb6832ff25e3498e135f5806d91"],["/images/background6.jpg","74e5f9a9a7b25dfda016f7c73fc90054"],["/images/background7.jpg","5767f7e0cf91fe219ba920ef5938a8ce"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/index.html","5b0f6d91085a8997c3e3cec07669573d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/explosion.min.js","a65a14adaf402e0f5236adb2c7c3cb5d"],["/js/fireworks.js","61fc5a184f80b566f06f1a0fd7acb1ae"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","7dc7796a280ab49d353c112275f52d81"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.en.html","adc7d9bacfbef2bc60afd113947b2119"],["/live2d-widget/README.html","63a1ce5163917efeaec1c2cdfc13ced5"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","a1cce74b48eea6cdd15a9567f04065be"],["/live2d-widget/demo/demo.html","87b9f57b8a8f905f167991c7a33184d7"],["/live2d-widget/demo/login.html","0f10afabe0311239c281a7e9a91f1b0b"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/rollup.config.js","171b7912f3e5340c9fc61251ef193bd1"],["/live2d-widget/src/index.js","327f309d88198834dd4bd2fe6a606dc5"],["/live2d-widget/src/message.js","5f980402bfc065345253e6ce024dc1de"],["/live2d-widget/src/model.js","b5562a236eeda01308e5a4107e6ec80f"],["/live2d-widget/src/tools.js","fda693610457903a19c3861298fb416a"],["/live2d-widget/src/utils.js","2578501ad87a8d99ceec05d79fe2c64b"],["/live2d-widget/src/waifu-tips.js","e49236cc73dbcfda841588bba50dbfd3"],["/live2d-widget/waifu-tips.js","7ef813587dba0e4bc55c7ccafcaea531"],["/live2d-widget/waifu.css","d3c1302c311cd2e20841904a016a6427"],["/page/2/index.html","065f9e39ce786113e876f49c4c625573"],["/page/3/index.html","13dddbc13c12203dfc8a2399715abccf"],["/sw-register.js","33a655c1e3570905917d45af375ed766"],["/tags/AES/index.html","84a59dc511d477158af07ace5b6487fb"],["/tags/DSA/index.html","d7403431176fff0ede0dc7f6ace26eda"],["/tags/HNP/index.html","759b9c781137142e1d8ffd8cf3ab6709"],["/tags/Lattice/index.html","b24a6a14389c58f68f68705866df5fb7"],["/tags/MITM/index.html","218ce6d62f09f81a8da90f290c8e3f1f"],["/tags/MT19937/index.html","f8aec97e09a42063993339d70c4ffa12"],["/tags/RSA/index.html","112b74e6461469e718277df20c689215"],["/tags/Wp/index.html","771cb71186a9230e8faba43a619d3a92"],["/tags/Wp/page/2/index.html","45e371e7ecf49c2beb41af875e291bce"],["/tags/index.html","4847269da0383486445120c8ac25d1f6"],["/tags/sage/index.html","7af615c681113210000a8c53a3b12ccd"],["/tags/古典密码/index.html","fcfe45f2ddc678c9ccf43be800f1a8cc"],["/tags/密码知识/index.html","034ffd08cb0a2fe310d40ebca74a6bf3"],["/tags/背包密码/index.html","e0351c57219b8e61aff0938deaa2f62a"],["/杂记/Linux-里遇到的sage问题/index.html","41217328c7588f4e781e334d56f3d2d8"]];
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
