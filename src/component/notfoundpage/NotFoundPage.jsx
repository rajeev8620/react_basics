import './notfoundpage.css';
import { Link } from 'react-router-dom';
import PageNotFound from './../../assets/images/404-large.gif';


export default function NotFoundPage() {
    return (
        <div class="notfound">
          <img src={PageNotFound}  className="notfoundImg"/>
            <p style={{textAlign:"center"}}>
              <Link to="/">Go to Login </Link>
            </p>  
        </div>
    )
}
