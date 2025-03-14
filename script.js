// Selezioniamo tutte le celle
const cells = document.querySelectorAll('.cell');
let draggedCell = null;

// Funzione per assegnare il colore di sfondo in base al numero
function setCellBackground(cell) {
    const number = parseInt(cell.innerText);
    if (number === 1) {
        cell.style.backgroundColor = 'rgb(255, 123, 0)';
    } else if (number === 2) {
        cell.style.backgroundColor = 'rgb(255, 213, 0)';
    } else if (number === 3) {
        cell.style.backgroundColor = 'rgb(119, 203, 0)';
    }
}

// Impostiamo l'evento "dragstart" per la cella che viene trascinata
cells.forEach(cell => {
    cell.setAttribute('draggable', true); // Impostiamo ogni cella come "draggabile"

    // Impostiamo il background della cella
    setCellBackground(cell);

    cell.addEventListener('dragstart', function (e) {
        // Impostiamo la cella che viene trascinata
        draggedCell = this;
        // Impostiamo lo stile visivo quando la cella viene trascinata
        setTimeout(() => {
            this.style.opacity = '0.5';
        }, 0);
    });

    cell.addEventListener('dragend', function () {
        // Quando il drag finisce, ripristiniamo la cella
        setTimeout(() => {
            draggedCell.style.opacity = '1'; // Ripristina la trasparenza
            draggedCell = null;
        }, 0);
    });

    // Gestiamo gli eventi "dragover" e "drop" per lo scambio
    cell.addEventListener('dragover', function (e) {
        e.preventDefault(); // Necessario per abilitare il drop
    });

    cell.addEventListener('drop', function (e) {
        // Impediamo il comportamento predefinito
        e.preventDefault();

        // Scambiamo i numeri delle celle
        if (draggedCell !== this) {
            const draggedNumber = draggedCell.innerText;
            const currentNumber = this.innerText;

            // Scambio dei numeri
            draggedCell.innerText = currentNumber;
            this.innerText = draggedNumber;

            // Riapplichiamo i colori di sfondo dopo lo scambio
            setCellBackground(draggedCell);
            setCellBackground(this);
        }
    });
});
