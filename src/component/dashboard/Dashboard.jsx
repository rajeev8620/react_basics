import './dashboard.css';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import ToDoList from "../todolist/ToDoList"

export default function Dashboard() {
    const showLinks = true;
    return (
        <div>
           <Header showLinks={showLinks}/>
           <ToDoList />
           <Footer /> 
        </div>
    )
}
