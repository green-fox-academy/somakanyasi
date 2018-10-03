CREATE TABLE questions (
  id int(11) NOT NULL,
  question varchar(255) NOT NULL
);


INSERT INTO questions (id, question) VALUES
(1, 'When did the Titanic sink?'),
(2, 'Who played Neo in The Matrix?'),
(3, 'Who is from the House Targaryen, First of Her Name, the Unburnt, Queen of the Andals and the First Men, Khaleesi of the Great Grass Sea, Breaker of Chains, and Mother of Dragon?'),
(4, 'Hitler party which came into power in 1933 is known as'),
(5, 'Logarithm tables were invented by'),
(6, 'The 2006 World Cup Football Tournament held in'),
(7, 'In which year of First World War Germany declared war on Russia and France?'),
(8, 'The number of already named bones in the human skeleton is'),
(9, 'Velocity of wind is measured by'),
(10, 'What is the best programming language?');

ALTER TABLE questions
  ADD PRIMARY KEY (id);

ALTER TABLE questions
  MODIFY id int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;


CREATE TABLE answers (
  id int(11) NOT NULL,
  question_id int(11) NOT NULL,
  answer varchar(255) NOT NULL,
  is_correct tinyint(1) NOT NULL
);

INSERT INTO answers (id, question_id, answer, is_correct) VALUES
(1, 1, '1912', 1),
(2, 1, '1914', 0),
(3, 1, '1919', 0),
(4, 1, '1899', 0),
(5, 2, 'Steven Spielberg', 0),
(6, 2, 'Jake Gyllenhaal', 0),
(7, 2, 'Keanu Reeves', 1),
(8, 2, 'Michael Fassbender', 0),
(9, 3, 'Rhaella Targaryen', 0),
(10, 3, 'Daenerys Targaryen', 1),
(11, 3, 'Elia Targaryen', 0),
(12, 3, 'Rhaenys Targaryen', 0),
(13, 4, 'Labour Party', 0),
(14, 4, 'Nazi Party', 1),
(15, 4, 'Ku-Klux-Klan', 0),
(16, 4, 'Democratic Party', 0),
(17, 5, 'John Napier', 1),
(18, 5, 'John Doe', 0),
(19, 5, 'John Harrison', 0),
(20, 5, 'John Douglas', 0),
(21, 6, 'France', 0),
(22, 6, 'China', 0),
(23, 6, 'Brazil', 0),
(24, 6, 'Germany', 1),
(25, 7, '1914', 1),
(26, 7, '1915', 0),
(27, 7, '1916', 0),
(28, 7, '1917', 0),
(29, 8, '290', 0),
(30, 8, '210', 0),
(31, 8, '308', 0),
(32, 8, '206', 1),
(33, 9, 'speedometer', 0),
(34, 9, 'tachometer', 0),
(35, 9, 'anemometer', 1),
(36, 9, 'audiometer', 0),
(37, 10, 'C# of course.', 0),
(38, 10, 'Java is the king.', 0),
(39, 10, 'Assembly, just Why not?', 0),
(40, 10, 'Obviously Javascript.', 1);

ALTER TABLE answers
  ADD PRIMARY KEY (id);

ALTER TABLE answers
  MODIFY id int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;