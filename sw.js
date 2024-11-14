/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Crypto/2023年春秋杯网络安全联赛冬季赛/index.html","92f2d93eee51ecb43ce41f96b8b08479"],["/Crypto/2023第六届安洵杯/index.html","a4717ef7fd1ff25afcd49c757c6f5077"],["/Crypto/2024第一届VCTF纳新赛/index.html","be30d1af5b449aae59e7c46f7622709f"],["/Crypto/2024羊城杯/index.html","68448ff76ed8b32f7a9eacd29fccfdb1"],["/Crypto/CBC-Padding-Oracle-Attack/index.html","4c10524fcafc9f8f8852bd087a71c988"],["/Crypto/DASCTF-2024暑期挑战赛/index.html","79660bb1674d17dde7832e599eaa6c4a"],["/Crypto/DSA/index.html","a41dc4a61064771c2d5d68dfbb2d73aa"],["/Crypto/LFSR初探/index.html","81b2a83db62f2ec60c24a9aab08b7ec0"],["/Crypto/LitCTF2024/index.html","48fe31016ba2aa79ba7f1afa2ff7a58c"],["/Crypto/MT19937实战/index.html","0dc43157f764fd9696eb20e157325cce"],["/Crypto/NKCTF2023/index.html","ea9ce69ed333d12b7464cbc06d1309ae"],["/Crypto/NSSCTF-Round16/index.html","c01a6460ecbe050cd243df959e8c53e7"],["/Crypto/NSSCTF-Round17/index.html","e1e60c7393a60e74cfeac34d64893606"],["/Crypto/NSSCTF-Round18/index.html","9998b31214dd547583713064c48b3f8c"],["/Crypto/RSA之共模攻击/index.html","f7f9d462732946348b337e8fbd81b79f"],["/Crypto/SCTF2024/index.html","4b770e058e960b5d74ca0c091ccc8dfa"],["/Crypto/SICTF-Round-3/index.html","53527d778ad03ce2705725d84990e23c"],["/Crypto/Shamir门限方案/index.html","2c0a8a3ee7ec83245fa4632a08e8008d"],["/Crypto/WKCTF-2024/index.html","1e21854385c2f32019ab94884974c390"],["/Crypto/ctfshow元旦水友节/index.html","802d7461c963e5d7c143472c23e8b641"],["/Crypto/“近期的一些比赛”/index.html","dace9697e253d01520e40e111541041e"],["/Crypto/再见CBC/index.html","e5ccac52fd211f64b78284a3fb35b4f7"],["/Crypto/古典杂记/index.html","d49ecb45b8d51da22c097390b0a2717b"],["/Crypto/湖南省网络攻防邀请赛初赛复现/index.html","eac9dec68b1935c3c8121eb21f776cb1"],["/Crypto/第一届帕鲁杯-CTF挑战赛/index.html","896b6c3b26d76c233586e465f9e59e63"],["/Crypto/第十七届ciscn初赛/index.html","e7685df2d887efa56d208b19252b4e0c"],["/Crypto/背包密码/index.html","a4252433d5758da1c42ebe4d94a7c3f0"],["/Crypto/青少年CTF擂台挑战赛-2024-Round-1/index.html","f030b0d1b3fd08d3123b39da0435dcde"],["/about/index.html","2fdd0098b510637047a2551464371f2c"],["/archives/2023/12/index.html","1f44a271e27f14d949fc67751e19b4c0"],["/archives/2023/index.html","1ca1c3a6c121905d42a1155f0ec084ea"],["/archives/2024/01/index.html","0b78bbc63f6b68ee22cc4dd5bec362a9"],["/archives/2024/02/index.html","dfeb60264355482071b2ea1c8778bac0"],["/archives/2024/03/index.html","f5607df074fc42d9af69c52b8e8efe03"],["/archives/2024/04/index.html","4372e88baafa7e5864024af34b73171b"],["/archives/2024/05/index.html","928f84dba0fa84429db9b12a1251a3cf"],["/archives/2024/06/index.html","a2a152f5124ef186b8e65790a02737d1"],["/archives/2024/07/index.html","54fac95afa4380bf9f79036a506f9af0"],["/archives/2024/08/index.html","519bee6c42a484350efcfc055584f657"],["/archives/2024/09/index.html","dead20997c69c5f2c1bb3c30ae1ce8ed"],["/archives/2024/11/index.html","85435482722ca0c465408149d4d4d49f"],["/archives/2024/index.html","f73b3d5093e58efacf7eb4c19606c920"],["/archives/2024/page/2/index.html","85f30788b865b1cf05ff490bf3d2ab08"],["/archives/2024/page/3/index.html","9d0df5ca5a624687ce73bc7376921af7"],["/archives/index.html","10de25aaac778658845ede9f336d07cb"],["/archives/page/2/index.html","129ce86c56441d72962392ffa1da7859"],["/archives/page/3/index.html","7794db688b8ed458c047c27cc5fddaf6"],["/categories/Crypto/index.html","6a0ac69b5b2249bb9bf80e1f4eaacb94"],["/categories/Crypto/page/2/index.html","c454cb37939106c884ed442d0beee073"],["/categories/Crypto/page/3/index.html","eb17fed37871a02eb9b74479946e5c98"],["/categories/index.html","2cd10e9847d8928736964eddde3a3091"],["/categories/杂记/index.html","066a9940079bd34eae96131083f9a82f"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","c20ee4bd6deffbcaf3a200d8b38aa53b"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","07aa663bd4714b72e00e724a940463ee"],["/images/background1.jpg","9b89afec2fdf743f48ec3bf6b4db8b92"],["/images/background2.jpg","cb42889f8e8aa4f3c8a174a28089addf"],["/images/background3.jpg","a8976cf4a296f45880b29cc1c1ce293f"],["/images/background4.jpg","039b83cad6f0107728d482c24077716d"],["/images/background5.jpg","95b0bfb6832ff25e3498e135f5806d91"],["/images/background6.jpg","74e5f9a9a7b25dfda016f7c73fc90054"],["/images/background7.jpg","5767f7e0cf91fe219ba920ef5938a8ce"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/index.html","dfaef1dbca30579ad68526c75b718a91"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/explosion.min.js","a65a14adaf402e0f5236adb2c7c3cb5d"],["/js/fireworks.js","61fc5a184f80b566f06f1a0fd7acb1ae"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","aa119b685cd221bf44121e2b8959a279"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","535b1a820d59030d7946eae68ec8d113"],["/live2d-widget/README.en.html","adc7d9bacfbef2bc60afd113947b2119"],["/live2d-widget/README.html","63a1ce5163917efeaec1c2cdfc13ced5"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","a1cce74b48eea6cdd15a9567f04065be"],["/live2d-widget/demo/demo.html","87b9f57b8a8f905f167991c7a33184d7"],["/live2d-widget/demo/login.html","0f10afabe0311239c281a7e9a91f1b0b"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/rollup.config.js","171b7912f3e5340c9fc61251ef193bd1"],["/live2d-widget/src/index.js","327f309d88198834dd4bd2fe6a606dc5"],["/live2d-widget/src/message.js","5f980402bfc065345253e6ce024dc1de"],["/live2d-widget/src/model.js","b5562a236eeda01308e5a4107e6ec80f"],["/live2d-widget/src/tools.js","fda693610457903a19c3861298fb416a"],["/live2d-widget/src/utils.js","2578501ad87a8d99ceec05d79fe2c64b"],["/live2d-widget/src/waifu-tips.js","e49236cc73dbcfda841588bba50dbfd3"],["/live2d-widget/waifu-tips.js","7ef813587dba0e4bc55c7ccafcaea531"],["/live2d-widget/waifu.css","d3c1302c311cd2e20841904a016a6427"],["/page/2/index.html","58e9a0405db6b575db73a13590a2dacb"],["/page/3/index.html","9089733c0cbcf7d49548345402062b09"],["/sw-register.js","0758a6d5eb5023ebc1daaee5675e8ef3"],["/tags/AES/index.html","92768c551d0ff04baf1e812930b5077c"],["/tags/DSA/index.html","29841639fa73c635a62d0141b07ce14a"],["/tags/Dual-RSA/index.html","5a9e2c29945ed5127835f2d866ffcfdc"],["/tags/HNP/index.html","9d0d612842b61b0bb578fb542b6b9db9"],["/tags/LFSR/index.html","4ce2bcec8d5bb846de5198ffa5370da4"],["/tags/LWE/index.html","80a44d054e665d48e7c26168f9ddf7c3"],["/tags/Lattice/index.html","0bb718f99de65ce2afaa92413107228a"],["/tags/MITM/index.html","3473fa23bb4836777b1568e4210935b6"],["/tags/MT19937/index.html","09d4c2cf8e84b632e9ab382b2c9ba297"],["/tags/RSA/index.html","da1c5e8dc8eb1277fb2c0c0a2e86a4c6"],["/tags/Shamir/index.html","7be884f7e3986f3d0c0d746ebfc75d1b"],["/tags/Sylvester/index.html","16eddea7d419f70ac098f57eb9b956a9"],["/tags/Wp/index.html","45b6d6edc353a811781862eec6f2dbda"],["/tags/Wp/page/2/index.html","1c6401ca39b4ccd3e037a449b0a30e9a"],["/tags/index.html","ba0fa7d6a0d766a8d0723687ceff3529"],["/tags/sage/index.html","60c46a78c285574c0081cec62ddba494"],["/tags/二元copper/index.html","7476a9bf650ffe58c60d625174fb2872"],["/tags/古典密码/index.html","058be98d178107cf825244113ed379ba"],["/tags/密码知识/index.html","4914e58b6ff5eece82202d551456167d"],["/tags/曲线/index.html","2971844b29d2210c8a61570b66fd09b0"],["/tags/杂记/index.html","441e4b1501e32a3f8e94cddc92def7ba"],["/tags/素数/index.html","2d69c4388f82360f3d3e86ddb8f5d841"],["/tags/背包密码/index.html","2bd91f2c2877a071828f08a18c4c7265"],["/杂记/Linux-里遇到的sage问题/index.html","a33a2e23eed3dfa92f89a62116d2ea69"]];
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
