let url = 'https://api.openweathermap.org/data/2.5/weather'
let weather = 'bac34db8e878cf68f4a1b44283d38448'
let difK = 273.15

document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value
    if (ciudad) {
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad) {
    fetch(`${url}?q=${ciudad}&appid=${weather}`)
    .then (data => data.json())
    .then (data => mostrarDatosClima(data))
}

function mostrarDatosClima(data) {
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML = ''

    const nombreCiudad = data.name
    const nombrePais = data.sys.country
    const tempCiudad = data.main.temp
    const descripcCiudad = data.weather[0].description
    const humedCiudad = data.main.humidity
    const icono = data.weather[0].icon

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${nombreCiudad}, ${nombrePais}`

    const infoTemp = document.createElement('p')
    infoTemp.textContent = `La temperatura es: ${Math.floor(tempCiudad - difK)}°C`
    
    const infoHumedad = document.createElement('p')
    infoHumedad.textContent = `La humedad es: ${humedCiudad}%`

    const iconoInfo = document.createElement('img')
    iconoInfo.src= `https://openweathermap.org/img/wn/${icono}@2x.png`

    const descripInfo = document.createElement('p')
    descripInfo.textContent = `La descripción meteorológica es: ${descripcCiudad}`

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(infoTemp)
    divDatosClima.appendChild(infoHumedad)
    divDatosClima.appendChild(iconoInfo)
    divDatosClima.appendChild(descripInfo)
}
