import './login.css'
import {useState} from 'react';
import Loader from "react-loader-spinner";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";

export default function Login() {
    const alert = useAlert();
    const history = useHistory();
    const [userinput, setUserInput] = useState({
        ordernumber: '',
        pin_number: ''
    });
    const [showLoader, setShowLoader] = useState(false);
    const [showOrderError, setOrderError] = useState(false);
    const [showInputPinError, setInputPinError] = useState(false);
    const updateuserinput = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
        setUserInput({...userinput,[name]: value})

    }
    /*const getuserdata=  (data)=> {
        setShowLoader(true);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        fetch('http://localhost:5000/user', requestOptions)
            .then(response => response.json())
            .then(data => {
                setShowLoader(false);
            });
    }*/
    const getuserdata = (inputval) =>{
        setShowLoader(true);
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };
        fetch(`http://localhost:5000/user?ordernumber=${inputval.ordernumber}&pin_number=${inputval.pin_number}`)
            .then(response => response.json())
            .then(data => {
                setShowLoader(false);
                if (data.length !== 0) {
                    alert.success("Login success!");
                    history.push('/dashboard');
                } else {
                    alert.error('Invalide user info!');
                }
            });
    }
    const formsubmitHandler = (e) =>{
        e.preventDefault();
        setOrderError(false);
        setInputPinError(false);
        if (!userinput.ordernumber) {
            setOrderError(true);
        }
        if (!userinput.pin_number) {
            setInputPinError(true);
        }
        if (userinput.ordernumber && userinput.pin_number) {
            setOrderError(false);
            setInputPinError(false);
            // postData(userinput);
            getuserdata(userinput);
        }
    }
    return (
        <div>
            <form onSubmit={(e)=>{formsubmitHandler(e)}} className="login">
                <div className="loginWrapper">
                    <div className="loginRight">
                        {showLoader && <Loader
                            style={{marginTop: '0px'}} 
                            type="ThreeDots" 
                            color="#00BFFF" 
                            height={80} 
                            width={80} />}
                        <div className="loginBox">
                            <label htmlFor="ordernumber">
                                Order Number *
                            </label>
                            <input 
                                name="ordernumber" 
                                id="ordernumber" 
                                placeholder="Order Number" 
                                className="loginInput"
                                value={userinput.ordernumber}
                                onChange={(e)=>updateuserinput(e)} />
                            {showOrderError && <span className="errorMsg">Order Input is required!</span>}
                            <label htmlFor="pin_number">
                                Pin Number *
                            </label>
                            <input 
                                name="pin_number" 
                                id="pin_number" 
                                placeholder="Pin Number" 
                                className="loginInput"
                                value={userinput.pin_number}
                                onChange={(e)=>updateuserinput(e)} />
                            {showInputPinError && <span className="errorMsg">Input pin is required!</span>}
                            <button
                                style={{marginTop:'10px', marginLeft: '30%'}} 
                                className="loginButton">
                                Log In
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
