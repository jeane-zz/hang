var app = new Vue({
	el: '#app',
	data: {
		contentWords : '',
		inputWord: '',
		eachWord:'',
},
	methods:{
		getjson(event){
			var that = this
			$.getJSON(`http://damiao.io:5000/autocomplete/${that.inputWord}`, function (data) {
				var result = data['results']
				that.contentWords = result.map(it => it.searchtext)
			})
			$('#list').css('display', 'block')
		},
		query(){
			var that = this
			$.getJSON(`http://damiao.io:5000/word/${that.inputWord.toLowerCase()}`,function(data){
				that.eachWord = data
			})
			$('#list').css('display', 'none')
			if(!$('#outer').hasClass('querymode')){
				$('#outer').addClass('querymode')
			}
		},
		play(event){
			event.target.querySelector('audio').play()
		},
		toggle (event) {
			event.target.parentElement.querySelectorAll('div').forEach(it => {
				// if(it.style.display == 'none'){
				// 	it.style.display = 'block'
				// } else {
				// 	it.style.display = 'none'
				// }
				it.style.display = (it.style.display == 'none')? 'block' :'none'
			})
			var tempa = event.target.querySelector('a')
			tempa.innerHTML = tempa.innerHTML == '+' ? '-' :'+'
		}
	},
	filters: {
		trans (value){
			switch(value){
				case 'noun': return 'n.' 
				case 'verb': return 'v.' 
				case 'pronoun': return 'pron.' 
				case 'adjective': return 'adj.' 
				case 'adverb': return 'adv.' 
				case 'numeral': return 'num.' 
				case 'article': return 'art.' 
				case 'preposition': return 'prep.' 
				case 'conjunction': return 'conj.' 
				case 'interjection': return 'interj.' 
				case 'determiner': return 'det=1.'
				default: return value 
			}
		},
		
	}
})
