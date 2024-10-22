async function getWeather() {
    const city = document.getElementById('city-input').value;
    const apiKey = '27a7484202b245afb58184423242010'; // ضع مفتاح API الخاص بك هنا
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=ar`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
            alert('المدينة غير موجودة، يرجى إدخال اسم مدينة صحيح.');
            document.getElementById('weather-result').style.display = 'none';
        } else {
            document.getElementById('city-name').textContent = data.location.name;
            document.getElementById('temperature').textContent = `درجة الحرارة: ${data.current.temp_c}°C`;
            document.getElementById('description').textContent = `الوصف: ${data.current.condition.text}`;
            document.getElementById('weather-icon').src = data.current.condition.icon;
            document.getElementById('weather-result').style.display = 'block';
        }
    } catch (error) {
        alert('حدث خطأ أثناء جلب بيانات الطقس.');
    }
}
