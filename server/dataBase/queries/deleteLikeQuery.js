const connection = require('../config/connection');

const deleteLike = (votesData) => {
  connection.query(
    'DELETE FROM votes WHERE post_id=$1 AND user_id=$1',
    [votesData.postId, votesData.userId, votesData.likes],
  );
};

module.exports = deleteLike;
