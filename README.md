# JS-Router
Simple JavaScript Router with VanillaJS' ES6. There is no dependency. Simple and bad

# Usage

There are two methods to use router.

## init

constructor taking one argument. If you declare specific element, router work with it. If you don't default element will be body

```javascript
const $router = new Router("#bootstrap");
```

### rules(ObjectArray)

You must define object array. Every url must start with hash sign for now.

```javascript
rules(
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
)
```

### start(string)

When the page is first opened, users will see this page. This page will be index.

```javascript
start('#!')
```

### errorTpl - property

If you need to show custom 404 page you can use this property

```javascript
$router.errorTpl = '404.html';
```

### Full Example

```javascript
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
```

### Live Example on Plunker

[http://embed.plnkr.co/zjtxlwdVGQozp2UDSQjZ/](http://embed.plnkr.co/zjtxlwdVGQozp2UDSQjZ/)
