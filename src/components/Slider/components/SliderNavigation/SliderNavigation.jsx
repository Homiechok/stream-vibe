import './SliderNavigation.scss'
import classNames from "classnames";
import Button from "@/components/Button";

const SliderNavigation = (props) => {
    const {
        className,
        id,
        hasPagination = false,
        /*
        * '' (default) | 'tile' | 'rounded'
        * */
        mode = '',
        /*
        * '' (default) | 'abs-bottom'
        * */
        position = '',
        isHiddenMobile,
        buttonMode = 'black-10',
        isWide = false,
        justifyContent,
    } = props

    return (
        <div
            className={classNames(className, 'slider-navigation', {
                [`slider-navigation--${mode}`]: mode,
                [`slider-navigation--${position}`]: position,
                [`slider-navigation--${justifyContent}`]: justifyContent,
                'hidden-mobile': isHiddenMobile,
                'slider-navigation--wide': isWide,
            })}
            id={id}
            data-js-slider-navigation=""
        >
            <Button
                className="slider-navigation__arrow-button slider-navigation__arrow-button--previous"
                mode={buttonMode}
                label="Previous slide"
                isLabelHidden
                iconName="arrow-left"
                extraAttrs={{
                    "data-js-slider-previous-button": "",
                }}
            />
            {hasPagination && (
                <div
                    className="slider-navigation__pagination"
                    data-js-slider-pagination=""
                />
            )}
            <Button
                className="slider-navigation__arrow-button slider-navigation__arrow-button--next"
                mode={buttonMode}
                label="Next slide"
                isLabelHidden
                iconName="arrow-right"
                extraAttrs={{
                    "data-js-slider-next-button": "",
                }}
            />
        </div>
    )
}

export default SliderNavigation