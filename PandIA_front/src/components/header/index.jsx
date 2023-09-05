import { AppBar, Box, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import styles from './styles.module.css'
import Image from 'next/image'





export default function Header() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar className={styles.header} position="static">
                    <Toolbar>
                        <Typography component="div" sx={{ flexGrow: 1 }}>
                            <Image
                                src='/logoFigma.png'
                                alt="Logo"
                                width={146.5}
                                height={50}
                            />
                        </Typography>
                    
                        <Typography
                            variant="h4"
                            color='black'
                            component="div"
                            textAlign='center'
                            className={styles.title}
                            sx={{ flexGrow: 15 }}
                        >
                            Projeto PandIA
                        </Typography>

                        <IconButton
                            variant="contained"
                            className={styles.button}
                            sx={{ mr: 1 }}
                        >
                            DT
                        </IconButton>
                        <IconButton
                            // variant="contained" 
                            className={styles.button}
                            sx={{ mr: 1 }}
                        >
                            H
                        </IconButton>
                        <IconButton
                            variant="contained"
                            className={styles.button}

                        >
                            <AccountCircle />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}