var ww = ww || {};

(function ($) {
    ww.emergencyWork = {
        count: 0,
        emergencies: 0,
        timeout: 1000,

        init: function () {
            if (document.getElementById('hfEmergencies')) {
                this.emergencies = jQuery.parseJSON(document.getElementById('hfEmergencies').value);
                this.timeout = parseInt(document.getElementById('hfTimeOut').value, 10);
                if (this.emergencies !== null) {
                    this.autoRotateInit();
                    this.bindEvents();
                } else {
                    $('.emergencies .prev, .emergencies .next').remove();
                }
            }
        },
        autoRotateInit: function () {
            setInterval(function () {
                ww.emergencyWork.autoRotate();
            }, this.timeout);
        },
        autoRotate: function () {
            this.nextSlide();
        },
        prevSlide: function () {
            this.count -= 1;
            if (this.count < 0) {
                this.count = this.emergencies.length - 1;
            }
            this.loadNextSlide();
        },
        nextSlide: function () {
            this.count += 1;
            if (this.count >= this.emergencies.length) {
                this.count = 0;
            }
            this.loadNextSlide();
        },
        loadNextSlide: function () {
            var link = $('#EmergencyTitleLink');
            $(link).text(this.emergencies[this.count].Title);
            $(link).attr('href', this.emergencies[this.count].Url);
            $(link).attr('title', this.emergencies[this.count].Title);
        },
        bindEvents: function () {
            $('.next').on('click', function (e) {
                e.preventDefault();
                ww.emergencyWork.nextSlide();
            });
            $('.prev').on('click', function (e) {
                e.preventDefault();
                ww.emergencyWork.prevSlide();
            });
        }
    };
})(jQuery);