# Backend API

A robust Node.js backend API built with **Express**, **Prisma ORM**, **JWT authentication**, and **Zod validation**.

## 🚀 Tech Stack

- **Runtime**: Node.js (v20+)
- **Framework**: Express.js 5.x
- **Database ORM**: Prisma 6.x
- **Database**: PostgreSQL
- **Authentication**: JWT (jsonwebtoken)
- **Password Hashing**: bcryptjs
- **Validation**: Zod
- **Development**: Nodemon
- **Environment**: dotenv

---

## 📋 Prerequisites

Before you begin, ensure you have installed:

- **Node.js** (v20 or higher)
- **npm** or **yarn** or **pnpm**
- **PostgreSQL** (local or cloud instance)

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone <repository-url>
cd backend-api
```

### 2. Install dependencies

```bash
npm install
# or
pnpm install
```

### 3. Setup environment variables

Create a `.env` file in the root directory:

```bash
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/backend_api"

# JWT
JWT_SECRET="your-secret-key-here"
JWT_EXPIRE="7d"

# Server
PORT=5001
NODE_ENV="development"
```

### 4. Setup database

```bash
# Create database tables
npx prisma migrate dev --name init

# Generate Prisma client
npx prisma generate
```

### 5. Seed database (optional)

```bash
npm run seed:movies
```

---

## 📂 Project Structure

```
backend-api/
├── src/
│   ├── config/
│   │   └── db.js              # Database connection
│   ├── controllers/           # Request handlers
│   ├── middleware/            # Express middlewares (auth, error, validation)
│   ├── routes/                # API endpoints
│   ├── validators/            # Zod validation schemas
│   ├── utils/                 # Helper functions
│   └── server.js              # Main server file
├── prisma/
│   ├── schema.prisma          # Database schema
│   └── seed.js                # Database seeding script
├── .env                       # Environment variables (create locally)
├── .env.example               # Example environment variables
├── .gitignore
├── package.json
└── README.md
```

---

## 🔧 Available Scripts

### Development

```bash
npm run dev
```

Starts the development server with auto-reload (nodemon).

### Seed Database

```bash
npm run seed:movies
```

Populates the database with sample movie data.

### Prisma Commands

```bash
# Create a migration
npx prisma migrate dev --name migration_name

# Generate Prisma client
npx prisma generate

# Reset database (⚠️ deletes all data)
npx prisma migrate reset
```

---

## 🔐 Authentication

This API uses **JWT (JSON Web Tokens)** for authentication.

## ✅ Validation

This API uses **Zod** for runtime schema validation.

## 🔄 Development Workflow

### 1. Start Development Server

```bash
npm run dev
```

Server runs on `http://localhost:5001`

### 2. Make Changes

- Edit files in `src/`
- Nodemon auto-restarts on save

### 3. Update Database Schema

```bash
# Edit prisma/schema.prisma
npx prisma migrate dev --name your_migration_name
```

### 4. Test with API Client

- Use **Requestly**, **Postman**, or **VS Code Rest Client**
- Set Authorization header with JWT token for protected routes

### 5. View Database

```bash
npx prisma studio
```

Opens visual database browser at `http://localhost:5555`

---

## 🐛 Common Issues

### Issue: `DATABASE_URL` not found

**Solution**: Create `.env` file with valid `DATABASE_URL`

### Issue: Prisma migration fails

**Solution**:

```bash
npx prisma migrate reset  # Reset database
npm run seed:movies       # Reseed data
```

### Issue: JWT token invalid

**Solution**:

- Check `JWT_SECRET` in `.env`
- Verify token format: `Bearer <token>`
- Check token expiration with `JWT_EXPIRE`

### Issue: Port already in use

**Solution**:

```bash
# Change PORT in .env
PORT=5001
npm run dev
```

---

## 📝 Environment Variables

| Variable       | Description                  | Example                     |
| -------------- | ---------------------------- | --------------------------- |
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://...`          |
| `JWT_SECRET`   | Secret key for JWT signing   | `my-secret-key`             |
| `JWT_EXPIRE`   | Token expiration time        | `7d`, `24h`                 |
| `PORT`         | Server port                  | `5000`                      |
| `NODE_ENV`     | Environment mode             | `development`, `production` |

---

## 🔒 Security Best Practices

✅ **Implemented**:

- JWT token-based authentication
- Password hashing with bcryptjs
- Environment variable protection
- Zod input validation

🛡️ **Recommended**:

- Use HTTPS in production
- Set strong JWT_SECRET (32+ characters)
- Implement rate limiting
- Add CORS configuration
- Validate all user inputs
- Use PostgreSQL with SSL

---

## 📚 Useful Resources

- [Express.js Docs](https://expressjs.com/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [JWT Introduction](https://jwt.io/introduction)
- [Zod Validation](https://zod.dev/)
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js)

---

## 👨‍💻 Author

Deepak

---

**Last Updated**: 2026
**Node Version**: 18+
**Status**: Active Development ✅
