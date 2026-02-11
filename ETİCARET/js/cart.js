// --- js/cart.js (GÜVENLİ VE DÜZELTİLMİŞ SÜRÜM) ---

// Sepeti Getir
let cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];

// Sepet İkonunu Güncelle
function updateCartCount() {
    const countSpan = document.getElementById("cart-count");
    if(countSpan){
        const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);
        countSpan.innerText = totalQty;
    }
}

// 1. SEPETE EKLEME FONKSİYONU
function addToCart(productId) {
    // products değişkeni main.js veya globalden gelmeli
    // Eğer products tanımlı değilse hata vermemesi için kontrol ekleyelim:
    if (typeof products === 'undefined') {
        console.error("HATA: 'products' listesi bulunamadı. main.js yüklü mü?");
        return;
    }

    const product = products.find(p => p.id === productId);
    
    if (!product) {
        console.error("Ürün bulunamadı! ID:", productId);
        return;
    }

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    saveCart();
    alert(`${product.name} sepete eklendi!`);
}

// 2. SEPETTEN SİLME
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    renderCartPage();
}

// 3. ADET DEĞİŞTİRME
function changeQty(productId, change) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    item.qty += change;

    if (item.qty <= 0) {
        removeFromCart(productId);
    } else {
        saveCart();
        renderCartPage();
    }
}

// 4. KAYDETME
function saveCart() {
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
    updateCartCount();
}

// 5. SEPET SAYFASINI ÇİZME (HATA DÜZELTİLDİ)
function renderCartPage() {
    const cartTableBody = document.getElementById("cart-items");
    const emptyMessage = document.getElementById("empty-cart-message");
    const cartTableContainer = document.getElementById("cart-table-container"); // HTML'de bu ID'nin olduğundan emin ol
    const totalPriceEl = document.getElementById("total-price");
    const finalPriceEl = document.getElementById("final-price");

    // Eğer sayfada sepet tablosu yoksa (örneğin anasayfadaysak) fonksiyonu durdur.
    if (!cartTableBody) return; 

    if (cart.length === 0) {
        // HATA VEREN YER BURASIYDI: Kontrol ekledik (varsa gizle/göster)
        if (cartTableContainer) cartTableContainer.style.display = "none";
        if (emptyMessage) emptyMessage.style.display = "block";
    } else {
        // Dolu ise tabloyu göster, mesajı gizle
        if (cartTableContainer) cartTableContainer.style.display = "block";
        if (emptyMessage) emptyMessage.style.display = "none";
        
        let html = "";
        let total = 0;

        cart.forEach(item => {
            const itemTotal = item.price * item.qty;
            total += itemTotal;
            html += `
            <tr>
                <td style="width: 100px;"><img src="${item.img}" class="img-fluid rounded" alt="${item.name}"></td>
                <td class="align-middle">
                    <h6 class="mb-0">${item.name}</h6>
                    <span class="text-muted small">${item.category}</span>
                </td>
                <td class="align-middle">${item.price.toLocaleString('tr-TR')} TL</td>
                <td class="align-middle">
                    <div class="input-group input-group-sm" style="width: 100px;">
                        <button class="btn btn-outline-secondary" onclick="changeQty(${item.id}, -1)">-</button>
                        <input type="text" class="form-control text-center" value="${item.qty}" readonly>
                        <button class="btn btn-outline-secondary" onclick="changeQty(${item.id}, 1)">+</button>
                    </div>
                </td>
                <td class="align-middle fw-bold">${itemTotal.toLocaleString('tr-TR')} TL</td>
                <td class="align-middle">
                    <button class="btn btn-sm btn-danger" onclick="removeFromCart(${item.id})"><i class="fas fa-trash"></i></button>
                </td>
            </tr>
            `;
        });

        cartTableBody.innerHTML = html;
        if (totalPriceEl) totalPriceEl.innerText = total.toLocaleString('tr-TR') + " TL";
        if (finalPriceEl) finalPriceEl.innerText = total.toLocaleString('tr-TR') + " TL";
    }
}

// 6. ÖDEMEYE GİTME
function goToPayment() {
    if (cart.length === 0) {
        alert("Sepetiniz boş! Ödeme yapamazsınız.");
        return;
    }

    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (!user) {
        if(confirm("Ödeme yapmak için giriş yapmalısınız. Giriş sayfasına gitmek ister misiniz?")) {
            window.location.href = "login.html";
        }
        return;
    }

    window.location.href = "checkout.html";
}

// Sayfa Yüklendiğinde Başlat
document.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
    renderCartPage();
});