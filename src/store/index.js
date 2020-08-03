import Vue from 'vue';
import Vuex from './vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		num: 0
	},
	//同步更新状态
	mutations: {
		incre(state, payload) {
			state.num += payload;
		},
		minus(state, payload) {
			state.num -= payload;
		}
	},
	//异步更新状态
	actions: {
		asyncIncre({commit, dispatch}, payload) {
			setTimeout(() => {
				commit('incre', payload)
			}, 1000)
		}
	},
	modules: {
	},
	getters: {
		getNum(state) {
			return state.num;
		}
	}
});
