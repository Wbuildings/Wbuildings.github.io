/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Crypto/2023年春秋杯网络安全联赛冬季赛/index.html","8ed289662a882ac7f9be3e530bd79ee8"],["/Crypto/2023第六届安洵杯/index.html","353b363eec0d5c39518607d68c5898e8"],["/Crypto/2024第一届VCTF纳新赛/index.html","8c8b16d0973bae247d06790238bffd82"],["/Crypto/CBC-Padding-Oracle-Attack/index.html","99874baeebb0baa4f1f1686d14d6d3a8"],["/Crypto/DASCTF-2024暑期挑战赛/index.html","4a75ad8efc282c8ff843c1a69febe368"],["/Crypto/DSA/index.html","2b9d660a5b18cb317479c939afbbc106"],["/Crypto/LitCTF2024/index.html","33cad237c77d40ff454f2d362145d8ae"],["/Crypto/MT19937实战/index.html","2a918fb18d4d6efbf03e2a46bf83ef1e"],["/Crypto/NKCTF2023/index.html","141cb80644572f0df234929396ef5bf1"],["/Crypto/NSSCTF-Round16/index.html","81a16b0701e13b49087eafe3173be445"],["/Crypto/NSSCTF-Round17/index.html","c3eea9686564374c4ca4f39c641a107c"],["/Crypto/NSSCTF-Round18/index.html","6152d6d8c7ce74a9e76e8aa005d66991"],["/Crypto/RSA之共模攻击/index.html","01af9f4342358e4f569409906d6e24b7"],["/Crypto/SICTF-Round-3/index.html","a0b09484625707fffd6b2e890dad6d00"],["/Crypto/Shamir门限方案/index.html","17e0911651345b2a062e5c1e4e9ad4b4"],["/Crypto/WKCTF-2024/index.html","4a5b32030673505c625ac1e52a7ec346"],["/Crypto/ctfshow元旦水友节/index.html","13799f027af4a7815a0ceba7112143ac"],["/Crypto/再见CBC/index.html","fb660aa9348fe7a0e5cfaa5d42ea24cf"],["/Crypto/古典杂记/index.html","883ab783c1a69a0ab33108a16ae9da2e"],["/Crypto/湖南省网络攻防邀请赛初赛复现/index.html","fbaf572367543a9b6221c0716b866d72"],["/Crypto/第一届帕鲁杯-CTF挑战赛/index.html","7a810c059c9656b3eb8fb59b28917cdd"],["/Crypto/第十七届ciscn初赛/index.html","6f8710db61c14cc647209d04169b1b63"],["/Crypto/背包密码/index.html","e507d7a9af3c7fc9ebaeb993dee67932"],["/Crypto/青少年CTF擂台挑战赛-2024-Round-1/index.html","0e36e522ea47a0f6e80894dfe17a76ce"],["/about/index.html","c5fc62b06e23bbefc4b406dea92af09d"],["/archives/2023/12/index.html","126428ac67524ee117bc05a231db45d0"],["/archives/2023/index.html","5948cfbece3d5f23ff889e4082df3abe"],["/archives/2024/01/index.html","a48c6ccef7985f98e7bc876ebf095968"],["/archives/2024/02/index.html","92ee6c930a9283b799b96133e0a28d34"],["/archives/2024/03/index.html","7a3919670bd1ebfb2fd59f7e122373b0"],["/archives/2024/04/index.html","1a6c78c4e336c75b0e08624029af07e1"],["/archives/2024/05/index.html","21b3e8dcb41fe1bb3030eecb4fb70af0"],["/archives/2024/06/index.html","d06ac20c31d1e00a5d3403dd68f8faeb"],["/archives/2024/07/index.html","0adb3cb984afdb647cd11590e905d395"],["/archives/2024/08/index.html","4e9be01af6527cb16d18c6ee51c89821"],["/archives/2024/index.html","8bacdebdbc3c965cbf0636488ebf2b31"],["/archives/2024/page/2/index.html","68ddf4339a5cdf8defd27bb50e9595e1"],["/archives/2024/page/3/index.html","439eec23c7d447068715d6f11a48fe2a"],["/archives/index.html","011a4fb7563554fad41f03f0da7053ba"],["/archives/page/2/index.html","6e00df450fa2b298aae4a20baf04d0ed"],["/archives/page/3/index.html","ae10063f46c4cc1601a3ad8e56a2ab9d"],["/categories/Crypto/index.html","378f48359c5124ecbf6825e7c6bcf076"],["/categories/Crypto/page/2/index.html","10ffe11e4dd1d8975a82037c492f1a24"],["/categories/Crypto/page/3/index.html","036e29245e24c7812f93598d6912f9fa"],["/categories/index.html","bb1e348ca7fcdaa1a455b5b098027f6d"],["/categories/杂记/index.html","f5840bb1a6b0aa5430cd09cccc39f373"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","a9beceffb7425293a8479e940c4ee0a3"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","07aa663bd4714b72e00e724a940463ee"],["/images/background1.jpg","9b89afec2fdf743f48ec3bf6b4db8b92"],["/images/background2.jpg","cb42889f8e8aa4f3c8a174a28089addf"],["/images/background3.jpg","a8976cf4a296f45880b29cc1c1ce293f"],["/images/background4.jpg","039b83cad6f0107728d482c24077716d"],["/images/background5.jpg","95b0bfb6832ff25e3498e135f5806d91"],["/images/background6.jpg","74e5f9a9a7b25dfda016f7c73fc90054"],["/images/background7.jpg","5767f7e0cf91fe219ba920ef5938a8ce"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/index.html","2c135ef4aecde0297b4543cc7874008c"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/explosion.min.js","a65a14adaf402e0f5236adb2c7c3cb5d"],["/js/fireworks.js","61fc5a184f80b566f06f1a0fd7acb1ae"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","7dc7796a280ab49d353c112275f52d81"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.en.html","adc7d9bacfbef2bc60afd113947b2119"],["/live2d-widget/README.html","63a1ce5163917efeaec1c2cdfc13ced5"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","a1cce74b48eea6cdd15a9567f04065be"],["/live2d-widget/demo/demo.html","87b9f57b8a8f905f167991c7a33184d7"],["/live2d-widget/demo/login.html","0f10afabe0311239c281a7e9a91f1b0b"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/rollup.config.js","171b7912f3e5340c9fc61251ef193bd1"],["/live2d-widget/src/index.js","327f309d88198834dd4bd2fe6a606dc5"],["/live2d-widget/src/message.js","5f980402bfc065345253e6ce024dc1de"],["/live2d-widget/src/model.js","b5562a236eeda01308e5a4107e6ec80f"],["/live2d-widget/src/tools.js","fda693610457903a19c3861298fb416a"],["/live2d-widget/src/utils.js","2578501ad87a8d99ceec05d79fe2c64b"],["/live2d-widget/src/waifu-tips.js","e49236cc73dbcfda841588bba50dbfd3"],["/live2d-widget/waifu-tips.js","7ef813587dba0e4bc55c7ccafcaea531"],["/live2d-widget/waifu.css","d3c1302c311cd2e20841904a016a6427"],["/page/2/index.html","74c2c0da050dab61c006459a91b715b3"],["/page/3/index.html","4547e03cbb9d2e1f0adcabb207921658"],["/sw-register.js","f7cd2c81e244b7c5e13dc88e3f075605"],["/tags/AES/index.html","a2689bc6b64f79f6904b20132a59787c"],["/tags/DSA/index.html","fcf6236561756e81ef538691c0f5edfa"],["/tags/HNP/index.html","66ff45b962d222b1f9fe2cf6259ffd90"],["/tags/LWE/index.html","22dfabd4d4f4fd2ec52ed24371d1dbb9"],["/tags/Lattice/index.html","1ec4c58637054c2d8aeb161fc148f100"],["/tags/MITM/index.html","c8b11d18061beed38fce5711751c374d"],["/tags/MT19937/index.html","a46db115e87ef59358e0c755be1e2d80"],["/tags/RSA/index.html","70a4cc4183a284d4bc7eb9ac56b63d76"],["/tags/Shamir/index.html","ed4f117014bad022c68c6c2cee7d3420"],["/tags/Wp/index.html","89b1f3a9026f8fcf45cfa89944c64f89"],["/tags/Wp/page/2/index.html","7fabc26cf10d13c6ff77e6dc414f371c"],["/tags/index.html","5cee5bab90286ffcf4555f4bc7d21eb6"],["/tags/sage/index.html","082434ee840a404b4bf422f5103867f2"],["/tags/古典密码/index.html","1b6464fb5dc263874deff81965f7e1ff"],["/tags/密码知识/index.html","b68ea8c202aa23b3aa0354681dfb3a35"],["/tags/背包密码/index.html","8836bc13104427730192d35c2b165266"],["/杂记/Linux-里遇到的sage问题/index.html","f80b31c69e1574170faeacf31b496d5e"]];
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
