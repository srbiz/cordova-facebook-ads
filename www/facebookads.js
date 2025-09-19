var exec = require('cordova/exec');

/**
 * Load and show banner ads with enhanced positioning options
 * @param {Object} arg0 - Configuration object with properties:
 *   - bannerid: Facebook banner ad ID
 *   - isTesting: Whether to use test mode
 *   - position: Banner position (TOP_CENTER, CENTER, or BOTTOM_CENTER)
 *   - margin: Margin in pixels (applied based on position)
 * @param {Function} success - Success callback
 * @param {Function} error - Error callback
 */
exports.loadAndShowBannerAds = function (arg0, success, error) {
    exec(success, error, 'facebookads', 'loadAndShowBannerAds',[arg0]);
};

/**
 * Load banner ads with enhanced positioning options
 * @param {Object} arg0 - Configuration object with properties:
 *   - bannerid: Facebook banner ad ID
 *   - isTesting: Whether to use test mode
 *   - position: Banner position (TOP_CENTER, CENTER, or BOTTOM_CENTER)
 *   - margin: Margin in pixels (applied based on position)
 * @param {Function} success - Success callback
 * @param {Function} error - Error callback
 */
exports.loadBannerAds = function (arg0, success, error) {
    exec(success, error, 'facebookads', 'loadBannerAds',[arg0]);
};


exports.showBannerAds = function (success, error) {
    exec(success, error, 'facebookads', 'showBannerAds');
};





exports.hideBannerAds = function (success, error) {
    exec(success, error, 'facebookads', 'hideBannerAds');
};





exports.distroyBannerAds = function (success, error) {
    exec(success, error, 'facebookads', 'distroyBannerAds');
};

exports.loadInterstitialAds = function (arg0, success, error) {
    exec(success, error, 'facebookads', 'loadInterstitialAds', [arg0]);
};

exports.showInterstitialAds = function (success, error) {
    exec(success, error, 'facebookads', 'showInterstitialAds');
};

exports.loadRewardVideoAd = function (arg0,success, error) {
    exec(success, error, 'facebookads', 'loadRewardVideoAd',[arg0]);
};

exports.showRewardVideoAd = function (success, error) {
    exec(success, error, 'facebookads', 'showRewardVideoAd');
};

