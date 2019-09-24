function adsBlocked( callback ) {
        var AdsURL = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';

        var RequestSettings = {
            method: 'HEAD',
            mode: 'no-cors'
        };

        var DeBlockerRequest = new Request( AdsURL, RequestSettings );

        fetch( DeBlockerRequest ).then( function ( response ) {
            return response;
        } ).then( function ( response ) {
            callback( false );
        } ).catch( function ( e ) {
            callback( true );
        });
    }
