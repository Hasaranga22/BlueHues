# EmailJS Setup Guide

This guide will help you set up EmailJS to enable the contact form to send emails to `newhasaranga2002@gmail.com`.

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account (free tier allows 200 emails/month)

## Step 2: Add Email Service
1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions
5. **Copy your Service ID** (e.g., `service_xxxxx`)

## Step 3: Create Email Template
1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: {{subject}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
This email was sent from the Blue Hues Ceylon contact form.
```

4. Set the **To Email** field to: `newhasaranga2002@gmail.com`
5. **Copy your Template ID** (e.g., `template_xxxxx`)

## Step 4: Get Public Key
1. Go to **Account** → **General** in the dashboard
2. Find your **Public Key** (e.g., `xxxxxxxxxxxxx`)
3. Copy it

## Step 5: Update Contact Form
1. Open `src/components/ContactUs.jsx`
2. Find the `EMAILJS_CONFIG` object (around line 20)
3. Replace the placeholder values:
   - `YOUR_SERVICE_ID` → Your Service ID from Step 2
   - `YOUR_TEMPLATE_ID` → Your Template ID from Step 3
   - `YOUR_PUBLIC_KEY` → Your Public Key from Step 4

Example:
```javascript
const EMAILJS_CONFIG = {
    serviceId: 'service_abc123',
    templateId: 'template_xyz789',
    publicKey: 'your-public-key-here'
};
```

## Step 6: Test
1. Start your development server: `npm run dev`
2. Navigate to the contact form
3. Fill out and submit the form
4. Check `newhasaranga2002@gmail.com` for the test email

## Troubleshooting
- Make sure all three values are replaced (no "YOUR_" placeholders remain)
- Verify your email service is connected and verified
- Check the browser console for any error messages
- Ensure your EmailJS account is active

That's it! Your contact form is now ready to send emails.
