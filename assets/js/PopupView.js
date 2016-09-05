var PopupView = Backbone.View.extend({
    className: 'wrap',

    events: {
        'click .popup-close': 'close'
    },

    initialize: function () {
        this.template = $('#popup-template').html();

        this.context = {
            title: 'Default Title',
            content: 'Lorem ipsum dolor sit amet.'
        };

        $(this.el).css({
            'position': 'absolute',
            'z-index': 100
        });

    },

    /**
     * Render new popup.
     */
    render: function (form) {
        // If fields aren't empty, 'll change the context for new popup
        form.forEach(function (field) {
            if (field.value != '') {
                this.context[field.name] = field.value;
            }
        }, this);

        $(this.el).html(_.template(this.template, this.context));
        // Remove previous popups
        _.each($('.popup-active'), function (popup) {
            popup.remove();
        });

        $(this.el).addClass('popup-active');

        return this;
    },

    /**
     * Remove popup from DOM.
     */
    close: function () {
        $(this.el).remove();
    }
});