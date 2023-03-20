import {
    Button,
    Card,
    Row,
    Col,
  } from "react-bootstrap";
  import   './styles/dashboard.css';
const Dashboard =  () =>  {
 
    return ( 
 <div className="container">
    <div className="row">
        <div className="col-lg-4">
            <div className="card ">
                <div className="card-header ">
                    
                    <h5 className="card-title">TEMPERATURE</h5>
                </div>
               
            </div>
        </div>
        <div className="col-lg-4">
            <div className="card ">
                <div className="card-header ">
                    <h5 className="card-title">LUMINOSITE</h5>
                </div>
           
            </div>
        </div>
        <div className="col-lg-4 ">
            <div className="card ">
                <div className="card-header ">
                    <h5 className="card-title">HUMIDITE</h5>
                </div>
                
            </div>
        </div>
       
        <div className="col-lg-4"> <br/>
            <div className="card ">
                <div className="card-header ">
                    <h5 className="card-title">HUMIDITE</h5>
                </div>
               
            </div>
        </div>
        <div className="col-lg-8"><br/>
            <div className="card ">
                <div className="card-header ">
                    <h5 className="card-title">CONTROLE DU SYSTEME</h5>
                </div>
           
            </div>
        </div>
    </div>
    </div>
    
        
     
      
    )}

export default Dashboard;