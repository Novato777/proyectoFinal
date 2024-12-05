// Datos de consumo energético para las gráficas
const labels = ['GEO BIOMASA', 'GENERACIÓN SOLAR', 'GENERACIÓN EÓLICA', 'GENERACIÓN HIDROELÉCTRICA'];
const data = [2.8208168, 0.31732163, 0.059852246, 59.858196];
const colors = ['#FF5733', '#FFC300', '#DAF7A6', '#36A2EB'];

// Gráfico de barras
const barChart = new Chart(document.getElementById('barChart'), {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [{
      label: 'Consumo (GWh)',
      data: data,
      backgroundColor: colors,
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Consumo Energético por Tipo (GWh)',
        font: { size: 16 }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: 'Consumo (GWh)' }
      },
      x: { title: { display: true, text: 'Tipos de Energía' } }
    }
  }
});

// Gráfico de torta
const pieChart = new Chart(document.getElementById('pieChart'), {
  type: 'pie',
  data: {
    labels: labels,
    datasets: [{
      data: data,
      backgroundColor: colors,
      hoverOffset: 4
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' },
      title: {
        display: true,
        text: 'Distribución del Consumo Energético (%)',
        font: { size: 16 }
      }
    }
  }
});

// Gráfico de líneas
let years = [];
let consumption = [];

function loadCSVDataAndRenderLineChart() {
  fetch('consumo de colombia.csv')
    .then(response => {
      if (!response.ok) throw new Error('No se pudo cargar el archivo CSV.');
      return response.text();
    })
    .then(data => {
      const rows = data.split('\n').slice(1);
      rows.forEach(row => {
        if (row.trim() !== '') {
          const cols = row.split(',');
          years.push(cols[1].trim());
          consumption.push(parseFloat(cols[2].trim()));
        }
      });
      renderLineChart();
    })
    .catch(error => console.error('Error al cargar o procesar el CSV:', error));
}

function renderLineChart() {
  new Chart(document.getElementById('lineChart'), {
    type: 'line',
    data: {
      labels: years,
      datasets: [{
        label: 'Consumo Energético (GWh)',
        data: consumption,
        borderColor: '#4a90e2',
        backgroundColor: 'rgba(74, 144, 226, 0.2)',
        borderWidth: 2,
        pointRadius: 5,
        pointBackgroundColor: '#4a90e2',
        pointHoverRadius: 7
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'top' },
        title: {
          display: true,
          text: 'Evolución del Consumo Energético en Colombia',
          font: { size: 16 }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: { display: true, text: 'Consumo (GWh)' }
        },
        x: { title: { display: true, text: 'Año' } }
      }
    }
  });
}

loadCSVDataAndRenderLineChart();

// Gráfico de área
const areaChart = new Chart(document.getElementById('areaChart'), {
  type: 'line',
  data: {
    labels: labels,
    datasets: [{
      label: 'Consumo (GWh)',
      data: data,
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: '#36A2EB',
      borderWidth: 2,
      pointRadius: 5,
      pointBackgroundColor: '#36A2EB',
      pointHoverRadius: 7
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: {
        display: true,
        text: 'Consumo Energético por Tipo - Área',
        font: { size: 16 }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: 'Consumo (GWh)' }
      },
      x: {
        title: { display: true, text: 'Tipos de Energía' }
      }
    }
  }
});
