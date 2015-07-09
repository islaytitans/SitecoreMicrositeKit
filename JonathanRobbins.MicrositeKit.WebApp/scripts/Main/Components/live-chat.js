var ww = ww || {};

(function ($, feedbackPanel) {
    ww.liveChat = {

        // These are used to handle the set timeout pausing and restarting functionality
        startTime: undefined,
        duration: undefined,

	    init: function () {
			var $liveChat = $('.live-chat');
			this.bindEvents();

            // Set the delay in displaying the promo panel 
			ww.liveChat.duration = $('#hfLiveChatTimer').val() * 1000;
            // Set the panel to be timed
			$liveChat.addClass('timed');
            // start the timer
			this.liveChatPromoTimer(ww.liveChat.duration);

			$('.stage').after($('.live-chat-form'));

		},

	    liveChatPromoTimer: function (duration) {
            // store the strt time so we can compare it to the pause time 
		    ww.liveChat.startTime = new Date().getTime();

            // Start the timer to delay the showing of the promo
		    ww.liveChat.timer = window.setTimeout(function () {
		        $('.live-chat').removeClass('timed');
		        ww.liveChat.showLiveChatPromo()
		    }, duration)
	    },

	    hideLiveChatPromo: function () {

	        var liveChatPromo = $('.live-chat');

	        if (liveChatPromo.hasClass('timed')) {
	            liveChatPromo.addClass('paused');
	            var now = new Date().getTime();
	            var diff = now - ww.liveChat.startTime;
	            ww.liveChat.duration = ww.liveChat.duration - diff;
	            window.clearTimeout(ww.liveChat.timer);
	        }

	        liveChatPromo.removeClass('open');
	        liveChatPromo.addClass('hide');

	    },

		showLiveChatPromo: function () {
            
		    var liveChatPromo = $('.live-chat');

            // If the panel has already been dismissed don't do anything
		    if (liveChatPromo.hasClass('closed')) {
                return
		    }

            // If the timer is running and it has been paused restart it and show after the duration reamining
		    if (liveChatPromo.hasClass('timed') && liveChatPromo.hasClass('paused')) {
		        liveChatPromo.removeClass('paused');
                // restart the timer with the updated duration
		        ww.liveChat.liveChatPromoTimer(ww.liveChat.duration)
		        return;
		    }
		    
            // If the timer isn't paused show the promo panel
		    liveChatPromo.removeClass('hide');
		    liveChatPromo.addClass('open');

		    // hide/show live chat on focus of inputs
		    if ($('body').hasClass('mobile, tablet')) {
		        $(document).on('focus', 'input, textarea, select', function (e) {
		            liveChatPromo.addClass('closed'); 
		        });
		        $(document).on('focusout', 'input, textarea, select', function (e) {
		            liveChatPromo.addClass('open'); 
		        });
		    }
		
		},
		
		closeLiveChatPromo: function () {
            // This will close the promo panel until navigation or page refresh
		    var height = $('.live-chat').show().outerHeight() + 20;
		    var liveChatPromo = $('.live-chat');
		    liveChatPromo.removeClass('open');
		    liveChatPromo.addClass('closed');
		   
		},

		closeLiveChat: function () {
		    $('.live-chat').addClass('closed');
		    $('body').removeClass('live-chat-open');
		    setTimeout(function () {
		        $('body').removeClass('live-chat-open-animation')
		    }, 400);
		},

		openLiveChat: function() {
		    $("html, body").animate({ scrollTop: 0 }, 200);
		    $('body').removeClass('menu-open').addClass('live-chat-open').addClass('live-chat-open-animation');
		},

		bindEvents: function () {
			// live chat bottom banner close
		    $('.live-chat .close').on('click', function (e) {
		        e.preventDefault();
		        e.stopPropagation();
				ww.liveChat.closeLiveChatPromo($(this).parent('.live-chat'));
			});

			// live chat off canvas open
			$('.live-chat').on('click', function (e) {
				e.preventDefault();
				ww.liveChat.closeLiveChatPromo($(this));
				ww.liveChat.openLiveChat();
				ww.viewport.reset();
				ww.feedbackPanel.hideTab();
			});

			// close off canvas
			$('.live-chat-form').on('click', '.close-icon', function (e) {
			    e.preventDefault();
			    ww.viewport.reset();
			    ww.liveChat.closeLiveChat()
			    ww.feedbackPanel.showTab();
			});

		}  
	};
})(jQuery);