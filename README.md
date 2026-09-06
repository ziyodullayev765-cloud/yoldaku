# Maxfiy suhbat

Xona kodi bilan ishlaydigan oddiy 2 kishilik chat: matn + rasm, real Node.js server orqali.

## Lokal ishga tushirish
```
npm install
npm start
```
So'ng brauzerda: http://localhost:3000

## Render'ga deploy qilish
1. Shu papkani GitHub'da yangi repo qilib yuklang.
2. Render'da "New +" -> "Web Service" -> shu repo'ni tanlang.
3. Build Command: `npm install`
4. Start Command: `node server.js`
5. Free plan tanlab "Create Web Service" bosing.
6. Bir necha daqiqadan so'ng sizga `https://loyihangiz.onrender.com` kabi ochiq havola beriladi — shuni istalgan kishi bilan ulashishingiz mumkin, Claude yoki boshqa hisob shart emas.

## Muhim eslatma
- Xabarlar server RAM'ida (xotirada) saqlanadi. Bepul Render tarifida server uzoq vaqt ishlatilmasa "uxlab qoladi" va qayta ishga tushganda barcha xabarlar o'chib ketadi.
- Doimiy saqlash kerak bo'lsa (masalan Postgres yoki oddiy fayl/JSON bazasi), buni keyinroq qo'shib berish mumkin.
- Bu shifrlangan xavfsiz messenjer emas — kodni biladigan har kim shu xonaga kira oladi.
