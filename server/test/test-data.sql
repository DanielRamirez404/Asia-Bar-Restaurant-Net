USE AsiaBarRestaurant;

INSERT INTO Users (Username, Type, Password) VALUES
('admin', 'admin', 'admin'),
('paulo', 'admin', 'paulo2'),
('anthony', 'admin', '4nTh0n1'),
('crodriguez', 'cook', 'CarlosR_123'),
('lopezj', 'cook', 'L0pezJ@lp'),
('ana_t', 'cook', 'AnaT3ch!'),
('sys_ro', 'cook', 'R0otTemp$'),
('mcontreras', 'cashier', 'Mcont2024#'),
('ventas1', 'cashier', 'Vta$2024'),
('sergio_a', 'cashier', 'SergioA_789');

INSERT INTO Clients (IdDocument, Name, Address, Phone) VALUES
('V-12345678', 'Carlos Mendoza', 'Barcelona', '+58 412-5551234'),
('J-987654321', 'TecnoSoluciones CA', 'Puerto La Cruz', '+58 424-9876543'),
('V-98765432', 'María Rodríguez', 'Lechería', '+58 416-7894561'),
('G-123456789', 'Distribuidora Lider C.A', 'Guanta', '+58 414-1237890'),
('V-20345678', 'José Pereira', 'Anaco', '+58 412-3698741'),
('J-298765432', 'Farmacia Salud Total', 'Cantaura', '+58 426-6549873'),
('V-18234567', 'Laura Sánchez', 'El Tigre', '+58 414-2589637'),
('E-876543210', 'Constructora Horizonte', 'San Tomé', '+58 412-7418529'),
('V-22456189', 'Roberto Díaz', 'Aragua de Barcelona', '+58 424-7531598'),
('J-301234567', 'Inversiones Delta CA', 'Pariaguán', '+58 416-9517532');

INSERT INTO MainDish (Name, Availability, Price, Category, Description) VALUES
('Pabellón Criollo', 1, 12.99, 'Plato Nacional', 'Carne mechada, caraotas negras, arroz y tajadas'),
('Pescado Frito al Limón', 1, 15.50, 'Pescados', 'Pargo rojo frito con salsa de limón y ajo'),
('Asado Negro', 1, 14.25, 'Carnes', 'Lomito de res guisado con papas y zanahorias'),
('Hervido de Gallina', 1, 11.75, 'Sopas', 'Caldo espeso con gallina, verduras y tubérculos'),
('Cachapa con Queso', 1, 8.99, 'Vegetariano', 'Cachapa de maíz con queso guayanés y mantequilla'),
('Carne en Vara', 1, 13.50, 'Parrillas', 'Brochetas de res con vegetales a la parrilla'),
('Pastel de Morrocoy', 0, 22.99, 'Especialidades', 'Tradicional de Oriente - Disponibilidad limitada'),
('Sancocho de Cangrejo', 1, 16.75, 'Mariscos', 'Cangrejos frescos de Guanta con aliños'),
('Hallaca Oriental', 1, 9.50, 'Tradicional', 'Variante anzoatiguense con pescado y ají dulce'),
('Parrilla Mixta', 1, 18.99, 'Parrillas', 'Res, pollo y chorizo con guarnición');

INSERT INTO SideDish (Name, Availability, Price, Category, Description) VALUES
('Tostones', 1, 3.50, 'Fritos', 'Plátanos verdes fritos y aplastados'),
('Arroz con Coco', 1, 4.25, 'Arroces', 'Arroz con leche de coco y ají dulce'),
('Yuca Frita', 1, 2.99, 'Tubérculos', 'Yuca fresca frita con salsa de ajo'),
('Ensalada de Aguacate', 1, 4.75, 'Ensaladas', 'Aguacate con cebolla y tomate fresco'),
('Arepitas Dulces', 1, 3.25, 'Panadería', 'Pequeñas arepas de maíz endulzado'),
('Papas Chorreadas', 1, 4.50, 'Guarniciones', 'Papas con salsa de cebolla y queso'),
('Caraotas Negras', 1, 3.75, 'Legumbres', 'Frijoles negros guisados'),
('Tajadas de Maduro', 1, 2.50, 'Fritos', 'Plátano maduro frito en láminas'),
('Arroz Blanco', 1, 2.25, 'Arroces', 'Arroz blanco tradicional'),
('Verduras Salteadas', 1, 3.99, 'Vegetales', 'Mezcla de vegetales frescos al wok');

INSERT INTO Product (Name, Availability, Price, Category, Description) VALUES
('Cerveza Polar', 1, 2.50, 'Bebidas', 'Cerveza lager venezolana'),
('Ron Santa Teresa', 1, 7.99, 'Licores', 'Ron añejo venezolano'),
('Jugo de Tamarindo', 1, 3.25, 'Jugos', 'Refrescante jugo natural'),
('Queso Telita', 1, 6.75, 'Lácteos', 'Queso fresco típico'),
('Flan de Coco', 1, 4.50, 'Postres', 'Postre tradicional oriental'),
('Café Guayanés', 1, 2.25, 'Bebidas Calientes', 'Café de la región oriental'),
('Salsa Picante', 1, 1.99, 'Condimentos', 'Salsa de ají margariteño'),
('Pan de Jamón', 1, 8.50, 'Panadería', 'Especialidad navideña'),
('Agua Mineral', 1, 1.50, 'Agua', 'Agua embotellada 500ml'),
('Tequila Líder', 1, 12.75, 'Licores', 'Tequila reposado mexicano');

INSERT INTO Deliverymen (Name, Area, Availability, Phone) VALUES
('Luis Martínez', 'Zona 1', 1, '+58 412-5551001'),
('Carlos Rojas', 'Zona 1', 1, '+58 414-1234567'),
('Pedro González', 'Zona 2', 1, '+58 416-7890123'),
('José Rodríguez', 'Zona 2', 0, '+58 424-5557890'),  -- No disponible
('Miguel Suárez', 'Zona 3', 1, '+58 426-3216549'),
('Juan Contreras', 'Zona 3', 1, '+58 412-9876543'),
('Ricardo Pérez', 'Zona 4', 1, '+58 414-5552468'),
('Francisco Díaz', 'Zona 4', 1, '+58 416-1357924'),
('Antonio Hernández', 'Zona 5', 1, '+58 424-8642097'),
('Roberto Sánchez', 'Zona 5', 1, '+58 426-5551357');

INSERT INTO Sales (ClientIdDocument, Type, Total) VALUES
('V-12345678', 'Delivery', 28.50),
('J-987654321', 'Pickup', 42.75),
('V-98765432', 'In-store', 35.20),
('G-123456789', 'Delivery', 67.30),
('V-20345678', 'Delivery', 19.99),
('J-298765432', 'Pickup', 55.45),
('V-18234567', 'Delivery', 38.75),
('E-876543210', 'Corporate', 120.50),
('V-22456189', 'In-store', 27.80),
('J-301234567', 'Delivery', 89.95);
