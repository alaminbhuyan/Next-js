import React, {useEffect} from 'react'
import { useRouter } from 'next/router'

const ErrorPage = () => {
    const router = useRouter();

    // /Back to home page after 2 second
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 2000)
    }, []);

    return (
        <React.Fragment>
            <div>
                <h1 style={{ color: "red", textAlign: "center" }}>404 Error</h1>
                <button onClick={() => router.push('/')}>Back To Home</button>
            </div>
        </React.Fragment>
    )
}

export default ErrorPage;