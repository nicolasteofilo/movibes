import MoviesMapper from "./index";

describe("MoviesMapper", () => {
  it("should be return to return correct data in toDomain()", () => {
    const mappedMovie = MoviesMapper.toDomain({
      adult: false,
      backdrop_path: "/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
      id: 550,
      original_language: "en",
      original_title: "Fight Club",
      overview:
        'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
      popularity: 75.516,
      poster_path: "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
      release_date: "1999-10-15",
      title: "Fight Club",
      video: false,
      vote_average: 8.432,
      vote_count: 25573,
      genre_ids: [],
    });

    expect(mappedMovie).toEqual({
      id: String(550),
      name: "Fight Club",
      coverUrl:
        "https://image.tmdb.org/t/p/w220_and_h330_face//pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
      rate: 8.432,
    });
  });
});
