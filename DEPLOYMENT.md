# Portal Collective Ink - Deployment Guide

## Environment Variables

Create a `.env.local` file in your project root with the following variables:

```bash
# Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/portal_collective"
DIRECT_URL="postgresql://username:password@localhost:5432/portal_collective"

# Email Configuration (for collector inquiries)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"
SMTP_FROM="noreply@portal-collective.com"

# Collector Email (where inquiries are sent)
COLLECTOR_EMAIL="collector@portal-collective.com"

# Site Configuration
NEXT_PUBLIC_SITE_URL="https://portal-collective.com"

# Analytics (Already configured)
NEXT_PUBLIC_GA_ID="G-JETFDJK4PM"
```

## Database Setup

1. **Create PostgreSQL Database**
   ```bash
   createdb portal_collective
   ```

2. **Run Prisma Migrations**
   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

3. **Seed Database (Optional)**
   ```bash
   npx prisma db seed
   ```

## Email Configuration

### Gmail Setup
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Use the App Password as `SMTP_PASS`

### Alternative Email Providers
- **SendGrid**: Use `smtp.sendgrid.net` as host
- **Mailgun**: Use `smtp.mailgun.org` as host
- **AWS SES**: Use your region-specific endpoint

## Production Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
- **Netlify**: Use Next.js build command
- **Railway**: Connect GitHub repo and add environment variables
- **DigitalOcean App Platform**: Deploy from GitHub

## Database Hosting

### Supabase (Recommended)
1. Create a new project at https://supabase.com
2. Get connection string from Settings > Database
3. Update `DATABASE_URL` and `DIRECT_URL`

### Other Options
- **Railway**: PostgreSQL addon
- **PlanetScale**: MySQL (requires schema adjustments)
- **Neon**: Serverless PostgreSQL

## Security Considerations

1. **Environment Variables**: Never commit `.env.local` to version control
2. **Database**: Use connection pooling for production
3. **Email**: Use App Passwords, not regular passwords
4. **CORS**: Configure allowed origins for production domain
5. **Rate Limiting**: Consider adding rate limiting for API endpoints

## Performance Optimization

1. **Image Optimization**: Use Next.js Image component
2. **Database Indexing**: Add indexes for frequently queried fields
3. **Caching**: Implement Redis for session storage
4. **CDN**: Use Vercel's Edge Network or Cloudflare

## Monitoring

1. **Error Tracking**: Add Sentry for error monitoring
2. **Analytics**: Implement Google Analytics or similar
3. **Uptime**: Use UptimeRobot or similar service
4. **Logs**: Monitor application logs in production

## Backup Strategy

1. **Database**: Regular automated backups
2. **Files**: Backup uploaded images and assets
3. **Code**: Use Git for version control
4. **Environment**: Document all configuration changes

## SSL/HTTPS

- **Vercel**: Automatic SSL certificates
- **Custom Domain**: Ensure SSL is enabled
- **Redirects**: Redirect HTTP to HTTPS

## Testing

1. **API Endpoints**: Test all submission and voting endpoints
2. **Email**: Verify email delivery in production
3. **Database**: Test connection and queries
4. **Forms**: Test all form submissions
5. **Mobile**: Test responsive design on various devices
