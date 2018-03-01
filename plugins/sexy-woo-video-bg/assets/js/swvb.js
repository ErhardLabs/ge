$=jQuery;

$(document).ready(function() {

  let homeVideo = $('#landing_yt_player').data('id');


  if (typeof homeVideo !== 'undefined') {

    let fullPath = location.pathname + location.search + location.hash;

    // if ((fullPath.indexOf('/') >= 0) || (fullPath.indexOf('products') !== -1)) {

      // INSERT VIDEO PLAYER
      $('body').prepend(
          '<div class="video-background">' +
          '<div class="video-foreground">' +
          '<iframe class="home_video" id="yt_home_embed" width="1280" height="720" src="https://www.youtube.com/embed/' + homeVideo + '?rel=0&controls=0&showinfo=0&autoplay=1&loop=1&enablejsapi=1&playlist=79EUORqIh0c" frameborder="0" allowfullscreen volume="0"></iframe>' +
          //'<iframe class="home_video" id="yt_home_embed" width="1280" height="720" src="https://www.youtube.com/embed/?listType=playlist&controls=0&showinfo=0&autoplay=1&loop=1&enablejsapi=1&list=PLCcd4NlKH5YzNrrji-f_3elED_tmifwUz" frameborder="0" allowfullscreen volume="0"></iframe>' +
          '</div>' +
          '</div>'
      );

      // Loads the IFrame Player API code asynchronously.
      let tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      let firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      let player;

      // LOAD iFrame after content loads and a button is clicked
      let div, n,
          v = document.getElementsByClassName("youtube-player");
      for (n = 0; n < v.length; n++) {
        div = document.createElement("div");
        div.setAttribute("data-id", v[n].dataset.id);
        div.innerHTML = labnolThumb(v[n].dataset.id);
        div.onclick = labnolIframe;
        v[n].appendChild(div);
      }

    // }

  }

  // REMOVE HOME VIDEO IF IT'S MOBILE
  if ($(window).width() < 768) {
    // $('.video-background').remove();
  }


});

function onYouTubeIframeAPIReady() {
  player = new YT.Player('yt_home_embed', {
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady() {
  player.playVideo();
  // Mute!
  player.mute();
}


function labnolThumb(id) {
  let thumb = '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg">',
      play = '<div class="play"></div>';
  return thumb.replace("ID", id) + play;
}

function labnolIframe() {
  let iframe = document.createElement("iframe");
  let embed = "https://www.youtube.com/embed/ID?autoplay=1?showinfo=0";
  iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("allowfullscreen", "1");
  this.parentNode.replaceChild(iframe, this);

}