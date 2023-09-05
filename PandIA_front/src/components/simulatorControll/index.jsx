import {
    Container, Box, Button, Typography, Select,
    MenuItem, InputLabel, Grid, Slider, Input,
    FormControlLabel, Checkbox
} from '@mui/material';

import styles from './styles.module.css'
import React, {UseState} from 'react';

//local
import {Zones, ConsumerType, Months} from '../constants'

const marks = [
    {
      value: 0,
    }
  ];
  
function valuetext(value) {
    return `${value}%`;
}

export default function SimulatorControll() {
    const [preciptation, setPreciptation] = React.useState(0);
    const [populationChange, setPopulationChange] = React.useState(0);
    const [isChecked, setIsChecked] = React.useState(false);

    const handleSliderChange = (event, newValue) => {
        setPreciptation(newValue);
      };
    
    const handleInputChange = (event) => {
        setPreciptation(event.target.value === '' ? 0 : Number(event.target.value));
      };

    const handleSliderPopulationChange = (event, newValue) => {
        setPopulationChange(newValue);
      };
    
    const handleInputPopulationChange = (event) => {
        setPopulationChange(event.target.value === '' ? 0 : Number(event.target.value));
      };
    
      const handleChecked = (event) => {
        setIsChecked(event.target.checked)
      }

      const trackStyle = {
        width: '25%', // Largura do track até o mark 25
      };
    
      const extraClassName = populationChange["data-index"] === 0 ? "first-thumb" : "second-thumb";

    return (
        <Container className={styles.root}>
            <Typography variant="h7" component="h2" className={styles.titulo}>
                Digital Twin Mode
            </Typography>
            <Container className={styles.containerItens}>
                <Box className={styles.box}>
                    <Container className={styles.paddingZone}>
                        <InputLabel id="zone" className={styles.inputLabel}>Zone</InputLabel>
                        <Select
                            labelId="valueLabelZona"
                            id="valueZona"
                            className={styles.select}
                            sx={{"&:after": {
                                borderBottomColor: " #0469FF",
                              },
                              "& .MuiSvgIcon-root": {
                                color: " #0469FF",
                               
                              },}}
                        >
                            {Zones.map(zone =>
                                <MenuItem key={zone.id} value={zone.id}>{zone.name}</MenuItem>
                            )}

                        </Select>
                    </Container>
                </Box>

                <Box className={styles.box}>
                    <Container className={styles.paddingCostumerType}>
                        <InputLabel id="consumer-type" className={styles.inputLabel}>Consumer Type</InputLabel>
                        <Select
                            labelId="value-label-consumer-type"
                            id="value-consumer-type"
                            className={styles.select}
                            sx={{"&:after": {
                                borderBottomColor: " #0469FF",
                              },
                              "& .MuiSvgIcon-root": {
                                color: " #0469FF",
                               
                              },}}
                        >
                            {ConsumerType.map(type =>
                                <MenuItem key={type.id} value={type.id}>{type.name}</MenuItem>
                            )}
                        </Select>
                    </Container>
                </Box>

                <Box className={styles.box}>
                    <Container className={styles.paddingInitialMonth}>
                        <InputLabel id="initial-month" className={styles.inputLabel}>Initial Month</InputLabel>
                        <Select
                            labelId="value-label-initial-month"
                            id="value-consumer-initial-month"
                            className={styles.select}
                            sx={{"&:after": {
                                borderBottomColor: " #0469FF",
                              },
                              "& .MuiSvgIcon-root": {
                                color: " #0469FF",
                               
                              },}}
                        >
                            {Months.map(month =>
                                <MenuItem key={month.id} value={month.id}>{month.name}</MenuItem>
                            )}
                        </Select>
                    </Container>
                </Box>

                <Box className={styles.box} disabled={isChecked}>
                    <Container  disabled={isChecked} className={styles.paddingFinalMonth} >
                        <InputLabel id="final-month" className={styles.inputLabel} disabled={isChecked}>Final Month</InputLabel>
                        <Select
                            labelId="value-label-final-month"
                            id="value-final-month"
                            className={styles.select}
                            disabled={isChecked}
                            sx={{"&:after": {
                                borderBottomColor: " #0469FF",
                              },
                              "& .MuiSvgIcon-root": {
                                color: " #0469FF",
                               
                              },}}
                        >
                            {Months.map(month =>
                                <MenuItem key={month.id} value={month.id}>{month.name}</MenuItem>
                            )}
                        </Select>
                    </Container>
                </Box>

                <Box className={styles.boxSlider}>
                    <Container>
                        <InputLabel id="precipitation" className={styles.inputLabelSlider}>Preciptation</InputLabel>
                            <Grid className={styles.paddingSliderPrecipitation}>
                                    <Slider  
                                        max={100} min={-100} 
                                        value={preciptation}
                                        onChange={handleSliderChange}
                                        className={styles.sliderPrecipitation}
                                        aria-labelledby="input-slider"
                                        sx={{
                                            '& .MuiSlider-thumb': {
                                                width: "17px",
                                                height: "23px",
                                                borderRadius: "15px",
                                                border: "1px solid #000",
                                                background: "var(--white, #FFF)",
                                                
                                            },
                                            '& .MuiSlider-rail': {
                                                color: "#7d7575",
                                                height: "12px",
                                                width: "154px",
                                                border: "1px solid black"
                                            },
                                            '& .MuiSlider-track': {
                                                
                                                height: "12px",
                                                width: "154px",
                                                border: "1px solid black",
                                            },
                                        }}
                                    />
                            
                                
                                    <Input
                                    value={preciptation}
                                    onChange={handleInputChange}
                                        size="small"
                                        inputProps={{
                                            step: 1,
                                            min: -100,
                                            max: 100,
                                            type: 'number',
                                            'aria-labelledby': 'input-slider',
                                        }}
                                        className={styles.typography}
                                        style={{width: "50px"}}
                                    />
                                    <Typography className={styles.typographyPercent}>%</Typography>
                            </Grid>
                    </Container>
                </Box>

                <Box className={styles.boxSlider}>
                    <Container>
                        <InputLabel id="typography-precicpitation" className={styles.inputLabelSlider}>Population Change</InputLabel>
                        <Grid className={styles.paddingSliderPrecipitation}>
                            <Slider
                                max={100} min={-100}
                                step={1}
                                value={populationChange}
                                onChange={handleSliderPopulationChange}
                                aria-labelledby="input-slider"
                                className={styles.sliderPopulationChange}
                                sx={{
                                    '& .MuiSlider-thumb': {
                                        width: "6px",
                                        height: "23px",
                                        flexShrink: "0",
                                        borderRadius: "15px",
                                        border: "1px solid #000",
                                        background: "var(--white, #FFF)",
                                        "&.first-thumb ": {
                                            background: "var(--white, #FFF)",
                                          },
                                          "&.second-thumb ": {
                                            background: "red",
                                          }
                                    },
                                    '& .MuiSlider-rail': {
                                        color: "#7d7575",
                                        height: "12px",
                                        width: "154px",
                                        border: "1px solid black",
                                    },
                                    '& .MuiSlider-track': {
                                        // color: 'linear-gradient(to right, #1976d2 50%, #ccc 50%)',
                                        height: "12px",
                                        width: "154px",
                                        border: "1px solid black",
                                        
                                    },
                                    '& .MuiSlider-mark': {
                                        backgroundColor: '#000',
                                        height:"15px",
                                        width: "2px",
                                        borderRadius: "2px",
                                        '&.MuiSlider-markActive': {
                                          opacity: 1,
                                          backgroundColor: '#000',
                                        },
                                    }
                                }}
                                marks={marks}
                            />
                            <Input
                                value={populationChange}
                                onChange={handleInputPopulationChange}
                                size="small"
                                inputProps={{
                                    step: 1,
                                    min: -100,
                                    max: 100,
                                    type: 'number',
                                    'aria-labelledby': 'input-slider',
                                }}
                                className={styles.typography}
                                style={{width: "50px"}}
                            />
                            <Typography className={styles.typographyPercent}>%</Typography>
                        </Grid>
                    </Container>
                </Box>

                <Button variant="contained" className={styles.button}>Simulate</Button>
            </Container>
            <FormControlLabel label="Month Gap" control={<Checkbox className={styles.checkbox} onChange={handleChecked} value="on" color="default" iconstyle={{ color: 'black' }} sx={{
                "&$checked": {
                    "& .MuiIconButton-label": {
                      position: "relative",
                      zIndex: 0,
                      border: "1px solid #bbbbbb",
                      borderRadius: 3,
                      backgroundColor: "green",
                    },
                    "& .MuiIconButton-label:after": {
                      content: '""',
                      left: 4,
                      top: 4,
                      height: 15,
                      width: 15,
                      position: "absolute",
                      backgroundColor: "green",
                      zIndex: -1,
                      borderColor: "transparent"
                    }
                  },
            }} />} className={styles.formControlLabel} />
        </Container>
    )
}