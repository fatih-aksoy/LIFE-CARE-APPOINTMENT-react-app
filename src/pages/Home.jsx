import { useState } from "react";
import AppointmentList from "../components/AppointmentList";
import Doctors from "../components/Doctors";
import { appointmentData } from "../helper/data";

const Home = () => {
  // ! normalde patient  verileri state kullanilarak API den cekilir fakat suan bizde mock data var. Data.js de bize default olarak verilmis hasta verileri var. o halde soyle yazilir ilk basta const [appointment, setAppointment]=useState(appointmentData)

  const [appointments, setAppointments] = useState(appointmentData);

  console.log(appointments);

  return (
    <main className="text-center mt-2">
      <h1 className="display-5 text-danger">LIFE&CARE HOSPITAL</h1>
      <Doctors apps={appointments} setApps={setAppointments} />
      <AppointmentList apps={appointments} setApps={setAppointments} />
    </main>
  );
};

export default Home;
