import { createGlobalStyle } from "styled-components"
export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

*:before,
*:after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  font-family: "Roboto-Black", sans-serif;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
}

ul li {
  list-style: none;
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: "Roboto-Black", sans-serif;
  color: #000000;
}

div,
button,
a {
  font-family: "Roboto-Black", sans-serif;
}

@font-face {
  font-family: "Roboto-Black";
  src: local("Roboto-Black"), 
    url("..//fonts/Roboto-Black.ttf") format("ttf"),
  font-weight: 500;
  font-style: normal;
}
`
