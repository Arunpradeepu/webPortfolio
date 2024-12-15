const fantasyMovies = [
    

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
    {
      title: "Celebrare",
      year: "Photo Uploader Website",
      genre: " HTML | CSS | JavaScript ",
      poster: "./assets/celebrare.png",
      git: "https://github.com/Arunpradeepu/celebrare2",
      liveDemo: "https://arunpradeepu.github.io/celebrare2/upload.html"
    },
    {
      title: "Deep Thought",
      year: "An Assingnment from DT",
      genre: " HTML | CSS | JavaScript ",
      poster: "./assets/deepthought.png",
      git: "https://github.com/Arunpradeepu/DeepThought",
      liveDemo: "https://arunpradeepu.github.io/DeepThought/"
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