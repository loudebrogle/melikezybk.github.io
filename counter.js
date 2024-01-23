document.addEventListener('DOMContentLoaded', function() {
    // HTML elementlerini seç
    const counterElement = document.getElementById('counter');
    const incrementButton = document.getElementById('increment-btn');
  
    // Sayaç değerini sakla
    let counterValue = 0;
  
    // Arttırma butonuna tıklandığında çalışacak fonksiyon
    function incrementCounter() {
      counterValue++;
      counterElement.textContent = counterValue;
    }
  
    // Arttırma butonuna tıklandığında fonksiyonu bağla
    incrementButton.addEventListener('click', incrementCounter);
  });
  