import React from "react";

class Contact extends React.Component {
    render() {
        return(
            <div style={{position: "absolute", left: "35%", top: "96%", transform: "translate(-50%, -50%)", color: "black", display: "flex", backgroundColor: "goldenrod", borderRadius: "5px", height: "35px", padding: "0px 5px"}}>
                <p style={{marginTop: "auto", marginBottom: "auto"}} >Designer: windikite@yahoo.com</p>
                <a href="https://github.com/windikite" style={{width: "45px", height: "30px", marginTop: "auto", marginBottom: "auto"}} >
                    <img src="/GitHub-Logo.png" style={{width: "45px", height: "30px", marginTop: "auto", marginBottom: "auto"}} />
                </a>
            </div>
        )
    }
}

export default Contact