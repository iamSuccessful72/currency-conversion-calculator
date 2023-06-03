const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'acbc8c3254msheb3e17a8482eb55p1b00a2jsn3355b454281a',
		'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
	}
};

export async function getRate<T>(amount: number, from: string, to: string): Promise<T> {
    return await fetch(`https://currency-exchange.p.rapidapi.com/exchange?from=${from}&to=${to}&q=${amount}`, options)
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        else {
            throw new Error(`Http Error ${response.statusText}`)
        }
    })
}

export async function getQuotes<T>(): Promise<T> {
    return await fetch('https://currency-exchange.p.rapidapi.com/listquotes', options)
    .then(response => {
        if (response.ok) {
            return response.json()
        }
        else {
            throw new Error(`Http Error ${response.statusText}`)
        }
    })
}

export type StringArray = string[];