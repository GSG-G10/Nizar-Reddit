BEGIN;
DROP TABLE IF EXISTS users, posts, comments, votes CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(50) NOT NULL,
    username VARCHAR(50) NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    url TEXT NOT NULL
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    post_id INTEGER REFERENCES posts(id),
    user_id INTEGER REFERENCES users(id),
    content TEXT NOT NULL
);

CREATE TABLE votes (
    post_id INTEGER REFERENCES posts(id),
    user_id INTEGER REFERENCES users(id),
    is_up BOOLEAN DEFAULT false,
    is_down BOOLEAN DEFAULT 0
);

INSERT INTO users (email, username, password) VALUES 
('nizar7zakout@gmail.com', 'nizar7zakout', '1qa@WS3ed'),
('haniy32@gmail.com', 'fadihany', '2ws#ED$rf');

INSERT INTO posts (user_id, title, content, url) VALUES 
(1, 'My mother and Omar Khairat"s fingers', 
"My mother and fingers My mother calls every five breaths to check on me during my travels.
Whenever I wander off, Omar Khairat's fingers bring me back as she plays the song 'Mish Arif Leh'
at El Sawy Culturewheel, as it is the ringtone of my phone.",
"https://images.pexels.com/photos/556666/pexels-photo-556666.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"),
(2, "above power",
"The forest foxes will not go hungry as long as their crows are stupid.",
"https://cdn.sotor.com/thumbs/fit630x300/52413/1599990081/%D8%A3%D9%86%D9%88%D8%A7%D8%B9_%D8%A7%D9%84%D8%AB%D8%B9%D8%A7%D9%84%D8%A8.jpg"
);

INSERT INTO comments (post_id, user_id, content) VALUES 
(1,2," WAAAW!"),
(2,1," WAAAW so nice!");

INSERT INTO votes (post_id, user_id, is_up, is_down) VALUES 
(2,2,1,0),
(1,2,0,1),
(2,1,0,1),
(2,1,1,0);

COMMIT;