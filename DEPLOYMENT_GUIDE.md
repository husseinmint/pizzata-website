# Deploying Pizzata Website to Vercel

## Prerequisites

1. **GitHub Account** (or GitLab/Bitbucket)
   - Your code needs to be in a Git repository
   - Create a repository if you haven't already

2. **Vercel Account**
   - Sign up at [vercel.com](https://vercel.com) (free tier available)
   - You can sign up with GitHub for easier integration

## Step-by-Step Deployment

### Method 1: Deploy via Vercel Dashboard (Recommended)

#### Step 1: Push Your Code to GitHub

1. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create a GitHub Repository**:
   - Go to [github.com](https://github.com)
   - Click "New repository"
   - Name it (e.g., `pizzata-website`)
   - Don't initialize with README
   - Click "Create repository"

3. **Push Your Code**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/pizzata-website.git
   git branch -M main
   git push -u origin main
   ```

#### Step 2: Deploy to Vercel

1. **Go to Vercel Dashboard**:
   - Visit [vercel.com](https://vercel.com)
   - Sign in with your GitHub account

2. **Import Your Project**:
   - Click "Add New..." → "Project"
   - Select your GitHub repository (`pizzata-website`)
   - Click "Import"

3. **Configure Project**:
   - **Framework Preset**: Next.js (should auto-detect)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)

4. **Add Environment Variables**:
   - Click "Environment Variables"
   - Add: `NEXT_PUBLIC_SITE_URL`
   - Value: Your Vercel deployment URL (e.g., `https://pizzata-website.vercel.app`)
   - Or your custom domain if you have one
   - Click "Add" for each environment (Production, Preview, Development)

5. **Deploy**:
   - Click "Deploy"
   - Wait for the build to complete (usually 2-3 minutes)

6. **Get Your Live URL**:
   - Once deployed, you'll get a URL like: `https://pizzata-website.vercel.app`
   - Your site is now live! 🎉

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```
   - Follow the prompts
   - For production deployment, use: `vercel --prod`

4. **Set Environment Variables**:
   ```bash
   vercel env add NEXT_PUBLIC_SITE_URL
   ```
   - Enter your site URL when prompted
   - Select environments (Production, Preview, Development)

## Post-Deployment Configuration

### 1. Update Environment Variables

After your first deployment, update `NEXT_PUBLIC_SITE_URL` with your actual Vercel URL:

1. Go to your project in Vercel Dashboard
2. Settings → Environment Variables
3. Update `NEXT_PUBLIC_SITE_URL` to your Vercel URL
4. Redeploy (or it will auto-update on next push)

### 2. Custom Domain (Optional)

1. **Add Domain in Vercel**:
   - Go to Project Settings → Domains
   - Add your custom domain (e.g., `pizzata.com`)
   - Follow DNS configuration instructions

2. **Update Environment Variable**:
   - Update `NEXT_PUBLIC_SITE_URL` to your custom domain
   - Redeploy

### 3. Update robots.txt and sitemap

The sitemap will automatically use your `NEXT_PUBLIC_SITE_URL` environment variable. Make sure it's set correctly.

## Automatic Deployments

Vercel automatically deploys:
- **Production**: Every push to `main` branch
- **Preview**: Every push to other branches or pull requests

## Troubleshooting

### Build Errors

1. **Check Build Logs**:
   - Go to your project → Deployments
   - Click on failed deployment
   - Check the build logs

2. **Common Issues**:
   - **Missing dependencies**: Make sure all dependencies are in `package.json`
   - **TypeScript errors**: Fix any TypeScript errors locally first
   - **Environment variables**: Ensure all required env vars are set

### Environment Variables Not Working

- Make sure variables are prefixed with `NEXT_PUBLIC_` for client-side access
- Redeploy after adding new environment variables
- Check that variables are added to the correct environment (Production/Preview/Development)

### Images Not Loading

- Ensure all images are in the `public` folder
- Check that image paths are correct
- Verify Next.js Image configuration in `next.config.ts`

## Performance Tips

1. **Enable Analytics** (Optional):
   - Go to Project Settings → Analytics
   - Enable Vercel Analytics for performance insights

2. **Enable Speed Insights**:
   - Project Settings → Speed Insights
   - Get Core Web Vitals monitoring

3. **Check Build Output**:
   - Review bundle size in deployment logs
   - Optimize large dependencies if needed

## Next Steps After Deployment

1. ✅ Submit sitemap to Google Search Console
2. ✅ Set up Google Analytics (if needed)
3. ✅ Test all pages and functionality
4. ✅ Monitor Core Web Vitals
5. ✅ Set up custom domain (if applicable)
6. ✅ Configure SSL (automatic with Vercel)

## Quick Reference

- **Vercel Dashboard**: [vercel.com/dashboard](https://vercel.com/dashboard)
- **Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Support**: [vercel.com/support](https://vercel.com/support)

---

**Your site will be live at**: `https://your-project-name.vercel.app`

Happy deploying! 🚀


