const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			favourites: [],

			characters: [],

			planets: [],

			ships: [],

			singleCharacter: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			/////////////API STARWARS
			getCharacters: () => {
				(
					fetch(`https://www.swapi.tech/api/people`
					)
						.then(res => {
							if (!res.ok) {
								throw Error(res.statusText)
							};

							return res.json();
						})
						.then((data) => {
							console.log(data);
							setStore({ characters: data.results })
						})
						.catch(error => console.error(error))
				)
			},
			getPlanets: () => {
				(
					fetch(`https://www.swapi.tech/api/planets`
					)
						.then(res => {
							if (!res.ok) {
								throw Error(res.statusText)
							};

							return res.json();
						})
						.then((data) => {
							console.log(data);
							/////Store the data in the STORE to get access
							setStore({ planets: data.results })
						})
						.catch(error => console.error(error))
				)
			},
			getShips: () => {
				(
					fetch(`https://www.swapi.tech/api/starships`
					)
						.then(res => {
							if (!res.ok) {
								throw Error(res.statusText)
							};

							return res.json();
						})
						.then((data) => {
							console.log(data);
							/////Store the data in the STORE to get access
							setStore({ ships: data.results })
						})
						.catch(error => console.error(error))
				)
			},
			getSingleCharacter: (id) => {	
				fetch(`https://www.swapi.tech/api/people/${id}`)
					.then(res => res.json())
					.then((data) => {
						console.log(data);
						/////Store the data in the STORE to get access
						setStore({ singleCharacter: data.result.properties })
					})
					.catch(err => console.error(err))
			}
		}


	};
};


export default getState;
