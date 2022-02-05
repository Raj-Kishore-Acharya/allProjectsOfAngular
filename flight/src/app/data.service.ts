import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  info= [
    {
      direction: "Delhi-HYD",
      date: "7-1-2022",
      price: "1500",
      tickets: "35",
    },
    {
      direction: "bnglr-HYD",
      date: "8-1-2022",
      price: "1400",
      tickets: "35",
    },
    {
      direction: "Mumbai-HYD",
      date: "7-1-2022",
      price: "1600",
      tickets: "36",
    },
    {
      direction: "Panaji-HYD",
      date: "7-1-2022",
      price: "1500",
      tickets: "35",
    },
    {
      direction: "Kolkata-HYD",
      date: "7-1-2022",
      price: "1500",
      tickets: "35",
    },
    {
      direction: "Delhi-Kerala",
      date: "7-1-2022",
      price: "1500",
      tickets: "35",
    },
    {
      direction: "Bnglr-Ahmedabad",
      date: "7-1-2022",
      price: "1500",
      tickets: "35",
    },
    {
      direction: "Jaipur-HYD",
      date: "7-1-2022",
      price: "1500",
      tickets: "35",
    },
  ]
  information=[
    {
      FlightNo:"123",
      From: "HYD",
      To: "Bnglr",
      Departs: "19:22",
      Arrives : "22:36"

    },
    {
      FlightNo:"111",
      From: "HYD",
      To: "Pune",
      Departs: "19:22",
      Arrives : "22:36"

    },
    {
      FlightNo:"222",
      From: "Bnglr",
      To: "Delhi",
      Departs: "19:22",
      Arrives : "22:36"

    },
    {
      FlightNo:"999",
      From: "HYD",
      To: "Panaji",
      Departs: "19:22",
      Arrives : "22:36"

    },
    {
      FlightNo:"809",
      From: "Jaipur",
      To: "Delhi",
      Departs: "19:22",
      Arrives : "22:36"

    },
    {
      FlightNo:"444",
      From: "HYD",
      To: "Jaipur",
      Departs: "19:22",
      Arrives : "22:36",
      comments: "On Time"

    },
    {
      FlightNo:"567",
      From: "Pune",
      To: "Bnglr",
      Departs: "19:22",
      Arrives : "22:36"

    },
    {
      FlightNo:"254",
      From: "Kashmir",
      To: "Bnglr",
      Departs: "19:22",
      Arrives : "22:36"

    }
  ]
  regular=[
    {
      direction: "Delhi-HYD",
      date: "7-1-2022",
      price: "1500",
      tickets: "35",
      comments : "Landed"
    },
    {
      direction: "bnglr-HYD",
      date: "8-1-2022",
      price: "1400",
      tickets: "35",
      comments: "On Time"
    },
    {
      direction: "Mumbai-HYD",
      date: "7-1-2022",
      price: "1600",
      tickets: "36",
      comments : "Landed"
    },
    {
      direction: "Panaji-HYD",
      date: "7-1-2022",
      price: "1500",
      tickets: "35",
    },
    {
      direction: "Kolkata-HYD",
      date: "7-1-2022",
      price: "1500",
      tickets: "35",
      comments : "Landed"
    },
    {
      direction: "Delhi-Kerala",
      date: "7-1-2022",
      price: "1500",
      tickets: "35",
      comments: "On Time"
    },
    {
      direction: "Bnglr-Ahmedabad",
      date: "7-1-2022",
      price: "1500",
      tickets: "35",
      comments : "Landed"
    },
    {
      direction: "Jaipur-HYD",
      date: "7-1-2022",
      price: "1500",
      tickets: "35",
      comments: "On Time"
    },
  ]
}


