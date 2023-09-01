// Örnek bir film listesi
const filmListesi = [
    'The whale ',
    'Babylon',
    ' A Beautiful Mind/Akıl Oyunları',
    ' American Beauty/Amerikan Güzeli',
    'Godfather/Baba Serisi',
    'Good Will Hunting/Can Dostum',
    'Görüntülü Konuşalım..',
    'La Vita e Bella/Hayat Güzeldir',
    ' Scent of A Woman/Kadın Kokusu',
    'Taxi Driver/Taksi Şoförü',
    // Eklemek istediğiniz daha fazla filmi buraya ekleyin
];

// HTML içindeki gerekli elementlere erişin
const filmGosterElement = document.getElementById('filmGoster');
const rastgeleFilmButton = document.getElementById('filmbutton');

// Rastgele film seçme işlevi
function rastgeleFilmSec() {
    const rastgeleIndex = Math.floor(Math.random() * filmListesi.length);
    const secilenFilm = filmListesi[rastgeleIndex];
    filmGosterElement.textContent = `Bu Gecenin Filmi: ${secilenFilm}`;
}

// Rastgele film seç butonuna tıklama olayını dinleyin
rastgeleFilmButton.addEventListener('click', rastgeleFilmSec);



const filmbutton = document.getElementById('filmbutton');

filmbutton.addEventListener('click', function () {
    filmbutton.classList.add('animated'); // animasyon sınıfını ekleyin

    // İşlem tamamlandıktan sonra animasyon sınıfını kaldırın
    setTimeout(function () {
        filmbutton.classList.remove('animated');
    }, 300); // animasyon süresi (0.3 saniye) kadar bekleyin
});