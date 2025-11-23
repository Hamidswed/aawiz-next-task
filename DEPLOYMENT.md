# Deployment Guide

This guide will help you deploy your Portfolio Dashboard to Vercel.

## Prerequisites

- GitHub account
- Vercel account (free)
- Your project pushed to GitHub

## Step-by-Step Deployment

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Portfolio Dashboard"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio-project.git
git push -u origin main
```

### 2. Deploy to Vercel

#### Option A: Vercel CLI (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - Project name: **portfolio-project** (or your preferred name)
   - Directory: **./portfolio-project**
   - Override settings? **N**

#### Option B: Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Configure project:
   - Framework Preset: **Next.js**
   - Root Directory: **./portfolio-project** (if needed)
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

5. Click "Deploy"

### 3. Environment Variables (Optional)

If you need environment variables:

1. In Vercel Dashboard, go to your project
2. Go to Settings → Environment Variables
3. Add your variables:
   - `NEXT_PUBLIC_SITE_URL`: Your production URL
   - `NEXT_PUBLIC_SITE_NAME`: Your site name

### 4. Custom Domain (Optional)

1. In Vercel Dashboard, go to your project
2. Go to Settings → Domains
3. Add your custom domain
4. Follow DNS configuration instructions

## Automatic Deployments

Once connected to GitHub, Vercel will automatically:
- Deploy on every push to main branch
- Create preview deployments for pull requests
- Run build checks before deployment

## Build Optimization

Your project is already optimized with:
- ✅ Static generation where possible
- ✅ Image optimization
- ✅ Code splitting
- ✅ CSS optimization
- ✅ Bundle analysis

## Performance Monitoring

After deployment, monitor your app:
- Vercel Analytics (built-in)
- Core Web Vitals
- Function logs
- Edge network performance

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Verify TypeScript types are correct

### Runtime Errors
- Check function logs in Vercel dashboard
- Verify environment variables are set
- Check API endpoints are accessible

### Performance Issues
- Use Vercel Analytics
- Check bundle size with `npm run build`
- Optimize images and assets

## Production Checklist

- [ ] All pages load correctly
- [ ] Dark/light mode works
- [ ] Forms submit successfully
- [ ] API calls work
- [ ] Mobile responsive
- [ ] SEO metadata correct
- [ ] Performance score > 90

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [GitHub Issues](https://github.com/yourusername/portfolio-project/issues)

---

Your Portfolio Dashboard is now live! 🚀