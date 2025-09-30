import "./Support.scss"
import {Image} from "minista";
import Field from "@/components/Field/index.js";
import Checkbox from "@/components/Checkbox/index.js";
import Button from "@/components/Button/index.js";
import Select from "@/components/Select/index.js";

const Support = () => {
    const titleId = 'support-title'

    return (
        <section
            className="support container"
            aria-labelledby={titleId}
        >
            <div className="support__body">
                <div className="support__info">
                    <h1 className="support__title h2" id={titleId}>Welcome to our support page!</h1>
                    <div className="support__description">
                        <p>We're here to help you with any problems you may be having with our product.</p>
                    </div>
                </div>
                <Image
                    className="support__image"
                    src="/src/assets/images/support/1.png"
                />
            </div>
            <form
                className="support__form"
                action=""
            >
                <Field
                    className="support__form-cell"
                    label="First Name"
                    placeholder="Maksim"
                    isRequired
                />
                <Field
                    className="support__form-cell"
                    label="Last Name"
                    placeholder="Ushakov"
                />
                <Field
                    className="support__form-cell"
                    label="Email"
                    type="email"
                    placeholder="example@example.com"
                    isRequired
                />
                <Field
                    className="support__form-cell"
                    label="Phone Number"
                    type="tel"
                    placeholder="(999) 999-99-99"
                    inputMode="tel"
                    isRequired
                    mask="(000) 000-00-00"
                    renderBefore={(fieldControlClassName ) => (
                        <Select
                            label="Phone number prefix"
                            isLabelHidden
                            buttonClassName={fieldControlClassName}
                            options={[
                                { value: "+7", isSelected: true },
                                { value: "+1"},
                                { value: "+2"},
                                { value: "+3"},
                            ]}
                        />
                    )}
                />
                <Field
                    className="support__form-cell support__form-cell--wide"
                    label="Message"
                    type="textarea"
                    placeholder="Hello! I have an idea..."
                    isRequired
                />
                <div className="support__form-cell support__form-cell--wide support__form-cell--actions">
                    <Checkbox
                        className="support__form-agreement"
                        label="I agree with Terms of Use and Privacy Policy"
                        isRequired
                    />
                    <Button
                        className="support__form-submit-button"
                        type="submit"
                        label="Send Message"
                    />
                </div>
            </form>
        </section>
    )
}

export default Support