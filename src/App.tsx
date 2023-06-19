import * as React from "react";
import "./style.css";
import Link from "./components/Link";
import Button from "./components/Button";
import Container from "./components/Container";

export default function App() {
  function handleClick() {
    console.log("Button clicked");
  }

  return (
    <div>
      <p>Take me to</p>
      <Container>
        <Link href="https://google.com">Google</Link>
        <Button onClick={handleClick}>Click me</Button>
      </Container>
      <p>Start editing to see some magic happen {React.version} :)</p>
    </div>
  );
}
