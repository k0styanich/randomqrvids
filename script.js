const qrcode = document.getElementById('qrcode');
const qrcodeBackground = document.getElementById('qrcodeBackground');
const tip = document.getElementById('tip');
const generateButton = document.getElementById('generateButton');

if (!qrcode || !qrcodeBackground || !generateButton || !tip) {
    console.error("Некоторые элементы не найдены");
}

qrcode.onerror = () => {
    tip.innerText = "Ошибка загрузки QR-кода. Попробуйте ещё раз.";
};

function generateQRCode() {
    const randQR = Math.floor(Math.random() * 87) + 1;
    qrcode.src = `qrcodes/${randQR}.png`;
    qrcodeBackground.classList.add("show");
    tip.innerText = "Чтобы сгенерировать ещё раз, нажми на кнопку ниже ещё раз!";
}

generateButton.addEventListener('click', generateQRCode);