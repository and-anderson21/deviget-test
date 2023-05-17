/**
 * @package     ww/default
 * @author      Anderson Oliveira
 */

define([
    'jquery',
    'slick'
], function ($) {
    'use strict';

    return function(options) {
        const elSelector = $(options.elSelector);

        elSelector.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            cssEase: 'linear'
        });
    }
});
