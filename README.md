<h1 align="center">📚 Sistema de Gestión Escolar</h1>

<p align="center">
  <a href="#es">🇪🇸 Español</a> | <a href="#en">🇬🇧 English</a>
</p>

<hr>

<h2 id="es">🇪🇸 Español</h2>

<p>
Este proyecto es un <strong>sistema de gestión escolar</strong> desarrollado en <strong>Node.js</strong> con <strong>Express</strong>, enfocado en la administración de profesores, estudiantes, cursos y asistencias, así como en la interacción entre administradores, docentes y estudiantes.
</p>

<h3>🚀 Tecnologías Utilizadas</h3>
<ul>
  <li>Node.js + Express — Backend y manejo de rutas.</li>
  <li>JWT — Autenticación de usuarios.</li>
  <li>Controladores modulares — Separación lógica del código.</li>
  <li>Middlewares de validación de sesión — Seguridad de acceso.</li>
  <li>REST API — Comunicación estructurada entre cliente y servidor.</li>
</ul>

<h3>📌 Rutas y Funcionalidades</h3>

<h4>🔑 Autenticación</h4>
<table>
<tr><th>Método</th><th>Ruta</th><th>Controlador</th><th>Descripción</th></tr>
<tr><td>POST</td><td>/login</td><td>loginController</td><td>Inicia sesión y genera un token de autenticación.</td></tr>
<tr><td>POST</td><td>/register</td><td>registerController</td><td>Registra un nuevo usuario en el sistema.</td></tr>
</table>

<h4>🛠 Panel de Administración (<code>/admin</code>)</h4>
<p>Todas las rutas requieren sesión válida con <code>validateSession</code>.</p>
<table>
<tr><th>Método</th><th>Ruta</th><th>Controlador</th><th>Descripción</th></tr>
<tr><td>GET</td><td>/admin/index</td><td>adminInfoController</td><td>Obtiene información general del panel.</td></tr>
<tr><td>GET</td><td>/admin/asistencias</td><td>verAsistenciasController</td><td>Lista asistencias registradas.</td></tr>
<tr><td>POST</td><td>/admin/agregar/profesor</td><td>agregarProfesorController</td><td>Agrega un nuevo profesor.</td></tr>
<tr><td>POST</td><td>/admin/agregar/estudiante</td><td>agregarestudianteController</td><td>Agrega un nuevo estudiante.</td></tr>
<tr><td>POST</td><td>/admin/agregar/curso</td><td>agregarCursoController</td><td>Crea un nuevo curso.</td></tr>
<tr><td>POST</td><td>/admin/asistencia/estudiante</td><td>agregarAsistenciaController</td><td>Registra asistencia de estudiante.</td></tr>
<tr><td>DELETE</td><td>/admin/profesor/eliminar/:id</td><td>eliminarProfesorController</td><td>Elimina un profesor por ID.</td></tr>
</table>

<h4>👨‍🏫 Panel de Profesor (<code>/profesor</code>)</h4>
<p>Requiere sesión válida con <code>validateTeacherSession</code>.</p>
<table>
<tr><th>Método</th><th>Ruta</th><th>Controlador</th><th>Descripción</th></tr>
<tr><td>GET</td><td>/profesor/index</td><td>getTeacherInfoController</td><td>Obtiene información del profesor.</td></tr>
<tr><td>POST</td><td>/profesor/agregar/tarea</td><td>postTeacherHomeworkController</td><td>Agrega una nueva tarea.</td></tr>
</table>

<h4>👤 Panel de Usuario (<code>/user</code>)</h4>
<p>Requiere sesión válida con <code>validateUserSession</code>.</p>
<table>
<tr><th>Método</th><th>Ruta</th><th>Controlador</th><th>Descripción</th></tr>
<tr><td>GET</td><td>/user/index</td><td>getUserInfoController</td><td>Obtiene información del usuario.</td></tr>
</table>

<h3>⚙️ Instalación</h3>
<ol>
  <li>Clonar el repositorio:
    <pre><code>git clone https://github.com/usuario/sistema-escolar.git</code></pre>
  </li>
  <li>Instalar dependencias:
    <pre><code>npm install</code></pre>
  </li>
  <li>Actualmente las variables de entorno no estan disponibles.</code>:
    <pre><code>PORT=3000
