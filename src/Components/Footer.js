import React from 'react';

const footerStyle ={
    padding: "1rem",
    textAlign: "center",
    backgroundColor: "#DCD7D1"
}
function Footer(){
    return(
        <footer style={footerStyle}>
            Made with ❤ from <a href="https://benjee.com.ng" rel="noopener noreferrer" target="_Blank" ><b>Benjee</b></a>
        </footer>
    )
}

export default Footer;