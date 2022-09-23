import * as React from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    MonthView,
    Toolbar,
    DateNavigator,
    Appointments,
    AppointmentTooltip
} from '@devexpress/dx-react-scheduler-material-ui';
import Text from '../components/Text';
import { currentDate,dateToStr } from '../utils/func';

import dataSc from '../data/schedule';
import Nav from '../section/Nav';
import Box from '../components/Box';
import Footer from '../section/Footer';

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

const AppointmentTooltipStl = model =>{

    let start = model.appointmentData.startDate;
    let end = model.appointmentData.endDate;


    let time = `${start.getHours()<10 ? `0${start.getHours()}` : start.getHours()}:${start.getMinutes()<10 ? `0${start.getMinutes()}` : start.getMinutes()} - ${end.getHours()<10 ? `0${end.getHours()}` : end.getHours()}:${end.getMinutes()<10 ? `0${end.getMinutes()}` : end.getMinutes()} WIB`;

    let getYear = s => {
        return s ? start.getFullYear() : end.getFullYear()
    }

    let getMonth = s => {
        return s ? (start.getMonth() > 10 ? start.getMonth() : `0${start.getMonth()}`) : (end.getMonth() > 10 ? end.getMonth() : `0${end.getMonth()}`)
    }

    let getDate = s => {
        return s ? start.getDate() : end.getDate()
    }

    let startDate = `${getYear(true)}/${getMonth(true)}/${getDate(true)}`;
    let endDate = `${getYear(false)}/${getMonth(false)}/${getDate(false)}`;

    let date = `${dateToStr(startDate)} - ${dateToStr(endDate)}`

    console.log(date);
    return (
        <div className='px-8 py-2'>
            <div className='w-full h-4 rounded-lg bg-red mb-2'></div>
            <h5 className='text-gold font-bold text-xl flex items-center'>{model.appointmentData.title}</h5>
            <p className='text-black mt-2'>{time}</p>
            <p className='text-black opacity-50'>{date}</p>
            {model.appointmentData.note && (
                <div className='mt-6'>
                    <p className="text-black italic opacity-50 underline">Note</p>
                    <p className='text-black'>"{model.appointmentData.note}"</p>
                </div>
            )}
        </div>
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
                <MonthView/>
                <Appointments
                appointmentComponent={Appointment}/>
                <AppointmentTooltip
                contentComponent={AppointmentTooltipStl}
                showCloseButton/>
                </Scheduler>
            </Paper>
        </Box>
    </section>
    <Footer/>
    </>
);
