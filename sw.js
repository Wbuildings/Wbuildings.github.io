/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Crypto/2023年春秋杯网络安全联赛冬季赛/index.html","692a55ae7dae568133d413d9292b2aa6"],["/Crypto/2023第六届安洵杯/index.html","8fc4742f7eccec756badc430d6bcaf9d"],["/Crypto/2024第一届VCTF纳新赛/index.html","f88d2564973b064936d94f8f63098f8e"],["/Crypto/2024羊城杯/index.html","519f0ba4c8a664afa40cbf54f3d4bc4e"],["/Crypto/CBC-Padding-Oracle-Attack/index.html","db91444c05516a5d6a082ccdc6b201e0"],["/Crypto/DASCTF-2024暑期挑战赛/index.html","9b21f18b1a2ce9f32267e9f30948d645"],["/Crypto/DSA/index.html","5252fa40564f4a12ce447a74ba2e3f3e"],["/Crypto/LFSR初探/index.html","983832b20a71547fe251fe787f7daa93"],["/Crypto/LitCTF2024/index.html","7eabb62190ef26a193d69f82727c6477"],["/Crypto/MT19937实战/index.html","c49a8c807a212dfd2b0cb4fbb8a57f15"],["/Crypto/NKCTF2023/index.html","f483a9ba3f7c03682beac79cc228f22c"],["/Crypto/NSSCTF-Round16/index.html","0887521573006673377e91f771be42be"],["/Crypto/NSSCTF-Round17/index.html","4c4dacf8c1cf7e35bb59ad6221a951f8"],["/Crypto/NSSCTF-Round18/index.html","10e0ed7533b8d71bcf22f93c6fa7b227"],["/Crypto/RSA之共模攻击/index.html","122c90359966f42a810a7423050d2abd"],["/Crypto/SICTF-Round-3/index.html","876c3e9f51574154c916efb544158209"],["/Crypto/Shamir门限方案/index.html","5362d9409b6ea6c360310b1735d9488f"],["/Crypto/WKCTF-2024/index.html","d90b173a1c11f8ff93a27c140cdda5e8"],["/Crypto/ctfshow元旦水友节/index.html","2d3d1f35f8f70b95784eb749fcbb254a"],["/Crypto/“近期的一些比赛”/index.html","2420fae293db5324fb6fc56d43b6dcc3"],["/Crypto/再见CBC/index.html","b4fc70fb5a616b288de0c52f43d9818e"],["/Crypto/古典杂记/index.html","c5ba3c91a73c20996f405fbe39eb548c"],["/Crypto/湖南省网络攻防邀请赛初赛复现/index.html","9837a37281a1d1bc4db7e77410de1724"],["/Crypto/第一届帕鲁杯-CTF挑战赛/index.html","5ec6d66a8ea81fbb942886895acd7173"],["/Crypto/第十七届ciscn初赛/index.html","c79e4dd185f4207124323e4e44066b9b"],["/Crypto/背包密码/index.html","d06a17b11c8188010ea118b40230f480"],["/Crypto/青少年CTF擂台挑战赛-2024-Round-1/index.html","a7d50bf4e2f83459e11e55b55597126a"],["/about/index.html","3a05ba13dd583c74b7601c2468e980f5"],["/archives/2023/12/index.html","d1fdfd84aecd67d7a74035e7d9a1804d"],["/archives/2023/index.html","2ea1dbf0e11a3a7a0fe201180a5ee326"],["/archives/2024/01/index.html","364a6da1bd5f98231858f00f652b0b29"],["/archives/2024/02/index.html","fa1b56f689e2d06ad0fb124be340d870"],["/archives/2024/03/index.html","9e1b46780be938ff3c16e3d55e324b4a"],["/archives/2024/04/index.html","7645b953511e8c32876b3ea782d8fa6f"],["/archives/2024/05/index.html","9546fd190617e63f0ad3868400376b5b"],["/archives/2024/06/index.html","b5ff591619bc8901fd721d01a7467f4a"],["/archives/2024/07/index.html","10d8b7e45107e0500e7cca6c2347ff8c"],["/archives/2024/08/index.html","bb41d5b35a8d419e1bb10a4b6be96771"],["/archives/2024/09/index.html","56994cdc365bf168d3503b2228b65f4f"],["/archives/2024/index.html","c6efab8f9593dcf0c19931fead8c2234"],["/archives/2024/page/2/index.html","c9af2728a6d877967b6f92e57bc5e330"],["/archives/2024/page/3/index.html","6d5c11b38c6af135a8c5e87c51d3ebce"],["/archives/index.html","e2e30519c24e9686a6380aef63740f98"],["/archives/page/2/index.html","bb8bce7fcbbdd63014c791f203762ee9"],["/archives/page/3/index.html","e0ca3ce85298a751321d3224ba1deb6b"],["/categories/Crypto/index.html","5e3c0e262245ee601bab9660722b15b0"],["/categories/Crypto/page/2/index.html","67a352d0547b5c62770f604ecd588652"],["/categories/Crypto/page/3/index.html","6782ff80e3827d7b5872188dcf468274"],["/categories/index.html","b5c4075531ece0f34e6efb3b42c7422c"],["/categories/杂记/index.html","9f9012e2720fb34261fcbfc7d74bec6a"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","8ac05d9a8ea500c80035f2653790ddba"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","07aa663bd4714b72e00e724a940463ee"],["/images/background1.jpg","9b89afec2fdf743f48ec3bf6b4db8b92"],["/images/background2.jpg","cb42889f8e8aa4f3c8a174a28089addf"],["/images/background3.jpg","a8976cf4a296f45880b29cc1c1ce293f"],["/images/background4.jpg","039b83cad6f0107728d482c24077716d"],["/images/background5.jpg","95b0bfb6832ff25e3498e135f5806d91"],["/images/background6.jpg","74e5f9a9a7b25dfda016f7c73fc90054"],["/images/background7.jpg","5767f7e0cf91fe219ba920ef5938a8ce"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/index.html","08808c2da05fca8bd711003fd5e5d95e"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/explosion.min.js","a65a14adaf402e0f5236adb2c7c3cb5d"],["/js/fireworks.js","61fc5a184f80b566f06f1a0fd7acb1ae"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.en.html","adc7d9bacfbef2bc60afd113947b2119"],["/live2d-widget/README.html","63a1ce5163917efeaec1c2cdfc13ced5"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","a1cce74b48eea6cdd15a9567f04065be"],["/live2d-widget/demo/demo.html","141482d5569a35aec669d6b111908c58"],["/live2d-widget/demo/login.html","bf42aaf8b22335b60412591922b85210"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/rollup.config.js","171b7912f3e5340c9fc61251ef193bd1"],["/live2d-widget/src/index.js","327f309d88198834dd4bd2fe6a606dc5"],["/live2d-widget/src/message.js","5f980402bfc065345253e6ce024dc1de"],["/live2d-widget/src/model.js","b5562a236eeda01308e5a4107e6ec80f"],["/live2d-widget/src/tools.js","fda693610457903a19c3861298fb416a"],["/live2d-widget/src/utils.js","2578501ad87a8d99ceec05d79fe2c64b"],["/live2d-widget/src/waifu-tips.js","e49236cc73dbcfda841588bba50dbfd3"],["/live2d-widget/waifu-tips.js","7ef813587dba0e4bc55c7ccafcaea531"],["/live2d-widget/waifu.css","d3c1302c311cd2e20841904a016a6427"],["/page/2/index.html","75abe69569e8e49064b5f4fc328c4283"],["/page/3/index.html","b6a8dc1cc308f312410184f4c33e008f"],["/sw-register.js","f91a3762493635ba7660ceaf993a0dfe"],["/tags/AES/index.html","9cf7ef897e57c94a21472ebd5bc0b21f"],["/tags/DSA/index.html","1504ca1ae4219d6faabe1718ff841af0"],["/tags/HNP/index.html","7a76b58c3a0e80e7b52b19d6974b535f"],["/tags/LFSR/index.html","0a3ff2ff36fc2315a5f1fb385db58136"],["/tags/LWE/index.html","81c8b0717264d572c53c4ee0cbefe3c4"],["/tags/Lattice/index.html","d87ee10ddee1cbb173d66e3f7361d33c"],["/tags/MITM/index.html","8736ea287af7641a08e20cfd1e4372cd"],["/tags/MT19937/index.html","ba1b0304a5c519164788be135a8cf305"],["/tags/RSA/index.html","a602f7e0bc7dc40e256acd4dc0379b66"],["/tags/Shamir/index.html","fce98b981cea84c76bdd27f9c48a467f"],["/tags/Sylvester/index.html","9bba2afef36cab56d086c1cb78e57ae2"],["/tags/Wp/index.html","f833dabf10b5557d76eae77f5b25c122"],["/tags/Wp/page/2/index.html","424cd896e89e15716bd192a3268bbae9"],["/tags/index.html","fe7af6f7343d0bbd1e3a57572feb3404"],["/tags/sage/index.html","986fc50331a9282f127a1a0b0fb8f246"],["/tags/二元copper/index.html","b1a9741c70039dfbaf6f01c286493dfb"],["/tags/古典密码/index.html","62d199316472c2033ef13841bc717282"],["/tags/密码知识/index.html","d0364bbe04316f050417f7e501f06971"],["/tags/曲线/index.html","305798b7b5dd7f75077bacae9dd68729"],["/tags/杂记/index.html","e52bcb3a7ebaab0cfc704456aad9809f"],["/tags/素数/index.html","ace6700a286cbe0cb4b871581f19fbd0"],["/tags/背包密码/index.html","55105438e8ecdc4dc63fc4005d0d8160"],["/杂记/Linux-里遇到的sage问题/index.html","5c33883b5679ec8075f7f2ec37872737"]];
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
