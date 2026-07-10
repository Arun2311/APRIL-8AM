import React, { useCallback, useEffect, useInsertionEffect, useLayoutEffect, useMemo } from 'react'

function Home() {


    useEffect(() => {

        console.log("useEffect");


    }, [])

    useLayoutEffect(() => {

        console.log("useLayoutEffect");


    }, [])

    useInsertionEffect(() => {

        console.log("useInsertionEffect");


    }, [])






    return (
        <div>

            {console.log("return")}

            <h1>Home</h1>



        </div>
    )
}


export default React.memo(Home)