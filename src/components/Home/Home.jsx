import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProfileAction } from "../../redux/slice/user/userSlice"

const Home = () => {
    const dispatch = useDispatch()

    const onClickDispatchGetProfile = () => {
        console.log("test");

        // the hook useDispatch dispatches an action
        dispatch(getProfileAction())

    }

    // the hook useSelector fetches the state
    const user = useSelector((state) => state.user?.profile?.users?.[0])

    return (
        <>
            <div>Home Page</div>
            <button onClick={onClickDispatchGetProfile}>Dispatch Get Profile</button>
            {
                user &&
                <div>User Details Fetched -- User Name is {user.firstName}</div>
            }
        </>
    )
}

export default Home