// #  Local SubComponents & utils
import { CardCases } from '../components/common'

// # Import Component Style
import './pages.css'
import { darkColors} from '../components/common';

const Cases = (props) => {

// Set Card Object
const data = {
    img: "https://cenariosgas.editorabrasilenergia.com.br/wp-content/uploads/sites/6/2018/09/po%C3%A7o-transparente.png",
    title: "Trecho 1",
    description: "Projeto de cimentação do Trecho 1",
    card_name: "another card",
    created_name: "Anna",
    modified_name: "Beatriz",
    created_data:"01/10/2022",
    modified_data:"18/10/2022",
    fluids:["FPBNA 9.0 ppg", "Colchão Espaçador 10 ppg", "Pasta Conv. 15ppg"]
  };

// Set Actions Buttons Card
const actionButtomCard = {actions:[{tooltip: "Edit Case",icon: "fas fa-edit", callback: null,
                                    key: "edit_case_button_",route: "/",
                                    backgroundColor: darkColors.yellow ,color: darkColors.white },
                                    {tooltip: "Edit Project",icon: "fas fa-edit", callback: null,
                                    key: "edit_case_button_",route: "/",
                                    backgroundColor: darkColors.yellow ,color: darkColors.white },
                                    {tooltip: "Delete Case",icon: "fas fa-trash", callback: null,
                                    key: "delete_case_button_",route: "/",
                                    backgroundColor: darkColors.red ,color: darkColors.white },
                                    {tooltip: "Dupicate Case",icon: "fas fa-copy", callback: null,
                                    key: "duplicate_case_button_",route: "/",
                                    backgroundColor: darkColors.blue ,color: darkColors.white }
                                    ]}

    return (
        <div className="page">
            <CardCases data={data} actionButtom={actionButtomCard} />
        </div>
        
    );
};

export default Cases;