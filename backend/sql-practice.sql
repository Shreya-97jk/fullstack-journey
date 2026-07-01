-- Week 3 Day 1 — SQL practice

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  done BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO tasks (title) VALUES ('learn sql');

SELECT * FROM tasks;

SELECT * FROM tasks WHERE done = false;

UPDATE tasks SET done = true WHERE id = 1;

DELETE FROM tasks WHERE id = 1;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

ALTER TABLE tasks ADD COLUMN user_id INTEGER REFERENCES users(id);

INSERT INTO users (name) VALUES ('Shreya');

SELECT tasks.title, users.name
FROM tasks
JOIN users ON tasks.user_id = users.id;
