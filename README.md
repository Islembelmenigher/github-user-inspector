# 🚀 GitHub Profile Viewer

![GitHub](https://img.shields.io/badge/GitHub-API-blue) ![License](https://img.shields.io/badge/License-MIT-green)

A **modern web application** to fetch and display GitHub user profiles in a clean, user-friendly interface.  
Users can enter a GitHub username and view detailed information including avatar, bio, public repositories, followers, following, account type, creation date, and last activity.

Built with **HTML, CSS, JavaScript (Axios)** for the frontend and **Node.js + Express** for the backend.

---

## 🎯 Features

- 🔍 Search GitHub users by username
- 🖼 Display avatar, bio, public repos, followers, following, account type, creation date, and last activity
- 💻 Responsive, modern, and centered card design
- ⚡ Fast and clean frontend using Axios
- 🛡 Express backend handles GitHub API requests and avoids CORS issues
- 🚫 Graceful error handling for invalid usernames and API rate limits

---

## 🛠 Technologies Used

- **Frontend:** HTML, CSS, JavaScript, Axios  
- **Backend:** Node.js, Express  
- **API:** GitHub REST API

---

## ⚡ Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/github-profile-viewer.git
Install backend dependencies

cd github-profile-viewer
npm install
Start the backend server

node backend/server.js


Open the frontend

Open public/index.html in your browser, or use VS Code Live Server

Enter a GitHub username and hit Search
⚠ Notes

GitHub API rate limit: 60 requests/hour for unauthenticated requests

To increase the limit, configure a personal GitHub token in server.js:

headers: { Authorization: `token YOUR_PERSONAL_TOKEN` }

📦 Project Structure
project/
│
├─ backend/
│   └─ server.js      # Express backend
│
├─ public/
│   ├─ index.html     # Frontend HTML
│   ├─ styles.css     # CSS for modern UI
│   └─ script.js      # JS logic and Axios calls
│
└─ package.json
