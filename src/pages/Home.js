import React from 'react';
import { LogoLink } from '../components/logo/LogoLink';
import { Content } from '../components/content/Content';
import { Hidden, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DisplacementSphere from '../components/background/DisplacementSphere';
import { ThemeToggle } from '../components/theme/ThemeToggle';
import { SocialIcons } from '../components/content/SocialIcons';
import { SpeedDials } from '../components/speedDial/SpeedDial';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  arrowButton: {
    marginTop: '2rem',
    color: 'white',
    backgroundColor: 'black',
    fontSize: '2rem',
    padding: '10px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    animation: '$blink 1s infinite', // Aplicar la animación de parpadeo
    '&:hover': {
      backgroundColor: 'white',
      color: 'black',
    },
  },
  '@keyframes blink': {
    '0%, 100%': {
      opacity: 1,
    },
    '50%': {
      opacity: 0,
    },
  },
}));

export const Home = () => {
  const classes = useStyles();
  const navigate = useNavigate(); // Inicializar useNavigate

  // Función para redirigir a /projects
  const handleRedirect = () => {
    navigate('/projects');
  };

  return (
    <>
      <div className={classes.root}>
        <DisplacementSphere />
        <LogoLink />
        <Content />
        <ThemeToggle />
        <Hidden smDown>
          <SocialIcons />
        </Hidden>
        <Hidden mdUp>
          <SpeedDials />
        </Hidden>
        <Button className={classes.arrowButton} onClick={handleRedirect}> {/* Añadir onClick */}
          <ArrowDownwardIcon />
        </Button>
      </div>
    </>
  );
};
