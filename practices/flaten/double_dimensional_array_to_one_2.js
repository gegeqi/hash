'use strict';

function double_to_one(collection) {

  //在这里写入代码
 var collection = [[1, 2, 3], [5, 2, 1, 4], [2, 1]];
  var arr_a=collection.join(",").split(",");
    var arr=new Array();
	 for(var i=0;i<arr_a.length;i++){
	       arr=arr.concat(parseInt(arr_a[i]));
}                //arr变为一维数组


      /*js模拟hashtable */
              var result = [], hash = {};
    for (var j = 0, elem; (elem = arr[j]) != null; j++) {
        if (!hash[elem]) {
            result.push(elem);
            hash[elem] = true;
        }
    }
    return result;
}

module.exports = double_to_one;
