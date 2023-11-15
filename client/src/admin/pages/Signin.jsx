import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function SignInPage(){
    return(
        <div>
            <form style={{ width: "100%" }}>
                <label htmlFor="email" />
                <input type="email" id="email" placeholder="Email" name="email" /><br />
                <span></span><br />
                <label htmlFor="password" />
                <input type="password" id="password" placeholder="Password" name="password" /><br />
                <span></span><br />
                <Link to="/dashboard">
                    <Button>Sign In</Button>
                </Link>

            </form>
        </div>
    )
}