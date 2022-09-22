import * as React from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    MonthView,
    Toolbar,
    DateNavigator,
    Appointments,
    TodayButton,
    AppointmentTooltip
} from '@devexpress/dx-react-scheduler-material-ui';
import Text from '@/components/front/Text';

import { currentDate } from '@/utils/func';

import dataSc from '@/data/schedule';
import Nav from '@/section/Nav';
import Box from '@/components/front/Box';
import Footer from '@/section/Footer';

const Appointment = ({
    children, style, ...restProps
  }) => (
    <Appointments.Appointment
      {...restProps}
      style={{
        ...style,
        backgroundColor: '#A1743D',
        borderRadius: '8px',
      }}
    >
      {children}
    </Appointments.Appointment>
  );

  const AppointmentTooltipStl = ({
    children, style, ...restProps
  }) => {
    console.log({...restProps});
    return (
        <Appointments.Appointment
      {...restProps}
      style={{
        ...style,
        backgroundColor: '#A1743D',
        borderRadius: '8px',
      }}
    >
      {children}
    </Appointments.Appointment>
    )
  }

export default () => (

    <>
    <Nav/>
    <section className='py-20 bg-white'>
        <Box>
            <Text type='headOut' color={"white"} className="text-center mb-16 mt-10">KALENDER KEGIATAN</Text>
            <Paper>
                <Scheduler
                locale={'id-ID'}
                data={dataSc}
                >
                <ViewState
                    defaultCurrentDate={currentDate()}
                />
                <Toolbar/>
                <DateNavigator />
                <TodayButton/>
                <MonthView />
                <Appointments
                appointmentComponent={Appointment}/>
                <AppointmentTooltip
                showCloseButton
                appointmentComponent={AppointmentTooltipStl}/>
                </Scheduler>
            </Paper>
        </Box>
    </section>
    <Footer/>
    </>
);
