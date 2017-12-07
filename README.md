# JS-Router
Simple JavaScript Router with VanillaJS' ES6. There is no dependency. Simple and bad

# Usage

There are two methods to use router.

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

### Full Example

```javascript
const $router = new Router();



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
