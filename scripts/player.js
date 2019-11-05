(function ($) {
  "use strict";
  
  if($('.playlist').length == 0) return;

  var playlist = $( '.playlist' ).mepPlaylist({
    audioHeight: '40',
    audioWidth: '100%',
    videoHeight: '40',
    videoWidth: '100%',
    audioVolume: 'vertical',
    mepPlaylistLoop: true,
    alwaysShowControls: true,
    mepSkin: 'mejs-audio',
    mepResponsiveProgress: true,
    mepSelectors: {
      playlist: '.playlist',
      track: '.track',
      tracklist: '.tracks'
    },
    features: [
      'meplike',
      'mepartwork',
      'mepcurrentdetails',
      'mepplaylist',
      'mephistory',
      'mepprevioustrack',
      'playpause',
      'mepnexttrack',
      'progress',
      'current',
      'duration',
      'volume',
      'mepicons',
      'meprepeat',
      'mepshuffle',
      'mepsource',
      'mepbuffering',
      'meptracklist',
      'mepplaylisttoggle',
      'youtube'
    ],
    mepPlaylistTracks: [
      {
            "id": "item-1",
            "title": "Title",
            "except": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam tu hanc copiosiorem etiam soles dicere. Nihil illinc huc pervenit.",
            "link": "track.detail.html",
            "thumb": { "src": "images/default.png" },
			/* For src, just replace 's0hZTkoc1Mpm' with whatever the link of the vocaroo is */
            "src": "https://vocaroo.com/media_command.php?media=s0hZTkoc1Mpm&command=download_mp3",
            "meta": {
                "author": "Artist",
                "authorlink": "artist.detail.html",
                "date": "01.01.2018",
                "category": "Genre",
                "play": 3200,
                "like": 210,
                "duration": "2:50"
            }
        },
        {
            "id": "item-2",
            "title": "Title",
            "except": "Hidem saepe faciamus. Quid ad utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "track.detail.html",
            "thumb": { "src": "images/default.png" },
            "src": "https://metroui.org.ua/res/hotel_california.mp3",
            "meta": {
                "author": "Artist",
                "authorlink": "artist.detail.html",
                "date": "01.01.2018",
                "category": "Genre",
                "play": 30,
                "like": 10,
                "duration": "4:25"
            }
        },
        {
            "id": "item-3",
            "title": "Title",
            "except": "Tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "track.detail.html",
            "thumb": { "src": "images/default.png" },
            "src": "file:///C:/Users/Ben/Downloads/Aud.io/Aud.io/images/mii.mp3",
            "meta": {
                "author": "Artist",
                "authorlink": "artist.detail.html",
                "date": "01.01.2018",
                "category": "Genre",
                "play": 300,
                "like": 10,
                "duration": "2:50"
            }
        },
		{
            "id": "item-4",
            "title": "Title",
            "except": "Hidem saepe faciamus. Quid ad utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "track.detail.html",
            "thumb": { "src": "images/default.png" },
            "src": "https://metroui.org.ua/res/hotel_california.mp3",
            "meta": {
                "author": "Artist",
                "authorlink": "artist.detail.html",
                "date": "01.01.2018",
                "category": "Genre",
                "play": 30,
                "like": 10,
                "duration": "4:25"
            }
        },
		{
            "id": "item-5",
            "title": "Title",
            "except": "Hidem saepe faciamus. Quid ad utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "track.detail.html",
            "thumb": { "src": "images/default.png" },
            "src": "file:///C:/Users/Ben/Downloads/Aud.io/Aud.io/images/mii.mp3",
            "meta": {
                "author": "Artist",
                "authorlink": "artist.detail.html",
                "date": "01.01.2018",
                "category": "Genre",
                "play": 30,
                "like": 10,
                "duration": "4:25"
            }
        },
		{
            "id": "item-6",
            "title": "Title",
            "except": "Hidem saepe faciamus. Quid ad utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "track.detail.html",
            "thumb": { "src": "images/default.png" },
            "src": "https://metroui.org.ua/res/hotel_california.mp3",
            "meta": {
                "author": "Artist",
                "authorlink": "artist.detail.html",
                "date": "01.01.2018",
                "category": "Genre",
                "play": 30,
                "like": 10,
                "duration": "4:25"
            }
        },
		{
            "id": "item-7",
            "title": "Title",
            "except": "Hidem saepe faciamus. Quid ad utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "track.detail.html",
            "thumb": { "src": "images/default.png" },
            "src": "file:///C:/Users/Ben/Downloads/Aud.io/Aud.io/images/mii.mp3",
            "meta": {
                "author": "Artist",
                "authorlink": "artist.detail.html",
                "date": "01.01.2018",
                "category": "Genre",
                "play": 30,
                "like": 10,
                "duration": "4:25"
            }
        },
		{
            "id": "item-8",
            "title": "Title",
            "except": "Hidem saepe faciamus. Quid ad utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "track.detail.html",
            "thumb": { "src": "images/default.png" },
            "src": "https://metroui.org.ua/res/hotel_california.mp3",
            "meta": {
                "author": "Artist",
                "authorlink": "artist.detail.html",
                "date": "01.01.2018",
                "category": "Genre",
                "play": 30,
                "like": 10,
                "duration": "4:25"
            }
        },
		{
            "id": "item-9",
            "title": "Title",
            "except": "Hidem saepe faciamus. Quid ad utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "track.detail.html",
            "thumb": { "src": "images/default.png" },
            "src": "file:///C:/Users/Ben/Downloads/Aud.io/Aud.io/images/mii.mp3",
            "meta": {
                "author": "Artist",
                "authorlink": "artist.detail.html",
                "date": "01.01.2018",
                "category": "Genre",
                "play": 30,
                "like": 10,
                "duration": "4:25"
            }
        },
		{
            "id": "item-10",
            "title": "Title",
            "except": "Hidem saepe faciamus. Quid ad utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "track.detail.html",
            "thumb": { "src": "images/default.png" },
            "src": "https://metroui.org.ua/res/hotel_california.mp3",
            "meta": {
                "author": "Artist",
                "authorlink": "artist.detail.html",
                "date": "01.01.2018",
                "category": "Genre",
                "play": 30,
                "like": 10,
                "duration": "4:25"
            }
        },
		{
            "id": "item-11",
            "title": "Title",
            "except": "Hidem saepe faciamus. Quid ad utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "track.detail.html",
            "thumb": { "src": "images/default.png" },
            "src": "file:///C:/Users/Ben/Downloads/Aud.io/Aud.io/images/mii.mp3",
            "meta": {
                "author": "Artist",
                "authorlink": "artist.detail.html",
                "date": "01.01.2018",
                "category": "Genre",
                "play": 30,
                "like": 10,
                "duration": "4:25"
            }
        },
		{
            "id": "item-12",
            "title": "Title",
            "except": "Hidem saepe faciamus. Quid ad utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "track.detail.html",
            "thumb": { "src": "images/default.png" },
            "src": "https://metroui.org.ua/res/hotel_california.mp3",
            "meta": {
                "author": "Artist",
                "authorlink": "artist.detail.html",
                "date": "01.01.2018",
                "category": "Genre",
                "play": 30,
                "like": 10,
                "duration": "4:25"
            }
        },
    ]
  });

  // get player, then you can use the player.mepAdd(), player.mepRemove(), player.mepSelect()
  var player = playlist.find('audio, video')[0].player;

  // event on like btn
  player.$node.on('like.mep', function(e, trackid){
    $('[track-id='+trackid+']').toggleClass('is-like');
  });

  // event on play
  player.$node.on('play', function(e){
    updateDisplay();
  });

  // event on pause
  player.$node.on('pause', function(e){
    updateDisplay();
  });

  // update when pjax end
  $(document).on('pjaxEnd', function() {
    updateDisplay();
  });

  // simulate the play btn
  $(document).on('click.btn', '.btn-playpause', function(e){
      e.stopPropagation();
      var self = $(this);
      if( self.hasClass('is-playing') ){
        self.removeClass('is-playing');
        player.pause();
      }else{
        var item = getItem(self);
        item && player.mepAdd(item, true);
      }
  });

  function updateDisplay(){
    $('[data-id]').removeClass('active').find('.btn-playpause').removeClass('is-playing').parent().removeClass('active');
    var track = player.mepGetCurrentTrack();
    if(!track || !track.id) return;
    var item = $('[data-id="'+track.id+'"]');
    if( player.media.paused ){
      item.removeClass('active').find('.btn-playpause').removeClass('is-playing').parent().removeClass('active');
    }else{
      item.addClass('active').find('.btn-playpause').addClass('is-playing').parent().addClass('active');
    }
  }

  // get item data, you can use ajax to get data from server
  function getItem(self){
    var item = self.closest('.item');
    // track detail
    if(!item.attr('data-src')){
      self.toggleClass('is-playing');
      $('#tracks').find('.btn-playpause').first().trigger('click');
      return false;
    }

    var obj = {
        meta: {
           author: item.find('.item-author').find('a').text()
          ,authorlink : item.find('.item-author').find('a').attr('href')
        }
        ,src: self.closest('[data-src]').attr("data-src")
        ,thumb: {
          src: item.find('.item-media-content').css("background-image").replace(/^url\(["']?/, '').replace(/["']?\)$/, '')
        }
        ,title: item.find('.item-title').find('a').text()
        ,link: item.find('.item-title').find('a').attr('href')
        ,id: self.attr("data-id") ? self.attr("data-id") : self.closest('[data-id]').attr("data-id")
    };
    return obj;
  }

})(jQuery);
