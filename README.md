# 🚀 LinkedIn Content Automation with n8n

## 📋 **Project Overview**

This project automates LinkedIn content creation based on GitHub activity using n8n workflow automation. It monitors your development work, analyzes technical skills, and generates professional LinkedIn posts automatically.

## ✨ **Features**

- **GitHub Activity Monitoring**: Tracks commits, pull requests, and code changes
- **AI Content Generation**: Uses Google Gemini to create engaging LinkedIn posts
- **Technical Skill Analysis**: Automatically detects and highlights your technical expertise
- **Quality Assurance**: Content evaluation and selection engine
- **Analytics Tracking**: Performance metrics and business impact analysis
- **Email Notifications**: Success/failure alerts and activity summaries

## 🛠️ **Technology Stack**

- **n8n**: Workflow automation platform
- **GitHub API**: Repository activity monitoring
- **Google Gemini**: AI content generation
- **LinkedIn API**: Automated posting
- **SMTP**: Email notifications

## 📊 **Workflow Architecture**

```
GitHub Activity → Analysis → AI Generation → Quality Check → LinkedIn Post → Analytics
```

## 🚀 **Quick Start**

1. **Clone this repository**
2. **Import the workflow.json into n8n**
3. **Configure your credentials**
4. **Set up environment variables**
5. **Test with manual execution**

## 🔧 **Configuration**

### **Required Credentials:**
- GitHub Personal Access Token
- LinkedIn API Access Token
- Google Gemini API Key
- SMTP Email Configuration

### **Environment Variables:**
```bash
GITHUB_USERNAME=your_username
GITHUB_REPO_NAME=your_repository
LINKEDIN_ACCESS_TOKEN=your_token
LINKEDIN_PERSON_URN=urn:li:person:your_id
GEMINI_API_KEY=your_key
NOTIFICATION_EMAIL=your_email
```

## 📈 **Results**

- **Automated LinkedIn Posts**: Weekly technical content
- **Professional Growth**: Consistent thought leadership
- **Time Savings**: 2-3 hours per week saved
- **Network Engagement**: Increased professional visibility

## 🎯 **Use Cases**

- **Software Engineers**: Showcase technical achievements
- **Tech Leaders**: Share innovation and leadership
- **Developers**: Highlight coding skills and projects
- **Consultants**: Demonstrate expertise and value

## 📱 **Screenshots**

![Workflow Diagram](screenshots/workflow-diagram.png)
![n8n Interface](screenshots/n8n-interface.png)
![LinkedIn Post Example](screenshots/linkedin-post-example.png)

## 🔒 **Security**

- All credentials stored securely in n8n
- No sensitive data exposed in repository
- Environment variables for configuration
- Secure API authentication

## 📚 **Documentation**

- [Setup Guide](setup-guide.md)
- [Environment Configuration](environment-setup.md)
- [Troubleshooting](troubleshooting.md)

## 🤝 **Contributing**

Feel free to fork this project and submit pull requests for improvements!

## 📄 **License**

MIT License - feel free to use this project for your own automation needs.

## 🎉 **Acknowledgments**

- n8n community for workflow inspiration
- Google Gemini for AI content generation
- GitHub for repository monitoring
- LinkedIn for professional networking

---

**Built with ❤️ using n8n automation**
