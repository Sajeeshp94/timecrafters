import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function SignUPPage() {
    return (
        <div>
            <form style={{ width: "100%" }}>
                <label htmlFor="fullname" />
                <input type="text" id="fullname" placeholder="Fullname" name="fullname" /><br />
                <span></span><br />
                <label htmlFor="email" />
                <input type="email" id="email" placeholder="Email" name="email" /><br />
                <span></span><br />
                <label htmlFor="password" />
                <input type="password" id="password" placeholder="Password" name="password" /><br />
                <span></span><br />
                <Link to="/login">
                    <Button>Create Account</Button>
                </Link>

            </form>
        </div>
    )
}