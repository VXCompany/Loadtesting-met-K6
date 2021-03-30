import { group, sleep } from 'k6';
import http from 'k6/http';

// Version: 1.2
// Creator: WebInspector

export let options = {
  maxRedirects: 0,
  ext: {
    loadimpact: {
      projectID: 3531475,
      name: "Stap 5: YB",
      distribution: {
        'amazon:de:frankfurt': {
          loadZone: 'amazon:de:frankfurt',
          percent: 100
      }
    }
  }
  },
  stages: [
    { duration: '10s', target: 10 }, 
    { duration: '20s', target: 50 }, 
    { duration: '30s', target: 0 }, 
  ],
  discardResponseBodies: true
};

export default function() {
  group("page_1 - https://relaxing-meerkat-aks.westeurope.cloudapp.azure.com/", function() {
    let req, res;
    req = [{
      "method": "get",
      "url": "https://relaxing-meerkat-aks.westeurope.cloudapp.azure.com/",
      "params": {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
          "sec-ch-ua-mobile": "?0",
          "upgrade-insecure-requests": "1",
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
          "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
          "sec-fetch-site": "none",
          "sec-fetch-mode": "navigate",
          "sec-fetch-user": "?1",
          "sec-fetch-dest": "document",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "nl-NL,nl;q=0.9,en-US;q=0.8,en;q=0.7"
        }
      }
    },{
      "method": "get",
      "url": "https://relaxing-meerkat-aks.westeurope.cloudapp.azure.com/styles.ee04d1000c72ad3f51f4.css",
      "params": {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
          "sec-ch-ua-mobile": "?0",
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
          "accept": "text/css,*/*;q=0.1",
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-dest": "style",
          "referer": "https://relaxing-meerkat-aks.westeurope.cloudapp.azure.com/",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "nl-NL,nl;q=0.9,en-US;q=0.8,en;q=0.7"
        }
      }
    },{
      "method": "get",
      "url": "https://relaxing-meerkat-aks.westeurope.cloudapp.azure.com/runtime.0e49e2b53282f40c8925.js",
      "params": {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
          "sec-ch-ua-mobile": "?0",
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
          "accept": "*/*",
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-dest": "script",
          "referer": "https://relaxing-meerkat-aks.westeurope.cloudapp.azure.com/",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "nl-NL,nl;q=0.9,en-US;q=0.8,en;q=0.7"
        }
      }
    },{
      "method": "get",
      "url": "https://relaxing-meerkat-aks.westeurope.cloudapp.azure.com/polyfills.8c151b8375e767ff858f.js",
      "params": {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
          "sec-ch-ua-mobile": "?0",
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
          "accept": "*/*",
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-dest": "script",
          "referer": "https://relaxing-meerkat-aks.westeurope.cloudapp.azure.com/",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "nl-NL,nl;q=0.9,en-US;q=0.8,en;q=0.7"
        }
      }
    },{
      "method": "get",
      "url": "https://relaxing-meerkat-aks.westeurope.cloudapp.azure.com/main.cdef7c3db3985a301fc9.js",
      "params": {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
          "sec-ch-ua-mobile": "?0",
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
          "accept": "*/*",
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-dest": "script",
          "referer": "https://relaxing-meerkat-aks.westeurope.cloudapp.azure.com/",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "nl-NL,nl;q=0.9,en-US;q=0.8,en;q=0.7"
        }
      }
    },{
      "method": "get",
      "url": "https://relaxing-meerkat-aks.westeurope.cloudapp.azure.com/assets/background.jpg",
      "params": {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
          "sec-ch-ua-mobile": "?0",
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
          "accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-dest": "image",
          "referer": "https://relaxing-meerkat-aks.westeurope.cloudapp.azure.com/styles.ee04d1000c72ad3f51f4.css",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "nl-NL,nl;q=0.9,en-US;q=0.8,en;q=0.7"
        }
      }
    },{
      "method": "get",
      "url": "https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
      "params": {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
          "origin": "https://relaxing-meerkat-aks.westeurope.cloudapp.azure.com",
          "sec-ch-ua-mobile": "?0",
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
          "accept": "*/*",
          "x-client-data": "CJa2yQEIo7bJAQjEtskBCKmdygEI+MfKAQiymssBCOScywEIjZ3LAQipncsB",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "font",
          "referer": "https://relaxing-meerkat-aks.westeurope.cloudapp.azure.com/",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "nl-NL,nl;q=0.9,en-US;q=0.8,en;q=0.7"
        }
      }
    },{
      "method": "get",
      "url": "https://relaxing-meerkat-aks.westeurope.cloudapp.azure.com/assets/config/config.production.json",
      "params": {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
          "accept": "application/json, text/plain, */*",
          "sec-ch-ua-mobile": "?0",
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "referer": "https://relaxing-meerkat-aks.westeurope.cloudapp.azure.com/",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "nl-NL,nl;q=0.9,en-US;q=0.8,en;q=0.7"
        }
      }
    },{
      "method": "get",
      "url": "https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ.woff2",
      "params": {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
          "origin": "https://relaxing-meerkat-aks.westeurope.cloudapp.azure.com",
          "sec-ch-ua-mobile": "?0",
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
          "accept": "*/*",
          "x-client-data": "CJa2yQEIo7bJAQjEtskBCKmdygEI+MfKAQiymssBCOScywEIjZ3LAQipncsB",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "font",
          "referer": "https://relaxing-meerkat-aks.westeurope.cloudapp.azure.com/",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "nl-NL,nl;q=0.9,en-US;q=0.8,en;q=0.7"
        }
      }
    },{
      "method": "get",
      "url": "https://fonts.gstatic.com/s/alegreya/v19/4UacrEBBsBhlBjvfkQjt71kZfyBzPgNG9hU4-6qlkySFrt19.woff",
      "params": {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
          "origin": "https://relaxing-meerkat-aks.westeurope.cloudapp.azure.com",
          "sec-ch-ua-mobile": "?0",
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
          "accept": "*/*",
          "x-client-data": "CJa2yQEIo7bJAQjEtskBCKmdygEI+MfKAQiymssBCOScywEIjZ3LAQipncsB",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "font",
          "referer": "https://relaxing-meerkat-aks.westeurope.cloudapp.azure.com/",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "nl-NL,nl;q=0.9,en-US;q=0.8,en;q=0.7"
        }
      }
    },{
      "method": "get",
      "url": "https://relaxing-meerkat-aks.westeurope.cloudapp.azure.com/assets/favicon-32x32.png",
      "params": {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
          "sec-ch-ua-mobile": "?0",
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
          "accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-dest": "image",
          "referer": "https://relaxing-meerkat-aks.westeurope.cloudapp.azure.com/login",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "nl-NL,nl;q=0.9,en-US;q=0.8,en;q=0.7"
        }
      }
    },{
      "method": "get",
      "url": "https://relaxing-meerkat-aks.westeurope.cloudapp.azure.com/assets/favicon-32x32.png",
      "params": {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
          "Referer": "https://relaxing-meerkat-aks.westeurope.cloudapp.azure.com/login",
          "sec-ch-ua-mobile": "?0",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
        }
      }
    }];
    res = http.batch(req);
    sleep(2);
    req = [{
      "method": "get",
      "url": "https://relaxing-meerkat-aks.westeurope.cloudapp.azure.com/api/candidates/match",
      "params": {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
          "accept": "application/json, text/plain, */*",
          "sec-ch-ua-mobile": "?0",
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "referer": "https://relaxing-meerkat-aks.westeurope.cloudapp.azure.com/match",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "nl-NL,nl;q=0.9,en-US;q=0.8,en;q=0.7"
        }
      }
    },{
      "method": "get",
      "url": "https://relaxing-meerkat-aks.westeurope.cloudapp.azure.com/assets/profile.png",
      "params": {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
          "sec-ch-ua-mobile": "?0",
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
          "accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-dest": "image",
          "referer": "https://relaxing-meerkat-aks.westeurope.cloudapp.azure.com/match",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "nl-NL,nl;q=0.9,en-US;q=0.8,en;q=0.7"
        }
      }
    },{
      "method": "get",
      "url": "https://relaxing-meerkat-aks.westeurope.cloudapp.azure.com/assets/romeo-profile.png",
      "params": {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
          "sec-ch-ua-mobile": "?0",
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
          "accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-dest": "image",
          "referer": "https://relaxing-meerkat-aks.westeurope.cloudapp.azure.com/match",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "nl-NL,nl;q=0.9,en-US;q=0.8,en;q=0.7"
        }
      }
    }];
    res = http.batch(req);
    sleep(2);
    req = [{
      "method": "get",
      "url": "https://relaxing-meerkat-aks.westeurope.cloudapp.azure.com/api/candidates/match",
      "params": {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
          "accept": "application/json, text/plain, */*",
          "sec-ch-ua-mobile": "?0",
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "referer": "https://relaxing-meerkat-aks.westeurope.cloudapp.azure.com/match",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "nl-NL,nl;q=0.9,en-US;q=0.8,en;q=0.7"
        }
      }
    },{
      "method": "get",
      "url": "https://relaxing-meerkat-aks.westeurope.cloudapp.azure.com/assets/mercutio-profile.png",
      "params": {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
          "sec-ch-ua-mobile": "?0",
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
          "accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-dest": "image",
          "referer": "https://relaxing-meerkat-aks.westeurope.cloudapp.azure.com/match",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "nl-NL,nl;q=0.9,en-US;q=0.8,en;q=0.7"
        }
      }
    }];
    res = http.batch(req);
    sleep(2);
    req = [{
      "method": "get",
      "url": "https://relaxing-meerkat-aks.westeurope.cloudapp.azure.com/assets/juliet-profile.png",
      "params": {
        "headers": {
          "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
          "sec-ch-ua-mobile": "?0",
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
          "accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-dest": "image",
          "referer": "https://relaxing-meerkat-aks.westeurope.cloudapp.azure.com/matchmade",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "nl-NL,nl;q=0.9,en-US;q=0.8,en;q=0.7"
        }
      }
    }];
    res = http.batch(req);
    // Random sleep between 20s and 40s
    sleep(2);
  });

}
