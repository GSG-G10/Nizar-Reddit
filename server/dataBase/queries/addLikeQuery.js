const connection = require('../config/connection');

const addlike = (votesData) => {
  connection.query(
    'INSERT INTO votes (post_id, user_id, likes) VALUES ($1, $2, $3)',
    [votesData.postId, votesData.userId, votesData.likes],
  );
};

module.exports = addlike;
