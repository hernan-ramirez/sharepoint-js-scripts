const petsData = [
	{
		name: "Purrsloud",
		species: "Cat",
		favFoods: ["wet food", "dry food", "<strong>any</strong> food"],
		birthYear: 2016,
		photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
	},
	{
		name: "Barksalot",
		species: "Dog",
		birthYear: 2008,
		photo: "https://learnwebcode.github.io/json-example/images/dog-1.jpg"
	},
	{
		name: "Meowsalot",
		species: "Cat",
		favFoods: ["tuna", "catnip", "celery"],
		birthYear: 2012,
		photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg"
	}
];

function age(birthYear) {
	let calculatedAge = new Date().getFullYear() - birthYear;
	if (calculatedAge == 1) {
		return "1 year old";
	} else if (calculatedAge == 0) {
		return "Baby";
	} else {
		return `${calculatedAge} years old`;
	}
}

function foods(foods) {
	return `
		<h4>Favorite Foods</h4>
		<ul class="foods-list">
		${foods.map(food => `<li>${food}</li>`).join("")}
		</ul>
	`;
}

function petTemplate(pet) {
	return `
		<div class="animal">
		<img class="pet-photo" src="${pet.photo}">
		<h2 class="pet-name">${pet.name} <span class="species">(${pet.species})</span></h2>
		<p><strong>Age:</strong> ${age(pet.birthYear)}</p>
		${pet.favFoods ? foods(pet.favFoods) : ""}
		</div>
	`;
}

document.body.innerHTML = `
  <h1 class="app-title">Pets (${petsData.length} results)</h1>
  ${petsData.map(petTemplate).join("")}
  <p class="footer">These ${petsData.length} pets were added recently. Check back soon for updates.</p>
`;

console.log(document.body);