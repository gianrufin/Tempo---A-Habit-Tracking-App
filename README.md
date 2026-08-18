# ⚡ Tempo — Daily Habit Tracker & Focus Chamber

<p align="center">
  <img src="https://img.shields.io/badge/Android-35%2B-3DDC84?style=for-the-badge&logo=android&logoColor=white" alt="Android" />
  <img src="https://img.shields.io/badge/Kotlin-2.0-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white" alt="Kotlin" />
  <img src="https://img.shields.io/badge/Jetpack%20Compose-Latest-4285F4?style=for-the-badge&logo=jetpackcompose&logoColor=white" alt="Compose" />
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/License-MIT-amber.svg?style=for-the-badge" alt="License" />
</p>

---

## 📲 Direct Android APK Downloads

Choose any of the verified direct download links below to install the Tempo Android app:

<p align="center">
  <a href="https://github.com/gianrufin/Tempo---A-Habit-Tracking-App/releases/download/debug-latest/tempo-android-release.apk">
    <img src="https://img.shields.io/badge/Direct%20Download-Tempo%20APK%20(Latest%20Build)-8B5CF6?style=for-the-badge&logo=android&logoColor=white" alt="Download APK" />
  </a>
</p>

### 🔗 Direct Download Links & Mirrors

| Download Method | Link | Description |
|---|---|---|
| **Primary Release APK** | [📥 tempo-android-release.apk](https://github.com/gianrufin/Tempo---A-Habit-Tracking-App/releases/download/debug-latest/tempo-android-release.apk) | Latest compiled APK release asset |
| **Mirror Download** | [📥 app-debug.apk](https://github.com/gianrufin/Tempo---A-Habit-Tracking-App/releases/download/debug-latest/app-debug.apk) | Secondary debug release mirror |
| **GitHub Releases Hub** | [📦 View All Releases & Tags](https://github.com/gianrufin/Tempo---A-Habit-Tracking-App/releases) | Full changelogs and release history |
| **GitHub Actions CI** | [⚙️ CI Automated Build Artifacts](https://github.com/gianrufin/Tempo---A-Habit-Tracking-App/actions) | Latest automated APK workflow runs |

> 💡 **Note for new GitHub repos**: When pushing to your repository, the included `.github/workflows/build-debug-apk.yml` workflow automatically builds the APK and publishes it to the `debug-latest` release tag.

---

## ✨ Key Features

### 🌅 Chronological Ascending Habit Sequencing
- Habits and routines are dynamically sorted in **ascending order from Morning to Evening** (`Morning (8:00 AM)` &rarr; `Afternoon (1:00 PM)` &rarr; `Evening (6:00 PM)` &rarr; `Night (9:30 PM)` &rarr; `Anytime`).
- Scheduled reminder timestamps automatically position your tasks throughout the day.

### 🔄 In-App OTA Update Engine
- **Direct GitHub Releases Sync**: Check for new application versions in **Settings &gt; Android & GitHub Updates**.
- **In-App Package Downloader & Installer**: Downloads the APK package in real-time with download speed indicators and triggers direct installation without leaving the app.

### ⏱️ Focus Chamber & Sound Synthesizer
- Multi-mode focus timer: **Pomodoro** (Focus / Short Break / Long Break), **Countdown Timer**, and **Stopwatch**.
- Web Audio synthetic chime engine: *Golden Hour*, *Aura Ping*, *Crystal Fizz*, *Velvet Pop*, and *Cloud Drift*.
- Link focus intervals directly to habits for automatic streak tracking.

### 📅 Calendar & Habit Matrix
- Monthly completion matrix with day-by-day streak heat indicators.
- Filter by individual habits or view aggregated productivity scores.

### 📊 Behavioral Analytics & Recap
- Longest and current streak tracking with freeze shields.
- Mood correlation tracking (from Terrible to Fantastic).
- Exportable weekly & monthly visual recap summaries.

---

## 📥 Android Installation Instructions

1. Tap **[Download tempo-android-release.apk](https://github.com/gianrufin/tempo-android/releases/download/debug-latest/tempo-android-release.apk)** (or download from the [Releases page](https://github.com/gianrufin/tempo-android/releases)).
2. On your Android device, open your browser's Downloads or File Manager.
3. Tap `tempo-android-release.apk` (or `app-debug.apk`).
4. If prompted, toggle **Allow from this source** (Enable installation of unknown apps).
5. Tap **Install** and open **Tempo**!

---

## 🛠️ Building From Source

### Android (Gradle)
```bash
# Clone the repository
git clone https://github.com/gianrufin/Tempo---A-Habit-Tracking-App.git
cd Tempo---A-Habit-Tracking-App

# Build Debug APK
./gradlew assembleDebug

# Build Release APK
./gradlew assembleRelease
```
The generated APK will be available in `app/build/outputs/apk/debug/app-debug.apk`.

### Web App (Vite + React)
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build production bundle
npm run build
```

---

## 📄 License
Distributed under the MIT License. Built with ❤️ for seamless habit cultivation.
