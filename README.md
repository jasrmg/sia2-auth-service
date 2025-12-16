# 📌 SIA2 — Login & Registration System (React TypeScript + Firebase)

This project is the **final project for SIA2**. It is a simple **Login and Registration system** built using **React** for the frontend and **Firebase Authentication** for the backend.

The system allows users to:

- Register using email and password
- Verify email addresses upon registration
- Login with registered credentials
- Receive email notifications upon successful login
- Enable 2-factor authentication (2FA) using email
- Validate password strength on the frontend
- Limit login attempts to 3 tries, and notify the user if login fails 3 times, preventing further attempts

The main goal is to demonstrate authentication flows, basic form handling, and frontend-backend integration using Firebase.

This document explains exactly what collaborators must do, step-by-step, when contributing to the project.
Follow this guide strictly to avoid merge conflicts, broken features, and messy branches.

# 🔧 1. Requirements (Install these first)

Install these on your machine before starting:

- Node.js (LTS) → verify: node -v
- npm → verify: npm -v
- Git → verify: git --version
- VS Code (recommended)

# 📥 2. Clone the project (one-time only)

- open vsc -> terminal
- type this in the terminal
- `git clone https://github.com/jasrmg/sia2-auth-service.git`
- cd sia2-auth-service

# ⚙️ 3. Install dependencies

- open vsc -> terminal
- `npm install`

# 🔑 4. Firebase Setup (VERY IMPORTANT)

- create a .env file in the project root
- add firebase web config

# ▶️ 5. How to run the project locally

`npm run dev`

Project will run on:

`http://localhost:5173`

# 🌿 6. Branching Workflow (IMPORTANT)

**_ALWAYS START FROM LATEST DEVELOP_**

```
git fetch origin
git checkout develop
git pull origin develop
```

go to your designated branch:
`git checkout -b branchname`

# ✏️ 7. Make your changes

Write your code normally.

# 💾 8. Commit your work

Stage your changes:
`git add .`

Commit with a meaningful message:
`git commit -m "feat: add login page UI and basic client-side validation"`

# ⬆️ 9. Push your branch

`git push origin branchname`

# 🔀 10. Creating a Pull Request (PR)

Once the feature works, you submit a PR.

### Your PR MUST include:

- What you added
- Why you added it
- Screenshots (if UI-related)
- Steps to test it

#### Target branch must ALWAYS be:

`develop`

Example PR Title:  
** feat: implement firebase login functionality **

#### After submitting a PR:

- Assign at least one reviewer
- Wait for approval
- Fix any comments given by the reviewer
- Once approved → PR gets merged into develop

#### Contributing

For detailed instructions on contributing, see [CONTRIBUTING.md](CONTRIBUTING.md).
