class PixabayAPI {
  constructor(apiKey, perPage = 12) {
    this.apiKey = apiKey;
    this.perPage = perPage;
    this.query = '';
    this.page = 1;
  }

  async fetchImages(query, page = 1) {
    this.query = query;
    this.page = page;
    const url = `https://pixabay.com/api/?key=${this.apiKey}&q=${encodeURIComponent(query)}&image_type=photo&per_page=${this.perPage}&page=${page}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
}
