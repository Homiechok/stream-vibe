import "./ReviewCard.scss"
import RatingView from "@/components/RatingView";
import Badge from "@/components/Badge";

const ReviewCard = (props) => {
    const {
        name,
        subtitle,
        description,
        ratingValue,
    } = props

    return (
        <div className="review-card">
            <header className="review-card__header">
                <div className="review-card__author">
                    <h4 className="review-card__name h6">{name}</h4>
                    <p className="review-card__subtitle">{subtitle}</p>
                </div>
                <Badge>
                    <RatingView
                        label={ratingValue}
                        value={ratingValue}
                    />
                </Badge>
            </header>
            <div className="review-card__body">
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ReviewCard