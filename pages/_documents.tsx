import { Html, Head, Main, NextScript } from 'next/document'
import {GlobalStyles} from "../styles/custom/GlobalStyles";

export default function Document() {
    return (
        <Html>
            <Head />
            <body>
                <Main />
                <GlobalStyles />
                <NextScript />
            </body>
        </Html>
    )
}