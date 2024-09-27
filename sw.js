/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Crypto/2023年春秋杯网络安全联赛冬季赛/index.html","ac24c5a1d3a3dea06a4ac0f2ab89311a"],["/Crypto/2023第六届安洵杯/index.html","9e267df8543aee01266af7e3a5765deb"],["/Crypto/2024第一届VCTF纳新赛/index.html","aabf57c56a0bbbf6793423d9d1b21666"],["/Crypto/2024羊城杯/index.html","46c390faaff8b5aef13291ae8e28fe17"],["/Crypto/CBC-Padding-Oracle-Attack/index.html","b9c086889cdcb1cfb59169930507f9c2"],["/Crypto/DASCTF-2024暑期挑战赛/index.html","a50ee73a59b827da956a54030a0c1ebd"],["/Crypto/DSA/index.html","676cf53030140cf484fa331a1dada59a"],["/Crypto/LFSR初探/index.html","d0769ecdf30e1746f0f8f8d7aec9c5f4"],["/Crypto/LitCTF2024/index.html","665a03e0f08a26ae0d10d9b3e7ec9faf"],["/Crypto/MT19937实战/index.html","e12d07cefda2cab2ece39a72977e242d"],["/Crypto/NKCTF2023/index.html","21126aff756d6dcd2e324c7aeb6e41a0"],["/Crypto/NSSCTF-Round16/index.html","cc6ca303019f97d315ed35647a7b678a"],["/Crypto/NSSCTF-Round17/index.html","29bcedb4e7feb253ea3aa545a306a549"],["/Crypto/NSSCTF-Round18/index.html","99b57f00a927c4560201730f2c530e5f"],["/Crypto/RSA之共模攻击/index.html","d1823644aef93656036a6723652d9ece"],["/Crypto/SICTF-Round-3/index.html","ce4981620b939286ab780cb009fa8abd"],["/Crypto/Shamir门限方案/index.html","e3fe719798c63f4bba03fa5e235964bb"],["/Crypto/WKCTF-2024/index.html","4b0702a2633914eeeb7ed89c1e5236fc"],["/Crypto/ctfshow元旦水友节/index.html","905945ec14be7652d10d576e11020d09"],["/Crypto/“近期的一些比赛”/index.html","6ea5d44244827da40a155c12f74f3a64"],["/Crypto/再见CBC/index.html","82fb412ea32ed1ed4c040a1caa7ddfd4"],["/Crypto/古典杂记/index.html","bd532e22fdf2d41017e26daaaf646f28"],["/Crypto/湖南省网络攻防邀请赛初赛复现/index.html","685cc0622087740d6ca4e64a0da5afe4"],["/Crypto/第一届帕鲁杯-CTF挑战赛/index.html","873e4fbbfdb3d0646256d1c778e208be"],["/Crypto/第十七届ciscn初赛/index.html","667db33d48ef688e79e05f732b0001ca"],["/Crypto/背包密码/index.html","07cc7e5bf6bd8f078b5d1bebe166141c"],["/Crypto/青少年CTF擂台挑战赛-2024-Round-1/index.html","7a0f259bedb4636b4c7c1e1a584239b7"],["/about/index.html","f30c1213df137932b701702a1ed17340"],["/archives/2023/12/index.html","5a07ab6becd3534196ed618009969c4a"],["/archives/2023/index.html","98e67e52695efcd40c84b2beabac075d"],["/archives/2024/01/index.html","2cb53fa5e417bf53a92985dff32e1402"],["/archives/2024/02/index.html","3e3215470de561e85f99c5e431bed989"],["/archives/2024/03/index.html","0a0dc4944d2cdb7caa181ba9f7520915"],["/archives/2024/04/index.html","14ed7b39bae140ab8b20fb1c44050140"],["/archives/2024/05/index.html","f77e312e3c61ce715af1aa87fefccabe"],["/archives/2024/06/index.html","aafff6ff818027a4ca2d39b781c20dbd"],["/archives/2024/07/index.html","776c9db38d79d1309ce9249b36123747"],["/archives/2024/08/index.html","5809f6b12917a796463602209695191e"],["/archives/2024/09/index.html","26b17adb04dee0e5f69325a550945975"],["/archives/2024/index.html","72d25f1e15cf9ca4a6de8ebc6bcd9ff8"],["/archives/2024/page/2/index.html","2730b9277119e309c77fa1e67d0a77e7"],["/archives/2024/page/3/index.html","0a2bbc8c8c5e6465c87e73db196de959"],["/archives/index.html","be0a5490456ebdd1c64538694cd34b82"],["/archives/page/2/index.html","3937953218bdf90540add8a2fa8a9eb9"],["/archives/page/3/index.html","468ef79d2e655713ef3732cecb30f81b"],["/categories/Crypto/index.html","16169cd2b38aa22d35227a0c01eed429"],["/categories/Crypto/page/2/index.html","879bd89d766249723c735888e9501d19"],["/categories/Crypto/page/3/index.html","5e2c59110943074f410964e73a461379"],["/categories/index.html","5f29043019ad7083f96d93916f918ec7"],["/categories/杂记/index.html","43eecc107926e6f66e9e030074e65e28"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","c20ee4bd6deffbcaf3a200d8b38aa53b"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","07aa663bd4714b72e00e724a940463ee"],["/images/background1.jpg","9b89afec2fdf743f48ec3bf6b4db8b92"],["/images/background2.jpg","cb42889f8e8aa4f3c8a174a28089addf"],["/images/background3.jpg","a8976cf4a296f45880b29cc1c1ce293f"],["/images/background4.jpg","039b83cad6f0107728d482c24077716d"],["/images/background5.jpg","95b0bfb6832ff25e3498e135f5806d91"],["/images/background6.jpg","74e5f9a9a7b25dfda016f7c73fc90054"],["/images/background7.jpg","5767f7e0cf91fe219ba920ef5938a8ce"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/index.html","0e269c87b075b9b7dff8c7c2d2bf5233"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/explosion.min.js","a65a14adaf402e0f5236adb2c7c3cb5d"],["/js/fireworks.js","61fc5a184f80b566f06f1a0fd7acb1ae"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","aa119b685cd221bf44121e2b8959a279"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","8033f6709b486b638224e3631c8ea58d"],["/live2d-widget/README.en.html","adc7d9bacfbef2bc60afd113947b2119"],["/live2d-widget/README.html","63a1ce5163917efeaec1c2cdfc13ced5"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","a1cce74b48eea6cdd15a9567f04065be"],["/live2d-widget/demo/demo.html","87b9f57b8a8f905f167991c7a33184d7"],["/live2d-widget/demo/login.html","0f10afabe0311239c281a7e9a91f1b0b"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/rollup.config.js","171b7912f3e5340c9fc61251ef193bd1"],["/live2d-widget/src/index.js","327f309d88198834dd4bd2fe6a606dc5"],["/live2d-widget/src/message.js","5f980402bfc065345253e6ce024dc1de"],["/live2d-widget/src/model.js","b5562a236eeda01308e5a4107e6ec80f"],["/live2d-widget/src/tools.js","fda693610457903a19c3861298fb416a"],["/live2d-widget/src/utils.js","2578501ad87a8d99ceec05d79fe2c64b"],["/live2d-widget/src/waifu-tips.js","e49236cc73dbcfda841588bba50dbfd3"],["/live2d-widget/waifu-tips.js","7ef813587dba0e4bc55c7ccafcaea531"],["/live2d-widget/waifu.css","d3c1302c311cd2e20841904a016a6427"],["/page/2/index.html","7f236d241ca632369d7e9ba7d2910c97"],["/page/3/index.html","e1a21f3af3c62653e10ec5186b408d21"],["/sw-register.js","f5970ec65c34ca40a33962151558f48e"],["/tags/AES/index.html","51b7cbcbb130cbdf0585d8bc1101952c"],["/tags/DSA/index.html","58d2cb7d943c173d2bc5a400113dc58b"],["/tags/HNP/index.html","bf1bbcefdbeabb119a0fa18c4fd0878e"],["/tags/LFSR/index.html","78191e41f644ab895e398d3eb406f97c"],["/tags/LWE/index.html","f23541e7981351a727da49088fcaf893"],["/tags/Lattice/index.html","5f5be9f7dd0c91357cd47fb4ed1f1485"],["/tags/MITM/index.html","c9d63e2b8f0b6f4e35e1f4bb59b6fd78"],["/tags/MT19937/index.html","b4a506159f06acbd0aac346599b4bee6"],["/tags/RSA/index.html","8a7dcf00cde455c289efb1018499a8ce"],["/tags/Shamir/index.html","6ca97d9862b91d2642129be14f408b92"],["/tags/Sylvester/index.html","56d590f1e909848814ea3b87d5cdabee"],["/tags/Wp/index.html","f217fe0c16dca7297b7f27dcf6775400"],["/tags/Wp/page/2/index.html","ccc0c21786d5aa308053f67f44d52d07"],["/tags/index.html","b6bb263365bd2c9e0aa5a416dadefbdb"],["/tags/sage/index.html","8e9266d80c1de88a4e4bc52b72a40a42"],["/tags/二元copper/index.html","8cace2d72ebf3cf8ee7cd6fae6b08186"],["/tags/古典密码/index.html","c590974b02e0ed941aca85baba114031"],["/tags/密码知识/index.html","eae3782ada2b2a291929234e459a71fc"],["/tags/曲线/index.html","266f8c0701af2945bfa6c0b73ee03d26"],["/tags/杂记/index.html","5c2a8c8176a1e0f5ca7bf1255082a3a2"],["/tags/素数/index.html","a1a271d5b03d60080f732fb3358556f7"],["/tags/背包密码/index.html","e2667310394ab212b81cbed79be19f64"],["/杂记/Linux-里遇到的sage问题/index.html","a92d744bdc41f8c7d931fc4279c86e21"]];
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
