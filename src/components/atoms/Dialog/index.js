import PropTypes from 'prop-types';
import styled from 'styled-components';

const DialogBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(1, 1, 1, 0.28);
`

const Dialog = styled.div`
    background: white;
    min-width: 20%;
    max-width: 100%;
    min-height: 150px;
    max-height: 100vh;
    border-radius: 10px;
    padding: 10px;
`;

const AtomDialog = ({children, onClose}) => {
    return <>
        <DialogBackground onClick={onClose}>
            <Dialog>{children}</Dialog>
        </DialogBackground>
    </>
}

AtomDialog.displayName = 'AtomDialog';
AtomDialog.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func,
}

export default AtomDialog;