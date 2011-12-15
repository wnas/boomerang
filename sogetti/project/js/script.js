	$('p').fadeIn(2000,function(){
			setData();
			

		});
		var setData = function(){
			//var st = $('span');
			$('span').each(function(i){
				var span = $(this);
			//	var ot = $(this).text();
				var t = i++;
				span.attr('data-t',t);
				dostuff(span);
			//	console.log($(this).text())
				//
			});
		},	dostuff = function(span){
			var time = span.attr('data-t');
			time = time*500;
		//	console.log(typeof time);
		//	console.log(span.attr('data-t'));
			setTimeout( function(){span.addClass('active');},time);
			return false;
			//$(this).next('span').addClass('active').attr('data-t',t)
		
		};