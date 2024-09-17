const counter = {count:1,step:2,
	 increment : function(){
		return this.count += this.step;
   }
}
console.log(counter.increment());