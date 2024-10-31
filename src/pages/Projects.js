import React, { useState } from 'react';
import { makeStyles, Card, CardContent, CardMedia, Typography, Grid, Collapse, Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#121212',
    color: 'white',
  },
  projectGrid: {
    padding: '2rem 0',
  },
  card: {
    maxWidth: 345,
    backgroundColor: '#1E1E1E',
    color: 'white',
    transition: 'transform 0.3s, background-color 0.3s, color 0.3s',
    '&:hover': {
      transform: 'scale(1.05)',
      backgroundColor: '#FFFFFF',
      color: '#000000',
    },
    cursor: 'pointer',
  },
  media: {
    height: 140,
  },
  additionalInfo: {
    position: 'fixed', // Posición fija
    top: '50%', // Centro vertical
    left: '50%', // Centro horizontal
    transform: 'translate(-50%, -50%)', // Centrar el cuadro
    padding: '1rem',
    backgroundColor: '#333333',
    color: 'white',
    zIndex: 1000, // Asegura que el cuadro esté encima del contenido
    maxWidth: '80%', // Ajuste el ancho máximo
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)', // Sombra para mejor visualización
    display: 'none', // Por defecto oculto
  },
  additionalInfoVisible: {
    display: 'block', // Mostrar cuando sea visible
  },
  button: {
    marginTop: '2rem',
    color: 'black', // Cambiado a negro
    backgroundColor: 'white', // Cambiado a blanco
    '&:hover': {
      backgroundColor: 'black', // Cambiado a negro al pasar el mouse
      color: 'white', // Cambiado a blanco al pasar el mouse
    },
  },
}));

const projects = [
  {
    title: 'Proyecto del videojuego Monkey Fight',
    description: 'Videojuego desarrollado en Roblox donde 2 equipos luchan por ser el bando dominante.',
    image: 'https://via.placeholder.com/150',
    details: 'El proyecto desarrollado en este videojuego en realidad virtual (VR) tiene como objetivo principal que los usuarios, representados como monos, jueguen en equipo o de forma individual, peleando entre ellos con diferentes armas. En este documento se detallarán las dos versiones del juego presentadas, con sus respectivos comentarios de los usuarios y las mejoras implementadas por los desarrolladores. \nMonkeyFight es un juego multijugador de pelea, donde los personajes compiten entre sí hasta matar al otro. Deben recoger plátanos para mejorar armas y habilidades. también corazones si quieren seguir vivos ;) y recuperar vida.',
  },
  {
    title: 'Proyecto de ejercicios Monkans',
    description: 'Proyecto de ejercicios exergames desarrollado en web para fomentar la ejercitación',
    image: 'https://via.placeholder.com/150',
    details: 'El proyecto cuenta con detección en tiempo real del cuerpo humano para determinar las poses del usuario. En base a estas poses se crean diferentes acciones dentro del videojuego siempre y cuando el usuario continúe trotando. Por otro lado, los gráficos animados y botones incentivan al usuario de forma intuitiva a interactuar con la interfaz. Asimismo, se registra la puntuación del usuario en base a la cantidad de tiempo que logra sobrevivir, por lo que motiva a conseguir la mayor puntuación posible.',
  },
  {
    title: 'Proyecto de página web Landing Page',
    description: 'Página web desarrollada para presentar los proyectos desarrollados en el curso.',
    image: 'https://via.placeholder.com/150',
    details: 'El proyecto desarrollado en la página web tiene el objetivo de presentar información general sobre los proyectos desarrollados en el curso y aplicar conocimientos de principios de Gestalt y de usabilidad.',
  },
];

export const Projects = () => {
  const classes = useStyles();
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (index) => {
    setSelectedProject(selectedProject === index ? null : index);
  };

  const handleRedirect = () => {
    navigate('/');
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={4} justifyContent="center" className={classes.projectGrid}>
        {projects.map((project, index) => (
          <Grid item key={index}>
            <Card 
              className={classes.card} 
              onClick={() => handleCardClick(index)}
            >
              <CardMedia
                className={classes.media}
                image={project.image}
                title={project.title}
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  {project.title}
                </Typography>
                <Typography variant="body2" component="p">
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
            <Collapse in={selectedProject === index}>
              <div className={`${classes.additionalInfo} ${selectedProject === index ? classes.additionalInfoVisible : ''}`}>
                <Typography variant="body2">
                  {project.details}
                </Typography>
              </div>
            </Collapse>
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" className={classes.button} onClick={handleRedirect}>
        Ir a Home
      </Button>
    </div>
  );
};
