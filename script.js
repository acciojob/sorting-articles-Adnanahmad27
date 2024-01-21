//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const bandNode = document.getElementById("band");

function sortBands() {
	const igWords = ["a","an","the"];
	
	function customSort(a,b) {
	let band1 = a.split(" ");
	let band2 = b.split(" ");

	band1 = band1.filter( band => !igWords.includes(band.toLowerCase()));
	band2 = band2.filter( band => !igWords.includes(band.toLowerCase()));

	return band1[0].localeCompare(band2[0]);
	}

	bands.sort(customSort);
	bands.forEach( band => {
		let listItem = document.createElement("li");
		listItem.textContent = band;
		bandNode.appendChild(listItem);
	});	
}

sortBands();