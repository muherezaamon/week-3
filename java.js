// creates a contact object
function Contact(firstname,phone) {
	this.firstname = firstname
	this.phone = phone;
};// creat an arry to store the contacts
	var contacts =[];// get the input from yhe and save it to contacts array
	var saveContact = () => {
		var firstname = document.quertSelector('[name="firstname"]').Value
		var phone = document.quertSelector('[name="phone]"').value;
		//create a contact object using the constructor
		var newcontact = newcontact(firstname,phone);;
		// save the contact
		contacts.push(newcontact);
		// print the array of contacts
		console.log(contacts[0].phone);
		console.log(contacts[0].firstname);
	};

	var searchContacts = () => {
	  // clear the element
	  document.getElementById("result").innerHTML = "";
	  //get search querry from the form
	  var search_phrase = document.quertSelector('[name="search_phrase"]').value;
	  // loop through indexes of elements in the constacts array
	  for (i = 0; i < constacts.length; i++) {
	  	//get the contact at that index
	  	contact = constacts[i];
	  	// get the frist  name of that contact
	  	firstname = contact.firstname;
	  	phone = contact.phone;
	  	// if the name includes what the user is searching for,
	  	if ( firstname.includes(search_phrase)) {
	  		// print the name
	  		console.log(firstname, " found!")
	  		//return the constact info to the page
	  		var ptag = document.createElement("p");
	  		var node = dpcument.createTextNode(firstname + ": "+ phone);
	  		ptage.appendChild(node);
	  		var elemet = document.getElementById("result");
	  		elemet.appendChild(ptag);
	  	} else {
	  		// else, return an error message
	  		console.log("Not found!")
	  	}

	  }
}