import { NearBindgen, near, call, view, UnorderedMap } from 'near-sdk-js';
import { Project } from './models/Project';
import { User } from './models/User';

@NearBindgen({})
class ProjectsContract {
  
  // Utilizar el modelo de proyecto para almacenar los proyectos
  Projects = new UnorderedMap<Project>('');

  // Utilizar el modelo de usuarios para almacenarlos
  Users = new UnorderedMap<User>('');

  @view({})
  getProjects(): UnorderedMap<Project>  {
    return this.Projects;
  }

  @call({})
  addProject({ id, fullName, projectName, description, category, maxAmount, term, actualAmount, socialNetworks, Rewards}): void {
    
    // Inicializar proyecto a crear
    let project: Project;

    // Instanciar modelo
    project = new Project();

    // Agregar los datos
    project.ID = id;
    project.FullName = fullName;
    project.ProjectName = projectName;
    project.Description = description;
    project.Category = category;
    project.MaxAmount = maxAmount;
    project.Term = term;
    project.ActualAmount = actualAmount;
    project.SocialNetworks = socialNetworks;
    project.Rewards = Rewards;

    // Añadir los datos a 
    this.Projects.set(id, project);

  }

}