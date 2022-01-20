import React, {Component} from 'react';
import { useState } from 'react';
import './login1.css';
import logo from './img/LogoAlta.png';
import background from './img/Background.png';
import vector from './img/Vector.png';
import { Link} from 'react-router-dom'

class Login1 extends Component {
    handleClick = (e) =>{
        const [details] = useState({email: "", password: ""});
        e.preventDefault();
        Login1(details);
        
    }
render(){
    return (
        <div className="login1">
            <div className='container-left1'>
                    <div><img src={logo} alt='Logo' className='logo1'></img></div>
                    <form className='login-form1'>
                    <div>
                        <label>Tên đăng nhập*</label><br />
                        <input className='email1' type="email"/><br/>
                    </div>
                    <div>
                        <label>Mật khẩu*</label><br/>
                        <input className='password1' type="password"></input>
                    </div>
                    <div><img src={vector} alt='Vector' className ='eye-flash1'></img></div>                  
                    <div>
                        <Link className="text-link2" to="/loginerror">
                            <button className='btn-login1' onClick={this.handleClick}>Đăng nhập</button>
                        </Link>
                    </div>
                    <div>
                        <Link className="text-link3" to="/forgot">
                            <span className=" forgot-password1">Quên mật khẩu</span>
                        </Link>
                    </div>
                </form>
            </div>
            <div className='container-right1'>
                <img src={background} alt='background'className='background1'></img>
                <div className='container-Text1'>
                    <p className='text1'>Hệ thống</p><br />
                    <div className='text2'>QUẢN LÝ XẾP HÀNG</div>
                </div>
            </div>                
        </div>
    );
    }
}

export default Login1