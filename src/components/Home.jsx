import React, { Fragment, useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

function Home() {
    return (
        <div>
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/cargaralumnos">
            <button>Cargar Alumnos</button>
          </Link>
          <Link to="/cursos">
            <button>Cursos</button>
          </Link>
          <Link to="/formatos">
            <button>Crear Formato</button>
          </Link>
          <Link to="/formalumnos">
            <button>Llenar formulario alumno</button>
          </Link>
          <Link to="/iniciar-sesion">
            <button>Iniciar Sesion</button>
          </Link>
          <Link to="/manageprofiles">
            <button>Manage Profiles</button>
          </Link>
          <Link to="/usersmanage">
            <button>Users Manage</button>
          </Link>
        </div>
    );
}

export { Home };