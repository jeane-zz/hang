<template>
	<div id="de">
		<h2>{{title}}</h2>
		<p>{{message}}</p>
		<input type="text" v-model="message">
	</div>
</template>

<script type="text/javascript">
export default {
	name: 'exanple',
	data () {
		return {
			message:'',
			title: 'Hello World'
		}
	}
}

</script>

<style ></style>