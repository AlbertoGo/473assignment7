	$(document).ready(function(){
		"use strict";
		

		
		function base36(number){
			var longurl = document.getElementById("longURL");
			var alphabet = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
			
			var base36,
				sign,
				i;
			
			if(number < 0){
				sign = '-';
				number = -number;
			}
			
			if(number >=0 && number < alphabet.length()){
				return sign + alphabet[number];
			}
			
			while(number != 0){
				number = number / alphabet.length();
				i = number % alphabet.length();
				base36 = alphabet[i] +base36;
			}
			return sign + base36;
		}
		
		console.log(base36(5));
	});