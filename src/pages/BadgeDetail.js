import React from 'react'
import Logo from "../images/platziconf-logo.svg"
import {Link} from "react-router-dom"
import Badge from "../components/Badge"
import DeleteModal from "../components/DeleteModal"

function useIncreseCount(max){
    const [count, setCount] = React.useState(0)
    if(count > max){
        setCount(0)
    }
    return [count, setCount]
}

export default function BadgeDetail(props) {
    const [count, setCount] = useIncreseCount(4)
    const badge = props.badge
    return (
            <div>
                <div className="BadgeDetails__hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <img src={Logo} alt="Logo"/>
                            </div>
                            <div className="col-6 BadgeDetails__hero-attendant-name">
                                <h1>{badge.firstName} {badge.lastName}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mb-4">
                    <div className="row">
                        <div className="col">
                            <Badge
                                firstName={badge.firstName}
                                lastName={badge.lastName}
                                email={badge.email}
                                jobTitle={badge.jobTitle}
                                twitter={badge.twitter}
                            />
                        </div>
                        <div className="col">
                            <h2>Actions</h2>
                            <button className="btn btn-success mb-2" onClick={()=>{setCount(count + 1)}}>Increase Count: {count}</button>

                            <div><Link className="btn btn-info mb-2" to={`/badges/${badge.id}/edit`}>Edit</Link></div>
                            <div><button className="btn btn-danger" onClick={props.onOpen}>Detele</button></div>
                            <DeleteModal isOpen={props.isOpen} onClose={props.onClose} DeleteBadge={props.DeleteBadge}/>
                        </div>
                    </div>
                </div>
            </div>
    )
}
