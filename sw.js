/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Crypto/2023年春秋杯网络安全联赛冬季赛/index.html","97c960dcdce619bf889feeae0f06ff27"],["/Crypto/2023第六届安洵杯/index.html","1966c1a0fd0f904ce2a2bc2b72c41b45"],["/Crypto/2024第一届VCTF纳新赛/index.html","1a64a8e5d30f6aaa7ad4a0014e3eca70"],["/Crypto/2024羊城杯/index.html","6774e2d5cce77c902e901eb1fd80cbf1"],["/Crypto/CBC-Padding-Oracle-Attack/index.html","88dbb4d19d3cb23d5dfbe293e62ed9ce"],["/Crypto/DASCTF-2024暑期挑战赛/index.html","1aea042e0eeeb0cff03889107ea1e06f"],["/Crypto/DSA/index.html","57518939a668a28b0810af6f7c694176"],["/Crypto/LFSR初探/index.html","5e7a483fce1fda178d068d443f73c5d7"],["/Crypto/LitCTF2024/index.html","e3d6ce966053c39e7a834180afe6a46b"],["/Crypto/MT19937实战/index.html","313267fa4563ca3c8014679892dc7c75"],["/Crypto/NKCTF2023/index.html","f9e4eb905281b024a6d81d56d613c9da"],["/Crypto/NSSCTF-Round16/index.html","78a1132861290502af520b03ff662ca8"],["/Crypto/NSSCTF-Round17/index.html","46110cffe91023f1168464e08f791c1f"],["/Crypto/NSSCTF-Round18/index.html","9a01292f19b6b655099fd4af395ea31e"],["/Crypto/RSA之共模攻击/index.html","6e181f55840e0b8e58a832d73bd5eb21"],["/Crypto/SCTF2024/index.html","ee6670a2ca1e780e613b9b694d8a3a56"],["/Crypto/SICTF-Round-3/index.html","90d7f46bd3e40a51202fe0ef4d8d14b8"],["/Crypto/Shamir门限方案/index.html","ca8ad405b4073d3a2de1bfcda7d7fb1e"],["/Crypto/WKCTF-2024/index.html","66c5855ae865c043775310cf5eabe8eb"],["/Crypto/ctfshow元旦水友节/index.html","56cf8f43f8feef5c9d66fcb322d1e3fd"],["/Crypto/“近期的一些比赛”/index.html","24f0ca08f91904dfb8c2ee37368dc270"],["/Crypto/再见CBC/index.html","310189ee3d1e1b44a8b5fa93231cc770"],["/Crypto/古典杂记/index.html","cdb4302e25c309e035da9b3c13359282"],["/Crypto/国城杯2024/index.html","451fa95624c50e1e464c73eb7e691155"],["/Crypto/湖南省网络攻防邀请赛初赛复现/index.html","74128a69b64386434d927bcf00e2979e"],["/Crypto/第一届帕鲁杯-CTF挑战赛/index.html","5958fe90b18740881defbb1159743171"],["/Crypto/第十七届ciscn初赛/index.html","e9b2e143239d1834b658c9d94f253b92"],["/Crypto/背包密码/index.html","35452a60554c10f515e1890784f2972c"],["/Crypto/青少年CTF擂台挑战赛-2024-Round-1/index.html","29ee35d9ec4caad03f11cbe7cf9e7a9d"],["/about/index.html","ee49ba2942e13865ace3efae9763b57b"],["/archives/2023/12/index.html","7896089340f3aaba686ab147ebebc2ce"],["/archives/2023/index.html","eca94c64fd2a718b4207f7780173f29c"],["/archives/2024/01/index.html","49b2445e7a1e6f673b92367dab295625"],["/archives/2024/02/index.html","10b3af68f27127504a17e6e56b003546"],["/archives/2024/03/index.html","c0c586906b017b90efe3f837cb7c3f81"],["/archives/2024/04/index.html","c4043ef5a7518424efa235cc9d5de6d0"],["/archives/2024/05/index.html","96e0f11391dbf4731914b4044a7bcd51"],["/archives/2024/06/index.html","9604a2595103d52186fdaa6a265d70e7"],["/archives/2024/07/index.html","f657c79a044074cb0273e4e99668d128"],["/archives/2024/08/index.html","7841e5cae563b59750ff6578540c42f3"],["/archives/2024/09/index.html","1ed24ac85cadbb290f4edd013019133c"],["/archives/2024/11/index.html","6470e469d89c52b389530bdabf9e1229"],["/archives/2024/12/index.html","0155de4decff39d1bc2c24c5b07f4efc"],["/archives/2024/index.html","71f00ed211971f6adc263ed0d3572950"],["/archives/2024/page/2/index.html","44700c5db0477175612fb82049d70ea4"],["/archives/2024/page/3/index.html","d2289ce90606c8b10421a9e821d3fdb3"],["/archives/index.html","86a70ac0a842ebed4e59cd379b7a3259"],["/archives/page/2/index.html","995c722e7fa4deb7a3f2bd8304a7d6b3"],["/archives/page/3/index.html","16fe3dbaf1bae3f1a4475c9b2f90fb79"],["/categories/Crypto/index.html","c92991a0d100c89bf3b4afac017f3ffd"],["/categories/Crypto/page/2/index.html","360339ab59e84db06e5aa1a2994ea377"],["/categories/Crypto/page/3/index.html","32df89449f8c17f8c4460bdf3b51639b"],["/categories/index.html","12194bb8cb83fbc23767e260aefd9bf2"],["/categories/杂记/index.html","506c436f8113731c465681fe8e4f3cf3"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/main.css","fd7e05a9e36be4cb446aa2bdf95dd147"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.png","07aa663bd4714b72e00e724a940463ee"],["/images/background1.jpg","9b89afec2fdf743f48ec3bf6b4db8b92"],["/images/background2.jpg","cb42889f8e8aa4f3c8a174a28089addf"],["/images/background3.jpg","a8976cf4a296f45880b29cc1c1ce293f"],["/images/background4.jpg","039b83cad6f0107728d482c24077716d"],["/images/background5.jpg","95b0bfb6832ff25e3498e135f5806d91"],["/images/background6.jpg","74e5f9a9a7b25dfda016f7c73fc90054"],["/images/background7.jpg","5767f7e0cf91fe219ba920ef5938a8ce"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/index.html","94fcfd8b41c3fc3ed3ac3c3b3499d6b0"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/explosion.min.js","a65a14adaf402e0f5236adb2c7c3cb5d"],["/js/fireworks.js","61fc5a184f80b566f06f1a0fd7acb1ae"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","fb34be7e6472d81cfa5cdbb73df42b99"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","b7e5d5eeb46804436425b5c9680b6e9b"],["/live2d-widget/README.en.html","adc7d9bacfbef2bc60afd113947b2119"],["/live2d-widget/README.html","63a1ce5163917efeaec1c2cdfc13ced5"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","a1cce74b48eea6cdd15a9567f04065be"],["/live2d-widget/demo/demo.html","87b9f57b8a8f905f167991c7a33184d7"],["/live2d-widget/demo/login.html","0f10afabe0311239c281a7e9a91f1b0b"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/rollup.config.js","171b7912f3e5340c9fc61251ef193bd1"],["/live2d-widget/src/index.js","327f309d88198834dd4bd2fe6a606dc5"],["/live2d-widget/src/message.js","5f980402bfc065345253e6ce024dc1de"],["/live2d-widget/src/model.js","b5562a236eeda01308e5a4107e6ec80f"],["/live2d-widget/src/tools.js","fda693610457903a19c3861298fb416a"],["/live2d-widget/src/utils.js","2578501ad87a8d99ceec05d79fe2c64b"],["/live2d-widget/src/waifu-tips.js","e49236cc73dbcfda841588bba50dbfd3"],["/live2d-widget/waifu-tips.js","7ef813587dba0e4bc55c7ccafcaea531"],["/live2d-widget/waifu.css","d3c1302c311cd2e20841904a016a6427"],["/page/2/index.html","44db812176005884c40479f530e25880"],["/page/3/index.html","206bfe7ba23bbf5f0d3c24a9295b3af6"],["/sw-register.js","f56a96a027a38b54a882260aaffdc613"],["/tags/AES/index.html","b07ff0875961ba31e60fedb286fc7999"],["/tags/DSA/index.html","2e8e1d957c6a43afb89d472edc27d6dc"],["/tags/Dual-RSA/index.html","b80a9a564165b9ed066213078c77e65c"],["/tags/ECRSA/index.html","bef4125cd0e4d1de3c1d2af72a053571"],["/tags/HNP/index.html","1451bba0edc9fe30b906d0941a3bb064"],["/tags/LFSR/index.html","f2ddaa4ce89b24062505cb9c3fb7f120"],["/tags/LWE/index.html","74dd6b1a479e43f295fb16fd3e2129e0"],["/tags/Lattice/index.html","943a770e39423ba1dafe026026c432eb"],["/tags/MITM/index.html","fc9f911e34eab095ab05cf48dad245a5"],["/tags/MT19937/index.html","ab12492d7fdaeccc731ce5ecd0e6bddc"],["/tags/RSA/index.html","13c36bbd4ad77fd50f885c7ee8b32dba"],["/tags/Schmidt-Samoa/index.html","230df6a4e94c93ed6f41b834c48b6794"],["/tags/Shamir/index.html","dc8bc3d5336b63b2359e0ceb3cfe1522"],["/tags/Sylvester/index.html","4e1fce8727717ee4dcc857de3801e31b"],["/tags/Wp/index.html","cf7c01263d2b7a88188d4f234e6290e2"],["/tags/Wp/page/2/index.html","15436bec010865ba69ab29f3836c1973"],["/tags/index.html","7398395e7e1c3ce88656264e7c4a87d1"],["/tags/sage/index.html","fd02a40f3e062699b171b74acddb6cef"],["/tags/二元copper/index.html","356c10e8c7f568ca8d13b7226525f561"],["/tags/古典密码/index.html","404f406230008229cc3f3aa6bf54e109"],["/tags/密码知识/index.html","02a63be4d6aac8fb97e2d606f2ddca80"],["/tags/曲线/index.html","7e1d67fd70e231628d994885d38a6819"],["/tags/杂记/index.html","b1111ecd64e0899646044480f3a90572"],["/tags/素数/index.html","3b451a1a8f10e60f2c0bd73e9277f69f"],["/tags/背包密码/index.html","8f6d3700acae297ed7ebcc151c63eadf"],["/杂记/Linux-里遇到的sage问题/index.html","eea75de57d66ed2a6a0dc069b3a58699"]];
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
