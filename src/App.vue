<template>
  <div id="app">
    <div>
      	num:{{this.$store.state.num}}
		getNum:{{this.$store.getters.getNum}}
		<button @click="myIncre">增加</button>
		<button @click="myMinus">减少</button>
		<button @click="myAsyncIncre">异步增加</button>
	</div>
  </div>
</template>

<script>

export default {
	name: 'App',
	components: {

	},
	methods: {
		myIncre() {
			this.$store.commit('incre', 1);
		},
		myMinus() {
			this.$store.commit('minus', 1);
		},
		myAsyncIncre() {
			this.$store.dispatch('asyncIncre', 2)
		}
	},
	create() {
		//ajax--actions--data--mutations--state
	}
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
