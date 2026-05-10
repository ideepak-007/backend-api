import { prisma } from '../config/db.js';

const addToWatchList = async (req, res) => {
  const { movieId, status, rating, notes } = req.body;

  //verify if movie exists
  const isMovieExits = await prisma.movie.findUnique({
    where: { id: movieId },
  });

  if (!isMovieExits) {
    return res.status(404).json({ error: 'Movie not found.' });
  }

  //check if already added in watchlist
  const existsInWatchList = await prisma.watchlistItem.findUnique({
    where: {
      userId_movieId: {
        userId: req.user.id,
        movieId: movieId,
      },
    },
  });

  if (existsInWatchList) {
    return res.status(400).json({ error: 'Movie already in the watch list.' });
  }

  const watchListItem = await prisma.watchlistItem.create({
    data: {
      userId: req.user.id,
      movieId,
      status: status || 'PLANNED',
      rating,
      notes,
    },
  });

  res.status(201).json({
    status: 'Success',
    data: {
      watchListItem,
    },
  });
};

export { addToWatchList };
