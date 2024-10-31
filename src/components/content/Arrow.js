import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  arrow: {
    fontSize: '2rem', // Ajusta el tamaño según sea necesario
    color: 'white', // Color de la flecha
    animation: '$blink 1s infinite', // Animación de parpadeo
  },
  '@keyframes blink': {
    '0%': {
      opacity: 1,
    },
    '50%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Ocupa toda la altura de la pantalla
    position: 'fixed', // Mantiene la flecha en la misma posición
    top: 0,
    left: 0,
    right: 0,
  },
}));

const Arrow = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.arrow}>⬇️</div> {/* Puedes usar un icono o una imagen */}
    </div>
  );
};

export default Arrow;
