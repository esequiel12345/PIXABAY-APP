class UI {
  constructor() {
    this.resultsContainer = document.getElementById('image-results');
    this.paginationContainer = document.getElementById('pagination');
  }

  clearResults() {
    this.resultsContainer.innerHTML = '';
    this.paginationContainer.innerHTML = '';
  }

  showImages(images) {
    this.clearResults();
    images.forEach(image => {
      const div = document.createElement('div');
      div.classList.add('image-card');
      div.innerHTML = `
        <img src="${image.previewURL}" alt="${image.tags}" />
        <p>${image.likes} Likes | ${image.views} Views</p>
      `;
      this.resultsContainer.appendChild(div);
    });
  }

  showPagination(totalHits, currentPage, imagesPerPage, onPageClick) {
    const totalPages = Math.ceil(totalHits / imagesPerPage);
    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement('button');
      btn.textContent = i;
      if (i === currentPage) btn.classList.add('active');
      btn.onclick = () => onPageClick(i);
      this.paginationContainer.appendChild(btn);
    }
  }

  showError(message) {
    this.clearResults();
    this.resultsContainer.innerHTML = `<p class="error">${message}</p>`;
  }
}
