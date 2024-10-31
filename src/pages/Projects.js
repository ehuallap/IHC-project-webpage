import React, { useState } from 'react';
import { makeStyles, Card, CardContent, CardMedia, Typography, Grid, Collapse, Button, IconButton } from '@material-ui/core';
import { Description } from '@material-ui/icons';
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
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '1rem',
    backgroundColor: '#333333',
    color: 'white',
    zIndex: 1000,
    maxWidth: '80%',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
    display: 'none',
  },
  additionalInfoVisible: {
    display: 'block',
  },
  button: {
    marginTop: '2rem',
    color: 'black',
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: 'black',
      color: 'white',
    },
  },
  documentIcon: {
    color: 'white',
    '&:hover': {
      color: '#3f51b5',
    },
  },
}));

const projects = [
  {
    title: 'Proyecto del videojuego Monkey Fight',
    description: 'Videojuego desarrollado en Roblox donde 2 equipos luchan por ser el bando dominante.',
    image: 'https://via.placeholder.com/150',
    details: 'El proyecto desarrollado en este videojuego en realidad virtual (VR)...',
    document: ''
  },
  {
    title: 'Proyecto de ejercicios Monkans',
    description: 'Proyecto de ejercicios exergames desarrollado en web para fomentar la ejercitación',
    image: 'https://via.placeholder.com/150',
    details: 'El proyecto cuenta con detección en tiempo real del cuerpo humano...',
    document: 'https://docs.google.com/document/d/1DL4EEkEaOV8VwTzNXSSsmpto5XHzVmlO/edit?usp=sharing&ouid=113932572853461636361&rtpof=true&sd=true'
  },
  {
    title: 'Proyecto de página web Landing Page',
    description: 'Página web desarrollada para presentar los proyectos desarrollados en el curso.',
    image: 'https://via.placeholder.com/150',
    details: 'El proyecto desarrollado en la página web tiene el objetivo de presentar...',
    document: ''
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

  const handleDocumentClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={4} justifyContent="center" className={classes.projectGrid}>
        {projects.map((project, index) => (
          <Grid item key={index}>
            <Card className={classes.card} onClick={() => handleCardClick(index)}>
              <CardMedia className={classes.media} image={project.image} title={project.title} />
              <CardContent>
                <Typography variant="h5" component="h2">
                  {project.title}
                  {project.document && (
                    <IconButton
                      className={classes.documentIcon}
                      onClick={(e) => {
                        e.stopPropagation(); // Evitar que el click abra el Collapse
                        handleDocumentClick(project.document);
                      }}
                    >
                      <Description />
                    </IconButton>
                  )}
                </Typography>
                <Typography variant="body2" component="p">
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
            <Collapse in={selectedProject === index}>
              <div className={`${classes.additionalInfo} ${selectedProject === index ? classes.additionalInfoVisible : ''}`}>
                <Typography variant="body2">{project.details}</Typography>
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
