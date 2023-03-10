//Variables 
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');
const marca = document.querySelector('#marca');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

const max = new Date().getFullYear();
const min = max - 10;

//Generar un Objeto con la busqueda
const datosBusqueda ={
    marca : '',
    year : '',
    minimo : '',
    maximo : '',
    transmision : '',
    color : '',
}

document.addEventListener('DOMContentLoaded',()=>{
    mostrarAutos( autos ); //Mostrar Automoviles

    llenarSelect(); //Llena el Select de Años
});

//Generar un Objeto con cada Select
marca.addEventListener('change', (e)=>{
    datosBusqueda.marca = e.target.value;

    filtrarAuto();
});

year.addEventListener('change', (e)=>{
    datosBusqueda.year = parseInt(e.target.value);

    filtrarAuto();
});

minimo.addEventListener('change', (e)=>{
    datosBusqueda.minimo = parseInt(e.target.value);
    filtrarAuto();
});

maximo.addEventListener('change', (e)=>{
    datosBusqueda.maximo = parseInt(e.target.value);
    filtrarAuto();
});

puertas.addEventListener('change', (e)=>{
    datosBusqueda.puertas = parseInt(e.target.value);
    filtrarAuto();
});

transmision.addEventListener('change', (e)=>{
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
});

color.addEventListener('change', (e)=>{
    datosBusqueda.color = e.target.value;
    filtrarAuto();
});

function mostrarAutos( autos ){
    limpiarHTML();
    autos.forEach(auto => {

        const {marca,modelo,year,puertas,transmision,precio,color} = auto; 
        const autoHTML = document.createElement('p');

        autoHTML.textContent=`
            ${marca} - ${modelo} - ${year} - Puertas: ${puertas} - ${transmision} - Precio: ${precio} - ${color}`;
        
            resultado.appendChild(autoHTML);
    });
}

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    }
}

function llenarSelect(){
    for(let i=max; i >= min; i-- ){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); //Agrega las opciones de Año
    }
}

function filtrarAuto(){
    const resultado = autos.filter( filtrarMarca).filter( filtraryear).filter(filtrarPuertas)
                    .filter(filtrarTransmision).filter(filtrarColor).filter(filtrarPuertas).filter(filtrarMinimo).filter(filtrarMaximo);


    if(resultado.length){
        mostrarAutos(resultado);
    }else{
        noResultado();
    }
}

function noResultado(){
    limpiarHTML();
    
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta','error');
    noResultado.textContent = 'Sin Resultados';

    resultado.appendChild(noResultado);
}

function filtrarMarca(auto){
    const { marca } = datosBusqueda;
    if(marca){
        return auto.marca === marca;
    }
    return auto;
}

function filtraryear(auto){
    const { year } = datosBusqueda;
    if(year){
        return auto.year === year;
    }
    return auto;
}

function filtrarPuertas(auto){
    const { puertas } = datosBusqueda;
    if(puertas){
        return auto.puertas === puertas;
    }
    return auto;
}

function filtrarTransmision(auto){
    const { transmision } = datosBusqueda;
    if(transmision){
        return auto.transmision === transmision;
    }
    return auto;
}

function filtrarColor(auto){
    const { color } = datosBusqueda;
    if(color){
        return auto.color === color;
    }
    return auto;
}

function filtrarPuertas(auto){
    const { puertas } = datosBusqueda;
    if(puertas){
        return auto.puertas === puertas;
    }
    return auto;
}

function filtrarMaximo(auto){
    const { maximo } = datosBusqueda;
    if(maximo){
        return auto.precio <= maximo;
    }
    return auto;
}

function filtrarMinimo(auto){
    const { minimo } = datosBusqueda;
    if(minimo){
        return auto.precio >= minimo;
    }
    return auto;
}