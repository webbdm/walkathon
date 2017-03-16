var Walk = (function(){

	var info = {
		name: "Walker",
		pledge:"5",
		interval: "per mile",
		email: "walker@walker"
	}


	return {

	  getInfo: function(){

	  		return info;

	  },
	  setInfo: function(){
	  		// eventually when a form is submitted, this will call setInfo(getInfo()) which will grab the info 
	  },

	  addDonor: function(){
	  	   //  This will be addDonor(setInfo(getInfo()))
	  }
	}
})();

