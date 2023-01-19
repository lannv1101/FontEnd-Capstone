import { createGlobalStyle } from 'styled-components';
export const Globalstyle = createGlobalStyle`
html {
    scroll-behavior: smooth;
}
*{
    padding:0;
    margin:0;
    box-sizing:border-box;
}
.form-nav {
    max-width: 100%;
    width: 100%;
    height: 80px;
    padding: 3rem;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6));
    display: flex;
    align-items: center;
}
`;
