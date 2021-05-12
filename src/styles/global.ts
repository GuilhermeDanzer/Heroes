import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

#root {
    min-height: 100vh;
}

*{
  margin:0;
  padding:0;
  box-sizing:border-box;

}

a{
  text-decoration:none;
  color:white;
}
body{
  

  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size:cover;
  font-size:14px;
  color:#fff;
  font-family:'Bungee', sans-serif;

}


`