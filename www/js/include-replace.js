angular.module('heimrealty')

    .directive('includeReplace', function() {

        return {
            restrict: 'A', /* optional */
            link: function (scope, el, attrs) {
                el.replaceWith(el.children());
            }
        };

    });
console.log('el');