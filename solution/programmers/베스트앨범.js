// https://programmers.co.kr/learn/courses/30/lessons/42579#

function solution(genres, plays) {
  // {[genre:string]:{
  //   played: number,
  //   songs:  song{index:number, played:number}[] }
  const genreData = {};

  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    const play = plays[i];

    if (!(genre in genreData)) {
      genreData[genre] = { played: 0, songs: [] };
    }
    genreData[genre].played += play;

    genreData[genre].songs.push({ index: i, played: play });
  }

  Object.values(genreData).forEach((genre) => {
    genre.songs.sort((a, b) => b.played - a.played);
    genre.songs.sort((a, b) => {
      if (a.played === b.played) {
        return a + b;
      }
      return 0;
    });
  });
  const sortByPlayed = Object.values(genreData).sort(
    (a, b) => b.played - a.played
  );

  const answer = [];

  sortByPlayed.forEach((genre) => {
    genre.songs.some((item, i) => {
      if (i > 1) return true;
      answer.push(item.index);
    });
  });
  return answer;
}
