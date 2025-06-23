const apiKey = '50965489-09a91e7d73e16cb0b01de53c2'; 
const api = new PixabayAPI(apiKey);
const ui = new UI();

document.getElementById('search-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const query = document.getElementById('search-input').value.trim();
  if (!query) return ui.showError('Por favor ingresa una búsqueda');

  loadResults(query, 1);
});

async function loadResults(query, page) {
  try {
    const data = await api.fetchImages(query, page);
    if (data.hits.length === 0) return ui.showError('No se encontraron resultados.');

    ui.showImages(data.hits);
    ui.showPagination(data.totalHits, page, api.perPage, (newPage) => loadResults(query, newPage));
  } catch (error) {
    ui.showError('Error al conectar con la API');
  }
}
