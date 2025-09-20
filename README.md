# Facebook Audience Network Ads

This plugin provides a simple interface for displaying Facebook Audience Network ads in your Cordova, Capacitor applications.

<p align="center"><br><img src="https://i.ibb.co/FLXkfSGc/govindbhumkar-cordova-facebook-ads-1.png" alt="govindbhumkar-cordova-facebook-ads-1" width="128" height="128" /></p>
<p align="center"><strong><code>@govindbhumkar/cordova-facebook-ads</code></strong></p>

<p align="center">
  <img src="https://img.shields.io/maintenance/yes/2025?style=flat-square" />
  <a href="https://www.npmjs.com/package/@govindbhumkar/cordova-facebook-ads"><img src="https://img.shields.io/npm/l/@govindbhumkar/cordova-facebook-ads?style=flat-square" /></a>
<br>
  <a href="https://www.npmjs.com/package/@govindbhumkar/cordova-facebook-ads"><img src="https://img.shields.io/npm/dw/@govindbhumkar/cordova-facebook-ads?style=flat-square" /></a>
  <a href="https://www.npmjs.com/package/@govindbhumkar/cordova-facebook-ads"><img src="https://img.shields.io/npm/v/@govindbhumkar/cordova-facebook-ads?style=flat-square" /></a>
</p>

<table>
  <tr>
    <th>Banner Ads</th>
    <th>Interstitial Ads</th>
  </tr>
  <tr>
    <td><img src="https://4.bp.blogspot.com/-T-9Se64wMXE/XPTc1DCv3rI/AAAAAAAAPcE/C5sAXRllwO0JtdbUUL4CKSKwshwfGFj2wCLcBGAs/s1600/1.png" width="350" alt="Hide facebook banner ads"></td>
    <td><img src="https://1.bp.blogspot.com/-2b3g7OSzTqk/XPTc1U-FYZI/AAAAAAAAPcI/2IJN-wkYgWoWr75vNOhv5RjPTYhxfDR6wCLcBGAs/s1600/3.png" width="350" alt="Facebook Interstitial"></td>
  </tr>
</table>


