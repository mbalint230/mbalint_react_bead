# 📚 Fullstack mintafeladatok – Év végi számonkérés

## 📌 A repository célja

Ez a repository olyan **mintafeladatokat és gyakorlati megoldásokat** tartalmaz, amelyek az év végi számonkérés során előfordulhatnak.

A projekt célja, hogy segítséget nyújtson a **backend- és frontendfejlesztés** gyakorlásához, valamint a két rendszer összekapcsolásának megértéséhez.

A megoldások elsősorban **oktatási és gyakorlási célokat** szolgálnak.

## 🛠️ Felhasznált technológiák

### Backend
- **Node.js** – szerveroldali JavaScript-környezet
- **Adatbázis-kapcsolat** – az alkalmazás és az adatbázis összekötése
- **API-végpontok** – adatok kezelése és kiszolgálása
- **JWT (JSON Web Token)** – felhasználói hitelesítés

### Frontend
- **Register** – regisztrációs komponens
- **Login** – bejelentkezési komponens
- **API-végpontokhoz tartozó komponensek** – adatok megjelenítése és kezelése
- **Guest Navbar** – navigáció a be nem jelentkezett felhasználók számára
- **User Navbar** – navigáció a bejelentkezett felhasználók számára

## 🔐 Hitelesítés és biztonság

A projekt a felhasználók hitelesítéséhez **JWT-tokeneket** használ.

Ez a megoldás **technikumi szinten, oktatási célokra megfelelő**, és jól szemlélteti a tokenalapú hitelesítés működését.

**Fontos:** Éles, publikus alkalmazások esetén a JWT használata önmagában nem elegendő a teljes körű biztonsághoz. További biztonsági intézkedésekre, megfelelő tokenkezelésre és összetettebb hitelesítési megoldásokra lehet szükség.

## 🗄️ Adatbázis és környezeti változók

A repository jelenleg **nem tartalmazza** az alábbi fájlokat:

- **`.env`** – környezeti változók és érzékeny konfigurációs adatok
- **Adatbázis** – a működéshez szükséges adatbázist külön kell létrehozni

Az adatbázis létrehozásához szükséges **`.sql` fájl később kerül feltöltésre**.

A `.env` fájlt minden felhasználónak saját környezetében kell létrehoznia és beállítania.

> ⚠️ **Figyelem:** A `.env` fájlt, illetve a jelszavakat, titkos kulcsokat és egyéb érzékeny adatokat nem szabad nyilvános GitHub-repositoryba feltölteni.

---

## 💻 A projekt letöltése és futtatása otthoni gépen

### 1. Szükséges programok

A projekt használatához az alábbi programokra lehet szükség:

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/)
- A projekthez használt adatbázis-kezelő

### 2. A repository letöltése

A projekt kétféleképpen tölthető le.

**1. lehetőség – Git használatával**

Nyiss egy terminált vagy parancssort, majd futtasd:

```bash
git clone https://github.com/FELHASZNALONEV/REPOSITORY-NEVE.git
```

Ezután lépj be a projekt mappájába:

```bash
cd REPOSITORY-NEVE
```

A fenti URL-ben a felhasználónevet és a repository nevét a megfelelő értékekre kell cserélni.

**2. lehetőség – ZIP-fájlként**

1. Nyisd meg a GitHub-repository oldalát.
2. Kattints a zöld **Code** gombra.
3. Válaszd a **Download ZIP** lehetőséget.
4. Csomagold ki a letöltött fájlt.
5. Nyisd meg a mappát Visual Studio Code-ban.

### 3. Függőségek telepítése

Nyiss terminált a backend mappájában:

```bash
cd backend
npm install
```

Ezután telepítsd a frontend függőségeit is:

```bash
cd ../frontend
npm install
```

> A parancsok a `backend` és `frontend` mappaneveket feltételezik. Ha a repository eltérő mappaszerkezetet használ, annak megfelelően kell módosítani őket.

### 4. Környezeti változók beállítása

Hozd létre a szükséges `.env` fájlt, és add meg benne a projekt működéséhez szükséges adatokat, például az adatbázis-kapcsolat beállításait és a JWT titkos kulcsát.

A pontos változónevek és értékek a backend megvalósításától függenek.

### 5. Adatbázis beállítása

Az adatbázis működéséhez szükséges `.sql` fájl később lesz elérhető.

Feltöltése után importálni kell a használt adatbázis-kezelőbe, majd be kell állítani a megfelelő adatbázis-kapcsolatot.

### 6. Az alkalmazás indítása

A függőségek telepítése és a konfiguráció után külön terminálban indítható a backend és a frontend.

**Backend:**

```bash
cd backend
npm run dev
```

**Frontend:**

```bash
cd frontend
npm run dev
```

> Az indítási parancsok a `package.json` fájlokban definiált scriptektől függenek. Ha nincs `dev` script, ellenőrizd az elérhető indítási parancsokat.

---

## 🔄 A repository frissítése

Ha a projektet korábban már letöltötted a `git clone` paranccsal, a később feltöltött módosításokat nem kell újra letöltened.

Lépj be a repository főmappájába, majd futtasd:

```bash
git pull
```

Ezzel letöltheted a távoli repository aktuális ágának legfrissebb módosításait, amennyiben nincsenek ütköző helyi változtatások.

## 📝 Megjegyzés

A repositoryban található feladatok **gyakorlási segédanyagok**, amelyek az év végi számonkérésre való felkészülést támogatják.

A feladatok ismerete és megértése ajánlott, azonban a repository tartalma **nem jelenti azt, hogy minden itt szereplő feladat biztosan része lesz a számonkérésnek**.

**Sok sikert a felkészüléshez! 🚀**
