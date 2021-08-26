package main

import (
	"testing"
)

var fakeTmTable = Timetable{
	1: fakeWeek,
	2: fakeWeek,
	3: fakeWeek,
	4: fakeWeek,
}
var fakeWeek = Week{
	Monday:    fakeDay,
	Tuesday:   fakeDay,
	Wednesday: fakeDay,
	Thursday:  fakeDay,
	Friday:    fakeDay,
	Saturday:  fakeDay,
}
var fakeDay = Day{Morning: "morning", Afternoon: "afternoon"}

// Dumb test
func TestGetTodayTime(t *testing.T) {
	tmTable = fakeTmTable
	expected := fakeDay
	test := GetTodayTime()
	if test != expected {
		t.Errorf("GetTodayTime() = %v; want %v", test, expected)
	}
}
