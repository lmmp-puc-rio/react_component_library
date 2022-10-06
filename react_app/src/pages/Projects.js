// #  Local SubComponents & utils
import { CardProjects } from '../components/common'

// # Import Component Style
import './pages.css'
import { darkColors} from '../components/common';

const Projects = (props) => {

// Set Card Object
const data = {
    title: "Trecho 1",
    description: "Projeto de cimentação do Trecho 1",
    card_name: "another card",
    created_name: "Anna",
    modified_name: "Beatriz",
    created_data:"01/10/2022",
    modified_data:"18/10/2022",
  };

// Set Actions Buttons Card
const actionButtomCard = {actions:[{tooltip: "Edit Project",icon: "fas fa-edit",
                                    key: "edit_case_button_",
                                    backgroundColor: darkColors.yellow ,color: darkColors.white },
                                    {tooltip: "Delete Project",icon: "fas fa-trash",
                                    key: "delete_case_button_",
                                    backgroundColor: darkColors.red ,color: darkColors.white }
                                    ]}

    return (
        <div className="page">
            <CardProjects data={data} actionButtom={actionButtomCard} />
        </div>
        
    );
};

export default Projects;