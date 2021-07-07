import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Modal, Checkbox } from '@material-ui/core';

import styled from 'styled-components';

const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 5px;
    background-color: black;
    color: white;
    h1 {
        font-size: 1.4rem;
        font-weight: 800;
        padding: 6px;
    }
    button {
        border-radius: 10px;
        background-color: white;
        color: black;
        margin-right: 10px;
    }
`;

const Header = props => {
    const [open, setOpen] = useState(false);
    const [checked, setChecked] = useState(false);

    const modalStyles = makeStyles({
        paper: {
            position: 'absolute',
            right: '1%',
            top: '10%',
            width: 400,
            backgroundColor: 'white',
            border: '1px solid black',
            padding: 10,
        },
    });

    const classes = modalStyles();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <StyledHeader>
            <h1>Cool NASA Photos</h1>
            <button type="button" onClick={() => handleOpen()}>
                About This
            </button>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div className={classes.paper}>
                    <h2 id="simple-modal-title">Lambda Projects</h2>
                    <p id="simple-modal-description">
                        Thank you for checking this project out. The following
                        are currently being used to create this wonderful little
                        project.
                        <br />
                        <br />
                        <ul>
                            <li>React</li>
                            <li>NASA Photo Of The Day API</li>
                            <li>Material UI (for this modal)</li>
                            <li>Styled Components</li>
                            <li>React DatePicker Component</li>
                        </ul>
                        <br />
                        <br />
                        This project was built by{' '}
                        <a
                            target="_blank"
                            href="https://medium.com/@lucasbazemore"
                        >
                            Lucas
                        </a>{' '}
                        during{' '}
                        <a target="_blank" href="https://lambdaschool.com">
                            Lambda School
                        </a>
                        <Checkbox
                            checked={checked}
                            onChange={event => setChecked(event.target.checked)}
                            value="checked"
                            inputProps={{
                                'aria-label': 'primary checkbox',
                            }}
                        />
                    </p>
                </div>
            </Modal>
        </StyledHeader>
    );
};

export default Header;
