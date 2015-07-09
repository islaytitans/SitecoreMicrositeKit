/**
 * VALIDATION JS
 * *************
 * DONE - Strip all whitespace from values
 * DONE - On blur of required fields, use the regex value to validate the input or selection
 * DONE - Check the DOB fields are adults as specified by user stories (16+)
 * DONE - If validation passes, display the valid indicator (where applicable)
 * DONE - If validation fails, show the error message
 * DONE - If all fields in section are passed, set a class on the section to indicate a pass
 * Amount of time lived at address
 */

var helpU = helpU || {};

helpU.validation = (function ($) {

	// ----------------------------- //
	// Global varibles
	// ----------------------------- //

	var exports = {},
			form = '.helpU',
			required = 'required',
			invalid = 'invalid',
			valid = 'valid',
			invalidTxt = 'invalid',
			validTxt = 'valid',
			validationRunClass = 'validation-run';


	// ----------------------------- //
	// MAIN FUNCTION
	// ----------------------------- //

	// for each input validate
	function _validateInputs(form) {

		// set all the vendor forms to be required
		$(form).find('.vendor-fields-wrap').find('input, select, textarea').prop('required', true);

		// temp show hidden areas to run height calcs
		$('.hidden').addClass('temp-show')
		$('.hidden').removeClass('hidden');
		$(form).find('.form-section').show();

		// add .required for required fields - some browser do not support required so use class instead
		$(form).find('[required]').each(function () {
			$(this).addClass(required)
		})

		// for each input
		$(form).find('input, select, textarea').each(function () {
			var $this = $(this);

			if (!$this.is(':submit') || !$this.hasClass('btn')) {

				// if not a checkbox then add the valid/invalid icon before the input so + span can be used if required in css
				if (!$this.is(':checkbox, :submit')) {
					var labelHeight = parseInt($this.parent().find('label').outerHeight(true)) + 14;

					// run validation if required
					if ($this.hasClass(required)) {
						// add invalid icon
						$('<span class="invalid-icon">' + invalidTxt + '</span>').insertBefore($this);
					}
					// add valid icon to all
					$('<span class="valid-icon">' + validTxt + '</span>').insertBefore($this);

					// set the top css on the valid/invalid icon depending on the label height
					$this.parent().find('.invalid-icon, .valid-icon').css('top', labelHeight);

				}
				// run type options
				_typeOtions($this);
				// validate inputs
				_runValidationOnInput($this);
			}
		});


		// now height calcs are done hide hidden areas again
		$('.temp-show').addClass('hidden')
		$('.temp-show').removeClass('temp-show');
		$(form).find('.form-section').hide();
		$(form).find('.form-section').first().show();

		// if approved vendor is selected
		$(form).find('.vendor-fields-wrap a').each(function () {
			$(this).on('click', function () {
				setTimeout(function () {
					// validate inputs
					$(form).find('input, select, textarea').each(function () {
						_runValidationOnInput($(this));
					});
					// validate
					_validateSections(form);
				}, 100);
			});
		});
	}



	// ----------------------------- //
	// SECTION VALIDATION
	// ----------------------------- //
	function _validateSections(form) {
		// for each section
		$(form).find('section').each(function () {
			var $section = $(this),
				sectionNumber = $(this).attr('id');
			// on start remove valid and add invalid untill confirm not
			$(this).removeClass(valid);
			$(this).addClass(invalid);
			// disable next and submit btn
			//$section.find('.actions .btn-next').prop('disabled', true);
			$(form).find('input[type=submit]').prop('disabled', true);

			// find the last input in the section and add a class to define it as the last
			var lastInput = $(this).find('input:enabled, select:enabled, textarea:enabled').last().parent();

			// find amount of required inputs
			var amountOfRequiredInputs = $(this).find('.' + required).length;
			
			// default state all are vlid untill told not
			var allRequiredAreValid = true;
			// for each required
			$(this).find('.' + required).each(function (i) {
				// if the input is not disabled and the parent doesn't have the class valid (meaning its invalid)
				if (!$(this).is(':disabled') && !$(this).parent().hasClass(valid)) {
					// set var to false
					allRequiredAreValid = false;
				}
				// once check all inputs and they are all valid then
				if (i + 1 === amountOfRequiredInputs && allRequiredAreValid) {
					// add class to section to say is valid and remove invalid class if tehre is one
					$section.addClass(valid);
					$section.removeClass(invalid);
					$section.addClass('complete');
					$section.find('.actions .btn-next').removeAttr('disabled');
					_checkIfFormCanBeSubmitted(form);
				}
			});
		});
	}


	// ----------------------------- //
	// CHECK ENTIRE FORM FOR VALIDATION
	// ----------------------------- //

	function _checkIfFormCanBeSubmitted(form) {
		// default state all are vlid untill told not
		var allRequiredAreValid = true,
				amountOfSection = $(form).find('section').length;

		$(form).find('section').each(function (i) {
			if (!$(this).hasClass(valid)) {
				allRequiredAreValid = false
			}
			if (i + 1 === amountOfSection && allRequiredAreValid) {
				$(form).find('input[type=submit]').removeAttr('disabled');
			} else {
				$(form).find('input[type=submit]').prop('disabled', true);
			}
		});
	}


	// ----------------------------- //
	// UTILITY FUNCTION
	// ----------------------------- //

	// strip any whitespace and return new val
	function _stipWhiteSpace(string) {
		return $.trim(string);
	};


	function _runValidationOnLoad() {

	    $(form).find('input, select, textarea').each(function () {
	        var el = $(this),
                   val = el.val(),
                   regEx = el.data('val-regex');

	        if (val !== '' && !el.is(':checkbox')) {
	            __validationRunner(el, val, regEx);
	        }
	    });
	    
	}

	// on blur of el run validation
	function _runValidationOnInput(el, e) {

	    // vars
	    var el = $(el),
            val = el.val(),
			regEx = el.data('val-regex');

		

		if (e !== undefined) {
		    eType = e['type']
		    // only run on blur to add first time validation
		    if (eType === 'blur') {

                // Need to delay the event to allow the click of next button to fire before the blur fires
		        setTimeout(function () {
		            // check if it has already been validated
		            if (!el.parent().hasClass(validationRunClass)) {
		                // add class
		                el.parent().addClass(validationRunClass)
		                // validate
		                __validationRunner(el, val, regEx)
		            }
		        }, 300);
		       
		    }
		}
			

		// if it has already been validated it will have a class to say so
		if (el.parent().hasClass(validationRunClass) || el.is(':checkbox')) {
			// validate
			__validationRunner(el, val, regEx)
		}

		
	}

	function __validationRunner(el, val, regEx) {
	    // if is not a DOB date input - runs faster than do if, rather than if not because 99% of inputs are not date type
	    // run regex check
	    _regExChecker(el, val, regEx);

	    // validate
	    _validateSections(form);
	}

	// check if value of input is empty and is required
	function _ifEmpty(el, val) {
	    if (el.is(':checkbox') && el.hasClass(required)) {
	        if (!el.is(':checked')) {
                //Its empty
				return true;
	        } else {
                // Its not empty
				return false;
			}
		} else {
			if (val.length === 0) {
			    if (el.hasClass(required)) {
                    // its empty
					return true;
			    } else {
                    // its not empty
					return false;
				}
			}
		}
	}

	// check if matches regex
	function _regExChecker(el, val, regEx) {
		// remove any white space
		var val = _stipWhiteSpace(val);
		// check if it is empty or not to start with
		if (_ifEmpty(el, val)) {
			// if it is then its invalid
			_declareInvalid(el);
		} else {
			// if it has content it is valid but does it match the regEx
			if (regEx !== null || regEx !== undefined) {
				// check if it matches the regEx
				var jsRegEx = new RegExp(regEx, 'ig');
				if (!jsRegEx.test(val)) {					
					// if it doesn't match the regEx then its invalid
					_declareInvalid(el);
				} else {
					// if DOB
					if (el.parent().hasClass('date-of-birth')) {
						if (_dateAgeChecker(el, val)) {
							// approved age
							_declareValid(el);
						} else {
							// under age
							_declareInvalid(el);
						}
					// if length at property
					} else if (el.closest('fieldset').hasClass('month-year-fields')) {
						_lengthAtPropertyValidIs(el);
					}	else {
						// if it does then its valid
						_declareValid(el);
					}
				}
			} else {
				// it is empty and doesn't have a pattern meaning it must simply just be populated with something, making it valid
				_declareValid(el);
			}
		}
	}

	// check if the age is over 16 year old
	function _dateAgeChecker(el, val) {
		// check if it is empty or not to start with
		if (_ifEmpty(el, val)) {
			// if it is then its invalid
			_declareInvalid(el);
			// if its not empty then
		} else {

			// get date
			var today = new Date(),
					dd = today.getDate(),
					mm = today.getMonth() + 1,
					yyyy = today.getFullYear();

			// if its less than 10 then add 0 to start
			if (dd < 10) {
				dd = '0' + dd
			}
			if (mm < 10) {
				mm = '0' + mm
			}

			// today - val = mill sec / 1000 = year
			var today = yyyy + mm + dd,
					valArray = val.split('/'),
					valYYYY = valArray[2],
					valMM = valArray[1],
					valDD = valArray[0];

			// if its less than 10 then add 0 to start
			if (valDD < 10) {
				valDD = '0' + valDD.replace('0', '');
			}
			if (valMM < 10) {
				valMM = '0' + valMM.replace('0', '');
			}

			var val = valYYYY + valDD + valMM,
					age = (today - val) / 10000;
			
			// if older than 16 then is valid
			if (age >= 16) {
				return true
			} else {
				return false
			}

		}
	}

	// length at property validation
	function _lengthAtPropertyValidIs(el) {
		var amountOfInputs = el.closest('.month-year-fields').find('input').length,
				amountOfTime = el.closest('.month-year-fields'),
				amountOfTimeAtProperty;
				
		amountOfTime.find('input').each(function (i) {
			if ($(this).val() === '') {
				$(this).val('0');
			}
			if (amountOfTimeAtProperty !== undefined) {
				amountOfTimeAtProperty = amountOfTimeAtProperty + '.' + $(this).val();
			} else {
				amountOfTimeAtProperty = $(this).val();
			}

			if (i + 1 === amountOfInputs) {
				if (amountOfTimeAtProperty >= 0.1) {
					amountOfTime.find('input').each(function () {
						_declareValid($(this));
					});
				} else {
					amountOfTime.find('input').each(function () {
						_declareInvalid($(this));
					});
				}
			}
		})
	}

	// make valid
	function _declareValid(el) {
		var parentWrapper = el.parent();
		parentWrapper.removeClass(invalid);
		parentWrapper.addClass(valid);
		// if its a sub group
		if (parentWrapper.parent().hasClass('sub-form-list')) {
			// if there are any in the sub group which are invalid the sub group must stay invalid
			if (!parentWrapper.parent().find('.' + invalid).length > 1) {
				parentWrapper.parent().removeClass(invalid);
				parentWrapper.parent().addClass(valid);
			}
		}
	}

	// make invalid
	function _declareInvalid(el) {
		var parentWrapper = el.parent();
		parentWrapper.removeClass(valid);
		parentWrapper.addClass(invalid);
		// if its a sub group
		if (parentWrapper.parent().hasClass('sub-form-list')) {
			parentWrapper.parent().removeClass(valid);
			parentWrapper.parent().addClass(invalid);
		}
	}

	// set different options depending on type e.g. number only allow numbers
	function _typeOtions(el) {
		var type = el.attr('type');
		// type number
		if (type === 'number' || type === 'Number') {
		    _inputKeyLimiter(el, /[0-9]|\./, /[^0-9]/g, false);
		}
		if (type === 'tel' || type === 'Tel') {
			_inputKeyLimiter(el, /[0-9]/, /[^0-9]/g, 11);
		}
		if (el.parent().hasClass('date-of-birth')) {			
			_inputKeyLimiter(el, /[0-9/]/, /[^0-9/]/g, 11);
		}
	}

	// only allow certain keys and replace unwanted characters
	function _inputKeyLimiter(el, reg, rep, length) {
		el.on('keypress', function (e) {
			if (e.charCode != 0) {
				var regex = reg;
				var key = String.fromCharCode(!e.charCode ? e.which : e.charCode);
				if (!regex.test(key)) {
					e.preventDefault();
					return false;
				}
			}
			lengthChecker(e);
		});
		if (rep !== false) {
			el.on('blur, paste', function () {
				setTimeout(function () {
					var unclean = el.val();
					clean = unclean.replace(rep, '');
					el.val(clean);
					lengthChecker(null);
				}, 100);
			});
		}
		function lengthChecker(e) {
			if (length !== false) {
				if (el.val().length >= length) {
					var correctValLength = el.val().substring(0, length);;
					el.val(correctValLength);
					if (e !== null) {
						e.preventDefault();
					}
					return false;
				}
			}
		}
	}

	function _bindEvents() {
	    $('.btn-next').on('click', function (e) {
	        var $inputs = $(this).parents('.form-section').find('input, select, textarea');
					
	        $inputs.each(function () {
	            //_runValidationOnInput($(this));
	            var el = $(this),
                val = el.val(),
			    regEx = el.data('val-regex');

	            __validationRunner(el, val, regEx)

	        })
	    });

	    $(form).find('.form-section').each(function () {
	        var $inputs = $(this).find('input, select, textarea'),
                $currentSection = $(this);
	        $inputs.on("keydown", function (e) {
	            // if not on the last fieldset
	            if (e.which === 13) {
	                e.preventDefault();
	                $currentSection.find('.btn-next').trigger('click');
	            }
	        });
	    });

	    $(form).find('input, select, textarea').on('blur change keyup', function (e) {
	        _runValidationOnInput($(this), e);

	    });
	}


	// ----------------------------- //
	// RETURN FUNCTION
	// ----------------------------- //
	exports.init = function () {
	    _runValidationOnLoad();
	    _validateInputs(form);
	    _validateSections(form);
		_bindEvents();
	}

	return exports;

})(jQuery);