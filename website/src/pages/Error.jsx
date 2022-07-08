// Error page is a User tries to go somewhere not created yet
import '../App.css';

export const Error = () => {
    return(
        <>
        <body>
            <h1>This page you are trying to find seems to be broken</h1>
             <div >
                <img src={require("../assets/Broken.png")} alt="Sorry!" width="750em"></img>
             </div>
        </body>  {/* Image to load of a broken heart */}
        </>
        );
}