</pre>
  </li>
  <li>Iniciar servidor:
    <pre><code>npm start (o npm run dev)</code></pre>
  </li>
  
</ol>

<hr>

<!-- ENGLISH -->
<h2 id="en">🇬🇧 English</h2>

<p>
This project is a <strong>school management system</strong> built with <strong>Node.js</strong> and <strong>Express</strong>, focused on managing teachers, students, courses, and attendance, as well as interaction between administrators, teachers, and students.
</p>

<h3>🚀 Technologies Used</h3>
<ul>
  <li>Node.js + Express — Backend and routing.</li>
  <li>JWT — User authentication.</li>
  <li>Modular controllers — Logical code separation.</li>
  <li>Session validation middlewares — Access security.</li>
  <li>REST API — Structured communication between client and server.</li>
</ul>

<h3>📌 Routes & Features</h3>

<h4>🔑 Authentication</h4>
<table>
<tr><th>Method</th><th>Route</th><th>Controller</th><th>Description</th></tr>
<tr><td>POST</td><td>/login</td><td>loginController</td><td>Logs in and generates an authentication token.</td></tr>
<tr><td>POST</td><td>/register</td><td>registerController</td><td>Registers a new user.</td></tr>
</table>

<h4>🛠 Admin Panel (<code>/admin</code>)</h4>
<p>All admin routes require a valid session with <code>validateSession</code>.</p>
<table>
<tr><th>Method</th><th>Route</th><th>Controller</th><th>Description</th></tr>
<tr><td>GET</td><td>/admin/index</td><td>adminInfoController</td><td>Gets general admin panel info.</td></tr>
<tr><td>GET</td><td>/admin/asistencias</td><td>verAsistenciasController</td><td>Lists registered attendance.</td></tr>
<tr><td>POST</td><td>/admin/agregar/profesor</td><td>agregarProfesorController</td><td>Adds a new teacher.</td></tr>
<tr><td>POST</td><td>/admin/agregar/estudiante</td><td>agregarestudianteController</td><td>Adds a new student.</td></tr>
<tr><td>POST</td><td>/admin/agregar/curso</td><td>agregarCursoController</td><td>Creates a new course.</td></tr>
<tr><td>POST</td><td>/admin/asistencia/estudiante</td><td>agregarAsistenciaController</td><td>Registers student attendance.</td></tr>
<tr><td>DELETE</td><td>/admin/profesor/eliminar/:id</td><td>eliminarProfesorController</td><td>Deletes a teacher by ID.</td></tr>
</table>

<h4>👨‍🏫 Teacher Panel (<code>/profesor</code>)</h4>
<p>Requires a valid session with <code>validateTeacherSession</code>.</p>
<table>
<tr><th>Method</th><th>Route</th><th>Controller</th><th>Description</th></tr>
<tr><td>GET</td><td>/profesor/index</td><td>getTeacherInfoController</td><td>Gets teacher information.</td></tr>
<tr><td>POST</td><td>/profesor/agregar/tarea</td><td>postTeacherHomeworkController</td><td>Adds a new homework task.</td></tr>
</table>

<h4>👤 User Panel (<code>/user</code>)</h4>
<p>Requires a valid session with <code>validateUserSession</code>.</p>
<table>
<tr><th>Method</th><th>Route</th><th>Controller</th><th>Description</th></tr>
<tr><td>GET</td><td>/user/index</td><td>getUserInfoController</td><td>Gets user dashboard info.</td></tr>
</table>

<h3>⚙️ Installation</h3>
<ol>
  <li>Clone the repository:
    <pre><code>git clone https://github.com/username/school-system.git</code></pre>
  </li>
  <li>Install dependencies:
    <pre><code>npm install</code></pre>
  </li>
  <li>Environment variables are currently not available.:
   
  </li>
  <li>Start the server:
    <pre><code>npm start</code></pre>
  </li>
</ol>

<hr>

<p align="center">
  © 2025 - Sistema de Gestión Escolar / School Management System
</p>
