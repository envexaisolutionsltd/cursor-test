(function(){
    'use strict';
        var player = {"id":"3e9487a","name":"Default Player","type":"classic","size":"medium","stream":{"station ":"s9c4686c03","output":null,"streaming_url":"https:\/\/streamer.radio.co\/s9c4686c03"},"theme":{"width":400,"background_colour":"#fcfcfc","text_colour":"#364349","accent_colour":"#7b919d","rounded_corners":true,"track_information":true},"settings":{"autoplay":false,"artwork":true,"spotify":false,"popout":false},"embed_url":"https:\/\/embed.radio.co\/player\/3e9487a.html","social":{"twitter":false,"facebook_share":false,"embed":false,"template":""},"station":null};
    var advertising = {"enabled":false,"src":"https:\/\/play.adtonos.com\/attc-CJj2JypNxNExwMjSm.min.js","streaming_hostname":"streamer.radio.co"};
        var i = document.createElement('iframe');

    var style = "border: none;overflow:hidden;";
    var width = player.theme.width;

    i.src = player.embed_url;
    i.width = '100%';
    i.allow = 'autoplay';

    if (player.size !== 'small') {
        style += 'max-width:' + width + 'px;margin:0 auto;';
    }

    i.setAttribute('scrolling', 'no');
    i.setAttribute('style', style);

    var s = document.getElementsByTagName('script');
    s = s[s.length-1];

    if (advertising.enabled) {
        var advertisingScript = document.createElement('script');
        advertisingScript.async = true;
        advertisingScript.defer = true;
        advertisingScript.src = advertising.src;

        var streamerHostScript = document.createElement('script');
        streamerHostScript.textContent = 'window.streamerHost = "' + advertising.streaming_hostname + '";';
    }

    if(s.parentNode.nodeName === 'HEAD'){
        window.onload = function() {
            document.body.appendChild(i);
            if (advertising.enabled) {
                document.body.appendChild(streamerHostScript);
                document.body.appendChild(advertisingScript);
            }
        };
    }else{
        s.parentNode.insertBefore(i, s);
        if (advertising.enabled) {
            s.parentNode.insertBefore(streamerHostScript, s);
            s.parentNode.insertBefore(advertisingScript, s);
        }
    }

    window.addEventListener('message', function(e) {
        var eventName = e.data[0];
        var data = e.data[1];
        if(eventName === player.id+'.setHeight') {
            i.style.height = data+'px';
        }
    }, false);

    i.addEventListener('load', function(){
        var targetUrl = player.embed_url.split('/').splice(0,3).join('/'); // strips everything after hostname
        setTimeout(function() {
            i.contentWindow.postMessage(JSON.stringify(['parent', location]), targetUrl);
        }, 1000); // Prevent the iframe not being ready for messages.
    });
}());
