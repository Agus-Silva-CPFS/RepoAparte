
let get = document.getElementById("get");


get.addEventListener("click", ()=>{
    try{
        fetch('https://6398b453fe03352a94dbe15d.mockapi.io/api/empleados')
        .then(datos => { 
                return datos.json(); 
            }    
        )    
        .then(datos => {
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
        })
        .catch(err => { console.log(err); });    
    }catch(error){
        console.log(error)
    }    
}) 

