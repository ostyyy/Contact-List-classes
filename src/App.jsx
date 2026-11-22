import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded'; 

const starIcon = {
    fontSize: { xs: '32px', sm: '48px' },
    color: '#ffe46b',
};

const container = {
    width: '100%',
    border: 4,
    borderRadius: 2,
    bgcolor: 'primary.main',
    borderColor: 'secondary.main',
};

function App() {
    return (
        <Box
            className="main-container"
            sx={{
                maxWidth: 1400,
                width: '100%',
                mx: 'auto',
                my: '30px',
                p: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '80px',
            }}
        >
            <Box
                sx={{
                    ...container,
                    p: '15px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 2,
                }}
            >
                <AutoAwesomeRoundedIcon sx={starIcon} />
                <Typography
                    variant="h1"
                    sx={{
                        color: 'primary.contrastText',
                    }}
                >
                    Contact List
                </Typography>

                <AutoAwesomeRoundedIcon sx={starIcon} />
            </Box>

            <Box
                className="content-container"
                sx={{
                    ...container,
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                    gap: '40px',
                    p: '40px 25px',
                }}
            >
                <Box
                    className="list-container"
                    sx={{
                        borderRight: 1,
                        borderColor: 'secondary.main',
                        p: '15px',
                        minWidth: 0,
                    }}
                >
                    <ContactList />
                </Box>

                <Box
                    className="form-container"
                    sx={{
                        p: '15px',
                        minWidth: 0,
                    }}
                >
                    <ContactForm />
                </Box>
            </Box>
        </Box>
    );
}
export default App;
