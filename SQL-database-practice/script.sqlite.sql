-- TABLE
CREATE TABLE Apostadores ( apostadores_id INTEGER PRIMARY KEY AUTOINCREMENT, name CHAR(50) NOT NULL, celular int(9),distrito varchar(50),correo varchar(50));
CREATE TABLE Apuestas ( apuestas_id INTEGER PRIMARY KEY AUTOINCREMENT,cantidad_apostada decimal(50) NOT NULL,marcador_apostado varchar(10),resultado boolean NULL,
                       apostadores_id INTEGER, partidos_id INTEGER REFERENCES Partidos(partidos_id), FOREIGN KEY(apostadores_id) REFERENCES Apostadores(apostadores_id));
CREATE TABLE Equipos(equipos_id INTEGER PRIMARY KEY AUTOINCREMENT, name_equipo VARCHAR(50), año_fundacion DATE NOT NULL);
CREATE TABLE Partidos(partidos_id INTEGER PRIMARY KEY AUTOINCREMENT,fecha DATE NOT NULL, estado BOOLEAN NOT NULL,marcador_definitivo varchar(10) NULL,ganador varchar(50) NULL, equipos_id1 INTEGER, equipos_id2 INTEGER REFERENCES Equipos(equipos_id), FOREIGN KEY(equipos_id1) REFERENCES Equipos(equipos_id));

-- INDEX
SELECT * FROM Apostadores;
INSERT INTO Apostadores (apostadores_id,name,celular,distrito,correo) VALUES (
  '1',
  'Javier Rey',
  '945823698',
  'San Juan de Lurigancho',
  'javierrey@gmail.com'
);
INSERT INTO Apostadores (apostadores_id,name,celular,distrito,correo) VALUES (
  '2',
  'Rosa Mendez',
  '936854795',
  'Miraflores',
  'rosamendez@gmail.com'
);
INSERT INTO Apostadores (apostadores_id,name,celular,distrito,correo) VALUES (
  '3',
  'Franco Flores',
  '935689412',
  'Barranco',
  'francoflores@gmail.com'
);

SELECT * FROM Equipos;
INSERT INTO Equipos (equipos_id,name_equipo,año_fundacion) VALUES (
  '1',
  'Barcelona',
  '1965'
);
INSERT INTO Equipos (equipos_id,name_equipo,año_fundacion) VALUES (
  '2',
  'Real Madrid',
  '1976'
);
INSERT INTO Equipos (equipos_id,name_equipo,año_fundacion) VALUES (
  '3',
  'Alianza Lima',
  '1890'
);
INSERT INTO Equipos (equipos_id,name_equipo,año_fundacion) VALUES (
  '4',
  'Universitario',
  '1992'
);

SELECT * FROM Partidos;
INSERT INTO Partidos (partidos_id,fecha,estado,marcador_definitivo,ganador,equipos_id1,equipos_id2) VALUES (
  '1',
  '20/02/2022',
  'TRUE',
  '3-2',
  'equipo1',
  '1',
  '2'
);
INSERT INTO Partidos (partidos_id,fecha,estado,marcador_definitivo,ganador,equipos_id1,equipos_id2) VALUES (
  '2',
  '21/02/2022',
  'TRUE',
  '0-2',
  'equipo2',
  '2',
  '3'
);
INSERT INTO Partidos (partidos_id,fecha,estado,marcador_definitivo,ganador,equipos_id1,equipos_id2) VALUES (
  '3',
  '21/02/2022',
  'TRUE',
  '1-0',
  'equipo1',
  '1',
  '3'
);
INSERT INTO Partidos (partidos_id,fecha,estado,marcador_definitivo,ganador,equipos_id1,equipos_id2) VALUES (
  '4',
  '22/02/2022',
  'TRUE',
  '2-4',
  'equipo2',
  '1',
  '4'
); 
INSERT INTO Partidos (partidos_id,fecha,estado,marcador_definitivo,ganador,equipos_id1,equipos_id2) VALUES (
  '5',
  '22/02/2022',
  'TRUE',
  '1-1',
  'empate',
  '2',
  '4'
);
INSERT INTO Partidos (partidos_id,fecha,estado,marcador_definitivo,ganador,equipos_id1,equipos_id2) VALUES (
  '6',
  '28/02/2022',
  'FALSE',
  '',
  '',
  '3',
  '4'
);

SELECT * FROM Apuestas;
INSERT INTO Apuestas (apuestas_id,cantidad_apostada,marcador_apostado,resultado,apostadores_id,partidos_id) VALUES (
  '1',
  '150.50',
  '3-2',
  'TRUE',
  '1',
  '1'
);
INSERT INTO Apuestas (apuestas_id,cantidad_apostada,marcador_apostado,resultado,apostadores_id,partidos_id) VALUES (
  '2',
  '50.90',
  '1-2',
  'FALSE',
  '2',
  '1'
); 
INSERT INTO Apuestas (apuestas_id,cantidad_apostada,marcador_apostado,resultado,apostadores_id,partidos_id) VALUES (
  '3',
  '100.00',
  '0-2',
  'TRUE',
  '3',
  '2'
);
INSERT INTO Apuestas (apuestas_id,cantidad_apostada,marcador_apostado,resultado,apostadores_id,partidos_id) VALUES (
  '4',
  '200.00',
  '0-2',
  'TRUE',
  '1',
  '2'
); 
INSERT INTO Apuestas (apuestas_id,cantidad_apostada,marcador_apostado,resultado,apostadores_id,partidos_id) VALUES (
  '5',
  '300.00',
  '1-3',
  'FALSE',
  '2',
  '3'
);
INSERT INTO Apuestas (apuestas_id,cantidad_apostada,marcador_apostado,resultado,apostadores_id,partidos_id) VALUES (
  '6',
  '150.60',
  '1-1',
  'FALSE',
  '3',
  '4'
);

-- RETO (descubrir cúal tiene mayor cantidad de apuestas acertadas)
SELECT name as WINNER, COUNT(partidos_id),resultado FROM Apostadores,Apuestas 
Where resultado="TRUE" and Apostadores.apostadores_id=Apuestas.apostadores_id
GROUP BY name
ORDER By COUNT(partidos_id) DESC
LIMIT 1
