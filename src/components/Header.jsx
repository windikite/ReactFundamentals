import React from "react";

function header(){
    return <div style={{position: "relative", marginLeft: "auto", marginRight: "auto"}}>
        <img src="/trevenant.bmp" style={{position: "relative"}} />
        <h1 style={{position: "absolute", left: "50%", top: "2%", transform: "translate(-50%, -50%)", color: "white", textShadow: "0 0 5px green", fontSize: "75px"}}>Trevenant</h1>
    </div>
}

export default header