import Router from "next/router";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';


import { useEffect, useState} from "react";
import { Box } from 'rebass';

//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done())

const Loading = () => {
    return (
        <></>
    )
}

export default Loading;