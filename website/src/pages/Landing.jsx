import '../App.css';

export const Landing = () => {

    return(
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
            </head>
            <body style={{ paddingTop: 85 }}>
                <img src={require("../assets/FlightLogo2.png")} alt="Logo" height="550em" style={{textAlign:'center'}} ></img>
           
                <h2>Welcome to Fly by your Hart Airlines!</h2>
                
                <h3>Select your desired action from the dropdown menus above</h3>
                
            </body>
        </html>
    );
}