
## Instalación

Descargar dependencias
```
npm install
```

subir nivel de la carpeta al directorio card-component
```
cd card-component
```

Iniciar Servidor
```
npm start
```

## Observaciones:

El componente Se encuentra en la carpeta src dentro de la carpeta components, se llama Card.jsx.
El contenido del mismo se puede cambiar desde App.js modificando el state contenido como se ve a continuación.

```
const [contenido, setcontenido] = useState({
    title: 'Titulo',
    body: 'Cuerpo de la tarjeta'
});
```

O sino tambien puede modificarse desde el front mediante dos input que cambian dinamicamente el state entrando a la siguiente direccion una vez iniciado el servidor 
```
http://localhost:3000
```
