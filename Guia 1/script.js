const botonesAgregar = document.querySelectorAll('.btn-add');
const listaPedido = document.getElementById('lista-pedido');
const totalPago = document.getElementById('total-pago');
const btnFinalizar = document.getElementById('btn-finalizar');

let total = 0;

botonesAgregar.forEach(boton => {
    boton.addEventListener('click', () => {
        const nombre = boton.getAttribute('data-nombre');
        const precio = parseInt(boton.getAttribute('data-precio'));

        // Añadir a la lista visual
        const li = document.createElement('li');
        li.style.display = 'flex';
        li.style.justifyContent = 'space-between';
        li.style.marginBottom = '10px';
        li.innerHTML = `<span>${nombre}</span> <span>$${precio.toLocaleString()}</span>`;
        listaPedido.appendChild(li);

        // Sumar total
        total += precio;
        totalPago.textContent = total.toLocaleString();

        // Habilitar botón de compra
        btnFinalizar.disabled = false;
    });
});

btnFinalizar.addEventListener('click', () => {
    // Simulando la "Disminución de errores en pedidos" [cite: 12]
    btnFinalizar.textContent = "Procesando...";
    btnFinalizar.disabled = true;

    setTimeout(() => {
        alert(`¡Gracias por elegir Smart Resto!\nTu pedido está en cocina.\nTotal: $${total.toLocaleString()}`);
        
        // Limpiar para el siguiente cliente
        listaPedido.innerHTML = '';
        total = 0;
        totalPago.textContent = '0';
        btnFinalizar.textContent = "Confirmar Pedido";
    }, 1500);
});