import "./MoviesBannerCard.scss"
import {Image} from "minista";
import Button from "@/components/Button";
import classNames from "classnames";

const MoviesBannerCard = (props) => {
    const {
        title,
        titleId,
        description,
        imgSrc,
        TitleTag = 'h2',
        isSmallPaddingY = false,
    } = props

    return (
        <div className="movies-banner-card">
            <Image src={imgSrc} className="movies-banner-card__image"/>
            <div className={classNames('movies-banner-card__inner', {
                'movies-banner-card__inner--small-padding-y': isSmallPaddingY,
            })}>
                <div className="movies-banner-card__body">
                    <TitleTag
                        className="movies-banner-card__title h3"
                        id={titleId}
                    >{title}</TitleTag>
                    <div className="movies-banner-card__description hidden-mobile">
                        <p>{description}</p>
                    </div>
                </div>
                <footer className="movies-banner-card__footer">
                    <Button
                        className="movies-banner-card__play-button"
                        label="Play Now"
                        iconName="play"
                        hasFillIcon
                    />
                    <div className="movies-banner-card__actions">
                        <Button
                            mode="black-06"
                            iconName="add"
                            label="Add"
                            isLabelHidden
                        />
                        <Button
                            mode="black-06"
                            iconName="like"
                            label="Like"
                            isLabelHidden
                        />
                        <Button
                            mode="black-06"
                            iconName="volume"
                            label="Mute"
                            isLabelHidden
                        />
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default MoviesBannerCard