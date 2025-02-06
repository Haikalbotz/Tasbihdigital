    let count = 0;
    const counterElement = document.getElementById('counter');
    const countButton = document.getElementById('countButton');
    const resetButton = document.getElementById('resetButton');

    // Fungsi untuk menambah hitungan
    countButton.addEventListener('click', () => {
      count++;
      counterElement.textContent = count;
      countButton.classList.add('clicked');
      setTimeout(() => countButton.classList.remove('clicked'), 200);
    });

    // Fungsi untuk mereset hitungan
    resetButton.addEventListener('click', () => {
      count = 0;
      counterElement.textContent = count;
    });