## Table of Contents
- [Installation](#installation)
- [SDK Version](#sdk-version)
  - [Load and Show Banner Ads](#load-and-show-banner-ads)
  - [Load Banner Ads Only](#load-banner-ads-only)
  - [Show Banner Ads](#show-banner-ads)
  - [Hide/Destroy Banner Ads](#hidedestroy-banner-ads)
- [Interstitial Ads](#interstitial-ads)
  - [Load Interstitial Ads](#load-interstitial-ads)
  - [Show Interstitial Ads](#show-interstitial-ads)
- [Reward Video Ads](#reward-video-ads)
  - [Load Reward Video Ads](#load-reward-video-ads)
  - [Show Reward Video Ads](#show-reward-video-ads)
- [Supported Platforms](#supported-platforms)
- [Thanks](#thanks)

## Installation
### Using the Cordova CLI
```bash
$ cordova plugin add @govindbhumkar/cordova-facebook-ads
```

### npm
```bash
$ npm install @govindbhumkar/cordova-facebook-ads
```

## SDK Version
This plugin uses the latest Facebook Audience Network SDK. Current version:
```
com.facebook.android:audience-network-sdk:6.+
```

## Banner Ads
### Load and Show Banner Ads
> **Note:** It's strongly recommended to use `loadAndShowBannerAds` for banner ads instead of loading, showing, and hiding separately.

#### Syntax
```javascript
cordova.facebookads.loadAndShowBannerAds(options, bannerSuccess, bannerFail);
```

#### Options
```javascript
var options = {
  bannerid: "523519301434xxx_xxxxxxxxxxxxxxx",
  isTesting: true|false,
  position: "BOTTOM_CENTER", // Optional: TOP_CENTER, CENTER, or BOTTOM_CENTER
  margin: 0 // Optional: margin in pixels, behavior depends on position
}
```

#### Position and Margin Behavior
- **BOTTOM_CENTER**: Applies margin-bottom
- **TOP_CENTER**: Applies margin-top
- **CENTER**: Applies equal vertical margins

#### Example
```javascript
var options = {
  bannerid: "523519301434xxx_xxxxxxxxxxxxxxx",
  isTesting: true,
  position: "BOTTOM_CENTER",
  margin: 0
};

cordova.facebookads.loadAndShowBannerAds(options, bannerSuccess, bannerFail);

function bannerSuccess(evt) {
  if(evt === "AdLoaded") {
     console.log("Facebook AdLoaded");
  }
  else if(evt === "AdClicked") {
     console.log("Facebook AdClicked");
  }
  else if(evt === "AdImpression") {
     console.log("Facebook AdImpression");
  }
  else if(evt === "AdDistroyed") {
     console.log("Facebook banner AdDistroyed");
  }  
  else if(evt === "AdHidden") {
     console.log("Facebook AdHidden");
  }  
}

function bannerFail(result) {
  console.log(result);
}
```

#### Screenshot
<p align="center">
  <img src="https://4.bp.blogspot.com/-T-9Se64wMXE/XPTc1DCv3rI/AAAAAAAAPcE/C5sAXRllwO0JtdbUUL4CKSKwshwfGFj2wCLcBGAs/s1600/1.png" width="350" alt="Facebook banner ads">
</p>

### Load Banner Ads Only
#### Syntax
```javascript
cordova.facebookads.loadBannerAds(options, bannerSuccess, bannerFail);
```

#### Options
```javascript
var options = {
  bannerid: "523519301434xxx_xxxxxxxxxxxxxxx",
  isTesting: true|false,
  position: "BOTTOM_CENTER", // Optional: TOP_CENTER, CENTER, or BOTTOM_CENTER
  margin: 0 // Optional: margin in pixels, behavior depends on position
}
```

#### Example
```javascript
cordova.facebookads.loadBannerAds(options, bannerSuccess, bannerFail);

function bannerSuccess(evt) {
  if(evt === "AdLoaded") {
     console.log("Facebook AdLoaded");
  }
  else if(evt === "AdClicked") {
     console.log("Facebook AdClicked");
  }
  else if(evt === "AdImpression") {
     console.log("Facebook AdImpression");
  }
  else if(evt === "AdDistroyed") {
    console.log("Facebook banner AdDistroyed");
  }   
  else if(evt === "AdHidden") {
     console.log("Facebook AdHidden");
  }  
}

function bannerFail(result) {
  console.log(result);
}
```

### Show Banner Ads
#### Syntax
```javascript
cordova.facebookads.showBannerAds(bannerSuccess, bannerFail);
```

#### Example
```javascript
cordova.facebookads.showBannerAds(bannerSuccess, bannerFail);

function bannerSuccess(evt) {
  if(evt === "AdLoaded") {
     console.log("Facebook AdLoaded");
  }
  else if(evt === "AdClicked") {
     console.log("Facebook AdClicked");
  }
  else if(evt === "AdImpression") {
     console.log("Facebook AdImpression");
  }
  else if(evt === "AdDistroyed") {
    console.log("Facebook banner AdDistroyed");
  }  
  else if(evt === "AdHidden") {
     console.log("Facebook AdHidden");
  }  
}

function bannerFail(result) {
  console.log(result);
}
```

### Hide/Destroy Banner Ads
#### Syntax
```javascript
cordova.facebookads.distroyBannerAds(bannerSuccess, bannerFail);
```

#### Example
```javascript
cordova.facebookads.distroyBannerAds(bannerSuccess, bannerFail);

function bannerSuccess(evt) {
  if(evt === "AdLoaded") {
     console.log("Facebook AdLoaded");
  }
  else if(evt === "AdClicked") {
     console.log("Facebook AdClicked");
  }
  else if(evt === "AdImpression") {
     console.log("Facebook AdImpression");
  }
  else if(evt === "AdDistroyed") {
     console.log("Facebook AdDistroyed");
  }  
}

function bannerFail(result) {
  console.log(result);
}
```

#### Screenshot
<p align="center">
  <img src="https://2.bp.blogspot.com/-pE3cKxZ3uDA/XPTc1FDLcgI/AAAAAAAAPcA/q_d55Dk1HTcBeZaDB0x3W52_QbVyliubwCLcBGAs/s1600/2.png" width="350" alt="Hide facebook banner ads">
</p>

## Interstitial Ads
### Load Interstitial Ads
#### Syntax
```javascript
cordova.facebookads.loadInterstitialAds(options, interstitialSuccess, interstitialFail);
```

#### Options
```javascript
var options = {
  interstitialid: "52351930143xxx_xxxxxxxxxxxxxxx",
  isTesting: true|false
}
```

#### Example
```javascript
var options = {
  interstitialid: "52351930143xxx_xxxxxxxxxxxxxxx",
  isTesting: true
};

cordova.facebookads.loadInterstitialAds(options, interstitialSuccess, interstitialFail);

function interstitialSuccess(evt) {
  if(evt === "AdDisplayed") {
     console.log("Facebook AdDisplayed");
  }
  else if(evt === "AdClosed") {
     console.log("Facebook AdClosed");
  }
  else if(evt === "AdLoaded") {
     console.log("Facebook AdLoaded");
  }
  else if(evt === "AdClicked") {
     console.log("Facebook AdClicked");
  }
  else if(evt === "AdImpression") {
     console.log("Facebook AdImpression");
  }
}

function interstitialFail(result) {
  console.log(result);
}
```

### Show Interstitial Ads
#### Syntax
```javascript
cordova.facebookads.showInterstitialAds(interstitialSuccess, interstitialFail);
```

#### Example
```javascript
cordova.facebookads.showInterstitialAds(interstitialSuccess, interstitialFail);

function interstitialSuccess(evt) {
  if(evt === "AdDisplayed") {
     console.log("Facebook AdDisplayed");
  }
  else if(evt === "AdClosed") {
     console.log("Facebook AdClosed");
  }
  else if(evt === "AdLoaded") {
     console.log("Facebook AdLoaded");
  }
  else if(evt === "AdClicked") {
     console.log("Facebook AdClicked");
  }
  else if(evt === "AdImpression") {
     console.log("Facebook AdImpression");
  }
}

function interstitialFail(result) {
  console.log(result);
}
```

#### Screenshot
<p align="center">
  <img src="https://1.bp.blogspot.com/-2b3g7OSzTqk/XPTc1U-FYZI/AAAAAAAAPcI/2IJN-wkYgWoWr75vNOhv5RjPTYhxfDR6wCLcBGAs/s1600/3.png" width="350" alt="Facebook Interstitial">
</p>

## Reward Video Ads
### Load Reward Video Ads
#### Syntax
```javascript
cordova.facebookads.loadRewardVideoAd(options, videoRewardSuccess, videoRewardFail);
```

#### Options
```javascript
var options = {
  videoid: "52351930143xxx_xxxxxxxxxxxxxxx",
  isTesting: true|false
}
```

#### Example
```javascript
var options = {
  videoid: "52351930143xxx_xxxxxxxxxxxxxxx",
  isTesting: true
};

cordova.facebookads.loadRewardVideoAd(options, videoRewardSuccess, videoRewardFail);

function videoRewardSuccess(evt) {
  if(evt === "AdLoaded") {
     console.log("Facebook AdLoaded");
  }
  else if(evt === "AdClicked") {
     console.log("Facebook AdClicked");
  }
  else if(evt === "AdPlaying") {
     console.log("Facebook AdPlaying");
  }
  else if(evt === "AdCompleted") {
     console.log("Facebook AdCompleted");
  }
  else if(evt === "AdClosed") {
     console.log("Facebook AdClosed");
  }
}

function videoRewardFail(result) {
  console.log(result);
}
```

> **Important Note:** If you get the error "Rewarded video ad failed to load: The display format in the ad request does not match the display format specified for this placement. Each placement can only be used with a single display format. You can create multiple placements in order to use multiple display formats.", follow these steps:
> 1. You must have the Audience Network SDK integrated in your game
> 2. Your app must have an active, approved Audience Network account with payment information
> 3. Game only: Your game app is active and added to your account
> 4. Ad position: You must already have a rewarded video ad unit in your game
>
> Reference: [Stack Overflow](https://stackoverflow.com/questions/50532615/facebook-rewarded-video-ad-failed-to-load)

### Show Reward Video Ads
#### Syntax
```javascript
cordova.facebookads.showRewardVideoAd(videoRewardSuccess, videoRewardFail);
```

#### Example
```javascript
cordova.facebookads.showRewardVideoAd(videoRewardSuccess, videoRewardFail);

function videoRewardSuccess(evt) {
  if(evt === "AdLoaded") {
     console.log("Facebook AdLoaded");
  }
  else if(evt === "AdClicked") {
     console.log("Facebook AdClicked");
  }
  else if(evt === "AdPlaying") {
     console.log("Facebook AdPlaying");
  }
  else if(evt === "AdCompleted") {
     console.log("Facebook AdCompleted");
  }
  else if(evt === "AdClosed") {
     console.log("Facebook AdClosed");
  }
}

function videoRewardFail(result) {
  console.log(result);
}
```

## Supported Platforms
- Android

## Thanks
This plugin is a modified fork of [cordova-plugin-codeplay-facebookads-free](https://githThis plugin is a modified fork of [cordova-plugin-codeplay-facebookads-free](https://github.com/merbin2012/cordova-plugin-codeplay-facebookads-free). Special thanks to [merbin2012](https://github.com/merbin2012) for creating the original plugin that served as the foundation for this enhanced version.
