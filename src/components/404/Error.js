import React ,{useEffect}from 'react'
import './Error.css'
function Error() {
    useEffect(() => {
        document.title = "404,Error"
      }, [])
    return (
        <div className="error">
            <h1>Error , Page Not Found</h1>
            <div className="error__body">
                <p>404</p>
            </div>
        </div>
    )
}

export default Error
