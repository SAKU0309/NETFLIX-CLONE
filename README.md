# Netflix Clone

A high-performance **Netflix Clone** built using **React + Vite**, featuring a modern UI, authentication, and movie streaming functionality.

## 🚀 Features

- **User Authentication** (Sign up, Login, Logout)
- **Browse Movies & TV Shows** (Trending, Popular, Top-Rated)
- **Responsive UI** (Mobile & Desktop Friendly)
- **Smooth Video Playback**
- **Optimized Performance with Vite**

## 🛠 Tech Stack

- **Frontend:** React, Vite, Tailwind CSS
- **State Management:** Redux Toolkit / Context API
- **API:** TMDB API for fetching movies & TV shows
- **Authentication:** Firebase / Auth0
- **Deployment:** Vercel / Netlify / Firebase Hosting

## 📌 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SAKKU0309/netflix-clone.git
   cd netflix-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Create a `.env` file in the root directory.
   - Add your API keys:
   ```env
   VITE_TMDB_API_KEY=your_tmdb_api_key
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🎬 API Integration (TMDB)

- Sign up on [TMDB](https://www.themoviedb.org/) and get an API key.
- Use the API key to fetch movies & TV shows.
- Example API request:
  ```js
  fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
    .then(response => response.json())
    .then(data => console.log(data));
  ```

## 📦 Folder Structure
```
netflix-clone/
├── src/
│   ├── components/    # Reusable UI components
│   ├── pages/         # Pages like Home, Login, Movie Details
│   ├── App.jsx        # Main App component
│   ├── main.jsx       # Entry point
├── public/            # Static assets
├── .env               # Environment variables
├── package.json       # Dependencies & scripts
└── README.md          # Project documentation
```

## 📸 Screenshots

### Home Page
![Screenshot 2025-03-02 231308](https://github.com/user-attachments/assets/2152ba3e-4c79-478e-bfbc-1ae6b4f72a9b)

### Login Page
![Screenshot 2025-03-02 231326](https://github.com/user-attachments/assets/d1422f9c-8bd6-416d-a1f3-5964dd74e596)


### Movie Details Page
![Screenshot 2025-03-02 231350](https://github.com/user-attachments/assets/cd5aea89-792f-4cfb-85e2-28ad393e4a82)
![Screenshot 2025-03-02 231413](https://github.com/user-attachments/assets/9e45262e-7792-41e1-8d6d-2acc869de092)
![Screenshot 2025-03-02 231428](https://github.com/user-attachments/assets/43cfcc2d-0e0c-4419-8523-a6d7746039fc)


## 👨‍💻 Contributing

1. Fork the project
2. Create a new branch (`git checkout -b feature-name`)
3. Commit changes (`git commit -m 'Added a new feature'`)
4. Push to your branch (`git push origin feature-name`)
5. Open a pull request


## 🌟 Show Your Support
If you like this project, give it a ⭐ on GitHub!

---
**Author:** SAKSHI  
**GitHub:** [@SAKU0309](https://github.com/SAKU0309)

