/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Crypto/2023年春秋杯网络安全联赛冬季赛/index.html","dfb2cc3073147a4d6a204fb3ff5f16cf"],["/Crypto/2023第六届安洵杯/index.html","bc7541c691e63a7623a2e58db9966c3e"],["/Crypto/2024第一届VCTF纳新赛/index.html","6d5f543b5ef1d3a8a55bc8558dabb200"],["/Crypto/CBC-Padding-Oracle-Attack/index.html","e10c29c05c80fe7711e21869fc868df1"],["/Crypto/DASCTF-2024暑期挑战赛/index.html","ab32d75b00724d1b7ffdffc4663a2098"],["/Crypto/DSA/index.html","38ed58e064774b783ec84bbfca0e3e28"],["/Crypto/LitCTF2024/index.html","6ba9bca7d7e3902b0c7da88c6f047dbc"],["/Crypto/MT19937实战/index.html","860224279af0872d4a321bfab2570807"],["/Crypto/NKCTF2023/index.html","e92d5337516edd4a92265ef88df540e2"],["/Crypto/NSSCTF-Round16/index.html","de9115ecb8dbdab0e8f2f7bbc05936c1"],["/Crypto/NSSCTF-Round17/index.html","54aa18c28756d44eef7818dea6b71d69"],["/Crypto/NSSCTF-Round18/index.html","afdc45f110a4c2e133ee16119a591c2c"],["/Crypto/RSA之共模攻击/index.html","f4913959a0b39360d7e84315ce45f5eb"],["/Crypto/SICTF-Round-3/index.html","8bab56c09d42fedefac97c5a04751e3a"],["/Crypto/Shamir门限方案/index.html","b29d39ef9343bf86f363df98865fa0ca"],["/Crypto/WKCTF-2024/index.html","a8699673df32fc5be1a73806130330b8"],["/Crypto/ctfshow元旦水友节/index.html","0c3e19d0ac85bfa03764ce78e495a1fe"],["/Crypto/再见CBC/index.html","efb7b8bbf386c087cd894c4909d7e623"],["/Crypto/古典杂记/index.html","b03696d220e814989f0d7a168bb03c38"],["/Crypto/湖南省网络攻防邀请赛初赛复现/index.html","2913ba37fd0bc240890bb2a9bfee6a8c"],["/Crypto/第一届帕鲁杯-CTF挑战赛/index.html","5709c1357e8e4874ac6ef8a9b4355628"],["/Crypto/第十七届ciscn初赛/index.html","c1e46aa2a105e407d42ed1ff20446abe"],["/Crypto/背包密码/index.html","746bce7a86416a552416c9133b2cf6e7"],["/Crypto/青少年CTF擂台挑战赛-2024-Round-1/index.html","e7e1dc71285f2b2a3781adef32546836"],["/about/index.html","2ab38957f85794d72f2e60596987d983"],["/archives/2023/12/index.html","08d1621ef55e6d63c960d012b1cb22c4"],["/archives/2023/index.html","def6569939c95b01ace574c876414e59"],["/archives/2024/01/index.html","bbb7aef73289b236edbc07cc90f2af8c"],["/archives/2024/02/index.html","b1a6e8a3f69ed77228df9980669fbb55"],["/archives/2024/03/index.html","3cb2bebd309e2a80e88badcf826333eb"],["/archives/2024/03/page/2/index.html","dee2212542c0af887a13eeeda3c106a6"],["/archives/2024/04/index.html","798bd2cb1894f5eb163bca03dd6e0ea2"],["/archives/2024/05/index.html","c7eb25b972ffe1a09b8f45f4febf9c28"],["/archives/2024/06/index.html","a726a89c6151ac6a4e5efca78aa17b74"],["/archives/2024/07/index.html","1176389b641966e30e1616f24c8fa413"],["/archives/2024/index.html","3630f731959606e3bcd198a01061877a"],["/archives/2024/page/2/index.html","587f3b0e146733cc452195086239119d"],["/archives/2024/page/3/index.html","757429000480cd9c7fa193e01b4bd955"],["/archives/index.html","5b025480053a40e4c1d3b598f8c8d381"],["/archives/page/2/index.html","884f81d1cd1ddfdaa38ec83caccab7bd"],["/archives/page/3/index.html","9039c98ca1b26b94098e6f4359446b2f"],["/categories/Crypto/index.html","cf5493cac2464cd17fd53941b461e292"],["/categories/Crypto/page/2/index.html","e7755d5fcceb592f96c6fee37d2476a8"],["/categories/Crypto/page/3/index.html","d3e1754bd48fbfae2fd38de249344b4b"],["/categories/index.html","d902552416835afdbe71a558c18a99fa"],["/categories/杂记/index.html","1ca9c6d12cf7e6f423b41a212e0e171e"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","a9beceffb7425293a8479e940c4ee0a3"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","07aa663bd4714b72e00e724a940463ee"],["/images/background1.jpg","9b89afec2fdf743f48ec3bf6b4db8b92"],["/images/background2.jpg","cb42889f8e8aa4f3c8a174a28089addf"],["/images/background3.jpg","a8976cf4a296f45880b29cc1c1ce293f"],["/images/background4.jpg","039b83cad6f0107728d482c24077716d"],["/images/background5.jpg","95b0bfb6832ff25e3498e135f5806d91"],["/images/background6.jpg","74e5f9a9a7b25dfda016f7c73fc90054"],["/images/background7.jpg","5767f7e0cf91fe219ba920ef5938a8ce"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/index.html","13ae68331018d47bc555d69b16275caf"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/explosion.min.js","a65a14adaf402e0f5236adb2c7c3cb5d"],["/js/fireworks.js","61fc5a184f80b566f06f1a0fd7acb1ae"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","7dc7796a280ab49d353c112275f52d81"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.en.html","adc7d9bacfbef2bc60afd113947b2119"],["/live2d-widget/README.html","63a1ce5163917efeaec1c2cdfc13ced5"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","a1cce74b48eea6cdd15a9567f04065be"],["/live2d-widget/demo/demo.html","87b9f57b8a8f905f167991c7a33184d7"],["/live2d-widget/demo/login.html","0f10afabe0311239c281a7e9a91f1b0b"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/rollup.config.js","171b7912f3e5340c9fc61251ef193bd1"],["/live2d-widget/src/index.js","327f309d88198834dd4bd2fe6a606dc5"],["/live2d-widget/src/message.js","5f980402bfc065345253e6ce024dc1de"],["/live2d-widget/src/model.js","b5562a236eeda01308e5a4107e6ec80f"],["/live2d-widget/src/tools.js","fda693610457903a19c3861298fb416a"],["/live2d-widget/src/utils.js","2578501ad87a8d99ceec05d79fe2c64b"],["/live2d-widget/src/waifu-tips.js","e49236cc73dbcfda841588bba50dbfd3"],["/live2d-widget/waifu-tips.js","7ef813587dba0e4bc55c7ccafcaea531"],["/live2d-widget/waifu.css","d3c1302c311cd2e20841904a016a6427"],["/page/2/index.html","d274ff0ee7259d647fad7f33036a8b5f"],["/page/3/index.html","6c0bc763747c6a8b1c9b006ae046d623"],["/sw-register.js","c09bdcd1aba90bd903ac256485cf16db"],["/tags/AES/index.html","e904fc7c16d51e66e9d861f10dc49eec"],["/tags/DSA/index.html","8bd471605bc6a907dfc98449310984a8"],["/tags/HNP/index.html","769e94c6d8e565b0c753a06476e5bb79"],["/tags/Lattice/index.html","06fe00c959f3308c68b1c503d81cb944"],["/tags/MITM/index.html","f6676d990d33c6fb3ab885cad86a88e1"],["/tags/MT19937/index.html","eb5089fe69c88e9eac2692a394edf40d"],["/tags/RSA/index.html","c4ee3273dcfa6d8744880c8112b10c1d"],["/tags/Wp/index.html","0c3c320c70ade02cc993d67a158157c5"],["/tags/Wp/page/2/index.html","11ddfaeaebfe6c2852724752c40365a7"],["/tags/index.html","d3eed82c3743b98194a12c674b70d23f"],["/tags/sage/index.html","2f2d776e656e89e81114d679c84bbeca"],["/tags/古典密码/index.html","64a21dd9edb01e44df5734ecdbb5cdd8"],["/tags/密码知识/index.html","0404812a57e3a4d423fa885d37993148"],["/tags/背包密码/index.html","3a8e913c828715f86fee1b52c6ba67a5"],["/杂记/Linux-里遇到的sage问题/index.html","c22e33bc6f99061300475f2afef11ac2"]];
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
