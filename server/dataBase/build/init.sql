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
    id SERIAL PRIMARY KEY,
    post_id INTEGER REFERENCES posts(id),
    user_id INTEGER REFERENCES users(id),
    likes INTEGER 
);

INSERT INTO users (email, username, password) VALUES 
('nizar7zakout@gmail.com', 'sabaa', '1qa@WS3ed'),
('nizar7zakout@gmail.com', 'lana', '1qa@WS3ed'),
('mahmoud.j.jouda@gmail.com', 'reem', '$2a$10$Leus99JVnNStliZGY1h2juEUMDEOEMbAqJNTSkFXCsYUNkzyhBB76');

INSERT INTO posts (user_id, title, content, url) VALUES 
(1, 'My mother', 'my phone.','https://www.wepal.net/ar/uploads/2732018-073911PM-1.jpg'),
(1, 'My mother', 'my phone.','https://www.wepal.net/ar/uploads/2732018-073911PM-1.jpg'),
(3, 'My mother', 'my phone.','https://www.wepal.net/ar/uploads/2732018-073911PM-1.jpg'),
(3, 'My mother', 'my phone.','https://www.wepal.net/ar/uploads/2732018-073911PM-1.jpg'),
(2, 'My dsad', 'my fefw.','https://www.wepal.net/ar/uploads/2732018-073911PM-1.jpg');


INSERT INTO comments (post_id, user_id, content) VALUES 
(1,2,'WAAAW!'),
(2,1,' nice!'),
(1,1,'WAAAW so !'),
(1,1,'so nice!');

INSERT INTO votes (post_id, user_id, likes) VALUES 
(2,2,1),
(1,1,1),
(2,1,1);



COMMIT;