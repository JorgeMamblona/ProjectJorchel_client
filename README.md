# client
Clientside Jorchel project



<table>
  <thead>
    <tr>
      <th>URL</th>
      <th>DESCRIPCIÓN</th>
      <th>PROTECTED</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>/</code></td>
      <td>Index page</td>
      <td></td>
    </tr>
    <tr>
      <td><code>/sign-up</code></td>
      <td>Registro</td>
      <td></td>
    </tr>
    <tr>
      <td><code>/log-in</code></td>
      <td>Login page</td>
      <td></td>
    </tr>
    <tr>
      <td><code>*</code></td>
      <td>404</td>
      <td></td>
    </tr>
    <tr>
      <td><code>/profile</code></td>
      <td>Perfil de usuario</td>
      <td>Si · USER Y PM</td>
    </tr>
    <tr>
      <td><code>/proyects</code></td>
      <td>Vista de los proyectos</td>
      <td>Si · USER Y PM</td>
    </tr>
    <tr>
      <td><code>/proyect/create</code></td>
      <td>Crear proyecto</td>
      <td>Si · PM</td>
    </tr>
    <tr>
      <td><code>/proyect/:proyect_id</code></td>
      <td>Vista general del proyecto</td>
      <td>Si · USER Y PM</td>
    </tr>
    <tr>
      <td><code>/proyect/:proyect_id/edit</code></td>
      <td>Edición del proyecto</td>
      <td>Si · PM</td>
    </tr>
    <tr>
      <td><code>/proyect/:proyect_id/delete</code></td>
      <td>Borrar proyecto</td>
      <td>Si · PM</td>
    </tr>
    <tr>
      <td><code>/task/create</code></td>
      <td>Crear tarea</td>
      <td>Si · PM</td>
    </tr>
    <tr>
      <td><code>/task/:task_id</code></td>
      <td>Vista de una tarea de un proyecto</td>
      <td>Si · USER Y PM</td>
    </tr>
    <tr>
      <td><code>/task/:task_id/edit</code></td>
      <td>Editar tarea</td>
      <td>Si · USER Y PM</td>
    </tr>
    <tr>
      <td><code>/task/:task_id/delete</code></td>
      <td>Eliminar tarea</td>
      <td>Si · PM</td>
    </tr>
  </tbody>
</table>
