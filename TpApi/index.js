
let get = document.getElementById("get");
let thId = document.querySelector('.thId');
thId.classList.toggle('mostrar')
let thDomicilio = document.querySelector('.thDomicilio');
thDomicilio.classList.toggle('mostrar')
get.addEventListener("click", ()=>{
    try{
        fetch('https://6398b453fe03352a94dbe15d.mockapi.io/api/empleados')
        .then(datos => { 
                return datos.json(); 
            }    
        )    
        .then(datos => {
            crearEmpleado(datos);
        })
        .catch(err => { console.log(err); });    
    }catch(error){
        console.log(error)
    }    
})
function crearEmpleado(datos){
    let aux=[];
            for (let i = 0; i < datos.length; i++) {
                aux.push(datos[i]);
            }    
            for(let i=0;i<aux.length;i++){
                let newTr = document.createElement('TR');
                let tdNombre = document.createElement('TD');
                let tdArea = document.createElement('TD');
                let tdDomicilio = document.createElement('TD');
                let tdId = document.createElement('TD');
                let img = new Image();
                img.src = aux[i].foto;
                img.width = 50;
                img.height= 50;
                
                img.classList.add('ocultar');
                tdDomicilio.classList.add('ocultar');
                tdId.classList.add('ocultar');
                
                
                let btnVer = document.createElement('BUTTON');
                btnVer.classList.add('btnMostrar')
                btnVer.addEventListener('click', () => {
                    tdDomicilio.classList.toggle('ocultar');
                    tdId.classList.toggle('ocultar');
                    img.classList.toggle('ocultar');
                    thDomicilio.classList.toggle('mostrar');
                    thId.classList.toggle('mostrar')
                });
                tdNombre.textContent = aux[i].nombre;
                newTr.appendChild(tdNombre);
                tdArea.textContent = aux[i].area;
                newTr.appendChild(tdArea); 
                tdDomicilio.textContent = aux[i].domicilio;
                newTr.appendChild(tdDomicilio);
                tdId.textContent = aux[i].id;
                newTr.appendChild(tdId);
                btnVer.textContent = 'Mostrar/Ocultar';
                newTr.appendChild(btnVer);
                let tablebody = document.getElementById('bodyTabla');
                tablebody.appendChild(newTr);
                newTr.appendChild(img); 
            }
} 

let BtnForm = document.getElementById('btnEnviar');
BtnForm.addEventListener('click', (e) =>{
    e.preventDefault();
    let datos = {
        nombre: document.getElementById('inpNombre').value,
        area: document.getElementById('inpArea').value,
        domicilio: document.getElementById('inpDom').value,
        imagen:document.getElementById('inpImg').value,
        id: document.getElementById('nuevoId').value,
    }
    try{
        fetch('https://6398b453fe03352a94dbe15d.mockapi.io/api/empleados',
        {
            method:'POST',body:JSON.stringify(datos),
            headers: { 'Content-Type': 'application/json' }
         })
        .then(tabla => {
            return tabla.json();
        })
        .then(tabla => console.log('Respuesta de la Api: ',tabla))
        .catch(err => { console.log(err)})
    }catch(error){
        console.log(error);
    }
})
