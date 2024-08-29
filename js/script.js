const epicMix = [
  "Time to Pretend",
  "O-o-oh Child",
  "Wish You Were Here",
  "Heroes",
  "I Put a Spell on You",
  "Call Me",
  "Paper Planes",
  "Jolene",
  "You Don't Own Me",
  "Fast Car",
  "Run the World (Girls)",
  "Superstition"
];

const mixList = document.querySelector(".mix");
const button = document.querySelector(".show-list");
const sortButton = document.querySelector(".sort-list");
const searchBar = document.querySelector(".search-bar");
const toggleButton = document.querySelector(".toggle-theme");  // New theme toggle button
const total = document.querySelector(".total");

button.addEventListener("click", function () {
  mixInfo(epicMix);
  mixList.classList.remove("hide");
  button.classList.add("hide");
  sortButton.classList.remove("hide");
});

sortButton.addEventListener("click", function () {
  const sortedMix = [...epicMix].sort();
  mixList.innerHTML = "";
  mixInfo(sortedMix);
});

searchBar.addEventListener("keyup", function (e) {
  const searchString = e.target.value.toLowerCase();
  const filteredSongs = epicMix.filter(song =>
      song.toLowerCase().includes(searchString)
  );
  mixList.innerHTML = "";
  mixInfo(filteredSongs);
});

toggleButton.addEventListener("click", function () {
  document.body.classList.toggle("light-mode");
});

total.innerText = `${epicMix.length} great songs!`;

const mixInfo = function (mix) {
  mix.forEach(function(song, index) {
    let li = document.createElement("li");
    li.classList.add("song");
    li.innerHTML = `<span class="song-number">#${index + 1}</span> ${song}`;
    mixList.append(li);
  });
};
