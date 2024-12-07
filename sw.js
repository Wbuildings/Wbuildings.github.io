/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Crypto/2023年春秋杯网络安全联赛冬季赛/index.html","0690801e7649991ade661df0a1a79671"],["/Crypto/2023第六届安洵杯/index.html","fe592a4bb0dbc39bee26cc567ecb2ec8"],["/Crypto/2024第一届VCTF纳新赛/index.html","6bcbe7f7f13589ee06c1bbedc76f933a"],["/Crypto/2024羊城杯/index.html","9fed690f05f6133b36e74d735bf2cbee"],["/Crypto/CBC-Padding-Oracle-Attack/index.html","6bc02cf7a130623e8e717f7c4905ccbd"],["/Crypto/DASCTF-2024暑期挑战赛/index.html","d7709d85253243d4450ecdda444c12f9"],["/Crypto/DSA/index.html","e6a55693ab388ea3acb19d61e98dc6de"],["/Crypto/LFSR初探/index.html","b63b1922d77907980111858171f65e64"],["/Crypto/LitCTF2024/index.html","99afdbe5c312878179d6a9dc629690cb"],["/Crypto/MT19937实战/index.html","e9b4443bd680103fe67cbfdc62153cef"],["/Crypto/NKCTF2023/index.html","9878dd0bbd574c939ef2b516c958bc96"],["/Crypto/NSSCTF-Round16/index.html","45ebbb4020c323ab6b9f5f71753d6f8a"],["/Crypto/NSSCTF-Round17/index.html","53b2a35fac58c2b27354681887ad1223"],["/Crypto/NSSCTF-Round18/index.html","a7be0f4bad736522300f2e7b9d8452e3"],["/Crypto/RSA之共模攻击/index.html","429075f5c7ce2778f0a9a1cb4c8376ff"],["/Crypto/SCTF2024/index.html","3250b58f72b593b8f99facafd1938201"],["/Crypto/SICTF-Round-3/index.html","89fe47e186a3962bbc42de093c22d6a0"],["/Crypto/Shamir门限方案/index.html","4956c6f5253f61231a4668dbb7699159"],["/Crypto/WKCTF-2024/index.html","7f2dd9da303de9d997823c40b42cc065"],["/Crypto/ctfshow元旦水友节/index.html","ba676ce0429656c79ecb65ecd62e737a"],["/Crypto/“近期的一些比赛”/index.html","065bca765712e47431c79f3676f7f5c2"],["/Crypto/再见CBC/index.html","c8ec830bbfc0843761b3abac99ab954e"],["/Crypto/古典杂记/index.html","f6323cf1f0eac454e455c8631e291c57"],["/Crypto/国城杯2024/index.html","268e3bf8ff1d289e8a19cbbc8347d57c"],["/Crypto/湖南省网络攻防邀请赛初赛复现/index.html","673caa2b9f4ad807c897fd1a9f8bfff3"],["/Crypto/第一届帕鲁杯-CTF挑战赛/index.html","2d26b9bcd5f54873f679aa9b2f3219d6"],["/Crypto/第十七届ciscn初赛/index.html","154afdc75aeaa3b5520c676413a07b61"],["/Crypto/背包密码/index.html","104b8cdb885ead8a6c321c13335e8339"],["/Crypto/青少年CTF擂台挑战赛-2024-Round-1/index.html","e7e6fcc95fd45c28a1d96f761810c057"],["/about/index.html","26355c7ede6567fc01bb46adbf5a5c42"],["/archives/2023/12/index.html","28fa47a77c35f358c299ef7e4ecfd4cc"],["/archives/2023/index.html","a17f2e2a783e10d7c5dd9629acc74e10"],["/archives/2024/01/index.html","a3eb64077ff23eea84140e2d48d0d3b0"],["/archives/2024/02/index.html","f3b8478fc9067e4d739925366547c211"],["/archives/2024/03/index.html","35ccc4f09b9ebebe9beb965bec3f7cac"],["/archives/2024/04/index.html","6cdab8a81682d8422bd6a0f5764574f1"],["/archives/2024/05/index.html","1e980d267bfb0779dcecd021f397d3e4"],["/archives/2024/06/index.html","ae512e8b90023932124d58af63eac554"],["/archives/2024/07/index.html","a51ec20b45adaedae154160a3faa5779"],["/archives/2024/08/index.html","08696a78ce74811108f492d3db3c1d45"],["/archives/2024/09/index.html","24ba0c292473ff84cdde28c4a1752c34"],["/archives/2024/11/index.html","bb250eea8b8e6dc3d7598ea348b29a83"],["/archives/2024/12/index.html","8f3267f6a98120f2b46ba42b32c29e79"],["/archives/2024/index.html","7c575e5fe149776193af8e7e327cd9ae"],["/archives/2024/page/2/index.html","4ebe5171ac9fdaffaa1c2d2ae2240807"],["/archives/2024/page/3/index.html","f77faab44e65cbd2234bd1a85428a20b"],["/archives/index.html","5d3580e697e68938562e6239898c3398"],["/archives/page/2/index.html","eb09f84dd6123e04c46fa1280b71e297"],["/archives/page/3/index.html","6ee4f770140a25fa10175c0ff5ff76f4"],["/categories/Crypto/index.html","29129bff0df15c44e2b3bb811ce7ad16"],["/categories/Crypto/page/2/index.html","8bfed0f4c22b90a6a87fa3983ec5ee97"],["/categories/Crypto/page/3/index.html","0d410c579e9676274a4815f0e6d73c8d"],["/categories/index.html","cd087f9a5b0403b720c472dc8a06528c"],["/categories/杂记/index.html","64758d695d942d7cde6b1c71db0c20e1"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","fd7e05a9e36be4cb446aa2bdf95dd147"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","07aa663bd4714b72e00e724a940463ee"],["/images/background1.jpg","9b89afec2fdf743f48ec3bf6b4db8b92"],["/images/background2.jpg","cb42889f8e8aa4f3c8a174a28089addf"],["/images/background3.jpg","a8976cf4a296f45880b29cc1c1ce293f"],["/images/background4.jpg","039b83cad6f0107728d482c24077716d"],["/images/background5.jpg","95b0bfb6832ff25e3498e135f5806d91"],["/images/background6.jpg","74e5f9a9a7b25dfda016f7c73fc90054"],["/images/background7.jpg","5767f7e0cf91fe219ba920ef5938a8ce"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/index.html","d7994494607e126321ed7bf96472e1a7"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/explosion.min.js","a65a14adaf402e0f5236adb2c7c3cb5d"],["/js/fireworks.js","61fc5a184f80b566f06f1a0fd7acb1ae"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","fb34be7e6472d81cfa5cdbb73df42b99"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","bc53150d45c4b8284e5354fa9bb680cc"],["/live2d-widget/README.en.html","adc7d9bacfbef2bc60afd113947b2119"],["/live2d-widget/README.html","63a1ce5163917efeaec1c2cdfc13ced5"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","a1cce74b48eea6cdd15a9567f04065be"],["/live2d-widget/demo/demo.html","87b9f57b8a8f905f167991c7a33184d7"],["/live2d-widget/demo/login.html","0f10afabe0311239c281a7e9a91f1b0b"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/rollup.config.js","171b7912f3e5340c9fc61251ef193bd1"],["/live2d-widget/src/index.js","327f309d88198834dd4bd2fe6a606dc5"],["/live2d-widget/src/message.js","5f980402bfc065345253e6ce024dc1de"],["/live2d-widget/src/model.js","b5562a236eeda01308e5a4107e6ec80f"],["/live2d-widget/src/tools.js","fda693610457903a19c3861298fb416a"],["/live2d-widget/src/utils.js","2578501ad87a8d99ceec05d79fe2c64b"],["/live2d-widget/src/waifu-tips.js","e49236cc73dbcfda841588bba50dbfd3"],["/live2d-widget/waifu-tips.js","7ef813587dba0e4bc55c7ccafcaea531"],["/live2d-widget/waifu.css","d3c1302c311cd2e20841904a016a6427"],["/page/2/index.html","eff3f851b06a90a5ce128f5e52573c64"],["/page/3/index.html","729d35314c32347fb144ac5895f46e6a"],["/sw-register.js","834896798b2590f34cf8212d87180ec6"],["/tags/AES/index.html","ad9d4cf7e77d7874e3007c2dec8fbf81"],["/tags/DSA/index.html","14d2697219abe16c46fe1cb001437254"],["/tags/Dual-RSA/index.html","784d13799a9f6b1539f8861123794d73"],["/tags/ECRSA/index.html","1a7a95a8cb6871357ecc123ecb044c6c"],["/tags/HNP/index.html","5891ef67b77439baa5132e61536441d2"],["/tags/LFSR/index.html","14739e2c838bfda75358f0e512839314"],["/tags/LWE/index.html","3f286f7a79ad701384a889c855ab36ed"],["/tags/Lattice/index.html","65aefdc51bd33fe7bfedd204fe5a0228"],["/tags/MITM/index.html","9efca1aa76e5b9651d3f92aea7c3c4cc"],["/tags/MT19937/index.html","718e9e4964fff893999a8ec25530d723"],["/tags/RSA/index.html","a1a9bc0641a6c38d4a51be70ba0c59a4"],["/tags/Schmidt-Samoa/index.html","b780794ef3e33bb256f2bcb20a45929e"],["/tags/Shamir/index.html","dd83683740625b7d19e9eb2db797c5f7"],["/tags/Sylvester/index.html","8052abb8dfa17984f71389fe3e0075b9"],["/tags/Wp/index.html","ab50e37d0334841375f148479f9ad845"],["/tags/Wp/page/2/index.html","87a6dc5c3aac7be5175ec7cbd3640488"],["/tags/index.html","4fb58de971d9ee5dfcb555fbf5f4679b"],["/tags/sage/index.html","e2973e688b3161f232f4595ae52ebe55"],["/tags/二元copper/index.html","d4f43402e8c4fdef4c94f153567be3e3"],["/tags/古典密码/index.html","a7ed18ef3693b925bcec3621b7af8ffd"],["/tags/密码知识/index.html","7f8a292829e3904477b3b58a0144435c"],["/tags/曲线/index.html","97d8d2b94483fe6901f796368878c36f"],["/tags/杂记/index.html","8ee9ab7017c4aa62f907ff1fab4c2d81"],["/tags/素数/index.html","ea34d8dfc49e7bc2734180b9a21b04b3"],["/tags/背包密码/index.html","a8fd495d0adef391366e40f1e2ed6439"],["/杂记/Linux-里遇到的sage问题/index.html","08257f438938dab5ca7cdf9e547256dd"]];
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
