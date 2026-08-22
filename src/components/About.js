
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About Us</h1>
            <p>This is the About page.</p>
            <User name={"Anurag Das - (function)"} />
            <UserClass name={"Anurag Das - (class)"} />
        </div>
    );
};

export default About;