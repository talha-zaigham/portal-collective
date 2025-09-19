import nodemailer from 'nodemailer'

// Email configuration
const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export interface CollectorInquiry {
  name: string
  email: string
  company?: string
  interest: string
  budget: string
  message: string
}

export async function sendCollectorInquiry(inquiry: CollectorInquiry) {
  try {
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.COLLECTOR_EMAIL || 'collector@portal-collective.com',
      subject: `New Collector Inquiry - ${inquiry.name}`,
      html: `
        <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #000; color: #fff;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #d4af37; font-size: 24px; margin: 0;">Portal Collective Ink</h1>
            <p style="color: #ccc; margin: 10px 0 0 0;">New Collector Inquiry</p>
          </div>
          
          <div style="background: #1a1a1a; padding: 25px; border-radius: 8px; border: 1px solid #333;">
            <h2 style="color: #d4af37; margin-top: 0;">Contact Information</h2>
            <p><strong>Name:</strong> ${inquiry.name}</p>
            <p><strong>Email:</strong> ${inquiry.email}</p>
            ${inquiry.company ? `<p><strong>Company:</strong> ${inquiry.company}</p>` : ''}
            
            <h2 style="color: #d4af37; margin-top: 25px;">Collection Details</h2>
            <p><strong>Interest:</strong> ${inquiry.interest}</p>
            <p><strong>Budget Range:</strong> ${inquiry.budget}</p>
            
            <h2 style="color: #d4af37; margin-top: 25px;">Message</h2>
            <p style="background: #000; padding: 15px; border-radius: 4px; border-left: 3px solid #d4af37;">
              ${inquiry.message.replace(/\n/g, '<br>')}
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; color: #666; font-size: 12px;">
            <p>This inquiry was submitted through the Portal Collective Ink website.</p>
          </div>
        </div>
      `,
      text: `
Portal Collective Ink - New Collector Inquiry

Contact Information:
Name: ${inquiry.name}
Email: ${inquiry.email}
${inquiry.company ? `Company: ${inquiry.company}` : ''}

Collection Details:
Interest: ${inquiry.interest}
Budget Range: ${inquiry.budget}

Message:
${inquiry.message}

---
This inquiry was submitted through the Portal Collective Ink website.
      `
    }

    const result = await transporter.sendMail(mailOptions)
    console.log('Collector inquiry email sent:', result.messageId)
    return { success: true, messageId: result.messageId }
  } catch (error) {
    console.error('Email sending error:', error)
    return { success: false, error: error.message }
  }
}

export async function sendSubmissionConfirmation(email: string, submissionId: string) {
  if (!email) return { success: true } // Skip if no email provided

  try {
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: email,
      subject: 'Your Portal Collective Submission - Thank You',
      html: `
        <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #000; color: #fff;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #d4af37; font-size: 24px; margin: 0;">Portal Collective Ink</h1>
            <p style="color: #ccc; margin: 10px 0 0 0;">Thank You for Your Contribution</p>
          </div>
          
          <div style="background: #1a1a1a; padding: 25px; border-radius: 8px; border: 1px solid #333;">
            <h2 style="color: #d4af37; margin-top: 0;">Submission Confirmed</h2>
            <p>Your perception has been received and will be reviewed by our curators.</p>
            <p><strong>Submission ID:</strong> ${submissionId}</p>
            
            <h2 style="color: #d4af37; margin-top: 25px;">What Happens Next?</h2>
            <ul style="color: #ccc;">
              <li>Our curators will review your submission</li>
              <li>Selected responses may inspire new artworks</li>
              <li>You'll be notified if your perception becomes part of a piece</li>
            </ul>
          </div>
          
          <div style="text-align: center; margin-top: 30px;">
            <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/gallery" 
               style="background: #d4af37; color: #000; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">
              View Gallery
            </a>
          </div>
        </div>
      `
    }

    const result = await transporter.sendMail(mailOptions)
    console.log('Confirmation email sent:', result.messageId)
    return { success: true, messageId: result.messageId }
  } catch (error) {
    console.error('Confirmation email error:', error)
    return { success: false, error: error.message }
  }
}
