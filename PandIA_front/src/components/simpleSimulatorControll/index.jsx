import {
  Container, Box, Button, Typography, Select,
  MenuItem, InputLabel, Grid, Slider, Input,
  FormControlLabel, Checkbox
} from '@mui/material';

import styles from "./styles.module.css";
import React from "react";

//local
import {Zones, ConsumerType, Months} from '../constants'

export default function SimpleSimulatorControll() {
  return (
    <Container className={styles.root}>
      <Typography variant="h7" component="h2" className={styles.titulo}>
        Real Time Mode
      </Typography>
      <Container className={styles.containerItens}>
        <Box className={styles.box}>
          <Container className={styles.paddingZone}>
            <InputLabel id="zone" className={styles.inputLabel}>
              Zone
            </InputLabel>
            <Select
              labelId="valueLabelZona"
              id="valueZona"
              className={styles.select}
              sx={{
                "&:after": {
                  borderBottomColor: " #0469FF",
                },
                "& .MuiSvgIcon-root": {
                  color: " #0469FF",
                },
              }}
            >
              {Zones.map((zone) => (
                <MenuItem key={zone.id} value={zone.id}>
                  {zone.name}
                </MenuItem>
              ))}
            </Select>
          </Container>
        </Box>

        <Box className={styles.box}>
          <Container className={styles.paddingCostumerType}>
            <InputLabel id="consumer-type" className={styles.inputLabel}>
              Consumer Type
            </InputLabel>
            <Select
              labelId="value-label-consumer-type"
              id="value-consumer-type"
              className={styles.select}
              sx={{
                "&:after": {
                  borderBottomColor: " #0469FF",
                },
                "& .MuiSvgIcon-root": {
                  color: " #0469FF",
                },
              }}
            >
              {ConsumerType.map((type) => (
                <MenuItem key={type.id} value={type.id}>
                  {type.name}
                </MenuItem>
              ))}
            </Select>
          </Container>
        </Box>

        <Box className={styles.box}>
          <Container className={styles.paddingInitialMonth}>
            <InputLabel id="initial-month" className={styles.inputLabel}>
              Initial Month
            </InputLabel>
            <Select
              labelId="value-label-initial-month"
              id="value-consumer-initial-month"
              className={styles.select}
              sx={{
                "&:after": {
                  borderBottomColor: " #0469FF",
                },
                "& .MuiSvgIcon-root": {
                  color: " #0469FF",
                },
              }}
            >
              {Months.map((month) => (
                <MenuItem key={month.id} value={month.id}>
                  {month.name}
                </MenuItem>
              ))}
            </Select>
          </Container>
        </Box>


        <Button variant="contained" className={styles.button}>
          Simulate
        </Button>
      </Container>
    </Container>
  );
}
