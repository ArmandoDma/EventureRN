import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

function getDateDay() {
  const date = new Date();
  const days = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
  ];
  let result = null;

  days.forEach((dt, index) => {
    const day = index + 1;
    if (date.getDay() === day) {
      result = dt;
    }
  });

  return result;
}

function getMonthDate() {
  const date = new Date();
  let result = null;
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  months.forEach((m, index) => {
    //const a = index+1;
    //const month = a>=10 ? ''+a : '0'+a;
    if (date.getMonth() === index) {
      result = m;
    }
  });

  return result;
}

export const ExploreScreen = () => {
  //functions to transform date function in days of the week, months and calculate the actual hour
  let printDay = getDateDay();
  let printMonth = getMonthDate();
  let date = new Date().getDate();
  let year = new Date().getFullYear();  

  //calcHourToGreeting
  const [greeting, setGreeting] = useState('');

  const timeIntervals = [
    { start: 0, end: 11, message: 'Buenos días' }, // 12 AM a 11 AM
    { start: 12, end: 17, message: 'Buenas tardes' }, // 12 PM a 5 PM
    { start: 18, end: 23, message: 'Buenas noches' } // 6 PM a 11 PM
  ];

  const calcHourToSaludo = () => {
    const interval = setInterval(() => {
      const date = new Date();
      const hours = date.getHours();

      const currentGreeting = timeIntervals.find(({ start, end }) => hours >= start && hours <= end)?.message || '';

      setGreeting(currentGreeting);
    }, 1000);

    return () => clearInterval(interval);
  };

  useEffect(() => {
    const cleanup = calcHourToSaludo();
    return cleanup;
  }, []);

  return (
    <View style={style.vw}>
      <Text style={style.txtDate}>
        {printDay + `, ${date} ` + printMonth + " " + year}
      </Text>
      <Text style={style.saludo}>{greeting} Ing. Azucena</Text>
    </View>
  );
};

const style = StyleSheet.create({
  vw: {
    margin: 30,
    marginTop: 50,
  },
  txtDate: {
    fontSize: 14,
    fontWeight: "400",
  },
  saludo: {
    fontSize: 16,
    fontWeight: "700",
  },
});
