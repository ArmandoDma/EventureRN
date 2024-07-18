import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ExploreScreenStyle } from "../src/styles/ExploreScreenStyles";
import { getDateDay, getMonthDate, useGreeting, useImageChanger, usePhraseChanger } from "../hooks/useExplore";


export const ExploreScreen = () => {
  //functions to transform date function in days of the week, months and calculate the actual hour
  let printDay = getDateDay();
  let printMonth = getMonthDate();
  let date = new Date().getDate();
  let year = new Date().getFullYear();

  const greeting = useGreeting();
  const path = useImageChanger();
  const currentPhrase = usePhraseChanger();

  return (
    <View style={ExploreScreenStyle.vw}>
      <Text style={ExploreScreenStyle.txtDate}>
        {printDay + `, ${date} ` + printMonth + " " + year}
      </Text>
      <Text style={ExploreScreenStyle.saludo}>
        {greeting}{' '}{currentPhrase}{' '}
        <Image
          source={path}
          style={ExploreScreenStyle.emoji}
        ></Image>
      </Text>
    </View>
  );
};
