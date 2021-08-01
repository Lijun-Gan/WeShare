import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import UserCard from '../UserCard'
import FollowBtn from '../FollowBtn'
import LoadIcon from '../../images/loading.gif'
import { getSuggestions } from '../../redux/actions/suggestionsAction'

const RightSideBar = () => {
    const { auth, suggestions } = useSelector(state => state)
    const dispatch = useDispatch()

    return (
        <div className="mt-3">
            <UserCard user={auth.user} />

            <div className="d-flex justify-content-between align-items-center my-2">
                <h5 className="text-danger">Suggestions for you</h5>
                {
                    !suggestions.loading &&
                    <i className="fas fa-redo" style={{cursor: 'pointer'}}
                    onClick={ () => dispatch(getSuggestions(auth.token)) } />
                }
            </div>

            {
                suggestions.loading
                ? <img src={LoadIcon} alt="loading" className="d-block mx-auto my-4" />
                : <div className="suggestions">
                    {
                        suggestions.users.map(user => (
                            <UserCard key={user._id} user={user} >
                                <FollowBtn user={user} />
                            </UserCard>
                        ))
                    }
                </div>
            }

            <div style={{opacity: 0.5}} className="my-2" >
     
            <div className="d-flex justify-content-between px-4 py-2">
						<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/lijun-gan/" ><i className="fa fa-linkedin"></i></a>
						<a target="_blank" rel="noreferrer" href="https://github.com/Lijun-Gan"><i className="fa fa-github"></i></a>
						<a target="_blank" rel="noreferrer" href="https://angel.co/u/lijun-gan"><i className="fa fa-angellist"></i></a>
						<a target="_blank" rel="noreferrer" href="mailto:gan.lijun.glj@gmail.com"><i className="fa fa-envelope"></i></a>
                </div>

                <br></br>

                <small>
                   &copy; 2021 WE-SHARE FROM LIJUN GAN
                </small>
            </div>

        </div>
    )
}

export default RightSideBar
