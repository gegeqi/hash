'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var arr_a=collection.join(",").split(",");
  var arr=new Array();
       for(var i=0;i<arr_a.length;i++){
        arr=arr.concat(parseInt(arr_a[i]));
    }
  return arr;
}
module.exports = double_to_one;
