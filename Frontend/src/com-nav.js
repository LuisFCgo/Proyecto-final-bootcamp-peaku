import React,{Component} from 'react';
import logo from '../img/Logo.png';
import { NavLink } from 'react-router-dom';





class Barra extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg bg-light">
                        <div className="container-fluid">
                            <div className="col-4">
                                <img src= {logo} alt="Logotype" />
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </div>
                            {/*espacio de columna para enlaces*/}
                            <div className="col-5">
                                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                    <div className="navbar-nav">
                                        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                        <NavLink className="nav-link" href="#" to="/about_us">About us</NavLink>
                                        <NavLink className="nav-link" href="#" to="/destination">Destination</NavLink>
                                        <NavLink className="nav-link" href="#" to="tour">Tour</NavLink>
                                        <NavLink className="nav-link" to="/blog">Blog</NavLink>
                                    </div>
                                </div>
                            </div>
                            {/* <!--aca ya es espacio de columna para botones-->*/}
                            <div className="col-3">
                                <NavLink className="btn btn-warning"  type="submit" to="/login">login</NavLink>
                                <NavLink className="btn btn-warning"  type="submit" to="/register">sing up</NavLink>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }

}
export default Barra;