# Practica del Curso de React - Ecomerce

Este proyecto es una práctica de resolucion de issues del curso de React, donde se ha desarrollado una aplicación de comercio electrónico (e-commerce) utilizando React y otras tecnologías relacionadas.

## Listado de Issues A Resolver

- #12 check [Maquetación de las vistas de usuario](https://github.com/platzi/curso-react-practico/issues/12) [Solución](https://github.com/l2radamanthys/curso-react-practico-ecomerce-platzi/tree/features/user-views)
- #13 [Navbar dinamico](https://github.com/platzi/curso-react-practico/issues/13) [Solución](https://github.com/l2radamanthys/curso-react-practico-ecomerce-platzi/tree/features/dinamic-navbar)
- #14 [Proteccion de Rutas](https://github.com/platzi/curso-react-practico/issues/14) [Solución](https://github.com/l2radamanthys/curso-react-practico-ecomerce-platzi/tree/features/limit-route-access)
- #15 [Responsive Design para Shopii (opcional)](https://github.com/platzi/curso-react-practico/issues/15)

## Fake API

Para simular una API RESTful, se ha utilizado **json-server** junto con un archivo `db.json` que contiene los datos de productos y usuarios. Esto permite realizar operaciones de lectura en los datos de manera sencilla sin requerir un endpoint.

La API falsa se ejecuta en el puerto `3000` y se puede iniciar con el siguiente comando:

```bash
npx json-server db.json
```

Exponiendo el listado de productos en `http://localhost:3000/products`
