var admobid = {};

// TODO: replace the following ad units with your own
if( /(android)/i.test(navigator.userAgent) ) {
  admobid = { // for Android
    banner: 'ca-app-pub-2785420618056516/2311471187',
    interstitial: 'ca-app-pub-2785420618056516/6881271587'
  };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
  admobid = { // for iOS
    banner: 'ca-app-pub-2785420618056516/3788204384',
    interstitial: 'ca-app-pub-2785420618056516/9834737986'
  };
} else {
  admobid = { // for Windows Phone
    // banner: 'ca-app-pub-6869992474017983/8878394753',
    // interstitial: 'ca-app-pub-6869992474017983/1355127956'
  };
}



function initApp() {
  if (! AdMob ) { alert( 'admob plugin not ready' ); return; }


  // setTimeout(function() {
  //       // this will create a banner on startup
  //       AdMob.createBanner( {
  //         adId: admobid.banner,
  //         position: AdMob.AD_POSITION.BOTTOM_CENTER,
  //         // isTesting: true, // TODO: remove this line when release
  //         overlap: false,
  //         offsetTopBar: false,
  //         bgColor: 'black'
  //       } );
  //
  //       // this will load a full screen ad on startup
  //       AdMob.prepareInterstitial({
  //         adId: admobid.interstitial,
  //         // isTesting: true, // TODO: remove this line when release
  //         autoShow: true
  //       });
  // }, 2000);

    // this will create a banner on startup

          // AdMob.createBanner( {
          //   adId: admobid.banner,
          //   position: AdMob.AD_POSITION.BOTTOM_CENTER,
          //   // isTesting: true, // TODO: remove this line when release
          //   overlap: false,
          //   offsetTopBar: false,
          //   bgColor: 'black'
          // } );

    function someAdCode() {
              // this will load a full screen ad on startup
              AdMob.prepareInterstitial({
                adId: admobid.interstitial,
                // isTesting: true, // TODO: remove this line when release
                autoShow: true
              });

              AdMob.createBanner( {
                adId: admobid.banner,
                position: AdMob.AD_POSITION.BOTTOM_CENTER,
                // isTesting: true, // TODO: remove this line when release
                overlap: false,
                offsetTopBar: false,
                bgColor: 'black'
              } );
    }

    // start it in 2 seconds
    setTimeout(function() {
        someAdCode();
        // schedule it to repeat every 1.5 minutes
        setInterval(someAdCode, 1.5 * 60 * 1000); // 1000 = 1s
    }, 500);

///////     rewar                                         ded video
    // // preppare and load ad resource in background, e.g. at begining of game level
    // if(AdMob) AdMob.prepareRewardVideoAd( {adId:admobid.interstitial, autoShow:false} );
    // 'ca-app-pub-2785420618056516/9648535187'
    // // show the interstitial later, e.g. at end of game level
    // if(AdMob) AdMob.showRewardVideoAd();
///////     rewarded video



}
// setInterval(function() {
      if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
          document.addEventListener('deviceready', initApp, false);
      } else {
          initApp();
      }
// }, 10000);
