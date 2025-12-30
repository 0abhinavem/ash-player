# 🚀 ASH Player - GitHub Pages Deployment Guide

Follow these steps to deploy your PWA to GitHub Pages and test it on your mobile device.

---

## 📋 Step 1: Enable GitHub Pages

### Option A: Using GitHub Website (Recommended)

1. **Open your repository:**
   - Go to: https://github.com/0abhinavem/ash-player

2. **Navigate to Settings:**
   - Click the **Settings** tab (top right of repository page)

3. **Find Pages section:**
   - Scroll down in the left sidebar
   - Click on **Pages**

4. **Configure deployment:**
   - Under **Source**, select **Deploy from a branch**
   - Under **Branch**, select **main** from the dropdown
   - Keep the folder as **/ (root)**
   - Click **Save**

5. **Wait for deployment:**
   - GitHub will show a message: "Your site is being built"
   - Refresh the page after 1-2 minutes
   - You'll see: "Your site is live at https://0abhinavem.github.io/ash-player/"

---

### Option B: Using Command Line (Alternative)

If you prefer using Git commands, GitHub Pages is automatically enabled when you push to the main branch. You just need to enable it in the repository settings as shown in Option A.

---

## 🌍 Step 2: Verify Deployment

1. **Check deployment status:**
   - Go to: https://github.com/0abhinavem/ash-player/deployments
   - Look for "github-pages" deployment
   - Status should show "Active"

2. **Visit your live site:**
   - URL: **https://0abhinavem.github.io/ash-player/**
   - Open in your desktop browser first to verify

3. **Test PWA features:**
   - Open Developer Tools (F12)
   - Go to Application tab
   - Check Manifest and Service Workers are working

---

## 📱 Step 3: Install on Your Mobile Device

### Android (Chrome/Edge)

1. **Open on your phone:**
   - Open Chrome or Edge browser
   - Navigate to: `https://0abhinavem.github.io/ash-player/`

2. **Install the app:**
   - **Method 1:** Tap the banner at the bottom: "Add ASH Player to Home screen"
   - **Method 2:** Tap menu (⋮) → "Add to Home screen"
   - **Method 3:** Tap the "Install App" button in the app header

3. **Confirm installation:**
   - A dialog appears: "Add to Home screen?"
   - Tap **Add** or **Install**

4. **Launch the app:**
   - Find the ASH Player icon on your home screen
   - Tap it to open in fullscreen mode (no browser UI!)

### iOS (Safari)

1. **Open on your iPhone/iPad:**
   - Open Safari browser
   - Navigate to: `https://0abhinavem.github.io/ash-player/`

2. **Add to Home Screen:**
   - Tap the **Share** button (square with arrow pointing up)
   - Scroll down and tap **"Add to Home Screen"**

3. **Customize (optional):**
   - Edit the name if you want
   - Tap **Add** (top right)

4. **Launch the app:**
   - Find the ASH Player icon on your home screen
   - Tap it to open in fullscreen mode

---

## 🧪 Step 4: Test PWA Features

### Test Offline Mode

1. **Open the installed app** on your phone
2. **Enable Airplane Mode** or turn off WiFi/Data
3. **Navigate** through the app
4. You should see it still works!
5. If you're offline when loading, you'll see the custom offline page

### Test Installation

- ✅ App icon appears on home screen
- ✅ Opens in fullscreen (no browser UI)
- ✅ Has custom splash screen
- ✅ Theme color matches app design (#667eea)

### Test Responsiveness

- ✅ Hamburger menu works smoothly
- ✅ Touch controls are easy to use
- ✅ Layout adjusts to screen size
- ✅ Rotate phone to test landscape mode

---

## 🔄 Step 5: Update Your App (Future Changes)

When you make changes to your app:

1. **Make your changes locally**
2. **Commit changes:**
   ```bash
   git add .
   git commit -m "Your commit message"
   ```

3. **Push to GitHub:**
   ```bash
   git push origin main
   ```

4. **Wait 1-2 minutes** for GitHub Pages to rebuild
5. **Refresh the app** on your phone to see changes
   - The service worker will update automatically
   - Or you can uninstall and reinstall the app

---

## 🐛 Troubleshooting

### Issue: Site not deploying

**Solution:**
- Check repository settings → Pages
- Make sure branch is set to `main`
- Check Actions tab for build errors

### Issue: PWA not installing on mobile

**Solution:**
- Ensure you're using HTTPS (GitHub Pages uses HTTPS by default)
- Try clearing browser cache
- On iOS, make sure you're using Safari (not Chrome)

### Issue: Service worker not updating

**Solution:**
- Hard refresh the page (Ctrl + Shift + R on desktop)
- Clear browser cache and reload
- On mobile, uninstall and reinstall the app

### Issue: App shows old content after update

**Solution:**
- The service worker caches content
- Wait 24 hours for automatic update, or
- Uninstall and reinstall the app for immediate update

---

## 📊 Deployment Checklist

- [ ] Repository pushed to GitHub
- [ ] GitHub Pages enabled in settings
- [ ] Deployment shows "Active" status
- [ ] Site accessible at https://0abhinavem.github.io/ash-player/
- [ ] Manifest.json loads correctly (check DevTools)
- [ ] Service worker registers successfully
- [ ] App installable on mobile devices
- [ ] Offline mode works
- [ ] Mobile responsive layout works
- [ ] All features tested on actual mobile device

---

## 🎉 Success!

Once deployed, you can:

- 📱 **Install on your phone** and use like a native app
- 🌍 **Share with friends** via the URL
- ✈️ **Use offline** anywhere, anytime
- 🔄 **Auto-update** when you push changes to GitHub

Your ASH Player is now a fully-featured Progressive Web App accessible worldwide! 🚀

---

## 📞 Share Your App

**Your App URL:** `https://0abhinavem.github.io/ash-player/`

Share this link:
- Send to friends via text/email
- Post on social media
- Add to your portfolio
- QR code for easy mobile access

Enjoy your music player! 🎵
