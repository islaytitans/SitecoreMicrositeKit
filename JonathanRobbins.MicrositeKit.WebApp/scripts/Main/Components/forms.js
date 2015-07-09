var ww = ww || {};

(function ($) {
	ww.forms = {

		// global varibles		
		fieldset: $('fieldset'),
		$formSection: undefined,
		formSectionWidth: undefined,
		$formSectionWrapper: undefined,
		totalAmount: 0,
		transitionTime: 200,
		offsetFromTop: 10,
		step: 'Step',
		of: 'of',
		btnPrevText: 'Previous step',
		btnNextText: 'Next step',
		btnSubmitText: 'Submit',
		fieldsetValidationWarning: '0',
		fieldsetAtTop: false,

         
		// init custom form
		init: function () {
			// direct debit form only
			if ($('#form_6DDAF0659B034AEBB57184D27DC804A3').length > 0) {
				this.paymentOptions();
			}

			// only run if on mobile			
			if (ww.confirmDevice.mobileDevice && $('.scfForm').length > 0) {
				this.dictionaryItems();
			}
		},


		// ------------------------------
		// Payment options for direct debit
		// ------------------------------
		paymentOptions: function () {
			var amountOfInputs = $('.scfPaymentOptions').find('input').length;
			$('.scfPaymentOptions').find('input').each(function (i) {
				var monthlyPaymentOptions = $(this).closest('.scfSectionContent').find('.paymentDatesContainer').last().parent();
				$(this).on('change', function () {
					if(i + 1 === amountOfInputs) {
						if ($(this).is(':checked')) {
							monthlyPaymentOptions.addClass('show-payment-option');
						} else {
							monthlyPaymentOptions.removeClass('show-payment-option');
						}
					} else {
						monthlyPaymentOptions.removeClass('show-payment-option');
					}
				});
			});
		},

		// ------------------------------
		// Dictionary items
		// ------------------------------
		dictionaryItems: function () {
			$.ajax({
				dataType: "json",
				url: "/api/Forms/GetLabels",
				success: function (results) {
					ww.forms.step = results.Step;
					ww.forms.of = results.Of;
					ww.forms.btnPrevText = results.PreviousStep;
					ww.forms.btnNextText = results.NextStep;
					ww.forms.btnSubmitText = results.ButtonText;
					ww.forms.fieldsetValidationWarning = results.CompleteRequiredFields;
				}
			});
			// Init field sets | Bind required fields | Add/Remove Next/Prev buttons
			this.initFormFieldSets(ww.forms.fieldset);
			// Init form animation and controls
			this.initFormControler();
			// Init form input hints
			this.initFormInputHints();
			// Events binding
			this.eventBinding(ww.forms.fieldset);
			// on blur of inputs, select and textarea
			this.viewportResetOnBlur();
			// resize on radio button change
			this.resetHightOnRadioChange();
		},

		// Add dictionary item values
		addDictionaryItems: function (fieldset, count) {
			// update the amount of fieldsets
			ww.forms.totalAmount = ww.forms.fieldset.length;
			// add new legend
			fieldset.find('legend').append(' - ' + ww.forms.step + ' ' + count + ' ' + ww.forms.of + ' ' + ww.forms.totalAmount);
			// add nav buttons
			fieldset.append('<div class="btn-prev">' + ww.forms.btnPrevText + '</div>');
			fieldset.append('<div class="btn-next">' + ww.forms.btnNextText + '</div>');
			// each fieldset has a wrapping div - we need to add a class to this to target
			fieldset.parent().addClass('form-section');
			ww.forms.$formSection = $('.form-section');
		},


		// ------------------------------
		// Functionality
		// ------------------------------
		// Init form fieldsets
		initFormControler: function () {
			if (ww.forms.fieldset.length) {
				// update the form width
				ww.forms.formSectionWidth = ww.forms.$formSection.outerWidth();
				// set width
				ww.forms.$formSection.css('width', ww.forms.formSectionWidth);
				// set the wrapper div to the width of all the
				ww.forms.$formSection.parent().addClass('form-section-wrapper');
				ww.forms.$formSectionWrapper = $('.form-section-wrapper');
				ww.forms.$formSectionWrapper.css('width', ww.forms.formSectionWidth * ww.forms.totalAmount);
				// add active class to first on load
				ww.forms.$formSection.first().addClass('active');
				// set height
				ww.forms.setFormHeight();
				// Bind tab index vals to form fields
				ww.forms.tabIndexing();
				// Add index values to form fields
				ww.forms.indexFormFields();
				// Disable all fieldset input elements
				ww.forms.disableFieldsetInputs(ww.forms.$formSection);
				// Enable fieldset elements on the active field set
				ww.forms.toggleFieldsetInputs($(".form-section.active"), true);

				// Adjust field sets when window is resized
				$(window).on('resize', function () {
					// form section outter width
					ww.forms.formSectionWidth = $('.scfForm').width();
					// set width
					ww.forms.$formSection.css('width', ww.forms.formSectionWidth);
					// Update width of any hidden "hint" fields
					//$(".helpOverlay").css('width', ww.forms.formSectionWidth);
					// set the wrapper div to the width of all the
					ww.forms.$formSectionWrapper.css('width', ww.forms.formSectionWidth * ww.forms.totalAmount);

					// check which form-section is active
					var amountPrev = $('.form-section.active').prevAll().length,
							newPosition = amountPrev * ww.forms.formSectionWidth * -1;
					ww.forms.$formSectionWrapper.css('left', newPosition);
					console.log(newPosition);

					// set the wrapper div to the height of the active fieldset
					ww.forms.setFormHeight();

				});

				ww.forms.tabIndexing();
				ww.forms.indexFormFields();

				// Disable Next / Submit btn
				// --
				ww.forms.fieldset.each(function () {
					var $fieldset = $(this);

					// if there are required fields dispable the btn
					if ($fieldset.find('input.required, select.required, textarea.required').length) {
						$fieldset.find('.btn-next, .btn-prev, .btn-submit').addClass('disabled');
					}

					// find each input which is required
					$fieldset.find('input.required, select.required, textarea.required').each(function () {
						ww.forms.checkIfValid($(this), $fieldset);
						// on exit of each input required
						$(this).on("blur click", function () {
							ww.forms.checkIfValid($(this), $fieldset);
						});
						$(this).keydown(function () {
							ww.forms.checkIfValid($(this), $fieldset);
						});
					});

				});
			}
		},

		// NEXT / PREV Section
		formSectionTransition: function (goto) {
			// if next or prev
			var formSectionHeight,
          currentField;
			if (goto === 'next') {
				// store the current active field set
				currentField = ww.forms.$formSection.parent().find(".form-section.active");
				// remove active class from all form sections 
				ww.forms.$formSection.removeClass('active');
				// add plus form width to the right aka next
				ww.forms.$formSectionWrapper.css('left', '-=' + ww.forms.formSectionWidth);
				//ww.forms.$formSectionWrapper.animate({
				//	left: '-=' + ww.forms.formSectionWidth
				//}, 300);
				// set active class on next form section
				currentField.next().addClass('active');
				// Disable all inputs on the page
				ww.forms.disableFieldsetInputs(ww.forms.$formSection);
				// Enable the target fieldsets input fields
				ww.forms.toggleFieldsetInputs($(".form-section.active"), true);
				// Target first input element
				$('.form-section.active').find('input, textarea, select').first().focus();
				// set the wrapper to the height of the next fieldset
				formSectionHeight = currentField.next().outerHeight();
			} else if (goto === 'prev') {
				// store the current active field set
				currentField = ww.forms.$formSection.parent().find(".form-section.active");
				// Disable the current fieldsets input elements
				ww.forms.disableFieldsetInputs(currentField, false);
				// remove active class from all form sections 
				ww.forms.$formSection.removeClass('active');
				// add plus form width to the left aka prev
				ww.forms.$formSectionWrapper.css('left', '+=' + ww.forms.formSectionWidth);
				//ww.forms.$formSectionWrapper.animate({
				//	left: '+=' + ww.forms.formSectionWidth
				//}, 300);
				// set active class on prev form section
				currentField.prev().addClass('active');
				// Enable input elements on the previous field set
				ww.forms.toggleFieldsetInputs($(".form-section.active"), true);
				// set the wrapper to the height of the prev fieldset
				formSectionHeight = currentField.prev().outerHeight();
			}
			// set height
			ww.forms.$formSectionWrapper.css('height', formSectionHeight);
		},

		// Configure buttons for each fieldset
		configureMobileFormButtons: function (fieldset) {
			// Remove the unrequired prev/next btn
			fieldset.first().find('.btn-prev').remove();
			fieldset.last().find('.btn-next').remove();
			// For the last fieldset add submit btn
			fieldset.last().append($('.scfForm .scfSubmitButtonBorder .scfSubmitButton'));
			$('.scfForm .scfSubmitButton ').addClass('btn-submit');
		},

		// on next/prev section if not at top go to top
		gotoFormSection: function (goto) {
			// remove lightbox help
			$('.cboxElement').removeClass('cboxElement');
			if (!ww.forms.fieldsetAtTop) {
				setTimeout(function () {
					ww.forms.formSectionTransition(goto);
				}, ww.forms.transitionTime);
			} else {
				ww.forms.formSectionTransition(goto);
			}
		},

		// Bind progress messages to each form field set
		initProgressHints: function (el) {
			// Store the progress message and add it to each field set
			$(el).each(function () {
				$(this).prepend("<span class='progress-message'>" + ww.forms.fieldsetValidationWarning + "</div>");
			});
		},

		// Binds events to any help "?" symbols on form labels
		initFormInputHints: function () {
			// remove lightbox help
			$('.cboxElement').removeClass('cboxElement');

			$(".info-overlay").on("click", function (e) {
				// store the hint text
				var targetedHint = $(this).next(".overlay-block");
				// Store the content within the hint field
				var hintContent = targetedHint.find(".helpOverlay");
				// Update the width of the help field to match the form
				hintContent.css('width', '100%');
				// Show hint
				hintContent.children().show(function () {
					hintContent.css('height', 'auto');
				});
				hintContent.addClass("active");
				ww.forms.setFormHeight();
				e.preventDefault();
			});

			// Hint Close
			// --
			// Closes the selected hint
			$(".close-overlay").on("click", function () {
				$(this).parent().removeClass("active").css('height', '0');
				$(this).parent().css('width', '0');
				ww.forms.setFormHeight();
			});
		},

		initFormFieldSets: function (el) {
			if (el.length) {
				// Add "*" symbols and bind validation classes for required fields
				ww.forms.initRequiredFields();

				// Loop through each fieldset
				el.each(function (i) {
					// Update each fieldsets labels with dictionary items
					ww.forms.addDictionaryItems($(this), i + 1);
				});

				// Configure buttons for each fieldset
				ww.forms.configureMobileFormButtons(el);
			}
		},

		// Automated scroll to validation messages
		validationMessageScroll: function () {
			// if there is a validation message then scroll to it on load
			if ($('.scfValidationSummary').length) {
				$('html, body').animate({
					scrollTop: $('.scfValidationSummary').offset().top - ww.forms.offsetFromTop
				}, ww.forms.transitionTime);
			}
			// if there is a submit summary then scroll to it on submission
			var $submitSummary = $('.scfSubmitSummary');
			// trim whitespace
			$submitSummary.html($.trim($submitSummary.html()));
			if ($submitSummary.length) {
				if ($submitSummary.is(':empty')) {
					$(this).remove();
				} else {
					$('html, body').animate({
						scrollTop: $submitSummary.offset().top - ww.forms.offsetFromTop
					}, ww.forms.transitionTime);
				}
			}
		},

		// reset viewport zoom on blur
		viewportResetOnBlur: function () {
			$('input, select, textarea').on('focusout', function () {
				setTimeout(function () {
					if (!$('input, select, textarea').is(":focus")) {
						ww.viewport.reset();
					}
				}, 25);
			});
		},

		// resize on radio button change
		resetHightOnRadioChange: function () {
			$('input, select, textarea').on('change, focus, click', function () {
				ww.forms.setFormHeight();
			});
		},


		// ------------------------------
		// Event binding 
		// ------------------------------
		eventBinding: function (el) {
			// on click of next slide next
			$('.btn-next').on('click', function (e) {
				if ($(this).hasClass("disabled")) {
					ww.forms.animateScroll(el);
					// Fire validation function here
					$(this).siblings(".progress-message").show();
					ww.forms.setFormHeight();
				} else {
					$(this).siblings(".progress-message").hide();
					ww.forms.setFormHeight();
					ww.forms.animateScroll(el);
					ww.forms.gotoFormSection('next');
					e.preventDefault();
				}
			});

			// on click of next slide prev
			$('.btn-prev').on('click', function () {
				ww.forms.gotoFormSection('prev');
				ww.forms.animateScroll(el);
			});

			// on click of custom submit button
			// TODO
			$('.btn-submit').on('click', function (e) {
				if ($(this).hasClass("disabled")) {
					e.preventDefault();
					$(".progress-message").show(300, function () {
						ww.forms.setFormHeight();
					});
					return false;
				} else {
					ww.forms.toggleFieldsetInputs($('.scfForm'), true);
				}
			});

			// Enter button
			// --
			// TODO: only allow enter once all required fields are complete, same with next/submit button
			// form section - find active 
			// if btn is disabled then do nothing else....
			// find input, textarea, select
			// run follow
			ww.forms.$formSection.find('input, textarea, select').on("keydown", function (e) {
				// if not on the last fieldset
				if (e.keyCode === 13) {
					e.preventDefault();
					//debugger
					if ($(this).closest(".form-section.active").is(':last-child')) {
						ww.forms.toggleFieldsetInputs($(".form-section"), true);
						$('input[type=submit]').trigger('click');
					} else {
						e.preventDefault();
						var nextBtn = $(this).closest(".form-section.active").find(".btn-next");
						nextBtn.trigger('click');
					}
				}
			});
		},


		// ------------------------------
		// TOOLS 
		// ------------------------------
		// check if truely visible
		isTruleVisible: function (el) {
			return !($(el).is(':hidden') || $(el).parents(':hidden').length);
		},

		// make it tabable
		tabIndexing: function () {
			var tabindex = 1;
			$('input, textarea, select').each(function () {
				if (this.type !== "hidden") {
					var $input = $(this);
					$input.attr("tabindex", tabindex);
					tabindex++;
				}
			});
		},

		// animate scroll
		animateScroll: function (el) {
			if (el.offset().top - $(window).scrollTop() - ww.forms.offsetFromTop < 0) {
				ww.forms.fieldsetAtTop = false;
				$('html, body').animate({
					scrollTop: $('.form-section.active').offset().top - ww.forms.offsetFromTop
				}, ww.forms.transitionTime, function () {
					// animation complete
					ww.forms.fieldsetAtTop = true;
				});
			} else {
				ww.forms.fieldsetAtTop = true;
			}
		},

		// Index each input field within each fieldset
		indexFormFields: function () {
			// For each fieldset...
			ww.forms.$formSection.each(function () {
				// Zero the index
				var inputIndex = 0;
				// Located every input within the fieldset
				$(this).find('input, textarea, select').each(function (i) {
					// Check if element is actually visible
					if (ww.forms.isTruleVisible(this)) {
						// Add an index value
						$(this).addClass('input-' + i);
						// Increase our index
						inputIndex++;
					}
				});
			});
		},

		// check if el is valid
		checkIfValid: function (el, fieldset) {
			// check if is has a value after removing whitespace
			var empty = $.trim(el.val()).length === 0;

			// if it is empty
			if (empty) {
				el.addClass('invalid');
			} else {
				el.removeClass('invalid');
			}

			// call checker function to check all inputs
			ww.forms.checkAllAreCompleted(fieldset);
			ww.forms.setFormHeight();
		},

		// see if any have the class invalid
		checkAllAreCompleted: function (fieldset) {
			var areInvalid = fieldset.find('input.required, select.required, textarea.required').hasClass('invalid');

			// there are invalid inputs
			if (areInvalid) {
				// disable btns
				fieldset.find('.btn-next, .btn-prev, .btn-submit').addClass('disabled');
			} else {
				// if there are no validation messages
				if (fieldset.find('.scfValidator:visible').length === 0) {
					fieldset.find('.btn-next, .btn-prev, .btn-submit').removeClass('disabled');
				} else {
					fieldset.find('.btn-next, .btn-prev, .btn-submit').addClass('disabled');
				}
			}
		},

		// Enable/Disable target fieldset input elements
		toggleFieldsetInputs: function ($targetFieldset, toggle) {
			if (toggle === true) {
				$targetFieldset.find('input, textarea, select, a').prop('disabled', false);
			} else if (toggle === false) {
				$targetFieldset.find('input, textarea, select, a').prop('disabled', true);
			}
		},

		// Disable all fieldset inputs
		disableFieldsetInputs: function (fieldset) {
			fieldset.find('input, textarea, select, a').prop('disabled', true);
		},

		// Set Form Height
		// -- 
		// Measure height and update fieldset wrapper
		setFormHeight: function () {
			var $formWrapper = $('.form-section-wrapper');
			var $activeForm = $('.form-section.active');
			// set the wrapper div to the height of the active fieldset
			var formSectionHeight = $activeForm.outerHeight();
			// set height
			$formWrapper.css('height', formSectionHeight);
		},

		// Add "*" symbols and bind validation classes
		initRequiredFields: function () {
			// Add * for any required fields
			$('.scfRequired, .scfValidatorRequired').each(function () {
				$(this).parent().find('label').append('<span class="required">*</span>');
				// add class to the requre inputs to target later
				$(this).parent().find('input, select, textarea').each(function () {
					if (ww.forms.isTruleVisible($(this))) {
						$(this).addClass('required').addClass('invalid');
					}
				});
			});
		}
	};
})(jQuery);