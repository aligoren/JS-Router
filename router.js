class Router {
    constructor() {
        this.routeObj = {};
    }

    rules(opt) {
        this.routeObj = opt;
        
        window.addEventListener("hashchange", (k, v) => {
            this.routeObj.forEach(el => {
                if(el['url'] == window.location.hash) {
                    fetch(el['template'], {
                        method: 'GET'
                    }).then(resp => resp.text()).
                    then(obj => {
                        document.body.innerHTML = obj;
                    })
                }
            });
        })

        return this;
    }

    start(route) {
        if(window.location.hash != '' && window.location.hash !== route) {
            this.routeObj.forEach(el => {
                if(el['url'] == window.location.hash) {
                    fetch(el['template'], {
                        method: 'GET'
                    }).then(resp => resp.text()).
                    then(obj => {
                        document.body.innerHTML = obj;
                    })
                }
            });
        } else {
            this.routeObj.forEach(el => {
                if(el['url'] == route) {
                    fetch(el['template'], {
                        method: 'GET'
                    }).then(resp => resp.text()).
                    then(obj => {
                        document.body.innerHTML = obj;
                        window.location.hash = route;
                    })
                }
            });
        }
        
    }
}
