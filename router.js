class Router {
    constructor(el = 'body') {
        this.el = el;
        this.routeObj = {};
        this.routeArr = [];
        this.errorTpl = '';
    }

    rules(opt) {
        this.routeObj = opt;
        

        window.addEventListener("hashchange", (k, v) => {
            this.routeArr = [];
            this.routeObj.forEach(el => {
                if(el['url'] == window.location.hash) {
                    fetch(el['template'], {
                        method: 'GET'
                    }).then(resp => resp.text()).
                    then(obj => {
                        
                        document.querySelector(this.el).innerHTML = obj;
                    });

                    this.routeArr["ok"] = true;
                }
            });
            
            if(!this.routeArr["ok"]) {
                
                let template = this.errorTpl;

                if(!template) {
                    template = this.routeObj[0].template;
                }
                
                fetch(template, {
                    method: 'GET'
                }).then(resp => resp.text()).
                then(obj => {
                    document.querySelector(this.el).innerHTML = obj;
                })
            }
        })
        return this;
    }

    start(route) {
        if(window.location.hash != '' && window.location.hash !== route) {
            this.routeArr = [];
            this.routeObj.forEach(el => {
                if(el['url'] == window.location.hash) {
                    fetch(el['template'], {
                        method: 'GET'
                    }).then(resp => resp.text()).
                    then(obj => {
                        document.querySelector(this.el).innerHTML = obj;
                    });
                    this.routeArr["ok"] = true;
                }
            });
            
            if(!this.routeArr["ok"]) {
                
                let template = this.errorTpl;

                if(!template) {
                    template = this.routeObj[0].template;
                }
                
                fetch(template, {
                    method: 'GET'
                }).then(resp => resp.text()).
                then(obj => {
                    document.querySelector(this.el).innerHTML = obj;
                })
            }
            
        } else {
            this.routeObj.forEach(el => {
                if(!route) {
                    route = this.routeObj[0].url;
                }
                if(el['url'] == route) {
                    fetch(el['template'], {
                        method: 'GET'
                    }).then(resp => resp.text()).
                    then(obj => {
                        document.querySelector(this.el).innerHTML = obj;
                        window.location.hash = route;
                    })
                }
            });
        }
        
    }
}
