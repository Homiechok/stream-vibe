import "./Ratings.scss"
import RatingView from "@/components/RatingView";

const Ratings = (props) => {
    const {
        items = [],
    } = props

    return (
        <div className="ratings">
            <ul className="ratings__list">
                {items.map(({ title, value }, index) => (
                    <li className="ratings__item" key={index}>
                        <h4 className="ratings__title">{title}</h4>
                        <RatingView
                            label={value}
                            value={value}
                            isBig
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Ratings