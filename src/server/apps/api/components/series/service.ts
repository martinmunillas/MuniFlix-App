import seriesModel from "./schemas/seriesSchema";
import seasonModel from "./schemas/seasonSchema";
import episodeModel from "./schemas/episodeSchema";

const getSeries = async () => {
  const emptySeries = await seriesModel.find();
  const emptySeasons = await seasonModel.find();
  const episodes = await episodeModel.find();
  const fullSeasons = emptySeasons.map((season: any) => ({
    ...season._doc,
    episodes: episodes.filter((episode: any) => episode.season == season.id),
  }));

  const fullSeries = emptySeries.map((serie: any) => ({
    ...serie._doc,
    seasons: fullSeasons.filter((season: any) => season.serie == serie.id),
  }));

  return fullSeries;
};

// SERIES
const postSeries = async (series: any) => {
  return await new seriesModel(series).save();
};

const updateSeries = async (id: string, series: any) => {
  return await seriesModel.updateOne({ _id: id }, series);
};

const deleteSeries = async (id: string) => {
  const deletedSeries = await seriesModel.deleteOne({ _id: id });
  await deleteSeasonsBySeries(id);
  return deletedSeries;
};

// SEASONS
const postSeason = async (season: any) => {
  return await new seasonModel(season).save();
};

const updateSeason = async (id: string, season: any) => {
  return await seasonModel.updateOne({ _id: id }, season);
};

const deleteSeason = async (id: string) => {
  const deletedSeason = await seasonModel.deleteOne({ _id: id });
  deleteEpisodesBySeason(id);
  return deletedSeason;
};

const deleteSeasonsBySeries = async (serieId: string) => {
  const seasons = await seasonModel.find({ serie: serieId });
  seasons.forEach((season: any) => deleteEpisodesBySeason(season._id));
  await seasonModel.deleteMany({ serie: serieId });
};

// EPISODES
const postEpisode = async (episode: any) => {
  return await new episodeModel(episode).save();
};

const updateEpisode = async (id: string, episode: any) => {
  return await episodeModel.updateOne({ _id: id }, episode);
};

const deleteEpisode = async (id: string) => {
  return await episodeModel.deleteOne({ _id: id });
};

const deleteEpisodesBySeason = async (seasonId: string) => {
  return await episodeModel.deleteMany({ season: seasonId });
};

export default {
  getSeries,
  postSeries,
  updateSeries,
  deleteSeries,

  postSeason,
  updateSeason,
  deleteSeason,

  postEpisode,
  updateEpisode,
  deleteEpisode,
};
