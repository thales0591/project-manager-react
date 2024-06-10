import { useHistory } from 'react-router-dom'
import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'

function NewProject() {

    const history = useHistory()

    function cratePost(project) {

        //initialize costs and services
        project.cost = 0;
        project.services = []

    }

    return (
        <div className={styles.newproject_container}>
            <h1>Crie seu projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm btnText="Criar Projeto"/>
        </div>
    )
}

export default NewProject