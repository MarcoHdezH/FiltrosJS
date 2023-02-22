const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');

const max = new Date().getFullYear();
const min = max - 10;

document.addEventListener('DOMContentLoaded',()=>{
    mostrarAutos(); //Mostrar Automoviles

    llenarSelect(); //Llena el Select de Años
});

function mostrarAutos(){
    autos.forEach(auto => {

        const {marca,modelo,year,puertas,transmision,precio,color} = auto; 
        const autoHTML = document.createElement('p');

        autoHTML.textContent=`
            ${marca} - ${modelo} - ${year} - Puertas: ${puertas} - ${transmision} - Precio: ${precio} - ${color}`;
        
            resultado.appendChild(autoHTML);
    });
}

function llenarSelect(){
    for(let i=max; i >= min; i-- ){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); //Agrega las opciones de Año
    }

}