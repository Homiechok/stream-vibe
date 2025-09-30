import "./Seasons.scss"
import AccordionGroup from "@/components/AccordionGroup/index.js";
import seasonItems from "@/components/Seasons/seasonItems.js";
import Accordion from "@/components/Accordion/index.js";
import EpisodeCard from "@/components/EpisodeCard/index.js";

const Seasons = () => {
    return (
        <AccordionGroup
            className="seasons"
            isOrderedList={false}
            mode="dark"
        >
            {seasonItems.map(({ title, subtitle, episodes }, index) => (
                <Accordion
                    title={title}
                    titleLevelClassName="h4"
                    subtitle={subtitle}
                    isArrowButton
                    id={`seasons-${index}`}
                    name="seasons"
                    isOpen={index === 0}
                    key={index}
                >
                    <ul className="seasons__list">
                        {episodes.map((episode, index) => (
                            <li className="seasons__item" key={index}>
                                <EpisodeCard {...episode} />
                            </li>
                        ))}
                    </ul>
                </Accordion>
            ))}
        </AccordionGroup>
    )
}

export default Seasons