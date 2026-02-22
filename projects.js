const fantasyMovies = [
    

  {
      title: "RAG - GPT",
      year: "AI Data Analyst",
      genre: "OPENAI API | FAST API | REACT | PYTHON",
      poster: "./assets/aiDataAnalyst.png",
      git: "https://github.com/Arunpradeepu/askToYt-v2",
      liveDemo: ""
    },
  {
      title: "VEHICLE TRACKING",
      year: "AI-based vehicle monitoring system",
      genre: "YOLOv8 | DeepSORT | NumPy | Excel Automation ",
      poster: "./assets/vehicleTracking.png",
      git: "https://github.com/Arunpradeepu/trafficDetection",
      liveDemo: ""
    },
  {
      title: "Nutriquest",
      year: "A Nutrient Tracking Mobile Application",
      genre: "OpenFoodFacts API | Fultter ",
      poster: "./assets/nutri.jpg",
      git: "https://github.com/Arunpradeepu/askToYt-v2",
      liveDemo: "https://github.com/Arunpradeepu/askToYt-v2"
    },
  {
      title: "CineSnap",
      year: "Movie Streaming Platform",
      genre: "OMDB API | CSS | JavaScript | HTML",
      poster: "./assets/project1.png",
      git: "https://github.com/Arunpradeepu/CineSnap/settings/pages",
      liveDemo: "https://arunpradeepu.github.io/CineSnap/"
    },
    {
      title: "VersaMart",
      year: "E-Commerce Website",
      genre: " MangoDB | HTML | CSS | JavaScript ",
      poster: "./assets/versamart2.png",
      git: "https://github.com/Arunpradeepu/VersaMart",
      liveDemo: "https://arunpradeepu.github.io/VersaMart/"
    },
    {
      title: "SkyFetch",
      year: "Weather Forecasting Platform",
      genre: " OpenWeather API | HTML | CSS | JavaScript ",
      poster: "./assets/sky.png",
      git: "https://github.com/Arunpradeepu/sky_Fetch",
      liveDemo: "https://arunpradeepu.github.io/sky_Fetch/"
    },
    {
      title: "Trackreps",
      year: "Task Managing Platform",
      genre: " OpenWeather API | HTML | CSS | JavaScript ",
      poster: "./assets/Trackreps.png",
      git: "https://github.com/Arunpradeepu/Track_Reps",
      liveDemo: "https://arunpradeepu.github.io/Track_Reps/index2.html"
    },
       

  ];
  
  function displayTopFantasyMovies(movies) {
    const movieSection = document.getElementById('top-fantasy-section');
    movieSection.innerHTML = ''; 
    movies.forEach(movie => {
      const movieElement = document.createElement('div');
      movieElement.className = 'project';

      movieElement.innerHTML = `
             <h2>${movie.title}</h2>
            <img class="post" src="${movie.poster}" alt="${movie.title} Poster" />
    
     
        <p class="year"> ${movie.year}</p>
        <p class="genre"> ${movie.genre}</p>
              <span class="reviews"><a  href="${movie.git}" target="_blank">Github</a></span>
              <span class="reviews"><a  href="${movie.liveDemo}" target="_blank">Live Demo</a></span>

      `;
      movieSection.appendChild(movieElement);
    });
  }
  
  displayTopFantasyMovies(fantasyMovies);