-- =========================================
-- BASE DE DATOS: TIENDA DE BICICLETAS
-- =========================================

-- Eliminar la tabla si ya existe (para evitar errores al ejecutar varias veces)
DROP TABLE IF EXISTS bicicletas;

-- =========================================
-- CREAR TABLA
-- =========================================
CREATE TABLE bicicletas (
    id INTEGER PRIMARY KEY,
    modelo TEXT NOT NULL,
    tipo TEXT NOT NULL,
    marca TEXT NOT NULL,
    precio REAL NOT NULL,
    stock INTEGER NOT NULL
);

-- =========================================
-- INSERTAR DATOS
-- =========================================
INSERT INTO bicicletas (id, modelo, tipo, marca, precio, stock) VALUES
(1, 'Trail X1', 'Montaña', 'Trek', 850.00, 5),
(2, 'Speed Pro', 'Ruta', 'Giant', 1200.00, 3),
(3, 'Urban Go', 'Urbana', 'Specialized', 650.00, 7),
(4, 'Rock Rider', 'Montaña', 'Decathlon', 500.00, 10),
(5, 'Aero 300', 'Ruta', 'Cannondale', 1800.00, 2),
(6, 'City Life', 'Urbana', 'Bianchi', 720.00, 4),
(7, 'Explorer', 'Montaña', 'Scott', 950.00, 6),
(8, 'Flash Road', 'Ruta', 'Merida', 1100.00, 5),
(9, 'Eco Ride', 'Urbana', 'Giant', 600.00, 8),
(10, 'Alpine Pro', 'Montaña', 'Orbea', 1400.00, 3),
(11, 'Race X', 'Ruta', 'Trek', 2100.00, 1),
(12, 'Street Plus', 'Urbana', 'Specialized', 780.00, 6),
(13, 'Mountain King', 'Montaña', 'Cube', 990.00, 4),
(14, 'Road Star', 'Ruta', 'Bianchi', 1600.00, 2),
(15, 'Urban Mini', 'Urbana', 'Decathlon', 450.00, 12);

-- =========================================
-- CONSULTAS
-- =========================================

-- 1. Bicicletas ordenadas por precio (de menor a mayor)
SELECT modelo, marca, precio
FROM bicicletas
ORDER BY precio ASC;

-- 2. Precio promedio de las bicicletas
SELECT AVG(precio) AS precio_promedio
FROM bicicletas;

-- 3. Cantidad total de bicicletas en stock
SELECT SUM(stock) AS total_en_stock
FROM bicicletas;

-- 4. Número total de modelos disponibles
SELECT COUNT(*) AS total_modelos
FROM bicicletas;