import React,{Component} from 'react';
import turista from '../img/tourist2.png'
import { NavLink } from 'react-router-dom';


class Principal extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h1 className="t1">Get started your exciting <span className="resaltado">Journey</span> With us.</h1>
                        <p>A team of esperienced tourism professionals will provide you with the best ad for your desire place.</p>
                        <NavLink className="nav-link"  to="tour"><input className="btn btn-warning" type="submit" value="Discover Now" /></NavLink>
                    </div>
                    <div id="img-hero" className="col-6">
                        <img src={turista} alt="turista" />
                    </div>
                </div>
            </div>
        )

    }
}

export default Principal;