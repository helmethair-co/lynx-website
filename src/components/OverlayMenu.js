import React from 'react';
import 'hamburgers/dist/hamburgers.css';
import '../styles/hamburger-settings.css';
import { menu } from '../data/menu';

export class OverlayMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuIsOpen: false
        };
    }

    openReactMobileMenu = () => {
        this.setState(prevState => ({
            menuIsOpen: !prevState.menuIsOpen
        }));
    }

    render() {
        const linkStyle = {
            color: 'white',
            textDecoration: 'none',
            fontSize: '2.75rem',
        };
        return (
                <button
                    style={{
                        margin: 0,
                        padding: 0,
                        height: '42px',
                        outline: 'none',
                        display: 'flex',
                        paddingRight: 20,
                    }}
                    onClick={this.openReactMobileMenu}
                    className={`hamburger hamburger--spin ${this.state.menuIsOpen &&
                        'is-active'}`}
                    type='button'
                >
                    <span className='hamburger-box'>
                        <span  style={{color: 'white'}}  className='hamburger-inner' style={{ zIndex: 99999 }} />
                    </span>
                    {this.state.menuIsOpen &&
                    <div
                        style={{
                            position: 'fixed',
                            width: '100%',
                            height: '100%',
                            top: 0,
                            left: 0,
                            backgroundSize: 'cover',
                            backgroundColor: 'black',
                            opacity: 0.9,
                        }}
                        className={'open'}
                    >
                        <div>
                            <ul
                                style={{
                                    color: 'white',
                                    listStyle: 'none',
                                    margin: '5rem',
                                    fontWeight: 100,
                                    fontSize: '3rem',
                                    lineHeight: '4rem',
                                }}
                            >
                                {Object.keys(menu).map(key => {
                                    const item = menu[key];
                                    if (item) {
                                        return (
                                            <li>
                                                <a style={linkStyle} href={item.path}>{item.label}</a>
                                            </li>
                                        );
                                    }
                                })}
                            </ul>
                        </div>
                    </div>}
                </button>
        );
    }
}
