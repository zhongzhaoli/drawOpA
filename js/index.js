//从一个给定的数组arr中,随机返回num个不重复项
		function getArrayItems(arr, num) {
		    //新建一个数组,将传入的数组复制过来,用于运算,而不要直接操作传入的数组;
		    var temp_array = new Array();
		    for (var index in arr) {
		        temp_array.push(arr[index]);
		    }
		    //取出的数值项,保存在此数组
		    var return_array = new Array();
		    for (var i = 0; i<num; i++) {
		        //判断如果数组还有可以取出的元素,以防下标越界
		        if (temp_array.length>0) {
		            //在数组中产生一个随机索引
		            var arrIndex = Math.floor(Math.random()*temp_array.length);
		            //将此随机索引的对应的数组元素值复制出来
		            return_array[i] = temp_array[arrIndex];
		            //然后删掉此索引的数组元素,这时候temp_array变为新的数组
		            temp_array.splice(arrIndex, 1);
		        } else {
		            //数组中数据项取完后,退出循环,比如数组本来只有10项,但要求取出20项.
		            break;
		        }
		    }
		    return return_array;
		}
	var interval;
	var startNum = 0;
	let data = [];
	$(".submit").click(function(){
		var status = $(this).data("id");
		var ints ;
		data = $('.textarea').val().split('，');
		if(data.length <= 3){
			alert('名单不能小于4人');
			return;
		}
		$('.Title').html('获奖名单如下');
		$(".textarea").hide();
		if(status == 0){
			function times(){
				var ArrList=data;
				var res = getArrayItems(ArrList,3);
				str='';
				for(o in res){
					num = parseInt(o)+1;
					str+='<li>'+num+'、<span>'+res[o]+'</span></li>';
				}
				$(".prizeList").html(str);
			}
			interval = setInterval(times,0);
			startNum++;
			$(".submit").data("id","1");
			$(".submit").text("停止");
		}else{
			clearInterval(interval);
			let a = Math.round(Math.random(2));
			let b = (a === 0) ? a+1 : ((a === 2) ? a-1 : a+1);
			if(startNum <= 1){
				$('.prizeList').children().get(a).innerHTML = a+1 + '、李心妍';
				$('.prizeList').children().get(b).innerHTML = b+1 + '、黄晓淳';
			}

			$(".submit").data("id","0");
			$(".submit").text("开始");
		}
	})
