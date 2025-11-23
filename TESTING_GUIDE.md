# Testing Guide

This guide will help you test all features of the Portfolio Dashboard application.

## 🚀 Getting Started

1. Start the development server:
```bash
cd portfolio-project
npm run dev
```

2. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🧪 Feature Testing Checklist

### ✅ Home Page (`/`)
- [ ] Page loads correctly
- [ ] Hero section displays properly
- [ ] Feature cards are visible and responsive
- [ ] "Login to Dashboard" button works
- [ ] "Get in Touch" button navigates to contact page
- [ ] Dark/Light mode toggle works
- [ ] Navigation menu is responsive

### ✅ Authentication (`/login`)
- [ ] Login form displays correctly
- [ ] Demo credentials info box is visible
- [ ] "Click to fill" button populates form fields
- [ ] Form validation works:
  - [ ] Empty email shows error
  - [ ] Invalid email format shows error
  - [ ] Password less than 6 characters shows error
- [ ] Password visibility toggle works
- [ ] Wrong credentials show error message
- [ ] Correct credentials redirect to dashboard
- [ ] Loading state displays during login

**Demo Credentials:**
- Email: `demo@portfolio.com`
- Password: `demo123`

### ✅ Dashboard (`/dashboard`)
- [ ] Redirects to login if not authenticated
- [ ] Displays welcome message with username
- [ ] Stats cards show data
- [ ] API data loads correctly:
  - [ ] Recent posts section
  - [ ] Active users section
- [ ] Loading states display during data fetch
- [ ] Refresh button works
- [ ] Error handling works (try disconnecting internet)
- [ ] Responsive design on mobile/tablet

### ✅ Contact Page (`/contact`)
- [ ] Contact form displays correctly
- [ ] Contact information cards are visible
- [ ] Form validation works:
  - [ ] Name minimum 2 characters
  - [ ] Valid email required
  - [ ] Subject minimum 5 characters
  - [ ] Message minimum 10 characters
- [ ] Form submission shows success message
- [ ] Form resets after successful submission
- [ ] Loading state during submission

### ✅ Navigation
- [ ] Logo/brand name links to home
- [ ] Navigation items highlight current page
- [ ] Mobile menu works on small screens
- [ ] Login button shows when not authenticated
- [ ] User email and logout button show when authenticated
- [ ] Logout clears authentication and redirects to home
- [ ] Dashboard link only shows when authenticated

### ✅ Theme System
- [ ] Dark/Light mode toggle works
- [ ] Theme persists on page refresh
- [ ] System theme detection works
- [ ] Smooth transitions between themes
- [ ] All components respect theme colors

### ✅ Responsive Design
Test on different screen sizes:
- [ ] Mobile (320px - 768px)
- [ ] Tablet (768px - 1024px)
- [ ] Desktop (1024px+)
- [ ] Navigation adapts to screen size
- [ ] Cards stack properly on mobile
- [ ] Text remains readable at all sizes

### ✅ Performance
- [ ] Pages load quickly
- [ ] Images are optimized
- [ ] No console errors
- [ ] Smooth animations and transitions
- [ ] Good Lighthouse scores

## 🔧 Testing Scenarios

### Scenario 1: New User Journey
1. Visit home page
2. Click "Login to Dashboard"
3. Try invalid credentials
4. Use demo credentials to login
5. Explore dashboard features
6. Navigate to contact page
7. Fill and submit contact form
8. Logout and verify redirect

### Scenario 2: Authentication Flow
1. Try accessing `/dashboard` directly (should redirect to login)
2. Login with demo credentials
3. Verify dashboard access
4. Refresh page (should stay logged in)
5. Logout and verify redirect
6. Try accessing dashboard again (should redirect to login)

### Scenario 3: Form Validation
1. Visit login page
2. Submit empty form (should show validation errors)
3. Enter invalid email (should show email error)
4. Enter short password (should show password error)
5. Repeat for contact form with different validation rules

### Scenario 4: API Integration
1. Login and access dashboard
2. Verify data loads from JSONPlaceholder API
3. Click refresh button
4. Disconnect internet and test error handling
5. Reconnect and verify data loads again

### Scenario 5: Theme Testing
1. Toggle between light and dark modes
2. Refresh page and verify theme persists
3. Test on different pages
4. Verify all components adapt to theme changes

## 🐛 Common Issues & Solutions

### Issue: Dashboard shows loading forever
**Solution**: Check browser console for API errors. Ensure internet connection is working.

### Issue: Login doesn't work
**Solution**: Verify you're using correct demo credentials: `demo@portfolio.com` / `demo123`

### Issue: Theme doesn't persist
**Solution**: Check if localStorage is enabled in your browser.

### Issue: Mobile menu doesn't work
**Solution**: Ensure JavaScript is enabled and check for console errors.

### Issue: Build fails
**Solution**: Run `npm run build` and check for TypeScript or linting errors.

## 📊 Performance Testing

### Lighthouse Audit
1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Run audit for Performance, Accessibility, Best Practices, SEO
4. Target scores: 90+ for all categories

### Bundle Analysis
```bash
npm run build
```
Check the build output for bundle sizes and optimization.

## 🔍 Browser Testing

Test in multiple browsers:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (if on Mac)
- [ ] Edge (latest)

## 📱 Device Testing

Test on different devices:
- [ ] iPhone (Safari)
- [ ] Android (Chrome)
- [ ] iPad (Safari)
- [ ] Desktop (various browsers)

## ✅ Final Checklist

Before considering testing complete:
- [ ] All features work as expected
- [ ] No console errors
- [ ] Responsive on all screen sizes
- [ ] Good performance scores
- [ ] Accessible to users with disabilities
- [ ] Works in multiple browsers
- [ ] Authentication flow is secure
- [ ] Forms validate properly
- [ ] API integration is robust

## 🎯 Success Criteria

The application passes testing if:
1. All authentication flows work correctly
2. Forms validate and submit properly
3. Dashboard displays real API data
4. Theme switching works seamlessly
5. Responsive design works on all devices
6. No critical console errors
7. Performance scores are above 90
8. All navigation works as expected

---

Happy Testing! 🚀