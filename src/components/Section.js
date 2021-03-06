import React, { Fragment } from 'react';
import { useMediaQuery } from 'react-responsive';
import Image from 'gatsby-image';

import { Button, UniversalLink } from './Button';
import { WIDTH_THRESHOLD, CONTENT_MAX_WIDTH } from '../data/style';

const H3 = ({ children, style }) => (
    <h3 style={{
        fontSize: 21,
        fontFamily: 'Jost',
        marginTop: 0,
        marginBottom: 5,
        ...style,
    }}>{children}</h3>
)

const P = ({ children, style }) => (
    <p style={{
        marginTop: 0,
        marginBottom: 0,
        ...style,
    }}>{children}</p>
)

const SectionBase = ({children, style, className}) => (
    <section
        className={className}
        style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            // maxWidth: '80vw',
            ...style,
        }}>{children}
    </section>
)

export const Section = ({ title, body }) => (
    <SectionBase>
        <H3>{title}</H3>
        <P>{body}</P>
    </SectionBase>
)

export const SectionSeparator = () => <div style={{
    minWidth: 40,
    maxWidth: 40,
    minHeight: 40,
    maxHeight: 40,
}}></div>

const LinkWrapper = ({link, children}) => (
    <Fragment>
        { link
            ? <UniversalLink link={link}>{children}</UniversalLink>
            : children
        }
    </Fragment>
)

const SectionWithImage = ({title, text, image, link, children}) => {
    const maxWidth = (CONTENT_MAX_WIDTH - 40) / 2
    return (
        <SectionBase
            style={{
                alignItems: 'flex-start',
                maxWidth,
            }}
        >
            {image &&
                <LinkWrapper link={link}>
                    <Image
                        fluid={image}
                        className='section-image'
                        style={{
                            maxWidth,
                            height: 'auto',
                            marginBottom: 15,
                        }}
                    />
                </LinkWrapper>
            }
            <div
                className={image ? 'layout' : undefined}
                style={{
                    paddingBottom: 20,
                }}
            >
                <H3>{title}</H3>
                <P>{text}</P>
            </div>
            <div
                className={image ? 'grid layout' : undefined}
                style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                }}
            >
            {children}
            </div>
        </SectionBase>
    )
}

export const SectionWithImageAndLink = ({ title, text, image, link, label }) => {
    return (
        <SectionWithImage title={title} text={text} image={image} link={link}>
            <Button link={link} label={label} border={true} />
        </SectionWithImage>
    )
}

export const SectionWithMultipleButtons = ({ title, text, image, link, buttons }) => {
    return (
        <SectionWithImage title={title} text={text} image={image} link={link} >
            {buttons.map(button =>
                <Button
                    link={button.link}
                    label={button.label}
                    border={true}
                    style={{
                        marginRight: 10,
                        marginBottom: 10,
                    }}
                />)}
        </SectionWithImage>
    )
}
