package main

import (
	"math"
	"strings"
	"time"
)

// Day contains morning and afternoon hours
type Day struct {
	Morning   string `json:"morning"`
	Afternoon string `json:"afternoon"`
}

type dayOfWeek = string

const (
	Monday    dayOfWeek = "monday"
	Tuesday   dayOfWeek = "tuesday"
	Wednesday dayOfWeek = "wednesday"
	Thursday  dayOfWeek = "thursday"
	Friday    dayOfWeek = "friday"
	Saturday  dayOfWeek = "saturday"
)

// Week is a collection of days (monday to saturday)
type Week = map[dayOfWeek]Day

// Timetable represent the four weeks timetable
type Timetable = map[int]Week

var tmTable Timetable

var location, _ = time.LoadLocation("Europe/Paris")
var referenceWeek1Start = time.Date(2021, time.August, 2, 0, 0, 0, 0, location)

// GetTodayTime returns today's timetable
func GetTodayTime() Day {
	setTimeTable()
	return GetWeekTime()[getCurrentDay()]
}

// GetTodayTime returns the current week timetable
func GetWeekTime() Week {
	setTimeTable()
	return tmTable[getWeekNumber()]
}

func getWeekNumber() int {
	elapsed := time.Since(referenceWeek1Start)
	elapsedWeeks := hoursToWeeks(elapsed.Hours())
	return elapsedWeeks%4 + 1
}

func hoursToWeeks(h float64) int {
	return int(math.Floor(h / 168))
}

func getCurrentDay() dayOfWeek {
	now := time.Now()
	return strings.ToLower(now.Weekday().String())
}

func setTimeTable() {
	w1 := Week{
		Monday: {
			Afternoon: "13h30 - 19h30",
		},
		Tuesday: {
			Morning:   "8h30 - 12h30",
			Afternoon: "13h30 - 19h30",
		},
		Friday: {
			Morning:   "8h30 - 12h30",
			Afternoon: "13h30 - 19h30",
		},
		Saturday: {
			Morning:   "8h30 - 12h30",
			Afternoon: "13h30 - 18h30",
		},
	}

	w2 := Week{
		Tuesday: {
			Morning:   "9h - 12h",
			Afternoon: "14h - 19h",
		},
		Wednesday: {
			Morning:   "8h30 - 12h30",
			Afternoon: "13h30 - 19h30",
		},
		Thursday: {
			Morning:   "9h - 12h",
			Afternoon: "14h - 19h",
		},
		Friday: {
			Morning:   "8h30 - 12h",
			Afternoon: "13h30 - 19h",
		},
	}

	w3 := Week{
		Monday: {
			Morning:   "9h - 12h30",
			Afternoon: "13h30 - 19h30",
		},
		Tuesday: {
			Morning:   "8h30 - 12h",
			Afternoon: "14h - 19h",
		},
		Thursday: {
			Morning:   "9h - 12h",
			Afternoon: "13h30 - 19h",
		},
		Friday: {
			Morning:   "8h30 - 12h",
			Afternoon: "13h30 - 18h30",
		},
	}

	w4 := Week{
		Tuesday: {
			Morning:   "9h - 12h",
			Afternoon: "14h - 18h30",
		},
		Wednesday: {
			Morning:   "8h30 - 12h30",
			Afternoon: "13h30 - 19h30",
		},
		Thursday: {
			Morning:   "9h - 12h",
			Afternoon: "13h30 - 19h30",
		},
		Friday: {
			Morning:   "8h30 - 12h",
			Afternoon: "14h - 19h",
		},
	}

	tmTable = Timetable{1: w1, 2: w2, 3: w3, 4: w4}
}
