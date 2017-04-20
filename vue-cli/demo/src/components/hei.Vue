<template>
	<div id="de">
		<button @click="compu">{{count}}</button>
	</div>
</template>

<script type="text/javascript">
export default {
	name: 'hei',
	data () {
		return {
			count: 0
		}
	},
	methods: {
		compu() {
			this.count ++
		}
	}
}

</script>

<style ></style>