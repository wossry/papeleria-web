// 1. Buscamos todos los botones de "Vender" en la tabla
const botonesVender = document.querySelectorAll('.btn-vender');

// 2. A cada botón le ponemos una "oreja" para que escuche cuando le das clic
botonesVender.forEach(boton => {
    boton.addEventListener('click', function() {
        // 3. Buscamos la fila (tr) donde está el botón al que le diste clic
        const fila = this.closest('tr');
        
        // 4. De esa fila, agarramos la celda de la Existencia (es la columna número 4)
        const celdaExistencia = fila.cells[3];
        
        // 5. Convertimos el texto (ej. "25 pzas") a un número limpio (25)
        let piezasActuales = parseInt(celdaExistencia.innerText);
        
        // 6. Si todavía hay mercancía, le restamos 1
        if (piezasActuales > 0) {
            piezasActuales--; // Resta una pieza
            
            // 7. Pintamos el nuevo número en la pantalla
            celdaExistencia.innerText = piezasActuales + " pzas";
            
            // Alerta flotante en el navegador
            alert("¡Venta realizada con éxito!");
        } else {
            alert("¡Ya no hay stock de este producto!");
        }
    });
});