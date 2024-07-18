import React, { useEffect, useState } from "react";

export function getDateDay() {
  const date = new Date();
  const days = [
    "Lunes",
    "Martes",
    "Miércoles",
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

export function getMonthDate() {
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
    if (date.getMonth() === index) {
      result = m;
    }
  });

  return result;
}

const phrases = ["Su Majestad", "Guapa", "Ing. Azucena"];
const timeIntervals = [
  { start: 0, end: 11, message: "Buenos Días" }, // 12 AM a 11 AM
  { start: 12, end: 17, message: "Buenas Tardes" }, // 12 PM a 5 PM
  { start: 18, end: 23, message: "Buenas Noches" }, // 6 PM a 11 PM
];
const paths = [
  require("../src/img/crown.png"),
  require("../src/img/heart.png"),
  require("../src/img/engineer-girl.png"),
];

export const useGreeting = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const hours = date.getHours();

      const currentGreeting =
        timeIntervals.find(({ start, end }) => hours >= start && hours <= end)
          ?.message || "";

      setGreeting(currentGreeting);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return greeting;
};

export const usePhraseChanger = () => {
  const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prevPhrase) => {
        const currentIndex = phrases.indexOf(prevPhrase);
        const nextIndex = (currentIndex + 1) % phrases.length;
        return phrases[nextIndex];
      });
    }, 5000); // Cambia la frase cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return currentPhrase;
};

export const useImageChanger = () => {
  const [path, setPath] = useState(paths[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPath((prevPath: any) => {
        const currentIndex = paths.indexOf(prevPath);
        const nextIndex = (currentIndex + 1) % paths.length;
        return paths[nextIndex];
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return path;
};
