angular.module('heimrealty')
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

        .state('main', {
            url: '/main',
            templateUrl: 'templates/main-menu.html'
        })

        .state('search', {
            url: '/search',
            abstract: true,
            template: '<ui-view></ui-view>'
        })

        .state('search.property', {
            url: '/property',
            templateUrl: 'templates/property-search.html'
        })

        .state('search.onmap', {
            url: '/onmap',
            templateUrl: 'templates/search-on-map.html'
        })

        ;

        // search.property


        //
        // .state('tab.dash', {
        //     url: '/dash',
        //     views: {
        //         'tab-dash': {
        //             templateUrl: 'templates/tab-dash.html',
        //             controller: 'DashCtrl'
        //         }
        //     }
        // })
        //
        // .state('tab.chats', {
        //     url: '/chats',
        //     views: {
        //         'tab-chats': {
        //             templateUrl: 'templates/tab-chats.html',
        //             controller: 'ChatsCtrl'
        //         }
        //     }
        // })
        // .state('tab.chat-detail', {
        //     url: '/chats/:chatId',
        //     views: {
        //         'tab-chats': {
        //             templateUrl: 'templates/chat-detail.html',
        //             controller: 'ChatDetailCtrl'
        //         }
        //     }
        // })
        //
        // .state('tab.account', {
        //     url: '/account',
        //     views: {
        //         'tab-account': {
        //             templateUrl: 'templates/tab-account.html',
        //             controller: 'AccountCtrl'
        //         }
        //     }
        // });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/main');
        console.log("$urlRouterProvider", $urlRouterProvider);

    });