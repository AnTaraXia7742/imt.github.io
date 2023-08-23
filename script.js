document.getElementById('calculate-btn').addEventListener('click', function () {
  var weight = parseFloat(document.getElementById('weight-input').value);
  var height = parseFloat(document.getElementById('height-input').value) / 100; // Convert cm to meter
  var age = parseInt(document.getElementById('age-input').value);
  var gender = document.getElementById('gender-input').value;

  var bmi = weight / (height * height);

  var resultElement = document.getElementById('result');

  var bmiCategory = getBmiCategory(gender, age, bmi);

  // Menampilkan hasil kalkulasi dalam tabel laporan
  const reportTable = document.getElementById('report-table');
  const table = document.createElement('table');
  table.className = 'w-full';
  table.innerHTML = `
      <thead>
        <tr>
          <th class="px-4 py-2">Tanggal</th>
          <th class="px-4 py-2">Berat Badan (kg)</th>
          <th class="px-4 py-2">Tinggi Badan (cm)</th>
          <th class="px-4 py-2">Usia</th>
          <th class="px-4 py-2">Jenis Kelamin</th>
          <th class="px-4 py-2">Indeks Massa Tubuh</th>
          <th class="px-4 py-2">Kategori</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="px-4 py-2">${getCurrentDate()}</td>
          <td class="px-4 py-2">${weight}</td>
          <td class="px-4 py-2">${height * 100}</td>
          <td class="px-4 py-2">${age}</td>
          <td class="px-4 py-2">${gender === 'male' ? 'Laki-laki' : 'Perempuan'}</td>
          <td class="px-4 py-2">${bmi.toFixed(2)}</td>
          <td class="px-4 py-2">${bmiCategory}</td>
        </tr>
        <!-- You can add more rows here if needed -->
      </tbody>
    `;
  reportTable.innerHTML = ''; // Clear previous content
  reportTable.appendChild(table);
});

function getCurrentDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getBmiCategory(_gender, _age, _bmi) {
  // ... (kode kategorisasi BMI seperti sebelumnya) ...
}

function getBmiCategory(gender, age, bmi) {
  if (gender === 'male') {
    if (age < 20) {
      if (bmi < 16.5) {
        return 'Gizi Buruk';
      } else if (bmi < 18.5) {
        return 'Berat badan kurang';
      } else if (bmi < 25) {
        return 'Berat Badan Normal';
      } else if (bmi < 30) {
        return 'Kegemukan';
      } else {
        return 'Diet Bjirr';
      }
    } else {
      if (bmi < 18.5) {
        return 'Berat badan kurang';
      } else if (bmi < 25) {
        return 'Berat Badan Normal';
      } else if (bmi < 30) {
        return 'Kegemukan';
      } else {
        return 'Diet Bjirr';
      }
    }
  } else {
    if (age < 20) {
      if (bmi < 16) {
        return 'Gizi Buruk';
      } else if (bmi < 18.5) {
        return 'Berat badan kurang';
      } else if (bmi < 24) {
        return 'Berat Badan Normal';
      } else if (bmi < 30) {
        return 'Kegemukan';
      } else {
        return 'Diet Bjirr';
      }
    } else {
      if (bmi < 18.5) {
        return 'Berat badan kurang';
      } else if (bmi < 25) {
        return 'Berat Badan Normal';
      } else if (bmi < 30) {
        return 'Kegemukan';
      } else {
        return 'Diet Bjirr';
      }
    }
  }
}
