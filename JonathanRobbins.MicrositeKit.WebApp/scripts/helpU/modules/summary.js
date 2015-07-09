/**
 * SUMMARY JS
 * ***********
 */

var helpU = helpU || {};

helpU.summary = (function ($) {

    var exports = {},
		sectionsArr,
		form = '.helpU',
		$sections = $(form).find('section'),
		numberOfSections = $sections.length - 2,
        keyUpTimer; //to debounce keyup events


    function _loopThroughSections() {

        $('.js-summary-placeholder').html('');
        sectionsArr = [];

        $sections.each(function (i) {
            var sectionObject = {},
                $summaryItems = $(this).find('[data-summary-label]');

            sectionObject.id = $(this).attr('id');

            $summaryItems.each(function (i) {
                if ($(this).is('input, select')) {
                    sectionObject[$(this).data('summary-label')] = $.trim($(this).val());
                } else {
                    var childArr = [],
			            value;
                    $(this).find('select, input').each(function () {
                       
                        
                        childArr.push($(this).val());
                        if ($(this).next('label').length === 1) {
                            childArr.push($(this).next('label').html());
                        }
                    });

                    value = childArr.join(' ');

                    sectionObject[$(this).data('summary-label')] = $.trim(value);
                }
            });

            sectionsArr.push(sectionObject);

        })

        _addSummaryBlock();
    }

    function _addSummaryBlock() {
        var html = $('#summary-block').html();
        $placeholder = $('.js-summary-placeholder').last();

        for (var i = 0; i < sectionsArr.length - 1; i++) {
            $placeholder.append(html);
        }

        _populateSummary(i);
    }

    function _populateSummary(i) {

        $('.summary-box').each(function (i) {
            var summaryObj = JSON.stringify(sectionsArr[i]);
            var result = $.parseJSON(summaryObj);
            var $currentBox = $(this);
            var $currentBoxDl = $(this).find('dl');
            var editLinkText = $('#edit-summary').html();
            var editLink = '<a href="#' + sectionsArr[i].id + '">' + editLinkText + '</a>';

            $.each(result, function (k, v) {
                if (k !== "" && v !== "" && k !== "id") {
                    var html = '<dt>' + k + '</dt>' + '<dd>' + v + '</dd>';
                    $currentBoxDl.append(html)
                }
            });
            $currentBox.append(editLink);
        });

    }

    function _bindEvents() {

        $(form).on('click', '.summary-init', function (e) {
            _loopThroughSections();
        });

        $(form).find('section').each(function (i) {
            if (i <= numberOfSections) {
                $(this).find('select, input[type="number"]').on('change', function () {
                    if ($('.js-summary-placeholder .summary-box').length > 0) {
                        _loopThroughSections();
                    }
                });

                $(this).find('input').on('keyup', function () {
                    if ($('.js-summary-placeholder .summary-box').length > 0) {
                        // Run a timer to debounce keyup events - eg only run once every half second on keyup to save some computerz
                        keyUpTimer = setTimeout(function () {
                            _loopThroughSections();
                        }, 500);
                    }
                });
            }
        });
    }


    exports.init = function () {
        _bindEvents();
    }

    return exports;

})(jQuery);