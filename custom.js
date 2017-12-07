const $router = new Router("#bootstrap");

$router.errorTpl = '404.html';
$router.rules(
    [
        {   'url': '#!',
            'template': 'hash.html'
        },
        {   'url': '#/hash1',
            'template': 'hash1.html'
        },
        {   'url': '#/hash2',
            'template': 'hash2.html'
        }
    ]
).start('#!')
