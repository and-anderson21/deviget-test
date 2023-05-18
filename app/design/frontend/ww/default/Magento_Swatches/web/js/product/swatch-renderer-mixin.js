/**
 * @package     ww/default
 * @author      Anderson Oliveira
 */

define([
    'jquery',
    'mage/translate',
    'jquery-ui-modules/widget'
], function ($, $t) {
    'use strict';

    return function (SwatchRenderer) {
        $.widget('mage.SwatchRenderer', SwatchRenderer, {

            /** @inheritdoc */
            _OnClick: function ($this, $widget) {
                this._super($this, $widget);

                let $infoLabel = $('.options-info');

                if ($this.hasClass('selected')) {
                    $infoLabel.text($t('You selected: ') + $this.data('option-label'));
                } else {
                    $infoLabel.text('');
                }
            },
        });
        return $.mage.SwatchRenderer;
    };
});
