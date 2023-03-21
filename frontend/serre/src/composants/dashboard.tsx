import {
    Button,
     
    Row,
    Col,
  } from "react-bootstrap";
  import   './styles/dashboard.css';
  import temp from "../assets/high-temperature.png";
  import sun from "../assets/sun.png";
  import humid from "../assets/humidity.png";
  import humidity from "../assets/humid_sol.png";
  import { useEffect, useState } from "react";
const Dashboard =  () =>  {
    const [donnees, setDonnee]= useState<any>(null);
    useEffect(() => {
        fetch("http://localhost:5173/real-time.json")
          .then((res) => res.json())
          .then((res) => {
            setDonnee(res);
            console.log(res);
          });
      }, []);
    return ( 
 <div className="container ">
    <div className="row">
        <div className="col-lg-4">
            <div className=" card card_ ">
                <div className=" ">
                    
                    <h5 className=" card-title">TEMPERATURE</h5>
                </div>
                <div>
                    <img className="img-temp" src={temp} alt="" />
                </div>
                <div className="cont-temp">
                {donnees?.map((donnee: any) => (
             
                <p className="real-time" >{donnee.temp_serre}  °C</p> 
            
              
            ))}
               
            </div>
            </div>
        </div>
        <div className="col-lg-4">
            <div className=" card card_ ">
                <div className=" ">
                    <h5 className=" card-title">LUMINOSITE</h5>
                </div>
                <div>
                    <img className="img-temp" src={sun} alt="" />
                </div>
                <div className="cont-temp">
                {donnees?.map((donnee: any) => (
             
                <p className="real-time" >{donnee.lum} LUX</p> 
            
              
            ))}
               
            </div>
            </div>
        </div>
        <div className="col-lg-4 ">
            <div className=" card card_ ">
                <div className=" ">
                    <h5 className=" card-title">HUMIDITE</h5>
                </div>
                <div>
                    <img className="img-temp" src={humid} alt="" />
                </div>
                <div className="cont-temp">
                {donnees?.map((donnee: any) => (
             
                <p className="real-time" >{donnee.humid_serre} %</p> 
            
              
            ))}
               
            </div>
                
            </div>
        </div>
       
        <div className="col-lg-4"> <br/>
            <div className=" card card_ ">
            <div className="">
                    <img className="img-humid" src={humidity} alt="" />
                </div>
                <div className="cont-temp">
              
               
            </div>
                <div className=" ">
                {donnees?.map((donnee: any) => (
             
             <p className="real-time" > HUMIDITE : {donnee.humid_serre} %  </p> 
         
           
             ))}
                </div>
               
            </div>
        </div>
        <div className="col-lg-8"><br/>
            <div className=" card card_ ">
                <div className="h4">
                    <h4 className=" card-title ">CONTROLE DU SYSTEME</h4>
                    <div className="row">
                        
                        <div className="row-lg-4"></div>
                        <div className="row-lg-4"></div>
                        <div className="row-lg-4"></div>
                    </div>
                </div>
           
            </div>
        </div>
    </div>
    </div>
    
        
     
      
    )}

export default Dashboard;