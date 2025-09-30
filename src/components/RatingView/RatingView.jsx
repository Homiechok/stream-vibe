import "./RatingView.scss"
import classNames from "classnames";
import starsUnfilledImgSrc from '@/assets/images/rating/stars_unfilled.svg'
import starsFilledImgSrc from '@/assets/images/rating/stars_filled.svg'

const RatingView = (props) => {
    const {
        label,
        value = 5,
        isBig = false,
    } = props

    const ariaLabel = `Rating: ${value} stars`

    return (
        <div
            className={classNames("rating-view", {
                "rating-view--big": isBig,
            })}
            aria-label={ariaLabel}
            title={ariaLabel}
            style={{
                '--ratingViewValue': value,
            }}
        >
            <div className="rating-view__stars">
                <img
                    src={starsUnfilledImgSrc}
                    width={98}
                    height={18}
                    alt=""
                    className="rating-view__stars-unfilled"
                />
                <img
                    src={starsFilledImgSrc}
                    width={98}
                    height={18}
                    alt=""
                    className="rating-view__stars-filled"
                />
            </div>
            {label && (
                <div className="rating-view__label">{label}</div>
            )}
        </div>
    )
}

export default RatingView