let Vue;

class Store {
    constructor(options) {
        this.vm = new Vue({
            data: {
                state: options.state
            }
        });

        //for getters
        let getters = options.getters || {};
        this.getters = {} //当前实例对象
        Object.keys(getters).forEach(getterName => {
            //在当前getters对象添加方法
            Object.defineProperty(this.getters, getterName, {
                get: () => {
                   return getters[getterName](this.state); 
                }
            });
        })

        // for mutations
        let mutations = options.mutations || {};
        this.mutations = {};
        Object.keys(mutations).forEach(mutationName => {
            this.mutations[mutationName] = payload => {
                //调用传入的方法
                mutations[mutationName](this.state, payload);
            }
        })

        //for actions
        let actions = options.actions || {};
        this.actions = {};
        Object.keys(actions).forEach(actionName => {
            this.actions[actionName] = payload => {
                actions[actionName](this, payload);
            }
        })
    }

    //异步请求
    dispatch(method, payload) {
        this.actions[method](payload);
    }

    commit = (method, payload) => {
        debugger
        console.log('this', this);
        this.mutations[method](payload);
    }

    get state() {
        return this.vm.state;
    }
}

//插件固定写法
const install = (v) => {
    // console.log(v);
    Vue = v;
    Vue.mixin({ //需要在每一个组件上添加$store
        beforeCreate() {
            console.log(this.$options.name);
            if (this.$options && this.$options.store) {
                //root
                this.$store = this.$options.store;
            }
            else {
                this.$store = this.$parent && this.$parent.$store;
            }
        },
    })
}

export default {
    install,
    Store
}