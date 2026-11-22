import { useDispatch } from 'react-redux';

import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { deleteContact, selectContact } from '../../store/slices/contactSlice';

const itemSx = {
    flex: 1,
    gap: 2,
    minWidth: 0,
    bgcolor: 'primary.light',
    border: '2px solid #50bccf',
    borderRadius: '6px',
    color: 'secondary.contrastText',
    '&:hover': {
        bgcolor: '#b4ffcd',
        borderColor: '#70e296',
    },
};

const avatarSx = {
    width: 60,
    height: 60,
    fontSize: '43px',
    fontWeight: 'bold',
    bgcolor: '#f2d9ff',
    color: '#ff7de3',
    border: '2px solid #d5c9db',
};

function ContactItem({ contact }) {
    const dispatch = useDispatch();

    const handleContactDelete = (event) => {
        event.stopPropagation();

        dispatch(deleteContact(contact.id));
    };

    const handleContactSelect = () => {
        dispatch(selectContact(contact));
    };

    const fullName = [contact.firstName, contact.lastName]
        .filter(Boolean)
        .join(' ');
    const display = fullName || contact.phone || contact.email || 'Unknown';
    const initial = fullName?.trim()?.[0]?.toUpperCase();

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                mb: '15px',
            }}
        >
            <ListItem
                className="contact-item"
                onDoubleClick={handleContactSelect}
                sx={itemSx}
            >
                <ListItemAvatar>
                    <Avatar sx={avatarSx}>
                        {initial || (
                            <AccountCircleIcon sx={{ fontSize: '45px' }} />
                        )}
                    </Avatar>
                </ListItemAvatar>

                <ListItemText>{display}</ListItemText>
            </ListItem>
            <IconButton
                aria-label="delete"
                onClick={handleContactDelete}
                sx={{ color: 'error.main' }}
            >
                <DeleteTwoToneIcon sx={{ fontSize: '35px' }} />
            </IconButton>
        </Box>
    );
}

export default ContactItem;
