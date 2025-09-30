import './Footer.scss'
import Soc1als from "@/components/Soc1als";

const Footer = () => {
    const menuItems = [
        {
            title: 'Home',
            links: ['Categories', 'Devices', 'Pricing', 'FAQ'],
            href: '/',
        },
        {
            title: 'Movies',
            links: ['Gernes', 'Trending', 'New Release', 'Popular'],
            href: '/movies',
        },
        {
            title: 'Shows',
            links: ['Gernes', 'Trending', 'New Release', 'Popular'],
            href: '/movies',
        },
        {
            title: 'Support',
            links: ['Contact Us'],
            href: '/support',
        },
        {
            title: 'Subscription',
            links: ['Plans', 'Features'],
            href: '/subscriptions',
        },
        {
            title: 'Connect With Us',
            socialLinks: [
                {
                    label: 'Facebook',
                    iconName: 'facebook'
                },
                {
                    label: 'Twitter',
                    iconName: 'twitter'
                },
                {
                    label: 'LinkedIn',
                    iconName: 'linked-in'
                },
            ]
        },
    ]
    const extraLinks = ['Terms of Use', 'Privacy Policy', 'Cookie Policy']

    return (
        <footer className="footer">
            <div className="footer__inner container">
                <div className="footer__menu">
                    {menuItems.map(({ title, links, href, socialLinks }, index ) => (
                        <div className="footer__menu-column" key={index}>
                            <a href={href} className="footer__menu-title h6">{title}</a>
                            {links?.length > 0 && (
                                <ul className="footer__menu-list">
                                    {links.map(( link, index ) => (
                                        <li className="footer__menu-item" key={index}>
                                            <a href="/" className="footer__menu-link">{link}</a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {socialLinks?.length > 0 && (
                                <Soc1als
                                    className="footer__menu-soc1als"
                                    links={socialLinks}
                                />
                            )}
                        </div>
                    ))}
                </div>
                <div className="footer__extra">
                    <p className="footer__extra-copyright">
                        @<time dateTime="2023">2023</time> streamvib, All Rights Reserved
                    </p>
                    <div className="footer__extra-links">
                        {extraLinks.map(( link, index ) => (
                            <a href="/" className="footer__extra-link" key={index}>{link}</a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
