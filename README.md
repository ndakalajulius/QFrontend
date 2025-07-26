# AI Q&A Frontend (Next.js + Tailwind CSS)

Frontend built using Next.js + TailwindCSS to interact with a FastAPI backend and OpenAI API.

## 🚀 Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/ndakalajulius/ai-qa-frontend.git
cd ai-qa-frontend
2. Install dependencies
bash
Copy
Edit
npm install
3. Setup environment variables
bash
Copy
Edit
cp .env.local.example .env.local
4. Start development server
bash
Copy
Edit
npm run dev
🔧 Configuration
Ensure the base URL matches your backend:

env
Copy
Edit
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
yaml
Copy
Edit

---

### ✅ **3. Prompt Documentation (Add to both repos or one shared one)**

**📄 `prompt_log.md`**
```markdown
# Prompt Documentation

### Prompt 1
**User**: What is artificial intelligence?  
**Response**: Artificial Intelligence (AI) refers to the simulation of human intelligence in machines...

---

### Prompt 2
**User**: Explain machine learning like I’m 10.  
**Response**: Machine learning is like teaching a computer to learn from examples...






