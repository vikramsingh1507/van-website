import React from "react"
import {Link, useParams, useLocation} from "react-router-dom"


export default function VanDetail(){

    const params = useParams()
    const [vanData, setVanData] = React.useState(null)
    const location = useLocation()

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVanData(data.vans))
    }, [params.id])

    // below will test to see if location.state exists, if not, returns empty string
    const search = location.state?.search || ""

    const type = location.state?.type || "all"

    return (
        <div className="van-detail-container">
            <Link
                to={`..${search}`}
                relative="path"
                className="back-button"
            >
                &larr; <span>{`Back to ${type} vans`}</span>
            </Link>
            {vanData ? (
                <div className="van-detail"> 
                    <img src={vanData.imageUrl} alt="picture of van" />
                    <i className={`van-type ${vanData.type} selected`}>{vanData.type}</i>
                    <h2>{vanData.name}</h2>
                    <p className="van-price"><span>${vanData.price}</span>/day</p>
                    <p>{vanData.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>

            ) : <h2>Loading...</h2>}
        </div>

    )
}