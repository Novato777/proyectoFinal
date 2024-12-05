// Cargar datos del CSV y mostrar en la tabla
document.addEventListener("DOMContentLoaded", () => {
    fetch("consumo solar anuales.csv")
        .then(response => {
            if (!response.ok) {
                throw new Error("No se pudo cargar el archivo CSV");
            }
            return response.text();
        })
        .then(data => {
            const rows = data.split("\n").slice(1); // Ignorar encabezado
            const tableBody = document.querySelector("#data-table tbody");

            rows.forEach(row => {
                if (row.trim() !== "") {
                    const cols = row.split(",");
                    const tr = document.createElement("tr");
                    cols.forEach(col => {
                        const td = document.createElement("td");
                        td.textContent = col.trim();
                        tr.appendChild(td);
                    });
                    tableBody.appendChild(tr);
                }
            });
        })
        .catch(error => console.error("Error al cargar el CSV:", error));
});

// Filtrar países en la tabla
document.getElementById("searchBox").addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase();
    const rows = document.querySelectorAll("#data-table tbody tr");

    rows.forEach(row => {
        const countryCell = row.cells[0]; // Primera columna: país
        if (countryCell) {
            const countryName = countryCell.textContent.toLowerCase();
            row.style.display = countryName.includes(searchTerm) ? "" : "none";
        }
    });
});
