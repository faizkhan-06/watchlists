export const calculateRatings = (voteAvg) => {
  return Math.round((voteAvg / 10) * 100);
};
