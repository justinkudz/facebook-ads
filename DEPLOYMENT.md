# Deployment Guide for kudzmedia.com

## Option 1: Vercel (Easiest - Recommended)

### Step 1: Build the Production Version
```bash
cd kudz-media
npm run build
```

This creates a `dist` folder with all your production files.

### Step 2: Deploy to Vercel

**Method A: Using Vercel CLI (Quick)**
1. Install Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy from your project folder:
   ```bash
   cd kudz-media
   vercel
   ```

4. Follow the prompts:
   - Link to existing project? **No** (first time)
   - Project name: **kudz-media** (or your choice)
   - Directory: **./** (current directory)
   - Override settings? **No** (your vercel.json is already configured)

**Method B: Using Vercel Dashboard (Easier)**
1. Go to https://vercel.com and sign up/login
2. Click "Add New Project"
3. Import your Git repository (GitHub/GitLab/Bitbucket)
   - OR drag and drop your `kudz-media` folder
4. Vercel will auto-detect Vite and use your `vercel.json` settings
5. Click "Deploy"

### Step 3: Connect Your Custom Domain (kudzmedia.com)

1. In Vercel dashboard, go to your project → **Settings** → **Domains**
2. Add your domain: `kudzmedia.com` and `www.kudzmedia.com`
3. Vercel will show you DNS records to add:
   - **A Record**: `@` → `76.76.21.21` (or similar)
   - **CNAME Record**: `www` → `cname.vercel-dns.com`
4. Go to your domain registrar (GoDaddy, Namecheap, etc.) and add these DNS records
5. Wait 24-48 hours for DNS propagation (usually faster)

### Step 4: Automatic Deployments (Optional)
- Connect your GitHub repo to Vercel
- Every push to `main` branch auto-deploys
- Free SSL certificate included

---

## Option 2: Netlify

### Step 1: Build
```bash
cd kudz-media
npm run build
```

### Step 2: Deploy
1. Go to https://netlify.com and sign up/login
2. Drag and drop your `dist` folder onto Netlify
3. Or use Netlify CLI:
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir=dist
   ```

### Step 3: Connect Domain
1. Go to **Site settings** → **Domain management**
2. Add custom domain: `kudzmedia.com`
3. Follow DNS instructions

---

## Option 3: Traditional Web Hosting (cPanel, etc.)

### Step 1: Build
```bash
cd kudz-media
npm run build
```

### Step 2: Upload Files
1. Connect to your hosting via FTP (FileZilla) or cPanel File Manager
2. Upload ALL contents of the `dist` folder to your `public_html` or `www` folder
3. Make sure `index.html` is in the root

### Step 3: Configure
- Ensure your hosting supports Node.js/SPA routing
- May need `.htaccess` file for React Router (if using routing)

---

## Option 4: GitHub Pages

### Step 1: Update vite.config.js
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/', // Change to '/your-repo-name/' if using project pages
  // ... rest of config
})
```

### Step 2: Build and Deploy
```bash
npm run build
# Use gh-pages package or GitHub Actions
```

---

## Quick Start (Vercel - Recommended)

**Fastest way to go live:**

1. **Build your site:**
   ```bash
   cd kudz-media
   npm run build
   ```

2. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Add your domain in Vercel dashboard:**
   - Settings → Domains → Add `kudzmedia.com`
   - Follow DNS setup instructions

5. **Done!** Your site will be live at kudzmedia.com

---

## Important Notes

- **SSL Certificate**: Vercel/Netlify provide free SSL automatically
- **Build Command**: Already set to `npm run build` in vercel.json
- **Output Directory**: Already set to `dist` in vercel.json
- **Environment Variables**: Add any needed in Vercel dashboard if you add API keys later

## Troubleshooting

**If images don't load:**
- Make sure all images are in the `public` folder
- Check that paths in code use `/image.jpg` not `./image.jpg`

**If routing doesn't work:**
- Vercel/Netlify handle this automatically
- For traditional hosting, you may need a `.htaccess` file

**If build fails:**
- Run `npm install` first
- Check for any console errors
- Make sure all dependencies are in package.json

