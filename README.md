# 🛒 NovaMarket | Yeni Nesil E-Ticaret Platformu

![Status](https://img.shields.io/badge/Durum-Tamamland%C4%B1-success?style=for-the-badge)
![Tech](https://img.shields.io/badge/Teknoloji-HTML5%20%7C%20CSS3%20%7C%20JS-blue?style=for-the-badge)
![Bootstrap](https://img.shields.io/badge/UI-Bootstrap%205-purple?style=for-the-badge)

**NovaMarket**, modern web teknolojileri kullanılarak geliştirilmiş, dinamik veri yönetimine sahip, **Serverless (Sunucusuz)** mimaride çalışan kapsamlı bir E-Ticaret simülasyonudur. 

Proje, gerçek bir backend'e ihtiyaç duymadan **LocalStorage** teknolojisi ile verileri tarayıcı hafızasında tutar; bu sayede ürün ekleme, sepet yönetimi, üyelik ve sipariş süreçleri **kalıcı ve interaktif** olarak çalışır.

---

## 📑 İçindekiler

- [🌟 Özellikler](#-özellikler)
- [🔧 Kullanılan Teknolojiler](#-kullanılan-teknolojiler)
- [📸 Ekran Görüntüleri](#-ekran-görüntüleri)
- [🚀 Kurulum ve Çalıştırma](#-kurulum-ve-çalıştırma)
- [🔑 Demo Hesap Bilgileri](#-demo-hesap-bilgileri)
- [📂 Proje Mimarisi](#-proje-mimarisi)
- [👨‍💻 Geliştirici](#-geliştirici)

---

## 🌟 Özellikler

### 👤 Müşteri Paneli
* **Dinamik Sepet Yönetimi:** Ürünleri sepete ekleme, adet güncelleme ve silme işlemleri anlık olarak hesaplanır.
* **AI Öneri Sistemi:** Kullanıcıya, gezdiği sayfalara ve genel trendlere göre rastgele ürün önerileri sunan algoritma (`Math.random` tabanlı simülasyon).
* **Favoriler:** Beğenilen ürünleri yerel hafızada saklama özelliği.
* **Gelişmiş Filtreleme:** Kategori bazlı (Bilgisayar, Telefon, Mobilya vb.) hızlı ürün filtreleme.
* **Güvenlik:** Giriş ve Kayıt sayfalarında özel **Captcha** (Doğrulama Kodu) sistemi.
* **Ödeme Simülasyonu:** Kredi kartı doğrulama ve sipariş oluşturma adımları.

### 🛡️ Admin Paneli
* **Dashboard:** `Chart.js` ile entegre edilmiş, satışları ve kategorileri görselleştiren dinamik grafikler.
* **Ürün Yönetimi (CRUD):** Panel üzerinden yeni ürün ekleme ve mevcut ürünleri silme özelliği. (LocalStorage'a yazar).
* **Sipariş Takibi:** Kullanıcıların verdiği siparişleri görüntüleme ve durum takibi.
* **Yetki Kontrolü:** Sadece 'Admin' yetkisine sahip kullanıcılar panele erişebilir.

---

## 🔧 Kullanılan Teknolojiler

Bu proje aşağıdaki teknolojiler ve kütüphaneler kullanılarak geliştirilmiştir:

* **Frontend:** HTML5, CSS3, JavaScript (ES6+)
* **Framework:** Bootstrap 5.3 (Responsive Tasarım)
* **İkon Seti:** FontAwesome 6
* **Veri Yönetimi:** LocalStorage API (Database Simülasyonu)
* **Grafikler:** Chart.js (Admin Dashboard Veri Görselleştirme)

---

## 🚀 Kurulum ve Çalıştırma

Proje tamamen statik dosyalar ve tarayıcı tabanlı çalıştığı için herhangi bir sunucu kurulumuna ihtiyaç duymaz.

1.  **Projeyi İndirin:**
    ```bash
    git clone [https://github.com/kullaniciadi/novamarket.git](https://github.com/kullaniciadi/novamarket.git)
    ```
2.  **Klasöre Girin:**
    ```bash
    cd novamarket
    ```
3.  **Çalıştırın:**
    * `index.html` dosyasına çift tıklayarak tarayıcınızda açın.
    * **Tavsiye:** VS Code kullanıyorsanız "Live Server" eklentisi ile açmanız daha sağlıklı çalışmasını sağlar.

---

## 🔑 Demo Hesap Bilgileri

Sistemin tüm özelliklerini test etmek için aşağıdaki hazır hesapları kullanabilirsiniz:

### 👨‍💼 Yönetici (Admin) Girişi
Admin paneline erişmek, ürün eklemek ve istatistikleri görmek için:
> **Email:** `admin@nova.com`  
> **Şifre:** `123456`

### 👤 Müşteri (User) Girişi
Alışveriş yapmak, sepete eklemek ve sipariş vermek için:
> **Email:** `user@nova.com`  
> **Şifre:** `123456`

---

## 📂 Proje Mimarisi

```text
NovaMarket/
│
├── index.html          # Anasayfa (Landing Page)
├── product-list.html   # Ürün Listeleme & Filtreleme
├── product-detail.html # Ürün Detay Sayfası
├── cart.html           # Sepet Sayfası
├── login.html          # Giriş Yap & Captcha
├── admin/              # Yönetici Paneli Dosyaları
│   ├── dashboard.html  # Grafikler ve İstatistikler
│   ├── products.html   # Ürün Ekleme/Silme
│   └── orders.html     # Sipariş Listesi
├── css/                # Stil Dosyaları
│   ├── style.css       # Genel Tasarım
│   └── admin.css       # Panel Tasarımı
├── js/                 # Mantıksal Kodlar
│   ├── main.js         # Ürün dataları ve Genel Fonksiyonlar
│   ├── cart.js         # Sepet Algoritması
│   ├── admin.js        # Yönetim Paneli ve CRUD İşlemleri
│   └── validation.js   # Giriş Kontrolü ve Yönlendirme
└── assets/             # Resimler ve Medya Dosyaları
