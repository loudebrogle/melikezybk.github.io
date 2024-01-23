function convertLength() {
    // Giriş değerini al
    const lengthInput = parseFloat(document.getElementById('lengthInput').value);
  
    // Dönüştürme birimlerini al
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
  
    // Dönüşüm faktörlerini tanımla
    const conversionFactors = {
      metre: {
        kilometre: 0.001,
        mil: 0.000621371,
      },
      kilometre: {
        metre: 1000,
        mil: 0.621371,
      },
      mil: {
        metre: 1609.34,
        kilometre: 1.60934,
      },
    };
  
    // Dönüşümü hesapla
    const result = lengthInput * conversionFactors[fromUnit][toUnit];
  
    // Sonucu ekrana yazdır
    document.getElementById('result').innerText = `Sonuç: ${result} ${toUnit}`;
  }
  