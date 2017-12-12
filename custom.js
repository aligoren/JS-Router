const $router = new Router("#bootstrap");

$router.errorTpl = '404.html';
$router.rules(
    [
        {   'url': '#!',
            'template': 'hash.html',
            'fn': function() {
                $router.data.window.title = 'Start Page';
            }
        },
        {   'url': '#/hash1',
            'template': 'hash1.html',
            'fn': function() {
                $router.data.window.title = 'Hash1 Page';
            }
        },
        {   'url': '#/hash2',
            'template': 'hash2.html'
        },
        {   
            'url': '#/hash3',
            'template': 'hash3.html'
        },
        {
            'url': '#/success',
            'template': 'success.html'
        }
    ]
).start('#!')
